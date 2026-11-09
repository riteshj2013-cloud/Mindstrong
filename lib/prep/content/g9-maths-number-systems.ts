import type { ChapterDef, PrepQuestion } from "../types";

/** Number Systems - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g9-maths-numbers-a-q01",
    prompt: "Which of the following is an irrational number?",
    options: [
      { id: "a", text: "√2" },
      { id: "b", text: "√9" },
      { id: "c", text: "0.25" },
      { id: "d", text: "7/3" }
    ],
    answerId: "a",
    explanation: "√2 cannot be written as p/q in lowest terms; √9 = 3 and 0.25 = 1/4 are rational. √9 is tempting if you classify a repeating decimal as irrational.",
    hints: ["An irrational number cannot be written as p/q. Is the number under each root a perfect square?"]
  },
  {
    id: "g9-maths-numbers-a-q02",
    prompt: "Every rational number can also be called a…",
    options: [
      { id: "a", text: "natural number" },
      { id: "b", text: "real number" },
      { id: "c", text: "integer" },
      { id: "d", text: "whole number only" }
    ],
    answerId: "b",
    explanation: "Rationals sit inside the reals. Not every rational is a natural number or integer. natural number is tempting if you classify a terminating decimal as irrational.",
    hints: ["Rational numbers sit inside a bigger set that also holds numbers like √2 and π. Which set contains every rational?"]
  },
  {
    id: "g9-maths-numbers-a-q03",
    prompt: "The decimal expansion of 1/8 is…",
    options: [
      { id: "a", text: "0.121212… (non-terminating repeating)" },
      { id: "b", text: "0.1121121112… (non-repeating)" },
      { id: "c", text: "√2" },
      { id: "d", text: "0.125 (terminating)" }
    ],
    answerId: "d",
    explanation: "1 ÷ 8 = 0.125 exactly, so the expansion terminates. 0.121212…. 0. 0. 0.121212… (non-terminating repeating) is tempting if you forget to multiply by the conjugate when rationalising.",
    hints: ["Divide 1 by 8 using long division. Does the remainder become zero, or does a block of digits repeat?"]
  },
  {
    id: "g9-maths-numbers-a-q04",
    prompt: "A number whose decimal is non-terminating and non-repeating must be…",
    options: [
      { id: "a", text: "irrational" },
      { id: "b", text: "rational" },
      { id: "c", text: "an integer" },
      { id: "d", text: "a whole number" }
    ],
    answerId: "a",
    explanation: "Non-terminating non-repeating decimals define irrational numbers. rational is tempting if you place the repeating bar over the wrong digit block.",
    hints: ["A decimal that never ends and never repeats cannot be written as p/q. What kind of number is that?"]
  },
  {
    id: "g9-maths-numbers-a-q05",
    prompt: "Between 2 and 3 there are…",
    options: [
      { id: "a", text: "no rational numbers" },
      { id: "b", text: "infinitely many rationals" },
      { id: "c", text: "exactly one rational" },
      { id: "d", text: "exactly two rationals" }
    ],
    answerId: "b",
    explanation: "Between any two distinct reals there are infinitely many rationals (and irrationals). no rational numbers is tempting if you include an endpoint or count the wrong way on the number line; the correct count is infinitely many rationals.",
    hints: ["Find the average of 2 and 3, then the average of 2 and that number. Can you keep going?"]
  },
  {
    id: "g9-maths-numbers-a-q06",
    prompt: "√(16/25) simplifies to…",
    options: [
      { id: "a", text: "16/25" },
      { id: "b", text: "4/25" },
      { id: "c", text: "4/5" },
      { id: "d", text: "8/5" }
    ],
    answerId: "c",
    explanation: "√(16/25) = √16 / √25 = 4/5. 16/25 is tempting if you stop one simplification step early on this number-system stem.",
    hints: ["Take the square root of 16 and of 25 separately."]
  },
  {
    id: "g9-maths-numbers-a-q07",
    prompt: "Which statement about number sets is true?",
    options: [
      { id: "a", text: "Every integer is irrational" },
      { id: "b", text: "Every real number is rational" },
      { id: "c", text: "0 is not a real number" },
      { id: "d", text: "Every natural number is a whole number" }
    ],
    answerId: "d",
    explanation: "Natural numbers are 1,2,3,… and wholes add 0, so every natural is whole. Every integer is irrational is tempting if you cancel a term across a sum as if it were a common factor.",
    hints: ["Test each statement with an example from the number sets: is 5 whole? Is 0 real? Is √2 rational?"]
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
    explanation: "√3 × √3 = 3, a rational number, so √3 rationalises √3. 3 is tempting if you forget to multiply by the conjugate when rationalising.",
    hints: ["The rationalising factor is what you multiply a root by to leave no root, as in √5 × √5 = 5."]
  },
  {
    id: "g9-maths-numbers-a-q09",
    prompt: "0.¯6 (0.666…) equals…",
    options: [
      { id: "a", text: "6/9" },
      { id: "b", text: "2/3" },
      { id: "c", text: "both 6/9 and 2/3" },
      { id: "d", text: "6/10" }
    ],
    answerId: "c",
    explanation: "0.¯6 = 6/9 = 2/3, so both equivalent fraction forms are correct. 6/9 is tempting if you leave the fraction unsimplified and think it is a different value from 2/3.",
    hints: ["Let x = 0.666…, so 10x − x = 6. Then simplify the fraction you get."]
  },
  {
    id: "g9-maths-numbers-a-q10",
    prompt: "Which is a terminating decimal?",
    options: [
      { id: "a", text: "1/3" },
      { id: "b", text: "1/5" },
      { id: "c", text: "1/6" },
      { id: "d", text: "1/7" }
    ],
    answerId: "b",
    explanation: "1/5 = 0.2. A fraction in lowest terms terminates iff the denominator’s primes are only 2 and/or 5. 1/3 is tempting if you place the repeating bar over the wrong digit block.",
    hints: ["A fraction is a terminating decimal only if, in lowest terms, its denominator has no prime factors other than 2 and 5."]
  },
  {
    id: "g9-maths-numbers-a-q11",
    prompt: "√8 simplified in simplest radical form is…",
    options: [
      { id: "a", text: "4√2" },
      { id: "b", text: "√4 · √2 = 2√2 only if written 2√2" },
      { id: "c", text: "2√2" },
      { id: "d", text: "8" }
    ],
    answerId: "c",
    explanation: "√8 = √(4·2) = 2√2. 4√2 is tempting if you simplify √(a²b) as a√b without the absolute value of a.",
    hints: ["Find the largest perfect square that divides 8, then take its square root outside the root sign."]
  },
  {
    id: "g9-maths-numbers-a-q12",
    prompt: "If x = √5 + √3 and y = √5 − √3, then xy equals…",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "√15" },
      { id: "c", text: "√5 − √3" },
      { id: "d", text: "2" }
    ],
    answerId: "d",
    explanation: "xy = (√5)² − (√3)² = 5 − 3 = 2. 8 is tempting if you take √(a²) as −a without using the principal (non-negative) root.",
    hints: ["Multiply (√5 + √3)(√5 − √3) using (a + b)(a − b) = a² − b²."]
  },
  {
    id: "g9-maths-numbers-a-q13",
    prompt: "On the number line, √2 lies between…",
    options: [
      { id: "a", text: "1 and 2" },
      { id: "b", text: "0 and 1" },
      { id: "c", text: "2 and 3" },
      { id: "d", text: "3 and 4" }
    ],
    answerId: "a",
    explanation: "1² = 1 and 2² = 4, so √2 ≈ 1.414 lies between 1 and 2. 0 and 1 is tempting if you include an endpoint or count the wrong way on the number line; the correct count is 1 and 2.",
    hints: ["Square nearby whole numbers: which perfect squares lie just below and just above 2?"]
  },
  {
    id: "g9-maths-numbers-a-q14",
    prompt: "Which law is correct for positive real a and integers m, n?",
    options: [
      { id: "a", text: "a^m * a^n = a^(m*n)" },
      { id: "b", text: "a^m * a^n = a^(m+n)" },
      { id: "c", text: "a^m * a^n = a^(m-n)" },
      { id: "d", text: "(a^m)^n = a^(m+n)" }
    ],
    answerId: "b",
    explanation: "When multiplying same bases, add exponents: a^m * a^n = a^(m+n). a^m * a^n = a^(m*n) is tempting if you multiply the exponents when you should add them for a product of powers.",
    hints: ["Test each law with numbers: work out 2² × 2³ and compare it with each rule for a^m * a^n."]
  },
  {
    id: "g9-maths-numbers-a-q15",
    prompt: "(√7 − √5)(√7 + √5) equals…",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "√35" },
      { id: "c", text: "2" },
      { id: "d", text: "−2" }
    ],
    answerId: "c",
    explanation: "Difference of squares: 7 − 5 = 2. −2 is tempting if you square only one side of an equation with square roots.",
    hints: ["Use (a − b)(a + b) = a² − b² with a = √7 and b = √5."]
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
    explanation: "0.¯27 = 27/99 is a repeating decimal, hence rational. The others are irrational. π is tempting if you place the repeating bar over the wrong digit block.",
    hints: ["Repeating decimals are rational; non-repeating non-terminating are not."]
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
    explanation: "Multiply numerator and denominator by √5: √5 / 5. 5/√5 is tempting if you forget to multiply by the conjugate when rationalising.",
    hints: ["Multiply top and bottom by √5."]
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
    explanation: "32 = 2⁵, so x = 5. 4 is tempting if you add the exponents when you should multiply them for a power of a power.",
    hints: ["Write 32 as a power of 2."]
  },
  {
    id: "g9-maths-numbers-a-q19",
    prompt: "The product of a non-zero rational and an irrational number is…",
    options: [
      { id: "a", text: "always rational" },
      { id: "b", text: "always an integer" },
      { id: "c", text: "always irrational" },
      { id: "d", text: "sometimes zero" }
    ],
    answerId: "c",
    explanation: "For non-zero rational r and irrational α, rα is irrational (else α would be rational). always rational is tempting if you classify a terminating decimal as irrational.",
    hints: ["If the product were rational, you could solve for the irrational as a ratio."]
  },
  {
    id: "g9-maths-numbers-a-q20",
    prompt: "√(0.09) equals…",
    options: [
      { id: "a", text: "0.03" },
      { id: "b", text: "0.9" },
      { id: "c", text: "3" },
      { id: "d", text: "0.3" }
    ],
    answerId: "d",
    explanation: "0.09 = 9/100, and √(9/100) = 3/10 = 0.3. 0. 3 is tempting if you think a surd sum is rational without checking.",
    hints: ["Write 0.09 as 9/100, then take the square root of the top and the bottom."]
  },
  {
    id: "g9-maths-numbers-a-q21",
    prompt: "Which expression equals (3²)³?",
    options: [
      { id: "a", text: "both 3⁶ and 9³" },
      { id: "b", text: "3⁵" },
      { id: "c", text: "3⁶" },
      { id: "d", text: "9³" }
    ],
    answerId: "a",
    explanation: "(3²)³ = 3⁶ because the powers multiply (2 × 3 = 6), and 9³ = (3²)³ = 3⁶ too, so both 3⁶ and 9³ are equal to it. 3⁵ may look right if you add the powers (2 + 3) instead of multiplying them. 3⁵ is tempting if you simplify only the numerator and leave the denominator.",
    hints: ["Use the rule (aᵐ)ⁿ = aᵐⁿ on (3²)³. Then check whether 3² can be written as a single number."]
  },
  {
    id: "g9-maths-numbers-a-q22",
    prompt: "An example of a number that is real but not rational is…",
    options: [
      { id: "a", text: "−4" },
      { id: "b", text: "√11" },
      { id: "c", text: "22/7" },
      { id: "d", text: "0" }
    ],
    answerId: "b",
    explanation: "√11 is irrational (hence real but not rational). −4, 22/7 and 0 are rational. −4 is tempting if you write the repeating decimal as a non-equivalent fraction.",
    hints: ["A real number that is not rational cannot be written as p/q. Which root is of a number that is not a perfect square?"]
  },
  {
    id: "g9-maths-numbers-a-q23",
    prompt: "Simplify: √50 − √18 + √8",
    options: [
      { id: "a", text: "3√2" },
      { id: "b", text: "2√2" },
      { id: "c", text: "4√2" },
      { id: "d", text: "5√2" }
    ],
    answerId: "c",
    explanation: "√50=5√2, √18=3√2, √8=2√2 → 5√2 − 3√2 + 2√2 = 4√2. 3√2 is tempting if you take √(a²) as −a without using the principal (non-negative) root.",
    hints: ["Simplify each radical, then combine like terms."]
  },
  {
    id: "g9-maths-numbers-a-q24",
    prompt: "If a = 2 + √3, then 1/a equals…",
    options: [
      { id: "a", text: "√3 − 2" },
      { id: "b", text: "2 + √3" },
      { id: "c", text: "1/(2−√3) only, not simplified" },
      { id: "d", text: "2 − √3" }
    ],
    answerId: "d",
    explanation: "Rationalise: 1/(2+√3) · (2−√3)/(2−√3) = 2−√3, since (2)²−(√3)² = 1. 2 + √3 is tempting if you forget to rationalise and just leave a as its own reciprocal partner; after rationalising, 1/a = 2 − √3.",
    hints: ["Multiply the top and bottom of 1/(2 + √3) by its conjugate, the same terms with the sign before √3 flipped."]
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
    explanation: "The square root of a negative is not real; √4=2 and −√9=−3 are real. √4 is tempting if you mishandle roots or rationalisation; the correct value is √(−4) interpreted as a real square root.",
    hints: ["Square roots of negatives leave the reals."]
  },
  {
    id: "g9-maths-numbers-b-q02",
    prompt: "The decimal 0.125125125… (repeating “125”) is…",
    options: [
      { id: "a", text: "irrational" },
      { id: "b", text: "an integer" },
      { id: "c", text: "not a real number" },
      { id: "d", text: "rational" }
    ],
    answerId: "d",
    explanation: "A repeating block means a rational number (equal to 125/999). irrational is tempting if you classify a repeating (non-terminating) decimal as irrational.",
    hints: ["A repeating decimal like 0.125125… can be written as p/q: compare x and 1000x. What kind of number is p/q?"]
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
    explanation: "√49/√64 = 7/8. 49/64 is tempting if you stop one simplification step early on this number-system stem.",
    hints: ["Take the square root of 49 and of 64 separately."]
  },
  {
    id: "g9-maths-numbers-b-q04",
    prompt: "Which set is densest in the sense that between any two members there is another of the same set?",
    options: [
      { id: "a", text: "Natural numbers" },
      { id: "b", text: "Rational numbers" },
      { id: "c", text: "Integers" },
      { id: "d", text: "Even integers" }
    ],
    answerId: "b",
    explanation: "Rationals (and reals) are dense; integers have gaps of size 1. Natural numbers is tempting if you include an endpoint or count the wrong way on the number line; the correct count is Rational numbers.",
    hints: ["Between two members, try their average. Is the average of 1 and 2 still in the same set?"]
  },
  {
    id: "g9-maths-numbers-b-q05",
    prompt: "Rationalise 3/(√7 − √5).",
    options: [
      { id: "a", text: "(3/2)(√7 − √5)" },
      { id: "b", text: "3(√7 + √5)" },
      { id: "c", text: "(3/2)(√7 + √5)" },
      { id: "d", text: "√7 + √5" }
    ],
    answerId: "c",
    explanation: "Multiply by √7+√5: numerator 3(√7+√5), denominator 7−5=2. (3/2)(√7 − √5) is tempting if you flip a sign in the conjugate while rationalising.",
    hints: ["Multiply the top and bottom of 3/(√7 − √5) by the conjugate. The bottom becomes 7 − 5."]
  },
  {
    id: "g9-maths-numbers-b-q06",
    prompt: "If 5ˣ⁺¹ = 125, then x equals…",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "3" },
      { id: "c", text: "4" },
      { id: "d", text: "2" }
    ],
    answerId: "d",
    explanation: "125 = 5³, so x + 1 = 3 and x = 2. 1 is tempting if you equate the exponents to get x + 1 = 3 but then forget to subtract 1.",
    hints: ["Write both sides with base 5."]
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
    explanation: "√12=2√3 and √27=3√3, so the sum is 5√3. √39 is tempting if you take √(a²) as −a without using the principal (non-negative) root.",
    hints: ["Find the largest perfect square inside 12 and inside 27, take its root outside, then add the like surds."]
  },
  {
    id: "g9-maths-numbers-b-q08",
    prompt: "Which fraction has a terminating decimal expansion?",
    options: [
      { id: "a", text: "7/12" },
      { id: "b", text: "13/80" },
      { id: "c", text: "11/14" },
      { id: "d", text: "5/6" }
    ],
    answerId: "b",
    explanation: "80 = 2⁴·5, so after simplifying, only primes 2 and 5 remain → terminating. 7/12 is tempting if you classify a terminating decimal as irrational.",
    hints: ["Factor each denominator into primes. A terminating decimal needs only 2s and 5s in the denominator."]
  },
  {
    id: "g9-maths-numbers-b-q09",
    prompt: "π − 22/7 is…",
    options: [
      { id: "a", text: "rational" },
      { id: "b", text: "zero" },
      { id: "c", text: "irrational" },
      { id: "d", text: "an integer" }
    ],
    answerId: "c",
    explanation: "π is irrational and 22/7 is rational; their difference is irrational (and not zero). rational is tempting if you apply the wrong real-number identity on this stem.",
    hints: ["π never ends or repeats, but 22/7 is a fraction. Can subtracting a fraction make π's decimal stop or repeat?"]
  },
  {
    id: "g9-maths-numbers-b-q10",
    prompt: "(√2)⁶ equals…",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "16" },
      { id: "c", text: "2√2" },
      { id: "d", text: "8" }
    ],
    answerId: "d",
    explanation: "(√2)⁶ = (2^{1/2})⁶ = 2³ = 8. 4 is tempting if you compare surds by comparing radicands alone.",
    hints: ["Convert √2 to a power of 2, then multiply exponents."]
  },
  {
    id: "g9-maths-numbers-b-q11",
    prompt: "The number 0.101001000100001… (one more zero between 1s each time) is…",
    options: [
      { id: "a", text: "irrational" },
      { id: "b", text: "rational" },
      { id: "c", text: "terminating" },
      { id: "d", text: "repeating" }
    ],
    answerId: "a",
    explanation: "The gaps grow without a repeating block, so the decimal is non-repeating → irrational. rational is tempting if you include an endpoint or count the wrong way on the number line; the correct count is irrational.",
    hints: ["In 0.101001000100001… the run of zeros keeps growing. Is there a fixed block of digits that repeats?"]
  },
  {
    id: "g9-maths-numbers-b-q12",
    prompt: "If x = 2 + √3, then x · (2 − √3) equals…",
    options: [
      { id: "a", text: "7" },
      { id: "b", text: "1" },
      { id: "c", text: "4 − 2√3" },
      { id: "d", text: "√3" }
    ],
    answerId: "b",
    explanation: "(2+√3)(2−√3) = 4 − 3 = 1. 4 − 2√3 is tempting if you simplify √(a²b) as a√b without the absolute value of a.",
    hints: ["Use (a + b)(a − b) = a² − b² with a = 2 and b = √3."]
  },
  {
    id: "g9-maths-numbers-b-q13",
    prompt: "Which rule about square roots is correct?",
    options: [
      { id: "a", text: "√(a+b) = √a + √b for all positive a,b" },
      { id: "b", text: "√(a·b) = √a · √b for non-negative a,b" },
      { id: "c", text: "√(a−b) = √a − √b always" },
      { id: "d", text: "(√a)² = −a" }
    ],
    answerId: "b",
    explanation: "The product rule √(ab)=√a√b holds for non-negative a,b; sums do not split that way. √(a+b) = √a + √b for all positive a,b is tempting if you take √(a²) as −a without using the principal (non-negative) root.",
    hints: ["Only the product (and quotient) rules hold in general for square roots."]
  },
  {
    id: "g9-maths-numbers-b-q14",
    prompt: "Locate which integer pair traps √10.",
    options: [
      { id: "a", text: "2 and 3" },
      { id: "b", text: "4 and 5" },
      { id: "c", text: "3 and 4" },
      { id: "d", text: "1 and 2" }
    ],
    answerId: "c",
    explanation: "3²=9 and 4²=16, so √10 ≈ 3.16 lies between 3 and 4. 2 and 3 is tempting if you classify a terminating decimal as irrational.",
    hints: ["Which perfect squares lie just below and just above 10? Take their square roots."]
  },
  {
    id: "g9-maths-numbers-b-q15",
    prompt: "Which rational number lies between √2 and √3?",
    options: [
      { id: "a", text: "1.5" },
      { id: "b", text: "1.8" },
      { id: "c", text: "1.3" },
      { id: "d", text: "2" }
    ],
    answerId: "a",
    explanation: "1.5² = 2.25, which is between 2 and 3, so √2 < 1.5 < √3. 1.8 is tempting because it sits between 1 and 2, but 1.8² = 3.24 > 3, so it is bigger than √3.",
    hints: ["Square each option and compare it with 2 and 3. The number you want has a square between them."]
  },
  {
    id: "g9-maths-numbers-b-q16",
    prompt: "The additive inverse of √5 − 2 is…",
    options: [
      { id: "a", text: "2 − √5" },
      { id: "b", text: "√5 + 2" },
      { id: "c", text: "−√5 − 2" },
      { id: "d", text: "1/(√5 − 2)" }
    ],
    answerId: "a",
    explanation: "Adding 2 − √5 cancels: (√5 − 2) + (2 − √5) = 0. √5 + 2 is tempting if you square only one side of an equation with square roots.",
    hints: ["The additive inverse is −(√5 − 2). Multiply each term inside the bracket by −1."]
  },
  {
    id: "g9-maths-numbers-b-q17",
    prompt: "Simplify (√18 / √8).",
    options: [
      { id: "a", text: "3/2" },
      { id: "b", text: "√(9/4) = 3/2" },
      { id: "c", text: "both 3/2 and √(9/4)" },
      { id: "d", text: "√2" }
    ],
    answerId: "c",
    explanation: "√18/√8 = √(18/8) = √(9/4) = 3/2. 3/2 is tempting if you stop one simplification step early on this number-system stem.",
    hints: ["Combine under one root or simplify each surd first."]
  },
  {
    id: "g9-maths-numbers-b-q18",
    prompt: "Which number is an integer but not a whole number?",
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "−3" },
      { id: "c", text: "5" },
      { id: "d", text: "12" }
    ],
    answerId: "b",
    explanation: "Whole numbers are 0,1,2,…; −3 is an integer but not whole. 0 is tempting if you replace a product with a sum of the same numbers.",
    hints: ["Wholes start at 0; integers include negatives."]
  },
  {
    id: "g9-maths-numbers-b-q19",
    prompt: "If √(x − 1) = 3, then x equals…",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "9" },
      { id: "c", text: "10" },
      { id: "d", text: "4" }
    ],
    answerId: "c",
    explanation: "Square both sides: x − 1 = 9 → x = 10. 9 is tempting if you take √(a²) as −a without using the principal (non-negative) root.",
    hints: ["Square both sides of √(x − 1) = 3, then add 1."]
  },
  {
    id: "g9-maths-numbers-b-q20",
    prompt: "(5√2)² equals…",
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "25√2" },
      { id: "c", text: "5√4" },
      { id: "d", text: "50" }
    ],
    answerId: "d",
    explanation: "(5√2)² = 25 · 2 = 50. 10 is tempting if you write √a + √b for √(a+b).",
    hints: ["Square each part of 5√2 separately: 5² times (√2)²."]
  },
  {
    id: "g9-maths-numbers-b-q21",
    prompt: "A number of the form p/q with p, q integers and q ≠ 0 is called…",
    options: [
      { id: "a", text: "whole number" },
      { id: "b", text: "irrational" },
      { id: "c", text: "integer" },
      { id: "d", text: "rational" }
    ],
    answerId: "d",
    explanation: "Any number p/q with integers p, q and q ≠ 0 is a rational number. “Integer” is tempting because every integer can be written as n/1, but most such numbers, like 3/4, are not integers; “whole number” fails for the same reason and also for negatives. Irrational numbers are exactly the ones that cannot be written as p/q.",
    hints: ["Think of the set named after 'ratio': numbers written as one integer p over another integer q."]
  },
  {
    id: "g9-maths-numbers-b-q22",
    prompt: "Which equals 8^{2/3}?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "4" },
      { id: "c", text: "16" },
      { id: "d", text: "64" }
    ],
    answerId: "b",
    explanation: "8^{2/3} = (8^{1/3})² = 2² = 4. 2 is tempting if you match the bases but forget to adjust after equating the exponents.",
    hints: ["Cube root of 8 is 2, then square."]
  },
  {
    id: "g9-maths-numbers-b-q23",
    prompt: "√(72) in simplest form is…",
    options: [
      { id: "a", text: "8√2" },
      { id: "b", text: "36√2" },
      { id: "c", text: "6√2" },
      { id: "d", text: "12√3" }
    ],
    answerId: "c",
    explanation: "√72 = √(36·2) = 6√2. 8√2 is tempting if you compare surds by comparing radicands alone.",
    hints: ["Find the largest perfect square that divides 72, then take its square root outside the root sign."]
  },
  {
    id: "g9-maths-numbers-b-q24",
    prompt: "If a > 0, then √a · √a equals…",
    options: [
      { id: "a", text: "√a" },
      { id: "b", text: "a²" },
      { id: "c", text: "2√a" },
      { id: "d", text: "a" }
    ],
    answerId: "d",
    explanation: "√a · √a = a for a ≥ 0. √a is tempting if you simplify √(a²b) as a√b without the absolute value of a.",
    hints: ["Squaring undoes a square root. Try a = 9: what is √9 × √9?"]
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
