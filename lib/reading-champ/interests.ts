/**
 * On-device interest model.
 *
 * Default ranker: weighted topic, genre, and series scores with daily decay,
 * plus an exploration term so one genre cannot crowd out the rest.
 * Scores move when a child finishes, re-reads, opens a series, taps a topic,
 * or chooses a Pick 1 of 3 card.
 *
 * The optional LLM hook is not called by the home shelf. A later ranker may
 * set `llmRankerHook.current`; unknown ids are dropped so it cannot surface
 * anything outside the reviewed candidate list.
 */

import type { Genre, InterestState } from "./types";

export const INTEREST = {
  decayPerDay: 0.85,
  exploreMix: 0.25,
  weights: {
    finishedTopic: 3,
    finishedGenre: 2,
    finishedSeries: 3,
    rereadTopic: 4,
    rereadGenre: 2,
    rereadSeries: 4,
    seriesChosen: 2,
    topicTapped: 2,
    pickTopic: 3,
    pickGenre: 1,
    pickSeries: 2,
    abandonedTopic: 0.25,
  },
} as const;

export interface InterestCandidate {
  id: string;
  genre: string;
  themes: string[];
  seriesId: string;
}

export type InterestSignal =
  | { type: "finished" | "reread" | "pick"; topics: string[]; genre: Genre; seriesId: string; at: string }
  | { type: "series"; seriesId: string; at: string }
  | { type: "topic"; topic: string; at: string }
  | { type: "abandoned"; topics: string[]; at: string };

export interface RankOptions {
  exploreMix?: number;
  /** When false, input order is kept and scores are ignored. */
  personalize?: boolean;
}

export interface Ranked<T> {
  item: T;
  score: number;
  interest: number;
  explore: number;
}

/** Plug-in point. Reading Champ never calls this in the default shelf. */
export type LlmRanker = (ctx: {
  candidates: InterestCandidate[];
  topTopics: string[];
}) => Promise<string[] | null>;

export const llmRankerHook: { current: LlmRanker | null } = { current: null };

export function emptyInterests(now = "1970-01-01T00:00:00.000Z"): InterestState {
  return { topics: {}, genres: {}, series: {}, seenTopics: {}, updatedAt: now };
}

function scale(map: Record<string, number>, factor: number): Record<string, number> {
  const next: Record<string, number> = {};
  for (const [key, value] of Object.entries(map)) {
    const scaled = Math.round(value * factor * 1000) / 1000;
    if (scaled > 0.01) next[key] = scaled;
  }
  return next;
}

export function decayInterests(state: InterestState, now: string, perDay = INTEREST.decayPerDay): InterestState {
  const elapsed = Date.parse(now) - Date.parse(state.updatedAt);
  const days = Math.max(0, elapsed / 86_400_000);
  const factor = perDay ** days;
  if (factor === 1) return { ...state, updatedAt: now };
  return {
    topics: scale(state.topics, factor),
    genres: scale(state.genres, factor),
    series: scale(state.series, factor),
    seenTopics: { ...state.seenTopics },
    updatedAt: now,
  };
}

function bump(map: Record<string, number>, key: string, amount: number): Record<string, number> {
  const next = Math.max(0, (map[key] ?? 0) + amount);
  return { ...map, [key]: Math.round(next * 1000) / 1000 };
}

function bumpMany(map: Record<string, number>, keys: string[], amount: number): Record<string, number> {
  return keys.reduce((acc, key) => bump(acc, key, amount), map);
}

export function observeInterest(state: InterestState, signal: InterestSignal, now: string): InterestState {
  const base = decayInterests(state, now);
  const w = INTEREST.weights;
  if (signal.type === "finished" || signal.type === "reread" || signal.type === "pick") {
    const topicW = signal.type === "reread" ? w.rereadTopic : signal.type === "pick" ? w.pickTopic : w.finishedTopic;
    const genreW = signal.type === "reread" ? w.rereadGenre : signal.type === "pick" ? w.pickGenre : w.finishedGenre;
    const seriesW = signal.type === "reread" ? w.rereadSeries : signal.type === "pick" ? w.pickSeries : w.finishedSeries;
    return {
      ...base,
      topics: bumpMany(base.topics, signal.topics, topicW),
      genres: bump(base.genres, signal.genre, genreW),
      series: bump(base.series, signal.seriesId, seriesW),
      seenTopics: signal.topics.reduce((acc, topic) => bump(acc, topic, 1), base.seenTopics),
    };
  }
  if (signal.type === "series") {
    return { ...base, series: bump(base.series, signal.seriesId, w.seriesChosen) };
  }
  if (signal.type === "topic") {
    return {
      ...base,
      topics: bump(base.topics, signal.topic, w.topicTapped),
      seenTopics: bump(base.seenTopics, signal.topic, 1),
    };
  }
  return {
    ...base,
    topics: signal.topics.reduce((acc, topic) => bump(acc, topic, -w.abandonedTopic), base.topics),
  };
}

export function interestScore(item: InterestCandidate, state: InterestState): number {
  const topic = item.themes.reduce((best, theme) => Math.max(best, state.topics[theme] ?? 0), 0);
  const genre = state.genres[item.genre] ?? 0;
  const series = state.series[item.seriesId] ?? 0;
  return topic + genre * 0.6 + series;
}

export function exploreScore(item: InterestCandidate, state: InterestState): number {
  const seen = item.themes.reduce((sum, theme) => sum + (state.seenTopics[theme] ?? 0), 0);
  return 1 / (1 + seen);
}

export function topTopics(state: InterestState, limit = 3): string[] {
  return Object.entries(state.topics)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([topic]) => topic);
}

export function rankCandidates<T extends InterestCandidate>(
  items: T[],
  state: InterestState,
  options: RankOptions = {},
): Ranked<T>[] {
  if (options.personalize === false) {
    return items.map((item, index) => ({
      item,
      score: items.length - index,
      interest: 0,
      explore: 0,
    }));
  }
  const mix = options.exploreMix ?? INTEREST.exploreMix;
  return items
    .map((item) => {
      const interest = interestScore(item, state);
      const explore = exploreScore(item, state);
      const score = (1 - mix) * interest + mix * explore;
      return { item, score, interest, explore };
    })
    .sort((a, b) => b.score - a.score || a.item.id.localeCompare(b.item.id));
}

/** Reorder reviewed candidates only. Ids the ranker invented are ignored. */
export function applyLlmOrder<T extends { id: string }>(items: T[], ids: string[] | null): T[] {
  if (!ids || ids.length === 0) return items;
  const byId = new Map(items.map((item) => [item.id, item]));
  const picked: T[] = [];
  const used = new Set<string>();
  for (const id of ids) {
    const item = byId.get(id);
    if (!item || used.has(id)) continue;
    picked.push(item);
    used.add(id);
  }
  for (const item of items) {
    if (!used.has(item.id)) picked.push(item);
  }
  return picked;
}

/**
 * Optional async path for a future LLM ranker.
 * The home shelf does not call this. It uses `rankCandidates` only.
 */
export async function rankWithOptionalLlm<T extends InterestCandidate>(
  items: T[],
  state: InterestState,
  options: RankOptions = {},
): Promise<T[]> {
  const baseline = rankCandidates(items, state, options).map((row) => row.item);
  const hook = llmRankerHook.current;
  if (!hook) return baseline;
  const ids = await hook({
    candidates: baseline.map((item) => ({
      id: item.id,
      genre: item.genre,
      themes: item.themes,
      seriesId: item.seriesId,
    })),
    topTopics: topTopics(state),
  });
  return applyLlmOrder(baseline, ids);
}
