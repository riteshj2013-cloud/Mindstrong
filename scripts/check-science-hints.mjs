#!/usr/bin/env node
/**
 * check-science-hints.mjs — verifies the EFFECTIVE (served) Science hints,
 * i.e. after applyPictorialList + applyHints (fix layer > authored > overlay).
 *
 * Errors (exit 1):
 *   (a) hint-contains-answer: a hint contains the correct option text
 *       (normalized: lower-case, punctuation collapsed, whole-word match);
 *   (b) hint-letter-ref: a hint names an option by letter ("option B", "(c)", "A and C"…)
 *       or is a bare letter;
 *   (c) hint-dup-in-chapter: two different questions in one chapter serve an identical hint;
 *   (d) hint-too-long: a hint is longer than 25 words.
 * Warnings (reported, not fatal):
 *   hint-contains-answer-part: a hint contains a ≥4-letter slash/parenthesis part of the answer.
 *
 * Usage: node scripts/check-science-hints.mjs [--grade N] [--verbose]
 */
import { createJiti } from "jiti";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const jiti = createJiti(import.meta.url, { alias: { "@": ROOT } });
const load = (p) => jiti(path.join(ROOT, p));
const catalog = load("lib/prep/catalog.ts");
const types = load("lib/prep/types.ts");
const prep = load("lib/prep/index.ts");

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
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const wordIn = (needle, hay) =>
  !!needle && new RegExp(`(?:^| )${esc(needle)}(?: |$)`, "u").test(hay);
function containsAnswer(hint, answer) {
  const a = norm(answer);
  if (!a || (a.length < 2 && !/^\d$/.test(a))) return false; // single letters: equality only
  return wordIn(a, norm(hint));
}
function answerParts(answer) {
  return String(answer ?? "")
    .split(/[/()]/)
    .map(norm)
    .filter((p) => p.replace(/ /g, "").length >= 4 && p !== norm(answer));
}

const errors = [];
const warnings = [];
let items = 0;
let hintCount = 0;
for (const g of types.ALL_GRADES) {
  if (onlyGrade && g !== onlyGrade) continue;
  const pack = catalog.getPrepPack("science", g);
  if (!pack) continue;
  for (const ch of pack.chapters) {
    const seen = new Map(); // normalized hint -> first question id
    for (const set of ch.sets) {
      if (!set.questions?.length) continue;
      for (const q of prep.getChapterSetQuestions("science", g, ch.id, set.id)) {
        items++;
        const answer = q.options.find((o) => o.id === q.answerId)?.text ?? "";
        for (const h of q.hints ?? []) {
          hintCount++;
          const at = `${q.id}: "${h}"`;
          if (containsAnswer(h, answer)) errors.push(`hint-contains-answer  ${at}  [answer: ${answer}]`);
          else if (norm(h) === norm(answer)) errors.push(`hint-is-answer  ${at}`);
          for (const p of answerParts(answer))
            if (wordIn(p, norm(h))) warnings.push(`hint-contains-answer-part  ${at}  [part: ${p}]`);
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
for (const e of errors) console.log("  ERROR " + e);
if (verbose) for (const w of warnings) console.log("  warn  " + w);
process.exit(errors.length ? 1 : 0);
