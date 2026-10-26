import type { ChapterDef, PrepQuestion } from "../types";

/** Grammar - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g10-eng-ch02-a-q01",
    prompt: "Choose the correct form: The bell ____ before we reached the gate.",
    options: [
      { id: "a", text: "rung" },
      { id: "b", text: "ring" },
      { id: "c", text: "rang" },
      { id: "d", text: "ringing" }
    ],
    answerId: "c",
    explanation: "The ringing is a finished past action, so the simple past 'rang' fits. 'rung' is the past participle and needs has, have or had before it.",
    hints: ["Both actions are in the past; one form of ring needs a helper verb.", "\"rung\" works only after has/have/had; which form stands alone in the past?"]
  },
  {
    id: "g10-eng-ch02-a-q02",
    prompt: "Identify the tense: \"They have finished the project.\"",
    options: [
      { id: "a", text: "future continuous" },
      { id: "b", text: "present perfect" },
      { id: "c", text: "simple past" },
      { id: "d", text: "past perfect" }
    ],
    answerId: "b",
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
    prompt: "Reported speech: She said, \"I have finished my work.\" → She said that she ____ her work.",
    options: [
      { id: "a", text: "has finished" },
      { id: "b", text: "finished" },
      { id: "c", text: "have finished" },
      { id: "d", text: "had finished" }
    ],
    answerId: "d",
    explanation: "After 'said', the present perfect 'have finished' shifts back to the past perfect 'had finished'. 'has finished' keeps the present perfect.",
    hints: ["The direct speech uses the present perfect; after \"said\" it moves one tense back.", "One step back from has/have + V3 is the past perfect form."]
  },
  {
    id: "g10-eng-ch02-a-q05",
    prompt: "Choose the correct determiner: ____ of the students were present.",
    options: [
      { id: "a", text: "Each one of much" },
      { id: "b", text: "Much" },
      { id: "c", text: "Most" },
      { id: "d", text: "Little" }
    ],
    answerId: "c",
    explanation: "Most of + plural countable works; much is for uncountables.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-a-q06",
    prompt: "Fill in: Either of these routes ____ fine for the trip.",
    options: [
      { id: "a", text: "is" },
      { id: "b", text: "have" },
      { id: "c", text: "are" },
      { id: "d", text: "were being" }
    ],
    answerId: "a",
    explanation: "'Either' means one of two, so it takes a singular verb: is. 'are' agrees with 'routes', but 'routes' is not the subject.",
    hints: ["\"Either\" points to one of two routes.", "\"Either of ...\" takes a singular verb, whatever noun follows \"of\"."]
  },
  {
    id: "g10-eng-ch02-a-q07",
    prompt: "Identify the clause type: \"The house where I grew up has been sold.\" — \"where I grew up\" is a —",
    options: [
      { id: "a", text: "adverb clause of place" },
      { id: "b", text: "main clause" },
      { id: "c", text: "adjective clause" },
      { id: "d", text: "noun clause" }
    ],
    answerId: "c",
    explanation: "'Where I grew up' describes the noun 'house', so it is an adjective (relative) clause. 'Adverb clause of place' is tempting because of 'where', but this clause tells us which house.",
    hints: ["Ask what \"where I grew up\" tells us more about.", "Does the clause describe a noun, or tell where an action happens?"]
  },
  {
    id: "g10-eng-ch02-a-q08",
    prompt: "Choose the correct modal: You ____ not have brought gifts; we said it was not necessary.",
    options: [
      { id: "a", text: "must" },
      { id: "b", text: "might" },
      { id: "c", text: "need" },
      { id: "d", text: "would" }
    ],
    answerId: "c",
    explanation: "'Need not have' + past participle says something was done but was unnecessary. 'must not have' would wrongly suggest a deduction or a ban.",
    hints: ["The gifts were brought, but they were not required.", "Choose the modal that, with \"not have\", shows an action was unnecessary."]
  },
  {
    id: "g10-eng-ch02-a-q09",
    prompt: "Error spot: \"He don't like tea.\" Correct form \u2014",
    options: [
      { id: "a", text: "He not like tea" },
      { id: "b", text: "He doesn't like tea" },
      { id: "c", text: "He doesn't likes tea" },
      { id: "d", text: "He don't likes tea" }
    ],
    answerId: "b",
    explanation: "Third person singular: does not / doesn't + base verb.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-a-q10",
    prompt: "Relative pronoun: The man ____ I met at the conference is a scientist.",
    options: [
      { id: "a", text: "which" },
      { id: "b", text: "whom" },
      { id: "c", text: "whose" },
      { id: "d", text: "what" }
    ],
    answerId: "b",
    explanation: "The man is the object of 'met' (I met him), so 'whom' is correct in formal English. 'which' is for things, and 'whose' shows possession.",
    hints: ["The blank refers to \"The man\", and \"I\" is already the subject of \"met\".", "Use the object form of who when the person receives the action."]
  },
  {
    id: "g10-eng-ch02-a-q11",
    prompt: "Choose: Unless you hurry, you ____ the train.",
    options: [
      { id: "a", text: "missed" },
      { id: "b", text: "had missed" },
      { id: "c", text: "would have missed" },
      { id: "d", text: "will miss" }
    ],
    answerId: "d",
    explanation: "'Unless' means 'if not' and works like a first conditional: unless + present, will + base verb. 'would have missed' belongs to the third conditional, for past situations.",
    hints: ["\"Unless you hurry\" is about a possible future.", "Treat unless like \"if not\": the main clause takes will + base verb."]
  },
  {
    id: "g10-eng-ch02-a-q12",
    prompt: "Article: She bought ____ one-way ticket.",
    options: [
      { id: "a", text: "an" },
      { id: "b", text: "no article" },
      { id: "c", text: "some" },
      { id: "d", text: "a" }
    ],
    answerId: "d",
    explanation: "'One' begins with a w sound, so we use 'a'. 'an' is tempting because the letter o is a vowel, but the sound decides.",
    hints: ["Say \"one-way\" aloud and listen to the first sound.", "Choose by sound, not spelling: \"one\" begins with the consonant sound \"w\"."]
  },
  {
    id: "g10-eng-ch02-a-q13",
    prompt: "Transformation: \"As soon as he arrived, the meeting began.\" = \u2014",
    options: [
      { id: "a", text: "Hardly he arrive" },
      { id: "b", text: "He arrived later than the meeting" },
      { id: "c", text: "No sooner did he arrive than the meeting began" },
      { id: "d", text: "As soon he arrives begins" }
    ],
    answerId: "c",
    explanation: "No sooner + auxiliary + subject\u2026 than\u2026",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-a-q14",
    prompt: "Preposition: The team is capable ____ winning the cup.",
    options: [
      { id: "a", text: "of" },
      { id: "b", text: "over" },
      { id: "c", text: "by" },
      { id: "d", text: "in" }
    ],
    answerId: "a",
    explanation: "'Capable' takes 'of' + -ing. 'in' may sound possible, but 'capable in winning' is not standard English.",
    hints: ["\"capable\" takes a fixed preposition before \"winning\".", "Compare \"proud ___ her work\" and \"fond ___ music\"; the same preposition fits."]
  },
  {
    id: "g10-eng-ch02-a-q15",
    prompt: "Choose correct voice: \"Someone stole my bicycle.\" \u2192",
    options: [
      { id: "a", text: "My bicycle was stolen" },
      { id: "b", text: "My bicycle is stealing" },
      { id: "c", text: "My bicycle stole someone" },
      { id: "d", text: "Stolen my bicycle someone" }
    ],
    answerId: "a",
    explanation: "Past simple passive: was/were + V3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-a-q16",
    prompt: "Concord: The number of applicants ____ rising every year.",
    options: [
      { id: "a", text: "have" },
      { id: "b", text: "were" },
      { id: "c", text: "are" },
      { id: "d", text: "is" }
    ],
    answerId: "d",
    explanation: "'The number of' is singular (it is one number), so 'is'. 'are' is tempting because 'applicants' is plural; 'a number of' would take 'are'.",
    hints: ["The head noun here: \"number\", not \"applicants\".", "\"The number of\" takes a singular verb; \"a number of\" takes a plural one."]
  },
  {
    id: "g10-eng-ch02-a-q17",
    prompt: "Gerund: She enjoys ____ novels.",
    options: [
      { id: "a", text: "read" },
      { id: "b", text: "reading" },
      { id: "c", text: "to reading" },
      { id: "d", text: "reads" }
    ],
    answerId: "b",
    explanation: "Enjoy takes a gerund (V-ing).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-a-q18",
    prompt: "Choose: By the time we reach the stadium, the match ____.",
    options: [
      { id: "a", text: "will have started" },
      { id: "b", text: "started" },
      { id: "c", text: "has started" },
      { id: "d", text: "will be start" }
    ],
    answerId: "a",
    explanation: "The match starts before a future moment (reaching the stadium), so the future perfect 'will have started'. 'has started' is present perfect and does not fit a future time.",
    hints: ["The starting happens before a future moment: reaching the stadium.", "Pick the tense for an action that will be complete before a future time."]
  },
  {
    id: "g10-eng-ch02-a-q19",
    prompt: "Question tag: Nobody called while I was out, ____?",
    options: [
      { id: "a", text: "didn't they" },
      { id: "b", text: "did they" },
      { id: "c", text: "did he" },
      { id: "d", text: "didn't he" }
    ],
    answerId: "b",
    explanation: "'Nobody' makes the statement negative, so the tag is positive, and 'nobody' takes 'they' in tags: did they? 'didn't they' wrongly makes the tag negative too.",
    hints: ["\"Nobody\" already makes the sentence negative.", "A negative statement takes a positive tag; nobody and somebody use \"they\" in tags."]
  },
  {
    id: "g10-eng-ch02-a-q20",
    prompt: "Adjective order: She bought a ____ scarf.",
    options: [
      { id: "a", text: "red silk beautiful" },
      { id: "b", text: "silk beautiful red" },
      { id: "c", text: "red beautiful silk" },
      { id: "d", text: "beautiful red silk" }
    ],
    answerId: "d",
    explanation: "The usual order is opinion → colour → material, so 'beautiful red silk scarf'. 'red beautiful silk' is tempting because silk is still next to the noun, but the opinion word beautiful must come before the colour red.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-a-q21",
    prompt: "Reported: He said, \"Where do you live?\" \u2192 He asked \u2014",
    options: [
      { id: "a", text: "where you live?" },
      { id: "b", text: "where do I live" },
      { id: "c", text: "where I lived" },
      { id: "d", text: "where did I lived" }
    ],
    answerId: "c",
    explanation: "Wh-question: ask + clause, no auxiliary inversion, tense backshift.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-a-q22",
    prompt: "Linker: She was tired; ____, she finished the race.",
    options: [
      { id: "a", text: "moreover" },
      { id: "b", text: "however" },
      { id: "c", text: "for example" },
      { id: "d", text: "therefore" }
    ],
    answerId: "b",
    explanation: "'However' shows a contrast: she was tired, but she still finished. 'Therefore' is tempting because it is also a linker, but it shows a result, and finishing the race is not a result of being tired.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-a-q23",
    prompt: "Infinitive of purpose: He went to the shop ____ milk.",
    options: [
      { id: "a", text: "for buying" },
      { id: "b", text: "for buy" },
      { id: "c", text: "buy" },
      { id: "d", text: "to buy" }
    ],
    answerId: "d",
    explanation: "to + verb expresses purpose.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-a-q24",
    prompt: "Choose correct: Neither Ravi nor his friends ____ present.",
    options: [
      { id: "a", text: "were" },
      { id: "b", text: "has" },
      { id: "c", text: "was" },
      { id: "d", text: "is" }
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
      { id: "a", text: "past continuous" },
      { id: "b", text: "future perfect" },
      { id: "c", text: "present perfect" },
      { id: "d", text: "past perfect + simple past" }
    ],
    answerId: "d",
    explanation: "Earlier past = past perfect; later past = simple past.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-b-q02",
    prompt: "Passive: \"They are building a flyover.\" \u2192",
    options: [
      { id: "a", text: "A flyover is built them" },
      { id: "b", text: "Flyover being they" },
      { id: "c", text: "A flyover builds" },
      { id: "d", text: "A flyover is being built" }
    ],
    answerId: "d",
    explanation: "Present continuous passive: is/are being + V3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-b-q03",
    prompt: "Modal deduction: The lights are on; she ____ at home.",
    options: [
      { id: "a", text: "can't be" },
      { id: "b", text: "must be" },
      { id: "c", text: "must been" },
      { id: "d", text: "should to be" }
    ],
    answerId: "b",
    explanation: "'Must be' expresses a confident deduction about the present, and the lights being on are the evidence. 'Can't be' is tempting because it is also a present deduction, but it means she is surely not at home, which goes against the evidence. 'Must been' and 'should to be' are not correct forms.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-b-q04",
    prompt: "Relative: This is the book ____ I told you about.",
    options: [
      { id: "a", text: "whom" },
      { id: "b", text: "that / which" },
      { id: "c", text: "who" },
      { id: "d", text: "whose" }
    ],
    answerId: "b",
    explanation: "That/which for things; object of about.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-b-q05",
    prompt: "Conditional III: If she had studied, she ____ the exam.",
    options: [
      { id: "a", text: "would have passed" },
      { id: "b", text: "would passes" },
      { id: "c", text: "will pass" },
      { id: "d", text: "passes" }
    ],
    answerId: "a",
    explanation: "If + past perfect, would have + V3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-b-q06",
    prompt: "Article: ____ Indian Ocean lies to the south of India.",
    options: [
      { id: "a", text: "A" },
      { id: "b", text: "An" },
      { id: "c", text: "The" },
      { id: "d", text: "No article" }
    ],
    answerId: "c",
    explanation: "Names of oceans take 'the': the Indian Ocean. 'An' is tempting because 'Indian' starts with a vowel sound, but a proper name like this needs the definite article.",
    hints: ["Oceans, seas and rivers follow a special article rule.", "Ocean names such as \"Indian Ocean\" always take a definite article, whatever their first sound."]
  },
  {
    id: "g10-eng-ch02-b-q07",
    prompt: "Error correction: \"She suggested to go home.\" \u2192",
    options: [
      { id: "a", text: "She suggest going" },
      { id: "b", text: "She suggested going home" },
      { id: "c", text: "She suggested to going" },
      { id: "d", text: "She suggested go home" }
    ],
    answerId: "b",
    explanation: "Suggest + gerund (not to-infinitive).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-b-q08",
    prompt: "Voice: \"Who wrote this letter?\" \u2192",
    options: [
      { id: "a", text: "By who this letter written?" },
      { id: "b", text: "Whom wrote?" },
      { id: "c", text: "Who was this letter wrote?" },
      { id: "d", text: "By whom was this letter written?" }
    ],
    answerId: "d",
    explanation: "Passive interrogative with by whom / who\u2026by.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-b-q09",
    prompt: "Choose phrasal: The meeting was ____ because of rain.",
    options: [
      { id: "a", text: "called off" },
      { id: "b", text: "called on" },
      { id: "c", text: "put up" },
      { id: "d", text: "called in" }
    ],
    answerId: "a",
    explanation: "Call off = cancel.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-b-q10",
    prompt: "Concord: Either the teacher or the students ____ to speak.",
    options: [
      { id: "a", text: "was" },
      { id: "b", text: "is" },
      { id: "c", text: "has" },
      { id: "d", text: "have" }
    ],
    answerId: "d",
    explanation: "Agree with the nearer subject (students \u2192 have).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-b-q11",
    prompt: "Reported commands: \"Sit down,\" the teacher said. \u2192 The teacher told us \u2014",
    options: [
      { id: "a", text: "that sit down" },
      { id: "b", text: "to sit down" },
      { id: "c", text: "sit down" },
      { id: "d", text: "sitting down" }
    ],
    answerId: "b",
    explanation: "Tell + object + to-infinitive.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-b-q12",
    prompt: "Adjective vs adverb: She sang ____.",
    options: [
      { id: "a", text: "beauty" },
      { id: "b", text: "beautifully" },
      { id: "c", text: "more beautiful" },
      { id: "d", text: "beautiful" }
    ],
    answerId: "b",
    explanation: "An adverb describes the verb sang, so 'beautifully'. 'Beautiful' is tempting, but it is an adjective and can only describe a noun.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-b-q13",
    prompt: "Preposition: He congratulated me ____ my success.",
    options: [
      { id: "a", text: "on" },
      { id: "b", text: "about" },
      { id: "c", text: "at" },
      { id: "d", text: "with" }
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
      { id: "b", text: "what" },
      { id: "c", text: "whom" },
      { id: "d", text: "which" }
    ],
    answerId: "a",
    explanation: "It was X who\u2026 for people.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-b-q15",
    prompt: "Choose: Seldom ____ such a beautiful sunset.",
    options: [
      { id: "a", text: "I have seen" },
      { id: "b", text: "I saw" },
      { id: "c", text: "have I seen" },
      { id: "d", text: "I had see" }
    ],
    answerId: "c",
    explanation: "Negative adverbs like 'seldom' at the start trigger inversion: have I seen. 'I have seen' is normal word order, which clashes with the fronted 'Seldom'.",
    hints: ["\"Seldom\" at the start of a sentence changes the word order.", "Put the auxiliary before the subject, as in a question."]
  },
  {
    id: "g10-eng-ch02-b-q16",
    prompt: "Gerund vs infinitive: He stopped ____ to the radio. (ceased the activity)",
    options: [
      { id: "a", text: "to listen" },
      { id: "b", text: "listening" },
      { id: "c", text: "listened" },
      { id: "d", text: "listen" }
    ],
    answerId: "b",
    explanation: "Stop + gerund means quitting that activity, so 'stopped listening'. 'To listen' is tempting, but stop + to-infinitive means stopping something else in order to listen, which is not what the brackets say.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-b-q17",
    prompt: "Determiners: There is ____ hope left.",
    options: [
      { id: "a", text: "little" },
      { id: "b", text: "many" },
      { id: "c", text: "several" },
      { id: "d", text: "few" }
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
      { id: "c", text: "This must to be finish" },
      { id: "d", text: "This must being finish" }
    ],
    answerId: "a",
    explanation: "modal + be + V3.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-b-q19",
    prompt: "Choose correct narrative: She said that she ____ the keys the day before.",
    options: [
      { id: "a", text: "will lose" },
      { id: "b", text: "loses" },
      { id: "c", text: "had lost" },
      { id: "d", text: "has lost" }
    ],
    answerId: "c",
    explanation: "Past reporting + earlier past \u2192 past perfect; yesterday \u2192 the day before.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-b-q20",
    prompt: "Participle phrase: ____ by the noise, the baby woke up.",
    options: [
      { id: "a", text: "Startles" },
      { id: "b", text: "To startle" },
      { id: "c", text: "Startling" },
      { id: "d", text: "Startled" }
    ],
    answerId: "d",
    explanation: "Past participle for the experiencer who receives the action.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-b-q21",
    prompt: "Subject-verb: Mathematics ____ his favourite subject.",
    options: [
      { id: "a", text: "were" },
      { id: "b", text: "have" },
      { id: "c", text: "is" },
      { id: "d", text: "are" }
    ],
    answerId: "c",
    explanation: "Subject names like Mathematics take singular.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-b-q22",
    prompt: "Choose connector: He is rich; ____ he is not happy.",
    options: [
      { id: "a", text: "therefore" },
      { id: "b", text: "so" },
      { id: "c", text: "yet / still / however" },
      { id: "d", text: "because" }
    ],
    answerId: "c",
    explanation: "Contrast between wealth and unhappiness.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-b-q23",
    prompt: "Infinitive: She is too tired ____.",
    options: [
      { id: "a", text: "worked" },
      { id: "b", text: "that work" },
      { id: "c", text: "to work" },
      { id: "d", text: "for working" }
    ],
    answerId: "c",
    explanation: "too + adj + to-infinitive.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-eng-ch02-b-q24",
    prompt: "Identify non-finite: \"Swimming is good exercise.\" Swimming is a \u2014",
    options: [
      { id: "a", text: "finite past verb" },
      { id: "b", text: "conjunction" },
      { id: "c", text: "preposition" },
      { id: "d", text: "gerund" }
    ],
    answerId: "d",
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
