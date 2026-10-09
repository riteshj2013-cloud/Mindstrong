import type { ChapterDef, PrepQuestion } from "../types";

/** Vocabulary - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g6-eng-vocab-a-q01",
    prompt: "Synonym of ancient is —",
    options: [
      { id: "a", text: "modern" },
      { id: "b", text: "old" },
      { id: "c", text: "tiny" },
      { id: "d", text: "quick" }
    ],
    answerId: "b",
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
      { id: "a", text: "hinder" },
      { id: "b", text: "help" },
      { id: "c", text: "ignore" },
      { id: "d", text: "delay" }
    ],
    answerId: "b",
    explanation: "Assist means help.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q04",
    prompt: "Antonym of scarce is —",
    options: [
      { id: "a", text: "rare" },
      { id: "b", text: "plentiful" },
      { id: "c", text: "little" },
      { id: "d", text: "thin" }
    ],
    answerId: "b",
    explanation: "Scarce means not enough; plentiful is the opposite.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q05",
    prompt: "In “the storm was fierce,” fierce means —",
    options: [
      { id: "a", text: "gentle" },
      { id: "b", text: "violent" },
      { id: "c", text: "silent" },
      { id: "d", text: "colourful" }
    ],
    answerId: "b",
    explanation: "Fierce here means violent or intense.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q06",
    prompt: "Choose the word that means ‘a person who sells goods’:",
    options: [
      { id: "a", text: "vendor" },
      { id: "b", text: "author" },
      { id: "c", text: "coach" },
      { id: "d", text: "passenger" }
    ],
    answerId: "a",
    explanation: "A vendor sells goods.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q07",
    prompt: "Prefix un- in unkind means —",
    options: [
      { id: "a", text: "very" },
      { id: "b", text: "not" },
      { id: "c", text: "again" },
      { id: "d", text: "before" }
    ],
    answerId: "b",
    explanation: "Un- often means not: unkind = not kind.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q08",
    prompt: "Suffix -ful in useful means —",
    options: [
      { id: "a", text: "without" },
      { id: "b", text: "full of" },
      { id: "c", text: "against" },
      { id: "d", text: "before" }
    ],
    answerId: "b",
    explanation: "Useful means full of use / having use.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q09",
    prompt: "Synonym of glance is —",
    options: [
      { id: "a", text: "stare for hours" },
      { id: "b", text: "quick look" },
      { id: "c", text: "shout" },
      { id: "d", text: "run" }
    ],
    answerId: "b",
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
      { id: "a", text: "Cannot be seen through" },
      { id: "b", text: "Can be seen through" },
      { id: "c", text: "Very heavy" },
      { id: "d", text: "Always wet" }
    ],
    answerId: "b",
    explanation: "Transparent materials let light through so you can see through them.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q12",
    prompt: "Homophone of pair is —",
    options: [
      { id: "a", text: "pear" },
      { id: "b", text: "peer only" },
      { id: "c", text: "pour" },
      { id: "d", text: "poor only" }
    ],
    answerId: "a",
    explanation: "Pair and pear sound alike but differ in meaning.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q13",
    prompt: "Synonym of commence is —",
    options: [
      { id: "a", text: "end" },
      { id: "b", text: "begin" },
      { id: "c", text: "pause" },
      { id: "d", text: "cancel" }
    ],
    answerId: "b",
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
      { id: "a", text: "truthful and fair" },
      { id: "b", text: "rich" },
      { id: "c", text: "loud" },
      { id: "d", text: "new" }
    ],
    answerId: "a",
    explanation: "Honest means truthful and fair.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q16",
    prompt: "Choose the odd one out (not a synonym of happy):",
    options: [
      { id: "a", text: "joyful" },
      { id: "b", text: "glad" },
      { id: "c", text: "miserable" },
      { id: "d", text: "cheerful" }
    ],
    answerId: "c",
    explanation: "Miserable means unhappy — the odd one.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q17",
    prompt: "Meaning of durable:",
    options: [
      { id: "a", text: "Easily broken" },
      { id: "b", text: "Lasting a long time" },
      { id: "c", text: "Always soft" },
      { id: "d", text: "Invisible" }
    ],
    answerId: "b",
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
      { id: "b", text: "careful" },
      { id: "c", text: "noisy" },
      { id: "d", text: "swift always" }
    ],
    answerId: "b",
    explanation: "Cautious means careful.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q20",
    prompt: "The idiom “break the ice” means —",
    options: [
      { id: "a", text: "smash frozen water only" },
      { id: "b", text: "start a friendly conversation" },
      { id: "c", text: "end a game" },
      { id: "d", text: "buy vegetables" }
    ],
    answerId: "b",
    explanation: "Break the ice means to start conversation and ease tension.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q21",
    prompt: "Choose the correct word: The ____ of the story is to be patient.",
    options: [
      { id: "a", text: "morale" },
      { id: "b", text: "moral" },
      { id: "c", text: "mural" },
      { id: "d", text: "mortal" }
    ],
    answerId: "b",
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
      { id: "b", text: "sweet-smelling" },
      { id: "c", text: "silent" },
      { id: "d", text: "rough" }
    ],
    answerId: "b",
    explanation: "Fragrant means sweet-smelling.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-a-q24",
    prompt: "In “sorting plastic from kitchen waste,” waste means —",
    options: [
      { id: "a", text: "valuable treasure" },
      { id: "b", text: "unwanted discarded material" },
      { id: "c", text: "a footrace" },
      { id: "d", text: "a library shelf" }
    ],
    answerId: "b",
    explanation: "Waste here means discarded unwanted material.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g6-eng-vocab-b-q01",
    prompt: "Synonym of rapid is —",
    options: [
      { id: "a", text: "slow" },
      { id: "b", text: "quick" },
      { id: "c", text: "heavy" },
      { id: "d", text: "quiet" }
    ],
    answerId: "b",
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
      { id: "a", text: "huge" },
      { id: "b", text: "small" },
      { id: "c", text: "tall" },
      { id: "d", text: "wide" }
    ],
    answerId: "b",
    explanation: "Tiny means very small.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-b-q04",
    prompt: "Antonym of victory is —",
    options: [
      { id: "a", text: "win" },
      { id: "b", text: "defeat" },
      { id: "c", text: "prize" },
      { id: "d", text: "cheer" }
    ],
    answerId: "b",
    explanation: "Defeat is the opposite of victory.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-b-q05",
    prompt: "In “fresh coriander,” fresh means —",
    options: [
      { id: "a", text: "stale" },
      { id: "b", text: "recently harvested / not stale" },
      { id: "c", text: "frozen solid" },
      { id: "d", text: "expensive" }
    ],
    answerId: "b",
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
      { id: "a", text: "not" },
      { id: "b", text: "again" },
      { id: "c", text: "wrongly" },
      { id: "d", text: "against" }
    ],
    answerId: "b",
    explanation: "Re- often means again: rewrite = write again.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-b-q08",
    prompt: "Suffix -less in careless means —",
    options: [
      { id: "a", text: "full of" },
      { id: "b", text: "without" },
      { id: "c", text: "more" },
      { id: "d", text: "before" }
    ],
    answerId: "b",
    explanation: "Careless means without care.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-b-q09",
    prompt: "Synonym of purchase is —",
    options: [
      { id: "a", text: "sell" },
      { id: "b", text: "buy" },
      { id: "c", text: "borrow" },
      { id: "d", text: "lose" }
    ],
    answerId: "b",
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
      { id: "b", text: "able to grow plants well" },
      { id: "c", text: "always sandy" },
      { id: "d", text: "made of plastic" }
    ],
    answerId: "b",
    explanation: "Fertile soil is good for growing plants.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-b-q12",
    prompt: "Homophone of sea is —",
    options: [
      { id: "a", text: "see" },
      { id: "b", text: "say" },
      { id: "c", text: "sigh" },
      { id: "d", text: "sow" }
    ],
    answerId: "a",
    explanation: "Sea and see sound the same.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-b-q13",
    prompt: "Synonym of vanish is —",
    options: [
      { id: "a", text: "appear" },
      { id: "b", text: "disappear" },
      { id: "c", text: "shine" },
      { id: "d", text: "grow" }
    ],
    answerId: "b",
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
      { id: "a", text: "weekly" },
      { id: "b", text: "happening once a year" },
      { id: "c", text: "daily" },
      { id: "d", text: "never" }
    ],
    answerId: "b",
    explanation: "Annual means once a year.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-b-q16",
    prompt: "Odd one out (not a synonym of big):",
    options: [
      { id: "a", text: "large" },
      { id: "b", text: "huge" },
      { id: "c", text: "tiny" },
      { id: "d", text: "enormous" }
    ],
    answerId: "c",
    explanation: "Tiny means small — the odd one.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-b-q17",
    prompt: "Meaning of flexible:",
    options: [
      { id: "a", text: "unable to bend" },
      { id: "b", text: "able to bend easily" },
      { id: "c", text: "always wet" },
      { id: "d", text: "made of stone only" }
    ],
    answerId: "b",
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
      { id: "b", text: "hard" },
      { id: "c", text: "simple" },
      { id: "d", text: "clear" }
    ],
    answerId: "b",
    explanation: "Difficult means hard.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-b-q20",
    prompt: "The idiom “a piece of cake” means —",
    options: [
      { id: "a", text: "a dessert only" },
      { id: "b", text: "something very easy" },
      { id: "c", text: "something expensive" },
      { id: "d", text: "a cricket shot" }
    ],
    answerId: "b",
    explanation: "Informally, a piece of cake means very easy.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-b-q21",
    prompt: "Choose the correct word: Please ____ the lights when you leave.",
    options: [
      { id: "a", text: "close" },
      { id: "b", text: "switch off" },
      { id: "c", text: "open" },
      { id: "d", text: "grow" }
    ],
    answerId: "b",
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
      { id: "b", text: "tired" },
      { id: "c", text: "excited" },
      { id: "d", text: "loud" }
    ],
    answerId: "b",
    explanation: "Weary means tired.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g6-eng-vocab-b-q24",
    prompt: "In “fielding until dusk,” dusk means —",
    options: [
      { id: "a", text: "midday" },
      { id: "b", text: "evening twilight" },
      { id: "c", text: "midnight only" },
      { id: "d", text: "dawn" }
    ],
    answerId: "b",
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
