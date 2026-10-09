import type { ChapterDef, PrepQuestion } from "../types";

/** Real Numbers - authored olympiad-style content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g10-maths-real-a-q01",
    prompt: "Euclid's division lemma says that for positive integers a and b, there exist unique integers q and r such that a = bq + r, where \u2014",
    options: [
      { id: "a", text: "0 \u2264 r < b" },
      { id: "b", text: "0 < r \u2264 b" },
      { id: "c", text: "r \u2265 b" },
      { id: "d", text: "r can be any integer" }
    ],
    answerId: "a",
    explanation: "The remainder r satisfies 0 \u2264 r < b.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q02",
    prompt: "Using Euclid's algorithm, HCF(135, 225) equals \u2014",
    options: [
      { id: "a", text: "15" },
      { id: "b", text: "45" },
      { id: "c", text: "9" },
      { id: "d", text: "25" }
    ],
    answerId: "b",
    explanation: "225 = 135\u00d71 + 90; 135 = 90\u00d71 + 45; 90 = 45\u00d72 + 0, so HCF = 45.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q03",
    prompt: "If HCF(a, b) = 12 and a \u00d7 b = 1800, then LCM(a, b) equals \u2014",
    options: [
      { id: "a", text: "150" },
      { id: "b", text: "120" },
      { id: "c", text: "180" },
      { id: "d", text: "240" }
    ],
    answerId: "a",
    explanation: "HCF \u00d7 LCM = product of numbers, so LCM = 1800/12 = 150.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q04",
    prompt: "The decimal expansion of 7/8 is \u2014",
    options: [
      { id: "a", text: "0.875 (terminating)" },
      { id: "b", text: "0.875 with bar (non-terminating)" },
      { id: "c", text: "0.777\u2026" },
      { id: "d", text: "7.8" }
    ],
    answerId: "a",
    explanation: "8 = 2\u00b3, so the fraction has a terminating decimal 0.875.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q05",
    prompt: "Which of these is irrational?",
    options: [
      { id: "a", text: "\u221a9" },
      { id: "b", text: "\u221a2" },
      { id: "c", text: "0.25" },
      { id: "d", text: "22/7" }
    ],
    answerId: "b",
    explanation: "\u221a2 cannot be written as p/q; \u221a9 = 3 is rational.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q06",
    prompt: "\u221a(4 \u00d7 9) equals \u2014",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "\u221a13" },
      { id: "c", text: "2\u221a9" },
      { id: "d", text: "36" }
    ],
    answerId: "a",
    explanation: "\u221a(4\u00d79) = \u221a4 \u00d7 \u221a9 = 2 \u00d7 3 = 6.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q07",
    prompt: "2\u221a3 + 3\u221a3 equals \u2014",
    options: [
      { id: "a", text: "5\u221a3" },
      { id: "b", text: "5\u221a6" },
      { id: "c", text: "6\u221a3" },
      { id: "d", text: "\u221a6" }
    ],
    answerId: "a",
    explanation: "Like surds add: (2+3)\u221a3 = 5\u221a3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q08",
    prompt: "Rationalising the denominator of 1/\u221a5 gives \u2014",
    options: [
      { id: "a", text: "\u221a5/5" },
      { id: "b", text: "5/\u221a5" },
      { id: "c", text: "\u221a5" },
      { id: "d", text: "1/5" }
    ],
    answerId: "a",
    explanation: "Multiply by \u221a5/\u221a5: \u221a5/5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q09",
    prompt: "Which statement is true?",
    options: [
      { id: "a", text: "Every integer is a rational number" },
      { id: "b", text: "Every rational is an integer" },
      { id: "c", text: "\u221a2 is rational" },
      { id: "d", text: "\u03c0 is rational" }
    ],
    answerId: "a",
    explanation: "Any integer n = n/1 is rational.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q10",
    prompt: "The prime factorisation of 140 is \u2014",
    options: [
      { id: "a", text: "2\u00b2 \u00d7 5 \u00d7 7" },
      { id: "b", text: "2 \u00d7 5 \u00d7 14" },
      { id: "c", text: "2\u00b3 \u00d7 5 \u00d7 7" },
      { id: "d", text: "2\u00b2 \u00d7 35" }
    ],
    answerId: "a",
    explanation: "140 = 2\u00d770 = 2\u00d72\u00d735 = 2\u00b2\u00d75\u00d77.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q11",
    prompt: "If two positive integers p and q can be expressed as p = ab\u00b2 and q = a\u00b3b (a, b primes), then LCM(p, q) is \u2014",
    options: [
      { id: "a", text: "a\u00b3b\u00b2" },
      { id: "b", text: "ab" },
      { id: "c", text: "a\u00b2b\u00b2" },
      { id: "d", text: "a\u00b3b\u00b3" }
    ],
    answerId: "a",
    explanation: "Take highest powers: a\u00b3 and b\u00b2 \u2192 a\u00b3b\u00b2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q12",
    prompt: "HCF of 96 and 404 is \u2014",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "8" },
      { id: "c", text: "12" },
      { id: "d", text: "16" }
    ],
    answerId: "a",
    explanation: "404 = 96\u00d74 + 20; 96 = 20\u00d74 + 16; 20 = 16\u00d71 + 4; 16 = 4\u00d74 + 0 \u2192 HCF = 4.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q13",
    prompt: "\u221a8 / \u221a2 simplifies to \u2014",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "4" },
      { id: "c", text: "\u221a4 / 1" },
      { id: "d", text: "\u221a6" }
    ],
    answerId: "a",
    explanation: "\u221a8/\u221a2 = \u221a(8/2) = \u221a4 = 2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q14",
    prompt: "An irrational number between 2 and 3 is \u2014",
    options: [
      { id: "a", text: "\u221a5" },
      { id: "b", text: "\u221a4" },
      { id: "c", text: "5/2" },
      { id: "d", text: "2.5" }
    ],
    answerId: "a",
    explanation: "\u221a5 \u2248 2.236 lies between 2 and 3; \u221a4 = 2 is rational.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q15",
    prompt: "0.123123123\u2026 (repeating \"123\") as a fraction is \u2014",
    options: [
      { id: "a", text: "123/999" },
      { id: "b", text: "123/1000" },
      { id: "c", text: "123/99" },
      { id: "d", text: "12/99" }
    ],
    answerId: "a",
    explanation: "Let x = 0.\\overline{123}; 1000x \u2212 x = 123 \u2192 x = 123/999.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q16",
    prompt: "The product of a non-zero rational and an irrational number is \u2014",
    options: [
      { id: "a", text: "always irrational" },
      { id: "b", text: "always rational" },
      { id: "c", text: "always an integer" },
      { id: "d", text: "sometimes zero" }
    ],
    answerId: "a",
    explanation: "e.g. 2\u00d7\u221a3 = 2\u221a3 is irrational (non-zero rational \u00d7 irrational).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q17",
    prompt: "\u221a(50) in simplest form is \u2014",
    options: [
      { id: "a", text: "5\u221a2" },
      { id: "b", text: "25\u221a2" },
      { id: "c", text: "2\u221a5" },
      { id: "d", text: "10\u221a5" }
    ],
    answerId: "a",
    explanation: "\u221a50 = \u221a(25\u00d72) = 5\u221a2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q18",
    prompt: "If n is a natural number, then \u221an is \u2014",
    options: [
      { id: "a", text: "either integer or irrational" },
      { id: "b", text: "always rational" },
      { id: "c", text: "always irrational" },
      { id: "d", text: "always integer" }
    ],
    answerId: "a",
    explanation: "If n is a perfect square, \u221an is an integer; otherwise it is irrational.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q19",
    prompt: "LCM of 12, 15 and 21 is \u2014",
    options: [
      { id: "a", text: "420" },
      { id: "b", text: "210" },
      { id: "c", text: "180" },
      { id: "d", text: "60" }
    ],
    answerId: "a",
    explanation: "12=2\u00b2\u00d73, 15=3\u00d75, 21=3\u00d77 \u2192 LCM = 2\u00b2\u00d73\u00d75\u00d77 = 420.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q20",
    prompt: "Which of the following has a non-terminating repeating decimal expansion?",
    options: [
      { id: "a", text: "1/6" },
      { id: "b", text: "1/5" },
      { id: "c", text: "3/8" },
      { id: "d", text: "7/25" }
    ],
    answerId: "a",
    explanation: "6 = 2\u00d73 has a prime factor other than 2 or 5, so 1/6 = 0.1\u03056.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q21",
    prompt: "\u221a3 \u00d7 \u221a12 equals \u2014",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "\u221a36 / 2" },
      { id: "c", text: "3\u221a2" },
      { id: "d", text: "\u221a15" }
    ],
    answerId: "a",
    explanation: "\u221a3 \u00d7 \u221a12 = \u221a36 = 6.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q22",
    prompt: "The HCF of two co-prime numbers is \u2014",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "0" },
      { id: "c", text: "their product" },
      { id: "d", text: "their sum" }
    ],
    answerId: "a",
    explanation: "Co-prime means they share no common prime factor, so HCF = 1.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q23",
    prompt: "If \u221a2 = 1.414\u2026, then \u221a8 \u2248 \u2014",
    options: [
      { id: "a", text: "2.828" },
      { id: "b", text: "1.414" },
      { id: "c", text: "4.242" },
      { id: "d", text: "3.162" }
    ],
    answerId: "a",
    explanation: "\u221a8 = 2\u221a2 \u2248 2\u00d71.414 = 2.828.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q24",
    prompt: "For positive integers a, b: HCF(a, b) \u00d7 LCM(a, b) equals \u2014",
    options: [
      { id: "a", text: "a \u00d7 b" },
      { id: "b", text: "a + b" },
      { id: "c", text: "a \u2212 b" },
      { id: "d", text: "a / b" }
    ],
    answerId: "a",
    explanation: "This is the fundamental relation between HCF and LCM of two positives.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g10-maths-real-b-q01",
    prompt: "Find HCF(867, 255) using Euclid's algorithm.",
    options: [
      { id: "a", text: "51" },
      { id: "b", text: "17" },
      { id: "c", text: "3" },
      { id: "d", text: "85" }
    ],
    answerId: "a",
    explanation: "867 = 255\u00d73 + 102; 255 = 102\u00d72 + 51; 102 = 51\u00d72 + 0 \u2192 HCF = 51.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-b-q02",
    prompt: "The least number divisible by 12, 16 and 20 is \u2014",
    options: [
      { id: "a", text: "240" },
      { id: "b", text: "120" },
      { id: "c", text: "180" },
      { id: "d", text: "60" }
    ],
    answerId: "a",
    explanation: "LCM(12,16,20) = 2\u2074\u00d73\u00d75 = 240.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-b-q03",
    prompt: "\u221a(18/50) simplifies to \u2014",
    options: [
      { id: "a", text: "3/5" },
      { id: "b", text: "9/25" },
      { id: "c", text: "\u221a18 / 50" },
      { id: "d", text: "3\u221a2 / 5\u221a2" }
    ],
    answerId: "a",
    explanation: "\u221a(18/50) = \u221a(9/25) = 3/5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-b-q04",
    prompt: "Which number is rational?",
    options: [
      { id: "a", text: "0.\\overline{3}" },
      { id: "b", text: "\u221a7" },
      { id: "c", text: "\u03c0" },
      { id: "d", text: "\u221a2 + 1" }
    ],
    answerId: "a",
    explanation: "0.\\overline{3} = 1/3 is rational; the others are irrational.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-b-q05",
    prompt: "Using Euclid's algorithm, HCF(65, 117) = 13. Expressing 13 = 65x + 117y, one possible x is \u2014",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "\u22121" },
      { id: "c", text: "3" },
      { id: "d", text: "0" }
    ],
    answerId: "a",
    explanation: "Back-substitution gives 13 = 2\u00d765 + (\u22121)\u00d7117, so x = 2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-b-q06",
    prompt: "The decimal 0.6\u0305 (0.666\u2026) equals \u2014",
    options: [
      { id: "a", text: "2/3" },
      { id: "b", text: "6/10" },
      { id: "c", text: "3/5" },
      { id: "d", text: "1/6" }
    ],
    answerId: "a",
    explanation: "x=0.666\u2026; 10x\u2212x=6 \u2192 x=6/9=2/3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-b-q07",
    prompt: "\u221a75 \u2212 \u221a12 equals \u2014",
    options: [
      { id: "a", text: "3\u221a3" },
      { id: "b", text: "\u221a63" },
      { id: "c", text: "\u221a87" },
      { id: "d", text: "7\u221a3" }
    ],
    answerId: "a",
    explanation: "\u221a75 = 5\u221a3 and \u221a12 = 2\u221a3, so 5\u221a3 \u2212 2\u221a3 = 3\u221a3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-b-q08",
    prompt: "A number when divided by 61 gives remainder 37. What remainder does it leave when divided by 61 again after adding 24?",
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "37" },
      { id: "c", text: "24" },
      { id: "d", text: "61" }
    ],
    answerId: "a",
    explanation: "n = 61q+37; n+24 = 61q+61 = 61(q+1)+0 \u2192 remainder 0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-b-q09",
    prompt: "Which of the following is true for every prime p?",
    options: [
      { id: "a", text: "\u221ap is irrational" },
      { id: "b", text: "\u221ap is rational" },
      { id: "c", text: "p is even" },
      { id: "d", text: "p divides 1" }
    ],
    answerId: "a",
    explanation: "For prime p, p is not a perfect square, so \u221ap is irrational.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-b-q10",
    prompt: "The product (\u221a5 \u2212 \u221a2)(\u221a5 + \u221a2) equals \u2014",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "7" },
      { id: "c", text: "\u221a10" },
      { id: "d", text: "\u221a3" }
    ],
    answerId: "a",
    explanation: "Difference of squares: 5 \u2212 2 = 3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-b-q11",
    prompt: "If n = 2\u00b3 \u00d7 3\u00b2 \u00d7 5, how many trailing zeros does n have in base 10?",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "2" },
      { id: "c", text: "3" },
      { id: "d", text: "0" }
    ],
    answerId: "a",
    explanation: "Trailing zeros need pairs of 2\u00d75; only one factor 5 \u2192 one trailing zero.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-b-q12",
    prompt: "Rationalise: 3/(\u221a7 \u2212 \u221a2).",
    options: [
      { id: "a", text: "3(\u221a7+\u221a2)/5" },
      { id: "b", text: "3(\u221a7\u2212\u221a2)/5" },
      { id: "c", text: "3(\u221a7+\u221a2)/9" },
      { id: "d", text: "(\u221a7+\u221a2)/5" }
    ],
    answerId: "a",
    explanation: "Multiply by \u221a7+\u221a2: numerator 3(\u221a7+\u221a2), denominator 7\u22122=5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-b-q13",
    prompt: "The sum of a rational number and an irrational number is \u2014",
    options: [
      { id: "a", text: "always irrational" },
      { id: "b", text: "always rational" },
      { id: "c", text: "always an integer" },
      { id: "d", text: "sometimes undefined" }
    ],
    answerId: "a",
    explanation: "e.g. 2 + \u221a3 is irrational.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-b-q14",
    prompt: "HCF(a, b) = 18 and LCM(a, b) = 756. If a = 108, then b = \u2014",
    options: [
      { id: "a", text: "126" },
      { id: "b", text: "162" },
      { id: "c", text: "84" },
      { id: "d", text: "216" }
    ],
    answerId: "a",
    explanation: "a\u00d7b = HCF\u00d7LCM \u2192 108b = 18\u00d7756 = 13608 \u2192 b = 126.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-b-q15",
    prompt: "\u221a(0.09) equals \u2014",
    options: [
      { id: "a", text: "0.3" },
      { id: "b", text: "0.03" },
      { id: "c", text: "0.9" },
      { id: "d", text: "0.009" }
    ],
    answerId: "a",
    explanation: "\u221a0.09 = \u221a(9/100) = 3/10 = 0.3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-b-q16",
    prompt: "The smallest number by which 243 should be multiplied to get a perfect cube is \u2014",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "9" },
      { id: "c", text: "27" },
      { id: "d", text: "1" }
    ],
    answerId: "a",
    explanation: "243 = 3\u2075; need one more 3 to make 3\u2076 = (3\u00b2)\u00b3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-b-q17",
    prompt: "Which expansion terminates?",
    options: [
      { id: "a", text: "13/3125" },
      { id: "b", text: "17/6" },
      { id: "c", text: "19/3" },
      { id: "d", text: "11/14" }
    ],
    answerId: "a",
    explanation: "3125 = 5\u2075, so 13/3125 terminates; others have 3 or 7 in the denominator.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-b-q18",
    prompt: "\u221a2 is approximately 1.41. Then 5/\u221a2 \u2248 \u2014",
    options: [
      { id: "a", text: "3.55" },
      { id: "b", text: "2.82" },
      { id: "c", text: "7.05" },
      { id: "d", text: "1.41" }
    ],
    answerId: "a",
    explanation: "5/\u221a2 = (5\u221a2)/2 \u2248 5\u00d71.41/2 = 3.525 \u2248 3.55.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-b-q19",
    prompt: "If p is prime, then \u221a(p\u00b2) equals \u2014",
    options: [
      { id: "a", text: "p" },
      { id: "b", text: "p\u00b2" },
      { id: "c", text: "\u221ap" },
      { id: "d", text: "1/p" }
    ],
    answerId: "a",
    explanation: "\u221a(p\u00b2) = |p| = p for positive prime p.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-b-q20",
    prompt: "Two numbers are in ratio 3:5 and their HCF is 8. Their LCM is \u2014",
    options: [
      { id: "a", text: "120" },
      { id: "b", text: "40" },
      { id: "c", text: "24" },
      { id: "d", text: "200" }
    ],
    answerId: "a",
    explanation: "Numbers 24 and 40; LCM = 8\u00d73\u00d75 = 120.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-b-q21",
    prompt: "\u221a(9 + 16) equals \u2014",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "7" },
      { id: "c", text: "\u221a9 + \u221a16" },
      { id: "d", text: "25" }
    ],
    answerId: "a",
    explanation: "\u221a25 = 5. Note \u221a(9+16) \u2260 \u221a9+\u221a16.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-b-q22",
    prompt: "The fundamental theorem of arithmetic says every composite number \u2014",
    options: [
      { id: "a", text: "can be expressed as a product of primes uniquely (up to order)" },
      { id: "b", text: "has exactly two factors" },
      { id: "c", text: "is even" },
      { id: "d", text: "is a perfect square" }
    ],
    answerId: "a",
    explanation: "Unique prime factorisation (order ignored) is the fundamental theorem.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-b-q23",
    prompt: "If \u221a(x/y) = 4/5 and x + y = 82, then x \u2212 y equals \u2014",
    options: [
      { id: "a", text: "\u221218" },
      { id: "b", text: "18" },
      { id: "c", text: "0" },
      { id: "d", text: "32" }
    ],
    answerId: "a",
    explanation: "\u221a(x/y)=4/5 \u2192 x/y=16/25 \u2192 x=16k, y=25k; 41k=82 \u2192 k=2; x\u2212y=32\u221250=\u221218.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-b-q24",
    prompt: "If \u221a(2) \u2248 1.414, then 1/(\u221a2 \u2212 1) rationalised and approximated is closest to \u2014",
    options: [
      { id: "a", text: "2.414" },
      { id: "b", text: "0.414" },
      { id: "c", text: "1.414" },
      { id: "d", text: "3.414" }
    ],
    answerId: "a",
    explanation: "1/(\u221a2\u22121)\u00b7(\u221a2+1)/(\u221a2+1)=\u221a2+1\u22482.414.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83d\udd22",
    title: "Real Numbers",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "number-line",
    speak: "Real numbers include rationals and irrationals. Euclid helps find HCF.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "number-line",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Euclid", reveal: "a = bq + r with 0 \u2264 r < b", emoji: "\u2797" },
      { label: "HCF & LCM", reveal: "HCF \u00d7 LCM = a \u00d7 b", emoji: "\ud83d\udd17" },
      { label: "Decimals", reveal: "Terminate iff denom is 2\u1d505\u207f", emoji: "\ud83d\udd1f" },
      { label: "Irrationals", reveal: "\u221a2, \u03c0 \u2014 not p/q", emoji: "\u221e" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "HCF(12, 18) \u00d7 LCM(12, 18) equals?",
    options: [
        { id: "a", text: "216" },
        { id: "b", text: "30" },
        { id: "c", text: "6" },
        { id: "d", text: "36" }
    ],
    answerId: "a",
    why: "HCF=6, LCM=36, product 216 = 12\u00d718.",
    visual: "number-line",
    speak: "HCF(12, 18) \u00d7 LCM(12, 18) equals?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Real-number toolkit", "Euclid for HCF", "Watch 2 and 5 for decimals", "Surds simplify by perfect squares"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g10MathsRealNumbers: ChapterDef = {
  id: "real-numbers",
  title: "Real Numbers",
  emoji: "\ud83d\udd22",
  blurb: "Euclid, HCF/LCM & irrationals",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "fractions",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "fractions",
      questions: SET_B,
    },
  ],
  paperTopics: ["fractions", "linear-lite"],
};

export const g10MathsRealNumbersQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
