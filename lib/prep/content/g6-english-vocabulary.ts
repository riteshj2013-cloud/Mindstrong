import type { ChapterDef, PrepQuestion } from "../types";

/** Vocabulary - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g6-eng-vocab-a-q01",
    prompt: "Synonym of ancient is —",
    options: [
      { id: "a", text: "old" },
      { id: "b", text: "tiny" },
      { id: "c", text: "quick" },
      { id: "d", text: "modern" }
    ],
    answerId: "a",
    explanation: "Ancient means very old.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q02",
    prompt: "Antonym of brave is —",
    options: [
      { id: "a", text: "courageous" },
      { id: "b", text: "timid" },
      { id: "c", text: "bold" },
      { id: "d", text: "heroic" }
    ],
    answerId: "b",
    explanation: "Timid is the opposite of brave.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q03",
    prompt: "Synonym of assist is —",
    options: [
      { id: "a", text: "delay" },
      { id: "b", text: "hinder" },
      { id: "c", text: "help" },
      { id: "d", text: "ignore" }
    ],
    answerId: "c",
    explanation: "Assist means help.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q04",
    prompt: "Antonym of scarce is —",
    options: [
      { id: "a", text: "little" },
      { id: "b", text: "thin" },
      { id: "c", text: "rare" },
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
      { id: "b", text: "silent" },
      { id: "c", text: "colourful" },
      { id: "d", text: "gentle" }
    ],
    answerId: "a",
    explanation: "Fierce here means violent or intense.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q06",
    prompt: "Choose the word that means ‘a person who sells goods’:",
    options: [
      { id: "a", text: "passenger" },
      { id: "b", text: "vendor" },
      { id: "c", text: "author" },
      { id: "d", text: "coach" }
    ],
    answerId: "b",
    explanation: "A vendor sells goods.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q07",
    prompt: "Prefix un- in unkind means —",
    options: [
      { id: "a", text: "before" },
      { id: "b", text: "very" },
      { id: "c", text: "not" },
      { id: "d", text: "again" }
    ],
    answerId: "c",
    explanation: "Un- often means not: unkind = not kind.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q08",
    prompt: "Suffix -ful in useful means —",
    options: [
      { id: "a", text: "against" },
      { id: "b", text: "before" },
      { id: "c", text: "without" },
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
      { id: "b", text: "shout" },
      { id: "c", text: "run" },
      { id: "d", text: "stare for hours" }
    ],
    answerId: "a",
    explanation: "A glance is a quick look.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q10",
    prompt: "Antonym of generous is —",
    options: [
      { id: "a", text: "kind" },
      { id: "b", text: "selfish" },
      { id: "c", text: "open" },
      { id: "d", text: "giving" }
    ],
    answerId: "b",
    explanation: "Selfish is opposite of generous.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q11",
    prompt: "Choose the correct meaning of transparent:",
    options: [
      { id: "a", text: "Always wet" },
      { id: "b", text: "Cannot be seen through" },
      { id: "c", text: "Can be seen through" },
      { id: "d", text: "Very heavy" }
    ],
    answerId: "c",
    explanation: "Transparent materials let light through so you can see through them.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q12",
    prompt: "Homophone of pair is —",
    options: [
      { id: "a", text: "peer only" },
      { id: "b", text: "pour" },
      { id: "c", text: "poor only" },
      { id: "d", text: "pear" }
    ],
    answerId: "d",
    explanation: "Pair and pear sound alike but differ in meaning.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q13",
    prompt: "Synonym of commence is —",
    options: [
      { id: "a", text: "begin" },
      { id: "b", text: "pause" },
      { id: "c", text: "cancel" },
      { id: "d", text: "end" }
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
      { id: "a", text: "loud" },
      { id: "b", text: "new" },
      { id: "c", text: "truthful and fair" },
      { id: "d", text: "rich" }
    ],
    answerId: "c",
    explanation: "Honest means truthful and fair.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q16",
    prompt: "Choose the odd one out (not a synonym of happy):",
    options: [
      { id: "a", text: "cheerful" },
      { id: "b", text: "joyful" },
      { id: "c", text: "glad" },
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
      { id: "b", text: "Always soft" },
      { id: "c", text: "Invisible" },
      { id: "d", text: "Easily broken" }
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
      { id: "a", text: "swift always" },
      { id: "b", text: "careless" },
      { id: "c", text: "careful" },
      { id: "d", text: "noisy" }
    ],
    answerId: "c",
    explanation: "Cautious means careful.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q20",
    prompt: "The idiom “break the ice” means —",
    options: [
      { id: "a", text: "end a game" },
      { id: "b", text: "buy vegetables" },
      { id: "c", text: "smash frozen water only" },
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
      { id: "b", text: "mural" },
      { id: "c", text: "mortal" },
      { id: "d", text: "morale" }
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
      { id: "a", text: "rough" },
      { id: "b", text: "smelly in a bad way" },
      { id: "c", text: "sweet-smelling" },
      { id: "d", text: "silent" }
    ],
    answerId: "c",
    explanation: "Fragrant means sweet-smelling.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q24",
    prompt: "In “sorting plastic from kitchen waste,” waste means —",
    options: [
      { id: "a", text: "a footrace" },
      { id: "b", text: "a library shelf" },
      { id: "c", text: "valuable treasure" },
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
      { id: "b", text: "heavy" },
      { id: "c", text: "quiet" },
      { id: "d", text: "slow" }
    ],
    answerId: "a",
    explanation: "Rapid means quick.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-b-q02",
    prompt: "Antonym of noisy is —",
    options: [
      { id: "a", text: "loud" },
      { id: "b", text: "quiet" },
      { id: "c", text: "busy" },
      { id: "d", text: "bright" }
    ],
    answerId: "b",
    explanation: "Quiet is the opposite of noisy.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-b-q03",
    prompt: "Synonym of tiny is —",
    options: [
      { id: "a", text: "wide" },
      { id: "b", text: "huge" },
      { id: "c", text: "small" },
      { id: "d", text: "tall" }
    ],
    answerId: "c",
    explanation: "Tiny means very small.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-b-q04",
    prompt: "Antonym of victory is —",
    options: [
      { id: "a", text: "prize" },
      { id: "b", text: "cheer" },
      { id: "c", text: "win" },
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
      { id: "b", text: "frozen solid" },
      { id: "c", text: "expensive" },
      { id: "d", text: "stale" }
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
    prompt: "Prefix re- in rewrite means —",
    options: [
      { id: "a", text: "against" },
      { id: "b", text: "not" },
      { id: "c", text: "again" },
      { id: "d", text: "wrongly" }
    ],
    answerId: "c",
    explanation: "Re- often means again: rewrite = write again.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-b-q08",
    prompt: "Suffix -less in careless means —",
    options: [
      { id: "a", text: "more" },
      { id: "b", text: "before" },
      { id: "c", text: "full of" },
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
      { id: "b", text: "borrow" },
      { id: "c", text: "lose" },
      { id: "d", text: "sell" }
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
      { id: "a", text: "made of plastic" },
      { id: "b", text: "barren" },
      { id: "c", text: "able to grow plants well" },
      { id: "d", text: "always sandy" }
    ],
    answerId: "c",
    explanation: "Fertile soil is good for growing plants.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-b-q12",
    prompt: "Homophone of sea is —",
    options: [
      { id: "a", text: "say" },
      { id: "b", text: "sigh" },
      { id: "c", text: "sow" },
      { id: "d", text: "see" }
    ],
    answerId: "d",
    explanation: "Sea and see sound the same.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-b-q13",
    prompt: "Synonym of vanish is —",
    options: [
      { id: "a", text: "disappear" },
      { id: "b", text: "shine" },
      { id: "c", text: "grow" },
      { id: "d", text: "appear" }
    ],
    answerId: "a",
    explanation: "Vanish means disappear.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-b-q14",
    prompt: "Antonym of polite is —",
    options: [
      { id: "a", text: "courteous" },
      { id: "b", text: "rude" },
      { id: "c", text: "kind" },
      { id: "d", text: "gentle" }
    ],
    answerId: "b",
    explanation: "Rude is opposite of polite.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-b-q15",
    prompt: "In “annual fair,” annual means —",
    options: [
      { id: "a", text: "never" },
      { id: "b", text: "weekly" },
      { id: "c", text: "happening once a year" },
      { id: "d", text: "daily" }
    ],
    answerId: "c",
    explanation: "Annual means once a year.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-b-q16",
    prompt: "Odd one out (not a synonym of big):",
    options: [
      { id: "a", text: "enormous" },
      { id: "b", text: "large" },
      { id: "c", text: "huge" },
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
      { id: "b", text: "always wet" },
      { id: "c", text: "made of stone only" },
      { id: "d", text: "unable to bend" }
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
      { id: "a", text: "clear" },
      { id: "b", text: "easy" },
      { id: "c", text: "hard" },
      { id: "d", text: "simple" }
    ],
    answerId: "c",
    explanation: "Difficult means hard.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-b-q20",
    prompt: "The idiom “a piece of cake” means —",
    options: [
      { id: "a", text: "something expensive" },
      { id: "b", text: "a cricket shot" },
      { id: "c", text: "a dessert only" },
      { id: "d", text: "something very easy" }
    ],
    answerId: "d",
    explanation: "Informally, a piece of cake means very easy.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-b-q21",
    prompt: "Choose the correct word: Please ____ the lights when you leave.",
    options: [
      { id: "a", text: "switch off" },
      { id: "b", text: "open" },
      { id: "c", text: "grow" },
      { id: "d", text: "close" }
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
      { id: "a", text: "loud" },
      { id: "b", text: "fresh" },
      { id: "c", text: "tired" },
      { id: "d", text: "excited" }
    ],
    answerId: "c",
    explanation: "Weary means tired.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-b-q24",
    prompt: "In “fielding until dusk,” dusk means —",
    options: [
      { id: "a", text: "midnight only" },
      { id: "b", text: "dawn" },
      { id: "c", text: "midday" },
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
