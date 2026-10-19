#!/usr/bin/env node
/**
 * near-duplicate-science-stems.mjs — find Science question stems that repeat the same item
 * even though the exact `duplicate-stem` audit (scripts/audit-content.mjs) misses them.
 *
 * Walks every Science set as served (pictorial + overlays + hint fixes) and flags pairs where:
 *   R1 "same-norm":  stems are equal after strong normalisation (case, punctuation, quotes,
 *                    filler such as "which", "the", "is", "of these" dropped);
 *   R2 "stem":       stem tokens overlap heavily (Jaccard >= 0.75, both stems >= 5 tokens);
 *   R3 "item":       stem + options are very similar (token Jaccard >= 0.7, or LCS ratio >= 0.85).
 * Scope: pairs in the SAME grade by default (that is what a child meets in one bank);
 *   --all-grades also compares across grades.
 *
 * Usage: node scripts/near-duplicate-science-stems.mjs [--all-grades] [--json out.json] [--strict]
 *   --strict  exit 1 when any candidate is found (default: report only, exit 0).
 * Allow-list: scripts/audit-baselines/near-duplicate-science-allow.json  { "pairs": ["idA|idB", ...] }
 *   for pairs that look alike on the surface but test different facts.
 */
import { createJiti } from "jiti";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = process.env.MINDSTRONG_ROOT
  ? path.resolve(process.env.MINDSTRONG_ROOT)
  : path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const jiti = createJiti(path.join(ROOT, "scripts/x.mjs"), { alias: { "@": ROOT } });
const catalog = jiti(path.join(ROOT, "lib/prep/catalog.ts"));
const types = jiti(path.join(ROOT, "lib/prep/types.ts"));
const prep = jiti(path.join(ROOT, "lib/prep/index.ts"));
const args = process.argv.slice(2);
const allGrades = args.includes("--all-grades");

const FILLER = new Set(("a an the is are was were of to for in on at by this that these those which what who whom whose " +
  "choose select pick find identify correct best right most mainly usually generally typically following given " +
  "statement option options one it its be will would should does do did has have here there and or called known " +
  "example examples true").split(" "));
const baseNorm = (s) => String(s ?? "").normalize("NFKC").toLowerCase()
  .replace(/\*/g, "").replace(/[‘’]/g, "'").replace(/_{2,}/g, " blank ")
  .replace(/[^\p{L}\p{N}'+−=→°]+/gu, " ").replace(/\s+/g, " ").trim();
const toks = (s) => baseNorm(s).split(" ").filter((w) => w && !FILLER.has(w));
function jaccard(a, b) { const A = new Set(a), B = new Set(b); let i = 0; for (const x of A) if (B.has(x)) i++; return i / (A.size + B.size - i || 1); }
function ratio(a, b) {
  const n = a.length, m = b.length; if (!n && !m) return 1;
  const dp = Array.from({ length: n + 1 }, () => new Uint16Array(m + 1));
  for (let i = 1; i <= n; i++) for (let j = 1; j <= m; j++) dp[i][j] = a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
  return (2 * dp[n][m]) / (n + m);
}

const items = [];
for (const g of types.ALL_GRADES) {
  const pack = catalog.getPrepPack("science", g);
  if (!pack) continue;
  for (const c of pack.chapters) for (const set of c.sets) {
    if (!set.questions?.length) continue;
    for (const q of prep.getChapterSetQuestions("science", g, c.id, set.id)) {
      const stemT = toks(q.prompt);
      items.push({ grade: g, id: q.id, chapter: c.id, prompt: q.prompt, options: q.options.map((o) => o.text),
        answer: q.options.find((o) => o.id === q.answerId)?.text ?? "", norm: stemT.join(" "), stemT,
        itemT: toks(q.prompt + " " + q.options.map((o) => o.text).join(" ")) });
    }
  }
}
const allowPath = path.join(ROOT, "scripts/audit-baselines/near-duplicate-science-allow.json");
const allow = new Set(fs.existsSync(allowPath) ? JSON.parse(fs.readFileSync(allowPath, "utf8")).pairs : []);

const pairs = [];
for (let i = 0; i < items.length; i++) for (let j = i + 1; j < items.length; j++) {
  const a = items[i], b = items[j];
  if (!allGrades && a.grade !== b.grade) continue;
  if (allow.has(`${a.id}|${b.id}`) || allow.has(`${b.id}|${a.id}`)) continue;
  const reasons = [];
  if (a.norm && a.norm === b.norm) reasons.push("same-norm");
  if (a.stemT.length >= 5 && b.stemT.length >= 5) { const j2 = jaccard(a.stemT, b.stemT); if (j2 >= 0.75 && !reasons.length) reasons.push(`stem-jaccard=${j2.toFixed(2)}`); }
  if (a.itemT.length >= 4 && b.itemT.length >= 4) {
    const jac = jaccard(a.itemT, b.itemT);
    if (jac >= 0.7) reasons.push(`item-jaccard=${jac.toFixed(2)}`);
    else if (Math.abs(a.itemT.length - b.itemT.length) <= 8) { const r = ratio(a.itemT, b.itemT); if (r >= 0.85) reasons.push(`item-ratio=${r.toFixed(2)}`); }
  }
  if (reasons.length) pairs.push({ a: a.id, b: b.id, grades: [a.grade, b.grade], reasons, aStem: a.prompt, bStem: b.prompt, aOpts: a.options, bOpts: b.options, aAns: a.answer, bAns: b.answer });
}
const jsonIdx = args.indexOf("--json");
if (jsonIdx >= 0) fs.writeFileSync(args[jsonIdx + 1], JSON.stringify({ items: items.length, pairs }, null, 1));
for (const p of pairs) console.log(`near-duplicate-stem ${p.a} ~ ${p.b} [${p.reasons.join(", ")}]\n    "${p.aStem.slice(0, 100)}" | "${p.bStem.slice(0, 100)}"`);
console.log(`\n${items.length} Science items scanned (${allGrades ? "all grades" : "within grade"}), ${pairs.length} near-duplicate candidate pair(s)`);
if (args.includes("--strict") && pairs.length) process.exit(1);
