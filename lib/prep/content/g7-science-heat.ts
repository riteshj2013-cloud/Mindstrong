import type { ChapterDef, PrepQuestion } from "../types";

/** Heat - original olympiad-style content (not affiliated with SOF). */

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
    prompt: "The SI unit of temperature is the…",
    options: [
      { id: "a", text: "Kilogram" },
      { id: "b", text: "Newton" },
      { id: "c", text: "Kelvin (K)" },
      { id: "d", text: "Pascal" }
    ],
    answerId: "c",
    explanation: "The SI unit of temperature is the kelvin (K); Celsius is used a lot in labs, but it is not the SI unit. Pascal is tempting because it is also an SI unit, but it measures pressure, just as the kilogram measures mass and the newton measures force.",
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
      { id: "d", text: "212 °C" }
    ],
    answerId: "a",
    explanation: "Pure water boils at 100 °C at standard pressure. 212 is tempting because it is the boiling point of water on the Fahrenheit scale (212 °F), not the Celsius scale.",
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
    prompt: "Look at the metal rod. Transfer of heat in solids without bulk movement of particles is mainly…",
    options: [
      { id: "a", text: "Convection" },
      { id: "b", text: "Radiation only" },
      { id: "c", text: "Conduction" },
      { id: "d", text: "Evaporation" }
    ],
    answerId: "c",
    explanation: "Heat is passed from particle to particle in the metal, without the rod flowing. “Convection” is tempting because it is another common heat transfer, but convection needs a fluid that can move in bulk.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A metal rod is held over a stand. A flame heats the left end. Four small wax drops sit along the top of the rod.\">\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n<text x=\"160\" y=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">A metal rod and a flame</text>\n  <line x1=\"40\" y1=\"160\" x2=\"280\" y2=\"160\" stroke=\"#333\" stroke-width=\"2\" fill=\"none\"/>\n  <line x1=\"70\" y1=\"160\" x2=\"70\" y2=\"120\" stroke=\"#333\" stroke-width=\"2\" fill=\"none\"/>\n  <line x1=\"250\" y1=\"160\" x2=\"250\" y2=\"120\" stroke=\"#333\" stroke-width=\"2\" fill=\"none\"/>\n  <rect x=\"60\" y=\"112\" width=\"200\" height=\"10\" fill=\"#94a3b8\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <polygon points=\"48,112 36,150 60,150\" fill=\"#f97316\" stroke=\"#b45309\" stroke-width=\"1\"/>\n  <polygon points=\"48,118 42,142 54,142\" fill=\"#facc15\" stroke=\"#ca8a04\" stroke-width=\"1\"/>\n  <text x=\"48\" y=\"100\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"400\" fill=\"#222\">flame</text>\n  <text x=\"150\" y=\"100\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"400\" fill=\"#222\">rod</text>\n  <circle cx=\"120\" cy=\"108\" r=\"4\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/>\n  <circle cx=\"160\" cy=\"108\" r=\"4\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/>\n  <circle cx=\"200\" cy=\"108\" r=\"4\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/>\n  <circle cx=\"240\" cy=\"108\" r=\"4\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/>\n  <text x=\"160\" y=\"200\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">Wax drops sit along the rod</text>\n</svg>", "alt": "A metal rod is held over a stand. A flame heats the left end. Four small wax drops sit along the top of the rod."}
  },
  {
    id: "g7-sci-heat-a-q08",
    prompt: "Look at the pot of water. Heat transfer by movement of a fluid is…",
    options: [
      { id: "a", text: "Conduction only" },
      { id: "b", text: "Reflection" },
      { id: "c", text: "Condensation" },
      { id: "d", text: "Convection" }
    ],
    answerId: "d",
    explanation: "Warm water rises and cooler water sinks, so the heat is carried by convection. “Conduction only” is tempting because the pot is solid, but the question asks about heat carried by the moving fluid.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A pot of water sits over a flame. Arrows show water rising in the middle and sinking at the sides.\">\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n<text x=\"160\" y=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">A pot of water over a flame</text>\n  <rect x=\"90\" y=\"50\" width=\"140\" height=\"110\" fill=\"none\" stroke=\"#333\" stroke-width=\"2\"/>\n  <rect x=\"92\" y=\"80\" width=\"136\" height=\"78\" fill=\"#93c5fd\" stroke=\"#1e40af\" stroke-width=\"1\" opacity=\"0.4\"/>\n  <polygon points=\"160,162 140,202 180,202\" fill=\"#f97316\" stroke=\"#b45309\" stroke-width=\"1\"/>\n  <polygon points=\"160,170 150,196 170,196\" fill=\"#facc15\" stroke=\"#ca8a04\" stroke-width=\"1\"/>\n  <line x1=\"160\" y1=\"145\" x2=\"160\" y2=\"90\" stroke=\"#b91c1c\" stroke-width=\"2.5\" fill=\"none\"/>  <polyline points=\"164.0,98.0 160,90 156.0,98.0\" stroke=\"#b91c1c\" stroke-width=\"2.5\" fill=\"none\"/>\n  <line x1=\"200\" y1=\"95\" x2=\"200\" y2=\"145\" stroke=\"#1d4ed8\" stroke-width=\"1.5\" fill=\"none\"/>  <polyline points=\"196.5,138.0 200,145 203.5,138.0\" stroke=\"#1d4ed8\" stroke-width=\"1.5\" fill=\"none\"/>\n  <line x1=\"120\" y1=\"95\" x2=\"120\" y2=\"145\" stroke=\"#1d4ed8\" stroke-width=\"1.5\" fill=\"none\"/>  <polyline points=\"116.5,138.0 120,145 123.5,138.0\" stroke=\"#1d4ed8\" stroke-width=\"1.5\" fill=\"none\"/>\n  <text x=\"160\" y=\"214\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">Water moves in a loop above the flame</text>\n</svg>", "alt": "A pot of water sits over a flame. Arrows show water rising in the middle and sinking at the sides."}
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
      { id: "c", text: "Very poor" },
      { id: "d", text: "Average" }
    ],
    answerId: "b",
    explanation: "Metals conduct heat well, which is why a steel pan heats up fast. 'Poor' or 'Very poor' is tempting if you think of a cool metal spoon, but those words describe wood and plastic, which is why pan handles are made of them.",
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
    prompt: "Look at the land and sea on a sunny day. Sea breeze occurs mainly…",
    options: [
      { id: "a", text: "During day when land heats faster than sea" },
      { id: "b", text: "Only at midnight" },
      { id: "c", text: "Only underground" },
      { id: "d", text: "In a vacuum" }
    ],
    answerId: "a",
    explanation: "In the daytime the land heats faster than the sea, so cooler sea air moves toward the land. “Only at midnight” is tempting if day and night are reversed, but at night the land cools faster and the breeze can blow the other way.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A sunny daytime scene: a sea on the left and land on the right, with the sun above and an arrow from the sea toward the land.\">\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n<text x=\"160\" y=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">Land and sea on a sunny day</text>\n  <circle cx=\"60\" cy=\"40\" r=\"14\" fill=\"#facc15\" stroke=\"#ca8a04\" stroke-width=\"2\"/>\n  <rect x=\"20\" y=\"110\" width=\"140\" height=\"70\" fill=\"#38bdf8\" stroke=\"#0369a1\" stroke-width=\"1.5\"/>\n  <text x=\"90\" y=\"150\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">sea</text>\n  <rect x=\"160\" y=\"110\" width=\"140\" height=\"70\" fill=\"#fde68a\" stroke=\"#a16207\" stroke-width=\"1.5\"/>\n  <text x=\"230\" y=\"150\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">land</text>\n  <line x1=\"70\" y1=\"100\" x2=\"230\" y2=\"100\" stroke=\"#1d4ed8\" stroke-width=\"2\" fill=\"none\"/>  <polyline points=\"222.0,104.0 230,100 222.0,96.0\" stroke=\"#1d4ed8\" stroke-width=\"2\" fill=\"none\"/>\n  <text x=\"160\" y=\"208\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">The sun shines on both land and sea</text>\n</svg>", "alt": "A sunny daytime scene: a sea on the left and land on the right, with the sun above and an arrow from the sea toward the land."}
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
    prompt: "Look at the cut-away flask. In a thermos flask, the vacuum mainly reduces heat transfer by…",
    options: [
      { id: "a", text: "Radiation only completely alone" },
      { id: "b", text: "Sound" },
      { id: "c", text: "Magnetism" },
      { id: "d", text: "Conduction and convection" }
    ],
    answerId: "d",
    explanation: "The gap has almost no particles, so conduction and convection are greatly reduced. “Radiation only completely alone” is tempting because silvering also cuts radiation, but the vacuum itself mainly stops the two methods that need a material medium.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A cut-away flask with a stopper, an inner wall holding a liquid, and a gap between the inner and outer walls.\">\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n<text x=\"160\" y=\"18\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">A cut-away flask</text>\n  <path d=\"M 110 50 L 110 170 Q 160 200 210 170 L 210 50\" fill=\"none\" stroke=\"#333\" stroke-width=\"3\"/>\n  <path d=\"M 124 62 L 124 162 Q 160 186 196 162 L 196 62\" fill=\"#e0f2fe\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text x=\"160\" y=\"120\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">gap</text>\n  <rect x=\"132\" y=\"38\" width=\"56\" height=\"24\" fill=\"#78716c\" stroke=\"#333\" stroke-width=\"1.5\" rx=\"3\"/>\n  <text x=\"160\" y=\"54\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"400\" fill=\"#fff\">stopper</text>\n  <text x=\"160\" y=\"210\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">A flask with a double wall and a stopper</text>\n</svg>", "alt": "A cut-away flask with a stopper, an inner wall holding a liquid, and a gap between the inner and outer walls."}
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
    prompt: "Look at the rails. Gaps left between railway tracks help with…",
    options: [
      { id: "a", text: "Magnetic trains only" },
      { id: "b", text: "Cooling tea" },
      { id: "c", text: "Soundproofing only" },
      { id: "d", text: "Thermal expansion of rails" }
    ],
    answerId: "d",
    explanation: "Rails get longer on a hot day; the gaps give them room so the track does not buckle. “Soundproofing only” is tempting because a gap might seem to break a noise path, but that is not why the gaps are left.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Two railway rails run across wooden sleepers. Small labelled gaps are left between lengths of rail.\">\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n<text x=\"160\" y=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">Rails on a track</text>\n  <rect x=\"20\" y=\"130\" width=\"28\" height=\"10\" fill=\"#a16207\" stroke=\"#78350f\" stroke-width=\"1\"/>\n  <rect x=\"56\" y=\"130\" width=\"28\" height=\"10\" fill=\"#a16207\" stroke=\"#78350f\" stroke-width=\"1\"/>\n  <rect x=\"92\" y=\"130\" width=\"28\" height=\"10\" fill=\"#a16207\" stroke=\"#78350f\" stroke-width=\"1\"/>\n  <rect x=\"128\" y=\"130\" width=\"28\" height=\"10\" fill=\"#a16207\" stroke=\"#78350f\" stroke-width=\"1\"/>\n  <rect x=\"164\" y=\"130\" width=\"28\" height=\"10\" fill=\"#a16207\" stroke=\"#78350f\" stroke-width=\"1\"/>\n  <rect x=\"200\" y=\"130\" width=\"28\" height=\"10\" fill=\"#a16207\" stroke=\"#78350f\" stroke-width=\"1\"/>\n  <rect x=\"236\" y=\"130\" width=\"28\" height=\"10\" fill=\"#a16207\" stroke=\"#78350f\" stroke-width=\"1\"/>\n  <rect x=\"272\" y=\"130\" width=\"28\" height=\"10\" fill=\"#a16207\" stroke=\"#78350f\" stroke-width=\"1\"/>\n  <rect x=\"20\" y=\"100\" width=\"80\" height=\"10\" fill=\"#64748b\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <rect x=\"112\" y=\"100\" width=\"80\" height=\"10\" fill=\"#64748b\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <rect x=\"204\" y=\"100\" width=\"96\" height=\"10\" fill=\"#64748b\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <rect x=\"20\" y=\"118\" width=\"80\" height=\"10\" fill=\"#64748b\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <rect x=\"112\" y=\"118\" width=\"80\" height=\"10\" fill=\"#64748b\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <rect x=\"204\" y=\"118\" width=\"96\" height=\"10\" fill=\"#64748b\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <text x=\"106\" y=\"92\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"400\" fill=\"#222\">gap</text>\n  <text x=\"198\" y=\"92\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"400\" fill=\"#222\">gap</text>\n  <text x=\"160\" y=\"200\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">Small spaces are left between rail lengths</text>\n</svg>", "alt": "Two railway rails run across wooden sleepers. Small labelled gaps are left between lengths of rail."}
  },
  {
    id: "g7-sci-heat-a-q21",
    prompt: "Look at the thermometer. A clinical thermometer usually has a kink (constriction) to…",
    options: [
      { id: "a", text: "Prevent mercury from falling back quickly before reading" },
      { id: "b", text: "Heat the room" },
      { id: "c", text: "Measure wind speed" },
      { id: "d", text: "Store vaccines" }
    ],
    answerId: "a",
    explanation: "The narrow kink stops the liquid running back into the bulb too quickly, so the reading can be taken after the thermometer leaves the mouth. Measure wind speed is unrelated to this instrument.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A clinical thermometer with a bulb at the left and a narrow bend marked P just after the bulb. A liquid thread runs along the stem.\">\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n<text x=\"160\" y=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">A clinical thermometer</text>\n  <rect x=\"40\" y=\"100\" width=\"230\" height=\"14\" fill=\"#e0f2fe\" stroke=\"#333\" stroke-width=\"2\" rx=\"4\"/>\n  <rect x=\"70\" y=\"104\" width=\"140\" height=\"6\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/>\n  <circle cx=\"40\" cy=\"107\" r=\"16\" fill=\"#b91c1c\" stroke=\"#333\" stroke-width=\"2\"/>\n  <path d=\"M 70 100 Q 78 88 86 100\" fill=\"none\" stroke=\"#333\" stroke-width=\"2\"/>\n  <path d=\"M 70 114 Q 78 126 86 114\" fill=\"none\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text x=\"78\" y=\"84\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#111\">P</text>\n  <text x=\"160\" y=\"200\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">A narrow bend is marked P, near the bulb</text>\n</svg>", "alt": "A clinical thermometer with a bulb at the left and a narrow bend marked P just after the bulb. A liquid thread runs along the stem."}
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
    prompt: "Look at the four samples. Which is the best conductor among these?",
    options: [
      { id: "a", text: "Copper" },
      { id: "b", text: "Wood" },
      { id: "c", text: "Plastic" },
      { id: "d", text: "Air" }
    ],
    answerId: "a",
    explanation: "Copper is a metal and lets heat pass through quickly, so it is the best conductor of the four. Wood is tempting because it is also a solid, but it is a poor conductor and is used for handles for that reason.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Four samples labelled P, Q, R and S, made of copper, wood, plastic and air, each held over a small flame.\">\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n<text x=\"160\" y=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">Four samples in a flame</text>\n  <rect x=\"48\" y=\"50\" width=\"12\" height=\"100\" fill=\"#b45309\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <polygon points=\"54,150 42,190 66,190\" fill=\"#f97316\" stroke=\"#b45309\" stroke-width=\"1\"/>\n  <text x=\"54\" y=\"48\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#111\">P</text>\n  <text x=\"54\" y=\"210\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"400\" fill=\"#222\">copper</text>\n  <rect x=\"118\" y=\"50\" width=\"12\" height=\"100\" fill=\"#c4a574\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <polygon points=\"124,150 112,190 136,190\" fill=\"#f97316\" stroke=\"#b45309\" stroke-width=\"1\"/>\n  <text x=\"124\" y=\"48\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#111\">Q</text>\n  <text x=\"124\" y=\"210\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"400\" fill=\"#222\">wood</text>\n  <rect x=\"188\" y=\"50\" width=\"12\" height=\"100\" fill=\"#93c5fd\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <polygon points=\"194,150 182,190 206,190\" fill=\"#f97316\" stroke=\"#b45309\" stroke-width=\"1\"/>\n  <text x=\"194\" y=\"48\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#111\">R</text>\n  <text x=\"194\" y=\"210\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"400\" fill=\"#222\">plastic</text>\n  <rect x=\"250\" y=\"50\" width=\"28\" height=\"100\" fill=\"#e0f2fe\" stroke=\"#333\" stroke-width=\"1.5\" rx=\"4\"/>\n  <polygon points=\"264,150 252,190 276,190\" fill=\"#f97316\" stroke=\"#b45309\" stroke-width=\"1\"/>\n  <text x=\"264\" y=\"48\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#111\">S</text>\n  <text x=\"264\" y=\"210\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"400\" fill=\"#222\">air</text>\n</svg>", "alt": "Four samples labelled P, Q, R and S, made of copper, wood, plastic and air, each held over a small flame."}
  },
  {
    id: "g7-sci-heat-b-q02",
    prompt: "Look at the air above the heater. Convection currents in air explain…",
    options: [
      { id: "a", text: "Why metals are shiny" },
      { id: "b", text: "Why warm air rises near a heater" },
      { id: "c", text: "Why ice is solid" },
      { id: "d", text: "Why light needs wires" }
    ],
    answerId: "b",
    explanation: "Heated air expands, becomes less dense and rises, which is what the arrows above the heater show. Why metals are shiny is about the surface of a solid, not about moving air.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A room heater sits on the floor. A red arrow shows air rising from the heater; blue arrows show air sinking at the sides.\">\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n<text x=\"160\" y=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">Air above a heater</text>\n  <rect x=\"20\" y=\"40\" width=\"280\" height=\"150\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"2\"/>\n  <rect x=\"130\" y=\"140\" width=\"60\" height=\"40\" fill=\"#f97316\" stroke=\"#9a3412\" stroke-width=\"1.5\" rx=\"4\"/>\n  <text x=\"160\" y=\"164\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"400\" fill=\"#fff\">heater</text>\n  <line x1=\"160\" y1=\"136\" x2=\"160\" y2=\"60\" stroke=\"#b91c1c\" stroke-width=\"2\" fill=\"none\"/>  <polyline points=\"164.0,68.0 160,60 156.0,68.0\" stroke=\"#b91c1c\" stroke-width=\"2\" fill=\"none\"/>\n  <line x1=\"130\" y1=\"70\" x2=\"80\" y2=\"120\" stroke=\"#1d4ed8\" stroke-width=\"1.5\" fill=\"none\"/>  <polyline points=\"82.1,113.6 80,120 86.4,117.9\" stroke=\"#1d4ed8\" stroke-width=\"1.5\" fill=\"none\"/>\n  <line x1=\"190\" y1=\"70\" x2=\"240\" y2=\"120\" stroke=\"#1d4ed8\" stroke-width=\"1.5\" fill=\"none\"/>  <polyline points=\"233.6,117.9 240,120 237.9,113.6\" stroke=\"#1d4ed8\" stroke-width=\"1.5\" fill=\"none\"/>\n  <text x=\"160\" y=\"210\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">Air moves above a room heater</text>\n</svg>", "alt": "A room heater sits on the floor. A red arrow shows air rising from the heater; blue arrows show air sinking at the sides."}
  },
  {
    id: "g7-sci-heat-b-q03",
    prompt: "Look at the person beside the fire. We feel heat from a fire even to the side mainly by…",
    options: [
      { id: "a", text: "Conduction through the air" },
      { id: "b", text: "Convection currents in the air" },
      { id: "c", text: "Radiation" },
      { id: "d", text: "Magnetism" }
    ],
    answerId: "c",
    explanation: "Radiant heat travels out in straight lines, including to the side of the fire. Convection currents in the air is tempting, but the hot air itself rises above the fire rather than travelling sideways to the person.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A campfire stands on the left. A person stands to the right, away from the fire. Wavy lines travel from the fire toward the person. There is no closed loop of air.\">\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n<text x=\"160\" y=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">A person beside a fire</text>\n  <polygon points=\"70,160 50,200 90,200\" fill=\"#f97316\" stroke=\"#b45309\" stroke-width=\"1\"/>\n  <polygon points=\"70,168 60,196 80,196\" fill=\"#facc15\" stroke=\"#ca8a04\" stroke-width=\"1\"/>\n  <rect x=\"52\" y=\"198\" width=\"36\" height=\"8\" fill=\"#78350f\" stroke=\"#451a03\" stroke-width=\"1\" rx=\"2\"/>\n  <path d=\"M 90 150 Q 110 140 130 150\" fill=\"none\" stroke=\"#ea580c\" stroke-width=\"1.5\"/>\n  <path d=\"M 95 165 Q 115 155 140 165\" fill=\"none\" stroke=\"#ea580c\" stroke-width=\"1.5\"/>\n  <path d=\"M 90 180 Q 110 170 130 180\" fill=\"none\" stroke=\"#ea580c\" stroke-width=\"1.5\"/>\n  <circle cx=\"210\" cy=\"120\" r=\"12\" fill=\"#fde68a\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line x1=\"210\" y1=\"132\" x2=\"210\" y2=\"175\" stroke=\"#333\" stroke-width=\"2\" fill=\"none\"/>\n  <line x1=\"210\" y1=\"145\" x2=\"190\" y2=\"160\" stroke=\"#333\" stroke-width=\"2\" fill=\"none\"/>\n  <line x1=\"210\" y1=\"145\" x2=\"230\" y2=\"160\" stroke=\"#333\" stroke-width=\"2\" fill=\"none\"/>\n  <line x1=\"210\" y1=\"175\" x2=\"196\" y2=\"200\" stroke=\"#333\" stroke-width=\"2\" fill=\"none\"/>\n  <line x1=\"210\" y1=\"175\" x2=\"224\" y2=\"200\" stroke=\"#333\" stroke-width=\"2\" fill=\"none\"/>\n  <text x=\"70\" y=\"214\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">fire</text>\n  <text x=\"210\" y=\"214\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">person</text>\n</svg>", "alt": "A campfire stands on the left. A person stands to the right, away from the fire. Wavy lines travel from the fire toward the person. There is no closed loop of air."}
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
    prompt: "Look at the air over land and sea. A sea breeze is an example of heat transfer by…",
    options: [
      { id: "a", text: "Convection" },
      { id: "b", text: "Conduction through steel rails only" },
      { id: "c", text: "Radiation in a vacuum flask only" },
      { id: "d", text: "Latent heat of fusion only" }
    ],
    answerId: "a",
    explanation: "A whole mass of air moves from the sea toward the land, so the heat is transferred by convection. Conduction through steel rails is a different situation and needs contact in a solid, not moving air.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A sunny scene of sea and land. A lower arrow points from the sea toward the land, and a higher arrow points from the land back toward the sea.\">\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n<text x=\"160\" y=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">Air over land and sea</text>\n  <circle cx=\"40\" cy=\"36\" r=\"12\" fill=\"#facc15\" stroke=\"#ca8a04\" stroke-width=\"2\"/>\n  <rect x=\"16\" y=\"120\" width=\"140\" height=\"70\" fill=\"#38bdf8\" stroke=\"#0369a1\" stroke-width=\"1.5\"/>\n  <text x=\"86\" y=\"160\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">sea</text>\n  <rect x=\"164\" y=\"120\" width=\"140\" height=\"70\" fill=\"#fde68a\" stroke=\"#a16207\" stroke-width=\"1.5\"/>\n  <text x=\"234\" y=\"160\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">land</text>\n  <line x1=\"70\" y1=\"112\" x2=\"230\" y2=\"112\" stroke=\"#1d4ed8\" stroke-width=\"2\" fill=\"none\"/>  <polyline points=\"222.0,116.0 230,112 222.0,108.0\" stroke=\"#1d4ed8\" stroke-width=\"2\" fill=\"none\"/>\n  <line x1=\"230\" y1=\"70\" x2=\"70\" y2=\"70\" stroke=\"#b91c1c\" stroke-width=\"2\" fill=\"none\"/>  <polyline points=\"78.0,66.0 70,70 78.0,74.0\" stroke=\"#b91c1c\" stroke-width=\"2\" fill=\"none\"/>\n  <text x=\"160\" y=\"210\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">Air moves in a loop on a sunny day</text>\n</svg>", "alt": "A sunny scene of sea and land. A lower arrow points from the sea toward the land, and a higher arrow points from the land back toward the sea."}
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
      { id: "a", text: "Slow evaporation from the surface only, below the boiling point" },
      { id: "b", text: "Freezing" },
      { id: "c", text: "Melting of ice only" },
      { id: "d", text: "Rapid vaporisation throughout the liquid at a fixed temperature (at given pressure)" }
    ],
    answerId: "d",
    explanation: "Boiling is rapid vaporisation all through the liquid at its boiling point. Surface evaporation is tempting because liquid turns to vapour in both, but evaporation is slow, happens only at the surface and can happen below the boiling point.",
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
    prompt: "Look at the thermometer. The kink in a clinical thermometer is near the…",
    options: [
      { id: "a", text: "Top tip only" },
      { id: "b", text: "Digital screen" },
      { id: "c", text: "Battery" },
      { id: "d", text: "Bulb" }
    ],
    answerId: "d",
    explanation: "The constriction sits just above the bulb, where the liquid is stored. 'Top tip only' is tempting because it is the other end of the tube, but the kink is next to the bulb.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A clinical thermometer. A rounded end is marked end A. A narrow kink sits just beside that end. The far tip is marked end B.\">\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n<text x=\"160\" y=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">A clinical thermometer</text>\n  <rect x=\"50\" y=\"100\" width=\"220\" height=\"14\" fill=\"#e0f2fe\" stroke=\"#333\" stroke-width=\"2\" rx=\"4\"/>\n  <rect x=\"86\" y=\"104\" width=\"130\" height=\"6\" fill=\"#b91c1c\" stroke=\"none\" stroke-width=\"0\"/>\n  <circle cx=\"50\" cy=\"107\" r=\"16\" fill=\"#b91c1c\" stroke=\"#333\" stroke-width=\"2\"/>\n  <path d=\"M 78 100 Q 86 88 94 100\" fill=\"none\" stroke=\"#333\" stroke-width=\"2\"/>\n  <path d=\"M 78 114 Q 86 126 94 114\" fill=\"none\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text x=\"50\" y=\"80\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">end A</text>\n  <text x=\"86\" y=\"80\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">kink</text>\n  <text x=\"250\" y=\"80\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">end B</text>\n  <text x=\"160\" y=\"200\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">A narrow bend sits close to one end</text>\n</svg>", "alt": "A clinical thermometer. A rounded end is marked end A. A narrow kink sits just beside that end. The far tip is marked end B."}
  },
  {
    id: "g7-sci-heat-b-q21",
    prompt: "Which statement about heat and temperature is true?",
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
    prompt: "Look at the four samples. Which is a poor conductor of heat?",
    options: [
      { id: "a", text: "Iron" },
      { id: "b", text: "Copper" },
      { id: "c", text: "Aluminium" },
      { id: "d", text: "Air" }
    ],
    answerId: "d",
    explanation: "Air is a poor conductor of heat, especially when it is trapped. Iron is tempting because it is one of the four samples, but like the other metals it lets heat pass fairly quickly.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Four samples in a row: a bar of iron, a bar of copper, a bar of aluminium, and a jar labelled air.\">\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n<text x=\"160\" y=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">Four samples</text>\n  <rect x=\"24\" y=\"60\" width=\"44\" height=\"100\" fill=\"#64748b\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text x=\"46\" y=\"180\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">iron</text>\n  <rect x=\"102\" y=\"60\" width=\"44\" height=\"100\" fill=\"#b45309\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text x=\"124\" y=\"180\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">copper</text>\n  <rect x=\"180\" y=\"60\" width=\"44\" height=\"100\" fill=\"#cbd5e1\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <text x=\"202\" y=\"180\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">aluminium</text>\n  <rect x=\"258\" y=\"60\" width=\"44\" height=\"100\" fill=\"#e0f2fe\" stroke=\"#333\" stroke-width=\"1.5\" rx=\"4\"/>\n  <text x=\"280\" y=\"110\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"400\" fill=\"#222\"> </text>\n  <text x=\"280\" y=\"180\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">air</text>\n  <text x=\"160\" y=\"210\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">Three metal bars and a jar of air</text>\n</svg>", "alt": "Four samples in a row: a bar of iron, a bar of copper, a bar of aluminium, and a jar labelled air."}
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
