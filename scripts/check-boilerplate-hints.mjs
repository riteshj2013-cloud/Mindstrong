#!/usr/bin/env node
/**
 * List remaining boilerplate prep hints per chapter after overlay merge.
 * Usage: node scripts/check-boilerplate-hints.mjs
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

function loadOverlays() {
  const dir = path.join(root, "lib/prep/hints");
  const map = new Map();
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

function parseContentQuestions() {
  const dir = path.join(root, "lib/prep/content");
  const QID = /^\s+id:\s*"(g\d-[a-z]+-[a-z0-9-]+-[abc]-q\d+)"/gm;
  const out = [];
  for (const f of fs.readdirSync(dir).filter((n) => n.endsWith(".ts") && n !== "index.ts")) {
    const text = fs.readFileSync(path.join(dir, f), "utf8");
    const matches = [...text.matchAll(QID)];
    for (let i = 0; i < matches.length; i++) {
      const id = matches[i][1];
      const start = matches[i].index;
      const end = i + 1 < matches.length ? matches[i + 1].index : text.length;
      const block = text.slice(start, end);
      const hm = block.match(/hints:\s*\[([^\]]*)\]/);
      const hints = hm ? [...hm[1].matchAll(/"((?:[^"\\]|\\.)*)"/g)].map((x) => x[1].replace(/\\"/g, '"')) : [];
      out.push({ id, file: f, hints });
    }
  }
  return out;
}

const overlays = loadOverlays();
const questions = parseContentQuestions();

const remaining = [];
for (const q of questions) {
  const authoredOk = !isBoilerplate(q.hints);
  const overlay = overlays.get(q.id);
  const effective = authoredOk ? q.hints : overlay && overlay.length ? overlay : q.hints;
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
