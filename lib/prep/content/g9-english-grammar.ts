import type { ChapterDef, PrepQuestion } from "../types";

/** Grammar Workshop - authored olympiad-style content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g9-eng-ch02-a-q01",
    prompt: "Choose the correct sentence.",
    options: [
      { id: "a", text: "She doesn’t like tea." },
      { id: "b", text: "She doesn’t likes tea." },
      { id: "c", text: "She not like tea." },
      { id: "d", text: "She don’t like tea." }
    ],
    answerId: "a",
    explanation: "Third-person singular needs doesn’t + base verb.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-a-q02",
    prompt: "Fill in: By next June, we ____ here for ten years.",
    options: [
      { id: "a", text: "will live" },
      { id: "b", text: "will have lived" },
      { id: "c", text: "lived" },
      { id: "d", text: "are living" }
    ],
    answerId: "b",
    explanation: "Future perfect marks duration completed by a future point.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-a-q03",
    prompt: "Change to passive: “The chef cooked the meal.”",
    options: [
      { id: "a", text: "The chef was cooked the meal." },
      { id: "b", text: "The meal cooked the chef." },
      { id: "c", text: "The meal was cooked by the chef." },
      { id: "d", text: "The meal is cooking the chef." }
    ],
    answerId: "c",
    explanation: "Object becomes subject; past simple → was/were + past participle.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-a-q04",
    prompt: "Reported speech: He said, “I am tired.” → He said that he ____ tired.",
    options: [
      { id: "a", text: "will be" },
      { id: "b", text: "were being" },
      { id: "c", text: "is" },
      { id: "d", text: "was" }
    ],
    answerId: "d",
    explanation: "Backshift present to past after a past reporting verb.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-a-q05",
    prompt: "Choose the correct article: She is ____ honest person.",
    options: [
      { id: "a", text: "an" },
      { id: "b", text: "the" },
      { id: "c", text: "no article" },
      { id: "d", text: "a" }
    ],
    answerId: "a",
    explanation: "Honest begins with a vowel sound → an.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-a-q06",
    prompt: "Identify the error: “Neither of the answers are correct.”",
    options: [
      { id: "a", text: "of the answers" },
      { id: "b", text: "are → should be is" },
      { id: "c", text: "correct" },
      { id: "d", text: "Neither" }
    ],
    answerId: "b",
    explanation: "Neither is singular → is.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-a-q07",
    prompt: "Modal: You ____ wear a helmet on this site. (strong obligation)",
    options: [
      { id: "a", text: "may" },
      { id: "b", text: "might" },
      { id: "c", text: "must" },
      { id: "d", text: "could" }
    ],
    answerId: "c",
    explanation: "Must expresses strong obligation.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-a-q08",
    prompt: "Choose the correct verb: The news ____ surprising.",
    options: [
      { id: "a", text: "were" },
      { id: "b", text: "have" },
      { id: "c", text: "are" },
      { id: "d", text: "is" }
    ],
    answerId: "d",
    explanation: "News is singular in standard English → is.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-a-q09",
    prompt: "Fill in: If it rains, we ____ indoors.",
    options: [
      { id: "a", text: "stay" },
      { id: "b", text: "stayed" },
      { id: "c", text: "would stayed" },
      { id: "d", text: "had stayed" }
    ],
    answerId: "a",
    explanation: "First conditional: If + present, will/can/other present forms; “stay” fits as a present/instructional result (or “will stay”). Among options, stay is correct.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-a-q10",
    prompt: "Pick the correctly punctuated sentence.",
    options: [
      { id: "a", text: "Lets go, its late." },
      { id: "b", text: "Let’s go; it’s late." },
      { id: "c", text: "Lets go; its’ late." },
      { id: "d", text: "Let’s go its late." }
    ],
    answerId: "b",
    explanation: "Let’s = let us; it’s = it is; semicolon joins related clauses.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-a-q11",
    prompt: "Voice: “A song was sung by the choir” is…",
    options: [
      { id: "a", text: "interrogative" },
      { id: "b", text: "active voice" },
      { id: "c", text: "passive voice" },
      { id: "d", text: "imperative" }
    ],
    answerId: "c",
    explanation: "Was sung + by-phrase marks passive.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-a-q12",
    prompt: "Choose: She has been working here ____ 2019.",
    options: [
      { id: "a", text: "from" },
      { id: "b", text: "at" },
      { id: "c", text: "for" },
      { id: "d", text: "since" }
    ],
    answerId: "d",
    explanation: "Since + starting point; for + duration.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-a-q13",
    prompt: "Reported: “Where do you live?” she asked me. → She asked me where I ____.",
    options: [
      { id: "a", text: "lived" },
      { id: "b", text: "do live" },
      { id: "c", text: "am living yesterday" },
      { id: "d", text: "live" }
    ],
    answerId: "a",
    explanation: "Wh-question becomes statement order with backshift: lived.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-a-q14",
    prompt: "Select the correct comparative: This puzzle is ____ than that one.",
    options: [
      { id: "a", text: "more easier" },
      { id: "b", text: "easier" },
      { id: "c", text: "easyer" },
      { id: "d", text: "most easy" }
    ],
    answerId: "b",
    explanation: "Easier is the correct comparative; avoid double comparative.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-a-q15",
    prompt: "Identify the clause type: “when the bell rang” in “We left when the bell rang.”",
    options: [
      { id: "a", text: "noun clause" },
      { id: "b", text: "adjective clause" },
      { id: "c", text: "adverb clause of time" },
      { id: "d", text: "main clause" }
    ],
    answerId: "c",
    explanation: "It modifies left by telling when — adverbial time clause.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-a-q16",
    prompt: "Fill: Neither Ravi nor his friends ____ ready.",
    options: [
      { id: "a", text: "was" },
      { id: "b", text: "has" },
      { id: "c", text: "is" },
      { id: "d", text: "are" }
    ],
    answerId: "d",
    explanation: "With neither…nor, the verb agrees with the nearer subject (friends → are).",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-a-q17",
    prompt: "Choose correct: I look forward to ____ you.",
    options: [
      { id: "a", text: "meeting" },
      { id: "b", text: "met" },
      { id: "c", text: "meets" },
      { id: "d", text: "meet" }
    ],
    answerId: "a",
    explanation: "Look forward to + gerund.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-a-q18",
    prompt: "Passive of “People speak English here.”",
    options: [
      { id: "a", text: "English are spoken here." },
      { id: "b", text: "English is spoken here." },
      { id: "c", text: "English spoken here people." },
      { id: "d", text: "English was speak here." }
    ],
    answerId: "b",
    explanation: "Present simple passive: is/are + past participle; English is singular mass → is spoken.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-a-q19",
    prompt: "Choose the right determiner: ____ of the milk was spilled.",
    options: [
      { id: "a", text: "Several" },
      { id: "b", text: "Many" },
      { id: "c", text: "Much" },
      { id: "d", text: "Few" }
    ],
    answerId: "c",
    explanation: "Milk is uncountable → much.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-a-q20",
    prompt: "Error spot: “He suggested to go home.” Correct form uses…",
    options: [
      { id: "a", text: "suggested go" },
      { id: "b", text: "suggested gone" },
      { id: "c", text: "suggested to go" },
      { id: "d", text: "suggested going" }
    ],
    answerId: "d",
    explanation: "Suggest + gerund (or that-clause), not to-infinitive.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-a-q21",
    prompt: "Choose: She ____ finished the novel before the exam started.",
    options: [
      { id: "a", text: "had" },
      { id: "b", text: "have" },
      { id: "c", text: "having" },
      { id: "d", text: "has" }
    ],
    answerId: "a",
    explanation: "Past perfect for earlier past before another past.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-a-q22",
    prompt: "Which sentence uses a non-defining relative clause correctly?",
    options: [
      { id: "a", text: "My brother who lives in Pune is a doctor. (only one brother, commas needed)" },
      { id: "b", text: "My brother, who lives in Pune, is a doctor." },
      { id: "c", text: "My brother, that lives in Pune, is a doctor." },
      { id: "d", text: "My brother which lives in Pune is a doctor." }
    ],
    answerId: "b",
    explanation: "Non-defining clauses take commas; that is not used in non-defining clauses; who for people.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-a-q23",
    prompt: "Fill: It’s time we ____ home.",
    options: [
      { id: "a", text: "going" },
      { id: "b", text: "go" },
      { id: "c", text: "went" },
      { id: "d", text: "gone" }
    ],
    answerId: "c",
    explanation: "It’s time + past tense form (unreal present).",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-a-q24",
    prompt: "Choose correct preposition: She is good ____ mathematics.",
    options: [
      { id: "a", text: "on" },
      { id: "b", text: "by" },
      { id: "c", text: "in" },
      { id: "d", text: "at" }
    ],
    answerId: "d",
    explanation: "Good at + subject/skill.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g9-eng-ch02-b-q01",
    prompt: "Choose: The team ____ winning after half-time.",
    options: [
      { id: "a", text: "was" },
      { id: "b", text: "were" },
      { id: "c", text: "are" },
      { id: "d", text: "be" }
    ],
    answerId: "a",
    explanation: "Team as a single unit often takes singular was (especially in Indian exam English).",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-b-q02",
    prompt: "Active form of “The window was broken by the storm.”",
    options: [
      { id: "a", text: "The storm broke the window." },
      { id: "b", text: "The storm was broken the window." },
      { id: "c", text: "The window broke the storm." },
      { id: "d", text: "The storm broken window." }
    ],
    answerId: "a",
    explanation: "Restore the agent as subject; past simple active: broke.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-b-q03",
    prompt: "Reported: She said, “I will call tomorrow.” → She said she ____ call the next day.",
    options: [
      { id: "a", text: "will" },
      { id: "b", text: "would" },
      { id: "c", text: "shall" },
      { id: "d", text: "can" }
    ],
    answerId: "b",
    explanation: "Will → would; tomorrow → the next day.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-b-q04",
    prompt: "Fill: He has lived here ____ five years.",
    options: [
      { id: "a", text: "since" },
      { id: "b", text: "for" },
      { id: "c", text: "from" },
      { id: "d", text: "during" }
    ],
    answerId: "b",
    explanation: "Five years is a duration, so use for. Since takes a starting point.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-b-q05",
    prompt: "Choose the correct question tag: You’re ready, ____?",
    options: [
      { id: "a", text: "are you" },
      { id: "b", text: "aren’t you" },
      { id: "c", text: "isn’t you" },
      { id: "d", text: "don’t you" }
    ],
    answerId: "b",
    explanation: "Positive statement → negative tag: aren’t you.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-b-q06",
    prompt: "Identify tense: “She had been waiting for an hour when the bus arrived.”",
    options: [
      { id: "a", text: "past perfect continuous" },
      { id: "b", text: "present perfect" },
      { id: "c", text: "simple past" },
      { id: "d", text: "future perfect" }
    ],
    answerId: "a",
    explanation: "Had been + -ing marks past perfect continuous.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-b-q07",
    prompt: "Choose: Hardly had we entered ____ it started raining.",
    options: [
      { id: "a", text: "when" },
      { id: "b", text: "than" },
      { id: "c", text: "then" },
      { id: "d", text: "that" }
    ],
    answerId: "a",
    explanation: "Hardly…when is the correlative pair.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-b-q08",
    prompt: "Correct the adjective order: “a leather black new bag” →",
    options: [
      { id: "a", text: "a new black leather bag" },
      { id: "b", text: "a black new leather bag" },
      { id: "c", text: "a leather new black bag" },
      { id: "d", text: "a new leather black bag" }
    ],
    answerId: "a",
    explanation: "Typical order: opinion/age → colour → material.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-b-q09",
    prompt: "Fill: Prefer tea ____ coffee.",
    options: [
      { id: "a", text: "than" },
      { id: "b", text: "to" },
      { id: "c", text: "from" },
      { id: "d", text: "over than" }
    ],
    answerId: "b",
    explanation: "Prefer A to B.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-b-q10",
    prompt: "Which is a complex sentence?",
    options: [
      { id: "a", text: "I came and I saw." },
      { id: "b", text: "I came." },
      { id: "c", text: "I came when you called." },
      { id: "d", text: "Come here." }
    ],
    answerId: "c",
    explanation: "One independent + one dependent clause (when…).",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-b-q11",
    prompt: "Choose: Each of the players ____ a medal.",
    options: [
      { id: "a", text: "receive" },
      { id: "b", text: "receives" },
      { id: "c", text: "have received" },
      { id: "d", text: "are receiving" }
    ],
    answerId: "b",
    explanation: "Each is singular → receives.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-b-q12",
    prompt: "Passive: “They are repairing the road.”",
    options: [
      { id: "a", text: "The road is being repaired." },
      { id: "b", text: "The road is repaired them." },
      { id: "c", text: "The road was being repair." },
      { id: "d", text: "The road repairs." }
    ],
    answerId: "a",
    explanation: "Present continuous passive: is/are being + past participle.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-b-q13",
    prompt: "Choose synonym of the underlined idea: He was reluctant to speak. He was…",
    options: [
      { id: "a", text: "eager" },
      { id: "b", text: "unwilling" },
      { id: "c", text: "loud" },
      { id: "d", text: "certain" }
    ],
    answerId: "b",
    explanation: "Reluctant means unwilling/hesitant.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-b-q14",
    prompt: "Fill: She insisted ____ paying the bill.",
    options: [
      { id: "a", text: "to" },
      { id: "b", text: "on" },
      { id: "c", text: "for" },
      { id: "d", text: "at" }
    ],
    answerId: "b",
    explanation: "Insist on + gerund/noun.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-b-q15",
    prompt: "Reported command: “Close the door,” he said to me. → He told me ____ the door.",
    options: [
      { id: "a", text: "close" },
      { id: "b", text: "to close" },
      { id: "c", text: "closing" },
      { id: "d", text: "closed" }
    ],
    answerId: "b",
    explanation: "Told + object + to-infinitive.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-b-q16",
    prompt: "Choose correct: Between you and ____, this is secret.",
    options: [
      { id: "a", text: "I" },
      { id: "b", text: "me" },
      { id: "c", text: "myself" },
      { id: "d", text: "mine" }
    ],
    answerId: "b",
    explanation: "Object of preposition between → me.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-b-q17",
    prompt: "Which sentence is in the present perfect?",
    options: [
      { id: "a", text: "She wrote a letter." },
      { id: "b", text: "She has written a letter." },
      { id: "c", text: "She had written a letter." },
      { id: "d", text: "She writes a letter." }
    ],
    answerId: "b",
    explanation: "Has/have + past participle = present perfect.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-b-q18",
    prompt: "Error: “One of my friend is a pilot.” Correction:",
    options: [
      { id: "a", text: "One of my friends is a pilot." },
      { id: "b", text: "One of my friend are a pilot." },
      { id: "c", text: "One of my friends are a pilot." },
      { id: "d", text: "One my friends is a pilot." }
    ],
    answerId: "a",
    explanation: "One of + plural noun + singular verb.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-b-q19",
    prompt: "Fill: No sooner had she left ____ the phone rang.",
    options: [
      { id: "a", text: "when" },
      { id: "b", text: "than" },
      { id: "c", text: "then" },
      { id: "d", text: "but" }
    ],
    answerId: "b",
    explanation: "No sooner…than.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-b-q20",
    prompt: "Choose: The man ____ house we bought is a doctor. (relative)",
    options: [
      { id: "a", text: "who" },
      { id: "b", text: "whom" },
      { id: "c", text: "whose" },
      { id: "d", text: "which" }
    ],
    answerId: "c",
    explanation: "Whose shows possession (man’s house).",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-b-q21",
    prompt: "Conditional: If I ____ you, I would apologise.",
    options: [
      { id: "a", text: "am" },
      { id: "b", text: "was" },
      { id: "c", text: "were" },
      { id: "d", text: "will be" }
    ],
    answerId: "c",
    explanation: "Second conditional often uses were for all persons (subjunctive).",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-b-q22",
    prompt: "Choose correct spelling in context: Their house is over ____.",
    options: [
      { id: "a", text: "their" },
      { id: "b", text: "there" },
      { id: "c", text: "they’re" },
      { id: "d", text: "thar" }
    ],
    answerId: "b",
    explanation: "There indicates place.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-b-q23",
    prompt: "Identify the infinitive: “She hopes to win.”",
    options: [
      { id: "a", text: "hopes" },
      { id: "b", text: "to win" },
      { id: "c", text: "she" },
      { id: "d", text: "win as bare only" }
    ],
    answerId: "b",
    explanation: "To win is the to-infinitive.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-b-q24",
    prompt: "Choose: Seldom ____ such courage.",
    options: [
      { id: "a", text: "we have seen" },
      { id: "b", text: "have we seen" },
      { id: "c", text: "we saw have" },
      { id: "d", text: "seen we have" }
    ],
    answerId: "b",
    explanation: "Negative adverb fronting triggers inversion: have we seen.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "✏️",
    title: "Grammar workshop",
    body: ["Tense, voice and agreement keep sentences trustworthy.", "Name the rule, then choose the form.", "Lesson is optional; jump to a set anytime."],
    cta: "Let's go!",
    visual: "sentence",
    speak: "We tighten grammar: tense, voice, agreement and reported speech.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "sentence",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Tense", reveal: "Time relationships — perfect forms included", emoji: "⏳" },
      { label: "Voice", reveal: "Active doer vs passive focus", emoji: "🔄" },
      { label: "Agreement", reveal: "Subject and verb must match", emoji: "🤝" },
      { label: "Reported speech", reveal: "Backshift and pronoun changes", emoji: "🗣️" }
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: "Backshift",
    visual: "sentence",
    speak: "He said he was tired — am becomes was.",
    steps: ["Direct: “I am tired.”", "Reporting verb in past", "Am → was", "He said that he was tired."],
    punchline: "Past reporting usually steps the tense back.",
  },
  {
    id: "t1",
    type: "try",
    title: "Your turn",
    prompt: "Neither of the answers ____ correct.",
    options: [
        { id: "a", text: "are" },
        { id: "b", text: "is" },
        { id: "c", text: "were being" },
        { id: "d", text: "have" }
    ],
    answerId: "b",
    why: "Neither is singular → is.",
    visual: "sentence",
    speak: "Neither of the answers ____ correct.",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Grammar engineer!",
    bullets: ["Name the rule", "Watch nearest subject with nor/or", "Passive keeps the tense", "Set A and Set B ready — 24 MCQs each"],
    cta: "Back to chapter",
    speak: "Grammar engineer! You are ready for the practice sets.",
  },
];

export const g9EnglishGrammar: ChapterDef = {
  id: "grammar-workshop",
  title: "Grammar Workshop",
  emoji: "✏️",
  blurb: "Tense, voice, agreement & editing",
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

export const g9EnglishGrammarQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
