/**
 * Pick 1 of 3.
 * Slot 1: a familiar series at the child's level.
 * Slot 2: a new topic, preferring a theme they have barely seen.
 * Slot 3: non-fiction, or a Challenge one level up on every 4th story.
 * Only reviewed stories are eligible. Drafts are never returned.
 */

import { isChallengeSlot } from "./adaptive";
import { rankCandidates } from "./interests";
import { clampLevel } from "./levels";
import type { Genre, InterestState, StoryMeta } from "./types";

export interface ShelfInput {
  catalog: StoryMeta[];
  fictionLevel: number;
  nonfictionLevel: number;
  finishedIds: string[];
  startedSeries: string[];
  lastSeriesId: string | null;
  storiesStarted: number;
  interests: InterestState;
  personalize: boolean;
  nudge: -1 | 0 | 1;
}

export interface ShelfSlot {
  role: "familiar" | "new-topic" | "challenge" | "nonfiction";
  story: StoryMeta;
  reason: string;
}

function reviewed(catalog: StoryMeta[]): StoryMeta[] {
  return catalog.filter((story) => story.status === "reviewed");
}

function preferUnfinished(stories: StoryMeta[], finishedIds: string[]): StoryMeta[] {
  const fresh = stories.filter((story) => !finishedIds.includes(story.id));
  return fresh.length > 0 ? fresh : stories;
}

function nearestAtOrBelow(catalog: StoryMeta[], genre: Genre, level: number): StoryMeta[] {
  const pool = catalog.filter((story) => story.genre === genre && story.ladderLevel <= level);
  if (pool.length === 0) return [];
  const max = Math.max(...pool.map((story) => story.ladderLevel));
  return pool.filter((story) => story.ladderLevel === max);
}

function byEpisode(a: StoryMeta, b: StoryMeta): number {
  return a.seriesId.localeCompare(b.seriesId) || a.episode - b.episode || a.id.localeCompare(b.id);
}

export function buildShelf(input: ShelfInput): ShelfSlot[] {
  const catalog = reviewed(input.catalog);
  const fictionLevel = clampLevel(input.fictionLevel + input.nudge);
  const nonfictionLevel = clampLevel(input.nonfictionLevel + input.nudge);
  const used = new Set<string>();
  const slots: ShelfSlot[] = [];

  const familiar = pickFamiliar(catalog, input, fictionLevel);
  if (familiar) {
    used.add(familiar.id);
    slots.push({ role: "familiar", story: familiar, reason: "More of this series" });
  }

  const newer = pickNewTopic(catalog, input, fictionLevel, used);
  if (newer) {
    used.add(newer.id);
    slots.push({ role: "new-topic", story: newer, reason: "Something new" });
  }

  const challenge = isChallengeSlot(input.storiesStarted, input.nudge);
  if (challenge) {
    const stretch = pickChallenge(catalog, input, fictionLevel, used);
    if (stretch) {
      used.add(stretch.id);
      slots.push({ role: "challenge", story: stretch, reason: "Challenge" });
    }
  }
  if (!slots.some((slot) => slot.role === "challenge")) {
    const fact = pickNonfiction(catalog, input, nonfictionLevel, used);
    if (fact) slots.push({ role: "nonfiction", story: fact, reason: "A real-world story" });
  }
  return slots;
}

function pickFamiliar(catalog: StoryMeta[], input: ShelfInput, fictionLevel: number): StoryMeta | null {
  const seriesIds = input.personalize
    ? [...input.startedSeries].sort(
        (a, b) => (input.interests.series[b] ?? 0) - (input.interests.series[a] ?? 0) || a.localeCompare(b),
      )
    : input.lastSeriesId
      ? [input.lastSeriesId, ...input.startedSeries.filter((id) => id !== input.lastSeriesId)]
      : [...input.startedSeries];

  for (const seriesId of seriesIds) {
    const episodes = catalog.filter((story) => story.seriesId === seriesId && story.ladderLevel <= fictionLevel);
    const unread = preferUnfinished(episodes, input.finishedIds).sort(byEpisode);
    const exact = unread.find((story) => story.ladderLevel === fictionLevel);
    if (exact) return exact;
    if (unread[0]) return unread[0];
  }
  const pool = preferUnfinished(nearestAtOrBelow(catalog, "fiction", fictionLevel), input.finishedIds).sort(byEpisode);
  return pool[0] ?? null;
}

function pickNewTopic(
  catalog: StoryMeta[],
  input: ShelfInput,
  fictionLevel: number,
  used: Set<string>,
): StoryMeta | null {
  let pool = preferUnfinished(nearestAtOrBelow(catalog, "fiction", fictionLevel), input.finishedIds).filter(
    (story) => !used.has(story.id),
  );
  if (pool.length === 0) {
    pool = preferUnfinished(
      catalog.filter((story) => story.ladderLevel <= fictionLevel && !used.has(story.id)),
      input.finishedIds,
    );
  }
  if (pool.length === 0) return null;
  if (!input.personalize) {
    const ordered = [...pool].sort(byEpisode);
    const shift = input.storiesStarted % ordered.length;
    const rotated = [...ordered.slice(shift), ...ordered.slice(0, shift)];
    const familiar = catalog.find((story) => used.has(story.id));
    const other = familiar ? rotated.find((story) => story.themes[0] !== familiar.themes[0]) : undefined;
    return other ?? rotated[0];
  }
  const seen = (story: StoryMeta) => input.interests.seenTopics[story.themes[0] ?? ""] ?? 0;
  const least = Math.min(...pool.map(seen));
  const fresh = pool.filter((story) => seen(story) === least);
  return rankCandidates(fresh, input.interests, { exploreMix: 0.7 })[0]?.item ?? fresh[0];
}

function pickChallenge(
  catalog: StoryMeta[],
  input: ShelfInput,
  fictionLevel: number,
  used: Set<string>,
): StoryMeta | null {
  const level = fictionLevel + 1;
  let pool = catalog.filter((story) => story.ladderLevel === level && !used.has(story.id));
  const stretch = pool.filter((story) => story.stretchEligible);
  if (stretch.length > 0) pool = stretch;
  pool = preferUnfinished(pool, input.finishedIds);
  if (pool.length === 0) return null;
  if (!input.personalize) return [...pool].sort(byEpisode)[0];
  return rankCandidates(pool, input.interests)[0]?.item ?? pool[0];
}

function pickNonfiction(
  catalog: StoryMeta[],
  input: ShelfInput,
  nonfictionLevel: number,
  used: Set<string>,
): StoryMeta | null {
  const pool = preferUnfinished(nearestAtOrBelow(catalog, "nonfiction", nonfictionLevel), input.finishedIds).filter(
    (story) => !used.has(story.id),
  );
  if (pool.length === 0) return null;
  if (!input.personalize) return [...pool].sort(byEpisode)[0];
  return rankCandidates(pool, input.interests)[0]?.item ?? pool[0];
}

export function startedSeriesFrom(finishedIds: string[], catalog: StoryMeta[], extra: string[] = []): string[] {
  const ids = new Set(extra);
  for (const id of finishedIds) {
    const story = catalog.find((item) => item.id === id);
    if (story) ids.add(story.seriesId);
  }
  return [...ids];
}
