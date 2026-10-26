import type { ChapterDef, PrepQuestion } from "../types";

/** Animals - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g2-sci-animals-a-q01",
    prompt: "Animals that eat only plants are\u2026",
    options: [
      { id: "a", text: "herbivores" },
      { id: "b", text: "carnivores" },
      { id: "c", text: "machines" },
      { id: "d", text: "rocks" }
    ],
    answerId: "a",
    explanation: "Animals that eat only plants are herbivores. Carnivores is tempting because it sounds similar, but carnivores eat other animals.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-a-q02",
    prompt: "Animals that eat other animals are\u2026",
    options: [
      { id: "a", text: "herbivores" },
      { id: "b", text: "carnivores" },
      { id: "c", text: "plants" },
      { id: "d", text: "stones" }
    ],
    answerId: "b",
    explanation: "Animals that eat other animals are carnivores. Herbivores is tempting because it sounds similar, but herbivores eat only plants.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-a-q03",
    prompt: "Which animal moves by crawling on its belly?",
    options: [
      { id: "a", text: "horse" },
      { id: "b", text: "parrot" },
      { id: "c", text: "snake" },
      { id: "d", text: "kangaroo" }
    ],
    answerId: "c",
    explanation: "A snake has no legs. It moves by bending its long body and sliding along on its belly. A kangaroo also moves in a special way, but it hops on its strong back legs.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-a-q04",
    prompt: "Fish breathe with\u2026",
    options: [
      { id: "a", text: "lungs like us" },
      { id: "b", text: "skin" },
      { id: "c", text: "fins" },
      { id: "d", text: "gills" }
    ],
    answerId: "d",
    explanation: "Fish breathe with gills that take oxygen from water. 'Lungs like us' is tempting, but lungs breathe air; fish live under water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-a-q05",
    prompt: "A cow is a\u2026",
    options: [
      { id: "a", text: "herbivore" },
      { id: "b", text: "carnivore" },
      { id: "c", text: "bird" },
      { id: "d", text: "insect" }
    ],
    answerId: "a",
    explanation: "A cow eats grass and plants, so it is a herbivore. Carnivore is tempting because cows are big, but a carnivore eats meat.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-a-q06",
    prompt: "Which animal may hibernate in cold?",
    options: [
      { id: "a", text: "camel" },
      { id: "b", text: "bear" },
      { id: "c", text: "eagle" },
      { id: "d", text: "cow" }
    ],
    answerId: "b",
    explanation: "Some bears hibernate, sleeping through the cold months. A camel is tempting because it can go a long time without water, but it does not sleep through winter.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-a-q07",
    prompt: "Insects usually have ___ legs.",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "8" },
      { id: "c", text: "6" },
      { id: "d", text: "2" }
    ],
    answerId: "c",
    explanation: "Insects have 6 legs. 8 is tempting because spiders look like insects, but spiders are not insects; they have 8 legs.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-a-q08",
    prompt: "A frog\u2019s young one is a\u2026",
    options: [
      { id: "a", text: "puppy" },
      { id: "b", text: "kitten" },
      { id: "c", text: "cub" },
      { id: "d", text: "tadpole" }
    ],
    answerId: "d",
    explanation: "A frog's young one is a tadpole. A cub is tempting because it is a young animal too, but a cub is a young lion or bear.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-a-q09",
    prompt: "Animals need food, water and\u2026",
    options: [
      { id: "a", text: "air and shelter" },
      { id: "b", text: "toys" },
      { id: "c", text: "money" },
      { id: "d", text: "clothes" }
    ],
    answerId: "a",
    explanation: "Animals need food, water, air and shelter. Toys are tempting because pets play with them, but animals can live without toys.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-a-q10",
    prompt: "Which is an omnivore?",
    options: [
      { id: "a", text: "cow" },
      { id: "b", text: "human" },
      { id: "c", text: "tiger" },
      { id: "d", text: "deer" }
    ],
    answerId: "b",
    explanation: "A human is an omnivore, eating both plants and animals. A tiger is tempting, but it eats only meat, so it is a carnivore.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-a-q11",
    prompt: "Camels store fat in their\u2026",
    options: [
      { id: "a", text: "fins" },
      { id: "b", text: "wings" },
      { id: "c", text: "humps" },
      { id: "d", text: "beaks" }
    ],
    answerId: "c",
    explanation: "Camels store fat in their humps. Wings and fins belong to birds and fish; a camel has neither.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-a-q12",
    prompt: "Which animal gives wool?",
    options: [
      { id: "a", text: "fish" },
      { id: "b", text: "frog" },
      { id: "c", text: "eagle" },
      { id: "d", text: "sheep" }
    ],
    answerId: "d",
    explanation: "Sheep give us wool. An eagle is tempting because it has soft feathers, but feathers are not wool.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-a-q13",
    prompt: "Nocturnal animals are active at\u2026",
    options: [
      { id: "a", text: "night" },
      { id: "b", text: "noon" },
      { id: "c", text: "morning" },
      { id: "d", text: "all day" }
    ],
    answerId: "a",
    explanation: "Nocturnal animals are active at night, like owls. 'All day' is tempting, but those are diurnal animals, active in daylight.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-a-q14",
    prompt: "A nest is a home for\u2026",
    options: [
      { id: "a", text: "fish" },
      { id: "b", text: "birds" },
      { id: "c", text: "cows" },
      { id: "d", text: "lions" }
    ],
    answerId: "b",
    explanation: "Birds build nests to live in and lay eggs. Fish is tempting because some fish guard eggs, but a nest is a bird's home.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-a-q15",
    prompt: "Endangered animals need\u2026",
    options: [
      { id: "a", text: "more hunting" },
      { id: "b", text: "fewer forests" },
      { id: "c", text: "protection" },
      { id: "d", text: "more roads" }
    ],
    answerId: "c",
    explanation: "Endangered animals need protection so they do not die out. 'More roads' is tempting if you think roads help people reach animals, but roads cut through forests and harm them.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-a-q16",
    prompt: "Which has a backbone?",
    options: [
      { id: "a", text: "jellyfish" },
      { id: "b", text: "worm" },
      { id: "c", text: "ant" },
      { id: "d", text: "dog" }
    ],
    answerId: "d",
    explanation: "A dog has a backbone. A worm is tempting because it is long like a spine, but it is soft with no bones at all.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g2-sci-animals-b-q01",
    prompt: "Deer eat plants, so they are\u2026",
    options: [
      { id: "a", text: "herbivores" },
      { id: "b", text: "carnivores" },
      { id: "c", text: "cars" },
      { id: "d", text: "rocks" }
    ],
    answerId: "a",
    explanation: "Deer eat plants, so they are herbivores. Carnivores is tempting because it sounds similar, but carnivores eat meat.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-b-q02",
    prompt: "A tiger is a\u2026",
    options: [
      { id: "a", text: "herbivore" },
      { id: "b", text: "carnivore" },
      { id: "c", text: "omnivore" },
      { id: "d", text: "insect" }
    ],
    answerId: "b",
    explanation: "A tiger eats other animals, so it is a carnivore. Omnivore is tempting, but an omnivore eats plants too, and tigers do not.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-b-q03",
    prompt: "Ducks have ___ feet for swimming.",
    options: [
      { id: "a", text: "hooved" },
      { id: "b", text: "hairy" },
      { id: "c", text: "webbed" },
      { id: "d", text: "clawed" }
    ],
    answerId: "c",
    explanation: "Ducks have webbed feet that push water like paddles. Clawed is tempting because ducks have small claws, but the skin between their toes is what helps them swim.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-b-q04",
    prompt: "Whales are\u2026",
    options: [
      { id: "a", text: "fish with scales" },
      { id: "b", text: "insects" },
      { id: "c", text: "birds" },
      { id: "d", text: "mammals that live in water" }
    ],
    answerId: "d",
    explanation: "Whales are mammals that live in water; they breathe air and feed milk to their young. 'Fish with scales' is tempting because they swim, but whales have no scales and breathe with lungs.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-b-q05",
    prompt: "Honey is made by\u2026",
    options: [
      { id: "a", text: "bees" },
      { id: "b", text: "cows" },
      { id: "c", text: "sheep" },
      { id: "d", text: "hens" }
    ],
    answerId: "a",
    explanation: "Bees make honey from the nectar of flowers. Cows are tempting because they give us milk, but they do not make honey.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-b-q06",
    prompt: "Migration means animals\u2026",
    options: [
      { id: "a", text: "never move" },
      { id: "b", text: "travel with seasons" },
      { id: "c", text: "sleep all winter" },
      { id: "d", text: "change colour" }
    ],
    answerId: "b",
    explanation: "Migration means animals travel to new places as the seasons change. 'Sleep all winter' is tempting, but that is hibernation, not travelling.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-b-q07",
    prompt: "Spiders have ___ legs.",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "4" },
      { id: "c", text: "8" },
      { id: "d", text: "2" }
    ],
    answerId: "c",
    explanation: "Spiders have 8 legs. 6 is tempting because insects have 6, but spiders are not insects.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-b-q08",
    prompt: "A caterpillar can become a\u2026",
    options: [
      { id: "a", text: "frog" },
      { id: "b", text: "fish" },
      { id: "c", text: "bird nest" },
      { id: "d", text: "butterfly" }
    ],
    answerId: "d",
    explanation: "A caterpillar grows into a butterfly. A frog is tempting because a tadpole also changes shape, but a tadpole, not a caterpillar, becomes a frog.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-b-q09",
    prompt: "Pets need regular\u2026",
    options: [
      { id: "a", text: "food and care" },
      { id: "b", text: "neglect" },
      { id: "c", text: "toys" },
      { id: "d", text: "cages" }
    ],
    answerId: "a",
    explanation: "Pets need regular food and care. Toys are tempting because pets enjoy playing, but food and care are what keep them alive.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-b-q10",
    prompt: "Which animal lives in a burrow?",
    options: [
      { id: "a", text: "eagle" },
      { id: "b", text: "rabbit" },
      { id: "c", text: "whale" },
      { id: "d", text: "shark" }
    ],
    answerId: "b",
    explanation: "A rabbit digs a burrow under the ground to live in. An eagle is tempting because it also makes a home, but it builds a nest high up.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-b-q11",
    prompt: "Elephants use their trunks to\u2026",
    options: [
      { id: "a", text: "fly" },
      { id: "b", text: "lay eggs" },
      { id: "c", text: "pick food and drink" },
      { id: "d", text: "make honey" }
    ],
    answerId: "c",
    explanation: "Elephants use their trunks to pick up food and drink water. 'Lay eggs' is tempting if you mix up animals, but elephants give birth to babies.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-b-q12",
    prompt: "Silk comes from\u2026",
    options: [
      { id: "a", text: "cow" },
      { id: "b", text: "goat" },
      { id: "c", text: "hen" },
      { id: "d", text: "silkworm" }
    ],
    answerId: "d",
    explanation: "Silk comes from the cocoon of the silkworm. A goat is tempting because some goats give soft hair for cloth, but that is wool, not silk.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-b-q13",
    prompt: "Animals that are active by day are\u2026",
    options: [
      { id: "a", text: "diurnal" },
      { id: "b", text: "nocturnal" },
      { id: "c", text: "migratory" },
      { id: "d", text: "hibernating" }
    ],
    answerId: "a",
    explanation: "Animals active by day are diurnal. Nocturnal is tempting because it is the other well-known word, but it means active at night.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-b-q14",
    prompt: "A hive is a home for\u2026",
    options: [
      { id: "a", text: "lions" },
      { id: "b", text: "bees" },
      { id: "c", text: "whales" },
      { id: "d", text: "cows" }
    ],
    answerId: "b",
    explanation: "A hive is a home for bees. Lions are tempting because their group has a special name, a pride, but their home is a den, not a hive.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-b-q15",
    prompt: "We should not ___ wild animals.",
    options: [
      { id: "a", text: "respect" },
      { id: "b", text: "learn about carefully" },
      { id: "c", text: "hurt or tease" },
      { id: "d", text: "protect" }
    ],
    answerId: "c",
    explanation: "We should not hurt or tease wild animals. 'Protect' is tempting because the sentence says 'should not', but protecting wild animals is a good thing to do.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-b-q16",
    prompt: "Which animal lays eggs?",
    options: [
      { id: "a", text: "dog" },
      { id: "b", text: "cat" },
      { id: "c", text: "cow" },
      { id: "d", text: "hen" }
    ],
    answerId: "d",
    explanation: "A hen lays eggs. A cow is tempting because it is a farm animal that gives us food, but a cow gives birth to calves.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83e\udd81",
    title: "Animals",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "none",
    speak: "Animals eat different foods.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "none",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Herbivore", reveal: "Eats plants", emoji: "\ud83d\udc04" },
      { label: "Carnivore", reveal: "Eats animals", emoji: "\ud83d\udc2f" },
      { label: "Home", reveal: "Nest, hive, burrow", emoji: "\ud83c\udfe0" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Animals that eat only plants are\u2026",
    options: [
        { id: "a", text: "herbivores" },
        { id: "b", text: "carnivores" },
        { id: "c", text: "machines" },
        { id: "d", text: "rocks" }
    ],
    answerId: "a",
    why: "Herbivores eat plants.",
    visual: "none",
    speak: "Animals that eat only plants are\u2026",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Food habits", "Homes matter", "Sets ready \u2014 16 each"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g2ScienceAnimals: ChapterDef = {
  id: "animals",
  title: "Animals",
  emoji: "\ud83e\udd81",
  blurb: "Food habits & homes",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "living-things",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "living-things",
      questions: SET_B,
    },
  ],
  paperTopics: ["living-things", "human-body"],
};

export const g2ScienceAnimalsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
