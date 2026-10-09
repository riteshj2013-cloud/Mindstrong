import type { ChapterDef, PrepQuestion } from "../types";

/** Grammar - authored olympiad-style content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g10-eng-ch02-a-q01",
    prompt: "Choose the correct form: She ____ to the market yesterday.",
    options: [
      { id: "a", text: "went" },
      { id: "b", text: "go" },
      { id: "c", text: "gone" },
      { id: "d", text: "going" }
    ],
    answerId: "a",
    explanation: "Past simple for a finished time (yesterday).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-a-q02",
    prompt: "Identify the tense: \"They have finished the project.\"",
    options: [
      { id: "a", text: "present perfect" },
      { id: "b", text: "past perfect" },
      { id: "c", text: "simple past" },
      { id: "d", text: "future continuous" }
    ],
    answerId: "a",
    explanation: "have/has + past participle = present perfect.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-a-q03",
    prompt: "Passive of \"The chef cooks the meal\" is \u2014",
    options: [
      { id: "a", text: "The meal is cooked by the chef" },
      { id: "b", text: "The meal cooked the chef" },
      { id: "c", text: "The chef is cooked by the meal" },
      { id: "d", text: "Meal cooks" }
    ],
    answerId: "a",
    explanation: "Object becomes subject; be + V3 + by-agent.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-a-q04",
    prompt: "Reported speech: She said, \"I am tired.\" \u2192 She said that she ____ tired.",
    options: [
      { id: "a", text: "was" },
      { id: "b", text: "is" },
      { id: "c", text: "am" },
      { id: "d", text: "were" }
    ],
    answerId: "a",
    explanation: "Backshift: present \u2192 past after a past reporting verb.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-a-q05",
    prompt: "Choose the correct determiner: ____ of the students were present.",
    options: [
      { id: "a", text: "Most" },
      { id: "b", text: "Much" },
      { id: "c", text: "Little" },
      { id: "d", text: "Each one of much" }
    ],
    answerId: "a",
    explanation: "Most of + plural countable works; much is for uncountables.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-a-q06",
    prompt: "Fill in: Neither of the answers ____ correct.",
    options: [
      { id: "a", text: "is" },
      { id: "b", text: "are" },
      { id: "c", text: "were being" },
      { id: "d", text: "have" }
    ],
    answerId: "a",
    explanation: "Neither of + plural noun often takes singular verb in formal exam English.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-a-q07",
    prompt: "Identify the clause type: \"I know that she is right.\" \u2014 \"that she is right\" is a \u2014",
    options: [
      { id: "a", text: "noun clause" },
      { id: "b", text: "adjective clause only" },
      { id: "c", text: "adverb clause of time" },
      { id: "d", text: "main clause only" }
    ],
    answerId: "a",
    explanation: "It acts as object of know \u2192 noun clause.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-a-q08",
    prompt: "Choose the correct modal: You ____ wear a helmet; it's the rule.",
    options: [
      { id: "a", text: "must" },
      { id: "b", text: "might" },
      { id: "c", text: "could casually" },
      { id: "d", text: "would for past habit only" }
    ],
    answerId: "a",
    explanation: "Must expresses strong obligation/rule.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-a-q09",
    prompt: "Error spot: \"He don't like tea.\" Correct form \u2014",
    options: [
      { id: "a", text: "He doesn't like tea" },
      { id: "b", text: "He don't likes tea" },
      { id: "c", text: "He not like tea" },
      { id: "d", text: "He doesn't likes tea" }
    ],
    answerId: "a",
    explanation: "Third person singular: does not / doesn't + base verb.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-a-q10",
    prompt: "Relative pronoun: The girl ____ won the prize is my cousin.",
    options: [
      { id: "a", text: "who" },
      { id: "b", text: "which" },
      { id: "c", text: "whom for subject" },
      { id: "d", text: "whose prize only without noun" }
    ],
    answerId: "a",
    explanation: "Who for people as subject of the relative clause.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-a-q11",
    prompt: "Choose: If it rains, we ____ indoors.",
    options: [
      { id: "a", text: "will stay" },
      { id: "b", text: "would have stayed" },
      { id: "c", text: "stayed" },
      { id: "d", text: "had stayed" }
    ],
    answerId: "a",
    explanation: "First conditional: If + present, will + base.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-a-q12",
    prompt: "Article: She is ____ honest officer.",
    options: [
      { id: "a", text: "an" },
      { id: "b", text: "a" },
      { id: "c", text: "the only possible always" },
      { id: "d", text: "no article required wrongly as \"a\"" }
    ],
    answerId: "a",
    explanation: "Honest begins with a vowel sound \u2192 an.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-a-q13",
    prompt: "Transformation: \"As soon as he arrived, the meeting began.\" = \u2014",
    options: [
      { id: "a", text: "No sooner did he arrive than the meeting began" },
      { id: "b", text: "He arrived later than the meeting" },
      { id: "c", text: "Hardly he arrive" },
      { id: "d", text: "As soon he arrives begins" }
    ],
    answerId: "a",
    explanation: "No sooner + auxiliary + subject\u2026 than\u2026",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-a-q14",
    prompt: "Preposition: She is good ____ mathematics.",
    options: [
      { id: "a", text: "at" },
      { id: "b", text: "in on" },
      { id: "c", text: "over" },
      { id: "d", text: "by" }
    ],
    answerId: "a",
    explanation: "Good at a subject/skill.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-a-q15",
    prompt: "Choose correct voice: \"Someone stole my bicycle.\" \u2192",
    options: [
      { id: "a", text: "My bicycle was stolen" },
      { id: "b", text: "My bicycle stole someone" },
      { id: "c", text: "My bicycle is stealing" },
      { id: "d", text: "Stolen my bicycle someone" }
    ],
    answerId: "a",
    explanation: "Past simple passive: was/were + V3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-a-q16",
    prompt: "Concord: The news ____ good today.",
    options: [
      { id: "a", text: "is" },
      { id: "b", text: "are" },
      { id: "c", text: "were" },
      { id: "d", text: "have" }
    ],
    answerId: "a",
    explanation: "News is singular despite the -s.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-a-q17",
    prompt: "Gerund: She enjoys ____ novels.",
    options: [
      { id: "a", text: "reading" },
      { id: "b", text: "to reading" },
      { id: "c", text: "read" },
      { id: "d", text: "reads" }
    ],
    answerId: "a",
    explanation: "Enjoy takes a gerund (V-ing).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-a-q18",
    prompt: "Choose: By next year, they ____ the bridge.",
    options: [
      { id: "a", text: "will have completed" },
      { id: "b", text: "will completing" },
      { id: "c", text: "completed" },
      { id: "d", text: "had complete" }
    ],
    answerId: "a",
    explanation: "Future perfect for completion before a future time.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-a-q19",
    prompt: "Question tag: You are coming, ____?",
    options: [
      { id: "a", text: "aren't you" },
      { id: "b", text: "are you not coming tag wrong" },
      { id: "c", text: "isn't you" },
      { id: "d", text: "don't you" }
    ],
    answerId: "a",
    explanation: "Positive statement \u2192 negative tag with same auxiliary.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-a-q20",
    prompt: "Adjective order: She bought a ____ scarf.",
    options: [
      { id: "a", text: "beautiful red silk" },
      { id: "b", text: "silk beautiful red" },
      { id: "c", text: "red silk beautiful" },
      { id: "d", text: "beautiful silk red wrong order preferred" }
    ],
    answerId: "a",
    explanation: "Opinion \u2192 colour \u2192 material is standard order.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-a-q21",
    prompt: "Reported: He said, \"Where do you live?\" \u2192 He asked \u2014",
    options: [
      { id: "a", text: "where I lived" },
      { id: "b", text: "where do I live" },
      { id: "c", text: "where did I lived" },
      { id: "d", text: "where you live?" }
    ],
    answerId: "a",
    explanation: "Wh-question: ask + clause, no auxiliary inversion, tense backshift.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-a-q22",
    prompt: "Linker: She was tired; ____, she finished the race.",
    options: [
      { id: "a", text: "however" },
      { id: "b", text: "therefore meaning because tired" },
      { id: "c", text: "moreover only adding same idea wrongly" },
      { id: "d", text: "for example" }
    ],
    answerId: "a",
    explanation: "However shows contrast despite tiredness.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-a-q23",
    prompt: "Infinitive of purpose: He went to the shop ____ milk.",
    options: [
      { id: "a", text: "to buy" },
      { id: "b", text: "for buy" },
      { id: "c", text: "buying for to" },
      { id: "d", text: "buy" }
    ],
    answerId: "a",
    explanation: "to + verb expresses purpose.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-a-q24",
    prompt: "Choose correct: Neither Ravi nor his friends ____ present.",
    options: [
      { id: "a", text: "were" },
      { id: "b", text: "was always only" },
      { id: "c", text: "is" },
      { id: "d", text: "has" }
    ],
    answerId: "a",
    explanation: "With neither\u2026nor, verb often agrees with the nearer subject (friends \u2192 were).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g10-eng-ch02-b-q01",
    prompt: "Tense: \"I had left before she arrived\" is \u2014",
    options: [
      { id: "a", text: "past perfect + simple past" },
      { id: "b", text: "present perfect" },
      { id: "c", text: "future perfect" },
      { id: "d", text: "past continuous only" }
    ],
    answerId: "a",
    explanation: "Earlier past = past perfect; later past = simple past.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-b-q02",
    prompt: "Passive: \"They are building a flyover.\" \u2192",
    options: [
      { id: "a", text: "A flyover is being built" },
      { id: "b", text: "A flyover is built them" },
      { id: "c", text: "A flyover builds" },
      { id: "d", text: "Flyover being they" }
    ],
    answerId: "a",
    explanation: "Present continuous passive: is/are being + V3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-b-q03",
    prompt: "Modal deduction: The lights are on; she ____ at home.",
    options: [
      { id: "a", text: "must be" },
      { id: "b", text: "can't have been? for present" },
      { id: "c", text: "must been" },
      { id: "d", text: "should to be" }
    ],
    answerId: "a",
    explanation: "Must be = logical conclusion about now.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-b-q04",
    prompt: "Relative: This is the book ____ I told you about.",
    options: [
      { id: "a", text: "that / which" },
      { id: "b", text: "who" },
      { id: "c", text: "whose" },
      { id: "d", text: "whom book" }
    ],
    answerId: "a",
    explanation: "That/which for things; object of about.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-b-q05",
    prompt: "Conditional III: If she had studied, she ____ the exam.",
    options: [
      { id: "a", text: "would have passed" },
      { id: "b", text: "will pass" },
      { id: "c", text: "passes" },
      { id: "d", text: "would passes" }
    ],
    answerId: "a",
    explanation: "If + past perfect, would have + V3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-b-q06",
    prompt: "Article: ____ Himalayas are in Asia.",
    options: [
      { id: "a", text: "The" },
      { id: "b", text: "A" },
      { id: "c", text: "An" },
      { id: "d", text: "No article always wrong here" }
    ],
    answerId: "a",
    explanation: "Mountain ranges take the.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-b-q07",
    prompt: "Error correction: \"She suggested to go home.\" \u2192",
    options: [
      { id: "a", text: "She suggested going home" },
      { id: "b", text: "She suggested go home" },
      { id: "c", text: "She suggested to going" },
      { id: "d", text: "She suggest going" }
    ],
    answerId: "a",
    explanation: "Suggest + gerund (not to-infinitive).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-b-q08",
    prompt: "Voice: \"Who wrote this letter?\" \u2192",
    options: [
      { id: "a", text: "By whom was this letter written?" },
      { id: "b", text: "Who was this letter wrote?" },
      { id: "c", text: "By who this letter written?" },
      { id: "d", text: "Whom wrote?" }
    ],
    answerId: "a",
    explanation: "Passive interrogative with by whom / who\u2026by.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-b-q09",
    prompt: "Choose phrasal: The meeting was ____ because of rain.",
    options: [
      { id: "a", text: "called off" },
      { id: "b", text: "called on" },
      { id: "c", text: "called in wrongly for cancel" },
      { id: "d", text: "put up" }
    ],
    answerId: "a",
    explanation: "Call off = cancel.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-b-q10",
    prompt: "Concord: Either the teacher or the students ____ to speak.",
    options: [
      { id: "a", text: "have" },
      { id: "b", text: "has always" },
      { id: "c", text: "is" },
      { id: "d", text: "was only" }
    ],
    answerId: "a",
    explanation: "Agree with the nearer subject (students \u2192 have).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-b-q11",
    prompt: "Reported commands: \"Sit down,\" the teacher said. \u2192 The teacher told us \u2014",
    options: [
      { id: "a", text: "to sit down" },
      { id: "b", text: "sit down" },
      { id: "c", text: "that sit down" },
      { id: "d", text: "sitting down" }
    ],
    answerId: "a",
    explanation: "Tell + object + to-infinitive.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-b-q12",
    prompt: "Adjective vs adverb: She sang ____.",
    options: [
      { id: "a", text: "beautifully" },
      { id: "b", text: "beautiful" },
      { id: "c", text: "beauty" },
      { id: "d", text: "more beautiful song as adverb" }
    ],
    answerId: "a",
    explanation: "Modify verb sang with adverb beautifully.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-b-q13",
    prompt: "Preposition: He congratulated me ____ my success.",
    options: [
      { id: "a", text: "on" },
      { id: "b", text: "for at" },
      { id: "c", text: "with" },
      { id: "d", text: "about only always" }
    ],
    answerId: "a",
    explanation: "Congratulate someone on something.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-b-q14",
    prompt: "Cleft focus: It was Riya ____ solved the puzzle.",
    options: [
      { id: "a", text: "who" },
      { id: "b", text: "which" },
      { id: "c", text: "what" },
      { id: "d", text: "whom solved wrongly" }
    ],
    answerId: "a",
    explanation: "It was X who\u2026 for people.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-b-q15",
    prompt: "Choose: Hardly had he entered ____ the phone rang.",
    options: [
      { id: "a", text: "when" },
      { id: "b", text: "than" },
      { id: "c", text: "then" },
      { id: "d", text: "that" }
    ],
    answerId: "a",
    explanation: "Hardly\u2026 when (not than).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-b-q16",
    prompt: "Gerund vs infinitive: He stopped ____ to the radio. (ceased the activity)",
    options: [
      { id: "a", text: "listening" },
      { id: "b", text: "to listen meaning interrupt to then listen" },
      { id: "c", text: "listen" },
      { id: "d", text: "listened" }
    ],
    answerId: "a",
    explanation: "Stop + gerund = quit that activity.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-b-q17",
    prompt: "Determiners: There is ____ hope left.",
    options: [
      { id: "a", text: "little" },
      { id: "b", text: "few" },
      { id: "c", text: "many" },
      { id: "d", text: "several" }
    ],
    answerId: "a",
    explanation: "Hope uncountable \u2192 little; few is for countables.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-b-q18",
    prompt: "Passive with modal: You must finish this. \u2192",
    options: [
      { id: "a", text: "This must be finished" },
      { id: "b", text: "This must finished" },
      { id: "c", text: "This must being finish" },
      { id: "d", text: "This must to be finish" }
    ],
    answerId: "a",
    explanation: "modal + be + V3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-b-q19",
    prompt: "Choose correct narrative: She said that she ____ the keys the day before.",
    options: [
      { id: "a", text: "had lost" },
      { id: "b", text: "has lost" },
      { id: "c", text: "loses" },
      { id: "d", text: "will lose" }
    ],
    answerId: "a",
    explanation: "Past reporting + earlier past \u2192 past perfect; yesterday \u2192 the day before.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-b-q20",
    prompt: "Participle phrase: ____ by the noise, the baby woke up.",
    options: [
      { id: "a", text: "Startled" },
      { id: "b", text: "Startling" },
      { id: "c", text: "To startle" },
      { id: "d", text: "Startles" }
    ],
    answerId: "a",
    explanation: "Past participle for the experiencer who receives the action.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-b-q21",
    prompt: "Subject-verb: Mathematics ____ his favourite subject.",
    options: [
      { id: "a", text: "is" },
      { id: "b", text: "are" },
      { id: "c", text: "were" },
      { id: "d", text: "have" }
    ],
    answerId: "a",
    explanation: "Subject names like Mathematics take singular.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-b-q22",
    prompt: "Choose connector: He is rich; ____ he is not happy.",
    options: [
      { id: "a", text: "yet / still / however" },
      { id: "b", text: "so" },
      { id: "c", text: "because" },
      { id: "d", text: "therefore only" }
    ],
    answerId: "a",
    explanation: "Contrast between wealth and unhappiness.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-b-q23",
    prompt: "Infinitive: She is too tired ____.",
    options: [
      { id: "a", text: "to work" },
      { id: "b", text: "for work working" },
      { id: "c", text: "that work" },
      { id: "d", text: "worked" }
    ],
    answerId: "a",
    explanation: "too + adj + to-infinitive.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-b-q24",
    prompt: "Identify non-finite: \"Swimming is good exercise.\" Swimming is a \u2014",
    options: [
      { id: "a", text: "gerund" },
      { id: "b", text: "finite past verb" },
      { id: "c", text: "conjunction" },
      { id: "d", text: "preposition" }
    ],
    answerId: "a",
    explanation: "V-ing as noun subject = gerund.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    speak: "Tense, voice, reported speech, and agreement keep sentences clear.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "sentence",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Tenses", reveal: "Time + aspect (perfect, continuous)", emoji: "\u23f3" },
      { label: "Voice", reveal: "Active doer vs passive focus", emoji: "\ud83d\udd04" },
      { label: "Reported speech", reveal: "Backshift and word-order changes", emoji: "\ud83d\udde3\ufe0f" },
      { label: "Agreement", reveal: "Subject and verb must match", emoji: "\ud83e\udd1d" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Passive of \"She writes a letter\"?",
    options: [
        { id: "a", text: "A letter is written by her" },
        { id: "b", text: "A letter writes her" },
        { id: "c", text: "She is written a letter by" },
        { id: "d", text: "Letter wrote" }
    ],
    answerId: "a",
    why: "Object becomes subject; is/are + past participle.",
    visual: "sentence",
    speak: "Passive of \"She writes a letter\"?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Grammar toolkit", "Name the tense", "Backshift in reports", "Check subject\u2013verb"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g10EnglishGrammar: ChapterDef = {
  id: "grammar",
  title: "Grammar",
  emoji: "\u270f\ufe0f",
  blurb: "Tense, voice, report & agreement",
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

export const g10EnglishGrammarQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
