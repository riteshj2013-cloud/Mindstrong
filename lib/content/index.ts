import type { AgeBand, ContentPack, Weekday } from "../types";
import { clampAge, ageToBand } from "./age";
import { mondayPack67 } from "./packs/monday-6-7";
import { mondayPack89 } from "./packs/monday-8-9";
import { mondayPack1011 } from "./packs/monday-10-11";
import { mondayPack1213 } from "./packs/monday-12-13";
import { mondayPack1415 } from "./packs/monday-14-15";
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

export const ALL_READY_PACKS: ContentPack[] = Object.values(MONDAY_BY_BAND);

/** Default / legacy alias — ages 8–9 baseline. */
export const mondayPack = mondayPack89;

/** Lightweight scaffolds so other weekdays resolve without crashing. */
function scaffold(day: Weekday, band: AgeBand, title: string): ContentPack {
  const base = MONDAY_BY_BAND[band];
  return {
    id: `${day}-${band}-scaffold`,
    ageBand: band,
    weekday: day,
    title,
    ready: false,
    phases: base.phases,
  };
}

function packsForBand(band: AgeBand): Record<Weekday, ContentPack> {
  return {
    mon: MONDAY_BY_BAND[band],
    tue: scaffold("tue", band, "Tuesday · Coming soon"),
    wed: scaffold("wed", band, "Wednesday · Coming soon"),
    thu: scaffold("thu", band, "Thursday · Coming soon"),
    fri: scaffold("fri", band, "Friday · Coming soon"),
    sat: scaffold("sat", band, "Saturday · Coming soon"),
    sun: scaffold("sun", band, "Sunday · Coming soon"),
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

export function packForAge(age: number, day: string = ""): ContentPack {
  return packForToday(day, age);
}

export function getPack(id: string): ContentPack | undefined {
  return ALL_READY_PACKS.find((p) => p.id === id);
}
