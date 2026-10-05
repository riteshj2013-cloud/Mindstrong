import type { PrepQuestion } from "../types";
import type { HintOverlay } from "./types";
import { G4_MATHS_HINTS } from "./g4-maths";
import { G4_SCIENCE_HINTS } from "./g4-science";

export type { HintOverlay } from "./types";

const ALL_HINT_OVERLAYS: Record<string, HintOverlay> = {
  ...G4_MATHS_HINTS,
  ...G4_SCIENCE_HINTS,
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
  const stats: Record<string, number> = {
    "g4-maths": Object.keys(G4_MATHS_HINTS).length,
    "g4-science": Object.keys(G4_SCIENCE_HINTS).length,
  };
  stats.total = Object.values(stats).reduce((a, b) => a + b, 0);
  return stats;
}
