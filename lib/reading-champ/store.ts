"use client";

import { useSyncExternalStore } from "react";
import { defaultReadingState } from "./state";
import type { ReadingState } from "./types";

export const READING_KEY = "mindstrong.v1.reading";
const CHANGE = "mindstrong:reading";

const EMPTY = defaultReadingState();

const cache = new Map<string, { raw: string | null; value: ReadingState }>();

function normalize(raw: Partial<ReadingState> | null): ReadingState {
  if (!raw) return EMPTY;
  return {
    ...EMPTY,
    ...raw,
    interests: { ...EMPTY.interests, ...(raw.interests ?? {}) },
    reminder: { ...EMPTY.reminder, ...(raw.reminder ?? {}) },
    v: 1,
  };
}

function readRaw(): string | null {
  try {
    return window.localStorage.getItem(READING_KEY);
  } catch {
    return null;
  }
}

export function readReading(): ReadingState {
  if (typeof window === "undefined") return EMPTY;
  const raw = readRaw();
  const hit = cache.get(READING_KEY);
  if (hit && hit.raw === raw) return hit.value;
  let value = EMPTY;
  if (raw) {
    try {
      value = normalize(JSON.parse(raw) as Partial<ReadingState>);
    } catch {
      value = EMPTY;
    }
  }
  cache.set(READING_KEY, { raw, value });
  return value;
}

export function saveReading(value: ReadingState) {
  let raw: string | null = null;
  try {
    raw = JSON.stringify(value);
    window.localStorage.setItem(READING_KEY, raw);
  } catch {
    raw = JSON.stringify(value);
  }
  cache.set(READING_KEY, { raw, value });
  window.dispatchEvent(new Event(CHANGE));
}

export function updateReading(change: (state: ReadingState) => ReadingState) {
  saveReading(change(readReading()));
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

export function useReading(): ReadingState | undefined {
  return useSyncExternalStore(subscribe, readReading, () => undefined);
}
