/**
 * Grade 7 Science — item-specific hint fixes (fix layer).
 * Source: app repo origin/main c5a133b (lib/prep/content + lib/prep/hints). Written 2026-10-19.
 * Items changed: 40 | hints: 40
 * By category (primary): answer-leak fixed 2 · chapter-shared hint split 2 · other strict-check fixes 32
 * Each entry is a method nudge (≤25 words) naming something from the stem, options or figure; no option letters,
 * never the correct option text. Items whose overlay had two hints keep two (gentle, stronger).
 * Leak review (2026-10-19): hints rewritten where the hardened check-science-hints.mjs found answer text.
 * Merge: these WIN over G7_SCIENCE_HINTS and over authored question.hints (see ../index.ts applyHints).
 */
import type { HintOverlay } from "../types";

export const G7_SCIENCE_HINT_FIXES: Record<string, HintOverlay> = {
  // g7-science-nutrition
  "g7-sci-nutrition-a-q02": ["'Photo' means light and 'synthesis' means making. Which process uses light to make food in green plants?"],
  "g7-sci-nutrition-a-q06": ["Photosynthesis needs the green pigment chlorophyll. Which leaf-cell organelle holds chlorophyll?"],
  "g7-sci-nutrition-a-q13": ["Humans eat dal and rice as well as eggs, fish or milk. What is an animal that eats both plants and animals called?"],
  "g7-sci-nutrition-a-q18": ["Rice, roti and potatoes are carbohydrates. Why do athletes eat them before a race?"],
  "g7-sci-nutrition-b-q02": ["Photosynthesis needs chlorophyll. Which green organelle in plant cells contains it?"],
  "g7-sci-nutrition-b-q03": ["'Hetero' means other and 'troph' means food. Autotrophs make their own food; heterotrophs do what?"],
  "g7-sci-nutrition-b-q07": ["A parasite like a tapeworm or Cuscuta takes food from another living thing. Who loses out?"],
  "g7-sci-nutrition-b-q11": ["Proteins break into amino acids and starch into glucose. Which two products do fats give after digestion?"],
  "g7-sci-nutrition-b-q22": ["Plants have two transport tubes: one carries water up from roots, the other carries food from leaves. Which carries food?"],
  "g7-sci-nutrition-b-q17": ["In an equation, what you start with goes on the left and what is made goes on the right. Where does sugar appear?"],
  // g7-science-heat
  "g7-sci-heat-a-q04": ["The Celsius scale uses two fixed points of water: freezing and boiling. Which is the lower fixed point?"],
  "g7-sci-heat-a-q15": ["Flasks are silvered and fire-fighting suits are shiny. Do shiny surfaces send radiation back well or badly?"],
  "g7-sci-heat-a-q19": ["Heat a solid, a liquid and a gas by the same amount. In which state are particles farthest apart and freest to spread?"],
  "g7-sci-heat-b-q01": ["Cooking pots use metal bottoms and wooden or plastic handles. Which material lets heat pass through fastest?"],
  "g7-sci-heat-b-q07": ["When heated, the metal lid and glass jar both expand. Which one expands more, making the lid loose?"],
  "g7-sci-heat-b-q15": ["Kelvin and Celsius scales have the same size of degree; only their zero points differ. Compare a 1 °C change."],
  "g7-sci-heat-b-q16": ["Kelvin reading = Celsius reading + 273. Apply that rule to zero degrees Celsius."],
  "g7-sci-heat-b-q17": ["Black clothes feel hot in the sun and white ones feel cooler. What do dark surfaces do with sunlight?"],
  "g7-sci-heat-b-q19": ["Cooking pots need heat to pass quickly from flame to food. Which property of metals helps with that?"],
  "g7-sci-heat-b-q24": ["Metals let heat pass quickly. Which choice is not a metal and traps heat, as in woollen clothes?"],
  "g7-sci-heat-a-q17": ["While ice melts, heat goes in but the thermometer stays at 0 °C. What is that heat used for, and what is it called?"],
  "g7-sci-heat-a-q20": ["On hot summer days steel rails get longer. What would happen to tracks laid with no gaps at all?"],
  "g7-sci-heat-b-q18": ["Heat a cup and a bucket of water on the same flame for one minute. Which one warms up less?"],
  // g7-science-acids-bases-salts
  "g7-sci-acids-a-q06": ["The pH scale runs from 0 to 14: low is acidic, high is basic. Which value sits exactly in the neutral middle?"],
  "g7-sci-acids-a-q13": ["Sodium hydroxide feels soapy and turns red litmus blue. Which group of substances behaves that way?"],
  "g7-sci-acids-b-q01": ["Bacteria in the mouth make acids that harm teeth. What kind of substance would neutralise those acids?"],
  "g7-sci-acids-b-q02": ["Acidic factory waste harms rivers. What should be added to cancel the acid before the water is released?"],
  "g7-sci-acids-b-q03": ["Ammonia solution turns red litmus blue and is used in cleaners. What does that tell you about it?"],
  "g7-sci-acids-b-q05": ["Acid + base → salt + water. HCl gives chloride and NaOH gives sodium. Which salt joins them?"],
  "g7-sci-acids-b-q07": ["Methyl orange is red in acid. Which other listed colour does it change to in a basic solution?"],
  "g7-sci-acids-b-q08": ["Curd and lemons taste sour. Which group of substances gives food a sour taste?"],
  "g7-sci-acids-b-q09": ["Soap solution feels slippery and turns red litmus blue. What does that tell you about it?"],
  "g7-sci-acids-b-q12": ["On the pH scale, values below 7 are acidic and above 7 are basic. Where is 2, and how far from 7?"],
  "g7-sci-acids-b-q13": ["On the pH scale, values below 7 are acidic and above 7 are basic. Where is 13, and how far from 7?"],
  "g7-sci-acids-b-q15": ["Plaster of Paris sets hard for fractures and statues. It is made from gypsum. Which compound family is gypsum in?"],
  "g7-sci-acids-b-q16": ["Bleaching powder is used to whiten cloth and disinfect water. Which greenish gas element does it release?"],
  "g7-sci-acids-b-q17": ["Acids taste sour, react with metals, have pH below 7 and turn blue litmus red. Which statement breaks that list?"],
  "g7-sci-acids-b-q18": ["Bases feel soapy, have pH above 7, neutralise acids and turn red litmus blue. Which statement breaks that list?"],
  "g7-sci-acids-b-q20": ["Mixing water and strong acid releases a lot of heat and can splash. Which order of mixing keeps you safe?"],
  "g7-sci-acids-b-q21": ["Too much acid in soil harms crops. What kind of substance would farmers add to neutralise it?"],
};
