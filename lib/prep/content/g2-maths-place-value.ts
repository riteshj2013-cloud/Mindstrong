import type { ChapterDef, PrepQuestion } from "../types";

/** Place Value - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g2-maths-place-a-q01",
    prompt: "In 47, the digit 4 stands for\u2026",
    options: [
      { id: "a", text: "4 ones" },
      { id: "b", text: "4 tens" },
      { id: "c", text: "40 tens" },
      { id: "d", text: "7 tens" }
    ],
    answerId: "b",
    explanation: "4 is in the tens place \u2192 4 tens.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-place-a-q02",
    prompt: "In 47, the digit 7 stands for\u2026",
    options: [
      { id: "a", text: "7 tens" },
      { id: "b", text: "7 ones" },
      { id: "c", text: "70" },
      { id: "d", text: "4 ones" }
    ],
    answerId: "b",
    explanation: "7 is in the ones place \u2192 7 ones.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-place-a-q03",
    prompt: "How many tens in 30?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "0" },
      { id: "c", text: "30" },
      { id: "d", text: "10" }
    ],
    answerId: "a",
    explanation: "30 = 3 tens and 0 ones.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-place-a-q04",
    prompt: "10 ones make\u2026",
    options: [
      { id: "a", text: "1 ten" },
      { id: "b", text: "10 tens" },
      { id: "c", text: "1 one" },
      { id: "d", text: "0" }
    ],
    answerId: "a",
    explanation: "10 ones bundle into 1 ten.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-place-a-q05",
    prompt: "Which number is 2 tens and 5 ones?",
    options: [
      { id: "a", text: "25" },
      { id: "b", text: "52" },
      { id: "c", text: "205" },
      { id: "d", text: "7" }
    ],
    answerId: "a",
    explanation: "2 tens + 5 ones = 25.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-place-a-q06",
    prompt: "Expand 38.",
    options: [
      { id: "a", text: "30 + 8" },
      { id: "b", text: "3 + 8" },
      { id: "c", text: "38 + 0 only wrong" },
      { id: "d", text: "80 + 3" }
    ],
    answerId: "a",
    explanation: "38 = 30 + 8.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-place-a-q07",
    prompt: "Which is greater: 29 or 92?",
    options: [
      { id: "a", text: "29" },
      { id: "b", text: "92" },
      { id: "c", text: "same" },
      { id: "d", text: "0" }
    ],
    answerId: "b",
    explanation: "92 has more tens, so it is greater.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-place-a-q08",
    prompt: "What is the place of 6 in 61?",
    options: [
      { id: "a", text: "ones" },
      { id: "b", text: "tens" },
      { id: "c", text: "hundreds" },
      { id: "d", text: "none" }
    ],
    answerId: "b",
    explanation: "In 61, 6 is in the tens place.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-place-a-q09",
    prompt: "45 = ___ tens + ___ ones",
    options: [
      { id: "a", text: "4 and 5" },
      { id: "b", text: "5 and 4" },
      { id: "c", text: "40 and 5 wrong words" },
      { id: "d", text: "9 and 0" }
    ],
    answerId: "a",
    explanation: "45 = 4 tens and 5 ones.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-place-a-q10",
    prompt: "Smallest two-digit number?",
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "11" },
      { id: "c", text: "9" },
      { id: "d", text: "01" }
    ],
    answerId: "a",
    explanation: "10 is the smallest two-digit number.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-place-a-q11",
    prompt: "Biggest two-digit number?",
    options: [
      { id: "a", text: "99" },
      { id: "b", text: "90" },
      { id: "c", text: "100" },
      { id: "d", text: "89" }
    ],
    answerId: "a",
    explanation: "99 is the biggest two-digit number.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-place-a-q12",
    prompt: "20 + 7 = ?",
    options: [
      { id: "a", text: "27" },
      { id: "b", text: "207" },
      { id: "c", text: "72" },
      { id: "d", text: "9" }
    ],
    answerId: "a",
    explanation: "20 + 7 = 27.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-place-a-q13",
    prompt: "Riya has 3 packs of 10 stickers and 4 loose. How many?",
    options: [
      { id: "a", text: "34" },
      { id: "b", text: "43" },
      { id: "c", text: "7" },
      { id: "d", text: "304" }
    ],
    answerId: "a",
    explanation: "3 tens + 4 ones = 34.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-place-a-q14",
    prompt: "Which shows 5 tens?",
    options: [
      { id: "a", text: "50" },
      { id: "b", text: "5" },
      { id: "c", text: "15" },
      { id: "d", text: "500" }
    ],
    answerId: "a",
    explanation: "5 tens = 50.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-place-a-q15",
    prompt: "In 80, how many ones?",
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "8" },
      { id: "c", text: "80" },
      { id: "d", text: "10" }
    ],
    answerId: "a",
    explanation: "80 has 0 ones.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-place-a-q16",
    prompt: "Order small to big: 15, 51, 25. Middle number?",
    options: [
      { id: "a", text: "15" },
      { id: "b", text: "25" },
      { id: "c", text: "51" },
      { id: "d", text: "10" }
    ],
    answerId: "b",
    explanation: "Order: 15, 25, 51. Middle is 25.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g2-maths-place-b-q01",
    prompt: "In 63, the digit 6 stands for\u2026",
    options: [
      { id: "a", text: "6 ones" },
      { id: "b", text: "6 tens" },
      { id: "c", text: "60 ones as tens value" },
      { id: "d", text: "3 tens" }
    ],
    answerId: "b",
    explanation: "6 is in tens \u2192 6 tens (60).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-place-b-q02",
    prompt: "In 63, the digit 3 stands for\u2026",
    options: [
      { id: "a", text: "3 tens" },
      { id: "b", text: "3 ones" },
      { id: "c", text: "30" },
      { id: "d", text: "6 ones" }
    ],
    answerId: "b",
    explanation: "3 is in ones \u2192 3 ones.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-place-b-q03",
    prompt: "How many tens in 70?",
    options: [
      { id: "a", text: "7" },
      { id: "b", text: "0" },
      { id: "c", text: "70" },
      { id: "d", text: "10" }
    ],
    answerId: "a",
    explanation: "70 = 7 tens.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-place-b-q04",
    prompt: "Which number is 4 tens and 0 ones?",
    options: [
      { id: "a", text: "40" },
      { id: "b", text: "4" },
      { id: "c", text: "400" },
      { id: "d", text: "14" }
    ],
    answerId: "a",
    explanation: "4 tens + 0 ones = 40.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-place-b-q05",
    prompt: "Expand 56.",
    options: [
      { id: "a", text: "50 + 6" },
      { id: "b", text: "5 + 6" },
      { id: "c", text: "56 + 1" },
      { id: "d", text: "60 + 5" }
    ],
    answerId: "a",
    explanation: "56 = 50 + 6.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-place-b-q06",
    prompt: "Which is smaller: 48 or 84?",
    options: [
      { id: "a", text: "48" },
      { id: "b", text: "84" },
      { id: "c", text: "same" },
      { id: "d", text: "100" }
    ],
    answerId: "a",
    explanation: "48 has fewer tens than 84.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-place-b-q07",
    prompt: "Place of 9 in 19?",
    options: [
      { id: "a", text: "tens" },
      { id: "b", text: "ones" },
      { id: "c", text: "hundreds" },
      { id: "d", text: "none" }
    ],
    answerId: "b",
    explanation: "In 19, 9 is ones.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-place-b-q08",
    prompt: "9 tens + 2 ones = ?",
    options: [
      { id: "a", text: "92" },
      { id: "b", text: "29" },
      { id: "c", text: "11" },
      { id: "d", text: "902" }
    ],
    answerId: "a",
    explanation: "9 tens + 2 ones = 92.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-place-b-q09",
    prompt: "100 is how many tens?",
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "100" },
      { id: "c", text: "1" },
      { id: "d", text: "0" }
    ],
    answerId: "a",
    explanation: "100 = 10 tens.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-place-b-q10",
    prompt: "Aman has \u20b910 notes: 2 notes, and \u20b91 coins: 3. Total?",
    options: [
      { id: "a", text: "\u20b923" },
      { id: "b", text: "\u20b932" },
      { id: "c", text: "\u20b95" },
      { id: "d", text: "\u20b913" }
    ],
    answerId: "a",
    explanation: "2 tens + 3 ones = \u20b923.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-place-b-q11",
    prompt: "Which equals 1 ten?",
    options: [
      { id: "a", text: "10 ones" },
      { id: "b", text: "1 one" },
      { id: "c", text: "100 ones" },
      { id: "d", text: "2 ones" }
    ],
    answerId: "a",
    explanation: "1 ten = 10 ones.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-place-b-q12",
    prompt: "35 = 30 + ?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "3" },
      { id: "c", text: "35" },
      { id: "d", text: "0" }
    ],
    answerId: "a",
    explanation: "35 = 30 + 5.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-place-b-q13",
    prompt: "Greatest using digits 2 and 8?",
    options: [
      { id: "a", text: "82" },
      { id: "b", text: "28" },
      { id: "c", text: "20" },
      { id: "d", text: "8" }
    ],
    answerId: "a",
    explanation: "Put larger digit in tens: 82.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-place-b-q14",
    prompt: "Least using digits 2 and 8?",
    options: [
      { id: "a", text: "28" },
      { id: "b", text: "82" },
      { id: "c", text: "20" },
      { id: "d", text: "8" }
    ],
    answerId: "a",
    explanation: "Smaller tens digit: 28.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-place-b-q15",
    prompt: "How many ones in 44?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "40" },
      { id: "c", text: "44" },
      { id: "d", text: "8" }
    ],
    answerId: "a",
    explanation: "Ones digit is 4.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-place-b-q16",
    prompt: "2 tens more than 15 is\u2026",
    options: [
      { id: "a", text: "35" },
      { id: "b", text: "17" },
      { id: "c", text: "25" },
      { id: "d", text: "13" }
    ],
    answerId: "a",
    explanation: "15 + 20 = 35.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83e\uddf1",
    title: "Place Value",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "place-value",
    speak: "Tens and ones build numbers.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "place-value",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Tens", reveal: "Bundles of 10", emoji: "\ud83d\udd1f" },
      { label: "Ones", reveal: "Loose ones", emoji: "1\ufe0f\u20e3" },
      { label: "Value", reveal: "Digit times place", emoji: "\u2728" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "In 47, digit 4 means\u2026",
    options: [
        { id: "a", text: "4 ones" },
        { id: "b", text: "4 tens" },
        { id: "c", text: "47 tens" },
        { id: "d", text: "7 tens" }
    ],
    answerId: "b",
    why: "4 is in the tens place.",
    visual: "place-value",
    speak: "In 47, digit 4 means\u2026",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Tens and ones", "Expand the number", "Sets ready \u2014 16 each"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g2MathsPlaceValue: ChapterDef = {
  id: "place-value",
  title: "Place Value",
  emoji: "\ud83e\uddf1",
  blurb: "Tens and ones",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "numbers",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "numbers",
      questions: SET_B,
    },
  ],
  paperTopics: ["numbers", "add-sub"],
};

export const g2MathsPlaceValueQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
