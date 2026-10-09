import type { ChapterDef, PrepQuestion } from "../types";

/** Integers - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g7-maths-integers-a-q01",
    prompt: "Which of these is an integer?",
    options: [
      { id: "a", text: "\u22127" },
      { id: "b", text: "3/4" },
      { id: "c", text: "\u221a2" },
      { id: "d", text: "0.333\u2026 repeating only as non-integer form" }
    ],
    answerId: "a",
    explanation: "Integers are \u2026, \u22122, \u22121, 0, 1, 2, \u2026. Fractions that are not whole numbers are not integers.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-a-q02",
    prompt: "What is the additive inverse of \u221215?",
    options: [
      { id: "a", text: "15" },
      { id: "b", text: "\u221215" },
      { id: "c", text: "1/15" },
      { id: "d", text: "0" }
    ],
    answerId: "a",
    explanation: "A number plus its additive inverse equals 0, so \u221215 + 15 = 0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-a-q03",
    prompt: "On a number line, which is farther left?",
    options: [
      { id: "a", text: "\u221212" },
      { id: "b", text: "\u22123" },
      { id: "c", text: "0" },
      { id: "d", text: "5" }
    ],
    answerId: "a",
    explanation: "More negative numbers lie farther to the left. \u221212 < \u22123.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-a-q04",
    prompt: "Evaluate: (\u22128) + (\u22125).",
    options: [
      { id: "a", text: "\u221213" },
      { id: "b", text: "\u22123" },
      { id: "c", text: "13" },
      { id: "d", text: "3" }
    ],
    answerId: "a",
    explanation: "Adding two negatives: add absolute values and keep the negative sign \u2192 \u221213.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-a-q05",
    prompt: "Evaluate: 9 + (\u22124).",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "13" },
      { id: "c", text: "\u22125" },
      { id: "d", text: "\u221213" }
    ],
    answerId: "a",
    explanation: "9 \u2212 4 = 5. Adding a negative is subtraction.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-a-q06",
    prompt: "Evaluate: (\u22126) \u2212 (\u22122).",
    options: [
      { id: "a", text: "\u22124" },
      { id: "b", text: "\u22128" },
      { id: "c", text: "4" },
      { id: "d", text: "8" }
    ],
    answerId: "a",
    explanation: "Subtracting a negative is adding: \u22126 + 2 = \u22124.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-a-q07",
    prompt: "Evaluate: (\u22127) \u00d7 3.",
    options: [
      { id: "a", text: "\u221221" },
      { id: "b", text: "21" },
      { id: "c", text: "\u221210" },
      { id: "d", text: "10" }
    ],
    answerId: "a",
    explanation: "Negative \u00d7 positive = negative. 7 \u00d7 3 = 21, so answer is \u221221.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-a-q08",
    prompt: "Evaluate: (\u22125) \u00d7 (\u22124).",
    options: [
      { id: "a", text: "20" },
      { id: "b", text: "\u221220" },
      { id: "c", text: "9" },
      { id: "d", text: "\u22129" }
    ],
    answerId: "a",
    explanation: "Negative \u00d7 negative = positive. 5 \u00d7 4 = 20.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-a-q09",
    prompt: "Evaluate: (\u221236) \u00f7 9.",
    options: [
      { id: "a", text: "\u22124" },
      { id: "b", text: "4" },
      { id: "c", text: "\u221245" },
      { id: "d", text: "45" }
    ],
    answerId: "a",
    explanation: "Negative \u00f7 positive = negative. 36 \u00f7 9 = 4, so \u22124.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-a-q10",
    prompt: "Evaluate: (\u221248) \u00f7 (\u22126).",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "\u22128" },
      { id: "c", text: "42" },
      { id: "d", text: "\u221242" }
    ],
    answerId: "a",
    explanation: "Negative \u00f7 negative = positive. 48 \u00f7 6 = 8.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-a-q11",
    prompt: "What is |\u221219|?",
    options: [
      { id: "a", text: "19" },
      { id: "b", text: "\u221219" },
      { id: "c", text: "0" },
      { id: "d", text: "1" }
    ],
    answerId: "a",
    explanation: "Absolute value is distance from 0, so |\u221219| = 19.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-a-q12",
    prompt: "Which statement is true?",
    options: [
      { id: "a", text: "\u22125 < \u22122" },
      { id: "b", text: "\u22125 > \u22122" },
      { id: "c", text: "\u22125 = \u22122" },
      { id: "d", text: "\u22125 > 0" }
    ],
    answerId: "a",
    explanation: "\u22125 is to the left of \u22122, so \u22125 is smaller.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-a-q13",
    prompt: "A lift goes down 4 floors, then up 9 floors. Net change?",
    options: [
      { id: "a", text: "+5 floors" },
      { id: "b", text: "\u22125 floors" },
      { id: "c", text: "+13 floors" },
      { id: "d", text: "\u221213 floors" }
    ],
    answerId: "a",
    explanation: "\u22124 + 9 = +5 floors.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-a-q14",
    prompt: "Temperature falls from 6 \u00b0C to \u22123 \u00b0C. Change?",
    options: [
      { id: "a", text: "\u22129 \u00b0C" },
      { id: "b", text: "9 \u00b0C" },
      { id: "c", text: "\u22123 \u00b0C" },
      { id: "d", text: "3 \u00b0C" }
    ],
    answerId: "a",
    explanation: "Final \u2212 initial = \u22123 \u2212 6 = \u22129 \u00b0C.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-a-q15",
    prompt: "Simplify: \u2212(\u221211).",
    options: [
      { id: "a", text: "11" },
      { id: "b", text: "\u221211" },
      { id: "c", text: "0" },
      { id: "d", text: "1" }
    ],
    answerId: "a",
    explanation: "The negative of \u221211 is 11.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-a-q16",
    prompt: "Evaluate: 0 \u2212 (\u22128).",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "\u22128" },
      { id: "c", text: "0" },
      { id: "d", text: "\u221216" }
    ],
    answerId: "a",
    explanation: "0 + 8 = 8.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-a-q17",
    prompt: "Which product is positive?",
    options: [
      { id: "a", text: "(\u22123) \u00d7 (\u22127)" },
      { id: "b", text: "(\u22123) \u00d7 7" },
      { id: "c", text: "3 \u00d7 (\u22127)" },
      { id: "d", text: "(\u22121) \u00d7 12" }
    ],
    answerId: "a",
    explanation: "Both factors negative \u2192 product positive.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-a-q18",
    prompt: "Evaluate: (\u22122)\u00b3.",
    options: [
      { id: "a", text: "\u22128" },
      { id: "b", text: "8" },
      { id: "c", text: "\u22126" },
      { id: "d", text: "6" }
    ],
    answerId: "a",
    explanation: "(\u22122)\u00d7(\u22122)\u00d7(\u22122) = 4 \u00d7 (\u22122) = \u22128. Odd power keeps the negative.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-a-q19",
    prompt: "Find the successor of \u22129.",
    options: [
      { id: "a", text: "\u22128" },
      { id: "b", text: "\u221210" },
      { id: "c", text: "9" },
      { id: "d", text: "0" }
    ],
    answerId: "a",
    explanation: "Successor means +1: \u22129 + 1 = \u22128.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-a-q20",
    prompt: "Find the predecessor of \u22129.",
    options: [
      { id: "a", text: "\u221210" },
      { id: "b", text: "\u22128" },
      { id: "c", text: "9" },
      { id: "d", text: "0" }
    ],
    answerId: "a",
    explanation: "Predecessor means \u22121: \u22129 \u2212 1 = \u221210.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-a-q21",
    prompt: "Evaluate: (\u221215) + 15.",
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "30" },
      { id: "c", text: "\u221230" },
      { id: "d", text: "1" }
    ],
    answerId: "a",
    explanation: "A number plus its additive inverse is 0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-a-q22",
    prompt: "Which is the smallest?",
    options: [
      { id: "a", text: "\u2212100" },
      { id: "b", text: "\u22121" },
      { id: "c", text: "0" },
      { id: "d", text: "2" }
    ],
    answerId: "a",
    explanation: "\u2212100 is the most negative, so the smallest.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-a-q23",
    prompt: "A bank account shows \u2212\u20b9240 (overdrawn). A deposit of \u20b9300 is made. New balance?",
    options: [
      { id: "a", text: "\u20b960" },
      { id: "b", text: "\u20b9540" },
      { id: "c", text: "\u2212\u20b960" },
      { id: "d", text: "\u2212\u20b9540" }
    ],
    answerId: "a",
    explanation: "\u2212240 + 300 = 60 rupees.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-a-q24",
    prompt: "Evaluate: (\u22129) \u2212 4 + 2.",
    options: [
      { id: "a", text: "\u221211" },
      { id: "b", text: "\u221215" },
      { id: "c", text: "\u22127" },
      { id: "d", text: "7" }
    ],
    answerId: "a",
    explanation: "\u22129 \u2212 4 = \u221213; \u221213 + 2 = \u221211.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g7-maths-integers-b-q01",
    prompt: "Integers are closed under which operation among these?",
    options: [
      { id: "a", text: "Addition" },
      { id: "b", text: "Division" },
      { id: "c", text: "Taking square roots" },
      { id: "d", text: "Forming halves" }
    ],
    answerId: "a",
    explanation: "Sum of two integers is always an integer. Division may give a non-integer.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-b-q02",
    prompt: "Property shown by a + b = b + a for integers?",
    options: [
      { id: "a", text: "Commutative" },
      { id: "b", text: "Associative" },
      { id: "c", text: "Distributive" },
      { id: "d", text: "Identity" }
    ],
    answerId: "a",
    explanation: "Order of addition does not matter \u2014 commutative property.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-b-q03",
    prompt: "What is the additive identity for integers?",
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "1" },
      { id: "c", text: "\u22121" },
      { id: "d", text: "None" }
    ],
    answerId: "a",
    explanation: "a + 0 = a for every integer a.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-b-q04",
    prompt: "Evaluate: (\u22123) \u00d7 (\u22124) \u00d7 (\u22121).",
    options: [
      { id: "a", text: "\u221212" },
      { id: "b", text: "12" },
      { id: "c", text: "\u22127" },
      { id: "d", text: "7" }
    ],
    answerId: "a",
    explanation: "Three negatives: product is negative. 3\u00d74\u00d71 = 12 \u2192 \u221212.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-b-q05",
    prompt: "Solve for the blank: (\u221220) \u00f7 ___ = \u22125.",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "\u22124" },
      { id: "c", text: "5" },
      { id: "d", text: "\u22125" }
    ],
    answerId: "a",
    explanation: "\u221220 \u00f7 4 = \u22125.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-b-q06",
    prompt: "Which expression equals \u2212(a \u2212 b)?",
    options: [
      { id: "a", text: "b \u2212 a" },
      { id: "b", text: "a \u2212 b" },
      { id: "c", text: "\u2212a \u2212 b" },
      { id: "d", text: "a + b" }
    ],
    answerId: "a",
    explanation: "\u2212(a \u2212 b) = \u2212a + b = b \u2212 a.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-b-q07",
    prompt: "A submarine is at \u221280 m. It rises 25 m. New depth?",
    options: [
      { id: "a", text: "\u221255 m" },
      { id: "b", text: "\u2212105 m" },
      { id: "c", text: "55 m" },
      { id: "d", text: "105 m" }
    ],
    answerId: "a",
    explanation: "\u221280 + 25 = \u221255 m (still below sea level).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-b-q08",
    prompt: "Evaluate: |\u22127| \u2212 |3|.",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "10" },
      { id: "c", text: "\u22124" },
      { id: "d", text: "\u221210" }
    ],
    answerId: "a",
    explanation: "7 \u2212 3 = 4.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-b-q09",
    prompt: "Which is true for every integer n?",
    options: [
      { id: "a", text: "n \u00d7 1 = n" },
      { id: "b", text: "n \u00f7 0 = 0" },
      { id: "c", text: "n + 1 = n" },
      { id: "d", text: "n \u00d7 0 = 1" }
    ],
    answerId: "a",
    explanation: "1 is the multiplicative identity. Division by 0 is undefined.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-b-q10",
    prompt: "Evaluate: 5 \u2212 (\u22129) \u2212 3.",
    options: [
      { id: "a", text: "11" },
      { id: "b", text: "\u22127" },
      { id: "c", text: "17" },
      { id: "d", text: "1" }
    ],
    answerId: "a",
    explanation: "5 + 9 \u2212 3 = 11.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-b-q11",
    prompt: "The product of two integers is \u221236. One factor is \u22126. The other is?",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "\u22126" },
      { id: "c", text: "\u221230" },
      { id: "d", text: "42" }
    ],
    answerId: "a",
    explanation: "(\u22126) \u00d7 6 = \u221236.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-b-q12",
    prompt: "Arrange ascending: \u22122, 5, \u22128, 0.",
    options: [
      { id: "a", text: "\u22128, \u22122, 0, 5" },
      { id: "b", text: "\u22122, \u22128, 0, 5" },
      { id: "c", text: "0, \u22122, \u22128, 5" },
      { id: "d", text: "5, 0, \u22122, \u22128" }
    ],
    answerId: "a",
    explanation: "From most negative to most positive: \u22128, \u22122, 0, 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-b-q13",
    prompt: "Evaluate: (\u22121) \u00d7 (\u22121) \u00d7 (\u22121) \u00d7 (\u22121).",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "\u22121" },
      { id: "c", text: "0" },
      { id: "d", text: "4" }
    ],
    answerId: "a",
    explanation: "Four negatives \u2192 positive. Product is 1.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-b-q14",
    prompt: "What is  (\u221214) + (\u22126) + 20 ?",
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "\u221240" },
      { id: "c", text: "40" },
      { id: "d", text: "\u22128" }
    ],
    answerId: "a",
    explanation: "\u221214 \u2212 6 = \u221220; \u221220 + 20 = 0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-b-q15",
    prompt: "If a = \u22123 and b = 7, then a \u2212 b = ?",
    options: [
      { id: "a", text: "\u221210" },
      { id: "b", text: "10" },
      { id: "c", text: "\u22124" },
      { id: "d", text: "4" }
    ],
    answerId: "a",
    explanation: "\u22123 \u2212 7 = \u221210.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-b-q16",
    prompt: "Which division is undefined for integers?",
    options: [
      { id: "a", text: "7 \u00f7 0" },
      { id: "b", text: "0 \u00f7 7" },
      { id: "c", text: "(\u22127) \u00f7 1" },
      { id: "d", text: "7 \u00f7 (\u22121)" }
    ],
    answerId: "a",
    explanation: "Division by zero is never defined.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-b-q17",
    prompt: "A gain of \u20b9450 followed by a loss of \u20b9520. Net?",
    options: [
      { id: "a", text: "Loss of \u20b970" },
      { id: "b", text: "Gain of \u20b970" },
      { id: "c", text: "Gain of \u20b9970" },
      { id: "d", text: "Loss of \u20b9970" }
    ],
    answerId: "a",
    explanation: "450 \u2212 520 = \u221270 \u2192 loss of \u20b970.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-b-q18",
    prompt: "Evaluate: (\u221225) \u00f7 5 \u00d7 (\u22122).",
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "\u221210" },
      { id: "c", text: "\u22122" },
      { id: "d", text: "2" }
    ],
    answerId: "a",
    explanation: "\u221225 \u00f7 5 = \u22125; (\u22125)\u00d7(\u22122) = 10. Left to right.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-b-q19",
    prompt: "The difference of two integers can be\u2026",
    options: [
      { id: "a", text: "Positive, negative, or zero" },
      { id: "b", text: "Only positive" },
      { id: "c", text: "Only negative" },
      { id: "d", text: "Never zero" }
    ],
    answerId: "a",
    explanation: "Examples: 5\u22122=3, 2\u22125=\u22123, 5\u22125=0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-b-q20",
    prompt: "Property: a \u00d7 (b + c) = a\u00d7b + a\u00d7c is\u2026",
    options: [
      { id: "a", text: "Distributive" },
      { id: "b", text: "Commutative" },
      { id: "c", text: "Associative" },
      { id: "d", text: "Closure" }
    ],
    answerId: "a",
    explanation: "Multiplication distributes over addition.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-b-q21",
    prompt: "Evaluate: \u2212|\u221212|.",
    options: [
      { id: "a", text: "\u221212" },
      { id: "b", text: "12" },
      { id: "c", text: "0" },
      { id: "d", text: "1" }
    ],
    answerId: "a",
    explanation: "|\u221212| = 12, then the outer minus makes \u221212.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-b-q22",
    prompt: "How many integers lie strictly between \u22123 and 4?",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "7" },
      { id: "c", text: "5" },
      { id: "d", text: "8" }
    ],
    answerId: "a",
    explanation: "\u22122, \u22121, 0, 1, 2, 3 \u2014 six integers.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-b-q23",
    prompt: "Evaluate: (\u22128) + 3 \u00d7 (\u22122).",
    options: [
      { id: "a", text: "\u221214" },
      { id: "b", text: "\u221210" },
      { id: "c", text: "10" },
      { id: "d", text: "14" }
    ],
    answerId: "a",
    explanation: "Multiply first: 3\u00d7(\u22122)=\u22126; then \u22128+(\u22126)=\u221214.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-integers-b-q24",
    prompt: "Which pair are additive inverses?",
    options: [
      { id: "a", text: "\u22129 and 9" },
      { id: "b", text: "\u22129 and \u22129" },
      { id: "c", text: "9 and 0" },
      { id: "d", text: "\u22129 and 1/9" }
    ],
    answerId: "a",
    explanation: "\u22129 + 9 = 0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83d\udd22",
    title: "Integers",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "number-line",
    speak: "Integers include negatives, zero and positives. Watch signs when you operate.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "number-line",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Number line", reveal: "Left is smaller; negatives sit left of zero", emoji: "\ud83d\udccd" },
      { label: "Add/subtract", reveal: "Same signs add; minus a negative becomes plus", emoji: "\u2795" },
      { label: "Multiply/divide", reveal: "Same signs \u2192 positive; opposite \u2192 negative", emoji: "\u2716\ufe0f" },
      { label: "Absolute value", reveal: "Distance from zero", emoji: "\ud83d\udccf" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "What is (\u22123) \u00d7 (\u22124)?",
    options: [
        { id: "a", text: "12" },
        { id: "b", text: "\u221212" },
        { id: "c", text: "7" },
        { id: "d", text: "\u22127" }
    ],
    answerId: "a",
    why: "Negative times negative is positive: 12.",
    visual: "number-line",
    speak: "What is (\u22123) \u00d7 (\u22124)?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Know the number line", "Watch operation signs", "Use absolute value", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g7MathsIntegers: ChapterDef = {
  id: "integers",
  title: "Integers",
  emoji: "\ud83d\udd22",
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
  paperTopics: ["add-sub", "linear-lite"],
};

export const g7MathsIntegersQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
