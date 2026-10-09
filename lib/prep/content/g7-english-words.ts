import type { ChapterDef, PrepQuestion } from "../types";

/** Word Power - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g7-eng-words-a-q01",
    prompt: "Synonym of \u201cbrave\u201d?",
    options: [
      { id: "a", text: "courageous" },
      { id: "b", text: "timid" },
      { id: "c", text: "silent" },
      { id: "d", text: "narrow" }
    ],
    answerId: "a",
    explanation: "Courageous means nearly the same as brave.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-a-q02",
    prompt: "Antonym of \u201cscarce\u201d?",
    options: [
      { id: "a", text: "rare" },
      { id: "b", text: "plentiful" },
      { id: "c", text: "tiny" },
      { id: "d", text: "hidden" }
    ],
    answerId: "b",
    explanation: "Scarce means in short supply; plentiful is the opposite.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-a-q03",
    prompt: "Best meaning of \u201cglimpse\u201d?",
    options: [
      { id: "a", text: "a long speech" },
      { id: "b", text: "a heavy meal" },
      { id: "c", text: "a quick look" },
      { id: "d", text: "a loud song" }
    ],
    answerId: "c",
    explanation: "A glimpse is a brief look.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-a-q04",
    prompt: "Homophone of \u201cflour\u201d?",
    options: [
      { id: "a", text: "floor" },
      { id: "b", text: "flare" },
      { id: "c", text: "four" },
      { id: "d", text: "flower" }
    ],
    answerId: "d",
    explanation: "Flour and flower sound alike but differ in meaning.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-a-q05",
    prompt: "Idiom: \u201cspill the beans\u201d means\u2026",
    options: [
      { id: "a", text: "reveal a secret" },
      { id: "b", text: "cook dinner" },
      { id: "c", text: "drop groceries" },
      { id: "d", text: "plant seeds" }
    ],
    answerId: "a",
    explanation: "It means to tell something that was meant to be secret.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-a-q06",
    prompt: "Synonym of \u201cancient\u201d?",
    options: [
      { id: "a", text: "brand new" },
      { id: "b", text: "very old" },
      { id: "c", text: "tiny" },
      { id: "d", text: "noisy" }
    ],
    answerId: "b",
    explanation: "Ancient means belonging to the distant past.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-a-q07",
    prompt: "Antonym of \u201cexpand\u201d?",
    options: [
      { id: "a", text: "grow" },
      { id: "b", text: "widen" },
      { id: "c", text: "shrink" },
      { id: "d", text: "increase" }
    ],
    answerId: "c",
    explanation: "Expand means become larger; shrink is opposite.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-a-q08",
    prompt: "Context: \u201cThe referee\u2019s decision was impartial.\u201d Impartial means\u2026",
    options: [
      { id: "a", text: "angry" },
      { id: "b", text: "delayed" },
      { id: "c", text: "secret" },
      { id: "d", text: "fair and unbiased" }
    ],
    answerId: "d",
    explanation: "Impartial means not favouring either side.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-a-q09",
    prompt: "Prefix in \u201cunhappy\u201d means\u2026",
    options: [
      { id: "a", text: "not" },
      { id: "b", text: "again" },
      { id: "c", text: "before" },
      { id: "d", text: "wrongly always" }
    ],
    answerId: "a",
    explanation: "Un- often means not.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-a-q10",
    prompt: "Suffix in \u201chopeful\u201d suggests\u2026",
    options: [
      { id: "a", text: "without" },
      { id: "b", text: "full of" },
      { id: "c", text: "again" },
      { id: "d", text: "against" }
    ],
    answerId: "b",
    explanation: "-ful means full of.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-a-q11",
    prompt: "Synonym of \u201cassist\u201d?",
    options: [
      { id: "a", text: "hinder" },
      { id: "b", text: "hide" },
      { id: "c", text: "help" },
      { id: "d", text: "harm" }
    ],
    answerId: "c",
    explanation: "Assist means help.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-a-q12",
    prompt: "Antonym of \u201cgenerous\u201d?",
    options: [
      { id: "a", text: "kind" },
      { id: "b", text: "giving" },
      { id: "c", text: "open" },
      { id: "d", text: "selfish" }
    ],
    answerId: "d",
    explanation: "Generous people give freely; selfish is opposite.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-a-q13",
    prompt: "\u201cOpaque\u201d most nearly means\u2026",
    options: [
      { id: "a", text: "not see-through" },
      { id: "b", text: "transparent" },
      { id: "c", text: "musical" },
      { id: "d", text: "edible" }
    ],
    answerId: "a",
    explanation: "Opaque materials do not let light through.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-a-q14",
    prompt: "Choose the correctly spelled word:",
    options: [
      { id: "a", text: "neccessary" },
      { id: "b", text: "necessary" },
      { id: "c", text: "neccesary" },
      { id: "d", text: "necesary" }
    ],
    answerId: "b",
    explanation: "Necessary has one c and two s\u2019s.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-a-q15",
    prompt: "Idiom: \u201conce in a blue moon\u201d means\u2026",
    options: [
      { id: "a", text: "every night" },
      { id: "b", text: "at noon" },
      { id: "c", text: "very rarely" },
      { id: "d", text: "underwater" }
    ],
    answerId: "c",
    explanation: "It means something happens almost never.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-a-q16",
    prompt: "Synonym of \u201cprecise\u201d?",
    options: [
      { id: "a", text: "vague" },
      { id: "b", text: "messy" },
      { id: "c", text: "late" },
      { id: "d", text: "exact" }
    ],
    answerId: "d",
    explanation: "Precise means exact and accurate.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-a-q17",
    prompt: "Antonym of \u201ctemporary\u201d?",
    options: [
      { id: "a", text: "permanent" },
      { id: "b", text: "brief" },
      { id: "c", text: "short" },
      { id: "d", text: "passing" }
    ],
    answerId: "a",
    explanation: "Temporary lasts a short time; permanent lasts.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-a-q18",
    prompt: "\u201cReluctant\u201d means\u2026",
    options: [
      { id: "a", text: "eager" },
      { id: "b", text: "unwilling" },
      { id: "c", text: "loud" },
      { id: "d", text: "hungry" }
    ],
    answerId: "b",
    explanation: "Reluctant people hesitate to do something.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-a-q19",
    prompt: "Root \u201cbio\u201d relates to\u2026",
    options: [
      { id: "a", text: "heat" },
      { id: "b", text: "stone" },
      { id: "c", text: "life" },
      { id: "d", text: "sound" }
    ],
    answerId: "c",
    explanation: "Biology is the study of life.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-a-q20",
    prompt: "Choose the best word: The ____ of the story made us smile.",
    options: [
      { id: "a", text: "mural" },
      { id: "b", text: "mortal" },
      { id: "c", text: "metal" },
      { id: "d", text: "moral" }
    ],
    answerId: "d",
    explanation: "Moral means the lesson of a story.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-a-q21",
    prompt: "Homophones: Which pair is correct?",
    options: [
      { id: "a", text: "peace / piece" },
      { id: "b", text: "peace / peas only as the only pair" },
      { id: "c", text: "piece / pace" },
      { id: "d", text: "peace / pierce" }
    ],
    answerId: "a",
    explanation: "Peace and piece sound alike.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-a-q22",
    prompt: "Synonym of \u201cfragile\u201d?",
    options: [
      { id: "a", text: "sturdy" },
      { id: "b", text: "delicate" },
      { id: "c", text: "heavy" },
      { id: "d", text: "loud" }
    ],
    answerId: "b",
    explanation: "Fragile means easily broken; delicate is close.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-a-q23",
    prompt: "Antonym of \u201cinclude\u201d?",
    options: [
      { id: "a", text: "contain" },
      { id: "b", text: "add" },
      { id: "c", text: "exclude" },
      { id: "d", text: "invite" }
    ],
    answerId: "c",
    explanation: "Include brings in; exclude keeps out.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-a-q24",
    prompt: "\u201cBenevolent\u201d most nearly means\u2026",
    options: [
      { id: "a", text: "cruel" },
      { id: "b", text: "sleepy" },
      { id: "c", text: "silent" },
      { id: "d", text: "kind and generous" }
    ],
    answerId: "d",
    explanation: "Benevolent describes goodwill and kindness.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g7-eng-words-b-q01",
    prompt: "Synonym of \u201cabandon\u201d?",
    options: [
      { id: "a", text: "leave behind" },
      { id: "b", text: "adopt" },
      { id: "c", text: "repair" },
      { id: "d", text: "celebrate" }
    ],
    answerId: "a",
    explanation: "Abandon means to leave completely.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-b-q02",
    prompt: "Antonym of \u201cvictory\u201d?",
    options: [
      { id: "a", text: "trophy" },
      { id: "b", text: "defeat" },
      { id: "c", text: "cheer" },
      { id: "d", text: "medal" }
    ],
    answerId: "b",
    explanation: "Victory\u2019s opposite is defeat.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-b-q03",
    prompt: "\u201cDiligent\u201d means\u2026",
    options: [
      { id: "a", text: "careless" },
      { id: "b", text: "late" },
      { id: "c", text: "hard-working" },
      { id: "d", text: "noisy" }
    ],
    answerId: "c",
    explanation: "Diligent people work carefully and steadily.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-b-q04",
    prompt: "Idiom: \u201chit the nail on the head\u201d means\u2026",
    options: [
      { id: "a", text: "do carpentry" },
      { id: "b", text: "hurt someone" },
      { id: "c", text: "miss the point" },
      { id: "d", text: "describe something exactly right" }
    ],
    answerId: "d",
    explanation: "It means to be exactly correct.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-b-q05",
    prompt: "Choose the odd one out (not a synonym of \u201chappy\u201d):",
    options: [
      { id: "a", text: "miserable" },
      { id: "b", text: "joyful" },
      { id: "c", text: "glad" },
      { id: "d", text: "cheerful" }
    ],
    answerId: "a",
    explanation: "Miserable is an antonym of happy.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-b-q06",
    prompt: "Prefix \u201cre-\u201d in \u201crewrite\u201d means\u2026",
    options: [
      { id: "a", text: "not" },
      { id: "b", text: "again" },
      { id: "c", text: "against" },
      { id: "d", text: "before" }
    ],
    answerId: "b",
    explanation: "Re- often means again.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-b-q07",
    prompt: "\u201cScarce\u201d in \u201cWater was scarce\u201d means\u2026",
    options: [
      { id: "a", text: "flooding" },
      { id: "b", text: "sweet" },
      { id: "c", text: "in short supply" },
      { id: "d", text: "frozen" }
    ],
    answerId: "c",
    explanation: "Scarce means not enough.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-b-q08",
    prompt: "Antonym of \u201copaque\u201d?",
    options: [
      { id: "a", text: "heavy" },
      { id: "b", text: "solid" },
      { id: "c", text: "dark only" },
      { id: "d", text: "transparent" }
    ],
    answerId: "d",
    explanation: "Transparent materials let light through.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-b-q09",
    prompt: "Choose correct collocation: make a ____.",
    options: [
      { id: "a", text: "decision" },
      { id: "b", text: "homework (as make)" },
      { id: "c", text: "photo always as make only" },
      { id: "d", text: "sleep as make" }
    ],
    answerId: "a",
    explanation: "English collocation: make a decision.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-b-q10",
    prompt: "Synonym of \u201cvast\u201d?",
    options: [
      { id: "a", text: "tiny" },
      { id: "b", text: "huge" },
      { id: "c", text: "narrow" },
      { id: "d", text: "brief" }
    ],
    answerId: "b",
    explanation: "Vast means very large.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-b-q11",
    prompt: "\u201cAmbiguous\u201d means\u2026",
    options: [
      { id: "a", text: "perfectly clear" },
      { id: "b", text: "musical" },
      { id: "c", text: "unclear; having more than one meaning" },
      { id: "d", text: "edible" }
    ],
    answerId: "c",
    explanation: "Ambiguous statements can be read in different ways.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-b-q12",
    prompt: "Antonym of \u201cascend\u201d?",
    options: [
      { id: "a", text: "climb" },
      { id: "b", text: "rise" },
      { id: "c", text: "lift" },
      { id: "d", text: "descend" }
    ],
    answerId: "d",
    explanation: "Ascend = go up; descend = go down.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-b-q13",
    prompt: "Root \u201ctherm\u201d relates to\u2026",
    options: [
      { id: "a", text: "heat" },
      { id: "b", text: "light only" },
      { id: "c", text: "water only" },
      { id: "d", text: "sound only" }
    ],
    answerId: "a",
    explanation: "Thermometer measures heat/temperature.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-b-q14",
    prompt: "Idiom: \u201ccost an arm and a leg\u201d means\u2026",
    options: [
      { id: "a", text: "need surgery" },
      { id: "b", text: "be very expensive" },
      { id: "c", text: "be free" },
      { id: "d", text: "be light" }
    ],
    answerId: "b",
    explanation: "It means something costs a lot of money (use \u20b9 thinking).",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-b-q15",
    prompt: "Synonym of \u201cbrief\u201d?",
    options: [
      { id: "a", text: "endless" },
      { id: "b", text: "heavy" },
      { id: "c", text: "short" },
      { id: "d", text: "loud" }
    ],
    answerId: "c",
    explanation: "Brief means short in time or length.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-b-q16",
    prompt: "Choose the correctly used word: The ____ was breathtaking.",
    options: [
      { id: "a", text: "scenary" },
      { id: "b", text: "scenarye" },
      { id: "c", text: "sceneries as uncountable misuse" },
      { id: "d", text: "scenery" }
    ],
    answerId: "d",
    explanation: "Scenery is the standard spelling/form here.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-b-q17",
    prompt: "Antonym of \u201cfiction\u201d?",
    options: [
      { id: "a", text: "non-fiction" },
      { id: "b", text: "novel" },
      { id: "c", text: "story" },
      { id: "d", text: "poem" }
    ],
    answerId: "a",
    explanation: "Fiction is invented; non-fiction is factual.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-b-q18",
    prompt: "\u201cOptimistic\u201d means\u2026",
    options: [
      { id: "a", text: "sure of disaster" },
      { id: "b", text: "hopeful about the future" },
      { id: "c", text: "silent" },
      { id: "d", text: "hungry" }
    ],
    answerId: "b",
    explanation: "Optimistic people expect good outcomes.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-b-q19",
    prompt: "Homophone pair: \u201callowed\u201d pairs with\u2026",
    options: [
      { id: "a", text: "aloudly" },
      { id: "b", text: "alloyed as the only pair" },
      { id: "c", text: "aloud" },
      { id: "d", text: "along" }
    ],
    answerId: "c",
    explanation: "Allowed and aloud sound the same.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-b-q20",
    prompt: "Synonym of \u201crapid\u201d?",
    options: [
      { id: "a", text: "slow" },
      { id: "b", text: "late" },
      { id: "c", text: "soft" },
      { id: "d", text: "quick" }
    ],
    answerId: "d",
    explanation: "Rapid means fast.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-b-q21",
    prompt: "Suffix \u201c-less\u201d in \u201cfearless\u201d means\u2026",
    options: [
      { id: "a", text: "without" },
      { id: "b", text: "full of" },
      { id: "c", text: "again" },
      { id: "d", text: "before" }
    ],
    answerId: "a",
    explanation: "Fearless = without fear.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-b-q22",
    prompt: "Antonym of \u201cpolite\u201d?",
    options: [
      { id: "a", text: "kind" },
      { id: "b", text: "rude" },
      { id: "c", text: "gentle" },
      { id: "d", text: "courteous" }
    ],
    answerId: "b",
    explanation: "Rude is the opposite of polite.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-b-q23",
    prompt: "\u201cEssential\u201d most nearly means\u2026",
    options: [
      { id: "a", text: "optional" },
      { id: "b", text: "decorative only" },
      { id: "c", text: "necessary" },
      { id: "d", text: "forgotten" }
    ],
    answerId: "c",
    explanation: "Essential means needed / cannot do without.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-b-q24",
    prompt: "Best word: She spoke with great ____.",
    options: [
      { id: "a", text: "clarify" },
      { id: "b", text: "clearly as noun" },
      { id: "c", text: "clearance only" },
      { id: "d", text: "clarity" }
    ],
    answerId: "d",
    explanation: "Clarity is the noun that fits after \u201cwith great.\u201d",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83d\udcda",
    title: "Word Power",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "word-cards",
    speak: "Words have twins, opposites, and roots that unlock meaning.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "word-cards",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Synonyms", reveal: "Nearly the same meaning", emoji: "\ud83d\ude0a" },
      { label: "Antonyms", reveal: "Opposites", emoji: "\ud83d\udd04" },
      { label: "Idioms", reveal: "Phrases that are not literal", emoji: "\ud83d\udcac" },
      { label: "Roots/affixes", reveal: "Build meanings from parts", emoji: "\ud83e\udde9" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Best synonym of \"brave\"?",
    options: [
        { id: "a", text: "timid" },
        { id: "b", text: "silent" },
        { id: "c", text: "courageous" },
        { id: "d", text: "narrow" }
    ],
    answerId: "c",
    why: "Courageous \u2248 brave.",
    visual: "word-cards",
    speak: "Best synonym of \"brave\"?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Synonym \u2248 similar", "Antonym = opposite", "Context decides meaning", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g7EnglishWords: ChapterDef = {
  id: "word-power",
  title: "Word Power",
  emoji: "\ud83d\udcda",
  blurb: "Synonyms, antonyms, idioms and roots",
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
  paperTopics: ["vocabulary", "grammar"],
};

export const g7EnglishWordsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
