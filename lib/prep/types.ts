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

export interface PrepChoice {
  id: string;
  text: string;
}

export interface PrepQuestion {
  id: string;
  prompt: string;
  options: PrepChoice[];
  answerId: string;
  hints?: string[];
  explanation?: string;
}

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
