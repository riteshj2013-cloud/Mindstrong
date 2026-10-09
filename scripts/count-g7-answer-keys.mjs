#!/usr/bin/env node
/** Count answerId letters per G7 chapter/set. Expect ~6 each (exactly 6 for 24-item sets). */
import fs from "node:fs";
import path from "node:path";

const dir = path.join(process.cwd(), "lib/prep/content");
const files = fs.readdirSync(dir).filter((f) => f.startsWith("g7-") && f.endsWith(".ts")).sort();
let ok = true;
const subject = { maths: { a: 0, b: 0, c: 0, d: 0 }, english: { a: 0, b: 0, c: 0, d: 0 }, science: { a: 0, b: 0, c: 0, d: 0 } };

for (const f of files) {
  const t = fs.readFileSync(path.join(dir, f), "utf8");
  const re =
    /id:\s*"(g7-[^"]+-[ab]-q\d+)"[\s\S]*?answerId:\s*"([abcd])"/g;
  const bySet = { a: { a: 0, b: 0, c: 0, d: 0 }, b: { a: 0, b: 0, c: 0, d: 0 } };
  let m;
  while ((m = re.exec(t))) {
    const set = m[1].includes("-a-q") ? "a" : "b";
    bySet[set][m[2]]++;
    const subj = f.includes("maths") ? "maths" : f.includes("english") ? "english" : "science";
    subject[subj][m[2]]++;
  }
  for (const set of ["a", "b"]) {
    const c = bySet[set];
    const n = c.a + c.b + c.c + c.d;
    const balanced = n === 24 && c.a === 6 && c.b === 6 && c.c === 6 && c.d === 6;
    if (!balanced) ok = false;
    console.log(
      `${f} set-${set}: A=${c.a} B=${c.b} C=${c.c} D=${c.d} (n=${n}) ${balanced ? "OK" : "FAIL"}`,
    );
  }
}

console.log("\nSubject totals:");
for (const [s, c] of Object.entries(subject)) {
  const n = c.a + c.b + c.c + c.d;
  console.log(`  ${s}: A=${c.a} B=${c.b} C=${c.c} D=${c.d} (n=${n})`);
}

if (!ok) {
  console.error("\nG7 answer-key balance check FAILED");
  process.exit(1);
}
console.log("\nG7 answer-key balance check PASSED");
