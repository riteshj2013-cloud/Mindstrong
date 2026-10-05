import type { ContentPack, Weekday } from "../types";
import { weekdayOf } from "../date";
import { mondayPack } from "./monday";

/** Lightweight scaffolds so other weekdays resolve without crashing. */
function scaffold(day: Weekday, title: string): ContentPack {
  return {
    id: `${day}-6-8-scaffold`,
    ageBand: "6-8",
    weekday: day,
    title,
    ready: false,
    phases: mondayPack.phases, // share shape; UI only starts ready packs
  };
}

export const PACKS: Record<Weekday, ContentPack> = {
  mon: mondayPack,
  tue: scaffold("tue", "Tuesday · Coming soon"),
  wed: scaffold("wed", "Wednesday · Coming soon"),
  thu: scaffold("thu", "Thursday · Coming soon"),
  fri: scaffold("fri", "Friday · Coming soon"),
  sat: scaffold("sat", "Saturday · Coming soon"),
  sun: scaffold("sun", "Sunday · Coming soon"),
};

/** Prefer today's pack if ready; otherwise fall back to Monday (demo-ready). */
export function packForToday(day: string = ""): ContentPack {
  const wd = day ? weekdayOf(day) : weekdayOf();
  const pack = PACKS[wd];
  if (pack.ready) return pack;
  return mondayPack;
}

export function getPack(id: string): ContentPack | undefined {
  return Object.values(PACKS).find((p) => p.id === id) ?? (id === mondayPack.id ? mondayPack : undefined);
}
