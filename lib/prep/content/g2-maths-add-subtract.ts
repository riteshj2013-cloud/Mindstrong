import type { ChapterDef, PrepQuestion } from "../types";

/** Add & Subtract - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g2-maths-addsub-a-q01",
    prompt: "12 + 5 = ?",
    options: [
      { id: "a", text: "17" },
      { id: "b", text: "16" },
      { id: "c", text: "15" },
      { id: "d", text: "18" }
    ],
    answerId: "a",
    explanation: "12 + 5 = 17: start at 12 and count on 5. 16 is tempting if you stop one count too soon.",
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
    explanation: "20 − 4 = 16: start at 20 and count back 4. 24 is tempting, but that adds 4 instead of taking it away.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-a-q03",
    prompt: "15 + 10 = ?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "150" },
      { id: "c", text: "25" },
      { id: "d", text: "20" }
    ],
    answerId: "c",
    explanation: "15 + 10 = 25: adding 1 ten turns 1 ten into 2 tens, and the 5 ones stay. 5 is tempting, but that takes away instead of adding.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-a-q04",
    prompt: "18 \u2212 8 = ?",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "26" },
      { id: "c", text: "9" },
      { id: "d", text: "10" }
    ],
    answerId: "d",
    explanation: "18 − 8 = 10: start at 18 and count back 8. 26 is tempting, but that adds 8 instead of taking it away.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-a-q05",
    prompt: "9 + 6 = ?",
    options: [
      { id: "a", text: "15" },
      { id: "b", text: "14" },
      { id: "c", text: "16" },
      { id: "d", text: "13" }
    ],
    answerId: "a",
    explanation: "9 + 6 = 15: start at 9 and count on 6. 14 is tempting if you stop one count too soon.",
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
    explanation: "14 − 5 = 9: start at 14 and count back 5. 19 is tempting, but that adds 5 instead of taking it away.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-a-q07",
    prompt: "Riya has 20 pencils. She gives 3. Left?",
    options: [
      { id: "a", text: "16" },
      { id: "b", text: "23" },
      { id: "c", text: "17" },
      { id: "d", text: "15" }
    ],
    answerId: "c",
    explanation: "Riya gives some pencils away, so take away: 20 − 3 = 17. 23 is tempting, but that adds 3 instead of taking them away.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-a-q08",
    prompt: "7 + 8 = ?",
    options: [
      { id: "a", text: "14" },
      { id: "b", text: "16" },
      { id: "c", text: "13" },
      { id: "d", text: "15" }
    ],
    answerId: "d",
    explanation: "7 + 8 = 15: start at 8 and count on 7. 14 is tempting if you stop one count too soon.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-a-q09",
    prompt: "30 \u2212 10 = ?",
    options: [
      { id: "a", text: "20" },
      { id: "b", text: "10" },
      { id: "c", text: "40" },
      { id: "d", text: "25" }
    ],
    answerId: "a",
    explanation: "30 − 10 = 20: 3 tens take away 1 ten leaves 2 tens. 40 is tempting, but that adds 10 instead of taking it away.",
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
    explanation: "11 + 11 = 22: 1 ten + 1 ten = 2 tens, and 1 one + 1 one = 2 ones. 12 is tempting, but that adds only 1 to 11 instead of all of 11.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-a-q11",
    prompt: "A pencil costs \u20b98. An eraser costs \u20b95. Total?",
    options: [
      { id: "a", text: "\u20b912" },
      { id: "b", text: "\u20b914" },
      { id: "c", text: "\u20b913" },
      { id: "d", text: "\u20b93" }
    ],
    answerId: "c",
    explanation: "Buying both means adding: ₹8 + ₹5 = ₹13. ₹3 is tempting, but that is the difference in price, not the total.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-a-q12",
    prompt: "25 \u2212 5 = ?",
    options: [
      { id: "a", text: "15" },
      { id: "b", text: "30" },
      { id: "c", text: "10" },
      { id: "d", text: "20" }
    ],
    answerId: "d",
    explanation: "25 − 5 = 20: start at 25 and count back 5. 30 is tempting, but that adds 5 instead of taking it away.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-a-q13",
    prompt: "16 + 4 = ?",
    options: [
      { id: "a", text: "20" },
      { id: "b", text: "19" },
      { id: "c", text: "21" },
      { id: "d", text: "12" }
    ],
    answerId: "a",
    explanation: "16 + 4 = 20: start at 16 and count on 4. 12 is tempting, but that takes away instead of adding.",
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
    explanation: "19 − 9 = 10: start at 19 and count back 9. 28 is tempting, but that adds 9 instead of taking it away.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-a-q15",
    prompt: "13 + 6 = ?",
    options: [
      { id: "a", text: "18" },
      { id: "b", text: "20" },
      { id: "c", text: "19" },
      { id: "d", text: "17" }
    ],
    answerId: "c",
    explanation: "13 + 6 = 19: start at 13 and count on 6. 18 is tempting if you stop one count too soon.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-a-q16",
    prompt: "Which is correct?",
    options: [
      { id: "a", text: "10 \u2212 3 = 8" },
      { id: "b", text: "10 \u2212 3 = 6" },
      { id: "c", text: "10 \u2212 3 = 13" },
      { id: "d", text: "10 \u2212 3 = 7" }
    ],
    answerId: "d",
    explanation: "Count back 3 from 10: 9, 8, 7, so 10 − 3 = 7. 10 − 3 = 13 is tempting, but that adds 3 instead of taking it away.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g2-maths-addsub-b-q01",
    prompt: "14 + 5 = ?",
    options: [
      { id: "a", text: "19" },
      { id: "b", text: "18" },
      { id: "c", text: "20" },
      { id: "d", text: "15" }
    ],
    answerId: "a",
    explanation: "14 + 5 = 19: start at 14 and count on 5. 18 is tempting if you stop one count too soon.",
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
    explanation: "22 − 2 = 20: start at 22 and count back 2. 24 is tempting, but that adds 2 instead of taking it away.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-b-q03",
    prompt: "8 + 9 = ?",
    options: [
      { id: "a", text: "16" },
      { id: "b", text: "18" },
      { id: "c", text: "17" },
      { id: "d", text: "15" }
    ],
    answerId: "c",
    explanation: "8 + 9 = 17: start at 9 and count on 8. 16 is tempting if you stop one count too soon.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-b-q04",
    prompt: "17 \u2212 7 = ?",
    options: [
      { id: "a", text: "9" },
      { id: "b", text: "24" },
      { id: "c", text: "11" },
      { id: "d", text: "10" }
    ],
    answerId: "d",
    explanation: "17 − 7 = 10: start at 17 and count back 7. 24 is tempting, but that adds 7 instead of taking it away.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-b-q05",
    prompt: "21 + 4 = ?",
    options: [
      { id: "a", text: "25" },
      { id: "b", text: "24" },
      { id: "c", text: "26" },
      { id: "d", text: "20" }
    ],
    answerId: "a",
    explanation: "21 + 4 = 25: start at 21 and count on 4. 24 is tempting if you stop one count too soon.",
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
    explanation: "15 − 6 = 9: start at 15 and count back 6. 21 is tempting, but that adds 6 instead of taking it away.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-b-q07",
    prompt: "Kabir has \u20b930. He spends \u20b910. Left?",
    options: [
      { id: "a", text: "\u20b910" },
      { id: "b", text: "\u20b940" },
      { id: "c", text: "\u20b920" },
      { id: "d", text: "\u20b915" }
    ],
    answerId: "c",
    explanation: "Kabir spends money, so take away: ₹30 − ₹10 = ₹20. ₹40 is tempting, but that adds the ₹10 instead of taking it away.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-b-q08",
    prompt: "6 + 7 = ?",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "14" },
      { id: "c", text: "11" },
      { id: "d", text: "13" }
    ],
    answerId: "d",
    explanation: "6 + 7 = 13: start at 7 and count on 6. 12 is tempting if you stop one count too soon.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-b-q09",
    prompt: "40 \u2212 20 = ?",
    options: [
      { id: "a", text: "20" },
      { id: "b", text: "10" },
      { id: "c", text: "60" },
      { id: "d", text: "30" }
    ],
    answerId: "a",
    explanation: "40 − 20 = 20: 4 tens take away 2 tens leaves 2 tens. 60 is tempting, but that adds 20 instead of taking it away.",
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
    explanation: "12 + 12 = 24: 1 ten + 1 ten = 2 tens, and 2 ones + 2 ones = 4 ones. 22 is tempting, but that adds only the ten of the second 12 and forgets its 2 ones.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-b-q11",
    prompt: "A toy costs \u20b915. A ball costs \u20b910. Total?",
    options: [
      { id: "a", text: "\u20b920" },
      { id: "b", text: "\u20b95" },
      { id: "c", text: "\u20b925" },
      { id: "d", text: "\u20b930" }
    ],
    answerId: "c",
    explanation: "Buying both means adding: ₹15 + ₹10 = ₹25. ₹5 is tempting, but that is the difference in price, not the total.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-b-q12",
    prompt: "28 \u2212 8 = ?",
    options: [
      { id: "a", text: "18" },
      { id: "b", text: "36" },
      { id: "c", text: "10" },
      { id: "d", text: "20" }
    ],
    answerId: "d",
    explanation: "28 − 8 = 20: start at 28 and count back 8. 36 is tempting, but that adds 8 instead of taking it away.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-b-q13",
    prompt: "9 + 9 = ?",
    options: [
      { id: "a", text: "18" },
      { id: "b", text: "16" },
      { id: "c", text: "19" },
      { id: "d", text: "17" }
    ],
    answerId: "a",
    explanation: "9 + 9 = 18: start at 9 and count on 9. 17 is tempting if you stop one count too soon.",
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
    explanation: "16 − 6 = 10: start at 16 and count back 6. 22 is tempting, but that adds 6 instead of taking it away.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-b-q15",
    prompt: "23 + 5 = ?",
    options: [
      { id: "a", text: "27" },
      { id: "b", text: "29" },
      { id: "c", text: "28" },
      { id: "d", text: "18" }
    ],
    answerId: "c",
    explanation: "23 + 5 = 28: start at 23 and count on 5. 18 is tempting, but that takes away instead of adding.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-maths-addsub-b-q16",
    prompt: "Which addition fact is correct?",
    options: [
      { id: "a", text: "12 + 3 = 14" },
      { id: "b", text: "12 + 3 = 16" },
      { id: "c", text: "12 + 3 = 9" },
      { id: "d", text: "12 + 3 = 15" }
    ],
    answerId: "d",
    explanation: "Count on 3 from 12: 13, 14, 15, so 12 + 3 = 15. 12 + 3 = 14 is tempting if you stop one count too soon.",
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
