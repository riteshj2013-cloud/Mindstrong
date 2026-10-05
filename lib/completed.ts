"use client";

import { useSyncExternalStore } from "react";
import type { AgeBand, PlayPhase } from "./types";
import type { Grade, PrepSubject } from "./prep/types";
import { packKey } from "./prep/types";

/**
 * Tracks which content items/sets have been finished so we don't repeat them
 * until the child (or parent) chooses Start over.
 * Separate from streak / bravery progress.
 */
export const COMPLETED_KEY = "mindstrong.v1.completed";
const CHANGE = "mindstrong:completed";

export interface CompletedContent {
  v: 1;
  /** Keys: `${ageBand}|${phase}|${itemId}` → ISO timestamp */
  daily: Record<string, string>;
  /** Keys: `${subject}-g${grade}|${chapterId}|${setId}` → ISO timestamp */
  prepSets: Record<string, string>;
}

export const DEFAULT_COMPLETED: CompletedContent = {
  v: 1,
  daily: {},
  prepSets: {},
};

const cache: { raw: string | null; value: CompletedContent } = {
  raw: null,
  value: DEFAULT_COMPLETED,
};
let cacheReady = false;

function readRaw(): string | null {
  try {
    return window.localStorage.getItem(COMPLETED_KEY);
  } catch {
    return null;
  }
}

function parse(raw: string | null): CompletedContent {
  if (!raw) return DEFAULT_COMPLETED;
  try {
    const parsed = JSON.parse(raw) as Partial<CompletedContent>;
    return {
      v: 1,
      daily: parsed.daily && typeof parsed.daily === "object" ? parsed.daily : {},
      prepSets:
        parsed.prepSets && typeof parsed.prepSets === "object" ? parsed.prepSets : {},
    };
  } catch {
    return DEFAULT_COMPLETED;
  }
}

export function readCompleted(): CompletedContent {
  if (typeof window === "undefined") return DEFAULT_COMPLETED;
  const raw = readRaw();
  if (cacheReady && cache.raw === raw) return cache.value;
  const value = parse(raw);
  cache.raw = raw;
  cache.value = value;
  cacheReady = true;
  return value;
}

function writeCompleted(value: CompletedContent | null) {
  try {
    if (value === null) window.localStorage.removeItem(COMPLETED_KEY);
    else window.localStorage.setItem(COMPLETED_KEY, JSON.stringify(value));
  } catch {
    /* private mode / quota */
  }
  const raw = value === null ? null : JSON.stringify(value);
  cache.raw = raw;
  cache.value = value === null ? DEFAULT_COMPLETED : value;
  cacheReady = true;
  window.dispatchEvent(new Event(CHANGE));
}

function subscribe(cb: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", cb);
  window.addEventListener(CHANGE, cb);
  return () => {
    window.removeEventListener("storage", cb);
    window.removeEventListener(CHANGE, cb);
  };
}

export function useCompleted(): CompletedContent | undefined {
  return useSyncExternalStore(subscribe, readCompleted, () => undefined);
}

export function dailyItemKey(ageBand: AgeBand, phase: PlayPhase, itemId: string): string {
  return `${ageBand}|${phase}|${itemId}`;
}

export function prepSetKey(
  subject: PrepSubject,
  grade: Grade,
  chapterId: string,
  setId: string,
): string {
  return `${packKey(subject, grade)}|${chapterId}|${setId}`;
}

export function isDailyItemDone(
  ageBand: AgeBand,
  phase: PlayPhase,
  itemId: string,
  store = readCompleted(),
): boolean {
  return !!store.daily[dailyItemKey(ageBand, phase, itemId)];
}

export function markDailyItemDone(ageBand: AgeBand, phase: PlayPhase, itemId: string) {
  const key = dailyItemKey(ageBand, phase, itemId);
  const prev = readCompleted();
  if (prev.daily[key]) return;
  writeCompleted({
    ...prev,
    daily: { ...prev.daily, [key]: new Date().toISOString() },
  });
}

export function isPrepSetDone(
  subject: PrepSubject,
  grade: Grade,
  chapterId: string,
  setId: string,
  store = readCompleted(),
): boolean {
  return !!store.prepSets[prepSetKey(subject, grade, chapterId, setId)];
}

export function markPrepSetDone(
  subject: PrepSubject,
  grade: Grade,
  chapterId: string,
  setId: string,
) {
  const key = prepSetKey(subject, grade, chapterId, setId);
  const prev = readCompleted();
  if (prev.prepSets[key]) return;
  writeCompleted({
    ...prev,
    prepSets: { ...prev.prepSets, [key]: new Date().toISOString() },
  });
}

export function countDailyDone(store = readCompleted()): number {
  return Object.keys(store.daily).length;
}

export function countPrepSetsDone(store = readCompleted()): number {
  return Object.keys(store.prepSets).length;
}

/** Clear only daily exercise “done” history — keeps streaks & prep. */
export function clearDailyCompleted() {
  const prev = readCompleted();
  writeCompleted({ ...prev, daily: {} });
}

/** Clear only prep set “done” history — keeps daily & streaks. */
export function clearPrepCompleted() {
  const prev = readCompleted();
  writeCompleted({ ...prev, prepSets: {} });
}

/** Clear both daily + prep done history — does not touch streak/progress. */
export function clearAllCompleted() {
  writeCompleted(DEFAULT_COMPLETED);
}
