import { test } from "node:test";
import assert from "node:assert/strict";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createJiti } from "jiti";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const jiti = createJiti(import.meta.url, { alias: { "@": ROOT } });
const { sanitizeSvg } = jiti(path.join(ROOT, "lib/prep/sanitizeSvg.ts"));

test("sanitizeSvg drops data-* attributes but keeps drawing attributes", () => {
  const raw = '<svg viewBox="0 0 10 10" aria-label="A clock face"><g class="part clock" data-time="7:40" data-cx=\'5\' data-cy=5><circle cx="5" cy="5" r="4"/></g></svg>';
  const out = sanitizeSvg(raw);
  assert.doesNotMatch(out, /data-/);
  assert.match(out, /class="part clock"/);
  assert.match(out, /<circle cx="5" cy="5" r="4"\/>/);
  assert.match(out, /aria-label="A clock face"/);
});

test("G4 Time & Money clock figures carry no data-* attributes", () => {
  const tm = jiti(path.join(ROOT, "lib/prep/content/g4-maths-time-money.ts")).g4MathsTimeMoney;
  for (const s of tm.sets) for (const q of s.questions) {
    if (!q.figure) continue;
    assert.doesNotMatch(q.figure.markup, /\sdata-[\w-]+\s*=/, q.id);
  }
});
