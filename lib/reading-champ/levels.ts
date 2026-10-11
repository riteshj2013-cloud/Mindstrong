/**
 * 24-level ladder (bands A–D, six steps each) for ages about 4–12.
 * S1–S5 are the ages 8–10 slice and sit on ladder levels 5–9.
 * Ceilings outside that slice are provisional until a specialist tunes them.
 */

export interface LevelCeiling {
  ladder: number;
  band: "A" | "B" | "C" | "D";
  step: number;
  /** S1–S5 when this rung is in the ages 8–10 slice, otherwise null. */
  sCode: string | null;
  maxWordsPerBubble: number;
  maxPanelsPerPage: number;
  maxWordsPerPage: number;
  maxWordsPerSentence: number;
  maxAvgSentence: number;
  /** Style guide. The linter warns, it does not block publish. */
  maxSentencesPerPanel: number;
  maxAdvancedWords: number;
}

export const LADDER_MIN = 1;
export const LADDER_MAX = 24;
export const S_SLICE_START = 5;
export const S_SLICE_END = 9;

/** Published sample library starts at S1. Lower rungs stay in the model. */
export const CONTENT_FLOOR = 5;

const S_CEILINGS: Record<number, Omit<LevelCeiling, "ladder" | "band" | "step" | "sCode">> = {
  5: {
    maxWordsPerBubble: 12,
    maxPanelsPerPage: 3,
    maxWordsPerPage: 40,
    maxWordsPerSentence: 12,
    maxAvgSentence: 8,
    maxSentencesPerPanel: 2,
    maxAdvancedWords: 4,
  },
  6: {
    maxWordsPerBubble: 16,
    maxPanelsPerPage: 4,
    maxWordsPerPage: 55,
    maxWordsPerSentence: 14,
    maxAvgSentence: 10,
    maxSentencesPerPanel: 3,
    maxAdvancedWords: 6,
  },
  7: {
    maxWordsPerBubble: 20,
    maxPanelsPerPage: 4,
    maxWordsPerPage: 70,
    maxWordsPerSentence: 16,
    maxAvgSentence: 12,
    maxSentencesPerPanel: 3,
    maxAdvancedWords: 8,
  },
  8: {
    maxWordsPerBubble: 25,
    maxPanelsPerPage: 5,
    maxWordsPerPage: 90,
    maxWordsPerSentence: 18,
    maxAvgSentence: 14,
    maxSentencesPerPanel: 4,
    maxAdvancedWords: 10,
  },
  9: {
    maxWordsPerBubble: 30,
    maxPanelsPerPage: 5,
    maxWordsPerPage: 110,
    maxWordsPerSentence: 22,
    maxAvgSentence: 16,
    maxSentencesPerPanel: 4,
    maxAdvancedWords: 12,
  },
};

export function clampLevel(level: number): number {
  return Math.min(LADDER_MAX, Math.max(LADDER_MIN, Math.round(level)));
}

export function stepLevel(level: number, delta: number): number {
  return clampLevel(level + delta);
}

export function bandOf(level: number): "A" | "B" | "C" | "D" {
  const index = clampLevel(level) - 1;
  return (["A", "B", "C", "D"] as const)[Math.floor(index / 6)];
}

export function sCode(level: number): string | null {
  if (level >= S_SLICE_START && level <= S_SLICE_END) return `S${level - 4}`;
  return null;
}

function provisional(level: number): Omit<LevelCeiling, "ladder" | "band" | "step" | "sCode"> {
  const t = (clampLevel(level) - 1) / 23;
  return {
    maxWordsPerBubble: Math.round(3 + t * 32),
    maxPanelsPerPage: level < 7 ? 3 : level < 13 ? 4 : 5,
    maxWordsPerPage: Math.round(12 + t * 110),
    maxWordsPerSentence: Math.round(6 + t * 12),
    maxAvgSentence: Math.round(4 + t * 12),
    maxSentencesPerPanel: level < 7 ? 2 : 4,
    maxAdvancedWords: Math.round(2 + t * 14),
  };
}

export function ceilingFor(level: number): LevelCeiling {
  const ladder = clampLevel(level);
  const body = S_CEILINGS[ladder] ?? provisional(ladder);
  return {
    ladder,
    band: bandOf(ladder),
    step: ((ladder - 1) % 6) + 1,
    sCode: sCode(ladder),
    ...body,
  };
}

/** Parent-facing words. No level codes and no history. */
export function plainWords(level: number): string {
  const ladder = clampLevel(level);
  if (ladder <= 4) return "picture stories";
  if (ladder === 5) return "early chapter comics";
  if (ladder === 6) return "chapter comics";
  if (ladder === 7) return "longer chapter comics";
  if (ladder === 8) return "richer stories";
  if (ladder === 9) return "big-idea stories";
  if (ladder <= 16) return "advanced comics";
  return "long reads";
}

export const PARENT_LEVEL_CHOICES = [5, 6, 7, 8, 9] as const;

/**
 * Placement can land below S1. The sample library has no stories there yet,
 * so the profile floors at S1 until lower-band comics exist.
 * Non-fiction stays one step lower when that step is still inside the library.
 */
export function levelsForLibrary(
  raw: { fiction: number; nonfiction: number },
  minLevel = CONTENT_FLOOR,
): { fiction: number; nonfiction: number } {
  const fiction = Math.max(minLevel, clampLevel(raw.fiction));
  let nonfiction = Math.max(minLevel, clampLevel(raw.nonfiction));
  if (raw.nonfiction < raw.fiction && fiction > minLevel) {
    nonfiction = Math.min(nonfiction, fiction - 1);
  }
  return { fiction, nonfiction };
}
