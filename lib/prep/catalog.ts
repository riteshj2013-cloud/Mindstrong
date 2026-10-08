import type { ChapterDef, Grade, GradeSubjectPack, PrepSubject } from "./types";
import { g3SciencePlants } from "./content/g3-science-plants";
import { g3ScienceAnimals } from "./content/g3-science-animals";
import { g3ScienceSenses } from "./content/g3-science-senses";
import { g3MathsNumbers } from "./content/g3-maths-numbers";
import { g3MathsAddSubtract } from "./content/g3-maths-add-subtract";
import { g3EnglishSynonyms } from "./content/g3-english-synonyms";
import { g3EnglishAntonyms } from "./content/g3-english-antonyms";
import { g4MathsLargeNumbers } from "./content/g4-maths-large-numbers";
import { g4MathsMultiplyDivide } from "./content/g4-maths-multiply-divide";
import { g4MathsFractions } from "./content/g4-maths-fractions";
import { g4EnglishReading } from "./content/g4-english-reading";
import { g4EnglishGrammar } from "./content/g4-english-grammar";
import { g4EnglishWords } from "./content/g4-english-words";
import { g4ScienceFood } from "./content/g4-science-food";
import { g4ScienceMatter } from "./content/g4-science-matter";
import { g4ScienceWater } from "./content/g4-science-water";
import { g5MathsLargeNumbers } from "./content/g5-maths-large-numbers";
import { g5MathsAngles } from "./content/g5-maths-angles";
import { g5MathsFractions } from "./content/g5-maths-fractions";
import { g5EnglishDetective } from "./content/g5-english-detective";
import { g5EnglishGrammar } from "./content/g5-english-grammar";
import { g5EnglishWords } from "./content/g5-english-words";
import { g5SciencePlants } from "./content/g5-science-plants";
import { g5ScienceBody } from "./content/g5-science-body";
import { g5ScienceSpace } from "./content/g5-science-space";
import { g8ScienceCells } from "./content/g8-science-cells";
import { g8ScienceForce } from "./content/g8-science-force";
import { g8ScienceMetals } from "./content/g8-science-metals";
import { g8MathsRationals } from "./content/g8-maths-rationals";
import { g8MathsLinear } from "./content/g8-maths-linear";
import { g8MathsComparing } from "./content/g8-maths-comparing";
import { g8EnglishLiterature } from "./content/g8-english-literature";
import { g8EnglishGrammar } from "./content/g8-english-grammar";
import { g8EnglishWords } from "./content/g8-english-words";

function sets(topics: [string, string][]): ChapterDef["sets"] {
  return topics.map(([id, topic], i) => ({
    id,
    title: `Set ${i + 1}`,
    questionCount: 22,
    topic,
  }));
}

/** Shared interactive lesson builders — optional, AV-friendly. */
function mathsPlaceValueLesson(): ChapterDef["lesson"] {
  return [
    {
      id: "h",
      type: "hook",
      emoji: "🧱",
      title: "Numbers are bundles",
      body: ["Tap Next and we’ll build a number with hundreds, tens and ones.", "You can skip this lesson anytime and jump to a practice set."],
      cta: "Show me!",
      visual: "place-value",
      speak: "Numbers are bundles. We’ll build a number with hundreds, tens and ones.",
    },
    {
      id: "r1",
      type: "reveal",
      title: "Tap each place",
      lead: "Tap a card to peek at what that digit means.",
      visual: "place-value",
      speak: "Tap each place value card to reveal what it means.",
      cards: [
        { label: "Hundreds", reveal: "Each hundred = 100 ones", emoji: "💯" },
        { label: "Tens", reveal: "Each ten = 10 ones", emoji: "🔟" },
        { label: "Ones", reveal: "Loose ones — no bundle yet", emoji: "1️⃣" },
      ],
    },
    {
      id: "d1",
      type: "demo",
      title: "Build 247",
      visual: "place-value",
      speak: "Let's build two hundred forty seven step by step.",
      steps: [
        "Start empty.",
        "Add 2 hundreds → 200",
        "Add 4 tens → 240",
        "Add 7 ones → 247",
      ],
      punchline: "2 hundreds + 4 tens + 7 ones = 247",
    },
    {
      id: "t1",
      type: "try",
      title: "Your turn",
      prompt: "3 hundreds + 1 ten + 5 ones = ?",
      options: [
        { id: "a", text: "315" },
        { id: "b", text: "351" },
        { id: "c", text: "135" },
        { id: "d", text: "3015" },
      ],
      answerId: "a",
      why: "Hundreds–tens–ones order: 3, then 1, then 5 → 315.",
      visual: "place-value",
      speak: "Three hundreds plus one ten plus five ones. What number?",
    },
    {
      id: "c1",
      type: "check",
      title: "Quick check",
      visual: "number-line",
      speak: "What is the value of the digit 4 in 442?",
      question: {
        id: "q",
        prompt: "Value of digit 4 in the tens place of 442?",
        options: [
          { id: "a", text: "4" },
          { id: "b", text: "40" },
          { id: "c", text: "400" },
          { id: "d", text: "44" },
        ],
        answerId: "b",
        explanation: "That 4 sits in tens → 40. (The other 4 is hundreds → 400.)",
        hints: ["Which place is it in?", "Tens → ×10"],
      },
    },
    {
      id: "w",
      type: "wrap",
      emoji: "⭐",
      title: "You got the idea!",
      bullets: ["Places go: hundreds | tens | ones", "Digit value = digit × place", "Ready for a practice set whenever you are"],
      cta: "Back to chapter",
      speak: "You got the idea! Places go hundreds, tens, ones.",
    },
  ];
}

function mathsFractionsLesson(): ChapterDef["lesson"] {
  return [
    {
      id: "h",
      type: "hook",
      emoji: "🍕",
      title: "Fair shares",
      body: ["Fractions name equal parts of a whole.", "We’ll tap through a pizza story — then try a tiny question."],
      cta: "Let’s share!",
      visual: "fraction-bar",
      speak: "Fractions name equal parts of a whole.",
    },
    {
      id: "r1",
      type: "reveal",
      title: "Numerator & denominator",
      lead: "Tap to reveal each job.",
      visual: "fraction-bar",
      speak: "Tap to reveal what numerator and denominator do.",
      cards: [
        { label: "Denominator", reveal: "How many equal parts the whole is cut into", emoji: "➗" },
        { label: "Numerator", reveal: "How many of those parts you have", emoji: "✨" },
      ],
    },
    {
      id: "d1",
      type: "demo",
      title: "¾ of a bar",
      visual: "fraction-bar",
      steps: ["Cut the bar into 4 equal pieces", "Shade 3 pieces", "That’s three-fourths"],
      punchline: "¾ means 3 out of 4 equal parts",
      speak: "Three fourths means three out of four equal parts.",
    },
    {
      id: "t1",
      type: "try",
      title: "Try this",
      prompt: "What is ½ of 10?",
      options: [
        { id: "a", text: "2" },
        { id: "b", text: "5" },
        { id: "c", text: "8" },
        { id: "d", text: "10" },
      ],
      answerId: "b",
      why: "Half means ÷2 → 10÷2=5.",
      visual: "fraction-bar",
      speak: "What is one half of ten?",
    },
    {
      id: "w",
      type: "wrap",
      emoji: "🎯",
      title: "Fraction flex",
      bullets: ["Bottom = equal parts", "Top = parts you count", "Skip ahead to sets anytime"],
      speak: "Bottom is equal parts. Top is parts you count.",
    },
  ];
}

function mathsAlgebraLesson(): ChapterDef["lesson"] {
  return [
    {
      id: "h",
      type: "hook",
      emoji: "𝑥",
      title: "Mystery boxes",
      body: ["A letter stands for a number we haven’t pinned yet.", "Keep both sides of a balance equal."],
      visual: "balance",
      cta: "Balance it!",
      speak: "A letter stands for a number we haven't pinned yet.",
    },
    {
      id: "d1",
      type: "demo",
      title: "Solve x + 3 = 10",
      visual: "balance",
      steps: ["Both sides equal 10’s worth", "Undo +3 by subtracting 3", "x = 7"],
      punchline: "Do the same to both sides — the balance stays true",
      speak: "Solve x plus 3 equals 10. Subtract 3 from both sides. x equals 7.",
    },
    {
      id: "t1",
      type: "try",
      title: "Your move",
      prompt: "2x = 14 → x = ?",
      options: [
        { id: "a", text: "7" },
        { id: "b", text: "12" },
        { id: "c", text: "28" },
        { id: "d", text: "16" },
      ],
      answerId: "a",
      why: "Divide both sides by 2 → x=7.",
      visual: "balance",
      speak: "Two x equals 14. What is x?",
    },
    {
      id: "w",
      type: "wrap",
      emoji: "⚖️",
      title: "Balance boss",
      bullets: ["Inverse ops undo", "Same change on both sides", "Practice sets are ready"],
      speak: "Inverse operations undo. Same change on both sides.",
    },
  ];
}

function englishSynLesson(): ChapterDef["lesson"] {
  return [
    {
      id: "h",
      type: "hook",
      emoji: "🗣️",
      title: "Word twins",
      body: ["Synonyms are words with nearly the same meaning.", "Tap cards, then try a match."],
      visual: "word-cards",
      cta: "Show twins!",
      speak: "Synonyms are words with nearly the same meaning.",
    },
    {
      id: "r1",
      type: "reveal",
      title: "Tap to match",
      lead: "Reveal the twin for each word.",
      visual: "word-cards",
      cards: [
        { label: "happy", reveal: "joyful / glad", emoji: "😊" },
        { label: "big", reveal: "large / huge", emoji: "📐" },
        { label: "fast", reveal: "quick / speedy", emoji: "⚡" },
      ],
      speak: "Tap each word to reveal a synonym.",
    },
    {
      id: "t1",
      type: "try",
      title: "Pick the twin",
      prompt: "Synonym of “brave”?",
      options: [
        { id: "a", text: "courageous" },
        { id: "b", text: "timid" },
        { id: "c", text: "silent" },
        { id: "d", text: "narrow" },
      ],
      answerId: "a",
      why: "Courageous ≈ brave. Timid is closer to an antonym.",
      visual: "word-cards",
      speak: "Which word is a synonym of brave?",
    },
    {
      id: "w",
      type: "wrap",
      emoji: "📚",
      title: "Word power",
      bullets: ["Synonym ≈ similar", "Antonym = opposite", "Jump to a set when ready"],
      speak: "Synonym means similar. Antonym means opposite.",
    },
  ];
}

function englishGrammarLesson(): ChapterDef["lesson"] {
  return [
    {
      id: "h",
      type: "hook",
      emoji: "✏️",
      title: "Sentence glue",
      body: ["Grammar helps sentences stick together clearly.", "We’ll fix a sentence step by step."],
      visual: "sentence",
      cta: "Fix it!",
      speak: "Grammar helps sentences stick together clearly.",
    },
    {
      id: "d1",
      type: "demo",
      title: "Subject–verb agreement",
      visual: "sentence",
      steps: ["Find the subject: She", "She = one person → singular", "Use goes, not go"],
      punchline: "She goes to school.",
      speak: "She is singular, so we say she goes.",
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
      why: "They is plural → are.",
      visual: "sentence",
      speak: "They blank playing outside. Which verb?",
    },
    {
      id: "w",
      type: "wrap",
      emoji: "✅",
      title: "Sentence sorted",
      bullets: ["Match subject and verb", "Read the whole line", "Sets are unlocked — lesson optional"],
      speak: "Match the subject and the verb.",
    },
  ];
}

function englishCompLesson(): ChapterDef["lesson"] {
  return [
    {
      id: "h",
      type: "hook",
      emoji: "🔎",
      title: "Detective reading",
      body: ["Answers hide in the passage — not in guesses.", "Hunt the key sentence."],
      visual: "sentence",
      cta: "Hunt!",
      speak: "Answers hide in the passage, not in guesses.",
    },
    {
      id: "d1",
      type: "demo",
      title: "Find the evidence",
      visual: "sentence",
      steps: [
        "Read the question first",
        "Scan for matching words",
        "Choose only what the text supports",
      ],
      punchline: "Evidence > guess",
      speak: "Read the question first, then scan for evidence.",
    },
    {
      id: "t1",
      type: "try",
      title: "Mini passage",
      prompt: "“Leela watered the plants because the soil felt dry.” Why did Leela water them?",
      options: [
        { id: "a", text: "The soil felt dry" },
        { id: "b", text: "It was raining" },
        { id: "c", text: "She was bored" },
        { id: "d", text: "The plants were fake" },
      ],
      answerId: "a",
      why: "The passage says because the soil felt dry.",
      speak: "Why did Leela water the plants?",
    },
    {
      id: "w",
      type: "wrap",
      emoji: "🕵️",
      title: "Clue finder",
      bullets: ["Question → scan → evidence", "Don’t invent extras", "Practice sets ready"],
      speak: "Question, scan, evidence.",
    },
  ];
}

function scienceLivingLesson(): ChapterDef["lesson"] {
  return [
    {
      id: "h",
      type: "hook",
      emoji: "🌱",
      title: "Alive or not?",
      body: ["Living things grow, need energy, and respond.", "Tap the plant story."],
      visual: "plant",
      cta: "Grow!",
      speak: "Living things grow, need energy, and respond.",
    },
    {
      id: "r1",
      type: "reveal",
      title: "Plant parts",
      lead: "Tap each part.",
      visual: "plant",
      cards: [
        { label: "Roots", reveal: "Take up water & minerals", emoji: "🪴" },
        { label: "Leaves", reveal: "Catch sunlight to make food", emoji: "🍃" },
        { label: "Stem", reveal: "Carries water up", emoji: "🎋" },
      ],
      speak: "Tap each plant part to learn its job.",
    },
    {
      id: "t1",
      type: "try",
      title: "Quick think",
      prompt: "Which is living?",
      options: [
        { id: "a", text: "Butterfly" },
        { id: "b", text: "Pencil" },
        { id: "c", text: "Glass" },
        { id: "d", text: "Stone" },
      ],
      answerId: "a",
      why: "A butterfly grows, moves, and needs energy.",
      visual: "plant",
      speak: "Which of these is living?",
    },
    {
      id: "w",
      type: "wrap",
      emoji: "🌍",
      title: "Life detective",
      bullets: ["Living vs non-living tests", "Plants make food with light", "Sets unlocked without this lesson"],
      speak: "Living versus non-living. Plants make food with light.",
    },
  ];
}

function scienceWaterLesson(): ChapterDef["lesson"] {
  return [
    {
      id: "h",
      type: "hook",
      emoji: "💧",
      title: "Water on the move",
      body: ["Water travels: evaporate → condense → fall.", "Tap through the cycle."],
      visual: "water-cycle",
      cta: "Cycle!",
      speak: "Water travels: evaporate, condense, fall.",
    },
    {
      id: "d1",
      type: "demo",
      title: "The cycle",
      visual: "water-cycle",
      steps: ["Sun heats water → evaporates", "Vapour cools → clouds", "Droplets fall as rain"],
      punchline: "Same water, new place",
      speak: "Sun heats water. Vapour cools into clouds. Rain falls.",
    },
    {
      id: "t1",
      type: "try",
      title: "Name the step",
      prompt: "Water turning into vapour is…",
      options: [
        { id: "a", text: "Evaporation" },
        { id: "b", text: "Freezing" },
        { id: "c", text: "Melting" },
        { id: "d", text: "Sinking" },
      ],
      answerId: "a",
      why: "Liquid → gas = evaporation.",
      visual: "water-cycle",
      speak: "Water turning into vapour is called what?",
    },
    {
      id: "w",
      type: "wrap",
      emoji: "☁️",
      title: "Cycle star",
      bullets: ["Heat lifts water", "Cooling makes clouds", "Practice whenever you’re ready"],
      speak: "Heat lifts water. Cooling makes clouds.",
    },
  ];
}

function scienceForceLesson(): ChapterDef["lesson"] {
  return [
    {
      id: "h",
      type: "hook",
      emoji: "🧲",
      title: "Pushes & pulls",
      body: ["A force can start, stop, or change motion.", "Magnets pull some metals without touching."],
      visual: "magnet",
      cta: "Feel the force!",
      speak: "A force can start, stop, or change motion.",
    },
    {
      id: "r1",
      type: "reveal",
      title: "Force facts",
      lead: "Tap to reveal.",
      visual: "magnet",
      cards: [
        { label: "Friction", reveal: "Slows sliding objects", emoji: "🛑" },
        { label: "Gravity", reveal: "Pulls us toward Earth", emoji: "🌍" },
        { label: "Magnetism", reveal: "Attracts iron & steel", emoji: "🧲" },
      ],
      speak: "Tap to reveal friction, gravity, and magnetism.",
    },
    {
      id: "t1",
      type: "try",
      title: "Which force?",
      prompt: "A ball rolling on grass slows because of…",
      options: [
        { id: "a", text: "Friction" },
        { id: "b", text: "Music" },
        { id: "c", text: "Colour" },
        { id: "d", text: "Echo" },
      ],
      answerId: "a",
      why: "Friction between ball and grass opposes motion.",
      visual: "magnet",
      speak: "A ball rolling on grass slows because of what?",
    },
    {
      id: "w",
      type: "wrap",
      emoji: "⚡",
      title: "Force ready",
      bullets: ["Force = push or pull", "Friction slows", "Jump to sets anytime"],
      speak: "Force is a push or pull. Friction slows.",
    },
  ];
}

function ch(
  id: string,
  title: string,
  emoji: string,
  blurb: string,
  lesson: ChapterDef["lesson"],
  topics: [string, string, string],
  paperTopics: string[],
): ChapterDef {
  return {
    id,
    title,
    emoji,
    blurb,
    lesson,
    sets: sets([
      ["set-1", topics[0]],
      ["set-2", topics[1]],
      ["set-3", topics[2]],
    ]),
    paperTopics,
  };
}

const MATHS: Record<number, ChapterDef[]> = {
  3: [
    g3MathsNumbers,
    g3MathsAddSubtract,
    ch("multiply", "Multiply Basics", "✖️", "Arrays & times facts", mathsPlaceValueLesson(), ["multiply-basics", "multiply-basics", "add-sub"], ["multiply-basics"]),
  ],
  4: [
    g4MathsLargeNumbers,
    g4MathsMultiplyDivide,
    g4MathsFractions,
  ],
  5: [
    g5MathsLargeNumbers,
    g5MathsAngles,
    g5MathsFractions,
  ],
  8: [
    g8MathsRationals,
    g8MathsLinear,
    g8MathsComparing,
  ],
};

const ENGLISH: Record<number, ChapterDef[]> = {
  3: [
    g3EnglishSynonyms,
    g3EnglishAntonyms,
    ch("grammar", "Grammar Basics", "✏️", "Agree & fill-ins", englishGrammarLesson(), ["grammar", "grammar", "vocabulary"], ["grammar"]),
  ],
  4: [
    g4EnglishReading,
    g4EnglishGrammar,
    g4EnglishWords,
  ],
  5: [
    g5EnglishDetective,
    g5EnglishGrammar,
    g5EnglishWords,
  ],
  8: [
    g8EnglishLiterature,
    g8EnglishGrammar,
    g8EnglishWords,
  ],
};

const SCIENCE: Record<number, ChapterDef[]> = {
  3: [
    g3SciencePlants,
    g3ScienceAnimals,
    g3ScienceSenses,
  ],
  4: [
    g4ScienceFood,
    g4ScienceMatter,
    g4ScienceWater,
  ],
  5: [
    g5SciencePlants,
    g5ScienceBody,
    g5ScienceSpace,
  ],
  8: [
    g8ScienceCells,
    g8ScienceForce,
    g8ScienceMetals,
  ],
};

function pack(subject: PrepSubject, grade: Grade, chapters: ChapterDef[] | undefined): GradeSubjectPack {
  const ready = !!chapters && chapters.length > 0;
  const chs = chapters ?? [];
  const paperTopics = chs.flatMap((c) => c.paperTopics);
  return {
    subject,
    grade,
    ready,
    chapters: chs,
    paperTitle: `Olympiad-style ${subject === "maths" ? "Maths" : subject === "english" ? "English" : "Science"} mock · Grade ${grade}`,
    paperCount: 30,
  };
}

export function getPrepPack(subject: PrepSubject, grade: Grade): GradeSubjectPack {
  const table = subject === "maths" ? MATHS : subject === "english" ? ENGLISH : SCIENCE;
  return pack(subject, grade, table[grade]);
}

export function listReadyGrades(subject: PrepSubject): Grade[] {
  const table = subject === "maths" ? MATHS : subject === "english" ? ENGLISH : SCIENCE;
  return Object.keys(table).map(Number) as Grade[];
}
