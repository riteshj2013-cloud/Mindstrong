/** SOF-style test prep types (local-first). */

export type PrepSubject = "maths" | "english" | "science";

export type Grade = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export const ALL_GRADES: Grade[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const ALL_SUBJECTS: PrepSubject[] = ["maths", "english", "science"];

export const SUBJECT_META: Record<
  PrepSubject,
  { label: string; exam: string; emoji: string; blurb: string; tone: string }
> = {
  maths: {
    label: "Maths",
    exam: "IMO-style",
    emoji: "🔢",
    blurb: "Numbers, patterns & problem solving",
    tone: "bg-sky/30",
  },
  english: {
    label: "English",
    exam: "IEO-style",
    emoji: "📚",
    blurb: "Words, grammar & reading smarts",
    tone: "bg-plum/25",
  },
  science: {
    label: "Science",
    exam: "NSO-style",
    emoji: "🔬",
    blurb: "Living world, matter & how things work",
    tone: "bg-mint/40",
  },
};

/**
 * Interactive lesson steps — not long passive text.
 * Lessons are OPTIONAL; sets unlock without finishing.
 */
export type LessonVisual =
  | "place-value"
  | "number-line"
  | "fraction-bar"
  | "balance"
  | "word-cards"
  | "sentence"
  | "plant"
  | "water-cycle"
  | "atom-lite"
  | "magnet"
  | "none";

export type LessonStep =
  | {
      id: string;
      type: "hook";
      emoji: string;
      title: string;
      body: string[];
      cta?: string;
      visual?: LessonVisual;
      speak?: string;
    }
  | {
      id: string;
      type: "reveal";
      title: string;
      lead: string;
      cards: { label: string; reveal: string; emoji?: string }[];
      visual?: LessonVisual;
      speak?: string;
    }
  | {
      id: string;
      type: "demo";
      title: string;
      steps: string[];
      punchline: string;
      visual?: LessonVisual;
      speak?: string;
    }
  | {
      id: string;
      type: "try";
      title: string;
      prompt: string;
      options: PrepChoice[];
      answerId: string;
      why: string;
      visual?: LessonVisual;
      speak?: string;
    }
  | {
      id: string;
      type: "check";
      title: string;
      question: PrepQuestion;
      visual?: LessonVisual;
      speak?: string;
    }
  | {
      id: string;
      type: "wrap";
      emoji: string;
      title: string;
      bullets: string[];
      cta?: string;
      visual?: LessonVisual;
      speak?: string;
    };

export interface ChapterSet {
  id: string;
  title: string;
  /** Target 20–25 olympiad-style MCQs. */
  questionCount: number;
  /** Generator topic key used at runtime (fallback when questions absent). */
  topic: string;
  /** Authored SOF items — preferred over procedural generation when present. */
  questions?: PrepQuestion[];
}

export interface ChapterDef {
  id: string;
  title: string;
  emoji: string;
  blurb: string;
  lesson: LessonStep[];
  sets: ChapterSet[];
  /** Extra seeds for paper sampling. */
  paperTopics: string[];
}

export interface GradeSubjectPack {
  subject: PrepSubject;
  grade: Grade;
  ready: boolean;
  chapters: ChapterDef[];
  paperTitle: string;
  paperCount: number;
}

export interface ChapterProgress {
  lessonDone: boolean;
  sets: Record<string, { correct: number; total: number; at: string }>;
}

export interface PrepProgress {
  v: 1;
  byPack: Record<string, Record<string, ChapterProgress>>;
  lastSubject?: PrepSubject;
  lastGrade?: Grade;
  paperScores: Record<string, { correct: number; total: number; at: string }>;
}

export type PrepActiveKind = "lesson" | "set" | "paper";

export interface PrepActive {
  v: 1;
  kind: PrepActiveKind;
  subject: PrepSubject;
  grade: Grade;
  chapterId?: string;
  setId?: string;
  index: number;
  startedAt: string;
  answers: Record<string, string>;
  hinted: string[];
  tried: string[];
  /** Cached question ids for this run (set/paper). */
  questionIds?: string[];
  /** For lesson: which reveal cards opened */
  reveals?: Record<string, number[]>;
  demoStep?: number;
}

export function packKey(subject: PrepSubject, grade: Grade): string {
  return `${subject}-g${grade}`;
}

// ---------- Pictorial figures (SVG specs rendered in-app; no external SOF scans) ----------

/** Structured figure for a stem or an option — rendered as original SVG. */
export type FigureSpec =
  | {
      type: "fraction-bar";
      parts: number;
      shaded: number;
      label?: string;
      /** Compare two bars stacked (e.g. 1/2 vs 2/4). */
      compare?: { parts: number; shaded: number; label?: string };
    }
  | {
      type: "fraction-circle";
      parts: number;
      shaded: number;
      /** false = unequal slices (common olympiad trap). Default true. */
      equal?: boolean;
      label?: string;
    }
  | {
      type: "shape-grid";
      rows: number;
      cols: number;
      /** 0-based flat indices of shaded cells. */
      shaded: number[];
      cell?: "square" | "circle";
      label?: string;
    }
  | {
      type: "number-line";
      min: number;
      max: number;
      step?: number;
      point?: number;
      points?: number[];
      label?: string;
    }
  | {
      type: "place-value-blocks";
      thousands?: number;
      hundreds?: number;
      tens?: number;
      ones?: number;
      label?: string;
    }
  | {
      type: "place-value-chart";
      places: string[];
      digits: string[];
      highlightIndex?: number;
      label?: string;
    }
  | {
      type: "angle";
      degrees: number;
      label?: string;
      showMeasure?: boolean;
    }
  | {
      type: "shapes";
      items: {
        kind: "triangle" | "square" | "rectangle" | "circle" | "pentagon" | "hexagon";
        label?: string;
        highlight?: boolean;
      }[];
    }
  | {
      type: "labeled-diagram";
      kind: "plant" | "cell" | "water-cycle" | "matter-states" | "food-plate";
      /** Label ids to hide (fill-in / identify questions). */
      blankIds?: string[];
      highlightId?: string;
      label?: string;
    }
  | {
      type: "table";
      headers: string[];
      rows: string[][];
      highlightCell?: [number, number];
      label?: string;
    }
  | {
      type: "array-grid";
      rows: number;
      cols: number;
      /** Optional count label under the array. */
      label?: string;
      filled?: boolean;
    }
  | {
      /** Local public asset only (under /Mindstrong/…); never remote SOF scans. */
      type: "image";
      src: string;
      alt: string;
    }
  | {
      /**
       * Writer-authored inline SVG from `**Diagram (SVG):**` fenced blocks.
       * Must be sanitized (no script / event handlers) before render.
       */
      type: "svg";
      markup: string;
      alt?: string;
    };

export interface PrepChoice {
  id: string;
  text: string;
  /** Optional SVG figure for this option (A–D pictorial choices). */
  figure?: FigureSpec;
}

export interface PrepQuestion {
  id: string;
  prompt: string;
  options: PrepChoice[];
  answerId: string;
  hints?: string[];
  explanation?: string;
  /** Stem figure shown above or below the prompt. */
  figure?: FigureSpec;
}
