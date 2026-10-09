import type { ChapterDef, PrepQuestion } from "../types";

/** Algebraic Expressions & Identities - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g8-maths-algebra-a-q01",
    prompt: "Which of these is a monomial?",
    options: [
      { id: "a", text: "2x + 3" },
      { id: "b", text: "5xy" },
      { id: "c", text: "x + y + z" },
      { id: "d", text: "a\u00b2 \u2212 b\u00b2" }
    ],
    answerId: "b",
    explanation: "A monomial is a single term; 5xy has one term, while the others have two or more.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-a-q02",
    prompt: "How many terms are in 3x\u00b2 \u2212 5xy + 7?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "3" },
      { id: "c", text: "4" },
      { id: "d", text: "1" }
    ],
    answerId: "b",
    explanation: "The terms are 3x\u00b2, \u22125xy and 7, so there are three terms.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-a-q03",
    prompt: "What is the coefficient of x\u00b2 in 4x\u00b2 \u2212 3x + 1?",
    options: [
      { id: "a", text: "\u22123" },
      { id: "b", text: "1" },
      { id: "c", text: "4" },
      { id: "d", text: "x\u00b2" }
    ],
    answerId: "c",
    explanation: "The coefficient is the numerical factor multiplying x\u00b2, which is 4.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-a-q04",
    prompt: "Add: (2x + 3) + (5x \u2212 1)",
    options: [
      { id: "a", text: "7x + 2" },
      { id: "b", text: "7x + 4" },
      { id: "c", text: "3x + 2" },
      { id: "d", text: "7x \u2212 2" }
    ],
    answerId: "a",
    explanation: "Like terms: 2x + 5x = 7x and 3 + (\u22121) = 2, so the sum is 7x + 2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-a-q05",
    prompt: "Subtract: (5x \u2212 2) \u2212 (3x + 4)",
    options: [
      { id: "a", text: "2x \u2212 6" },
      { id: "b", text: "2x + 2" },
      { id: "c", text: "8x \u2212 6" },
      { id: "d", text: "2x \u2212 2" }
    ],
    answerId: "a",
    explanation: "Distribute the minus: 5x \u2212 2 \u2212 3x \u2212 4 = 2x \u2212 6.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-a-q06",
    prompt: "Multiply: 3x \u00d7 4y",
    options: [
      { id: "a", text: "7xy" },
      { id: "b", text: "12xy" },
      { id: "c", text: "12x + y" },
      { id: "d", text: "12x\u00b2y" }
    ],
    answerId: "b",
    explanation: "Multiply coefficients and variables: 3 \u00d7 4 = 12 and x \u00d7 y = xy.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-a-q07",
    prompt: "What is (x + 2)(x + 3)?",
    options: [
      { id: "a", text: "x\u00b2 + 5x + 6" },
      { id: "b", text: "x\u00b2 + 6" },
      { id: "c", text: "x\u00b2 + 5" },
      { id: "d", text: "2x + 5" }
    ],
    answerId: "a",
    explanation: "FOIL: x\u00b2 + 3x + 2x + 6 = x\u00b2 + 5x + 6.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-a-q08",
    prompt: "Expand: 2(x \u2212 4)",
    options: [
      { id: "a", text: "2x \u2212 4" },
      { id: "b", text: "2x \u2212 8" },
      { id: "c", text: "x \u2212 8" },
      { id: "d", text: "2x + 8" }
    ],
    answerId: "b",
    explanation: "Distribute: 2 \u00d7 x \u2212 2 \u00d7 4 = 2x \u2212 8.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-a-q09",
    prompt: "Which identity is (a + b)\u00b2?",
    options: [
      { id: "a", text: "a\u00b2 + b\u00b2" },
      { id: "b", text: "a\u00b2 + 2ab + b\u00b2" },
      { id: "c", text: "a\u00b2 \u2212 2ab + b\u00b2" },
      { id: "d", text: "a\u00b2 \u2212 b\u00b2" }
    ],
    answerId: "b",
    explanation: "The square of a sum is a\u00b2 + 2ab + b\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-a-q10",
    prompt: "(a \u2212 b)\u00b2 equals\u2026",
    options: [
      { id: "a", text: "a\u00b2 \u2212 b\u00b2" },
      { id: "b", text: "a\u00b2 + 2ab + b\u00b2" },
      { id: "c", text: "a\u00b2 \u2212 2ab + b\u00b2" },
      { id: "d", text: "a\u00b2 + b\u00b2" }
    ],
    answerId: "c",
    explanation: "The square of a difference is a\u00b2 \u2212 2ab + b\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-a-q11",
    prompt: "a\u00b2 \u2212 b\u00b2 factors as\u2026",
    options: [
      { id: "a", text: "(a \u2212 b)\u00b2" },
      { id: "b", text: "(a + b)\u00b2" },
      { id: "c", text: "(a + b)(a \u2212 b)" },
      { id: "d", text: "a(a \u2212 b)" }
    ],
    answerId: "c",
    explanation: "Difference of squares: a\u00b2 \u2212 b\u00b2 = (a + b)(a \u2212 b).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-a-q12",
    prompt: "Evaluate (x + 3)\u00b2 when x = 2.",
    options: [
      { id: "a", text: "25" },
      { id: "b", text: "13" },
      { id: "c", text: "10" },
      { id: "d", text: "7" }
    ],
    answerId: "a",
    explanation: "(2 + 3)\u00b2 = 5\u00b2 = 25.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-a-q13",
    prompt: "Simplify: 4x\u00b2y \u00f7 2xy",
    options: [
      { id: "a", text: "2x" },
      { id: "b", text: "2xy" },
      { id: "c", text: "2x\u00b2" },
      { id: "d", text: "8x\u00b3y\u00b2" }
    ],
    answerId: "a",
    explanation: "4/2 = 2, x\u00b2/x = x, y/y = 1, so the quotient is 2x.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-a-q14",
    prompt: "Expand: (2x + 1)(x \u2212 3)",
    options: [
      { id: "a", text: "2x\u00b2 \u2212 5x \u2212 3" },
      { id: "b", text: "2x\u00b2 \u2212 6x \u2212 3" },
      { id: "c", text: "2x\u00b2 \u2212 5x + 3" },
      { id: "d", text: "2x\u00b2 + 5x \u2212 3" }
    ],
    answerId: "a",
    explanation: "2x\u00b7x + 2x\u00b7(\u22123) + 1\u00b7x + 1\u00b7(\u22123) = 2x\u00b2 \u2212 6x + x \u2212 3 = 2x\u00b2 \u2212 5x \u2212 3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-a-q15",
    prompt: "What is the constant term in 5x\u00b3 \u2212 2x\u00b2 + 7x \u2212 9?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "\u22122" },
      { id: "c", text: "7" },
      { id: "d", text: "\u22129" }
    ],
    answerId: "d",
    explanation: "The constant term has no variable factor; here it is \u22129.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-a-q16",
    prompt: "Expand using identity: (3x + 2)\u00b2",
    options: [
      { id: "a", text: "9x\u00b2 + 4" },
      { id: "b", text: "9x\u00b2 + 12x + 4" },
      { id: "c", text: "9x\u00b2 + 6x + 4" },
      { id: "d", text: "6x\u00b2 + 12x + 4" }
    ],
    answerId: "b",
    explanation: "(3x)\u00b2 + 2\u00b73x\u00b72 + 2\u00b2 = 9x\u00b2 + 12x + 4.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-a-q17",
    prompt: "Expand: (5y \u2212 3)\u00b2",
    options: [
      { id: "a", text: "25y\u00b2 \u2212 9" },
      { id: "b", text: "25y\u00b2 \u2212 30y + 9" },
      { id: "c", text: "25y\u00b2 \u2212 15y + 9" },
      { id: "d", text: "25y\u00b2 + 30y + 9" }
    ],
    answerId: "b",
    explanation: "(5y)\u00b2 \u2212 2\u00b75y\u00b73 + 3\u00b2 = 25y\u00b2 \u2212 30y + 9.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-a-q18",
    prompt: "Factor: x\u00b2 \u2212 16",
    options: [
      { id: "a", text: "(x \u2212 4)\u00b2" },
      { id: "b", text: "(x + 4)\u00b2" },
      { id: "c", text: "(x + 4)(x \u2212 4)" },
      { id: "d", text: "x(x \u2212 16)" }
    ],
    answerId: "c",
    explanation: "x\u00b2 \u2212 16 = x\u00b2 \u2212 4\u00b2 = (x + 4)(x \u2212 4).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-a-q19",
    prompt: "If (a + b)\u00b2 = 49 and ab = 10, find a\u00b2 + b\u00b2.",
    options: [
      { id: "a", text: "29" },
      { id: "b", text: "39" },
      { id: "c", text: "59" },
      { id: "d", text: "9" }
    ],
    answerId: "a",
    explanation: "(a + b)\u00b2 = a\u00b2 + 2ab + b\u00b2 = 49, so a\u00b2 + b\u00b2 = 49 \u2212 2\u00b710 = 29.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-a-q20",
    prompt: "Simplify: (x + y)\u00b2 \u2212 (x \u2212 y)\u00b2",
    options: [
      { id: "a", text: "4xy" },
      { id: "b", text: "2x\u00b2 + 2y\u00b2" },
      { id: "c", text: "0" },
      { id: "d", text: "2xy" }
    ],
    answerId: "a",
    explanation: "Expand: (x\u00b2 + 2xy + y\u00b2) \u2212 (x\u00b2 \u2212 2xy + y\u00b2) = 4xy.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-a-q21",
    prompt: "Expand: (x + 2)(x \u2212 2)(x\u00b2 + 4)",
    options: [
      { id: "a", text: "x\u2074 \u2212 16" },
      { id: "b", text: "x\u2074 + 16" },
      { id: "c", text: "x\u2074 \u2212 8" },
      { id: "d", text: "x\u2074 \u2212 4" }
    ],
    answerId: "a",
    explanation: "(x + 2)(x \u2212 2) = x\u00b2 \u2212 4, then (x\u00b2 \u2212 4)(x\u00b2 + 4) = x\u2074 \u2212 16.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-a-q22",
    prompt: "The product (2a \u2212 3b)(2a + 3b) equals\u2026",
    options: [
      { id: "a", text: "4a\u00b2 \u2212 9b\u00b2" },
      { id: "b", text: "4a\u00b2 + 9b\u00b2" },
      { id: "c", text: "4a\u00b2 \u2212 6ab \u2212 9b\u00b2" },
      { id: "d", text: "4a\u00b2 \u2212 12ab + 9b\u00b2" }
    ],
    answerId: "a",
    explanation: "Difference of squares: (2a)\u00b2 \u2212 (3b)\u00b2 = 4a\u00b2 \u2212 9b\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-a-q23",
    prompt: "Find the value of 102\u00b2 using an identity.",
    options: [
      { id: "a", text: "10404" },
      { id: "b", text: "10000" },
      { id: "c", text: "10400" },
      { id: "d", text: "10204" }
    ],
    answerId: "a",
    explanation: "102\u00b2 = (100 + 2)\u00b2 = 10000 + 400 + 4 = 10404.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-a-q24",
    prompt: "Simplify: 3(x \u2212 2) \u2212 2(x + 5) + 4",
    options: [
      { id: "a", text: "x \u2212 12" },
      { id: "b", text: "x + 2" },
      { id: "c", text: "5x \u2212 12" },
      { id: "d", text: "x \u2212 2" }
    ],
    answerId: "a",
    explanation: "3x \u2212 6 \u2212 2x \u2212 10 + 4 = x \u2212 12.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g8-maths-algebra-b-q01",
    prompt: "Which expression is a binomial?",
    options: [
      { id: "a", text: "7" },
      { id: "b", text: "3x" },
      { id: "c", text: "x + 5" },
      { id: "d", text: "x\u00b2 + 2x + 1" }
    ],
    answerId: "c",
    explanation: "A binomial has exactly two terms; x + 5 has two.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-b-q02",
    prompt: "Degree of the polynomial 4x\u00b3 \u2212 x + 2 is\u2026",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "2" },
      { id: "c", text: "3" },
      { id: "d", text: "4" }
    ],
    answerId: "c",
    explanation: "The highest power of x is 3, so the degree is 3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-b-q03",
    prompt: "What is the coefficient of y in 2x \u2212 5y + 8?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "\u22125" },
      { id: "c", text: "8" },
      { id: "d", text: "5" }
    ],
    answerId: "b",
    explanation: "The term \u22125y has coefficient \u22125.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-b-q04",
    prompt: "Add: (x\u00b2 + 3x) + (2x\u00b2 \u2212 5x + 1)",
    options: [
      { id: "a", text: "3x\u00b2 \u2212 2x + 1" },
      { id: "b", text: "3x\u00b2 + 8x + 1" },
      { id: "c", text: "x\u00b2 \u2212 2x + 1" },
      { id: "d", text: "3x\u00b2 \u2212 2x" }
    ],
    answerId: "a",
    explanation: "x\u00b2 + 2x\u00b2 = 3x\u00b2, 3x \u2212 5x = \u22122x, and +1 remains.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-b-q05",
    prompt: "Subtract: (7a \u2212 3) \u2212 (2a \u2212 5)",
    options: [
      { id: "a", text: "5a \u2212 8" },
      { id: "b", text: "5a + 2" },
      { id: "c", text: "9a \u2212 8" },
      { id: "d", text: "5a \u2212 2" }
    ],
    answerId: "b",
    explanation: "7a \u2212 3 \u2212 2a + 5 = 5a + 2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-b-q06",
    prompt: "Multiply: (\u22123x)(\u22122x)",
    options: [
      { id: "a", text: "6x" },
      { id: "b", text: "\u22126x\u00b2" },
      { id: "c", text: "6x\u00b2" },
      { id: "d", text: "5x\u00b2" }
    ],
    answerId: "c",
    explanation: "Negative times negative is positive; 3 \u00d7 2 = 6 and x \u00d7 x = x\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-b-q07",
    prompt: "Expand: (y \u2212 1)(y + 4)",
    options: [
      { id: "a", text: "y\u00b2 + 3y \u2212 4" },
      { id: "b", text: "y\u00b2 + 5y \u2212 4" },
      { id: "c", text: "y\u00b2 \u2212 3y \u2212 4" },
      { id: "d", text: "y\u00b2 + 3y + 4" }
    ],
    answerId: "a",
    explanation: "y\u00b2 + 4y \u2212 y \u2212 4 = y\u00b2 + 3y \u2212 4.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-b-q08",
    prompt: "Expand: \u2212(2x \u2212 5)",
    options: [
      { id: "a", text: "\u22122x \u2212 5" },
      { id: "b", text: "\u22122x + 5" },
      { id: "c", text: "2x \u2212 5" },
      { id: "d", text: "2x + 5" }
    ],
    answerId: "b",
    explanation: "The minus flips both signs: \u22122x + 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-b-q09",
    prompt: "(a + b)(a \u2212 b) equals\u2026",
    options: [
      { id: "a", text: "a\u00b2 + b\u00b2" },
      { id: "b", text: "a\u00b2 \u2212 b\u00b2" },
      { id: "c", text: "(a \u2212 b)\u00b2" },
      { id: "d", text: "2ab" }
    ],
    answerId: "b",
    explanation: "This is the difference-of-squares identity.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-b-q10",
    prompt: "Which is equal to (x + 5)\u00b2?",
    options: [
      { id: "a", text: "x\u00b2 + 25" },
      { id: "b", text: "x\u00b2 + 10x + 25" },
      { id: "c", text: "x\u00b2 + 5x + 25" },
      { id: "d", text: "x\u00b2 \u2212 10x + 25" }
    ],
    answerId: "b",
    explanation: "(x + 5)\u00b2 = x\u00b2 + 2\u00b7x\u00b75 + 25 = x\u00b2 + 10x + 25.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-b-q11",
    prompt: "(x \u2212 7)\u00b2 equals\u2026",
    options: [
      { id: "a", text: "x\u00b2 \u2212 49" },
      { id: "b", text: "x\u00b2 \u2212 14x + 49" },
      { id: "c", text: "x\u00b2 + 14x + 49" },
      { id: "d", text: "x\u00b2 \u2212 7x + 49" }
    ],
    answerId: "b",
    explanation: "(x \u2212 7)\u00b2 = x\u00b2 \u2212 14x + 49.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-b-q12",
    prompt: "Evaluate 9\u00b2 \u2212 4\u00b2 using a\u00b2 \u2212 b\u00b2.",
    options: [
      { id: "a", text: "65" },
      { id: "b", text: "13" },
      { id: "c", text: "5" },
      { id: "d", text: "45" }
    ],
    answerId: "a",
    explanation: "9\u00b2 \u2212 4\u00b2 = (9 + 4)(9 \u2212 4) = 13 \u00d7 5 = 65.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-b-q13",
    prompt: "Divide: 12a\u00b3b\u00b2 \u00f7 3ab",
    options: [
      { id: "a", text: "4a\u00b2b" },
      { id: "b", text: "4a\u00b3b" },
      { id: "c", text: "9a\u00b2b" },
      { id: "d", text: "4ab" }
    ],
    answerId: "a",
    explanation: "12/3 = 4, a\u00b3/a = a\u00b2, b\u00b2/b = b.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-b-q14",
    prompt: "Expand: (3x \u2212 2)(2x + 5)",
    options: [
      { id: "a", text: "6x\u00b2 + 11x \u2212 10" },
      { id: "b", text: "6x\u00b2 + 19x \u2212 10" },
      { id: "c", text: "6x\u00b2 \u2212 11x \u2212 10" },
      { id: "d", text: "5x\u00b2 + 11x \u2212 10" }
    ],
    answerId: "a",
    explanation: "6x\u00b2 + 15x \u2212 4x \u2212 10 = 6x\u00b2 + 11x \u2212 10.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-b-q15",
    prompt: "Like terms among 3x\u00b2, 5x, \u22122x\u00b2, 7 are\u2026",
    options: [
      { id: "a", text: "3x\u00b2 and \u22122x\u00b2" },
      { id: "b", text: "3x\u00b2 and 5x" },
      { id: "c", text: "5x and 7" },
      { id: "d", text: "All of them" }
    ],
    answerId: "a",
    explanation: "Like terms have the same variables with the same powers; only the x\u00b2 terms match.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-b-q16",
    prompt: "Expand: (4m \u2212 1)\u00b2",
    options: [
      { id: "a", text: "16m\u00b2 \u2212 1" },
      { id: "b", text: "16m\u00b2 \u2212 8m + 1" },
      { id: "c", text: "16m\u00b2 \u2212 4m + 1" },
      { id: "d", text: "8m\u00b2 \u2212 8m + 1" }
    ],
    answerId: "b",
    explanation: "(4m)\u00b2 \u2212 2\u00b74m\u00b71 + 1 = 16m\u00b2 \u2212 8m + 1.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-b-q17",
    prompt: "Factor: 49 \u2212 p\u00b2",
    options: [
      { id: "a", text: "(7 \u2212 p)\u00b2" },
      { id: "b", text: "(7 + p)(7 \u2212 p)" },
      { id: "c", text: "(49 \u2212 p)(49 + p)" },
      { id: "d", text: "7(7 \u2212 p)" }
    ],
    answerId: "b",
    explanation: "49 \u2212 p\u00b2 = 7\u00b2 \u2212 p\u00b2 = (7 + p)(7 \u2212 p).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-b-q18",
    prompt: "If (a \u2212 b)\u00b2 = 25 and ab = 6, find a\u00b2 + b\u00b2.",
    options: [
      { id: "a", text: "37" },
      { id: "b", text: "13" },
      { id: "c", text: "31" },
      { id: "d", text: "19" }
    ],
    answerId: "a",
    explanation: "(a \u2212 b)\u00b2 = a\u00b2 \u2212 2ab + b\u00b2 = 25, so a\u00b2 + b\u00b2 = 25 + 12 = 37.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-b-q19",
    prompt: "Expand: (x + y + 1)(x + y \u2212 1)",
    options: [
      { id: "a", text: "(x + y)\u00b2 \u2212 1" },
      { id: "b", text: "(x + y)\u00b2 + 1" },
      { id: "c", text: "x\u00b2 + y\u00b2 \u2212 1" },
      { id: "d", text: "x\u00b2 + y\u00b2 + 1" }
    ],
    answerId: "a",
    explanation: "Let z = x + y; then (z + 1)(z \u2212 1) = z\u00b2 \u2212 1 = (x + y)\u00b2 \u2212 1.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-b-q20",
    prompt: "Find 98\u00b2 using (100 \u2212 2)\u00b2.",
    options: [
      { id: "a", text: "9604" },
      { id: "b", text: "9804" },
      { id: "c", text: "9404" },
      { id: "d", text: "10004" }
    ],
    answerId: "a",
    explanation: "(100 \u2212 2)\u00b2 = 10000 \u2212 400 + 4 = 9604.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-b-q21",
    prompt: "Simplify: (2x + 3y)\u00b2 \u2212 (2x \u2212 3y)\u00b2",
    options: [
      { id: "a", text: "24xy" },
      { id: "b", text: "12xy" },
      { id: "c", text: "8x\u00b2 + 18y\u00b2" },
      { id: "d", text: "0" }
    ],
    answerId: "a",
    explanation: "Difference of squares of those expressions: 2\u00b7(2x)\u00b7(3y)\u00b72 = 24xy.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-b-q22",
    prompt: "The expression (x + 1/x)\u00b2 \u2212 2 equals\u2026",
    options: [
      { id: "a", text: "x\u00b2 + 1/x\u00b2" },
      { id: "b", text: "x\u00b2 \u2212 1/x\u00b2" },
      { id: "c", text: "2" },
      { id: "d", text: "x + 1/x" }
    ],
    answerId: "a",
    explanation: "(x + 1/x)\u00b2 = x\u00b2 + 2 + 1/x\u00b2, so subtract 2 to get x\u00b2 + 1/x\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-b-q23",
    prompt: "Expand and simplify: (x \u2212 3)(x + 3) \u2212 (x \u2212 1)\u00b2",
    options: [
      { id: "a", text: "2x \u2212 10" },
      { id: "b", text: "\u22122x \u2212 10" },
      { id: "c", text: "2x + 10" },
      { id: "d", text: "x\u00b2 \u2212 10" }
    ],
    answerId: "a",
    explanation: "(x\u00b2 \u2212 9) \u2212 (x\u00b2 \u2212 2x + 1) = \u22129 + 2x \u2212 1 = 2x \u2212 10.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g8-maths-algebra-b-q24",
    prompt: "What must be added to x\u00b2 + 6x to make a perfect square?",
    options: [
      { id: "a", text: "9" },
      { id: "b", text: "6" },
      { id: "c", text: "36" },
      { id: "d", text: "3" }
    ],
    answerId: "a",
    explanation: "x\u00b2 + 6x + 9 = (x + 3)\u00b2, so add 9.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud835\udc4e\u00b2",
    title: "Algebraic expressions",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "balance",
    speak: "Expressions are built from terms. Identities give fast expansions and factors.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "balance",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Terms", reveal: "Chunks joined by + or \u2212", emoji: "\ud83d\udd22" },
      { label: "Like terms", reveal: "Same variables and powers", emoji: "\ud83d\udd17" },
      { label: "Products", reveal: "Distribute, then combine", emoji: "\u2716\ufe0f" },
      { label: "Identities", reveal: "(a\u00b1b)\u00b2 and a\u00b2\u2212b\u00b2", emoji: "\u2728" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "(x + 2)(x + 3) = ?",
    options: [
        { id: "a", text: "x\u00b2 + 5x + 6" },
        { id: "b", text: "x\u00b2 + 6" },
        { id: "c", text: "x\u00b2 + 5" },
        { id: "d", text: "2x + 5" }
    ],
    answerId: "a",
    why: "FOIL gives x\u00b2 + 3x + 2x + 6 = x\u00b2 + 5x + 6.",
    visual: "balance",
    speak: "(x + 2)(x + 3) = ?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Count terms", "Combine like terms", "Use identities", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g8MathsAlgebra: ChapterDef = {
  id: "algebraic-expressions",
  title: "Algebraic Expressions & Identities",
  emoji: "\ud835\udc4e\u00b2",
  blurb: "Terms, products and identities",
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
  paperTopics: ["linear-lite", "fractions"],
};

export const g8MathsAlgebraQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
