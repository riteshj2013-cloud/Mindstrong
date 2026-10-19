import type { ChapterDef, PrepQuestion } from "../types";

/** Vocabulary - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g6-eng-vocab-a-q01",
    prompt: "Synonym of ancient is —",
    options: [
      { id: "a", text: "old" },
      { id: "b", text: "modern" },
      { id: "c", text: "tiny" },
      { id: "d", text: "quick" }
    ],
    answerId: "a",
    explanation: "Ancient means very old.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q02",
    prompt: "Antonym of guilty is —",
    options: [
      { id: "a", text: "ashamed" },
      { id: "b", text: "innocent" },
      { id: "c", text: "sorry" },
      { id: "d", text: "angry" }
    ],
    answerId: "b",
    explanation: "Guilty means having done wrong; innocent means having done nothing wrong. 'ashamed' is how a guilty person may feel, not the opposite.",
    hints: ["A guilty person did the wrong thing.", "Find the word for someone who did nothing wrong, the opposite of guilty."]
  },
  {
    id: "g6-eng-vocab-a-q03",
    prompt: "Synonym of assist is —",
    options: [
      { id: "a", text: "hinder" },
      { id: "b", text: "ignore" },
      { id: "c", text: "help" },
      { id: "d", text: "delay" }
    ],
    answerId: "c",
    explanation: "Assist means help.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q04",
    prompt: "Antonym of scarce is —",
    options: [
      { id: "a", text: "rare" },
      { id: "b", text: "little" },
      { id: "c", text: "thin" },
      { id: "d", text: "plentiful" }
    ],
    answerId: "d",
    explanation: "Scarce means not enough; plentiful is the opposite.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q05",
    prompt: "In “the storm was fierce,” fierce means —",
    options: [
      { id: "a", text: "violent" },
      { id: "b", text: "gentle" },
      { id: "c", text: "silent" },
      { id: "d", text: "colourful" }
    ],
    answerId: "a",
    explanation: "Fierce here means violent or intense.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q06",
    prompt: "Choose the word that means ‘a person who sells goods’:",
    options: [
      { id: "a", text: "author" },
      { id: "b", text: "vendor" },
      { id: "c", text: "coach" },
      { id: "d", text: "passenger" }
    ],
    answerId: "b",
    explanation: "A vendor sells goods.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q07",
    prompt: "Prefix dis- in disagree means —",
    options: [
      { id: "a", text: "very" },
      { id: "b", text: "again" },
      { id: "c", text: "not" },
      { id: "d", text: "before" }
    ],
    answerId: "c",
    explanation: "dis- reverses the meaning: disagree means not agree. 'again' is the meaning of re-, as in redo.",
    hints: ["Split \"disagree\" into dis- + agree.", "Compare dislike and disobey; what does dis- do to the word after it?"]
  },
  {
    id: "g6-eng-vocab-a-q08",
    prompt: "Suffix -ful in useful means —",
    options: [
      { id: "a", text: "without" },
      { id: "b", text: "against" },
      { id: "c", text: "before" },
      { id: "d", text: "full of" }
    ],
    answerId: "d",
    explanation: "Useful means full of use / having use.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q09",
    prompt: "Synonym of glance is —",
    options: [
      { id: "a", text: "quick look" },
      { id: "b", text: "stare for hours" },
      { id: "c", text: "shout" },
      { id: "d", text: "run" }
    ],
    answerId: "a",
    explanation: "A glance is a quick look.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q10",
    prompt: "Antonym of fragile is —",
    options: [
      { id: "a", text: "delicate" },
      { id: "b", text: "sturdy" },
      { id: "c", text: "thin" },
      { id: "d", text: "light" }
    ],
    answerId: "b",
    explanation: "Fragile means easily broken; sturdy means strong and hard to break. 'delicate' means nearly the same as fragile.",
    hints: ["A fragile glass vase breaks if you drop it.", "Delicate is a twin of fragile; find the word for something hard to break."]
  },
  {
    id: "g6-eng-vocab-a-q11",
    prompt: "Choose the correct meaning of transparent:",
    options: [
      { id: "a", text: "Cannot be seen through" },
      { id: "b", text: "Very heavy" },
      { id: "c", text: "Can be seen through" },
      { id: "d", text: "Always wet" }
    ],
    answerId: "c",
    explanation: "Transparent materials let light through so you can see through them.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q12",
    prompt: "Homophone of sail is —",
    options: [
      { id: "a", text: "sell" },
      { id: "b", text: "seal" },
      { id: "c", text: "soil" },
      { id: "d", text: "sale" }
    ],
    answerId: "d",
    explanation: "Sail (the cloth on a boat) and sale (selling at lower prices) sound the same but are spelt differently. 'sell' is linked in meaning but sounds different.",
    hints: ["Homophones sound exactly alike but are spelt differently.", "Say sail aloud, then find the word on a shop sign for lower prices."]
  },
  {
    id: "g6-eng-vocab-a-q13",
    prompt: "Synonym of commence is —",
    options: [
      { id: "a", text: "begin" },
      { id: "b", text: "end" },
      { id: "c", text: "pause" },
      { id: "d", text: "cancel" }
    ],
    answerId: "a",
    explanation: "Commence means begin.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q14",
    prompt: "Antonym of expand is —",
    options: [
      { id: "a", text: "grow" },
      { id: "b", text: "contract" },
      { id: "c", text: "rise" },
      { id: "d", text: "spread" }
    ],
    answerId: "b",
    explanation: "Contract means shrink — opposite of expand.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q15",
    prompt: "In “honest traders,” honest means —",
    options: [
      { id: "a", text: "rich" },
      { id: "b", text: "loud" },
      { id: "c", text: "truthful and fair" },
      { id: "d", text: "new" }
    ],
    answerId: "c",
    explanation: "Honest means truthful and fair.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q16",
    prompt: "Choose the odd one out (not a synonym of happy):",
    options: [
      { id: "a", text: "joyful" },
      { id: "b", text: "glad" },
      { id: "c", text: "cheerful" },
      { id: "d", text: "miserable" }
    ],
    answerId: "d",
    explanation: "Miserable means unhappy — the odd one.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q17",
    prompt: "Meaning of durable:",
    options: [
      { id: "a", text: "Lasting a long time" },
      { id: "b", text: "Easily broken" },
      { id: "c", text: "Always soft" },
      { id: "d", text: "Invisible" }
    ],
    answerId: "a",
    explanation: "Durable means lasting / not easily worn out.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q18",
    prompt: "Antonym of arrival is —",
    options: [
      { id: "a", text: "entry" },
      { id: "b", text: "departure" },
      { id: "c", text: "welcome" },
      { id: "d", text: "visit" }
    ],
    answerId: "b",
    explanation: "Departure is the opposite of arrival.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q19",
    prompt: "Synonym of cautious is —",
    options: [
      { id: "a", text: "careless" },
      { id: "b", text: "noisy" },
      { id: "c", text: "careful" },
      { id: "d", text: "swift always" }
    ],
    answerId: "c",
    explanation: "Cautious means careful.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q20",
    prompt: "The idiom “break the ice” means —",
    options: [
      { id: "a", text: "smash frozen water only" },
      { id: "b", text: "end a game" },
      { id: "c", text: "buy vegetables" },
      { id: "d", text: "start a friendly conversation" }
    ],
    answerId: "d",
    explanation: "Break the ice means to start conversation and ease tension.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q21",
    prompt: "Choose the correct word: The ____ of the story is to be patient.",
    options: [
      { id: "a", text: "moral" },
      { id: "b", text: "morale" },
      { id: "c", text: "mural" },
      { id: "d", text: "mortal" }
    ],
    answerId: "a",
    explanation: "Moral means the lesson of a story.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q22",
    prompt: "Antonym of artificial is —",
    options: [
      { id: "a", text: "fake" },
      { id: "b", text: "natural" },
      { id: "c", text: "plastic" },
      { id: "d", text: "copied" }
    ],
    answerId: "b",
    explanation: "Natural is opposite of artificial.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q23",
    prompt: "Synonym of fragrant is —",
    options: [
      { id: "a", text: "smelly in a bad way" },
      { id: "b", text: "silent" },
      { id: "c", text: "sweet-smelling" },
      { id: "d", text: "rough" }
    ],
    answerId: "c",
    explanation: "Fragrant means sweet-smelling.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q24",
    prompt: "In “sorting plastic from kitchen waste,” waste means —",
    options: [
      { id: "a", text: "valuable treasure" },
      { id: "b", text: "a footrace" },
      { id: "c", text: "a library shelf" },
      { id: "d", text: "unwanted discarded material" }
    ],
    answerId: "d",
    explanation: "Waste here means discarded unwanted material.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g6-eng-vocab-b-q01",
    prompt: "Synonym of rapid is —",
    options: [
      { id: "a", text: "quick" },
      { id: "b", text: "slow" },
      { id: "c", text: "heavy" },
      { id: "d", text: "quiet" }
    ],
    answerId: "a",
    explanation: "Rapid means quick.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-b-q02",
    prompt: "Antonym of shallow is —",
    options: [
      { id: "a", text: "thin" },
      { id: "b", text: "deep" },
      { id: "c", text: "wide" },
      { id: "d", text: "low" }
    ],
    answerId: "b",
    explanation: "Shallow water is not deep, so deep is its opposite. 'low' is close to shallow, not its opposite.",
    hints: ["A shallow pond comes up only to your ankles.", "The opposite of shallow is water far over your head."]
  },
  {
    id: "g6-eng-vocab-b-q03",
    prompt: "Synonym of silent is —",
    options: [
      { id: "a", text: "loud" },
      { id: "b", text: "busy" },
      { id: "c", text: "quiet" },
      { id: "d", text: "bright" }
    ],
    answerId: "c",
    explanation: "Silent means making no sound, which is the same as quiet. 'loud' is the opposite.",
    hints: ["A silent room has no sound at all.", "Find another word for silent, like a library with no talking."]
  },
  {
    id: "g6-eng-vocab-b-q04",
    prompt: "Antonym of victory is —",
    options: [
      { id: "a", text: "win" },
      { id: "b", text: "prize" },
      { id: "c", text: "cheer" },
      { id: "d", text: "defeat" }
    ],
    answerId: "d",
    explanation: "Defeat is the opposite of victory.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-b-q05",
    prompt: "In “fresh coriander,” fresh means —",
    options: [
      { id: "a", text: "recently harvested / not stale" },
      { id: "b", text: "stale" },
      { id: "c", text: "frozen solid" },
      { id: "d", text: "expensive" }
    ],
    answerId: "a",
    explanation: "Fresh means newly produced / not stale.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-b-q06",
    prompt: "Choose the word meaning ‘protect from harm’:",
    options: [
      { id: "a", text: "endanger" },
      { id: "b", text: "shield" },
      { id: "c", text: "ignore" },
      { id: "d", text: "scatter" }
    ],
    answerId: "b",
    explanation: "Shield means protect.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-b-q07",
    prompt: "Prefix pre- in preview means —",
    options: [
      { id: "a", text: "not" },
      { id: "b", text: "wrongly" },
      { id: "c", text: "before" },
      { id: "d", text: "against" }
    ],
    answerId: "c",
    explanation: "pre- means before: a preview is a look before the main show. 'against' is the meaning of anti-.",
    hints: ["Split \"preview\" into pre- + view.", "Like the prefix in prepay and preheat: when does the action happen?"]
  },
  {
    id: "g6-eng-vocab-b-q08",
    prompt: "Suffix -less in careless means —",
    options: [
      { id: "a", text: "full of" },
      { id: "b", text: "more" },
      { id: "c", text: "before" },
      { id: "d", text: "without" }
    ],
    answerId: "d",
    explanation: "Careless means without care.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-b-q09",
    prompt: "Synonym of purchase is —",
    options: [
      { id: "a", text: "buy" },
      { id: "b", text: "sell" },
      { id: "c", text: "borrow" },
      { id: "d", text: "lose" }
    ],
    answerId: "a",
    explanation: "Purchase means buy.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-b-q10",
    prompt: "Antonym of include is —",
    options: [
      { id: "a", text: "contain" },
      { id: "b", text: "exclude" },
      { id: "c", text: "add" },
      { id: "d", text: "list" }
    ],
    answerId: "b",
    explanation: "Exclude is the opposite of include.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-b-q11",
    prompt: "Meaning of fertile (soil):",
    options: [
      { id: "a", text: "barren" },
      { id: "b", text: "always sandy" },
      { id: "c", text: "able to grow plants well" },
      { id: "d", text: "made of plastic" }
    ],
    answerId: "c",
    explanation: "Fertile soil is good for growing plants.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-b-q12",
    prompt: "Homophone of knight is —",
    options: [
      { id: "a", text: "knit" },
      { id: "b", text: "kite" },
      { id: "c", text: "nine" },
      { id: "d", text: "night" }
    ],
    answerId: "d",
    explanation: "Knight (the k is silent) sounds exactly like night. 'knit' also has a silent k, but its vowel sound is different.",
    hints: ["The k in \"knight\" is silent; say it aloud.", "Which word sounds exactly like knight and names the time after evening?"]
  },
  {
    id: "g6-eng-vocab-b-q13",
    prompt: "Synonym of vanish is —",
    options: [
      { id: "a", text: "disappear" },
      { id: "b", text: "appear" },
      { id: "c", text: "shine" },
      { id: "d", text: "grow" }
    ],
    answerId: "a",
    explanation: "Vanish means disappear.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-b-q14",
    prompt: "Antonym of praise is —",
    options: [
      { id: "a", text: "admire" },
      { id: "b", text: "criticise" },
      { id: "c", text: "thank" },
      { id: "d", text: "reward" }
    ],
    answerId: "b",
    explanation: "To praise is to say good things about someone; to criticise is to point out faults. 'admire' is close to praise, not its opposite.",
    hints: ["The coach praised the team for its hard work.", "Find the word for pointing out faults, the opposite of praise."]
  },
  {
    id: "g6-eng-vocab-b-q15",
    prompt: "In “annual fair,” annual means —",
    options: [
      { id: "a", text: "weekly" },
      { id: "b", text: "daily" },
      { id: "c", text: "happening once a year" },
      { id: "d", text: "never" }
    ],
    answerId: "c",
    explanation: "Annual means once a year.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-b-q16",
    prompt: "Odd one out (not a synonym of big):",
    options: [
      { id: "a", text: "large" },
      { id: "b", text: "huge" },
      { id: "c", text: "enormous" },
      { id: "d", text: "tiny" }
    ],
    answerId: "d",
    explanation: "Tiny means small — the odd one.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-b-q17",
    prompt: "Meaning of flexible:",
    options: [
      { id: "a", text: "able to bend easily" },
      { id: "b", text: "unable to bend" },
      { id: "c", text: "always wet" },
      { id: "d", text: "made of stone only" }
    ],
    answerId: "a",
    explanation: "Flexible means able to bend without breaking.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-b-q18",
    prompt: "Antonym of temporary is —",
    options: [
      { id: "a", text: "brief" },
      { id: "b", text: "permanent" },
      { id: "c", text: "short" },
      { id: "d", text: "passing" }
    ],
    answerId: "b",
    explanation: "Permanent is opposite of temporary.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-b-q19",
    prompt: "Synonym of difficult is —",
    options: [
      { id: "a", text: "easy" },
      { id: "b", text: "simple" },
      { id: "c", text: "hard" },
      { id: "d", text: "clear" }
    ],
    answerId: "c",
    explanation: "Difficult means hard.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-b-q20",
    prompt: "The idiom “hit the books” means —",
    options: [
      { id: "a", text: "hit someone with a book" },
      { id: "b", text: "tidy the bookshelf" },
      { id: "c", text: "sell old books" },
      { id: "d", text: "study hard" }
    ],
    answerId: "d",
    explanation: "'Hit the books' means to study hard. 'hit someone with a book' is the literal reading, but the idiom is not about hitting.",
    hints: ["\"hit the books\" is an idiom; nobody really hits anything.", "Before exams, Kabir decided to \"hit the books\". What did he do?"]
  },
  {
    id: "g6-eng-vocab-b-q21",
    prompt: "Choose the correct word: Please ____ the lights when you leave.",
    options: [
      { id: "a", text: "switch off" },
      { id: "b", text: "close" },
      { id: "c", text: "open" },
      { id: "d", text: "grow" }
    ],
    answerId: "a",
    explanation: "We switch off / turn off lights (not close lights).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-b-q22",
    prompt: "Antonym of public is —",
    options: [
      { id: "a", text: "open" },
      { id: "b", text: "private" },
      { id: "c", text: "common" },
      { id: "d", text: "shared" }
    ],
    answerId: "b",
    explanation: "Private is opposite of public.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-b-q23",
    prompt: "Synonym of weary is —",
    options: [
      { id: "a", text: "fresh" },
      { id: "b", text: "excited" },
      { id: "c", text: "tired" },
      { id: "d", text: "loud" }
    ],
    answerId: "c",
    explanation: "Weary means tired.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-b-q24",
    prompt: "In “fielding until dusk,” dusk means —",
    options: [
      { id: "a", text: "midday" },
      { id: "b", text: "midnight only" },
      { id: "c", text: "dawn" },
      { id: "d", text: "evening twilight" }
    ],
    answerId: "d",
    explanation: "Dusk is the dim light at the end of the day.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "📚",
    title: "Vocabulary",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "word-cards",
    speak: "Word power grows with synonyms, antonyms and context clues.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "word-cards",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Synonym", reveal: "Nearly the same meaning", emoji: "🗣️" },
      { label: "Antonym", reveal: "Opposite meaning", emoji: "↔️" },
      { label: "Context", reveal: "Nearby words reveal meaning", emoji: "🧩" },
      { label: "Word parts", reveal: "Prefixes and roots help", emoji: "🧱" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Synonym of “brave”?",
    options: [
        { id: "a", text: "timid" },
        { id: "b", text: "courageous" },
        { id: "c", text: "silent" },
        { id: "d", text: "narrow" }
    ],
    answerId: "b",
    why: "Courageous ≈ brave.",
    visual: "word-cards",
    speak: "Synonym of “brave”?",
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

export const g6EnglishVocabulary: ChapterDef = {
  id: "vocabulary",
  title: "Vocabulary",
  emoji: "📚",
  blurb: "Word meanings, opposites and context",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "vocabulary",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "vocabulary",
      questions: SET_B,
    },
  ],
  paperTopics: ["vocabulary", "synonyms", "antonyms"],
};

export const g6EnglishVocabularyQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
