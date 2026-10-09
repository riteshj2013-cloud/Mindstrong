import type { ChapterDef, PrepQuestion } from "../types";

/** Exponents and Powers - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g8-maths-exponents-a-q01",
    prompt: "What is 2\u00b3?",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "8" },
      { id: "c", text: "9" },
      { id: "d", text: "5" }
    ],
    answerId: "b",
    explanation: "2\u00b3 = 2 \u00d7 2 \u00d7 2 = 8.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-a-q02",
    prompt: "5\u00b2 \u00d7 5\u00b3 = ?",
    options: [
      { id: "a", text: "5\u2075" },
      { id: "b", text: "5\u2076" },
      { id: "c", text: "25\u2075" },
      { id: "d", text: "5" }
    ],
    answerId: "a",
    explanation: "Same base: add exponents, 2 + 3 = 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-a-q03",
    prompt: "a\u2076 \u00f7 a\u00b2 = ?",
    options: [
      { id: "a", text: "a\u00b3" },
      { id: "b", text: "a\u2074" },
      { id: "c", text: "a\u2078" },
      { id: "d", text: "a\u00b9\u00b2" }
    ],
    answerId: "b",
    explanation: "Same base: subtract exponents, 6 \u2212 2 = 4.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-a-q04",
    prompt: "(3\u00b2)\u00b3 = ?",
    options: [
      { id: "a", text: "3\u2075" },
      { id: "b", text: "3\u2076" },
      { id: "c", text: "9\u00b3" },
      { id: "d", text: "3\u2079" }
    ],
    answerId: "b",
    explanation: "Power of a power: multiply exponents, 2 \u00d7 3 = 6.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-a-q05",
    prompt: "What is a\u2070 for a \u2260 0?",
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "1" },
      { id: "c", text: "a" },
      { id: "d", text: "Undefined" }
    ],
    answerId: "b",
    explanation: "Any non-zero number to the power 0 equals 1.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-a-q06",
    prompt: "2\u207b\u00b3 equals\u2026",
    options: [
      { id: "a", text: "\u22128" },
      { id: "b", text: "\u22126" },
      { id: "c", text: "1/8" },
      { id: "d", text: "8" }
    ],
    answerId: "c",
    explanation: "2\u207b\u00b3 = 1/2\u00b3 = 1/8.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-a-q07",
    prompt: "Which is equal to 10\u207b\u00b2?",
    options: [
      { id: "a", text: "0.01" },
      { id: "b", text: "0.1" },
      { id: "c", text: "100" },
      { id: "d", text: "\u2212100" }
    ],
    answerId: "a",
    explanation: "10\u207b\u00b2 = 1/100 = 0.01.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-a-q08",
    prompt: "(\u22122)\u2074 = ?",
    options: [
      { id: "a", text: "\u221216" },
      { id: "b", text: "16" },
      { id: "c", text: "\u22128" },
      { id: "d", text: "8" }
    ],
    answerId: "b",
    explanation: "Even power of a negative is positive: 16.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-a-q09",
    prompt: "Simplify: 3\u2074 \u00d7 3\u207b\u00b2",
    options: [
      { id: "a", text: "3\u00b2" },
      { id: "b", text: "3\u2076" },
      { id: "c", text: "3\u207b\u2078" },
      { id: "d", text: "1" }
    ],
    answerId: "a",
    explanation: "Add exponents: 4 + (\u22122) = 2, so 3\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-a-q10",
    prompt: "Express 1/81 as a power of 3.",
    options: [
      { id: "a", text: "3\u2074" },
      { id: "b", text: "3\u207b\u2074" },
      { id: "c", text: "9\u207b\u00b2" },
      { id: "d", text: "Both B and C" }
    ],
    answerId: "d",
    explanation: "81 = 3\u2074 = 9\u00b2, so 1/81 = 3\u207b\u2074 = 9\u207b\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-a-q11",
    prompt: "Simplify: (2\u00b3 \u00d7 2\u2075) \u00f7 2\u2074",
    options: [
      { id: "a", text: "2\u2074" },
      { id: "b", text: "2\u00b9\u00b2" },
      { id: "c", text: "2\u00b2" },
      { id: "d", text: "2\u2078" }
    ],
    answerId: "a",
    explanation: "2\u2078 \u00f7 2\u2074 = 2\u2074.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-a-q12",
    prompt: "(5\u00b2)\u00b3 \u00d7 5\u207b\u2074 = ?",
    options: [
      { id: "a", text: "5\u00b2" },
      { id: "b", text: "5\u2075" },
      { id: "c", text: "5\u2076" },
      { id: "d", text: "5\u207b\u00b2" }
    ],
    answerId: "a",
    explanation: "5\u2076 \u00d7 5\u207b\u2074 = 5\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-a-q13",
    prompt: "Which is larger: 2\u2075 or 5\u00b2?",
    options: [
      { id: "a", text: "2\u2075" },
      { id: "b", text: "5\u00b2" },
      { id: "c", text: "They are equal" },
      { id: "d", text: "Cannot tell" }
    ],
    answerId: "a",
    explanation: "2\u2075 = 32 and 5\u00b2 = 25, so 2\u2075 is larger.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-a-q14",
    prompt: "Simplify: (x\u00b2)\u00b3 \u00f7 x\u2074",
    options: [
      { id: "a", text: "x\u00b2" },
      { id: "b", text: "x\u2075" },
      { id: "c", text: "x\u2076" },
      { id: "d", text: "x" }
    ],
    answerId: "a",
    explanation: "x\u2076 \u00f7 x\u2074 = x\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-a-q15",
    prompt: "Write 0.00056 in standard form.",
    options: [
      { id: "a", text: "5.6 \u00d7 10\u207b\u2074" },
      { id: "b", text: "5.6 \u00d7 10\u207b\u00b3" },
      { id: "c", text: "56 \u00d7 10\u207b\u2075" },
      { id: "d", text: "5.6 \u00d7 10\u2074" }
    ],
    answerId: "a",
    explanation: "Move the point 4 places: 5.6 \u00d7 10\u207b\u2074.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-a-q16",
    prompt: "Write 3.2 \u00d7 10\u2075 as an ordinary number.",
    options: [
      { id: "a", text: "320000" },
      { id: "b", text: "32000" },
      { id: "c", text: "3200" },
      { id: "d", text: "0.000032" }
    ],
    answerId: "a",
    explanation: "Move the point 5 places right: 320000.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-a-q17",
    prompt: "(\u22123)\u207b\u00b2 equals\u2026",
    options: [
      { id: "a", text: "\u22129" },
      { id: "b", text: "1/9" },
      { id: "c", text: "\u22121/9" },
      { id: "d", text: "9" }
    ],
    answerId: "b",
    explanation: "(\u22123)\u207b\u00b2 = 1/(\u22123)\u00b2 = 1/9.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-a-q18",
    prompt: "Simplify: (2/3)\u207b\u00b2",
    options: [
      { id: "a", text: "4/9" },
      { id: "b", text: "9/4" },
      { id: "c", text: "\u22124/9" },
      { id: "d", text: "2/3" }
    ],
    answerId: "b",
    explanation: "(2/3)\u207b\u00b2 = (3/2)\u00b2 = 9/4.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-a-q19",
    prompt: "If 2\u02e3 = 32, then x = ?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "5" },
      { id: "c", text: "6" },
      { id: "d", text: "16" }
    ],
    answerId: "b",
    explanation: "32 = 2\u2075, so x = 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-a-q20",
    prompt: "Simplify: (3\u2075 \u00d7 3\u207b\u00b2) \u00f7 3\u00b3",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "3" },
      { id: "c", text: "3\u00b2" },
      { id: "d", text: "3\u207b\u00b9" }
    ],
    answerId: "a",
    explanation: "3\u00b3 \u00f7 3\u00b3 = 3\u2070 = 1.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-a-q21",
    prompt: "(\u221a16)\u00b3 = ?",
    options: [
      { id: "a", text: "64" },
      { id: "b", text: "8" },
      { id: "c", text: "12" },
      { id: "d", text: "48" }
    ],
    answerId: "a",
    explanation: "\u221a16 = 4; 4\u00b3 = 64.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-a-q22",
    prompt: "Express (5\u00b3 \u00f7 5\u2075) \u00d7 5\u00b2 as a single power of 5.",
    options: [
      { id: "a", text: "5\u2070" },
      { id: "b", text: "5\u00b2" },
      { id: "c", text: "5\u207b\u00b2" },
      { id: "d", text: "5\u2074" }
    ],
    answerId: "a",
    explanation: "5\u207b\u00b2 \u00d7 5\u00b2 = 5\u2070 = 1, which is also 5\u2070.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-a-q23",
    prompt: "Which equals 8\u207b\u00b2/\u00b3?",
    options: [
      { id: "a", text: "1/4" },
      { id: "b", text: "4" },
      { id: "c", text: "\u22124" },
      { id: "d", text: "1/64" }
    ],
    answerId: "a",
    explanation: "8\u00b9/\u00b3 = 2, so 8\u00b2/\u00b3 = 4 and 8\u207b\u00b2/\u00b3 = 1/4.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-a-q24",
    prompt: "Simplify: (10\u00b3 \u00d7 10\u207b\u2075) \u00f7 10\u207b\u2074",
    options: [
      { id: "a", text: "10\u00b2" },
      { id: "b", text: "10\u2070" },
      { id: "c", text: "10\u207b\u2076" },
      { id: "d", text: "10\u2074" }
    ],
    answerId: "a",
    explanation: "10\u207b\u00b2 \u00f7 10\u207b\u2074 = 10\u207b\u00b2\u2212(\u2212\u2074) = 10\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g8-maths-exponents-b-q01",
    prompt: "What is 3\u2074?",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "81" },
      { id: "c", text: "64" },
      { id: "d", text: "27" }
    ],
    answerId: "b",
    explanation: "3\u2074 = 3 \u00d7 3 \u00d7 3 \u00d7 3 = 81.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-b-q02",
    prompt: "7\u00b9 \u00d7 7\u2074 = ?",
    options: [
      { id: "a", text: "7\u2075" },
      { id: "b", text: "7\u2074" },
      { id: "c", text: "49\u2075" },
      { id: "d", text: "7" }
    ],
    answerId: "a",
    explanation: "Add exponents: 1 + 4 = 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-b-q03",
    prompt: "b\u2079 \u00f7 b\u00b3 = ?",
    options: [
      { id: "a", text: "b\u00b3" },
      { id: "b", text: "b\u2076" },
      { id: "c", text: "b\u00b9\u00b2" },
      { id: "d", text: "b\u00b2\u2077" }
    ],
    answerId: "b",
    explanation: "Subtract exponents: 9 \u2212 3 = 6.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-b-q04",
    prompt: "(4\u00b2)\u00b2 = ?",
    options: [
      { id: "a", text: "4\u2074" },
      { id: "b", text: "4\u00b2" },
      { id: "c", text: "8\u00b2" },
      { id: "d", text: "16\u00b2" }
    ],
    answerId: "a",
    explanation: "Multiply exponents: 2 \u00d7 2 = 4.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-b-q05",
    prompt: "(\u22125)\u2070 = ?",
    options: [
      { id: "a", text: "\u22125" },
      { id: "b", text: "0" },
      { id: "c", text: "1" },
      { id: "d", text: "\u22121" }
    ],
    answerId: "c",
    explanation: "Any non-zero number to the power 0 is 1.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-b-q06",
    prompt: "4\u207b\u00b2 equals\u2026",
    options: [
      { id: "a", text: "\u221216" },
      { id: "b", text: "1/16" },
      { id: "c", text: "\u22121/16" },
      { id: "d", text: "16" }
    ],
    answerId: "b",
    explanation: "4\u207b\u00b2 = 1/4\u00b2 = 1/16.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-b-q07",
    prompt: "10\u00b3 equals\u2026",
    options: [
      { id: "a", text: "30" },
      { id: "b", text: "100" },
      { id: "c", text: "1000" },
      { id: "d", text: "10000" }
    ],
    answerId: "c",
    explanation: "10\u00b3 = 10 \u00d7 10 \u00d7 10 = 1000.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-b-q08",
    prompt: "(\u22121)\u2079\u2077 = ?",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "\u22121" },
      { id: "c", text: "0" },
      { id: "d", text: "97" }
    ],
    answerId: "b",
    explanation: "Odd power of \u22121 is \u22121.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-b-q09",
    prompt: "Simplify: 2\u2075 \u00d7 2\u207b\u2075",
    options: [
      { id: "a", text: "2\u00b9\u2070" },
      { id: "b", text: "1" },
      { id: "c", text: "2" },
      { id: "d", text: "0" }
    ],
    answerId: "b",
    explanation: "2\u2070 = 1.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-b-q10",
    prompt: "1/25 as a power of 5 is\u2026",
    options: [
      { id: "a", text: "5\u00b2" },
      { id: "b", text: "5\u207b\u00b2" },
      { id: "c", text: "25\u207b\u00b9" },
      { id: "d", text: "Both B and C" }
    ],
    answerId: "d",
    explanation: "25 = 5\u00b2, so 1/25 = 5\u207b\u00b2 = 25\u207b\u00b9.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-b-q11",
    prompt: "Simplify: (3\u2074 \u00d7 3\u00b2) \u00f7 3\u00b3",
    options: [
      { id: "a", text: "3\u00b3" },
      { id: "b", text: "3\u2075" },
      { id: "c", text: "3\u2078" },
      { id: "d", text: "3" }
    ],
    answerId: "a",
    explanation: "3\u2076 \u00f7 3\u00b3 = 3\u00b3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-b-q12",
    prompt: "(2\u00b3)\u2074 \u00d7 2\u207b\u2076 = ?",
    options: [
      { id: "a", text: "2\u2076" },
      { id: "b", text: "2\u00b9\u00b2" },
      { id: "c", text: "2\u207b\u2076" },
      { id: "d", text: "2\u00b9\u2078" }
    ],
    answerId: "a",
    explanation: "2\u00b9\u00b2 \u00d7 2\u207b\u2076 = 2\u2076.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-b-q13",
    prompt: "Which is smaller: 3\u2074 or 4\u00b3?",
    options: [
      { id: "a", text: "3\u2074" },
      { id: "b", text: "4\u00b3" },
      { id: "c", text: "They are equal" },
      { id: "d", text: "Cannot tell" }
    ],
    answerId: "b",
    explanation: "3\u2074 = 81 and 4\u00b3 = 64, so 4\u00b3 is smaller.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-b-q14",
    prompt: "Simplify: (y\u00b3)\u2074 \u00f7 y\u2078",
    options: [
      { id: "a", text: "y\u2074" },
      { id: "b", text: "y\u00b9\u00b2" },
      { id: "c", text: "y\u2075" },
      { id: "d", text: "y" }
    ],
    answerId: "a",
    explanation: "y\u00b9\u00b2 \u00f7 y\u2078 = y\u2074.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-b-q15",
    prompt: "Standard form of 720000 is\u2026",
    options: [
      { id: "a", text: "7.2 \u00d7 10\u2075" },
      { id: "b", text: "72 \u00d7 10\u2074" },
      { id: "c", text: "7.2 \u00d7 10\u2076" },
      { id: "d", text: "7.2 \u00d7 10\u2074" }
    ],
    answerId: "a",
    explanation: "7.2 \u00d7 10\u2075 is standard form.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-b-q16",
    prompt: "Ordinary number for 4.5 \u00d7 10\u207b\u00b3 is\u2026",
    options: [
      { id: "a", text: "0.0045" },
      { id: "b", text: "0.045" },
      { id: "c", text: "4500" },
      { id: "d", text: "0.00045" }
    ],
    answerId: "a",
    explanation: "Move the point 3 places left: 0.0045.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-b-q17",
    prompt: "(\u22122)\u207b\u00b3 equals\u2026",
    options: [
      { id: "a", text: "\u22121/8" },
      { id: "b", text: "1/8" },
      { id: "c", text: "\u22128" },
      { id: "d", text: "8" }
    ],
    answerId: "a",
    explanation: "1/(\u22122)\u00b3 = 1/(\u22128) = \u22121/8.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-b-q18",
    prompt: "Simplify: (3/5)\u207b\u00b9",
    options: [
      { id: "a", text: "3/5" },
      { id: "b", text: "5/3" },
      { id: "c", text: "\u22123/5" },
      { id: "d", text: "9/25" }
    ],
    answerId: "b",
    explanation: "Reciprocal: (3/5)\u207b\u00b9 = 5/3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-b-q19",
    prompt: "If 5\u02e3 = 1/125, then x = ?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "\u22123" },
      { id: "c", text: "5" },
      { id: "d", text: "\u22125" }
    ],
    answerId: "b",
    explanation: "1/125 = 5\u207b\u00b3, so x = \u22123.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-b-q20",
    prompt: "Simplify: (2\u2074 \u00f7 2\u2077) \u00d7 2\u00b3",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "2" },
      { id: "c", text: "2\u207b\u00b9" },
      { id: "d", text: "2\u2076" }
    ],
    answerId: "a",
    explanation: "2\u207b\u00b3 \u00d7 2\u00b3 = 2\u2070 = 1.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-b-q21",
    prompt: "(\u221b27)\u00b2 = ?",
    options: [
      { id: "a", text: "9" },
      { id: "b", text: "18" },
      { id: "c", text: "3" },
      { id: "d", text: "6" }
    ],
    answerId: "a",
    explanation: "\u221b27 = 3; 3\u00b2 = 9.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-b-q22",
    prompt: "Express (7\u207b\u00b3 \u00d7 7\u2075) \u00f7 7\u00b2 as a power of 7.",
    options: [
      { id: "a", text: "7\u2070" },
      { id: "b", text: "7\u2074" },
      { id: "c", text: "7\u207b\u2074" },
      { id: "d", text: "7\u00b2" }
    ],
    answerId: "a",
    explanation: "7\u00b2 \u00f7 7\u00b2 = 7\u2070.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-b-q23",
    prompt: "Which equals 27\u00b2/\u00b3?",
    options: [
      { id: "a", text: "9" },
      { id: "b", text: "18" },
      { id: "c", text: "3" },
      { id: "d", text: "81" }
    ],
    answerId: "a",
    explanation: "27\u00b9/\u00b3 = 3; 27\u00b2/\u00b3 = 3\u00b2 = 9.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-exponents-b-q24",
    prompt: "Simplify: (10\u207b\u00b2 \u00d7 10\u2074) \u00f7 10\u207b\u00b9",
    options: [
      { id: "a", text: "10\u00b3" },
      { id: "b", text: "10\u00b9" },
      { id: "c", text: "10\u207b\u00b3" },
      { id: "d", text: "10\u2075" }
    ],
    answerId: "a",
    explanation: "10\u00b2 \u00f7 10\u207b\u00b9 = 10\u00b3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "10\u2076",
    title: "Exponents and powers",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "number-line",
    speak: "Exponents shorten repeated multiplication. Laws let you simplify without expanding.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "number-line",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Same base \u00d7", reveal: "Add the exponents", emoji: "\u2795" },
      { label: "Same base \u00f7", reveal: "Subtract the exponents", emoji: "\u2796" },
      { label: "Negative powers", reveal: "Mean reciprocals", emoji: "\ud83d\udd04" },
      { label: "Standard form", reveal: "a \u00d7 10\u207f", emoji: "\ud83d\udd2d" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Simplify 5\u00b2 \u00d7 5\u00b3",
    options: [
        { id: "a", text: "5\u2075" },
        { id: "b", text: "5\u2076" },
        { id: "c", text: "25\u2075" },
        { id: "d", text: "5" }
    ],
    answerId: "a",
    why: "Same base: add exponents, 2 + 3 = 5.",
    visual: "number-line",
    speak: "Simplify 5\u00b2 \u00d7 5\u00b3",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Add / subtract exponents", "a\u2070 = 1", "Standard form", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g8MathsExponents: ChapterDef = {
  id: "exponents-powers",
  title: "Exponents and Powers",
  emoji: "10\u2076",
  blurb: "Laws of exponents and standard form",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "multiply-basics",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "multiply-basics",
      questions: SET_B,
    },
  ],
  paperTopics: ["multiply-basics", "fractions"],
};

export const g8MathsExponentsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
