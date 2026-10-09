import type { ChapterDef, PrepQuestion } from "../types";

/** Matter in Our Surroundings - authored olympiad-style content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g9-sci-matter-a-q01",
    prompt: "Matter is anything that has…",
    options: [
      { id: "a", text: "only colour" },
      { id: "b", text: "mass and occupies space" },
      { id: "c", text: "only smell" },
      { id: "d", text: "only taste" }
    ],
    answerId: "b",
    explanation: "Matter has mass and occupies space.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-a-q02",
    prompt: "In which state are particles most loosely packed and free to move far apart?",
    options: [
      { id: "a", text: "solid" },
      { id: "b", text: "liquid" },
      { id: "c", text: "gas" },
      { id: "d", text: "all equal" }
    ],
    answerId: "c",
    explanation: "Gas particles are farthest apart and move freely.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-a-q03",
    prompt: "The change of a liquid into vapour at any temperature below boiling point is…",
    options: [
      { id: "a", text: "melting" },
      { id: "b", text: "evaporation" },
      { id: "c", text: "sublimation" },
      { id: "d", text: "condensation" }
    ],
    answerId: "b",
    explanation: "Evaporation occurs at the surface below boiling point.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-a-q04",
    prompt: "Dry ice (solid CO₂) changing directly to gas is…",
    options: [
      { id: "a", text: "melting" },
      { id: "b", text: "freezing" },
      { id: "c", text: "sublimation" },
      { id: "d", text: "evaporation" }
    ],
    answerId: "c",
    explanation: "Solid → gas directly is sublimation.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-a-q05",
    prompt: "Which has a definite shape and definite volume?",
    options: [
      { id: "a", text: "gas" },
      { id: "b", text: "liquid" },
      { id: "c", text: "solid" },
      { id: "d", text: "plasma only in stars" }
    ],
    answerId: "c",
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
      { id: "b", text: "to convert unit mass of liquid to vapour at constant temperature" },
      { id: "c", text: "to melt any solid" },
      { id: "d", text: "stored only in solids" }
    ],
    answerId: "b",
    explanation: "It is heat to change liquid → vapour without temperature change (per unit mass).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-a-q08",
    prompt: "Cooling caused by evaporation happens because…",
    options: [
      { id: "a", text: "higher-energy particles leave, lowering average kinetic energy of the rest" },
      { id: "b", text: "particles stop moving completely" },
      { id: "c", text: "mass of liquid increases" },
      { id: "d", text: "volume becomes exactly zero" }
    ],
    answerId: "a",
    explanation: "Faster particles escape; remaining liquid has lower average kinetic energy → cooler.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-a-q09",
    prompt: "Which factor increases the rate of evaporation?",
    options: [
      { id: "a", text: "decreasing surface area" },
      { id: "b", text: "increasing humidity" },
      { id: "c", text: "increasing wind speed" },
      { id: "d", text: "decreasing temperature" }
    ],
    answerId: "c",
    explanation: "Wind removes vapour, speeding further evaporation.",
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
      { id: "b", text: "kelvin" },
      { id: "c", text: "calorie" },
      { id: "d", text: "pascal" }
    ],
    answerId: "b",
    explanation: "SI unit of thermodynamic temperature is kelvin.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-a-q12",
    prompt: "0°C equals how many kelvin?",
    options: [
      { id: "a", text: "0 K" },
      { id: "b", text: "100 K" },
      { id: "c", text: "273 K" },
      { id: "d", text: "373 K" }
    ],
    answerId: "c",
    explanation: "T(K) = t(°C) + 273 (approx. 273.15).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-a-q13",
    prompt: "Interparticle forces are strongest in…",
    options: [
      { id: "a", text: "gases" },
      { id: "b", text: "liquids" },
      { id: "c", text: "solids" },
      { id: "d", text: "vacuums" }
    ],
    answerId: "c",
    explanation: "Solids have the strongest forces and least particle motion freedom.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-a-q14",
    prompt: "Condensation is the change from…",
    options: [
      { id: "a", text: "liquid to solid" },
      { id: "b", text: "gas to liquid" },
      { id: "c", text: "solid to gas" },
      { id: "d", text: "liquid to gas" }
    ],
    answerId: "b",
    explanation: "Gas → liquid is condensation.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-a-q15",
    prompt: "Which is NOT a characteristic of particles of matter?",
    options: [
      { id: "a", text: "they have spaces between them" },
      { id: "b", text: "they are continuously moving" },
      { id: "c", text: "they attract each other" },
      { id: "d", text: "they are always at absolute rest in liquids" }
    ],
    answerId: "d",
    explanation: "Particles move in all states; they are not at absolute rest in liquids.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-a-q16",
    prompt: "Humidity high means evaporation is…",
    options: [
      { id: "a", text: "faster" },
      { id: "b", text: "slower" },
      { id: "c", text: "unchanged always" },
      { id: "d", text: "impossible" }
    ],
    answerId: "b",
    explanation: "Air already holds much vapour, so net evaporation slows.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-a-q17",
    prompt: "Melting point of ice at standard pressure is…",
    options: [
      { id: "a", text: "100°C" },
      { id: "b", text: "0°C" },
      { id: "c", text: "−273°C" },
      { id: "d", text: "37°C" }
    ],
    answerId: "b",
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
      { id: "b", text: "evaporation through porous walls" },
      { id: "c", text: "condensation inside only" },
      { id: "d", text: "sublimation of clay" }
    ],
    answerId: "b",
    explanation: "Porous pots allow evaporation that cools the remaining water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-a-q20",
    prompt: "Plasma (mentioned in advanced contexts) is…",
    options: [
      { id: "a", text: "a solid crystal always" },
      { id: "b", text: "an ionised gas-like state of matter" },
      { id: "c", text: "only liquid metal" },
      { id: "d", text: "identical to ice" }
    ],
    answerId: "b",
    explanation: "Plasma consists of ionised particles; often called a fourth state.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-a-q21",
    prompt: "Diffusion is fastest in…",
    options: [
      { id: "a", text: "solids" },
      { id: "b", text: "liquids" },
      { id: "c", text: "gases" },
      { id: "d", text: "all equal always" }
    ],
    answerId: "c",
    explanation: "Particles move fastest and are least packed in gases.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-a-q22",
    prompt: "During melting of ice at 0°C, temperature of the mixture…",
    options: [
      { id: "a", text: "rises steadily" },
      { id: "b", text: "falls steadily" },
      { id: "c", text: "stays constant until melting finishes" },
      { id: "d", text: "becomes 100°C at once" }
    ],
    answerId: "c",
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
      { id: "c", text: "100°C" },
      { id: "d", text: "273°C" }
    ],
    answerId: "c",
    explanation: "Water boils at 100°C at 1 atm.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g9-sci-matter-b-q01",
    prompt: "Particles of matter are…",
    options: [
      { id: "a", text: "visible easily always as separate dots to the eye" },
      { id: "b", text: "extremely small" },
      { id: "c", text: "never in motion" },
      { id: "d", text: "without spaces between them" }
    ],
    answerId: "b",
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
      { id: "b", text: "carries latent heat of vaporisation released on condensation" },
      { id: "c", text: "is denser than water" },
      { id: "d", text: "has no energy" }
    ],
    answerId: "b",
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
      { id: "b", text: "external pressure" },
      { id: "c", text: "only the container’s brand" },
      { id: "d", text: "magnetism only" }
    ],
    answerId: "b",
    explanation: "Lower pressure → lower boiling point (e.g., on mountains).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-b-q08",
    prompt: "Which statement is true?",
    options: [
      { id: "a", text: "Gases have definite shape" },
      { id: "b", text: "Solids are highly compressible" },
      { id: "c", text: "Liquids flow and take container shape" },
      { id: "d", text: "Particles in solids never vibrate" }
    ],
    answerId: "c",
    explanation: "Liquids flow; solids vibrate about fixed positions; gases lack definite shape.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-b-q09",
    prompt: "Sponge is compressible though solid because…",
    options: [
      { id: "a", text: "it has no particles" },
      { id: "b", text: "it has tiny holes filled with air" },
      { id: "c", text: "it is a liquid" },
      { id: "d", text: "it is a gas" }
    ],
    answerId: "b",
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
      { id: "b", text: "absolute zero (−273°C approx.)" },
      { id: "c", text: "100°C" },
      { id: "d", text: "32°F only" }
    ],
    answerId: "b",
    explanation: "0 K is absolute zero ≈ −273°C.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-b-q12",
    prompt: "Which change is physical?",
    options: [
      { id: "a", text: "burning paper" },
      { id: "b", text: "rusting iron" },
      { id: "c", text: "melting wax" },
      { id: "d", text: "digesting food" }
    ],
    answerId: "c",
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
      { id: "b", text: "liquids" },
      { id: "c", text: "gases" },
      { id: "d", text: "ice only" }
    ],
    answerId: "c",
    explanation: "Gas particles interact least strongly.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-b-q15",
    prompt: "At the melting point, solid and liquid…",
    options: [
      { id: "a", text: "cannot coexist" },
      { id: "b", text: "can coexist in equilibrium" },
      { id: "c", text: "must both be gases" },
      { id: "d", text: "have zero mass" }
    ],
    answerId: "b",
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
      { id: "a", text: "ice is denser" },
      { id: "b", text: "ice is less dense than liquid water" },
      { id: "c", text: "ice has no mass" },
      { id: "d", text: "water has no particles" }
    ],
    answerId: "b",
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
      { id: "a", text: "diffusion" },
      { id: "b", text: "sedimentation" },
      { id: "c", text: "filtration" },
      { id: "d", text: "distillation always" }
    ],
    answerId: "a",
    explanation: "Diffusion is spontaneous mixing of particles.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-b-q20",
    prompt: "To convert 25°C to kelvin…",
    options: [
      { id: "a", text: "subtract 273" },
      { id: "b", text: "add 273" },
      { id: "c", text: "multiply by 273" },
      { id: "d", text: "divide by 273" }
    ],
    answerId: "b",
    explanation: "K ≈ °C + 273 → 298 K.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-b-q21",
    prompt: "Which best explains why liquids can be poured?",
    options: [
      { id: "a", text: "particles are fixed in place rigidly" },
      { id: "b", text: "particles can move past one another while staying close" },
      { id: "c", text: "particles are infinitely far apart" },
      { id: "d", text: "there are no forces at all" }
    ],
    answerId: "b",
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
      { id: "a", text: "latent heat of fusion" },
      { id: "b", text: "latent heat of vaporisation" },
      { id: "c", text: "specific heat only" },
      { id: "d", text: "solar constant" }
    ],
    answerId: "a",
    explanation: "Latent heat of fusion is for solid ↔ liquid.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-matter-b-q24",
    prompt: "Matter around us exists mainly in…",
    options: [
      { id: "a", text: "one state only" },
      { id: "b", text: "three common states: solid, liquid, gas" },
      { id: "c", text: "only plasma" },
      { id: "d", text: "only vapour" }
    ],
    answerId: "b",
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
