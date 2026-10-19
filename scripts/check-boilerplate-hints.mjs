#!/usr/bin/env node
/**
 * List remaining boilerplate prep hints per chapter after overlay merge.
 * Usage: node scripts/check-boilerplate-hints.mjs [--verbose] [--strict] [--out-dir <dir>]
 *
 * Default: unchanged behaviour (boilerplate report only, always exits 0).
 *
 * --strict additionally flags GENERIC hints (report-only; content is never modified):
 *   - the hint contains a generic phrase ("read carefully", "eliminate", "think about what
 *     the question is asking", ...), or
 *   - the hint shares no meaningful token (3+ letters, non-stopword) with the item's
 *     question stem or answer options.
 * It prints counts per grade and subject, writes the flagged ids to
 * <out-dir>/generic-hints-<YYYY-MM-DD>.json (default: $MINDSTRONG_QUALITY_DIR or
 * /workspace/mindstrong/quality) and exits 1 if anything is flagged.
 */
import { createRequire } from "module";
import { pathToFileURL } from "url";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

// Dynamic import of TS via next isn't available; parse content + overlays as text.
import fs from "fs";

const BP_MARKERS = [
  "Think about the lesson key ideas.",
  "Eliminate options that do not fit.",
  "Look carefully at the diagram.",
  "Match what you see to the question asked.",
  "Read carefully.",
  "Eliminate impossible options first.",
  "Look for clues in the text.",
  "Eliminate unsupported answers.",
  "Look, Link, Decide",
  "Eliminate answers the text does not support.",
];

function isBoilerplate(hints) {
  if (!hints || hints.length === 0) return true;
  return hints.every((h) => BP_MARKERS.some((m) => h.includes(m) || m.includes(h)));
}

// ---------- --strict: generic-hint detection ----------
const GENERIC_PHRASES = [
  /read (the question )?carefully/i,
  /eliminat/i,
  /think about what the question is asking/i,
  /what (is|the) question (is )?asking/i,
  /look carefully/i,
  /think about the lesson/i,
  /read (the|every|all) (question|options?|choices)/i,
  /use (the )?process of elimination/i,
];

const STOPWORDS = new Set(
  ("the and for are but not you all any can had her was one our out has have this that with from they will " +
    "would there their what when which where who whom why how into than then them these those your about " +
    "after before each other some such only own same too very just also more most does did being been were " +
    "its it's his she him may might must shall should could over under again further once here both few " +
    "because while during above below between through off any every first second think look try check " +
    "remember use using use read reading question questions answer answers option options choice choices " +
    "item correct best right wrong one two pick choose find see say tell make makes made look looks " +
    "carefully careful clue clues key idea ideas lesson text").split(/\s+/),
);

function stem(w) {
  return w.length > 4 && w.endsWith("s") && !w.endsWith("ss") ? w.slice(0, -1) : w;
}

function meaningfulTokens(text) {
  const out = new Set();
  for (const m of String(text || "").toLowerCase().matchAll(/[a-z]{3,}/g)) {
    if (!STOPWORDS.has(m[0])) out.add(stem(m[0]));
  }
  return out;
}

function parseStrings(src) {
  return [...src.matchAll(/"((?:[^"\\]|\\.)*)"/g)].map((x) => {
    try {
      return JSON.parse(`"${x[1]}"`);
    } catch {
      return x[1];
    }
  });
}

/** Stem + option text for an item block (text-parsed, like hints). */
function itemContext(block) {
  const pm = block.match(/prompt:\s*("(?:[^"\\]|\\.)*"|`[^`]*`)/);
  const prompt = pm ? (pm[1].startsWith("`") ? pm[1].slice(1, -1) : parseStrings(pm[1])[0] || "") : "";
  const om = block.match(/options:\s*\[([\s\S]*?)\n\s*\]/);
  const opts = om ? [...om[1].matchAll(/text:\s*("(?:[^"\\]|\\.)*")/g)].map((x) => parseStrings(x[1])[0] || "") : [];
  return { prompt, opts };
}

function genericReasons(hints, ctx) {
  const ctxTokens = meaningfulTokens([ctx.prompt, ...ctx.opts].join(" "));
  const reasons = [];
  hints.forEach((h, i) => {
    if (GENERIC_PHRASES.some((re) => re.test(h))) reasons.push({ hint: i, reason: "generic-phrase", text: h });
    else {
      const ht = meaningfulTokens(h);
      if (![...ht].some((t) => ctxTokens.has(t))) reasons.push({ hint: i, reason: "no-shared-token", text: h });
    }
  });
  return reasons;
}

function gradeSubject(id) {
  const m = id.match(/^g(\d+)-([a-z]+)-/);
  return m ? { grade: Number(m[1]), subject: m[2] } : { grade: 0, subject: "unknown" };
}

function loadOverlays(sub = "") {
  const dir = path.join(root, "lib/prep/hints", sub);
  const map = new Map();
  if (!fs.existsSync(dir)) return map;
  for (const f of fs.readdirSync(dir).filter((n) => n.endsWith(".ts") && n !== "index.ts" && n !== "types.ts")) {
    const text = fs.readFileSync(path.join(dir, f), "utf8");
    for (const m of text.matchAll(/"([^"]+)":\s*\[([^\]]*)\]/g)) {
      const id = m[1];
      const hints = [...m[2].matchAll(/"((?:[^"\\]|\\.)*)"/g)].map((x) => JSON.parse(`"${x[1]}"`));
      if (hints.length) map.set(id, hints);
    }
  }
  return map;
}

/** Authored items: chapter content plus the mock addenda (lib/prep/mocks), which are appended to chapter sets. */
const CONTENT_DIRS = ["lib/prep/content", "lib/prep/mocks"];

function parseContentQuestions() {
  const QID = /^\s+id:\s*"(g\d+-[a-z]+-[a-z0-9-]+-[abc]-q\d+)"/gm;
  const out = [];
  for (const rel of CONTENT_DIRS) {
    const dir = path.join(root, rel);
    if (!fs.existsSync(dir)) continue;
    for (const f of fs.readdirSync(dir).filter((n) => n.endsWith(".ts") && n !== "index.ts" && n !== "types.ts")) {
      const text = fs.readFileSync(path.join(dir, f), "utf8");
      const matches = [...text.matchAll(QID)];
      for (let i = 0; i < matches.length; i++) {
        const id = matches[i][1];
        const start = matches[i].index;
        const end = i + 1 < matches.length ? matches[i + 1].index : text.length;
        const block = text.slice(start, end);
        const hm = block.match(/hints:\s*\[([^\]]*)\]/);
        const hints = hm ? [...hm[1].matchAll(/"((?:[^"\\]|\\.)*)"/g)].map((x) => x[1].replace(/\\"/g, '"')) : [];
        out.push({ id, file: f, hints, ctx: itemContext(block) });
      }
    }
  }
  return out;
}

const overlays = loadOverlays();
// Fix layer (lib/prep/hints/fixes): wins over authored hints and overlays, as in applyHints().
const fixes = loadOverlays("fixes");
const questions = parseContentQuestions();

/** Same precedence as lib/prep/hints/index.ts applyHints(): fix > authored non-boilerplate > overlay. */
function effectiveHints(q) {
  const fix = fixes.get(q.id);
  if (fix && fix.length) return fix;
  const overlay = overlays.get(q.id);
  return !isBoilerplate(q.hints) ? q.hints : overlay && overlay.length ? overlay : q.hints;
}

const remaining = [];
for (const q of questions) {
  const effective = effectiveHints(q);
  if (isBoilerplate(effective)) {
    remaining.push({ ...q, effective });
  }
}

// Group by chapter file
const byChapter = new Map();
for (const r of remaining) {
  if (!byChapter.has(r.file)) byChapter.set(r.file, []);
  byChapter.get(r.file).push(r.id);
}

console.log("Hint overlay entries:", overlays.size);
console.log("Hint fix-layer entries:", fixes.size);
console.log("Quiz items scanned:", questions.length);
console.log("Remaining boilerplate after overlay:", remaining.length);
console.log("");
for (const [file, ids] of [...byChapter.entries()].sort()) {
  console.log(`${file}: ${ids.length}`);
  if (process.argv.includes("--verbose")) {
    for (const id of ids) console.log(`  - ${id}`);
  }
}

if (!process.argv.includes("--verbose")) {
  console.log("\n(re-run with --verbose to list item ids)");
}

// ---------- --strict ----------
if (process.argv.includes("--strict")) {
  const flagged = [];
  const boilerplateIds = new Set(remaining.map((r) => r.id));
  for (const q of questions) {
    const effective = effectiveHints(q);
    const reasons = effective.length ? genericReasons(effective, q.ctx) : [];
    const bp = boilerplateIds.has(q.id);
    if (reasons.length || bp) {
      flagged.push({
        id: q.id,
        ...gradeSubject(q.id),
        boilerplate: bp,
        generic: reasons.length > 0,
        allHintsGeneric: effective.length > 0 && reasons.length === effective.length,
        reasons: reasons.map((r) => ({ hint: r.hint, reason: r.reason })),
      });
    }
  }

  const totals = new Map(); // "g<grade> <subject>" -> counts
  const bump = (k, field) => {
    if (!totals.has(k)) totals.set(k, { items: 0, flagged: 0, boilerplate: 0, generic: 0 });
    totals.get(k)[field]++;
  };
  for (const q of questions) {
    const { grade, subject } = gradeSubject(q.id);
    bump(`${String(grade).padStart(2, "0")} ${subject}`, "items");
  }
  for (const f of flagged) {
    const k = `${String(f.grade).padStart(2, "0")} ${f.subject}`;
    bump(k, "flagged");
    if (f.boilerplate) bump(k, "boilerplate");
    if (f.generic) bump(k, "generic");
  }

  const phrase = flagged.filter((f) => f.reasons.some((r) => r.reason === "generic-phrase")).length;
  const noTok = flagged.filter((f) => f.reasons.some((r) => r.reason === "no-shared-token")).length;
  console.log("\n=== STRICT: generic-hint report (report-only; no content changed) ===");
  console.log(`Flagged items: ${flagged.length} of ${questions.length}`);
  console.log(`  boilerplate: ${flagged.filter((f) => f.boilerplate).length}`);
  console.log(`  generic (any hint): ${flagged.filter((f) => f.generic).length}  [generic-phrase: ${phrase}, no-shared-token: ${noTok}]`);
  console.log(`  all hints generic: ${flagged.filter((f) => f.allHintsGeneric).length}`);
  console.log("\nPer grade / subject (flagged / items; boilerplate, generic):");
  for (const [k, v] of [...totals.entries()].sort()) {
    if (!v.flagged) continue;
    const [g, subj] = k.split(" ");
    console.log(`  G${Number(g)} ${subj}: ${v.flagged}/${v.items}  (boilerplate ${v.boilerplate}, generic ${v.generic})`);
  }
  const byGrade = new Map();
  for (const f of flagged) byGrade.set(f.grade, (byGrade.get(f.grade) || 0) + 1);
  console.log("\nPer grade:", [...byGrade.entries()].sort((a, b) => a[0] - b[0]).map(([g, n]) => `G${g}=${n}`).join(" "));

  const argOut = process.argv.indexOf("--out-dir");
  const outDir = argOut > -1 ? process.argv[argOut + 1] : process.env.MINDSTRONG_QUALITY_DIR || "/workspace/mindstrong/quality";
  fs.mkdirSync(outDir, { recursive: true });
  const date = new Date().toLocaleDateString("en-CA"); // YYYY-MM-DD (local)
  const outFile = path.join(outDir, `generic-hints-${date}.json`);
  const byGradeSubject = {};
  for (const [k, v] of [...totals.entries()].sort()) {
    const [g, subj] = k.split(" ");
    (byGradeSubject[`g${Number(g)}`] ||= {})[subj] = v;
  }
  fs.writeFileSync(
    outFile,
    JSON.stringify(
      {
        date,
        itemsScanned: questions.length,
        flaggedCount: flagged.length,
        byGradeSubject,
        flaggedIds: flagged.map((f) => f.id),
        flagged,
      },
      null,
      2,
    ) + "\n",
  );
  console.log(`\nWrote ${outFile}`);
  if (flagged.length) process.exitCode = 1;
}
