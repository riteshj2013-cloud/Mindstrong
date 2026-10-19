/**
 * Grade 7 English — item-specific hint fixes (ts-ready overlay).
 * Source: app repo commit 8bfc38d (lib/prep/content + lib/prep/hints). Written 2026-10-19.
 * Items changed: 9 | hints: 18
 * By category (primary): generic replaced 0 · answer-revealing fixed 0 · shared-hint split 9
 * Each entry is [hint1 (gentle nudge), hint2 (stronger nudge)]. Neither gives the answer.
 * Merge: these must WIN over G7_ENGLISH_HINTS and over authored question.hints (see README-2026-10-19.md).
 */
import type { HintOverlay } from "../types";

export const G7_ENGLISH_HINT_FIXES: Record<string, HintOverlay> = {
  // g7-english-words — Word Power
  "g7-eng-words-a-q06": ["\"ancient\" describes ruins, temples and very early times in history.", "\"brand new\" is the opposite; find the meaning that fits ancient ruins."],
  "g7-eng-words-a-q16": ["\"precise\" measurements leave no room for error.", "Vague is its opposite; which word means correct in every detail?"],
  "g7-eng-words-a-q18": ["A \"reluctant\" student goes slowly and drags their feet.", "Eager is the opposite of reluctant; which choice means not wanting to?"],
  "g7-eng-words-a-q22": ["\"fragile\" is written on parcels holding glass or china.", "Sturdy is the opposite; which word means easily broken?"],
  "g7-eng-words-b-q01": ["To \"abandon\" a sinking ship is to get off and go away from it.", "Adopt and repair mean keeping or caring for something — find the opposite idea."],
  "g7-eng-words-b-q10": ["A \"vast\" desert or ocean stretches as far as the eye can see.", "Tiny and narrow are opposites of vast."],
  "g7-eng-words-b-q15": ["A \"brief\" meeting is over quickly.", "Endless is the opposite of brief; find the word about length of time."],
  "g7-eng-words-b-q18": ["An \"optimistic\" person looks on the bright side.", "\"sure of disaster\" is the opposite attitude of optimistic."],
  "g7-eng-words-b-q20": ["\"rapid\" describes a rushing river or a fast train.", "Slow and late are opposites of rapid."],
};
