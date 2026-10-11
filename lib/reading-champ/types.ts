/**
 * Reading Champ content model.
 * Ages 8–10 use S1–S5 (ladder levels 5–9). The same types cover the full
 * 4–12 ladder (levels 1–24, bands A–D) so later bands do not need a new schema.
 */

export type Genre = "fiction" | "nonfiction";

export type BubbleKind = "speech" | "thought" | "caption" | "narration";

export type SceneId =
  | "library"
  | "space"
  | "burrow"
  | "meadow"
  | "time"
  | "savanna"
  | "train"
  | "timeline";

export interface Bubble {
  id: string;
  kind: BubbleKind;
  /** Empty for captions and narration. */
  speaker?: string;
  text: string;
}

export interface Panel {
  id: string;
  scene: SceneId;
  /** Character kit ids. Art is drawn from these; words stay in `bubbles`. */
  characters: string[];
  bubbles: Bubble[];
}

export interface StoryPage {
  id: string;
  panels: Panel[];
}

export interface GlossaryEntry {
  word: string;
  definition: string;
}

export interface ComprehensionQ {
  prompt: string;
  options: { id: string; label: string; emoji: string }[];
  answerId: string;
  type: "recall" | "inference";
}

export interface StorySource {
  origin: "original" | "adapted";
  license: string;
  attribution: string;
  sourceUrl?: string;
  /** Non-commercial flag. Avoid NC assets in a paid app unless legal approves. */
  nc: boolean;
  /** Share-alike flag. Adaptations of SA text must stay under a compatible license. */
  sa: boolean;
  verifiedBy: string;
  verifiedOn: string;
  notes?: string;
}

export interface Story {
  id: string;
  title: string;
  seriesId: string;
  episode: number;
  genre: Genre;
  subgenre: string;
  themes: string[];
  /** 1–24. S1–S5 are 5–9. */
  ladderLevel: number;
  ageFloor: number;
  language: "en";
  pages: StoryPage[];
  glossary: GlossaryEntry[];
  comprehension: ComprehensionQ[];
  /** One parent prompt. Not shown to the child as a score. */
  talkAbout: string;
  expectedMinutes: number;
  /** Only `reviewed` stories may be recommended. */
  status: "reviewed" | "draft";
  stretchEligible: boolean;
  /** Short samples skip the production page-count warning. */
  sample?: boolean;
  source: StorySource;
  art: { pipeline: "placeholder-svg"; notes: string };
}

export interface SeriesInfo {
  id: string;
  title: string;
  genre: Genre;
  blurb: string;
  themes: string[];
  emoji: string;
}

export interface StoryMeta {
  id: string;
  title: string;
  seriesId: string;
  episode: number;
  genre: Genre;
  subgenre: string;
  themes: string[];
  ladderLevel: number;
  status: Story["status"];
  stretchEligible: boolean;
  expectedMinutes: number;
  talkAbout: string;
  wordCount: number;
  sample?: boolean;
}

export interface PlacementStrip {
  id: string;
  genre: Genre;
  /** S1, S2, or S3 only — the placement game does not probe S4–S5. */
  ladderLevel: 5 | 6 | 7;
  title: string;
  pages: StoryPage[];
  glossary: GlossaryEntry[];
  questions: ComprehensionQ[];
}

export interface Outcome {
  storyId: string;
  genre: Genre;
  /** Child's level when the story was served. */
  readerLevel: number;
  storyLevel: number;
  isChallenge: boolean;
  finished: boolean;
  abandoned: boolean;
  /** Null when they left before the questions. */
  comprehension: number | null;
  lookups: number;
  wordCount: number;
  minutes: number;
  expectedMinutes: number;
  reread: boolean;
  at: string;
  day: string;
}

export interface SavedWord {
  word: string;
  definition: string;
  storyId: string;
  at: string;
}

export interface CoverMark {
  storyId: string;
  at: string;
}

export type AnalyticsEvent =
  | {
      type: "finish" | "abandon" | "reread" | "open";
      at: string;
      day: string;
      storyId: string;
      genre?: Genre;
      minutes?: number;
      unprompted?: boolean;
    }
  | {
      type: "level_change";
      at: string;
      day: string;
      direction: "promote" | "demote";
      genre: Genre;
    }
  | { type: "return"; at: string; day: string; unprompted: boolean }
  | { type: "off_app"; at: string; day: string };

export interface InterestState {
  topics: Record<string, number>;
  genres: Record<string, number>;
  series: Record<string, number>;
  /** How often a topic has been seen. Exploration prefers low counts. */
  seenTopics: Record<string, number>;
  updatedAt: string;
}

export interface ReminderSettings {
  enabled: boolean;
  /** Local time HH:MM. */
  time: string;
  quietStart: string;
  quietEnd: string;
  lastSentDay: string | null;
}

export interface PlacementProgress {
  pending: { genre: Genre; level: 5 | 6 | 7 }[];
  results: { genre: Genre; level: 5 | 6 | 7; passed: boolean }[];
}

export interface ReadingCurrent {
  storyId: string;
  panelIndex: number;
  startedAt: string;
  lookups: string[];
  isChallenge: boolean;
}

export interface ReadingState {
  v: 1;
  placed: boolean;
  fictionLevel: number;
  nonfictionLevel: number;
  lastLevelChangeAt: string | null;
  outcomes: Outcome[];
  finishedIds: string[];
  covers: CoverMark[];
  readingDays: string[];
  restDays: string[];
  weeklyGoal: number;
  goalCelebratedForWeek: string | null;
  pendingCelebration: boolean;
  words: SavedWord[];
  interests: InterestState;
  /** Parent control. On by default. */
  personalize: boolean;
  events: AnalyticsEvent[];
  current: ReadingCurrent | null;
  storiesStarted: number;
  /** Shelf-only offset. Does not change the stored level. */
  nudge: -1 | 0 | 1;
  notice: "new-stories" | "easier-picks" | null;
  textSize: "sm" | "md" | "lg";
  dyslexiaFont: boolean;
  voice: "default" | "en-IN";
  badges: string[];
  dailyLimitMin: number | null;
  reminder: ReminderSettings;
  offAppDays: string[];
  placement: PlacementProgress | null;
  /** First day Reading Champ was opened, for local retention math. */
  firstSeenDay: string | null;
}
