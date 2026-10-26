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
    explanation: "They means more than one, so we say 'They are playing.' 'Is' is tempting because we say 'He is playing', but 'is' goes with one person.",
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
    explanation: "Walked is the past tense of walk. 'Walking' is tempting because it also changes the word, but it is used for an action that is happening.",
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
    explanation: "A noun names a person, place or thing. 'Verb' is tempting because it is another word type we learn, but a verb shows an action.",
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
    explanation: "Happy is a describing word because it tells how someone feels. 'School' is tempting because it is a common word, but it names a place.",
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
    explanation: "With I we use have: 'I have finished my homework.' 'Has' is tempting because it means the same, but 'has' goes with he, she or it.",
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
    explanation: "Yesterday is in the past, so we use went. 'Go' is tempting because it is the main word, but it is for now, not yesterday.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-a-q09",
    prompt: "An adjective describes a\u2026",
    options: [
      { id: "a", text: "noun" },
      { id: "b", text: "full stop" },
      { id: "c", text: "verb" },
      { id: "d", text: "sentence" }
    ],
    answerId: "a",
    explanation: "An adjective describes a noun, like 'red ball'. 'Verb' is tempting because words can describe actions too, but those describing words are adverbs.",
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
    explanation: "'Now' tells us the action is happening at this moment, so 'She is singing a song now.' 'Sings' is tempting because it goes with she, but it is for something she does often, not right now.",
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
    explanation: "Rani is a girl, so we use she. 'They' is tempting because it is also a pronoun, but they is for more than one person.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-a-q12",
    prompt: "This is ___ igloo.",
    options: [
      { id: "a", text: "a" },
      { id: "b", text: "two" },
      { id: "c", text: "many" },
      { id: "d", text: "an" }
    ],
    answerId: "d",
    explanation: "Igloo starts with a vowel sound, so we say an igloo. 'a' goes before consonant sounds, like a dog.",
    hints: ["Say \"igloo\" aloud and listen to its first sound.", "Igloo starts with a vowel sound; pick the word for one igloo."]
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
    explanation: "Where is a question word; it asks about a place. 'Quietly' is tempting because it is a 'how' word, but it describes an action; it does not ask.",
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
    explanation: "Never is the opposite of always. 'Sometimes' is tempting because it is in between, but the opposite of always is never.",
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
    explanation: "soft + ly makes softly, which tells how something is done. 'Softness' is tempting because it is also made from soft, but it adds -ness, not -ly.",
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
    explanation: "A question ends with a question mark: 'What is your name?' 'What is your name.' is tempting because it has a capital and an end mark, but a full stop is for telling sentences.",
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
    explanation: "We means more than one, so we say 'We are ready.' 'Am' is tempting because 'we' includes me, but 'am' goes only with I.",
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
    explanation: "Jumped is the past tense of jump. 'Jumping' is tempting because it also changes the word, but it is used for an action that is happening.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-b-q04",
    prompt: "A verb shows an\u2026",
    options: [
      { id: "a", text: "object" },
      { id: "b", text: "idea" },
      { id: "c", text: "answer" },
      { id: "d", text: "action" }
    ],
    answerId: "d",
    explanation: "A verb shows an action, like run or eat. 'Object' is tempting because actions are done to things, but a naming word for a thing is a noun.",
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
    explanation: "With she we use has: 'She has done her work.' 'Have' is tempting because it means the same, but 'have' goes with I, you, we and they.",
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
    explanation: "'Last evening' is in the past, so we say 'They played football.' 'Play' is tempting because it goes with they, but it is for now, not the past.",
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
    explanation: "'The children' means more than one child, so we use they: 'They are playing.' He is tempting because we use it for one boy, but it can stand for only one person, not a group.",
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
    explanation: "With he we use is: 'He is reading a book now.' 'Are' is tempting because the action is happening now, but 'are' goes with you, we and they.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-b-q11",
    prompt: "This is ___ owl.",
    options: [
      { id: "a", text: "a" },
      { id: "b", text: "two" },
      { id: "c", text: "an" },
      { id: "d", text: "many" }
    ],
    answerId: "c",
    explanation: "Owl begins with a vowel sound, so we say an owl. 'a' goes before consonant sounds, like a cat.",
    hints: ["Say \"owl\" slowly. What sound comes first?", "Owl starts with a vowel sound, and there is only one owl."]
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
    explanation: "Late is the opposite of early. 'Soon' is tempting because it is also a time word, but soon means in a short while, not the opposite of early.",
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
    explanation: "care + ful makes careful. 'Careless' is tempting because it is also made from care, but it adds -less and means the opposite.",
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
    explanation: "'Wow, that is great!' shows a strong feeling, so it ends with !. A full stop is tempting because the sentence tells something, but strong feelings take an exclamation mark.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-eng-grammar-b-q16",
    prompt: "Articles a/an/the are used before\u2026",
    options: [
      { id: "a", text: "verbs" },
      { id: "b", text: "full stops" },
      { id: "c", text: "pronouns" },
      { id: "d", text: "nouns" }
    ],
    answerId: "d",
    explanation: "Articles a, an and the come before nouns: a cat, the sun. 'Pronouns' is tempting because they stand for nouns, but we never say 'a he' or 'the she'.",
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
