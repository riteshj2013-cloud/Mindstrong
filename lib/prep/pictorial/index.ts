import type { PrepQuestion } from "../types";
import { G4_PICTORIAL_OVERLAYS, G4_PICTORIAL_STATS } from "./g4-overlays";
import { cleanQuestion } from "../cleanText";

const ALL_OVERLAYS = {
  ...G4_PICTORIAL_OVERLAYS,
};

/** Merge stem/option SVG figure specs onto authored questions. */
export function applyPictorial(q: PrepQuestion): PrepQuestion {
  // Prefer figures already on the question (from ingest); overlay fills gaps.
  const o = ALL_OVERLAYS[q.id];
  if (!o) return q;
  return {
    ...q,
    figure: q.figure ?? o.figure,
    options: q.options.map((opt) => {
      const oo = o.options?.[opt.id as "a" | "b" | "c" | "d"];
      if (!oo) return opt;
      return {
        ...opt,
        figure: opt.figure ?? oo.figure,
        text: oo.text ?? opt.text,
      };
    }),
  };
}

export function applyPictorialList(qs: PrepQuestion[]): PrepQuestion[] {
  return qs.map((q) => cleanQuestion(applyPictorial(q)));
}

export function pictorialStats() {
  return G4_PICTORIAL_STATS;
}

export function isPictorial(q: PrepQuestion): boolean {
  return !!(q.figure || q.options.some((o) => o.figure));
}
