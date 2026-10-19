/**
 * Grade 8 Maths — item-specific hint fixes (fix layer).
 * Source: app repo commit 4291140 (served hints: lib/prep/content + lib/prep/hints overlays). Written 2026-10-19.
 * Items changed: 2 | hints: 2
 * By category (primary): answer-revealing fixed 2
 * Each hint nudges the method using the item's own numbers/objects; none contains the answer,
 * an option letter or "eliminate options". A later hint is a stronger nudge (a first step worked).
 * Merge: these WIN over G8_MATHS_HINTS and over authored question.hints (see applyHints in ../index.ts).
 */
import type { HintOverlay } from "../types";

export const G8_MATHS_HINT_FIXES: Record<string, HintOverlay> = {
  // g8-maths rational-numbers — Rational Numbers
  "g8-maths-rational-a-q09": ["−3/4 is negative, so it sits to the left of the origin. Is it more or less than a whole step left?"],
  "g8-maths-rational-b-q07": ["A number times its multiplicative inverse gives 1. Which rational number can never multiply to give 1?"],
};
