import type { ChapterDef, PrepQuestion } from "../types";

/** Polynomials - authored olympiad-style content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g10-maths-poly-a-q01",
    prompt: "The degree of the polynomial 5x\u00b3 \u2212 2x + 7 is \u2014",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "5" },
      { id: "c", text: "1" },
      { id: "d", text: "0" }
    ],
    answerId: "a",
    explanation: "Highest power of x with non-zero coefficient is 3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "p(2)=4\u221210+6=0. Factors (x\u22122)(x\u22123).",
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
    explanation: "p(1)=0 \u2192 1+k+1=0 \u2192 k=\u22122.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-a-q04",
    prompt: "The remainder when x\u00b3 + 3x + 1 is divided by x \u2212 1 is \u2014",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "1" },
      { id: "c", text: "0" },
      { id: "d", text: "3" }
    ],
    answerId: "a",
    explanation: "By remainder theorem, p(1)=1+3+1=5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "Sum \u22121, product \u22126 \u2192 x\u00b2 \u2212 (sum)x + product = x\u00b2 + x \u2212 6.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-a-q06",
    prompt: "If \u03b1 and \u03b2 are zeros of x\u00b2 \u2212 5x + 6, then \u03b1 + \u03b2 equals \u2014",
    options: [
      { id: "a", text: "\u22125" },
      { id: "b", text: "1" },
      { id: "c", text: "6" },
      { id: "d", text: "5" }
    ],
    answerId: "d",
    explanation: "Sum of zeros = \u2212b/a = 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-a-q07",
    prompt: "If \u03b1 and \u03b2 are zeros of x\u00b2 \u2212 5x + 6, then \u03b1\u03b2 equals \u2014",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "6" },
      { id: "c", text: "1" },
      { id: "d", text: "\u22126" }
    ],
    answerId: "b",
    explanation: "Product = c/a = 6.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "A degree-n polynomial has at most n zeros.",
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
    explanation: "Non-zero constants are degree 0.",
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
    explanation: "(x\u22124)(x+2)=0 so a=4 or a=\u22122.",
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
    explanation: "Quadratic graphs are parabolas.",
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
    explanation: "p(2)=0 \u2192 4+2k+6=0 \u2192 2k=\u221210 \u2192 k=\u22125. Other zero 3.",
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
    explanation: "Remainder degree is less than divisor degree.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-a-q14",
    prompt: "A linear polynomial has how many zeros?",
    options: [
      { id: "a", text: "none" },
      { id: "b", text: "exactly one" },
      { id: "c", text: "two" },
      { id: "d", text: "infinitely many" }
    ],
    answerId: "b",
    explanation: "ax+b=0 has unique solution x=\u2212b/a (a\u22600).",
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
    explanation: "3x\u22126=0 \u2192 x=2.",
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
    explanation: "1/\u03b1+1/\u03b2=(\u03b1+\u03b2)/\u03b1\u03b2 = (3/2)/(1/2)=3.",
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
    explanation: "\u221ax = x^{1/2} has non-integer exponent.",
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
    explanation: "p(\u22121)=\u22121+3\u22123+k=0 \u2192 k=1.",
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
    explanation: "\u2212b/a = 5/3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-a-q20",
    prompt: "Product of zeros of 3x\u00b2 \u2212 5x + 2 is \u2014",
    options: [
      { id: "a", text: "\u22122/3" },
      { id: "b", text: "3/2" },
      { id: "c", text: "2/3" },
      { id: "d", text: "5/3" }
    ],
    answerId: "c",
    explanation: "c/a = 2/3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "Equal roots \u21d4 b\u00b2\u22124ac = 0.",
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
    explanation: "x\u00b3\u22121=(x\u22121)(x\u00b2+x+1).",
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
    explanation: "The linear term is \u22123x.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-a-q24",
    prompt: "If \u03b1, \u03b2 are zeros of x\u00b2 \u2212 x \u2212 2, then \u03b1\u00b2 + \u03b2\u00b2 equals \u2014",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "1" },
      { id: "c", text: "5" },
      { id: "d", text: "4" }
    ],
    answerId: "c",
    explanation: "\u03b1\u00b2+\u03b2\u00b2=(\u03b1+\u03b2)\u00b2\u22122\u03b1\u03b2=1\u22122(\u22122)=5.",
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
    explanation: "Product of (x\u2212zero) factors works (up to a constant).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-b-q02",
    prompt: "Remainder when 2x\u00b3 \u2212 3x\u00b2 + x \u2212 1 is divided by x \u2212 2 is \u2014",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "5" },
      { id: "c", text: "0" },
      { id: "d", text: "3" }
    ],
    answerId: "b",
    explanation: "p(2)=16\u221212+2\u22121=5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "x\u00b2 \u2212 (sum)x + product.",
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
    explanation: "Zeros are x=2 and x=3.",
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
    explanation: "x\u00b2+1\u22651>0 for all real x.",
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
    explanation: "p = gq + r \u2192 g = (p \u2212 r)/q. Verify: (x\u00b2\u2212x+1)(x\u22122)+(\u22122x+4)=x\u00b3\u22123x\u00b2+x+2.",
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
    explanation: "Product of zeros = 1 \u21d2 4k/(k\u00b2+4)=1 \u21d2 4k=k\u00b2+4 \u21d2 k\u00b2\u22124k+4=0 \u21d2 (k\u22122)\u00b2=0.",
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
    explanation: "x\u00b2 \u2212 (sum)x + product = x\u00b2 + 3x + 2.",
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
    explanation: "p(\u22121)=\u22121+1+a\u2212a=0 for every a, so (x+1) is always a factor.",
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
    explanation: "Degrees add under multiplication (leading coeffs non-zero).",
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
    explanation: "(\u03b1\u2212\u03b2)\u00b2=(\u03b1+\u03b2)\u00b2\u22124\u03b1\u03b2=36\u221232=4.",
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
    explanation: "At most 4 real zeros for degree 4.",
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
    explanation: "Product of the constants (\u22122)(3)(\u22121) = 6.",
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
    explanation: "1 \u2212 4 + 3 = 0, so x=1 is a zero.",
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
    explanation: "1\u22121=0; others don't vanish at 1.",
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
    explanation: "(x\u22121)[(x\u22122)+(x\u22123)]=(x\u22121)(2x\u22125); zeros 1 and 5/2.",
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
    explanation: "\u03b1\u03b2(\u03b1+\u03b2)=2\u00d73=6.",
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
    explanation: "Leading coefficient is that of the highest degree term.",
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
    explanation: "x(x\u22125)=x\u00b2\u22125x has zeros 0 and 5.",
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
    explanation: "p(\u22121)=1+1=2.",
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
    explanation: "Original zeros 1,2; reciprocals 1, 1/2 \u2192 x\u00b2\u2212(3/2)x+1/2 \u2192 multiply by 2: 2x\u00b2\u22123x+1.",
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
    explanation: "Exact division: degrees subtract.",
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
    explanation: "Discriminant k\u00b2\u221236=0 \u2192 k=\u00b16.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-poly-b-q24",
    prompt: "p(x)=x\u00b3\u22126x\u00b2+11x\u22126 has a zero at x=1. The quadratic factor is \u2014",
    options: [
      { id: "a", text: "x\u00b2 + 5x + 6" },
      { id: "b", text: "x\u00b2 \u2212 6x + 11" },
      { id: "c", text: "x\u00b2 \u2212 x + 6" },
      { id: "d", text: "x\u00b2 \u2212 5x + 6" }
    ],
    answerId: "d",
    explanation: "Synthetic division by (x\u22121) yields x\u00b2\u22125x+6.",
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
