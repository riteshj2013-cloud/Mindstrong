/**
 * Grade 9 English — item-specific hint fixes (ts-ready overlay).
 * Source: app repo commit 8bfc38d (lib/prep/content + lib/prep/hints). Written 2026-10-19.
 * Items changed: 3 | hints: 6
 * By category (primary): generic replaced 0 · answer-revealing fixed 0 · shared-hint split 3
 * Each entry is [hint1 (gentle nudge), hint2 (stronger nudge)]. Neither gives the answer.
 * Merge: these must WIN over G9_ENGLISH_HINTS and over authored question.hints (see README-2026-10-19.md).
 */
import type { HintOverlay } from "../types";

export const G9_ENGLISH_HINT_FIXES: Record<string, HintOverlay> = {
  // g9-english-words — Writing & Vocabulary
  "g9-eng-ch03-a-q07": ["A \"diligent\" student finishes every task carefully and on time.", "\"lazy\" is the opposite of diligent; which word describes steady effort?"],
  "g9-eng-ch03-a-q21": ["A \"courageous\" person faces danger without running away.", "\"timid\" is the opposite of courageous."],
  "g9-eng-ch03-b-q08": ["Someone \"reluctant\" agrees slowly, without wanting to.", "\"eager\" and \"joyful\" are opposites; which choice means not willing?"],
};
