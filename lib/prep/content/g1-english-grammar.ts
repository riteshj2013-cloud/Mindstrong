import type { ChapterDef, PrepQuestion } from "../types";

/** Simple Grammar - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g1-eng-grammar-a-q01",
    prompt: "Pick the correct sentence.",
    options: [
      { id: "a", text: "I like tea." },
      { id: "b", text: "i like tea." },
      { id: "c", text: "i Like tea." },
      { id: "d", text: "I like Tea." }
    ],
    answerId: "a",
    explanation: "A sentence starts with a capital letter, and the word I is always a capital. 'I like Tea.' is tempting because it starts with a capital, but tea is not a name, so it stays small.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-grammar-a-q02",
    prompt: "We say ___ apple.",
    options: [
      { id: "a", text: "a" },
      { id: "b", text: "an" },
      { id: "c", text: "the the" },
      { id: "d", text: "two" }
    ],
    answerId: "b",
    explanation: "Apple starts with a vowel sound \u2014 use an.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-grammar-a-q03",
    prompt: "The boys ___ playing.",
    options: [
      { id: "a", text: "is" },
      { id: "b", text: "am" },
      { id: "c", text: "are" },
      { id: "d", text: "be" }
    ],
    answerId: "c",
    explanation: "Boys is more than one \u2014 use are.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-grammar-a-q04",
    prompt: "She ___ my sister.",
    options: [
      { id: "a", text: "am" },
      { id: "b", text: "are" },
      { id: "c", text: "be" },
      { id: "d", text: "is" }
    ],
    answerId: "d",
    explanation: "She takes is.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-grammar-a-q05",
    prompt: "I ___ a student.",
    options: [
      { id: "a", text: "am" },
      { id: "b", text: "is" },
      { id: "c", text: "are" },
      { id: "d", text: "be" }
    ],
    answerId: "a",
    explanation: "With I we use am.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-grammar-a-q06",
    prompt: "Pick the naming word (noun).",
    options: [
      { id: "a", text: "run" },
      { id: "b", text: "school" },
      { id: "c", text: "happy" },
      { id: "d", text: "quickly" }
    ],
    answerId: "b",
    explanation: "School names a place \u2014 a noun.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-grammar-a-q07",
    prompt: "Pick the doing word (verb).",
    options: [
      { id: "a", text: "red" },
      { id: "b", text: "soft" },
      { id: "c", text: "jump" },
      { id: "d", text: "tall" }
    ],
    answerId: "c",
    explanation: "Jump is an action \u2014 a verb.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-grammar-a-q08",
    prompt: "Which needs a capital letter?",
    options: [
      { id: "a", text: "tree" },
      { id: "b", text: "cup" },
      { id: "c", text: "sand" },
      { id: "d", text: "monday" }
    ],
    answerId: "d",
    explanation: "Day names start with a capital: Monday.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-grammar-a-q09",
    prompt: "A cat ___ soft.",
    options: [
      { id: "a", text: "is" },
      { id: "b", text: "am" },
      { id: "c", text: "are" },
      { id: "d", text: "be" }
    ],
    answerId: "a",
    explanation: "One cat \u2014 use is.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-grammar-a-q10",
    prompt: "We say ___ umbrella.",
    options: [
      { id: "a", text: "a" },
      { id: "b", text: "an" },
      { id: "c", text: "two two" },
      { id: "d", text: "an an" }
    ],
    answerId: "b",
    explanation: "Umbrella starts with a vowel sound \u2014 an.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-grammar-a-q11",
    prompt: "They ___ happy.",
    options: [
      { id: "a", text: "is" },
      { id: "b", text: "am" },
      { id: "c", text: "are" },
      { id: "d", text: "be" }
    ],
    answerId: "c",
    explanation: "They is plural \u2014 use are.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-grammar-a-q12",
    prompt: "Pick the full stop sentence.",
    options: [
      { id: "a", text: "Where is Bo" },
      { id: "b", text: "Wow" },
      { id: "c", text: "Oh" },
      { id: "d", text: "Bo is brave." }
    ],
    answerId: "d",
    explanation: "A telling sentence ends with a full stop.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-grammar-a-q13",
    prompt: "Which is a question?",
    options: [
      { id: "a", text: "Are you ready?" },
      { id: "b", text: "I sit." },
      { id: "c", text: "The sun is hot." },
      { id: "d", text: "Red bag." }
    ],
    answerId: "a",
    explanation: "Questions often start with Are/Is/What and end with ?",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-grammar-a-q14",
    prompt: "My name ___ Kabir.",
    options: [
      { id: "a", text: "am" },
      { id: "b", text: "is" },
      { id: "c", text: "are" },
      { id: "d", text: "be" }
    ],
    answerId: "b",
    explanation: "Name is singular \u2014 is.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-grammar-a-q15",
    prompt: "We use ___ before ball.",
    options: [
      { id: "a", text: "an" },
      { id: "b", text: "an an" },
      { id: "c", text: "a" },
      { id: "d", text: "the the the" }
    ],
    answerId: "c",
    explanation: "Ball starts with a consonant sound \u2014 a.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-grammar-a-q16",
    prompt: "Pick the opposite of big.",
    options: [
      { id: "a", text: "large" },
      { id: "b", text: "huge" },
      { id: "c", text: "tall" },
      { id: "d", text: "small" }
    ],
    answerId: "d",
    explanation: "Small is the opposite of big.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g1-eng-grammar-b-q01",
    prompt: "\"we play in the park.\" Which word needs a capital letter?",
    options: [
      { id: "a", text: "we" },
      { id: "b", text: "play" },
      { id: "c", text: "park" },
      { id: "d", text: "the" }
    ],
    answerId: "a",
    explanation: "The first word of a sentence starts with a capital letter, so it should be \"We\". \"park\" is tempting, but it is not a name, so it stays small.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-grammar-b-q02",
    prompt: "We say ___ egg.",
    options: [
      { id: "a", text: "a" },
      { id: "b", text: "an" },
      { id: "c", text: "the the" },
      { id: "d", text: "two" }
    ],
    answerId: "b",
    explanation: "Egg starts with a vowel sound \u2014 an.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-grammar-b-q03",
    prompt: "The girl ___ kind.",
    options: [
      { id: "a", text: "am" },
      { id: "b", text: "are" },
      { id: "c", text: "is" },
      { id: "d", text: "be" }
    ],
    answerId: "c",
    explanation: "One girl \u2014 is.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-grammar-b-q04",
    prompt: "You ___ my friend.",
    options: [
      { id: "a", text: "am" },
      { id: "b", text: "is" },
      { id: "c", text: "be" },
      { id: "d", text: "are" }
    ],
    answerId: "d",
    explanation: "With you we use are.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-grammar-b-q05",
    prompt: "I ___ hungry.",
    options: [
      { id: "a", text: "am" },
      { id: "b", text: "is" },
      { id: "c", text: "are" },
      { id: "d", text: "be" }
    ],
    answerId: "a",
    explanation: "I am hungry.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-grammar-b-q06",
    prompt: "Pick the naming word.",
    options: [
      { id: "a", text: "blue" },
      { id: "b", text: "teacher" },
      { id: "c", text: "softly" },
      { id: "d", text: "run" }
    ],
    answerId: "b",
    explanation: "Teacher names a person.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-grammar-b-q07",
    prompt: "Pick the doing word.",
    options: [
      { id: "a", text: "cold" },
      { id: "b", text: "green" },
      { id: "c", text: "sing" },
      { id: "d", text: "tiny" }
    ],
    answerId: "c",
    explanation: "Sing is an action.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-grammar-b-q08",
    prompt: "Which needs a capital?",
    options: [
      { id: "a", text: "river" },
      { id: "b", text: "stone" },
      { id: "c", text: "leaf" },
      { id: "d", text: "delhi" }
    ],
    answerId: "d",
    explanation: "Place names: Delhi.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-grammar-b-q09",
    prompt: "Dogs ___ loyal.",
    options: [
      { id: "a", text: "are" },
      { id: "b", text: "is" },
      { id: "c", text: "am" },
      { id: "d", text: "be" }
    ],
    answerId: "a",
    explanation: "Dogs is plural \u2014 are.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-grammar-b-q10",
    prompt: "We say ___ orange.",
    options: [
      { id: "a", text: "a" },
      { id: "b", text: "an" },
      { id: "c", text: "two two" },
      { id: "d", text: "an an" }
    ],
    answerId: "b",
    explanation: "Orange starts with a vowel sound \u2014 an.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-grammar-b-q11",
    prompt: "He ___ tall.",
    options: [
      { id: "a", text: "am" },
      { id: "b", text: "are" },
      { id: "c", text: "is" },
      { id: "d", text: "be" }
    ],
    answerId: "c",
    explanation: "He takes is.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-grammar-b-q12",
    prompt: "Pick the sentence with a full stop.",
    options: [
      { id: "a", text: "What time is it" },
      { id: "b", text: "Help" },
      { id: "c", text: "Wow" },
      { id: "d", text: "It is time to eat." }
    ],
    answerId: "d",
    explanation: "Telling sentence + full stop.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-grammar-b-q13",
    prompt: "Which sentence needs a question mark (?) at the end?",
    options: [
      { id: "a", text: "Where is my cap" },
      { id: "b", text: "My cap is red" },
      { id: "c", text: "I have a cap" },
      { id: "d", text: "The cap is on the bed" }
    ],
    answerId: "a",
    explanation: "\"Where is my cap\" asks something, so it ends with a question mark. The others tell us something, so they end with a full stop.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-grammar-b-q14",
    prompt: "Her bag ___ new.",
    options: [
      { id: "a", text: "am" },
      { id: "b", text: "is" },
      { id: "c", text: "are" },
      { id: "d", text: "be" }
    ],
    answerId: "b",
    explanation: "Bag is singular \u2014 is.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-grammar-b-q15",
    prompt: "We use ___ before dog.",
    options: [
      { id: "a", text: "an" },
      { id: "b", text: "an an" },
      { id: "c", text: "a" },
      { id: "d", text: "the the the" }
    ],
    answerId: "c",
    explanation: "Dog starts with a consonant \u2014 a.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g1-eng-grammar-b-q16",
    prompt: "Pick the opposite of happy.",
    options: [
      { id: "a", text: "glad" },
      { id: "b", text: "joyful" },
      { id: "c", text: "merry" },
      { id: "d", text: "sad" }
    ],
    answerId: "d",
    explanation: "Sad is the opposite of happy.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\u270f\ufe0f",
    title: "Simple Grammar",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "sentence",
    speak: "Little rules make clear sentences.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "sentence",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Capital", reveal: "Start with a big letter", emoji: "\ud83d\udd20" },
      { label: "a / an", reveal: "an before vowel sounds", emoji: "\ud83c\udd70\ufe0f" },
      { label: "is / are", reveal: "Match one or many", emoji: "\ud83d\udd17" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "We say ___ egg.",
    options: [
        { id: "a", text: "a" },
        { id: "b", text: "an" },
        { id: "c", text: "two" },
        { id: "d", text: "the the" }
    ],
    answerId: "b",
    why: "An egg \u2014 vowel sound.",
    visual: "sentence",
    speak: "We say ___ egg.",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Start with a capital", "Match is/are", "Sets ready \u2014 16 each"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g1EnglishGrammar: ChapterDef = {
  id: "simple-grammar",
  title: "Simple Grammar",
  emoji: "\u270f\ufe0f",
  blurb: "a/an, is/are & capitals",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "grammar",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "grammar",
      questions: SET_B,
    },
  ],
  paperTopics: ["grammar", "vocabulary"],
};

export const g1EnglishGrammarQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
