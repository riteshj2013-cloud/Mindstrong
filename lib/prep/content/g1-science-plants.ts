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
      { id: "a", text: "stone" },
      { id: "b", text: "cloud" },
      { id: "c", text: "new plant" },
      { id: "d", text: "car" }
    ],
    answerId: "c",
    explanation: "A seed can grow into a new plant. A stone is tempting because a seed can look small and hard like a stone, but a stone is not alive and cannot grow.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-a-q04",
    prompt: "Which part makes food for the plant?",
    options: [
      { id: "a", text: "root" },
      { id: "b", text: "stone" },
      { id: "c", text: "pot" },
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
      { id: "b", text: "music" },
      { id: "c", text: "toys" },
      { id: "d", text: "shoes" }
    ],
    answerId: "a",
    explanation: "We water plants because they need water to live. Music may be nice for us, but a plant cannot grow without water, while it can without music.",
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
      { id: "a", text: "TV" },
      { id: "b", text: "phones" },
      { id: "c", text: "sunlight" },
      { id: "d", text: "cars" }
    ],
    answerId: "c",
    explanation: "Plants need sunlight to grow. A TV gives out light too, but plants need the sun's light, not a screen.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-a-q08",
    prompt: "A mango grows on a\u2026",
    options: [
      { id: "a", text: "fish" },
      { id: "b", text: "cloud" },
      { id: "c", text: "bike" },
      { id: "d", text: "tree" }
    ],
    answerId: "d",
    explanation: "A mango grows on a tree. A cloud is tempting because it is high up like a tree top, but nothing grows on a cloud.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-a-q09",
    prompt: "Roots help the plant to\u2026",
    options: [
      { id: "a", text: "hold in the soil" },
      { id: "b", text: "fly" },
      { id: "c", text: "sing" },
      { id: "d", text: "read" }
    ],
    answerId: "a",
    explanation: "Roots help the plant hold on in the soil. 'Fly' is tempting if you think of seeds blown by wind, but roots keep the plant in one place.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-a-q10",
    prompt: "Which is a plant?",
    options: [
      { id: "a", text: "dog" },
      { id: "b", text: "rose" },
      { id: "c", text: "cup" },
      { id: "d", text: "ball" }
    ],
    answerId: "b",
    explanation: "A rose is a plant. A dog is tempting because it is also alive, but a dog is an animal, not a plant.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-a-q11",
    prompt: "Fruits often have ___ inside.",
    options: [
      { id: "a", text: "wheels" },
      { id: "b", text: "books" },
      { id: "c", text: "seeds" },
      { id: "d", text: "socks" }
    ],
    answerId: "c",
    explanation: "Fruits often have seeds inside, like a mango or an apple. Socks and books are not part of any plant.",
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
      { id: "a", text: "rocket" },
      { id: "b", text: "pillow" },
      { id: "c", text: "seedling" },
      { id: "d", text: "truck" }
    ],
    answerId: "c",
    explanation: "A baby plant is called a seedling. A pillow and a truck are not living things.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-b-q04",
    prompt: "Which grows from a seed?",
    options: [
      { id: "a", text: "chair" },
      { id: "b", text: "glass" },
      { id: "c", text: "phone" },
      { id: "d", text: "plant" }
    ],
    answerId: "d",
    explanation: "A plant grows from a seed. A chair is tempting because it can be made of wood from a plant, but a chair is made by people, it does not grow.",
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
      { id: "a", text: "stones" },
      { id: "b", text: "books" },
      { id: "c", text: "nectar" },
      { id: "d", text: "shoes" }
    ],
    answerId: "c",
    explanation: "Bees visit flowers for nectar, a sweet juice. Stones and shoes are not found inside flowers.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-b-q08",
    prompt: "A coconut tree is\u2026",
    options: [
      { id: "a", text: "a fish" },
      { id: "b", text: "a bird" },
      { id: "c", text: "a cup" },
      { id: "d", text: "tall" }
    ],
    answerId: "d",
    explanation: "A coconut tree is tall. A bird is tempting because birds sit on coconut trees, but the tree itself is a plant, not a bird.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-b-q09",
    prompt: "Soil helps plants by giving\u2026",
    options: [
      { id: "a", text: "a place to grow" },
      { id: "b", text: "TV shows" },
      { id: "c", text: "music" },
      { id: "d", text: "cars" }
    ],
    answerId: "a",
    explanation: "Soil gives plants a place to grow and hold their roots. Music and TV shows have nothing to do with soil.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-b-q10",
    prompt: "Which is a flower?",
    options: [
      { id: "a", text: "spoon" },
      { id: "b", text: "lotus" },
      { id: "c", text: "eraser" },
      { id: "d", text: "sock" }
    ],
    answerId: "b",
    explanation: "A lotus is a flower. A sock or a spoon may be colourful, but they are made by people, not grown.",
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
      { id: "a", text: "bark like dogs" },
      { id: "b", text: "fly planes" },
      { id: "c", text: "cook rice" },
      { id: "d", text: "make food" }
    ],
    answerId: "d",
    explanation: "The green colour helps leaves make food. 'Cook rice' is tempting because it is about food, but people cook rice; leaves make their own food with sunlight.",
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
      { id: "a", text: "are sweets" },
      { id: "b", text: "are roots" },
      { id: "c", text: "can prick" },
      { id: "d", text: "are fruits" }
    ],
    answerId: "c",
    explanation: "Thorns on a rose can prick, so be careful. 'Are roots' is tempting because thorns are part of the plant, but roots grow under the soil, not on the stem.",
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
