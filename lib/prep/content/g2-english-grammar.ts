import type { ChapterDef, PrepQuestion } from "../types";

/** Grammar - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g2-eng-grammar-a-q01",
    prompt: "Fill in the blank: \"She ___ to school every day.\"",
    options: [
      { id: "a", text: "goes" },
      { id: "b", text: "go" },
      { id: "c", text: "going" },
      { id: "d", text: "gone" }
    ],
    answerId: "a",
    explanation: "With one person (she) in the present, the verb takes -s or -es: she goes. \"go\" is tempting, but we say I go and they go, not she go.",
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
      { id: "b", text: "adjective" },
      { id: "c", text: "question" },
      { id: "d", text: "noun" }
    ],
    answerId: "d",
    explanation: "A noun names a person, place or thing.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-a-q05",
    prompt: "Pick the describing word.",
    options: [
      { id: "a", text: "happy" },
      { id: "b", text: "run" },
      { id: "c", text: "school" },
      { id: "d", text: "under" }
    ],
    answerId: "a",
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
    prompt: "\"We visited pune last week.\" Which word needs a capital letter?",
    options: [
      { id: "a", text: "visited" },
      { id: "b", text: "last" },
      { id: "c", text: "pune" },
      { id: "d", text: "week" }
    ],
    answerId: "c",
    explanation: "Pune is the name of a city, so it needs a capital: Pune. \"week\" is tempting because it is about time, but it is not a name; only day and month names get capitals.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-a-q08",
    prompt: "We ___ to the market yesterday.",
    options: [
      { id: "a", text: "go" },
      { id: "b", text: "goes" },
      { id: "c", text: "going" },
      { id: "d", text: "went" }
    ],
    answerId: "d",
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
      { id: "b", text: "is singing" },
      { id: "c", text: "sings" },
      { id: "d", text: "sang" }
    ],
    answerId: "b",
    explanation: "Now \u2192 is singing.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-a-q11",
    prompt: "Pick the pronoun for Rani.",
    options: [
      { id: "a", text: "he" },
      { id: "b", text: "it" },
      { id: "c", text: "she" },
      { id: "d", text: "they" }
    ],
    answerId: "c",
    explanation: "Rani is a girl \u2192 she.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-a-q12",
    prompt: "This is ___ apple.",
    options: [
      { id: "a", text: "a" },
      { id: "b", text: "the the" },
      { id: "c", text: "two" },
      { id: "d", text: "an" }
    ],
    answerId: "d",
    explanation: "An before vowel sound.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-a-q13",
    prompt: "Which is a question word?",
    options: [
      { id: "a", text: "where" },
      { id: "b", text: "quietly" },
      { id: "c", text: "green" },
      { id: "d", text: "slowly" }
    ],
    answerId: "a",
    explanation: "Where asks about place.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-a-q14",
    prompt: "The opposite of always is\u2026",
    options: [
      { id: "a", text: "often" },
      { id: "b", text: "never" },
      { id: "c", text: "sometimes" },
      { id: "d", text: "daily" }
    ],
    answerId: "b",
    explanation: "Never is the opposite of always.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-a-q15",
    prompt: "Join: soft + ly =",
    options: [
      { id: "a", text: "softing" },
      { id: "b", text: "softs" },
      { id: "c", text: "softly" },
      { id: "d", text: "softness" }
    ],
    answerId: "c",
    explanation: "soft + ly = softly (how).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-a-q16",
    prompt: "Pick the correct punctuation.",
    options: [
      { id: "a", text: "What is your name." },
      { id: "b", text: "What is your name!" },
      { id: "c", text: "what is your name" },
      { id: "d", text: "What is your name?" }
    ],
    answerId: "d",
    explanation: "Questions end with ?",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g2-eng-grammar-b-q01",
    prompt: "Fill in the blank: \"He ___ rice for lunch.\"",
    options: [
      { id: "a", text: "eats" },
      { id: "b", text: "eat" },
      { id: "c", text: "eating" },
      { id: "d", text: "eated" }
    ],
    answerId: "a",
    explanation: "With one person (he) in the present, the verb takes -s: he eats. \"eated\" is tempting, but \"eat\" is not changed with -ed; its past form is \"ate\".",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-b-q02",
    prompt: "We ___ ready for the test.",
    options: [
      { id: "a", text: "is" },
      { id: "b", text: "are" },
      { id: "c", text: "am" },
      { id: "d", text: "be" }
    ],
    answerId: "b",
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
      { id: "a", text: "colour only" },
      { id: "b", text: "place name only" },
      { id: "c", text: "silence" },
      { id: "d", text: "action" }
    ],
    answerId: "d",
    explanation: "Verbs show actions.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-b-q05",
    prompt: "Pick the describing word: \"Ravi has a big kite.\"",
    options: [
      { id: "a", text: "big" },
      { id: "b", text: "Ravi" },
      { id: "c", text: "has" },
      { id: "d", text: "kite" }
    ],
    answerId: "a",
    explanation: "\"big\" tells us what the kite is like, so it is the describing word. \"kite\" is tempting, but it names a thing, so it is a naming word.",
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
    prompt: "Which day name is written correctly?",
    options: [
      { id: "a", text: "sunday" },
      { id: "b", text: "SUNday" },
      { id: "c", text: "Sunday" },
      { id: "d", text: "sunDay" }
    ],
    answerId: "c",
    explanation: "Day names begin with a capital letter and the other letters are small: Sunday. \"SUNday\" is tempting because it has capitals, but only the first letter should be a capital.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-b-q08",
    prompt: "They ___ football last evening.",
    options: [
      { id: "a", text: "play" },
      { id: "b", text: "plays" },
      { id: "c", text: "playing" },
      { id: "d", text: "played" }
    ],
    answerId: "d",
    explanation: "Last evening \u2192 past \u2192 played.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-b-q09",
    prompt: "Replace 'The children' with a pronoun.",
    options: [
      { id: "a", text: "they" },
      { id: "b", text: "he" },
      { id: "c", text: "she" },
      { id: "d", text: "it" }
    ],
    answerId: "a",
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
      { id: "b", text: "two" },
      { id: "c", text: "an" },
      { id: "d", text: "an an" }
    ],
    answerId: "c",
    explanation: "An umbrella \u2014 vowel sound.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-b-q12",
    prompt: "Which question word asks about a time?",
    options: [
      { id: "a", text: "Who" },
      { id: "b", text: "What" },
      { id: "c", text: "Where" },
      { id: "d", text: "When" }
    ],
    answerId: "d",
    explanation: "\"When\" asks about time, as in \"When is the bus?\" \"Where\" is tempting, but it asks about a place.",
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
      { id: "a", text: "caring" },
      { id: "b", text: "careful" },
      { id: "c", text: "cares" },
      { id: "d", text: "careless" }
    ],
    answerId: "b",
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
      { id: "a", text: "verbs only" },
      { id: "b", text: "full stops" },
      { id: "c", text: "numbers only" },
      { id: "d", text: "nouns" }
    ],
    answerId: "d",
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
