/**
 * Adaptive engine v1 for Reading Champ.
 *
 * Rules (ages 8–10 plan, section 2). Constants are the pilot starting values.
 *
 * Promote one step when ALL of these are true:
 * - at least 60 minutes at the current level
 * - finish credit of at least 2 across the last 3 stories
 * - comprehension 80% or higher
 * - 3 or fewer lookups per 100 words
 * - not skimming (very fast and comprehension still under 80%)
 *
 * A finished Challenge story counts extra: it adds 2 finish credit instead of 1.
 * A Challenge that is abandoned or unfinished is ignored. It never causes a demotion.
 *
 * Demote quietly when, across the last 3 stories that count, either:
 * - 2 or more were abandoned, or
 * - comprehension is under 50%
 * The child-facing label is "easier picks". The word "down" is never used.
 *
 * At most one level change every 7 days.
 * Signals used: completion, time versus expected, comprehension, lookups,
 * re-reads (excluded from the window), and Challenge stories.
 */

import type { Genre, Outcome } from "./types";
import { clampLevel, stepLevel } from "./levels";

export const ADAPTIVE = {
  promoteMinMinutes: 60,
  window: 3,
  promoteMinFinishCredit: 2,
  /** A completed Challenge contributes this much finish credit. */
  challengeFinishCredit: 2,
  promoteMinComprehension: 0.8,
  promoteMaxLookupsPer100: 3,
  demoteMinAbandoned: 2,
  demoteMaxComprehension: 0.5,
  challengeEvery: 4,
  cooldownDays: 7,
  /** Minutes / expected below this, with weak comprehension, blocks promotion. */
  skimRatio: 0.45,
} as const;

export type AdaptiveAction = "promote" | "demote" | "hold";

export interface AdaptiveDecision {
  action: AdaptiveAction;
  nextLevel: number;
  /** What the child may see. Demotion is never described as going down. */
  kidLabel: "same" | "easier-picks" | "new-stories";
  reasons: string[];
}

export interface AdaptiveInput {
  genre: Genre;
  currentLevel: number;
  outcomes: Outcome[];
  lastLevelChangeAt: string | null;
  now: string;
}

function daysBetween(earlierIso: string, laterIso: string): number {
  return (Date.parse(laterIso) - Date.parse(earlierIso)) / 86_400_000;
}

/** Stories that are allowed to affect promote / demote. */
export function outcomesThatCount(outcomes: Outcome[], genre: Genre, level: number): Outcome[] {
  return outcomes.filter(
    (o) =>
      o.genre === genre &&
      o.readerLevel === level &&
      !o.reread &&
      !(o.isChallenge && !o.finished),
  );
}

export function minutesOnLevel(outcomes: Outcome[], genre: Genre, level: number): number {
  return outcomesThatCount(outcomes, genre, level).reduce((sum, o) => {
    if (o.isChallenge && !o.finished) return sum;
    return sum + o.minutes;
  }, 0);
}

function mean(nums: number[]): number | null {
  if (nums.length === 0) return null;
  return nums.reduce((a, b) => a + b, 0) / nums.length;
}

export function evaluateLevel(input: AdaptiveInput): AdaptiveDecision {
  const level = clampLevel(input.currentLevel);
  const hold = (reasons: string[]): AdaptiveDecision => ({
    action: "hold",
    nextLevel: level,
    kidLabel: "same",
    reasons,
  });

  if (
    input.lastLevelChangeAt &&
    daysBetween(input.lastLevelChangeAt, input.now) < ADAPTIVE.cooldownDays
  ) {
    return hold(["A level can change only once every 7 days."]);
  }

  const counted = outcomesThatCount(input.outcomes, input.genre, level);
  const window = counted.slice(-ADAPTIVE.window);
  if (window.length < ADAPTIVE.window) {
    return hold(["Need 3 stories at this level before a change."]);
  }

  const abandoned = window.filter((o) => o.abandoned).length;
  const compValues = window
    .map((o) => o.comprehension)
    .filter((n): n is number => n != null);
  const comp = mean(compValues);
  const demote =
    abandoned >= ADAPTIVE.demoteMinAbandoned ||
    (comp != null && comp < ADAPTIVE.demoteMaxComprehension);

  if (demote) {
    return {
      action: "demote",
      nextLevel: stepLevel(level, -1),
      kidLabel: "easier-picks",
      reasons: [
        abandoned >= ADAPTIVE.demoteMinAbandoned
          ? "2 of the last 3 stories were left unfinished."
          : "Comprehension on the last 3 stories is under 50%.",
      ],
    };
  }

  const finishCredit = window.reduce((sum, o) => {
    if (!o.finished) return sum;
    return sum + (o.isChallenge ? ADAPTIVE.challengeFinishCredit : 1);
  }, 0);
  const lookups = window.reduce((sum, o) => sum + o.lookups, 0);
  const wordTotal = window.reduce((sum, o) => sum + o.wordCount, 0);
  const per100 = wordTotal === 0 ? 0 : (lookups / wordTotal) * 100;
  const minutes = minutesOnLevel(input.outcomes, input.genre, level);
  const ratios = window
    .filter((o) => o.expectedMinutes > 0)
    .map((o) => o.minutes / o.expectedMinutes);
  const avgRatio = mean(ratios);
  const skimming =
    avgRatio != null && avgRatio < ADAPTIVE.skimRatio && (comp == null || comp < ADAPTIVE.promoteMinComprehension);

  const reasons: string[] = [];
  if (minutes < ADAPTIVE.promoteMinMinutes) reasons.push("Fewer than 60 minutes at this level.");
  if (finishCredit < ADAPTIVE.promoteMinFinishCredit) reasons.push("Fewer than 2 of the last 3 stories finished.");
  if (comp == null || comp < ADAPTIVE.promoteMinComprehension) {
    reasons.push("Comprehension is under 80%.");
  }
  if (per100 > ADAPTIVE.promoteMaxLookupsPer100) reasons.push("More than 3 word lookups per 100 words.");
  if (skimming) reasons.push("Reading looks very fast for the comprehension score.");

  if (reasons.length > 0) return hold(reasons);

  return {
    action: "promote",
    nextLevel: stepLevel(level, 1),
    kidLabel: "new-stories",
    reasons: ["60 minutes, finish credit, comprehension, and lookups all cleared the bar."],
  };
}

export function isChallengeSlot(storiesStarted: number, nudge: -1 | 0 | 1): boolean {
  if (nudge < 0) return false;
  if (nudge > 0) return true;
  return storiesStarted % ADAPTIVE.challengeEvery === ADAPTIVE.challengeEvery - 1;
}
