import type { ChapterDef, PrepQuestion } from "../types";

/** Reading Pictures - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g1-eng-reading-a-q01",
    prompt: "Picture: a smiling sun. What is it?",
    options: [
      { id: "a", text: "moon" },
      { id: "b", text: "sun" },
      { id: "c", text: "star only" },
      { id: "d", text: "cloud" }
    ],
    answerId: "b",
    explanation: "A smiling sun picture shows the sun.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-a-q02",
    prompt: "Read: \"The cat is on the mat.\" Where is the cat?",
    options: [
      { id: "a", text: "in a box" },
      { id: "b", text: "on the mat" },
      { id: "c", text: "under a car" },
      { id: "d", text: "in water" }
    ],
    answerId: "b",
    explanation: "The sentence says on the mat.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-a-q03",
    prompt: "Who can fly?",
    options: [
      { id: "a", text: "fish" },
      { id: "b", text: "bird" },
      { id: "c", text: "dog" },
      { id: "d", text: "cow" }
    ],
    answerId: "b",
    explanation: "Birds can fly.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-a-q04",
    prompt: "Read: \"I like mango.\" What does the child like?",
    options: [
      { id: "a", text: "apple" },
      { id: "b", text: "mango" },
      { id: "c", text: "milk" },
      { id: "d", text: "rice" }
    ],
    answerId: "b",
    explanation: "The word mango is in the sentence.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-a-q05",
    prompt: "At night we often see the\u2026",
    options: [
      { id: "a", text: "sun" },
      { id: "b", text: "moon" },
      { id: "c", text: "school bus" },
      { id: "d", text: "rainbow" }
    ],
    answerId: "b",
    explanation: "At night we see the moon.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-a-q06",
    prompt: "Read: \"Rani has a red bag.\" What colour is the bag?",
    options: [
      { id: "a", text: "blue" },
      { id: "b", text: "red" },
      { id: "c", text: "green" },
      { id: "d", text: "black" }
    ],
    answerId: "b",
    explanation: "The sentence says red bag.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-a-q07",
    prompt: "Which animal lives in water?",
    options: [
      { id: "a", text: "cat" },
      { id: "b", text: "fish" },
      { id: "c", text: "hen" },
      { id: "d", text: "goat" }
    ],
    answerId: "b",
    explanation: "Fish live in water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-a-q08",
    prompt: "Picture clue: umbrella. When do we use it?",
    options: [
      { id: "a", text: "in the rain" },
      { id: "b", text: "to eat" },
      { id: "c", text: "to sleep" },
      { id: "d", text: "to swim" }
    ],
    answerId: "a",
    explanation: "We use an umbrella in the rain.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-a-q09",
    prompt: "Read: \"Tom runs fast.\" What does Tom do?",
    options: [
      { id: "a", text: "sleeps" },
      { id: "b", text: "runs" },
      { id: "c", text: "eats" },
      { id: "d", text: "sits" }
    ],
    answerId: "b",
    explanation: "Tom runs \u2014 that is the action.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-a-q10",
    prompt: "We drink\u2026",
    options: [
      { id: "a", text: "stones" },
      { id: "b", text: "water" },
      { id: "c", text: "sand" },
      { id: "d", text: "smoke" }
    ],
    answerId: "b",
    explanation: "We drink water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-a-q11",
    prompt: "Read: \"The hen lays an egg.\" Who lays the egg?",
    options: [
      { id: "a", text: "cow" },
      { id: "b", text: "hen" },
      { id: "c", text: "dog" },
      { id: "d", text: "cat" }
    ],
    answerId: "b",
    explanation: "The hen lays the egg.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-a-q12",
    prompt: "Which is a place to sleep?",
    options: [
      { id: "a", text: "bed" },
      { id: "b", text: "spoon" },
      { id: "c", text: "ball" },
      { id: "d", text: "pen" }
    ],
    answerId: "a",
    explanation: "We sleep on a bed.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-a-q13",
    prompt: "Picture: school bag. Where do you take it?",
    options: [
      { id: "a", text: "to school" },
      { id: "b", text: "to the moon" },
      { id: "c", text: "into the sea" },
      { id: "d", text: "under soil" }
    ],
    answerId: "a",
    explanation: "A school bag goes to school.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-a-q14",
    prompt: "Read: \"Birds live in nests.\" Where do birds live?",
    options: [
      { id: "a", text: "nests" },
      { id: "b", text: "cars" },
      { id: "c", text: "cups" },
      { id: "d", text: "shoes" }
    ],
    answerId: "a",
    explanation: "The sentence says nests.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-a-q15",
    prompt: "We write with a\u2026",
    options: [
      { id: "a", text: "shoe" },
      { id: "b", text: "pencil" },
      { id: "c", text: "plate" },
      { id: "d", text: "chair" }
    ],
    answerId: "b",
    explanation: "We write with a pencil.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-a-q16",
    prompt: "Read: \"It is hot in summer.\" How is summer?",
    options: [
      { id: "a", text: "cold" },
      { id: "b", text: "hot" },
      { id: "c", text: "dark always" },
      { id: "d", text: "wet only" }
    ],
    answerId: "b",
    explanation: "The sentence says hot.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g1-eng-reading-b-q01",
    prompt: "Picture: a green tree. What is it?",
    options: [
      { id: "a", text: "car" },
      { id: "b", text: "tree" },
      { id: "c", text: "book" },
      { id: "d", text: "fish" }
    ],
    answerId: "b",
    explanation: "A green tree picture shows a tree.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-b-q02",
    prompt: "Read: \"The dog sits by the door.\" Where is the dog?",
    options: [
      { id: "a", text: "by the door" },
      { id: "b", text: "in the sky" },
      { id: "c", text: "on the roof only" },
      { id: "d", text: "in a cup" }
    ],
    answerId: "a",
    explanation: "By the door \u2014 that is the place.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-b-q03",
    prompt: "Who says bow-wow?",
    options: [
      { id: "a", text: "cat" },
      { id: "b", text: "dog" },
      { id: "c", text: "cow" },
      { id: "d", text: "duck" }
    ],
    answerId: "b",
    explanation: "A dog says bow-wow.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-b-q04",
    prompt: "Read: \"I see a bus.\" What does the child see?",
    options: [
      { id: "a", text: "train" },
      { id: "b", text: "bus" },
      { id: "c", text: "plane" },
      { id: "d", text: "boat" }
    ],
    answerId: "b",
    explanation: "The word is bus.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-b-q05",
    prompt: "In the morning we see the\u2026",
    options: [
      { id: "a", text: "moon only" },
      { id: "b", text: "sun" },
      { id: "c", text: "stars only" },
      { id: "d", text: "owl" }
    ],
    answerId: "b",
    explanation: "In the morning we see the sun.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-b-q06",
    prompt: "Read: \"Leela has a blue frock.\" What colour?",
    options: [
      { id: "a", text: "red" },
      { id: "b", text: "blue" },
      { id: "c", text: "yellow" },
      { id: "d", text: "pink" }
    ],
    answerId: "b",
    explanation: "Blue frock \u2014 colour is blue.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-b-q07",
    prompt: "Which animal gives us milk?",
    options: [
      { id: "a", text: "tiger" },
      { id: "b", text: "cow" },
      { id: "c", text: "eagle" },
      { id: "d", text: "frog" }
    ],
    answerId: "b",
    explanation: "A cow gives milk.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-b-q08",
    prompt: "Picture clue: toothbrush. When do we use it?",
    options: [
      { id: "a", text: "to brush teeth" },
      { id: "b", text: "to cut paper" },
      { id: "c", text: "to kick a ball" },
      { id: "d", text: "to cook rice" }
    ],
    answerId: "a",
    explanation: "A toothbrush cleans teeth.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-b-q09",
    prompt: "Read: \"Mira hops.\" What does Mira do?",
    options: [
      { id: "a", text: "hops" },
      { id: "b", text: "flies a plane" },
      { id: "c", text: "drives" },
      { id: "d", text: "swims in space" }
    ],
    answerId: "a",
    explanation: "Mira hops \u2014 hopping is the action.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-b-q10",
    prompt: "We eat with a\u2026",
    options: [
      { id: "a", text: "spoon" },
      { id: "b", text: "shoe" },
      { id: "c", text: "broom" },
      { id: "d", text: "bell" }
    ],
    answerId: "a",
    explanation: "We eat with a spoon.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-b-q11",
    prompt: "Read: \"The frog jumps.\" Who jumps?",
    options: [
      { id: "a", text: "frog" },
      { id: "b", text: "rock" },
      { id: "c", text: "cup" },
      { id: "d", text: "mat" }
    ],
    answerId: "a",
    explanation: "The frog jumps.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-b-q12",
    prompt: "Which is a place to sit?",
    options: [
      { id: "a", text: "chair" },
      { id: "b", text: "cloud" },
      { id: "c", text: "flame" },
      { id: "d", text: "needle" }
    ],
    answerId: "a",
    explanation: "We sit on a chair.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-b-q13",
    prompt: "Picture: rain drops. What is falling?",
    options: [
      { id: "a", text: "rain" },
      { id: "b", text: "sand" },
      { id: "c", text: "stones" },
      { id: "d", text: "leaves only" }
    ],
    answerId: "a",
    explanation: "Rain drops mean rain is falling.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-b-q14",
    prompt: "Read: \"Fish swim in water.\" Where do fish swim?",
    options: [
      { id: "a", text: "in water" },
      { id: "b", text: "in fire" },
      { id: "c", text: "in air only" },
      { id: "d", text: "on roads" }
    ],
    answerId: "a",
    explanation: "In water \u2014 from the sentence.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-b-q15",
    prompt: "We read a\u2026",
    options: [
      { id: "a", text: "book" },
      { id: "b", text: "brick" },
      { id: "c", text: "broom" },
      { id: "d", text: "boat only" }
    ],
    answerId: "a",
    explanation: "We read a book.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-b-q16",
    prompt: "Read: \"Winter feels cold.\" How does winter feel?",
    options: [
      { id: "a", text: "hot" },
      { id: "b", text: "cold" },
      { id: "c", text: "sweet" },
      { id: "d", text: "loud" }
    ],
    answerId: "b",
    explanation: "The sentence says cold.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83d\uddbc\ufe0f",
    title: "Reading Pictures",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "sentence",
    speak: "Pictures and words tell stories.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "sentence",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Look", reveal: "See the picture", emoji: "\ud83d\udc40" },
      { label: "Read", reveal: "Find key words", emoji: "\ud83d\udd0e" },
      { label: "Answer", reveal: "Use what you saw", emoji: "\u2705" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Read: \"The cat sits.\" What sits?",
    options: [
        { id: "a", text: "dog" },
        { id: "b", text: "cat" },
        { id: "c", text: "bus" },
        { id: "d", text: "cup" }
    ],
    answerId: "b",
    why: "The cat sits.",
    visual: "sentence",
    speak: "Read: \"The cat sits.\" What sits?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Use picture clues", "Find key words", "Sets ready \u2014 16 each"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g1EnglishReading: ChapterDef = {
  id: "reading-pics",
  title: "Reading Pictures",
  emoji: "\ud83d\uddbc\ufe0f",
  blurb: "Picture clues & short lines",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "comprehension",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "comprehension",
      questions: SET_B,
    },
  ],
  paperTopics: ["comprehension", "vocabulary"],
};

export const g1EnglishReadingQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
