/**
 * Grade 2 Science — item-specific hint fixes (fix layer).
 * Source: app repo origin/main c5a133b (lib/prep/content + lib/prep/hints). Written 2026-10-19.
 * Items changed: 44 | hints: 88
 * By category (primary): answer-leak fixed 0 · chapter-shared hint split 6 · other strict-check fixes 38
 * Each entry is a method nudge (≤25 words) naming something from the stem, options or figure; no option letters,
 * never the correct option text. Items whose overlay had two hints keep two (gentle, stronger).
 * Merge: these WIN over G2_SCIENCE_HINTS and over authored question.hints (see ../index.ts applyHints).
 */
import type { HintOverlay } from "../types";

export const G2_SCIENCE_HINT_FIXES: Record<string, HintOverlay> = {
  // g2-science-plants
  "g2-sci-plants-a-q03": ["Roots hold the plant and drink water.", "Dig up a plant gently. Where are its roots?"],
  "g2-sci-plants-a-q10": ["Dry seeds in a jar get no water.", "A seed without water rests and waits. What is that resting called?"],
  "g2-sci-plants-a-q14": ["Lotus grows in ponds.", "Plants that live in water have a special name."],
  "g2-sci-plants-a-q15": ["Plants are living things.", "Which choice would hurt a plant?"],
  "g2-sci-plants-b-q01": ["A seedling has just come out of a seed.", "Is a seedling old or new?"],
  "g2-sci-plants-b-q04": ["Cut a mango open.", "Where do you find the big seed when you eat a mango?"],
  "g2-sci-plants-b-q08": ["Plants need water, light and air.", "Which choice is a toy, not a plant need?"],
  "g2-sci-plants-b-q10": ["Germination happens when a seed gets water.", "What does a seed do when it sprouts?"],
  "g2-sci-plants-b-q12": ["A cactus likes dry land.", "Which plant floats in a pond?"],
  "g2-sci-plants-b-q14": ["Fallen leaves rot slowly on the ground.", "Rotted leaves turn into food for the soil."],
  "g2-sci-plants-b-q16": ["Green plants make food using sunlight.", "With no food for a long time, how would a plant look?"],
  // g2-science-animals
  "g2-sci-animals-a-q01": ["Cows, goats and deer eat grass and leaves.", "Plant-eaters have a special name."],
  "g2-sci-animals-a-q02": ["Lions and tigers hunt other animals.", "Animals that eat other animals have a special name."],
  "g2-sci-animals-a-q07": ["Think of an ant or a bee. Both are insects.", "Count the legs: three on each side of an insect."],
  "g2-sci-animals-a-q10": ["An omnivore eats both plants and animals.", "Which one, like an omnivore, eats vegetables and also eggs or fish at a family meal?"],
  "g2-sci-animals-a-q11": ["Camels live in the dry desert.", "Look at the big bump on a camel's back."],
  "g2-sci-animals-a-q15": ["Endangered animals are very few now.", "What do endangered animals need from people to stay safe?"],
  "g2-sci-animals-b-q01": ["Deer eat grass and leaves.", "What do we call animals that eat only plants?"],
  "g2-sci-animals-b-q04": ["Whales breathe air and feed milk to babies.", "Fish have gills. Which group feeds babies milk?"],
  "g2-sci-animals-b-q06": ["In migration, some birds fly far when winter comes.", "Migration means moving to a new place. When do they go?"],
  "g2-sci-animals-b-q07": ["Spiders are not insects.", "Spiders have more legs than insects. Count four on each side."],
  "g2-sci-animals-b-q09": ["Pets depend on us.", "What do pets need from us every day?"],
  "g2-sci-animals-b-q11": ["An elephant's trunk is a long nose.", "How does an elephant reach leaves and water?"],
  "g2-sci-animals-b-q13": ["Nocturnal animals are active at night.", "Animals awake in sunlight have the opposite name."],
  "g2-sci-animals-b-q15": ["Wild animals deserve kindness.", "Which choice would be unkind to a wild animal?"],
  // g2-science-air-water
  "g2-sci-airwater-a-q03": ["Water has three forms.", "When water is heated, it rises into the air. What form is that?"],
  "g2-sci-airwater-a-q07": ["Boiling water bubbles hard.", "Look above a boiling pot. What rises from the water?"],
  "g2-sci-airwater-a-q08": ["Air is all around us.", "Can you see air, or only feel it as wind?"],
  "g2-sci-airwater-a-q09": ["Saving water means using it well.", "Turning off taps stops water from going down the drain."],
  "g2-sci-airwater-a-q10": ["A breeze is moving air.", "Is a breeze strong or soft?"],
  "g2-sci-airwater-a-q11": ["Fish breathe with gills.", "Gills take a gas from the water. Which gas do we breathe too?"],
  "g2-sci-airwater-a-q13": ["Think of how you use water every day.", "We drink water and wash with it."],
  "g2-sci-airwater-a-q14": ["Smoke and dust make air hard to breathe.", "What happens to air when smoke and dust mix in?"],
  "g2-sci-airwater-a-q15": ["Clouds float in the sky and bring rain.", "Rain falls from clouds. What must clouds be made of?"],
  "g2-sci-airwater-a-q16": ["Flies and dust can fall on open food.", "Covering food keeps germs out."],
  "g2-sci-airwater-b-q01": ["Wind is moving air.", "What can wind do on a washing line or in the sky?"],
  "g2-sci-airwater-b-q03": ["Drinking water must be cleaned first.", "Where does water at home come from before it is cleaned?"],
  "g2-sci-airwater-b-q04": ["Ice melts in the sun.", "When ice melts, what is left in the glass?"],
  "g2-sci-airwater-b-q06": ["Plants need air too.", "Plants take something from air to make food."],
  "g2-sci-airwater-b-q07": ["Closing the tap while brushing stops running water.", "Is that a good or bad habit for water?"],
  "g2-sci-airwater-b-q08": ["Fog makes the morning look misty.", "Where do you see fog: up high or close by?"],
  "g2-sci-airwater-b-q12": ["Rubbish should go in dustbins.", "Where would rubbish make water dirty?"],
  "g2-sci-airwater-b-q15": ["We breathe air all day.", "Clean air keeps our lungs well."],
  "g2-sci-airwater-b-q16": ["Boiling water kills germs.", "Water with no germs is better to drink."],
};
