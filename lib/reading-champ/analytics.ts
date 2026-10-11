/**
 * Privacy-minimal metrics for the ages 8–10 plan.
 * Everything is derived from on-device events. Minutes are diagnostic only.
 * North star: stories completed per week and active reading days per week.
 */

import { weekStart } from "../date";
import type { AnalyticsEvent, Genre } from "./types";

export interface WeekMetrics {
  storiesCompleted: number;
  activeDays: number;
  unpromptedReturns: number;
  rereads: number;
  offAppReports: number;
  promotions: number;
  demotions: number;
  /** Diagnostic. Not the north-star metric. */
  minutes: number;
  genres: Genre[];
}

export interface RetentionFlags {
  d1: boolean | null;
  d7: boolean | null;
  d30: boolean | null;
}

function dayInWeek(day: string, week: string): boolean {
  return day >= week && day < addIsoDays(week, 7);
}

function addIsoDays(day: string, n: number): string {
  const [y, m, d] = day.split("-").map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  date.setUTCDate(date.getUTCDate() + n);
  return date.toISOString().slice(0, 10);
}

export function weeklyMetrics(events: AnalyticsEvent[], day: string): WeekMetrics {
  const week = weekStart(day);
  const inWeek = events.filter((event) => "day" in event && event.day && dayInWeek(event.day, week));
  const genres = new Set<Genre>();
  let storiesCompleted = 0;
  let unpromptedReturns = 0;
  let rereads = 0;
  let offAppReports = 0;
  let promotions = 0;
  let demotions = 0;
  let minutes = 0;
  const days = new Set<string>();
  for (const event of inWeek) {
    if (event.type === "finish") {
      storiesCompleted += 1;
      if (event.genre) genres.add(event.genre);
      minutes += event.minutes ?? 0;
      days.add(event.day);
    } else if (event.type === "reread") {
      rereads += 1;
      days.add(event.day);
      minutes += event.minutes ?? 0;
    } else if (event.type === "open" || event.type === "abandon") {
      days.add(event.day);
    } else if (event.type === "return" && event.unprompted) {
      unpromptedReturns += 1;
    } else if (event.type === "off_app") {
      offAppReports += 1;
    } else if (event.type === "level_change") {
      if (event.direction === "promote") promotions += 1;
      else demotions += 1;
    }
  }
  return {
    storiesCompleted,
    activeDays: days.size,
    unpromptedReturns,
    rereads,
    offAppReports,
    promotions,
    demotions,
    minutes,
    genres: [...genres],
  };
}

/** Local retention against the first day Reading Champ was opened. */
export function retentionFlags(events: AnalyticsEvent[], firstSeenDay: string | null, today: string): RetentionFlags {
  if (!firstSeenDay) return { d1: null, d7: null, d30: null };
  const days = new Set(events.filter((event) => "day" in event && event.day).map((event) => event.day));
  const flag = (offset: number): boolean | null => {
    const target = addIsoDays(firstSeenDay, offset);
    if (today < target) return null;
    return days.has(target);
  };
  return { d1: flag(1), d7: flag(7), d30: flag(30) };
}
