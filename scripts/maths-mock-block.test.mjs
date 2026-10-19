import { test } from "node:test";
import assert from "node:assert/strict";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createJiti } from "jiti";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const jiti = createJiti(import.meta.url, { alias: { "@": ROOT } });
const prep = jiti(path.join(ROOT, "lib/prep/index.ts"));
const mocks = jiti(path.join(ROOT, "lib/prep/mocks/index.ts"));
const GRADES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const baseId = (id) => id.replace(/^paper-\d+-/, "");

for (const g of GRADES) {
  test(`Maths G${g} mock: 30 items = 18 sampled + the 12-item LR/Achievers closing block`, () => {
    const paper = prep.getMockPaper("maths", g);
    assert.equal(paper.length, 30);
    const block = mocks.mockBlockFor("maths", g).map((q) => q.id);
    assert.equal(block.length, 12);
    assert.deepEqual(paper.slice(-12).map((q) => baseId(q.id)), block, "paper ends with the block, in order");
    assert.ok(paper.slice(0, 18).every((q) => !q.id.includes("-lrach-")), "first 18 are sampled chapter items");
    assert.equal(new Set(paper.map((q) => baseId(q.id))).size, 30, "no item twice");
  });
  test(`Maths G${g} block: 7 LR + 5 Achievers, easy 3 / medium 4 / hard 5, 4 SVGs, keys 3/3/3/3`, () => {
    const items = mocks.mockAddendaFor("maths", g);
    assert.equal(items.length, 12);
    const count = (f) => items.reduce((m, it) => ((m[f(it)] = (m[f(it)] ?? 0) + 1), m), {});
    assert.deepEqual(count((it) => it.section), { "logical-reasoning": 7, achievers: 5 });
    assert.deepEqual(count((it) => it.difficulty), { easy: 3, medium: 4, hard: 5 });
    assert.deepEqual(count((it) => it.question.answerId), { a: 3, b: 3, c: 3, d: 3 });
    const skills = new Set(items.filter((it) => it.section === "logical-reasoning").map((it) => it.skill));
    for (const s of ["coding-decoding", "direction-sense", "figure-analogy", "odd-one-out"]) assert.ok(skills.has(s), `LR skill ${s}`);
    assert.ok([...skills].some((s) => /series|pattern/.test(s)), "a pattern/series item");
    const svgs = items.filter((it) => it.question.figure?.type === "svg");
    assert.equal(svgs.length, 4);
    for (const it of svgs) {
      const root = it.question.figure.markup.match(/^<svg\b[^>]*>/)?.[0] ?? "";
      for (const attr of ['xmlns="http://www.w3.org/2000/svg"', "viewBox=", 'role="img"', "aria-label="]) assert.ok(root.includes(attr), `${it.question.id} svg ${attr}`);
      assert.ok(it.question.figure.markup.endsWith("</svg>"));
    }
    items.forEach((it, i) => assert.equal(it.question.id, `g${g}-maths-lrach-a-q${String(i + 1).padStart(2, "0")}`));
  });
}

test("English mock lengths are unchanged (35 for G1–4, 50 for G5–10)", () => {
  for (const g of GRADES) assert.equal(prep.getMockPaper("english", g).length, g <= 4 ? 35 : 50);
});
