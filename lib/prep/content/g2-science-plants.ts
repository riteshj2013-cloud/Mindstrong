import type { ChapterDef, PrepQuestion } from "../types";

/** Plants - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g2-sci-plants-a-q01",
    prompt: "Seeds need ___ to sprout.",
    options: [
      { id: "a", text: "water and warmth" },
      { id: "b", text: "salt" },
      { id: "c", text: "strong wind" },
      { id: "d", text: "ice" }
    ],
    answerId: "a",
    explanation: "Seeds need water and warmth to sprout. Ice is tempting because it is frozen water, but it is too cold for a seed to start growing.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-a-q02",
    prompt: "Leaves make food using\u2026",
    options: [
      { id: "a", text: "moonlight" },
      { id: "b", text: "sunlight" },
      { id: "c", text: "darkness" },
      { id: "d", text: "flowers" }
    ],
    answerId: "b",
    explanation: "Leaves make food using sunlight. Moonlight is tempting because it is light too, but it is far too weak for leaves to make food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-a-q03",
    prompt: "Roots grow mostly\u2026",
    options: [
      { id: "a", text: "above the soil" },
      { id: "b", text: "in the air" },
      { id: "c", text: "under the soil" },
      { id: "d", text: "inside the stem" }
    ],
    answerId: "c",
    explanation: "Roots grow mostly under the soil, where they hold the plant and take in water. 'In the air' is tempting because a few plants like the banyan have hanging roots, but most roots grow underground.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-a-q04",
    prompt: "Which plant part becomes a fruit?",
    options: [
      { id: "a", text: "root" },
      { id: "b", text: "leaf" },
      { id: "c", text: "stem" },
      { id: "d", text: "flower" }
    ],
    answerId: "d",
    explanation: "After a flower is pollinated, it can become a fruit. The stem is tempting because fruits hang from it, but the stem only holds the fruit.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-a-q05",
    prompt: "We eat the root of a\u2026",
    options: [
      { id: "a", text: "carrot" },
      { id: "b", text: "mango" },
      { id: "c", text: "cabbage" },
      { id: "d", text: "onion" }
    ],
    answerId: "a",
    explanation: "We eat the root of a carrot. An onion is tempting because it also grows underground, but the onion we eat is a swollen bud of leaves, not a root.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-a-q06",
    prompt: "The stem carries ___ up to the leaves.",
    options: [
      { id: "a", text: "sunlight" },
      { id: "b", text: "water" },
      { id: "c", text: "soil" },
      { id: "d", text: "seeds" }
    ],
    answerId: "b",
    explanation: "The stem carries water from the roots up to the leaves. Sunlight is tempting because leaves need it, but sunlight falls straight on the leaves; it does not travel up the stem.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-a-q07",
    prompt: "Plants take in carbon dioxide and give out\u2026",
    options: [
      { id: "a", text: "nitrogen" },
      { id: "b", text: "smoke" },
      { id: "c", text: "oxygen" },
      { id: "d", text: "carbon dioxide" }
    ],
    answerId: "c",
    explanation: "Plants take in carbon dioxide and give out oxygen. Carbon dioxide is tempting because it is in the question, but that is the gas plants take in, not give out.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-a-q08",
    prompt: "A climber plant needs\u2026",
    options: [
      { id: "a", text: "salt water" },
      { id: "b", text: "no sunlight" },
      { id: "c", text: "a desert" },
      { id: "d", text: "support" }
    ],
    answerId: "d",
    explanation: "A climber has a weak stem, so it needs support like a wall, stick or tree to grow upwards. 'No sunlight' is tempting because some plants grow in shade, but climbers grow up towards the sunlight.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-a-q09",
    prompt: "Which is a cereal plant?",
    options: [
      { id: "a", text: "wheat" },
      { id: "b", text: "rose" },
      { id: "c", text: "neem" },
      { id: "d", text: "mango" }
    ],
    answerId: "a",
    explanation: "Wheat is a cereal plant that gives us grain for chapatis. Mango is tempting because it is a food plant too, but it is a fruit tree, not a cereal.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-a-q10",
    prompt: "Dry seeds stored in a jar\u2026",
    options: [
      { id: "a", text: "always sprout at once" },
      { id: "b", text: "may stay dormant" },
      { id: "c", text: "rot at once" },
      { id: "d", text: "grow leaves in the jar" }
    ],
    answerId: "b",
    explanation: "Dry seeds in a jar may stay dormant, resting until they get water. 'Always sprout at once' is tempting because seeds grow, but without water they cannot start.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-a-q11",
    prompt: "Chlorophyll makes leaves look\u2026",
    options: [
      { id: "a", text: "yellow" },
      { id: "b", text: "red" },
      { id: "c", text: "green" },
      { id: "d", text: "brown" }
    ],
    answerId: "c",
    explanation: "Chlorophyll makes leaves look green. Yellow is tempting because old leaves turn yellow, but that happens when chlorophyll fades away.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-a-q12",
    prompt: "Which helps scatter seeds?",
    options: [
      { id: "a", text: "only sunlight" },
      { id: "b", text: "only soil" },
      { id: "c", text: "only shade" },
      { id: "d", text: "wind and animals" }
    ],
    answerId: "d",
    explanation: "Wind and animals carry seeds to new places. 'Only sunlight' is tempting because plants need sun, but sunlight cannot move a seed.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-a-q13",
    prompt: "A potato grows underground but is a\u2026",
    options: [
      { id: "a", text: "stem" },
      { id: "b", text: "flower" },
      { id: "c", text: "leaf" },
      { id: "d", text: "root" }
    ],
    answerId: "a",
    explanation: "A potato grows underground but is a stem: it has eyes that grow new shoots. Root is tempting because it is underground, but roots do not have eyes.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-a-q14",
    prompt: "Plants in water (like lotus) are\u2026",
    options: [
      { id: "a", text: "desert plants" },
      { id: "b", text: "aquatic plants" },
      { id: "c", text: "climbers" },
      { id: "d", text: "creepers" }
    ],
    answerId: "b",
    explanation: "Plants that grow in water, like the lotus, are aquatic plants. Creepers is tempting because the lotus spreads, but creepers spread along the ground, not in water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-a-q15",
    prompt: "We should not ___ plants without care.",
    options: [
      { id: "a", text: "water" },
      { id: "b", text: "give sunlight" },
      { id: "c", text: "pluck or harm" },
      { id: "d", text: "protect" }
    ],
    answerId: "c",
    explanation: "We should not pluck or harm plants carelessly. 'Water' is tempting because the sentence says 'should not', but watering helps plants, so we should do it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-a-q16",
    prompt: "Photosynthesis mainly happens in the\u2026",
    options: [
      { id: "a", text: "flower" },
      { id: "b", text: "root" },
      { id: "c", text: "fruit" },
      { id: "d", text: "leaf" }
    ],
    answerId: "d",
    explanation: "Photosynthesis, making food with sunlight, mainly happens in the leaf. The flower is tempting because it is a bright part of the plant, but it makes seeds, not food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g2-sci-plants-b-q01",
    prompt: "A seedling is a\u2026",
    options: [
      { id: "a", text: "young plant" },
      { id: "b", text: "old tree" },
      { id: "c", text: "flower bud" },
      { id: "d", text: "seed" }
    ],
    answerId: "a",
    explanation: "A seedling is a young plant that has just grown from a seed. 'Seed' is tempting because the words look alike, but the seedling is what comes out of the seed.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-b-q02",
    prompt: "Flowers attract insects with\u2026",
    options: [
      { id: "a", text: "loud sounds" },
      { id: "b", text: "colour and smell" },
      { id: "c", text: "sharp thorns" },
      { id: "d", text: "sticky leaves" }
    ],
    answerId: "b",
    explanation: "Flowers attract insects with bright colours and sweet smells. Sharp thorns are tempting because roses have them, but thorns keep animals away; they do not attract insects.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-b-q03",
    prompt: "Which part holds the plant upright?",
    options: [
      { id: "a", text: "petal" },
      { id: "b", text: "leaf" },
      { id: "c", text: "stem" },
      { id: "d", text: "flower" }
    ],
    answerId: "c",
    explanation: "The stem holds the plant upright. The leaf is tempting because it is a big part, but leaves make food; they do not hold the plant up.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-b-q04",
    prompt: "Mango seed is found\u2026",
    options: [
      { id: "a", text: "in the leaf" },
      { id: "b", text: "in the root" },
      { id: "c", text: "on the bark" },
      { id: "d", text: "inside the fruit" }
    ],
    answerId: "d",
    explanation: "A mango seed is found inside the fruit. 'On the bark' is tempting because mangoes grow on trees, but the seed is inside the fruit we eat.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-b-q05",
    prompt: "We eat the leaf of\u2026",
    options: [
      { id: "a", text: "spinach" },
      { id: "b", text: "carrot" },
      { id: "c", text: "potato" },
      { id: "d", text: "mango" }
    ],
    answerId: "a",
    explanation: "We eat the leaves of spinach. Carrot is tempting because it is a vegetable too, but we eat its root, not its leaf.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-b-q06",
    prompt: "Plants need air, water and\u2026",
    options: [
      { id: "a", text: "salt" },
      { id: "b", text: "sunlight" },
      { id: "c", text: "darkness" },
      { id: "d", text: "sugar" }
    ],
    answerId: "b",
    explanation: "Plants need air, water and sunlight. Darkness is tempting because seeds sprout under the soil, but a growing plant needs light to make its food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-b-q07",
    prompt: "A cactus stores water in its\u2026",
    options: [
      { id: "a", text: "flower" },
      { id: "b", text: "roots" },
      { id: "c", text: "stem" },
      { id: "d", text: "thorns" }
    ],
    answerId: "c",
    explanation: "A cactus stores water in its thick stem. Thorns are tempting because they are the cactus's best-known part, but thorns are thin and hold no water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-b-q08",
    prompt: "Which is NOT a plant need?",
    options: [
      { id: "a", text: "water" },
      { id: "b", text: "light" },
      { id: "c", text: "air" },
      { id: "d", text: "video games" }
    ],
    answerId: "d",
    explanation: "Video games are not something a plant needs. Air is tempting because we cannot see it, but plants do need air, as well as water and light.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-b-q09",
    prompt: "Trees help us by giving\u2026",
    options: [
      { id: "a", text: "shade and air" },
      { id: "b", text: "dust" },
      { id: "c", text: "smoke" },
      { id: "d", text: "plastic" }
    ],
    answerId: "a",
    explanation: "Trees give us shade and fresh air. Smoke is tempting because burning wood makes smoke, but a living tree cleans the air.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-b-q10",
    prompt: "Germination means a seed\u2026",
    options: [
      { id: "a", text: "dries up" },
      { id: "b", text: "starts to grow" },
      { id: "c", text: "rots away" },
      { id: "d", text: "is planted" }
    ],
    answerId: "b",
    explanation: "Germination means a seed starts to grow: a tiny root goes down and a shoot comes up. 'Is planted' is tempting because planting comes first, but putting a seed in the soil is not germination; germination is when it starts growing.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-b-q11",
    prompt: "The food made by the leaves travels through the…",
    options: [
      { id: "a", text: "soil" },
      { id: "b", text: "air" },
      { id: "c", text: "stem" },
      { id: "d", text: "flowers" }
    ],
    answerId: "c",
    explanation: "The food made by leaves travels through the stem to the roots and other parts. Flowers are tempting because they also get food, but they receive it; the stem is the path it travels through.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-b-q12",
    prompt: "Which plant grows in water?",
    options: [
      { id: "a", text: "cactus" },
      { id: "b", text: "desert thorn" },
      { id: "c", text: "pine" },
      { id: "d", text: "lotus" }
    ],
    answerId: "d",
    explanation: "The lotus grows in water. The pine is tempting because it is a tall green plant, but it grows on land, often on hills.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-b-q13",
    prompt: "Farmers grow plants for\u2026",
    options: [
      { id: "a", text: "food" },
      { id: "b", text: "smoke" },
      { id: "c", text: "dust" },
      { id: "d", text: "plastic" }
    ],
    answerId: "a",
    explanation: "Farmers grow plants such as wheat, rice and vegetables for food. Smoke is tempting if you think of farm fires, but farmers do not grow plants to make smoke.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-b-q14",
    prompt: "Fallen leaves can become\u2026",
    options: [
      { id: "a", text: "stones" },
      { id: "b", text: "compost over time" },
      { id: "c", text: "sand" },
      { id: "d", text: "seeds" }
    ],
    answerId: "b",
    explanation: "Fallen leaves slowly rot and become compost that feeds the soil. 'Seeds' is tempting because both fall from plants, but seeds come from fruits; leaves do not turn into seeds.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-b-q15",
    prompt: "A tendril helps a plant to\u2026",
    options: [
      { id: "a", text: "store water" },
      { id: "b", text: "make seeds" },
      { id: "c", text: "climb" },
      { id: "d", text: "drink water" }
    ],
    answerId: "c",
    explanation: "A tendril is a thin curly part that wraps around a support so the plant can climb. 'Drink water' is tempting because it is thin like a root, but roots take in water; tendrils hold on.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-plants-b-q16",
    prompt: "Without sunlight for long, a green plant may\u2026",
    options: [
      { id: "a", text: "grow greener" },
      { id: "b", text: "make more food" },
      { id: "c", text: "grow bigger leaves" },
      { id: "d", text: "become weak" }
    ],
    answerId: "d",
    explanation: "Without sunlight, a green plant cannot make food, so it becomes weak and pale. 'Make more food' is tempting if you think rest helps, but leaves need sunlight to make food, so without it the plant makes less and grows weak.",
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
