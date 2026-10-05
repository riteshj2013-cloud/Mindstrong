"use client";

import { useSyncExternalStore } from "react";
import type { ActiveSession, ChildAge, Profile, Progress, Settings } from "./types";
import { bandDefaultAge, clampAge } from "./content/age";

/**
 * All persistence goes through this module.
 * Keys are versioned: mindstrong.v1.*
 */
export const KEYS = {
  profile: "mindstrong.v1.profile",
  progress: "mindstrong.v1.progress",
  session: "mindstrong.v1.session.active",
  settings: "mindstrong.v1.settings",
} as const;

/** Soft parent gate lives in sessionStorage (clears when the tab closes). */
export const GATE_KEY = "mindstrong.v1.parentGate";
const GATE_TTL_MS = 30 * 60 * 1000;

type Key = (typeof KEYS)[keyof typeof KEYS];

export const DEFAULT_PROGRESS: Progress = {
  streakDays: 0,
  bestStreak: 0,
  lastCompletedDate: null,
  sessionsCompleted: 0,
  history: [],
};

export const DEFAULT_SETTINGS: Settings = {
  readAloud: true,
  reduceMotion: false,
};

const CHANGE_EVENT = "mindstrong:storage";

// Memoise parsed values by raw string so useSyncExternalStore gets stable snapshots.
const cache = new Map<string, { raw: string | null; value: unknown }>();

function readRaw(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function read<T>(key: Key, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  const raw = readRaw(key);
  const hit = cache.get(key);
  if (hit && hit.raw === raw) return hit.value as T;
  let value: T = fallback;
  if (raw != null) {
    try {
      value = { ...fallbackShape(fallback), ...JSON.parse(raw) } as T;
      if (fallback === null) value = JSON.parse(raw) as T;
    } catch {
      value = fallback;
    }
  }
  cache.set(key, { raw, value });
  return value;
}

function fallbackShape<T>(fallback: T): object {
  return fallback && typeof fallback === "object" ? (fallback as object) : {};
}

export function write<T>(key: Key, value: T | null): void {
  try {
    if (value === null) window.localStorage.removeItem(key);
    else window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage full / private mode: the session still works in memory for this render.
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function subscribe(cb: () => void) {
  window.addEventListener("storage", cb);
  window.addEventListener(CHANGE_EVENT, cb);
  return () => {
    window.removeEventListener("storage", cb);
    window.removeEventListener(CHANGE_EVENT, cb);
  };
}

/**
 * Reactive localStorage read. Returns `undefined` during SSR/hydration,
 * then the stored (or fallback) value on the client.
 */
export function useStored<T>(key: Key, fallback: T): T | undefined {
  return useSyncExternalStore<T | undefined>(
    subscribe,
    () => read<T>(key, fallback),
    () => undefined,
  );
}

export function useProfile(): Profile | null | undefined {
  const raw = useStored<Profile | null>(KEYS.profile, null);
  if (raw === undefined) return undefined;
  return normalizeProfile(raw);
}
export const useProgress = () => useStored<Progress>(KEYS.progress, DEFAULT_PROGRESS);
export const useActiveSession = () => useStored<ActiveSession | null>(KEYS.session, null);
export const useSettings = () => useStored<Settings>(KEYS.settings, DEFAULT_SETTINGS);


/** Coerce legacy profiles (ageBand-only) into { age: 6–15 }. */
export function normalizeProfile(raw: Profile | null | undefined): Profile | null {
  if (!raw) return null;
  const age: ChildAge =
    typeof (raw as Profile).age === "number"
      ? clampAge((raw as Profile).age)
      : bandDefaultAge((raw as Profile).ageBand);
  return {
    childName: raw.childName ?? "",
    age,
    createdAt: raw.createdAt ?? new Date().toISOString(),
  };
}

export function saveProfile(p: Profile) {
  write(KEYS.profile, normalizeProfile(p) ?? p);
}
export function saveSettings(s: Settings) {
  write(KEYS.settings, s);
}
export function saveActiveSession(s: ActiveSession | null) {
  write(KEYS.session, s);
}
export function saveProgress(p: Progress) {
  write(KEYS.progress, p);
}

export function resetProgress() {
  write(KEYS.progress, null);
  write(KEYS.session, null);
}

export function resetEverything() {
  Object.values(KEYS).forEach((k) => write(k, null));
  try {
    window.sessionStorage.removeItem(GATE_KEY);
  } catch {}
}

// ---------- Soft parent gate ----------

export function passGate() {
  try {
    window.sessionStorage.setItem(GATE_KEY, String(Date.now()));
  } catch {}
}

export function gateIsOpen(): boolean {
  try {
    const t = Number(window.sessionStorage.getItem(GATE_KEY));
    return Number.isFinite(t) && t > 0 && Date.now() - t < GATE_TTL_MS;
  } catch {
    return false;
  }
}

export function closeGate() {
  try {
    window.sessionStorage.removeItem(GATE_KEY);
  } catch {}
}
