import type { ChapterDef, PrepQuestion } from "../types";

/** Air & Water - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g2-sci-airwater-a-q01",
    prompt: "We need ___ to breathe.",
    options: [
      { id: "a", text: "air" },
      { id: "b", text: "stones" },
      { id: "c", text: "plastic" },
      { id: "d", text: "noise" }
    ],
    answerId: "a",
    explanation: "We breathe air.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-a-q02",
    prompt: "Moving air is called\u2026",
    options: [
      { id: "a", text: "metal" },
      { id: "b", text: "wind" },
      { id: "c", text: "soil" },
      { id: "d", text: "fire" }
    ],
    answerId: "b",
    explanation: "Moving air is wind.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-a-q03",
    prompt: "Water can be liquid, solid (ice) or\u2026",
    options: [
      { id: "a", text: "plastic" },
      { id: "b", text: "wood" },
      { id: "c", text: "gas or vapour" },
      { id: "d", text: "metal" }
    ],
    answerId: "c",
    explanation: "Water can become vapour (gas).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-a-q04",
    prompt: "Ice is water in the ___ form.",
    options: [
      { id: "a", text: "liquid only" },
      { id: "b", text: "gas only" },
      { id: "c", text: "plastic" },
      { id: "d", text: "solid" }
    ],
    answerId: "d",
    explanation: "Ice is solid water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-a-q05",
    prompt: "We should drink ___ water.",
    options: [
      { id: "a", text: "clean" },
      { id: "b", text: "dirty" },
      { id: "c", text: "salty sea only" },
      { id: "d", text: "muddy" }
    ],
    answerId: "a",
    explanation: "Drink clean water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-a-q06",
    prompt: "Rain comes from\u2026",
    options: [
      { id: "a", text: "shoes" },
      { id: "b", text: "clouds" },
      { id: "c", text: "stones" },
      { id: "d", text: "plastic bags" }
    ],
    answerId: "b",
    explanation: "Rain falls from clouds.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-a-q07",
    prompt: "Boiling water can turn into\u2026",
    options: [
      { id: "a", text: "glass" },
      { id: "b", text: "iron" },
      { id: "c", text: "steam or vapour" },
      { id: "d", text: "sand" }
    ],
    answerId: "c",
    explanation: "Boiling makes steam.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-a-q08",
    prompt: "Air is all around us but we usually\u2026",
    options: [
      { id: "a", text: "can eat it like bread" },
      { id: "b", text: "paint it only" },
      { id: "c", text: "hold it easily always" },
      { id: "d", text: "cannot see it" }
    ],
    answerId: "d",
    explanation: "Air is invisible.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-a-q09",
    prompt: "Saving water means\u2026",
    options: [
      { id: "a", text: "not wasting it" },
      { id: "b", text: "leaving taps open" },
      { id: "c", text: "polluting rivers" },
      { id: "d", text: "throwing bottles in drains" }
    ],
    answerId: "a",
    explanation: "Saving water means not wasting it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-a-q10",
    prompt: "A breeze is\u2026",
    options: [
      { id: "a", text: "a fruit" },
      { id: "b", text: "gentle wind" },
      { id: "c", text: "a rock" },
      { id: "d", text: "a fire" }
    ],
    answerId: "b",
    explanation: "A breeze is a gentle wind.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-a-q11",
    prompt: "Fish need ___ in water to live.",
    options: [
      { id: "a", text: "sand only" },
      { id: "b", text: "fire" },
      { id: "c", text: "oxygen in the water" },
      { id: "d", text: "plastic" }
    ],
    answerId: "c",
    explanation: "Fish need oxygen in water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-a-q12",
    prompt: "Puddles dry up because water\u2026",
    options: [
      { id: "a", text: "turns to stone" },
      { id: "b", text: "freezes always" },
      { id: "c", text: "becomes metal" },
      { id: "d", text: "evaporates" }
    ],
    answerId: "d",
    explanation: "Water evaporates into air.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-a-q13",
    prompt: "Which is a use of water?",
    options: [
      { id: "a", text: "drinking and cleaning" },
      { id: "b", text: "only flying planes" },
      { id: "c", text: "only making noise" },
      { id: "d", text: "only making plastic" }
    ],
    answerId: "a",
    explanation: "We drink and clean with water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-a-q14",
    prompt: "Smoke and dust can make air\u2026",
    options: [
      { id: "a", text: "silent forever" },
      { id: "b", text: "dirty or polluted" },
      { id: "c", text: "sweeter always" },
      { id: "d", text: "made of gold" }
    ],
    answerId: "b",
    explanation: "Smoke and dust pollute air.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-a-q15",
    prompt: "Clouds are made of tiny\u2026",
    options: [
      { id: "a", text: "plastic bits only" },
      { id: "b", text: "metal sheets" },
      { id: "c", text: "water droplets" },
      { id: "d", text: "stones" }
    ],
    answerId: "c",
    explanation: "Clouds hold tiny water droplets.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-a-q16",
    prompt: "Cover food and water to keep them\u2026",
    options: [
      { id: "a", text: "dirty" },
      { id: "b", text: "hot always" },
      { id: "c", text: "salty always" },
      { id: "d", text: "clean and safe" }
    ],
    answerId: "d",
    explanation: "Covering keeps food and water safe.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g2-sci-airwater-b-q01",
    prompt: "Wind can help\u2026",
    options: [
      { id: "a", text: "dry clothes and fly kites" },
      { id: "b", text: "grow rocks overnight" },
      { id: "c", text: "turn air into gold" },
      { id: "d", text: "stop the sun" }
    ],
    answerId: "a",
    explanation: "Wind dries clothes and flies kites.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-b-q02",
    prompt: "Steam is water as a\u2026",
    options: [
      { id: "a", text: "metal" },
      { id: "b", text: "gas" },
      { id: "c", text: "solid only" },
      { id: "d", text: "plastic" }
    ],
    answerId: "b",
    explanation: "Steam is water vapour (gas).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-b-q03",
    prompt: "We get much of our drinking water from\u2026",
    options: [
      { id: "a", text: "only from plastic smoke" },
      { id: "b", text: "only from sand" },
      { id: "c", text: "rivers and taps after cleaning" },
      { id: "d", text: "only from fire" }
    ],
    answerId: "c",
    explanation: "Water often comes from rivers, cleaned for taps.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-b-q04",
    prompt: "Ice melts into\u2026",
    options: [
      { id: "a", text: "smoke plastic" },
      { id: "b", text: "sand" },
      { id: "c", text: "wood" },
      { id: "d", text: "liquid water" }
    ],
    answerId: "d",
    explanation: "Ice melts to liquid water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-b-q05",
    prompt: "A strong wind storm can be\u2026",
    options: [
      { id: "a", text: "dangerous" },
      { id: "b", text: "always safe under trees" },
      { id: "c", text: "made of candy" },
      { id: "d", text: "silent always" }
    ],
    answerId: "a",
    explanation: "Storms can be dangerous \u2014 stay safe.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-b-q06",
    prompt: "Plants also need ___ from air.",
    options: [
      { id: "a", text: "screens" },
      { id: "b", text: "gases from air" },
      { id: "c", text: "plastic bags" },
      { id: "d", text: "metal sheets" }
    ],
    answerId: "b",
    explanation: "Plants use air gases too.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-b-q07",
    prompt: "Closing the tap while brushing\u2026",
    options: [
      { id: "a", text: "makes more rain instantly" },
      { id: "b", text: "stops air" },
      { id: "c", text: "saves water" },
      { id: "d", text: "wastes water" }
    ],
    answerId: "c",
    explanation: "Closing the tap saves water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-b-q08",
    prompt: "Fog is tiny water drops in the\u2026",
    options: [
      { id: "a", text: "only underground always" },
      { id: "b", text: "only in books" },
      { id: "c", text: "only in shoes" },
      { id: "d", text: "air near the ground" }
    ],
    answerId: "d",
    explanation: "Fog is tiny drops in air near the ground.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-b-q09",
    prompt: "Dirty water can make us\u2026",
    options: [
      { id: "a", text: "ill" },
      { id: "b", text: "fly" },
      { id: "c", text: "grow taller instantly" },
      { id: "d", text: "turn invisible" }
    ],
    answerId: "a",
    explanation: "Dirty water can make us ill.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-b-q10",
    prompt: "Air takes up\u2026",
    options: [
      { id: "a", text: "only taste" },
      { id: "b", text: "space" },
      { id: "c", text: "no space ever" },
      { id: "d", text: "only colour" }
    ],
    answerId: "b",
    explanation: "Air takes up space \u2014 fill a balloon.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-b-q11",
    prompt: "The water cycle includes rain, clouds and\u2026",
    options: [
      { id: "a", text: "metal melting only" },
      { id: "b", text: "noise" },
      { id: "c", text: "evaporation" },
      { id: "d", text: "plastic making" }
    ],
    answerId: "c",
    explanation: "Evaporation is part of the water cycle.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-b-q12",
    prompt: "We should not throw rubbish into\u2026",
    options: [
      { id: "a", text: "dustbins" },
      { id: "b", text: "recycling bins" },
      { id: "c", text: "compost carefully" },
      { id: "d", text: "rivers and lakes" }
    ],
    answerId: "d",
    explanation: "Do not throw rubbish into rivers.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-b-q13",
    prompt: "A fan moves\u2026",
    options: [
      { id: "a", text: "air" },
      { id: "b", text: "stones" },
      { id: "c", text: "water from wells always" },
      { id: "d", text: "soil only" }
    ],
    answerId: "a",
    explanation: "A fan moves air.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-b-q14",
    prompt: "Snow is water in a ___ form.",
    options: [
      { id: "a", text: "plastic" },
      { id: "b", text: "solid" },
      { id: "c", text: "liquid only" },
      { id: "d", text: "gas only" }
    ],
    answerId: "b",
    explanation: "Snow is solid water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-b-q15",
    prompt: "Clean air is important for\u2026",
    options: [
      { id: "a", text: "stopping rain forever" },
      { id: "b", text: "hiding the sun" },
      { id: "c", text: "healthy breathing" },
      { id: "d", text: "making more dust" }
    ],
    answerId: "c",
    explanation: "Clean air helps healthy breathing.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-b-q16",
    prompt: "Boil water to help make it\u2026",
    options: [
      { id: "a", text: "dirtier" },
      { id: "b", text: "into plastic" },
      { id: "c", text: "into sand" },
      { id: "d", text: "safer to drink when advised" }
    ],
    answerId: "d",
    explanation: "Boiling can make water safer.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83d\udca7",
    title: "Air & Water",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "water-cycle",
    speak: "Air and water keep us alive.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "water-cycle",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Air", reveal: "We breathe it", emoji: "\ud83c\udf2c\ufe0f" },
      { label: "Water", reveal: "Drink clean water", emoji: "\ud83d\udca7" },
      { label: "Save", reveal: "Do not waste", emoji: "\ud83d\udedf" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Moving air is called\u2026",
    options: [
        { id: "a", text: "wind" },
        { id: "b", text: "soil" },
        { id: "c", text: "fire" },
        { id: "d", text: "metal" }
    ],
    answerId: "a",
    why: "Moving air is wind.",
    visual: "water-cycle",
    speak: "Moving air is called\u2026",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Breathe clean air", "Save water", "Sets ready \u2014 16 each"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g2ScienceAirWater: ChapterDef = {
  id: "air-water",
  title: "Air & Water",
  emoji: "\ud83d\udca7",
  blurb: "Wind, rain & clean habits",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "water-cycle",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "water-cycle",
      questions: SET_B,
    },
  ],
  paperTopics: ["water-cycle", "living-things"],
};

export const g2ScienceAirWaterQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
