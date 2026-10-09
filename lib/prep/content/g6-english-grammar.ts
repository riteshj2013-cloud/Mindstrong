import type { ChapterDef, PrepQuestion } from "../types";

/** Grammar - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g6-eng-gram-a-q01",
    prompt: "Choose the correct verb: She ____ to school by bus.",
    options: [
      { id: "a", text: "go" },
      { id: "b", text: "goes" },
      { id: "c", text: "going" },
      { id: "d", text: "gone" }
    ],
    answerId: "b",
    explanation: "She is singular third person, so the present form is goes.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-a-q02",
    prompt: "Choose the correct verb: The boys ____ playing cricket.",
    options: [
      { id: "a", text: "is" },
      { id: "b", text: "are" },
      { id: "c", text: "am" },
      { id: "d", text: "be" }
    ],
    answerId: "b",
    explanation: "Boys is plural → are.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-a-q03",
    prompt: "Identify the noun: The librarian opened a new shelf.",
    options: [
      { id: "a", text: "opened" },
      { id: "b", text: "new" },
      { id: "c", text: "librarian" },
      { id: "d", text: "a" }
    ],
    answerId: "c",
    explanation: "Librarian names a person — a noun.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-a-q04",
    prompt: "Identify the adjective: Meera read an exciting story.",
    options: [
      { id: "a", text: "Meera" },
      { id: "b", text: "read" },
      { id: "c", text: "exciting" },
      { id: "d", text: "story" }
    ],
    answerId: "c",
    explanation: "Exciting describes the story — an adjective.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-a-q05",
    prompt: "Choose the correct article: ____ apple a day keeps the doctor away.",
    options: [
      { id: "a", text: "A" },
      { id: "b", text: "An" },
      { id: "c", text: "The only ever" },
      { id: "d", text: "No article possible" }
    ],
    answerId: "b",
    explanation: "Apple begins with a vowel sound → an.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-a-q06",
    prompt: "Choose the correct article: ____ Himalayas are beautiful.",
    options: [
      { id: "a", text: "A" },
      { id: "b", text: "An" },
      { id: "c", text: "The" },
      { id: "d", text: "No article" }
    ],
    answerId: "c",
    explanation: "Mountain ranges take the: the Himalayas.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-a-q07",
    prompt: "Past tense of write is —",
    options: [
      { id: "a", text: "writed" },
      { id: "b", text: "wrote" },
      { id: "c", text: "writtened" },
      { id: "d", text: "writing" }
    ],
    answerId: "b",
    explanation: "Write → wrote (past) → written (past participle).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-a-q08",
    prompt: "Choose the correct pronoun: Ravi and ____ are partners.",
    options: [
      { id: "a", text: "me" },
      { id: "b", text: "I" },
      { id: "c", text: "mine" },
      { id: "d", text: "myself" }
    ],
    answerId: "b",
    explanation: "Subject position needs I: Ravi and I.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-a-q09",
    prompt: "Which sentence is in the future tense?",
    options: [
      { id: "a", text: "She walks home." },
      { id: "b", text: "She walked home." },
      { id: "c", text: "She will walk home." },
      { id: "d", text: "She is walking home." }
    ],
    answerId: "c",
    explanation: "Will walk marks future time.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-a-q10",
    prompt: "Choose the correct form: Neither of the answers ____ correct.",
    options: [
      { id: "a", text: "are" },
      { id: "b", text: "is" },
      { id: "c", text: "were" },
      { id: "d", text: "be" }
    ],
    answerId: "b",
    explanation: "Neither is singular → is.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-a-q11",
    prompt: "Identify the adverb: He spoke politely to the vendor.",
    options: [
      { id: "a", text: "He" },
      { id: "b", text: "spoke" },
      { id: "c", text: "politely" },
      { id: "d", text: "vendor" }
    ],
    answerId: "c",
    explanation: "Politely tells how he spoke — an adverb.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-a-q12",
    prompt: "Choose the correct preposition: The book is ____ the table.",
    options: [
      { id: "a", text: "in" },
      { id: "b", text: "on" },
      { id: "c", text: "at" },
      { id: "d", text: "by only for people" }
    ],
    answerId: "b",
    explanation: "On the table is the usual preposition for surface contact.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-a-q13",
    prompt: "Which is a complete sentence?",
    options: [
      { id: "a", text: "When the rain stopped." },
      { id: "b", text: "The rain stopped." },
      { id: "c", text: "Because the rain." },
      { id: "d", text: "Stopping the rain." }
    ],
    answerId: "b",
    explanation: "The rain stopped has a subject and a finite verb.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-a-q14",
    prompt: "Choose the correct comparative: This rope is ____ than that one.",
    options: [
      { id: "a", text: "strong" },
      { id: "b", text: "stronger" },
      { id: "c", text: "strongest" },
      { id: "d", text: "more stronger" }
    ],
    answerId: "b",
    explanation: "Comparing two things → stronger (not more stronger).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-a-q15",
    prompt: "Choose the correct superlative: Mount Everest is the ____ peak.",
    options: [
      { id: "a", text: "high" },
      { id: "b", text: "higher" },
      { id: "c", text: "highest" },
      { id: "d", text: "most highest" }
    ],
    answerId: "c",
    explanation: "Among many peaks → highest.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-a-q16",
    prompt: "Direct to indirect: She said, “I am ready.” → She said that she ____ ready.",
    options: [
      { id: "a", text: "am" },
      { id: "b", text: "was" },
      { id: "c", text: "is" },
      { id: "d", text: "were" }
    ],
    answerId: "b",
    explanation: "Present am becomes was in backshift after a past reporting verb.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-a-q17",
    prompt: "Choose the correct conjunction: I stayed home ____ it was raining.",
    options: [
      { id: "a", text: "and" },
      { id: "b", text: "but" },
      { id: "c", text: "because" },
      { id: "d", text: "or" }
    ],
    answerId: "c",
    explanation: "Because shows reason.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-a-q18",
    prompt: "Identify the subject: Across the field ran the foal.",
    options: [
      { id: "a", text: "Across" },
      { id: "b", text: "the field" },
      { id: "c", text: "ran" },
      { id: "d", text: "the foal" }
    ],
    answerId: "d",
    explanation: "The foal is who ran — the subject, even after the verb.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-a-q19",
    prompt: "Choose the correct verb: Bread and butter ____ his breakfast.",
    options: [
      { id: "a", text: "are" },
      { id: "b", text: "is" },
      { id: "c", text: "were" },
      { id: "d", text: "be" }
    ],
    answerId: "b",
    explanation: "Treated as one dish → singular is.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-a-q20",
    prompt: "Which word is a collective noun?",
    options: [
      { id: "a", text: "team" },
      { id: "b", text: "player" },
      { id: "c", text: "run" },
      { id: "d", text: "quickly" }
    ],
    answerId: "a",
    explanation: "Team names a group — a collective noun.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-a-q21",
    prompt: "Choose the correct form: The news ____ good today.",
    options: [
      { id: "a", text: "are" },
      { id: "b", text: "is" },
      { id: "c", text: "were" },
      { id: "d", text: "have" }
    ],
    answerId: "b",
    explanation: "News is singular in agreement → is.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-a-q22",
    prompt: "Identify the interjection: Wow! That catch was brilliant.",
    options: [
      { id: "a", text: "That" },
      { id: "b", text: "catch" },
      { id: "c", text: "Wow" },
      { id: "d", text: "brilliant" }
    ],
    answerId: "c",
    explanation: "Wow! expresses sudden feeling — an interjection.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-a-q23",
    prompt: "Choose the correct tense: She ____ her homework before dinner yesterday.",
    options: [
      { id: "a", text: "finishes" },
      { id: "b", text: "finish" },
      { id: "c", text: "finished" },
      { id: "d", text: "will finish" }
    ],
    answerId: "c",
    explanation: "Yesterday marks past → finished.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-a-q24",
    prompt: "Which sentence uses a possessive pronoun?",
    options: [
      { id: "a", text: "This book is her." },
      { id: "b", text: "This book is hers." },
      { id: "c", text: "This book is she." },
      { id: "d", text: "This book is him." }
    ],
    answerId: "b",
    explanation: "Hers is the possessive pronoun form.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g6-eng-gram-b-q01",
    prompt: "Choose the correct verb: My friends ____ here.",
    options: [
      { id: "a", text: "lives" },
      { id: "b", text: "live" },
      { id: "c", text: "living" },
      { id: "d", text: "lived always only" }
    ],
    answerId: "b",
    explanation: "Friends is plural → live.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-b-q02",
    prompt: "Choose the correct verb: Either Rina or her brothers ____ coming.",
    options: [
      { id: "a", text: "is" },
      { id: "b", text: "are" },
      { id: "c", text: "am" },
      { id: "d", text: "be" }
    ],
    answerId: "b",
    explanation: "With either…or, the verb agrees with the nearer subject: brothers → are.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-b-q03",
    prompt: "Identify the verb: The mangroves protect the coast.",
    options: [
      { id: "a", text: "mangroves" },
      { id: "b", text: "protect" },
      { id: "c", text: "the" },
      { id: "d", text: "coast" }
    ],
    answerId: "b",
    explanation: "Protect is the action word — the verb.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-b-q04",
    prompt: "Choose the correct article: He is ____ honest man.",
    options: [
      { id: "a", text: "a" },
      { id: "b", text: "an" },
      { id: "c", text: "the only" },
      { id: "d", text: "no article" }
    ],
    answerId: "b",
    explanation: "Honest begins with a vowel sound → an.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-b-q05",
    prompt: "Past participle of eat is —",
    options: [
      { id: "a", text: "ate" },
      { id: "b", text: "eated" },
      { id: "c", text: "eaten" },
      { id: "d", text: "eating" }
    ],
    answerId: "c",
    explanation: "Eat → ate → eaten.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-b-q06",
    prompt: "Choose the correct pronoun: Let ____ help you.",
    options: [
      { id: "a", text: "I" },
      { id: "b", text: "me" },
      { id: "c", text: "mine" },
      { id: "d", text: "myself" }
    ],
    answerId: "b",
    explanation: "After let, use object form me.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-b-q07",
    prompt: "Which sentence is in the present continuous?",
    options: [
      { id: "a", text: "She writes a letter." },
      { id: "b", text: "She wrote a letter." },
      { id: "c", text: "She is writing a letter." },
      { id: "d", text: "She will write a letter." }
    ],
    answerId: "c",
    explanation: "Is writing shows an action in progress.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-b-q08",
    prompt: "Choose the correct preposition: Divide the sweets ____ the two sisters.",
    options: [
      { id: "a", text: "among" },
      { id: "b", text: "between" },
      { id: "c", text: "in" },
      { id: "d", text: "into only for liquids" }
    ],
    answerId: "b",
    explanation: "Between is used for two; among for more than two.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-b-q09",
    prompt: "Identify the conjunction: Hurry up, or we will miss the bus.",
    options: [
      { id: "a", text: "Hurry" },
      { id: "b", text: "up" },
      { id: "c", text: "or" },
      { id: "d", text: "bus" }
    ],
    answerId: "c",
    explanation: "Or joins alternatives — a conjunction.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-b-q10",
    prompt: "Choose the correct comparative: Iron is ____ than wood.",
    options: [
      { id: "a", text: "heavy" },
      { id: "b", text: "heavier" },
      { id: "c", text: "heaviest" },
      { id: "d", text: "more heavier" }
    ],
    answerId: "b",
    explanation: "Comparing two materials → heavier.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-b-q11",
    prompt: "Change to plural: The child is sleeping.",
    options: [
      { id: "a", text: "The childs is sleeping." },
      { id: "b", text: "The children are sleeping." },
      { id: "c", text: "The childrens is sleeping." },
      { id: "d", text: "The child are sleeping." }
    ],
    answerId: "b",
    explanation: "Child → children; verb becomes are.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-b-q12",
    prompt: "Which is an interrogative sentence?",
    options: [
      { id: "a", text: "Close the door." },
      { id: "b", text: "What a catch!" },
      { id: "c", text: "Where is my bat?" },
      { id: "d", text: "The bat is new." }
    ],
    answerId: "c",
    explanation: "Where is my bat? asks a question.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-b-q13",
    prompt: "Choose the correct form: She has ____ the letter.",
    options: [
      { id: "a", text: "wrote" },
      { id: "b", text: "written" },
      { id: "c", text: "write" },
      { id: "d", text: "writing" }
    ],
    answerId: "b",
    explanation: "Has takes the past participle written.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-b-q14",
    prompt: "Identify the object: Kabir borrowed a magazine.",
    options: [
      { id: "a", text: "Kabir" },
      { id: "b", text: "borrowed" },
      { id: "c", text: "a magazine" },
      { id: "d", text: "None" }
    ],
    answerId: "c",
    explanation: "A magazine receives the action — the object.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-b-q15",
    prompt: "Choose the correct determiner: There isn’t ____ milk left.",
    options: [
      { id: "a", text: "many" },
      { id: "b", text: "much" },
      { id: "c", text: "few" },
      { id: "d", text: "several" }
    ],
    answerId: "b",
    explanation: "Milk is uncountable → much.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-b-q16",
    prompt: "Which sentence is imperative?",
    options: [
      { id: "a", text: "Please return the books in ten days." },
      { id: "b", text: "The books are new." },
      { id: "c", text: "Are the books new?" },
      { id: "d", text: "What useful books!" }
    ],
    answerId: "a",
    explanation: "Please return… gives a polite command/request.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-b-q17",
    prompt: "Choose the correct relative pronoun: The girl ____ planted trees is Meera’s heroine.",
    options: [
      { id: "a", text: "which" },
      { id: "b", text: "who" },
      { id: "c", text: "whose" },
      { id: "d", text: "what" }
    ],
    answerId: "b",
    explanation: "Who refers to people.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-b-q18",
    prompt: "Active to passive: The coach moved practice indoors. → Practice ____ indoors by the coach.",
    options: [
      { id: "a", text: "moved" },
      { id: "b", text: "was moved" },
      { id: "c", text: "is moving" },
      { id: "d", text: "were move" }
    ],
    answerId: "b",
    explanation: "Past active moved → was moved in passive.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-b-q19",
    prompt: "Choose the correct verb: The committee ____ decided the date.",
    options: [
      { id: "a", text: "have" },
      { id: "b", text: "has" },
      { id: "c", text: "are" },
      { id: "d", text: "were" }
    ],
    answerId: "b",
    explanation: "Committee as one body → has.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-b-q20",
    prompt: "Identify the abstract noun: Honesty makes shopping a pleasure.",
    options: [
      { id: "a", text: "Honesty" },
      { id: "b", text: "makes" },
      { id: "c", text: "shopping" },
      { id: "d", text: "a" }
    ],
    answerId: "a",
    explanation: "Honesty names a quality — an abstract noun.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-b-q21",
    prompt: "Choose the correct form: If it rains, we ____ indoors.",
    options: [
      { id: "a", text: "practise" },
      { id: "b", text: "practised" },
      { id: "c", text: "will practise" },
      { id: "d", text: "practising" }
    ],
    answerId: "c",
    explanation: "First conditional: if + present, will + verb.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-b-q22",
    prompt: "Which word is a synonym connector meaning ‘but’?",
    options: [
      { id: "a", text: "and" },
      { id: "b", text: "however" },
      { id: "c", text: "because" },
      { id: "d", text: "therefore" }
    ],
    answerId: "b",
    explanation: "However introduces a contrast, like but.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-b-q23",
    prompt: "Choose the correct order: (a) a red (b) she bought (c) ribbon",
    options: [
      { id: "a", text: "a-b-c" },
      { id: "b", text: "b-a-c" },
      { id: "c", text: "c-b-a" },
      { id: "d", text: "a-c-b" }
    ],
    answerId: "b",
    explanation: "She bought a red ribbon.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-gram-b-q24",
    prompt: "Which sentence has correct punctuation?",
    options: [
      { id: "a", text: "Wow that catch was brilliant" },
      { id: "b", text: "Wow! That catch was brilliant." },
      { id: "c", text: "Wow. that catch was brilliant" },
      { id: "d", text: "Wow that catch was brilliant?" }
    ],
    answerId: "b",
    explanation: "Interjection takes ! and the next sentence starts with a capital.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "✏️",
    title: "Grammar",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "sentence",
    speak: "Grammar helps sentences stick together clearly.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "sentence",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Subject–verb", reveal: "Singular and plural must match", emoji: "🔗" },
      { label: "Tense", reveal: "Past, present, future time clues", emoji: "⏱️" },
      { label: "Pronouns", reveal: "Stand in for nouns clearly", emoji: "👤" },
      { label: "Articles", reveal: "a, an, the — choose with care", emoji: "🅰️" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "They ____ to school every day.",
    options: [
        { id: "a", text: "goes" },
        { id: "b", text: "go" },
        { id: "c", text: "going" },
        { id: "d", text: "gone" }
    ],
    answerId: "b",
    why: "They is plural → go.",
    visual: "sentence",
    speak: "They ____ to school every day.",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Review the key ideas", "Watch tricky options", "Sets ready whenever you are"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g6EnglishGrammar: ChapterDef = {
  id: "grammar",
  title: "Grammar",
  emoji: "✏️",
  blurb: "Tenses, agreement and sentence sense",
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

export const g6EnglishGrammarQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
