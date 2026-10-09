import type { AgeBand, ContentPack, Weekday } from "../types";
import { clampAge, ageToBand } from "./age";
import { mondayPack67 } from "./packs/monday-6-7";
import { mondayPack89 } from "./packs/monday-8-9";
import { mondayPack1011 } from "./packs/monday-10-11";
import { mondayPack1213 } from "./packs/monday-12-13";
import { mondayPack1415 } from "./packs/monday-14-15";
import { tuesdayPack67 } from "./packs/tuesday-6-7";
import { tuesdayPack89 } from "./packs/tuesday-8-9";
import { tuesdayPack1011 } from "./packs/tuesday-10-11";
import { tuesdayPack1213 } from "./packs/tuesday-12-13";
import { tuesdayPack1415 } from "./packs/tuesday-14-15";
import { wednesdayPack67 } from "./packs/wednesday-6-7";
import { wednesdayPack89 } from "./packs/wednesday-8-9";
import { wednesdayPack1011 } from "./packs/wednesday-10-11";
import { wednesdayPack1213 } from "./packs/wednesday-12-13";
import { wednesdayPack1415 } from "./packs/wednesday-14-15";
import { thursdayPack67 } from "./packs/thursday-6-7";
import { thursdayPack89 } from "./packs/thursday-8-9";
import { thursdayPack1011 } from "./packs/thursday-10-11";
import { thursdayPack1213 } from "./packs/thursday-12-13";
import { thursdayPack1415 } from "./packs/thursday-14-15";
import { fridayPack67 } from "./packs/friday-6-7";
import { fridayPack89 } from "./packs/friday-8-9";
import { fridayPack1011 } from "./packs/friday-10-11";
import { fridayPack1213 } from "./packs/friday-12-13";
import { fridayPack1415 } from "./packs/friday-14-15";
import { saturdayPack67 } from "./packs/saturday-6-7";
import { saturdayPack89 } from "./packs/saturday-8-9";
import { saturdayPack1011 } from "./packs/saturday-10-11";
import { saturdayPack1213 } from "./packs/saturday-12-13";
import { saturdayPack1415 } from "./packs/saturday-14-15";
import { sundayPack67 } from "./packs/sunday-6-7";
import { sundayPack89 } from "./packs/sunday-8-9";
import { sundayPack1011 } from "./packs/sunday-10-11";
import { sundayPack1213 } from "./packs/sunday-12-13";
import { sundayPack1415 } from "./packs/sunday-14-15";
import { weekdayOf } from "../date";

export { ageToBand, clampAge, ALL_AGES, BAND_LABELS, MIN_AGE, MAX_AGE } from "./age";

/** Ready Monday packs keyed by age band. */
export const MONDAY_BY_BAND: Record<AgeBand, ContentPack> = {
  "6-7": mondayPack67,
  "8-9": mondayPack89,
  "10-11": mondayPack1011,
  "12-13": mondayPack1213,
  "14-15": mondayPack1415,
};

/** Ready Tuesday packs keyed by age band. */
export const TUESDAY_BY_BAND: Record<AgeBand, ContentPack> = {
  "6-7": tuesdayPack67,
  "8-9": tuesdayPack89,
  "10-11": tuesdayPack1011,
  "12-13": tuesdayPack1213,
  "14-15": tuesdayPack1415,
};

/** Ready Wednesday packs keyed by age band. */
export const WEDNESDAY_BY_BAND: Record<AgeBand, ContentPack> = {
  "6-7": wednesdayPack67,
  "8-9": wednesdayPack89,
  "10-11": wednesdayPack1011,
  "12-13": wednesdayPack1213,
  "14-15": wednesdayPack1415,
};

/** Ready Thursday packs keyed by age band. */
export const THURSDAY_BY_BAND: Record<AgeBand, ContentPack> = {
  "6-7": thursdayPack67,
  "8-9": thursdayPack89,
  "10-11": thursdayPack1011,
  "12-13": thursdayPack1213,
  "14-15": thursdayPack1415,
};

/** Ready Friday packs keyed by age band. */
export const FRIDAY_BY_BAND: Record<AgeBand, ContentPack> = {
  "6-7": fridayPack67,
  "8-9": fridayPack89,
  "10-11": fridayPack1011,
  "12-13": fridayPack1213,
  "14-15": fridayPack1415,
};

/** Ready Saturday packs keyed by age band. */
export const SATURDAY_BY_BAND: Record<AgeBand, ContentPack> = {
  "6-7": saturdayPack67,
  "8-9": saturdayPack89,
  "10-11": saturdayPack1011,
  "12-13": saturdayPack1213,
  "14-15": saturdayPack1415,
};

/** Ready Sunday packs keyed by age band. */
export const SUNDAY_BY_BAND: Record<AgeBand, ContentPack> = {
  "6-7": sundayPack67,
  "8-9": sundayPack89,
  "10-11": sundayPack1011,
  "12-13": sundayPack1213,
  "14-15": sundayPack1415,
};

export const ALL_READY_PACKS: ContentPack[] = [
  ...Object.values(MONDAY_BY_BAND),
  ...Object.values(TUESDAY_BY_BAND),
  ...Object.values(WEDNESDAY_BY_BAND),
  ...Object.values(THURSDAY_BY_BAND),
  ...Object.values(FRIDAY_BY_BAND),
  ...Object.values(SATURDAY_BY_BAND),
  ...Object.values(SUNDAY_BY_BAND),
];

/** Default / legacy alias — ages 8–9 baseline. */
export const mondayPack = mondayPack89;

function packsForBand(band: AgeBand): Record<Weekday, ContentPack> {
  return {
    mon: MONDAY_BY_BAND[band],
    tue: TUESDAY_BY_BAND[band],
    wed: WEDNESDAY_BY_BAND[band],
    thu: THURSDAY_BY_BAND[band],
    fri: FRIDAY_BY_BAND[band],
    sat: SATURDAY_BY_BAND[band],
    sun: SUNDAY_BY_BAND[band],
  };
}

/** Prefer today's pack if ready; otherwise fall back to Monday for that age band. */
export function packForToday(day: string = "", age: number = 8): ContentPack {
  const band = ageToBand(clampAge(age));
  const wd = day ? weekdayOf(day) : weekdayOf();
  const pack = packsForBand(band)[wd];
  if (pack.ready) return pack;
  return MONDAY_BY_BAND[band];
}

export const MORE_DAILY_PACKS_SOON = "More daily packs coming soon";

export interface TodayPackInfo {
  /** Pack to actually play (today's, or the Monday pack as a fallback). */
  pack: ContentPack;
  weekday: Weekday;
  /** True when today's weekday pack isn't written yet and we serve Monday items. */
  isFallback: boolean;
  /** Short, honest label for chrome (never implies a 7-day set is ready). */
  shortLabel: string;
}

/** Today's pack plus honest copy about whether it's a fallback. */
export function todayPackInfo(day: string = "", age: number = 8): TodayPackInfo {
  const band = ageToBand(clampAge(age));
  const wd = day ? weekdayOf(day) : weekdayOf();
  const native = packsForBand(band)[wd];
  if (native.ready) {
    return { pack: native, weekday: wd, isFallback: false, shortLabel: native.title };
  }
  return {
    pack: MONDAY_BY_BAND[band],
    weekday: wd,
    isFallback: true,
    shortLabel: "Fresh picks · Monday pack",
  };
}

export function packForAge(age: number, day: string = ""): ContentPack {
  return packForToday(day, age);
}

export function getPack(id: string): ContentPack | undefined {
  return ALL_READY_PACKS.find((p) => p.id === id);
}
