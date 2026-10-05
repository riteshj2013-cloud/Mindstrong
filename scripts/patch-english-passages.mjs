#!/usr/bin/env node
import fs from "fs";

const md = fs.readFileSync("/workspace/mindstrong/grade-5-english/chapter-01.md", "utf8");
const bank = md.split("## Passage bank (for quizzes)")[1].split("## Set A")[0];

function extract(label) {
  const re = new RegExp(`### ${label}[\\s\\S]*?\\n([\\s\\S]*?)(?=\\n### |$)`);
  const m = bank.match(re);
  if (!m) throw new Error("missing " + label);
  return m[1].replace(/^>\s?/gm, "").trim();
}

const P1 = extract("P1");
const P2 = extract("P2");
const P3 = extract("P3");
const N1 = extract("N1");

const passages = { P1, P2, P3, N1 };

const file = "/workspace/Mindstrong/lib/prep/content/g5-english-detective.ts";
let src = fs.readFileSync(file, "utf8");

// Patch each question prompt that starts with "Read Passage X" or "Read Notice N1"
src = src.replace(
  /prompt: "(Read (?:Passage|Notice) (P[123]|N1)\.[^"]*)"/g,
  (full, stem, key) => {
    const pass = passages[key];
    if (!pass) return full;
    const combined = `${pass}\n\n${stem}`;
    return `prompt: ${JSON.stringify(combined)}`;
  },
);

fs.writeFileSync(file, src);
console.log("Patched English prompts with passages");
// sanity: count embedded
const count = (src.match(/On the morning of Pongal/g) || []).length;
console.log("P1 embeds:", count);
