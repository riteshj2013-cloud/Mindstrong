import { getPrepPack, listReadyGrades } from "./catalog";
import { generatePaper, generateSet } from "./generate";
import type { Grade, PrepQuestion, PrepSubject } from "./types";
import { applyPictorialList } from "./pictorial";
import { READY_GRADES } from "./grades";

export * from "./types";
export * from "./grades";
export { getPrepPack, listReadyGrades } from "./catalog";
export {
  readPrepProgress,
  savePrepProgress,
  usePrepProgress,
  usePrepActive,
  getChapterProgress,
  markLessonDone,
  saveSetScore,
  savePaperScore,
  rememberPrepChoice,
  savePrepActive,
  readPrepActive,
  clearPrepActive,
  DEFAULT_PREP_PROGRESS,
} from "./progress";

export function getChapterSetQuestions(
  subject: PrepSubject,
  grade: Grade,
  chapterId: string,
  setId: string,
): PrepQuestion[] {
  const pack = getPrepPack(subject, grade);
  const chapter = pack.chapters.find((c) => c.id === chapterId);
  const set = chapter?.sets.find((s) => s.id === setId);
  if (!chapter || !set) return [];
  if (set.questions && set.questions.length > 0) {
    return applyPictorialList(set.questions);
  }
  const seed =
    subject.charCodeAt(0) * 1000 +
    grade * 97 +
    chapterId.length * 13 +
    setId.charCodeAt(setId.length - 1) * 17;
  return generateSet(set.topic, set.questionCount, seed);
}

export function getMockPaper(subject: PrepSubject, grade: Grade): PrepQuestion[] {
  const pack = getPrepPack(subject, grade);
  if (!pack.ready) return [];
  const authored = pack.chapters.flatMap((c) =>
    c.sets.flatMap((s) => s.questions ?? []),
  );
  if (authored.length >= pack.paperCount) {
    // Deterministic sample from authored SOF items when available.
    const seed = subject.charCodeAt(0) * 777 + grade * 31;
    let a = seed >>> 0;
    const rng = () => {
      a = (a + 0x6d2b79f5) >>> 0;
      let t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    const pool = [...authored];
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return applyPictorialList(pool.slice(0, pack.paperCount)).map((q, i) => ({
      ...q,
      id: `paper-${i}-${q.id}`,
    }));
  }
  const topics = pack.chapters.flatMap((c) => c.paperTopics);
  const seed = subject.charCodeAt(0) * 777 + grade * 31;
  return generatePaper(topics, pack.paperCount, seed);
}

export function isPrepReady(subject: PrepSubject, grade: Grade): boolean {
  return getPrepPack(subject, grade).ready;
}

export { READY_GRADES };
export { applyPictorial, applyPictorialList, pictorialStats, isPictorial } from "./pictorial";
