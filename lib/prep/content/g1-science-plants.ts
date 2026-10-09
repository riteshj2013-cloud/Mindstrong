import type { ChapterDef, PrepQuestion } from "../types";

/** Plants - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g1-sci-plants-a-q01",
    prompt: "Which part of a plant grows under the soil?",
    options: [
      { id: "a", text: "leaf" },
      { id: "b", text: "root" },
      { id: "c", text: "flower" },
      { id: "d", text: "fruit" }
    ],
    answerId: "b",
    explanation: "Roots grow under the soil.",
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
    explanation: "Most leaves are green.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-a-q03",
    prompt: "A seed can grow into a\u2026",
    options: [
      { id: "a", text: "stone" },
      { id: "b", text: "new plant" },
      { id: "c", text: "cloud" },
      { id: "d", text: "car" }
    ],
    answerId: "b",
    explanation: "A seed grows into a new plant.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-a-q04",
    prompt: "Which part makes food for the plant?",
    options: [
      { id: "a", text: "root" },
      { id: "b", text: "leaf" },
      { id: "c", text: "stone" },
      { id: "d", text: "pot" }
    ],
    answerId: "b",
    explanation: "Leaves make food with sunlight.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-a-q05",
    prompt: "We water plants because they need\u2026",
    options: [
      { id: "a", text: "music" },
      { id: "b", text: "water" },
      { id: "c", text: "toys" },
      { id: "d", text: "shoes" }
    ],
    answerId: "b",
    explanation: "Plants need water to live.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-a-q06",
    prompt: "A flower is often\u2026",
    options: [
      { id: "a", text: "under soil only" },
      { id: "b", text: "bright and pretty" },
      { id: "c", text: "made of metal" },
      { id: "d", text: "a rock" }
    ],
    answerId: "b",
    explanation: "Flowers are often bright and pretty.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-a-q07",
    prompt: "Which do plants need to grow?",
    options: [
      { id: "a", text: "sunlight" },
      { id: "b", text: "TV" },
      { id: "c", text: "phones" },
      { id: "d", text: "cars" }
    ],
    answerId: "a",
    explanation: "Plants need sunlight.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-a-q08",
    prompt: "A mango grows on a\u2026",
    options: [
      { id: "a", text: "fish" },
      { id: "b", text: "tree" },
      { id: "c", text: "cloud" },
      { id: "d", text: "bike" }
    ],
    answerId: "b",
    explanation: "Mangoes grow on trees.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-a-q09",
    prompt: "Roots help the plant to\u2026",
    options: [
      { id: "a", text: "fly" },
      { id: "b", text: "hold in the soil" },
      { id: "c", text: "sing" },
      { id: "d", text: "read" }
    ],
    answerId: "b",
    explanation: "Roots hold the plant in the soil.",
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
    explanation: "A rose is a plant.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-a-q11",
    prompt: "Fruits often have ___ inside.",
    options: [
      { id: "a", text: "seeds" },
      { id: "b", text: "wheels" },
      { id: "c", text: "books" },
      { id: "d", text: "socks" }
    ],
    answerId: "a",
    explanation: "Fruits keep seeds inside.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-a-q12",
    prompt: "The stem\u2026",
    options: [
      { id: "a", text: "holds the plant up" },
      { id: "b", text: "is always under soil" },
      { id: "c", text: "is an animal" },
      { id: "d", text: "makes thunder" }
    ],
    answerId: "a",
    explanation: "The stem holds the plant up.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-a-q13",
    prompt: "A cactus lives where it is\u2026",
    options: [
      { id: "a", text: "very wet always" },
      { id: "b", text: "dry" },
      { id: "c", text: "under the sea" },
      { id: "d", text: "in snow only" }
    ],
    answerId: "b",
    explanation: "Cactus plants like dry places.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-a-q14",
    prompt: "We get wood from\u2026",
    options: [
      { id: "a", text: "trees" },
      { id: "b", text: "fish" },
      { id: "c", text: "clouds" },
      { id: "d", text: "stones only" }
    ],
    answerId: "a",
    explanation: "Wood comes from trees.",
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
    explanation: "A wheel is not a plant part.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-a-q16",
    prompt: "Plants are\u2026",
    options: [
      { id: "a", text: "living" },
      { id: "b", text: "not living" },
      { id: "c", text: "made of plastic only" },
      { id: "d", text: "always toys" }
    ],
    answerId: "a",
    explanation: "Plants are living things.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g1-sci-plants-b-q01",
    prompt: "Which part drinks water from the soil?",
    options: [
      { id: "a", text: "flower" },
      { id: "b", text: "root" },
      { id: "c", text: "fruit skin" },
      { id: "d", text: "thorn only" }
    ],
    answerId: "b",
    explanation: "Roots drink water from the soil.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-b-q02",
    prompt: "Sunlight helps leaves to\u2026",
    options: [
      { id: "a", text: "make food" },
      { id: "b", text: "dance" },
      { id: "c", text: "sleep only" },
      { id: "d", text: "make noise" }
    ],
    answerId: "a",
    explanation: "Leaves use sunlight to make food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-b-q03",
    prompt: "A baby plant is called a\u2026",
    options: [
      { id: "a", text: "seedling" },
      { id: "b", text: "rocket" },
      { id: "c", text: "pillow" },
      { id: "d", text: "truck" }
    ],
    answerId: "a",
    explanation: "A baby plant is a seedling.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-b-q04",
    prompt: "Which grows from a seed?",
    options: [
      { id: "a", text: "chair" },
      { id: "b", text: "plant" },
      { id: "c", text: "glass" },
      { id: "d", text: "phone" }
    ],
    answerId: "b",
    explanation: "A plant grows from a seed.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-b-q05",
    prompt: "We should ___ plants.",
    options: [
      { id: "a", text: "care for" },
      { id: "b", text: "kick" },
      { id: "c", text: "burn always" },
      { id: "d", text: "ignore forever" }
    ],
    answerId: "a",
    explanation: "We should care for plants.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-b-q06",
    prompt: "A leaf is usually\u2026",
    options: [
      { id: "a", text: "flat and green" },
      { id: "b", text: "round like a ball only" },
      { id: "c", text: "made of iron" },
      { id: "d", text: "blue metal" }
    ],
    answerId: "a",
    explanation: "Leaves are often flat and green.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-b-q07",
    prompt: "Bees visit flowers for\u2026",
    options: [
      { id: "a", text: "nectar" },
      { id: "b", text: "stones" },
      { id: "c", text: "books" },
      { id: "d", text: "shoes" }
    ],
    answerId: "a",
    explanation: "Bees take nectar from flowers.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-b-q08",
    prompt: "A coconut tree is\u2026",
    options: [
      { id: "a", text: "tall" },
      { id: "b", text: "a fish" },
      { id: "c", text: "a bird" },
      { id: "d", text: "a cup" }
    ],
    answerId: "a",
    explanation: "Coconut trees are tall.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-b-q09",
    prompt: "Soil helps plants by giving\u2026",
    options: [
      { id: "a", text: "TV shows" },
      { id: "b", text: "a place to grow" },
      { id: "c", text: "music" },
      { id: "d", text: "cars" }
    ],
    answerId: "b",
    explanation: "Soil is where plants grow.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-b-q10",
    prompt: "Which is a flower?",
    options: [
      { id: "a", text: "lotus" },
      { id: "b", text: "spoon" },
      { id: "c", text: "eraser" },
      { id: "d", text: "sock" }
    ],
    answerId: "a",
    explanation: "A lotus is a flower.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-b-q11",
    prompt: "Dry leaves fall in\u2026",
    options: [
      { id: "a", text: "autumn / dry season" },
      { id: "b", text: "only at night always" },
      { id: "c", text: "from the moon" },
      { id: "d", text: "from cars" }
    ],
    answerId: "a",
    explanation: "Leaves fall in dry or autumn times.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-b-q12",
    prompt: "The green colour in leaves helps them\u2026",
    options: [
      { id: "a", text: "make food" },
      { id: "b", text: "bark like dogs" },
      { id: "c", text: "fly planes" },
      { id: "d", text: "cook rice" }
    ],
    answerId: "a",
    explanation: "Green helps leaves make food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-b-q13",
    prompt: "A pot plant still needs\u2026",
    options: [
      { id: "a", text: "water" },
      { id: "b", text: "no care" },
      { id: "c", text: "only darkness forever" },
      { id: "d", text: "salt only" }
    ],
    answerId: "a",
    explanation: "Potted plants need water too.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-b-q14",
    prompt: "Which comes first?",
    options: [
      { id: "a", text: "seed" },
      { id: "b", text: "big tree" },
      { id: "c", text: "fruit only" },
      { id: "d", text: "wood chair" }
    ],
    answerId: "a",
    explanation: "Life often starts with a seed.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-b-q15",
    prompt: "Thorns on a rose\u2026",
    options: [
      { id: "a", text: "can prick" },
      { id: "b", text: "are sweets" },
      { id: "c", text: "are roots" },
      { id: "d", text: "are fruits" }
    ],
    answerId: "a",
    explanation: "Thorns can prick \u2014 be careful.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-plants-b-q16",
    prompt: "Plants give us\u2026",
    options: [
      { id: "a", text: "oxygen / fresh air" },
      { id: "b", text: "only plastic" },
      { id: "c", text: "only noise" },
      { id: "d", text: "only smoke" }
    ],
    answerId: "a",
    explanation: "Plants help give fresh air.",
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
