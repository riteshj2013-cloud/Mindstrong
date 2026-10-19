#!/usr/bin/env node
/**
 * near-duplicate-english-stems.mjs — find English question stems that repeat the same item across
 * (or within) grades even though the exact `duplicate-stem` audit misses them.
 *
 * Walks every English set exactly as served (pictorial + overlays + hint fixes), plus the English
 * mock-paper items that are not chapter items (lib/prep/mocks addenda, as served by getMockPaper),
 * and flags pairs where:
 *   R1 "same-norm":   stems are equal after strong normalisation (punctuation/quotes stripped,
 *                     filler such as "is", "the", "choose", "which word" dropped, and the skill
 *                     words synonym/antonym/opposite/means-the-same mapped to one token per skill);
 *   R2 "same-target": the same target word is tested for the same skill (synonym, antonym,
 *                     meaning, homophone, plural, past tense, idiom, prefix/suffix, root) or the same
 *                     fill-in sentence (blank sentence equal after normalisation);
 *   R4 "same-answer": same correct answer and the stems share most content words (Jaccard >= 0.5
 *                     on stem tokens, or the same quoted target), e.g. the same fill-in frame reworded;
 *   R3 "similar":     stem + options are very similar (token Jaccard >= 0.8 or difflib-style
 *                     ratio >= 0.9).
 * Passages are excluded: only the question line (text after the passage) is compared, and pairs
 * that share a passage are compared on the question line only.
 *
 * Scope: ALL English items G1-G10, within and across grades (a child moving up meets both).
 *
 * Usage: node scripts/near-duplicate-english-stems.mjs [--json out.json] [--dump-items] [--strict]
 *   --strict  exit 1 when any candidate is found (default: print as warnings, exit 0).
 * Allow-list: scripts/audit-baselines/near-duplicate-english-allow.json
 *   { "pairs": ["idA|idB", ...], "reasons": { "idA|idB": "why this is not a duplicate" } }
 *   for pairs that look alike on the surface but test different targets or tasks.
 */
import { createJiti } from "jiti";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = process.env.MINDSTRONG_ROOT
  ? path.resolve(process.env.MINDSTRONG_ROOT)
  : path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const jiti = createJiti(import.meta.url, { alias: { "@": ROOT } });
const catalog = jiti(path.join(ROOT, "lib/prep/catalog.ts"));
const types = jiti(path.join(ROOT, "lib/prep/types.ts"));
const prep = jiti(path.join(ROOT, "lib/prep/index.ts"));

// id -> content file (for reporting)
const contentDir = path.join(ROOT, "lib/prep/content");
const idFile = new Map();
for (const f of fs.readdirSync(contentDir)) {
  if (!/english.*\.ts$/.test(f)) continue;
  const src = fs.readFileSync(path.join(contentDir, f), "utf8");
  for (const m of src.matchAll(/id:\s*"(g\d+-eng-[^"]+)"/g)) idFile.set(m[1], f);
}

const items = [];
for (const g of types.ALL_GRADES) {
  const pack = catalog.getPrepPack("english", g);
  if (!pack) continue;
  let order = 0;
  for (const c of pack.chapters) for (const set of c.sets) {
    if (!set.questions?.length) continue;
    for (const q of prep.getChapterSetQuestions("english", g, c.id, set.id)) {
      items.push({ grade: g, order: order++, id: q.id, file: idFile.get(q.id) ?? "", chapter: c.id, set: set.id,
        prompt: q.prompt, options: q.options.map((o) => o.text), answer: q.options.find((o) => o.id === q.answerId)?.text ?? "" });
    }
  }  // mock-paper items that are not chapter items (English LR / Achievers addenda)
  const seen = new Set(items.map((x) => x.id));
  const baseId = (id) => String(id).replace(/^paper-\d+-/, "");
  for (const q of prep.getMockPaper?.("english", g) ?? []) {
    const id = baseId(q.id);
    if (seen.has(id)) continue;
    seen.add(id);
    items.push({ grade: g, order: order++, id, file: "mocks/english-g" + g + "-lr-achievers.ts", chapter: "mock", set: "mock",
      prompt: q.prompt, options: q.options.map((o) => o.text), answer: q.options.find((o) => o.id === q.answerId)?.text ?? "" });
  }
}

/** The question line: the last paragraph after any passage / letter / poem. */
function questionLine(p) {
  const s = String(p ?? "").replace(/\r/g, "");
  const paras = s.split(/\n\s*\n/).map((x) => x.trim()).filter(Boolean);
  let last = paras.length ? paras[paras.length - 1] : s;
  const lines = last.split("\n").map((x) => x.trim()).filter(Boolean);
  // single-paragraph prompts with a passage on earlier lines: keep the last line if it ends like a question
  if (lines.length > 1) {
    const tail = lines[lines.length - 1];
    if (/[?:—–…_]\s*$|_{2,}|—\s*$/.test(tail) || tail.length < 160) last = tail;
  }
  return last;
}
const hasPassage = (p) => questionLine(p).length < String(p ?? "").trim().length - 40;

const SKILL = [
  [/\b(antonyms?|opposites?|opposite meaning|means the opposite)\b/g, " SKANT "],
  [/\b(synonyms?|similar meaning|means (?:almost |nearly |most nearly )?the same|same meaning|closest in meaning|nearest in meaning|most nearly means)\b/g, " SKSYN "],
  [/\bhomophones?\b/g, " SKHOM "],
];
const FILLER = new Set(("a an the is are of to for in on at this that which what word words choose select pick find identify " +
  "correct best right most nearly almost following given sentence option options one fill blank below means mean meaning " +
  "pair with from as it its be will would should does do has have here").split(" "));
function baseNorm(s) {
  let t = String(s ?? "").toLowerCase().replace(/\*/g, "").replace(/[‘’]/g, "'");
  for (const [re, rep] of SKILL) t = t.replace(re, rep);
  t = t.replace(/of the word/g, " ").replace(/_{2,}/g, " BLANK ").replace(/[“”"'…—–:?.!,;()\[\]/]/g, " ");
  return t.replace(/\s+/g, " ").trim();
}
const toks = (s) => baseNorm(s).split(" ").filter((w) => w && !FILLER.has(w));
const strongNorm = (s) => toks(s).join(" ");

/** Target extraction: (skill, target) for word-level skills; fill-in sentences by their sentence. */
function target(stem) {
  const t = baseNorm(stem);
  const skill = /SKANT/.test(t) ? "antonym" : /SKSYN/.test(t) ? "synonym" : /SKHOM/.test(t) ? "homophone"
    : /\bplural\b/.test(t) ? "plural" : /\bpast (?:tense|participle|form)\b/.test(t) ? "past" : /\bidiom\b/.test(t) ? "idiom"
    : /\bprefix\b/.test(t) ? "prefix" : /\bsuffix\b/.test(t) ? "suffix" : /\broot\b/.test(t) ? "root"
    : /\bmeans?\b|\bmeaning\b/.test(String(stem).toLowerCase()) ? "meaning" : null;
  const quoted = [...String(stem).matchAll(/[“"‘']([^”"’']{1,60})[”"’']/g)].map((m) => m[1].toLowerCase().trim());
  let tgt = null;
  if (skill) {
    if (quoted.length === 1) tgt = quoted[0];
    else {
      const m = t.match(/(?:skant|sksyn|skhom|plural|past (?:tense|participle|form)|idiom|prefix|suffix|root)\s+(?:of\s+)?(?:the\s+)?(?:word\s+)?([a-z'-]+(?: [a-z'-]+){0,3})/i);
      if (m) tgt = m[1].split(" ").filter((w) => !FILLER.has(w)).join(" ") || null;
    }
  }
  let blank = null;
  if (/_{2,}|BLANK|\.{3,}/.test(stem) || /_{2,}/.test(String(stem))) {
    const sent = (String(stem).match(/[:“"]\s*([^“”"]*_{2,}[^“”"]*)/) ?? [])[1] ?? String(stem);
    blank = strongNorm(sent.replace(/_{2,}/g, " BLANK "));
    if (blank.split(" ").length < 4) blank = null;
  }
  return { skill, tgt, blank };
}

function jaccard(a, b) { const A = new Set(a), B = new Set(b); let i = 0; for (const x of A) if (B.has(x)) i++; return i / (A.size + B.size - i || 1); }
/** difflib.SequenceMatcher-like ratio on token sequences (longest-common-subsequence approximation). */
function ratio(a, b) {
  const n = a.length, m = b.length; if (!n && !m) return 1;
  const dp = Array.from({ length: n + 1 }, () => new Uint16Array(m + 1));
  for (let i = 1; i <= n; i++) for (let j = 1; j <= m; j++) dp[i][j] = a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
  return (2 * dp[n][m]) / (n + m);
}

const allowPath = path.join(ROOT, "scripts/audit-baselines/near-duplicate-english-allow.json");
const allow = new Set(fs.existsSync(allowPath) ? JSON.parse(fs.readFileSync(allowPath, "utf8")).pairs : []);

for (const it of items) {
  it.stem = questionLine(it.prompt);
  it.passage = hasPassage(it.prompt) ? String(it.prompt).slice(0, 80) : "";
  it.norm = strongNorm(it.stem);
  it.tg = target(it.stem);
  it.tok = toks(it.stem + " " + it.options.join(" "));
}
const pairs = [];
for (let i = 0; i < items.length; i++) for (let j = i + 1; j < items.length; j++) {
  const a = items[i], b = items[j];
  if (allow.has(`${a.id}|${b.id}`) || allow.has(`${b.id}|${a.id}`)) continue;
  const reasons = [];
  if (a.norm && a.norm === b.norm) {
    // the same instruction over different passages/content is not a duplicate
    const sameContent = jaccard(a.options.map((x) => x.toLowerCase()), b.options.map((x) => x.toLowerCase())) >= 0.5 || (!a.passage && !b.passage && a.norm.split(" ").length >= 3);
    if (sameContent) reasons.push("same-norm");
  }
  if (a.tg.skill && a.tg.tgt && a.tg.skill === b.tg.skill && a.tg.tgt === b.tg.tgt) reasons.push(`same-target:${a.tg.skill}:${a.tg.tgt}`);
  if (a.tg.blank && a.tg.blank === b.tg.blank) reasons.push("same-fill-in");
  const ansA = baseNorm(a.answer), ansB = baseNorm(b.answer);
  if (!a.passage && !b.passage && ansA && ansA === ansB) {
    const sa = toks(a.stem).filter((w) => w !== "BLANK".toLowerCase() && w !== "blank"), sb = toks(b.stem).filter((w) => w !== "blank");
    const j = jaccard(sa, sb);
    const qa = (a.stem.match(/[“"]([^”"]{2,40})[”"]/) ?? [])[1]?.toLowerCase(), qb = (b.stem.match(/[“"]([^”"]{2,40})[”"]/) ?? [])[1]?.toLowerCase();
    if (j >= 0.5 || (qa && qa === qb)) reasons.push(`same-answer:j=${j.toFixed(2)}`);
  }
  if (!(a.passage && a.passage === b.passage) || reasons.length) {
    const jac = jaccard(a.tok, b.tok);
    if (a.tok.length >= 4 && b.tok.length >= 4) {
      if (jac >= 0.8) reasons.push(`jaccard=${jac.toFixed(2)}`);
      else if (Math.abs(a.tok.length - b.tok.length) <= 6) { const r = ratio(a.tok, b.tok); if (r >= 0.9) reasons.push(`ratio=${r.toFixed(2)}`); }
    }
  }
  if (reasons.length) pairs.push({ a: a.id, b: b.id, reasons, aStem: a.stem, bStem: b.stem, aOpts: a.options, bOpts: b.options, aAns: a.answer, bAns: b.answer, aFile: a.file, bFile: b.file });
}

const jsonIdx = process.argv.indexOf("--json");
if (jsonIdx > 0) fs.writeFileSync(process.argv[jsonIdx + 1], JSON.stringify({ items: items.length, pairs, all: process.argv.includes("--dump-items") ? items.map(({ tok, ...x }) => x) : undefined }, null, 1));
for (const p of pairs) console.log(`near-duplicate-stem ${p.a} ~ ${p.b} [${p.reasons.join(", ")}]\n    "${p.aStem.slice(0, 90)}" | "${p.bStem.slice(0, 90)}"`);
console.log(`\n${items.length} English items scanned, ${pairs.length} near-duplicate candidate pair(s)`);
if (process.argv.includes("--strict") && pairs.length) process.exit(1);
