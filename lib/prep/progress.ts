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

function readRaw(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeRaw(key: string, value: unknown | null) {
  try {
    if (value === null) window.localStorage.removeItem(key);
    else window.localStorage.setItem(key, JSON.stringify(value));
  } catch {}
  window.dispatchEvent(new Event(CHANGE));
}

export function readPrepProgress(): PrepProgress {
  if (typeof window === "undefined") return DEFAULT_PREP_PROGRESS;
  const raw = readRaw(PROGRESS_KEY);
  if (!raw) return DEFAULT_PREP_PROGRESS;
  try {
    return { ...DEFAULT_PREP_PROGRESS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_PREP_PROGRESS;
  }
}

export function savePrepProgress(p: PrepProgress) {
  writeRaw(PROGRESS_KEY, p);
}

export function readPrepActive(): PrepActive | null {
  if (typeof window === "undefined") return null;
  const raw = readRaw(ACTIVE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as PrepActive;
  } catch {
    return null;
  }
}

export function savePrepActive(a: PrepActive | null) {
  writeRaw(ACTIVE_KEY, a);
}

function subscribe(cb: () => void) {
  window.addEventListener("storage", cb);
  window.addEventListener(CHANGE, cb);
  return () => {
    window.removeEventListener("storage", cb);
    window.removeEventListener(CHANGE, cb);
  };
}

export function usePrepProgress(): PrepProgress | undefined {
  return useSyncExternalStore(
    subscribe,
    readPrepProgress,
    () => undefined,
  );
}

export function usePrepActive(): PrepActive | null | undefined {
  return useSyncExternalStore(
    subscribe,
    readPrepActive,
    () => undefined,
  );
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
  savePrepProgress({ ...p, lastSubject: subject, lastGrade: grade });
}
