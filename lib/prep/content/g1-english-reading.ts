import type { ChapterDef, PrepQuestion } from "../types";

/** Reading Pictures - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g1-eng-reading-a-q01",
    prompt: "Picture: a smiling sun. What is it?",
    options: [
      { id: "a", text: "sun" },
      { id: "b", text: "moon" },
      { id: "c", text: "star only" },
      { id: "d", text: "cloud" }
    ],
    answerId: "a",
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
      { id: "b", text: "dog" },
      { id: "c", text: "bird" },
      { id: "d", text: "cow" }
    ],
    answerId: "c",
    explanation: "Birds can fly.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-a-q04",
    prompt: "Read: \"I like mango.\" What does the child like?",
    options: [
      { id: "a", text: "apple" },
      { id: "b", text: "milk" },
      { id: "c", text: "rice" },
      { id: "d", text: "mango" }
    ],
    answerId: "d",
    explanation: "The word mango is in the sentence.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-a-q05",
    prompt: "At night we often see the\u2026",
    options: [
      { id: "a", text: "moon" },
      { id: "b", text: "sun" },
      { id: "c", text: "school bus" },
      { id: "d", text: "rainbow" }
    ],
    answerId: "a",
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
      { id: "b", text: "hen" },
      { id: "c", text: "fish" },
      { id: "d", text: "goat" }
    ],
    answerId: "c",
    explanation: "Fish live in water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-a-q08",
    prompt: "Picture clue: umbrella. When do we use it?",
    options: [
      { id: "a", text: "to eat" },
      { id: "b", text: "to sleep" },
      { id: "c", text: "to swim" },
      { id: "d", text: "in the rain" }
    ],
    answerId: "d",
    explanation: "We use an umbrella in the rain.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-a-q09",
    prompt: "Read: \"Tom runs fast.\" What does Tom do?",
    options: [
      { id: "a", text: "runs" },
      { id: "b", text: "sleeps" },
      { id: "c", text: "eats" },
      { id: "d", text: "sits" }
    ],
    answerId: "a",
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
      { id: "b", text: "dog" },
      { id: "c", text: "hen" },
      { id: "d", text: "cat" }
    ],
    answerId: "c",
    explanation: "The hen lays the egg.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-a-q12",
    prompt: "Which is a place to sleep?",
    options: [
      { id: "a", text: "spoon" },
      { id: "b", text: "ball" },
      { id: "c", text: "pen" },
      { id: "d", text: "bed" }
    ],
    answerId: "d",
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
      { id: "a", text: "cars" },
      { id: "b", text: "nests" },
      { id: "c", text: "cups" },
      { id: "d", text: "shoes" }
    ],
    answerId: "b",
    explanation: "The sentence says nests.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-a-q15",
    prompt: "We write with a\u2026",
    options: [
      { id: "a", text: "shoe" },
      { id: "b", text: "plate" },
      { id: "c", text: "pencil" },
      { id: "d", text: "chair" }
    ],
    answerId: "c",
    explanation: "We write with a pencil.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-a-q16",
    prompt: "Read: \"It is hot in summer.\" How is summer?",
    options: [
      { id: "a", text: "cold" },
      { id: "b", text: "dark always" },
      { id: "c", text: "wet only" },
      { id: "d", text: "hot" }
    ],
    answerId: "d",
    explanation: "The sentence says hot.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g1-eng-reading-b-q01",
    prompt: "Picture: a green tree. What is it?",
    options: [
      { id: "a", text: "tree" },
      { id: "b", text: "car" },
      { id: "c", text: "book" },
      { id: "d", text: "fish" }
    ],
    answerId: "a",
    explanation: "A green tree picture shows a tree.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-b-q02",
    prompt: "Read: \"The dog sits by the door.\" Where is the dog?",
    options: [
      { id: "a", text: "in the sky" },
      { id: "b", text: "by the door" },
      { id: "c", text: "on the roof only" },
      { id: "d", text: "in a cup" }
    ],
    answerId: "b",
    explanation: "By the door \u2014 that is the place.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-b-q03",
    prompt: "Who says bow-wow?",
    options: [
      { id: "a", text: "cat" },
      { id: "b", text: "cow" },
      { id: "c", text: "dog" },
      { id: "d", text: "duck" }
    ],
    answerId: "c",
    explanation: "A dog says bow-wow.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-b-q04",
    prompt: "Read: \"I see a bus.\" What does the child see?",
    options: [
      { id: "a", text: "train" },
      { id: "b", text: "plane" },
      { id: "c", text: "boat" },
      { id: "d", text: "bus" }
    ],
    answerId: "d",
    explanation: "The word is bus.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-b-q05",
    prompt: "In the morning we see the\u2026",
    options: [
      { id: "a", text: "sun" },
      { id: "b", text: "moon only" },
      { id: "c", text: "stars only" },
      { id: "d", text: "owl" }
    ],
    answerId: "a",
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
      { id: "b", text: "eagle" },
      { id: "c", text: "cow" },
      { id: "d", text: "frog" }
    ],
    answerId: "c",
    explanation: "A cow gives milk.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-b-q08",
    prompt: "Picture clue: toothbrush. When do we use it?",
    options: [
      { id: "a", text: "to cut paper" },
      { id: "b", text: "to kick a ball" },
      { id: "c", text: "to cook rice" },
      { id: "d", text: "to brush teeth" }
    ],
    answerId: "d",
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
      { id: "a", text: "shoe" },
      { id: "b", text: "spoon" },
      { id: "c", text: "broom" },
      { id: "d", text: "bell" }
    ],
    answerId: "b",
    explanation: "We eat with a spoon.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-b-q11",
    prompt: "Read: \"The frog jumps.\" Who jumps?",
    options: [
      { id: "a", text: "rock" },
      { id: "b", text: "cup" },
      { id: "c", text: "frog" },
      { id: "d", text: "mat" }
    ],
    answerId: "c",
    explanation: "The frog jumps.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-b-q12",
    prompt: "Which is a place to sit?",
    options: [
      { id: "a", text: "cloud" },
      { id: "b", text: "flame" },
      { id: "c", text: "needle" },
      { id: "d", text: "chair" }
    ],
    answerId: "d",
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
      { id: "a", text: "in fire" },
      { id: "b", text: "in water" },
      { id: "c", text: "in air only" },
      { id: "d", text: "on roads" }
    ],
    answerId: "b",
    explanation: "In water \u2014 from the sentence.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-b-q15",
    prompt: "We read a\u2026",
    options: [
      { id: "a", text: "brick" },
      { id: "b", text: "broom" },
      { id: "c", text: "book" },
      { id: "d", text: "boat only" }
    ],
    answerId: "c",
    explanation: "We read a book.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-reading-b-q16",
    prompt: "Read: \"Winter feels cold.\" How does winter feel?",
    options: [
      { id: "a", text: "hot" },
      { id: "b", text: "sweet" },
      { id: "c", text: "loud" },
      { id: "d", text: "cold" }
    ],
    answerId: "d",
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
