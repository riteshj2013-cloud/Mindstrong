import type { ChapterDef, PrepQuestion } from "../types";

/** Air & Water - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g2-sci-airwater-a-q01",
    prompt: "We need ___ to breathe.",
    options: [
      { id: "a", text: "air" },
      { id: "b", text: "water" },
      { id: "c", text: "food" },
      { id: "d", text: "sunlight" }
    ],
    answerId: "a",
    explanation: "We need air to breathe. Water is tempting because we need it to live, but we drink water; we breathe air.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-a-q02",
    prompt: "Moving air is called\u2026",
    options: [
      { id: "a", text: "rain" },
      { id: "b", text: "wind" },
      { id: "c", text: "cloud" },
      { id: "d", text: "fog" }
    ],
    answerId: "b",
    explanation: "Moving air is called wind. A cloud is tempting because clouds move across the sky, but a cloud is made of water drops carried along by the wind.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-a-q03",
    prompt: "Water can be liquid, solid (ice) or\u2026",
    options: [
      { id: "a", text: "salt" },
      { id: "b", text: "smoke" },
      { id: "c", text: "gas or vapour" },
      { id: "d", text: "dust" }
    ],
    answerId: "c",
    explanation: "Water can be a liquid, a solid (ice) or a gas called water vapour. Smoke is tempting because steam from a kettle looks a bit like smoke, but smoke comes from burning; steam is water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-a-q04",
    prompt: "Ice is water in the ___ form.",
    options: [
      { id: "a", text: "liquid" },
      { id: "b", text: "gas" },
      { id: "c", text: "melted" },
      { id: "d", text: "solid" }
    ],
    answerId: "d",
    explanation: "Ice is water in the solid form. 'Melted' is tempting because ice melts, but once it melts it is liquid water, not ice.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-a-q05",
    prompt: "We should drink ___ water.",
    options: [
      { id: "a", text: "clean" },
      { id: "b", text: "dirty" },
      { id: "c", text: "salty sea" },
      { id: "d", text: "muddy" }
    ],
    answerId: "a",
    explanation: "We should drink clean water. Salty sea water is tempting because it is still water, but the salt makes it unsafe to drink.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-a-q06",
    prompt: "Rain comes from\u2026",
    options: [
      { id: "a", text: "the sun" },
      { id: "b", text: "clouds" },
      { id: "c", text: "the wind" },
      { id: "d", text: "trees" }
    ],
    answerId: "b",
    explanation: "Rain falls from clouds. The wind is tempting because rain often comes with wind, but wind only moves the clouds; the rain itself falls from the clouds.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-a-q07",
    prompt: "Boiling water can turn into\u2026",
    options: [
      { id: "a", text: "ice" },
      { id: "b", text: "salt" },
      { id: "c", text: "steam or vapour" },
      { id: "d", text: "smoke" }
    ],
    answerId: "c",
    explanation: "Boiling water turns into steam, or water vapour. Ice is tempting because it is also water in another form, but ice forms when water is frozen, not boiled.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-a-q08",
    prompt: "Air is all around us but we usually\u2026",
    options: [
      { id: "a", text: "can see it clearly" },
      { id: "b", text: "can hold it in our hands" },
      { id: "c", text: "can hear it all the time" },
      { id: "d", text: "cannot see it" }
    ],
    answerId: "d",
    explanation: "Air is all around us, but we cannot see it. 'Can hear it all the time' is tempting because we hear wind, but still air makes no sound.",
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
    explanation: "Saving water means not wasting it. 'Leaving taps open' is the opposite: it lets water run away.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-a-q10",
    prompt: "A breeze is\u2026",
    options: [
      { id: "a", text: "a heavy rain" },
      { id: "b", text: "gentle wind" },
      { id: "c", text: "a big storm" },
      { id: "d", text: "a cloud" }
    ],
    answerId: "b",
    explanation: "A breeze is a gentle wind. A big storm is tempting because it is also moving air, but a storm is very strong; a breeze is soft and gentle.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-a-q11",
    prompt: "Fish need ___ in water to live.",
    options: [
      { id: "a", text: "sunlight" },
      { id: "b", text: "sand" },
      { id: "c", text: "oxygen in the water" },
      { id: "d", text: "mud" }
    ],
    answerId: "c",
    explanation: "Fish need the oxygen that is mixed in the water. Sunlight is tempting because many living things need it, but fish breathe oxygen through their gills.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-a-q12",
    prompt: "Puddles dry up because water\u2026",
    options: [
      { id: "a", text: "turns into sand" },
      { id: "b", text: "freezes" },
      { id: "c", text: "melts" },
      { id: "d", text: "evaporates" }
    ],
    answerId: "d",
    explanation: "Puddles dry up because the water evaporates into the air. 'Melts' is tempting because ice melts into water, but a puddle is already liquid; it rises into the air as vapour.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-a-q13",
    prompt: "Which is a use of water?",
    options: [
      { id: "a", text: "drinking and cleaning" },
      { id: "b", text: "lighting a fire" },
      { id: "c", text: "drying wet clothes" },
      { id: "d", text: "making the air we breathe" }
    ],
    answerId: "a",
    explanation: "We use water for drinking and cleaning. 'Drying wet clothes' is tempting because it is about water, but clothes dry when water leaves them; water does not dry them.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-a-q14",
    prompt: "Smoke and dust can make air\u2026",
    options: [
      { id: "a", text: "cleaner" },
      { id: "b", text: "dirty or polluted" },
      { id: "c", text: "cooler" },
      { id: "d", text: "fresher" }
    ],
    answerId: "b",
    explanation: "Smoke and dust make air dirty, or polluted. 'Cooler' is tempting because smoky days can look dull, but smoke and dust do not clean or cool the air; they spoil it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-a-q15",
    prompt: "Clouds are made of tiny\u2026",
    options: [
      { id: "a", text: "stones" },
      { id: "b", text: "dust bits" },
      { id: "c", text: "water droplets" },
      { id: "d", text: "cotton threads" }
    ],
    answerId: "c",
    explanation: "Clouds are made of tiny water droplets. Cotton threads are tempting because clouds look soft like cotton, but they are really water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-a-q16",
    prompt: "Cover food and water to keep them\u2026",
    options: [
      { id: "a", text: "dirty" },
      { id: "b", text: "cold" },
      { id: "c", text: "warm" },
      { id: "d", text: "clean and safe" }
    ],
    answerId: "d",
    explanation: "Covering food and water keeps them clean and safe from flies and dust. 'Cold' is tempting because a fridge keeps food cold, but a cover only keeps dirt and flies out.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g2-sci-airwater-b-q01",
    prompt: "Wind can help\u2026",
    options: [
      { id: "a", text: "dry clothes and fly kites" },
      { id: "b", text: "boil water" },
      { id: "c", text: "make the sun shine brighter" },
      { id: "d", text: "light a lamp" }
    ],
    answerId: "a",
    explanation: "Wind can dry wet clothes and lift kites into the sky. 'Boil water' is tempting because wind moves air over the water, but water boils only when it is heated, as on a stove.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-b-q02",
    prompt: "Steam is water as a\u2026",
    options: [
      { id: "a", text: "solid" },
      { id: "b", text: "gas" },
      { id: "c", text: "liquid" },
      { id: "d", text: "powder" }
    ],
    answerId: "b",
    explanation: "Steam is water as a gas. 'Liquid' is tempting because steam comes from liquid water, but once water boils into steam it is a gas.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-b-q03",
    prompt: "We get much of our drinking water from\u2026",
    options: [
      { id: "a", text: "the sea, without cleaning" },
      { id: "b", text: "puddles on the road" },
      { id: "c", text: "rivers and taps after cleaning" },
      { id: "d", text: "ice from the fridge" }
    ],
    answerId: "c",
    explanation: "Much of our drinking water comes from rivers and reaches taps after cleaning. 'Ice from the fridge' is tempting because it is clean water, but fridge ice is made from tap water; it is not where our water comes from.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-b-q04",
    prompt: "Ice melts into\u2026",
    options: [
      { id: "a", text: "steam" },
      { id: "b", text: "snow" },
      { id: "c", text: "salt" },
      { id: "d", text: "liquid water" }
    ],
    answerId: "d",
    explanation: "Ice melts into liquid water. Steam is tempting because it is also water, but steam forms when water is boiled; melting ice only gives liquid water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-b-q05",
    prompt: "A strong wind storm can be\u2026",
    options: [
      { id: "a", text: "dangerous" },
      { id: "b", text: "fun to play in" },
      { id: "c", text: "good for flying kites" },
      { id: "d", text: "quiet and calm" }
    ],
    answerId: "a",
    explanation: "A strong wind storm can be dangerous, so stay indoors. 'Good for flying kites' is tempting because kites need wind, but a storm is far too strong and unsafe.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-b-q06",
    prompt: "Plants also need ___ from air.",
    options: [
      { id: "a", text: "dust" },
      { id: "b", text: "gases" },
      { id: "c", text: "smoke" },
      { id: "d", text: "sand" }
    ],
    answerId: "b",
    explanation: "Plants take in gases from the air, such as carbon dioxide, to make their food. Dust is tempting because it floats in the air too, but dust only covers the leaves; plants need gases, not dust.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-b-q07",
    prompt: "Closing the tap while brushing\u2026",
    options: [
      { id: "a", text: "wastes water" },
      { id: "b", text: "makes the tap rusty" },
      { id: "c", text: "saves water" },
      { id: "d", text: "cleans the pipes" }
    ],
    answerId: "c",
    explanation: "Closing the tap while brushing saves water. 'Wastes water' is the opposite; leaving the tap running is what wastes it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-b-q08",
    prompt: "Fog is tiny water drops in the\u2026",
    options: [
      { id: "a", text: "soil" },
      { id: "b", text: "clouds high in the sky" },
      { id: "c", text: "rivers" },
      { id: "d", text: "air near the ground" }
    ],
    answerId: "d",
    explanation: "Fog is tiny water drops in the air near the ground. 'Clouds high in the sky' is tempting because clouds are also water drops, but fog is low, close to the ground.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-b-q09",
    prompt: "Dirty water can make us\u2026",
    options: [
      { id: "a", text: "ill" },
      { id: "b", text: "stronger" },
      { id: "c", text: "taller" },
      { id: "d", text: "cleaner" }
    ],
    answerId: "a",
    explanation: "Dirty water has germs that can make us ill. 'Stronger' is tempting because drinking water is good for us, but only clean water keeps us healthy; dirty water harms us.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-b-q10",
    prompt: "Air takes up\u2026",
    options: [
      { id: "a", text: "no space" },
      { id: "b", text: "space" },
      { id: "c", text: "only outside space" },
      { id: "d", text: "space only when it moves" }
    ],
    answerId: "b",
    explanation: "Air takes up space: blowing into a balloon makes it bigger. 'Space only when it moves' is tempting because we notice wind more, but still air in a balloon takes up space too.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-b-q11",
    prompt: "The water cycle includes rain, clouds and\u2026",
    options: [
      { id: "a", text: "burning" },
      { id: "b", text: "boiling of milk" },
      { id: "c", text: "evaporation" },
      { id: "d", text: "thunder" }
    ],
    answerId: "c",
    explanation: "The water cycle includes evaporation, clouds and rain. Thunder is tempting because it comes with rain, but it is a sound, not a step that moves water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-b-q12",
    prompt: "We should not throw rubbish into\u2026",
    options: [
      { id: "a", text: "dustbins" },
      { id: "b", text: "recycling bins" },
      { id: "c", text: "compost pits" },
      { id: "d", text: "rivers and lakes" }
    ],
    answerId: "d",
    explanation: "We should not throw rubbish into rivers and lakes, because it makes the water dirty. 'Recycling bins' is tempting because the sentence says 'should not', but dustbins, recycling bins and compost pits are the right places for waste.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-b-q13",
    prompt: "A fan moves\u2026",
    options: [
      { id: "a", text: "air" },
      { id: "b", text: "light" },
      { id: "c", text: "water" },
      { id: "d", text: "soil" }
    ],
    answerId: "a",
    explanation: "A fan moves air, which is why we feel a breeze. Light is tempting because a fan may have a lamp, but its blades push air, not light.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-b-q14",
    prompt: "Riya blows into a balloon and it gets bigger. What fills the balloon?",
    options: [
      { id: "a", text: "water" },
      { id: "b", text: "air" },
      { id: "c", text: "sand" },
      { id: "d", text: "light" }
    ],
    answerId: "b",
    explanation: "When Riya blows, air from her lungs goes into the balloon. Air takes up space, so the balloon grows. Water is wrong: nothing wet came out of Riya's mouth.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-b-q15",
    prompt: "Clean air is important for\u2026",
    options: [
      { id: "a", text: "making rain" },
      { id: "b", text: "growing taller" },
      { id: "c", text: "healthy breathing" },
      { id: "d", text: "making clouds" }
    ],
    answerId: "c",
    explanation: "Clean air is important for healthy breathing. 'Making rain' is tempting because air carries clouds, but clean air matters most for our lungs.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g2-sci-airwater-b-q16",
    prompt: "Boil water to help make it\u2026",
    options: [
      { id: "a", text: "dirtier" },
      { id: "b", text: "saltier" },
      { id: "c", text: "colder" },
      { id: "d", text: "safer to drink when advised" }
    ],
    answerId: "d",
    explanation: "Boiling water kills germs, which can make it safer to drink. 'Colder' is tempting because we let boiled water cool before drinking, but boiling makes water hot; it is the boiling that kills the germs.",
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
