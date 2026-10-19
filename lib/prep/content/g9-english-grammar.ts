import type { ChapterDef, PrepQuestion } from "../types";

/** Grammar Workshop - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g9-eng-ch02-a-q01",
    prompt: "Choose the correct sentence.",
    options: [
      { id: "a", text: "She doesn’t like tea." },
      { id: "b", text: "She don’t like tea." },
      { id: "c", text: "She doesn’t likes tea." },
      { id: "d", text: "She not like tea." }
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
      { id: "a", text: "The meal cooked the chef." },
      { id: "b", text: "The meal is cooking the chef." },
      { id: "c", text: "The meal was cooked by the chef." },
      { id: "d", text: "The chef was cooked the meal." }
    ],
    answerId: "c",
    explanation: "Object becomes subject; past simple → was/were + past participle.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-a-q04",
    prompt: "Reported speech: Meena said, “I can solve this puzzle.” → Meena said that she ____ solve that puzzle.",
    options: [
      { id: "a", text: "can" },
      { id: "b", text: "will" },
      { id: "c", text: "may" },
      { id: "d", text: "could" }
    ],
    answerId: "d",
    explanation: "After the past reporting verb 'said', 'can' shifts back to 'could'. 'can' keeps the direct-speech form, which clashes with 'said'.",
    hints: ["\"said\" is past, so the modal in the reported clause shifts back.", "Each present modal has a past partner; find the partner of the one Meena used."]
  },
  {
    id: "g9-eng-ch02-a-q05",
    prompt: "Choose the correct article: She is ____ honest person.",
    options: [
      { id: "a", text: "an" },
      { id: "b", text: "a" },
      { id: "c", text: "the" },
      { id: "d", text: "no article" }
    ],
    answerId: "a",
    explanation: "Honest begins with a vowel sound → an.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-a-q06",
    prompt: "Identify the error: “Neither of the answers are correct.”",
    options: [
      { id: "a", text: "Neither" },
      { id: "b", text: "are → should be is" },
      { id: "c", text: "of the answers" },
      { id: "d", text: "correct" }
    ],
    answerId: "b",
    explanation: "Neither is singular → is.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-a-q07",
    prompt: "Modal: You ____ be exhausted after such a long journey. (logical certainty)",
    options: [
      { id: "a", text: "might" },
      { id: "b", text: "could" },
      { id: "c", text: "must" },
      { id: "d", text: "may" }
    ],
    answerId: "c",
    explanation: "'Must' expresses a confident deduction. 'might' and 'may' show only possibility, which is weaker than the certainty asked for.",
    hints: ["The speaker draws a confident conclusion about the long journey, not an order.", "Pick the modal that shows a strong, logical deduction."]
  },
  {
    id: "g9-eng-ch02-a-q08",
    prompt: "Choose the correct verb: The furniture in this room ____ new.",
    options: [
      { id: "a", text: "are" },
      { id: "b", text: "were" },
      { id: "c", text: "have" },
      { id: "d", text: "is" }
    ],
    answerId: "d",
    explanation: "'Furniture' is uncountable, so it takes a singular verb: is. 'are' is tempting because a room has many pieces, but the noun itself is singular.",
    hints: ["\"Furniture\" counts as an uncountable noun.", "Uncountable nouns take a singular verb, even when they mean many items."]
  },
  {
    id: "g9-eng-ch02-a-q09",
    prompt: "Fill in: If you heat ice, it ____.",
    options: [
      { id: "a", text: "melts" },
      { id: "b", text: "melted" },
      { id: "c", text: "would melt" },
      { id: "d", text: "had melted" }
    ],
    answerId: "a",
    explanation: "This is the zero conditional for a general truth: if + present, present. So “it melts”. “Would melt” is tempting, but that belongs to the second conditional, used for imaginary situations.",
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
      { id: "a", text: "active voice" },
      { id: "b", text: "imperative" },
      { id: "c", text: "passive voice" },
      { id: "d", text: "interrogative" }
    ],
    answerId: "c",
    explanation: "Was sung + by-phrase marks passive.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-a-q12",
    prompt: "Choose: She has been working here ____ 2019.",
    options: [
      { id: "a", text: "for" },
      { id: "b", text: "from" },
      { id: "c", text: "at" },
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
      { id: "b", text: "live" },
      { id: "c", text: "do live" },
      { id: "d", text: "am living yesterday" }
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
    prompt: "Identify the clause type: “that she was right” in “Everyone knew that she was right.”",
    options: [
      { id: "a", text: "adjective clause" },
      { id: "b", text: "adverb clause of reason" },
      { id: "c", text: "noun clause" },
      { id: "d", text: "main clause" }
    ],
    answerId: "c",
    explanation: "The clause is the object of “knew” (knew what?), so it is a noun clause. It is tempting to call it an adjective clause because it begins with “that”, but it does not describe any noun.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-a-q16",
    prompt: "Fill: Not only the captain but also the players ____ tired.",
    options: [
      { id: "a", text: "is" },
      { id: "b", text: "was" },
      { id: "c", text: "has" },
      { id: "d", text: "are" }
    ],
    answerId: "d",
    explanation: "With 'not only … but also', the verb agrees with the nearer subject, 'the players', so 'are'. 'is' would agree with 'the captain', which is further away.",
    hints: ["With \"not only … but also\", the verb agrees with the nearer subject.", "\"the players\" sits right next to the blank, and it is plural."]
  },
  {
    id: "g9-eng-ch02-a-q17",
    prompt: "Choose correct: I look forward to ____ you.",
    options: [
      { id: "a", text: "meeting" },
      { id: "b", text: "meet" },
      { id: "c", text: "met" },
      { id: "d", text: "meets" }
    ],
    answerId: "a",
    explanation: "Look forward to + gerund.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-a-q18",
    prompt: "Passive of “People speak English here.”",
    options: [
      { id: "a", text: "English spoken here people." },
      { id: "b", text: "English is spoken here." },
      { id: "c", text: "English was speak here." },
      { id: "d", text: "English are spoken here." }
    ],
    answerId: "b",
    explanation: "Present simple passive: is/are + past participle; English is singular mass → is spoken.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-a-q19",
    prompt: "Choose the right determiner: We don’t have ____ time before the train leaves.",
    options: [
      { id: "a", text: "many" },
      { id: "b", text: "few" },
      { id: "c", text: "much" },
      { id: "d", text: "several" }
    ],
    answerId: "c",
    explanation: "Here 'time' is uncountable (an amount), so 'much'. 'many' goes with countable plurals such as minutes.",
    hints: ["Here \"time\" means an amount, not a number of occasions.", "Time as an amount is uncountable; pick the determiner for amounts."]
  },
  {
    id: "g9-eng-ch02-a-q20",
    prompt: "Error spot: “He suggested to go home.” Correct form uses…",
    options: [
      { id: "a", text: "suggested to go" },
      { id: "b", text: "suggested go" },
      { id: "c", text: "suggested gone" },
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
      { id: "b", text: "has" },
      { id: "c", text: "have" },
      { id: "d", text: "having" }
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
      { id: "a", text: "go" },
      { id: "b", text: "gone" },
      { id: "c", text: "went" },
      { id: "d", text: "going" }
    ],
    answerId: "c",
    explanation: "It’s time + past tense form (unreal present).",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-a-q24",
    prompt: "Choose correct preposition: She is afraid ____ spiders.",
    options: [
      { id: "a", text: "in" },
      { id: "b", text: "on" },
      { id: "c", text: "by" },
      { id: "d", text: "of" }
    ],
    answerId: "d",
    explanation: "'Afraid' is always followed by 'of'. 'by' might seem to show cause, but 'afraid by' is not standard English.",
    hints: ["\"afraid\" is followed by a fixed preposition.", "We say \"scared ___ the dark\"; the same preposition follows afraid."]
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
      { id: "a", text: "The storm was broken the window." },
      { id: "b", text: "The storm broke the window." },
      { id: "c", text: "The window broke the storm." },
      { id: "d", text: "The storm broken window." }
    ],
    answerId: "b",
    explanation: "Restore the agent as subject; past simple active: broke.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-b-q03",
    prompt: "Reported: She said, “I will call tomorrow.” → She said she ____ call the next day.",
    options: [
      { id: "a", text: "will" },
      { id: "b", text: "shall" },
      { id: "c", text: "would" },
      { id: "d", text: "can" }
    ],
    answerId: "c",
    explanation: "Will → would; tomorrow → the next day.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-b-q04",
    prompt: "Fill: He has lived here ____ five years.",
    options: [
      { id: "a", text: "since" },
      { id: "b", text: "from" },
      { id: "c", text: "during" },
      { id: "d", text: "for" }
    ],
    answerId: "d",
    explanation: "Five years is a duration, so use for. Since takes a starting point.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-b-q05",
    prompt: "Choose the correct question tag: Let’s go for a walk, ____?",
    options: [
      { id: "a", text: "shall we" },
      { id: "b", text: "will you" },
      { id: "c", text: "won’t we" },
      { id: "d", text: "don’t we" }
    ],
    answerId: "a",
    explanation: "Sentences beginning with 'Let's' take the tag 'shall we?'. 'will you?' is used after commands such as 'Close the door'.",
    hints: ["\"Let's\" includes both the speaker and the listener.", "Tags after \"Let's\" use a special modal, not do or will."]
  },
  {
    id: "g9-eng-ch02-b-q06",
    prompt: "Identify tense: “She had been waiting for an hour when the bus arrived.”",
    options: [
      { id: "a", text: "present perfect" },
      { id: "b", text: "past perfect continuous" },
      { id: "c", text: "simple past" },
      { id: "d", text: "future perfect" }
    ],
    answerId: "b",
    explanation: "Had been + -ing marks past perfect continuous.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-b-q07",
    prompt: "Choose: Not until the rain stopped ____ we leave the shelter.",
    options: [
      { id: "a", text: "than" },
      { id: "b", text: "then" },
      { id: "c", text: "did" },
      { id: "d", text: "that" }
    ],
    answerId: "c",
    explanation: "When a sentence starts with 'Not until …', the main clause is inverted: did we leave. 'then' is tempting, but it leaves the clause without its auxiliary.",
    hints: ["Starting with \"Not until\" makes the main clause flip its word order.", "The main clause needs an auxiliary before \"we leave\", as in a question."]
  },
  {
    id: "g9-eng-ch02-b-q08",
    prompt: "Correct the adjective order: “a leather black new bag” →",
    options: [
      { id: "a", text: "a black new leather bag" },
      { id: "b", text: "a leather new black bag" },
      { id: "c", text: "a new leather black bag" },
      { id: "d", text: "a new black leather bag" }
    ],
    answerId: "d",
    explanation: "Typical order: opinion/age → colour → material.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-b-q09",
    prompt: "Fill: Prefer tea ____ coffee.",
    options: [
      { id: "a", text: "to" },
      { id: "b", text: "than" },
      { id: "c", text: "from" },
      { id: "d", text: "over than" }
    ],
    answerId: "a",
    explanation: "Prefer A to B.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-b-q10",
    prompt: "Which of these is a complex sentence?",
    options: [
      { id: "a", text: "She won and she smiled." },
      { id: "b", text: "She smiled because she had won." },
      { id: "c", text: "She smiled." },
      { id: "d", text: "Smile!" }
    ],
    answerId: "b",
    explanation: "A complex sentence has a main clause and a dependent clause; “because she had won” cannot stand alone. “She won and she smiled” is tempting because it has two clauses, but both are main clauses joined by “and”, so it is compound.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-b-q11",
    prompt: "Choose: Each of the players ____ a medal.",
    options: [
      { id: "a", text: "receive" },
      { id: "b", text: "have received" },
      { id: "c", text: "receives" },
      { id: "d", text: "are receiving" }
    ],
    answerId: "c",
    explanation: "Each is singular → receives.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-b-q12",
    prompt: "Passive: “They are repairing the road.”",
    options: [
      { id: "a", text: "The road is repaired them." },
      { id: "b", text: "The road was being repair." },
      { id: "c", text: "The road repairs." },
      { id: "d", text: "The road is being repaired." }
    ],
    answerId: "d",
    explanation: "Present continuous passive: is/are being + past participle.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-b-q13",
    prompt: "Choose synonym of the underlined idea: She was hesitant to raise her hand. She was…",
    options: [
      { id: "a", text: "unsure" },
      { id: "b", text: "eager" },
      { id: "c", text: "loud" },
      { id: "d", text: "certain" }
    ],
    answerId: "a",
    explanation: "Hesitant means unsure and slow to act. 'certain' is the opposite.",
    hints: ["She paused and waited before raising her hand.", "Find the word for not feeling confident about acting, like hesitant."]
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
      { id: "b", text: "closing" },
      { id: "c", text: "to close" },
      { id: "d", text: "closed" }
    ],
    answerId: "c",
    explanation: "Told + object + to-infinitive.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-b-q16",
    prompt: "Choose correct: The teacher gave the prize to Asha and ____.",
    options: [
      { id: "a", text: "I" },
      { id: "b", text: "myself" },
      { id: "c", text: "mine" },
      { id: "d", text: "me" }
    ],
    answerId: "d",
    explanation: "After the preposition 'to', use the object pronoun: me. 'I' sounds polite, but it is the subject form.",
    hints: ["Drop \"Asha and\" and say the sentence with just the pronoun.", "After \"to\", a pronoun takes its object form."]
  },
  {
    id: "g9-eng-ch02-b-q17",
    prompt: "Which sentence is in the present perfect?",
    options: [
      { id: "a", text: "She has written a letter." },
      { id: "b", text: "She wrote a letter." },
      { id: "c", text: "She had written a letter." },
      { id: "d", text: "She writes a letter." }
    ],
    answerId: "a",
    explanation: "Has/have + past participle = present perfect.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-b-q18",
    prompt: "Error: “One of my friend is a pilot.” Correction:",
    options: [
      { id: "a", text: "One of my friend are a pilot." },
      { id: "b", text: "One of my friends is a pilot." },
      { id: "c", text: "One of my friends are a pilot." },
      { id: "d", text: "One my friends is a pilot." }
    ],
    answerId: "b",
    explanation: "One of + plural noun + singular verb.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-b-q19",
    prompt: "Fill: No sooner had she left ____ the phone rang.",
    options: [
      { id: "a", text: "when" },
      { id: "b", text: "then" },
      { id: "c", text: "than" },
      { id: "d", text: "but" }
    ],
    answerId: "c",
    explanation: "No sooner…than.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-b-q20",
    prompt: "Choose: The man ____ house we bought is a doctor. (relative)",
    options: [
      { id: "a", text: "who" },
      { id: "b", text: "whom" },
      { id: "c", text: "which" },
      { id: "d", text: "whose" }
    ],
    answerId: "d",
    explanation: "Whose shows possession (man’s house).",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-b-q21",
    prompt: "Conditional: If I ____ you, I would apologise.",
    options: [
      { id: "a", text: "were" },
      { id: "b", text: "am" },
      { id: "c", text: "was" },
      { id: "d", text: "will be" }
    ],
    answerId: "a",
    explanation: "Second conditional often uses were for all persons (subjunctive). 'was' is common in casual speech, but formal English uses 'were'.",
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
      { id: "b", text: "she" },
      { id: "c", text: "to win" },
      { id: "d", text: "hopes to" }
    ],
    answerId: "c",
    explanation: "“To win” is the to-infinitive: to + the base verb. “Hopes” is the main verb that changes with the subject (she hopes, they hope), and “hopes to” is tempting but wrongly pairs “to” with the main verb instead of with “win”.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g9-eng-ch02-b-q24",
    prompt: "Choose: Seldom ____ such courage.",
    options: [
      { id: "a", text: "we have seen" },
      { id: "b", text: "we saw have" },
      { id: "c", text: "seen we have" },
      { id: "d", text: "have we seen" }
    ],
    answerId: "d",
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
