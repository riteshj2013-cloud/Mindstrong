/**
 * Pure Reading Champ transitions. The browser store persists the result.
 * Profile name and age stay in Mindstrong's existing profile.
 */

import { weekStart } from "../date";
import { evaluateLevel } from "./adaptive";
import { emptyInterests, observeInterest } from "./interests";
import { advancePlacement, initialPlacement, placementForLibrary } from "./placement";
import type {
  AnalyticsEvent,
  Genre,
  Outcome,
  ReadingState,
  ReminderSettings,
  StoryMeta,
} from "./types";

const BADGE_BY_SERIES: Record<string, string> = {
  "midnight-library": "books",
  "captain-comet": "space",
  "wonder-wombat": "science",
  "time-hop": "history",
  "shared-fables": "fables",
};

export function defaultReadingState(now = "1970-01-01T00:00:00.000Z"): ReadingState {
  return {
    v: 1,
    placed: false,
    fictionLevel: 6,
    nonfictionLevel: 5,
    lastLevelChangeAt: null,
    outcomes: [],
    finishedIds: [],
    covers: [],
    readingDays: [],
    restDays: [],
    weeklyGoal: 3,
    goalCelebratedForWeek: null,
    pendingCelebration: false,
    words: [],
    interests: emptyInterests(now),
    personalize: true,
    events: [],
    current: null,
    storiesStarted: 0,
    nudge: 0,
    notice: null,
    textSize: "md",
    dyslexiaFont: false,
    voice: "default",
    badges: [],
    dailyLimitMin: null,
    reminder: {
      enabled: false,
      time: "17:00",
      quietStart: "20:00",
      quietEnd: "07:00",
      lastSentDay: null,
    },
    offAppDays: [],
    placement: null,
    firstSeenDay: null,
  };
}

function addUnique(list: string[], value: string): string[] {
  return list.includes(value) ? list : [...list, value];
}

function trimEvents(events: AnalyticsEvent[]): AnalyticsEvent[] {
  return events.length > 200 ? events.slice(-200) : events;
}

export function ensurePlacement(state: ReadingState): ReadingState {
  if (state.placed || state.placement) return state;
  return { ...state, placement: initialPlacement() };
}

export function submitPlacementStrip(state: ReadingState, passed: boolean, now: string): ReadingState {
  const placement = advancePlacement(state.placement ?? initialPlacement(), passed);
  const decided = placementForLibrary(placement);
  if (!decided) return { ...state, placement, placed: false };
  return {
    ...state,
    placement: null,
    placed: true,
    fictionLevel: decided.served.fiction,
    nonfictionLevel: decided.served.nonfiction,
    lastLevelChangeAt: now,
  };
}

export function setParentLevels(
  state: ReadingState,
  fictionLevel: number,
  nonfictionLevel: number,
  now: string,
): ReadingState {
  return {
    ...state,
    placed: true,
    fictionLevel,
    nonfictionLevel,
    lastLevelChangeAt: now,
    placement: null,
  };
}

export function noteSeen(state: ReadingState, day: string): ReadingState {
  if (state.firstSeenDay) return state;
  return { ...state, firstSeenDay: day };
}

export function startStory(
  state: ReadingState,
  story: StoryMeta,
  input: { isChallenge: boolean; now: string; day: string },
): ReadingState {
  const resume = state.current?.storyId === story.id;
  const reread = state.finishedIds.includes(story.id);
  const seen = noteSeen(state, input.day);
  return {
    ...seen,
    storiesStarted: resume || reread ? state.storiesStarted : state.storiesStarted + 1,
    readingDays: addUnique(state.readingDays, input.day),
    interests: observeInterest(
      state.interests,
      { type: "pick", topics: story.themes, genre: story.genre, seriesId: story.seriesId, at: input.now },
      input.now,
    ),
    events: trimEvents([
      ...state.events,
      {
        type: "open",
        at: input.now,
        day: input.day,
        storyId: story.id,
        genre: story.genre,
        unprompted: true,
      },
    ]),
    current: resume
      ? state.current
      : {
          storyId: story.id,
          panelIndex: 0,
          startedAt: input.now,
          lookups: [],
          isChallenge: input.isChallenge,
        },
  };
}

export function setPanel(state: ReadingState, panelIndex: number): ReadingState {
  if (!state.current) return state;
  return { ...state, current: { ...state.current, panelIndex } };
}

export function saveWord(
  state: ReadingState,
  input: { word: string; definition: string; storyId: string; now: string },
): ReadingState {
  const key = input.word.toLowerCase();
  if (state.words.some((item) => item.word.toLowerCase() === key)) {
    return state;
  }
  const current = state.current
    ? { ...state.current, lookups: addUnique(state.current.lookups, key) }
    : state.current;
  return {
    ...state,
    current,
    words: [
      { word: key, definition: input.definition, storyId: input.storyId, at: input.now },
      ...state.words,
    ].slice(0, 80),
  };
}

function readerLevelFor(state: ReadingState, genre: Genre): number {
  return genre === "fiction" ? state.fictionLevel : state.nonfictionLevel;
}

function applyLevelChange(state: ReadingState, story: StoryMeta, now: string, day: string): ReadingState {
  const readerLevel = readerLevelFor(state, story.genre);
  const decision = evaluateLevel({
    genre: story.genre,
    currentLevel: readerLevel,
    outcomes: state.outcomes,
    lastLevelChangeAt: state.lastLevelChangeAt,
    now,
  });
  if (decision.action === "hold") return state;
  const next: ReadingState = {
    ...state,
    lastLevelChangeAt: now,
    notice: decision.kidLabel === "easier-picks" ? "easier-picks" : "new-stories",
    events: trimEvents([
      ...state.events,
      { type: "level_change", at: now, day, direction: decision.action, genre: story.genre },
    ]),
  };
  if (story.genre === "fiction") next.fictionLevel = decision.nextLevel;
  else next.nonfictionLevel = decision.nextLevel;
  return next;
}

export function finishStory(
  state: ReadingState,
  story: StoryMeta,
  input: {
    comprehensionCorrect: number;
    comprehensionTotal: number;
    minutes: number;
    day: string;
    now: string;
  },
): ReadingState {
  const reread = state.finishedIds.includes(story.id);
  const interests = observeInterest(
    state.interests,
    {
      type: reread ? "reread" : "finished",
      topics: story.themes,
      genre: story.genre,
      seriesId: story.seriesId,
      at: input.now,
    },
    input.now,
  );
  const events = trimEvents([
    ...state.events,
    {
      type: reread ? "reread" : "finish",
      at: input.now,
      day: input.day,
      storyId: story.id,
      genre: story.genre,
      minutes: input.minutes,
    },
  ]);
  if (reread) {
    return { ...state, interests, events, readingDays: addUnique(state.readingDays, input.day), current: null };
  }
  const comprehension =
    input.comprehensionTotal > 0 ? input.comprehensionCorrect / input.comprehensionTotal : null;
  const outcome: Outcome = {
    storyId: story.id,
    genre: story.genre,
    readerLevel: readerLevelFor(state, story.genre),
    storyLevel: story.ladderLevel,
    isChallenge: state.current?.isChallenge ?? false,
    finished: true,
    abandoned: false,
    comprehension,
    lookups: state.current?.lookups.length ?? 0,
    wordCount: story.wordCount,
    minutes: input.minutes,
    expectedMinutes: story.expectedMinutes,
    reread: false,
    at: input.now,
    day: input.day,
  };
  let next: ReadingState = {
    ...state,
    outcomes: [...state.outcomes, outcome].slice(-120),
    finishedIds: [...state.finishedIds, story.id],
    covers: state.covers.some((cover) => cover.storyId === story.id)
      ? state.covers
      : [...state.covers, { storyId: story.id, at: input.now }],
    readingDays: addUnique(state.readingDays, input.day),
    interests,
    events,
    current: null,
    badges: BADGE_BY_SERIES[story.seriesId]
      ? addUnique(state.badges, BADGE_BY_SERIES[story.seriesId])
      : state.badges,
  };
  next = applyLevelChange(next, story, input.now, input.day);
  const week = weekStart(input.day);
  if (finishesInWeek(next, input.day) >= next.weeklyGoal && next.goalCelebratedForWeek !== week) {
    next = { ...next, pendingCelebration: true };
  }
  return next;
}

export function abandonStory(
  state: ReadingState,
  story: StoryMeta,
  input: { minutes: number; day: string; now: string },
): ReadingState {
  const outcome: Outcome = {
    storyId: story.id,
    genre: story.genre,
    readerLevel: readerLevelFor(state, story.genre),
    storyLevel: story.ladderLevel,
    isChallenge: state.current?.isChallenge ?? false,
    finished: false,
    abandoned: true,
    comprehension: null,
    lookups: state.current?.lookups.length ?? 0,
    wordCount: story.wordCount,
    minutes: input.minutes,
    expectedMinutes: story.expectedMinutes,
    reread: state.finishedIds.includes(story.id),
    at: input.now,
    day: input.day,
  };
  if (outcome.reread) {
    return { ...state, current: null, readingDays: addUnique(state.readingDays, input.day) };
  }
  const next: ReadingState = {
    ...state,
    outcomes: [...state.outcomes, outcome].slice(-120),
    readingDays: addUnique(state.readingDays, input.day),
    interests: observeInterest(state.interests, { type: "abandoned", topics: story.themes, at: input.now }, input.now),
    events: trimEvents([
      ...state.events,
      { type: "abandon", at: input.now, day: input.day, storyId: story.id, genre: story.genre, minutes: input.minutes },
    ]),
    current: null,
  };
  return applyLevelChange(next, story, input.now, input.day);
}

export function finishesInWeek(state: ReadingState, day: string): number {
  const week = weekStart(day);
  return state.outcomes.filter((outcome) => outcome.finished && !outcome.reread && weekStart(outcome.day) === week)
    .length;
}

export function minutesOnDay(state: ReadingState, day: string): number {
  return state.outcomes.filter((outcome) => outcome.day === day).reduce((sum, outcome) => sum + outcome.minutes, 0);
}

export function restDaysThisWeek(state: ReadingState, day: string): string[] {
  const week = weekStart(day);
  return state.restDays.filter((rest) => weekStart(rest) === week);
}

export function toggleRestDay(state: ReadingState, day: string): ReadingState {
  if (state.restDays.includes(day)) {
    return { ...state, restDays: state.restDays.filter((rest) => rest !== day) };
  }
  if (restDaysThisWeek(state, day).length >= 2) return state;
  return { ...state, restDays: [...state.restDays, day] };
}

export function setWeeklyGoal(state: ReadingState, goal: number): ReadingState {
  const weeklyGoal = Math.min(5, Math.max(1, Math.round(goal)));
  return { ...state, weeklyGoal };
}

export function markGoalCelebrated(state: ReadingState, day: string): ReadingState {
  return { ...state, pendingCelebration: false, goalCelebratedForWeek: weekStart(day) };
}

export function setNudge(state: ReadingState, nudge: -1 | 0 | 1): ReadingState {
  return { ...state, nudge, notice: nudge < 0 ? "easier-picks" : state.notice };
}

export function dismissNotice(state: ReadingState): ReadingState {
  return { ...state, notice: null };
}

export function setPersonalize(state: ReadingState, personalize: boolean): ReadingState {
  return { ...state, personalize };
}

export function setReminder(state: ReadingState, patch: Partial<ReminderSettings>): ReadingState {
  return { ...state, reminder: { ...state.reminder, ...patch } };
}

export function setDailyLimit(state: ReadingState, dailyLimitMin: number | null): ReadingState {
  return { ...state, dailyLimitMin };
}

export function markOffApp(state: ReadingState, day: string, now: string): ReadingState {
  if (state.offAppDays.includes(day)) {
    return { ...state, offAppDays: state.offAppDays.filter((item) => item !== day) };
  }
  return {
    ...state,
    offAppDays: [...state.offAppDays, day],
    events: trimEvents([...state.events, { type: "off_app", at: now, day }]),
  };
}

export function tapTopic(state: ReadingState, topic: string, now: string): ReadingState {
  return { ...state, interests: observeInterest(state.interests, { type: "topic", topic, at: now }, now) };
}

export function openSeries(state: ReadingState, seriesId: string, now: string): ReadingState {
  return { ...state, interests: observeInterest(state.interests, { type: "series", seriesId, at: now }, now) };
}
