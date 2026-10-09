import type { ChapterDef, PrepQuestion } from "../types";

/** Animals - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g1-sci-animals-a-q01",
    prompt: "Which animal says meow?",
    options: [
      { id: "a", text: "cat" },
      { id: "b", text: "cow" },
      { id: "c", text: "frog" },
      { id: "d", text: "dog" }
    ],
    answerId: "a",
    explanation: "A cat says meow.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-a-q02",
    prompt: "Fish live in\u2026",
    options: [
      { id: "a", text: "clouds" },
      { id: "b", text: "water" },
      { id: "c", text: "trees only" },
      { id: "d", text: "deserts only" }
    ],
    answerId: "b",
    explanation: "Fish live in water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-a-q03",
    prompt: "A cow gives us\u2026",
    options: [
      { id: "a", text: "honey" },
      { id: "b", text: "silk" },
      { id: "c", text: "milk" },
      { id: "d", text: "wool only" }
    ],
    answerId: "c",
    explanation: "Cows give milk.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-a-q04",
    prompt: "Which animal can fly?",
    options: [
      { id: "a", text: "crocodile" },
      { id: "b", text: "goat" },
      { id: "c", text: "elephant" },
      { id: "d", text: "sparrow" }
    ],
    answerId: "d",
    explanation: "A sparrow can fly.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-a-q05",
    prompt: "Dogs are often kept as\u2026",
    options: [
      { id: "a", text: "pets" },
      { id: "b", text: "cars" },
      { id: "c", text: "plants" },
      { id: "d", text: "shoes" }
    ],
    answerId: "a",
    explanation: "Dogs are common pets.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-a-q06",
    prompt: "A lion is a\u2026",
    options: [
      { id: "a", text: "bird" },
      { id: "b", text: "wild animal" },
      { id: "c", text: "insect only" },
      { id: "d", text: "fish" }
    ],
    answerId: "b",
    explanation: "A lion is a wild animal.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-a-q07",
    prompt: "Which animal hops?",
    options: [
      { id: "a", text: "turtle" },
      { id: "b", text: "fish" },
      { id: "c", text: "rabbit" },
      { id: "d", text: "snail" }
    ],
    answerId: "c",
    explanation: "Rabbits hop.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-a-q08",
    prompt: "Birds have\u2026",
    options: [
      { id: "a", text: "fins only" },
      { id: "b", text: "wheels" },
      { id: "c", text: "roots" },
      { id: "d", text: "wings" }
    ],
    answerId: "d",
    explanation: "Birds have wings.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-a-q09",
    prompt: "A hen lays\u2026",
    options: [
      { id: "a", text: "eggs" },
      { id: "b", text: "milk" },
      { id: "c", text: "wool" },
      { id: "d", text: "honey" }
    ],
    answerId: "a",
    explanation: "Hens lay eggs.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-a-q10",
    prompt: "Which lives on land?",
    options: [
      { id: "a", text: "whale" },
      { id: "b", text: "dog" },
      { id: "c", text: "shark" },
      { id: "d", text: "dolphin" }
    ],
    answerId: "b",
    explanation: "A dog lives on land.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-a-q11",
    prompt: "Bees make\u2026",
    options: [
      { id: "a", text: "wool" },
      { id: "b", text: "bread" },
      { id: "c", text: "honey" },
      { id: "d", text: "milk" }
    ],
    answerId: "c",
    explanation: "Bees make honey.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-a-q12",
    prompt: "An elephant has a long\u2026",
    options: [
      { id: "a", text: "fin" },
      { id: "b", text: "beak only" },
      { id: "c", text: "shell" },
      { id: "d", text: "trunk" }
    ],
    answerId: "d",
    explanation: "Elephants have trunks.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-a-q13",
    prompt: "Which animal is tiny?",
    options: [
      { id: "a", text: "ant" },
      { id: "b", text: "whale" },
      { id: "c", text: "elephant" },
      { id: "d", text: "giraffe" }
    ],
    answerId: "a",
    explanation: "An ant is tiny.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-a-q14",
    prompt: "Sheep give us\u2026",
    options: [
      { id: "a", text: "silk" },
      { id: "b", text: "wool" },
      { id: "c", text: "honey" },
      { id: "d", text: "eggs only" }
    ],
    answerId: "b",
    explanation: "Sheep give wool.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-a-q15",
    prompt: "A frog can live\u2026",
    options: [
      { id: "a", text: "only in space" },
      { id: "b", text: "only in ice cream" },
      { id: "c", text: "near water and land" },
      { id: "d", text: "only in fire" }
    ],
    answerId: "c",
    explanation: "Frogs like water and land.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-a-q16",
    prompt: "Which is NOT an animal?",
    options: [
      { id: "a", text: "deer" },
      { id: "b", text: "monkey" },
      { id: "c", text: "tiger" },
      { id: "d", text: "table" }
    ],
    answerId: "d",
    explanation: "A table is not an animal.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g1-sci-animals-b-q01",
    prompt: "Which animal says quack?",
    options: [
      { id: "a", text: "duck" },
      { id: "b", text: "cow" },
      { id: "c", text: "horse" },
      { id: "d", text: "cat" }
    ],
    answerId: "a",
    explanation: "A duck says quack.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-b-q02",
    prompt: "Where do monkeys like to live?",
    options: [
      { id: "a", text: "in cups" },
      { id: "b", text: "in trees" },
      { id: "c", text: "under the sea only" },
      { id: "d", text: "in fire" }
    ],
    answerId: "b",
    explanation: "Many monkeys live in trees.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-b-q03",
    prompt: "A horse can\u2026",
    options: [
      { id: "a", text: "fly with wings" },
      { id: "b", text: "lay eggs like a hen" },
      { id: "c", text: "run fast" },
      { id: "d", text: "swim like a fish always" }
    ],
    answerId: "c",
    explanation: "Horses can run fast.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-b-q04",
    prompt: "Which animal has a hard shell?",
    options: [
      { id: "a", text: "dog" },
      { id: "b", text: "cow" },
      { id: "c", text: "cat" },
      { id: "d", text: "tortoise" }
    ],
    answerId: "d",
    explanation: "A tortoise has a hard shell.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-b-q05",
    prompt: "Cows eat\u2026",
    options: [
      { id: "a", text: "grass" },
      { id: "b", text: "stones" },
      { id: "c", text: "plastic" },
      { id: "d", text: "metal" }
    ],
    answerId: "a",
    explanation: "Cows eat grass.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-b-q06",
    prompt: "A tiger has\u2026",
    options: [
      { id: "a", text: "fins only" },
      { id: "b", text: "stripes" },
      { id: "c", text: "wheels" },
      { id: "d", text: "feathers only" }
    ],
    answerId: "b",
    explanation: "Tigers have stripes.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-b-q07",
    prompt: "Which animal swims?",
    options: [
      { id: "a", text: "camel" },
      { id: "b", text: "sparrow" },
      { id: "c", text: "fish" },
      { id: "d", text: "hen" }
    ],
    answerId: "c",
    explanation: "Fish swim.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-b-q08",
    prompt: "Pets need\u2026",
    options: [
      { id: "a", text: "no care" },
      { id: "b", text: "only stones" },
      { id: "c", text: "only screens" },
      { id: "d", text: "care and food" }
    ],
    answerId: "d",
    explanation: "Pets need care and food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-b-q09",
    prompt: "A goat gives\u2026",
    options: [
      { id: "a", text: "milk" },
      { id: "b", text: "honey" },
      { id: "c", text: "silk" },
      { id: "d", text: "wool only always" }
    ],
    answerId: "a",
    explanation: "Goats can give milk.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-b-q10",
    prompt: "Which animal has a pouch?",
    options: [
      { id: "a", text: "ant" },
      { id: "b", text: "kangaroo" },
      { id: "c", text: "fish" },
      { id: "d", text: "eagle" }
    ],
    answerId: "b",
    explanation: "A kangaroo has a pouch.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-b-q11",
    prompt: "Snakes\u2026",
    options: [
      { id: "a", text: "have wings" },
      { id: "b", text: "have fins like sharks always" },
      { id: "c", text: "have no legs" },
      { id: "d", text: "have six legs" }
    ],
    answerId: "c",
    explanation: "Snakes have no legs.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-b-q12",
    prompt: "A peacock is a\u2026",
    options: [
      { id: "a", text: "fish" },
      { id: "b", text: "insect only" },
      { id: "c", text: "mammal only" },
      { id: "d", text: "bird" }
    ],
    answerId: "d",
    explanation: "A peacock is a bird.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-b-q13",
    prompt: "Which animal is used to pull a cart?",
    options: [
      { id: "a", text: "bullock / ox" },
      { id: "b", text: "butterfly" },
      { id: "c", text: "goldfish" },
      { id: "d", text: "sparrow" }
    ],
    answerId: "a",
    explanation: "Bullocks can pull carts.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-b-q14",
    prompt: "Cats like to\u2026",
    options: [
      { id: "a", text: "quack" },
      { id: "b", text: "drink milk" },
      { id: "c", text: "bark" },
      { id: "d", text: "moo" }
    ],
    answerId: "b",
    explanation: "Cats often drink milk.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-b-q15",
    prompt: "Wild animals live\u2026",
    options: [
      { id: "a", text: "only in fridges" },
      { id: "b", text: "only in books" },
      { id: "c", text: "in forests / wild places" },
      { id: "d", text: "only in school bags" }
    ],
    answerId: "c",
    explanation: "Wild animals live in wild places.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-b-q16",
    prompt: "Which is an insect?",
    options: [
      { id: "a", text: "cow" },
      { id: "b", text: "elephant" },
      { id: "c", text: "whale" },
      { id: "d", text: "butterfly" }
    ],
    answerId: "d",
    explanation: "A butterfly is an insect.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83d\udc3e",
    title: "Animals",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "none",
    speak: "Animals live in many places.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "none",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Pet", reveal: "Lives with us", emoji: "\ud83d\udc36" },
      { label: "Farm", reveal: "Gives milk or eggs", emoji: "\ud83d\udc04" },
      { label: "Wild", reveal: "Lives in forests", emoji: "\ud83d\udc2f" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Which animal says meow?",
    options: [
        { id: "a", text: "dog" },
        { id: "b", text: "cat" },
        { id: "c", text: "cow" },
        { id: "d", text: "hen" }
    ],
    answerId: "b",
    why: "A cat says meow.",
    visual: "none",
    speak: "Which animal says meow?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Know animal homes", "Be kind to animals", "Sets ready \u2014 16 each"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g1ScienceAnimals: ChapterDef = {
  id: "animals",
  title: "Animals",
  emoji: "\ud83d\udc3e",
  blurb: "Pets, farms & wild friends",
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

export const g1ScienceAnimalsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
