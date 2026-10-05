import type { AgeBand, ChildAge } from "../types";

export const MIN_AGE = 6;
export const MAX_AGE = 15;

export const ALL_AGES: ChildAge[] = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export const AGE_BANDS: AgeBand[] = ["6-7", "8-9", "10-11", "12-13", "14-15"];

export const BAND_LABELS: Record<AgeBand, string> = {
  "6-7": "Ages 6–7 · Early explorers",
  "8-9": "Ages 8–9 · Pattern builders",
  "10-11": "Ages 10–11 · Multi-step thinkers",
  "12-13": "Ages 12–13 · Strategy crew",
  "14-15": "Ages 14–15 · Abstract minds",
};

export function clampAge(n: unknown): ChildAge {
  const v = typeof n === "number" ? n : Number(n);
  if (!Number.isFinite(v)) return 8;
  return Math.min(MAX_AGE, Math.max(MIN_AGE, Math.round(v))) as ChildAge;
}

/** Map a single age to its content band. */
export function ageToBand(age: number): AgeBand {
  const a = clampAge(age);
  if (a <= 7) return "6-7";
  if (a <= 9) return "8-9";
  if (a <= 11) return "10-11";
  if (a <= 13) return "12-13";
  return "14-15";
}

/** Mid age for a band (used when migrating old ageBand-only profiles). */
export function bandDefaultAge(band: string | undefined): ChildAge {
  switch (band) {
    case "6-7":
      return 7;
    case "6-8":
    case "8-9":
      return 8;
    case "10-11":
      return 10;
    case "12-13":
      return 12;
    case "14-15":
      return 14;
    default:
      return 8;
  }
}
