#!/usr/bin/env node
/**
 * Maths hint quality check (served hints, i.e. after pictorial + hint overlays).
 * For every Maths MCQ, each hint must:
 *   - leak:      not contain the correct option text (case/space/comma/₹ normalised) nor its
 *                numeric value unless that number is in the stem or in every wrong option (a purely numeric answer
 *                may never appear, even if it is in the stem, nor as a number word 0–100);
 *   - letter:    not name an option letter (A–D) or say "eliminate options" (the algebraic
 *                elimination method, e.g. "eliminate y", is allowed);
 *   - shared:    not be identical to another item's hint in the same chapter;
 *   - no-token:  share at least one specific token (number or 3+ letter non-stopword) with the
 *                stem / stem figure text (options are used only when the stem has no specifics,
 *                e.g. "Which is correct?");
 *   - generic:   not use generic phrases ("read carefully", "think about the lesson", ...);
 *   - style:     ≤25 words, no "$"; later hints must differ from earlier ones.
 * Usage: node scripts/check-maths-hints.mjs [--grade 8] [--json out.json] [--list]
 * Exit 1 if any finding (respecting --grade filter).
 */
import { createJiti } from "jiti";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const jiti = createJiti(import.meta.url, { alias: { "@": ROOT } });
const catalog = jiti(path.join(ROOT, "lib/prep/catalog.ts"));
const types = jiti(path.join(ROOT, "lib/prep/types.ts"));
const prep = jiti(path.join(ROOT, "lib/prep/index.ts"));
const arg = (k) => { const i = process.argv.indexOf(k); return i > -1 ? process.argv[i + 1] : undefined; };
const onlyGrade = arg("--grade") ? Number(arg("--grade")) : undefined;

const STOP = new Set(("the and for are but not you all any can had her was one our out has have this that with from they will would there their what when which where who whom why how into than then them these those your about after before each other some such only own same too very just also more most does did being been were its his she him may might must shall should could over under again further once here both few because while during above below between through off every first second think look try check remember use using read question answer option choice item correct best right wrong pick choose find see say tell make made carefully careful clue key idea lesson text value number numbers given following true statement").split(/\s+/));
const WORDS = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
const TENS = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
const numWord = (n) => n < 20 ? WORDS[n] : n % 10 ? `${TENS[Math.floor(n / 10)]}[ -]${WORDS[n % 10]}` : n === 100 ? "hundred" : TENS[n / 10];
const norm = (s) => String(s ?? "").toLowerCase().replace(/₹|rs\.?(?=\s*\d)/g, "").replace(/(\d),(?=\d{2,3}\b)/g, "$1").replace(/[\s\u00a0]+/g, " ").replace(/[.!?]+$/, "").trim();
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const has = (h, a) => a && new RegExp(`(?<![\\p{L}\\p{N}.])${esc(a)}(?![\\p{L}\\p{N}]|\\.\\d)`, "u").test(h);
const nums = (s) => [...norm(s).matchAll(/\d+(?:\.\d+)?(?:\/\d+)?/g)].map((m) => m[0]);
const stemW = (w) => (w.length > 4 && w.endsWith("s") && !w.endsWith("ss") ? w.slice(0, -1) : w);
const tokens = (s) => {
  const t = new Set(nums(s));
  for (const m of String(s ?? "").toLowerCase().matchAll(/[a-z]{3,}/g)) if (!STOP.has(m[0])) t.add(stemW(m[0]));
  for (const m of String(s ?? "").matchAll(/[₹%°×÷√π]|(?<![\p{L}])[b-hj-z](?![\p{L}])/gu)) t.add(m[0].toLowerCase()); // symbols + algebra variables
  return t;
};
const ELIM_OPTIONS = /eliminat\w*\s+(?:the\s+)?(?:\w+\s+)?(?:options?|answers?|choices?)|process of elimination|eliminate (?:impossible|unsupported|wrong)/i;
const GENERIC = [/read (the question )?carefully/i, ELIM_OPTIONS, /think about the lesson/i, /what (is|the) question (is )?asking/i, /look carefully/i, /lesson key ideas/i, /match what you see/i];
const LETTER = [/\b(?:option|choice|answer)s?\s*\(?[A-Da-d]\)?(?![\w'’])/i, /(?<![\w)])\([A-Da-d]\)/, /(?<![\w'’°/.-])[A-D]\s*(?:,|and|or|nor|&)\s*[A-D](?![\w'’])/, /\b(?:[Oo]nly|[Pp]ick|[Cc]hoose)\s+[A-D](?![\w'’])/, /(?:^|[.!?]\s+)[A-D][.:)](?:\s|$)/];

export function leakReasons(h, q) {
  const correct = q.options.find((o) => o.id === q.answerId)?.text ?? "";
  const hn = norm(h), cn = norm(correct);
  const out = [];
  if (cn && (cn.length >= 2 || /^\d$/.test(cn)) && has(hn, cn)) out.push(`option text "${correct}"`);
  const stemNums = new Set(nums(q.prompt));
  const pureNum = /^[\d.\/\s%°a-z²³]*$/i.test(cn.replace(/\b(cm|m|km|kg|g|l|ml|mm|sq|cu|units?|years?|days?|hours?|minutes?|rupees|paise)\b/g, "")) && nums(cn).length === 1;
  const others = q.options.filter((o) => o.id !== q.answerId).map((o) => new Set(nums(o.text)));
  for (const n of nums(correct)) {
    // A number already in the stem, or shared by every wrong option too, gives nothing away.
    if (!pureNum && (stemNums.has(n) || (others.length && others.every((s) => s.has(n))))) continue;
    if (has(hn, n)) out.push(`value ${n}`);
    const i = Number(n);
    if (pureNum && Number.isInteger(i) && i <= 100 && new RegExp(`\\b${numWord(i)}\\b`, "i").test(hn)) out.push(`number word for ${n}`);
  }
  const wi = WORDS.indexOf(cn);
  if (wi >= 0 && !stemNums.has(String(wi)) && has(hn, String(wi))) out.push(`digit form of "${cn}"`);
  return out;
}

const items = [];
for (const g of types.ALL_GRADES) {
  if (onlyGrade && g !== onlyGrade) continue;
  const pack = catalog.getPrepPack("maths", g);
  for (const c of pack.chapters) for (const set of c.sets) {
    if (!set.questions?.length) continue;
    for (const q of prep.getChapterSetQuestions("maths", g, c.id, set.id)) items.push({ g, chapter: `g${g}.${c.id}`, q });
  }
}
const byChapterHint = new Map();
for (const { chapter, q } of items) for (const h of q.hints ?? []) {
  const k = chapter + "\u0000" + norm(h);
  if (!byChapterHint.has(k)) byChapterHint.set(k, new Set());
  byChapterHint.get(k).add(q.id);
}
const findings = [];
const flagged = { leak: new Set(), letter: new Set(), shared: new Set(), "no-token": new Set(), generic: new Set(), style: new Set() };
for (const { g, chapter, q } of items) {
  let ctx = tokens([q.prompt, q.figure?.alt, q.figure?.longdesc].join(" "));
  // Option-only stems ("Which is correct?") carry their specifics in the options.
  if (![...ctx].some((t) => t.length > 1 || /\d/.test(t))) ctx = tokens(q.options.map((o) => o.text).join(" "));
  const hints = q.hints ?? [];
  if (!hints.length) { flagged.generic.add(q.id); findings.push([q.id, "generic", "no hints"]); }
  hints.forEach((h, i) => {
    const add = (rule, why) => { flagged[rule].add(q.id); findings.push([q.id, rule, `hint[${i}] ${why}: ${h}`]); };
    for (const r of leakReasons(h, q)) add("leak", `contains answer ${r}`);
    if (LETTER.some((re) => re.test(h)) || ELIM_OPTIONS.test(h)) add("letter", "names an option letter / says eliminate options");
    const sh = byChapterHint.get(chapter + "\u0000" + norm(h));
    if (sh && sh.size > 1) add("shared", `identical to ${sh.size - 1} other item(s) in ${chapter}`);
    if (![...tokens(h)].some((t) => ctx.has(t))) add("no-token", "shares no number/word with the stem");
    if (GENERIC.some((re) => re.test(h))) add("generic", "generic phrase");
    if (h.trim().split(/\s+/).length > 25) add("style", "over 25 words");
    if (/\$/.test(h)) add("style", "uses $");
    if (i > 0 && hints.slice(0, i).some((p) => norm(p) === norm(h))) add("style", "repeats an earlier hint");
  });
}
const any = new Set(Object.values(flagged).flatMap((s) => [...s]));
const perGrade = {};
for (const { g, q } of items) {
  const r = (perGrade[`G${g}`] ||= { items: 0, flagged: 0, leak: 0, letter: 0, shared: 0, "no-token": 0, generic: 0, style: 0 });
  r.items++;
  if (any.has(q.id)) r.flagged++;
  for (const k of Object.keys(flagged)) if (flagged[k].has(q.id)) r[k]++;
}
if (process.argv.includes("--list")) for (const f of findings) console.log(f.join("  "));
console.log(`Maths items: ${items.length}; flagged items: ${any.size}`);
for (const k of Object.keys(flagged)) console.log(`  ${k.padEnd(9)} ${flagged[k].size}`);
console.log("Per grade:");
for (const [g, r] of Object.entries(perGrade)) console.log(`  ${g.padEnd(4)} ${JSON.stringify(r)}`);
const out = arg("--json");
if (out) fs.writeFileSync(out, JSON.stringify({ perGrade, flagged: Object.fromEntries(Object.entries(flagged).map(([k, v]) => [k, [...v]])), findings }, null, 1));
process.exit(any.size ? 1 : 0);
