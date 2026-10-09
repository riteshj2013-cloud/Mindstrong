import type { ChapterDef, PrepQuestion } from "../types";

/** Grammar Builders - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g7-eng-grammar-a-q01",
    prompt: "Choose the correct verb: She ____ to school every day.",
    options: [
      { id: "a", text: "goes" },
      { id: "b", text: "go" },
      { id: "c", text: "going" },
      { id: "d", text: "gone" }
    ],
    answerId: "a",
    explanation: "Singular subject \u201cShe\u201d takes goes.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-a-q02",
    prompt: "Identify the noun: The curiosity of the child surprised us.",
    options: [
      { id: "a", text: "surprised" },
      { id: "b", text: "curiosity" },
      { id: "c", text: "us" },
      { id: "d", text: "of" }
    ],
    answerId: "b",
    explanation: "Curiosity names an idea \u2014 a noun.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-a-q03",
    prompt: "Which word is an adjective in \u201cThe quiet library calmed Mira\u201d?",
    options: [
      { id: "a", text: "library" },
      { id: "b", text: "calmed" },
      { id: "c", text: "quiet" },
      { id: "d", text: "Mira" }
    ],
    answerId: "c",
    explanation: "Quiet describes the library.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-a-q04",
    prompt: "Choose the correct pronoun: ____ are waiting outside.",
    options: [
      { id: "a", text: "Them" },
      { id: "b", text: "Their" },
      { id: "c", text: "Theirs" },
      { id: "d", text: "They" }
    ],
    answerId: "d",
    explanation: "Subject pronoun They is needed.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-a-q05",
    prompt: "Pick the adverb: He spoke ____.",
    options: [
      { id: "a", text: "softly" },
      { id: "b", text: "soft" },
      { id: "c", text: "soften" },
      { id: "d", text: "softness" }
    ],
    answerId: "a",
    explanation: "Softly tells how he spoke.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-a-q06",
    prompt: "Correct article: She bought ____ umbrella.",
    options: [
      { id: "a", text: "a" },
      { id: "b", text: "an" },
      { id: "c", text: "the only if unique always" },
      { id: "d", text: "no article possible" }
    ],
    answerId: "b",
    explanation: "Umbrella begins with a vowel sound \u2192 an.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-a-q07",
    prompt: "Choose the correct tense: Yesterday we ____ a film.",
    options: [
      { id: "a", text: "watch" },
      { id: "b", text: "watching" },
      { id: "c", text: "watched" },
      { id: "d", text: "watches" }
    ],
    answerId: "c",
    explanation: "Yesterday signals past tense.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-a-q08",
    prompt: "Identify the preposition: The cat slept under the table.",
    options: [
      { id: "a", text: "cat" },
      { id: "b", text: "slept" },
      { id: "c", text: "table" },
      { id: "d", text: "under" }
    ],
    answerId: "d",
    explanation: "Under shows position.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-a-q09",
    prompt: "Which sentence is punctuated correctly?",
    options: [
      { id: "a", text: "\u201cAre you ready?\u201d asked Kabir." },
      { id: "b", text: "\u201cAre you ready\u201d asked Kabir?" },
      { id: "c", text: "Are you ready? asked Kabir." },
      { id: "d", text: "\u201cAre you ready,\u201d asked Kabir?" }
    ],
    answerId: "a",
    explanation: "Question mark stays inside the quote; attribution follows.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-a-q10",
    prompt: "Choose the conjunction: I stayed indoors ____ it was raining.",
    options: [
      { id: "a", text: "but only as contrast without cause" },
      { id: "b", text: "because" },
      { id: "c", text: "or" },
      { id: "d", text: "nor" }
    ],
    answerId: "b",
    explanation: "Because shows cause.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-a-q11",
    prompt: "Correct form: Neither of the answers ____ correct.",
    options: [
      { id: "a", text: "are" },
      { id: "b", text: "were being" },
      { id: "c", text: "is" },
      { id: "d", text: "have" }
    ],
    answerId: "c",
    explanation: "Neither is singular \u2192 is.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-a-q12",
    prompt: "Identify the direct object: Riya wrote a letter.",
    options: [
      { id: "a", text: "Riya" },
      { id: "b", text: "wrote" },
      { id: "c", text: "a" },
      { id: "d", text: "letter" }
    ],
    answerId: "d",
    explanation: "Letter receives the action of wrote.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-a-q13",
    prompt: "Choose correct comparative: This bag is ____ than that one.",
    options: [
      { id: "a", text: "lighter" },
      { id: "b", text: "more lighter" },
      { id: "c", text: "lightest" },
      { id: "d", text: "most light" }
    ],
    answerId: "a",
    explanation: "Lighter is the correct comparative; avoid double comparative.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-a-q14",
    prompt: "Which is a complex sentence?",
    options: [
      { id: "a", text: "We played." },
      { id: "b", text: "Although it rained, we played." },
      { id: "c", text: "Rained and played." },
      { id: "d", text: "Play!" }
    ],
    answerId: "b",
    explanation: "It has a dependent clause (Although\u2026) plus a main clause.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-a-q15",
    prompt: "Correct possessive: This is ____ book.",
    options: [
      { id: "a", text: "Mayas" },
      { id: "b", text: "Maya" },
      { id: "c", text: "Maya\u2019s" },
      { id: "d", text: "Mayas\u2019" }
    ],
    answerId: "c",
    explanation: "Singular possessive adds \u2019s.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-a-q16",
    prompt: "Choose the right verb: The news ____ surprising.",
    options: [
      { id: "a", text: "are" },
      { id: "b", text: "were" },
      { id: "c", text: "have" },
      { id: "d", text: "is" }
    ],
    answerId: "d",
    explanation: "News is singular in standard usage.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-a-q17",
    prompt: "Identify the interjection: Wow, that sparkler is bright!",
    options: [
      { id: "a", text: "Wow" },
      { id: "b", text: "sparkler" },
      { id: "c", text: "bright" },
      { id: "d", text: "that" }
    ],
    answerId: "a",
    explanation: "Wow expresses sudden feeling.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-a-q18",
    prompt: "Correct: Each of the students ____ a notebook.",
    options: [
      { id: "a", text: "have" },
      { id: "b", text: "has" },
      { id: "c", text: "having" },
      { id: "d", text: "are having" }
    ],
    answerId: "b",
    explanation: "Each is singular \u2192 has.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-a-q19",
    prompt: "Which sentence uses the passive voice?",
    options: [
      { id: "a", text: "Arun cleaned the window." },
      { id: "b", text: "Arun is cleaning." },
      { id: "c", text: "The window was cleaned by Arun." },
      { id: "d", text: "Clean the window!" }
    ],
    answerId: "c",
    explanation: "Was cleaned focuses on the receiver of the action.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-a-q20",
    prompt: "Choose correct relative pronoun: The girl ____ won the race is my cousin.",
    options: [
      { id: "a", text: "which" },
      { id: "b", text: "whom\u2019s" },
      { id: "c", text: "what" },
      { id: "d", text: "who" }
    ],
    answerId: "d",
    explanation: "Who refers to people as subject.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-a-q21",
    prompt: "Fill in: If it rains, we ____ indoors.",
    options: [
      { id: "a", text: "will stay" },
      { id: "b", text: "stayed" },
      { id: "c", text: "staying" },
      { id: "d", text: "have stayed yesterday" }
    ],
    answerId: "a",
    explanation: "First conditional: If + present, will + base verb.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-a-q22",
    prompt: "Identify the subject: Across the field ran the dogs.",
    options: [
      { id: "a", text: "Across" },
      { id: "b", text: "the dogs" },
      { id: "c", text: "field" },
      { id: "d", text: "ran" }
    ],
    answerId: "b",
    explanation: "Dogs perform the action (inverted sentence).",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-a-q23",
    prompt: "Correct plural: The ____ are sharp.",
    options: [
      { id: "a", text: "knifes" },
      { id: "b", text: "knife\u2019s" },
      { id: "c", text: "knives" },
      { id: "d", text: "knive" }
    ],
    answerId: "c",
    explanation: "Knife \u2192 knives.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-a-q24",
    prompt: "Choose the correctly ordered adjectives: She adopted a ____ puppy.",
    options: [
      { id: "a", text: "brown small" },
      { id: "b", text: "brownly small" },
      { id: "c", text: "smallness brown" },
      { id: "d", text: "small brown" }
    ],
    answerId: "d",
    explanation: "Opinion/size before colour is the usual order: small brown.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g7-eng-grammar-b-q01",
    prompt: "Choose correct: Neither Ravi nor his friends ____ late.",
    options: [
      { id: "a", text: "are" },
      { id: "b", text: "is" },
      { id: "c", text: "was being" },
      { id: "d", text: "has" }
    ],
    answerId: "a",
    explanation: "With neither\u2026nor, the verb agrees with the nearer subject (friends \u2192 are).",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-b-q02",
    prompt: "Identify the clause type: \u201cwhen the bell rang\u201d in \u201cWe left when the bell rang.\u201d",
    options: [
      { id: "a", text: "Noun only" },
      { id: "b", text: "Adverb clause" },
      { id: "c", text: "Adjective phrase only" },
      { id: "d", text: "Interjection" }
    ],
    answerId: "b",
    explanation: "It tells when \u2014 an adverb clause of time.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-b-q03",
    prompt: "Correct punctuation for a list: We need pens, pencils, ____ erasers.",
    options: [
      { id: "a", text: "or only forever" },
      { id: "b", text: "but" },
      { id: "c", text: "and" },
      { id: "d", text: "nor" }
    ],
    answerId: "c",
    explanation: "Use and before the final item in a simple list.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-b-q04",
    prompt: "Choose the gerund: ____ is good exercise.",
    options: [
      { id: "a", text: "Swam" },
      { id: "b", text: "Swimmed" },
      { id: "c", text: "To swam" },
      { id: "d", text: "Swimming" }
    ],
    answerId: "d",
    explanation: "Swimming acts as a noun (gerund).",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-b-q05",
    prompt: "Which sentence is imperative?",
    options: [
      { id: "a", text: "Please close the door." },
      { id: "b", text: "The door is closed." },
      { id: "c", text: "Is the door closed?" },
      { id: "d", text: "The door closed itself in a story only." }
    ],
    answerId: "a",
    explanation: "Imperatives give requests or commands.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-b-q06",
    prompt: "Correct: The committee ____ decided.",
    options: [
      { id: "a", text: "have been many people always" },
      { id: "b", text: "has" },
      { id: "c", text: "are deciding as many always" },
      { id: "d", text: "were many" }
    ],
    answerId: "b",
    explanation: "Committee as a single unit takes singular has in this sense.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-b-q07",
    prompt: "Choose correct modal: You ____ wear a helmet. (strong obligation)",
    options: [
      { id: "a", text: "might" },
      { id: "b", text: "could for weak only" },
      { id: "c", text: "must" },
      { id: "d", text: "may perhaps" }
    ],
    answerId: "c",
    explanation: "Must expresses strong obligation.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-b-q08",
    prompt: "Identify the object pronoun: Give the book to ____.",
    options: [
      { id: "a", text: "she" },
      { id: "b", text: "hers only as possessive noun phrase" },
      { id: "c", text: "herself as intensive without object need" },
      { id: "d", text: "her" }
    ],
    answerId: "d",
    explanation: "After a preposition, use object pronoun her.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-b-q09",
    prompt: "Correct reported speech: He said, \u201cI am tired.\u201d \u2192 He said that he ____ tired.",
    options: [
      { id: "a", text: "was" },
      { id: "b", text: "is" },
      { id: "c", text: "am" },
      { id: "d", text: "be" }
    ],
    answerId: "a",
    explanation: "Present becomes past in backshift: am \u2192 was.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-b-q10",
    prompt: "Which word is a correlative pair with \u201cnot only\u201d?",
    options: [
      { id: "a", text: "and or" },
      { id: "b", text: "but also" },
      { id: "c", text: "because" },
      { id: "d", text: "under" }
    ],
    answerId: "b",
    explanation: "Not only\u2026 but also\u2026",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-b-q11",
    prompt: "Choose correct: Between you and ____, this plan works.",
    options: [
      { id: "a", text: "I" },
      { id: "b", text: "myself always" },
      { id: "c", text: "me" },
      { id: "d", text: "mine" }
    ],
    answerId: "c",
    explanation: "Object of preposition between \u2192 me.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-b-q12",
    prompt: "Identify the finite verb: To win is his dream, but he trains hard.",
    options: [
      { id: "a", text: "To win" },
      { id: "b", text: "dream" },
      { id: "c", text: "hard" },
      { id: "d", text: "trains" }
    ],
    answerId: "d",
    explanation: "Trains is finite (tense-marked); \u201cTo win\u201d is infinitive.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-b-q13",
    prompt: "Correct article usage: ____ Himalayas are majestic.",
    options: [
      { id: "a", text: "The" },
      { id: "b", text: "A" },
      { id: "c", text: "An" },
      { id: "d", text: "No article" }
    ],
    answerId: "a",
    explanation: "Mountain ranges take the.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-b-q14",
    prompt: "Choose the correct question tag: You are ready, ____?",
    options: [
      { id: "a", text: "are you not you" },
      { id: "b", text: "aren\u2019t you" },
      { id: "c", text: "isn\u2019t I" },
      { id: "d", text: "don\u2019t we" }
    ],
    answerId: "b",
    explanation: "Positive statement \u2192 negative tag with matching verb.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-b-q15",
    prompt: "Which is a compound sentence?",
    options: [
      { id: "a", text: "When I cooked, she cleaned." },
      { id: "b", text: "Cooking." },
      { id: "c", text: "I cooked, and she cleaned." },
      { id: "d", text: "She." }
    ],
    answerId: "c",
    explanation: "Two independent clauses joined by and.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-b-q16",
    prompt: "Correct: One of my friends ____ abroad.",
    options: [
      { id: "a", text: "live" },
      { id: "b", text: "living" },
      { id: "c", text: "have lived always as plural" },
      { id: "d", text: "lives" }
    ],
    answerId: "d",
    explanation: "One is singular \u2192 lives.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-b-q17",
    prompt: "Identify the appositive: My brother, a pilot, visited us.",
    options: [
      { id: "a", text: "a pilot" },
      { id: "b", text: "visited" },
      { id: "c", text: "us" },
      { id: "d", text: "My" }
    ],
    answerId: "a",
    explanation: "A pilot renames brother.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-b-q18",
    prompt: "Choose correct: She insisted on ____ early.",
    options: [
      { id: "a", text: "leave" },
      { id: "b", text: "leaving" },
      { id: "c", text: "to left" },
      { id: "d", text: "left" }
    ],
    answerId: "b",
    explanation: "Insist on + gerund.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-b-q19",
    prompt: "Which sentence avoids a double negative?",
    options: [
      { id: "a", text: "I don\u2019t have no homework." },
      { id: "b", text: "I can\u2019t hardly see no board." },
      { id: "c", text: "I have no homework." },
      { id: "d", text: "I never told nobody." }
    ],
    answerId: "c",
    explanation: "A single negative is enough.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-b-q20",
    prompt: "Correct degree: Mount Everest is the ____ peak.",
    options: [
      { id: "a", text: "higher" },
      { id: "b", text: "high" },
      { id: "c", text: "more highest" },
      { id: "d", text: "highest" }
    ],
    answerId: "d",
    explanation: "Superlative highest for comparison among many.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-b-q21",
    prompt: "Choose correct preposition: She is good ____ chess.",
    options: [
      { id: "a", text: "at" },
      { id: "b", text: "in on always" },
      { id: "c", text: "for by" },
      { id: "d", text: "over" }
    ],
    answerId: "a",
    explanation: "Good at a skill.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-b-q22",
    prompt: "Identify transitive verb usage: She ____ a poem.",
    options: [
      { id: "a", text: "slept" },
      { id: "b", text: "wrote" },
      { id: "c", text: "arrived" },
      { id: "d", text: "smiled" }
    ],
    answerId: "b",
    explanation: "Wrote takes an object (poem).",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-b-q23",
    prompt: "Correct: Hardly had we entered ____ it began to rain.",
    options: [
      { id: "a", text: "than" },
      { id: "b", text: "then" },
      { id: "c", text: "when" },
      { id: "d", text: "because" }
    ],
    answerId: "c",
    explanation: "Hardly\u2026 when\u2026 is the standard correlative.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-b-q24",
    prompt: "Which sentence has correct subject\u2013verb agreement?",
    options: [
      { id: "a", text: "The list of names are long." },
      { id: "b", text: "The lists of name is long." },
      { id: "c", text: "Names is a list." },
      { id: "d", text: "The list of names is long." }
    ],
    answerId: "d",
    explanation: "The head noun list is singular \u2192 is.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\u270f\ufe0f",
    title: "Grammar Builders",
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
      { label: "Agreement", reveal: "Subjects and verbs must match", emoji: "\ud83d\udd17" },
      { label: "Tense", reveal: "Time words cue the verb form", emoji: "\u23f0" },
      { label: "Parts of speech", reveal: "Every word has a job", emoji: "\ud83e\uddf1" },
      { label: "Punctuation", reveal: "Marks guide meaning", emoji: "\u2712\ufe0f" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "They ____ playing outside.",
    options: [
        { id: "a", text: "is" },
        { id: "b", text: "are" },
        { id: "c", text: "am" },
        { id: "d", text: "be" }
    ],
    answerId: "b",
    why: "They is plural \u2192 are.",
    visual: "sentence",
    speak: "They ____ playing outside.",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Match subject and verb", "Watch tense cues", "Know word jobs", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g7EnglishGrammar: ChapterDef = {
  id: "grammar-builders",
  title: "Grammar Builders",
  emoji: "\u270f\ufe0f",
  blurb: "Agreement, tense and sentence craft",
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
  paperTopics: ["grammar", "comprehension"],
};

export const g7EnglishGrammarQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
