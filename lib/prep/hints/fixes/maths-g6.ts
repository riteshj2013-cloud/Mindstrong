/**
 * Grade 6 Maths — item-specific hint fixes (fix layer).
 * Source: app repo commit 4291140 (served hints: lib/prep/content + lib/prep/hints overlays). Written 2026-10-19.
 * Items changed: 12 | hints: 12
 * By category (primary): answer-revealing fixed 11 · generic replaced 1
 * Each hint nudges the method using the item's own numbers/objects; none contains the answer,
 * an option letter or "eliminate options". A later hint is a stronger nudge (a first step worked).
 * Merge: these WIN over G6_MATHS_HINTS and over authored question.hints (see applyHints in ../index.ts).
 */
import type { HintOverlay } from "../types";

export const G6_MATHS_HINT_FIXES: Record<string, HintOverlay> = {
  // g6-maths integers — Integers
  "g6-maths-int-a-q15": ["Start at 0 on the number line and move 1 step left for each (−1). Where do you stop?"],
  "g6-maths-int-b-q21": ["Check each factor between −2 and 17. Multiplying by nothing at all gives nothing."],
  // g6-maths fractions-decimals — Fractions & Decimals
  "g6-maths-frac-a-q15": ["Split 2.5 into 2 and 0.5, multiply each part by 4, then add."],
  // g6-maths basic-geometry — Basic Geometry
  "g6-maths-geo-a-q03": ["Acute is less than 90° and obtuse is more. Name the square-corner angle of exactly 90°."],
  "g6-maths-geo-a-q09": ["Draw a quadrilateral, such as a kite or a rectangle, and count its sides."],
  "g6-maths-geo-a-q10": ["All angles 90° gives a rectangle shape. Which rectangle also has all its sides equal?"],
  "g6-maths-geo-a-q12": ["Perpendicular lines meet like the edges at a corner of a book. What angle is that square corner?"],
  "g6-maths-geo-a-q13": ["The distance from the centre of a circle to any point on it is half the diameter. What is it called?"],
  "g6-maths-geo-a-q16": ["A closed figure with straight line segments as sides, like a triangle or hexagon, has a general name. What is it?"],
  "g6-maths-geo-a-q24": ["A chord through the centre goes right across the circle and is twice the radius. Name it."],
  "g6-maths-geo-b-q01": ["Count endpoints: a segment has two and a ray has one. Which figure has no endpoints at all?"],
  "g6-maths-geo-b-q15": ["Count the edges of a cube: the top face has 4, the bottom face has 4, then add the upright edges."],
};
