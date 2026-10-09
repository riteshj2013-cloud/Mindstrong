import type { ChapterDef, PrepQuestion } from "../types";

/** Simple Equations - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g7-maths-equations-a-q01",
    prompt: "Solve: x + 7 = 15.",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "22" },
      { id: "c", text: "7" },
      { id: "d", text: "15" }
    ],
    answerId: "a",
    explanation: "Subtract 7 from both sides: x = 8.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-a-q02",
    prompt: "Solve: y \u2212 9 = 4.",
    options: [
      { id: "a", text: "13" },
      { id: "b", text: "5" },
      { id: "c", text: "\u22125" },
      { id: "d", text: "36" }
    ],
    answerId: "a",
    explanation: "Add 9: y = 13.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-a-q03",
    prompt: "Solve: 3m = 21.",
    options: [
      { id: "a", text: "7" },
      { id: "b", text: "18" },
      { id: "c", text: "63" },
      { id: "d", text: "24" }
    ],
    answerId: "a",
    explanation: "Divide both sides by 3: m = 7.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-a-q04",
    prompt: "Solve: n/5 = 6.",
    options: [
      { id: "a", text: "30" },
      { id: "b", text: "11" },
      { id: "c", text: "1" },
      { id: "d", text: "5/6" }
    ],
    answerId: "a",
    explanation: "Multiply both sides by 5: n = 30.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-a-q05",
    prompt: "Solve: 2x + 3 = 11.",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "7" },
      { id: "c", text: "8" },
      { id: "d", text: "14" }
    ],
    answerId: "a",
    explanation: "2x = 8, so x = 4.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-a-q06",
    prompt: "Solve: 5p \u2212 4 = 16.",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "20" },
      { id: "c", text: "3" },
      { id: "d", text: "12" }
    ],
    answerId: "a",
    explanation: "5p = 20, p = 4.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-a-q07",
    prompt: "Which is a solution of x \u2212 2 = 10?",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "8" },
      { id: "c", text: "20" },
      { id: "d", text: "5" }
    ],
    answerId: "a",
    explanation: "12 \u2212 2 = 10.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-a-q08",
    prompt: "Translate: \u201cA number increased by 6 is 19.\u201d",
    options: [
      { id: "a", text: "x + 6 = 19" },
      { id: "b", text: "x \u2212 6 = 19" },
      { id: "c", text: "6x = 19" },
      { id: "d", text: "x/6 = 19" }
    ],
    answerId: "a",
    explanation: "Increased by means add.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-a-q09",
    prompt: "Translate: \u201cThrice a number is 27.\u201d",
    options: [
      { id: "a", text: "3x = 27" },
      { id: "b", text: "x + 3 = 27" },
      { id: "c", text: "x/3 = 27" },
      { id: "d", text: "x \u2212 3 = 27" }
    ],
    answerId: "a",
    explanation: "Thrice means three times.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-a-q10",
    prompt: "Solve: \u2212x = 8.",
    options: [
      { id: "a", text: "\u22128" },
      { id: "b", text: "8" },
      { id: "c", text: "0" },
      { id: "d", text: "1" }
    ],
    answerId: "a",
    explanation: "Multiply both sides by \u22121: x = \u22128.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-a-q11",
    prompt: "Solve: 4(x \u2212 1) = 20.",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "5" },
      { id: "c", text: "4" },
      { id: "d", text: "21" }
    ],
    answerId: "a",
    explanation: "x \u2212 1 = 5, so x = 6.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-a-q12",
    prompt: "Solve: (x/3) + 2 = 5.",
    options: [
      { id: "a", text: "9" },
      { id: "b", text: "7" },
      { id: "c", text: "3" },
      { id: "d", text: "15" }
    ],
    answerId: "a",
    explanation: "x/3 = 3, so x = 9.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-a-q13",
    prompt: "If 7 is added to twice a number, the result is 25. The number is?",
    options: [
      { id: "a", text: "9" },
      { id: "b", text: "18" },
      { id: "c", text: "32" },
      { id: "d", text: "4" }
    ],
    answerId: "a",
    explanation: "2x + 7 = 25 \u2192 2x = 18 \u2192 x = 9.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-a-q14",
    prompt: "Solve: 10 \u2212 x = 3.",
    options: [
      { id: "a", text: "7" },
      { id: "b", text: "13" },
      { id: "c", text: "\u22127" },
      { id: "d", text: "30" }
    ],
    answerId: "a",
    explanation: "\u2212x = 3 \u2212 10 = \u22127, so x = 7. Or: x = 10 \u2212 3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-a-q15",
    prompt: "Which equation has solution x = 0?",
    options: [
      { id: "a", text: "5x = 0" },
      { id: "b", text: "x + 5 = 0" },
      { id: "c", text: "x \u2212 5 = 0" },
      { id: "d", text: "x/5 = 1" }
    ],
    answerId: "a",
    explanation: "5 \u00d7 0 = 0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-a-q16",
    prompt: "Solve: 6x = \u221218.",
    options: [
      { id: "a", text: "\u22123" },
      { id: "b", text: "3" },
      { id: "c", text: "\u221212" },
      { id: "d", text: "108" }
    ],
    answerId: "a",
    explanation: "x = \u221218/6 = \u22123.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-a-q17",
    prompt: "Solve: x/2 \u2212 5 = 1.",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "8" },
      { id: "c", text: "6" },
      { id: "d", text: "3" }
    ],
    answerId: "a",
    explanation: "x/2 = 6, x = 12.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-a-q18",
    prompt: "A number minus 12 equals \u22125. The number is?",
    options: [
      { id: "a", text: "7" },
      { id: "b", text: "\u22127" },
      { id: "c", text: "17" },
      { id: "d", text: "\u221217" }
    ],
    answerId: "a",
    explanation: "x \u2212 12 = \u22125 \u2192 x = 7.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-a-q19",
    prompt: "Solve: 3x + x = 20.",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "10" },
      { id: "c", text: "4" },
      { id: "d", text: "20" }
    ],
    answerId: "a",
    explanation: "4x = 20, x = 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-a-q20",
    prompt: "Solve: 2x \u2212 x + 4 = 9.",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "13" },
      { id: "c", text: "4.5" },
      { id: "d", text: "\u22125" }
    ],
    answerId: "a",
    explanation: "x + 4 = 9, x = 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-a-q21",
    prompt: "If x = 3 satisfies kx + 1 = 10, then k = ?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "9" },
      { id: "c", text: "1" },
      { id: "d", text: "7" }
    ],
    answerId: "a",
    explanation: "3k + 1 = 10 \u2192 3k = 9 \u2192 k = 3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-a-q22",
    prompt: "Solve: 5(x + 2) = 5x + 10.",
    options: [
      { id: "a", text: "All real numbers (identity)" },
      { id: "b", text: "x = 0 only" },
      { id: "c", text: "x = 2 only" },
      { id: "d", text: "No solution" }
    ],
    answerId: "a",
    explanation: "Expanding gives 5x + 10 = 5x + 10 \u2014 always true.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-a-q23",
    prompt: "Solve: 2x + 5 = 2x + 9.",
    options: [
      { id: "a", text: "No solution" },
      { id: "b", text: "x = 0" },
      { id: "c", text: "x = 2" },
      { id: "d", text: "All real numbers" }
    ],
    answerId: "a",
    explanation: "Subtract 2x: 5 = 9, which is false. No solution.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-a-q24",
    prompt: "Meera has \u20b9x. After spending \u20b940 she has \u20b9110. Find x.",
    options: [
      { id: "a", text: "150" },
      { id: "b", text: "70" },
      { id: "c", text: "40" },
      { id: "d", text: "110" }
    ],
    answerId: "a",
    explanation: "x \u2212 40 = 110 \u2192 x = 150.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g7-maths-equations-b-q01",
    prompt: "Solve: 7x \u2212 3 = 4x + 12.",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "3" },
      { id: "c", text: "9" },
      { id: "d", text: "15" }
    ],
    answerId: "a",
    explanation: "7x \u2212 4x = 12 + 3 \u2192 3x = 15 \u2192 x = 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-b-q02",
    prompt: "Solve: 3(x \u2212 4) = 2(x + 1).",
    options: [
      { id: "a", text: "14" },
      { id: "b", text: "10" },
      { id: "c", text: "\u221214" },
      { id: "d", text: "2" }
    ],
    answerId: "a",
    explanation: "3x \u2212 12 = 2x + 2 \u2192 x = 14.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-b-q03",
    prompt: "The sum of three consecutive integers starting at n is 54. Find n.",
    options: [
      { id: "a", text: "17" },
      { id: "b", text: "18" },
      { id: "c", text: "16" },
      { id: "d", text: "15" }
    ],
    answerId: "a",
    explanation: "n + (n+1) + (n+2) = 54 \u2192 3n + 3 = 54 \u2192 n = 17.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-b-q04",
    prompt: "Solve: x/4 = x/6 + 1.",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "6" },
      { id: "c", text: "24" },
      { id: "d", text: "2" }
    ],
    answerId: "a",
    explanation: "Multiply by 12: 3x = 2x + 12 \u2192 x = 12.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-b-q05",
    prompt: "A number when multiplied by 5 and then decreased by 8 gives 27. Number?",
    options: [
      { id: "a", text: "7" },
      { id: "b", text: "5" },
      { id: "c", text: "35" },
      { id: "d", text: "19" }
    ],
    answerId: "a",
    explanation: "5x \u2212 8 = 27 \u2192 5x = 35 \u2192 x = 7.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-b-q06",
    prompt: "Solve: \u22122x = 14.",
    options: [
      { id: "a", text: "\u22127" },
      { id: "b", text: "7" },
      { id: "c", text: "\u221216" },
      { id: "d", text: "16" }
    ],
    answerId: "a",
    explanation: "x = 14/(\u22122) = \u22127.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-b-q07",
    prompt: "If 2x \u2212 1 = 9, then 3x + 2 = ?",
    options: [
      { id: "a", text: "17" },
      { id: "b", text: "14" },
      { id: "c", text: "11" },
      { id: "d", text: "5" }
    ],
    answerId: "a",
    explanation: "2x = 10, x = 5; 3\u00d75 + 2 = 17.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-b-q08",
    prompt: "Solve: 8 \u2212 3x = 2.",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "\u22122" },
      { id: "c", text: "10/3" },
      { id: "d", text: "3" }
    ],
    answerId: "a",
    explanation: "\u22123x = \u22126 \u2192 x = 2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-b-q09",
    prompt: "Perimeter of a square is 48 cm. Side length?",
    options: [
      { id: "a", text: "12 cm" },
      { id: "b", text: "24 cm" },
      { id: "c", text: "48 cm" },
      { id: "d", text: "6 cm" }
    ],
    answerId: "a",
    explanation: "4s = 48 \u2192 s = 12.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-b-q10",
    prompt: "Solve: (2x + 1)/3 = 5.",
    options: [
      { id: "a", text: "7" },
      { id: "b", text: "8" },
      { id: "c", text: "14" },
      { id: "d", text: "4" }
    ],
    answerId: "a",
    explanation: "2x + 1 = 15 \u2192 2x = 14 \u2192 x = 7.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-b-q11",
    prompt: "Age: Ravi is 5 years older than Priya. Sum of ages is 29. Priya\u2019s age?",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "17" },
      { id: "c", text: "24" },
      { id: "d", text: "5" }
    ],
    answerId: "a",
    explanation: "p + (p+5) = 29 \u2192 2p = 24 \u2192 p = 12.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-b-q12",
    prompt: "Solve: 9 \u2212 x = 2x.",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "9" },
      { id: "c", text: "\u22123" },
      { id: "d", text: "6" }
    ],
    answerId: "a",
    explanation: "9 = 3x \u2192 x = 3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-b-q13",
    prompt: "Which step is valid when solving equations?",
    options: [
      { id: "a", text: "Add the same number to both sides" },
      { id: "b", text: "Add different numbers to each side" },
      { id: "c", text: "Divide only one side by 2" },
      { id: "d", text: "Delete a term from one side only" }
    ],
    answerId: "a",
    explanation: "Balance requires the same change on both sides.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-b-q14",
    prompt: "Solve: 0.5x = 4.",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "2" },
      { id: "c", text: "4.5" },
      { id: "d", text: "0.5" }
    ],
    answerId: "a",
    explanation: "x = 4 / 0.5 = 8.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-b-q15",
    prompt: "Two numbers sum to 40; one is 3 more than the other. Smaller number?",
    options: [
      { id: "a", text: "18.5" },
      { id: "b", text: "21.5" },
      { id: "c", text: "20" },
      { id: "d", text: "17" }
    ],
    answerId: "a",
    explanation: "x + (x+3) = 40 \u2192 2x = 37 \u2192 x = 18.5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-b-q16",
    prompt: "Solve: 4x + 7 = \u22129.",
    options: [
      { id: "a", text: "\u22124" },
      { id: "b", text: "4" },
      { id: "c", text: "\u221216/4" },
      { id: "d", text: "2" }
    ],
    answerId: "a",
    explanation: "4x = \u221216 \u2192 x = \u22124.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-b-q17",
    prompt: "Form equation: \u201cHalf a number decreased by 3 equals 10.\u201d",
    options: [
      { id: "a", text: "x/2 \u2212 3 = 10" },
      { id: "b", text: "2x \u2212 3 = 10" },
      { id: "c", text: "x/2 + 3 = 10" },
      { id: "d", text: "x \u2212 3/2 = 10" }
    ],
    answerId: "a",
    explanation: "Half is x/2; decreased by 3 subtracts 3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-b-q18",
    prompt: "Solve: 5x \u2212 2x + 6 = 24.",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "10" },
      { id: "c", text: "18" },
      { id: "d", text: "3" }
    ],
    answerId: "a",
    explanation: "3x + 6 = 24 \u2192 3x = 18 \u2192 x = 6.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-b-q19",
    prompt: "Check: Is x = \u22122 a solution of 3x + 8 = 2?",
    options: [
      { id: "a", text: "Yes" },
      { id: "b", text: "No" },
      { id: "c", text: "Only if x > 0" },
      { id: "d", text: "Cannot tell" }
    ],
    answerId: "a",
    explanation: "3(\u22122) + 8 = \u22126 + 8 = 2. Yes.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-b-q20",
    prompt: "Solve: 12 = 3(x + 1).",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "4" },
      { id: "c", text: "5" },
      { id: "d", text: "11" }
    ],
    answerId: "a",
    explanation: "4 = x + 1 \u2192 x = 3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-b-q21",
    prompt: "A ticket costs \u20b9x. Three tickets cost \u20b990 more than one ticket. Equation?",
    options: [
      { id: "a", text: "3x = x + 90" },
      { id: "b", text: "3x + 90 = x" },
      { id: "c", text: "3x = 90" },
      { id: "d", text: "x = 3\u00d790" }
    ],
    answerId: "a",
    explanation: "Three tickets = one ticket + 90 \u2192 3x = x + 90.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-b-q22",
    prompt: "From 3x = x + 90, x = ?",
    options: [
      { id: "a", text: "45" },
      { id: "b", text: "30" },
      { id: "c", text: "90" },
      { id: "d", text: "15" }
    ],
    answerId: "a",
    explanation: "2x = 90 \u2192 x = 45.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-b-q23",
    prompt: "Solve: \u2212(x \u2212 4) = 10.",
    options: [
      { id: "a", text: "\u22126" },
      { id: "b", text: "6" },
      { id: "c", text: "14" },
      { id: "d", text: "\u221214" }
    ],
    answerId: "a",
    explanation: "\u2212x + 4 = 10 \u2192 \u2212x = 6 \u2192 x = \u22126.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g7-maths-equations-b-q24",
    prompt: "Linear equation means the variable\u2019s power is\u2026",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "2" },
      { id: "c", text: "0" },
      { id: "d", text: "Any power" }
    ],
    answerId: "a",
    explanation: "In a linear equation, the unknown appears to the first power only.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud835\udc65",
    title: "Simple Equations",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "balance",
    speak: "A simple equation is a balance. Do the same to both sides to find the unknown.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "balance",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Balance", reveal: "Same change on both sides", emoji: "\u2696\ufe0f" },
      { label: "Inverse ops", reveal: "Undo + with \u2212, undo \u00d7 with \u00f7", emoji: "\ud83d\udd04" },
      { label: "Translate", reveal: "Words become equations", emoji: "\ud83d\udcdd" },
      { label: "Check", reveal: "Substitute your answer back", emoji: "\u2705" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Solve x + 7 = 15",
    options: [
        { id: "a", text: "8" },
        { id: "b", text: "22" },
        { id: "c", text: "7" },
        { id: "d", text: "15" }
    ],
    answerId: "a",
    why: "Subtract 7 from both sides: x = 8.",
    visual: "balance",
    speak: "Solve x + 7 = 15",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Keep both sides balanced", "Use inverse operations", "Check by substituting", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g7MathsEquations: ChapterDef = {
  id: "simple-equations",
  title: "Simple Equations",
  emoji: "\ud835\udc65",
  blurb: "Balance both sides to find x",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "linear-lite",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "linear-lite",
      questions: SET_B,
    },
  ],
  paperTopics: ["linear-lite", "add-sub"],
};

export const g7MathsEquationsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
