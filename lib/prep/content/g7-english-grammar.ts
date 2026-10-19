import type { ChapterDef, PrepQuestion } from "../types";

/** Grammar Builders - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g7-eng-grammar-a-q01",
    prompt: "Choose the correct verb: The train to Pune ____ at 6 a.m. every day.",
    options: [
      { id: "a", text: "leaves" },
      { id: "b", text: "leave" },
      { id: "c", text: "leaving" },
      { id: "d", text: "are leaving" }
    ],
    answerId: "a",
    explanation: "Timetable facts use the simple present, and 'the train' is singular, so 'leaves'. 'leave' would need a plural subject.",
    hints: ["A fixed timetable is a repeated fact, told in the simple present.", "\"The train\" is singular, so the verb needs its he/she/it form."]
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
    prompt: "Correct article: She waited for ____ hour at the station.",
    options: [
      { id: "a", text: "a" },
      { id: "b", text: "an" },
      { id: "c", text: "some" },
      { id: "d", text: "no article" }
    ],
    answerId: "b",
    explanation: "In 'hour' the h is silent, so the word begins with a vowel sound and takes 'an'. 'a' looks right from the spelling, but the article goes by sound.",
    hints: ["Say \"hour\" aloud; do you hear the h?", "Choose the article by the first sound, not the first letter of \"hour\"."]
  },
  {
    id: "g7-eng-grammar-a-q07",
    prompt: "Choose the correct tense: Last Sunday we ____ our grandparents.",
    options: [
      { id: "a", text: "visit" },
      { id: "b", text: "visiting" },
      { id: "c", text: "visited" },
      { id: "d", text: "visits" }
    ],
    answerId: "c",
    explanation: "'Last Sunday' points to a finished time in the past, so the simple past 'visited' is right. 'visit' is present tense.",
    hints: ["\"Last Sunday\" is already over.", "Pick the form that shows a finished action in the past."]
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
    prompt: "Kabir asks a question. Which sentence is punctuated correctly?",
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
    prompt: "Choose the conjunction: Kabir wore a raincoat ____ the sky was cloudy.",
    options: [
      { id: "a", text: "but" },
      { id: "b", text: "because" },
      { id: "c", text: "or" },
      { id: "d", text: "nor" }
    ],
    answerId: "b",
    explanation: "The cloudy sky is the reason for the raincoat, so 'because'. 'but' shows contrast, and there is no contrast here.",
    hints: ["The second part explains why Kabir wore a raincoat.", "\"but\" shows contrast; pick the conjunction that gives a reason."]
  },
  {
    id: "g7-eng-grammar-a-q11",
    prompt: "Correct form: One of my pens ____ missing.",
    options: [
      { id: "a", text: "are" },
      { id: "b", text: "were being" },
      { id: "c", text: "is" },
      { id: "d", text: "have" }
    ],
    answerId: "c",
    explanation: "The subject is 'One', which is singular, so 'is'. 'are' is tempting because 'pens' is plural, but 'pens' is not the subject.",
    hints: ["The real subject here: \"One\", not \"my pens\".", "\"One of ...\" always takes a singular verb."]
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
    prompt: "Choose the right verb: Measles ____ a serious illness.",
    options: [
      { id: "a", text: "are" },
      { id: "b", text: "were" },
      { id: "c", text: "have" },
      { id: "d", text: "is" }
    ],
    answerId: "d",
    explanation: "'Measles' ends in -s but names one illness, so it takes 'is'. 'are' is tempting because of the -s ending.",
    hints: ["\"Measles\" ends in -s but names a single illness.", "Names of illnesses ending in -s take a singular verb."]
  },
  {
    id: "g7-eng-grammar-a-q17",
    prompt: "Identify the interjection: Oops, I dropped my lunchbox!",
    options: [
      { id: "a", text: "Oops" },
      { id: "b", text: "dropped" },
      { id: "c", text: "lunchbox" },
      { id: "d", text: "my" }
    ],
    answerId: "a",
    explanation: "'Oops' is an interjection: a short cry of surprise. 'dropped' is the verb that tells what happened.",
    hints: ["An interjection is a short word that shows sudden feeling.", "Dropped is the action and lunchbox is a thing; find the cry of surprise."]
  },
  {
    id: "g7-eng-grammar-a-q18",
    prompt: "Correct: Every one of the players ____ a jersey number.",
    options: [
      { id: "a", text: "have" },
      { id: "b", text: "has" },
      { id: "c", text: "having" },
      { id: "d", text: "are having" }
    ],
    answerId: "b",
    explanation: "'Every one' is singular, so it takes 'has'. 'have' is tempting because 'players' is plural, but the verb agrees with 'every one'.",
    hints: ["The subject is \"Every one\", not \"the players\".", "\"Every one of ...\" is singular, so pick the singular form of have."]
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
    prompt: "Choose correct relative pronoun: The doctor ____ treated my grandfather lives nearby.",
    options: [
      { id: "a", text: "which" },
      { id: "b", text: "whose" },
      { id: "c", text: "what" },
      { id: "d", text: "who" }
    ],
    answerId: "d",
    explanation: "The doctor is a person and the subject of 'treated', so 'who'. 'which' is for things.",
    hints: ["The blank refers to \"The doctor\" and is the subject of \"treated\".", "\"which\" is for things; choose the pronoun for people as subjects."]
  },
  {
    id: "g7-eng-grammar-a-q21",
    prompt: "Fill in: If the bus is late, we ____ a taxi.",
    options: [
      { id: "a", text: "will take" },
      { id: "b", text: "took" },
      { id: "c", text: "taking" },
      { id: "d", text: "have taken" }
    ],
    answerId: "a",
    explanation: "First conditional: if + present, will + base verb. 'took' is past and does not match the present 'is late'.",
    hints: ["\"If the bus is late\" talks about a possible future event.", "First conditional: if + present tense, then will + base verb."]
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
    prompt: "Correct plural: The ____ fell from the trees in autumn.",
    options: [
      { id: "a", text: "leafs" },
      { id: "b", text: "leaf’s" },
      { id: "c", text: "leaves" },
      { id: "d", text: "leave" }
    ],
    answerId: "c",
    explanation: "Leaf changes f to v and adds -es: leaves. 'leaf’s' has an apostrophe, which shows possession, not plural.",
    hints: ["Some nouns ending in f change before the plural ending, like wolf.", "An apostrophe shows ownership, not more than one."]
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
    prompt: "Which of these is an imperative sentence?",
    options: [
      { id: "a", text: "Switch off the fan before you leave." },
      { id: "b", text: "The fan is switched off." },
      { id: "c", text: "Did you switch off the fan?" },
      { id: "d", text: "What a noisy fan!" }
    ],
    answerId: "a",
    explanation: "An imperative sentence gives a command or request, usually starting with the verb: \"Switch off the fan...\" \"What a noisy fan!\" is tempting because it is forceful, but it is an exclamation, not an order.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-grammar-b-q06",
    prompt: "Correct: The jury ____ given its verdict.",
    options: [
      { id: "a", text: "have" },
      { id: "b", text: "has" },
      { id: "c", text: "are" },
      { id: "d", text: "were" }
    ],
    answerId: "b",
    explanation: "'its verdict' shows the jury acting as one unit, so 'has'. 'have' would treat the members separately, which clashes with 'its'.",
    hints: ["Look at \"its verdict\": is the jury one unit or many people?", "A collective noun acting as one unit takes a singular verb."]
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
    prompt: "Correct reported speech: Kabir said, “I enjoy chess.” → Kabir said that he ____ chess.",
    options: [
      { id: "a", text: "enjoyed" },
      { id: "b", text: "enjoys" },
      { id: "c", text: "enjoy" },
      { id: "d", text: "is enjoying" }
    ],
    answerId: "a",
    explanation: "After a past reporting verb ('said'), the present 'enjoy' shifts back to the past 'enjoyed'. 'enjoys' keeps the present tense, which is not the usual reported form.",
    hints: ["\"said\" is in the past, so the reported verb usually moves back one tense.", "\"enjoy\" is present; change it to its past form."]
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
    prompt: "Correct article usage: ____ Ganga flows through Varanasi.",
    options: [
      { id: "a", text: "The" },
      { id: "b", text: "A" },
      { id: "c", text: "An" },
      { id: "d", text: "No article" }
    ],
    answerId: "a",
    explanation: "Names of rivers take 'the': the Ganga. 'No article' is tempting because Ganga is a name, but rivers are an exception to the no-article rule for names.",
    hints: ["Names of rivers, seas and oceans follow a special article rule.", "Most names take no article, but rivers are an exception."]
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
    prompt: "Correct degree: Of all the students, Asha is the ____.",
    options: [
      { id: "a", text: "taller" },
      { id: "b", text: "tall" },
      { id: "c", text: "more tallest" },
      { id: "d", text: "tallest" }
    ],
    answerId: "d",
    explanation: "'Of all the students' compares more than two, so the superlative 'tallest' is needed. 'taller' compares only two.",
    hints: ["\"Of all the students\" compares Asha with the whole group.", "Taller compares two; Asha is compared with the whole class."]
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
