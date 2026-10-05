import type { ChildAge } from "../types";
import type { Grade } from "./types";
import { clampAge } from "../content/age";

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

/** Grades with full content in v1. */
export const READY_GRADES: Grade[] = [3, 4, 5, 8];

export function isGradeReady(grade: Grade): boolean {
  return READY_GRADES.includes(grade);
}

/**
 * Closest playable grade for a grade that isn't ready yet
 * (ties go to the lower, gentler grade). Returns `grade` itself if it is ready.
 */
export function nearestReadyGrade(grade: Grade, ready: Grade[] = READY_GRADES): Grade {
  if (!ready.length || ready.includes(grade)) return grade;
  return [...ready].sort((a, b) => Math.abs(a - grade) - Math.abs(b - grade) || a - b)[0];
}
