/**
 * Grade 9 Science — item-specific hint fixes (fix layer).
 * Source: app repo origin/main c5a133b (lib/prep/content + lib/prep/hints). Written 2026-10-19.
 * Items changed: 53 | hints: 53
 * By category (primary): answer-leak fixed 7 · chapter-shared hint split 0 · other strict-check fixes 46
 * Each entry is a method nudge (≤25 words) naming something from the stem, options or figure; no option letters,
 * never the correct option text. Items whose overlay had two hints keep two (gentle, stronger).
 * Merge: these WIN over G9_SCIENCE_HINTS and over authored question.hints (see ../index.ts applyHints).
 */
import type { HintOverlay } from "../types";

export const G9_SCIENCE_HINT_FIXES: Record<string, HintOverlay> = {
  // g9-science-matter-surroundings
  "g9-sci-matter-a-q02": ["Compare spacing and attraction of particles in the three states. Where are forces weakest and gaps largest?"],
  "g9-sci-matter-a-q04": ["Dry ice leaves no puddle as it disappears. Which change goes from solid straight to gas, skipping the liquid state?"],
  "g9-sci-matter-a-q05": ["Think of a brick, milk in a jug and air in a balloon. Which keeps both its own shape and its own volume?"],
  "g9-sci-matter-a-q09": ["Clothes dry slowly on a damp, sticky monsoon day. Which listed change makes the air less able to take in more vapour?"],
  "g9-sci-matter-a-q10": ["Pour one cup of water into a plate, then a bottle. Does the amount change? Does the shape change?"],
  "g9-sci-matter-a-q12": ["Kelvin reading = Celsius reading + 273. Apply that rule to zero degrees Celsius."],
  "g9-sci-matter-a-q16": ["Humid air already holds much water vapour. Can evaporation into it be as quick as into dry air?"],
  "g9-sci-matter-a-q17": ["Ice melts at the same temperature at which water freezes, the lower fixed point of the Celsius scale."],
  "g9-sci-matter-a-q18": ["LPG is stored as a liquid in a strong steel cylinder. What does squeezing or cooling do to gas particles?"],
  "g9-sci-matter-a-q21": ["Particles spread fastest where they have the most space and weakest attraction. Which state is that?"],
  "g9-sci-matter-b-q02": ["Naphthalene balls shrink in the cupboard without leaving any liquid behind. Which change goes straight from solid to gas?"],
  "g9-sci-matter-b-q06": ["Water spread in a plate dries faster than water in a cup. More exposed surface means more particles escape."],
  "g9-sci-matter-b-q08": ["Gases fill containers, solids are hardly compressible and their particles vibrate. Check each statement against that."],
  "g9-sci-matter-b-q09": ["A sponge is a solid you can squeeze. Look closely: what fills the spaces inside a sponge?"],
  "g9-sci-matter-b-q10": ["Perfume particles move on their own through the air and mix with it. Which process is that?"],
  "g9-sci-matter-b-q13": ["Evaporation takes heat from the surface it leaves. Where on your body does water evaporate on a hot day?"],
  "g9-sci-matter-b-q14": ["Particles that move freely and far apart are held by the weakest forces. Which state of matter fits?"],
  "g9-sci-matter-b-q17": ["An object floats if it is less dense than the liquid. Compare a block of ice with the same volume of water."],
  "g9-sci-matter-b-q18": ["Each change of state has a named temperature. Which named point is where a liquid starts to boil?"],
  "g9-sci-matter-b-q19": ["An incense stick's smell spreads through a still room with no fan. Which process mixes particles on their own?"],
  "g9-sci-matter-b-q22": ["Camphor in an open dish vanishes but never melts into a puddle. Which change of state skips the liquid stage?"],
  // g9-science-cell-tissues
  "g9-sci-cell-a-q03": ["The control centre holds chromosomes and DNA. Mitochondria release energy and ribosomes make proteins."],
  "g9-sci-cell-a-q04": ["The powerhouse releases energy from food during respiration. Which organelle with folded inner membranes does that?"],
  "g9-sci-cell-a-q06": ["Chloroplasts are green plastids containing chlorophyll. Which life process needs a green pigment and light?"],
  "g9-sci-cell-a-q10": ["Coconut husk and seed coats are hard because their cells have thick, lignified walls and no living contents. Which tissue?"],
  "g9-sci-cell-a-q11": ["Meristems sit at root and shoot tips, where plants keep getting longer. What must their cells keep doing?"],
  "g9-sci-cell-a-q15": ["Xylem and phloem are the two plant transport tissues. Phloem carries food; what does xylem carry upward?"],
  "g9-sci-cell-a-q16": ["Xylem carries water up from roots. Phloem is the other transport tissue: what does it carry from leaves?"],
  "g9-sci-cell-a-q22": ["Unicellular means one cell. Mango, rose and humans have trillions of cells. Which choice is a single cell?"],
  "g9-sci-cell-a-q24": ["Chromosomes carry DNA. In eukaryotic cells, which membrane-bound organelle keeps the DNA?"],
  "g9-sci-cell-b-q02": ["Cytoplasm fills the cell between the plasma membrane and the nucleus. Is it a wall, a gas, or a gel?"],
  "g9-sci-cell-b-q03": ["Chloroplasts are needed for photosynthesis. Leaf, algal and guard cells photosynthesise. Which cells do not?"],
  "g9-sci-cell-b-q11": ["Smooth muscles work without our control, unlike biceps. Think of the stomach and intestines squeezing food along."],
  "g9-sci-cell-b-q18": ["Cartilage at the nose tip and ear is firm but flexible and joins or supports other parts. Which tissue group does that?"],
  "g9-sci-cell-b-q23": ["The prefix 'multi-' means many. Apply it to cells."],
  // g9-science-motion
  "g9-sci-motion-a-q01": ["Distance has size but no direction and follows the actual route travelled. Which choices fit that description?"],
  "g9-sci-motion-a-q08": ["Average speed uses total path. Average velocity is a vector, so which quantity with direction goes on top?"],
  "g9-sci-motion-a-q14": ["Start from acceleration = change in velocity / time, a = (v - u)/t, and rearrange to make v the subject."],
  "g9-sci-motion-a-q15": ["The three equations of motion are derived for one special kind of motion. What must stay the same for them to hold?"],
  "g9-sci-motion-a-q17": ["Negative acceleration means acceleration points against the velocity. Does that make the body faster or slower?"],
  "g9-sci-motion-b-q01": ["A vector quantity can point backwards along a line. Distance, speed and time intervals cannot be negative."],
  "g9-sci-motion-b-q02": ["Average speed = total distance ÷ total time. Divide 60 km by 2 h."],
  "g9-sci-motion-b-q05": ["List the symbols in v² = u² + 2as. Which of the five motion quantities does it leave out?"],
  "g9-sci-motion-b-q06": ["A horizontal line on a distance–time graph means distance is not changing with time. What is the body doing?"],
  "g9-sci-motion-b-q09": ["Acceleration = change in velocity ÷ time. Find 20 m/s minus 10 m/s, then divide by 5 s."],
  "g9-sci-motion-b-q10": ["Distance is the total path length travelled, a scalar. Can a path length ever be below zero?"],
  "g9-sci-motion-b-q11": ["Use v = u + at with u = 0 and a = g for free fall. What expression is left for v?"],
  "g9-sci-motion-b-q14": ["Use s = ut + ½at². With u = 0, s = ½ × 2 × 3²."],
  "g9-sci-motion-b-q16": ["Retardation is used when a body slows down. Which way must acceleration point relative to velocity then?"],
  "g9-sci-motion-b-q17": ["An odometer counts kilometres along the road the car has actually driven, not the straight line from start."],
  "g9-sci-motion-b-q19": ["The slope of a distance–time graph gives speed. If the curve keeps getting steeper, what happens to speed?"],
  "g9-sci-motion-b-q20": ["Displacement is the straight-line gap from start to finish; distance follows the actual path. Can the shortcut be longer?"],
  "g9-sci-motion-b-q22": ["Check each equation of motion for the symbol t. Which one has no t in it?"],
};
