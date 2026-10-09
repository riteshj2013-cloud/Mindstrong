import type { ChapterDef, PrepQuestion } from "../types";

/** Add & Subtract - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g2-maths-addsub-a-q01",
    prompt: "12 + 5 = ?",
    options: [
      { id: "a", text: "17" },
      { id: "b", text: "15" },
      { id: "c", text: "18" },
      { id: "d", text: "16" }
    ],
    answerId: "a",
    explanation: "12 + 5 = 17.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-a-q02",
    prompt: "20 \u2212 4 = ?",
    options: [
      { id: "a", text: "14" },
      { id: "b", text: "16" },
      { id: "c", text: "24" },
      { id: "d", text: "15" }
    ],
    answerId: "b",
    explanation: "20 \u2212 4 = 16.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-a-q03",
    prompt: "15 + 10 = ?",
    options: [
      { id: "a", text: "150" },
      { id: "b", text: "20" },
      { id: "c", text: "25" },
      { id: "d", text: "5" }
    ],
    answerId: "c",
    explanation: "15 + 10 = 25.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-a-q04",
    prompt: "18 \u2212 8 = ?",
    options: [
      { id: "a", text: "26" },
      { id: "b", text: "9" },
      { id: "c", text: "8" },
      { id: "d", text: "10" }
    ],
    answerId: "d",
    explanation: "18 \u2212 8 = 10.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-a-q05",
    prompt: "9 + 6 = ?",
    options: [
      { id: "a", text: "15" },
      { id: "b", text: "16" },
      { id: "c", text: "13" },
      { id: "d", text: "14" }
    ],
    answerId: "a",
    explanation: "9 + 6 = 15.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-a-q06",
    prompt: "14 \u2212 5 = ?",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "9" },
      { id: "c", text: "10" },
      { id: "d", text: "19" }
    ],
    answerId: "b",
    explanation: "14 \u2212 5 = 9.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-a-q07",
    prompt: "Riya has 20 pencils. She gives 3. Left?",
    options: [
      { id: "a", text: "15" },
      { id: "b", text: "16" },
      { id: "c", text: "17" },
      { id: "d", text: "23" }
    ],
    answerId: "c",
    explanation: "20 \u2212 3 = 17.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-a-q08",
    prompt: "7 + 8 = ?",
    options: [
      { id: "a", text: "16" },
      { id: "b", text: "13" },
      { id: "c", text: "14" },
      { id: "d", text: "15" }
    ],
    answerId: "d",
    explanation: "7 + 8 = 15.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-a-q09",
    prompt: "30 \u2212 10 = ?",
    options: [
      { id: "a", text: "20" },
      { id: "b", text: "40" },
      { id: "c", text: "25" },
      { id: "d", text: "10" }
    ],
    answerId: "a",
    explanation: "30 \u2212 10 = 20.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-a-q10",
    prompt: "11 + 11 = ?",
    options: [
      { id: "a", text: "21" },
      { id: "b", text: "22" },
      { id: "c", text: "23" },
      { id: "d", text: "12" }
    ],
    answerId: "b",
    explanation: "11 + 11 = 22.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-a-q11",
    prompt: "A pencil costs \u20b98. An eraser costs \u20b95. Total?",
    options: [
      { id: "a", text: "\u20b93" },
      { id: "b", text: "\u20b912" },
      { id: "c", text: "\u20b913" },
      { id: "d", text: "\u20b914" }
    ],
    answerId: "c",
    explanation: "8 + 5 = \u20b913.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-a-q12",
    prompt: "25 \u2212 5 = ?",
    options: [
      { id: "a", text: "30" },
      { id: "b", text: "10" },
      { id: "c", text: "15" },
      { id: "d", text: "20" }
    ],
    answerId: "d",
    explanation: "25 \u2212 5 = 20.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-a-q13",
    prompt: "16 + 4 = ?",
    options: [
      { id: "a", text: "20" },
      { id: "b", text: "21" },
      { id: "c", text: "12" },
      { id: "d", text: "19" }
    ],
    answerId: "a",
    explanation: "16 + 4 = 20.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-a-q14",
    prompt: "19 \u2212 9 = ?",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "10" },
      { id: "c", text: "28" },
      { id: "d", text: "11" }
    ],
    answerId: "b",
    explanation: "19 \u2212 9 = 10.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-a-q15",
    prompt: "13 + 6 = ?",
    options: [
      { id: "a", text: "17" },
      { id: "b", text: "18" },
      { id: "c", text: "19" },
      { id: "d", text: "20" }
    ],
    answerId: "c",
    explanation: "13 + 6 = 19.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-a-q16",
    prompt: "Which is correct?",
    options: [
      { id: "a", text: "10 \u2212 3 = 6" },
      { id: "b", text: "10 \u2212 3 = 13" },
      { id: "c", text: "10 \u2212 3 = 8" },
      { id: "d", text: "10 \u2212 3 = 7" }
    ],
    answerId: "d",
    explanation: "10 \u2212 3 = 7.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g2-maths-addsub-b-q01",
    prompt: "14 + 5 = ?",
    options: [
      { id: "a", text: "19" },
      { id: "b", text: "20" },
      { id: "c", text: "15" },
      { id: "d", text: "18" }
    ],
    answerId: "a",
    explanation: "14 + 5 = 19.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-b-q02",
    prompt: "22 \u2212 2 = ?",
    options: [
      { id: "a", text: "18" },
      { id: "b", text: "20" },
      { id: "c", text: "24" },
      { id: "d", text: "12" }
    ],
    answerId: "b",
    explanation: "22 \u2212 2 = 20.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-b-q03",
    prompt: "8 + 9 = ?",
    options: [
      { id: "a", text: "15" },
      { id: "b", text: "16" },
      { id: "c", text: "17" },
      { id: "d", text: "18" }
    ],
    answerId: "c",
    explanation: "8 + 9 = 17.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-b-q04",
    prompt: "17 \u2212 7 = ?",
    options: [
      { id: "a", text: "24" },
      { id: "b", text: "11" },
      { id: "c", text: "9" },
      { id: "d", text: "10" }
    ],
    answerId: "d",
    explanation: "17 \u2212 7 = 10.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-b-q05",
    prompt: "21 + 4 = ?",
    options: [
      { id: "a", text: "25" },
      { id: "b", text: "26" },
      { id: "c", text: "20" },
      { id: "d", text: "24" }
    ],
    answerId: "a",
    explanation: "21 + 4 = 25.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-b-q06",
    prompt: "15 \u2212 6 = ?",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "9" },
      { id: "c", text: "10" },
      { id: "d", text: "21" }
    ],
    answerId: "b",
    explanation: "15 \u2212 6 = 9.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-b-q07",
    prompt: "Kabir has \u20b930. He spends \u20b910. Left?",
    options: [
      { id: "a", text: "\u20b915" },
      { id: "b", text: "\u20b910" },
      { id: "c", text: "\u20b920" },
      { id: "d", text: "\u20b940" }
    ],
    answerId: "c",
    explanation: "30 \u2212 10 = \u20b920.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-b-q08",
    prompt: "6 + 7 = ?",
    options: [
      { id: "a", text: "14" },
      { id: "b", text: "11" },
      { id: "c", text: "12" },
      { id: "d", text: "13" }
    ],
    answerId: "d",
    explanation: "6 + 7 = 13.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-b-q09",
    prompt: "40 \u2212 20 = ?",
    options: [
      { id: "a", text: "20" },
      { id: "b", text: "60" },
      { id: "c", text: "30" },
      { id: "d", text: "10" }
    ],
    answerId: "a",
    explanation: "40 \u2212 20 = 20.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-b-q10",
    prompt: "12 + 12 = ?",
    options: [
      { id: "a", text: "22" },
      { id: "b", text: "24" },
      { id: "c", text: "26" },
      { id: "d", text: "12" }
    ],
    answerId: "b",
    explanation: "12 + 12 = 24.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-b-q11",
    prompt: "A toy costs \u20b915. A ball costs \u20b910. Total?",
    options: [
      { id: "a", text: "\u20b930" },
      { id: "b", text: "\u20b920" },
      { id: "c", text: "\u20b925" },
      { id: "d", text: "\u20b95" }
    ],
    answerId: "c",
    explanation: "15 + 10 = \u20b925.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-b-q12",
    prompt: "28 \u2212 8 = ?",
    options: [
      { id: "a", text: "36" },
      { id: "b", text: "10" },
      { id: "c", text: "18" },
      { id: "d", text: "20" }
    ],
    answerId: "d",
    explanation: "28 \u2212 8 = 20.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-b-q13",
    prompt: "9 + 9 = ?",
    options: [
      { id: "a", text: "18" },
      { id: "b", text: "19" },
      { id: "c", text: "17" },
      { id: "d", text: "16" }
    ],
    answerId: "a",
    explanation: "9 + 9 = 18.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-b-q14",
    prompt: "16 \u2212 6 = ?",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "10" },
      { id: "c", text: "22" },
      { id: "d", text: "12" }
    ],
    answerId: "b",
    explanation: "16 \u2212 6 = 10.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-b-q15",
    prompt: "23 + 5 = ?",
    options: [
      { id: "a", text: "18" },
      { id: "b", text: "27" },
      { id: "c", text: "28" },
      { id: "d", text: "29" }
    ],
    answerId: "c",
    explanation: "23 + 5 = 28.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-b-q16",
    prompt: "Which is correct?",
    options: [
      { id: "a", text: "12 + 3 = 16" },
      { id: "b", text: "12 + 3 = 9" },
      { id: "c", text: "12 + 3 = 14" },
      { id: "d", text: "12 + 3 = 15" }
    ],
    answerId: "d",
    explanation: "12 + 3 = 15.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83e\uddee",
    title: "Add & Subtract",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "number-line",
    speak: "Add puts together. Subtract takes away.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "number-line",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Add", reveal: "More altogether", emoji: "\u2795" },
      { label: "Subtract", reveal: "Take away", emoji: "\u2796" },
      { label: "Check", reveal: "Count carefully", emoji: "\u2705" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "12 + 5 = ?",
    options: [
        { id: "a", text: "16" },
        { id: "b", text: "17" },
        { id: "c", text: "15" },
        { id: "d", text: "18" }
    ],
    answerId: "b",
    why: "12 + 5 = 17.",
    visual: "number-line",
    speak: "12 + 5 = ?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Add or take away", "Use rupee stories too", "Sets ready \u2014 16 each"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g2MathsAddSubtract: ChapterDef = {
  id: "add-subtract",
  title: "Add & Subtract",
  emoji: "\ud83e\uddee",
  blurb: "Within 40 \u2014 put together & take away",
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

export const g2MathsAddSubtractQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
