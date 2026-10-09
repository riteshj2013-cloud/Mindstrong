import type { ChapterDef, PrepQuestion } from "../types";

/** Polynomials - authored olympiad-style content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g9-maths-poly-a-q01",
    prompt: "The degree of the polynomial 5x³ − 2x + 7 is…",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "3" },
      { id: "c", text: "2" },
      { id: "d", text: "7" }
    ],
    answerId: "b",
    explanation: "The highest power of x with a non-zero coefficient is 3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-a-q02",
    prompt: "A linear polynomial has degree…",
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "1" },
      { id: "c", text: "2" },
      { id: "d", text: "3" }
    ],
    answerId: "b",
    explanation: "By definition, linear polynomials are degree 1.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-a-q03",
    prompt: "The zero of the polynomial p(x) = 2x − 6 is…",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "3" },
      { id: "c", text: "−3" },
      { id: "d", text: "2" }
    ],
    answerId: "b",
    explanation: "2x − 6 = 0 → x = 3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-a-q04",
    prompt: "Which is a quadratic polynomial?",
    options: [
      { id: "a", text: "x³ + 1" },
      { id: "b", text: "5x − 2" },
      { id: "c", text: "x² − 4x + 3" },
      { id: "d", text: "7" }
    ],
    answerId: "c",
    explanation: "Degree 2 makes it quadratic.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-a-q05",
    prompt: "If p(x) = x² − 5x + 6, then p(2) equals…",
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "2" },
      { id: "c", text: "6" },
      { id: "d", text: "−4" }
    ],
    answerId: "a",
    explanation: "4 − 10 + 6 = 0, so x = 2 is a zero.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-a-q06",
    prompt: "By the remainder theorem, the remainder when p(x) is divided by (x − a) is…",
    options: [
      { id: "a", text: "p(0)" },
      { id: "b", text: "p(a)" },
      { id: "c", text: "p(−a)" },
      { id: "d", text: "a" }
    ],
    answerId: "b",
    explanation: "Remainder theorem: remainder is p(a).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-a-q07",
    prompt: "If (x − 1) is a factor of p(x), then…",
    options: [
      { id: "a", text: "p(0) = 1" },
      { id: "b", text: "p(1) = 0" },
      { id: "c", text: "p(−1) = 0" },
      { id: "d", text: "p(1) = 1" }
    ],
    answerId: "b",
    explanation: "Factor theorem: (x − a) is a factor iff p(a) = 0. Here a = 1.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-a-q08",
    prompt: "The constant polynomial 9 has degree…",
    options: [
      { id: "a", text: "9" },
      { id: "b", text: "1" },
      { id: "c", text: "0" },
      { id: "d", text: "undefined" }
    ],
    answerId: "c",
    explanation: "Non-zero constants are degree 0. (The zero polynomial’s degree is left undefined.)",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-a-q09",
    prompt: "Factorise: x² − 9",
    options: [
      { id: "a", text: "(x − 3)(x + 3)" },
      { id: "b", text: "(x − 9)(x + 1)" },
      { id: "c", text: "(x − 3)²" },
      { id: "d", text: "x(x − 9)" }
    ],
    answerId: "a",
    explanation: "Difference of squares: x² − 3² = (x − 3)(x + 3).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-a-q10",
    prompt: "The number of zeros of a non-zero polynomial of degree n is at most…",
    options: [
      { id: "a", text: "n − 1" },
      { id: "b", text: "n" },
      { id: "c", text: "n + 1" },
      { id: "d", text: "2n" }
    ],
    answerId: "b",
    explanation: "A degree-n polynomial has at most n zeros (unless identically zero).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-a-q11",
    prompt: "Expand (x + 2)(x + 5).",
    options: [
      { id: "a", text: "x² + 7x + 10" },
      { id: "b", text: "x² + 10x + 7" },
      { id: "c", text: "x² + 3x + 10" },
      { id: "d", text: "x² + 7x + 7" }
    ],
    answerId: "a",
    explanation: "x² + 5x + 2x + 10 = x² + 7x + 10.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-a-q12",
    prompt: "If p(x) = x³ − 1, then p(1) equals…",
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "1" },
      { id: "c", text: "−1" },
      { id: "d", text: "2" }
    ],
    answerId: "a",
    explanation: "1 − 1 = 0, so (x − 1) is a factor of x³ − 1.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-a-q13",
    prompt: "Which identity is correct?",
    options: [
      { id: "a", text: "(a + b)² = a² + b²" },
      { id: "b", text: "(a + b)² = a² + 2ab + b²" },
      { id: "c", text: "(a − b)² = a² − b²" },
      { id: "d", text: "(a + b)(a − b) = a² + b²" }
    ],
    answerId: "b",
    explanation: "(a + b)² expands to a² + 2ab + b².",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-a-q14",
    prompt: "The coefficient of x in 3x³ − 4x² + 5x − 6 is…",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "−4" },
      { id: "c", text: "5" },
      { id: "d", text: "−6" }
    ],
    answerId: "c",
    explanation: "The term 5x has coefficient 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-a-q15",
    prompt: "Divide x² + 5x + 6 by (x + 2). The quotient is…",
    options: [
      { id: "a", text: "x + 3" },
      { id: "b", text: "x + 2" },
      { id: "c", text: "x + 5" },
      { id: "d", text: "x − 3" }
    ],
    answerId: "a",
    explanation: "(x + 2)(x + 3) = x² + 5x + 6.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-a-q16",
    prompt: "A cubic polynomial has degree…",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "3" },
      { id: "c", text: "4" },
      { id: "d", text: "1" }
    ],
    answerId: "b",
    explanation: "Cubic means degree 3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-a-q17",
    prompt: "If α and β are zeros of x² − 5x + 6, then α + β equals…",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "5" },
      { id: "c", text: "−5" },
      { id: "d", text: "1" }
    ],
    answerId: "b",
    explanation: "For x² − (sum)x + product, sum of zeros = 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-a-q18",
    prompt: "p(x) = 2x² − 3x + 1. Then p(1) equals…",
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "1" },
      { id: "c", text: "2" },
      { id: "d", text: "−1" }
    ],
    answerId: "a",
    explanation: "2 − 3 + 1 = 0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-a-q19",
    prompt: "Which is a monomial?",
    options: [
      { id: "a", text: "x + 1" },
      { id: "b", text: "3x²y" },
      { id: "c", text: "x² − y²" },
      { id: "d", text: "2x + 3y + 1" }
    ],
    answerId: "b",
    explanation: "A monomial is a single term; 3x²y is one term.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-a-q20",
    prompt: "Factorise: x² + 5x + 6",
    options: [
      { id: "a", text: "(x + 2)(x + 3)" },
      { id: "b", text: "(x + 1)(x + 6)" },
      { id: "c", text: "(x − 2)(x − 3)" },
      { id: "d", text: "(x + 5)(x + 1)" }
    ],
    answerId: "a",
    explanation: "Need two numbers that multiply to 6 and add to 5: 2 and 3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-a-q21",
    prompt: "The remainder when x³ + 3x + 1 is divided by (x − 1) is…",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "1" },
      { id: "c", text: "3" },
      { id: "d", text: "0" }
    ],
    answerId: "a",
    explanation: "p(1) = 1 + 3 + 1 = 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-a-q22",
    prompt: "(x + y)² − (x − y)² equals…",
    options: [
      { id: "a", text: "4xy" },
      { id: "b", text: "2xy" },
      { id: "c", text: "x² − y²" },
      { id: "d", text: "0" }
    ],
    answerId: "a",
    explanation: "Expand: (x²+2xy+y²) − (x²−2xy+y²) = 4xy.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-a-q23",
    prompt: "If (x − 2) is a factor of x² − kx + 8 and k is a constant, then k equals…",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "4" },
      { id: "c", text: "6" },
      { id: "d", text: "8" }
    ],
    answerId: "c",
    explanation: "p(2)=0 → 4 − 2k + 8 = 0 → 12 = 2k → k = 6.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-a-q24",
    prompt: "The zeros of x² − 4 are…",
    options: [
      { id: "a", text: "2 only" },
      { id: "b", text: "−2 only" },
      { id: "c", text: "2 and −2" },
      { id: "d", text: "4 and −4" }
    ],
    answerId: "c",
    explanation: "x² − 4 = (x − 2)(x + 2) = 0 → x = ±2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g9-maths-poly-b-q01",
    prompt: "Which polynomial is of degree 4?",
    options: [
      { id: "a", text: "x³ + x⁴ − 1" },
      { id: "b", text: "4x + 1" },
      { id: "c", text: "x² + 4" },
      { id: "d", text: "4" }
    ],
    answerId: "a",
    explanation: "The x⁴ term makes the degree 4.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-b-q02",
    prompt: "A quadratic polynomial can have at most how many zeros?",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "2" },
      { id: "c", text: "3" },
      { id: "d", text: "4" }
    ],
    answerId: "b",
    explanation: "Degree 2 ⇒ at most 2 zeros.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-b-q03",
    prompt: "p(x) = x² − 3x − 4. A zero of p is…",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "−1" },
      { id: "c", text: "both A and B" },
      { id: "d", text: "3" }
    ],
    answerId: "c",
    explanation: "(x − 4)(x + 1) = x² − 3x − 4, so zeros are 4 and −1.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-b-q04",
    prompt: "The value of (a + b + c)² − (a² + b² + c²) equals…",
    options: [
      { id: "a", text: "ab + bc + ca" },
      { id: "b", text: "2abc" },
      { id: "c", text: "0" },
      { id: "d", text: "2(ab + bc + ca)" }
    ],
    answerId: "d",
    explanation: "Expand (a+b+c)² = a²+b²+c² + 2(ab+bc+ca).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-b-q05",
    prompt: "If p(x) = x³ − 6x² + 11x − 6 and p(1)=0, which is a factor?",
    options: [
      { id: "a", text: "x − 1" },
      { id: "b", text: "x − 6" },
      { id: "c", text: "x + 6" },
      { id: "d", text: "x + 1" }
    ],
    answerId: "a",
    explanation: "p(1)=0 ⇒ (x − 1) is a factor by the factor theorem.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-b-q06",
    prompt: "Expand (2x − 3)².",
    options: [
      { id: "a", text: "4x² − 6x + 9" },
      { id: "b", text: "4x² − 12x + 9" },
      { id: "c", text: "4x² − 9" },
      { id: "d", text: "4x² + 12x + 9" }
    ],
    answerId: "b",
    explanation: "(2x)² − 2·2x·3 + 3² = 4x² − 12x + 9.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-b-q07",
    prompt: "The coefficient of x² in (x + 1)(x + 2)(x + 3) is…",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "9" },
      { id: "c", text: "6" },
      { id: "d", text: "11" }
    ],
    answerId: "c",
    explanation: "First (x+1)(x+2)=x²+3x+2; times (x+3): x³+3x² + 3x²+9x + 2x+6 = x³+6x²+11x+6. Coefficient of x² is 6.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-b-q08",
    prompt: "Remainder when 2x³ − 3x² + x − 1 is divided by (x − 2) is…",
    options: [
      { id: "a", text: "9" },
      { id: "b", text: "1" },
      { id: "c", text: "0" },
      { id: "d", text: "5" }
    ],
    answerId: "d",
    explanation: "p(2) = 2·8 − 3·4 + 2 − 1 = 16 − 12 + 2 − 1 = 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-b-q09",
    prompt: "Which is a binomial?",
    options: [
      { id: "a", text: "x² + 3x" },
      { id: "b", text: "x² + 3x + 2" },
      { id: "c", text: "0" },
      { id: "d", text: "5x" }
    ],
    answerId: "a",
    explanation: "A binomial has exactly two terms.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-b-q10",
    prompt: "Factorise: 4x² − 12x + 9",
    options: [
      { id: "a", text: "(2x − 9)(2x − 1)" },
      { id: "b", text: "(2x − 3)²" },
      { id: "c", text: "(2x + 3)²" },
      { id: "d", text: "(4x − 3)(x − 3)" }
    ],
    answerId: "b",
    explanation: "It is a perfect square: (2x − 3)².",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-b-q11",
    prompt: "If α, β are zeros of x² − 7x + 10, then αβ equals…",
    options: [
      { id: "a", text: "−7" },
      { id: "b", text: "7" },
      { id: "c", text: "10" },
      { id: "d", text: "−10" }
    ],
    answerId: "c",
    explanation: "Product of zeros = constant/leading = 10.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-b-q12",
    prompt: "(x + 4)(x − 4) equals…",
    options: [
      { id: "a", text: "x² + 16" },
      { id: "b", text: "x² − 8x + 16" },
      { id: "c", text: "x² + 8x − 16" },
      { id: "d", text: "x² − 16" }
    ],
    answerId: "d",
    explanation: "Difference of squares: x² − 16.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-b-q13",
    prompt: "p(x)=x²+1. How many real zeros does it have?",
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "1" },
      { id: "c", text: "2" },
      { id: "d", text: "infinitely many" }
    ],
    answerId: "a",
    explanation: "x² + 1 = 0 ⇒ x² = −1, no real solution.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-b-q14",
    prompt: "The zero of ax + b (a ≠ 0) is…",
    options: [
      { id: "a", text: "b/a" },
      { id: "b", text: "−b/a" },
      { id: "c", text: "a/b" },
      { id: "d", text: "−a/b" }
    ],
    answerId: "b",
    explanation: "ax + b = 0 ⇒ x = −b/a.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-b-q15",
    prompt: "Which is NOT a polynomial in x?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "x² + √2 x + 1" },
      { id: "c", text: "x + 1/x" },
      { id: "d", text: "√3 x³ − 4" }
    ],
    answerId: "c",
    explanation: "1/x = x⁻¹ is not a non-negative integer power, so not a polynomial.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-b-q16",
    prompt: "If p(x)=x³−3x+2 and (x−1) is a factor, the other factor quadratic starts with…",
    options: [
      { id: "a", text: "x³" },
      { id: "b", text: "3x" },
      { id: "c", text: "constant only" },
      { id: "d", text: "x²" }
    ],
    answerId: "d",
    explanation: "Dividing a cubic by a linear factor leaves a quadratic (leading x²).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-b-q17",
    prompt: "Expand (x − 1)(x² + x + 1).",
    options: [
      { id: "a", text: "x³ − 1" },
      { id: "b", text: "x³ + 1" },
      { id: "c", text: "x³ − x² + x − 1" },
      { id: "d", text: "x³ + x² + x − 1" }
    ],
    answerId: "a",
    explanation: "This is the standard factorisation of x³ − 1.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-b-q18",
    prompt: "The graph of y = x² − 1 crosses the x-axis at…",
    options: [
      { id: "a", text: "(0, −1) only" },
      { id: "b", text: "(1, 0) and (−1, 0)" },
      { id: "c", text: "(1, 0) only" },
      { id: "d", text: "nowhere" }
    ],
    answerId: "b",
    explanation: "Zeros are x = ±1, so intercepts (1,0) and (−1,0).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-b-q19",
    prompt: "For p(x)=2x²+5x−3, p(−3) equals…",
    options: [
      { id: "a", text: "−6" },
      { id: "b", text: "18" },
      { id: "c", text: "0" },
      { id: "d", text: "6" }
    ],
    answerId: "c",
    explanation: "2·9 + 5·(−3) − 3 = 18 − 15 − 3 = 0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-b-q20",
    prompt: "(3x + 2)(x − 1) equals…",
    options: [
      { id: "a", text: "3x² + 2x − 2" },
      { id: "b", text: "3x² − 3x − 2" },
      { id: "c", text: "3x² − x + 2" },
      { id: "d", text: "3x² − x − 2" }
    ],
    answerId: "d",
    explanation: "3x·x + 3x·(−1) + 2·x + 2·(−1) = 3x² − 3x + 2x − 2 = 3x² − x − 2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-b-q21",
    prompt: "If the remainder is 0 when p(x) is divided by (x + 3), then…",
    options: [
      { id: "a", text: "p(−3)=0" },
      { id: "b", text: "p(0)=−3" },
      { id: "c", text: "p(3)=−3" },
      { id: "d", text: "p(3)=0" }
    ],
    answerId: "a",
    explanation: "x + 3 = x − (−3), so evaluate at −3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-b-q22",
    prompt: "Factorise: x² − 2x − 15",
    options: [
      { id: "a", text: "(x + 5)(x + 3)" },
      { id: "b", text: "(x − 5)(x + 3)" },
      { id: "c", text: "(x − 3)(x + 5)" },
      { id: "d", text: "(x − 15)(x + 1)" }
    ],
    answerId: "b",
    explanation: "Numbers that multiply to −15 and add to −2: −5 and 3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-b-q23",
    prompt: "The leading coefficient of −7x⁵ + 3x² − 1 is…",
    options: [
      { id: "a", text: "−1" },
      { id: "b", text: "5" },
      { id: "c", text: "−7" },
      { id: "d", text: "3" }
    ],
    answerId: "c",
    explanation: "Leading coefficient belongs to the highest-degree term: −7.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-poly-b-q24",
    prompt: "Which identity helps expand (x + 2)³?",
    options: [
      { id: "a", text: "(a+b)² = a² + b²" },
      { id: "b", text: "a³ − b³ = (a−b)³" },
      { id: "c", text: "(a+b)(a−b)=a²−b² only" },
      { id: "d", text: "(a+b)³ = a³ + 3a²b + 3ab² + b³" }
    ],
    answerId: "d",
    explanation: "The cube identity expands (a+b)³ fully.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "𝑥",
    title: "Polynomials",
    body: ["Polynomials are built from powers of x with constant coefficients.", "Zeros, factors and remainders are three views of the same idea.", "Lesson is optional; jump to a set anytime."],
    cta: "Let's go!",
    visual: "balance",
    speak: "Polynomials, zeros, and the factor and remainder theorems.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "balance",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Degree", reveal: "Highest power with a non-zero coefficient", emoji: "📶" },
      { label: "Zero", reveal: "Input that makes p(x) = 0", emoji: "🎯" },
      { label: "Remainder theorem", reveal: "Divide by (x−a) → remainder p(a)", emoji: "➗" },
      { label: "Factor theorem", reveal: "(x−a) is a factor iff p(a)=0", emoji: "🧩" }
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: "Factor x² − 5x + 6",
    visual: "balance",
    speak: "Find numbers that multiply to 6 and add to 5: 2 and 3.",
    steps: ["Need factors of 6 that add to 5", "2 and 3 work", "(x−2)(x−3)=x²−5x+6", "Zeros at 2 and 3"],
    punchline: "Factors reveal the zeros.",
  },
  {
    id: "t1",
    type: "try",
    title: "Your turn",
    prompt: "Degree of 4x³ − x + 1?",
    options: [
        { id: "a", text: "4" },
        { id: "b", text: "3" },
        { id: "c", text: "1" },
        { id: "d", text: "0" }
    ],
    answerId: "b",
    why: "Highest power is 3.",
    visual: "balance",
    speak: "Degree of 4x³ − x + 1?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Polynomial pro!",
    bullets: ["Degree first", "p(a)=0 ↔ factor", "Expand and factor both ways", "Set A and Set B ready — 24 MCQs each"],
    cta: "Back to chapter",
    speak: "Polynomial pro! You are ready for the practice sets.",
  },
];

export const g9MathsPolynomials: ChapterDef = {
  id: "polynomials",
  title: "Polynomials",
  emoji: "𝑥",
  blurb: "Degree, zeros, factor & remainder",
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

export const g9MathsPolynomialsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
