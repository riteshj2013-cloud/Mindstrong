import type { ChapterDef, PrepQuestion } from "../types";

/** Polynomials - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g10-maths-poly-a-q01",
    prompt: "The sum of the zeros of kx\u00b2 + 3x + 2 is \u22121. What is k?",
    options: [
      { id: "a", text: "\u22123" },
      { id: "b", text: "1/3" },
      { id: "c", text: "3" },
      { id: "d", text: "2" }
    ],
    answerId: "c",
    explanation: "Sum of zeros = \u22123/k = \u22121 gives k = 3. \u22123 is tempting if you forget the minus sign in \u2212b/a: \u22123/(\u22123) = 1, not \u22121.",
    hints: ["Sum of zeros = \u2212(coefficient of x)/(coefficient of x\u00b2). Write that in terms of k and set it equal to \u22121."]
  },
  {
    id: "g10-maths-poly-a-q02",
    prompt: "A zero of p(x) = x\u00b2 \u2212 5x + 6 is \u2014",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "2" },
      { id: "c", text: "5" },
      { id: "d", text: "\u22122" }
    ],
    answerId: "b",
    explanation: "p(2) = 4 − 10 + 6 = 0, so 2 is a zero; the factors are (x − 2)(x − 3), giving zeros 2 and 3. 6 is tempting because it is the constant term, but p(6) = 36 − 30 + 6 = 12, not 0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-a-q03",
    prompt: "If (x \u2212 1) is a factor of x\u00b2 + kx + 1, then k equals \u2014",
    options: [
      { id: "a", text: "\u22121" },
      { id: "b", text: "1" },
      { id: "c", text: "\u22122" },
      { id: "d", text: "2" }
    ],
    answerId: "c",
    explanation: "If x − 1 is a factor, then p(1) = 0: 1 + k + 1 = 0, so k = −2. 2 is tempting if you drop the minus sign, but with k = 2, p(1) = 1 + 2 + 1 = 4, not 0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-a-q04",
    prompt: "At how many points does the graph of y = x\u00b2 \u2212 4x + 4 meet the x-axis?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "1" },
      { id: "c", text: "0" },
      { id: "d", text: "3" }
    ],
    answerId: "b",
    explanation: "x\u00b2 \u2212 4x + 4 = (x \u2212 2)\u00b2, so both zeros are 2 and the graph just touches the x-axis at one point, (2, 0). 2 is tempting because a quadratic can have two zeros, but here they are equal.",
    hints: ["Factorise x\u00b2 \u2212 4x + 4. Are its two zeros different, or the same number twice?"]
  },
  {
    id: "g10-maths-poly-a-q05",
    prompt: "A quadratic polynomial with zeros 2 and \u22123 is \u2014",
    options: [
      { id: "a", text: "x\u00b2 \u2212 5x \u2212 6" },
      { id: "b", text: "x\u00b2 + x \u2212 6" },
      { id: "c", text: "x\u00b2 \u2212 x \u2212 6" },
      { id: "d", text: "x\u00b2 + 5x \u2212 6" }
    ],
    answerId: "b",
    explanation: "Sum of zeros = 2 + (−3) = −1 and product = −6, so the polynomial is x² − (sum)x + product = x² + x − 6. x² − x − 6 is tempting if you forget the minus sign in −(sum)x; its zeros are 3 and −2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-a-q06",
    prompt: "If \u03b1 and \u03b2 are the zeros of 2x\u00b2 \u2212 7x + 3, then \u03b1\u03b2 equals \u2014",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "\u22123/2" },
      { id: "c", text: "7/2" },
      { id: "d", text: "3/2" }
    ],
    answerId: "d",
    explanation: "For ax\u00b2 + bx + c, the product of zeros is c/a = 3/2. 3 is tempting if you forget to divide by a = 2, and 7/2 is the sum of the zeros (\u2212b/a), not the product.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-a-q07",
    prompt: "One zero of x\u00b2 \u2212 3x \u2212 10 is 5. Using the sum of the zeros, what is the other zero?",
    options: [
      { id: "a", text: "\u22128" },
      { id: "b", text: "\u22122" },
      { id: "c", text: "2" },
      { id: "d", text: "8" }
    ],
    answerId: "b",
    explanation: "Sum of zeros = \u2212b/a = 3, so the other zero is 3 \u2212 5 = \u22122. Check: 5 \u00d7 (\u22122) = \u221210 = c/a. \u22128 is tempting if you take the sum as \u22123.",
    hints: ["Sum of zeros = \u2212(coefficient of x)/(coefficient of x\u00b2). Subtract the known zero from that sum."]
  },
  {
    id: "g10-maths-poly-a-q08",
    prompt: "The number of zeros of a cubic polynomial is at most \u2014",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "2" },
      { id: "c", text: "4" },
      { id: "d", text: "3" }
    ],
    answerId: "d",
    explanation: "A polynomial of degree n has at most n zeros, and a cubic has degree 3, so it has at most 3 zeros. 2 is tempting from quadratics, but a cubic such as x(x − 1)(x − 2) has three zeros: 0, 1 and 2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-a-q09",
    prompt: "p(x) = 2 is a polynomial of degree \u2014",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "0" },
      { id: "c", text: "1" },
      { id: "d", text: "undefined" }
    ],
    answerId: "b",
    explanation: "p(x) = 2 is the same as 2x⁰, so a non-zero constant polynomial has degree 0. 2 is tempting because the value is 2, but the degree is the highest power of x, not the constant itself. Only the zero polynomial has no defined degree.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-a-q10",
    prompt: "If p(x) = x\u00b2 \u2212 2x \u2212 8 and p(a) = 0, a possible value of a is \u2014",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "4" },
      { id: "c", text: "1" },
      { id: "d", text: "8" }
    ],
    answerId: "b",
    explanation: "x² − 2x − 8 = (x − 4)(x + 2), so a = 4 or a = −2. 2 is tempting because −2 is a zero, but p(2) = 4 − 4 − 8 = −8, not 0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-a-q11",
    prompt: "The graph of y = ax\u00b2 + bx + c (a \u2260 0) is \u2014",
    options: [
      { id: "a", text: "a straight line" },
      { id: "b", text: "a hyperbola" },
      { id: "c", text: "a circle" },
      { id: "d", text: "a parabola" }
    ],
    answerId: "d",
    explanation: "With a ≠ 0, y = ax² + bx + c is a quadratic, and the graph of every quadratic is a parabola, opening up when a > 0 and down when a < 0. A straight line is tempting, but that is the graph of a linear polynomial, which has no x² term.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-a-q12",
    prompt: "If one zero of x\u00b2 + kx + 6 is 2, then k equals \u2014",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "5" },
      { id: "c", text: "\u22125" },
      { id: "d", text: "\u22123" }
    ],
    answerId: "c",
    explanation: "p(2) = 0 gives 4 + 2k + 6 = 0, so 2k = −10 and k = −5; the other zero is 3, since 2 × 3 = 6. 5 is tempting if you drop the sign, but x² + 5x + 6 has zeros −2 and −3, not 2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-a-q13",
    prompt: "Division algorithm for polynomials: p(x) = g(x)\u00b7q(x) + r(x), where \u2014",
    options: [
      { id: "a", text: "deg r < deg g (or r=0)" },
      { id: "b", text: "deg r > deg g" },
      { id: "c", text: "r = g" },
      { id: "d", text: "deg r = deg p" }
    ],
    answerId: "a",
    explanation: "In p(x) = g(x)·q(x) + r(x), the remainder r(x) is either 0 or has a smaller degree than the divisor g(x), just as a number remainder is smaller than the divisor. 'deg r = deg p' is tempting, but then g(x) could still go into r(x), so the division would not be finished.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-a-q14",
    prompt: "A linear polynomial has how many zeros?",
    options: [
      { id: "a", text: "exactly one" },
      { id: "b", text: "none" },
      { id: "c", text: "two" },
      { id: "d", text: "infinitely many" }
    ],
    answerId: "a",
    explanation: "A linear polynomial ax + b with a ≠ 0 is zero only at x = −b/a, so it has exactly one zero. 'None' is tempting, but its graph is a straight line that is not parallel to the x-axis, so it must cross the x-axis exactly once.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-a-q15",
    prompt: "The zero of 3x \u2212 6 is \u2014",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "6" },
      { id: "c", text: "\u22122" },
      { id: "d", text: "2" }
    ],
    answerId: "d",
    explanation: "3x − 6 = 0 gives 3x = 6, so x = 2. 6 is tempting because it is the number in the polynomial, but 3 × 6 − 6 = 12, not 0. −2 comes from a sign slip: 3 × (−2) − 6 = −12.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-a-q16",
    prompt: "If \u03b1, \u03b2 are zeros of 2x\u00b2 \u2212 3x + 1, then 1/\u03b1 + 1/\u03b2 equals \u2014",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "2" },
      { id: "c", text: "1/2" },
      { id: "d", text: "3/2" }
    ],
    answerId: "a",
    explanation: "1/α + 1/β = (α + β)/(αβ). For 2x² − 3x + 1, α + β = 3/2 and αβ = 1/2, so the answer is (3/2) ÷ (1/2) = 3. 3/2 is tempting, but that is only α + β; you still have to divide by αβ.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-a-q17",
    prompt: "Which is not a polynomial?",
    options: [
      { id: "a", text: "x\u00b2 + 1" },
      { id: "b", text: "x\u00b3 \u2212 x" },
      { id: "c", text: "3" },
      { id: "d", text: "\u221ax + 1" }
    ],
    answerId: "d",
    explanation: "√x + 1 = x^(1/2) + 1, and a polynomial may only have whole-number powers of x, so it is not a polynomial. 3 is tempting because it has no x at all, but a non-zero constant is a polynomial of degree 0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-a-q18",
    prompt: "If (x+1) is a factor of x\u00b3 + 3x\u00b2 + 3x + k, then k equals \u2014",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "0" },
      { id: "c", text: "1" },
      { id: "d", text: "\u22121" }
    ],
    answerId: "c",
    explanation: "If x + 1 is a factor, then p(−1) = 0: −1 + 3 − 3 + k = 0, so k = 1. −1 is tempting from a sign slip, but with k = −1, p(−1) = −1 + 3 − 3 − 1 = −2, not 0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-a-q19",
    prompt: "Sum of zeros of 3x\u00b2 \u2212 5x + 2 is \u2014",
    options: [
      { id: "a", text: "2/3" },
      { id: "b", text: "\u22125/3" },
      { id: "c", text: "3/5" },
      { id: "d", text: "5/3" }
    ],
    answerId: "d",
    explanation: "Sum of zeros = −b/a = −(−5)/3 = 5/3. −5/3 is tempting if you forget the minus sign in −b/a, and 2/3 is the product c/a, not the sum.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-a-q20",
    prompt: "If x\u00b2 \u2212 x \u2212 6 = (x + a)(x + b) with a > b, then a equals \u2014",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "\u22123" },
      { id: "c", text: "2" },
      { id: "d", text: "\u22122" }
    ],
    answerId: "c",
    explanation: "x\u00b2 \u2212 x \u2212 6 = (x + 2)(x \u2212 3), so a = 2 and b = \u22123. 3 is tempting because 3 is a zero of the polynomial, but the factor x \u2212 3 means b = \u22123.",
    hints: ["Find a pair of numbers that multiply to \u22126 and add to \u22121. Which number in the pair is larger?"]
  },
  {
    id: "g10-maths-poly-a-q21",
    prompt: "If the zeros of a quadratic are equal, its discriminant is \u2014",
    options: [
      { id: "a", text: "negative" },
      { id: "b", text: "one" },
      { id: "c", text: "zero" },
      { id: "d", text: "positive" }
    ],
    answerId: "c",
    explanation: "A quadratic has equal zeros exactly when b² − 4ac = 0, so the discriminant is zero. Positive is tempting, but a positive discriminant gives two different real zeros.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-a-q22",
    prompt: "p(x) = x\u00b3 \u2212 1 factored over reals includes \u2014",
    options: [
      { id: "a", text: "(x\u22121)(x\u00b2+x+1)" },
      { id: "b", text: "(x+1)(x\u00b2\u2212x+1)" },
      { id: "c", text: "(x\u22121)\u00b3" },
      { id: "d", text: "(x\u22121)(x+1)\u00b2" }
    ],
    answerId: "a",
    explanation: "x³ − 1 is a difference of cubes: x³ − 1 = (x − 1)(x² + x + 1). (x − 1)³ is tempting, but it expands to x³ − 3x² + 3x − 1, which has extra terms; (x + 1)(x² − x + 1) gives x³ + 1.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-a-q23",
    prompt: "The coefficient of x in 4x\u00b3 \u2212 3x + 7 is \u2014",
    options: [
      { id: "a", text: "\u22123" },
      { id: "b", text: "4" },
      { id: "c", text: "0" },
      { id: "d", text: "7" }
    ],
    answerId: "a",
    explanation: "The term in x is −3x, so the coefficient of x is −3, sign included. 4 is tempting because it comes first, but 4 is the coefficient of x³; 7 is the constant term.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-a-q24",
    prompt: "If \u03b1, \u03b2 are zeros of x\u00b2 \u2212 x \u2212 2, then \u03b1\u00b2 + \u03b2\u00b2 equals \u2014",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "1" },
      { id: "c", text: "3" },
      { id: "d", text: "4" }
    ],
    answerId: "a",
    explanation: "For x² − x − 2, α + β = 1 and αβ = −2, so α² + β² = (α + β)² − 2αβ = 1 − 2(−2) = 1 + 4 = 5. Check: the zeros are 2 and −1, and 4 + 1 = 5. 1 is tempting if you square the sum and forget the −2αβ term.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g10-maths-poly-b-q01",
    prompt: "A cubic polynomial with zeros \u22121, 1 and 2 can be \u2014",
    options: [
      { id: "a", text: "(x+1)(x\u22121)(x\u22122)" },
      { id: "b", text: "x\u00b3\u22122" },
      { id: "c", text: "x\u00b3+1" },
      { id: "d", text: "(x\u22121)\u00b3" }
    ],
    answerId: "a",
    explanation: "(x + 1)(x − 1)(x − 2) is zero at x = −1, 1 and 2, and multiplying three linear factors gives a cubic. (x − 1)³ is tempting because it is a cubic with the zero 1, but 1 is its only zero; at −1 and 2 it is not zero.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-b-q02",
    prompt: "When x\u00b3 \u2212 3x\u00b2 + 5x \u2212 3 is divided by x\u00b2 \u2212 x + 1, the quotient is x \u2212 2. What is the remainder?",
    options: [
      { id: "a", text: "x \u2212 1" },
      { id: "b", text: "\u22122x + 1" },
      { id: "c", text: "2x + 1" },
      { id: "d", text: "2x \u2212 1" }
    ],
    answerId: "d",
    explanation: "(x\u00b2 \u2212 x + 1)(x \u2212 2) = x\u00b3 \u2212 3x\u00b2 + 3x \u2212 2. Subtracting it from x\u00b3 \u2212 3x\u00b2 + 5x \u2212 3 leaves 2x \u2212 1. \u22122x + 1 is tempting if you subtract the wrong way round.",
    hints: ["Multiply the divisor by the quotient, then subtract that product from x\u00b3 \u2212 3x\u00b2 + 5x \u2212 3."]
  },
  {
    id: "g10-maths-poly-b-q03",
    prompt: "If \u03b1 + \u03b2 = 5 and \u03b1\u03b2 = 6 for a quadratic monic polynomial, it is \u2014",
    options: [
      { id: "a", text: "x\u00b2 + 5x \u2212 6" },
      { id: "b", text: "x\u00b2 \u2212 5x + 6" },
      { id: "c", text: "x\u00b2 + 5x + 6" },
      { id: "d", text: "x\u00b2 \u2212 5x \u2212 6" }
    ],
    answerId: "b",
    explanation: "A monic quadratic is x² − (α + β)x + αβ = x² − 5x + 6; its zeros 2 and 3 add to 5 and multiply to 6. x² + 5x + 6 is tempting, but its zeros are −2 and −3, which add to −5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-b-q04",
    prompt: "The graph of y = (x\u22122)(x\u22123) cuts the x-axis at \u2014",
    options: [
      { id: "a", text: "only 2" },
      { id: "b", text: "2 and 3" },
      { id: "c", text: "0 and 1" },
      { id: "d", text: "\u22122 and \u22123" }
    ],
    answerId: "b",
    explanation: "y = (x − 2)(x − 3) is zero when x − 2 = 0 or x − 3 = 0, so the graph cuts the x-axis at 2 and 3. −2 and −3 is tempting from the signs in the brackets, but x = −2 gives (−4)(−5) = 20, not 0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-b-q05",
    prompt: "If p(x) = x\u00b2 + 1, then p(x) has \u2014",
    options: [
      { id: "a", text: "one real zero" },
      { id: "b", text: "no real zero" },
      { id: "c", text: "two real zeros" },
      { id: "d", text: "infinitely many zeros" }
    ],
    answerId: "b",
    explanation: "For every real x, x² ≥ 0, so x² + 1 ≥ 1 and can never be 0: there is no real zero. 'Two real zeros' is tempting because it is a quadratic, but a quadratic has at most two zeros, and this graph stays above the x-axis.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-b-q06",
    prompt: "On dividing x\u00b3 \u2212 3x\u00b2 + x + 2 by a polynomial g(x), the quotient and remainder were x\u22122 and \u22122x+4. Then g(x) is \u2014",
    options: [
      { id: "a", text: "x\u00b2 \u2212 x \u2212 1" },
      { id: "b", text: "x \u2212 1" },
      { id: "c", text: "x\u00b2 \u2212 x + 1" },
      { id: "d", text: "x\u00b2 + x + 1" }
    ],
    answerId: "c",
    explanation: "From p = g·q + r, g = (p − r) ÷ q. Check x² − x + 1: (x² − x + 1)(x − 2) + (−2x + 4) = x³ − 3x² + 3x − 2 − 2x + 4 = x³ − 3x² + x + 2. x² − x − 1 is tempting because only the last sign differs, but it gives x³ − 3x² − x + 6.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-b-q07",
    prompt: "If one zero of (k\u00b2+4)x\u00b2 + 13x + 4k is reciprocal of the other, then k equals \u2014",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "4" },
      { id: "c", text: "\u22122" },
      { id: "d", text: "1" }
    ],
    answerId: "a",
    explanation: "If one zero is the reciprocal of the other, their product is 1. Product = c/a = 4k/(k² + 4) = 1, so k² − 4k + 4 = 0, (k − 2)² = 0 and k = 2. −2 is tempting, but it gives 4k/(k² + 4) = −8/8 = −1, not 1.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-b-q08",
    prompt: "The quadratic polynomial whose sum of zeros is \u22123 and product is 2 is \u2014",
    options: [
      { id: "a", text: "x\u00b2 + 3x + 2" },
      { id: "b", text: "x\u00b2 \u2212 3x \u2212 2" },
      { id: "c", text: "x\u00b2 \u2212 3x + 2" },
      { id: "d", text: "x\u00b2 + 3x \u2212 2" }
    ],
    answerId: "a",
    explanation: "x² − (sum)x + product = x² − (−3)x + 2 = x² + 3x + 2; its zeros −1 and −2 add to −3 and multiply to 2. x² − 3x + 2 is tempting if you forget the minus sign in −(sum)x: its zeros 1 and 2 add to +3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-b-q09",
    prompt: "For what value of a is (x + 1) a factor of x\u00b3 + x\u00b2 \u2212 ax \u2212 a?",
    options: [
      { id: "a", text: "any real a" },
      { id: "b", text: "no real a" },
      { id: "c", text: "only a = 1" },
      { id: "d", text: "only a = 0" }
    ],
    answerId: "a",
    explanation: "p(−1) = −1 + 1 + a − a = 0 for every value of a, so x + 1 is always a factor; in fact p(x) = (x + 1)(x² − a). 'Only a = 1' is tempting because a = 1 works, but so does every other value of a.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-b-q10",
    prompt: "deg(p\u00b7q) when p has degree 3 and q has degree 2 equals \u2014",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "5" },
      { id: "c", text: "2" },
      { id: "d", text: "3" }
    ],
    answerId: "b",
    explanation: "When two polynomials are multiplied, their leading terms multiply, so the degrees add: 3 + 2 = 5 (x³ × x² = x⁵). 6 is tempting, but degrees are added, not multiplied.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-b-q11",
    prompt: "If \u03b1, \u03b2 are zeros of x\u00b2 \u2212 6x + 8, then (\u03b1\u2212\u03b2)\u00b2 equals \u2014",
    options: [
      { id: "a", text: "36" },
      { id: "b", text: "2" },
      { id: "c", text: "4" },
      { id: "d", text: "16" }
    ],
    answerId: "c",
    explanation: "(α − β)² = (α + β)² − 4αβ = 6² − 4 × 8 = 36 − 32 = 4. Check: the zeros 4 and 2 differ by 2, and 2² = 4. 2 is tempting, but that is α − β itself, not its square.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-b-q12",
    prompt: "A polynomial of degree 4 can have at most how many zeros?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "3" },
      { id: "c", text: "1" },
      { id: "d", text: "4" }
    ],
    answerId: "d",
    explanation: "A polynomial of degree n has at most n zeros, so degree 4 gives at most 4 zeros. 5 is tempting, but a degree-4 graph can cross the x-axis at most 4 times; 5 zeros would need degree 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-b-q13",
    prompt: "The constant term of (x \u2212 2)(x + 3)(x \u2212 1) is \u2014",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "\u22126" },
      { id: "c", text: "\u22122" },
      { id: "d", text: "6" }
    ],
    answerId: "d",
    explanation: "The constant term is the product of the constants in the brackets: (−2) × 3 × (−1) = 6. −6 is tempting if you lose one minus sign, but two negatives multiply to a positive.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-b-q14",
    prompt: "If p(x) = x\u00b2 \u2212 4x + 3, then p(1) equals \u2014",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "\u22121" },
      { id: "c", text: "1" },
      { id: "d", text: "0" }
    ],
    answerId: "d",
    explanation: "p(1) = 1 − 4 + 3 = 0, so x = 1 is a zero of p(x). 3 is tempting because it is the constant term, but 3 is p(0), not p(1).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-b-q15",
    prompt: "Which polynomial has (x\u22121) as a factor?",
    options: [
      { id: "a", text: "x\u00b2 + x + 1" },
      { id: "b", text: "x\u00b2 \u2212 x + 1" },
      { id: "c", text: "x\u00b3 \u2212 1" },
      { id: "d", text: "x\u00b2 + 1" }
    ],
    answerId: "c",
    explanation: "x − 1 is a factor exactly when p(1) = 0, and for x³ − 1, p(1) = 1 − 1 = 0. x² − x + 1 is tempting, but p(1) = 1 − 1 + 1 = 1, not 0; the other two give 3 and 2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-b-q16",
    prompt: "Zeros of (x\u22121)(x\u22122) + (x\u22121)(x\u22123) are found by factoring (x\u22121). They are \u2014",
    options: [
      { id: "a", text: "2 and 3" },
      { id: "b", text: "1 and 2" },
      { id: "c", text: "1 and 2.5" },
      { id: "d", text: "1 and 3" }
    ],
    answerId: "c",
    explanation: "(x − 1)(x − 2) + (x − 1)(x − 3) = (x − 1)[(x − 2) + (x − 3)] = (x − 1)(2x − 5), so the zeros are 1 and 5/2 = 2.5. 2 and 3 is tempting from the brackets, but at x = 2 the expression is 1 × 0 + 1 × (−1) = −1, not 0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-b-q17",
    prompt: "If \u03b1, \u03b2 are zeros of x\u00b2 \u2212 3x + 2, then \u03b1\u00b2\u03b2 + \u03b1\u03b2\u00b2 equals \u2014",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "6" },
      { id: "c", text: "3" },
      { id: "d", text: "5" }
    ],
    answerId: "b",
    explanation: "α²β + αβ² = αβ(α + β). For x² − 3x + 2, αβ = 2 and α + β = 3, so the answer is 2 × 3 = 6. 5 is tempting because it adds αβ and α + β instead of multiplying them.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-b-q18",
    prompt: "The leading coefficient of \u22127x\u2074 + 3x \u2212 1 is \u2014",
    options: [
      { id: "a", text: "\u22127" },
      { id: "b", text: "4" },
      { id: "c", text: "3" },
      { id: "d", text: "\u22121" }
    ],
    answerId: "a",
    explanation: "The leading coefficient belongs to the term with the highest power, −7x⁴, so it is −7, sign included. 4 is tempting, but 4 is the degree (the power of x), not the coefficient.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-b-q19",
    prompt: "If p(x) = 0 has roots 0 and 5, a possible quadratic is \u2014",
    options: [
      { id: "a", text: "x\u00b2 + 5" },
      { id: "b", text: "(x+5)\u00b2" },
      { id: "c", text: "x(x\u22125)" },
      { id: "d", text: "x\u00b2 \u2212 5" }
    ],
    answerId: "c",
    explanation: "x(x − 5) is zero when x = 0 or x = 5. x² − 5 is tempting because it contains 5, but its zeros are √5 and −√5; putting x = 5 gives 20.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-b-q20",
    prompt: "For p(x)=x\u00b2+1 and g(x)=x+1, the remainder on dividing p by g is \u2014",
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "\u22121" },
      { id: "c", text: "2" },
      { id: "d", text: "1" }
    ],
    answerId: "c",
    explanation: "By the remainder theorem, the remainder on dividing by x + 1 is p(−1) = (−1)² + 1 = 2; indeed x² + 1 = (x + 1)(x − 1) + 2. 0 is tempting, but x + 1 is not a factor of x² + 1, because p(−1) is not 0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-b-q21",
    prompt: "A quadratic with zeros reciprocal to those of x\u00b2 \u2212 3x + 2 is \u2014",
    options: [
      { id: "a", text: "2x\u00b2 \u2212 3x + 1" },
      { id: "b", text: "x\u00b2 + 3x + 2" },
      { id: "c", text: "x\u00b2 \u2212 3x + 2" },
      { id: "d", text: "2x\u00b2 + 3x + 1" }
    ],
    answerId: "a",
    explanation: "x² − 3x + 2 has zeros 1 and 2, so the new zeros are 1 and 1/2, with sum 3/2 and product 1/2. That gives x² − (3/2)x + 1/2, and multiplying by 2 gives 2x² − 3x + 1. x² − 3x + 2 is tempting, but it is the original polynomial, whose zeros are 1 and 2, not their reciprocals.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-b-q22",
    prompt: "If deg(p)=4 and deg(q)=2 and q divides p exactly, deg(p/q) equals \u2014",
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "4" },
      { id: "c", text: "6" },
      { id: "d", text: "2" }
    ],
    answerId: "d",
    explanation: "If q divides p exactly, then p = q × (p/q). Degrees add when you multiply, so 4 = 2 + deg(p/q), which gives 2. 6 is tempting, but adding the degrees gives the degree of the product p·q, not of the quotient.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-b-q23",
    prompt: "The value of k for which x\u00b2 + kx + 9 has equal zeros is \u2014",
    options: [
      { id: "a", text: "\u00b13" },
      { id: "b", text: "\u00b11" },
      { id: "c", text: "\u00b19" },
      { id: "d", text: "\u00b16" }
    ],
    answerId: "d",
    explanation: "Equal zeros need discriminant 0: k² − 4 × 1 × 9 = 0, so k² = 36 and k = ±6, giving x² ± 6x + 9 = (x ± 3)². ±3 is tempting because 9 = 3², but k is the middle coefficient, which is 2 × 3 = 6.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-b-q24",
    prompt: "p(x)=x\u00b3\u22126x\u00b2+11x\u22126 has a zero at x=1. The quadratic factor is \u2014",
    options: [
      { id: "a", text: "x\u00b2 + 5x + 6" },
      { id: "b", text: "x\u00b2 \u2212 5x + 6" },
      { id: "c", text: "x\u00b2 \u2212 x + 6" },
      { id: "d", text: "x\u00b2 \u2212 6x + 11" }
    ],
    answerId: "b",
    explanation: "Dividing x³ − 6x² + 11x − 6 by x − 1 gives the quotient x² − 5x + 6, and (x − 1)(x² − 5x + 6) = x³ − 6x² + 11x − 6. x² − 6x + 11 is tempting because it copies the first coefficients, but (x − 1)(x² − 6x + 11) = x³ − 7x² + 17x − 11.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83d\udcc8",
    title: "Polynomials",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "balance",
    speak: "Polynomials have degrees, zeros, and factor/remainder theorems.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "balance",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Degree", reveal: "Highest power with non-zero coeff", emoji: "\ud83d\udcf6" },
      { label: "Zeros", reveal: "p(\u03b1)=0", emoji: "\ud83c\udfaf" },
      { label: "Factor theorem", reveal: "(x\u2212a) factor \u21d4 p(a)=0", emoji: "\ud83e\udde9" },
      { label: "Sum & product", reveal: "\u2212b/a and c/a for quadratics", emoji: "\u2795" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Remainder when x\u00b2 \u2212 3x + 2 is divided by x \u2212 1?",
    options: [
        { id: "a", text: "0" },
        { id: "b", text: "2" },
        { id: "c", text: "1" },
        { id: "d", text: "\u22121" }
    ],
    answerId: "a",
    why: "p(1)=1\u22123+2=0, so (x\u22121) divides exactly.",
    visual: "balance",
    speak: "Remainder when x\u00b2 \u2212 3x + 2 is divided by x \u2212 1?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Polynomial toolkit", "Degree & zeros", "Remainder = p(a)", "Quadratics: sum & product"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g10MathsPolynomials: ChapterDef = {
  id: "polynomials",
  title: "Polynomials",
  emoji: "\ud83d\udcc8",
  blurb: "Degree, zeros & factor theorem",
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

export const g10MathsPolynomialsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
