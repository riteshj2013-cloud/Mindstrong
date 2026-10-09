import type { ChapterDef, PrepQuestion } from "../types";

/** Heat - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g7-sci-heat-a-q01",
    prompt: "Heat is a form of\u2026",
    options: [
      { id: "a", text: "Energy" },
      { id: "b", text: "Matter" },
      { id: "c", text: "Force only" },
      { id: "d", text: "Mass only" }
    ],
    answerId: "a",
    explanation: "Heat is energy transferred because of temperature difference.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-a-q02",
    prompt: "Temperature measures\u2026",
    options: [
      { id: "a", text: "Only mass" },
      { id: "b", text: "How hot or cold something is" },
      { id: "c", text: "Only volume" },
      { id: "d", text: "Only colour" }
    ],
    answerId: "b",
    explanation: "Temperature indicates degree of hotness.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-a-q03",
    prompt: "SI unit of temperature commonly used in science labs is\u2026",
    options: [
      { id: "a", text: "Kilogram" },
      { id: "b", text: "Newton" },
      { id: "c", text: "Kelvin (K), with Celsius also widely used" },
      { id: "d", text: "Pascal only" }
    ],
    answerId: "c",
    explanation: "Kelvin is the SI unit; Celsius is common in labs.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-a-q04",
    prompt: "On the Celsius scale, water freezes at\u2026",
    options: [
      { id: "a", text: "100 \u00b0C" },
      { id: "b", text: "32 \u00b0C" },
      { id: "c", text: "273 \u00b0C" },
      { id: "d", text: "0 \u00b0C" }
    ],
    answerId: "d",
    explanation: "Ice melts / water freezes at 0 \u00b0C under standard conditions.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-a-q05",
    prompt: "On the Celsius scale, water boils at\u2026",
    options: [
      { id: "a", text: "100 \u00b0C" },
      { id: "b", text: "0 \u00b0C" },
      { id: "c", text: "50 \u00b0C" },
      { id: "d", text: "212 \u00b0C as Celsius" }
    ],
    answerId: "a",
    explanation: "Pure water boils at 100 \u00b0C at standard pressure.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-a-q06",
    prompt: "A clinical thermometer is designed mainly to measure\u2026",
    options: [
      { id: "a", text: "Boiling lava" },
      { id: "b", text: "Human body temperature" },
      { id: "c", text: "Outer space" },
      { id: "d", text: "Furnace steel" }
    ],
    answerId: "b",
    explanation: "Clinical thermometers cover a narrow range around body temperature.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-a-q07",
    prompt: "Transfer of heat in solids without bulk movement of particles is mainly\u2026",
    options: [
      { id: "a", text: "Convection" },
      { id: "b", text: "Radiation only" },
      { id: "c", text: "Conduction" },
      { id: "d", text: "Evaporation" }
    ],
    answerId: "c",
    explanation: "Conduction passes heat through particle collisions in solids.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-a-q08",
    prompt: "Heat transfer by movement of a fluid is\u2026",
    options: [
      { id: "a", text: "Conduction only" },
      { id: "b", text: "Reflection" },
      { id: "c", text: "Condensation" },
      { id: "d", text: "Convection" }
    ],
    answerId: "d",
    explanation: "Warm fluid rises and cooler fluid sinks \u2014 convection currents.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-a-q09",
    prompt: "Heat transfer that needs no medium is\u2026",
    options: [
      { id: "a", text: "Radiation" },
      { id: "b", text: "Conduction" },
      { id: "c", text: "Convection" },
      { id: "d", text: "Osmosis" }
    ],
    answerId: "a",
    explanation: "Radiation can travel through vacuum (e.g. Sun to Earth).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-a-q10",
    prompt: "Metals are usually ____ conductors of heat.",
    options: [
      { id: "a", text: "Poor" },
      { id: "b", text: "Good" },
      { id: "c", text: "Non" },
      { id: "d", text: "Variable as insulators always" }
    ],
    answerId: "b",
    explanation: "Metals conduct heat well.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-a-q11",
    prompt: "Wood and plastic are often used as handles because they are\u2026",
    options: [
      { id: "a", text: "Best conductors" },
      { id: "b", text: "Sources of heat" },
      { id: "c", text: "Poor conductors (insulators)" },
      { id: "d", text: "Magnetic" }
    ],
    answerId: "c",
    explanation: "Insulators reduce heat flow to the hand.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-a-q12",
    prompt: "Land breeze occurs mainly\u2026",
    options: [
      { id: "a", text: "Only at noon always" },
      { id: "b", text: "Only in space" },
      { id: "c", text: "When there is no air" },
      { id: "d", text: "At night when land cools faster than sea" }
    ],
    answerId: "d",
    explanation: "At night, cooler land air moves toward warmer sea \u2014 land breeze.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-a-q13",
    prompt: "Sea breeze occurs mainly\u2026",
    options: [
      { id: "a", text: "During day when land heats faster than sea" },
      { id: "b", text: "Only at midnight" },
      { id: "c", text: "Only underground" },
      { id: "d", text: "In a vacuum" }
    ],
    answerId: "a",
    explanation: "Daytime: cooler sea air moves toward warmer land.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-a-q14",
    prompt: "Dark, dull surfaces are generally ____ absorbers of radiation.",
    options: [
      { id: "a", text: "Poor" },
      { id: "b", text: "Good" },
      { id: "c", text: "Perfect reflectors always" },
      { id: "d", text: "Transparent always" }
    ],
    answerId: "b",
    explanation: "Dark dull surfaces absorb (and emit) radiation well.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-a-q15",
    prompt: "Shiny, polished surfaces are generally ____ reflectors of radiation.",
    options: [
      { id: "a", text: "Poor" },
      { id: "b", text: "Perfect absorbers always" },
      { id: "c", text: "Good" },
      { id: "d", text: "Heat sources" }
    ],
    answerId: "c",
    explanation: "Shiny surfaces reflect radiant heat.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-a-q16",
    prompt: "In a thermos flask, the vacuum mainly reduces heat transfer by\u2026",
    options: [
      { id: "a", text: "Radiation only completely alone" },
      { id: "b", text: "Sound" },
      { id: "c", text: "Magnetism" },
      { id: "d", text: "Conduction and convection" }
    ],
    answerId: "d",
    explanation: "No medium means little conduction/convection; silvering reduces radiation.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-a-q17",
    prompt: "When ice melts, temperature of the ice\u2013water mixture stays near 0 \u00b0C because heat is used as\u2026",
    options: [
      { id: "a", text: "Latent heat of fusion" },
      { id: "b", text: "Sensible heat only raising temperature continuously" },
      { id: "c", text: "Light energy" },
      { id: "d", text: "Sound energy" }
    ],
    answerId: "a",
    explanation: "Latent heat changes state without raising temperature.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-a-q18",
    prompt: "Evaporation causes cooling because\u2026",
    options: [
      { id: "a", text: "Heat is created from nothing" },
      { id: "b", text: "Faster particles leave, lowering average energy of the rest" },
      { id: "c", text: "Mass increases temperature" },
      { id: "d", text: "Light turns into ice" }
    ],
    answerId: "b",
    explanation: "Higher-energy molecules escape; remaining liquid cools.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-a-q19",
    prompt: "Which expands more for the same rise in temperature (generally)?",
    options: [
      { id: "a", text: "Solids always more than gases" },
      { id: "b", text: "Nothing expands" },
      { id: "c", text: "Gases" },
      { id: "d", text: "Only colours" }
    ],
    answerId: "c",
    explanation: "Gases expand more than liquids, which expand more than solids (typically).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-a-q20",
    prompt: "Gaps left between railway tracks help with\u2026",
    options: [
      { id: "a", text: "Magnetic trains only" },
      { id: "b", text: "Cooling tea" },
      { id: "c", text: "Soundproofing only" },
      { id: "d", text: "Thermal expansion of rails" }
    ],
    answerId: "d",
    explanation: "Rails expand on hot days; gaps prevent buckling.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-a-q21",
    prompt: "A clinical thermometer usually has a kink (constriction) to\u2026",
    options: [
      { id: "a", text: "Prevent mercury from falling back quickly before reading" },
      { id: "b", text: "Heat the room" },
      { id: "c", text: "Measure wind speed" },
      { id: "d", text: "Store vaccines" }
    ],
    answerId: "a",
    explanation: "The constriction holds the mercury column for reading.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-a-q22",
    prompt: "Heat flows spontaneously from\u2026",
    options: [
      { id: "a", text: "Colder to hotter always" },
      { id: "b", text: "Hotter to colder body" },
      { id: "c", text: "Only upward" },
      { id: "d", text: "Only in metals never in air" }
    ],
    answerId: "b",
    explanation: "Net heat flows from higher to lower temperature.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-a-q23",
    prompt: "Wearing light-coloured clothes in summer helps because they\u2026",
    options: [
      { id: "a", text: "Absorb more heat always" },
      { id: "b", text: "Block all oxygen" },
      { id: "c", text: "Absorb less radiant heat" },
      { id: "d", text: "Create convection in bones" }
    ],
    answerId: "c",
    explanation: "Light colours reflect more sunlight.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-a-q24",
    prompt: "The range of a laboratory thermometer is typically wider than a clinical one because\u2026",
    options: [
      { id: "a", text: "It only measures body heat" },
      { id: "b", text: "It cannot show 0 \u00b0C" },
      { id: "c", text: "It uses no scale" },
      { id: "d", text: "It measures many substances, not just body temperature" }
    ],
    answerId: "d",
    explanation: "Lab thermometers cover broader temperature ranges.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g7-sci-heat-b-q01",
    prompt: "Which is the best conductor among these?",
    options: [
      { id: "a", text: "Copper" },
      { id: "b", text: "Wood" },
      { id: "c", text: "Plastic" },
      { id: "d", text: "Air" }
    ],
    answerId: "a",
    explanation: "Copper is a metal and conducts heat well.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-b-q02",
    prompt: "Convection currents in air explain\u2026",
    options: [
      { id: "a", text: "Why metals are shiny" },
      { id: "b", text: "Why warm air rises near a heater" },
      { id: "c", text: "Why ice is solid" },
      { id: "d", text: "Why light needs wires" }
    ],
    answerId: "b",
    explanation: "Heated air expands, becomes less dense, and rises.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-b-q03",
    prompt: "We feel heat from a fire even to the side mainly by\u2026",
    options: [
      { id: "a", text: "Only conduction through air as a solid" },
      { id: "b", text: "Only convection downward always" },
      { id: "c", text: "Radiation" },
      { id: "d", text: "Magnetism" }
    ],
    answerId: "c",
    explanation: "Radiant heat travels in straight lines from the fire.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-b-q04",
    prompt: "Woollen clothes keep us warm because wool\u2026",
    options: [
      { id: "a", text: "Is a metal conductor" },
      { id: "b", text: "Produces its own flame" },
      { id: "c", text: "Removes all body heat instantly" },
      { id: "d", text: "Traps air, which is a poor conductor" }
    ],
    answerId: "d",
    explanation: "Trapped air reduces heat loss from the body.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-b-q05",
    prompt: "A sea breeze is an example of heat transfer by\u2026",
    options: [
      { id: "a", text: "Convection" },
      { id: "b", text: "Conduction through steel rails only" },
      { id: "c", text: "Radiation in a vacuum flask only" },
      { id: "d", text: "Latent heat of fusion only" }
    ],
    answerId: "a",
    explanation: "Moving air masses transfer heat by convection.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-b-q06",
    prompt: "Digital thermometers often use\u2026",
    options: [
      { id: "a", text: "Only mercury columns" },
      { id: "b", text: "Electronic sensors instead of mercury" },
      { id: "c", text: "Only alcohol for space" },
      { id: "d", text: "No scale at all" }
    ],
    answerId: "b",
    explanation: "Many modern thermometers are digital/electronic.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-b-q07",
    prompt: "When a metal lid stuck on a glass jar is heated gently, it loosens because metal\u2026",
    options: [
      { id: "a", text: "Shrinks always" },
      { id: "b", text: "Turns to gas" },
      { id: "c", text: "Expands more than glass typically" },
      { id: "d", text: "Becomes wood" }
    ],
    answerId: "c",
    explanation: "Greater expansion of the metal lid frees it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-b-q08",
    prompt: "Boiling involves\u2026",
    options: [
      { id: "a", text: "Only surface evaporation below boiling point as the same thing" },
      { id: "b", text: "Freezing" },
      { id: "c", text: "Melting of ice only" },
      { id: "d", text: "Rapid vaporisation throughout the liquid at a fixed temperature (at given pressure)" }
    ],
    answerId: "d",
    explanation: "Boiling is bulk vaporisation at the boiling point.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-b-q09",
    prompt: "Evaporation can occur\u2026",
    options: [
      { id: "a", text: "At all temperatures at the surface" },
      { id: "b", text: "Only at 100 \u00b0C" },
      { id: "c", text: "Only at 0 \u00b0C" },
      { id: "d", text: "Never for water" }
    ],
    answerId: "a",
    explanation: "Evaporation is surface vaporisation at any temperature.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-b-q10",
    prompt: "Which factor increases the rate of evaporation?",
    options: [
      { id: "a", text: "Lower temperature always" },
      { id: "b", text: "Higher temperature / wind / larger surface area" },
      { id: "c", text: "Still humid air with no wind and tiny area always" },
      { id: "d", text: "Freezing the liquid" }
    ],
    answerId: "b",
    explanation: "Warmth, wind, and surface area speed evaporation.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-b-q11",
    prompt: "The mercury in a thermometer rises when heated because mercury\u2026",
    options: [
      { id: "a", text: "Contracts always" },
      { id: "b", text: "Disappears" },
      { id: "c", text: "Expands" },
      { id: "d", text: "Turns into wood" }
    ],
    answerId: "c",
    explanation: "Thermal expansion of mercury moves the column up the scale.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-b-q12",
    prompt: "A clinical thermometer should not be sterilised in boiling water because\u2026",
    options: [
      { id: "a", text: "It measures only ice" },
      { id: "b", text: "Boiling water is too cold" },
      { id: "c", text: "It has no glass" },
      { id: "d", text: "Its upper range is below boiling point of water; it may break" }
    ],
    answerId: "d",
    explanation: "Typical clinical upper limit is around 42 \u00b0C, far below 100 \u00b0C.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-b-q13",
    prompt: "Insulation in buildings aims to\u2026",
    options: [
      { id: "a", text: "Reduce unwanted heat flow" },
      { id: "b", text: "Increase conduction always" },
      { id: "c", text: "Remove all air forever" },
      { id: "d", text: "Create more radiation inward always" }
    ],
    answerId: "a",
    explanation: "Insulation keeps interiors warmer or cooler as needed.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-b-q14",
    prompt: "The Sun\u2019s heat reaches Earth primarily by\u2026",
    options: [
      { id: "a", text: "Conduction through space air" },
      { id: "b", text: "Radiation" },
      { id: "c", text: "Convection currents in vacuum" },
      { id: "d", text: "Sound waves" }
    ],
    answerId: "b",
    explanation: "Space is nearly vacuum; radiation carries solar energy.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-b-q15",
    prompt: "In SI thinking, a temperature change of 1 \u00b0C equals a change of\u2026",
    options: [
      { id: "a", text: "10 K" },
      { id: "b", text: "100 K" },
      { id: "c", text: "1 K" },
      { id: "d", text: "273 K" }
    ],
    answerId: "c",
    explanation: "Celsius and Kelvin degrees are the same size.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-b-q16",
    prompt: "0 \u00b0C equals how many kelvin (approximately)?",
    options: [
      { id: "a", text: "100 K" },
      { id: "b", text: "0 K" },
      { id: "c", text: "373 K" },
      { id: "d", text: "273 K" }
    ],
    answerId: "d",
    explanation: "T(K) \u2248 t(\u00b0C) + 273.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-b-q17",
    prompt: "A black car parked in the sun often feels hotter because dark surfaces\u2026",
    options: [
      { id: "a", text: "Absorb more radiation" },
      { id: "b", text: "Reflect all radiation" },
      { id: "c", text: "Create rain" },
      { id: "d", text: "Stop convection forever" }
    ],
    answerId: "a",
    explanation: "Dark surfaces are good absorbers of radiant heat.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-b-q18",
    prompt: "Heat capacity ideas: for the same heat input, a larger mass of water shows\u2026",
    options: [
      { id: "a", text: "An always larger rise" },
      { id: "b", text: "A smaller temperature rise" },
      { id: "c", text: "No effect of mass" },
      { id: "d", text: "Instant boiling always" }
    ],
    answerId: "b",
    explanation: "More mass needs more heat for the same \u0394T.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-b-q19",
    prompt: "Cooking pots often have copper/aluminium bottoms because metals\u2026",
    options: [
      { id: "a", text: "Insulate perfectly" },
      { id: "b", text: "Stay cold always" },
      { id: "c", text: "Conduct heat well to the food" },
      { id: "d", text: "Block all heat" }
    ],
    answerId: "c",
    explanation: "Good conductors spread heat evenly for cooking.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-b-q20",
    prompt: "The kink in a clinical thermometer is near the\u2026",
    options: [
      { id: "a", text: "Top tip only" },
      { id: "b", text: "Digital screen" },
      { id: "c", text: "Battery" },
      { id: "d", text: "Bulb" }
    ],
    answerId: "d",
    explanation: "Constriction is just above the bulb.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-b-q21",
    prompt: "Which statement is true?",
    options: [
      { id: "a", text: "Heat and temperature are related but not the same" },
      { id: "b", text: "Heat and temperature are identical" },
      { id: "c", text: "Temperature is a form of mass" },
      { id: "d", text: "Heat is measured in metres" }
    ],
    answerId: "a",
    explanation: "Temperature is a measure of hotness; heat is energy transferred.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-b-q22",
    prompt: "In convection, warmer fluid rises because it becomes\u2026",
    options: [
      { id: "a", text: "More dense always" },
      { id: "b", text: "Less dense" },
      { id: "c", text: "Solid" },
      { id: "d", text: "Magnetic" }
    ],
    answerId: "b",
    explanation: "Heating expands fluid, lowering density so it rises.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-b-q23",
    prompt: "A wire gauze on a Bunsen burner helps\u2026",
    options: [
      { id: "a", text: "Cool the flame to ice" },
      { id: "b", text: "Remove oxygen" },
      { id: "c", text: "Spread heat for even heating of glassware" },
      { id: "d", text: "Measure mass" }
    ],
    answerId: "c",
    explanation: "It distributes heat under a beaker.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-heat-b-q24",
    prompt: "Which is a poor conductor of heat?",
    options: [
      { id: "a", text: "Iron" },
      { id: "b", text: "Copper" },
      { id: "c", text: "Aluminium" },
      { id: "d", text: "Air" }
    ],
    answerId: "d",
    explanation: "Air is a good insulator when trapped.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83c\udf21\ufe0f",
    title: "Heat",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "water-cycle",
    speak: "Heat flows from hotter to colder. Conduction, convection and radiation move it.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "water-cycle",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Temperature", reveal: "How hot or cold", emoji: "\ud83c\udf21\ufe0f" },
      { label: "Conduction", reveal: "Through solids by contact", emoji: "\ud83d\udd17" },
      { label: "Convection", reveal: "By moving fluids", emoji: "\ud83d\udca8" },
      { label: "Radiation", reveal: "Needs no medium", emoji: "\u2600\ufe0f" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Heat transfer that needs no medium?",
    options: [
        { id: "a", text: "Conduction" },
        { id: "b", text: "Radiation" },
        { id: "c", text: "Convection" },
        { id: "d", text: "Osmosis" }
    ],
    answerId: "b",
    why: "Radiation can travel through vacuum.",
    visual: "water-cycle",
    speak: "Heat transfer that needs no medium?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Heat \u2260 temperature", "Three transfer modes", "Conductors vs insulators", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g7ScienceHeat: ChapterDef = {
  id: "heat",
  title: "Heat",
  emoji: "\ud83c\udf21\ufe0f",
  blurb: "Temperature and heat transfer",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "forces-energy",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "forces-energy",
      questions: SET_B,
    },
  ],
  paperTopics: ["forces-energy", "materials"],
};

export const g7ScienceHeatQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
