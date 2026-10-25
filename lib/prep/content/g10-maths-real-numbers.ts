import type { ChapterDef, PrepQuestion } from "../types";

/** Real Numbers - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g10-maths-real-a-q01",
    prompt: "Euclid's division lemma says that for positive integers a and b, there exist unique integers q and r such that a = bq + r, where \u2014",
    options: [
      { id: "a", text: "r \u2265 b" },
      { id: "b", text: "r can be any integer" },
      { id: "c", text: "0 \u2264 r < b" },
      { id: "d", text: "0 < r \u2264 b" }
    ],
    answerId: "c",
    explanation: "In a = bq + r the remainder r is at least 0 and less than b: if r were b or more, one more b could be taken out. '0 < r ≤ b' is tempting, but r is 0 when b divides a, and r can never equal b.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q02",
    prompt: "Using Euclid's algorithm, HCF(135, 225) equals \u2014",
    options: [
      { id: "a", text: "9" },
      { id: "b", text: "45" },
      { id: "c", text: "25" },
      { id: "d", text: "15" }
    ],
    answerId: "b",
    explanation: "225 = 135 × 1 + 90; 135 = 90 × 1 + 45; 90 = 45 × 2 + 0, so HCF = 45. 15 is tempting because it divides both numbers, but it is only a common factor; 45 also divides both and is larger.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q03",
    prompt: "If HCF(a, b) = 15 and a × b = 2250, then LCM(a, b) equals —",
    options: [
      { id: "a", text: "150" },
      { id: "b", text: "240" },
      { id: "c", text: "180" },
      { id: "d", text: "120" }
    ],
    answerId: "a",
    explanation: "HCF × LCM = a × b, so LCM = 2250 ÷ 15 = 150 (for example, a = 30 and b = 75). 120 is tempting, but 15 × 120 = 1800, not 2250, and 120 is not a multiple of 75.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q04",
    prompt: "The decimal expansion of 7/8 is \u2014",
    options: [
      { id: "a", text: "0.875 (terminating)" },
      { id: "b", text: "0.777\u2026" },
      { id: "c", text: "7.8" },
      { id: "d", text: "0.875 with bar (non-terminating)" }
    ],
    answerId: "a",
    explanation: "8 = 2³ has only the prime 2, so 7/8 terminates: 7/8 = 875/1000 = 0.875. '0.875 with bar' is tempting, but a fraction whose denominator has only 2s and 5s never repeats; 7.8 just writes the digits side by side.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q05",
    prompt: "Which of these is irrational?",
    options: [
      { id: "a", text: "0.25" },
      { id: "b", text: "\u221a9" },
      { id: "c", text: "\u221a2" },
      { id: "d", text: "22/7" }
    ],
    answerId: "c",
    explanation: "√2 cannot be written as p/q, so it is irrational. √9 is tempting because of the root sign, but √9 = 3 is rational, and 22/7 is a fraction, so it is rational too (it is only close to π).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q06",
    prompt: "\u221a(4 \u00d7 9) equals \u2014",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "36" },
      { id: "c", text: "\u221a13" },
      { id: "d", text: "6" }
    ],
    answerId: "d",
    explanation: "√(4 × 9) = √36 = 6, or √4 × √9 = 2 × 3 = 6. 36 is tempting, but that is 4 × 9 before taking the square root; 5 comes from adding √4 + √9 instead of multiplying.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q07",
    prompt: "2\u221a3 + 3\u221a3 equals \u2014",
    options: [
      { id: "a", text: "\u221a6" },
      { id: "b", text: "6\u221a3" },
      { id: "c", text: "5\u221a3" },
      { id: "d", text: "5\u221a6" }
    ],
    answerId: "c",
    explanation: "Like surds add like like terms: 2√3 + 3√3 = (2 + 3)√3 = 5√3. 5√6 is tempting, but the surd part stays √3 (√3 + √3 = 2√3, not √6); 6√3 multiplies 2 × 3 instead of adding.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q08",
    prompt: "After how many decimal places does the decimal expansion of 13/(2\u00b3 \u00d7 5\u00b2) end?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "3" },
      { id: "c", text: "2" },
      { id: "d", text: "6" }
    ],
    answerId: "b",
    explanation: "Multiply top and bottom by 5 to get 65/(2\u00b3 \u00d7 5\u00b3) = 65/1000 = 0.065, which ends after 3 places (the larger of the two powers). 5 is tempting, but you do not add the powers 3 + 2.",
    hints: ["Make the denominator a power of 10 by multiplying top and bottom by enough 5s. Which power of 10 do you get?"]
  },
  {
    id: "g10-maths-real-a-q09",
    prompt: "The HCF of 2\u00b3 \u00d7 3\u00b2 \u00d7 5 and 2\u00b2 \u00d7 3\u00b3 \u00d7 7 is \u2014",
    options: [
      { id: "a", text: "7560" },
      { id: "b", text: "216" },
      { id: "c", text: "1260" },
      { id: "d", text: "36" }
    ],
    answerId: "d",
    explanation: "Shared primes are 2 and 3; the smaller powers are 2\u00b2 and 3\u00b2, so the HCF is 2\u00b2 \u00d7 3\u00b2 = 36. 7560 is tempting, but that takes the larger powers of every prime: it is the LCM.",
    hints: ["For the HCF, keep only the primes both numbers share, each with its smaller power."]
  },
  {
    id: "g10-maths-real-a-q10",
    prompt: "The prime factorisation of 140 is \u2014",
    options: [
      { id: "a", text: "2 \u00d7 5 \u00d7 14" },
      { id: "b", text: "2\u00b2 \u00d7 35" },
      { id: "c", text: "2\u00b3 \u00d7 5 \u00d7 7" },
      { id: "d", text: "2\u00b2 \u00d7 5 \u00d7 7" }
    ],
    answerId: "d",
    explanation: "140 = 2 × 70 = 2 × 2 × 35 = 2² × 5 × 7, with every factor prime. 2² × 35 is tempting because it equals 140, but 35 = 5 × 7 is not prime, so the factorisation is not finished. 2³ × 5 × 7 = 280.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q11",
    prompt: "If two positive integers p and q can be expressed as p = ab\u00b2 and q = a\u00b3b (a, b primes), then LCM(p, q) is \u2014",
    options: [
      { id: "a", text: "ab" },
      { id: "b", text: "a\u00b2b\u00b2" },
      { id: "c", text: "a\u00b3b\u00b3" },
      { id: "d", text: "a\u00b3b\u00b2" }
    ],
    answerId: "d",
    explanation: "The LCM takes the highest power of each prime: a³ (from q) and b² (from p), giving a³b². ab is tempting, but taking the lowest powers gives the HCF, not the LCM.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q12",
    prompt: "HCF of 96 and 404 is \u2014",
    options: [
      { id: "a", text: "16" },
      { id: "b", text: "12" },
      { id: "c", text: "4" },
      { id: "d", text: "8" }
    ],
    answerId: "c",
    explanation: "404 = 96 × 4 + 20; 96 = 20 × 4 + 16; 20 = 16 × 1 + 4; 16 = 4 × 4 + 0, so HCF = 4. 16 is tempting because it appears as a remainder and divides 96, but 404 ÷ 16 = 25.25, so it does not divide 404.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q13",
    prompt: "\u221a8 / \u221a2 simplifies to \u2014",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "2√2" },
      { id: "c", text: "\u221a6" },
      { id: "d", text: "4" }
    ],
    answerId: "a",
    explanation: "√8 ÷ √2 = √(8 ÷ 2) = √4 = 2. 2√2 is tempting, but that is √8 on its own before dividing by √2; √6 wrongly uses 8 − 2 under the root.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q14",
    prompt: "An irrational number between 2 and 3 is \u2014",
    options: [
      { id: "a", text: "\u221a5" },
      { id: "b", text: "2.5" },
      { id: "c", text: "\u221a4" },
      { id: "d", text: "5/2" }
    ],
    answerId: "a",
    explanation: "√5 ≈ 2.236 lies between 2 and 3, and 5 is not a perfect square, so √5 is irrational. 2.5 is tempting because it lies between 2 and 3, but 2.5 = 5/2 is rational; √4 = 2 is rational and not between them.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q15",
    prompt: "0.123123123\u2026 (repeating \"123\") as a fraction is \u2014",
    options: [
      { id: "a", text: "123/1000" },
      { id: "b", text: "123/999" },
      { id: "c", text: "12/99" },
      { id: "d", text: "123/99" }
    ],
    answerId: "b",
    explanation: "Let x = 0.123123…; then 1000x = 123.123…, so 1000x − x = 123 and x = 123/999. 123/1000 is tempting, but that is 0.123 exactly, which stops instead of repeating.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q16",
    prompt: "The sum of a rational number and an irrational number is always \u2014",
    options: [
      { id: "a", text: "an integer" },
      { id: "b", text: "irrational" },
      { id: "c", text: "rational" },
      { id: "d", text: "zero" }
    ],
    answerId: "b",
    explanation: "If r + x were rational for rational r and irrational x, then x = (r + x) \u2212 r would be rational, which is impossible. So the sum is irrational, e.g. 2 + \u221a3. \u201cRational\u201d is tempting by thinking of \u221a2 + (\u2212\u221a2) = 0, but \u2212\u221a2 is irrational, not rational.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q17",
    prompt: "\u221a(50) in simplest form is \u2014",
    options: [
      { id: "a", text: "2\u221a5" },
      { id: "b", text: "5\u221a2" },
      { id: "c", text: "25\u221a2" },
      { id: "d", text: "10\u221a5" }
    ],
    answerId: "b",
    explanation: "√50 = √(25 × 2) = √25 × √2 = 5√2. 25√2 is tempting, but 25 comes out of the root as √25 = 5; 2√5 is √20.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q18",
    prompt: "If n is a natural number, then \u221an is \u2014",
    options: [
      { id: "a", text: "always rational" },
      { id: "b", text: "always irrational" },
      { id: "c", text: "always integer" },
      { id: "d", text: "either integer or irrational" }
    ],
    answerId: "d",
    explanation: "If n is a perfect square, √n is an integer, such as √9 = 3; otherwise √n is irrational, such as √2. 'Always irrational' is tempting, but it fails for perfect squares like 4, 9 and 16.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q19",
    prompt: "LCM of 12, 15 and 21 is \u2014",
    options: [
      { id: "a", text: "180" },
      { id: "b", text: "420" },
      { id: "c", text: "60" },
      { id: "d", text: "210" }
    ],
    answerId: "b",
    explanation: "12 = 2² × 3, 15 = 3 × 5 and 21 = 3 × 7, so LCM = 2² × 3 × 5 × 7 = 420. 210 is tempting, but it uses only one 2, and 210 is not divisible by 12.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q20",
    prompt: "Which of the following has a non-terminating repeating decimal expansion?",
    options: [
      { id: "a", text: "1/5" },
      { id: "b", text: "3/8" },
      { id: "c", text: "1/6" },
      { id: "d", text: "7/25" }
    ],
    answerId: "c",
    explanation: "1/6 = 0.1666…, which repeats because 6 = 2 × 3 has the prime 3. 3/8 is tempting, but 8 = 2³ has only 2s, so 3/8 = 0.375 terminates; 1/5 and 7/25 also terminate.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q21",
    prompt: "\u221a3 \u00d7 \u221a12 equals \u2014",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "\u221a15" },
      { id: "c", text: "3\u221a2" },
      { id: "d", text: "\u221a36 / 2" }
    ],
    answerId: "a",
    explanation: "√3 × √12 = √(3 × 12) = √36 = 6. √15 is tempting, but it adds 3 + 12 instead of multiplying them; √36 / 2 is only 3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q22",
    prompt: "The HCF of two co-prime numbers is \u2014",
    options: [
      { id: "a", text: "their sum" },
      { id: "b", text: "0" },
      { id: "c", text: "their product" },
      { id: "d", text: "1" }
    ],
    answerId: "d",
    explanation: "Co-prime numbers share no common factor except 1, so their HCF is 1. 'Their product' is tempting, but that is their LCM: for 4 and 9, HCF = 1 while LCM = 36.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q23",
    prompt: "If \u221a2 = 1.414\u2026, then \u221a8 \u2248 \u2014",
    options: [
      { id: "a", text: "2.828" },
      { id: "b", text: "4.242" },
      { id: "c", text: "3.162" },
      { id: "d", text: "1.414" }
    ],
    answerId: "a",
    explanation: "√8 = √(4 × 2) = 2√2 ≈ 2 × 1.414 = 2.828. 4.242 is tempting, but that is 3√2 = √18; 1.414 is √2 itself.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-a-q24",
    prompt: "For positive integers a, b: HCF(a, b) \u00d7 LCM(a, b) equals \u2014",
    options: [
      { id: "a", text: "a \u2212 b" },
      { id: "b", text: "a / b" },
      { id: "c", text: "a \u00d7 b" },
      { id: "d", text: "a + b" }
    ],
    answerId: "c",
    explanation: "For two positive integers, HCF × LCM = a × b. For 4 and 6, HCF = 2 and LCM = 12, and 2 × 12 = 24 = 4 × 6. 'a + b' is tempting, but for 4 and 6 it gives 10, not 24.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g10-maths-real-b-q01",
    prompt: "Find HCF(867, 255) using Euclid's algorithm.",
    options: [
      { id: "a", text: "85" },
      { id: "b", text: "51" },
      { id: "c", text: "3" },
      { id: "d", text: "17" }
    ],
    answerId: "b",
    explanation: "867 = 255 × 3 + 102; 255 = 102 × 2 + 51; 102 = 51 × 2 + 0, so HCF = 51. 17 is tempting because it divides both numbers, but 51 = 3 × 17 also divides both and is larger.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-b-q02",
    prompt: "The least number divisible by 12, 16 and 20 is \u2014",
    options: [
      { id: "a", text: "240" },
      { id: "b", text: "120" },
      { id: "c", text: "60" },
      { id: "d", text: "180" }
    ],
    answerId: "a",
    explanation: "The least number divisible by all three is their LCM: 12 = 2² × 3, 16 = 2⁴ and 20 = 2² × 5, so LCM = 2⁴ × 3 × 5 = 240. 120 is tempting, but 120 ÷ 16 = 7.5, so it is not divisible by 16.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-b-q03",
    prompt: "\u221a(18/50) simplifies to \u2014",
    options: [
      { id: "a", text: "\u221a18 / 50" },
      { id: "b", text: "3/5" },
      { id: "c", text: "3\u221a2 / 5" },
      { id: "d", text: "9/25" }
    ],
    answerId: "b",
    explanation: "18/50 = 9/25, so √(18/50) = √9 ÷ √25 = 3/5. 9/25 is tempting, but that is the fraction before taking the square root; 3√2 / 5 forgets that the 2 in 18 cancels with 50.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-b-q04",
    prompt: "Using Euclid's division lemma, 400 = 17q + r with 0 \u2264 r < 17. What is r?",
    options: [
      { id: "a", text: "23" },
      { id: "b", text: "0" },
      { id: "c", text: "17" },
      { id: "d", text: "9" }
    ],
    answerId: "d",
    explanation: "17 \u00d7 23 = 391 and 400 \u2212 391 = 9, so r = 9. 23 is tempting, but that is the quotient q, not the remainder.",
    hints: ["Find the biggest multiple of 17 that is not more than 400. r is what is left over."]
  },
  {
    id: "g10-maths-real-b-q05",
    prompt: "Using Euclid's algorithm, HCF(65, 117) = 13. Expressing 13 = 65x + 117y, one possible x is \u2014",
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "2" },
      { id: "c", text: "3" },
      { id: "d", text: "\u22121" }
    ],
    answerId: "b",
    explanation: "Back-substitution gives 13 = 2 × 65 + (−1) × 117 = 130 − 117, so x = 2. −1 is tempting, but −1 is the value of y, the multiplier of 117.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-b-q06",
    prompt: "The decimal 0.6\u0305 (0.666\u2026) equals \u2014",
    options: [
      { id: "a", text: "6/10" },
      { id: "b", text: "1/6" },
      { id: "c", text: "3/5" },
      { id: "d", text: "2/3" }
    ],
    answerId: "d",
    explanation: "Let x = 0.666…; then 10x − x = 6.666… − 0.666… = 6, so 9x = 6 and x = 6/9 = 2/3. 6/10 is tempting, but that is 0.6 exactly, which stops instead of repeating.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-b-q07",
    prompt: "\u221a75 \u2212 \u221a12 equals \u2014",
    options: [
      { id: "a", text: "3\u221a3" },
      { id: "b", text: "7\u221a3" },
      { id: "c", text: "\u221a87" },
      { id: "d", text: "\u221a63" }
    ],
    answerId: "a",
    explanation: "√75 = √(25 × 3) = 5√3 and √12 = √(4 × 3) = 2√3, so √75 − √12 = 3√3. √63 is tempting, but you cannot subtract under the roots: √75 − √12 is not √(75 − 12). 7√3 adds instead of subtracting.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-b-q08",
    prompt: "A number when divided by 61 gives remainder 37. What remainder does it leave when divided by 61 again after adding 24?",
    options: [
      { id: "a", text: "61" },
      { id: "b", text: "24" },
      { id: "c", text: "0" },
      { id: "d", text: "37" }
    ],
    answerId: "c",
    explanation: "The number is n = 61q + 37. Adding 24 gives 61q + 61 = 61(q + 1), so the remainder is 0. 61 is tempting, but a remainder on dividing by 61 must be less than 61; 37 ignores the added 24.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-b-q09",
    prompt: "Which of the following is true for every prime p?",
    options: [
      { id: "a", text: "\u221ap is rational" },
      { id: "b", text: "\u221ap is irrational" },
      { id: "c", text: "p divides 1" },
      { id: "d", text: "p is even" }
    ],
    answerId: "b",
    explanation: "A prime p is never a perfect square, since its only factors are 1 and p, so √p is irrational. 'p is even' is tempting because 2 is prime, but 3, 5 and 7 are odd primes.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-b-q10",
    prompt: "The product (\u221a5 \u2212 \u221a2)(\u221a5 + \u221a2) equals \u2014",
    options: [
      { id: "a", text: "\u221a10" },
      { id: "b", text: "7" },
      { id: "c", text: "\u221a3" },
      { id: "d", text: "3" }
    ],
    answerId: "d",
    explanation: "(√5 − √2)(√5 + √2) = (√5)² − (√2)² = 5 − 2 = 3. 7 is tempting, but it adds the squares instead of subtracting them; √3 keeps a root, but squaring removes the roots.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-b-q11",
    prompt: "If n = 2\u00b3 \u00d7 3\u00b2 \u00d7 5, how many trailing zeros does n have in base 10?",
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "1" },
      { id: "c", text: "2" },
      { id: "d", text: "3" }
    ],
    answerId: "b",
    explanation: "n = 2³ × 3² × 5 = 360. Each trailing zero needs one 2 and one 5, and n has only one 5, so it has one trailing zero. 3 is tempting from the three 2s, but each zero also needs a 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-b-q12",
    prompt: "Rationalise: 3/(\u221a7 \u2212 \u221a2).",
    options: [
      { id: "a", text: "(\u221a7+\u221a2)/5" },
      { id: "b", text: "3(\u221a7+\u221a2)/9" },
      { id: "c", text: "3(\u221a7+\u221a2)/5" },
      { id: "d", text: "3(\u221a7\u2212\u221a2)/5" }
    ],
    answerId: "c",
    explanation: "Multiply top and bottom by √7 + √2: the bottom becomes 7 − 2 = 5, so the answer is 3(√7 + √2)/5. (√7 + √2)/5 is tempting, but it loses the 3 in the numerator; 3(√7 + √2)/9 uses 7 + 2 instead of 7 − 2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-b-q13",
    prompt: "In the prime factorisation of 360, how many prime factors are there when repeated factors are counted?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "4" },
      { id: "c", text: "5" },
      { id: "d", text: "6" }
    ],
    answerId: "d",
    explanation: "360 = 2 \u00d7 2 \u00d7 2 \u00d7 3 \u00d7 3 \u00d7 5 = 2\u00b3 \u00d7 3\u00b2 \u00d7 5, so there are 3 + 2 + 1 = 6 prime factors when repeats are counted. 3 is tempting, but that counts only the different primes 2, 3 and 5.",
    hints: ["Keep dividing 360 by the smallest prime that works, and count every division you make."]
  },
  {
    id: "g10-maths-real-b-q14",
    prompt: "HCF(a, b) = 18 and LCM(a, b) = 756. If a = 108, then b = \u2014",
    options: [
      { id: "a", text: "162" },
      { id: "b", text: "216" },
      { id: "c", text: "126" },
      { id: "d", text: "84" }
    ],
    answerId: "c",
    explanation: "HCF × LCM = a × b, so 108b = 18 × 756 = 13,608 and b = 126. Check: HCF(108, 126) = 18. 162 is tempting, but HCF(108, 162) = 54, not 18.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-b-q15",
    prompt: "For which natural number n does 4\u207f end with the digit 0?",
    options: [
      { id: "a", text: "No natural number n" },
      { id: "b", text: "n = 10" },
      { id: "c", text: "n = 5" },
      { id: "d", text: "Every even n" }
    ],
    answerId: "a",
    explanation: "4\u207f = 2\u00b2\u207f has only the prime 2, never 5, so it can never end in 0. n = 10 is tempting because 10 ends in 0, but 4\u00b9\u2070 = 1,048,576 ends in 6.",
    hints: ["A number ending in 0 has both 2 and 5 as prime factors. Which primes can 4\u207f have?"]
  },
  {
    id: "g10-maths-real-b-q16",
    prompt: "The smallest number by which 243 should be multiplied to get a perfect cube is \u2014",
    options: [
      { id: "a", text: "9" },
      { id: "b", text: "27" },
      { id: "c", text: "3" },
      { id: "d", text: "1" }
    ],
    answerId: "c",
    explanation: "243 = 3⁵. A perfect cube needs every power to be a multiple of 3, so one more 3 makes 3⁶ = 729 = 9³. 9 is tempting, but 243 × 9 = 3⁷, which is not a cube.",
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
    explanation: "3125 = 5⁵ has only the prime 5, so 13/3125 terminates (it is 0.00416). 11/14 is tempting because 14 contains a 2, but its other factor 7 makes it repeat; 17/6 and 19/3 have a 3 in the denominator.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-b-q18",
    prompt: "\u221a2 is approximately 1.41. Then 5/\u221a2 \u2248 \u2014",
    options: [
      { id: "a", text: "7.05" },
      { id: "b", text: "1.41" },
      { id: "c", text: "2.82" },
      { id: "d", text: "3.55" }
    ],
    answerId: "d",
    explanation: "5/√2 = 5√2/2 ≈ 5 × 1.41 ÷ 2 ≈ 3.53, so 3.55 is the closest option. 7.05 is tempting, but that is 5 × 1.41: you must divide by √2, not multiply.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-b-q19",
    prompt: "If p is prime, then \u221a(p\u00b2) equals \u2014",
    options: [
      { id: "a", text: "1/p" },
      { id: "b", text: "\u221ap" },
      { id: "c", text: "p\u00b2" },
      { id: "d", text: "p" }
    ],
    answerId: "d",
    explanation: "√(p²) = p, because p is positive and p × p = p². √p is tempting, but √p × √p = p, not p².",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-b-q20",
    prompt: "Two numbers are in ratio 3:5 and their HCF is 8. Their LCM is \u2014",
    options: [
      { id: "a", text: "120" },
      { id: "b", text: "200" },
      { id: "c", text: "40" },
      { id: "d", text: "24" }
    ],
    answerId: "a",
    explanation: "With ratio 3 : 5 and HCF 8, the numbers are 3 × 8 = 24 and 5 × 8 = 40, so LCM = 8 × 3 × 5 = 120. 40 is tempting, but it is only the larger number, and 40 is not a multiple of 24.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-b-q21",
    prompt: "\u221a(9 + 16) equals \u2014",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "\u221a9 + \u221a16" },
      { id: "c", text: "7" },
      { id: "d", text: "25" }
    ],
    answerId: "a",
    explanation: "√(9 + 16) = √25 = 5. 7 is tempting, but √9 + √16 = 3 + 4 adds the roots; the square root of a sum is not the sum of the square roots.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-b-q22",
    prompt: "The fundamental theorem of arithmetic says every composite number \u2014",
    options: [
      { id: "a", text: "is a perfect square" },
      { id: "b", text: "has exactly two factors" },
      { id: "c", text: "can be expressed as a product of primes uniquely (up to order)" },
      { id: "d", text: "is even" }
    ],
    answerId: "c",
    explanation: "The fundamental theorem of arithmetic says every composite number can be written as a product of primes in exactly one way, apart from order: for example, 60 = 2² × 3 × 5. 'Is even' is tempting, but 9 and 15 are odd composite numbers.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-b-q23",
    prompt: "If \u221a(x/y) = 4/5 and x + y = 82, then x \u2212 y equals \u2014",
    options: [
      { id: "a", text: "18" },
      { id: "b", text: "32" },
      { id: "c", text: "\u221218" },
      { id: "d", text: "0" }
    ],
    answerId: "c",
    explanation: "√(x/y) = 4/5 gives x/y = 16/25, so x = 16k and y = 25k. Then 41k = 82, so k = 2, x = 32, y = 50 and x − y = −18. 18 is tempting, but y is larger than x, so x − y is negative.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-maths-real-b-q24",
    prompt: "If \u221a(2) \u2248 1.414, then 1/(\u221a2 \u2212 1) rationalised and approximated is closest to \u2014",
    options: [
      { id: "a", text: "0.414" },
      { id: "b", text: "2.414" },
      { id: "c", text: "3.414" },
      { id: "d", text: "1.414" }
    ],
    answerId: "b",
    explanation: "Multiply by (√2 + 1)/(√2 + 1): 1/(√2 − 1) = (√2 + 1)/(2 − 1) = √2 + 1 ≈ 2.414. 0.414 is tempting, but that is √2 − 1, the denominator itself, not its reciprocal.",
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
