/**
 * Mindstrong — shared types (v1, local-first).
 * Muscles: reasoning + maths + spelling + confidence. Ages 6–15.
 */

export type Muscle = "reasoning" | "maths" | "spelling" | "confidence";

/** Single selectable child age (inclusive). */
export type ChildAge = 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;

/** Content difficulty band keyed by age. */
export type AgeBand = "6-7" | "8-9" | "10-11" | "12-13" | "14-15";

export type Phase =
  | "idle"
  | "warm_up"
  | "focus_a"
  | "focus_b"
  | "focus_c"
  | "hard_try"
  | "reflect"
  | "complete";

/** Phases that contain content (excludes idle/complete). */
export type PlayPhase = Exclude<Phase, "idle" | "complete">;

export const PLAY_PHASES: PlayPhase[] = [
  "warm_up",
  "focus_a",
  "focus_b",
  "focus_c",
  "hard_try",
  "reflect",
];

export type Weekday = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

// ---------- Visual tokens used to draw patterns / numbers ----------

export type TokenColor = "red" | "blue" | "yellow" | "green" | "purple";

export type Token =
  | { kind: "dot"; color: TokenColor; size?: "sm" | "lg" }
  | { kind: "shape"; shape: "circle" | "square" | "triangle"; color?: TokenColor }
  | { kind: "stars"; count: number }
  | { kind: "letter"; char: string }
  | { kind: "number"; value: number }
  | { kind: "blank" }
  | { kind: "tensOnes"; tens: number; ones: number };

export interface ChoiceOption {
  id: string;
  /** Spoken / accessible label. */
  label?: string;
  token?: Token;
  text?: string;
}

interface BaseItem {
  id: string;
  /** Optional coach line shown above the prompt. */
  lead?: string;
}

/** Simple talk/explain card with a single “Next” action. */
export interface IntroItem extends BaseItem {
  type: "intro";
  emoji: string;
  title: string;
  body: string[];
  cta?: string;
}

/** The “Try before hint!” lock-in ritual. */
export interface RitualItem extends BaseItem {
  type: "ritual";
  title: string;
  body: string[];
  chant: string;
}

/** Worked example for place value (no answer to check). */
export interface ModelItem extends BaseItem {
  type: "model";
  variant: "bundle_ten" | "show_number";
  title: string;
  /** For show_number. */
  number?: number;
  body: string[];
}

/** Multiple choice with optional visual sequence/display. */
export interface ChoiceItem extends BaseItem {
  type: "choice";
  prompt: string;
  sequence?: Token[];
  display?:
    | { kind: "tensOnes"; tens: number; ones: number }
    | {
        kind: "compare";
        left: { tens: number; ones: number };
        right: { tens: number; ones: number };
      };
  options: ChoiceOption[];
  answerId: string;
  /** Ordered, answer-free hints. Locked until the first attempt. */
  hints: string[];
  correct: string;
  tryAgain: string;
  /** Rule shown after success (“How do you know?”). */
  rule?: string;
}

/** Build a number with tens rods + ones cubes. */
export interface BuildItem extends BaseItem {
  type: "build";
  /** build: start empty, add tens/ones. bundle: start with loose ones, group into tens. */
  mode: "build" | "bundle";
  prompt: string;
  target: number;
  hints: string[];
  correct: string;
  tryAgain: string;
}

/** The stretch item. Hints need an explicit “I tried” first. */
export interface HardTryItem extends BaseItem {
  type: "hard_try";
  frame: string[];
  sequence: number[];
  answer: number;
  hints: string[];
  messages: {
    correctNoHint: string;
    correctAfterHint: string;
    wrong: string;
    stuck: string;
  };
}

export interface ReflectQuestion {
  id: "feltHard" | "whatTried";
  prompt: string;
  options: { id: string; label: string; emoji: string }[];
}

export interface ReflectItem extends BaseItem {
  type: "reflect";
  questions: ReflectQuestion[];
  closing: string;
}

export type ItemSpec =
  | IntroItem
  | RitualItem
  | ModelItem
  | ChoiceItem
  | BuildItem
  | HardTryItem
  | ReflectItem;

export interface PhaseSpec {
  muscle: Muscle;
  title: string;
  kidTitle: string;
  emoji: string;
  estimatedMin: number;
  items: ItemSpec[];
}

export interface ContentPack {
  id: string;
  ageBand: AgeBand;
  weekday: Weekday;
  title: string;
  /** false = scaffold only (not yet authored). */
  ready: boolean;
  phases: Record<PlayPhase, PhaseSpec>;
}

// ---------- Runtime + storage ----------

export interface ItemResult {
  attempts: number;
  correct: boolean;
  hintsUsed: number;
  /** An attempt (or explicit “I tried”) happened before any hint. */
  triedBeforeHint: boolean;
  /** Hard try only: child tapped “I tried”. */
  explicitTry?: boolean;
  /** Finished the item without solving (moved on bravely). */
  movedOn?: boolean;
  done: boolean;
}

export interface Reflection {
  feltHard?: string;
  whatTried?: string;
}

export interface ActiveSession {
  v: 1;
  id: string;
  /** Local calendar day YYYY-MM-DD the session belongs to. */
  date: string;
  packId: string;
  phase: Phase;
  itemIndex: number;
  startedAt: string;
  updatedAt: string;
  results: Record<string, ItemResult>;
  reflection?: Reflection;
}

export interface SessionSummary {
  id: string;
  date: string;
  packId: string;
  completed: boolean;
  hardTryAttempted: boolean;
  hardTrySolved: boolean;
  hardTryHints: number;
  triedBeforeHintCount: number;
  reflection?: Reflection;
  durationSec: number;
  completedAt: string;
}

export interface Profile {
  childName: string;
  /** Child age 6–15. Drives which content pack loads. */
  age: ChildAge;
  createdAt: string;
  /** Legacy field from early builds; ignored once `age` is set. */
  ageBand?: string;
}

export interface Progress {
  streakDays: number;
  bestStreak: number;
  lastCompletedDate: string | null;
  sessionsCompleted: number;
  history: SessionSummary[];
}

export interface Settings {
  readAloud: boolean;
  reduceMotion: boolean;
}
