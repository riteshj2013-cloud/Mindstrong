/**
 * Grade 7 Maths — item-specific hint fixes (fix layer).
 * Source: app repo commit 4291140 (served hints: lib/prep/content + lib/prep/hints overlays). Written 2026-10-19.
 * Items changed: 14 | hints: 14
 * By category (primary): answer-revealing fixed 14
 * Each hint nudges the method using the item's own numbers/objects; none contains the answer,
 * an option letter or "eliminate options". A later hint is a stronger nudge (a first step worked).
 * Merge: these WIN over G7_MATHS_HINTS and over authored question.hints (see applyHints in ../index.ts).
 */
import type { HintOverlay } from "../types";

export const G7_MATHS_HINT_FIXES: Record<string, HintOverlay> = {
  // g7-maths integers — Integers
  "g7-maths-integers-a-q21": ["−15 and 15 are opposites, the same distance from the start on either side of the number line. What do they add to?"],
  "g7-maths-integers-b-q02": ["In a + b = b + a, only the order of a and b changes. Which property is about swapping the order?"],
  "g7-maths-integers-b-q20": ["In a × (b + c), a multiplies each term inside the bracket. Which property spreads × over +?"],
  // g7-maths simple-equations — Simple Equations
  "g7-maths-equations-a-q06": ["Undo the subtraction first, so 5p equals 16 plus the amount taken away. Then divide by 5."],
  "g7-maths-equations-a-q23": ["Subtract 2x from both sides of 2x + 5 = 2x + 9. Is what remains ever true?"],
  "g7-maths-equations-b-q20": ["Divide 12 by the number outside the bracket to find x + 1, then subtract 1."],
  "g7-maths-equations-b-q24": ["A linear equation such as 2x + 5 = 9 has no x² or x³ term. What power of the variable is left?"],
  // g7-maths lines-angles — Lines and Angles
  "g7-maths-angles-a-q10": ["Adjacent angles on a straight line make a half-turn. A full turn is 360°."],
  "g7-maths-angles-a-q14": ["Tear off the corners of a paper triangle and line them up. They make a straight line."],
  "g7-maths-angles-a-q18": ["Corresponding angles sit in the same position at each crossing of the transversal. Slide one onto the other: do they match?"],
  "g7-maths-angles-b-q03": ["Supplementary angles add to 180°. If an angle equals its supplement, then x + x = 180°."],
  "g7-maths-angles-b-q09": ["Two adjacent angles that together make a straight line add to 180°. Which pair name means 'on a line'?"],
  "g7-maths-angles-b-q19": ["Draw a transversal across parallel lines and measure the corresponding angles at both crossings. Compare them."],
  "g7-maths-angles-b-q20": ["270° is more than a straight angle of 180° but less than a full turn of 360°. Name that angle type."],
};
