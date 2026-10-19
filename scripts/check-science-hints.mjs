#!/usr/bin/env node
/**
 * check-science-hints.mjs — verifies the EFFECTIVE (served) Science hints,
 * i.e. after applyPictorialList + applyHints (fix layer > authored > overlay).
 *
 * Errors (exit 1), on the served hint:
 *   (a) hint-contains-answer: a hint contains the correct answer or one of its alternatives, matched with
 *       scripts/science-hint-leak.mjs (picture-label prefixes such as "A — " stripped, articles dropped,
 *       parentheticals checked on their own, "/" and " or " alternatives split, CO₂ = CO2, plurals folded);
 *   (b) hint-letter-ref: a hint names an option by letter ("option B", "(c)", "A and C"…)
 *       or is a bare letter;
 *   (c) hint-dup-in-chapter: two different questions in one chapter serve an identical hint;
 *   (d) hint-too-long: a hint is longer than 25 words.
 * Every hint layer that can reach a child is checked and reported separately: the question's own
 * (authored) hints, the overlay in lib/prep/hints/g{n}-science.ts, and the fix layer in
 * lib/prep/hints/fixes. A leak in a layer that is not served (shadowed by a higher layer) is a warning.
 * Warnings (reported, not fatal):
 *   hint-head-term: multi-word answer whose distinctive head term (longest 5+ letter content word) is in
 *                   the hint; hint-paren-word: a one-word parenthetical of the answer is in the hint;
 *   shadowed-leak:  a leak in a layer that the served hint overrides.
 *
 * Usage: node scripts/check-science-hints.mjs [--grade N] [--verbose]
 */
import { createJiti } from "jiti";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { leakFindings } from "./science-hint-leak.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const jiti = createJiti(import.meta.url, { alias: { "@": ROOT } });
const load = (p) => jiti(path.join(ROOT, p));
const catalog = load("lib/prep/catalog.ts");
const types = load("lib/prep/types.ts");
const prep = load("lib/prep/index.ts");
const hintsMod = load("lib/prep/hints/index.ts");
const fixes = load("lib/prep/hints/fixes/index.ts").ITEM_HINT_FIXES;
const overlays = {};
for (const g of types.ALL_GRADES) {
  try { Object.assign(overlays, load(`lib/prep/hints/g${g}-science.ts`)[`G${g}_SCIENCE_HINTS`] ?? {}); } catch { /* grade has no overlay */ }
}

const args = process.argv.slice(2);
const onlyGrade = args.includes("--grade") ? Number(args[args.indexOf("--grade") + 1]) : null;
const verbose = args.includes("--verbose");
const MAX_WORDS = 25;

const LABEL_NOUN = /\b(?:card|label|panel|shape|bar|picture|part|point|home|town|library|jar|box|bag|glass|line|bottle|group|row|column|tile|scene|figure|diagram|strip|cup|beaker|tube|flask|pot|plant|child|student|team|class|grade|vitamin|route|path|arrow|ray|object|mirror|magnet|bulb|graph|pattern|step|stage|region|zone|side|corner|angle|triangle|circle|square|sample|solution|liquid|substance|person|friend|lens|cell|site|tank|ball|block|spring|trolley|car|train|ship|city|village|shop|house|room|door|window|tap|bowl|plate|sheet|set|tray|basket|road|field|vertex|vertices|points|segment|letter|hepatitis)s?\s*$/i;
const LETTER_REF = [
  /\b(?:option|choice|answer)s?\s*\(?[A-Da-d]\)?(?![\w'’])/gi,
  /(?<![\w)])\([A-Da-d]\)/g,
  /(?<![\w'’°/.-])[A-D]\s*(?:,|and|or|nor|&)\s*[A-D](?![\w'’])/g,
  /\b(?:[Oo]nly|[Ii]n|[Pp]ick|[Cc]hoose|[Nn]ot)\s+[A-D](?![\w'’])/g,
  /(?<![\w'’°/.-])[A-D] (?:is|are|has|gives|uses|shows|matches|misses|puts) /g,
  /(?:^|[.!?]\s+)[A-D][.:)](?:\s|$)/g,
];
function letterRefs(h) {
  if (/^\s*\(?[A-Da-d][.)]?\s*$/.test(h)) return [h.trim()];
  const out = [];
  for (const re of LETTER_REF) {
    for (const m of h.matchAll(re)) {
      const lead = m[0].match(/^[\s.!?]*/)[0].length;
      if (LABEL_NOUN.test(h.slice(0, m.index + lead))) continue;
      out.push(m[0].trim());
    }
  }
  return out;
}
const norm = (s) =>
  String(s ?? "").normalize("NFKC").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();

const errors = [];
const warnings = [];
let items = 0;
let hintCount = 0;
const layerLeaks = { authored: 0, overlay: 0, fix: 0, served: 0 };
for (const g of types.ALL_GRADES) {
  if (onlyGrade && g !== onlyGrade) continue;
  const pack = catalog.getPrepPack("science", g);
  if (!pack) continue;
  for (const ch of pack.chapters) {
    const seen = new Map(); // normalized hint -> first question id
    for (const set of ch.sets) {
      if (!set.questions?.length) continue;
      const raw = new Map(set.questions.map((x) => [x.id, x]));
      for (const q of prep.getChapterSetQuestions("science", g, ch.id, set.id)) {
        items++;
        const answer = q.options.find((o) => o.id === q.answerId)?.text ?? "";
        const authored = raw.get(q.id)?.hints ?? [];
        const layers = {
          authored: hintsMod.isBoilerplateHints(authored) ? [] : authored,
          overlay: overlays[q.id] ?? [],
          fix: fixes[q.id] ?? [],
        };
        const servedFrom = fixes[q.id] ? "fix" : layers.authored.length ? "authored" : overlays[q.id] ? "overlay" : "authored";
        for (const [layer, hs] of Object.entries(layers)) {
          if (layer === servedFrom) continue; // reported below as the served hint
          for (const h of hs) for (const f of leakFindings(h, answer)) {
            if (f.level !== "error") continue;
            layerLeaks[layer]++;
            warnings.push(`shadowed-leak [${layer}, not served; served=${servedFrom}]  ${q.id}: "${h}"  [${f.rule}: ${f.part}]`);
          }
        }
        for (const h of q.hints ?? []) {
          hintCount++;
          const at = `${q.id} [served from ${servedFrom}]: "${h}"`;
          for (const f of leakFindings(h, answer)) {
            if (f.level === "error") { layerLeaks.served++; errors.push(`hint-contains-answer  ${at}  [${f.rule}: ${f.part}; answer: ${answer}]`); }
            else warnings.push(`hint-${f.rule}  ${at}  [${f.part}; answer: ${answer}]`);
          }
          if (norm(h) === norm(answer)) errors.push(`hint-is-answer  ${at}`);
          const refs = letterRefs(h);
          if (refs.length) errors.push(`hint-letter-ref  ${at}  [${refs.join(", ")}]`);
          const words = h.trim().split(/\s+/).filter(Boolean).length;
          if (words > MAX_WORDS) errors.push(`hint-too-long (${words} words)  ${at}`);
          const key = norm(h);
          const prev = seen.get(key);
          if (prev && prev !== q.id) errors.push(`hint-dup-in-chapter  g${g}/${ch.id}  ${q.id} repeats ${prev}: "${h}"`);
          else if (!prev) seen.set(key, q.id);
        }
      }
    }
  }
}

const byRule = {};
for (const e of errors) byRule[e.split(" ")[0]] = (byRule[e.split(" ")[0]] ?? 0) + 1;
console.log(`science hints: ${items} served questions, ${hintCount} hints checked`);
console.log(`errors: ${errors.length}`, JSON.stringify(byRule));
console.log(`warnings: ${warnings.length}`);
console.log(`answer leaks by layer (served = fatal; others shadowed): ${JSON.stringify(layerLeaks)}`);
for (const e of errors) console.log("  ERROR " + e);
if (verbose) for (const w of warnings) console.log("  warn  " + w);
process.exit(errors.length ? 1 : 0);
