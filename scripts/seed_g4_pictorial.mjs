#!/usr/bin/env node
/**
 * Build lib/prep/pictorial/g4-overlays.ts — ~30% pictorial MCQs per Grade 4 chapter.
 * Figures are original SVG specs (no external SOF scans).
 */
import fs from "fs";
import path from "path";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const OUT = path.join(ROOT, "lib/prep/pictorial/g4-overlays.ts");

/** @typedef {import('../lib/prep/types').FigureSpec} FigureSpec */

function fc(parts, shaded, equal = true, label) {
  return { type: "fraction-circle", parts, shaded, equal, ...(label ? { label } : {}) };
}
function fb(parts, shaded, label, compare) {
  return { type: "fraction-bar", parts, shaded, ...(label ? { label } : {}), ...(compare ? { compare } : {}) };
}
function pvc(places, digits, highlightIndex) {
  return { type: "place-value-chart", places, digits, ...(highlightIndex != null ? { highlightIndex } : {}) };
}
function pvb(o) {
  return { type: "place-value-blocks", ...o };
}
function nl(min, max, point, step, label) {
  return { type: "number-line", min, max, ...(point != null ? { point } : {}), ...(step ? { step } : {}), ...(label ? { label } : {}) };
}
function arr(rows, cols, label) {
  return { type: "array-grid", rows, cols, ...(label ? { label } : {}), filled: true };
}
function grid(rows, cols, shaded, label) {
  return { type: "shape-grid", rows, cols, shaded, ...(label ? { label } : {}) };
}
function diag(kind, blankIds, highlightId) {
  return { type: "labeled-diagram", kind, ...(blankIds ? { blankIds } : {}), ...(highlightId ? { highlightId } : {}) };
}
function ang(degrees, label) {
  return { type: "angle", degrees, showMeasure: true, ...(label ? { label } : {}) };
}
function shapes(items) {
  return { type: "shapes", items };
}
function table(headers, rows, highlightCell) {
  return { type: "table", headers, rows, ...(highlightCell ? { highlightCell } : {}) };
}

/** @type {Record<string, { figure?: object, options?: Record<string, { figure?: object, text?: string }> }>} */
const overlays = {};

function add(id, o) {
  overlays[id] = o;
}

// ---------- Maths: Large Numbers (~15 / 48) ----------
add("g4-maths-large-a-q01", {
  figure: pvc(["TTh", "Th", "H", "T", "O"], ["5", "2", "7", "4", "6"], 1),
});
add("g4-maths-large-a-q03", {
  figure: pvc(["Th", "H", "T", "O"], ["8", "6", "1", "5"], 1),
});
add("g4-maths-large-a-q04", {
  figure: pvb({ thousands: 2, hundreds: 7, tens: 0, ones: 5, label: "20,000+7,000+400+5" }),
});
add("g4-maths-large-a-q05", {
  figure: shapes([
    { kind: "rectangle", label: "9,999" },
    { kind: "rectangle", label: "10,002", highlight: true },
  ]),
});
add("g4-maths-large-a-q07", {
  figure: pvc(["TTh", "Th", "H", "T", "O"], ["6", "3", "1", "0", "8"], 2),
});
add("g4-maths-large-a-q10", {
  figure: nl(6400, 6500, 6472, 25, "Round to nearest hundred"),
});
add("g4-maths-large-a-q12", {
  figure: pvc(["TTh", "Th", "H", "T", "O"], ["4", "6", "0", "8", "3"], 2),
});
add("g4-maths-large-a-q15", {
  figure: nl(19998, 20001, 19999, 1, "Predecessor / successor"),
});
add("g4-maths-large-a-q18", {
  figure: pvc(["TTh", "Th", "H", "T", "O"], ["4", "7", "3", "7", "4"], 1),
});
add("g4-maths-large-b-q01", {
  figure: pvc(["TTh", "Th", "H", "T", "O"], ["9", "0", "5", "1", "2"], 0),
});
add("g4-maths-large-b-q03", {
  figure: pvc(["TTh", "Th", "H", "T", "O"], ["2", "9", "3", "8", "4"], 1),
});
add("g4-maths-large-b-q07", {
  figure: pvb({ thousands: 3, hundreds: 0, tens: 5, ones: 7, label: "Expanded form" }),
});
add("g4-maths-large-b-q10", {
  figure: nl(3500, 3600, 3548, 25, "Nearest hundred?"),
});
add("g4-maths-large-b-q14", {
  figure: table(
    ["Number", "Digits"],
    [
      ["9,999", "4"],
      ["10,000", "5"],
      ["99,999", "5"],
    ],
    [1, 0],
  ),
});
add("g4-maths-large-b-q17", {
  figure: pvc(["TTh", "Th", "H", "T", "O"], ["5", "5", "5", "5", "5"], 3),
});

// ---------- Maths: Fractions (~15 / 48) — heavy pictorial ----------
add("g4-maths-fractions-a-q01", { figure: fc(4, 1, true, "1 piece of 4") });
add("g4-maths-fractions-a-q03", {
  options: {
    a: { figure: fc(2, 1, true), text: "2 equal parts, 1 shaded" },
    b: { figure: fc(2, 1, false), text: "2 unequal parts, smaller shaded" },
    c: { figure: grid(2, 2, [0], "1 of 4"), text: "4 equal parts, 1 shaded" },
    d: { figure: fc(3, 1, true), text: "3 equal parts, 1 shaded" },
  },
});
add("g4-maths-fractions-a-q04", { figure: fc(3, 1, true, "1 of 3") });
add("g4-maths-fractions-a-q07", {
  figure: fb(2, 1, "1/2", { parts: 4, shaded: 1, label: "1/4" }),
});
add("g4-maths-fractions-a-q08", { figure: grid(2, 2, [0, 1, 2], "3 of 4 shaded") });
add("g4-maths-fractions-a-q10", { figure: fb(2, 2, "2 halves = 1 whole") });
add("g4-maths-fractions-a-q12", {
  figure: fb(2, 1, "1/2", { parts: 4, shaded: 2, label: "2/4" }),
});
add("g4-maths-fractions-a-q15", { figure: fb(4, 1, "1/4 left after eating 3/4? wait — stem driven") });
add("g4-maths-fractions-a-q16", {
  options: {
    a: { figure: fc(4, 1, true), text: "Circle: 1 of 4 equal" },
    b: { figure: grid(2, 2, [0]), text: "Square: 1 of 4 equal" },
    c: { figure: fb(4, 1, "unequal widths"), text: "Unequal strips, 1 shaded" },
    d: { figure: fb(4, 1, "equal strips"), text: "Equal strips, 1 shaded" },
  },
});
// Fix a-q15 — roti left is 3/4
overlays["g4-maths-fractions-a-q15"] = { figure: fb(4, 3, "3 parts left of 4") };

add("g4-maths-fractions-a-q17", {
  figure: fb(5, 3, "3/5", { parts: 5, shaded: 2, label: "2/5" }),
});
add("g4-maths-fractions-b-q03", {
  options: {
    a: { figure: grid(2, 2, [0], "unequal?"), text: "4 unequal, 1 shaded" },
    b: { figure: grid(1, 2, [0]), text: "2 equal, 1 shaded (=1/2)" },
    c: { figure: grid(2, 2, [0, 1, 2]), text: "4 equal, 3 shaded" },
    d: { figure: grid(2, 2, [0]), text: "4 equal, 1 shaded" },
  },
});
add("g4-maths-fractions-b-q07", {
  figure: fb(3, 1, "1/3", { parts: 2, shaded: 1, label: "1/2" }),
});
add("g4-maths-fractions-b-q08", { figure: fb(2, 1, "1/2 of ribbon") });
add("g4-maths-fractions-b-q12", {
  figure: fb(3, 1, "1/3", { parts: 6, shaded: 2, label: "2/6" }),
});
add("g4-maths-fractions-b-q15", { figure: fb(6, 2, "2 eaten → 4/6 left") });
add("g4-maths-fractions-b-q16", {
  figure: shapes([
    { kind: "rectangle", label: "big + 2 small" },
  ]),
});

// ---------- Maths: Multiply / Divide (~15 / 48) ----------
add("g4-maths-muldiv-a-q01", { figure: arr(3, 4, "3 × 4") });
add("g4-maths-muldiv-a-q03", { figure: arr(5, 6, "5 rows of 6") });
add("g4-maths-muldiv-a-q05", { figure: nl(0, 45, 36, 9, "Jumps of 9") });
add("g4-maths-muldiv-a-q08", { figure: arr(4, 7, "4 × 7") });
add("g4-maths-muldiv-a-q10", {
  figure: table(
    ["", "×3"],
    [
      ["12", "36"],
      ["15", "?"],
    ],
    [1, 1],
  ),
});
add("g4-maths-muldiv-a-q12", { figure: pvb({ tens: 4, ones: 6, label: "46 × 3 (blocks)" }) });
add("g4-maths-muldiv-a-q15", { figure: arr(8, 4, "32 ÷ 4 groups") });
add("g4-maths-muldiv-a-q18", {
  figure: shapes([
    { kind: "triangle", label: "7×8=56", highlight: true },
  ]),
});
add("g4-maths-muldiv-b-q02", { figure: arr(6, 5, "6 × 5") });
add("g4-maths-muldiv-b-q04", { figure: nl(0, 40, 28, 7, "Jumps of 7") });
add("g4-maths-muldiv-b-q07", { figure: arr(9, 3, "27 ÷ 3") });
add("g4-maths-muldiv-b-q09", { figure: arr(2, 12, "2 × 12") });
add("g4-maths-muldiv-b-q11", {
  figure: table(
    ["Fact family"],
    [["6 × 9 = 54"], ["54 ÷ 9 = ?"]],
    [1, 0],
  ),
});
add("g4-maths-muldiv-b-q14", { figure: arr(5, 8, "40 ÷ 5") });
add("g4-maths-muldiv-b-q18", { figure: pvb({ hundreds: 2, tens: 1, ones: 4, label: "214 × 4" }) });

// ---------- Science: Food (~12 / 48) ----------
add("g4-sci-food-a-q01", { figure: diag("food-plate") });
add("g4-sci-food-a-q04", { figure: diag("food-plate", ["grow"]) });
add("g4-sci-food-a-q07", { figure: diag("food-plate", ["protect"]) });
add("g4-sci-food-a-q10", { figure: diag("plant", ["leaf"]) });
add("g4-sci-food-a-q14", {
  figure: table(
    ["Food", "Group"],
    [
      ["Rice", "Go"],
      ["Dal", "Grow"],
      ["Carrot", "Protect"],
    ],
  ),
});
add("g4-sci-food-a-q18", { figure: diag("food-plate", ["go"]) });
add("g4-sci-food-b-q02", { figure: diag("food-plate") });
add("g4-sci-food-b-q05", { figure: diag("plant") });
add("g4-sci-food-b-q08", {
  figure: table(
    ["Need", "Helps"],
    [
      ["Protein", "Grow"],
      ["Carbs", "Energy"],
      ["Vitamins", "Protect"],
    ],
    [0, 0],
  ),
});
add("g4-sci-food-b-q12", { figure: diag("food-plate", ["protect", "go"]) });
add("g4-sci-food-b-q16", { figure: diag("food-plate", ["grow"]) });
add("g4-sci-food-b-q20", { figure: diag("plant", ["root", "stem"]) });

// ---------- Science: Matter (~12 / 48) ----------
add("g4-sci-matter-a-q01", { figure: diag("matter-states") });
add("g4-sci-matter-a-q03", { figure: diag("matter-states", ["liquid"]) });
add("g4-sci-matter-a-q06", { figure: diag("matter-states", ["gas"]) });
add("g4-sci-matter-a-q09", { figure: diag("water-cycle", ["evaporation"]) });
add("g4-sci-matter-a-q12", { figure: diag("matter-states", ["solid"], "solid") });
add("g4-sci-matter-a-q16", {
  figure: table(
    ["State", "Shape"],
    [
      ["Solid", "Own shape"],
      ["Liquid", "Container"],
      ["Gas", "Fills space"],
    ],
  ),
});
add("g4-sci-matter-b-q02", { figure: diag("matter-states") });
add("g4-sci-matter-b-q05", { figure: diag("matter-states", ["solid"]) });
add("g4-sci-matter-b-q08", { figure: diag("water-cycle", ["condensation"]) });
add("g4-sci-matter-b-q11", { figure: diag("matter-states", ["gas"]) });
add("g4-sci-matter-b-q15", {
  figure: shapes([
    { kind: "square", label: "Ice" },
    { kind: "rectangle", label: "Water", highlight: true },
    { kind: "circle", label: "Steam" },
  ]),
});
add("g4-sci-matter-b-q19", { figure: diag("matter-states", ["liquid", "gas"]) });

// ---------- Science: Water (~14 / 48) ----------
add("g4-sci-water-a-q01", { figure: diag("water-cycle") });
add("g4-sci-water-a-q04", { figure: diag("water-cycle", ["evaporation"]) });
add("g4-sci-water-a-q06", { figure: diag("water-cycle", ["condensation"]) });
add("g4-sci-water-a-q08", { figure: diag("water-cycle", ["precipitation"]) });
add("g4-sci-water-a-q11", { figure: diag("water-cycle", ["sun"]) });
add("g4-sci-water-a-q15", {
  figure: table(
    ["Step", "Name"],
    [
      ["1", "Evaporation"],
      ["2", "Condensation"],
      ["3", "Precipitation"],
    ],
  ),
});
add("g4-sci-water-a-q18", { figure: diag("water-cycle", ["evaporation", "condensation"]) });
add("g4-sci-water-b-q02", { figure: diag("water-cycle") });
add("g4-sci-water-b-q05", { figure: diag("water-cycle", ["precipitation"]) });
add("g4-sci-water-b-q07", { figure: diag("matter-states", ["solid"]) });
add("g4-sci-water-b-q10", { figure: diag("water-cycle", ["condensation"]) });
add("g4-sci-water-b-q14", { figure: diag("water-cycle", ["evaporation"]) });
add("g4-sci-water-b-q17", {
  figure: shapes([
    { kind: "circle", label: "Sun", highlight: true },
    { kind: "rectangle", label: "Pond" },
    { kind: "circle", label: "Cloud" },
  ]),
});
add("g4-sci-water-b-q21", { figure: diag("water-cycle", ["precipitation", "sun"]) });

// ---------- English: light pictorial (~5 each where useful) ----------
add("g4-eng-ch02-a-q03", {
  figure: table(
    ["Word", "Type"],
    [
      ["quickly", "adverb?"],
      ["happy", "adjective?"],
    ],
  ),
});
add("g4-eng-ch02-a-q08", {
  figure: shapes([
    { kind: "rectangle", label: "Noun" },
    { kind: "rectangle", label: "Verb", highlight: true },
  ]),
});
add("g4-eng-ch02-b-q04", {
  figure: table(
    ["Sentence part"],
    [["Subject"], ["Predicate"]],
    [0, 0],
  ),
});
add("g4-eng-ch02-b-q12", {
  figure: shapes([
    { kind: "circle", label: "a / an" },
    { kind: "square", label: "the", highlight: true },
  ]),
});
add("g4-eng-ch02-b-q18", {
  figure: table(["Tense", "Example"], [["Past", "went"], ["Present", "goes"]], [0, 0]),
});

add("g4-eng-ch03-a-q02", {
  figure: shapes([
    { kind: "circle", label: "synonym" },
    { kind: "circle", label: "antonym", highlight: true },
  ]),
});
add("g4-eng-ch03-a-q09", {
  figure: table(["Word", "Meaning"], [["brave", "?"], ["huge", "very big"]]),
});
add("g4-eng-ch03-b-q05", {
  figure: shapes([
    { kind: "triangle", label: "prefix" },
    { kind: "rectangle", label: "root", highlight: true },
  ]),
});
add("g4-eng-ch03-b-q11", {
  figure: table(["Pair", "Relation"], [["hot–cold", "opposites"], ["big–large", "same"]]),
});
add("g4-eng-ch03-b-q16", {
  figure: shapes([{ kind: "hexagon", label: "compound?", highlight: true }]),
});

add("g4-eng-ch01-a-q05", {
  figure: table(["Strategy"], [["Look"], ["Link"], ["Decide"]], [1, 0]),
});
add("g4-eng-ch01-a-q12", {
  figure: shapes([
    { kind: "rectangle", label: "Fact" },
    { kind: "rectangle", label: "Opinion", highlight: true },
  ]),
});
add("g4-eng-ch01-b-q06", {
  figure: table(["Clue type"], [["Word in sentence"], ["Picture in mind"]]),
});
add("g4-eng-ch01-b-q14", {
  figure: shapes([{ kind: "circle", label: "Main idea", highlight: true }]),
});
add("g4-eng-ch01-b-q20", {
  figure: table(["Question"], [["Who?"], ["What?"], ["Why?"]], [2, 0]),
});

// Validate IDs exist in content
const contentDir = path.join(ROOT, "lib/prep/content");
const allText = fs
  .readdirSync(contentDir)
  .filter((f) => f.startsWith("g4-"))
  .map((f) => fs.readFileSync(path.join(contentDir, f), "utf8"))
  .join("\n");
const missing = Object.keys(overlays).filter((id) => !allText.includes(`"${id}"`));
if (missing.length) {
  console.warn("WARN missing ids (" + missing.length + "):", missing.slice(0, 30).join(", "));
}

// Per-chapter counts
const counts = {};
for (const id of Object.keys(overlays)) {
  const m = id.match(/^g4-([a-z]+)-([a-z]+)/);
  const key = m ? `g4-${m[1]}-${m[2]}` : id.split("-").slice(0, 3).join("-");
  // better: g4-maths-large, g4-maths-fractions, etc.
  const parts = id.split("-");
  let chap;
  if (parts[1] === "maths") chap = `maths-${parts[2]}`;
  else if (parts[1] === "science") chap = `science-${parts[2]}`;
  else if (parts[1] === "english") chap = `english-${parts[2]}`;
  else if (parts[1] === "sci") chap = `science-${parts[2]}`;
  else chap = parts.slice(1, 3).join("-");
  // ids are g4-maths-large-a-q01, g4-sci-food-a-q01, g4-eng-ch02-a-q03
  if (id.startsWith("g4-maths-large")) chap = "maths-large";
  else if (id.startsWith("g4-maths-fractions")) chap = "maths-fractions";
  else if (id.startsWith("g4-maths-multiply")) chap = "maths-multiply";
  else if (id.startsWith("g4-science-food") || id.startsWith("g4-sci-food")) chap = "science-food";
  else if (id.startsWith("g4-science-matter") || id.startsWith("g4-sci-matter")) chap = "science-matter";
  else if (id.startsWith("g4-science-water") || id.startsWith("g4-sci-water")) chap = "science-water";
  else if (id.startsWith("g4-eng-ch02")) chap = "english-grammar";
  else if (id.startsWith("g4-eng-ch03")) chap = "english-words";
  else if (id.startsWith("g4-eng-ch01")) chap = "english-reading";
  counts[chap] = (counts[chap] || 0) + 1;
}

const body = `import type { FigureSpec } from "../types";

/** Pictorial overlays for Grade 4 — original SVG specs (not SOF scans). */
export type PictorialOverlay = {
  figure?: FigureSpec;
  options?: Partial<
    Record<"a" | "b" | "c" | "d", { figure?: FigureSpec; text?: string }>
  >;
};

export const G4_PICTORIAL_OVERLAYS: Record<string, PictorialOverlay> = ${JSON.stringify(overlays, null, 2)};

export const G4_PICTORIAL_STATS = ${JSON.stringify({ total: Object.keys(overlays).length, byChapter: counts, missing }, null, 2)} as const;
`;

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, body);
console.log("Wrote", OUT);
console.log("Total overlays:", Object.keys(overlays).length);
console.log("By chapter:", counts);
console.log("Missing:", missing.length);
