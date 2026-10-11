/**
 * Story Scout placement.
 * Start at S2 with one fiction strip and one non-fiction strip, two taps each.
 * Pass a strip only when both taps are right.
 * Pass that probe: try S3. Miss: try S1.
 * Place one level below the highest passed. If nothing was passed, stay at S1.
 * Non-fiction then starts one level lower than fiction when the ladder allows.
 */

import type { Genre, PlacementProgress } from "./types";
import { levelsForLibrary } from "./levels";

export type ProbeLevel = 5 | 6 | 7;

export function initialPlacement(): PlacementProgress {
  return {
    pending: [
      { genre: "fiction", level: 6 },
      { genre: "nonfiction", level: 6 },
    ],
    results: [],
  };
}

/** Both comprehension taps must be correct. */
export function stripPassed(correct: number, total: number): boolean {
  return total > 0 && correct === total;
}

export function advancePlacement(state: PlacementProgress, passed: boolean): PlacementProgress {
  const [current, ...rest] = state.pending;
  if (!current) return state;
  const results = [...state.results, { genre: current.genre, level: current.level, passed }];
  let pending = rest;
  const genreResults = results.filter((r) => r.genre === current.genre);
  const followedUp = genreResults.some((r) => r.level !== 6) || pending.some((p) => p.genre === current.genre);
  if (!followedUp) {
    const s2 = genreResults.find((r) => r.level === 6);
    if (s2) {
      const next: ProbeLevel = s2.passed ? 7 : 5;
      pending = [...pending, { genre: current.genre, level: next }];
    }
  }
  return { pending, results };
}

function placeGenre(results: PlacementProgress["results"], genre: Genre): number {
  const mine = results.filter((r) => r.genre === genre);
  const passed = mine.filter((r) => r.passed).map((r) => r.level);
  if (passed.length === 0) return 5;
  return Math.max(1, Math.max(...passed) - 1);
}

/** Raw ladder placement, before the sample-library floor. Null while probes remain. */
export function placementResult(
  state: PlacementProgress,
): { fiction: number; nonfiction: number } | null {
  if (state.pending.length > 0) return null;
  const fiction = placeGenre(state.results, "fiction");
  let nonfiction = placeGenre(state.results, "nonfiction");
  if (nonfiction >= fiction) nonfiction = Math.max(1, fiction - 1);
  return { fiction, nonfiction };
}

export function placementForLibrary(state: PlacementProgress) {
  const raw = placementResult(state);
  if (!raw) return null;
  return { raw, served: levelsForLibrary(raw) };
}
