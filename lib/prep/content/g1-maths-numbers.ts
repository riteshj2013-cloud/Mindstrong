import type { ChapterDef, PrepQuestion } from "../types";

/** Numbers - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g1-maths-numbers-a-q01",
    prompt: "Which number comes just after 5?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "6" },
      { id: "c", text: "7" },
      { id: "d", text: "3" }
    ],
    answerId: "b",
    explanation: "One more than 5 is 6.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-a-q02",
    prompt: "How many fingers do you have on one hand?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "5" },
      { id: "c", text: "6" },
      { id: "d", text: "10" }
    ],
    answerId: "b",
    explanation: "One hand has 5 fingers.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-a-q03",
    prompt: "Which number is bigger: 8 or 3?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "8" },
      { id: "c", text: "1" },
      { id: "d", text: "0" }
    ],
    answerId: "b",
    explanation: "8 is more than 3.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-a-q04",
    prompt: "Count the stars: \u2605 \u2605 \u2605. How many?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "3" },
      { id: "c", text: "4" },
      { id: "d", text: "5" }
    ],
    answerId: "b",
    explanation: "There are 3 stars.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-a-q05",
    prompt: "Which number comes just before 10?",
    options: [
      { id: "a", text: "9" },
      { id: "b", text: "11" },
      { id: "c", text: "8" },
      { id: "d", text: "12" }
    ],
    answerId: "a",
    explanation: "Just before 10 is 9.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-a-q06",
    prompt: "What is the number name for 7?",
    options: [
      { id: "a", text: "six" },
      { id: "b", text: "seven" },
      { id: "c", text: "eight" },
      { id: "d", text: "five" }
    ],
    answerId: "b",
    explanation: "7 is written as seven.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-a-q07",
    prompt: "Which set shows 4 apples?",
    options: [
      { id: "a", text: "\ud83c\udf4e\ud83c\udf4e\ud83c\udf4e" },
      { id: "b", text: "\ud83c\udf4e\ud83c\udf4e\ud83c\udf4e\ud83c\udf4e" },
      { id: "c", text: "\ud83c\udf4e\ud83c\udf4e" },
      { id: "d", text: "\ud83c\udf4e" }
    ],
    answerId: "b",
    explanation: "Four apples means \ud83c\udf4e\ud83c\udf4e\ud83c\udf4e\ud83c\udf4e.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-a-q08",
    prompt: "Fill in: 2, 4, 6, __.",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "7" },
      { id: "c", text: "8" },
      { id: "d", text: "10" }
    ],
    answerId: "c",
    explanation: "The pattern adds 2 each time. Next is 8.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-a-q09",
    prompt: "Which number is the smallest?",
    options: [
      { id: "a", text: "9" },
      { id: "b", text: "2" },
      { id: "c", text: "7" },
      { id: "d", text: "5" }
    ],
    answerId: "b",
    explanation: "2 is the smallest of these.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-a-q10",
    prompt: "Riya has 1 ball. Amaira has 1 ball. How many balls in all?",
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
    id: "g1-maths-numbers-a-q11",
    prompt: "Which digit is in 14?",
    options: [
      { id: "a", text: "1 and 4" },
      { id: "b", text: "2 and 4" },
      { id: "c", text: "1 and 5" },
      { id: "d", text: "4 and 0" }
    ],
    answerId: "a",
    explanation: "14 has digits 1 and 4.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-a-q12",
    prompt: "What comes next: 1, 2, 3, __?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "4" },
      { id: "c", text: "0" },
      { id: "d", text: "6" }
    ],
    answerId: "b",
    explanation: "After 3 comes 4.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-a-q13",
    prompt: "Kabir counts to 10. Which number did he say last?",
    options: [
      { id: "a", text: "9" },
      { id: "b", text: "10" },
      { id: "c", text: "8" },
      { id: "d", text: "11" }
    ],
    answerId: "b",
    explanation: "Counting to 10 ends on 10.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-a-q14",
    prompt: "Which shows more: 5 or 9?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "9" },
      { id: "c", text: "same" },
      { id: "d", text: "0" }
    ],
    answerId: "b",
    explanation: "9 is more than 5.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-a-q15",
    prompt: "Zero means\u2026",
    options: [
      { id: "a", text: "nothing" },
      { id: "b", text: "ten" },
      { id: "c", text: "one" },
      { id: "d", text: "many" }
    ],
    answerId: "a",
    explanation: "Zero means no things \u2014 nothing.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-a-q16",
    prompt: "Meera sees 6 birds. 1 flies away. How many are left?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "6" },
      { id: "c", text: "7" },
      { id: "d", text: "4" }
    ],
    answerId: "a",
    explanation: "6 \u2212 1 = 5.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g1-maths-numbers-b-q01",
    prompt: "Which number comes just after 9?",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "10" },
      { id: "c", text: "7" },
      { id: "d", text: "11" }
    ],
    answerId: "b",
    explanation: "One more than 9 is 10.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-b-q02",
    prompt: "How many wheels does a bicycle have?",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "2" },
      { id: "c", text: "3" },
      { id: "d", text: "4" }
    ],
    answerId: "b",
    explanation: "A bicycle has 2 wheels.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-b-q03",
    prompt: "Which number is smaller: 6 or 1?",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "1" },
      { id: "c", text: "both same" },
      { id: "d", text: "7" }
    ],
    answerId: "b",
    explanation: "1 is smaller than 6.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-b-q04",
    prompt: "Count: \u25cf \u25cf \u25cf \u25cf \u25cf. How many dots?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "5" },
      { id: "c", text: "6" },
      { id: "d", text: "3" }
    ],
    answerId: "b",
    explanation: "There are 5 dots.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-b-q05",
    prompt: "What is the number name for 10?",
    options: [
      { id: "a", text: "nine" },
      { id: "b", text: "eleven" },
      { id: "c", text: "ten" },
      { id: "d", text: "twelve" }
    ],
    answerId: "c",
    explanation: "10 is ten.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-b-q06",
    prompt: "Fill in: 5, 6, 7, __.",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "8" },
      { id: "c", text: "9" },
      { id: "d", text: "10" }
    ],
    answerId: "b",
    explanation: "After 7 comes 8.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-b-q07",
    prompt: "Which is an even number?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "5" },
      { id: "c", text: "4" },
      { id: "d", text: "7" }
    ],
    answerId: "c",
    explanation: "4 is even (2, 4, 6, 8\u2026).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-b-q08",
    prompt: "Aarav has 3 pencils. He gets 2 more. How many now?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "5" },
      { id: "c", text: "3" },
      { id: "d", text: "6" }
    ],
    answerId: "b",
    explanation: "3 + 2 = 5.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-b-q09",
    prompt: "Which number is between 4 and 6?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "5" },
      { id: "c", text: "7" },
      { id: "d", text: "2" }
    ],
    answerId: "b",
    explanation: "5 sits between 4 and 6.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-b-q10",
    prompt: "What comes just before 2?",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "3" },
      { id: "c", text: "0" },
      { id: "d", text: "4" }
    ],
    answerId: "a",
    explanation: "Just before 2 is 1.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-b-q11",
    prompt: "Which shows 2 cats?",
    options: [
      { id: "a", text: "\ud83d\udc31" },
      { id: "b", text: "\ud83d\udc31\ud83d\udc31" },
      { id: "c", text: "\ud83d\udc31\ud83d\udc31\ud83d\udc31" },
      { id: "d", text: "\ud83d\udc31\ud83d\udc31\ud83d\udc31\ud83d\udc31" }
    ],
    answerId: "b",
    explanation: "Two cats: \ud83d\udc31\ud83d\udc31.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-b-q12",
    prompt: "15 has how many tens?",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "5" },
      { id: "c", text: "15" },
      { id: "d", text: "0" }
    ],
    answerId: "a",
    explanation: "15 = 1 ten and 5 ones.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-b-q13",
    prompt: "Biggest number here?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "8" },
      { id: "c", text: "5" },
      { id: "d", text: "2" }
    ],
    answerId: "b",
    explanation: "8 is the biggest.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-b-q14",
    prompt: "Sara counts eggs: 1, 2, 3, 4. How many eggs?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "4" },
      { id: "c", text: "5" },
      { id: "d", text: "2" }
    ],
    answerId: "b",
    explanation: "She counted four eggs.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-b-q15",
    prompt: "Which is the same as 5 + 0?",
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "5" },
      { id: "c", text: "50" },
      { id: "d", text: "1" }
    ],
    answerId: "b",
    explanation: "Adding zero keeps the number: 5.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-b-q16",
    prompt: "Order from small to big: 2, 9, 4. What is middle?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "4" },
      { id: "c", text: "9" },
      { id: "d", text: "1" }
    ],
    answerId: "b",
    explanation: "Small to big: 2, 4, 9. Middle is 4.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83d\udd22",
    title: "Numbers",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "number-line",
    speak: "Numbers help us count and compare.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "number-line",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Count", reveal: "Say numbers in order", emoji: "1\ufe0f\u20e3" },
      { label: "Compare", reveal: "Which is more?", emoji: "\u2696\ufe0f" },
      { label: "Order", reveal: "Small to big", emoji: "\ud83d\udcf6" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Which is bigger: 4 or 9?",
    options: [
        { id: "a", text: "4" },
        { id: "b", text: "9" },
        { id: "c", text: "same" },
        { id: "d", text: "0" }
    ],
    answerId: "b",
    why: "9 is more than 4.",
    visual: "number-line",
    speak: "Which is bigger: 4 or 9?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Count in order", "Compare sizes", "Sets ready \u2014 16 each"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g1MathsNumbers: ChapterDef = {
  id: "numbers",
  title: "Numbers",
  emoji: "\ud83d\udd22",
  blurb: "Count, compare & order",
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

export const g1MathsNumbersQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
