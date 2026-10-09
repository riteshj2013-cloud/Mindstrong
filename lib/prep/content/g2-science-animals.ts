import type { ChapterDef, PrepQuestion } from "../types";

/** Animals - authored SOF content (original). */

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
    explanation: "Herbivores eat plants.",
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
    explanation: "Carnivores eat other animals.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-a-q03",
    prompt: "Birds have ___ to fly.",
    options: [
      { id: "a", text: "roots" },
      { id: "b", text: "wheels" },
      { id: "c", text: "wings" },
      { id: "d", text: "fins only" }
    ],
    answerId: "c",
    explanation: "Birds use wings to fly.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-a-q04",
    prompt: "Fish breathe with\u2026",
    options: [
      { id: "a", text: "leaves" },
      { id: "b", text: "noses only" },
      { id: "c", text: "lungs like us always" },
      { id: "d", text: "gills" }
    ],
    answerId: "d",
    explanation: "Fish breathe with gills.",
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
    explanation: "Cows eat grass \u2014 herbivores.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-a-q06",
    prompt: "Which animal may hibernate in cold?",
    options: [
      { id: "a", text: "ant always" },
      { id: "b", text: "bear" },
      { id: "c", text: "fish in fire" },
      { id: "d", text: "eagle always" }
    ],
    answerId: "b",
    explanation: "Some bears hibernate in cold weather.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-a-q07",
    prompt: "Insects usually have ___ legs.",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "4" },
      { id: "c", text: "6" },
      { id: "d", text: "8" }
    ],
    answerId: "c",
    explanation: "Insects have 6 legs.",
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
    explanation: "A young frog is a tadpole.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-a-q09",
    prompt: "Animals need food, water and\u2026",
    options: [
      { id: "a", text: "air and shelter" },
      { id: "b", text: "only screens" },
      { id: "c", text: "only plastic" },
      { id: "d", text: "only noise" }
    ],
    answerId: "a",
    explanation: "Animals need air and shelter too.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-a-q10",
    prompt: "Which is an omnivore?",
    options: [
      { id: "a", text: "deer only" },
      { id: "b", text: "human" },
      { id: "c", text: "cow only" },
      { id: "d", text: "tiger only" }
    ],
    answerId: "b",
    explanation: "Humans can eat plants and animals.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-a-q11",
    prompt: "Camels store fat in their\u2026",
    options: [
      { id: "a", text: "wings" },
      { id: "b", text: "beaks" },
      { id: "c", text: "humps" },
      { id: "d", text: "fins" }
    ],
    answerId: "c",
    explanation: "Camels have humps with fat.",
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
    explanation: "Sheep give wool.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-a-q13",
    prompt: "Nocturnal animals are active at\u2026",
    options: [
      { id: "a", text: "night" },
      { id: "b", text: "only noon" },
      { id: "c", text: "only in class" },
      { id: "d", text: "never" }
    ],
    answerId: "a",
    explanation: "Nocturnal means active at night.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-a-q14",
    prompt: "A nest is a home for\u2026",
    options: [
      { id: "a", text: "cars" },
      { id: "b", text: "birds" },
      { id: "c", text: "fish only always" },
      { id: "d", text: "worms in space" }
    ],
    answerId: "b",
    explanation: "Birds live in nests.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-a-q15",
    prompt: "Endangered animals need\u2026",
    options: [
      { id: "a", text: "less forests forever" },
      { id: "b", text: "noise only" },
      { id: "c", text: "protection" },
      { id: "d", text: "more hunting" }
    ],
    answerId: "c",
    explanation: "Endangered animals need protection.",
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
    explanation: "A dog has a backbone.",
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
    explanation: "Deer are herbivores.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-b-q02",
    prompt: "A tiger is a\u2026",
    options: [
      { id: "a", text: "herbivore" },
      { id: "b", text: "carnivore" },
      { id: "c", text: "plant" },
      { id: "d", text: "insect only" }
    ],
    answerId: "b",
    explanation: "Tigers eat meat \u2014 carnivores.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-b-q03",
    prompt: "Ducks have ___ feet for swimming.",
    options: [
      { id: "a", text: "roots" },
      { id: "b", text: "claws only" },
      { id: "c", text: "webbed" },
      { id: "d", text: "wheels" }
    ],
    answerId: "c",
    explanation: "Webbed feet help ducks swim.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-b-q04",
    prompt: "Whales are\u2026",
    options: [
      { id: "a", text: "fish with scales only" },
      { id: "b", text: "insects" },
      { id: "c", text: "birds" },
      { id: "d", text: "mammals that live in water" }
    ],
    answerId: "d",
    explanation: "Whales are water mammals.",
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
    explanation: "Bees make honey.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-b-q06",
    prompt: "Migration means animals\u2026",
    options: [
      { id: "a", text: "become plants" },
      { id: "b", text: "travel with seasons" },
      { id: "c", text: "never move" },
      { id: "d", text: "turn to stone" }
    ],
    answerId: "b",
    explanation: "Migration is seasonal travel.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-b-q07",
    prompt: "Spiders have ___ legs.",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "6" },
      { id: "c", text: "8" },
      { id: "d", text: "4" }
    ],
    answerId: "c",
    explanation: "Spiders have 8 legs.",
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
    explanation: "Caterpillar becomes a butterfly.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-b-q09",
    prompt: "Pets need regular\u2026",
    options: [
      { id: "a", text: "food and care" },
      { id: "b", text: "neglect" },
      { id: "c", text: "only screens" },
      { id: "d", text: "only noise" }
    ],
    answerId: "a",
    explanation: "Pets need food and care.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-b-q10",
    prompt: "Which animal lives in a burrow?",
    options: [
      { id: "a", text: "shark" },
      { id: "b", text: "rabbit" },
      { id: "c", text: "eagle only" },
      { id: "d", text: "whale" }
    ],
    answerId: "b",
    explanation: "Rabbits may live in burrows.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-b-q11",
    prompt: "Elephants use their trunks to\u2026",
    options: [
      { id: "a", text: "lay eggs" },
      { id: "b", text: "make honey" },
      { id: "c", text: "pick food and drink" },
      { id: "d", text: "fly" }
    ],
    answerId: "c",
    explanation: "Trunks help pick food and drink.",
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
    explanation: "Silkworms give silk.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-b-q13",
    prompt: "Animals that are active by day are\u2026",
    options: [
      { id: "a", text: "diurnal" },
      { id: "b", text: "nocturnal only" },
      { id: "c", text: "made of metal" },
      { id: "d", text: "plants" }
    ],
    answerId: "a",
    explanation: "Diurnal means active by day.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-b-q14",
    prompt: "A hive is a home for\u2026",
    options: [
      { id: "a", text: "cows" },
      { id: "b", text: "bees" },
      { id: "c", text: "lions" },
      { id: "d", text: "whales" }
    ],
    answerId: "b",
    explanation: "Bees live in a hive.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-animals-b-q15",
    prompt: "We should not ___ wild animals.",
    options: [
      { id: "a", text: "learn about carefully" },
      { id: "b", text: "protect" },
      { id: "c", text: "hurt or tease" },
      { id: "d", text: "respect" }
    ],
    answerId: "c",
    explanation: "Do not hurt wild animals.",
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
    explanation: "Hens lay eggs.",
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
