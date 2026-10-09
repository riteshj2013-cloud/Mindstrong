import type { ChildAge } from "../types";
import type { Grade } from "./types";
import { ALL_GRADES, ALL_SUBJECTS } from "./types";
import { clampAge } from "../content/age";
import { subjectHasAuthoredContent } from "./catalog";

/** Age 6→G1 … Age 15→G10 */
export function ageToGrade(age: number): Grade {
  const a = clampAge(age);
  return (a - 5) as Grade;
}

export function gradeToTypicalAge(grade: Grade): ChildAge {
  return (grade + 5) as ChildAge;
}

export function gradeLabel(grade: Grade): string {
  return `Grade ${grade}`;
}

export function gradeSubtitle(grade: Grade): string {
  const age = gradeToTypicalAge(grade);
  return `Usually ages ${age}–${Math.min(15, age + 1)}`;
}

/**
 * Unlock rule: a grade is ready when each of maths, english, and science has
 * ≥1 authored ChapterDef (a chapter whose sets include real `questions[]`).
 * Scaffold-only entries from `ch()` do not count. Empty catalog slots stay locked
 * (“coming soon”) until writers land content.
 */
export function gradesWithContent(): Grade[] {
  return ALL_GRADES.filter((g) =>
    ALL_SUBJECTS.every((s) => subjectHasAuthoredContent(s, g)),
  );
}

/** Snapshot of {@link gradesWithContent} for callers that want a const list. */
export const READY_GRADES: Grade[] = gradesWithContent();

export function isGradeReady(grade: Grade): boolean {
  return gradesWithContent().includes(grade);
}

/**
 * Closest playable grade for a grade that isn't ready yet
 * (ties go to the lower, gentler grade). Returns `grade` itself if it is ready.
 */
export function nearestReadyGrade(grade: Grade, ready: Grade[] = gradesWithContent()): Grade {
  if (!ready.length || ready.includes(grade)) return grade;
  return [...ready].sort((a, b) => Math.abs(a - grade) - Math.abs(b - grade) || a - b)[0];
}
