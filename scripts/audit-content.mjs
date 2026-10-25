#!/usr/bin/env node
/**
 * Content QA audit: walks every user-visible string in prep chapters + daily packs
 * (skipping raw SVG markup) and flags editorial leaks, exam branding and "$" amounts.
 * Structural checks on served sets: answer-letter skew (>50% one letter), duplicate stems,
 * and inline SVG figures missing an aria-label / alt text.
 * Hint checks: bare-letter hints, option-letter references, hints that equal / contain the answer.
 * Content generators: every script that writes served content is registered in scripts/content-generators.json; retired
 *   ones must start with the --force guard and refuse to run without it (each is executed once to prove it).
 * Warnings (non-fatal): chapters that never use one of A/B/C/D as the answer, and near-duplicate
 * stems from scripts/near-duplicate-science-stems.mjs and scripts/near-duplicate-english-stems.mjs
 * (pairs not in their allow-lists under scripts/audit-baselines/).
 * Usage: node scripts/audit-content.mjs [--strict]   (exit 1 on findings; --strict also fails on any warning)
 */
import { createJiti } from "jiti";
import { spawnSync } from "child_process";
import fs from "fs";
import os from "os";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const jiti = createJiti(import.meta.url, { alias: { "@": ROOT } });

const STRICT = process.argv.includes("--strict");
const nearDupStats = [];
let generatorStats = "";

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
  // ... or "Look at Count the sides." / "Look at Which bar matches Bar 1?" (title is an instruction or a question).
  ["look-at-read", /\bLook at (?:Read|Count|Name|Check|Build|Add|Take|Simplify|Place|Find|Match|Use|Choose|Pick|Write|Compare|Join|Spot|Colou?r|Shade|Draw|Mark|Order|Sort|Fill|Complete|Show|Make|Put|Help|Solve|Measure|Round|Split|Share|Tick|Circle|Estimate|Turn|Which|What|How|Who|Where|When|Why)\b|\bLook at [A-Z][^.?!:;—\n]*\?/],
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

/**
 * Mock papers exactly as served (getMockPaper): each must have pack.paperCount items, no item twice,
 * and, where a grade has a mock addendum (lib/prep/mocks), end with that closing block in order.
 * The hint and SVG rules below run on these papers too.
 */
const mocks = jiti(path.join(ROOT, "lib/prep/mocks/index.ts"));
const baseId = (id) => String(id).replace(/^paper-\d+-/, "");
const servedPapers = [];
for (const s of types.ALL_SUBJECTS) for (const g of types.ALL_GRADES) {
  const pack = catalog.getPrepPack(s, g);
  if (!pack.ready) continue;
  const paper = prep.getMockPaper(s, g);
  const where = `paper:${s}-g${g}`;
  walk(paper, where);
  servedPapers.push({ where, questions: paper });
  if (paper.length !== pack.paperCount) {
    findings.push({ rule: "mock-length", where, text: `${paper.length} items served, paperCount is ${pack.paperCount}` });
  }
  const ids = paper.map((q) => baseId(q.id));
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupes.length) findings.push({ rule: "mock-duplicate-item", where, text: `served twice: ${[...new Set(dupes)].join(", ")}` });
  const block = mocks.mockBlockFor(s, g).map((q) => q.id);
  if (block.length && ids.slice(-block.length).join(",") !== block.join(",")) {
    findings.push({ rule: "mock-block", where, text: `closing block of ${block.length} addendum items is missing or out of order` });
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
for (const { where, questions } of [...servedSets, ...servedPapers]) {
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
/**
 * Leak-matching form: NFKC (a² → a2, full-width → ASCII), lower-case, a space around every symbol and
 * whitespace collapsed, so "a² − b²" and "a²−b²" (or "₹20" and "₹ 20") compare equal.
 */
const leakForm = (s) =>
  String(s ?? "").normalize("NFKC").toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, " $& ").replace(/\s+/g, " ").trim();
function containsAnswer(hint, answer) {
  const a = leakForm(String(answer ?? "").trim().replace(/[.!?]+$/, ""));
  if (!a || (a.length < 2 && !/^\d$/.test(a))) return false; // single letters: equality check only
  return new RegExp(`(?:^| )${escapeRe(a)}(?= |$)`, "u").test(leakForm(hint));
}
const leakBaselinePath = path.join(ROOT, "scripts/audit-baselines/hint-contains-answer.json");
const leakBaseline = new Set(JSON.parse(fs.readFileSync(leakBaselinePath, "utf8")).items);
const leakSeen = new Set();
let knownLeaks = 0;
const hintStats = { bare: 0, ref: 0, equal: 0, contains: 0 };
for (const { where, questions } of [...servedSets, ...servedPapers]) {
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
        leakSeen.add(baseId(q.id));
        if (leakBaseline.has(baseId(q.id))) knownLeaks++;
        else findings.push({ rule: "hint-contains-answer", where: at, text: `${q.id} hint contains the correct option "${correct}": ${h}` });
      }
    });
  }
}
const staleLeaks = [...leakBaseline].filter((id) => !leakSeen.has(id));

/**
 * Two softer hint checks, baselined like hint-contains-answer (new hits fail; listed ids are for the writers):
 *  - hint-rules-out: one hint names two or more WRONG options ("End, pause and cancel do not mean
 *    starting."), so the child can eliminate instead of reason. A wrong option counts when its text
 *    (articles dropped, ≥3 characters, not just a number) appears as whole words in the hint and does
 *    not also appear in the stem (stem words are context, not a give-away).
 *  - hint-partial-quote: one hint contains more than 2/3 of the correct option's distinctive content
 *    words ("Cotton after ginning." for "cotton fibres after ginning"). Content words are ≥3 letters, not
 *    stop-words, not in the stem and not shared by two or more wrong options; needs at least 2 of them.
 *    Verbatim matches are left to hint-contains-answer.
 */
const looseForm = (s) => String(s ?? "").normalize("NFKC").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();
const hasWords = (hay, needle) => !!needle && ` ${hay} `.includes(` ${needle} `);
const optCore = (s) => looseForm(s).replace(/^(?:the|a|an|to) /, "");
const PQ_STOP = new Set(
  ("the and for are but not you all any can had her was one our out has have this that with from they will would there " +
    "their what when which where who whom why how into than then them these those your about after before each other " +
    "some such only own same too very just also more most does did being been were its his she him may might must " +
    "shall should could over under again once here both few because while during above below between through off every").split(" "),
);
const contentWords = (s) => [
  ...new Set(
    looseForm(s)
      .split(" ")
      .filter((w) => w.length >= 3 && !PQ_STOP.has(w))
      .map((w) => (w.length > 3 && w.endsWith("s") && !w.endsWith("ss") ? w.slice(0, -1) : w)),
  ),
];
function rulesOut(q) {
  const correct = optCore(q.options.find((o) => o.id === q.answerId)?.text);
  const stem = looseForm(q.prompt);
  const wrong = [
    ...new Set(
      q.options
        .filter((o) => o.id !== q.answerId)
        .map((o) => optCore(o.text))
        .filter((d) => d.length >= 3 && !/^[\d .,/]+$/.test(d) && d !== correct)
        .filter((d) => !hasWords(d, correct) && !hasWords(correct, d) && !hasWords(stem, d)),
    ),
  ];
  for (const h of q.hints ?? []) {
    const named = wrong.filter((d) => hasWords(looseForm(h), d));
    if (named.length >= 2) return { hint: h, named };
  }
  return listRulesOut(q, correct);
}
/**
 * List phrasing ("Visited, last and week are everyday words", "not he, she or it", "Meena and tree are
 * names"): two or more WRONG options strung together with commas / and / or / nor, followed by a
 * verdict verb (are, is, name, …) or preceded by not/neither/than. Unlike the word check above this
 * also counts short options and options whose words appear in the stem, because the list itself is the
 * give-away.
 */
const listForm = (s) =>
  String(s ?? "").normalize("NFKC").toLowerCase().replace(/[“”"‘’'*]/g, "").replace(/[^\p{L}\p{N},]+/gu, " ").replace(/\s*,\s*/g, " , ").trim();
const escRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
function listRulesOut(q, correct) {
  const wrong = [
    ...new Set(
      q.options
        .filter((o) => o.id !== q.answerId)
        .map((o) => listForm(optCore(o.text)).replace(/ , /g, " ").trim())
        .filter((d) => d && !/^[\d .,/]+$/.test(d) && d !== listForm(correct)),
    ),
  ].sort((a, b) => b.length - a.length);
  if (wrong.length < 2) return null;
  const item = `(?:${wrong.map(escRe).join("|")})`;
  const sep = "(?: , (?:and |or |nor )?| and | or | nor )";
  const chain = new RegExp(
    `(?:^|\\s)((?:not|neither|than) )?(${item}(?:${sep}${item})+)(?=\\s(?:are|were|is|was|all|both|name|names|describe|describes|tell|show|do|does|don t|cannot|can t|just)\\b)?`,
    "g",
  );
  for (const h of q.hints ?? []) {
    const f = ` ${listForm(h)} `;
    for (const m of f.matchAll(chain)) {
      const tail = f.slice(m.index + m[0].length);
      const verdict = /^\s(?:are|were|is|was|all|both|name|names|describe|describes|tell|show|do|does|don t|cannot|can t|just)\b/.test(tail);
      if (!m[1] && !verdict) continue;
      const named = [...new Set(wrong.filter((d) => new RegExp(`(?:^| )${escRe(d)}(?= |$)`).test(m[2])))];
      if (named.length >= 2) return { hint: h, named, phrasing: "list" };
    }
  }
  return null;
}
function partialQuote(q) {
  const correctText = q.options.find((o) => o.id === q.answerId)?.text ?? "";
  const stem = new Set(contentWords(q.prompt));
  const others = q.options.filter((o) => o.id !== q.answerId).map((o) => new Set(contentWords(o.text)));
  const words = contentWords(correctText).filter((w) => !stem.has(w) && others.filter((s) => s.has(w)).length < 2);
  if (words.length < 2) return null;
  for (const h of q.hints ?? []) {
    if (containsAnswer(h, correctText)) continue;
    const hw = new Set(contentWords(h));
    const hit = words.filter((w) => hw.has(w));
    if (hit.length / words.length > 2 / 3) return { hint: h, answer: correctText, words: hit, of: words.length };
  }
  return null;
}
const softChecks = [
  { rule: "hint-rules-out", fn: rulesOut, file: "scripts/audit-baselines/hint-rule-out.json" },
  { rule: "hint-partial-quote", fn: partialQuote, file: "scripts/audit-baselines/hint-partial-quote.json" },
].map((c) => ({ ...c, baseline: new Set(fs.existsSync(path.join(ROOT, c.file)) ? JSON.parse(fs.readFileSync(path.join(ROOT, c.file), "utf8")).items : []), hits: new Map() }));
for (const { where, questions } of [...servedSets, ...servedPapers]) {
  for (const q of questions) {
    const id = baseId(q.id);
    for (const c of softChecks) {
      if (c.hits.has(id)) continue;
      const r = c.fn(q);
      if (!r) continue;
      c.hits.set(id, { id, where, ...r });
      if (!c.baseline.has(id)) findings.push({ rule: c.rule, where: `${where}.${q.id}`, text: `${id}: ${JSON.stringify(r)}` });
    }
  }
}
// AUDIT_WRITE_HINT_REPORTS=1 writes the full hit lists (for the writers) next to the baselines' docs.
if (process.env.AUDIT_WRITE_HINT_REPORTS) {
  for (const c of softChecks) {
    const items = [...c.hits.values()].sort((a, b) => a.id.localeCompare(b.id));
    const bySubject = {};
    for (const it of items) { const s = it.id.split("-")[1]; bySubject[s] = (bySubject[s] ?? 0) + 1; }
    fs.writeFileSync(path.join(ROOT, process.env.AUDIT_WRITE_HINT_REPORTS, `${c.rule.replace(/^hint-/, "hints-")}.json`), JSON.stringify({ rule: c.rule, count: items.length, bySubject, items }, null, 1) + "\n");
  }
}

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

/**
 * Content generators (scripts/content-generators.json, docs/content-sources.md).
 * lib/prep/content is the source of truth. Every script that writes served content must be registered as
 * live (reproduces the served files byte for byte), retired, or a shared library. A retired generator must start with
 * the RETIRED GENERATOR guard, and running it without --force must exit 1 with "DEPRECATED" and write nothing.
 */
{
  const regPath = path.join(ROOT, "scripts/content-generators.json");
  const reg = JSON.parse(fs.readFileSync(regPath, "utf8"));
  const docPath = path.join(ROOT, "docs/content-sources.md");
  const doc = fs.existsSync(docPath) ? fs.readFileSync(docPath, "utf8") : "";
  if (!doc) findings.push({ rule: "generator-registry", where: "docs/content-sources.md", text: "missing" });
  const registered = new Set([...Object.keys(reg.live), ...Object.keys(reg.retired), ...Object.keys(reg.libraries ?? {})]);
  const TOOL = /^(audit-|check-|near-duplicate-|count-|science-hint-leak|generate_mobile_branding)/;
  const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? (e.name === "audit-baselines" || e.name === "__pycache__" ? [] : walk(path.join(dir, e.name))) : [path.join(dir, e.name)]);
  for (const abs of walk(path.join(ROOT, "scripts"))) {
    const rel = path.relative(ROOT, abs).split(path.sep).join("/");
    if (!/\.(py|mjs|js)$/.test(rel) || /\.test\.mjs$/.test(rel) || TOOL.test(path.basename(rel))) continue;
    const src = fs.readFileSync(abs, "utf8");
    const writesContent = /lib\/prep\/(content|hints|pictorial)|from ingest_lib import|emit_module|from \.emit import|import (maths|english|science)_data/.test(src);
    if (writesContent && !registered.has(rel))
      findings.push({ rule: "generator-unregistered", where: rel, text: "writes served content but is not listed in scripts/content-generators.json (live / retired / libraries)" });
  }
  const GUARD_PY = /^import os as _os, sys as _sys\nif "--force" in _sys\.argv:\n    _sys\.argv\.remove\("--force"\)\n    _os\.environ\["MINDSTRONG_FORCE_RETIRED"\] = "1"\nif _os\.environ\.get\("MINDSTRONG_FORCE_RETIRED"\) != "1":\n    _sys\.exit\("DEPRECATED: /;
  const GUARD_JS = /^if \(!process\.argv\.includes\("--force"\) && process\.env\.MINDSTRONG_FORCE_RETIRED !== "1"\) \{\n  console\.error\("DEPRECATED: [^\n]*\n  process\.exit\(1\);\n\}/;
  /** Source from the first statement that can do work (after shebang, comments, docstring, __future__ / builtin ESM imports). */
  const firstCode = (rel, src) => {
    let t = src.replace(/^#![^\n]*\n/, "");
    const strip = rel.endsWith(".py")
      ? (x) => x.replace(/^(?:[ \t]*(?:#[^\n]*)?\n)+/, "").replace(/^[rRuU]?("""|''')[\s\S]*?\1[^\n]*\n/, "").replace(/^from __future__ import [^\n]*\n/, "")
      : (x) => x.replace(/^(?:[ \t]*(?:\/\/[^\n]*)?\n)+/, "").replace(/^\/\*[\s\S]*?\*\/[^\n]*\n/, "").replace(/^import [^\n]*from "(?:fs|path|url|node:[a-z_]+)";[^\n]*\n/, "");
    for (;;) { const next = strip(t); if (next === t) return t; t = next; }
  };
  const guarded = [];
  for (const rel of Object.keys(reg.retired)) {
    const abs = path.join(ROOT, rel);
    if (!fs.existsSync(abs)) { findings.push({ rule: "generator-registry", where: rel, text: "retired generator listed but missing" }); continue; }
    const head = firstCode(rel, fs.readFileSync(abs, "utf8"));
    if (!(rel.endsWith(".py") ? GUARD_PY : GUARD_JS).test(head))
      findings.push({ rule: "generator-unguarded", where: rel, text: "retired generator must start with the RETIRED GENERATOR guard (exit unless --force) before any other code" });
    else guarded.push(rel);
    if (!doc.includes(rel.replace(/^scripts\//, ""))) findings.push({ rule: "generator-registry", where: rel, text: "retired generator not listed in docs/content-sources.md" });
  }
  for (const rel of Object.keys(reg.live)) {
    const abs = path.join(ROOT, rel);
    if (!fs.existsSync(abs)) { findings.push({ rule: "generator-registry", where: rel, text: "live generator listed but missing" }); continue; }
    if (/RETIRED GENERATOR guard/.test(fs.readFileSync(abs, "utf8"))) findings.push({ rule: "generator-registry", where: rel, text: "listed as live but carries the retired guard" });
    if (!doc.includes(rel.replace(/^scripts\//, ""))) findings.push({ rule: "generator-registry", where: rel, text: "live generator not listed in docs/content-sources.md" });
  }
  // Only generators whose guard is statically first are executed: run each WITHOUT --force; it must refuse.
  const env = { ...process.env }; delete env.MINDSTRONG_FORCE_RETIRED;
  const hasPy = spawnSync("python3", ["--version"], { encoding: "utf8" }).status === 0;
  let ran = 0;
  for (const rel of guarded) {
    if (rel.endsWith(".py") && !hasPy) continue;
    const r = spawnSync(rel.endsWith(".py") ? "python3" : process.execPath, [path.join(ROOT, rel)], { cwd: ROOT, encoding: "utf8", env, timeout: 30000 });
    ran++;
    if (r.status !== 1 || !/DEPRECATED/.test(r.stderr ?? ""))
      findings.push({ rule: "generator-unguarded", where: rel, text: `ran without --force and did not refuse (exit ${r.status})` });
  }
  if (!hasPy) warnings.push("generator check: python3 not found, retired .py generators were checked statically only");
  generatorStats = `${Object.keys(reg.live).length} live, ${Object.keys(reg.retired).length} retired (${ran} refused without --force)`;
}

/** Near-duplicate stem scanners (Science, English) → warnings; --strict turns them into a failure. */
for (const [subject, script] of [["Science", "near-duplicate-science-stems.mjs"], ["English", "near-duplicate-english-stems.mjs"]]) {
  const out = path.join(fs.mkdtempSync(path.join(os.tmpdir(), "nd-")), "pairs.json");
  const r = spawnSync(process.execPath, [path.join(ROOT, "scripts", script), "--json", out], { cwd: ROOT, encoding: "utf8", env: { ...process.env, MINDSTRONG_ROOT: ROOT } });
  if (r.status !== 0 || !fs.existsSync(out)) {
    findings.push({ rule: "near-duplicate-scan", where: script, text: `scanner failed (exit ${r.status}): ${(r.stderr || r.stdout || "").trim().split("\n").slice(-3).join(" | ")}` });
    continue;
  }
  const { pairs } = JSON.parse(fs.readFileSync(out, "utf8"));
  fs.rmSync(path.dirname(out), { recursive: true, force: true });
  for (const p of pairs) warnings.push(`near-duplicate-stem (${subject}) ${p.a} ~ ${p.b} [${p.reasons.join(", ")}]: "${String(p.aStem).slice(0, 70)}" | "${String(p.bStem).slice(0, 70)}"`);
  nearDupStats.push(`${subject} ${pairs.length}`);
}

const seen = new Set();
const uniq = findings.filter((f) => { const k = f.rule + f.text; if (seen.has(k)) return false; seen.add(k); return true; });
for (const f of uniq) console.log(`${f.rule.padEnd(18)} ${f.where}\n    ${f.text}`);
for (const w of warnings) console.log(`warning            ${w}`);
console.log(
  `\nhint checks: ${hintStats.bare} bare-letter, ${hintStats.ref} letter-reference, ${hintStats.equal} hint-is-answer, ` +
    `${hintStats.contains} hint-contains-answer (${knownLeaks} known in ${path.relative(ROOT, leakBaselinePath)}, ${leakSeen.size} items)`,
);
for (const c of softChecks) {
  const stale = [...c.baseline].filter((id) => !c.hits.has(id));
  console.log(`${c.rule}: ${c.hits.size} item(s), ${[...c.hits.keys()].filter((id) => c.baseline.has(id)).length} known in ${c.file}` + (stale.length ? `; ${stale.length} fixed, remove from baseline: ${stale.join(", ")}` : ""));
}
if (staleLeaks.length) console.log(`note: ${staleLeaks.length} id(s) in the hint-leak baseline no longer leak; remove them: ${staleLeaks.join(", ")}`);
console.log(`near-duplicate stems (not allow-listed): ${nearDupStats.join(", ")}`);
console.log(`content generators: ${generatorStats}`);
console.log(`${uniq.length} finding(s), ${warnings.length} warning(s)${STRICT && warnings.length ? " (--strict: warnings fail)" : ""}`);
process.exit(uniq.length || (STRICT && warnings.length) ? 1 : 0);
