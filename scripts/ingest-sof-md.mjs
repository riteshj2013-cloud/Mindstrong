#!/usr/bin/env node
/**
 * Parse writer markdown into SOF chapter TypeScript modules.
 * Usage: node scripts/ingest-sof-md.mjs
 */
import fs from "fs";
import path from "path";

const ROOT = "/workspace/mindstrong";
const OUT = "/workspace/Mindstrong/lib/prep/content";

function letterToId(L) {
  return L.toLowerCase();
}

function esc(s) {
  return s
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${");
}

function qToTs(q) {
  const opts = q.options
    .map((o) => `      { id: "${o.id}", text: ${JSON.stringify(o.text)} }`)
    .join(",\n");
  const hints = q.hints?.length
    ? `,\n    hints: ${JSON.stringify(q.hints)}`
    : "";
  return `  {
    id: ${JSON.stringify(q.id)},
    prompt: ${JSON.stringify(q.prompt)},
    options: [
${opts}
    ],
    answerId: ${JSON.stringify(q.answerId)},
    explanation: ${JSON.stringify(q.explanation || "")}${hints}
  }`;
}

/** Science format: ### Qn / **Stem:** / A) ... / **Answer:** X */
function parseScienceQuiz(block, setId) {
  const qs = [];
  const parts = block.split(/^### Q\d+/m).slice(1);
  let i = 0;
  for (const part of parts) {
    i++;
    const stem = part.match(/\*\*Stem:\*\*\s*(.+?)(?=\n\*\*Options:|\n\*\*Answer:)/s)?.[1]?.trim();
    const ans = part.match(/\*\*Answer:\*\*\s*([A-D])/i)?.[1]?.toUpperCase();
    const expl = part.match(/\*\*Explanation:\*\*\s*(.+?)(?=\n###|\n*$)/s)?.[1]?.trim();
    const optBlock = part.match(/\*\*Options:\*\*\s*([\s\S]*?)(?=\*\*Answer:)/)?.[1] || "";
    const options = [];
    for (const m of optBlock.matchAll(/^([A-D])\)\s*(.+)$/gm)) {
      options.push({ id: letterToId(m[1]), text: m[2].trim() });
    }
    if (!stem || !ans || options.length < 4) {
      console.warn(`Science ${setId} Q${i} parse incomplete`, { stem: !!stem, ans, opts: options.length });
      continue;
    }
    qs.push({
      id: `g5-sci-plants-${setId}-q${String(i).padStart(2, "0")}`,
      prompt: stem,
      options,
      answerId: letterToId(ans),
      explanation: expl || "",
      hints: ["Think about what you learned in the lesson.", "Eliminate options that don't match the key idea."],
    });
  }
  return qs;
}

/** Maths format: ### Qnn / - **stem**: / - A) / - **answer**: X */
function parseMathsQuiz(block, setId) {
  const qs = [];
  const parts = block.split(/^### Q\d+/m).slice(1);
  let i = 0;
  for (const part of parts) {
    i++;
    const stem = part.match(/-\s*\*\*stem\*\*:\s*(.+)/)?.[1]?.trim();
    const ans = part.match(/-\s*\*\*answer\*\*:\s*([A-D])/i)?.[1]?.toUpperCase();
    const expl = part.match(/-\s*\*\*explanation\*\*:\s*(.+)/)?.[1]?.trim();
    const options = [];
    for (const m of part.matchAll(/-\s*([A-D])\)\s*(.+)/g)) {
      options.push({ id: letterToId(m[1]), text: m[2].trim() });
    }
    if (!stem || !ans || options.length < 4) {
      console.warn(`Maths ${setId} Q${i} parse incomplete`, { stem: !!stem, ans, opts: options.length });
      continue;
    }
    qs.push({
      id: `g5-maths-large-${setId}-q${String(i).padStart(2, "0")}`,
      prompt: stem,
      options,
      answerId: letterToId(ans),
      explanation: expl || "",
      hints: ["Look at place value carefully.", "Check digit count before comparing."],
    });
  }
  return qs;
}

/** English format: ### Qnn / - stem: | / - options: / - A: / - answer: A */
function parseEnglishQuiz(block, setId) {
  const qs = [];
  const parts = block.split(/^### Q\d+/m).slice(1);
  let i = 0;
  for (const part of parts) {
    i++;
    // stem may be multiline after stem: |
    let stem = "";
    const stemBlock = part.match(/-\s*stem:\s*\|\s*\n((?:[ \t]+.+\n?)+)/);
    if (stemBlock) {
      stem = stemBlock[1]
        .split("\n")
        .map((l) => l.replace(/^[ \t]{2}/, "").trimEnd())
        .join("\n")
        .trim();
    } else {
      stem = part.match(/-\s*stem:\s*(.+)/)?.[1]?.trim() || "";
    }
    const ans = part.match(/-\s*answer:\s*([A-D])/i)?.[1]?.toUpperCase();
    let expl = "";
    const explBlock = part.match(/-\s*explanation:\s*\|\s*\n((?:[ \t]+.+\n?)+)/);
    if (explBlock) {
      expl = explBlock[1]
        .split("\n")
        .map((l) => l.replace(/^[ \t]{2}/, "").trimEnd())
        .join(" ")
        .trim();
    } else {
      expl = part.match(/-\s*explanation:\s*(.+)/)?.[1]?.trim() || "";
    }
    const options = [];
    for (const m of part.matchAll(/-\s*([A-D]):\s*(.+)/g)) {
      options.push({ id: letterToId(m[1]), text: m[2].trim() });
    }
    if (!stem || !ans || options.length < 4) {
      console.warn(`English ${setId} Q${i} parse incomplete`, { stem: !!stem, ans, opts: options.length });
      continue;
    }
    qs.push({
      id: `g5-eng-ch01-${setId}-q${String(i).padStart(2, "0")}`,
      prompt: stem,
      options,
      answerId: letterToId(ans),
      explanation: expl || "",
      hints: ["Look, Link, Decide — find clues in the passage.", "Eliminate answers the text does not support."],
    });
  }
  return qs;
}

function emitModule({ exportName, chapterMeta, lessonTs, setA, setB }) {
  const body = `import type { ChapterDef, PrepQuestion } from "../types";

/** ${chapterMeta.title} — authored SOF content (original). */

const SET_A: PrepQuestion[] = [
${setA.map(qToTs).join(",\n")}
];

const SET_B: PrepQuestion[] = [
${setB.map(qToTs).join(",\n")}
];

${lessonTs}

export const ${exportName}: ChapterDef = {
  id: ${JSON.stringify(chapterMeta.id)},
  title: ${JSON.stringify(chapterMeta.title)},
  emoji: ${JSON.stringify(chapterMeta.emoji)},
  blurb: ${JSON.stringify(chapterMeta.blurb)},
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: ${JSON.stringify(chapterMeta.topic)},
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: ${JSON.stringify(chapterMeta.topic)},
      questions: SET_B,
    },
  ],
  paperTopics: ${JSON.stringify(chapterMeta.paperTopics)},
};

export const ${exportName}Questions: PrepQuestion[] = [...SET_A, ...SET_B];
`;
  return body;
}

// ---------- Science ----------
const sciMd = fs.readFileSync(
  path.join(ROOT, "sof-science/grade-5/chapter-01-plants-seeds-germination-dispersal.md"),
  "utf8",
);
const sciA = parseScienceQuiz(
  sciMd.split("## Quiz Set A")[1].split("## Quiz Set B")[0],
  "a",
);
const sciB = parseScienceQuiz(sciMd.split("## Quiz Set B")[1], "b");
console.log(`Science: Set A ${sciA.length}, Set B ${sciB.length}`);

const sciLesson = `const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "🌱",
    title: "A seed's secret lunch box",
    body: [
      "Every seed holds a baby plant and its food.",
      "We'll peek inside, wake a seed up, and see how seeds travel.",
      "Skip anytime — practice sets are unlocked.",
    ],
    cta: "Open a seed!",
    visual: "plant",
    speak: "Every seed is like a tiny lunch box with a baby plant inside.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "What's inside a seed?",
    lead: "Tap each part of a bean seed.",
    visual: "plant",
    speak: "Tap each part. The seed coat protects. Cotyledons store food. The embryo is the baby plant.",
    cards: [
      { label: "Seed coat", reveal: "Outer skin — protects from injury and drying", emoji: "🧥" },
      { label: "Cotyledons", reveal: "Fat halves that store food for the baby plant", emoji: "🥜" },
      { label: "Radicle", reveal: "Baby root — grows downward first", emoji: "🪴" },
      { label: "Plumule", reveal: "Baby shoot — grows up toward light", emoji: "🌿" },
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: "Wake-up conditions",
    visual: "plant",
    speak: "Most seeds need water, air, and warmth to germinate. They do not need soil or sunlight to start.",
    steps: [
      "Germination = a seed starting to grow",
      "Needs: water + air + warmth",
      "Dry jar → no water → stays asleep",
      "Under boiled water → little air → no sprout",
      "Fridge → too cold → no sprout",
      "Surprise: soil and sunlight come later",
    ],
    punchline: "Water, air, and warmth wake most seeds.",
  },
  {
    id: "t1",
    type: "try",
    title: "Which jar sprouts?",
    prompt: "Moong on wet cotton in a warm room — will it sprout?",
    options: [
      { id: "a", text: "Yes — it has water, air, and warmth" },
      { id: "b", text: "No — it needs soil first" },
      { id: "c", text: "No — it needs bright sunlight" },
      { id: "d", text: "No — moong seeds never germinate" },
    ],
    answerId: "a",
    why: "Wet cotton gives water; room air and warmth do the rest. Stored food feeds the seedling.",
    visual: "plant",
    speak: "Will moong seeds on wet cotton in a warm room sprout?",
  },
  {
    id: "d2",
    type: "demo",
    title: "Stages of germination",
    visual: "plant",
    speak: "First the seed soaks water and swells. The coat bursts. The radicle grows down. Then the plumule grows up and leaves open.",
    steps: [
      "Seed soaks water and swells",
      "Seed coat softens and splits",
      "Radicle comes out first → root",
      "Plumule grows up → shoot",
      "First leaves open; cotyledons shrink",
    ],
    punchline: "Root first, then shoot, then leaves.",
  },
  {
    id: "r2",
    type: "reveal",
    title: "How seeds travel",
    lead: "Tap each dispersal helper.",
    visual: "plant",
    speak: "Wind, water, animals, and exploding pods help seeds travel away from the parent plant.",
    cards: [
      { label: "Wind", reveal: "Light seeds with hairs or wings (madar, cotton, drumstick)", emoji: "🌬️" },
      { label: "Water", reveal: "Floaters like coconut and lotus", emoji: "🥥" },
      { label: "Animals", reveal: "Hooks on fur, or seeds in fruits birds eat", emoji: "🐕" },
      { label: "Explosion", reveal: "Pods burst — balsam, pea, castor", emoji: "💥" },
    ],
  },
  {
    id: "c1",
    type: "check",
    title: "Quick check",
    visual: "plant",
    speak: "Why is seed dispersal useful for plants?",
    question: {
      id: "sci-check",
      prompt: "Why is seed dispersal useful?",
      options: [
        { id: "a", text: "It makes seeds heavier" },
        { id: "b", text: "It reduces crowding for light, water, and space" },
        { id: "c", text: "It keeps all seeds under the parent" },
        { id: "d", text: "It makes the parent taller" },
      ],
      answerId: "b",
      explanation: "Spreading out gives seedlings room to grow without fighting the parent.",
      hints: ["Think about crowded seedlings under one tree.", "What do plants compete for?"],
    },
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Seed scientist!",
    bullets: [
      "Parts: coat, cotyledons, radicle, plumule",
      "Germinate with water, air, warmth",
      "Dispersal: wind, water, animals, explosion",
      "Practice Set A or B whenever you're ready",
    ],
    cta: "Back to chapter",
    speak: "You learned seed parts, germination needs, and four ways seeds travel.",
  },
];`;

fs.writeFileSync(
  path.join(OUT, "g5-science-plants.ts"),
  emitModule({
    exportName: "g5SciencePlants",
    chapterMeta: {
      id: "plants-seeds",
      title: "Plants: Seeds & Dispersal",
      emoji: "🌱",
      blurb: "Germination, seed parts & travel",
      topic: "living-things",
      paperTopics: ["living-things", "earth-space"],
    },
    lessonTs: sciLesson,
    setA: sciA,
    setB: sciB,
  }),
);

// ---------- Maths ----------
const mathMd = fs.readFileSync(
  path.join(ROOT, "sof-maths/grade-5/chapter-01-large-numbers.md"),
  "utf8",
);
const mathA = parseMathsQuiz(
  mathMd.split("## Practice Set A")[1].split("## Practice Set B")[0],
  "a",
);
const mathB = parseMathsQuiz(
  mathMd.split("## Practice Set B")[1].split("## Answer Key")[0],
  "b",
);
console.log(`Maths: Set A ${mathA.length}, Set B ${mathB.length}`);

const mathLesson = `const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "🏟️",
    title: "Big numbers all around us",
    body: [
      "A cricket stadium can hold more than fifty thousand people!",
      "Today we read, write, and compare really big numbers — Indian place value.",
      "Lesson is optional; jump to a set anytime.",
    ],
    cta: "Start counting!",
    visual: "place-value",
    speak: "Have you ever wondered how many people fit in a big cricket stadium? Today we will learn to read, write and play with really big numbers.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Indian place value",
    lead: "Tap each period. Commas: first 3 from the right, then every 2.",
    visual: "place-value",
    speak: "In India we group digits as ones, thousands, lakhs and crores. Commas come after the first three digits from the right, and then after every two digits.",
    cards: [
      { label: "Ones period", reveal: "Hundreds | Tens | Ones (3 digits)", emoji: "1️⃣" },
      { label: "Thousands", reveal: "Ten Thousands | Thousands", emoji: "🔟" },
      { label: "Lakhs", reveal: "Ten Lakhs | Lakhs", emoji: "💯" },
      { label: "Crores", reveal: "Crores (and up)", emoji: "🏆" },
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: "Place value vs face value",
    visual: "place-value",
    speak: "The face value of a digit is the digit itself. Its place value depends on where it sits. In 4,70,312 the seven is worth seventy thousand.",
    steps: [
      "Face value = the digit itself (7 is just 7)",
      "Place value = digit × its place",
      "In 4,70,312 the 7 is in ten-thousands → 70,000",
      "Expanded form adds each place value",
    ],
    punchline: "Same digit, different place → different value.",
  },
  {
    id: "t1",
    type: "try",
    title: "Your turn",
    prompt: "What is the place value of 6 in 2,61,045?",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "600" },
      { id: "c", text: "6,000" },
      { id: "d", text: "60,000" },
    ],
    answerId: "d",
    why: "The 6 sits in the ten-thousands place → 60,000.",
    visual: "place-value",
    speak: "What is the place value of 6 in 2 lakh 61 thousand 45?",
  },
  {
    id: "d2",
    type: "demo",
    title: "Compare, form, round",
    visual: "number-line",
    speak: "First count the digits. More digits means bigger. If equal, compare from the left. For the greatest number put big digits left. Never start the smallest with zero. Rounding: 5 or more rounds up.",
    steps: [
      "More digits → greater number",
      "Same length → compare left to right",
      "Greatest: biggest digits on the left",
      "Smallest: small digits left, but never lead with 0",
      "Round: look right; 5+ → round up",
    ],
    punchline: "Count digits, then compare places.",
  },
  {
    id: "c1",
    type: "check",
    title: "Quick check",
    visual: "number-line",
    speak: "Which is greater: 5,08,999 or 5,09,001?",
    question: {
      id: "math-check",
      prompt: "Which is greater?",
      options: [
        { id: "a", text: "5,08,999" },
        { id: "b", text: "5,09,001" },
        { id: "c", text: "They are equal" },
        { id: "d", text: "Cannot tell" },
      ],
      answerId: "b",
      explanation: "Same lakhs digit; ten-thousands: 0 vs 0; thousands: 8 vs 9 → 5,09,001 is greater.",
      hints: ["Compare from the left.", "Look at the thousands place."],
    },
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Large-number legend!",
    bullets: [
      "Indian commas: 3, then pairs",
      "Place value ≠ face value",
      "Compare digits, form extremes, round smart",
      "Set A and Set B ready — 24 MCQs each",
    ],
    cta: "Back to chapter",
    speak: "You can read, compare, form and round large numbers the Indian way.",
  },
];`;

fs.writeFileSync(
  path.join(OUT, "g5-maths-large-numbers.ts"),
  emitModule({
    exportName: "g5MathsLargeNumbers",
    chapterMeta: {
      id: "large-numbers",
      title: "Large Numbers",
      emoji: "🔢",
      blurb: "Indian place value to crores",
      topic: "place-value",
      paperTopics: ["place-value", "add-sub"],
    },
    lessonTs: mathLesson,
    setA: mathA,
    setB: mathB,
  }),
);

// ---------- English ----------
const engMd = fs.readFileSync(
  path.join(ROOT, "grade-5-english/chapter-01.md"),
  "utf8",
);
const engA = parseEnglishQuiz(
  engMd.split("## Set A — Practice quiz")[1].split("## Set B — Alternate quiz")[0],
  "a",
);
const engB = parseEnglishQuiz(engMd.split("## Set B — Alternate quiz")[1], "b");
console.log(`English: Set A ${engA.length}, Set B ${engB.length}`);

const engLesson = `const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "🕵️",
    title: "Hello, detective!",
    body: [
      "Today you read stories the way a detective looks at a puzzle.",
      "Writers leave clues — you Look, Link, Decide.",
      "Optional lesson; sets unlock either way.",
    ],
    cta: "Hunt clues!",
    visual: "sentence",
    speak: "Hello, detective! Today, you will read stories the way a detective looks at a puzzle.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Look · Link · Decide",
    lead: "Tap each detective move.",
    visual: "sentence",
    speak: "Look for clues: what characters do, say, see, and feel. Link the clues to what you already know. Decide what makes the most sense.",
    cards: [
      { label: "Look", reveal: "Clues: what characters do, say, see, and feel", emoji: "👀" },
      { label: "Link", reveal: "Connect clues to real-life knowledge", emoji: "🔗" },
      { label: "Decide", reveal: "Pick what fits — then check the story again", emoji: "✅" },
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: "Clues without the word 'rain'",
    visual: "sentence",
    speak: "Asha opened her tiffin and groaned. Her shoes were muddy, and her hair was dripping. She shook out her soggy notebook. Muddy shoes, dripping hair, a soggy notebook. She got caught in the rain. And soggy means very wet.",
    steps: [
      "Muddy shoes + dripping hair + soggy notebook",
      "Link: rain makes things muddy and wet",
      "Decide: Asha got caught in the rain",
      "Bonus: soggy = very wet (from context)",
    ],
    punchline: "The story never said “rain” — you found it.",
  },
  {
    id: "t1",
    type: "try",
    title: "Your turn",
    prompt: "“Leela watered the plants because the soil felt dry.” Why did she water them?",
    options: [
      { id: "a", text: "The soil felt dry" },
      { id: "b", text: "It was raining" },
      { id: "c", text: "She was bored" },
      { id: "d", text: "The plants were fake" },
    ],
    answerId: "a",
    why: "The passage says because the soil felt dry — evidence beats guesses.",
    visual: "sentence",
    speak: "Why did Leela water the plants?",
  },
  {
    id: "d2",
    type: "demo",
    title: "Same trick for new words",
    visual: "word-cards",
    speak: "You can use the same trick for a new word. Read the sentences around it and ask, what would fit here?",
    steps: [
      "Read the sentences around the hard word",
      "Ask: what meaning would fit here?",
      "Check that it still makes sense in the story",
    ],
    punchline: "Context is your dictionary.",
  },
  {
    id: "c1",
    type: "check",
    title: "Quick check",
    visual: "sentence",
    speak: "Which habit makes you a better reading detective?",
    question: {
      id: "eng-check",
      prompt: "Best detective habit?",
      options: [
        { id: "a", text: "Guess without reading" },
        { id: "b", text: "Hunt for at least two clues before choosing" },
        { id: "c", text: "Skip the passage" },
        { id: "d", text: "Only read the options" },
      ],
      answerId: "b",
      explanation: "Two clues beat one guess. The answer hides in the passage.",
      hints: ["Evidence first.", "Look, Link, Decide."],
    },
  },
  {
    id: "w",
    type: "wrap",
    emoji: "🔎",
    title: "Wonderful work, detective!",
    bullets: [
      "Look · Link · Decide",
      "Vocab from context",
      "Grammar & expression in the sets",
      "Set A and Set B — 24 questions each",
    ],
    cta: "Back to chapter",
    speak: "Wonderful work, detective! The more closely you read, the more every story will tell you.",
  },
];`;

fs.writeFileSync(
  path.join(OUT, "g5-english-detective.ts"),
  emitModule({
    exportName: "g5EnglishDetective",
    chapterMeta: {
      id: "detective-eyes",
      title: "Detective Eyes",
      emoji: "🕵️",
      blurb: "Clues, inference & grammar",
      topic: "comprehension",
      paperTopics: ["comprehension", "grammar", "vocabulary"],
    },
    lessonTs: engLesson,
    setA: engA,
    setB: engB,
  }),
);

console.log("Wrote modules to", OUT);
