/**
 * Grade 6 Science — item-specific hint fixes (fix layer).
 * Source: app repo origin/main c5a133b (lib/prep/content + lib/prep/hints). Written 2026-10-19.
 * Items changed: 23 | hints: 23
 * By category (primary): answer-leak fixed 4 · chapter-shared hint split 0 · other strict-check fixes 19
 * Each entry is a method nudge (≤25 words) naming something from the stem, options or figure; no option letters,
 * never the correct option text. Items whose overlay had two hints keep two (gentle, stronger).
 * Merge: these WIN over G6_SCIENCE_HINTS and over authored question.hints (see ../index.ts applyHints).
 */
import type { HintOverlay } from "../types";

export const G6_SCIENCE_HINT_FIXES: Record<string, HintOverlay> = {
  // g6-science-food-nutrition
  "g6-sci-food-a-q06": ["Night blindness means poor sight in dim light. Recall which vitamin carrots and green leafy vegetables are known for."],
  "g6-sci-food-a-q12": ["A balanced meal mixes energy foods, body-building foods and protective foods. Which meal has all three groups?"],
  "g6-sci-food-a-q15": ["Rickets makes children's bones soft and bent. Which nutrient does the body need from sunlight to build strong bones?"],
  "g6-sci-food-a-q18": ["Sour citrus fruits and amla prevent scurvy and bleeding gums. Which vitamin is linked to that?"],
  "g6-sci-food-a-q20": ["Roughage is plant fibre that the body cannot digest. Which body process does it help with in the intestine?"],
  "g6-sci-food-b-q04": ["Nutrients are substances in food that the body uses. Which choice is not something your body can digest?"],
  "g6-sci-food-b-q05": ["Ghee and butter are greasy and give lots of energy. Which nutrient group do oils and ghee belong to?"],
  "g6-sci-food-b-q14": ["Eggs, dal and paneer are body-building foods that help muscles grow. Which nutrient group do they belong to?"],
  "g6-sci-food-b-q19": ["ORS is water mixed with sugar and salt. During diarrhoea, what does the body lose that ORS puts back?"],
  "g6-sci-food-b-q24": ["A balanced thali covers energy, body-building and protective foods. Which choice includes all food groups, not just one?"],
  // g6-science-fibre-fabric
  "g6-sci-fibre-a-q13": ["Sericulture is silk farming. Which creature spins the cocoons that silk threads come from?"],
  "g6-sci-fibre-b-q01": ["Raw fibre is spun into thread, then the thread is woven into cloth. Put the three stages in order."],
  "g6-sci-fibre-b-q22": ["Natural fibres come from plants or animals. Which fibre is made in factories from chemicals?"],
  // g6-science-sorting-materials
  "g6-sci-sep-a-q04": ["A sieve has holes; small grains fall through and pebbles stay back. Which property of particles does this sort by?"],
  "g6-sci-sep-a-q05": ["In sedimentation, leave muddy water in a glass undisturbed. What happens to the heavy mud particles over time?"],
  "g6-sci-sep-a-q15": ["When pouring tea into cups, what kitchen tool with fine holes holds back the leaves?"],
  "g6-sci-sep-a-q22": ["Condensation is the opposite of evaporation. Think of drops forming outside a glass of cold water."],
  "g6-sci-sep-b-q10": ["Iron filings are attracted by one common tool; sawdust is not. Which first step uses that property?"],
  "g6-sci-sep-b-q13": ["Oil floats on water. Compare how heavy the same volume of each is: what is that property called?"],
  "g6-sci-sep-b-q16": ["In a heterogeneous mixture, you can see separate parts. Which mixture leaves visible bits at the bottom?"],
  "g6-sci-sep-b-q18": ["Pebbles in dal are big, few and easy to see. Which simple method uses only your fingers?"],
  "g6-sci-sep-b-q23": ["Sieving works only when solid particles have very different sizes. Which mixture has big and small solid bits?"],
  "g6-sci-sep-b-q24": ["Seawater is left to dry in shallow pans. Which dissolved white solid that we use in cooking stays behind?"],
};
