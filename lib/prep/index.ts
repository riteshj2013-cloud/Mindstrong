import { getPrepPack, listReadyGrades } from "./catalog";
import { generatePaper, generateSet } from "./generate";
import type { Grade, PrepQuestion, PrepSubject } from "./types";
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
  const topics = pack.chapters.flatMap((c) => c.paperTopics);
  const seed = subject.charCodeAt(0) * 777 + grade * 31;
  return generatePaper(topics, pack.paperCount, seed);
}

export function isPrepReady(subject: PrepSubject, grade: Grade): boolean {
  return getPrepPack(subject, grade).ready;
}

export { READY_GRADES };
