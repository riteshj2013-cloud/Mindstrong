/**
 * Grade 9 Maths — item-specific hint fixes (fix layer).
 * Source: app repo commit 4291140 (served hints: lib/prep/content + lib/prep/hints overlays). Written 2026-10-19.
 * Items changed: 11 | hints: 11
 * By category (primary): answer-revealing fixed 11
 * Each hint nudges the method using the item's own numbers/objects; none contains the answer,
 * an option letter or "eliminate options". A later hint is a stronger nudge (a first step worked).
 * Merge: these WIN over G9_MATHS_HINTS and over authored question.hints (see applyHints in ../index.ts).
 */
import type { HintOverlay } from "../types";

export const G9_MATHS_HINT_FIXES: Record<string, HintOverlay> = {
  // g9-maths number-systems — Number Systems
  "g9-maths-numbers-a-q04": ["A decimal that never ends and never repeats cannot be written as p/q. What kind of number is that?"],
  "g9-maths-numbers-a-q21": ["Use the rule (aᵐ)ⁿ = aᵐⁿ on (3²)³. Then check whether 3² can be written as a single number."],
  "g9-maths-numbers-a-q24": ["Multiply the top and bottom of 1/(2 + √3) by its conjugate, the same terms with the sign before √3 flipped."],
  "g9-maths-numbers-b-q02": ["A repeating decimal like 0.125125… can be written as p/q: compare x and 1000x. What kind of number is p/q?"],
  "g9-maths-numbers-b-q07": ["Find the largest perfect square inside 12 and inside 27, take its root outside, then add the like surds."],
  "g9-maths-numbers-b-q09": ["π never ends or repeats, but 22/7 is a fraction. Can subtracting a fraction make π's decimal stop or repeat?"],
  "g9-maths-numbers-b-q11": ["In 0.101001000100001… the run of zeros keeps growing. Is there a fixed block of digits that repeats?"],
  // g9-maths polynomials — Polynomials
  "g9-maths-poly-a-q08": ["Write the constant 9 as 9 × x raised to some power. Which power of x equals 1?"],
  "g9-maths-poly-b-q17": ["Multiply x by each term of x² + x + 1, then multiply −1 by each term, and collect like terms."],
  "g9-maths-poly-b-q18": ["Every point on the x-axis has the same y-value. Substitute it into y = x² − 1 and solve for x."],
  // g9-maths coordinate-geometry — Coordinate Geometry
  "g9-maths-coord-a-q08": ["Each point has y-coordinate 0, so none moves up or down from the origin. Along which line do they lie?"],
};
