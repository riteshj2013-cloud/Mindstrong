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
      { id: "a", text: "wind" },
      { id: "b", text: "soil" },
      { id: "c", text: "fire" },
      { id: "d", text: "metal" }
    ],
    answerId: "a",
    explanation: "Moving air is wind.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-a-q03",
    prompt: "Water can be liquid, solid (ice) or\u2026",
    options: [
      { id: "a", text: "gas or vapour" },
      { id: "b", text: "metal" },
      { id: "c", text: "plastic" },
      { id: "d", text: "wood" }
    ],
    answerId: "a",
    explanation: "Water can become vapour (gas).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-a-q04",
    prompt: "Ice is water in the ___ form.",
    options: [
      { id: "a", text: "solid" },
      { id: "b", text: "liquid only" },
      { id: "c", text: "gas only" },
      { id: "d", text: "plastic" }
    ],
    answerId: "a",
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
      { id: "a", text: "clouds" },
      { id: "b", text: "stones" },
      { id: "c", text: "plastic bags" },
      { id: "d", text: "shoes" }
    ],
    answerId: "a",
    explanation: "Rain falls from clouds.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-a-q07",
    prompt: "Boiling water can turn into\u2026",
    options: [
      { id: "a", text: "steam or vapour" },
      { id: "b", text: "sand" },
      { id: "c", text: "glass" },
      { id: "d", text: "iron" }
    ],
    answerId: "a",
    explanation: "Boiling makes steam.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-a-q08",
    prompt: "Air is all around us but we usually\u2026",
    options: [
      { id: "a", text: "cannot see it" },
      { id: "b", text: "can eat it like bread" },
      { id: "c", text: "paint it only" },
      { id: "d", text: "hold it easily always" }
    ],
    answerId: "a",
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
      { id: "a", text: "gentle wind" },
      { id: "b", text: "a rock" },
      { id: "c", text: "a fire" },
      { id: "d", text: "a fruit" }
    ],
    answerId: "a",
    explanation: "A breeze is a gentle wind.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-a-q11",
    prompt: "Fish need ___ in water to live.",
    options: [
      { id: "a", text: "oxygen in the water" },
      { id: "b", text: "plastic" },
      { id: "c", text: "sand only" },
      { id: "d", text: "fire" }
    ],
    answerId: "a",
    explanation: "Fish need oxygen in water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-a-q12",
    prompt: "Puddles dry up because water\u2026",
    options: [
      { id: "a", text: "evaporates" },
      { id: "b", text: "turns to stone" },
      { id: "c", text: "freezes always" },
      { id: "d", text: "becomes metal" }
    ],
    answerId: "a",
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
      { id: "a", text: "dirty or polluted" },
      { id: "b", text: "sweeter always" },
      { id: "c", text: "made of gold" },
      { id: "d", text: "silent forever" }
    ],
    answerId: "a",
    explanation: "Smoke and dust pollute air.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-a-q15",
    prompt: "Clouds are made of tiny\u2026",
    options: [
      { id: "a", text: "water droplets" },
      { id: "b", text: "stones" },
      { id: "c", text: "plastic bits only" },
      { id: "d", text: "metal sheets" }
    ],
    answerId: "a",
    explanation: "Clouds hold tiny water droplets.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-a-q16",
    prompt: "Cover food and water to keep them\u2026",
    options: [
      { id: "a", text: "clean and safe" },
      { id: "b", text: "dirty" },
      { id: "c", text: "hot always" },
      { id: "d", text: "salty always" }
    ],
    answerId: "a",
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
      { id: "a", text: "gas" },
      { id: "b", text: "solid only" },
      { id: "c", text: "plastic" },
      { id: "d", text: "metal" }
    ],
    answerId: "a",
    explanation: "Steam is water vapour (gas).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-b-q03",
    prompt: "We get much of our drinking water from\u2026",
    options: [
      { id: "a", text: "rivers and taps after cleaning" },
      { id: "b", text: "only from fire" },
      { id: "c", text: "only from plastic smoke" },
      { id: "d", text: "only from sand" }
    ],
    answerId: "a",
    explanation: "Water often comes from rivers, cleaned for taps.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-b-q04",
    prompt: "Ice melts into\u2026",
    options: [
      { id: "a", text: "liquid water" },
      { id: "b", text: "smoke plastic" },
      { id: "c", text: "sand" },
      { id: "d", text: "wood" }
    ],
    answerId: "a",
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
      { id: "a", text: "gases from air" },
      { id: "b", text: "plastic bags" },
      { id: "c", text: "metal sheets" },
      { id: "d", text: "screens" }
    ],
    answerId: "a",
    explanation: "Plants use air gases too.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-b-q07",
    prompt: "Closing the tap while brushing\u2026",
    options: [
      { id: "a", text: "saves water" },
      { id: "b", text: "wastes water" },
      { id: "c", text: "makes more rain instantly" },
      { id: "d", text: "stops air" }
    ],
    answerId: "a",
    explanation: "Closing the tap saves water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-b-q08",
    prompt: "Fog is tiny water drops in the\u2026",
    options: [
      { id: "a", text: "air near the ground" },
      { id: "b", text: "only underground always" },
      { id: "c", text: "only in books" },
      { id: "d", text: "only in shoes" }
    ],
    answerId: "a",
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
      { id: "a", text: "space" },
      { id: "b", text: "no space ever" },
      { id: "c", text: "only colour" },
      { id: "d", text: "only taste" }
    ],
    answerId: "a",
    explanation: "Air takes up space \u2014 fill a balloon.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-b-q11",
    prompt: "The water cycle includes rain, clouds and\u2026",
    options: [
      { id: "a", text: "evaporation" },
      { id: "b", text: "plastic making" },
      { id: "c", text: "metal melting only" },
      { id: "d", text: "noise" }
    ],
    answerId: "a",
    explanation: "Evaporation is part of the water cycle.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-b-q12",
    prompt: "We should not throw rubbish into\u2026",
    options: [
      { id: "a", text: "rivers and lakes" },
      { id: "b", text: "dustbins" },
      { id: "c", text: "recycling bins" },
      { id: "d", text: "compost carefully" }
    ],
    answerId: "a",
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
      { id: "a", text: "solid" },
      { id: "b", text: "liquid only" },
      { id: "c", text: "gas only" },
      { id: "d", text: "plastic" }
    ],
    answerId: "a",
    explanation: "Snow is solid water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-b-q15",
    prompt: "Clean air is important for\u2026",
    options: [
      { id: "a", text: "healthy breathing" },
      { id: "b", text: "making more dust" },
      { id: "c", text: "stopping rain forever" },
      { id: "d", text: "hiding the sun" }
    ],
    answerId: "a",
    explanation: "Clean air helps healthy breathing.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-b-q16",
    prompt: "Boil water to help make it\u2026",
    options: [
      { id: "a", text: "safer to drink when advised" },
      { id: "b", text: "dirtier" },
      { id: "c", text: "into plastic" },
      { id: "d", text: "into sand" }
    ],
    answerId: "a",
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
