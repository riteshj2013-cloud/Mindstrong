import type { PrepQuestion } from "../types";

/**
 * Logical-reasoning-style and Achievers (multi-step) English items for the mock paper.
 * They live INSIDE existing chapter sets (no new chapters): `withMockAddenda()` appends each
 * item to `chapterId` / `setId`, and `getMockPaper()` serves every addendum item of the grade
 * as a closing block of the English mock.
 */
export type MockSection = "logical-reasoning" | "achievers";
export type MockDifficulty = "easy" | "medium" | "hard";

export interface MockAddendumItem {
  /** Existing ChapterDef.id in the grade's English pack. */
  chapterId: string;
  /** Existing ChapterSet.id inside that chapter ("set-a" | "set-b"). */
  setId: string;
  section: MockSection;
  /** Skill tag, e.g. "letter-series", "dictionary-order", "error-underlined-part". */
  skill: string;
  difficulty: MockDifficulty;
  question: PrepQuestion;
}
