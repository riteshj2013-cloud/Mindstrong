import type { ChapterDef, PrepQuestion } from "../types";

/** Numbers - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g1-maths-numbers-a-q01",
    prompt: "Which number comes just after 5?",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "4" },
      { id: "c", text: "7" },
      { id: "d", text: "3" }
    ],
    answerId: "a",
    explanation: "Counting goes 4, 5, 6, so the number just after 5 is 6. 4 is tempting, but 4 comes just before 5, not after it.",
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
    explanation: "Count the fingers on one hand: 1, 2, 3, 4, 5. 10 is tempting, but that is the fingers on both hands.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-a-q03",
    prompt: "Which number is bigger: 8 or 3?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "1" },
      { id: "c", text: "8" },
      { id: "d", text: "0" }
    ],
    answerId: "c",
    explanation: "8 is bigger because it comes later when we count: 3 comes before 8. 3 is tempting because it is in the question, but it is the smaller one.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-a-q04",
    prompt: "Count the stars: \u2605 \u2605 \u2605. How many?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "4" },
      { id: "c", text: "5" },
      { id: "d", text: "3" }
    ],
    answerId: "d",
    explanation: "Touch each star once and count: 1, 2, 3. 4 is tempting if you count one star twice.",
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
    explanation: "Counting goes 8, 9, 10, so the number just before 10 is 9. 11 is tempting, but 11 comes just after 10, not before it.",
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
    explanation: "We write 7 as seven. Six is tempting because it is close, but six is the name for 6.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-a-q07",
    prompt: "Which set shows 4 apples?",
    options: [
      { id: "a", text: "\ud83c\udf4e\ud83c\udf4e\ud83c\udf4e" },
      { id: "b", text: "\ud83c\udf4e\ud83c\udf4e" },
      { id: "c", text: "\ud83c\udf4e\ud83c\udf4e\ud83c\udf4e\ud83c\udf4e" },
      { id: "d", text: "\ud83c\udf4e" }
    ],
    answerId: "c",
    explanation: "Count the apples in each set: 1, 2, 3, 4. The set of 3 apples is tempting, but it is one apple short.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-a-q08",
    prompt: "Fill in: 2, 4, 6, __.",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "7" },
      { id: "c", text: "10" },
      { id: "d", text: "8" }
    ],
    answerId: "d",
    explanation: "The pattern adds 2 each time. Next is 8.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-a-q09",
    prompt: "Which number is the smallest?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "9" },
      { id: "c", text: "7" },
      { id: "d", text: "5" }
    ],
    answerId: "a",
    explanation: "2 comes first when we count, so it is the smallest. 5 is tempting because it is in the middle, but 2 comes before 5.",
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
    explanation: "Riya's 1 ball and Amaira's 1 ball make 1 + 1 = 2 balls. 1 is tempting, but that counts only one girl's ball.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-a-q11",
    prompt: "Which digit is in 14?",
    options: [
      { id: "a", text: "2 and 4" },
      { id: "b", text: "1 and 5" },
      { id: "c", text: "1 and 4" },
      { id: "d", text: "4 and 0" }
    ],
    answerId: "c",
    explanation: "14 is written with a 1 and a 4, so its digits are 1 and 4. 1 and 5 is tempting, but 15 is the number with those digits.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-a-q12",
    prompt: "What comes next: 1, 2, 3, __?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "0" },
      { id: "c", text: "6" },
      { id: "d", text: "4" }
    ],
    answerId: "d",
    explanation: "Counting goes 1, 2, 3 and then 4. 5 is tempting, but that skips over 4.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-a-q13",
    prompt: "Kabir counts to 10. Which number did he say last?",
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "9" },
      { id: "c", text: "8" },
      { id: "d", text: "11" }
    ],
    answerId: "a",
    explanation: "Kabir stops counting at 10, so 10 is the last number he says. 11 is tempting, but he did not count past 10.",
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
    explanation: "9 comes after 5 when we count, so 9 shows more. 'Same' is tempting, but 5 and 9 are different numbers.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-a-q15",
    prompt: "Zero means\u2026",
    options: [
      { id: "a", text: "ten" },
      { id: "b", text: "one" },
      { id: "c", text: "nothing" },
      { id: "d", text: "many" }
    ],
    answerId: "c",
    explanation: "Zero means nothing at all, like an empty plate with no laddoos. One is tempting because it is so small, but one still means there is something.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-a-q16",
    prompt: "Meera sees 6 birds. 1 flies away. How many are left?",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "7" },
      { id: "c", text: "4" },
      { id: "d", text: "5" }
    ],
    answerId: "d",
    explanation: "Meera had 6 birds and 1 flew away, so 6 − 1 = 5 are left. 7 is tempting, but that adds the bird instead of taking it away.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g1-maths-numbers-b-q01",
    prompt: "Which number comes just after 9?",
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "8" },
      { id: "c", text: "7" },
      { id: "d", text: "11" }
    ],
    answerId: "a",
    explanation: "Counting goes 8, 9, 10, so the number just after 9 is 10. 8 is tempting, but 8 comes just before 9.",
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
    explanation: "A bicycle has one wheel at the front and one at the back: 2 wheels. 3 is tempting, but that is a tricycle or an auto-rickshaw.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-b-q03",
    prompt: "Which number is smaller: 6 or 1?",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "both same" },
      { id: "c", text: "1" },
      { id: "d", text: "7" }
    ],
    answerId: "c",
    explanation: "1 comes before 6 when we count, so 1 is smaller. 6 is tempting because it is in the question, but it is the bigger one.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-b-q04",
    prompt: "Count: \u25cf \u25cf \u25cf \u25cf \u25cf. How many dots?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "6" },
      { id: "c", text: "3" },
      { id: "d", text: "5" }
    ],
    answerId: "d",
    explanation: "Touch each dot once and count: 1, 2, 3, 4, 5. 4 is tempting if you miss one dot.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-b-q05",
    prompt: "What is the number name for 10?",
    options: [
      { id: "a", text: "ten" },
      { id: "b", text: "nine" },
      { id: "c", text: "eleven" },
      { id: "d", text: "twelve" }
    ],
    answerId: "a",
    explanation: "We write 10 as ten. Eleven is tempting because it comes next, but eleven is the name for 11.",
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
    explanation: "Counting goes 5, 6, 7 and then 8. 9 is tempting, but that skips over 8.",
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
    explanation: "Even numbers go 2, 4, 6, 8, so 4 is even. 3, 5 and 7 are tempting because they are near 4, but they are odd: one is always left over in pairs.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-b-q08",
    prompt: "Aarav has 3 pencils. He gets 2 more. How many now?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "3" },
      { id: "c", text: "6" },
      { id: "d", text: "5" }
    ],
    answerId: "d",
    explanation: "Aarav had 3 pencils and got 2 more, so 3 + 2 = 5. 4 is tempting if you stop one count too soon.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-b-q09",
    prompt: "Which number is between 4 and 6?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "3" },
      { id: "c", text: "7" },
      { id: "d", text: "2" }
    ],
    answerId: "a",
    explanation: "Counting goes 4, 5, 6, so 5 is between 4 and 6. 3 is tempting, but 3 comes before 4, not between 4 and 6.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-b-q10",
    prompt: "What comes just before 2?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "1" },
      { id: "c", text: "0" },
      { id: "d", text: "4" }
    ],
    answerId: "b",
    explanation: "Counting goes 1, 2, 3, so the number just before 2 is 1. 3 is tempting, but 3 comes just after 2.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-b-q11",
    prompt: "Which shows 2 cats?",
    options: [
      { id: "a", text: "\ud83d\udc31" },
      { id: "b", text: "\ud83d\udc31\ud83d\udc31\ud83d\udc31" },
      { id: "c", text: "\ud83d\udc31\ud83d\udc31" },
      { id: "d", text: "\ud83d\udc31\ud83d\udc31\ud83d\udc31\ud83d\udc31" }
    ],
    answerId: "c",
    explanation: "Count the cats in each set; only one set has exactly 2 cats. The set of 3 cats is tempting, but it has one cat too many.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-b-q12",
    prompt: "15 has how many tens?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "15" },
      { id: "c", text: "0" },
      { id: "d", text: "1" }
    ],
    answerId: "d",
    explanation: "15 is 1 ten and 5 ones, so it has 1 ten. 5 is tempting, but 5 is the number of ones, not tens.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-b-q13",
    prompt: "Biggest number here?",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "3" },
      { id: "c", text: "5" },
      { id: "d", text: "2" }
    ],
    answerId: "a",
    explanation: "8 comes last when we count 2, 3, 5, 8, so it is the biggest. 5 is tempting, but 5 comes before 8.",
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
    explanation: "Sara's last count is 4, so there are 4 eggs. 5 is tempting, but she stopped at 4 and did not say 5.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-b-q15",
    prompt: "Which is the same as 5 + 0?",
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "50" },
      { id: "c", text: "5" },
      { id: "d", text: "1" }
    ],
    answerId: "c",
    explanation: "Adding 0 adds nothing, so 5 + 0 = 5. 50 is tempting, but that just writes 5 and 0 side by side; it is not adding.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-maths-numbers-b-q16",
    prompt: "Order from small to big: 2, 9, 4. What is middle?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "9" },
      { id: "c", text: "1" },
      { id: "d", text: "4" }
    ],
    answerId: "d",
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
