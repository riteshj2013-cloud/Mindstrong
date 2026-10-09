import type { ChapterDef, PrepQuestion } from "../types";

/** Grammar - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g2-eng-grammar-a-q01",
    prompt: "Pick the correct sentence.",
    options: [
      { id: "a", text: "she go to school." },
      { id: "b", text: "She goes to school." },
      { id: "c", text: "She going to school." },
      { id: "d", text: "She gone to school." }
    ],
    answerId: "b",
    explanation: "She goes \u2014 singular + -s on the verb.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-a-q02",
    prompt: "They ___ playing in the park.",
    options: [
      { id: "a", text: "is" },
      { id: "b", text: "are" },
      { id: "c", text: "am" },
      { id: "d", text: "be" }
    ],
    answerId: "b",
    explanation: "They takes are.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-a-q03",
    prompt: "Choose the past tense of walk.",
    options: [
      { id: "a", text: "walk" },
      { id: "b", text: "walks" },
      { id: "c", text: "walked" },
      { id: "d", text: "walking" }
    ],
    answerId: "c",
    explanation: "Walked is past tense.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-a-q04",
    prompt: "A ___ names a person, place or thing.",
    options: [
      { id: "a", text: "verb" },
      { id: "b", text: "noun" },
      { id: "c", text: "adjective" },
      { id: "d", text: "question" }
    ],
    answerId: "b",
    explanation: "A noun names a person, place or thing.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-a-q05",
    prompt: "Pick the describing word.",
    options: [
      { id: "a", text: "run" },
      { id: "b", text: "happy" },
      { id: "c", text: "school" },
      { id: "d", text: "under" }
    ],
    answerId: "b",
    explanation: "Happy describes a feeling.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-a-q06",
    prompt: "I ___ finished my homework.",
    options: [
      { id: "a", text: "has" },
      { id: "b", text: "have" },
      { id: "c", text: "is" },
      { id: "d", text: "are" }
    ],
    answerId: "b",
    explanation: "I have finished\u2026",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-a-q07",
    prompt: "Which needs a capital letter?",
    options: [
      { id: "a", text: "mumbai" },
      { id: "b", text: "river" },
      { id: "c", text: "pencil" },
      { id: "d", text: "cloud" }
    ],
    answerId: "a",
    explanation: "City names: Mumbai.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-a-q08",
    prompt: "We ___ to the market yesterday.",
    options: [
      { id: "a", text: "go" },
      { id: "b", text: "goes" },
      { id: "c", text: "went" },
      { id: "d", text: "going" }
    ],
    answerId: "c",
    explanation: "Yesterday \u2192 past \u2192 went.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-a-q09",
    prompt: "An adjective describes a\u2026",
    options: [
      { id: "a", text: "noun" },
      { id: "b", text: "full stop" },
      { id: "c", text: "number only" },
      { id: "d", text: "silence" }
    ],
    answerId: "a",
    explanation: "Adjectives describe nouns.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-a-q10",
    prompt: "She ___ a song now.",
    options: [
      { id: "a", text: "sing" },
      { id: "b", text: "sings" },
      { id: "c", text: "is singing" },
      { id: "d", text: "sang" }
    ],
    answerId: "c",
    explanation: "Now \u2192 is singing.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-a-q11",
    prompt: "Pick the pronoun for Rani.",
    options: [
      { id: "a", text: "he" },
      { id: "b", text: "she" },
      { id: "c", text: "it" },
      { id: "d", text: "they" }
    ],
    answerId: "b",
    explanation: "Rani is a girl \u2192 she.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-a-q12",
    prompt: "This is ___ apple.",
    options: [
      { id: "a", text: "a" },
      { id: "b", text: "an" },
      { id: "c", text: "the the" },
      { id: "d", text: "two" }
    ],
    answerId: "b",
    explanation: "An before vowel sound.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-a-q13",
    prompt: "Which is a question word?",
    options: [
      { id: "a", text: "quietly" },
      { id: "b", text: "where" },
      { id: "c", text: "green" },
      { id: "d", text: "slowly" }
    ],
    answerId: "b",
    explanation: "Where asks about place.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-a-q14",
    prompt: "The opposite of always is\u2026",
    options: [
      { id: "a", text: "never" },
      { id: "b", text: "often" },
      { id: "c", text: "sometimes" },
      { id: "d", text: "daily" }
    ],
    answerId: "a",
    explanation: "Never is the opposite of always.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-a-q15",
    prompt: "Join: soft + ly =",
    options: [
      { id: "a", text: "softly" },
      { id: "b", text: "softing" },
      { id: "c", text: "softs" },
      { id: "d", text: "softness" }
    ],
    answerId: "a",
    explanation: "soft + ly = softly (how).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-a-q16",
    prompt: "Pick the correct punctuation.",
    options: [
      { id: "a", text: "What is your name." },
      { id: "b", text: "What is your name?" },
      { id: "c", text: "What is your name!" },
      { id: "d", text: "what is your name" }
    ],
    answerId: "b",
    explanation: "Questions end with ?",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g2-eng-grammar-b-q01",
    prompt: "Pick the correct sentence.",
    options: [
      { id: "a", text: "He eat rice." },
      { id: "b", text: "He eats rice." },
      { id: "c", text: "He eating rice." },
      { id: "d", text: "He eated rice." }
    ],
    answerId: "b",
    explanation: "He eats \u2014 singular + -s.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-b-q02",
    prompt: "We ___ ready for the test.",
    options: [
      { id: "a", text: "is" },
      { id: "b", text: "am" },
      { id: "c", text: "are" },
      { id: "d", text: "be" }
    ],
    answerId: "c",
    explanation: "We takes are.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-b-q03",
    prompt: "Past tense of jump?",
    options: [
      { id: "a", text: "jump" },
      { id: "b", text: "jumps" },
      { id: "c", text: "jumped" },
      { id: "d", text: "jumping" }
    ],
    answerId: "c",
    explanation: "Jumped is past.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-b-q04",
    prompt: "A verb shows an\u2026",
    options: [
      { id: "a", text: "action" },
      { id: "b", text: "colour only" },
      { id: "c", text: "place name only" },
      { id: "d", text: "silence" }
    ],
    answerId: "a",
    explanation: "Verbs show actions.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-b-q05",
    prompt: "Pick the describing word.",
    options: [
      { id: "a", text: "run" },
      { id: "b", text: "bright" },
      { id: "c", text: "under" },
      { id: "d", text: "and" }
    ],
    answerId: "b",
    explanation: "Bright describes something.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-b-q06",
    prompt: "She ___ done her work.",
    options: [
      { id: "a", text: "have" },
      { id: "b", text: "has" },
      { id: "c", text: "are" },
      { id: "d", text: "am" }
    ],
    answerId: "b",
    explanation: "She has done\u2026",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-b-q07",
    prompt: "Which needs a capital?",
    options: [
      { id: "a", text: "monday" },
      { id: "b", text: "tree" },
      { id: "c", text: "cup" },
      { id: "d", text: "sand" }
    ],
    answerId: "a",
    explanation: "Day names: Monday.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-b-q08",
    prompt: "They ___ football last evening.",
    options: [
      { id: "a", text: "play" },
      { id: "b", text: "plays" },
      { id: "c", text: "played" },
      { id: "d", text: "playing" }
    ],
    answerId: "c",
    explanation: "Last evening \u2192 past \u2192 played.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-b-q09",
    prompt: "Replace 'The children' with a pronoun.",
    options: [
      { id: "a", text: "he" },
      { id: "b", text: "she" },
      { id: "c", text: "they" },
      { id: "d", text: "it" }
    ],
    answerId: "c",
    explanation: "Children = they.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-b-q10",
    prompt: "He ___ reading a book now.",
    options: [
      { id: "a", text: "am" },
      { id: "b", text: "is" },
      { id: "c", text: "are" },
      { id: "d", text: "be" }
    ],
    answerId: "b",
    explanation: "He is reading\u2026",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-b-q11",
    prompt: "This is ___ umbrella.",
    options: [
      { id: "a", text: "a" },
      { id: "b", text: "an" },
      { id: "c", text: "two" },
      { id: "d", text: "an an" }
    ],
    answerId: "b",
    explanation: "An umbrella \u2014 vowel sound.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-b-q12",
    prompt: "Which is a question word?",
    options: [
      { id: "a", text: "how" },
      { id: "b", text: "blue" },
      { id: "c", text: "desk" },
      { id: "d", text: "softly" }
    ],
    answerId: "a",
    explanation: "How asks about manner.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-b-q13",
    prompt: "Opposite of early?",
    options: [
      { id: "a", text: "late" },
      { id: "b", text: "soon" },
      { id: "c", text: "quick" },
      { id: "d", text: "near" }
    ],
    answerId: "a",
    explanation: "Late is the opposite of early.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-b-q14",
    prompt: "Join: care + ful =",
    options: [
      { id: "a", text: "careful" },
      { id: "b", text: "caring" },
      { id: "c", text: "cares" },
      { id: "d", text: "careless" }
    ],
    answerId: "a",
    explanation: "care + ful = careful.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-b-q15",
    prompt: "Pick correct end mark: Wow, that is great__",
    options: [
      { id: "a", text: "." },
      { id: "b", text: "?" },
      { id: "c", text: "!" },
      { id: "d", text: "," }
    ],
    answerId: "c",
    explanation: "Strong feeling \u2192 !",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-b-q16",
    prompt: "Articles a/an/the are used before\u2026",
    options: [
      { id: "a", text: "nouns" },
      { id: "b", text: "verbs only" },
      { id: "c", text: "full stops" },
      { id: "d", text: "numbers only" }
    ],
    answerId: "a",
    explanation: "Articles come before nouns.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\u270f\ufe0f",
    title: "Grammar",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "sentence",
    speak: "Grammar helps sentences fit.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "sentence",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Noun", reveal: "Names a thing", emoji: "\ud83d\udce6" },
      { label: "Verb", reveal: "Shows action", emoji: "\ud83c\udfc3" },
      { label: "Tense", reveal: "When it happened", emoji: "\ud83d\udd52" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "They ___ playing.",
    options: [
        { id: "a", text: "is" },
        { id: "b", text: "are" },
        { id: "c", text: "am" },
        { id: "d", text: "be" }
    ],
    answerId: "b",
    why: "They are playing.",
    visual: "sentence",
    speak: "They ___ playing.",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Match subject and verb", "Watch time words", "Sets ready \u2014 16 each"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g2EnglishGrammar: ChapterDef = {
  id: "grammar",
  title: "Grammar",
  emoji: "\u270f\ufe0f",
  blurb: "Nouns, verbs & tenses",
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

export const g2EnglishGrammarQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
