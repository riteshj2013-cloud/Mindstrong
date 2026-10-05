import { addDays, localDay, weekStart } from "./date";
import { getPack, packForToday } from "./content";
import type {
  ActiveSession,
  ContentPack,
  ItemResult,
  ItemSpec,
  Phase,
  PlayPhase,
  Progress,
  Reflection,
  SessionSummary,
  Profile,
} from "./types";
import { PLAY_PHASES } from "./types";
import {
  DEFAULT_PROGRESS,
  KEYS,
  normalizeProfile,
  read,
  saveActiveSession,
  saveProgress,
  write,
} from "./storage";

export function nowIso() {
  return new Date().toISOString();
}

export function emptyResult(): ItemResult {
  return {
    attempts: 0,
    correct: false,
    hintsUsed: 0,
    triedBeforeHint: false,
    done: false,
  };
}

function profileAge(): number {
  const raw = read<Profile | null>(KEYS.profile, null);
  return normalizeProfile(raw)?.age ?? 8;
}

export function startSession(pack?: ContentPack): ActiveSession {
  const p = pack ?? packForToday("", profileAge());
  const day = localDay();
  const session: ActiveSession = {
    v: 1,
    id: `${day}-${p.id}`,
    date: day,
    packId: p.id,
    phase: "warm_up",
    itemIndex: 0,
    startedAt: nowIso(),
    updatedAt: nowIso(),
    results: {},
  };
  saveActiveSession(session);
  return session;
}

/** Resume same-calendar-day active session, or null if none / stale. */
export function resumeOrNull(): ActiveSession | null {
  const s = read<ActiveSession | null>(KEYS.session, null);
  if (!s) return null;
  if (s.date !== localDay()) {
    // Abandoned overnight — clear so tomorrow is fresh.
    saveActiveSession(null);
    return null;
  }
  if (s.phase === "complete") return null;
  return s;
}

export function touch(session: ActiveSession): ActiveSession {
  const next = { ...session, updatedAt: nowIso() };
  saveActiveSession(next);
  return next;
}

export function getResult(session: ActiveSession, itemId: string): ItemResult {
  return session.results[itemId] ?? emptyResult();
}

export function setResult(
  session: ActiveSession,
  itemId: string,
  patch: Partial<ItemResult>,
): ActiveSession {
  const prev = getResult(session, itemId);
  const next: ActiveSession = {
    ...session,
    results: {
      ...session.results,
      [itemId]: { ...prev, ...patch },
    },
    updatedAt: nowIso(),
  };
  saveActiveSession(next);
  return next;
}

export function currentPhase(session: ActiveSession): PlayPhase | null {
  if (session.phase === "idle" || session.phase === "complete") return null;
  return session.phase;
}

export function currentItem(
  session: ActiveSession,
  pack: ContentPack,
): ItemSpec | null {
  const phase = currentPhase(session);
  if (!phase) return null;
  return pack.phases[phase].items[session.itemIndex] ?? null;
}

export function phaseIndex(phase: Phase): number {
  if (phase === "idle") return -1;
  if (phase === "complete") return PLAY_PHASES.length;
  return PLAY_PHASES.indexOf(phase);
}

/** Advance to next item or next phase. Returns the updated session. */
export function advance(session: ActiveSession, pack: ContentPack): ActiveSession {
  const phase = currentPhase(session);
  if (!phase) return session;

  const items = pack.phases[phase].items;
  if (session.itemIndex + 1 < items.length) {
    return touch({ ...session, itemIndex: session.itemIndex + 1 });
  }

  const i = PLAY_PHASES.indexOf(phase);
  if (i + 1 < PLAY_PHASES.length) {
    return touch({
      ...session,
      phase: PLAY_PHASES[i + 1],
      itemIndex: 0,
    });
  }

  // Enter complete — caller should call completeSession for progress.
  return touch({ ...session, phase: "complete", itemIndex: 0 });
}

export function setReflection(
  session: ActiveSession,
  reflection: Reflection,
): ActiveSession {
  return touch({ ...session, reflection: { ...session.reflection, ...reflection } });
}

function streakAfter(progress: Progress, completedDay: string): number {
  const last = progress.lastCompletedDate;
  if (!last) return 1;
  if (last === completedDay) return Math.max(1, progress.streakDays);
  if (addDays(last, 1) === completedDay) return progress.streakDays + 1;
  return 1;
}

export function completeSession(session: ActiveSession): {
  session: ActiveSession;
  summary: SessionSummary;
  progress: Progress;
} {
  const pack = getPack(session.packId) ?? packForToday(session.date, profileAge());
  const hardItem = pack.phases.hard_try.items.find((i) => i.type === "hard_try");
  const hardResult = hardItem ? getResult(session, hardItem.id) : emptyResult();

  const triedBeforeHintCount = Object.values(session.results).filter(
    (r) => r.triedBeforeHint,
  ).length;

  const started = Date.parse(session.startedAt);
  const durationSec = Number.isFinite(started)
    ? Math.max(0, Math.round((Date.now() - started) / 1000))
    : 0;

  const summary: SessionSummary = {
    id: session.id,
    date: session.date,
    packId: session.packId,
    completed: true,
    hardTryAttempted: hardResult.attempts > 0 || !!hardResult.explicitTry,
    hardTrySolved: hardResult.correct,
    hardTryHints: hardResult.hintsUsed,
    triedBeforeHintCount,
    reflection: session.reflection,
    durationSec,
    completedAt: nowIso(),
  };

  const prev = read<Progress>(KEYS.progress, DEFAULT_PROGRESS);
  // Replace same-day entry if any, keep last ~60.
  const history = [
    summary,
    ...prev.history.filter((h) => h.date !== summary.date),
  ].slice(0, 60);

  const streakDays = streakAfter(prev, summary.date);
  const nextProgress: Progress = {
    streakDays,
    bestStreak: Math.max(prev.bestStreak, streakDays),
    lastCompletedDate: summary.date,
    sessionsCompleted: Math.max(prev.sessionsCompleted + (prev.history.some((h) => h.date === summary.date) ? 0 : 1), history.filter((h) => h.completed).length),
    history,
  };

  const done: ActiveSession = {
    ...session,
    phase: "complete",
    updatedAt: nowIso(),
  };

  write(KEYS.progress, nextProgress);
  write(KEYS.session, null); // clear active so home shows “done today”

  return { session: done, summary, progress: nextProgress };
}

export function abandonSession() {
  saveActiveSession(null);
}

/** Hard attempts this calendar week (Mon–Sun local). Target: 4. */
export function hardAttemptsThisWeek(progress: Progress, today = localDay()): number {
  const start = weekStart(today);
  return progress.history.filter(
    (h) => h.date >= start && h.date <= today && h.hardTryAttempted,
  ).length;
}

export function todaySummary(progress: Progress, today = localDay()): SessionSummary | undefined {
  return progress.history.find((h) => h.date === today && h.completed);
}

/** Streak as it should be shown today (0 if a day was missed). */
export function displayStreak(progress: Progress, today = localDay()): number {
  const last = progress.lastCompletedDate;
  if (!last) return 0;
  if (last === today || addDays(last, 1) === today) return progress.streakDays;
  return 0;
}
