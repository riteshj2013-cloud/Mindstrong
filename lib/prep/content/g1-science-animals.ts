import type { ChapterDef, PrepQuestion } from "../types";

/** Animals - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g1-sci-animals-a-q01",
    prompt: "Which animal says meow?",
    options: [
      { id: "a", text: "dog" },
      { id: "b", text: "cat" },
      { id: "c", text: "cow" },
      { id: "d", text: "frog" }
    ],
    answerId: "b",
    explanation: "A cat says meow.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-a-q02",
    prompt: "Fish live in\u2026",
    options: [
      { id: "a", text: "water" },
      { id: "b", text: "trees only" },
      { id: "c", text: "deserts only" },
      { id: "d", text: "clouds" }
    ],
    answerId: "a",
    explanation: "Fish live in water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-a-q03",
    prompt: "A cow gives us\u2026",
    options: [
      { id: "a", text: "milk" },
      { id: "b", text: "wool only" },
      { id: "c", text: "honey" },
      { id: "d", text: "silk" }
    ],
    answerId: "a",
    explanation: "Cows give milk.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-a-q04",
    prompt: "Which animal can fly?",
    options: [
      { id: "a", text: "elephant" },
      { id: "b", text: "sparrow" },
      { id: "c", text: "crocodile" },
      { id: "d", text: "goat" }
    ],
    answerId: "b",
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
      { id: "a", text: "wild animal" },
      { id: "b", text: "insect only" },
      { id: "c", text: "fish" },
      { id: "d", text: "bird" }
    ],
    answerId: "a",
    explanation: "A lion is a wild animal.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-a-q07",
    prompt: "Which animal hops?",
    options: [
      { id: "a", text: "fish" },
      { id: "b", text: "rabbit" },
      { id: "c", text: "snail" },
      { id: "d", text: "turtle" }
    ],
    answerId: "b",
    explanation: "Rabbits hop.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-a-q08",
    prompt: "Birds have\u2026",
    options: [
      { id: "a", text: "wings" },
      { id: "b", text: "fins only" },
      { id: "c", text: "wheels" },
      { id: "d", text: "roots" }
    ],
    answerId: "a",
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
      { id: "a", text: "honey" },
      { id: "b", text: "milk" },
      { id: "c", text: "wool" },
      { id: "d", text: "bread" }
    ],
    answerId: "a",
    explanation: "Bees make honey.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-a-q12",
    prompt: "An elephant has a long\u2026",
    options: [
      { id: "a", text: "trunk" },
      { id: "b", text: "fin" },
      { id: "c", text: "beak only" },
      { id: "d", text: "shell" }
    ],
    answerId: "a",
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
      { id: "a", text: "wool" },
      { id: "b", text: "honey" },
      { id: "c", text: "eggs only" },
      { id: "d", text: "silk" }
    ],
    answerId: "a",
    explanation: "Sheep give wool.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-a-q15",
    prompt: "A frog can live\u2026",
    options: [
      { id: "a", text: "near water and land" },
      { id: "b", text: "only in fire" },
      { id: "c", text: "only in space" },
      { id: "d", text: "only in ice cream" }
    ],
    answerId: "a",
    explanation: "Frogs like water and land.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-a-q16",
    prompt: "Which is NOT an animal?",
    options: [
      { id: "a", text: "tiger" },
      { id: "b", text: "table" },
      { id: "c", text: "deer" },
      { id: "d", text: "monkey" }
    ],
    answerId: "b",
    explanation: "A table is not an animal.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g1-sci-animals-b-q01",
    prompt: "Which animal says quack?",
    options: [
      { id: "a", text: "cat" },
      { id: "b", text: "duck" },
      { id: "c", text: "cow" },
      { id: "d", text: "horse" }
    ],
    answerId: "b",
    explanation: "A duck says quack.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-b-q02",
    prompt: "Where do monkeys like to live?",
    options: [
      { id: "a", text: "in trees" },
      { id: "b", text: "under the sea only" },
      { id: "c", text: "in fire" },
      { id: "d", text: "in cups" }
    ],
    answerId: "a",
    explanation: "Many monkeys live in trees.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-b-q03",
    prompt: "A horse can\u2026",
    options: [
      { id: "a", text: "run fast" },
      { id: "b", text: "swim like a fish always" },
      { id: "c", text: "fly with wings" },
      { id: "d", text: "lay eggs like a hen" }
    ],
    answerId: "a",
    explanation: "Horses can run fast.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-b-q04",
    prompt: "Which animal has a hard shell?",
    options: [
      { id: "a", text: "cat" },
      { id: "b", text: "tortoise" },
      { id: "c", text: "dog" },
      { id: "d", text: "cow" }
    ],
    answerId: "b",
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
      { id: "a", text: "stripes" },
      { id: "b", text: "wheels" },
      { id: "c", text: "feathers only" },
      { id: "d", text: "fins only" }
    ],
    answerId: "a",
    explanation: "Tigers have stripes.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-b-q07",
    prompt: "Which animal swims?",
    options: [
      { id: "a", text: "fish" },
      { id: "b", text: "hen" },
      { id: "c", text: "camel" },
      { id: "d", text: "sparrow" }
    ],
    answerId: "a",
    explanation: "Fish swim.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-b-q08",
    prompt: "Pets need\u2026",
    options: [
      { id: "a", text: "care and food" },
      { id: "b", text: "no care" },
      { id: "c", text: "only stones" },
      { id: "d", text: "only screens" }
    ],
    answerId: "a",
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
      { id: "a", text: "kangaroo" },
      { id: "b", text: "fish" },
      { id: "c", text: "eagle" },
      { id: "d", text: "ant" }
    ],
    answerId: "a",
    explanation: "A kangaroo has a pouch.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-b-q11",
    prompt: "Snakes\u2026",
    options: [
      { id: "a", text: "have no legs" },
      { id: "b", text: "have six legs" },
      { id: "c", text: "have wings" },
      { id: "d", text: "have fins like sharks always" }
    ],
    answerId: "a",
    explanation: "Snakes have no legs.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-b-q12",
    prompt: "A peacock is a\u2026",
    options: [
      { id: "a", text: "bird" },
      { id: "b", text: "fish" },
      { id: "c", text: "insect only" },
      { id: "d", text: "mammal only" }
    ],
    answerId: "a",
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
      { id: "a", text: "drink milk" },
      { id: "b", text: "bark" },
      { id: "c", text: "moo" },
      { id: "d", text: "quack" }
    ],
    answerId: "a",
    explanation: "Cats often drink milk.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-b-q15",
    prompt: "Wild animals live\u2026",
    options: [
      { id: "a", text: "in forests / wild places" },
      { id: "b", text: "only in school bags" },
      { id: "c", text: "only in fridges" },
      { id: "d", text: "only in books" }
    ],
    answerId: "a",
    explanation: "Wild animals live in wild places.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-b-q16",
    prompt: "Which is an insect?",
    options: [
      { id: "a", text: "butterfly" },
      { id: "b", text: "cow" },
      { id: "c", text: "elephant" },
      { id: "d", text: "whale" }
    ],
    answerId: "a",
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
