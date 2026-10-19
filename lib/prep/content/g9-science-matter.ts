import type { ChapterDef, PrepQuestion } from "../types";

/** Matter in Our Surroundings - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g9-sci-matter-a-q01",
    prompt: "Matter is anything that has…",
    options: [
      { id: "a", text: "mass and occupies space" },
      { id: "b", text: "only colour" },
      { id: "c", text: "only smell" },
      { id: "d", text: "only taste" }
    ],
    answerId: "a",
    explanation: "Matter has mass and occupies space.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-a-q02",
    prompt: "In which state are particles most loosely packed and free to move far apart?",
    options: [
      { id: "a", text: "solid" },
      { id: "b", text: "gas" },
      { id: "c", text: "liquid" },
      { id: "d", text: "all equal" }
    ],
    answerId: "b",
    explanation: "Gas particles are farthest apart and move freely.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-a-q03",
    prompt: "The change of a liquid into vapour at any temperature below boiling point is…",
    options: [
      { id: "a", text: "melting" },
      { id: "b", text: "sublimation" },
      { id: "c", text: "evaporation" },
      { id: "d", text: "condensation" }
    ],
    answerId: "c",
    explanation: "Evaporation occurs at the surface below boiling point.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-a-q04",
    prompt: "Dry ice (solid CO₂) changing directly to gas is…",
    options: [
      { id: "a", text: "melting" },
      { id: "b", text: "freezing" },
      { id: "c", text: "evaporation" },
      { id: "d", text: "sublimation" }
    ],
    answerId: "d",
    explanation: "Solid → gas directly is sublimation.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-a-q05",
    prompt: "Which has a definite shape and definite volume?",
    options: [
      { id: "a", text: "solid" },
      { id: "b", text: "gas" },
      { id: "c", text: "liquid" },
      { id: "d", text: "plasma only in stars" }
    ],
    answerId: "a",
    explanation: "Solids keep shape and volume.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-a-q06",
    prompt: "Boiling occurs…",
    options: [
      { id: "a", text: "only at the surface" },
      { id: "b", text: "throughout the bulk of the liquid at a fixed temperature (for given pressure)" },
      { id: "c", text: "only in solids" },
      { id: "d", text: "without heat" }
    ],
    answerId: "b",
    explanation: "Boiling is bulk vaporisation at the boiling point for a given pressure.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-a-q07",
    prompt: "Latent heat of vaporisation is the heat…",
    options: [
      { id: "a", text: "to raise temperature of vapour by 1°C" },
      { id: "b", text: "to melt any solid" },
      { id: "c", text: "to convert unit mass of liquid to vapour at constant temperature" },
      { id: "d", text: "stored only in solids" }
    ],
    answerId: "c",
    explanation: "It is heat to change liquid → vapour without temperature change (per unit mass).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-a-q08",
    prompt: "Cooling caused by evaporation happens because…",
    options: [
      { id: "a", text: "particles stop moving completely" },
      { id: "b", text: "mass of liquid increases" },
      { id: "c", text: "volume becomes exactly zero" },
      { id: "d", text: "higher-energy particles leave, lowering average kinetic energy of the rest" }
    ],
    answerId: "d",
    explanation: "Faster particles escape; remaining liquid has lower average kinetic energy → cooler.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-a-q09",
    prompt: "Which change DECREASES the rate of evaporation?",
    options: [
      { id: "a", text: "an increase in humidity" },
      { id: "b", text: "an increase in temperature" },
      { id: "c", text: "an increase in surface area" },
      { id: "d", text: "an increase in wind speed" }
    ],
    answerId: "a",
    explanation: "When the air already holds a lot of water vapour (high humidity), it takes up more vapour slowly, so evaporation slows. Temperature, surface area and wind speed all speed evaporation up when they increase.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-a-q10",
    prompt: "Liquids have…",
    options: [
      { id: "a", text: "definite shape and volume" },
      { id: "b", text: "definite volume but no definite shape" },
      { id: "c", text: "neither shape nor volume" },
      { id: "d", text: "definite shape only" }
    ],
    answerId: "b",
    explanation: "Liquids take container shape but keep volume.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-a-q11",
    prompt: "The SI unit of temperature commonly converted from Celsius in science is…",
    options: [
      { id: "a", text: "fahrenheit only" },
      { id: "b", text: "calorie" },
      { id: "c", text: "kelvin" },
      { id: "d", text: "pascal" }
    ],
    answerId: "c",
    explanation: "SI unit of thermodynamic temperature is kelvin.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-a-q12",
    prompt: "A spoon of sugar is stirred into 50 mL of water until it dissolves, and the water level hardly rises. This shows that particles of matter \u2014",
    options: [
      { id: "a", text: "are always at rest" },
      { id: "b", text: "have no mass" },
      { id: "c", text: "attract each other strongly" },
      { id: "d", text: "have spaces between them" }
    ],
    answerId: "d",
    explanation: "The sugar particles fit into the spaces between the water particles, so the volume hardly increases. Particles do attract each other, but attraction alone does not explain how the sugar fits in without raising the level.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-a-q13",
    prompt: "Interparticle forces are strongest in…",
    options: [
      { id: "a", text: "solids" },
      { id: "b", text: "gases" },
      { id: "c", text: "liquids" },
      { id: "d", text: "vacuums" }
    ],
    answerId: "a",
    explanation: "Solids have the strongest forces and least particle motion freedom.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-a-q14",
    prompt: "Water droplets form on the outside of a glass of iced water. This is because…",
    options: [
      { id: "a", text: "water leaks through the glass" },
      { id: "b", text: "water vapour in the air condenses on the cold glass" },
      { id: "c", text: "the ice evaporates through the glass" },
      { id: "d", text: "the glass gives out water, like sweat" }
    ],
    answerId: "b",
    explanation: "Water vapour in the air cools on the cold surface and condenses into droplets. “Water leaks through the glass” is tempting, but glass is not porous, and the drops even appear when the glass holds only ice.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-a-q15",
    prompt: "Which is NOT a characteristic of particles of matter?",
    options: [
      { id: "a", text: "they have spaces between them" },
      { id: "b", text: "they are continuously moving" },
      { id: "c", text: "they are always at absolute rest in liquids" },
      { id: "d", text: "they attract each other" }
    ],
    answerId: "c",
    explanation: "Particles move in all states; they are not at absolute rest in liquids.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-a-q16",
    prompt: "Humidity high means evaporation is…",
    options: [
      { id: "a", text: "faster" },
      { id: "b", text: "unchanged always" },
      { id: "c", text: "impossible" },
      { id: "d", text: "slower" }
    ],
    answerId: "d",
    explanation: "Air already holds much vapour, so net evaporation slows.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-a-q17",
    prompt: "Melting point of ice at standard pressure is…",
    options: [
      { id: "a", text: "0°C" },
      { id: "b", text: "100°C" },
      { id: "c", text: "−273°C" },
      { id: "d", text: "37°C" }
    ],
    answerId: "a",
    explanation: "Ice melts at 0°C at standard atmospheric pressure.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-a-q18",
    prompt: "A gas can be liquefied by…",
    options: [
      { id: "a", text: "increasing temperature only" },
      { id: "b", text: "applying pressure and/or lowering temperature" },
      { id: "c", text: "removing all mass" },
      { id: "d", text: "painting it blue" }
    ],
    answerId: "b",
    explanation: "Cooling and compressing favour liquefaction.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-a-q19",
    prompt: "Which process cools a clay pot of water?",
    options: [
      { id: "a", text: "water freezing solid instantly" },
      { id: "b", text: "condensation inside only" },
      { id: "c", text: "evaporation through porous walls" },
      { id: "d", text: "sublimation of clay" }
    ],
    answerId: "c",
    explanation: "Porous pots allow evaporation that cools the remaining water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-a-q20",
    prompt: "Plasma (mentioned in advanced contexts) is…",
    options: [
      { id: "a", text: "a solid crystal always" },
      { id: "b", text: "only liquid metal" },
      { id: "c", text: "identical to ice" },
      { id: "d", text: "an ionised gas-like state of matter" }
    ],
    answerId: "d",
    explanation: "Plasma consists of ionised particles; often called a fourth state.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-a-q21",
    prompt: "Diffusion is fastest in…",
    options: [
      { id: "a", text: "gases" },
      { id: "b", text: "solids" },
      { id: "c", text: "liquids" },
      { id: "d", text: "all equal always" }
    ],
    answerId: "a",
    explanation: "Particles move fastest and are least packed in gases.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-a-q22",
    prompt: "During melting of ice at 0°C, temperature of the mixture…",
    options: [
      { id: "a", text: "rises steadily" },
      { id: "b", text: "stays constant until melting finishes" },
      { id: "c", text: "falls steadily" },
      { id: "d", text: "becomes 100°C at once" }
    ],
    answerId: "b",
    explanation: "Heat goes into latent heat; temperature plateaus during the phase change.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-a-q23",
    prompt: "Which has the highest fluidity?",
    options: [
      { id: "a", text: "iron rod" },
      { id: "b", text: "honey at room temperature" },
      { id: "c", text: "oxygen gas" },
      { id: "d", text: "ice cube" }
    ],
    answerId: "c",
    explanation: "Gases flow most freely; solids do not flow as fluids in ordinary sense.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-a-q24",
    prompt: "The boiling point of water at standard atmospheric pressure is…",
    options: [
      { id: "a", text: "0°C" },
      { id: "b", text: "50°C" },
      { id: "c", text: "273°C" },
      { id: "d", text: "100°C" }
    ],
    answerId: "d",
    explanation: "Water boils at 100°C at 1 atm.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g9-sci-matter-b-q01",
    prompt: "Particles of matter are…",
    options: [
      { id: "a", text: "extremely small" },
      { id: "b", text: "visible easily always as separate dots to the eye" },
      { id: "c", text: "never in motion" },
      { id: "d", text: "without spaces between them" }
    ],
    answerId: "a",
    explanation: "Particles are too small to see individually; they move and have spaces.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-b-q02",
    prompt: "Naphthalene balls disappear over time mainly by…",
    options: [
      { id: "a", text: "melting to liquid first always" },
      { id: "b", text: "sublimation" },
      { id: "c", text: "condensation" },
      { id: "d", text: "freezing" }
    ],
    answerId: "b",
    explanation: "Naphthalene sublimes: solid → vapour.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-b-q03",
    prompt: "Which state can be compressed the most easily?",
    options: [
      { id: "a", text: "solid" },
      { id: "b", text: "liquid" },
      { id: "c", text: "gas" },
      { id: "d", text: "all identical" }
    ],
    answerId: "c",
    explanation: "Large spaces between gas particles allow easy compression.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-b-q04",
    prompt: "Steam at 100°C causes more severe burns than water at 100°C mainly because steam…",
    options: [
      { id: "a", text: "has lower temperature" },
      { id: "b", text: "is denser than water" },
      { id: "c", text: "has no energy" },
      { id: "d", text: "carries latent heat of vaporisation released on condensation" }
    ],
    answerId: "d",
    explanation: "Condensing steam releases latent heat in addition to cooling.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-b-q05",
    prompt: "The process of a gas changing into a solid without becoming liquid is…",
    options: [
      { id: "a", text: "deposition (sometimes taught with sublimation reverse)" },
      { id: "b", text: "melting" },
      { id: "c", text: "boiling" },
      { id: "d", text: "evaporation" }
    ],
    answerId: "a",
    explanation: "Gas → solid directly is deposition (reverse of sublimation).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-b-q06",
    prompt: "Increasing surface area of a liquid…",
    options: [
      { id: "a", text: "decreases evaporation rate" },
      { id: "b", text: "increases evaporation rate" },
      { id: "c", text: "stops all motion" },
      { id: "d", text: "changes boiling point to 0 always" }
    ],
    answerId: "b",
    explanation: "More surface → more molecules can escape per time.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-b-q07",
    prompt: "A liquid’s boiling point depends on…",
    options: [
      { id: "a", text: "colour only" },
      { id: "b", text: "only the container’s brand" },
      { id: "c", text: "external pressure" },
      { id: "d", text: "magnetism only" }
    ],
    answerId: "c",
    explanation: "Lower pressure → lower boiling point (e.g., on mountains).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-b-q08",
    prompt: "Which statement about the states of matter is true?",
    options: [
      { id: "a", text: "Gases have definite shape" },
      { id: "b", text: "Solids are highly compressible" },
      { id: "c", text: "Particles in solids never vibrate" },
      { id: "d", text: "Liquids flow and take container shape" }
    ],
    answerId: "d",
    explanation: "Liquids flow; solids vibrate about fixed positions; gases lack definite shape.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-b-q09",
    prompt: "Sponge is compressible though solid because…",
    options: [
      { id: "a", text: "it has tiny holes filled with air" },
      { id: "b", text: "it has no particles" },
      { id: "c", text: "it is a liquid" },
      { id: "d", text: "it is a gas" }
    ],
    answerId: "a",
    explanation: "Air pockets compress; the material itself is solid.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-b-q10",
    prompt: "When we smell perfume from across a room, the process is mainly…",
    options: [
      { id: "a", text: "sedimentation" },
      { id: "b", text: "diffusion" },
      { id: "c", text: "sublimation of glass" },
      { id: "d", text: "centrifugation" }
    ],
    answerId: "b",
    explanation: "Perfume vapour mixes through air by diffusion.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-b-q11",
    prompt: "Kelvin scale starts at…",
    options: [
      { id: "a", text: "0°C" },
      { id: "b", text: "100°C" },
      { id: "c", text: "absolute zero (−273°C approx.)" },
      { id: "d", text: "32°F only" }
    ],
    answerId: "c",
    explanation: "0 K is absolute zero ≈ −273°C.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-b-q12",
    prompt: "Which change is physical?",
    options: [
      { id: "a", text: "burning paper" },
      { id: "b", text: "rusting iron" },
      { id: "c", text: "digesting food" },
      { id: "d", text: "melting wax" }
    ],
    answerId: "d",
    explanation: "Melting wax changes state, not chemical identity.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-b-q13",
    prompt: "Evaporation causes cooling; this helps…",
    options: [
      { id: "a", text: "sweating cool the body" },
      { id: "b", text: "ice form faster always in deserts" },
      { id: "c", text: "boiling without heat" },
      { id: "d", text: "solids expand forever" }
    ],
    answerId: "a",
    explanation: "Sweat evaporates, taking heat from skin.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-b-q14",
    prompt: "The force of attraction between particles is weakest in…",
    options: [
      { id: "a", text: "solids" },
      { id: "b", text: "gases" },
      { id: "c", text: "liquids" },
      { id: "d", text: "ice only" }
    ],
    answerId: "b",
    explanation: "Gas particles interact least strongly.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-b-q15",
    prompt: "At the melting point, solid and liquid…",
    options: [
      { id: "a", text: "cannot coexist" },
      { id: "b", text: "must both be gases" },
      { id: "c", text: "can coexist in equilibrium" },
      { id: "d", text: "have zero mass" }
    ],
    answerId: "c",
    explanation: "During melting, both phases can be present at the melting temperature.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-b-q16",
    prompt: "Which factor does NOT increase evaporation rate?",
    options: [
      { id: "a", text: "higher temperature" },
      { id: "b", text: "more wind" },
      { id: "c", text: "larger surface area" },
      { id: "d", text: "higher humidity" }
    ],
    answerId: "d",
    explanation: "Higher humidity slows evaporation.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-b-q17",
    prompt: "Ice floats on water because…",
    options: [
      { id: "a", text: "ice is less dense than liquid water" },
      { id: "b", text: "ice is denser" },
      { id: "c", text: "ice has no mass" },
      { id: "d", text: "water has no particles" }
    ],
    answerId: "a",
    explanation: "Open structure of ice makes it less dense than water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-b-q18",
    prompt: "The temperature at which a liquid starts boiling (at given pressure) is its…",
    options: [
      { id: "a", text: "melting point" },
      { id: "b", text: "boiling point" },
      { id: "c", text: "freezing point only if gas" },
      { id: "d", text: "flash point always same as melting" }
    ],
    answerId: "b",
    explanation: "Boiling point is that characteristic temperature for the liquid at that pressure.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-b-q19",
    prompt: "Intermixing of particles of two different types of matter on their own is…",
    options: [
      { id: "a", text: "filtration" },
      { id: "b", text: "evaporation" },
      { id: "c", text: "diffusion" },
      { id: "d", text: "sublimation" }
    ],
    answerId: "c",
    explanation: "Diffusion is the intermixing of particles of two different types of matter on their own, because the particles keep moving. Evaporation is tempting because it also happens on its own, but it is particles of one liquid escaping from its surface into the air, not two kinds of matter mixing. Filtration is a separation method and sublimation is a change of state (solid to gas).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-b-q20",
    prompt: "To convert 25°C to kelvin…",
    options: [
      { id: "a", text: "subtract 273" },
      { id: "b", text: "multiply by 273" },
      { id: "c", text: "divide by 273" },
      { id: "d", text: "add 273" }
    ],
    answerId: "d",
    explanation: "K ≈ °C + 273 → 298 K.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-b-q21",
    prompt: "Which best explains why liquids can be poured?",
    options: [
      { id: "a", text: "particles can move past one another while staying close" },
      { id: "b", text: "particles are fixed in place rigidly" },
      { id: "c", text: "particles are infinitely far apart" },
      { id: "d", text: "there are no forces at all" }
    ],
    answerId: "a",
    explanation: "Liquid particles move/slide while cohesive enough to keep volume.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-b-q22",
    prompt: "Camphor disappears from a dish mainly due to…",
    options: [
      { id: "a", text: "filtration" },
      { id: "b", text: "sublimation" },
      { id: "c", text: "sedimentation" },
      { id: "d", text: "condensation into the dish" }
    ],
    answerId: "b",
    explanation: "Camphor sublimes into vapour.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-b-q23",
    prompt: "Heat required to change 1 kg of solid to liquid at melting point is called…",
    options: [
      { id: "a", text: "latent heat of vaporisation" },
      { id: "b", text: "specific heat only" },
      { id: "c", text: "latent heat of fusion" },
      { id: "d", text: "solar constant" }
    ],
    answerId: "c",
    explanation: "Latent heat of fusion is for solid ↔ liquid.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-b-q24",
    prompt: "Matter around us exists mainly in…",
    options: [
      { id: "a", text: "one state only" },
      { id: "b", text: "only plasma" },
      { id: "c", text: "only vapour" },
      { id: "d", text: "three common states: solid, liquid, gas" }
    ],
    answerId: "d",
    explanation: "School science focuses on solid, liquid and gas.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "☁️",
    title: "Matter around us",
    body: ["Everything that has mass and occupies space is matter.", "Particles, states and latent heat explain everyday changes.", "Lesson is optional; jump to a set anytime."],
    cta: "Let's go!",
    visual: "atom-lite",
    speak: "States of matter, particle model, and changes like evaporation.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "atom-lite",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Particles", reveal: "Tiny, moving, with spaces and forces", emoji: "•" },
      { label: "States", reveal: "Solid, liquid, gas — packing differs", emoji: "🧊" },
      { label: "Evaporation", reveal: "Surface vaporisation that cools", emoji: "💨" },
      { label: "Latent heat", reveal: "Heat for phase change without temperature rise", emoji: "🔥" }
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: "Why sweat cools you",
    visual: "atom-lite",
    speak: "Faster particles leave as vapour, so the remaining sweat is cooler.",
    steps: ["Skin is wet with sweat", "Energetic particles evaporate", "Average energy of remaining liquid drops", "You feel cooler"],
    punchline: "Evaporation is a cooling process.",
  },
  {
    id: "t1",
    type: "try",
    title: "Your turn",
    prompt: "Solid to gas directly is called…",
    options: [
        { id: "a", text: "melting" },
        { id: "b", text: "sublimation" },
        { id: "c", text: "condensation" },
        { id: "d", text: "boiling" }
    ],
    answerId: "b",
    why: "Sublimation skips the liquid state.",
    visual: "atom-lite",
    speak: "Solid to gas directly is called…",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Matter mapper!",
    bullets: ["States differ by packing", "Boiling ≠ evaporation", "Latent heat hides in phase change", "Set A and Set B ready — 24 MCQs each"],
    cta: "Back to chapter",
    speak: "Matter mapper! You are ready for the practice sets.",
  },
];

export const g9ScienceMatter: ChapterDef = {
  id: "matter-surroundings",
  title: "Matter in Our Surroundings",
  emoji: "☁️",
  blurb: "States, particles & changes of state",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "materials",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "materials",
      questions: SET_B,
    },
  ],
  paperTopics: ["materials", "forces-energy"],
};

export const g9ScienceMatterQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
