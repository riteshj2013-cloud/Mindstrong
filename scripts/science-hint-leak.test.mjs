import { test } from "node:test";
import assert from "node:assert/strict";
import { leakFindings, answerParts, stripLabel, tokens, headTerm } from "./science-hint-leak.mjs";

const errors = (h, a) => leakFindings(h, a).filter((f) => f.level === "error");
const warns = (h, a) => leakFindings(h, a).filter((f) => f.level === "warn");

// Regression: the four leaks found in review (fixed in f3b8eed). Hint text is the pre-f3b8eed version;
// the old checker (whole-answer, word-boundary match) passed all four.
test("g4-sci-food-b-q12: picture-label answer with parenthetical examples", () => {
  const hint = "Protective foods are fruits and vegetables full of vitamins. Which katori holds mango, guava and papaya?";
  const answer = "B — Fruits (mango, guava, papaya)";
  const rules = errors(hint, answer).map((f) => f.rule);
  assert.ok(rules.includes("answer-alternative"), "label stripped, plural folded: fruits = Fruits");
  assert.ok(rules.includes("paren-part"), "parenthetical examples named in the hint");
});
test("g4-sci-food-b-q15: picture-label answer, stop words between content words", () => {
  const hint = "Germs grow fast in warm places on uncovered food. Which picture shows dal open on a warm shelf?";
  assert.equal(errors(hint, "A — Open, on a warm shelf")[0]?.part, "open warm shelf");
});
test("g10-sci-chem-a-q18: leading article on the answer", () => {
  assert.equal(errors("Reducing agent donates electrons / removes oxygen.", "a reducing agent").length, 1);
});
test("g10-sci-chem-b-q14: leading 'an' on the answer", () => {
  assert.equal(errors("Oxidising agent gets reduced.", "an oxidising agent").length, 1);
});
test("the fixed (f3b8eed) hints for those items pass", () => {
  assert.equal(errors("Protective foods are full of vitamins and minerals that keep us healthy. Which katori holds a food rich in vitamins?", "B — Fruits (mango, guava, papaya)").length, 0);
  assert.equal(errors("Germs multiply quickly where it is warm, and an uncovered bowl lets them in. Which dal faces both of these problems?", "A — Open, on a warm shelf").length, 0);
  assert.equal(errors("Hydrogen takes oxygen away from copper oxide. What do we call a substance that removes oxygen from another and is itself oxidised?", "a reducing agent").length, 0);
  assert.equal(errors("MnO₂ loses oxygen and ends up as MnCl₂, while HCl becomes Cl₂. What role does a substance that gets reduced play?", "an oxidising agent").length, 0);
});

test("label prefixes are stripped", () => {
  for (const a of ["A — river", "B - river", "A) river", "(A) river", "Row C — river", "Card B: river", "Panel 2 — river"])
    assert.equal(stripLabel(a), "river", a);
  assert.equal(stripLabel("A body feature"), "A body feature", "an article is not a label");
});
test("unicode subscripts and case: CO₂ = co2", () => {
  assert.equal(errors("Which gas, CO2, turns lime water milky?", "CO₂").length, 1);
  assert.deepEqual(tokens("H₂O"), ["h2o"]);
});
test("plural / singular folding", () => {
  assert.equal(errors("Each kidney has about a million nephrons.", "nephron").length, 1);
  assert.equal(errors("Cells → tissues → organs.", "tissue").length, 1);
  assert.equal(errors("Bee home.", "bees").length, 1);
  assert.equal(errors("A hive has six-sided rooms made of wax.", "bees").length, 0);
});
test("'/' and ' or ' alternatives are each checked, only when every piece is short", () => {
  assert.equal(errors("Breathe in through your nose.", "nose / mouth").length, 1);
  assert.equal(errors("Strain it through a straining cloth.", "Filtration/straining").length, 1);
  assert.equal(errors("Compare a CNG bus with a diesel bus.", "Reducing harmful exhaust gases compared with petrol or diesel").length, 0);
  assert.deepEqual(answerParts("Vitamin D / calcium issues").main.slice(1), [["vitamin", "d"], ["calcium", "issue"]]);
});
test("a final one-letter word is kept: Vitamin A is not just 'vitamin'", () => {
  assert.deepEqual(tokens("Vitamin A"), ["vitamin", "a"]);
  assert.equal(errors("Recall which vitamin carrots are known for.", "Vitamin A").length, 0);
  assert.equal(errors("Carrots give vitamin A.", "Vitamin A").length, 1);
});
test("parenthetical parts: words are errors, labels are warnings", () => {
  assert.equal(errors("Good conducting liquids have mobile ions.", "Good conductor (conducting liquid)")[0]?.rule, "paren-part");
  const w = warns("Look where part 1 and part 2 point.", "The shoot (part 1) grew up, while the root (part 2) grew down.");
  assert.ok(w.every((f) => f.rule === "paren-word") && w.length === 2);
});
test("head term of a multi-word answer is a warning", () => {
  assert.equal(headTerm("thermal expansion of rails"), "expansion");
  const f = leakFindings("Real-life expansion.", "Thermal expansion of rails");
  assert.deepEqual(f.map((x) => [x.level, x.rule]), [["warn", "head-term"]]);
  assert.equal(headTerm("Picture Q"), null, "label nouns are not distinctive");
});
test("no false positive on unrelated hints", () => {
  assert.equal(leakFindings("Measure both angles from the normal.", "a law of reflection").length, 0);
  assert.equal(errors("Sit with a seedling.", "Root").length, 0);
});
