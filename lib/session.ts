import { addDays, localDay, weekStart } from "./date";
import { getPack, packForToday } from "./content";
import { isDailyItemDone, markDailyItemDone } from "./completed";
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

/** Ordered phases for this session (selected subset, or all). */
export function sessionPhases(session: ActiveSession): PlayPhase[] {
  if (session.selectedPhases && session.selectedPhases.length > 0) {
    return session.selectedPhases;
  }
  return PLAY_PHASES;
}

/** Build per-phase queues of not-yet-done item ids for the chosen sections. */
export function buildSessionQueue(
  pack: ContentPack,
  selected: PlayPhase[],
): { phases: PlayPhase[]; queue: Partial<Record<PlayPhase, string[]>> } {
  const queue: Partial<Record<PlayPhase, string[]>> = {};
  const phases: PlayPhase[] = [];
  for (const phase of selected) {
    const ids = pack.phases[phase].items
      .filter((item) => !isDailyItemDone(pack.ageBand, phase, item.id))
      .map((item) => item.id);
    if (ids.length > 0) {
      queue[phase] = ids;
      phases.push(phase);
    }
  }
  return { phases, queue };
}

/** How many fresh items remain in a pack for the given sections. */
export function countRemainingItems(pack: ContentPack, selected: PlayPhase[]): number {
  const { phases, queue } = buildSessionQueue(pack, selected);
  return phases.reduce((n, phase) => n + (queue[phase]?.length ?? 0), 0);
}

/** Remaining items per section (for the picker UI). */
export function remainingByPhase(
  pack: ContentPack,
  selected: PlayPhase[] = PLAY_PHASES,
): Record<PlayPhase, number> {
  const out = {} as Record<PlayPhase, number>;
  for (const phase of PLAY_PHASES) {
    out[phase] = pack.phases[phase].items.filter(
      (item) => !isDailyItemDone(pack.ageBand, phase, item.id),
    ).length;
  }
  // silence unused when callers pass selected for filtering elsewhere
  void selected;
  return out;
}

export type StartSessionResult =
  | { ok: true; session: ActiveSession }
  | { ok: false; reason: "empty" };

/**
 * Start a daily session for the chosen sections, skipping already-done items.
 * Returns `{ ok: false }` when every selected section has nothing left.
 */
export function startSession(
  pack?: ContentPack,
  selectedPhases?: PlayPhase[],
): StartSessionResult {
  const p = pack ?? packForToday("", profileAge());
  const day = localDay();
  const wanted =
    selectedPhases && selectedPhases.length > 0
      ? PLAY_PHASES.filter((ph) => selectedPhases.includes(ph))
      : PLAY_PHASES;
  const { phases, queue } = buildSessionQueue(p, wanted);
  if (phases.length === 0) {
    return { ok: false, reason: "empty" };
  }
  const session: ActiveSession = {
    v: 1,
    id: `${day}-${p.id}-${Date.now()}`,
    date: day,
    packId: p.id,
    phase: phases[0],
    itemIndex: 0,
    startedAt: nowIso(),
    updatedAt: nowIso(),
    results: {},
    selectedPhases: phases,
    queue,
  };
  saveActiveSession(session);
  return { ok: true, session };
}

/** Resume same-calendar-day active session, or null if none / stale. */
export function resumeOrNull(): ActiveSession | null {
  const s = read<ActiveSession | null>(KEYS.session, null);
  if (!s) return null;
  if (s.date !== localDay()) {
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

function phaseItemIds(session: ActiveSession, pack: ContentPack, phase: PlayPhase): string[] {
  if (session.queue && session.queue[phase]) return session.queue[phase]!;
  // Legacy sessions without a queue — full phase list.
  return pack.phases[phase].items.map((i) => i.id);
}

export function currentItem(
  session: ActiveSession,
  pack: ContentPack,
): ItemSpec | null {
  const phase = currentPhase(session);
  if (!phase) return null;
  const ids = phaseItemIds(session, pack, phase);
  const id = ids[session.itemIndex];
  if (!id) return null;
  return pack.phases[phase].items.find((i) => i.id === id) ?? null;
}

export function itemsInPhaseCount(session: ActiveSession, pack: ContentPack, phase: PlayPhase): number {
  return phaseItemIds(session, pack, phase).length;
}

export function phaseIndex(phase: Phase, phases: PlayPhase[] = PLAY_PHASES): number {
  if (phase === "idle") return -1;
  if (phase === "complete") return phases.length;
  return phases.indexOf(phase as PlayPhase);
}


/** Rewrite intro/close “Next: …” copy from the selected session queue. */
export function withDynamicNextCopy(
  item: ItemSpec,
  session: ActiveSession,
  pack: ContentPack,
): ItemSpec {
  if (item.type !== "intro") return item;
  const phase = currentPhase(session);
  if (!phase) return item;
  const ids = phaseItemIds(session, pack, phase);
  const isLastInPhase = session.itemIndex >= ids.length - 1;
  if (!isLastInPhase) return item;

  const phases = sessionPhases(session);
  const i = phases.indexOf(phase);
  const nextPhase = i >= 0 && i + 1 < phases.length ? phases[i + 1] : null;

  if (!nextPhase) {
    return {
      ...item,
      cta: item.cta ? "Finish!" : item.cta,
      body: item.body.map((line) =>
        /^Next:/i.test(line.trim()) ? "That’s the last section — finish strong!" : line,
      ),
    };
  }

  const kid = pack.phases[nextPhase].kidTitle;
  return {
    ...item,
    cta: `Next: ${kid}!`,
    body: item.body.map((line) =>
      /^Next:/i.test(line.trim()) ? `Next: ${kid}.` : line,
    ),
  };
}

function markCurrentDone(session: ActiveSession, pack: ContentPack) {
  const phase = currentPhase(session);
  if (!phase) return;
  const item = currentItem(session, pack);
  if (!item) return;
  markDailyItemDone(pack.ageBand, phase, item.id);
}

/** Advance to next item or next selected phase. Marks the leaving item as done. */
export function advance(session: ActiveSession, pack: ContentPack): ActiveSession {
  const phase = currentPhase(session);
  if (!phase) return session;

  markCurrentDone(session, pack);

  const ids = phaseItemIds(session, pack, phase);
  if (session.itemIndex + 1 < ids.length) {
    return touch({ ...session, itemIndex: session.itemIndex + 1 });
  }

  const phases = sessionPhases(session);
  const i = phases.indexOf(phase);
  if (i + 1 < phases.length) {
    return touch({
      ...session,
      phase: phases[i + 1],
      itemIndex: 0,
    });
  }

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

  // Mark the last (usually reflect) item done if we still have one.
  const phase = currentPhase(session);
  if (phase) {
    const item = currentItem(session, pack);
    if (item) markDailyItemDone(pack.ageBand, phase, item.id);
  }

  // Only credit brave/hard-try stats when that section was actually in this run.
  const playedHard = sessionPhases(session).includes("hard_try");
  const hardItem = playedHard
    ? pack.phases.hard_try.items.find((i) => i.type === "hard_try")
    : undefined;
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
  // Append every completed session (do not overwrite same-day). Skipping Hard try
  // in a later session must not erase an earlier brave try the same day.
  const history = [summary, ...prev.history].slice(0, 60);

  const streakDays = streakAfter(prev, summary.date);
  const nextProgress: Progress = {
    streakDays,
    bestStreak: Math.max(prev.bestStreak, streakDays),
    lastCompletedDate: summary.date,
    sessionsCompleted: prev.sessionsCompleted + 1,
    history,
  };


  const done: ActiveSession = {
    ...session,
    phase: "complete",
    updatedAt: nowIso(),
  };

  write(KEYS.progress, nextProgress);
  write(KEYS.session, null);

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
