#!/usr/bin/env node
/**
 * Content QA audit: walks every user-visible string in prep chapters + daily packs
 * (skipping raw SVG markup) and flags editorial leaks, exam branding and "$" amounts.
 * Structural checks on served sets: answer-letter skew (>50% one letter), duplicate stems,
 * and inline SVG figures missing an aria-label / alt text.
 * Hint checks: bare-letter hints, option-letter references, hints that equal / contain the answer.
 * Warnings (non-fatal): chapters that never use one of A/B/C/D as the answer.
 * Usage: node scripts/audit-content.mjs   (exit 1 on findings)
 */
import { createJiti } from "jiti";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const jiti = createJiti(import.meta.url, { alias: { "@": ROOT } });

const RULES = [
  ["editorial-heading", /(^|\n)\s*#{1,6}\s/],
  ["pictorial-notes", /pictorial notes/i],
  ["visual-spec", /visual spec/i],
  ["not-copied", /not copied|copied or traced|past papers?/i],
  ["sof", /\bSOF\b/],
  ["exam-brand", /\b(IMO|IEO|NSO)\b/],
  ["todo", /\b(TODO|FIXME|TBD)\b/],
  ["meta", /(^|\n)\s*\**Meta\**\s*:?\s*(\n|$)/],
  ["marker-id", /\bmarkers? (?:ids?|named)\b|uniquely named marker/i],
  ["dollar", /\$\s?\d|\d\s?\$|\bdollars?\b|\bUSD\b|\bcents?\b/i],
  // Pictorial ingest sometimes concatenates "Look at " + figure title → "Look at Read the …"
  ["look-at-read", /\bLook at Read\b/],
  // G4-style pictorial scaffolding must live in figure.longdesc, never in the quiz prompt.
  ["sr-longdesc-in-prompt", /Text-only version for screen readers/i],
  // Writer/editor jargon must never reach kids ("tempting distractors", "synesthetic-ish", "the trap").
  ["editorial-word", /\bdistractors?\b|\b[a-z]+-ish\b|\bsynesthe|\b(?:a|the) trap\b(?! (?:air|heat|light|sunlight|water))/i],
];

const findings = [];
// The one place SOF may be named: the non-affiliation disclaimer.
const ALLOW = new Set();
function walk(v, where) {
  if (typeof v === "string") {
    if (ALLOW.has(v)) return;
    for (const [name, re] of RULES) if (re.test(v)) findings.push({ rule: name, where, text: v.slice(0, 160).replace(/\n/g, "⏎") });
    return;
  }
  if (Array.isArray(v)) return v.forEach((x, i) => walk(x, `${where}[${i}]`));
  if (v && typeof v === "object") {
    for (const [k, x] of Object.entries(v)) {
      if (k === "markup" || k === "svg") continue; // raw SVG (may legitimately contain <marker>)
      if (k === "longdesc") continue; // intentional AT text; flag only if it leaks into prompts
      walk(x, `${where}.${x && typeof x === "object" && x.id ? x.id : k}`);
    }
  }
}

const catalog = jiti(path.join(ROOT, "lib/prep/catalog.ts"));
const types = jiti(path.join(ROOT, "lib/prep/types.ts"));
for (const s of types.ALL_SUBJECTS) for (const g of types.ALL_GRADES) {
  const pack = catalog.getPrepPack(s, g);
  walk(pack, `${s}-g${g}`);
}
// Also walk the questions exactly as served (pictorial + hint overlays + runtime cleaning).
const prep = jiti(path.join(ROOT, "lib/prep/index.ts"));
/** Every authored set as served: { where, questions }. Used by the structural checks below. */
const servedSets = [];
for (const s of types.ALL_SUBJECTS) for (const g of types.ALL_GRADES) {
  const pack = catalog.getPrepPack(s, g);
  for (const c of pack.chapters) for (const set of c.sets) {
    if (!set.questions?.length) continue;
    const qs = prep.getChapterSetQuestions(s, g, c.id, set.id);
    const where = `served:${s}-g${g}.${c.id}.${set.id}`;
    walk(qs, where);
    servedSets.push({ where, questions: qs });
  }
}

/** Answer-letter balance: no authored set may have more than 50% of its keys on one letter. */
for (const { where, questions } of servedSets) {
  const counts = {};
  for (const q of questions) counts[q.answerId] = (counts[q.answerId] ?? 0) + 1;
  const [letter, n] = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
  if (n * 2 > questions.length) {
    findings.push({
      rule: "answer-skew",
      where,
      text: `${n}/${questions.length} answers are "${letter.toUpperCase()}" (max 50%); counts ${JSON.stringify(counts)}`,
    });
  }
}

/** Duplicate stems: the same question text (ignoring case, quotes, punctuation) may appear only once. */
const normStem = (p) =>
  String(p ?? "")
    .toLowerCase()
    .replace(/\*/g, "")
    .replace(/[“”"‘’'…—–:?.!,;()]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
const firstStem = new Map();
for (const { where, questions } of servedSets) {
  for (const q of questions) {
    const k = normStem(q.prompt);
    const prev = firstStem.get(k);
    if (prev) findings.push({ rule: "duplicate-stem", where: `${where}.${q.id}`, text: `${q.id} repeats the stem of ${prev}: ${q.prompt.slice(-100)}` });
    else firstStem.set(k, q.id);
  }
}

/** Every inline SVG figure needs a meaningful aria-label on its root <svg> (and alt text for the wrapper). */
for (const { where, questions } of servedSets) {
  for (const q of questions) {
    const figs = [["stem", q.figure], ...q.options.map((o) => [`option ${o.id}`, o.figure])];
    for (const [slot, f] of figs) {
      if (!f || f.type !== "svg") continue;
      const root = (f.markup.match(/<svg\b[^>]*>/i) ?? [""])[0];
      const label = (root.match(/\saria-label\s*=\s*"([^"]*)"/i) ?? [])[1]?.trim() ?? "";
      if (label.length < 8) findings.push({ rule: "svg-aria-label", where: `${where}.${q.id}`, text: `${q.id} ${slot} SVG has no meaningful aria-label` });
      if (!f.alt || !f.alt.trim()) findings.push({ rule: "svg-alt", where: `${where}.${q.id}`, text: `${q.id} ${slot} SVG has no alt text (screen readers hear "Diagram")` });
    }
  }
}
walk(types.SUBJECT_META, "SUBJECT_META");
const daily = jiti(path.join(ROOT, "lib/content/index.ts"));
for (const p of daily.ALL_READY_PACKS) walk(p, p.id);
/**
 * Hints must nudge, never point at a position or hand over the answer:
 *  - hint-bare-letter:  a hint that is just a letter ("A.", "B") reads as an option letter;
 *  - hint-letter-ref:   "option B", "(c)", "Only D", "A and C", "B is wrong" — option order is
 *                        rebalanced, so letters in hints go stale (figure labels such as
 *                        "Card B" or "Panel C" are fixed in the picture and are allowed);
 *  - hint-is-answer:    the hint equals the correct option text;
 *  - hint-contains-answer: the hint contains the correct option text verbatim. Items that
 *    already did this on 2026-10-19 are listed in scripts/audit-baselines/hint-contains-answer.json
 *    for the writers' hint rewrite; only NEW ones fail. Remove ids from that file as they are fixed.
 */
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
const normText = (s) => String(s ?? "").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();
const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
function containsAnswer(hint, answer) {
  const a = String(answer ?? "").trim().replace(/[.!?]+$/, "").trim();
  if (!a || (a.length < 2 && !/^\d$/.test(a))) return false; // single letters: equality check only
  return new RegExp(`(?<![\\p{L}\\p{N}])${escapeRe(a.toLowerCase())}(?![\\p{L}\\p{N}])`, "u").test(hint.toLowerCase());
}
const leakBaselinePath = path.join(ROOT, "scripts/audit-baselines/hint-contains-answer.json");
const leakBaseline = new Set(JSON.parse(fs.readFileSync(leakBaselinePath, "utf8")).items);
const leakSeen = new Set();
let knownLeaks = 0;
const hintStats = { bare: 0, ref: 0, equal: 0, contains: 0 };
for (const { where, questions } of servedSets) {
  for (const q of questions) {
    const correct = q.options.find((o) => o.id === q.answerId)?.text ?? "";
    (q.hints ?? []).forEach((h, i) => {
      const at = `${where}.${q.id}.hints[${i}]`;
      if (/^[^\p{L}\p{N}]*\p{L}[^\p{L}\p{N}]*$/u.test(h)) {
        hintStats.bare++;
        findings.push({ rule: "hint-bare-letter", where: at, text: `${q.id} hint is a bare letter: "${h}"` });
      } else {
        const refs = letterRefs(h);
        if (refs.length) {
          hintStats.ref++;
          findings.push({ rule: "hint-letter-ref", where: at, text: `${q.id} hint names an option by letter (${refs.join(", ")}): ${h}` });
        }
      }
      if (normText(h) && normText(h) === normText(correct)) {
        hintStats.equal++;
        findings.push({ rule: "hint-is-answer", where: at, text: `${q.id} hint is the correct option: "${h}"` });
      } else if (containsAnswer(h, correct)) {
        hintStats.contains++;
        leakSeen.add(q.id);
        if (leakBaseline.has(q.id)) knownLeaks++;
        else findings.push({ rule: "hint-contains-answer", where: at, text: `${q.id} hint contains the correct option "${correct}": ${h}` });
      }
    });
  }
}
const staleLeaks = [...leakBaseline].filter((id) => !leakSeen.has(id));

/** Warning only: every chapter should use each answer letter at least once. */
const warnings = [];
const chapterLetters = new Map();
for (const { where, questions } of servedSets) {
  const ch = where.replace(/\.[^.]+$/, "");
  const c = chapterLetters.get(ch) ?? { a: 0, b: 0, c: 0, d: 0 };
  for (const q of questions) c[q.answerId] = (c[q.answerId] ?? 0) + 1;
  chapterLetters.set(ch, c);
}
for (const [ch, c] of chapterLetters) {
  const missing = Object.keys(c).filter((L) => !c[L]);
  if (missing.length) warnings.push(`chapter-missing-letter ${ch} never uses ${missing.map((L) => L.toUpperCase()).join("/")} as the answer; counts ${JSON.stringify(c)}`);
}

const plans = jiti(path.join(ROOT, "lib/plans.ts"));
ALLOW.add(plans.SOF_DISCLAIMER);
walk(plans, "plans");

/** G1/G2 olympiad-lite: authored sets must be at least 16 MCQs; every READY grade needs 9 chapters. */
const grades = jiti(path.join(ROOT, "lib/prep/grades.ts"));
for (const g of grades.READY_GRADES) {
  let chapterTotal = 0;
  for (const s of types.ALL_SUBJECTS) {
    const pack = catalog.getPrepPack(s, g);
    chapterTotal += pack.chapters.length;
    if (g <= 2) {
      for (const c of pack.chapters) {
        for (const set of c.sets) {
          const n = set.questions?.length ?? 0;
          if (n < 16) {
            findings.push({
              rule: "set-size",
              where: `${s}-g${g}.${c.id}.${set.id}`,
              text: `${n} authored MCQs (G1/G2 olympiad-lite min 16)`,
            });
          }
        }
      }
    }
  }
  if (chapterTotal < 9) {
    findings.push({
      rule: "grade-coverage",
      where: `READY_GRADES g${g}`,
      text: `${chapterTotal} chapters across subjects (need 9 for full unlock)`,
    });
  }
}

const seen = new Set();
const uniq = findings.filter((f) => { const k = f.rule + f.text; if (seen.has(k)) return false; seen.add(k); return true; });
for (const f of uniq) console.log(`${f.rule.padEnd(18)} ${f.where}\n    ${f.text}`);
for (const w of warnings) console.log(`warning            ${w}`);
console.log(
  `\nhint checks: ${hintStats.bare} bare-letter, ${hintStats.ref} letter-reference, ${hintStats.equal} hint-is-answer, ` +
    `${hintStats.contains} hint-contains-answer (${knownLeaks} known in ${path.relative(ROOT, leakBaselinePath)}, ${leakSeen.size} items)`,
);
if (staleLeaks.length) console.log(`note: ${staleLeaks.length} id(s) in the hint-leak baseline no longer leak; remove them: ${staleLeaks.join(", ")}`);
console.log(`${uniq.length} finding(s), ${warnings.length} warning(s)`);
process.exit(uniq.length ? 1 : 0);
