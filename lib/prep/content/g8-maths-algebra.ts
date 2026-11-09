import type { ChapterDef, PrepQuestion } from "../types";

/** Algebraic Expressions & Identities - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g8-maths-algebra-a-q01",
    prompt: "Which of these is a monomial?",
    options: [
      { id: "a", text: "5xy" },
      { id: "b", text: "2x + 3" },
      { id: "c", text: "x + y + z" },
      { id: "d", text: "a\u00b2 \u2212 b\u00b2" }
    ],
    answerId: "a",
    explanation: "A monomial is a single term; 5xy has one term, while the others have two or more. 2x + 3 is tempting if you stop one step early or reverse a step, but the correct result is 5xy.",
    hints: ["A monomial has exactly one term. Count the terms in each expression, split by + and − signs."]
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
    explanation: "The terms are 3x², −5xy and 7, so there are three terms. 2 is tempting if you stop one step early or reverse a step, but the correct result is 3.",
    hints: ["Terms are separated by + and − signs. Count the pieces of the expression, including the constant."]
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
    explanation: "The coefficient is the numerical factor multiplying x², which is 4. 1 is tempting if you stop one step early or reverse a step, but the correct result is 4.",
    hints: ["The coefficient is the number multiplying x². Find the x² term and read its number."]
  },
  {
    id: "g8-maths-algebra-a-q04",
    prompt: "Add: (2x + 3) + (5x \u2212 1)",
    options: [
      { id: "a", text: "7x + 4" },
      { id: "b", text: "3x + 2" },
      { id: "c", text: "7x \u2212 2" },
      { id: "d", text: "7x + 2" }
    ],
    answerId: "d",
    explanation: "Like terms: 2x + 5x = 7x and 3 + (−1) = 2, so the sum is 7x + 2. 7x + 4 is tempting if you stop one step early or reverse a step, but the correct result is 7x + 2.",
    hints: ["Add like terms: 2x with 5x, and 3 with −1."]
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
    explanation: "Distribute the minus: 5x − 2 − 3x − 4 = 2x − 6. 2x + 2 is tempting if you stop one step early or reverse a step, but the correct result is 2x − 6.",
    hints: ["The minus before the bracket changes both signs in (3x + 4). Then combine like terms."]
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
    explanation: "Multiply coefficients and variables: 3 × 4 = 12 and x × y = xy. 7xy is tempting if you add exponents when you should multiply (or the other way round); the correct value is 12xy.",
    hints: ["Multiply the numbers 3 and 4, then multiply the letters x and y."]
  },
  {
    id: "g8-maths-algebra-a-q07",
    prompt: "What is (x + 2)(x + 3)?",
    options: [
      { id: "a", text: "x\u00b2 + 6" },
      { id: "b", text: "x\u00b2 + 5" },
      { id: "c", text: "x\u00b2 + 5x + 6" },
      { id: "d", text: "2x + 5" }
    ],
    answerId: "c",
    explanation: "FOIL: x² + 3x + 2x + 6 = x² + 5x + 6. x² + 6 is tempting if you stop one step early or reverse a step, but the correct result is x² + 5x + 6.",
    hints: ["Multiply each term of (x + 2) by each term of (x + 3), then add the two x terms."]
  },
  {
    id: "g8-maths-algebra-a-q08",
    prompt: "Expand: 2(x \u2212 4)",
    options: [
      { id: "a", text: "2x \u2212 4" },
      { id: "b", text: "x \u2212 8" },
      { id: "c", text: "2x + 8" },
      { id: "d", text: "2x \u2212 8" }
    ],
    answerId: "d",
    explanation: "Distribute: 2 × x − 2 × 4 = 2x − 8. 2x − 4 is tempting if you stop one step early or reverse a step, but the correct result is 2x − 8.",
    hints: ["Multiply 2 by both x and −4 inside the bracket."]
  },
  {
    id: "g8-maths-algebra-a-q09",
    prompt: "Which identity is (a + b)\u00b2?",
    options: [
      { id: "a", text: "a\u00b2 + 2ab + b\u00b2" },
      { id: "b", text: "a\u00b2 + b\u00b2" },
      { id: "c", text: "a\u00b2 \u2212 2ab + b\u00b2" },
      { id: "d", text: "a\u00b2 \u2212 b\u00b2" }
    ],
    answerId: "a",
    explanation: "The square of a sum is a² + 2ab + b². a² + b² is tempting if you stop one step early or reverse a step, but the correct result is a² + 2ab + b².",
    hints: ["Write (a + b)² as (a + b)(a + b) and multiply every term by every term."]
  },
  {
    id: "g8-maths-algebra-a-q10",
    prompt: "(a \u2212 b)\u00b2 equals\u2026",
    options: [
      { id: "a", text: "a\u00b2 \u2212 b\u00b2" },
      { id: "b", text: "a\u00b2 \u2212 2ab + b\u00b2" },
      { id: "c", text: "a\u00b2 + 2ab + b\u00b2" },
      { id: "d", text: "a\u00b2 + b\u00b2" }
    ],
    answerId: "b",
    explanation: "The square of a difference is a² − 2ab + b². a² − b² is tempting if you stop one step early or reverse a step, but the correct result is a² − 2ab + b².",
    hints: ["Write (a − b)² as (a − b)(a − b) and multiply every term, watching the signs of the middle terms."]
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
    explanation: "Difference of squares: a² − b² = (a + b)(a − b). (a − b)² is tempting if you stop one step early or reverse a step, but the correct result is (a + b)(a − b).",
    hints: ["Multiply out each possible factorisation and see which gives back a² − b² with no ab term."]
  },
  {
    id: "g8-maths-algebra-a-q12",
    prompt: "Evaluate (x + 3)\u00b2 when x = 2.",
    options: [
      { id: "a", text: "13" },
      { id: "b", text: "10" },
      { id: "c", text: "7" },
      { id: "d", text: "25" }
    ],
    answerId: "d",
    explanation: "(2 + 3)² = 5² = 25. 13 is tempting if you stop one step early or reverse a step, but the correct result is 25.",
    hints: ["Put x = 2 into the bracket first, then square the result."]
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
    explanation: "4/2 = 2, x²/x = x, y/y = 1, so the quotient is 2x. 2xy is tempting if you add exponents when you should multiply (or the other way round); the correct value is 2x.",
    hints: ["Divide the numbers 4 ÷ 2, then cancel powers: x² ÷ x and y ÷ y."]
  },
  {
    id: "g8-maths-algebra-a-q14",
    prompt: "Expand: (2x + 1)(x \u2212 3)",
    options: [
      { id: "a", text: "2x\u00b2 \u2212 6x \u2212 3" },
      { id: "b", text: "2x\u00b2 \u2212 5x \u2212 3" },
      { id: "c", text: "2x\u00b2 \u2212 5x + 3" },
      { id: "d", text: "2x\u00b2 + 5x \u2212 3" }
    ],
    answerId: "b",
    explanation: "2x·x + 2x·(−3) + 1·x + 1·(−3) = 2x² − 6x + x − 3 = 2x² − 5x − 3. 2x² − 6x − 3 is tempting if you stop one step early or reverse a step, but the correct result is 2x² − 5x − 3.",
    hints: ["Multiply each term of (2x + 1) by each term of (x − 3), then combine the two x terms."]
  },
  {
    id: "g8-maths-algebra-a-q15",
    prompt: "What is the constant term in 5x\u00b3 \u2212 2x\u00b2 + 7x \u2212 9?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "\u22122" },
      { id: "c", text: "\u22129" },
      { id: "d", text: "7" }
    ],
    answerId: "c",
    explanation: "The constant term has no variable factor; here it is −9. −2 is tempting if you stop one step early or reverse a step, but the correct result is −9.",
    hints: ["The constant term has no variable. Look for the term in the polynomial without any x."]
  },
  {
    id: "g8-maths-algebra-a-q16",
    prompt: "Expand using identity: (3x + 2)\u00b2",
    options: [
      { id: "a", text: "9x\u00b2 + 4" },
      { id: "b", text: "9x\u00b2 + 6x + 4" },
      { id: "c", text: "6x\u00b2 + 12x + 4" },
      { id: "d", text: "9x\u00b2 + 12x + 4" }
    ],
    answerId: "d",
    explanation: "(3x)² + 2·3x·2 + 2² = 9x² + 12x + 4. 9x² + 4 is tempting if you stop one step early or reverse a step, but the correct result is 9x² + 12x + 4.",
    hints: ["Use (a + b)² = a² + 2ab + b² with a = 3x and b = 2."]
  },
  {
    id: "g8-maths-algebra-a-q17",
    prompt: "Expand: (5y \u2212 3)\u00b2",
    options: [
      { id: "a", text: "25y\u00b2 \u2212 30y + 9" },
      { id: "b", text: "25y\u00b2 \u2212 9" },
      { id: "c", text: "25y\u00b2 \u2212 15y + 9" },
      { id: "d", text: "25y\u00b2 + 30y + 9" }
    ],
    answerId: "a",
    explanation: "(5y)² − 2·5y·3 + 3² = 25y² − 30y + 9. 25y² − 9 is tempting if you stop one step early or reverse a step, but the correct result is 25y² − 30y + 9.",
    hints: ["Use (a − b)² = a² − 2ab + b² with a = 5y and b = 3."]
  },
  {
    id: "g8-maths-algebra-a-q18",
    prompt: "Factor: x\u00b2 \u2212 16",
    options: [
      { id: "a", text: "(x \u2212 4)\u00b2" },
      { id: "b", text: "(x + 4)(x \u2212 4)" },
      { id: "c", text: "(x + 4)\u00b2" },
      { id: "d", text: "x(x \u2212 16)" }
    ],
    answerId: "b",
    explanation: "x² − 16 = x² − 4² = (x + 4)(x − 4). (x − 4)² is tempting if you stop one step early or reverse a step, but the correct result is (x + 4)(x − 4).",
    hints: ["16 is a perfect square. Use a² − b² = (a + b)(a − b)."]
  },
  {
    id: "g8-maths-algebra-a-q19",
    prompt: "If (a + b)\u00b2 = 49 and ab = 10, find a\u00b2 + b\u00b2.",
    options: [
      { id: "a", text: "39" },
      { id: "b", text: "59" },
      { id: "c", text: "29" },
      { id: "d", text: "9" }
    ],
    answerId: "c",
    explanation: "(a + b)² = a² + 2ab + b² = 49, so a² + b² = 49 − 2·10 = 29. 39 is tempting if you stop one step early or reverse a step, but the correct result is 29.",
    hints: ["Expand (a + b)² = a² + 2ab + b². Replace (a + b)² with 49 and ab with 10."]
  },
  {
    id: "g8-maths-algebra-a-q20",
    prompt: "Simplify: (x + y)\u00b2 \u2212 (x \u2212 y)\u00b2",
    options: [
      { id: "a", text: "2x\u00b2 + 2y\u00b2" },
      { id: "b", text: "0" },
      { id: "c", text: "2xy" },
      { id: "d", text: "4xy" }
    ],
    answerId: "d",
    explanation: "Expand: (x² + 2xy + y²) − (x² − 2xy + y²) = 4xy. 2x² + 2y² is tempting if you add exponents when you should multiply (or the other way round); the correct value is 4xy.",
    hints: ["Expand both squares, then subtract; the x² and y² terms cancel."]
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
    explanation: "(x + 2)(x − 2) = x² − 4, then (x² − 4)(x² + 4) = x⁴ − 16. x⁴ + 16 is tempting if you stop one step early or reverse a step, but the correct result is x⁴ − 16.",
    hints: ["First multiply (x + 2)(x − 2) using a² − b², then multiply the result by (x² + 4)."]
  },
  {
    id: "g8-maths-algebra-a-q22",
    prompt: "The product (2a \u2212 3b)(2a + 3b) equals\u2026",
    options: [
      { id: "a", text: "4a\u00b2 + 9b\u00b2" },
      { id: "b", text: "4a\u00b2 \u2212 9b\u00b2" },
      { id: "c", text: "4a\u00b2 \u2212 6ab \u2212 9b\u00b2" },
      { id: "d", text: "4a\u00b2 \u2212 12ab + 9b\u00b2" }
    ],
    answerId: "b",
    explanation: "Difference of squares: (2a)² − (3b)² = 4a² − 9b². 4a² + 9b² is tempting if you stop one step early or reverse a step, but the correct result is 4a² − 9b².",
    hints: ["This matches (x − y)(x + y) = x² − y² with x = 2a and y = 3b."]
  },
  {
    id: "g8-maths-algebra-a-q23",
    prompt: "Find the value of 102\u00b2 using an identity.",
    options: [
      { id: "a", text: "10000" },
      { id: "b", text: "10400" },
      { id: "c", text: "10404" },
      { id: "d", text: "10204" }
    ],
    answerId: "c",
    explanation: "102² = (100 + 2)² = 10000 + 400 + 4 = 10404. 10400 is tempting if you stop one step early or reverse a step, but the correct result is 10404.",
    hints: ["Write 102 as 100 + 2 and use (a + b)² = a² + 2ab + b²."]
  },
  {
    id: "g8-maths-algebra-a-q24",
    prompt: "Simplify: 3(x \u2212 2) \u2212 2(x + 5) + 4",
    options: [
      { id: "a", text: "x + 2" },
      { id: "b", text: "5x \u2212 12" },
      { id: "c", text: "x \u2212 2" },
      { id: "d", text: "x \u2212 12" }
    ],
    answerId: "d",
    explanation: "3x − 6 − 2x − 10 + 4 = x − 12. 5x − 12 is tempting if −2(x + 5) becomes +2x − 10, but it is −2x − 10, giving x − 12.",
    hints: ["Open both brackets: 3 multiplies (x − 2) and −2 multiplies (x + 5). Then collect like terms."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g8-maths-algebra-b-q01",
    prompt: "Which expression is a binomial?",
    options: [
      { id: "a", text: "7" },
      { id: "b", text: "x + 5" },
      { id: "c", text: "3x" },
      { id: "d", text: "x\u00b2 + 2x + 1" }
    ],
    answerId: "b",
    explanation: "A binomial has exactly two terms; x + 5 has two. 7 is tempting if you move a term across the equals sign without changing its sign; solving carefully gives x + 5.",
    hints: ["A binomial has exactly two terms. Count the terms in each expression."]
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
    explanation: "The highest power of x is 3, so the degree is 3. 2 is tempting if you stop one step early or reverse a step, but the correct result is 3.",
    hints: ["The degree is the highest power of x in the polynomial. Look at the power in each term."]
  },
  {
    id: "g8-maths-algebra-b-q03",
    prompt: "What is the coefficient of y in 2x \u2212 5y + 8?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "8" },
      { id: "c", text: "5" },
      { id: "d", text: "\u22125" }
    ],
    answerId: "d",
    explanation: "The term −5y has coefficient −5. 2 is tempting if you stop one step early or reverse a step, but the correct result is −5.",
    hints: ["The coefficient of y is the number in front of y, including its sign."]
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
    explanation: "x² + 2x² = 3x², 3x − 5x = −2x, and +1 remains. 3x² + 8x + 1 is tempting if you stop one step early or reverse a step, but the correct result is 3x² − 2x + 1.",
    hints: ["Group like terms: x² with 2x², and 3x with −5x. Keep the constant +1."]
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
    explanation: "7a − 3 − 2a + 5 = 5a + 2. 5a − 8 is tempting if you stop one step early or reverse a step, but the correct result is 5a + 2.",
    hints: ["The minus before (2a − 5) changes both signs inside. Then combine like terms."]
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
    explanation: "Negative times negative is positive; 3 × 2 = 6 and x × x = x². 6x is tempting if you stop one step early or reverse a step, but the correct result is 6x².",
    hints: ["Negative times negative is positive. Then multiply 3 × 2 and x × x."]
  },
  {
    id: "g8-maths-algebra-b-q07",
    prompt: "Expand: (y \u2212 1)(y + 4)",
    options: [
      { id: "a", text: "y\u00b2 + 5y \u2212 4" },
      { id: "b", text: "y\u00b2 \u2212 3y \u2212 4" },
      { id: "c", text: "y\u00b2 + 3y + 4" },
      { id: "d", text: "y\u00b2 + 3y \u2212 4" }
    ],
    answerId: "d",
    explanation: "y² + 4y − y − 4 = y² + 3y − 4. y² + 5y − 4 is tempting if you stop one step early or reverse a step, but the correct result is y² + 3y − 4.",
    hints: ["Multiply each term of (y − 1) by each term of (y + 4), then add the two y terms."]
  },
  {
    id: "g8-maths-algebra-b-q08",
    prompt: "Expand: \u2212(2x \u2212 5)",
    options: [
      { id: "a", text: "\u22122x + 5" },
      { id: "b", text: "\u22122x \u2212 5" },
      { id: "c", text: "2x \u2212 5" },
      { id: "d", text: "2x + 5" }
    ],
    answerId: "a",
    explanation: "The minus flips both signs: −2x + 5. −2x − 5 is tempting if you stop one step early or reverse a step, but the correct result is −2x + 5.",
    hints: ["The minus sign outside multiplies every term inside (2x − 5) by −1."]
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
    explanation: "This is the difference-of-squares identity. a² + b² is tempting if you stop one step early or reverse a step, but the correct result is a² − b².",
    hints: ["Multiply out (a + b)(a − b) term by term. What happens to the ab and −ab terms?"]
  },
  {
    id: "g8-maths-algebra-b-q10",
    prompt: "Which is equal to (x + 5)\u00b2?",
    options: [
      { id: "a", text: "x\u00b2 + 25" },
      { id: "b", text: "x\u00b2 + 5x + 25" },
      { id: "c", text: "x\u00b2 + 10x + 25" },
      { id: "d", text: "x\u00b2 \u2212 10x + 25" }
    ],
    answerId: "c",
    explanation: "(x + 5)² = x² + 2·x·5 + 25 = x² + 10x + 25. x² + 25 is tempting if you stop one step early or reverse a step, but the correct result is x² + 10x + 25.",
    hints: ["Use (a + b)² = a² + 2ab + b² with a = x and b = 5."]
  },
  {
    id: "g8-maths-algebra-b-q11",
    prompt: "(x \u2212 7)\u00b2 equals\u2026",
    options: [
      { id: "a", text: "x\u00b2 \u2212 49" },
      { id: "b", text: "x\u00b2 + 14x + 49" },
      { id: "c", text: "x\u00b2 \u2212 7x + 49" },
      { id: "d", text: "x\u00b2 \u2212 14x + 49" }
    ],
    answerId: "d",
    explanation: "(x − 7)² = x² − 14x + 49. x² − 49 is tempting if you stop one step early or reverse a step, but the correct result is x² − 14x + 49.",
    hints: ["Use (a − b)² = a² − 2ab + b² with a = x and b = 7."]
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
    explanation: "9² − 4² = (9 + 4)(9 − 4) = 13 × 5 = 65. 5 is tempting if you stop one step early or reverse a step, but the correct result is 65.",
    hints: ["Use a² − b² = (a + b)(a − b) with a = 9 and b = 4."]
  },
  {
    id: "g8-maths-algebra-b-q13",
    prompt: "Divide: 12a\u00b3b\u00b2 \u00f7 3ab",
    options: [
      { id: "a", text: "4a\u00b3b" },
      { id: "b", text: "4a\u00b2b" },
      { id: "c", text: "9a\u00b2b" },
      { id: "d", text: "4ab" }
    ],
    answerId: "b",
    explanation: "12/3 = 4, a³/a = a², b²/b = b. 4a³b is tempting if you add exponents when you should multiply (or the other way round); the correct value is 4a²b.",
    hints: ["Divide 12 by 3, then subtract powers: a³ ÷ a and b² ÷ b."]
  },
  {
    id: "g8-maths-algebra-b-q14",
    prompt: "Expand: (3x \u2212 2)(2x + 5)",
    options: [
      { id: "a", text: "6x\u00b2 + 19x \u2212 10" },
      { id: "b", text: "6x\u00b2 \u2212 11x \u2212 10" },
      { id: "c", text: "6x\u00b2 + 11x \u2212 10" },
      { id: "d", text: "5x\u00b2 + 11x \u2212 10" }
    ],
    answerId: "c",
    explanation: "6x² + 15x − 4x − 10 = 6x² + 11x − 10. 6x² + 19x − 10 is tempting if you stop one step early or reverse a step, but the correct result is 6x² + 11x − 10.",
    hints: ["Multiply each term of (3x − 2) by each term of (2x + 5), then combine the two x terms."]
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
    explanation: "Like terms have the same variables with the same powers; only the x² terms match. 3x² and 5x is tempting if you stop one step early or reverse a step, but the correct result is 3x² and −2x².",
    hints: ["Like terms have the same letter raised to the same power. Compare the power of x in each term."]
  },
  {
    id: "g8-maths-algebra-b-q16",
    prompt: "Expand: (4m \u2212 1)\u00b2",
    options: [
      { id: "a", text: "16m\u00b2 \u2212 1" },
      { id: "b", text: "16m\u00b2 \u2212 4m + 1" },
      { id: "c", text: "8m\u00b2 \u2212 8m + 1" },
      { id: "d", text: "16m\u00b2 \u2212 8m + 1" }
    ],
    answerId: "d",
    explanation: "(4m)² − 2·4m·1 + 1 = 16m² − 8m + 1. 16m² − 1 is tempting if you stop one step early or reverse a step, but the correct result is 16m² − 8m + 1.",
    hints: ["Use (a − b)² = a² − 2ab + b² with a = 4m and b = 1."]
  },
  {
    id: "g8-maths-algebra-b-q17",
    prompt: "Factor: 49 \u2212 p\u00b2",
    options: [
      { id: "a", text: "(7 + p)(7 \u2212 p)" },
      { id: "b", text: "(7 \u2212 p)\u00b2" },
      { id: "c", text: "(49 \u2212 p)(49 + p)" },
      { id: "d", text: "7(7 \u2212 p)" }
    ],
    answerId: "a",
    explanation: "49 − p² = 7² − p² = (7 + p)(7 − p). (7 − p)² is tempting if you stop one step early or reverse a step, but the correct result is (7 + p)(7 − p).",
    hints: ["49 is a perfect square. Use a² − b² = (a + b)(a − b)."]
  },
  {
    id: "g8-maths-algebra-b-q18",
    prompt: "If (a \u2212 b)\u00b2 = 25 and ab = 6, find a\u00b2 + b\u00b2.",
    options: [
      { id: "a", text: "13" },
      { id: "b", text: "37" },
      { id: "c", text: "31" },
      { id: "d", text: "19" }
    ],
    answerId: "b",
    explanation: "(a − b)² = a² − 2ab + b² = 25, so a² + b² = 25 + 12 = 37. 31 is tempting if you stop one step early or reverse a step, but the correct result is 37.",
    hints: ["Expand (a − b)² = a² − 2ab + b². Replace (a − b)² with 25 and ab with 6."]
  },
  {
    id: "g8-maths-algebra-b-q19",
    prompt: "Expand: (x + y + 1)(x + y \u2212 1)",
    options: [
      { id: "a", text: "(x + y)\u00b2 + 1" },
      { id: "b", text: "x\u00b2 + y\u00b2 \u2212 1" },
      { id: "c", text: "(x + y)\u00b2 \u2212 1" },
      { id: "d", text: "x\u00b2 + y\u00b2 + 1" }
    ],
    answerId: "c",
    explanation: "Let z = x + y; then (z + 1)(z − 1) = z² − 1 = (x + y)² − 1. (x + y)² + 1 is tempting if you stop one step early or reverse a step, but the correct result is (x + y)² − 1.",
    hints: ["Treat x + y as one block z. Then the product is (z + 1)(z − 1)."]
  },
  {
    id: "g8-maths-algebra-b-q20",
    prompt: "Find 98\u00b2 using (100 \u2212 2)\u00b2.",
    options: [
      { id: "a", text: "9804" },
      { id: "b", text: "9404" },
      { id: "c", text: "10004" },
      { id: "d", text: "9604" }
    ],
    answerId: "d",
    explanation: "(100 − 2)² = 10000 − 400 + 4 = 9604. 9404 is tempting if you stop one step early or reverse a step, but the correct result is 9604.",
    hints: ["Use (a − b)² = a² − 2ab + b² with a = 100 and b = 2."]
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
    explanation: "Difference of squares of those expressions: 2·(2x)·(3y)·2 = 24xy. 12xy is tempting if you add exponents when you should multiply (or the other way round); the correct value is 24xy.",
    hints: ["Expand both squares, then subtract; the 4x² and 9y² terms cancel."]
  },
  {
    id: "g8-maths-algebra-b-q22",
    prompt: "The expression (x + 1/x)\u00b2 \u2212 2 equals\u2026",
    options: [
      { id: "a", text: "x\u00b2 \u2212 1/x\u00b2" },
      { id: "b", text: "x\u00b2 + 1/x\u00b2" },
      { id: "c", text: "2" },
      { id: "d", text: "x + 1/x" }
    ],
    answerId: "b",
    explanation: "(x + 1/x)² = x² + 2 + 1/x², so subtract 2 to get x² + 1/x². x² − 1/x² is tempting if you stop one step early or reverse a step, but the correct result is x² + 1/x².",
    hints: ["Expand (x + 1/x)² with (a + b)²; the middle term 2·x·(1/x) is a plain number."]
  },
  {
    id: "g8-maths-algebra-b-q23",
    prompt: "Expand and simplify: (x \u2212 3)(x + 3) \u2212 (x \u2212 1)\u00b2",
    options: [
      { id: "a", text: "\u22122x \u2212 10" },
      { id: "b", text: "2x + 10" },
      { id: "c", text: "2x \u2212 10" },
      { id: "d", text: "x\u00b2 \u2212 10" }
    ],
    answerId: "c",
    explanation: "(x² − 9) − (x² − 2x + 1) = −9 + 2x − 1 = 2x − 10. −2x − 10 is tempting if you add exponents when you should multiply (or the other way round); the correct value is 2x − 10.",
    hints: ["Use a² − b² for (x − 3)(x + 3) and (a − b)² for (x − 1)². Subtract the whole second result."]
  },
  {
    id: "g8-maths-algebra-b-q24",
    prompt: "What must be added to x\u00b2 + 6x to make a perfect square?",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "36" },
      { id: "c", text: "3" },
      { id: "d", text: "9" }
    ],
    answerId: "d",
    explanation: "x² + 6x + 9 = (x + 3)², so add 9. 6 is tempting if you stop one step early or reverse a step, but the correct result is 9.",
    hints: ["Compare x² + 6x with (x + a)² = x² + 2ax + a². What must a be?"]
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
