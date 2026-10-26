import type { ChapterDef, PrepQuestion } from "../types";

/** Plants - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g1-sci-plants-a-q01",
    prompt: "Which part of a plant grows under the soil?",
    options: [
      { id: "a", text: "root" },
      { id: "b", text: "leaf" },
      { id: "c", text: "flower" },
      { id: "d", text: "fruit" }
    ],
    answerId: "a",
    explanation: "The root grows under the soil. The fruit is tempting because some foods like carrots come from the ground, but fruits grow above the soil on the plant.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-a-q02",
    prompt: "Leaves are mostly which colour?",
    options: [
      { id: "a", text: "blue" },
      { id: "b", text: "green" },
      { id: "c", text: "pink" },
      { id: "d", text: "black" }
    ],
    answerId: "b",
    explanation: "Most leaves are green. Pink is tempting because some flowers are pink, but that is the flower's colour, not the leaf's.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-a-q03",
    prompt: "A seed can grow into a\u2026",
    options: [
      { id: "a", text: "bigger seed" },
      { id: "b", text: "leaf" },
      { id: "c", text: "new plant" },
      { id: "d", text: "fruit" }
    ],
    answerId: "c",
    explanation: "A seed grows into a new plant, which later gets leaves, flowers and fruits. 'Fruit' is tempting because seeds come from fruits, but a seed sprouts into a whole new plant, not a fruit.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-a-q04",
    prompt: "Which part makes food for the plant?",
    options: [
      { id: "a", text: "root" },
      { id: "b", text: "flower" },
      { id: "c", text: "seed" },
      { id: "d", text: "leaf" }
    ],
    answerId: "d",
    explanation: "The leaf makes food for the plant using sunlight. The root is tempting because it takes in water, but it does not make food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-a-q05",
    prompt: "We water plants because they need\u2026",
    options: [
      { id: "a", text: "water" },
      { id: "b", text: "salt" },
      { id: "c", text: "sugar" },
      { id: "d", text: "milk" }
    ],
    answerId: "a",
    explanation: "Plants need water to live and grow. Milk is tempting because it is good for us, but plants take in water through their roots, not milk.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-a-q06",
    prompt: "A flower is often\u2026",
    options: [
      { id: "a", text: "under the soil" },
      { id: "b", text: "bright and pretty" },
      { id: "c", text: "brown and dry" },
      { id: "d", text: "hard like wood" }
    ],
    answerId: "b",
    explanation: "A flower is often bright and pretty. 'Brown and dry' is tempting because old flowers become like that, but a fresh flower is bright.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-a-q07",
    prompt: "Which do plants need to grow?",
    options: [
      { id: "a", text: "darkness" },
      { id: "b", text: "salt" },
      { id: "c", text: "sunlight" },
      { id: "d", text: "plastic covers" }
    ],
    answerId: "c",
    explanation: "Plants need sunlight to make their food and grow. Darkness is tempting because seeds can sprout under the soil, but a growing plant needs light.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-a-q08",
    prompt: "A mango grows on a\u2026",
    options: [
      { id: "a", text: "creeper" },
      { id: "b", text: "small bush" },
      { id: "c", text: "grass" },
      { id: "d", text: "tree" }
    ],
    answerId: "d",
    explanation: "A mango grows on a big tree. A creeper is tempting because some fruits like pumpkins grow on creepers, but mangoes hang from tree branches.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-a-q09",
    prompt: "Roots help the plant to\u2026",
    options: [
      { id: "a", text: "hold in the soil" },
      { id: "b", text: "make flowers" },
      { id: "c", text: "catch sunlight" },
      { id: "d", text: "make seeds" }
    ],
    answerId: "a",
    explanation: "Roots hold the plant firmly in the soil and take in water. 'Catch sunlight' is tempting because plants need sunlight, but leaves catch it; roots stay under the soil in the dark.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-a-q10",
    prompt: "Which is a plant?",
    options: [
      { id: "a", text: "dog" },
      { id: "b", text: "rose" },
      { id: "c", text: "stone" },
      { id: "d", text: "butterfly" }
    ],
    answerId: "b",
    explanation: "A rose is a plant. A butterfly is tempting because it sits on flowers, but it is an animal (an insect), not a plant.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-a-q11",
    prompt: "Fruits often have ___ inside.",
    options: [
      { id: "a", text: "roots" },
      { id: "b", text: "leaves" },
      { id: "c", text: "seeds" },
      { id: "d", text: "flowers" }
    ],
    answerId: "c",
    explanation: "Fruits often have seeds inside, like a mango or an apple. Leaves are tempting because they grow near the fruits, but leaves grow outside on the branches, not inside a fruit.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-a-q12",
    prompt: "The stem\u2026",
    options: [
      { id: "a", text: "takes in water from the soil" },
      { id: "b", text: "makes the seeds" },
      { id: "c", text: "is the colourful part" },
      { id: "d", text: "holds the plant up" }
    ],
    answerId: "d",
    explanation: "The stem holds the plant up. 'Takes in water from the soil' is tempting because the stem carries water, but it is the root that takes water in from the soil.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-a-q13",
    prompt: "A cactus lives where it is\u2026",
    options: [
      { id: "a", text: "dry" },
      { id: "b", text: "very wet" },
      { id: "c", text: "shady and damp" },
      { id: "d", text: "in snow" }
    ],
    answerId: "a",
    explanation: "A cactus lives where it is dry, like a desert. 'Very wet' is tempting because all plants need water, but a cactus stores water and grows where rain is rare.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-a-q14",
    prompt: "We get wood from\u2026",
    options: [
      { id: "a", text: "sand" },
      { id: "b", text: "trees" },
      { id: "c", text: "cotton" },
      { id: "d", text: "stones" }
    ],
    answerId: "b",
    explanation: "We get wood from trees. Cotton is tempting because it also comes from a plant, but cotton gives us cloth, not wood.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-a-q15",
    prompt: "Which is NOT a plant part?",
    options: [
      { id: "a", text: "root" },
      { id: "b", text: "leaf" },
      { id: "c", text: "wheel" },
      { id: "d", text: "stem" }
    ],
    answerId: "c",
    explanation: "A wheel is not a plant part; it is part of a car or cart. The stem is tempting if you forget it, but root, leaf and stem are all parts of a plant.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-a-q16",
    prompt: "Plants are\u2026",
    options: [
      { id: "a", text: "not living" },
      { id: "b", text: "animals" },
      { id: "c", text: "unable to grow" },
      { id: "d", text: "living" }
    ],
    answerId: "d",
    explanation: "Plants are living: they grow, need water and make new plants. 'Not living' is tempting because plants do not walk, but they still grow, so they are alive.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g1-sci-plants-b-q01",
    prompt: "Which part drinks water from the soil?",
    options: [
      { id: "a", text: "root" },
      { id: "b", text: "flower" },
      { id: "c", text: "stem" },
      { id: "d", text: "leaf" }
    ],
    answerId: "a",
    explanation: "The root drinks water from the soil. The stem is tempting because water moves up through it, but the stem carries water; the root takes it in.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-b-q02",
    prompt: "Sunlight helps leaves to\u2026",
    options: [
      { id: "a", text: "drink water" },
      { id: "b", text: "make food" },
      { id: "c", text: "fall off" },
      { id: "d", text: "change colour" }
    ],
    answerId: "b",
    explanation: "Sunlight helps leaves make food. 'Drink water' is tempting because plants need water too, but water is taken in by the roots, not with the help of sunlight.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-b-q03",
    prompt: "A baby plant is called a\u2026",
    options: [
      { id: "a", text: "bud" },
      { id: "b", text: "twig" },
      { id: "c", text: "seedling" },
      { id: "d", text: "root" }
    ],
    answerId: "c",
    explanation: "A baby plant that has just come out of a seed is a seedling. A bud is tempting because it is small and new, but a bud is a flower or leaf that has not opened yet.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-b-q04",
    prompt: "Which grows from a seed?",
    options: [
      { id: "a", text: "chick" },
      { id: "b", text: "butterfly" },
      { id: "c", text: "stone" },
      { id: "d", text: "plant" }
    ],
    answerId: "d",
    explanation: "A plant grows from a seed. A chick is tempting because it also grows from something small, but a chick hatches from an egg, not a seed.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-b-q05",
    prompt: "We should ___ plants.",
    options: [
      { id: "a", text: "care for" },
      { id: "b", text: "kick" },
      { id: "c", text: "pluck" },
      { id: "d", text: "ignore" }
    ],
    answerId: "a",
    explanation: "We should care for plants. 'Pluck' is tempting because we pick flowers, but plucking hurts the plant; caring means watering and protecting it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-b-q06",
    prompt: "A leaf is usually\u2026",
    options: [
      { id: "a", text: "round like a ball" },
      { id: "b", text: "flat and green" },
      { id: "c", text: "thick and hard" },
      { id: "d", text: "red and furry" }
    ],
    answerId: "b",
    explanation: "A leaf is usually flat and green. 'Red and furry' is tempting because a few leaves are red, but most are green and not furry.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-b-q07",
    prompt: "Bees visit flowers for\u2026",
    options: [
      { id: "a", text: "leaves" },
      { id: "b", text: "seeds" },
      { id: "c", text: "nectar" },
      { id: "d", text: "petals" }
    ],
    answerId: "c",
    explanation: "Bees visit flowers for nectar, a sweet juice they turn into honey. Petals are tempting because they are the bright part bees see, but bees drink nectar; they do not eat petals.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-b-q08",
    prompt: "A coconut tree is\u2026",
    options: [
      { id: "a", text: "short" },
      { id: "b", text: "a creeper" },
      { id: "c", text: "a small bush" },
      { id: "d", text: "tall" }
    ],
    answerId: "d",
    explanation: "A coconut tree is tall, with its leaves right at the top. 'A small bush' is tempting because both are plants, but a bush stays low; a coconut tree grows very tall.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-b-q09",
    prompt: "Soil helps plants by giving\u2026",
    options: [
      { id: "a", text: "a place to grow" },
      { id: "b", text: "sunlight" },
      { id: "c", text: "colour" },
      { id: "d", text: "shade" }
    ],
    answerId: "a",
    explanation: "Soil gives plants a place to grow, holds their roots and gives them water. Sunlight is tempting because plants need it, but sunlight comes from the sun, not from the soil.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-b-q10",
    prompt: "Which is a flower?",
    options: [
      { id: "a", text: "banyan" },
      { id: "b", text: "lotus" },
      { id: "c", text: "grass" },
      { id: "d", text: "neem" }
    ],
    answerId: "b",
    explanation: "A lotus is a flower. Neem is tempting because it is a well-known plant, but neem is a tree we know for its leaves, not a flower.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-b-q11",
    prompt: "Many trees start to drop their dry leaves in…",
    options: [
      { id: "a", text: "the rainy season" },
      { id: "b", text: "winter" },
      { id: "c", text: "autumn / dry season" },
      { id: "d", text: "spring" }
    ],
    answerId: "c",
    explanation: "In autumn, the dry season, leaves dry up and many trees start to drop them. Winter is tempting because trees can look bare then, but the leaves start falling before that, in autumn. The rainy season keeps leaves fresh and green, and spring is when new leaves grow.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-b-q12",
    prompt: "The green colour in leaves helps them\u2026",
    options: [
      { id: "a", text: "drink water" },
      { id: "b", text: "smell sweet" },
      { id: "c", text: "fall off" },
      { id: "d", text: "make food" }
    ],
    answerId: "d",
    explanation: "The green colour in leaves helps them make food from sunlight. 'Drink water' is tempting because plants need water, but the roots take in water; the green colour is for making food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-b-q13",
    prompt: "A pot plant still needs\u2026",
    options: [
      { id: "a", text: "water" },
      { id: "b", text: "no care" },
      { id: "c", text: "darkness" },
      { id: "d", text: "salt water" }
    ],
    answerId: "a",
    explanation: "A pot plant still needs water. 'No care' is tempting because a pot plant is small, but every plant needs water to live.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-b-q14",
    prompt: "Which comes first?",
    options: [
      { id: "a", text: "big tree" },
      { id: "b", text: "seed" },
      { id: "c", text: "flower" },
      { id: "d", text: "small plant" }
    ],
    answerId: "b",
    explanation: "A seed comes first, then a small plant, then a big tree. 'Small plant' is tempting because it is early, but it grows from a seed.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-b-q15",
    prompt: "Thorns on a rose\u2026",
    options: [
      { id: "a", text: "are soft" },
      { id: "b", text: "are roots" },
      { id: "c", text: "can prick" },
      { id: "d", text: "smell sweet" }
    ],
    answerId: "c",
    explanation: "Thorns on a rose are sharp and can prick, so be careful. 'Smell sweet' is tempting because roses smell lovely, but the smell comes from the petals, not the thorns.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-b-q16",
    prompt: "Plants give us\u2026",
    options: [
      { id: "a", text: "plastic" },
      { id: "b", text: "metal" },
      { id: "c", text: "smoke" },
      { id: "d", text: "oxygen / fresh air" }
    ],
    answerId: "d",
    explanation: "Plants give us oxygen, the fresh air we breathe. Smoke is tempting because burning wood makes smoke, but a living plant gives fresh air, not smoke.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83c\udf31",
    title: "Plants",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "plant",
    speak: "Plants have parts with jobs.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "plant",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Root", reveal: "Drinks water under soil", emoji: "\ud83e\udeb4" },
      { label: "Leaf", reveal: "Makes food", emoji: "\ud83c\udf43" },
      { label: "Seed", reveal: "Grows a new plant", emoji: "\ud83c\udf31" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Which part grows under the soil?",
    options: [
        { id: "a", text: "leaf" },
        { id: "b", text: "root" },
        { id: "c", text: "flower" },
        { id: "d", text: "fruit" }
    ],
    answerId: "b",
    why: "Roots grow under the soil.",
    visual: "plant",
    speak: "Which part grows under the soil?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Name plant parts", "Leaves make food", "Sets ready \u2014 16 each"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g1SciencePlants: ChapterDef = {
  id: "plants",
  title: "Plants",
  emoji: "\ud83c\udf31",
  blurb: "Roots, leaves & seeds",
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

export const g1SciencePlantsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
