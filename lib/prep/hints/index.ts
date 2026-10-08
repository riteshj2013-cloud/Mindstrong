import type { PrepQuestion } from "../types";
import type { HintOverlay } from "./types";
import { G3_MATHS_HINTS } from "./g3-maths";
import { G3_SCIENCE_HINTS } from "./g3-science";
import { G4_MATHS_HINTS } from "./g4-maths";
import { G4_SCIENCE_HINTS } from "./g4-science";
import { G4_ENGLISH_HINTS } from "./g4-english";
import { G5_MATHS_HINTS } from "./g5-maths";
import { G5_SCIENCE_HINTS } from "./g5-science";
import { G5_ENGLISH_HINTS } from "./g5-english";
import { G8_MATHS_HINTS } from "./g8-maths";
import { G8_SCIENCE_HINTS } from "./g8-science";
import { G8_ENGLISH_HINTS } from "./g8-english";

export type { HintOverlay } from "./types";

const ALL_HINT_OVERLAYS: Record<string, HintOverlay> = {
  ...G3_MATHS_HINTS,
  ...G3_SCIENCE_HINTS,
  ...G4_MATHS_HINTS,
  ...G4_SCIENCE_HINTS,
  ...G4_ENGLISH_HINTS,
  ...G5_MATHS_HINTS,
  ...G5_SCIENCE_HINTS,
  ...G5_ENGLISH_HINTS,
  ...G8_MATHS_HINTS,
  ...G8_SCIENCE_HINTS,
  ...G8_ENGLISH_HINTS,
};

/** Phrases the ingest pipeline stamps when the writer left hints blank. */
export const BOILERPLATE_HINT_MARKERS = [
  "Think about the lesson key ideas.",
  "Eliminate options that do not fit.",
  "Look carefully at the diagram.",
  "Match what you see to the question asked.",
  "Read carefully.",
  "Eliminate impossible options first.",
  "Look for clues in the text.",
  "Eliminate unsupported answers.",
  // Soft chapter-wide stubs (e.g. G5 Eng Ch1 Detective) — overlays replace these.
  "Look, Link, Decide",
  "Eliminate answers the text does not support.",
] as const;

export function isBoilerplateHints(hints: string[] | undefined): boolean {
  if (!hints || hints.length === 0) return true;
  return hints.every((h) =>
    BOILERPLATE_HINT_MARKERS.some((m) => h.includes(m) || m.includes(h)),
  );
}

/**
 * Merge hint overlays onto authored questions.
 * Precedence: authored non-boilerplate hints win; otherwise overlay wins over boilerplate.
 */
export function applyHints(q: PrepQuestion): PrepQuestion {
  const overlay = ALL_HINT_OVERLAYS[q.id];
  if (!overlay || overlay.length === 0) return q;
  if (!isBoilerplateHints(q.hints)) return q;
  return { ...q, hints: overlay };
}

export function applyHintsList(qs: PrepQuestion[]): PrepQuestion[] {
  return qs.map(applyHints);
}

export function hintOverlayStats(): Record<string, number> {
  const packs: Record<string, Record<string, HintOverlay>> = {
    "g3-maths": G3_MATHS_HINTS,
    "g3-science": G3_SCIENCE_HINTS,
    "g4-maths": G4_MATHS_HINTS,
    "g4-science": G4_SCIENCE_HINTS,
    "g4-english": G4_ENGLISH_HINTS,
    "g5-maths": G5_MATHS_HINTS,
    "g5-science": G5_SCIENCE_HINTS,
    "g5-english": G5_ENGLISH_HINTS,
    "g8-maths": G8_MATHS_HINTS,
    "g8-science": G8_SCIENCE_HINTS,
    "g8-english": G8_ENGLISH_HINTS,
  };
  const stats: Record<string, number> = {};
  for (const [k, v] of Object.entries(packs)) stats[k] = Object.keys(v).length;
  stats.total = Object.values(stats).reduce((a, b) => a + b, 0);
  return stats;
}
