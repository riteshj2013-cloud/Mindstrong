import type { ChapterDef, PrepQuestion } from "../types";

/** Plants - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g2-sci-plants-a-q01",
    prompt: "Seeds need ___ to sprout.",
    options: [
      { id: "a", text: "water and warmth" },
      { id: "b", text: "only darkness forever" },
      { id: "c", text: "plastic" },
      { id: "d", text: "metal" }
    ],
    answerId: "a",
    explanation: "Seeds need water and warmth to sprout.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-a-q02",
    prompt: "Leaves make food using\u2026",
    options: [
      { id: "a", text: "sunlight" },
      { id: "b", text: "moonlight only" },
      { id: "c", text: "noise" },
      { id: "d", text: "plastic" }
    ],
    answerId: "a",
    explanation: "Leaves use sunlight to make food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-a-q03",
    prompt: "Roots grow mostly\u2026",
    options: [
      { id: "a", text: "above the soil" },
      { id: "b", text: "under the soil" },
      { id: "c", text: "in the sky" },
      { id: "d", text: "in shoes" }
    ],
    answerId: "b",
    explanation: "Roots grow under the soil.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-a-q04",
    prompt: "Which plant part becomes a fruit?",
    options: [
      { id: "a", text: "flower" },
      { id: "b", text: "root hair only" },
      { id: "c", text: "thorn only" },
      { id: "d", text: "dead leaf" }
    ],
    answerId: "a",
    explanation: "A flower can become a fruit.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-a-q05",
    prompt: "We eat the root of a\u2026",
    options: [
      { id: "a", text: "carrot" },
      { id: "b", text: "mango" },
      { id: "c", text: "rose petal only" },
      { id: "d", text: "banana skin only" }
    ],
    answerId: "a",
    explanation: "Carrot is a root we eat.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-a-q06",
    prompt: "The stem carries ___ up to the leaves.",
    options: [
      { id: "a", text: "water" },
      { id: "b", text: "stones" },
      { id: "c", text: "toys" },
      { id: "d", text: "books" }
    ],
    answerId: "a",
    explanation: "The stem carries water up.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-a-q07",
    prompt: "Plants take in carbon dioxide and give out\u2026",
    options: [
      { id: "a", text: "oxygen" },
      { id: "b", text: "plastic" },
      { id: "c", text: "sand" },
      { id: "d", text: "smoke only" }
    ],
    answerId: "a",
    explanation: "Plants give out oxygen.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-a-q08",
    prompt: "A climber plant needs\u2026",
    options: [
      { id: "a", text: "support" },
      { id: "b", text: "wheels" },
      { id: "c", text: "batteries" },
      { id: "d", text: "screens" }
    ],
    answerId: "a",
    explanation: "Climbers need support to grow up.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-a-q09",
    prompt: "Which is a cereal plant?",
    options: [
      { id: "a", text: "wheat" },
      { id: "b", text: "rose" },
      { id: "c", text: "neem only" },
      { id: "d", text: "cactus fruit only" }
    ],
    answerId: "a",
    explanation: "Wheat is a cereal plant.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-a-q10",
    prompt: "Dry seeds stored in a jar\u2026",
    options: [
      { id: "a", text: "may stay dormant" },
      { id: "b", text: "always sprout at once" },
      { id: "c", text: "turn into fish" },
      { id: "d", text: "become metal" }
    ],
    answerId: "a",
    explanation: "Dry seeds can stay dormant until watered.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-a-q11",
    prompt: "Chlorophyll makes leaves look\u2026",
    options: [
      { id: "a", text: "green" },
      { id: "b", text: "blue metal" },
      { id: "c", text: "pink always" },
      { id: "d", text: "glass" }
    ],
    answerId: "a",
    explanation: "Chlorophyll is green.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-a-q12",
    prompt: "Which helps scatter seeds?",
    options: [
      { id: "a", text: "wind and animals" },
      { id: "b", text: "only silence" },
      { id: "c", text: "only plastic bags" },
      { id: "d", text: "only darkness" }
    ],
    answerId: "a",
    explanation: "Wind and animals can scatter seeds.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-a-q13",
    prompt: "A potato grows underground but is a\u2026",
    options: [
      { id: "a", text: "stem" },
      { id: "b", text: "flower" },
      { id: "c", text: "leaf only" },
      { id: "d", text: "fruit only" }
    ],
    answerId: "a",
    explanation: "Potato is an underground stem.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-a-q14",
    prompt: "Plants in water (like lotus) are\u2026",
    options: [
      { id: "a", text: "aquatic plants" },
      { id: "b", text: "desert only" },
      { id: "c", text: "space plants" },
      { id: "d", text: "metal plants" }
    ],
    answerId: "a",
    explanation: "Lotus is an aquatic plant.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-a-q15",
    prompt: "We should not ___ plants without care.",
    options: [
      { id: "a", text: "pluck or harm" },
      { id: "b", text: "water" },
      { id: "c", text: "give sunlight" },
      { id: "d", text: "protect" }
    ],
    answerId: "a",
    explanation: "Do not harm plants carelessly.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-a-q16",
    prompt: "Photosynthesis mainly happens in the\u2026",
    options: [
      { id: "a", text: "leaf" },
      { id: "b", text: "rock" },
      { id: "c", text: "plastic pot only" },
      { id: "d", text: "wire" }
    ],
    answerId: "a",
    explanation: "Photosynthesis happens in the leaf.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g2-sci-plants-b-q01",
    prompt: "A seedling is a\u2026",
    options: [
      { id: "a", text: "young plant" },
      { id: "b", text: "old tree only" },
      { id: "c", text: "dead leaf" },
      { id: "d", text: "stone" }
    ],
    answerId: "a",
    explanation: "A seedling is a young plant.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-b-q02",
    prompt: "Flowers attract insects with\u2026",
    options: [
      { id: "a", text: "colour and smell" },
      { id: "b", text: "noise machines" },
      { id: "c", text: "plastic toys" },
      { id: "d", text: "metal" }
    ],
    answerId: "a",
    explanation: "Colour and smell attract insects.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-b-q03",
    prompt: "Which part holds the plant upright?",
    options: [
      { id: "a", text: "stem" },
      { id: "b", text: "petal only" },
      { id: "c", text: "seed coat only" },
      { id: "d", text: "nectar" }
    ],
    answerId: "a",
    explanation: "The stem holds the plant up.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-b-q04",
    prompt: "Mango seed is found\u2026",
    options: [
      { id: "a", text: "inside the fruit" },
      { id: "b", text: "in the leaf tip only" },
      { id: "c", text: "in the air only" },
      { id: "d", text: "in a stone always" }
    ],
    answerId: "a",
    explanation: "The seed is inside the mango fruit.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-b-q05",
    prompt: "We eat the leaf of\u2026",
    options: [
      { id: "a", text: "spinach" },
      { id: "b", text: "carrot root only" },
      { id: "c", text: "potato only" },
      { id: "d", text: "coconut shell only" }
    ],
    answerId: "a",
    explanation: "Spinach leaves are eaten.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-b-q06",
    prompt: "Plants need air, water and\u2026",
    options: [
      { id: "a", text: "sunlight" },
      { id: "b", text: "TV" },
      { id: "c", text: "phones" },
      { id: "d", text: "petrol" }
    ],
    answerId: "a",
    explanation: "Sunlight is needed with air and water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-b-q07",
    prompt: "A cactus stores water in its\u2026",
    options: [
      { id: "a", text: "stem" },
      { id: "b", text: "flower only" },
      { id: "c", text: "roots only always" },
      { id: "d", text: "seeds only" }
    ],
    answerId: "a",
    explanation: "Cactus stems store water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-b-q08",
    prompt: "Which is NOT a plant need?",
    options: [
      { id: "a", text: "video games" },
      { id: "b", text: "water" },
      { id: "c", text: "light" },
      { id: "d", text: "air" }
    ],
    answerId: "a",
    explanation: "Video games are not a plant need.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-b-q09",
    prompt: "Trees help us by giving\u2026",
    options: [
      { id: "a", text: "shade and air" },
      { id: "b", text: "only noise" },
      { id: "c", text: "only smoke" },
      { id: "d", text: "only plastic" }
    ],
    answerId: "a",
    explanation: "Trees give shade and help the air.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-b-q10",
    prompt: "Germination means a seed\u2026",
    options: [
      { id: "a", text: "starts to grow" },
      { id: "b", text: "turns to metal" },
      { id: "c", text: "flies to space" },
      { id: "d", text: "becomes a fish" }
    ],
    answerId: "a",
    explanation: "Germination is when a seed starts to grow.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-b-q11",
    prompt: "The green food made by leaves travels through the\u2026",
    options: [
      { id: "a", text: "stem" },
      { id: "b", text: "only the soil forever" },
      { id: "c", text: "only the sky" },
      { id: "d", text: "only wires" }
    ],
    answerId: "a",
    explanation: "Food moves through the stem.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-b-q12",
    prompt: "Which plant grows in water?",
    options: [
      { id: "a", text: "lotus" },
      { id: "b", text: "cactus" },
      { id: "c", text: "desert thorn only" },
      { id: "d", text: "pine on dry rock only" }
    ],
    answerId: "a",
    explanation: "Lotus grows in water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-b-q13",
    prompt: "Farmers grow plants for\u2026",
    options: [
      { id: "a", text: "food" },
      { id: "b", text: "only noise" },
      { id: "c", text: "only dust" },
      { id: "d", text: "only plastic" }
    ],
    answerId: "a",
    explanation: "Farmers grow plants for food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-b-q14",
    prompt: "Fallen leaves can become\u2026",
    options: [
      { id: "a", text: "compost over time" },
      { id: "b", text: "glass" },
      { id: "c", text: "metal" },
      { id: "d", text: "plastic" }
    ],
    answerId: "a",
    explanation: "Leaves can break down into compost.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-b-q15",
    prompt: "A tendril helps a plant to\u2026",
    options: [
      { id: "a", text: "climb" },
      { id: "b", text: "swim" },
      { id: "c", text: "bark" },
      { id: "d", text: "fly planes" }
    ],
    answerId: "a",
    explanation: "Tendrils help plants climb.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-b-q16",
    prompt: "Without sunlight for long, a green plant may\u2026",
    options: [
      { id: "a", text: "become weak" },
      { id: "b", text: "turn into a car" },
      { id: "c", text: "start singing" },
      { id: "d", text: "become a fish" }
    ],
    answerId: "a",
    explanation: "No light \u2192 plant becomes weak.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83c\udf3f",
    title: "Plants",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "plant",
    speak: "Seeds sprout. Leaves make food.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "plant",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Seed", reveal: "Starts a plant", emoji: "\ud83c\udf31" },
      { label: "Leaf", reveal: "Makes food with light", emoji: "\ud83c\udf43" },
      { label: "Stem", reveal: "Carries water", emoji: "\ud83c\udf8b" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Seeds need ___ to sprout.",
    options: [
        { id: "a", text: "water and warmth" },
        { id: "b", text: "plastic" },
        { id: "c", text: "noise" },
        { id: "d", text: "metal" }
    ],
    answerId: "a",
    why: "Water and warmth help seeds sprout.",
    visual: "plant",
    speak: "Seeds need ___ to sprout.",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Know plant jobs", "Care for plants", "Sets ready \u2014 16 each"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g2SciencePlants: ChapterDef = {
  id: "plants",
  title: "Plants",
  emoji: "\ud83c\udf3f",
  blurb: "Seeds, food & plant jobs",
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
  paperTopics: ["living-things", "water-cycle"],
};

export const g2SciencePlantsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
