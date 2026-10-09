import type { ChapterDef, PrepQuestion } from "../types";

/** Integers - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g6-maths-int-a-q01",
    prompt: "Which of these is an integer?",
    options: [
      { id: "a", text: "3.5" },
      { id: "b", text: "-7" },
      { id: "c", text: "2/3" },
      { id: "d", text: "√2" }
    ],
    answerId: "b",
    explanation: "Integers are whole numbers and their negatives. −7 is an integer; 3.5, 2/3 and √2 are not.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-a-q02",
    prompt: "On a number line, which number lies to the left of −3?",
    options: [
      { id: "a", text: "−2" },
      { id: "b", text: "0" },
      { id: "c", text: "−5" },
      { id: "d", text: "3" }
    ],
    answerId: "c",
    explanation: "Numbers decrease as you move left. −5 is left of −3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-a-q03",
    prompt: "What is the additive inverse of 9?",
    options: [
      { id: "a", text: "9" },
      { id: "b", text: "−9" },
      { id: "c", text: "1/9" },
      { id: "d", text: "0" }
    ],
    answerId: "b",
    explanation: "The additive inverse of a is −a, because a + (−a) = 0. So the inverse of 9 is −9.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-a-q04",
    prompt: "What is |−12|?",
    options: [
      { id: "a", text: "−12" },
      { id: "b", text: "12" },
      { id: "c", text: "0" },
      { id: "d", text: "1/12" }
    ],
    answerId: "b",
    explanation: "Absolute value is the distance from 0, so |−12| = 12.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-a-q05",
    prompt: "Compute (−8) + (−5).",
    options: [
      { id: "a", text: "−13" },
      { id: "b", text: "13" },
      { id: "c", text: "−3" },
      { id: "d", text: "3" }
    ],
    answerId: "a",
    explanation: "Adding two negatives: add the magnitudes and keep the negative sign → −13.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-a-q06",
    prompt: "Compute 15 + (−9).",
    options: [
      { id: "a", text: "24" },
      { id: "b", text: "−24" },
      { id: "c", text: "6" },
      { id: "d", text: "−6" }
    ],
    answerId: "c",
    explanation: "15 + (−9) = 15 − 9 = 6.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-a-q07",
    prompt: "Compute (−20) − (−7).",
    options: [
      { id: "a", text: "−27" },
      { id: "b", text: "−13" },
      { id: "c", text: "27" },
      { id: "d", text: "13" }
    ],
    answerId: "b",
    explanation: "Subtracting a negative is adding: (−20) − (−7) = (−20) + 7 = −13.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-a-q08",
    prompt: "Compute (−6) × 4.",
    options: [
      { id: "a", text: "24" },
      { id: "b", text: "−24" },
      { id: "c", text: "10" },
      { id: "d", text: "−2" }
    ],
    answerId: "b",
    explanation: "A negative times a positive is negative: −24.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-a-q09",
    prompt: "Compute (−3) × (−5).",
    options: [
      { id: "a", text: "−15" },
      { id: "b", text: "15" },
      { id: "c", text: "−8" },
      { id: "d", text: "8" }
    ],
    answerId: "b",
    explanation: "A negative times a negative is positive: 15.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-a-q10",
    prompt: "Compute (−36) ÷ 9.",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "−4" },
      { id: "c", text: "45" },
      { id: "d", text: "−45" }
    ],
    answerId: "b",
    explanation: "Negative divided by positive is negative: −4.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-a-q11",
    prompt: "Which statement is true?",
    options: [
      { id: "a", text: "Every natural number is an integer" },
      { id: "b", text: "Every integer is a natural number" },
      { id: "c", text: "−1 is a natural number" },
      { id: "d", text: "0 is not an integer" }
    ],
    answerId: "a",
    explanation: "Natural numbers 1, 2, 3, … are integers. Negatives and 0 are integers but not natural (in the usual school meaning).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-a-q12",
    prompt: "The temperature was −2°C in the morning and rose by 7°C. What is the new temperature?",
    options: [
      { id: "a", text: "9°C" },
      { id: "b", text: "5°C" },
      { id: "c", text: "−9°C" },
      { id: "d", text: "−5°C" }
    ],
    answerId: "b",
    explanation: "−2 + 7 = 5, so the new temperature is 5°C.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-a-q13",
    prompt: "A lift is on floor −3 (basement). It goes up 8 floors. Which floor does it reach?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "11" },
      { id: "c", text: "−11" },
      { id: "d", text: "−5" }
    ],
    answerId: "a",
    explanation: "−3 + 8 = 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-a-q14",
    prompt: "Arrange in ascending order: −1, 4, −6, 0.",
    options: [
      { id: "a", text: "−1, −6, 0, 4" },
      { id: "b", text: "−6, −1, 0, 4" },
      { id: "c", text: "4, 0, −1, −6" },
      { id: "d", text: "0, −1, −6, 4" }
    ],
    answerId: "b",
    explanation: "Ascending means smallest first: −6, −1, 0, 4.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-a-q15",
    prompt: "What is (−1) + (−1) + (−1)?",
    options: [
      { id: "a", text: "−3" },
      { id: "b", text: "3" },
      { id: "c", text: "−1" },
      { id: "d", text: "1" }
    ],
    answerId: "a",
    explanation: "Three groups of −1 sum to −3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-a-q16",
    prompt: "Which number is greater: −8 or −3?",
    options: [
      { id: "a", text: "−8" },
      { id: "b", text: "−3" },
      { id: "c", text: "They are equal" },
      { id: "d", text: "Cannot tell" }
    ],
    answerId: "b",
    explanation: "−3 is to the right of −8 on the number line, so −3 > −8.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-a-q17",
    prompt: "Compute 0 − (−15).",
    options: [
      { id: "a", text: "−15" },
      { id: "b", text: "15" },
      { id: "c", text: "0" },
      { id: "d", text: "−30" }
    ],
    answerId: "b",
    explanation: "0 − (−15) = 0 + 15 = 15.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-a-q18",
    prompt: "A bank account has ₹200. Then ₹350 is withdrawn. Which integer shows the balance?",
    options: [
      { id: "a", text: "550" },
      { id: "b", text: "−150" },
      { id: "c", text: "150" },
      { id: "d", text: "−550" }
    ],
    answerId: "b",
    explanation: "200 − 350 = −150, so the balance is ₹150 overdrawn, written −150.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-a-q19",
    prompt: "What is |5 − 12|?",
    options: [
      { id: "a", text: "7" },
      { id: "b", text: "−7" },
      { id: "c", text: "17" },
      { id: "d", text: "−17" }
    ],
    answerId: "a",
    explanation: "5 − 12 = −7, and |−7| = 7.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-a-q20",
    prompt: "Compute (−2)³.",
    options: [
      { id: "a", text: "−8" },
      { id: "b", text: "8" },
      { id: "c", text: "−6" },
      { id: "d", text: "6" }
    ],
    answerId: "a",
    explanation: "(−2)³ = (−2)×(−2)×(−2) = 4 × (−2) = −8.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-a-q21",
    prompt: "The successor of −11 is —",
    options: [
      { id: "a", text: "−12" },
      { id: "b", text: "−10" },
      { id: "c", text: "11" },
      { id: "d", text: "10" }
    ],
    answerId: "b",
    explanation: "Successor means +1: −11 + 1 = −10.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-a-q22",
    prompt: "The predecessor of −4 is —",
    options: [
      { id: "a", text: "−3" },
      { id: "b", text: "−5" },
      { id: "c", text: "4" },
      { id: "d", text: "5" }
    ],
    answerId: "b",
    explanation: "Predecessor means −1: −4 − 1 = −5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-a-q23",
    prompt: "Compute (−18) ÷ (−6).",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "−3" },
      { id: "c", text: "12" },
      { id: "d", text: "−12" }
    ],
    answerId: "a",
    explanation: "Negative ÷ negative = positive: 3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-a-q24",
    prompt: "Which expression equals −10?",
    options: [
      { id: "a", text: "(−4) + (−6)" },
      { id: "b", text: "(−4) − (−6)" },
      { id: "c", text: "4 + 6" },
      { id: "d", text: "(−4) × (−6)" }
    ],
    answerId: "a",
    explanation: "(−4) + (−6) = −10. The others give 2, 10 and 24.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g6-maths-int-b-q01",
    prompt: "Which set contains only integers?",
    options: [
      { id: "a", text: "{−2, 0, 5}" },
      { id: "b", text: "{1/2, 3, −1}" },
      { id: "c", text: "{0.5, 2, −3}" },
      { id: "d", text: "{√4, 1.5, 0}" }
    ],
    answerId: "a",
    explanation: "−2, 0 and 5 are all integers. The other sets include fractions or decimals.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-b-q02",
    prompt: "On a number line, the distance between −4 and 3 is —",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "7" },
      { id: "c", text: "−7" },
      { id: "d", text: "12" }
    ],
    answerId: "b",
    explanation: "Distance = |3 − (−4)| = |7| = 7.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-b-q03",
    prompt: "What is −(−18)?",
    options: [
      { id: "a", text: "−18" },
      { id: "b", text: "18" },
      { id: "c", text: "0" },
      { id: "d", text: "1/18" }
    ],
    answerId: "b",
    explanation: "The negative of −18 is 18.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-b-q04",
    prompt: "Compute (−25) + 40.",
    options: [
      { id: "a", text: "65" },
      { id: "b", text: "−65" },
      { id: "c", text: "15" },
      { id: "d", text: "−15" }
    ],
    answerId: "c",
    explanation: "−25 + 40 = 15.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-b-q05",
    prompt: "Compute 9 − 20.",
    options: [
      { id: "a", text: "−11" },
      { id: "b", text: "11" },
      { id: "c", text: "29" },
      { id: "d", text: "−29" }
    ],
    answerId: "a",
    explanation: "9 − 20 = −11.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-b-q06",
    prompt: "Compute (−7) − 5.",
    options: [
      { id: "a", text: "−12" },
      { id: "b", text: "−2" },
      { id: "c", text: "12" },
      { id: "d", text: "2" }
    ],
    answerId: "a",
    explanation: "(−7) − 5 = (−7) + (−5) = −12.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-b-q07",
    prompt: "Compute 6 × (−3) × (−2).",
    options: [
      { id: "a", text: "−36" },
      { id: "b", text: "36" },
      { id: "c", text: "−12" },
      { id: "d", text: "12" }
    ],
    answerId: "b",
    explanation: "6 × (−3) = −18; (−18) × (−2) = 36.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-b-q08",
    prompt: "Compute (−48) ÷ 8.",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "−6" },
      { id: "c", text: "40" },
      { id: "d", text: "−40" }
    ],
    answerId: "b",
    explanation: "−48 ÷ 8 = −6.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-b-q09",
    prompt: "If a = −4 and b = 9, what is a + b?",
    options: [
      { id: "a", text: "13" },
      { id: "b", text: "−13" },
      { id: "c", text: "5" },
      { id: "d", text: "−5" }
    ],
    answerId: "c",
    explanation: "−4 + 9 = 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-b-q10",
    prompt: "If a = −5 and b = −3, what is a − b?",
    options: [
      { id: "a", text: "−8" },
      { id: "b", text: "−2" },
      { id: "c", text: "2" },
      { id: "d", text: "8" }
    ],
    answerId: "b",
    explanation: "a − b = (−5) − (−3) = (−5) + 3 = −2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-b-q11",
    prompt: "A submarine is at −120 m. It rises 45 m. What is its new depth?",
    options: [
      { id: "a", text: "−75 m" },
      { id: "b", text: "−165 m" },
      { id: "c", text: "75 m" },
      { id: "d", text: "165 m" }
    ],
    answerId: "a",
    explanation: "−120 + 45 = −75 m.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-b-q12",
    prompt: "Which is the smallest?",
    options: [
      { id: "a", text: "−1" },
      { id: "b", text: "−19" },
      { id: "c", text: "0" },
      { id: "d", text: "2" }
    ],
    answerId: "b",
    explanation: "−19 is farthest left on the number line.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-b-q13",
    prompt: "Compute (−1) × (−1) × (−1) × (−1).",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "−1" },
      { id: "c", text: "0" },
      { id: "d", text: "4" }
    ],
    answerId: "a",
    explanation: "Four negatives multiply to a positive: 1.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-b-q14",
    prompt: "The product of two integers is −36. One integer is −4. The other is —",
    options: [
      { id: "a", text: "9" },
      { id: "b", text: "−9" },
      { id: "c", text: "32" },
      { id: "d", text: "−32" }
    ],
    answerId: "a",
    explanation: "(−4) × 9 = −36, so the other integer is 9.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-b-q15",
    prompt: "Compute |−9| − |−4|.",
    options: [
      { id: "a", text: "−5" },
      { id: "b", text: "5" },
      { id: "c", text: "13" },
      { id: "d", text: "−13" }
    ],
    answerId: "b",
    explanation: "|−9| = 9 and |−4| = 4, so 9 − 4 = 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-b-q16",
    prompt: "Which expression is equal to 0?",
    options: [
      { id: "a", text: "5 + (−5)" },
      { id: "b", text: "5 × (−5)" },
      { id: "c", text: "5 − (−5)" },
      { id: "d", text: "(−5) − 5" }
    ],
    answerId: "a",
    explanation: "5 + (−5) = 0. The others are −25, 10 and −10.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-b-q17",
    prompt: "Riya scores −8, then +12, then −3 on three quiz rounds. What is her total?",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "−1" },
      { id: "c", text: "23" },
      { id: "d", text: "−23" }
    ],
    answerId: "a",
    explanation: "−8 + 12 − 3 = 1.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-b-q18",
    prompt: "A shop’s profit of ₹80 is written +80 and a loss of ₹50 as −50. Net result?",
    options: [
      { id: "a", text: "₹130" },
      { id: "b", text: "₹30" },
      { id: "c", text: "−₹30" },
      { id: "d", text: "−₹130" }
    ],
    answerId: "b",
    explanation: "+80 + (−50) = 30, so a net profit of ₹30.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-b-q19",
    prompt: "What is (−15) + (−15) + 30?",
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "30" },
      { id: "c", text: "−30" },
      { id: "d", text: "60" }
    ],
    answerId: "a",
    explanation: "−15 − 15 + 30 = 0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-b-q20",
    prompt: "Which property is shown by (−3) + 5 = 5 + (−3)?",
    options: [
      { id: "a", text: "Commutative of addition" },
      { id: "b", text: "Associative of multiplication" },
      { id: "c", text: "Distributive" },
      { id: "d", text: "Closure of subtraction" }
    ],
    answerId: "a",
    explanation: "Order of addends can swap — commutative property of addition.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-b-q21",
    prompt: "Compute  (−2) × 0 × 17.",
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "−34" },
      { id: "c", text: "34" },
      { id: "d", text: "−17" }
    ],
    answerId: "a",
    explanation: "Anything times 0 is 0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-b-q22",
    prompt: "The integer between −2 and 0 is —",
    options: [
      { id: "a", text: "−3" },
      { id: "b", text: "−1" },
      { id: "c", text: "1" },
      { id: "d", text: "2" }
    ],
    answerId: "b",
    explanation: "The only integer strictly between −2 and 0 is −1.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-b-q23",
    prompt: "Compute (−72) ÷ (−8).",
    options: [
      { id: "a", text: "9" },
      { id: "b", text: "−9" },
      { id: "c", text: "64" },
      { id: "d", text: "−64" }
    ],
    answerId: "a",
    explanation: "Negative ÷ negative = 9.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-maths-int-b-q24",
    prompt: "Which is true for every integer n?",
    options: [
      { id: "a", text: "n + 0 = n" },
      { id: "b", text: "n × 0 = n" },
      { id: "c", text: "n − n = n" },
      { id: "d", text: "n ÷ n = 0" }
    ],
    answerId: "a",
    explanation: "0 is the additive identity: n + 0 = n.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "➖",
    title: "Integers",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "number-line",
    speak: "Integers include negatives, zero and positives on the number line.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "number-line",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Number line", reveal: "Left is smaller; right is larger", emoji: "📍" },
      { label: "Absolute value", reveal: "Distance from zero", emoji: "📏" },
      { label: "Same signs", reveal: "Add sizes; keep the sign", emoji: "➕" },
      { label: "Different signs", reveal: "Subtract sizes; keep the larger’s sign", emoji: "⚖️" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "(−5) + 8 = ?",
    options: [
        { id: "a", text: "3" },
        { id: "b", text: "−3" },
        { id: "c", text: "13" },
        { id: "d", text: "−13" }
    ],
    answerId: "a",
    why: "−5 + 8 = 3.",
    visual: "number-line",
    speak: "(−5) + 8 = ?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Review the key ideas", "Watch tricky options", "Sets ready whenever you are"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g6MathsIntegers: ChapterDef = {
  id: "integers",
  title: "Integers",
  emoji: "➖",
  blurb: "Signed numbers on the number line",
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
  paperTopics: ["add-sub", "place-value"],
};

export const g6MathsIntegersQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
