import type { ChapterDef, PrepQuestion } from "../types";

/** Animals - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g1-sci-animals-a-q01",
    prompt: "Which animal says meow?",
    options: [
      { id: "a", text: "cat" },
      { id: "b", text: "dog" },
      { id: "c", text: "cow" },
      { id: "d", text: "frog" }
    ],
    answerId: "a",
    explanation: "A cat says meow. A dog is tempting because it is also a pet, but a dog barks: woof!",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-a-q02",
    prompt: "Fish live in\u2026",
    options: [
      { id: "a", text: "trees" },
      { id: "b", text: "water" },
      { id: "c", text: "sand" },
      { id: "d", text: "nests" }
    ],
    answerId: "b",
    explanation: "Fish live in water. Nests are tempting because they are animal homes, but nests are for birds; fish need water to breathe.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-a-q03",
    prompt: "A cow gives us\u2026",
    options: [
      { id: "a", text: "wool" },
      { id: "b", text: "honey" },
      { id: "c", text: "milk" },
      { id: "d", text: "silk" }
    ],
    answerId: "c",
    explanation: "A cow gives us milk. Wool is tempting because it also comes from a farm animal, but wool comes from sheep.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-a-q04",
    prompt: "Which animal can fly?",
    options: [
      { id: "a", text: "elephant" },
      { id: "b", text: "crocodile" },
      { id: "c", text: "goat" },
      { id: "d", text: "sparrow" }
    ],
    answerId: "d",
    explanation: "A sparrow is a bird and can fly. A crocodile is tempting because it moves fast, but it walks and swims; it has no wings.",
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
    explanation: "Dogs are often kept as pets at home. Plants are kept at home too, but a dog is an animal, not a plant.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-a-q06",
    prompt: "A lion is a\u2026",
    options: [
      { id: "a", text: "pet animal" },
      { id: "b", text: "wild animal" },
      { id: "c", text: "fish" },
      { id: "d", text: "bird" }
    ],
    answerId: "b",
    explanation: "A lion is a wild animal that lives in forests and grasslands. 'Pet animal' is tempting because a lion looks like a big cat, but it is far too dangerous to keep at home.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-a-q07",
    prompt: "Which animal hops?",
    options: [
      { id: "a", text: "fish" },
      { id: "b", text: "snail" },
      { id: "c", text: "rabbit" },
      { id: "d", text: "turtle" }
    ],
    answerId: "c",
    explanation: "A rabbit hops on its strong back legs. A turtle is tempting because it walks on land too, but it crawls slowly; it does not hop.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-a-q08",
    prompt: "Birds have\u2026",
    options: [
      { id: "a", text: "fins" },
      { id: "b", text: "four legs" },
      { id: "c", text: "trunks" },
      { id: "d", text: "wings" }
    ],
    answerId: "d",
    explanation: "Birds have wings to fly. Four legs is tempting because many animals have them, but birds stand on two legs.",
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
    explanation: "A hen lays eggs. Milk is tempting because hens are farm animals like cows, but milk comes from cows and goats.",
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
    explanation: "A dog lives on land. A dolphin is tempting because it is friendly and clever like a dog, but it lives in the sea.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-a-q11",
    prompt: "Bees make\u2026",
    options: [
      { id: "a", text: "milk" },
      { id: "b", text: "wool" },
      { id: "c", text: "honey" },
      { id: "d", text: "bread" }
    ],
    answerId: "c",
    explanation: "Bees make honey from flower nectar. Milk is tempting because it is a food we get from animals, but milk comes from cows.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-a-q12",
    prompt: "An elephant has a long\u2026",
    options: [
      { id: "a", text: "fin" },
      { id: "b", text: "beak" },
      { id: "c", text: "shell" },
      { id: "d", text: "trunk" }
    ],
    answerId: "d",
    explanation: "An elephant has a long trunk. A beak is tempting because it is also a long nose-like part, but beaks belong to birds.",
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
    explanation: "An ant is tiny. A giraffe is tempting because it has a thin neck, but a giraffe is one of the tallest animals.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-a-q14",
    prompt: "Sheep give us\u2026",
    options: [
      { id: "a", text: "honey" },
      { id: "b", text: "wool" },
      { id: "c", text: "eggs" },
      { id: "d", text: "silk" }
    ],
    answerId: "b",
    explanation: "Sheep give us wool. Silk is tempting because it is also used to make cloth, but silk comes from silkworms.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-a-q15",
    prompt: "A frog can live\u2026",
    options: [
      { id: "a", text: "only in trees" },
      { id: "b", text: "only in deserts" },
      { id: "c", text: "near water and land" },
      { id: "d", text: "only in the sea" }
    ],
    answerId: "c",
    explanation: "A frog can live both near water and on land. 'Only in the sea' is tempting because frogs swim, but frogs live in ponds and on land, not in salty sea water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-a-q16",
    prompt: "Which is NOT an animal?",
    options: [
      { id: "a", text: "tiger" },
      { id: "b", text: "deer" },
      { id: "c", text: "monkey" },
      { id: "d", text: "table" }
    ],
    answerId: "d",
    explanation: "A table is not an animal; it is furniture made by people. A table has four legs like a deer, but it is not alive.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g1-sci-animals-b-q01",
    prompt: "Which animal says quack?",
    options: [
      { id: "a", text: "duck" },
      { id: "b", text: "cat" },
      { id: "c", text: "cow" },
      { id: "d", text: "horse" }
    ],
    answerId: "a",
    explanation: "A duck says quack. A horse is tempting because it is also a farm animal, but a horse neighs.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-b-q02",
    prompt: "Where do monkeys like to live?",
    options: [
      { id: "a", text: "under the sea" },
      { id: "b", text: "in trees" },
      { id: "c", text: "in deserts" },
      { id: "d", text: "in ponds" }
    ],
    answerId: "b",
    explanation: "Many monkeys live in trees, jumping from branch to branch. Deserts are tempting because some animals live there, but monkeys need trees for food and shelter.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-b-q03",
    prompt: "A horse can\u2026",
    options: [
      { id: "a", text: "swim like a fish" },
      { id: "b", text: "fly with wings" },
      { id: "c", text: "run fast" },
      { id: "d", text: "lay eggs like a hen" }
    ],
    answerId: "c",
    explanation: "A horse can run fast. 'Lay eggs like a hen' is tempting because both are farm animals, but horses give birth to foals.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-b-q04",
    prompt: "Which animal has a hard shell?",
    options: [
      { id: "a", text: "cat" },
      { id: "b", text: "dog" },
      { id: "c", text: "cow" },
      { id: "d", text: "tortoise" }
    ],
    answerId: "d",
    explanation: "A tortoise has a hard shell on its back. A cow is tempting because it has hard hooves and horns, but it has no shell.",
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
    explanation: "Cows eat grass. Plastic is tempting because stray cows sometimes chew bags, but plastic makes them very sick; it is not their food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-b-q06",
    prompt: "A tiger has\u2026",
    options: [
      { id: "a", text: "a trunk" },
      { id: "b", text: "stripes" },
      { id: "c", text: "feathers" },
      { id: "d", text: "spots" }
    ],
    answerId: "b",
    explanation: "A tiger has stripes. Spots are tempting because a leopard looks like a tiger, but a leopard has spots and a tiger has stripes.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-b-q07",
    prompt: "Which animal swims?",
    options: [
      { id: "a", text: "hen" },
      { id: "b", text: "camel" },
      { id: "c", text: "fish" },
      { id: "d", text: "sparrow" }
    ],
    answerId: "c",
    explanation: "A fish swims. A hen is tempting because ducks are birds that swim, but a hen stays on land.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-b-q08",
    prompt: "Pets need\u2026",
    options: [
      { id: "a", text: "no care" },
      { id: "b", text: "only water" },
      { id: "c", text: "only toys" },
      { id: "d", text: "care and food" }
    ],
    answerId: "d",
    explanation: "Pets need care and food. 'Only water' is tempting because water is important, but pets also need food and love.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-b-q09",
    prompt: "A goat gives\u2026",
    options: [
      { id: "a", text: "milk" },
      { id: "b", text: "honey" },
      { id: "c", text: "silk" },
      { id: "d", text: "eggs" }
    ],
    answerId: "a",
    explanation: "A goat gives milk. Eggs are tempting because goats are farm animals like hens, but only birds such as hens lay eggs.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-b-q10",
    prompt: "Which animal has a pouch?",
    options: [
      { id: "a", text: "fish" },
      { id: "b", text: "kangaroo" },
      { id: "c", text: "eagle" },
      { id: "d", text: "ant" }
    ],
    answerId: "b",
    explanation: "A kangaroo carries its baby in a pouch. An eagle is tempting because it also carries food for its young, but it uses its claws, not a pouch.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-b-q11",
    prompt: "Snakes\u2026",
    options: [
      { id: "a", text: "have six legs" },
      { id: "b", text: "have wings" },
      { id: "c", text: "have no legs" },
      { id: "d", text: "have four legs" }
    ],
    answerId: "c",
    explanation: "Snakes have no legs; they slide on their bodies. 'Four legs' is tempting because a lizard looks like a snake, but lizards have legs and snakes do not.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-b-q12",
    prompt: "A peacock is a\u2026",
    options: [
      { id: "a", text: "fish" },
      { id: "b", text: "insect" },
      { id: "c", text: "mammal" },
      { id: "d", text: "bird" }
    ],
    answerId: "d",
    explanation: "A peacock has feathers and lays eggs, so it is a bird. Insect is tempting because peacocks are colourful like butterflies, but insects are tiny with six legs.",
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
    explanation: "A bullock, or ox, is strong and is used to pull carts. A sparrow is tempting because birds carry twigs, but it is far too small to pull a cart.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-b-q14",
    prompt: "Cats like to\u2026",
    options: [
      { id: "a", text: "bark" },
      { id: "b", text: "drink milk" },
      { id: "c", text: "moo" },
      { id: "d", text: "quack" }
    ],
    answerId: "b",
    explanation: "Cats like to drink milk. Bark is tempting because dogs are pets like cats, but barking is what dogs do.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-sci-animals-b-q15",
    prompt: "Wild animals live\u2026",
    options: [
      { id: "a", text: "only in zoos" },
      { id: "b", text: "only in houses" },
      { id: "c", text: "in forests / wild places" },
      { id: "d", text: "only on farms" }
    ],
    answerId: "c",
    explanation: "Wild animals live in forests and other wild places. 'Only in zoos' is tempting because we see them there, but most wild animals live in the wild.",
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
    explanation: "A butterfly is an insect with six legs. A whale is tempting because it is an animal too, but it is a huge sea mammal, not an insect.",
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
