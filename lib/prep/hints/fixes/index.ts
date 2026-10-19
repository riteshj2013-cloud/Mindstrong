import type { HintOverlay } from "../types";
import { G1_ENGLISH_HINT_FIXES } from "./english-g1";
import { G2_ENGLISH_HINT_FIXES } from "./english-g2";
import { G3_ENGLISH_HINT_FIXES } from "./english-g3";
import { G4_ENGLISH_HINT_FIXES } from "./english-g4";
import { G5_ENGLISH_HINT_FIXES } from "./english-g5";
import { G6_ENGLISH_HINT_FIXES } from "./english-g6";
import { G7_ENGLISH_HINT_FIXES } from "./english-g7";
import { G8_ENGLISH_HINT_FIXES } from "./english-g8";
import { G9_ENGLISH_HINT_FIXES } from "./english-g9";
import { G10_ENGLISH_HINT_FIXES } from "./english-g10";

/**
 * Hint FIX layer: reviewed item-specific rewrites (SOF English writer, 2026-10-19).
 * Unlike the overlays in ../g*-*.ts, a fix wins over BOTH the overlay and the question's own
 * authored `hints` (see applyHints in ../index.ts). Use it to replace hints that are already
 * authored in content files or overlays; put new hints for unhinted items in the overlays.
 */
export const HINT_FIX_PACKS: Record<string, Record<string, HintOverlay>> = {
  "g1-english": G1_ENGLISH_HINT_FIXES,
  "g2-english": G2_ENGLISH_HINT_FIXES,
  "g3-english": G3_ENGLISH_HINT_FIXES,
  "g4-english": G4_ENGLISH_HINT_FIXES,
  "g5-english": G5_ENGLISH_HINT_FIXES,
  "g6-english": G6_ENGLISH_HINT_FIXES,
  "g7-english": G7_ENGLISH_HINT_FIXES,
  "g8-english": G8_ENGLISH_HINT_FIXES,
  "g9-english": G9_ENGLISH_HINT_FIXES,
  "g10-english": G10_ENGLISH_HINT_FIXES,
};

export const ITEM_HINT_FIXES: Record<string, HintOverlay> = Object.assign({}, ...Object.values(HINT_FIX_PACKS));
