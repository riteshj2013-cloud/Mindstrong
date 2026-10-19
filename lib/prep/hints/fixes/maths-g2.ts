/**
 * Grade 2 Maths — item-specific hint fixes (fix layer).
 * Source: app repo commit 4291140 (served hints: lib/prep/content + lib/prep/hints overlays). Written 2026-10-19.
 * Items changed: 12 | hints: 19
 * By category (primary): answer-revealing fixed 11 · generic replaced 1
 * Each hint nudges the method using the item's own numbers/objects; none contains the answer,
 * an option letter or "eliminate options". A later hint is a stronger nudge (a first step worked).
 * Merge: these WIN over G2_MATHS_HINTS and over authored question.hints (see applyHints in ../index.ts).
 */
import type { HintOverlay } from "../types";

export const G2_MATHS_HINT_FIXES: Record<string, HintOverlay> = {
  // g2-maths place-value — Place Value
  "g2-maths-place-a-q03": ["Tens are bundles of 10. How many bundles make 30?", "Count in tens up to 30 and keep a finger up for each ten."],
  "g2-maths-place-a-q09": ["In 45, the left digit tells the tens and the right digit tells the ones.", "Count in tens up to 40, then count the extra ones to reach 45."],
  "g2-maths-place-a-q10": ["A two-digit number needs a tens digit that is not zero. Count up past 9."],
  "g2-maths-place-a-q15": ["The ones digit is the right-hand digit of 80.", "80 is made of 8 tens. Are any extra ones left over after the tens?"],
  "g2-maths-place-b-q03": ["Count in tens up to 70 and keep a finger up for each ten."],
  "g2-maths-place-b-q09": ["Count in tens all the way up to 100.", "Count by tens to 100 and keep one finger up for each number you say."],
  "g2-maths-place-b-q15": ["The ones digit is the right-hand digit of 44.", "Take the tens out of 44. How many single ones are left?"],
  // g2-maths add-subtract — Add & Subtract
  "g2-maths-addsub-a-q16": ["Work out 10 − 3 by counting back from 10.", "Start at 10 and say three numbers going down. Where do you stop?"],
  "g2-maths-addsub-b-q16": ["Work out the addition 12 + 3 by counting on from 12.", "Say 12, then three more numbers. Which fact ends with the number you stopped on?"],
  // g2-maths time-money — Time & Money
  "g2-maths-timemoney-a-q07": ["Half past 2: the minute hand is halfway round. Half of 60 minutes is how many?"],
  "g2-maths-timemoney-a-q15": ["Quarter past 4: the minute hand goes a quarter of the way round. Split 60 minutes into 4 equal parts."],
  "g2-maths-timemoney-b-q07": ["Half past 5: the minute hand points straight down. Each clock number is 5 minutes."],
};
