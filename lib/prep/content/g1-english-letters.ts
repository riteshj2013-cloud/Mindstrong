import type { ChapterDef, PrepQuestion } from "../types";

/** Letters & Words - original olympiad-style content (not affiliated with SOF). */

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
    explanation: "A, B, C: C comes right after B. A is tempting because it is next to B, but A comes before B, not after.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-a-q02",
    prompt: "Which word starts with M?",
    options: [
      { id: "a", text: "sun" },
      { id: "b", text: "cat" },
      { id: "c", text: "moon" },
      { id: "d", text: "dog" }
    ],
    answerId: "c",
    explanation: "Moon starts with M. 'Sun' is tempting because the sun and moon go together, but sun starts with S.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-a-q03",
    prompt: "Find the word: \"c\" + \"at\" =",
    options: [
      { id: "a", text: "bat" },
      { id: "b", text: "hat" },
      { id: "c", text: "mat" },
      { id: "d", text: "cat" }
    ],
    answerId: "d",
    explanation: "c + at makes cat. 'Bat' is tempting because it also ends in -at, but it starts with b, not c.",
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
    explanation: "A is a letter of the alphabet. 10 is tempting because it is written with signs too, but it is a number, not a letter.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-a-q05",
    prompt: "How many letters are in the word SUN?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "2" },
      { id: "c", text: "4" },
      { id: "d", text: "1" }
    ],
    answerId: "a",
    explanation: "S-U-N has 3 letters. 2 is tempting if you miss the middle letter U, but count each one: S, U, N.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-a-q06",
    prompt: "Which word ends with \"g\"?",
    options: [
      { id: "a", text: "bat" },
      { id: "b", text: "bus" },
      { id: "c", text: "bag" },
      { id: "d", text: "bee" }
    ],
    answerId: "c",
    explanation: "Bag ends with g. 'Bat' is tempting because it starts the same way, but it ends with t.",
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
    explanation: "The capital of a is A. The small 'a' is tempting because it is the same letter, but it is the small form, not the capital.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-a-q08",
    prompt: "Which word means a pet that meows?",
    options: [
      { id: "a", text: "dog" },
      { id: "b", text: "cow" },
      { id: "c", text: "hen" },
      { id: "d", text: "cat" }
    ],
    answerId: "d",
    explanation: "A cat is a pet that meows. 'Dog' is tempting because it is also a pet, but a dog barks.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-a-q09",
    prompt: "Rhymes with \"hat\"?",
    options: [
      { id: "a", text: "cat" },
      { id: "b", text: "hot" },
      { id: "c", text: "sit" },
      { id: "d", text: "cup" }
    ],
    answerId: "a",
    explanation: "Cat rhymes with hat because both end in -at. 'Hot' is tempting because it starts with h like hat, but rhyming words share the end sound, not the start.",
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
    explanation: "INDIA starts with I. N is tempting because it is the next letter, but the first letter is I.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-a-q11",
    prompt: "Which is a word?",
    options: [
      { id: "a", text: "xyzq" },
      { id: "b", text: "1234" },
      { id: "c", text: "book" },
      { id: "d", text: "##" }
    ],
    answerId: "c",
    explanation: "Book is a real word. 'xyzq' is tempting because it is made of letters, but it is not a word we can read or say.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-a-q12",
    prompt: "Ball starts with which sound?",
    options: [
      { id: "a", text: "c" },
      { id: "b", text: "d" },
      { id: "c", text: "s" },
      { id: "d", text: "b" }
    ],
    answerId: "d",
    explanation: "Ball starts with the /b/ sound. 'd' is tempting because b and d look alike, but ball starts with b.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-a-q13",
    prompt: "How many vowels in AEIOU list?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "3" },
      { id: "c", text: "4" },
      { id: "d", text: "6" }
    ],
    answerId: "a",
    explanation: "A, E, I, O, U: there are 5 vowels in the list. 4 is tempting if you miss one, so count them one by one.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-a-q14",
    prompt: "Small letter for \"T\" is\u2026",
    options: [
      { id: "a", text: "T" },
      { id: "b", text: "t" },
      { id: "c", text: "s" },
      { id: "d", text: "l" }
    ],
    answerId: "b",
    explanation: "The small form of T is t. 'l' is tempting because it is also a tall straight line, but t has a cross line and l does not.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-a-q15",
    prompt: "Which word names a colour?",
    options: [
      { id: "a", text: "run" },
      { id: "b", text: "cup" },
      { id: "c", text: "red" },
      { id: "d", text: "sit" }
    ],
    answerId: "c",
    explanation: "Red is a colour. 'Cup' is tempting because cups come in colours, but cup names a thing, not a colour.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-a-q16",
    prompt: "Join: bl + ue =",
    options: [
      { id: "a", text: "blow" },
      { id: "b", text: "glue" },
      { id: "c", text: "clue" },
      { id: "d", text: "blue" }
    ],
    answerId: "d",
    explanation: "bl + ue makes blue. 'Glue' is tempting because it also ends in -ue, but it starts with gl, not bl.",
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
    explanation: "C comes just before D. B is tempting because it is also before D, but it is two places before; C is right before.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-b-q02",
    prompt: "Which word starts with S?",
    options: [
      { id: "a", text: "moon" },
      { id: "b", text: "apple" },
      { id: "c", text: "sun" },
      { id: "d", text: "egg" }
    ],
    answerId: "c",
    explanation: "Sun starts with S. 'Moon' is tempting because the sun and moon go together, but moon starts with M.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-b-q03",
    prompt: "Find the word: \"p\" + \"en\" =",
    options: [
      { id: "a", text: "pan" },
      { id: "b", text: "pin" },
      { id: "c", text: "pun" },
      { id: "d", text: "pen" }
    ],
    answerId: "d",
    explanation: "p + en makes pen. 'Pin' is tempting because it starts with p too, but it ends in -in, not -en.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-b-q04",
    prompt: "How many letters in DOG?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "2" },
      { id: "c", text: "4" },
      { id: "d", text: "5" }
    ],
    answerId: "a",
    explanation: "D-O-G has 3 letters. 2 is tempting if you miss the middle letter O, but count each one: D, O, G.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-b-q05",
    prompt: "Which word ends with \"t\"?",
    options: [
      { id: "a", text: "cup" },
      { id: "b", text: "bus" },
      { id: "c", text: "cat" },
      { id: "d", text: "sun" }
    ],
    answerId: "c",
    explanation: "Cat ends with t. 'Cup' is tempting because it starts with c like cat, but it ends with p.",
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
    explanation: "The capital of b is B. D is tempting because the small b and capital D look alike, but the capital of b is B.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-b-q07",
    prompt: "Which animal says moo?",
    options: [
      { id: "a", text: "cat" },
      { id: "b", text: "dog" },
      { id: "c", text: "bird" },
      { id: "d", text: "cow" }
    ],
    answerId: "d",
    explanation: "A cow says moo. 'Dog' is tempting because it is also a common animal, but a dog barks.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-b-q08",
    prompt: "Rhymes with \"sun\"?",
    options: [
      { id: "a", text: "fun" },
      { id: "b", text: "sit" },
      { id: "c", text: "sip" },
      { id: "d", text: "map" }
    ],
    answerId: "a",
    explanation: "Fun rhymes with sun because both end in -un. 'Sit' is tempting because it starts with s like sun, but rhyming words share the end sound.",
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
    explanation: "APPLE starts with A. P is tempting because it comes twice in the word, but the first letter is A.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-b-q10",
    prompt: "Which is NOT a letter?",
    options: [
      { id: "a", text: "M" },
      { id: "b", text: "Z" },
      { id: "c", text: "7" },
      { id: "d", text: "K" }
    ],
    answerId: "c",
    explanation: "7 is a number, not a letter. Z is tempting because it is at the very end of the alphabet and looks a bit like a 7, but it is still a letter.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-b-q11",
    prompt: "Tree starts with\u2026",
    options: [
      { id: "a", text: "r" },
      { id: "b", text: "t" },
      { id: "c", text: "e" },
      { id: "d", text: "s" }
    ],
    answerId: "b",
    explanation: "Tree starts with t. 'r' is tempting because you hear it early in tree, but t comes first.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-b-q12",
    prompt: "How many letters in YES?",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "4" },
      { id: "c", text: "1" },
      { id: "d", text: "3" }
    ],
    answerId: "d",
    explanation: "Y-E-S has 3 letters. 2 is tempting because the word is short, but count each one: Y, E, S.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-b-q13",
    prompt: "Which word names a fruit?",
    options: [
      { id: "a", text: "mango" },
      { id: "b", text: "chair" },
      { id: "c", text: "shoe" },
      { id: "d", text: "rain" }
    ],
    answerId: "a",
    explanation: "A mango is a fruit. 'Rain' is tempting because it helps fruits grow, but rain is not a fruit.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-b-q14",
    prompt: "Small letter for \"G\" is\u2026",
    options: [
      { id: "a", text: "G" },
      { id: "b", text: "g" },
      { id: "c", text: "q" },
      { id: "d", text: "y" }
    ],
    answerId: "b",
    explanation: "The small form of G is g. 'q' is tempting because it looks like g with a tail, but the small g curls the other way.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-b-q15",
    prompt: "Join: sh + ip =",
    options: [
      { id: "a", text: "shop" },
      { id: "b", text: "sip" },
      { id: "c", text: "ship" },
      { id: "d", text: "hip" }
    ],
    answerId: "c",
    explanation: "sh + ip makes ship. 'Sip' is tempting because it also ends in -ip, but it starts with s, not sh.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-letters-b-q16",
    prompt: "Which word has 2 letters?",
    options: [
      { id: "a", text: "cat" },
      { id: "b", text: "sun" },
      { id: "c", text: "ball" },
      { id: "d", text: "on" }
    ],
    answerId: "d",
    explanation: "On has 2 letters: o and n. 'Cat' is tempting because it is a short word, but it has 3 letters.",
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
