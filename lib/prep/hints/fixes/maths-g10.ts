/**
 * Grade 10 Maths — item-specific hint fixes (fix layer).
 * Source: app repo commit 4291140 (served hints: lib/prep/content + lib/prep/hints overlays). Written 2026-10-19.
 * Items changed: 59 | hints: 60
 * By category (primary): answer-revealing fixed 10 · generic replaced 47 · shared-hint split 2
 * Each hint nudges the method using the item's own numbers/objects; none contains the answer,
 * an option letter or "eliminate options". A later hint is a stronger nudge (a first step worked).
 * Merge: these WIN over G10_MATHS_HINTS and over authored question.hints (see applyHints in ../index.ts).
 */
import type { HintOverlay } from "../types";

export const G10_MATHS_HINT_FIXES: Record<string, HintOverlay> = {
  // g10-maths real-numbers — Real Numbers
  "g10-maths-real-a-q02": ["Divide 225 by 135 and note the remainder. Then divide 135 by that remainder; repeat until it is zero."],
  "g10-maths-real-a-q07": ["2√3 and 3√3 are like terms, just as 2a + 3a are. Add the numbers in front and keep √3."],
  "g10-maths-real-a-q12": ["Divide 404 by 96 and find the remainder. Then divide 96 by that remainder, and keep going."],
  "g10-maths-real-a-q13": ["Put both under one root: √(8 divided by the other number). Which perfect square is that?"],
  "g10-maths-real-a-q14": ["2 = √4 and 3 = √9. Pick the option that is the root of a non-perfect square between 4 and 9."],
  "g10-maths-real-a-q15": ["Let x be the repeating decimal. Multiply by 1000 so the 123 blocks line up, subtract x, and solve as a fraction."],
  "g10-maths-real-a-q16": ["Suppose the sum were a rational number t. Then the other number would be t minus a rational. Can that happen?"],
  "g10-maths-real-a-q17": ["Find the largest perfect square that divides 50. Take its root outside the √ and leave the rest inside."],
  "g10-maths-real-a-q18": ["Try n = 4 and n = 5. What kind of number is √4? What about √5?"],
  "g10-maths-real-a-q19": ["Write 12, 15 and 21 as products of primes, then multiply the highest power of each prime."],
  "g10-maths-real-a-q20": ["A decimal terminates only if the simplest denominator has just primes 2 and 5; otherwise it is repeating. Factor each denominator."],
  "g10-maths-real-a-q21": ["Multiply under one root: √(3 × 12). Is that number a perfect square?"],
  "g10-maths-real-a-q22": ["Co-prime numbers such as 8 and 15 share no prime factor. List their factors and find the highest shared factor."],
  "g10-maths-real-b-q01": ["Divide 867 by 255 and keep the remainder. Then divide 255 by that remainder.", "867 = 3 × 255 + 102. Next divide 255 by 102, and keep going until the remainder is 0."],
  "g10-maths-real-b-q03": ["Simplify 18/50 first by dividing top and bottom by 2. Then take the root of the top and of the bottom."],
  "g10-maths-real-b-q04": ["A p/q number has a decimal that ends or repeats. Is π's decimal like that? What about √2 or √7?"],
  "g10-maths-real-b-q06": ["Let x = 0.666…. Then 10x = 6.666…. Subtract, solve for x, then simplify."],
  "g10-maths-real-b-q07": ["Write 75 as 25 × a number and 12 as 4 × the same number. Simplify both roots, then subtract."],
  "g10-maths-real-b-q12": ["Multiply top and bottom by √7 + √2. The bottom becomes 7 − 2."],
  "g10-maths-real-b-q16": ["Factorise 243 into primes and group equal factors in triples. What is missing to complete the last group?"],
  "g10-maths-real-b-q17": ["An expansion terminates only if the denominator's primes are 2 and 5 alone. Factor 3125, 6, 3 and 14."],
  "g10-maths-real-b-q19": ["For a positive number, the square root of its square gives back the number itself. Is a prime positive?"],
  "g10-maths-real-b-q21": ["Add 9 + 16 first. Then find the square root of that total."],
  "g10-maths-real-b-q22": ["Write 12 as 2 × 2 × 3 and 30 as 2 × 3 × 5. Can a composite number split into primes another way?"],
  "g10-maths-real-b-q23": ["Squaring gives x/y = 16/25. Split 82 in the ratio 16 : 25, then subtract y from x."],
  "g10-maths-real-b-q24": ["Multiply top and bottom by √2 + 1; the bottom becomes 2 − 1. Then use √2 ≈ 1.414."],
  // g10-maths polynomials — Polynomials
  "g10-maths-poly-a-q04": ["By the remainder theorem, put x equal to the number that makes the divisor zero, then evaluate x³ − 2x² + 4."],
  "g10-maths-poly-a-q08": ["A quadratic has at most 2 zeros because its degree is 2. What is the degree of a cubic polynomial?"],
  "g10-maths-poly-a-q09": ["Write p(x) = 2 as 2 × x raised to some power. Which power of x equals 1?"],
  "g10-maths-poly-a-q10": ["Factor x² − 2x − 8 into two brackets. Which values make each bracket zero?"],
  "g10-maths-poly-a-q14": ["A linear polynomial ax + b has a straight-line graph. How many times can a slanting line cross the x-axis?"],
  "g10-maths-poly-a-q15": ["Set 3x − 6 = 0. Add 6 to both sides, then divide by 3."],
  "g10-maths-poly-a-q16": ["1/α + 1/β = (α + β)/(αβ). For 2x² − 3x + 1, use sum = −b/a and product = c/a."],
  "g10-maths-poly-a-q18": ["By the factor theorem, the polynomial is zero at the root of the factor. Substitute that value of x and solve for k."],
  "g10-maths-poly-a-q21": ["The zeros of a quadratic are (−b ± √D)/2a. For both zeros to be equal, what must √D be?"],
  "g10-maths-poly-b-q11": ["Factorise x² − 6x + 8 to find α and β, then square their difference."],
  "g10-maths-poly-b-q17": ["α²β + αβ² = αβ(α + β). Read the sum and product of zeros from x² − 3x + 2."],
  // g10-maths linear-pair — Pair of Linear Equations
  "g10-maths-linear-a-q03": ["Can x + y equal 5 and 7 at the same time? Think of two lines with the same slope."],
  "g10-maths-linear-a-q04": ["Add the equations to get 2x = 8, then put x back into x + y = 7."],
  "g10-maths-linear-a-q07": ["Add the equations: 5x + 5y = 10. Subtract them: x − y = 0. Solve these two simpler ones."],
  "g10-maths-linear-a-q10": ["Put y = 0 to find OA from 3x = 12, then x = 0 to find OB. Multiply them."],
  "g10-maths-linear-a-q11": ["Multiply 3x − y = 3 by 3. How does it compare with 9x − 3y = 9?"],
  "g10-maths-linear-a-q14": ["am − bl ≠ 0 means a/l ≠ b/m, so the slopes differ. How many times do the lines cross?"],
  "g10-maths-linear-a-q16": ["Both y = 2x + 1 and y = 2x − 4 have slope 2, but different y-intercepts. Will they ever meet?"],
  "g10-maths-linear-a-q17": ["Two lines in a plane can cross once, never meet, or lie on top of each other. Which cases can a pair show?"],
  "g10-maths-linear-a-q18": ["Put x = 1, y = 2 into both equations. If both hold, what is that point for the pair?"],
  "g10-maths-linear-a-q19": ["Compare 4x + 6y − 18 = 0 with 2x + 3y − 9 = 0. Is one exactly double the other?"],
  "g10-maths-linear-a-q20": ["Substitute the origin's coordinates into ax + by + c. What must the remaining term equal?"],
  "g10-maths-linear-a-q23": ["Let the son be s and the father 3s. In 12 years: 3s + 12 = 2(s + 12). Solve for s."],
  "g10-maths-linear-a-q24": ["x = 2 is a vertical line and y = 3 is a horizontal line. Where do they meet?"],
  "g10-maths-linear-b-q02": ["Divide 4x − 2y − k = 0 by 2. For parallel lines its constant must differ from the first line's."],
  "g10-maths-linear-b-q03": ["Multiply both equations by 10 to clear the decimals. Then eliminate x, find y, and substitute back to get x."],
  "g10-maths-linear-b-q05": ["The left side is the sum of both left sides of the equations. So add 17 and 6."],
  "g10-maths-linear-b-q06": ["Write (n + 1)/(d + 1) = 1/2 and (n − 1)/(d − 1) = 1/3. Cross-multiply and solve."],
  "g10-maths-linear-b-q13": ["In x + y = 4, find where the line meets each axis: make one variable zero, then the other."],
  "g10-maths-linear-b-q14": ["In the graphical method, draw both lines. Which single point lies on both lines at once?"],
  "g10-maths-linear-b-q18": ["For coincident lines, 4x − ky = 6 must be exactly double 2x − y = 3. What must k be?"],
  "g10-maths-linear-b-q21": ["Inconsistent means parallel lines. Multiply x + y = 2 by 2 and compare its constant with each pair."],
  "g10-maths-linear-b-q23": ["Multiply 3x + 4y = 10 by 2. Is it the same as 6x + 8y = 20?"],
};
