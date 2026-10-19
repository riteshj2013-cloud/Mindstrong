/**
 * Grade 5 Maths — item-specific hint fixes (fix layer).
 * Source: app repo commit 4291140 (served hints: lib/prep/content + lib/prep/hints overlays). Written 2026-10-19.
 * Items changed: 14 | hints: 14
 * By category (primary): answer-revealing fixed 14
 * Each hint nudges the method using the item's own numbers/objects; none contains the answer,
 * an option letter or "eliminate options". A later hint is a stronger nudge (a first step worked).
 * Merge: these WIN over G5_MATHS_HINTS and over authored question.hints (see applyHints in ../index.ts).
 */
import type { HintOverlay } from "../types";

export const G5_MATHS_HINT_FIXES: Record<string, HintOverlay> = {
  // g5-maths shapes-angles — Shapes and Angles
  "g5-maths-angles-a-q03": ["A straight angle is a half-turn. A full turn is 360°; halve it."],
  "g5-maths-angles-a-q04": ["Point V is where the two arms of the angle meet. What is that corner point called?"],
  "g5-maths-angles-a-q07": ["Compare the labelled 55° with a right angle of 90°. Which type of angle is smaller than a right angle?"],
  "g5-maths-angles-b-q02": ["Is 170° more than a right angle of 90° but less than a straight angle of 180°? Name that type."],
  "g5-maths-angles-b-q17": ["Point B is the vertex where the arms meet. In a three-letter angle name, the vertex goes in the middle."],
  "g5-maths-angles-b-q22": ["The two parts together make the right angle of 90°. Subtract the known part from 90°."],
  // g5-maths measurement-area — Measurement & Area
  "g5-maths-meas-a-q01": ["A metre ruler is marked in centimetres. How many centimetre marks run along the whole metre?"],
  "g5-maths-meas-a-q02": ["Think of the prefix 'kilo': how many grams are in a kilogram? A kilometre uses the same prefix with metres."],
  "g5-maths-meas-a-q03": ["Think of the prefix 'kilo': how many metres are in a kilometre? A kilogram uses the same prefix with grams."],
  "g5-maths-meas-a-q04": ["A millilitre is a tiny part of a litre, just as a millimetre is of a metre. How many millimetres make a metre?"],
  "g5-maths-meas-b-q01": ["Look at a ruler: count the small millimetre marks between 0 and 1 centimetre."],
  // g5-maths data-handling — Data Handling
  "g5-maths-data-a-q02": ["Count the strokes in one tally bundle: the four upright lines plus the diagonal stroke."],
  "g5-maths-data-a-q06": ["Think of tally marks counting how many times each value appears. What is that count called?"],
  "g5-maths-data-a-q07": ["A tally bundle is a group of upright strokes with a slash. Take one bundle away from 7 and count what is left."],
};
