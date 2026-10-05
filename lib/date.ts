import type { Weekday } from "./types";

const pad = (n: number) => String(n).padStart(2, "0");

/** Local calendar day as YYYY-MM-DD. */
export function localDay(d: Date = new Date()): string {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export function parseDay(day: string): Date {
  const [y, m, d] = day.split("-").map(Number);
  return new Date(y, m - 1, d);
}

export function addDays(day: string, n: number): string {
  const d = parseDay(day);
  d.setDate(d.getDate() + n);
  return localDay(d);
}

/** Monday of the week containing `day`. */
export function weekStart(day: string = localDay()): string {
  const d = parseDay(day);
  const dow = (d.getDay() + 6) % 7; // Mon=0 … Sun=6
  return addDays(day, -dow);
}

export function weekDays(day: string = localDay()): string[] {
  const start = weekStart(day);
  return Array.from({ length: 7 }, (_, i) => addDays(start, i));
}

const WEEKDAYS: Weekday[] = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

export function weekdayOf(day: string = localDay()): Weekday {
  return WEEKDAYS[parseDay(day).getDay()];
}

export function shortDayLabel(day: string): string {
  return parseDay(day).toLocaleDateString(undefined, { weekday: "short" });
}
