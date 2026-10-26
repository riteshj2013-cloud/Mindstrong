import type { ChapterDef, PrepQuestion } from "../types";

/** Word Power - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g7-eng-words-a-q01",
    prompt: "Synonym of “wealthy”?",
    options: [
      { id: "a", text: "rich" },
      { id: "b", text: "poor" },
      { id: "c", text: "famous" },
      { id: "d", text: "busy" }
    ],
    answerId: "a",
    explanation: "Wealthy means having a lot of money, which is rich. 'famous' means well known, which a wealthy person need not be.",
    hints: ["A wealthy family owns big houses and many cars.", "Find the word that means having lots of money, like wealthy."]
  },
  {
    id: "g7-eng-words-a-q02",
    prompt: "Antonym of “vacant”?",
    options: [
      { id: "a", text: "empty" },
      { id: "b", text: "occupied" },
      { id: "c", text: "spare" },
      { id: "d", text: "free" }
    ],
    answerId: "b",
    explanation: "A vacant seat is empty; occupied means someone is using it. 'free' is close to vacant, not its opposite.",
    hints: ["A vacant seat on the bus has nobody in it.", "Find the word for a seat someone is sitting in, the opposite of vacant."]
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
    prompt: "Synonym of “abundant”?",
    options: [
      { id: "a", text: "scarce" },
      { id: "b", text: "more than enough" },
      { id: "c", text: "costly" },
      { id: "d", text: "empty" }
    ],
    answerId: "b",
    explanation: "Abundant means present in large amounts, more than enough. 'scarce' is the opposite: too little.",
    hints: ["After good rains, the harvest was abundant and every granary overflowed.", "Find the meaning that tells of a large supply, like abundant."]
  },
  {
    id: "g7-eng-words-a-q07",
    prompt: "Antonym of “import”?",
    options: [
      { id: "a", text: "bring in" },
      { id: "b", text: "purchase" },
      { id: "c", text: "export" },
      { id: "d", text: "transport" }
    ],
    answerId: "c",
    explanation: "To import is to bring goods into a country; to export is to send them out. 'bring in' means the same as import.",
    hints: ["India imports oil from other countries.", "Bring in means the same as import; think of goods leaving the country."]
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
    prompt: "Prefix in “impossible” means…",
    options: [
      { id: "a", text: "not" },
      { id: "b", text: "again" },
      { id: "c", text: "before" },
      { id: "d", text: "very" }
    ],
    answerId: "a",
    explanation: "im- means not: impossible means not possible. 'before' is the meaning of pre-, as in preview.",
    hints: ["Split \"impossible\" into im- + possible.", "Impolite and impatient use the same prefix; what does it do to each word?"]
  },
  {
    id: "g7-eng-words-a-q10",
    prompt: "Suffix in “childhood” suggests…",
    options: [
      { id: "a", text: "without" },
      { id: "b", text: "state or time of being" },
      { id: "c", text: "again" },
      { id: "d", text: "against" }
    ],
    answerId: "b",
    explanation: "-hood means a state or time of being: childhood is the time of being a child. 'without' is the meaning of -less.",
    hints: ["Compare childhood, brotherhood and neighbourhood.", "Childhood is a part of life; what does -hood turn child into?"]
  },
  {
    id: "g7-eng-words-a-q11",
    prompt: "Synonym of “gather”?",
    options: [
      { id: "a", text: "scatter" },
      { id: "b", text: "lose" },
      { id: "c", text: "collect" },
      { id: "d", text: "break" }
    ],
    answerId: "c",
    explanation: "Gather means to bring things together, the same as collect. 'scatter' is the opposite.",
    hints: ["Children gather shells on the beach into a bucket.", "Scatter means the opposite: spreading things apart."]
  },
  {
    id: "g7-eng-words-a-q12",
    prompt: "Antonym of “visible”?",
    options: [
      { id: "a", text: "clear" },
      { id: "b", text: "bright" },
      { id: "c", text: "seen" },
      { id: "d", text: "invisible" }
    ],
    answerId: "d",
    explanation: "Visible means able to be seen; invisible means unable to be seen. 'seen' leans the same way as visible.",
    hints: ["Stars are visible on a clear night.", "Find the word for something you cannot see, like air, the opposite of visible."]
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
    prompt: "Antonym of “expensive”?",
    options: [
      { id: "a", text: "cheap" },
      { id: "b", text: "costly" },
      { id: "c", text: "pricey" },
      { id: "d", text: "rare" }
    ],
    answerId: "a",
    explanation: "Expensive means costing a lot; cheap means costing little. 'costly' means the same as expensive.",
    hints: ["An expensive phone costs a lot of money.", "Find the word for something costing very little, the opposite of expensive."]
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
    prompt: "Choose the best word: The team’s ____ was high after the win.",
    options: [
      { id: "a", text: "moral" },
      { id: "b", text: "mortal" },
      { id: "c", text: "metal" },
      { id: "d", text: "morale" }
    ],
    answerId: "d",
    explanation: "Morale means team spirit or confidence. 'moral' (without the final e) is the lesson of a story.",
    hints: ["The blank names the team's spirit and confidence.", "One look-alike word names a story's lesson; that is not what the team feels."]
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
    prompt: "Antonym of “accept”?",
    options: [
      { id: "a", text: "agree" },
      { id: "b", text: "take" },
      { id: "c", text: "reject" },
      { id: "d", text: "welcome" }
    ],
    answerId: "c",
    explanation: "Accept means to take or agree to something; reject means to refuse it. 'take' is close to accept, not its opposite.",
    hints: ["You accept a gift when you take it happily.", "Find the word for saying no to a gift, the opposite of accept."]
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
    prompt: "Antonym of “maximum”?",
    options: [
      { id: "a", text: "most" },
      { id: "b", text: "minimum" },
      { id: "c", text: "average" },
      { id: "d", text: "plenty" }
    ],
    answerId: "b",
    explanation: "Maximum is the greatest amount; minimum is the least. 'most' is close to maximum, not its opposite.",
    hints: ["The maximum speed is the highest speed allowed.", "Find the word for the lowest amount allowed, the opposite of maximum."]
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
    prompt: "Choose the odd one out (not a synonym of \u201cbrave\u201d):",
    options: [
      { id: "a", text: "timid" },
      { id: "b", text: "courageous" },
      { id: "c", text: "fearless" },
      { id: "d", text: "bold" }
    ],
    answerId: "a",
    explanation: "Timid means shy and easily frightened, the opposite of brave. Courageous, fearless and bold all mean brave.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g7-eng-words-b-q06",
    prompt: "Prefix \u201cmis-\u201d in \u201cmisunderstand\u201d means\u2026",
    options: [
      { id: "a", text: "again" },
      { id: "b", text: "wrongly" },
      { id: "c", text: "before" },
      { id: "d", text: "not" }
    ],
    answerId: "b",
    explanation: "Mis- means wrongly or badly: to misunderstand is to understand wrongly. \u201cNot\u201d is tempting, but that is the meaning of un- or in-; misunderstanding still involves understanding, just incorrectly.",
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
    prompt: "Synonym of “swift”?",
    options: [
      { id: "a", text: "sluggish" },
      { id: "b", text: "silent" },
      { id: "c", text: "steady" },
      { id: "d", text: "speedy" }
    ],
    answerId: "d",
    explanation: "Swift means moving very fast, like speedy. 'sluggish' is the opposite.",
    hints: ["A swift runner reaches the finish line first.", "Find another word for swift that also means very fast."]
  },
  {
    id: "g7-eng-words-b-q21",
    prompt: "Suffix “-able” in “readable” means…",
    options: [
      { id: "a", text: "can be done" },
      { id: "b", text: "full of" },
      { id: "c", text: "again" },
      { id: "d", text: "before" }
    ],
    answerId: "a",
    explanation: "-able means can be: readable means it can be read. 'full of' is the meaning of -ful.",
    hints: ["Compare readable, washable and breakable.", "A washable shirt is one you are able to wash; what does -able add?"]
  },
  {
    id: "g7-eng-words-b-q22",
    prompt: "Antonym of “voluntary”?",
    options: [
      { id: "a", text: "willing" },
      { id: "b", text: "compulsory" },
      { id: "c", text: "optional" },
      { id: "d", text: "free" }
    ],
    answerId: "b",
    explanation: "Voluntary means done by choice; compulsory means required by a rule. 'optional' means nearly the same as voluntary.",
    hints: ["Joining the weekend club is voluntary; nobody is forced.", "Find the word for something a rule forces everyone to do, the opposite of voluntary."]
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
      { id: "b", text: "clearly" },
      { id: "c", text: "clearance" },
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
