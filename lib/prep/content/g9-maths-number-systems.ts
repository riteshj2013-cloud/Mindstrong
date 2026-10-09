import type { ChapterDef, PrepQuestion } from "../types";

/** Number Systems - authored olympiad-style content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g9-maths-numbers-a-q01",
    prompt: "Which of the following is an irrational number?",
    options: [
      { id: "a", text: "√9" },
      { id: "b", text: "0.25" },
      { id: "c", text: "√2" },
      { id: "d", text: "7/3" }
    ],
    answerId: "c",
    explanation: "√2 cannot be written as p/q in lowest terms; √9 = 3 and 0.25 = 1/4 are rational.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-a-q02",
    prompt: "Every rational number can also be called a…",
    options: [
      { id: "a", text: "natural number" },
      { id: "b", text: "integer" },
      { id: "c", text: "real number" },
      { id: "d", text: "whole number only" }
    ],
    answerId: "c",
    explanation: "Rationals sit inside the reals. Not every rational is a natural number or integer.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-a-q03",
    prompt: "The decimal expansion of 1/8 is…",
    options: [
      { id: "a", text: "0.125 (terminating)" },
      { id: "b", text: "0.121212… (non-terminating repeating)" },
      { id: "c", text: "0.1121121112… (non-repeating)" },
      { id: "d", text: "√2" }
    ],
    answerId: "a",
    explanation: "1 ÷ 8 = 0.125 exactly, so the expansion terminates.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-a-q04",
    prompt: "A number whose decimal is non-terminating and non-repeating must be…",
    options: [
      { id: "a", text: "rational" },
      { id: "b", text: "irrational" },
      { id: "c", text: "an integer" },
      { id: "d", text: "a whole number" }
    ],
    answerId: "b",
    explanation: "Non-terminating non-repeating decimals define irrational numbers.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-a-q05",
    prompt: "Between 2 and 3 there are…",
    options: [
      { id: "a", text: "no rational numbers" },
      { id: "b", text: "exactly one rational" },
      { id: "c", text: "exactly two rationals" },
      { id: "d", text: "infinitely many rationals" }
    ],
    answerId: "d",
    explanation: "Between any two distinct reals there are infinitely many rationals (and irrationals).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-a-q06",
    prompt: "√(16/25) simplifies to…",
    options: [
      { id: "a", text: "4/5" },
      { id: "b", text: "16/25" },
      { id: "c", text: "4/25" },
      { id: "d", text: "8/5" }
    ],
    answerId: "a",
    explanation: "√(16/25) = √16 / √25 = 4/5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-a-q07",
    prompt: "Which statement is true?",
    options: [
      { id: "a", text: "Every integer is irrational" },
      { id: "b", text: "Every real number is rational" },
      { id: "c", text: "Every natural number is a whole number" },
      { id: "d", text: "0 is not a real number" }
    ],
    answerId: "c",
    explanation: "Natural numbers are 1,2,3,… and wholes add 0, so every natural is whole.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-a-q08",
    prompt: "The rationalising factor of √3 is…",
    options: [
      { id: "a", text: "√3" },
      { id: "b", text: "3" },
      { id: "c", text: "1/3" },
      { id: "d", text: "√2" }
    ],
    answerId: "a",
    explanation: "√3 × √3 = 3, a rational number, so √3 rationalises √3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-a-q09",
    prompt: "0.¯6 (0.666…) equals…",
    options: [
      { id: "a", text: "6/9" },
      { id: "b", text: "2/3" },
      { id: "c", text: "both A and B (since 6/9 = 2/3)" },
      { id: "d", text: "6/10" }
    ],
    answerId: "c",
    explanation: "0.¯6 = 6/9 = 2/3, so both equivalent fraction forms are correct.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-a-q10",
    prompt: "Which is a terminating decimal?",
    options: [
      { id: "a", text: "1/3" },
      { id: "b", text: "1/6" },
      { id: "c", text: "1/7" },
      { id: "d", text: "1/5" }
    ],
    answerId: "d",
    explanation: "1/5 = 0.2. A fraction in lowest terms terminates iff the denominator’s primes are only 2 and/or 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-a-q11",
    prompt: "√8 simplified in simplest radical form is…",
    options: [
      { id: "a", text: "2√2" },
      { id: "b", text: "4√2" },
      { id: "c", text: "√4 · √2 = 2√2 only if written 2√2" },
      { id: "d", text: "8" }
    ],
    answerId: "a",
    explanation: "√8 = √(4·2) = 2√2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-a-q12",
    prompt: "If x = √5 + √3 and y = √5 − √3, then xy equals…",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "8" },
      { id: "c", text: "√15" },
      { id: "d", text: "√5 − √3" }
    ],
    answerId: "a",
    explanation: "xy = (√5)² − (√3)² = 5 − 3 = 2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-a-q13",
    prompt: "On the number line, √2 lies between…",
    options: [
      { id: "a", text: "0 and 1" },
      { id: "b", text: "1 and 2" },
      { id: "c", text: "2 and 3" },
      { id: "d", text: "3 and 4" }
    ],
    answerId: "b",
    explanation: "1² = 1 and 2² = 4, so √2 ≈ 1.414 lies between 1 and 2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-a-q14",
    prompt: "Which law is correct for positive real a and integers m, n?",
    options: [
      { id: "a", text: "a^m * a^n = a^(m+n)" },
      { id: "b", text: "a^m * a^n = a^(m*n)" },
      { id: "c", text: "a^m * a^n = a^(m-n)" },
      { id: "d", text: "(a^m)^n = a^(m+n)" }
    ],
    answerId: "a",
    explanation: "When multiplying same bases, add exponents: a^m * a^n = a^(m+n).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-a-q15",
    prompt: "(√7 − √5)(√7 + √5) equals…",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "12" },
      { id: "c", text: "√35" },
      { id: "d", text: "−2" }
    ],
    answerId: "a",
    explanation: "Difference of squares: 7 − 5 = 2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-a-q16",
    prompt: "Which number is rational?",
    options: [
      { id: "a", text: "π" },
      { id: "b", text: "√7" },
      { id: "c", text: "0.101001000100001… (pattern of growing zeros)" },
      { id: "d", text: "0.¯27" }
    ],
    answerId: "d",
    explanation: "0.¯27 = 27/99 is a repeating decimal, hence rational. The others are irrational.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-a-q17",
    prompt: "Rationalising the denominator of 1/√5 gives…",
    options: [
      { id: "a", text: "√5 / 5" },
      { id: "b", text: "5/√5" },
      { id: "c", text: "√5" },
      { id: "d", text: "1/5" }
    ],
    answerId: "a",
    explanation: "Multiply numerator and denominator by √5: √5 / 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-a-q18",
    prompt: "If 2ˣ = 32, then x equals…",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "5" },
      { id: "c", text: "6" },
      { id: "d", text: "16" }
    ],
    answerId: "b",
    explanation: "32 = 2⁵, so x = 5.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-a-q19",
    prompt: "The product of a non-zero rational and an irrational number is…",
    options: [
      { id: "a", text: "always rational" },
      { id: "b", text: "always irrational" },
      { id: "c", text: "always an integer" },
      { id: "d", text: "sometimes zero" }
    ],
    answerId: "b",
    explanation: "For non-zero rational r and irrational α, rα is irrational (else α would be rational).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-a-q20",
    prompt: "√(0.09) equals…",
    options: [
      { id: "a", text: "0.3" },
      { id: "b", text: "0.03" },
      { id: "c", text: "0.9" },
      { id: "d", text: "3" }
    ],
    answerId: "a",
    explanation: "0.09 = 9/100, and √(9/100) = 3/10 = 0.3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-a-q21",
    prompt: "Which expression equals (3²)³?",
    options: [
      { id: "a", text: "3⁵" },
      { id: "b", text: "3⁶" },
      { id: "c", text: "9³" },
      { id: "d", text: "both B and C" }
    ],
    answerId: "d",
    explanation: "(3²)³ = 3⁶ and 9³ = (3²)³ = 3⁶, so both B and C.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-a-q22",
    prompt: "An example of a number that is real but not rational is…",
    options: [
      { id: "a", text: "−4" },
      { id: "b", text: "22/7" },
      { id: "c", text: "√11" },
      { id: "d", text: "0" }
    ],
    answerId: "c",
    explanation: "√11 is irrational (hence real but not rational). −4, 22/7 and 0 are rational.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-a-q23",
    prompt: "Simplify: √50 − √18 + √8",
    options: [
      { id: "a", text: "4√2" },
      { id: "b", text: "3√2" },
      { id: "c", text: "2√2" },
      { id: "d", text: "5√2" }
    ],
    answerId: "a",
    explanation: "√50=5√2, √18=3√2, √8=2√2 → 5√2 − 3√2 + 2√2 = 4√2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-a-q24",
    prompt: "If a = 2 + √3, then 1/a equals…",
    options: [
      { id: "a", text: "2 − √3" },
      { id: "b", text: "√3 − 2" },
      { id: "c", text: "2 + √3" },
      { id: "d", text: "1/(2−√3) only, not simplified" }
    ],
    answerId: "a",
    explanation: "Rationalise: 1/(2+√3) · (2−√3)/(2−√3) = 2−√3, since (2)²−(√3)²=1.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g9-maths-numbers-b-q01",
    prompt: "Which of these is NOT a real number in the usual school number system?",
    options: [
      { id: "a", text: "√(−4) interpreted as a real square root" },
      { id: "b", text: "√4" },
      { id: "c", text: "−√9" },
      { id: "d", text: "0.¯3" }
    ],
    answerId: "a",
    explanation: "The square root of a negative is not real; √4=2 and −√9=−3 are real.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-b-q02",
    prompt: "The decimal 0.125125125… (repeating “125”) is…",
    options: [
      { id: "a", text: "irrational" },
      { id: "b", text: "rational" },
      { id: "c", text: "an integer" },
      { id: "d", text: "not a real number" }
    ],
    answerId: "b",
    explanation: "A repeating block means a rational number (equal to 125/999).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-b-q03",
    prompt: "√(49/64) equals…",
    options: [
      { id: "a", text: "7/8" },
      { id: "b", text: "49/64" },
      { id: "c", text: "7/64" },
      { id: "d", text: "√7 / 8" }
    ],
    answerId: "a",
    explanation: "√49/√64 = 7/8.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-b-q04",
    prompt: "Which set is densest in the sense that between any two members there is another of the same set?",
    options: [
      { id: "a", text: "Natural numbers" },
      { id: "b", text: "Integers" },
      { id: "c", text: "Even integers" },
      { id: "d", text: "Rational numbers" }
    ],
    answerId: "d",
    explanation: "Rationals (and reals) are dense; integers have gaps of size 1.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-b-q05",
    prompt: "Rationalise 3/(√7 − √5).",
    options: [
      { id: "a", text: "(3/2)(√7 + √5)" },
      { id: "b", text: "(3/2)(√7 − √5)" },
      { id: "c", text: "3(√7 + √5)" },
      { id: "d", text: "√7 + √5" }
    ],
    answerId: "a",
    explanation: "Multiply by √7+√5: numerator 3(√7+√5), denominator 7−5=2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-b-q06",
    prompt: "If 5ˣ⁺¹ = 125, then x equals…",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "2" },
      { id: "c", text: "3" },
      { id: "d", text: "4" }
    ],
    answerId: "b",
    explanation: "125 = 5³, so x+1 = 3 and x = 2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-b-q07",
    prompt: "√12 + √27 equals…",
    options: [
      { id: "a", text: "5√3" },
      { id: "b", text: "√39" },
      { id: "c", text: "3√3" },
      { id: "d", text: "√3" }
    ],
    answerId: "a",
    explanation: "√12=2√3 and √27=3√3, so the sum is 5√3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-b-q08",
    prompt: "Which fraction has a terminating decimal expansion?",
    options: [
      { id: "a", text: "13/80" },
      { id: "b", text: "7/12" },
      { id: "c", text: "11/14" },
      { id: "d", text: "5/6" }
    ],
    answerId: "a",
    explanation: "80 = 2⁴·5, so after simplifying, only primes 2 and 5 remain → terminating.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-b-q09",
    prompt: "π − 22/7 is…",
    options: [
      { id: "a", text: "rational" },
      { id: "b", text: "irrational" },
      { id: "c", text: "zero" },
      { id: "d", text: "an integer" }
    ],
    answerId: "b",
    explanation: "π is irrational and 22/7 is rational; their difference is irrational (and not zero).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-b-q10",
    prompt: "(√2)⁶ equals…",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "8" },
      { id: "c", text: "16" },
      { id: "d", text: "2√2" }
    ],
    answerId: "b",
    explanation: "(√2)⁶ = (2^{1/2})⁶ = 2³ = 8.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-b-q11",
    prompt: "The number 0.101001000100001… (one more zero between 1s each time) is…",
    options: [
      { id: "a", text: "rational" },
      { id: "b", text: "irrational" },
      { id: "c", text: "terminating" },
      { id: "d", text: "repeating" }
    ],
    answerId: "b",
    explanation: "The gaps grow without a repeating block, so the decimal is non-repeating → irrational.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-b-q12",
    prompt: "If x = 2 + √3, then x · (2 − √3) equals…",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "7" },
      { id: "c", text: "4 − 2√3" },
      { id: "d", text: "√3" }
    ],
    answerId: "a",
    explanation: "(2+√3)(2−√3) = 4 − 3 = 1.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-b-q13",
    prompt: "Which is correct?",
    options: [
      { id: "a", text: "√(a+b) = √a + √b for all positive a,b" },
      { id: "b", text: "√(a·b) = √a · √b for non-negative a,b" },
      { id: "c", text: "√(a−b) = √a − √b always" },
      { id: "d", text: "(√a)² = −a" }
    ],
    answerId: "b",
    explanation: "The product rule √(ab)=√a√b holds for non-negative a,b; sums do not split that way.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-b-q14",
    prompt: "Locate which integer pair traps √10.",
    options: [
      { id: "a", text: "2 and 3" },
      { id: "b", text: "3 and 4" },
      { id: "c", text: "4 and 5" },
      { id: "d", text: "1 and 2" }
    ],
    answerId: "b",
    explanation: "3²=9 and 4²=16, so √10 ≈ 3.16 lies between 3 and 4.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-b-q15",
    prompt: "2⁻³ equals…",
    options: [
      { id: "a", text: "−8" },
      { id: "b", text: "−1/8" },
      { id: "c", text: "1/8" },
      { id: "d", text: "8" }
    ],
    answerId: "c",
    explanation: "2⁻³ = 1/2³ = 1/8.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-b-q16",
    prompt: "The additive inverse of √5 − 2 is…",
    options: [
      { id: "a", text: "√5 + 2" },
      { id: "b", text: "2 − √5" },
      { id: "c", text: "−√5 − 2" },
      { id: "d", text: "1/(√5 − 2)" }
    ],
    answerId: "b",
    explanation: "Adding 2 − √5 cancels: (√5 − 2) + (2 − √5) = 0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-b-q17",
    prompt: "Simplify (√18 / √8).",
    options: [
      { id: "a", text: "3/2" },
      { id: "b", text: "√(9/4) = 3/2" },
      { id: "c", text: "both A and B" },
      { id: "d", text: "√2" }
    ],
    answerId: "c",
    explanation: "√18/√8 = √(18/8) = √(9/4) = 3/2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-b-q18",
    prompt: "Which number is an integer but not a whole number?",
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "5" },
      { id: "c", text: "−3" },
      { id: "d", text: "12" }
    ],
    answerId: "c",
    explanation: "Whole numbers are 0,1,2,…; −3 is an integer but not whole.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-b-q19",
    prompt: "If √(x − 1) = 3, then x equals…",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "10" },
      { id: "c", text: "9" },
      { id: "d", text: "4" }
    ],
    answerId: "b",
    explanation: "Square both sides: x − 1 = 9 → x = 10.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-b-q20",
    prompt: "(5√2)² equals…",
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "50" },
      { id: "c", text: "25√2" },
      { id: "d", text: "5√4" }
    ],
    answerId: "b",
    explanation: "(5√2)² = 25 · 2 = 50.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-b-q21",
    prompt: "A number of the form p/q with p, q integers and q ≠ 0 is called…",
    options: [
      { id: "a", text: "irrational" },
      { id: "b", text: "rational" },
      { id: "c", text: "transcendental only" },
      { id: "d", text: "natural only" }
    ],
    answerId: "b",
    explanation: "That is the definition of a rational number.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-b-q22",
    prompt: "Which equals 8^{2/3}?",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "2" },
      { id: "c", text: "16" },
      { id: "d", text: "64" }
    ],
    answerId: "a",
    explanation: "8^{2/3} = (8^{1/3})² = 2² = 4.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-b-q23",
    prompt: "√(72) in simplest form is…",
    options: [
      { id: "a", text: "6√2" },
      { id: "b", text: "8√2" },
      { id: "c", text: "36√2" },
      { id: "d", text: "12√3" }
    ],
    answerId: "a",
    explanation: "√72 = √(36·2) = 6√2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g9-maths-numbers-b-q24",
    prompt: "If a > 0, then √a · √a equals…",
    options: [
      { id: "a", text: "a" },
      { id: "b", text: "√a" },
      { id: "c", text: "a²" },
      { id: "d", text: "2√a" }
    ],
    answerId: "a",
    explanation: "√a · √a = a for a ≥ 0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "🔢",
    title: "Number systems",
    body: ["From naturals to reals — and the irrationals that fill the gaps.", "Decimals, surds and exponent laws help you move fluently.", "Lesson is optional; jump to a set anytime."],
    cta: "Let's go!",
    visual: "number-line",
    speak: "Today we map the number systems and learn to work with surds and exponents.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "number-line",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Rationals", reveal: "p/q form; terminating or repeating decimals", emoji: "➗" },
      { label: "Irrationals", reveal: "Non-repeating, non-terminating decimals", emoji: "∞" },
      { label: "Surds", reveal: "Simplify and rationalise denominators", emoji: "√" },
      { label: "Exponents", reveal: "Same base: add, subtract, multiply powers", emoji: "⚡" }
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: "Rationalise 1/√2",
    visual: "number-line",
    speak: "Multiply top and bottom by root 2 to get root 2 over 2.",
    steps: ["Start with 1/√2", "Multiply by √2/√2", "Get √2 / 2"],
    punchline: "The denominator becomes rational.",
  },
  {
    id: "t1",
    type: "try",
    title: "Your turn",
    prompt: "Which is irrational?",
    options: [
        { id: "a", text: "√9" },
        { id: "b", text: "√7" },
        { id: "c", text: "0.25" },
        { id: "d", text: "4/5" }
    ],
    answerId: "b",
    why: "√7 is not a perfect square, so it is irrational.",
    visual: "number-line",
    speak: "Which is irrational?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Number line navigator!",
    bullets: ["Q vs irrational", "Simplify surds", "Watch exponent laws", "Set A and Set B ready — 24 MCQs each"],
    cta: "Back to chapter",
    speak: "Number line navigator! You are ready for the practice sets.",
  },
];

export const g9MathsNumberSystems: ChapterDef = {
  id: "number-systems",
  title: "Number Systems",
  emoji: "🔢",
  blurb: "Reals, rationals, surds & exponents",
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

export const g9MathsNumberSystemsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
