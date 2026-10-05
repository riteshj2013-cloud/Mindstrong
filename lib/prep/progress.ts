"use client";

import { useSyncExternalStore } from "react";
import type {
  ChapterProgress,
  Grade,
  PrepActive,
  PrepProgress,
  PrepSubject,
} from "./types";
import { packKey } from "./types";

const PROGRESS_KEY = "mindstrong.v1.prep.progress";
const ACTIVE_KEY = "mindstrong.v1.prep.active";
const CHANGE = "mindstrong:prep";

export const DEFAULT_PREP_PROGRESS: PrepProgress = {
  v: 1,
  byPack: {},
  paperScores: {},
};

/** Memoize by raw string so useSyncExternalStore gets referentially stable snapshots. */
const cache = new Map<string, { raw: string | null; value: unknown }>();

function readRaw(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function cachedRead<T>(key: string, parse: (raw: string | null) => T): T {
  if (typeof window === "undefined") return parse(null);
  const raw = readRaw(key);
  const hit = cache.get(key);
  if (hit && hit.raw === raw) return hit.value as T;
  const value = parse(raw);
  cache.set(key, { raw, value });
  return value;
}

function writeRaw(key: string, value: unknown | null) {
  try {
    if (value === null) window.localStorage.removeItem(key);
    else window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* private mode / quota */
  }
  // Keep snapshot in sync with the value we just wrote (stable until raw changes).
  const raw = value === null ? null : JSON.stringify(value);
  cache.set(key, { raw, value: value === null ? null : value });
  window.dispatchEvent(new Event(CHANGE));
}

export function readPrepProgress(): PrepProgress {
  return cachedRead(PROGRESS_KEY, (raw) => {
    if (!raw) return DEFAULT_PREP_PROGRESS;
    try {
      return { ...DEFAULT_PREP_PROGRESS, ...JSON.parse(raw) } as PrepProgress;
    } catch {
      return DEFAULT_PREP_PROGRESS;
    }
  });
}

export function savePrepProgress(p: PrepProgress) {
  writeRaw(PROGRESS_KEY, p);
}

export function readPrepActive(): PrepActive | null {
  return cachedRead(ACTIVE_KEY, (raw) => {
    if (!raw) return null;
    try {
      return JSON.parse(raw) as PrepActive;
    } catch {
      return null;
    }
  });
}

export function savePrepActive(a: PrepActive | null) {
  writeRaw(ACTIVE_KEY, a);
}

/** Clear prep active session (recovery if a prior bug left a stuck session). */
export function clearPrepActive() {
  savePrepActive(null);
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

export function usePrepProgress(): PrepProgress | undefined {
  return useSyncExternalStore(subscribe, readPrepProgress, () => undefined);
}

export function usePrepActive(): PrepActive | null | undefined {
  return useSyncExternalStore(subscribe, readPrepActive, () => undefined);
}

export function getChapterProgress(
  progress: PrepProgress,
  subject: PrepSubject,
  grade: Grade,
  chapterId: string,
): ChapterProgress {
  const key = packKey(subject, grade);
  return progress.byPack[key]?.[chapterId] ?? { lessonDone: false, sets: {} };
}

export function markLessonDone(subject: PrepSubject, grade: Grade, chapterId: string) {
  const p = readPrepProgress();
  const key = packKey(subject, grade);
  const pack = { ...(p.byPack[key] ?? {}) };
  const ch = { ...(pack[chapterId] ?? { lessonDone: false, sets: {} }), lessonDone: true };
  pack[chapterId] = ch;
  savePrepProgress({
    ...p,
    byPack: { ...p.byPack, [key]: pack },
    lastSubject: subject,
    lastGrade: grade,
  });
}

export function saveSetScore(
  subject: PrepSubject,
  grade: Grade,
  chapterId: string,
  setId: string,
  correct: number,
  total: number,
) {
  const p = readPrepProgress();
  const key = packKey(subject, grade);
  const pack = { ...(p.byPack[key] ?? {}) };
  const ch = {
    lessonDone: pack[chapterId]?.lessonDone ?? false,
    sets: { ...(pack[chapterId]?.sets ?? {}) },
  };
  const prev = ch.sets[setId];
  if (!prev || correct >= prev.correct) {
    ch.sets[setId] = { correct, total, at: new Date().toISOString() };
  }
  pack[chapterId] = ch;
  savePrepProgress({
    ...p,
    byPack: { ...p.byPack, [key]: pack },
    lastSubject: subject,
    lastGrade: grade,
  });
}

export function savePaperScore(subject: PrepSubject, grade: Grade, correct: number, total: number) {
  const p = readPrepProgress();
  const key = packKey(subject, grade);
  savePrepProgress({
    ...p,
    paperScores: {
      ...p.paperScores,
      [key]: { correct, total, at: new Date().toISOString() },
    },
    lastSubject: subject,
    lastGrade: grade,
  });
}

export function rememberPrepChoice(subject: PrepSubject, grade: Grade) {
  const p = readPrepProgress();
  if (p.lastSubject === subject && p.lastGrade === grade) return;
  savePrepProgress({ ...p, lastSubject: subject, lastGrade: grade });
}
