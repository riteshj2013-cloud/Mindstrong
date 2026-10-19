/**
 * Grade 1 Science — item-specific hint fixes (fix layer).
 * Source: app repo origin/main c5a133b (lib/prep/content + lib/prep/hints). Written 2026-10-19.
 * Items changed: 35 | hints: 67
 * By category (primary): answer-leak fixed 3 · chapter-shared hint split 9 · other strict-check fixes 23
 * Each entry is a method nudge (≤25 words) naming something from the stem, options or figure; no option letters,
 * never the correct option text. Items whose overlay had two hints keep two (gentle, stronger).
 * Also holds hints for items rewritten in the Science near-duplicate stem pass (2026-10-19).
 * Merge: these WIN over G1_SCIENCE_HINTS and over authored question.hints (see ../index.ts applyHints).
 */
import type { HintOverlay } from "../types";

export const G1_SCIENCE_HINT_FIXES: Record<string, HintOverlay> = {
  // g1-science-plants
  "g1-sci-plants-a-q06": ["Bees and butterflies come to a flower.", "What does a flower look like that makes bees visit it?"],
  "g1-sci-plants-a-q08": ["Mangoes hang high up on branches.", "Which choice is a tall plant with a trunk where a mango could grow?"],
  "g1-sci-plants-a-q09": ["Pull gently on a plant in a pot.", "What keeps the plant from coming out of the soil?"],
  "g1-sci-plants-a-q12": ["The stem is the plant's middle part.", "What would the plant do if its stem broke?"],
  "g1-sci-plants-b-q02": ["Sunlight is the leaf's helper.", "What do leaves make for the plant using sunlight?"],
  "g1-sci-plants-b-q05": ["Plants are living, like pets.", "What should we do for plants so they stay healthy?"],
  "g1-sci-plants-b-q06": ["Hold a leaf in your hand.", "Think about a leaf's shape and its colour."],
  "g1-sci-plants-b-q09": ["Roots go down into the soil.", "What does soil give roots and the plant?"],
  "g1-sci-plants-b-q11": ["Dry leaves fall at one time of year.", "Think of the season when trees look bare."],
  "g1-sci-plants-b-q12": ["The green colour in leaves catches sunlight.", "Leaves use sunlight to feed the plant. What do they make?"],
  "g1-sci-plants-b-q15": ["Touch a rose stem carefully.", "Thorns are sharp. What can a sharp thorn do to a finger?"],
  "g1-sci-plants-b-q16": ["Plants help us breathe.", "Trees make the air around us better. What do plants give us?"],
  // g1-science-animals
  "g1-sci-animals-a-q03": ["Think of what a cow gives at the dairy."],
  "g1-sci-animals-a-q06": ["Lions live in the jungle, not in our homes.", "Is a lion a pet or an animal of the forest?"],
  "g1-sci-animals-a-q15": ["Frogs swim in ponds and hop on grass.", "A frog can be found in two kinds of places."],
  "g1-sci-animals-b-q02": ["Monkeys love to climb and swing.", "Where can a monkey climb and swing on branches?"],
  "g1-sci-animals-b-q03": ["A horse has four long, strong legs.", "What can a horse do with its strong legs?"],
  "g1-sci-animals-b-q08": ["Pets need help from us every day.", "What do pets need from us so they stay happy and healthy?"],
  "g1-sci-animals-b-q09": ["Think of a drink we get from a goat."],
  "g1-sci-animals-b-q11": ["Snakes slither on their bodies.", "Count: how many legs do you see on a snake?"],
  "g1-sci-animals-b-q13": ["Farmers use a big, strong animal to pull a cart.", "Picture a village cart in a field. Which large animal with horns walks in front of it?"],
  "g1-sci-animals-b-q14": ["Cats lap up a drink from a bowl.", "What white drink do cats often like?"],
  "g1-sci-animals-b-q15": ["Wild animals are not kept as pets.", "Where do tigers and deer live on their own?"],
  // g1-science-my-body
  "g1-sci-body-a-q05": ["Hold up your hands and count them.", "Count one for each hand you hold up."],
  "g1-sci-body-a-q06": ["Look down at what touches the ground when you walk."],
  "g1-sci-body-a-q08": ["Breathe in slowly. Where does the air go in?", "Put your hand near your face and breathe in. Where do you feel the air going in?"],
  "g1-sci-body-a-q11": ["Sit down slowly on a chair. Watch your legs.", "Touch the middle of one leg as you sit. Which part folds?"],
  "g1-sci-body-a-q12": ["Skin covers your whole body.", "Touch something soft. Which sense tells you it is soft?"],
  "g1-sci-body-a-q13": ["Exercise is running, jumping and playing.", "Does playing every day help your body or hurt it?"],
  "g1-sci-body-a-q14": ["Sleep helps the body rest.", "When is it dark and quiet, time for bed?"],
  "g1-sci-body-b-q05": ["Think of a chilly morning before school.", "On a cold morning, what do you put on over your shirt?"],
  "g1-sci-body-b-q06": ["Germs can fly out of your mouth.", "When do germs fly out of your mouth fast? Think of a tickly nose."],
  "g1-sci-body-b-q07": ["Bones are hard and strong inside your body.", "Without bones, could your body stay up straight?"],
  "g1-sci-body-b-q09": ["Nails are hard and grow at the tips.", "Where do nails grow? Look at the tips of your hands and feet."],
  "g1-sci-body-b-q13": ["When you jump, you push off the ground.", "Which body parts bend and push up when you jump?"],
};
