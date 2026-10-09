import type { ChapterDef, PrepQuestion } from "../types";

/** Letters & Words - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g1-eng-letters-a-q01",
    prompt: "Which letter comes after \"B\"?",
    options: [
      { id: "a", text: "A" },
      { id: "b", text: "C" },
      { id: "c", text: "D" },
      { id: "d", text: "E" }
    ],
    answerId: "b",
    explanation: "A, B, C \u2014 C comes after B.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-a-q02",
    prompt: "Which word starts with M?",
    options: [
      { id: "a", text: "sun" },
      { id: "b", text: "moon" },
      { id: "c", text: "cat" },
      { id: "d", text: "dog" }
    ],
    answerId: "b",
    explanation: "Moon starts with M.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-a-q03",
    prompt: "Find the word: \"c\" + \"at\" =",
    options: [
      { id: "a", text: "bat" },
      { id: "b", text: "cat" },
      { id: "c", text: "hat" },
      { id: "d", text: "mat" }
    ],
    answerId: "b",
    explanation: "c + at makes cat.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-a-q04",
    prompt: "Which is a letter?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "A" },
      { id: "c", text: "!" },
      { id: "d", text: "10" }
    ],
    answerId: "b",
    explanation: "A is a letter of the alphabet.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-a-q05",
    prompt: "How many letters are in the word SUN?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "3" },
      { id: "c", text: "4" },
      { id: "d", text: "1" }
    ],
    answerId: "b",
    explanation: "S-U-N has 3 letters.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-a-q06",
    prompt: "Which word ends with \"g\"?",
    options: [
      { id: "a", text: "bag" },
      { id: "b", text: "bat" },
      { id: "c", text: "bus" },
      { id: "d", text: "bee" }
    ],
    answerId: "a",
    explanation: "Bag ends with g.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-a-q07",
    prompt: "Capital letter for a is\u2026",
    options: [
      { id: "a", text: "A" },
      { id: "b", text: "B" },
      { id: "c", text: "a" },
      { id: "d", text: "E" }
    ],
    answerId: "a",
    explanation: "The capital of a is A.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-a-q08",
    prompt: "Which word means a pet that meows?",
    options: [
      { id: "a", text: "dog" },
      { id: "b", text: "cat" },
      { id: "c", text: "cow" },
      { id: "d", text: "hen" }
    ],
    answerId: "b",
    explanation: "A cat meows.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-a-q09",
    prompt: "Rhymes with \"hat\"?",
    options: [
      { id: "a", text: "hot" },
      { id: "b", text: "sit" },
      { id: "c", text: "cat" },
      { id: "d", text: "cup" }
    ],
    answerId: "c",
    explanation: "Cat rhymes with hat.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-a-q10",
    prompt: "First letter of INDIA is\u2026",
    options: [
      { id: "a", text: "N" },
      { id: "b", text: "I" },
      { id: "c", text: "D" },
      { id: "d", text: "A" }
    ],
    answerId: "b",
    explanation: "INDIA starts with I.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-a-q11",
    prompt: "Which is a word?",
    options: [
      { id: "a", text: "xyzq" },
      { id: "b", text: "book" },
      { id: "c", text: "1234" },
      { id: "d", text: "##" }
    ],
    answerId: "b",
    explanation: "Book is a real word.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-a-q12",
    prompt: "Ball starts with which sound?",
    options: [
      { id: "a", text: "b" },
      { id: "b", text: "c" },
      { id: "c", text: "d" },
      { id: "d", text: "s" }
    ],
    answerId: "a",
    explanation: "Ball starts with /b/.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-a-q13",
    prompt: "How many vowels in AEIOU list?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "4" },
      { id: "c", text: "5" },
      { id: "d", text: "6" }
    ],
    answerId: "c",
    explanation: "A E I O U \u2014 five vowels.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-a-q14",
    prompt: "Small letter for \"T\" is\u2026",
    options: [
      { id: "a", text: "t" },
      { id: "b", text: "T" },
      { id: "c", text: "s" },
      { id: "d", text: "l" }
    ],
    answerId: "a",
    explanation: "Small form of T is t.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-a-q15",
    prompt: "Which word names a colour?",
    options: [
      { id: "a", text: "run" },
      { id: "b", text: "red" },
      { id: "c", text: "cup" },
      { id: "d", text: "sit" }
    ],
    answerId: "b",
    explanation: "Red is a colour.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-a-q16",
    prompt: "Join: bl + ue =",
    options: [
      { id: "a", text: "blue" },
      { id: "b", text: "blow" },
      { id: "c", text: "glue" },
      { id: "d", text: "clue" }
    ],
    answerId: "a",
    explanation: "bl + ue = blue.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g1-eng-letters-b-q01",
    prompt: "Which letter comes before \"D\"?",
    options: [
      { id: "a", text: "B" },
      { id: "b", text: "C" },
      { id: "c", text: "E" },
      { id: "d", text: "F" }
    ],
    answerId: "b",
    explanation: "C comes before D.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-b-q02",
    prompt: "Which word starts with S?",
    options: [
      { id: "a", text: "moon" },
      { id: "b", text: "sun" },
      { id: "c", text: "apple" },
      { id: "d", text: "egg" }
    ],
    answerId: "b",
    explanation: "Sun starts with S.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-b-q03",
    prompt: "Find the word: \"p\" + \"en\" =",
    options: [
      { id: "a", text: "pan" },
      { id: "b", text: "pen" },
      { id: "c", text: "pin" },
      { id: "d", text: "pun" }
    ],
    answerId: "b",
    explanation: "p + en = pen.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-b-q04",
    prompt: "How many letters in DOG?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "3" },
      { id: "c", text: "4" },
      { id: "d", text: "5" }
    ],
    answerId: "b",
    explanation: "D-O-G has 3 letters.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-b-q05",
    prompt: "Which word ends with \"t\"?",
    options: [
      { id: "a", text: "cup" },
      { id: "b", text: "cat" },
      { id: "c", text: "bus" },
      { id: "d", text: "sun" }
    ],
    answerId: "b",
    explanation: "Cat ends with t.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-b-q06",
    prompt: "Capital of b is\u2026",
    options: [
      { id: "a", text: "B" },
      { id: "b", text: "b" },
      { id: "c", text: "D" },
      { id: "d", text: "P" }
    ],
    answerId: "a",
    explanation: "Capital of b is B.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-b-q07",
    prompt: "Which animal says moo?",
    options: [
      { id: "a", text: "cat" },
      { id: "b", text: "dog" },
      { id: "c", text: "cow" },
      { id: "d", text: "bird" }
    ],
    answerId: "c",
    explanation: "A cow says moo.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-b-q08",
    prompt: "Rhymes with \"sun\"?",
    options: [
      { id: "a", text: "sit" },
      { id: "b", text: "fun" },
      { id: "c", text: "sip" },
      { id: "d", text: "map" }
    ],
    answerId: "b",
    explanation: "Fun rhymes with sun.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-b-q09",
    prompt: "First letter of APPLE is\u2026",
    options: [
      { id: "a", text: "P" },
      { id: "b", text: "A" },
      { id: "c", text: "L" },
      { id: "d", text: "E" }
    ],
    answerId: "b",
    explanation: "APPLE starts with A.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-b-q10",
    prompt: "Which is NOT a letter?",
    options: [
      { id: "a", text: "M" },
      { id: "b", text: "7" },
      { id: "c", text: "Z" },
      { id: "d", text: "K" }
    ],
    answerId: "b",
    explanation: "7 is a number, not a letter.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-b-q11",
    prompt: "Tree starts with\u2026",
    options: [
      { id: "a", text: "t" },
      { id: "b", text: "r" },
      { id: "c", text: "e" },
      { id: "d", text: "s" }
    ],
    answerId: "a",
    explanation: "Tree starts with t.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-b-q12",
    prompt: "How many letters in YES?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "3" },
      { id: "c", text: "4" },
      { id: "d", text: "1" }
    ],
    answerId: "b",
    explanation: "Y-E-S has 3 letters.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-b-q13",
    prompt: "Which word names a fruit?",
    options: [
      { id: "a", text: "chair" },
      { id: "b", text: "mango" },
      { id: "c", text: "shoe" },
      { id: "d", text: "rain" }
    ],
    answerId: "b",
    explanation: "Mango is a fruit.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-b-q14",
    prompt: "Small letter for \"G\" is\u2026",
    options: [
      { id: "a", text: "g" },
      { id: "b", text: "G" },
      { id: "c", text: "q" },
      { id: "d", text: "y" }
    ],
    answerId: "a",
    explanation: "Small form of G is g.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-b-q15",
    prompt: "Join: sh + ip =",
    options: [
      { id: "a", text: "shop" },
      { id: "b", text: "ship" },
      { id: "c", text: "sip" },
      { id: "d", text: "hip" }
    ],
    answerId: "b",
    explanation: "sh + ip = ship.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-b-q16",
    prompt: "Which word has 2 letters?",
    options: [
      { id: "a", text: "cat" },
      { id: "b", text: "on" },
      { id: "c", text: "sun" },
      { id: "d", text: "ball" }
    ],
    answerId: "b",
    explanation: "On has two letters: o, n.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83d\udd24",
    title: "Letters & Words",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "word-cards",
    speak: "Letters make words.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "word-cards",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Letter", reveal: "A B C\u2026", emoji: "\ud83d\udd20" },
      { label: "Sound", reveal: "First sound of a word", emoji: "\ud83d\udd0a" },
      { label: "Word", reveal: "Letters joined", emoji: "\ud83d\udcd6" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Which letter starts \"sun\"?",
    options: [
        { id: "a", text: "s" },
        { id: "b", text: "t" },
        { id: "c", text: "m" },
        { id: "d", text: "b" }
    ],
    answerId: "a",
    why: "Sun starts with s.",
    visual: "word-cards",
    speak: "Which letter starts \"sun\"?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Hear the sound", "Build the word", "Sets ready \u2014 16 each"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g1EnglishLetters: ChapterDef = {
  id: "letters-words",
  title: "Letters & Words",
  emoji: "\ud83d\udd24",
  blurb: "Sounds, letters & words",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "vocabulary",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "vocabulary",
      questions: SET_B,
    },
  ],
  paperTopics: ["vocabulary", "grammar"],
};

export const g1EnglishLettersQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
