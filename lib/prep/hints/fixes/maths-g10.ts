/**
 * Grade 10 Maths — item-specific hint fixes (fix layer).
 * Source: app repo commit 4291140 (served hints: lib/prep/content + lib/prep/hints overlays). Written 2026-10-19.
 * Items changed: 10 | hints: 11
 * By category (primary): answer-revealing fixed 10
 * Each hint nudges the method using the item's own numbers/objects; none contains the answer,
 * an option letter or "eliminate options". A later hint is a stronger nudge (a first step worked).
 * Merge: these WIN over G10_MATHS_HINTS and over authored question.hints (see applyHints in ../index.ts).
 */
import type { HintOverlay } from "../types";

export const G10_MATHS_HINT_FIXES: Record<string, HintOverlay> = {
  // g10-maths real-numbers — Real Numbers
  "g10-maths-real-a-q16": ["Suppose the sum were a rational number t. Then the other number would be t minus a rational. Can that happen?"],
  "g10-maths-real-a-q22": ["Co-prime numbers such as 8 and 15 share no prime factor. List their factors and find the highest shared factor."],
  "g10-maths-real-b-q01": ["Divide 867 by 255 and keep the remainder. Then divide 255 by that remainder.", "867 = 3 × 255 + 102. Next divide 255 by 102, and keep going until the remainder is 0."],
  "g10-maths-real-b-q16": ["Factorise 243 into primes and group equal factors in triples. What is missing to complete the last group?"],
  // g10-maths polynomials — Polynomials
  "g10-maths-poly-a-q04": ["By the remainder theorem, put x equal to the number that makes the divisor zero, then evaluate x³ − 2x² + 4."],
  "g10-maths-poly-a-q09": ["Write p(x) = 2 as 2 × x raised to some power. Which power of x equals 1?"],
  "g10-maths-poly-a-q14": ["A linear polynomial ax + b has a straight-line graph. How many times can a slanting line cross the x-axis?"],
  "g10-maths-poly-a-q18": ["By the factor theorem, the polynomial is zero at the root of the factor. Substitute that value of x and solve for k."],
  "g10-maths-poly-a-q21": ["The zeros of a quadratic are (−b ± √D)/2a. For both zeros to be equal, what must √D be?"],
  "g10-maths-poly-b-q11": ["Factorise x² − 6x + 8 to find α and β, then square their difference."],
};
