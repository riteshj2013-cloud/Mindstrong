import type { ChapterDef, Grade, PrepQuestion, PrepSubject } from "../types";
import type { MockAddendumItem } from "./types";
import { G1_ENGLISH_LR_ACHIEVERS } from "./english-g1-lr-achievers";
import { G2_ENGLISH_LR_ACHIEVERS } from "./english-g2-lr-achievers";
import { G3_ENGLISH_LR_ACHIEVERS } from "./english-g3-lr-achievers";
import { G4_ENGLISH_LR_ACHIEVERS } from "./english-g4-lr-achievers";
import { G5_ENGLISH_LR_ACHIEVERS } from "./english-g5-lr-achievers";
import { G6_ENGLISH_LR_ACHIEVERS } from "./english-g6-lr-achievers";
import { G7_ENGLISH_LR_ACHIEVERS } from "./english-g7-lr-achievers";
import { G8_ENGLISH_LR_ACHIEVERS } from "./english-g8-lr-achievers";
import { G9_ENGLISH_LR_ACHIEVERS } from "./english-g9-lr-achievers";
import { G10_ENGLISH_LR_ACHIEVERS } from "./english-g10-lr-achievers";
import { G1_MATHS_LR_ACHIEVERS } from "./maths-g1-lr-achievers";
import { G2_MATHS_LR_ACHIEVERS } from "./maths-g2-lr-achievers";
import { G3_MATHS_LR_ACHIEVERS } from "./maths-g3-lr-achievers";
import { G4_MATHS_LR_ACHIEVERS } from "./maths-g4-lr-achievers";
import { G5_MATHS_LR_ACHIEVERS } from "./maths-g5-lr-achievers";
import { G6_MATHS_LR_ACHIEVERS } from "./maths-g6-lr-achievers";
import { G7_MATHS_LR_ACHIEVERS } from "./maths-g7-lr-achievers";
import { G8_MATHS_LR_ACHIEVERS } from "./maths-g8-lr-achievers";
import { G9_MATHS_LR_ACHIEVERS } from "./maths-g9-lr-achievers";
import { G10_MATHS_LR_ACHIEVERS } from "./maths-g10-lr-achievers";

export type { MockAddendumItem, MockSection, MockDifficulty } from "./types";

/** English mock addenda by grade (LR-style + Achievers). */
export const ENGLISH_MOCK_ADDENDA: Partial<Record<Grade, MockAddendumItem[]>> = {
  1: G1_ENGLISH_LR_ACHIEVERS,
  2: G2_ENGLISH_LR_ACHIEVERS,
  3: G3_ENGLISH_LR_ACHIEVERS,
  4: G4_ENGLISH_LR_ACHIEVERS,
  5: G5_ENGLISH_LR_ACHIEVERS,
  6: G6_ENGLISH_LR_ACHIEVERS,
  7: G7_ENGLISH_LR_ACHIEVERS,
  8: G8_ENGLISH_LR_ACHIEVERS,
  9: G9_ENGLISH_LR_ACHIEVERS,
  10: G10_ENGLISH_LR_ACHIEVERS,
};

/** Maths mock addenda by grade (7 logical-reasoning + 5 Achievers). Science has none yet. */
export const MATHS_MOCK_ADDENDA: Partial<Record<Grade, MockAddendumItem[]>> = {
  1: G1_MATHS_LR_ACHIEVERS,
  2: G2_MATHS_LR_ACHIEVERS,
  3: G3_MATHS_LR_ACHIEVERS,
  4: G4_MATHS_LR_ACHIEVERS,
  5: G5_MATHS_LR_ACHIEVERS,
  6: G6_MATHS_LR_ACHIEVERS,
  7: G7_MATHS_LR_ACHIEVERS,
  8: G8_MATHS_LR_ACHIEVERS,
  9: G9_MATHS_LR_ACHIEVERS,
  10: G10_MATHS_LR_ACHIEVERS,
};

export function mockAddendaFor(subject: PrepSubject, grade: Grade): MockAddendumItem[] {
  if (subject === "english") return ENGLISH_MOCK_ADDENDA[grade] ?? [];
  if (subject === "maths") return MATHS_MOCK_ADDENDA[grade] ?? [];
  return [];
}

/**
 * Append each addendum item to its existing chapter set (no new chapters, no new sets).
 * Returns new ChapterDef objects; the imported content modules are not mutated.
 * Throws in dev if an item points at a chapter/set that does not exist, so a renamed
 * chapter cannot silently drop items.
 */
export function withMockAddenda(subject: PrepSubject, grade: Grade, chapters: ChapterDef[]): ChapterDef[] {
  const extra = mockAddendaFor(subject, grade);
  if (!extra.length) return chapters;
  const bySet = new Map<string, PrepQuestion[]>();
  for (const it of extra) {
    const k = `${it.chapterId}/${it.setId}`;
    bySet.set(k, [...(bySet.get(k) ?? []), it.question]);
  }
  const placed = new Set<string>();
  const out = chapters.map((c) => ({
    ...c,
    sets: c.sets.map((s) => {
      const k = `${c.id}/${s.id}`;
      const add = bySet.get(k);
      if (!add || !s.questions?.length) return s;
      placed.add(k);
      return { ...s, questions: [...s.questions, ...add], questionCount: s.questions.length + add.length };
    }),
  }));
  const missing = [...bySet.keys()].filter((k) => !placed.has(k));
  if (missing.length && process.env.NODE_ENV !== "production") {
    throw new Error(`mock addenda for ${subject}-g${grade} point at unknown sets: ${missing.join(", ")}`);
  }
  return out;
}

/** Ordered closing block for the mock paper: LR easy → hard, then Achievers. */
export function mockBlockFor(subject: PrepSubject, grade: Grade): PrepQuestion[] {
  const rank = { easy: 0, medium: 1, hard: 2 } as const;
  const sec = { "logical-reasoning": 0, achievers: 1 } as const;
  return [...mockAddendaFor(subject, grade)]
    .map((it, i) => ({ it, i }))
    .sort((a, b) => sec[a.it.section] - sec[b.it.section] || rank[a.it.difficulty] - rank[b.it.difficulty] || a.i - b.i)
    .map(({ it }) => it.question);
}

/**
 * Mock length. With an addendum block, English mocks follow the olympiad-style totals used in
 * the writer guidelines (35 for Classes 1–4, 50 for Classes 5–10); otherwise the pack default.
 * Maths keeps the pack default (30): its 12-item block replaces the last 12 sampled items,
 * so a Maths mock is 18 sampled chapter items + the closing block.
 */
export function mockPaperCount(subject: PrepSubject, grade: Grade, fallback: number): number {
  if (subject !== "english" || !mockAddendaFor(subject, grade).length) return fallback;
  return grade <= 4 ? 35 : 50;
}
