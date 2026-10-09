import type { ChapterDef, PrepQuestion } from "../types";

/** Grammar Basics — authored Grade 3 English content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g3-eng-grammar-a-q01",
    prompt: "Which word is a NOUN (a naming word)?",
    options: [
      { id: "a", text: "run" },
      { id: "b", text: "happy" },
      { id: "c", text: "school" },
      { id: "d", text: "quickly" }
    ],
    answerId: "c",
    explanation: "\"School\" names a place. Run is a verb, happy is an adjective, and quickly is an adverb.",
    hints: ["A noun names a person, place, or thing.", "Run tells an action, not a name."]
  },
  {
    id: "g3-eng-grammar-a-q02",
    prompt: "Riya packed her **bag** for school. Which word is the noun?",
    options: [
      { id: "a", text: "packed" },
      { id: "b", text: "her" },
      { id: "c", text: "bag" },
      { id: "d", text: "for" }
    ],
    answerId: "c",
    explanation: "\"Bag\" names a thing. Packed is a verb (action).",
    hints: ["Find the word that names a thing.", "Packed tells what Riya did."]
  },
  {
    id: "g3-eng-grammar-a-q03",
    prompt: "Which word is a PROPER noun (a special name)?",
    options: [
      { id: "a", text: "city" },
      { id: "b", text: "river" },
      { id: "c", text: "Delhi" },
      { id: "d", text: "girl" }
    ],
    answerId: "c",
    explanation: "\"Delhi\" is the special name of a city, so it is a proper noun and starts with a capital letter.",
    hints: ["Proper nouns are special names of people or places.", "City and river are common nouns."]
  },
  {
    id: "g3-eng-grammar-a-q04",
    prompt: "One child, many ____.",
    options: [
      { id: "a", text: "childs" },
      { id: "b", text: "childes" },
      { id: "c", text: "children" },
      { id: "d", text: "childrens" }
    ],
    answerId: "c",
    explanation: "The plural of child is children. We do not say childs or childrens.",
    hints: ["Some plurals do not just add -s.", "Never say childrens."]
  },
  {
    id: "g3-eng-grammar-a-q05",
    prompt: "Which word is a VERB (an action word)?",
    options: [
      { id: "a", text: "table" },
      { id: "b", text: "jump" },
      { id: "c", text: "blue" },
      { id: "d", text: "soft" }
    ],
    answerId: "b",
    explanation: "\"Jump\" names an action. Table is a noun; blue and soft describe things.",
    hints: ["A verb tells what someone does.", "Table names a thing, not an action."]
  },
  {
    id: "g3-eng-grammar-a-q06",
    prompt: "The birds ____ in the sky.",
    options: [
      { id: "a", text: "fly" },
      { id: "b", text: "sky" },
      { id: "c", text: "pretty" },
      { id: "d", text: "tree" }
    ],
    answerId: "a",
    explanation: "\"Fly\" is the action the birds do. Sky and tree are nouns.",
    hints: ["Choose the action word that fits the blank.", "Sky names a place, not an action."]
  },
  {
    id: "g3-eng-grammar-a-q07",
    prompt: "Kabir ____ his teeth every morning.",
    options: [
      { id: "a", text: "brush" },
      { id: "b", text: "brushes" },
      { id: "c", text: "brushing" },
      { id: "d", text: "brushed" }
    ],
    answerId: "b",
    explanation: "Kabir is one person (he), so we say brushes in the present.",
    hints: ["Kabir = he (one person).", "With he/she/it in the present, many verbs add -es or -s."]
  },
  {
    id: "g3-eng-grammar-a-q08",
    prompt: "They ____ playing in the park.",
    options: [
      { id: "a", text: "is" },
      { id: "b", text: "am" },
      { id: "c", text: "are" },
      { id: "d", text: "be" }
    ],
    answerId: "c",
    explanation: "\"They\" is plural, so we use are.",
    hints: ["They means more than one.", "Use are with we/you/they."]
  },
  {
    id: "g3-eng-grammar-a-q09",
    prompt: "Which word is an ADJECTIVE (a describing word)?",
    options: [
      { id: "a", text: "cat" },
      { id: "b", text: "run" },
      { id: "c", text: "fluffy" },
      { id: "d", text: "and" }
    ],
    answerId: "c",
    explanation: "\"Fluffy\" describes how something feels or looks. Cat is a noun; run is a verb.",
    hints: ["An adjective tells more about a noun.", "Cat names an animal; fluffy describes it."]
  },
  {
    id: "g3-eng-grammar-a-q10",
    prompt: "Meena saw a **tall** tree. Which word is the adjective?",
    options: [
      { id: "a", text: "Meena" },
      { id: "b", text: "saw" },
      { id: "c", text: "tall" },
      { id: "d", text: "tree" }
    ],
    answerId: "c",
    explanation: "\"Tall\" describes the tree. Tree is the noun being described.",
    hints: ["Find the word that describes the tree.", "Tree names the thing; tall tells what kind."]
  },
  {
    id: "g3-eng-grammar-a-q11",
    prompt: "Choose the adjective that fits: The ____ mango is sweet.",
    options: [
      { id: "a", text: "yellow" },
      { id: "b", text: "eat" },
      { id: "c", text: "quickly" },
      { id: "d", text: "under" }
    ],
    answerId: "a",
    explanation: "\"Yellow\" describes the mango's colour. Eat is a verb; quickly tells how.",
    hints: ["Pick a word that describes the mango.", "Eat is an action, not a describing word."]
  },
  {
    id: "g3-eng-grammar-a-q12",
    prompt: "Which sentence uses an adjective?",
    options: [
      { id: "a", text: "Ravi runs." },
      { id: "b", text: "The loud drum woke us." },
      { id: "c", text: "She and I." },
      { id: "d", text: "On the table." }
    ],
    answerId: "b",
    explanation: "\"Loud\" describes the drum. The other choices have no describing word for a noun.",
    hints: ["Look for a word that describes a noun.", "Loud tells what kind of drum."]
  },
  {
    id: "g3-eng-grammar-a-q13",
    prompt: "Choose the correct article: ____ apple fell from the tree.",
    options: [
      { id: "a", text: "A" },
      { id: "b", text: "An" },
      { id: "c", text: "The" },
      { id: "d", text: "\u2014 (none)" }
    ],
    answerId: "b",
    explanation: "Use \"an\" before words that begin with a vowel sound. Apple begins with \"a\".",
    hints: ["Listen for the first sound of the next word.", "Apple begins with a vowel sound, so use an."]
  },
  {
    id: "g3-eng-grammar-a-q14",
    prompt: "Choose the correct article: ____ book is on the shelf.",
    options: [
      { id: "a", text: "An" },
      { id: "b", text: "A" },
      { id: "c", text: "\u2014 (none)" },
      { id: "d", text: "Them" }
    ],
    answerId: "b",
    explanation: "Use \"a\" before words that begin with a consonant sound. Book begins with \"b\".",
    hints: ["Book begins with a consonant sound.", "Use a before consonant sounds; an before vowel sounds."]
  },
  {
    id: "g3-eng-grammar-a-q15",
    prompt: "Sana wants ____ ice cream.",
    options: [
      { id: "a", text: "a" },
      { id: "b", text: "an" },
      { id: "c", text: "two" },
      { id: "d", text: "many" }
    ],
    answerId: "b",
    explanation: "\"Ice\" begins with a vowel sound, so we say an ice cream.",
    hints: ["Check the first sound of ice.", "Ice starts with i \u2014 a vowel sound."]
  },
  {
    id: "g3-eng-grammar-a-q16",
    prompt: "We use \"the\" when we mean ____.",
    options: [
      { id: "a", text: "any one thing" },
      { id: "b", text: "a special or known thing" },
      { id: "c", text: "only plural nouns" },
      { id: "d", text: "only verbs" }
    ],
    answerId: "b",
    explanation: "\"The\" points to a special or already-known thing (the sun, the bag on the table).",
    hints: ["The often means that one we both know.", "A/an mean any one; the means a known one."]
  },
  {
    id: "g3-eng-grammar-a-q17",
    prompt: "Yesterday, Riya ____ to the market.",
    options: [
      { id: "a", text: "go" },
      { id: "b", text: "goes" },
      { id: "c", text: "went" },
      { id: "d", text: "going" }
    ],
    answerId: "c",
    explanation: "Yesterday means the past. The past form of go is went.",
    hints: ["Yesterday = past time.", "Go and goes are present forms."]
  },
  {
    id: "g3-eng-grammar-a-q18",
    prompt: "Every day, the sun ____ in the east.",
    options: [
      { id: "a", text: "rise" },
      { id: "b", text: "rises" },
      { id: "c", text: "rose" },
      { id: "d", text: "rising" }
    ],
    answerId: "b",
    explanation: "Every day shows a habit in the present. With the sun (it), we say rises.",
    hints: ["Every day = present habit.", "Rose is past; rising needs a helping verb."]
  },
  {
    id: "g3-eng-grammar-a-q19",
    prompt: "Which sentence is in the PAST tense?",
    options: [
      { id: "a", text: "I play cricket." },
      { id: "b", text: "I am playing cricket." },
      { id: "c", text: "I played cricket." },
      { id: "d", text: "I will play cricket." }
    ],
    answerId: "c",
    explanation: "\"Played\" shows the action already happened. Play/am playing are present; will play is future.",
    hints: ["Past tense means the action already happened.", "Look for the -ed form or a past word like played."]
  },
  {
    id: "g3-eng-grammar-a-q20",
    prompt: "Right now, the baby ____.",
    options: [
      { id: "a", text: "sleep" },
      { id: "b", text: "sleeps" },
      { id: "c", text: "is sleeping" },
      { id: "d", text: "slept" }
    ],
    answerId: "c",
    explanation: "Right now needs present continuous: is sleeping.",
    hints: ["Right now = happening at this moment.", "Is + verb-ing shows an action in progress."]
  },
  {
    id: "g3-eng-grammar-a-q21",
    prompt: "Which sentence is written correctly?",
    options: [
      { id: "a", text: "where is my pencil" },
      { id: "b", text: "Where is my pencil?" },
      { id: "c", text: "where is my pencil?" },
      { id: "d", text: "Where is my pencil" }
    ],
    answerId: "b",
    explanation: "A question starts with a capital letter and ends with a question mark.",
    hints: ["Questions need a capital and a ?", "Where should start with a capital W."]
  },
  {
    id: "g3-eng-grammar-a-q22",
    prompt: "Choose the correct end mark: What a lovely day___",
    options: [
      { id: "a", text: "." },
      { id: "b", text: "?" },
      { id: "c", text: "!" },
      { id: "d", text: "," }
    ],
    answerId: "c",
    explanation: "This shows strong feeling, so we use an exclamation mark (!).",
    hints: ["Does the sentence show strong feeling?", "What a\u2026 often ends with !"]
  },
  {
    id: "g3-eng-grammar-a-q23",
    prompt: "Which word should start with a capital letter?",
    options: [
      { id: "a", text: "the bird sang." },
      { id: "b", text: "my name is kabir." },
      { id: "c", text: "we ate lunch." },
      { id: "d", text: "she ran home." }
    ],
    answerId: "b",
    explanation: "Names of people are proper nouns and need capital letters: Kabir.",
    hints: ["People's names need capitals.", "Kabir is a name."]
  },
  {
    id: "g3-eng-grammar-a-q24",
    prompt: "Fix the sentence: ravi likes mangoes",
    options: [
      { id: "a", text: "ravi likes mangoes." },
      { id: "b", text: "Ravi likes mangoes." },
      { id: "c", text: "Ravi likes mangoes" },
      { id: "d", text: "ravi Likes Mangoes." }
    ],
    answerId: "b",
    explanation: "Start with a capital letter (Ravi) and end with a full stop.",
    hints: ["Sentences start with a capital and usually end with a full stop.", "Ravi is a name, so it needs a capital."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g3-eng-grammar-b-q01",
    prompt: "Which word is a NOUN?",
    options: [
      { id: "a", text: "sing" },
      { id: "b", text: "garden" },
      { id: "c", text: "bright" },
      { id: "d", text: "slowly" }
    ],
    answerId: "b",
    explanation: "\"Garden\" names a place. Sing is a verb; bright describes; slowly tells how.",
    hints: ["A noun names a person, place, or thing.", "Sing is an action word."]
  },
  {
    id: "g3-eng-grammar-b-q02",
    prompt: "Which word in this sentence is a COMMON noun? \"Asha fed the cow.\"",
    options: [
      { id: "a", text: "Asha" },
      { id: "b", text: "fed" },
      { id: "c", text: "cow" },
      { id: "d", text: "the" }
    ],
    answerId: "c",
    explanation: "\"Cow\" is a common noun (any cow). Asha is a proper noun. Fed is a verb.",
    hints: ["Common nouns are general names, not special names.", "Asha is a special name (proper noun)."]
  },
  {
    id: "g3-eng-grammar-b-q03",
    prompt: "Which word is a PROPER noun?",
    options: [
      { id: "a", text: "teacher" },
      { id: "b", text: "school" },
      { id: "c", text: "Monday" },
      { id: "d", text: "pencil" }
    ],
    answerId: "c",
    explanation: "\"Monday\" is the special name of a day, so it is a proper noun.",
    hints: ["Proper nouns are special names.", "Teacher and school are common nouns."]
  },
  {
    id: "g3-eng-grammar-b-q04",
    prompt: "One box, two ____.",
    options: [
      { id: "a", text: "boxs" },
      { id: "b", text: "boxes" },
      { id: "c", text: "boxies" },
      { id: "d", text: "boxen" }
    ],
    answerId: "b",
    explanation: "Words ending in x add -es: box \u2192 boxes.",
    hints: ["Words ending in x, s, sh, or ch often add -es.", "Box + es = boxes."]
  },
  {
    id: "g3-eng-grammar-b-q05",
    prompt: "Which word is a VERB?",
    options: [
      { id: "a", text: "happy" },
      { id: "b", text: "write" },
      { id: "c", text: "green" },
      { id: "d", text: "desk" }
    ],
    answerId: "b",
    explanation: "\"Write\" is an action. Happy and green describe; desk names a thing.",
    hints: ["A verb tells what someone does.", "Desk is a noun."]
  },
  {
    id: "g3-eng-grammar-b-q06",
    prompt: "The children ____ a song.",
    options: [
      { id: "a", text: "song" },
      { id: "b", text: "loud" },
      { id: "c", text: "sing" },
      { id: "d", text: "stage" }
    ],
    answerId: "c",
    explanation: "\"Sing\" is the action. Song and stage are nouns.",
    hints: ["Choose the action that fits.", "Song names a thing, not an action."]
  },
  {
    id: "g3-eng-grammar-b-q07",
    prompt: "She ____ to school by bus.",
    options: [
      { id: "a", text: "go" },
      { id: "b", text: "goes" },
      { id: "c", text: "going" },
      { id: "d", text: "gone" }
    ],
    answerId: "b",
    explanation: "She is singular, so we say goes in the present.",
    hints: ["She = one person.", "With he/she/it, use goes not go."]
  },
  {
    id: "g3-eng-grammar-b-q08",
    prompt: "I ____ a student.",
    options: [
      { id: "a", text: "is" },
      { id: "b", text: "are" },
      { id: "c", text: "am" },
      { id: "d", text: "be" }
    ],
    answerId: "c",
    explanation: "With I, we use am: I am a student.",
    hints: ["Remember: I am, you are, he/she is.", "Never say I is or I are."]
  },
  {
    id: "g3-eng-grammar-b-q09",
    prompt: "Which word is an ADJECTIVE?",
    options: [
      { id: "a", text: "dog" },
      { id: "b", text: "bark" },
      { id: "c", text: "noisy" },
      { id: "d", text: "into" }
    ],
    answerId: "c",
    explanation: "\"Noisy\" describes a sound or thing. Dog is a noun; bark can be a verb.",
    hints: ["An adjective describes a noun.", "Noisy tells what kind of sound or place."]
  },
  {
    id: "g3-eng-grammar-b-q10",
    prompt: "We ate a **sweet** ladoo. Which word is the adjective?",
    options: [
      { id: "a", text: "We" },
      { id: "b", text: "ate" },
      { id: "c", text: "sweet" },
      { id: "d", text: "ladoo" }
    ],
    answerId: "c",
    explanation: "\"Sweet\" describes the ladoo. Ladoo is the noun.",
    hints: ["Find the describing word.", "Sweet tells what the ladoo tastes like."]
  },
  {
    id: "g3-eng-grammar-b-q11",
    prompt: "Choose the adjective: The ____ puppy wagged its tail.",
    options: [
      { id: "a", text: "tiny" },
      { id: "b", text: "ran" },
      { id: "c", text: "quickly" },
      { id: "d", text: "under" }
    ],
    answerId: "a",
    explanation: "\"Tiny\" describes the puppy's size.",
    hints: ["Pick a word that describes the puppy.", "Ran is a verb; quickly tells how."]
  },
  {
    id: "g3-eng-grammar-b-q12",
    prompt: "In \"a cold drink\", the adjective is ____.",
    options: [
      { id: "a", text: "a" },
      { id: "b", text: "cold" },
      { id: "c", text: "drink" },
      { id: "d", text: "none" }
    ],
    answerId: "b",
    explanation: "\"Cold\" describes the drink.",
    hints: ["The adjective tells what kind of drink.", "Drink is the noun."]
  },
  {
    id: "g3-eng-grammar-b-q13",
    prompt: "Choose the correct article: ____ umbrella is red.",
    options: [
      { id: "a", text: "A" },
      { id: "b", text: "An" },
      { id: "c", text: "\u2014 (none)" },
      { id: "d", text: "Them" }
    ],
    answerId: "b",
    explanation: "Umbrella begins with a vowel sound (u), so we use an.",
    hints: ["Listen to the first sound of umbrella.", "Umbrella starts with a vowel sound \u2192 an."]
  },
  {
    id: "g3-eng-grammar-b-q14",
    prompt: "Choose the correct article: ____ dog barked loudly.",
    options: [
      { id: "a", text: "An" },
      { id: "b", text: "A" },
      { id: "c", text: "\u2014 (none)" },
      { id: "d", text: "Them" }
    ],
    answerId: "b",
    explanation: "Dog begins with a consonant sound, so we use a.",
    hints: ["Dog begins with d \u2014 a consonant.", "Use a before consonant sounds."]
  },
  {
    id: "g3-eng-grammar-b-q15",
    prompt: "Please pass me ____ orange.",
    options: [
      { id: "a", text: "a" },
      { id: "b", text: "an" },
      { id: "c", text: "two" },
      { id: "d", text: "many" }
    ],
    answerId: "b",
    explanation: "Orange begins with a vowel sound, so we say an orange.",
    hints: ["Orange starts with o \u2014 a vowel sound.", "Use an before vowel sounds."]
  },
  {
    id: "g3-eng-grammar-b-q16",
    prompt: "____ moon looks bright tonight.",
    options: [
      { id: "a", text: "A" },
      { id: "b", text: "An" },
      { id: "c", text: "The" },
      { id: "d", text: "Some" }
    ],
    answerId: "c",
    explanation: "There is only one moon we all know, so we say the moon.",
    hints: ["The is used for something unique or already known.", "We say the sun and the moon."]
  },
  {
    id: "g3-eng-grammar-b-q17",
    prompt: "Last week, we ____ a movie.",
    options: [
      { id: "a", text: "watch" },
      { id: "b", text: "watches" },
      { id: "c", text: "watched" },
      { id: "d", text: "watching" }
    ],
    answerId: "c",
    explanation: "Last week means the past. The past form is watched.",
    hints: ["Last week = past time.", "Watch/watches are present forms."]
  },
  {
    id: "g3-eng-grammar-b-q18",
    prompt: "Every morning, Appa ____ tea.",
    options: [
      { id: "a", text: "make" },
      { id: "b", text: "makes" },
      { id: "c", text: "made" },
      { id: "d", text: "making" }
    ],
    answerId: "b",
    explanation: "Every morning shows a present habit. Appa = he, so makes.",
    hints: ["Every morning = present habit.", "Made is past."]
  },
  {
    id: "g3-eng-grammar-b-q19",
    prompt: "Which sentence is in the PRESENT tense?",
    options: [
      { id: "a", text: "She baked a cake." },
      { id: "b", text: "She will bake a cake." },
      { id: "c", text: "She bakes a cake." },
      { id: "d", text: "She was baking." }
    ],
    answerId: "c",
    explanation: "\"Bakes\" shows a present habit. Baked/was baking are past; will bake is future.",
    hints: ["Present tense is happening now or as a habit.", "Baked already happened."]
  },
  {
    id: "g3-eng-grammar-b-q20",
    prompt: "Look! It ____ outside.",
    options: [
      { id: "a", text: "rain" },
      { id: "b", text: "rains" },
      { id: "c", text: "is raining" },
      { id: "d", text: "rained" }
    ],
    answerId: "c",
    explanation: "Look! means right now, so we use is raining.",
    hints: ["Look! points to something happening now.", "Is + verb-ing = action in progress."]
  },
  {
    id: "g3-eng-grammar-b-q21",
    prompt: "Which sentence is written correctly?",
    options: [
      { id: "a", text: "how old are you" },
      { id: "b", text: "How old are you?" },
      { id: "c", text: "how old are you?" },
      { id: "d", text: "How old are you" }
    ],
    answerId: "b",
    explanation: "A question needs a capital letter at the start and a question mark at the end.",
    hints: ["Questions start with a capital and end with ?", "How needs a capital H."]
  },
  {
    id: "g3-eng-grammar-b-q22",
    prompt: "Choose the correct end mark: Stop___",
    options: [
      { id: "a", text: "." },
      { id: "b", text: "?" },
      { id: "c", text: "!" },
      { id: "d", text: "," }
    ],
    answerId: "c",
    explanation: "Stop! is a strong command, so we use an exclamation mark.",
    hints: ["Strong commands or feelings often use !", "Stop shows urgency."]
  },
  {
    id: "g3-eng-grammar-b-q23",
    prompt: "Which sentence uses capital letters correctly?",
    options: [
      { id: "a", text: "i live in mumbai." },
      { id: "b", text: "I live in Mumbai." },
      { id: "c", text: "i Live In Mumbai." },
      { id: "d", text: "I live in mumbai." }
    ],
    answerId: "b",
    explanation: "I and Mumbai both need capitals. Mumbai is a place name.",
    hints: ["The word I and place names need capitals.", "Mumbai is a proper noun."]
  },
  {
    id: "g3-eng-grammar-b-q24",
    prompt: "Fix the sentence: when is the test",
    options: [
      { id: "a", text: "when is the test?" },
      { id: "b", text: "When is the test?" },
      { id: "c", text: "When is the test." },
      { id: "d", text: "when is the test." }
    ],
    answerId: "b",
    explanation: "It is a question, so start with When (capital) and end with ?",
    hints: ["This asks something \u2014 use a question mark.", "Start with a capital letter."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "✏️",
    title: "Word jobs",
    body: [
      "Every word in a sentence has a job — naming, doing, or describing.",
      "Grammar helps those jobs fit together. Tap, try, then check!",
    ],
    cta: "Meet the jobs!",
    visual: "sentence",
    speak: "Every word in a sentence has a job. Grammar helps them fit together.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Tap the job",
    lead: "Reveal what each kind of word does.",
    visual: "sentence",
    speak: "Tap each card to reveal the word job.",
    cards: [
      { label: "noun", reveal: "names a person, place, or thing", emoji: "📛" },
      { label: "verb", reveal: "shows an action", emoji: "🏃" },
      { label: "adjective", reveal: "describes a noun", emoji: "🎨" },
      { label: "a / an / the", reveal: "little helpers before nouns", emoji: "🔤" },
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: "Read the jobs",
    visual: "sentence",
    speak: "The fluffy cat jumps. Cat is a noun. Fluffy is an adjective. Jumps is a verb.",
    steps: [
      "Sentence: The fluffy cat jumps.",
      "cat = noun (names the animal)",
      "fluffy = adjective (describes the cat)",
      "jumps = verb (the action)",
    ],
    punchline: "Name it, describe it, do it — that is grammar glue!",
  },
  {
    id: "t1",
    type: "try",
    title: "Fill it",
    prompt: "They ____ playing outside.",
    options: [
      { id: "a", text: "is" },
      { id: "b", text: "are" },
      { id: "c", text: "am" },
      { id: "d", text: "be" },
    ],
    answerId: "b",
    why: "They is plural, so we use are.",
    visual: "sentence",
    speak: "They blank playing outside. Which verb?",
  },
  {
    id: "c1",
    type: "check",
    title: "Quick check",
    visual: "sentence",
    speak: "Which word is a noun?",
    question: {
      id: "g3-eng-grammar-check",
      prompt: "Which word is a noun?",
      options: [
        { id: "a", text: "run" },
        { id: "b", text: "school" },
        { id: "c", text: "happy" },
        { id: "d", text: "quickly" },
      ],
      answerId: "b",
      explanation: "School names a place. Run is a verb; happy describes; quickly tells how.",
      hints: ["A noun names a person, place, or thing.", "Run tells an action, not a name."],
    },
  },
  {
    id: "w",
    type: "wrap",
    emoji: "✅",
    title: "Sentence sorted!",
    bullets: [
      "Nouns name · verbs do · adjectives describe",
      "a / an / the help before nouns",
      "Match the verb to the time (yesterday → past)",
      "Capitals + end marks finish the job",
      "Set A and Set B — 24 questions each",
    ],
    cta: "Back to chapter",
    speak: "You know the word jobs. You are ready for the practice sets.",
  },
];

export const g3EnglishGrammar: ChapterDef = {
  id: "grammar",
  title: "Grammar Basics",
  emoji: "✏️",
  blurb: "Word jobs & sentences",
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

export const g3EnglishGrammarQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
