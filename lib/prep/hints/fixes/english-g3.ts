/**
 * Grade 3 English — item-specific hint fixes (ts-ready overlay).
 * Source: app repo commit 8bfc38d (lib/prep/content + lib/prep/hints). Written 2026-10-19.
 * Items changed: 4 | hints: 8
 * By category (primary): generic replaced 0 · answer-revealing fixed 0 · shared-hint split 4
 * Each entry is [hint1 (gentle nudge), hint2 (stronger nudge)]. Neither gives the answer.
 * Merge: these must WIN over G3_ENGLISH_HINTS and over authored question.hints (see README-2026-10-19.md).
 */
import type { HintOverlay } from "../types";

export const G3_ENGLISH_HINT_FIXES: Record<string, HintOverlay> = {
  // g3-english-grammar — Grammar Basics
  "g3-eng-grammar-a-q01": ["A noun names a person, place or thing you can point to.", "Run is an action and happy is a feeling; which word is a place?"],
  "g3-eng-grammar-a-q05": ["A verb is something you can do with your body.", "Table names a thing, and blue and soft describe; which can you do?"],
  "g3-eng-grammar-b-q01": ["A noun can follow \"the\", like the name of a place.", "Sing is an action and bright describes; which one is a place?"],
  "g3-eng-grammar-b-q05": ["A verb fits after \"I can ___\".", "Desk is a noun, and happy and green describe; which word is an action?"],
};
