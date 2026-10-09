import type { ChapterDef, PrepQuestion } from "../types";

/** Add - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g1-maths-add-a-q01",
    prompt: "2 + 3 = ?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "6" },
      { id: "c", text: "3" },
      { id: "d", text: "4" }
    ],
    answerId: "a",
    explanation: "2 + 3 = 5.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-add-a-q02",
    prompt: "1 + 1 = ?",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "2" },
      { id: "c", text: "3" },
      { id: "d", text: "0" }
    ],
    answerId: "b",
    explanation: "1 + 1 = 2.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-add-a-q03",
    prompt: "4 + 2 = ?",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "5" },
      { id: "c", text: "6" },
      { id: "d", text: "7" }
    ],
    answerId: "c",
    explanation: "4 + 2 = 6.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-add-a-q04",
    prompt: "5 + 0 = ?",
    options: [
      { id: "a", text: "50" },
      { id: "b", text: "1" },
      { id: "c", text: "0" },
      { id: "d", text: "5" }
    ],
    answerId: "d",
    explanation: "Adding 0 keeps 5.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-add-a-q05",
    prompt: "3 + 3 = ?",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "7" },
      { id: "c", text: "9" },
      { id: "d", text: "5" }
    ],
    answerId: "a",
    explanation: "3 + 3 = 6.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-add-a-q06",
    prompt: "6 + 1 = ?",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "7" },
      { id: "c", text: "8" },
      { id: "d", text: "5" }
    ],
    answerId: "b",
    explanation: "6 + 1 = 7.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-add-a-q07",
    prompt: "Riya has 2 sweets. She gets 4 more. Total?",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "5" },
      { id: "c", text: "6" },
      { id: "d", text: "7" }
    ],
    answerId: "c",
    explanation: "2 + 4 = 6.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-add-a-q08",
    prompt: "0 + 8 = ?",
    options: [
      { id: "a", text: "80" },
      { id: "b", text: "9" },
      { id: "c", text: "0" },
      { id: "d", text: "8" }
    ],
    answerId: "d",
    explanation: "0 + 8 = 8.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-add-a-q09",
    prompt: "7 + 2 = ?",
    options: [
      { id: "a", text: "9" },
      { id: "b", text: "10" },
      { id: "c", text: "7" },
      { id: "d", text: "8" }
    ],
    answerId: "a",
    explanation: "7 + 2 = 9.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-add-a-q10",
    prompt: "4 + 4 = ?",
    options: [
      { id: "a", text: "7" },
      { id: "b", text: "8" },
      { id: "c", text: "9" },
      { id: "d", text: "6" }
    ],
    answerId: "b",
    explanation: "4 + 4 = 8.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-add-a-q11",
    prompt: "Aman has \u20b95. Amma gives \u20b92 more. How much now?",
    options: [
      { id: "a", text: "\u20b93" },
      { id: "b", text: "\u20b96" },
      { id: "c", text: "\u20b97" },
      { id: "d", text: "\u20b98" }
    ],
    answerId: "c",
    explanation: "5 + 2 = 7 rupees.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-add-a-q12",
    prompt: "1 + 6 = ?",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "5" },
      { id: "c", text: "6" },
      { id: "d", text: "7" }
    ],
    answerId: "d",
    explanation: "1 + 6 = 7.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-add-a-q13",
    prompt: "5 + 3 = ?",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "9" },
      { id: "c", text: "6" },
      { id: "d", text: "7" }
    ],
    answerId: "a",
    explanation: "5 + 3 = 8.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-add-a-q14",
    prompt: "2 + 2 + 2 = ?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "6" },
      { id: "c", text: "8" },
      { id: "d", text: "4" }
    ],
    answerId: "b",
    explanation: "2 + 2 + 2 = 6.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-add-a-q15",
    prompt: "9 + 1 = ?",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "9" },
      { id: "c", text: "10" },
      { id: "d", text: "11" }
    ],
    answerId: "c",
    explanation: "9 + 1 = 10.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-add-a-q16",
    prompt: "Which sum equals 5?",
    options: [
      { id: "a", text: "4 + 2" },
      { id: "b", text: "1 + 1" },
      { id: "c", text: "1 + 3" },
      { id: "d", text: "2 + 3" }
    ],
    answerId: "d",
    explanation: "2 + 3 = 5.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g1-maths-add-b-q01",
    prompt: "3 + 4 = ?",
    options: [
      { id: "a", text: "7" },
      { id: "b", text: "8" },
      { id: "c", text: "5" },
      { id: "d", text: "6" }
    ],
    answerId: "a",
    explanation: "3 + 4 = 7.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-add-b-q02",
    prompt: "5 + 5 = ?",
    options: [
      { id: "a", text: "9" },
      { id: "b", text: "10" },
      { id: "c", text: "11" },
      { id: "d", text: "8" }
    ],
    answerId: "b",
    explanation: "5 + 5 = 10.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-add-b-q03",
    prompt: "2 + 5 = ?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "6" },
      { id: "c", text: "7" },
      { id: "d", text: "8" }
    ],
    answerId: "c",
    explanation: "2 + 5 = 7.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-add-b-q04",
    prompt: "8 + 0 = ?",
    options: [
      { id: "a", text: "80" },
      { id: "b", text: "9" },
      { id: "c", text: "0" },
      { id: "d", text: "8" }
    ],
    answerId: "d",
    explanation: "8 + 0 = 8.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-add-b-q05",
    prompt: "1 + 8 = ?",
    options: [
      { id: "a", text: "9" },
      { id: "b", text: "10" },
      { id: "c", text: "7" },
      { id: "d", text: "8" }
    ],
    answerId: "a",
    explanation: "1 + 8 = 9.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-add-b-q06",
    prompt: "6 + 3 = ?",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "9" },
      { id: "c", text: "10" },
      { id: "d", text: "7" }
    ],
    answerId: "b",
    explanation: "6 + 3 = 9.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-add-b-q07",
    prompt: "Neha has 4 crayons. She finds 3 more. Total?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "6" },
      { id: "c", text: "7" },
      { id: "d", text: "8" }
    ],
    answerId: "c",
    explanation: "4 + 3 = 7.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-add-b-q08",
    prompt: "7 + 3 = ?",
    options: [
      { id: "a", text: "11" },
      { id: "b", text: "8" },
      { id: "c", text: "9" },
      { id: "d", text: "10" }
    ],
    answerId: "d",
    explanation: "7 + 3 = 10.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-add-b-q09",
    prompt: "2 + 7 = ?",
    options: [
      { id: "a", text: "9" },
      { id: "b", text: "10" },
      { id: "c", text: "7" },
      { id: "d", text: "8" }
    ],
    answerId: "a",
    explanation: "2 + 7 = 9.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-add-b-q10",
    prompt: "4 + 1 = ?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "5" },
      { id: "c", text: "6" },
      { id: "d", text: "3" }
    ],
    answerId: "b",
    explanation: "4 + 1 = 5.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-add-b-q11",
    prompt: "Papa gives \u20b93. Dadi gives \u20b93. Total money?",
    options: [
      { id: "a", text: "\u20b93" },
      { id: "b", text: "\u20b95" },
      { id: "c", text: "\u20b96" },
      { id: "d", text: "\u20b97" }
    ],
    answerId: "c",
    explanation: "3 + 3 = 6 rupees.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-add-b-q12",
    prompt: "8 + 1 = ?",
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "7" },
      { id: "c", text: "8" },
      { id: "d", text: "9" }
    ],
    answerId: "d",
    explanation: "8 + 1 = 9.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-add-b-q13",
    prompt: "3 + 5 = ?",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "9" },
      { id: "c", text: "6" },
      { id: "d", text: "7" }
    ],
    answerId: "a",
    explanation: "3 + 5 = 8.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-add-b-q14",
    prompt: "1 + 2 + 3 = ?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "6" },
      { id: "c", text: "7" },
      { id: "d", text: "4" }
    ],
    answerId: "b",
    explanation: "1 + 2 + 3 = 6.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-add-b-q15",
    prompt: "6 + 4 = ?",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "9" },
      { id: "c", text: "10" },
      { id: "d", text: "11" }
    ],
    answerId: "c",
    explanation: "6 + 4 = 10.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-add-b-q16",
    prompt: "Which sum equals 8?",
    options: [
      { id: "a", text: "2 + 4" },
      { id: "b", text: "5 + 2" },
      { id: "c", text: "3 + 3" },
      { id: "d", text: "4 + 4" }
    ],
    answerId: "d",
    explanation: "4 + 4 = 8.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\u2795",
    title: "Add",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "number-line",
    speak: "Adding puts groups together.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "number-line",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Add", reveal: "Put together", emoji: "\u2795" },
      { label: "Zero", reveal: "Adding 0 changes nothing", emoji: "0\ufe0f\u20e3" },
      { label: "Count on", reveal: "Start and count forward", emoji: "\ud83d\udc49" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "2 + 3 = ?",
    options: [
        { id: "a", text: "4" },
        { id: "b", text: "5" },
        { id: "c", text: "6" },
        { id: "d", text: "3" }
    ],
    answerId: "b",
    why: "2 + 3 = 5.",
    visual: "number-line",
    speak: "2 + 3 = ?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Put groups together", "Count on", "Sets ready \u2014 16 each"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g1MathsAdd: ChapterDef = {
  id: "add",
  title: "Add",
  emoji: "\u2795",
  blurb: "Put groups together",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "add-sub",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "add-sub",
      questions: SET_B,
    },
  ],
  paperTopics: ["add-sub", "numbers"],
};

export const g1MathsAddQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
