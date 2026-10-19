/**
 * Grade 3 Maths — item-specific hint fixes (fix layer).
 * Source: app repo commit 4291140 (served hints: lib/prep/content + lib/prep/hints overlays). Written 2026-10-19.
 * Items changed: 10 | hints: 10
 * By category (primary): answer-revealing fixed 10
 * Each hint nudges the method using the item's own numbers/objects; none contains the answer,
 * an option letter or "eliminate options". A later hint is a stronger nudge (a first step worked).
 * Merge: these WIN over G3_MATHS_HINTS and over authored question.hints (see applyHints in ../index.ts).
 */
import type { HintOverlay } from "../types";

export const G3_MATHS_HINT_FIXES: Record<string, HintOverlay> = {
  // g3-maths numbers — Numbers
  "g3-maths-numbers-a-q18": ["List 21 to 29. Odd numbers end in an odd digit, like 21 or 23. Count them."],
  "g3-maths-numbers-b-q05": ["Pair up the dots in each group. The odd group has one dot left without a partner."],
  "g3-maths-numbers-b-q17": ["Count in hundreds: 100, 200, 300… up to 1000. Count your steps."],
  "g3-maths-numbers-b-q18": ["List 11 to 21 and circle the numbers ending in 0, 2, 4, 6 or 8. Count the circles."],
  // g3-maths multiply — Multiply Basics
  "g3-maths-multiply-a-q06": ["Think of 7 empty plates with no sweets on any plate. How many sweets in all?"],
  "g3-maths-multiply-a-q10": ["Count how many jumps are in 5, 10, 15, 20, 25, and how big each jump is."],
  "g3-maths-multiply-a-q16": ["Double 9 means 9 + 9. How many groups of 9 is that?"],
  "g3-maths-multiply-b-q06": ["Think of 5 empty boxes with nothing inside. How many things in all?"],
  "g3-maths-multiply-b-q10": ["Count how many jumps are in 4, 8, 12, 16, and how big each jump is."],
  "g3-maths-multiply-b-q16": ["Double 8 means 8 + 8. How many groups of 8 is that?"],
};
