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
    prompt: "Boxes P, Q and R show the particles of three substances. In which box are the particles most loosely packed and free to move far apart?",
    options: [
      { id: "a", text: "Box P" },
      { id: "b", text: "Box Q" },
      { id: "c", text: "Box R" },
      { id: "d", text: "All three are the same" }
    ],
    answerId: "b",
    explanation: "In box Q the particles are few and far apart, and the arrows show them moving freely in all directions: this is a gas. Box R shows a liquid, whose particles also move about but stay close together.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Three boxes of particles. Box P: particles packed in neat touching rows. Box Q: a few particles far apart, each with an arrow showing it moving. Box R: particles close together but in an untidy jumble at the bottom.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"12\" y=\"40\" width=\"92\" height=\"92\" fill=\"#ffffff\" stroke=\"#1f2937\" stroke-width=\"2\"/><circle cx=\"24\" cy=\"54\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><circle cx=\"40\" cy=\"54\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><circle cx=\"56\" cy=\"54\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><circle cx=\"72\" cy=\"54\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><circle cx=\"88\" cy=\"54\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><circle cx=\"24\" cy=\"70\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><circle cx=\"40\" cy=\"70\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><circle cx=\"56\" cy=\"70\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><circle cx=\"72\" cy=\"70\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><circle cx=\"88\" cy=\"70\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><circle cx=\"24\" cy=\"86\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><circle cx=\"40\" cy=\"86\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><circle cx=\"56\" cy=\"86\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><circle cx=\"72\" cy=\"86\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><circle cx=\"88\" cy=\"86\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><circle cx=\"24\" cy=\"102\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><circle cx=\"40\" cy=\"102\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><circle cx=\"56\" cy=\"102\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><circle cx=\"72\" cy=\"102\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><circle cx=\"88\" cy=\"102\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><circle cx=\"24\" cy=\"118\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><circle cx=\"40\" cy=\"118\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><circle cx=\"56\" cy=\"118\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><circle cx=\"72\" cy=\"118\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><circle cx=\"88\" cy=\"118\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><rect x=\"114\" y=\"40\" width=\"92\" height=\"92\" fill=\"#ffffff\" stroke=\"#1f2937\" stroke-width=\"2\"/><circle cx=\"131.25\" cy=\"58.4\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><line x1=\"138.1782032302755\" y1=\"62.4\" x2=\"147.70448267190434\" y2=\"67.89999999999999\" stroke=\"#1f2937\" stroke-width=\"1.4\" stroke-linecap=\"round\"/><polygon points=\"152,70.4 146.3,70.3 149.1,65.5\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><circle cx=\"181.08333333333331\" cy=\"63.92\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><line x1=\"173.56579236704604\" y1=\"66.65616114660536\" x2=\"163.22917353840108\" y2=\"70.4183827231877\" stroke=\"#1f2937\" stroke-width=\"1.4\" stroke-linecap=\"round\"/><polygon points=\"158.5,72.1 162.3,67.8 164.2,73\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><circle cx=\"156.16666666666666\" cy=\"91.52000000000001\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><line x1=\"153.4305055200613\" y1=\"84.00245903371274\" x2=\"149.66828394347897\" y2=\"73.66584020506775\" stroke=\"#1f2937\" stroke-width=\"1.4\" stroke-linecap=\"round\"/><polygon points=\"148,69 152.3,72.7 147.1,74.6\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><circle cx=\"190.66666666666669\" cy=\"111.76\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><line x1=\"189.27748124533124\" y1=\"119.63846202409766\" x2=\"187.367351290995\" y2=\"130.47134730723198\" stroke=\"#1f2937\" stroke-width=\"1.4\" stroke-linecap=\"round\"/><polygon points=\"186.5,135.4 184.7,130 190.1,130.9\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><circle cx=\"133.16666666666666\" cy=\"117.28\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><line x1=\"139.2950222116185\" y1=\"112.13769912250768\" x2=\"147.72151108592723\" y2=\"105.06703541595574\" stroke=\"#1f2937\" stroke-width=\"1.4\" stroke-linecap=\"round\"/><polygon points=\"151.6,101.9 149.5,107.2 146,103\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><rect x=\"216\" y=\"40\" width=\"92\" height=\"92\" fill=\"#ffffff\" stroke=\"#1f2937\" stroke-width=\"2\"/><circle cx=\"229.41666666666666\" cy=\"95.2\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><circle cx=\"242.83333333333334\" cy=\"100.72\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><circle cx=\"256.25\" cy=\"93.36\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><circle cx=\"271.5833333333333\" cy=\"98.88\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><circle cx=\"285.0\" cy=\"95.2\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><circle cx=\"235.16666666666666\" cy=\"109.92\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><circle cx=\"250.5\" cy=\"113.6\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><circle cx=\"265.8333333333333\" cy=\"109.92\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><circle cx=\"281.1666666666667\" cy=\"113.6\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><circle cx=\"294.5833333333333\" cy=\"108.08\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><circle cx=\"229.41666666666666\" cy=\"124.64\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><circle cx=\"244.75\" cy=\"126.48\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><circle cx=\"260.0833333333333\" cy=\"122.8\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><circle cx=\"275.4166666666667\" cy=\"126.48\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><circle cx=\"290.75\" cy=\"122.8\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><circle cx=\"239.0\" cy=\"82.32\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><circle cx=\"267.75\" cy=\"82.32\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><circle cx=\"296.5\" cy=\"87.84\" r=\"6.5\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"1\"/><text x=\"58\" y=\"160\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">P</text><text x=\"160\" y=\"160\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">Q</text><text x=\"262\" y=\"160\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">R</text></svg>", "alt": "Three boxes of particles. Box P: particles packed in neat touching rows. Box Q: a few particles far apart, each with an arrow showing it moving. Box R: particles close together but in an untidy jumble at the bottom."}
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
    prompt: "Substances P, Q and R are each moved from container 1 into a differently shaped container 2, as shown. Which substance has a definite shape and a definite volume?",
    options: [
      { id: "a", text: "Substance P" },
      { id: "b", text: "Substance Q" },
      { id: "c", text: "Substance R" },
      { id: "d", text: "No substance shown" }
    ],
    answerId: "a",
    explanation: "P keeps the same shape and the same volume in both containers, so it is a solid. Q keeps its volume but takes the shape of each container, so it is a liquid, which has no definite shape of its own.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Three rows. Row P: an orange block sits in a box and then in a tapered tub, keeping the same shape and size. Row Q: a blue liquid lies flat in the bottom of the box, then takes the shape of the tapered tub with the same amount. Row R: a pink gas fills the whole box and then fills the whole tub.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><text x=\"25\" y=\"22\" font-size=\"12\" text-anchor=\"start\" font-weight=\"600\" fill=\"#1f2937\">container 1</text><text x=\"205\" y=\"22\" font-size=\"12\" text-anchor=\"start\" font-weight=\"600\" fill=\"#1f2937\">container 2</text><rect x=\"62\" y=\"62\" width=\"26\" height=\"28\" fill=\"#f59e0b\" stroke=\"#92400e\" stroke-width=\"1.5\"/><rect x=\"40\" y=\"30\" width=\"70\" height=\"60\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\"/><rect x=\"232\" y=\"62\" width=\"26\" height=\"28\" fill=\"#f59e0b\" stroke=\"#92400e\" stroke-width=\"1.5\"/><path d=\"M210,30 L220,90 L270,90 L280,30\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"42\" y=\"135\" width=\"66\" height=\"18\" fill=\"#bfdbfe\" stroke=\"none\" stroke-width=\"1.5\"/><rect x=\"40\" y=\"95\" width=\"70\" height=\"60\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\"/><polygon points=\"215,127 220,153 270,153 275,127\" fill=\"#bfdbfe\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><path d=\"M210,95 L220,155 L270,155 L280,95\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"42\" y=\"162\" width=\"66\" height=\"56\" fill=\"#fce7f3\" stroke=\"none\" stroke-width=\"1.5\"/><rect x=\"40\" y=\"160\" width=\"70\" height=\"60\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\"/><circle cx=\"54\" cy=\"172\" r=\"2.8\" fill=\"#db2777\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"80\" cy=\"170\" r=\"2.8\" fill=\"#db2777\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"98\" cy=\"180\" r=\"2.8\" fill=\"#db2777\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"64\" cy=\"190\" r=\"2.8\" fill=\"#db2777\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"88\" cy=\"198\" r=\"2.8\" fill=\"#db2777\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"56\" cy=\"208\" r=\"2.8\" fill=\"#db2777\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"76\" cy=\"212\" r=\"2.8\" fill=\"#db2777\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"96\" cy=\"210\" r=\"2.8\" fill=\"#db2777\" stroke=\"none\" stroke-width=\"1.5\"/><polygon points=\"211,162 220,218 270,218 279,162\" fill=\"#fce7f3\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><path d=\"M210,160 L220,220 L270,220 L280,160\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linejoin=\"round\"/><circle cx=\"224\" cy=\"172\" r=\"2.8\" fill=\"#db2777\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"250\" cy=\"170\" r=\"2.8\" fill=\"#db2777\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"268\" cy=\"180\" r=\"2.8\" fill=\"#db2777\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"234\" cy=\"190\" r=\"2.8\" fill=\"#db2777\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"258\" cy=\"198\" r=\"2.8\" fill=\"#db2777\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"226\" cy=\"208\" r=\"2.8\" fill=\"#db2777\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"246\" cy=\"212\" r=\"2.8\" fill=\"#db2777\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"266\" cy=\"210\" r=\"2.8\" fill=\"#db2777\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"20\" y=\"64\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">P</text><text x=\"20\" y=\"129\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">Q</text><text x=\"20\" y=\"194\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">R</text><line x1=\"125\" y1=\"60\" x2=\"187.0\" y2=\"60.0\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"195,60 187,64.4 187,55.6\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"125\" y1=\"125\" x2=\"187.0\" y2=\"125.0\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"195,125 187,129.4 187,120.6\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"125\" y1=\"190\" x2=\"187.0\" y2=\"190.0\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"195,190 187,194.4 187,185.6\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/></svg>", "alt": "Three rows. Row P: an orange block sits in a box and then in a tapered tub, keeping the same shape and size. Row Q: a blue liquid lies flat in the bottom of the box, then takes the shape of the tapered tub with the same amount. Row R: a pink gas fills the whole box and then fills the whole tub."}
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
    prompt: "Washing is hung out at the same time on two different days, as the weather cards show. Which change explains why it dries more slowly on day 1?",
    options: [
      { id: "a", text: "Higher humidity" },
      { id: "b", text: "Higher temperature" },
      { id: "c", text: "Larger surface area" },
      { id: "d", text: "Stronger wind" }
    ],
    answerId: "a",
    explanation: "Temperature and wind are the same on both days; only the humidity differs. On day 1 the air already holds a lot of water vapour (85%), so it takes up more vapour slowly and evaporation is slower. A higher temperature would speed drying up, and anyway the temperature is the same on both days.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Two weather cards. Day 1: temperature 30 degrees Celsius, light breeze, humidity 85 percent. Day 2: temperature 30 degrees Celsius, light breeze, humidity 40 percent. Below each card a shirt hangs on a line; after two hours the shirt on day 1 is still dripping.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"15\" y=\"30\" width=\"135\" height=\"120\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"82\" y=\"52\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">day 1</text><text x=\"82\" y=\"80\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">temperature 30 °C</text><text x=\"82\" y=\"102\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">light breeze</text><text x=\"82\" y=\"124\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">humidity 85%</text><rect x=\"170\" y=\"30\" width=\"135\" height=\"120\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"237\" y=\"52\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">day 2</text><text x=\"237\" y=\"80\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">temperature 30 °C</text><text x=\"237\" y=\"102\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">light breeze</text><text x=\"237\" y=\"124\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">humidity 40%</text><line x1=\"15\" y1=\"168\" x2=\"150\" y2=\"168\" stroke=\"#1f2937\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"170\" y1=\"168\" x2=\"305\" y2=\"168\" stroke=\"#1f2937\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"66,168 96,168 104,178 98,182 98,205 64,205 64,182 58,178\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><circle cx=\"70\" cy=\"211\" r=\"2\" fill=\"#2563eb\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"78\" cy=\"211\" r=\"2\" fill=\"#2563eb\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"86\" cy=\"211\" r=\"2\" fill=\"#2563eb\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"94\" cy=\"211\" r=\"2\" fill=\"#2563eb\" stroke=\"none\" stroke-width=\"1.5\"/><polygon points=\"222,168 252,168 260,178 254,182 254,205 220,205 220,182 214,178\" fill=\"#e0f2fe\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><text x=\"122\" y=\"196\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">after 2 h</text><text x=\"282\" y=\"196\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">after 2 h</text></svg>", "alt": "Two weather cards. Day 1: temperature 30 degrees Celsius, light breeze, humidity 85 percent. Day 2: temperature 30 degrees Celsius, light breeze, humidity 40 percent. Below each card a shirt hangs on a line; after two hours the shirt on day 1 is still dripping."}
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
    prompt: "In the set-up shown, a gas turns into a liquid. What is being done to the gas?",
    options: [
      { id: "a", text: "It is being heated only" },
      { id: "b", text: "Pressure is being applied and it is being cooled" },
      { id: "c", text: "Its mass is being removed" },
      { id: "d", text: "It is being left open to the air" }
    ],
    answerId: "b",
    explanation: "The piston pushes down, raising the pressure and forcing the particles closer together, while the ice bath lowers the temperature so they move more slowly. Together these turn the gas into a liquid. Heating would do the opposite, making the particles move faster and spread further apart.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A sealed cylinder of gas standing in a tub of ice. A piston is being pushed down into the cylinder by a large arrow. Drops of liquid are collecting at the bottom of the cylinder.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"40\" y=\"120\" width=\"240\" height=\"80\" rx=\"4\" fill=\"#e0f2fe\" stroke=\"#475569\" stroke-width=\"2\"/><rect x=\"52\" y=\"140\" width=\"20\" height=\"18\" rx=\"3\" fill=\"#ffffff\" stroke=\"#7dd3fc\" stroke-width=\"1.2\"/><rect x=\"84\" y=\"162\" width=\"20\" height=\"18\" rx=\"3\" fill=\"#ffffff\" stroke=\"#7dd3fc\" stroke-width=\"1.2\"/><rect x=\"116\" y=\"140\" width=\"20\" height=\"18\" rx=\"3\" fill=\"#ffffff\" stroke=\"#7dd3fc\" stroke-width=\"1.2\"/><rect x=\"148\" y=\"162\" width=\"20\" height=\"18\" rx=\"3\" fill=\"#ffffff\" stroke=\"#7dd3fc\" stroke-width=\"1.2\"/><rect x=\"180\" y=\"140\" width=\"20\" height=\"18\" rx=\"3\" fill=\"#ffffff\" stroke=\"#7dd3fc\" stroke-width=\"1.2\"/><rect x=\"212\" y=\"162\" width=\"20\" height=\"18\" rx=\"3\" fill=\"#ffffff\" stroke=\"#7dd3fc\" stroke-width=\"1.2\"/><rect x=\"244\" y=\"140\" width=\"20\" height=\"18\" rx=\"3\" fill=\"#ffffff\" stroke=\"#7dd3fc\" stroke-width=\"1.2\"/><rect x=\"120\" y=\"40\" width=\"80\" height=\"150\" fill=\"#ffffff\" stroke=\"#1f2937\" stroke-width=\"2.2\"/><rect x=\"122\" y=\"80\" width=\"76\" height=\"10\" fill=\"#64748b\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><rect x=\"155\" y=\"30\" width=\"10\" height=\"50\" fill=\"#94a3b8\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><line x1=\"160\" y1=\"4\" x2=\"160.0\" y2=\"20.0\" stroke=\"#1f2937\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"160,28 155.6,20 164.4,20\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><circle cx=\"130\" cy=\"100\" r=\"4\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"0.8\"/><circle cx=\"149\" cy=\"113\" r=\"4\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"0.8\"/><circle cx=\"168\" cy=\"126\" r=\"4\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"0.8\"/><circle cx=\"187\" cy=\"139\" r=\"4\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"0.8\"/><circle cx=\"146\" cy=\"152\" r=\"4\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"0.8\"/><circle cx=\"165\" cy=\"105\" r=\"4\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"0.8\"/><circle cx=\"184\" cy=\"118\" r=\"4\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"0.8\"/><circle cx=\"143\" cy=\"131\" r=\"4\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"0.8\"/><circle cx=\"162\" cy=\"144\" r=\"4\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"0.8\"/><rect x=\"122\" y=\"176\" width=\"76\" height=\"12\" fill=\"#60a5fa\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"220\" y=\"20\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">push</text><text x=\"60\" y=\"112\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">ice</text></svg>", "alt": "A sealed cylinder of gas standing in a tub of ice. A piston is being pushed down into the cylinder by a large arrow. Drops of liquid are collecting at the bottom of the cylinder."}
  },
  {
    id: "g9-sci-matter-a-q19",
    prompt: "The picture shows a clay pot (matka) of drinking water on a hot day. Which process keeps the water inside cool?",
    options: [
      { id: "a", text: "Water freezing" },
      { id: "b", text: "Condensation inside the pot" },
      { id: "c", text: "Evaporation of water that seeps through the porous walls" },
      { id: "d", text: "Sublimation of the clay" }
    ],
    answerId: "c",
    explanation: "Water seeps through tiny pores in the clay and evaporates from the outer surface. Evaporation takes latent heat from the pot and the water in it, so the water cools. Condensation inside would give out heat and warm the water, not cool it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A round clay pot full of water, standing in hot sunshine. Small droplets of water have seeped through the clay onto its outer surface, and wavy arrows show vapour leaving the droplets into the air.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><circle cx=\"270\" cy=\"35\" r=\"16\" fill=\"#facc15\" stroke=\"#b45309\" stroke-width=\"2\"/><path d=\"M130,60 L190,60 L195,72 C260,90 260,190 160,200 C60,190 60,90 125,72 Z\" fill=\"#c2410c\" stroke=\"#7c2d12\" stroke-width=\"2\" stroke-linejoin=\"round\"/><ellipse cx=\"160\" cy=\"60\" rx=\"30\" ry=\"6\" fill=\"#7c2d12\" stroke=\"#7c2d12\" stroke-width=\"1\"/><circle cx=\"98\" cy=\"120\" r=\"3\" fill=\"#93c5fd\" stroke=\"#1d4ed8\" stroke-width=\"0.8\"/><circle cx=\"104\" cy=\"160\" r=\"3\" fill=\"#93c5fd\" stroke=\"#1d4ed8\" stroke-width=\"0.8\"/><circle cx=\"122\" cy=\"186\" r=\"3\" fill=\"#93c5fd\" stroke=\"#1d4ed8\" stroke-width=\"0.8\"/><circle cx=\"218\" cy=\"118\" r=\"3\" fill=\"#93c5fd\" stroke=\"#1d4ed8\" stroke-width=\"0.8\"/><circle cx=\"220\" cy=\"158\" r=\"3\" fill=\"#93c5fd\" stroke=\"#1d4ed8\" stroke-width=\"0.8\"/><circle cx=\"196\" cy=\"186\" r=\"3\" fill=\"#93c5fd\" stroke=\"#1d4ed8\" stroke-width=\"0.8\"/><circle cx=\"110\" cy=\"96\" r=\"3\" fill=\"#93c5fd\" stroke=\"#1d4ed8\" stroke-width=\"0.8\"/><circle cx=\"212\" cy=\"96\" r=\"3\" fill=\"#93c5fd\" stroke=\"#1d4ed8\" stroke-width=\"0.8\"/><path d=\"M80,120 q-6,-6 0,-12 q6,-6 0,-12\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><line x1=\"80\" y1=\"96\" x2=\"80.0\" y2=\"93.0\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"80,88 82.8,93 77.2,93\" fill=\"#64748b\" stroke=\"#64748b\" stroke-width=\"1\" stroke-linejoin=\"round\"/><path d=\"M240,120 q-6,-6 0,-12 q6,-6 0,-12\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><line x1=\"240\" y1=\"96\" x2=\"240.0\" y2=\"93.0\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"240,88 242.8,93 237.2,93\" fill=\"#64748b\" stroke=\"#64748b\" stroke-width=\"1\" stroke-linejoin=\"round\"/><path d=\"M86,165 q-6,-6 0,-12 q6,-6 0,-12\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><line x1=\"86\" y1=\"141\" x2=\"86.0\" y2=\"138.0\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"86,133 88.8,138 83.2,138\" fill=\"#64748b\" stroke=\"#64748b\" stroke-width=\"1\" stroke-linejoin=\"round\"/><path d=\"M238,165 q-6,-6 0,-12 q6,-6 0,-12\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><line x1=\"238\" y1=\"141\" x2=\"238.0\" y2=\"138.0\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polygon points=\"238,133 240.8,138 235.2,138\" fill=\"#64748b\" stroke=\"#64748b\" stroke-width=\"1\" stroke-linejoin=\"round\"/><text x=\"160\" y=\"135\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#ffffff\">water</text></svg>", "alt": "A round clay pot full of water, standing in hot sunshine. Small droplets of water have seeped through the clay onto its outer surface, and wavy arrows show vapour leaving the droplets into the air."}
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
    prompt: "The graph shows the temperature of ice heated steadily from −10 °C. What happens to the temperature during part QR?",
    options: [
      { id: "a", text: "It rises steadily" },
      { id: "b", text: "It stays constant until melting finishes" },
      { id: "c", text: "It falls steadily" },
      { id: "d", text: "It jumps to 100 °C at once" }
    ],
    answerId: "b",
    explanation: "Part QR is flat at 0 °C: the heat supplied is used as latent heat of fusion to break up the ice's particle arrangement, not to raise the temperature, so it stays constant until all the ice has melted. It does not rise steadily: that happens only in the sloping parts PQ and RS.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A graph of temperature against time for ice heated steadily. The line rises from P at minus 10 degrees Celsius to Q at 0 degrees, stays flat from Q to R at 0 degrees, rises from R to S at 100 degrees, then stays flat from S to T.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><line x1=\"50\" y1=\"175\" x2=\"298.0\" y2=\"175.0\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"305,175 298,178.8 298,171.2\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"50\" y1=\"175\" x2=\"50.0\" y2=\"27.0\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"50,20 53.9,27 46.1,27\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"46\" y1=\"160\" x2=\"50\" y2=\"160\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"43\" y=\"164\" font-size=\"11\" text-anchor=\"end\" font-weight=\"500\" fill=\"#1f2937\">−10</text><line x1=\"46\" y1=\"145\" x2=\"50\" y2=\"145\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"43\" y=\"149\" font-size=\"11\" text-anchor=\"end\" font-weight=\"500\" fill=\"#1f2937\">0</text><line x1=\"46\" y1=\"45\" x2=\"50\" y2=\"45\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"43\" y=\"49\" font-size=\"11\" text-anchor=\"end\" font-weight=\"500\" fill=\"#1f2937\">100</text><text x=\"305\" y=\"205\" font-size=\"12\" text-anchor=\"end\" font-weight=\"600\" fill=\"#1f2937\">time</text><text x=\"44\" y=\"14\" font-size=\"12\" text-anchor=\"start\" font-weight=\"600\" fill=\"#1f2937\">temperature (°C)</text><polyline points=\"50,160 85,145 150,145 220,45 290,45\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"50\" cy=\"160\" r=\"3.5\" fill=\"#dc2626\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"64\" y=\"176\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">P</text><circle cx=\"85\" cy=\"145\" r=\"3.5\" fill=\"#dc2626\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"85\" y=\"136\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">Q</text><circle cx=\"150\" cy=\"145\" r=\"3.5\" fill=\"#dc2626\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"152\" y=\"136\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">R</text><circle cx=\"220\" cy=\"45\" r=\"3.5\" fill=\"#dc2626\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"220\" y=\"36\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">S</text><circle cx=\"290\" cy=\"45\" r=\"3.5\" fill=\"#dc2626\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"290\" y=\"36\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">T</text></svg>", "alt": "A graph of temperature against time for ice heated steadily. The line rises from P at minus 10 degrees Celsius to Q at 0 degrees, stays flat from Q to R at 0 degrees, rises from R to S at 100 degrees, then stays flat from S to T."}
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
    prompt: "Three syringes, sealed at the tip, contain chalk, water and air, as shown. The plungers are pushed with the same force. Which syringe's contents can be compressed most easily?",
    options: [
      { id: "a", text: "Syringe 1" },
      { id: "b", text: "Syringe 2" },
      { id: "c", text: "Syringe 3" },
      { id: "d", text: "All three equally" }
    ],
    answerId: "c",
    explanation: "Syringe 3 holds air, a gas, with large spaces between its particles, so pushing squeezes them closer and the plunger moves in a long way. Water in syringe 2 is a liquid: its particles are already close together, so it hardly compresses at all.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Three syringes with sealed tips, each with an arrow pushing the plunger. Syringe 1 is packed with a stick of chalk, syringe 2 is full of water, and syringe 3 holds only air.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"60\" y=\"25\" width=\"170\" height=\"34\" fill=\"#ffffff\" stroke=\"#1f2937\" stroke-width=\"2\"/><rect x=\"40\" y=\"37\" width=\"20\" height=\"10\" fill=\"#e5e7eb\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><rect x=\"36\" y=\"33\" width=\"6\" height=\"18\" fill=\"#475569\" stroke=\"#1f2937\" stroke-width=\"1\"/><rect x=\"62\" y=\"27\" width=\"120\" height=\"30\" fill=\"#f5f5f4\" stroke=\"#a8a29e\" stroke-width=\"1\"/><rect x=\"182\" y=\"27\" width=\"8\" height=\"30\" fill=\"#64748b\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><rect x=\"190\" y=\"38\" width=\"70\" height=\"8\" fill=\"#94a3b8\" stroke=\"#1f2937\" stroke-width=\"1\"/><rect x=\"260\" y=\"28\" width=\"8\" height=\"28\" fill=\"#64748b\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><line x1=\"300\" y1=\"42\" x2=\"282.0\" y2=\"42.0\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"274,42 282,37.6 282,46.4\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><text x=\"20\" y=\"47\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">1</text><rect x=\"60\" y=\"92\" width=\"170\" height=\"34\" fill=\"#ffffff\" stroke=\"#1f2937\" stroke-width=\"2\"/><rect x=\"40\" y=\"104\" width=\"20\" height=\"10\" fill=\"#e5e7eb\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><rect x=\"36\" y=\"100\" width=\"6\" height=\"18\" fill=\"#475569\" stroke=\"#1f2937\" stroke-width=\"1\"/><rect x=\"62\" y=\"94\" width=\"120\" height=\"30\" fill=\"#bfdbfe\" stroke=\"none\" stroke-width=\"1.5\"/><rect x=\"182\" y=\"94\" width=\"8\" height=\"30\" fill=\"#64748b\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><rect x=\"190\" y=\"105\" width=\"70\" height=\"8\" fill=\"#94a3b8\" stroke=\"#1f2937\" stroke-width=\"1\"/><rect x=\"260\" y=\"95\" width=\"8\" height=\"28\" fill=\"#64748b\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><line x1=\"300\" y1=\"109\" x2=\"282.0\" y2=\"109.0\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"274,109 282,104.6 282,113.4\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><text x=\"20\" y=\"114\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">2</text><rect x=\"60\" y=\"159\" width=\"170\" height=\"34\" fill=\"#ffffff\" stroke=\"#1f2937\" stroke-width=\"2\"/><rect x=\"40\" y=\"171\" width=\"20\" height=\"10\" fill=\"#e5e7eb\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><rect x=\"36\" y=\"167\" width=\"6\" height=\"18\" fill=\"#475569\" stroke=\"#1f2937\" stroke-width=\"1\"/><circle cx=\"70\" cy=\"169\" r=\"2.5\" fill=\"#94a3b8\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"86\" cy=\"183\" r=\"2.5\" fill=\"#94a3b8\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"102\" cy=\"169\" r=\"2.5\" fill=\"#94a3b8\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"118\" cy=\"183\" r=\"2.5\" fill=\"#94a3b8\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"134\" cy=\"169\" r=\"2.5\" fill=\"#94a3b8\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"150\" cy=\"183\" r=\"2.5\" fill=\"#94a3b8\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"166\" cy=\"169\" r=\"2.5\" fill=\"#94a3b8\" stroke=\"none\" stroke-width=\"1.5\"/><rect x=\"182\" y=\"161\" width=\"8\" height=\"30\" fill=\"#64748b\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><rect x=\"190\" y=\"172\" width=\"70\" height=\"8\" fill=\"#94a3b8\" stroke=\"#1f2937\" stroke-width=\"1\"/><rect x=\"260\" y=\"162\" width=\"8\" height=\"28\" fill=\"#64748b\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><line x1=\"300\" y1=\"176\" x2=\"282.0\" y2=\"176.0\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"274,176 282,171.6 282,180.4\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><text x=\"20\" y=\"181\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">3</text><text x=\"122\" y=\"21\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">chalk</text><text x=\"122\" y=\"88\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">water</text><text x=\"122\" y=\"155\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">air</text></svg>", "alt": "Three syringes with sealed tips, each with an arrow pushing the plunger. Syringe 1 is packed with a stick of chalk, syringe 2 is full of water, and syringe 3 holds only air."}
  },
  {
    id: "g9-sci-matter-b-q04",
    prompt: "The graph shows water heated steadily until it boils. Steam at 100 °C causes worse burns than water at 100 °C. How does the flat part of the graph help explain this?",
    options: [
      { id: "a", text: "Steam has a lower temperature" },
      { id: "b", text: "Steam is denser than water" },
      { id: "c", text: "Steam has no energy" },
      { id: "d", text: "Steam carries extra latent heat that it gives out when it condenses" }
    ],
    answerId: "d",
    explanation: "During the flat part at 100 °C heat is still being supplied, but the temperature does not rise: that energy is stored in the steam as latent heat of vaporisation. When steam condenses on skin it gives out this extra heat too, so it burns worse. Steam is not at a lower temperature: both are at 100 °C.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A graph of temperature against time while water is heated steadily. The line rises from 20 degrees Celsius to 100 degrees and then stays flat at 100 degrees, with a note: heat still being supplied, water turning to steam.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><line x1=\"50\" y1=\"180\" x2=\"298.0\" y2=\"180.0\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"305,180 298,183.8 298,176.2\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"50\" y1=\"180\" x2=\"50.0\" y2=\"37.0\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"50,30 53.9,37 46.1,37\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"46\" y1=\"156\" x2=\"50\" y2=\"156\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"43\" y=\"160\" font-size=\"11\" text-anchor=\"end\" font-weight=\"500\" fill=\"#1f2937\">20</text><line x1=\"46\" y1=\"60\" x2=\"50\" y2=\"60\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"43\" y=\"64\" font-size=\"11\" text-anchor=\"end\" font-weight=\"500\" fill=\"#1f2937\">100</text><text x=\"305\" y=\"210\" font-size=\"12\" text-anchor=\"end\" font-weight=\"600\" fill=\"#1f2937\">time (heat supplied steadily)</text><text x=\"44\" y=\"24\" font-size=\"12\" text-anchor=\"start\" font-weight=\"600\" fill=\"#1f2937\">temperature (°C)</text><polyline points=\"50,156 140,60 290,60\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><text x=\"215\" y=\"50\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">flat part</text><text x=\"215\" y=\"92\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">water turning</text><text x=\"215\" y=\"106\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">into steam</text></svg>", "alt": "A graph of temperature against time while water is heated steadily. The line rises from 20 degrees Celsius to 100 degrees and then stays flat at 100 degrees, with a note: heat still being supplied, water turning to steam."}
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
    prompt: "100 mL of water is poured into a wide plate (P) and 100 mL into a narrow tumbler (Q), side by side in the same room. How does the rate of evaporation from P compare with that from Q?",
    options: [
      { id: "a", text: "It is lower" },
      { id: "b", text: "It is higher" },
      { id: "c", text: "Evaporation stops in P" },
      { id: "d", text: "They are exactly equal" }
    ],
    answerId: "b",
    explanation: "The plate spreads the water out, giving it a much larger surface open to the air, so more particles can escape each second: evaporation from P is faster. It is not lower: a larger surface area speeds up evaporation, it does not slow it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A wide shallow plate P and a narrow tall tumbler Q stand side by side, each holding 100 millilitres of water. The water in P is spread out thinly; the water in Q stands in a deep narrow column.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><path d=\"M20,150 L40,170 L160,170 L180,150\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/><polygon points=\"26,156 40,168 160,168 174,156\" fill=\"#bfdbfe\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><line x1=\"26\" y1=\"156\" x2=\"174\" y2=\"156\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-linecap=\"round\"/><rect x=\"232\" y=\"70\" width=\"40\" height=\"100\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2.2\"/><rect x=\"234\" y=\"112\" width=\"36\" height=\"56\" fill=\"#bfdbfe\" stroke=\"none\" stroke-width=\"1.5\"/><line x1=\"234\" y1=\"112\" x2=\"270\" y2=\"112\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"0\" y1=\"172\" x2=\"320\" y2=\"172\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"100\" y=\"196\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">P: wide plate</text><text x=\"252\" y=\"196\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">Q: tumbler</text><text x=\"100\" y=\"212\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">100 mL</text><text x=\"252\" y=\"212\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">100 mL</text></svg>", "alt": "A wide shallow plate P and a narrow tall tumbler Q stand side by side, each holding 100 millilitres of water. The water in P is spread out thinly; the water in Q stands in a deep narrow column."}
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
    prompt: "A sponge is a solid, yet it can be squeezed easily. The close-up shows how it is built. Why can it be squeezed?",
    options: [
      { id: "a", text: "It has tiny holes filled with air" },
      { id: "b", text: "It has no particles" },
      { id: "c", text: "It is really a liquid" },
      { id: "d", text: "Its particles are far apart like a gas" }
    ],
    answerId: "a",
    explanation: "The close-up shows solid walls around many small spaces filled with air. Squeezing pushes the air out of these holes; the solid material itself hardly compresses. Its particles are not far apart like a gas: the walls are ordinary, closely packed solid material.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A sponge on the left and a magnified close-up on the right. The close-up shows a network of solid walls surrounding many small open spaces.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"25\" y=\"85\" width=\"85\" height=\"55\" rx=\"6\" fill=\"#fde047\" stroke=\"#ca8a04\" stroke-width=\"2\"/><circle cx=\"215\" cy=\"110\" r=\"82\" fill=\"#fde047\" stroke=\"#374151\" stroke-width=\"4\"/><ellipse cx=\"175\" cy=\"70\" rx=\"14\" ry=\"11\" fill=\"#ffffff\" stroke=\"#ca8a04\" stroke-width=\"1.5\"/><ellipse cx=\"210\" cy=\"58\" rx=\"12\" ry=\"9\" fill=\"#ffffff\" stroke=\"#ca8a04\" stroke-width=\"1.5\"/><ellipse cx=\"247\" cy=\"72\" rx=\"15\" ry=\"12\" fill=\"#ffffff\" stroke=\"#ca8a04\" stroke-width=\"1.5\"/><ellipse cx=\"270\" cy=\"105\" rx=\"12\" ry=\"14\" fill=\"#ffffff\" stroke=\"#ca8a04\" stroke-width=\"1.5\"/><ellipse cx=\"160\" cy=\"110\" rx=\"12\" ry=\"14\" fill=\"#ffffff\" stroke=\"#ca8a04\" stroke-width=\"1.5\"/><ellipse cx=\"195\" cy=\"102\" rx=\"16\" ry=\"12\" fill=\"#ffffff\" stroke=\"#ca8a04\" stroke-width=\"1.5\"/><ellipse cx=\"233\" cy=\"112\" rx=\"13\" ry=\"11\" fill=\"#ffffff\" stroke=\"#ca8a04\" stroke-width=\"1.5\"/><ellipse cx=\"255\" cy=\"144\" rx=\"14\" ry=\"11\" fill=\"#ffffff\" stroke=\"#ca8a04\" stroke-width=\"1.5\"/><ellipse cx=\"177\" cy=\"148\" rx=\"14\" ry=\"11\" fill=\"#ffffff\" stroke=\"#ca8a04\" stroke-width=\"1.5\"/><ellipse cx=\"215\" cy=\"144\" rx=\"12\" ry=\"12\" fill=\"#ffffff\" stroke=\"#ca8a04\" stroke-width=\"1.5\"/><ellipse cx=\"235\" cy=\"170\" rx=\"10\" ry=\"8\" fill=\"#ffffff\" stroke=\"#ca8a04\" stroke-width=\"1.5\"/><ellipse cx=\"197\" cy=\"172\" rx=\"10\" ry=\"8\" fill=\"#ffffff\" stroke=\"#ca8a04\" stroke-width=\"1.5\"/><line x1=\"110\" y1=\"100\" x2=\"140\" y2=\"80\" stroke=\"#94a3b8\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"125\" x2=\"140\" y2=\"145\" stroke=\"#94a3b8\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\" stroke-linecap=\"round\"/><text x=\"68\" y=\"160\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">sponge</text></svg>", "alt": "A sponge on the left and a magnified close-up on the right. The close-up shows a network of solid walls surrounding many small open spaces."}
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
    prompt: "The two thermometer scales show the same temperatures in °C and in kelvin. How do you get the kelvin reading marked ? for 25 °C?",
    options: [
      { id: "a", text: "Subtract 273" },
      { id: "b", text: "Multiply by 273" },
      { id: "c", text: "Divide by 273" },
      { id: "d", text: "Add 273" }
    ],
    answerId: "d",
    explanation: "The scales show 0 °C = 273 K and 100 °C = 373 K, so the kelvin reading is always 273 more: 25 + 273 = 298 K. Subtracting 273 would give −248, but the scale shows kelvin readings are larger than the Celsius ones.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Two thermometer scales side by side, joined by dashed lines at matching marks. Celsius 0 matches 273 kelvin, Celsius 100 matches 373 kelvin, and Celsius 25 matches a kelvin reading shown as a question mark.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"103\" y=\"25\" width=\"14\" height=\"160\" rx=\"7\" fill=\"#ffffff\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><circle cx=\"110\" cy=\"190\" r=\"11\" fill=\"#dc2626\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><rect x=\"107\" y=\"95\" width=\"6\" height=\"92\" fill=\"#dc2626\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"110\" y=\"18\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">°C</text><line x1=\"98\" y1=\"160\" x2=\"122\" y2=\"160\" stroke=\"#1f2937\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"92\" y=\"164\" font-size=\"13\" text-anchor=\"end\" font-weight=\"700\" fill=\"#1f2937\">0</text><line x1=\"98\" y1=\"135\" x2=\"122\" y2=\"135\" stroke=\"#1f2937\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"92\" y=\"139\" font-size=\"13\" text-anchor=\"end\" font-weight=\"700\" fill=\"#1f2937\">25</text><line x1=\"98\" y1=\"60\" x2=\"122\" y2=\"60\" stroke=\"#1f2937\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"92\" y=\"64\" font-size=\"13\" text-anchor=\"end\" font-weight=\"700\" fill=\"#1f2937\">100</text><rect x=\"203\" y=\"25\" width=\"14\" height=\"160\" rx=\"7\" fill=\"#ffffff\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><circle cx=\"210\" cy=\"190\" r=\"11\" fill=\"#dc2626\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><rect x=\"207\" y=\"95\" width=\"6\" height=\"92\" fill=\"#dc2626\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"210\" y=\"18\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">K</text><line x1=\"198\" y1=\"160\" x2=\"222\" y2=\"160\" stroke=\"#1f2937\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"228\" y=\"164\" font-size=\"13\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">273</text><line x1=\"198\" y1=\"135\" x2=\"222\" y2=\"135\" stroke=\"#1f2937\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"228\" y=\"139\" font-size=\"13\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">?</text><line x1=\"198\" y1=\"60\" x2=\"222\" y2=\"60\" stroke=\"#1f2937\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"228\" y=\"64\" font-size=\"13\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">373</text><line x1=\"122\" y1=\"160\" x2=\"198\" y2=\"160\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\" stroke-linecap=\"round\"/><line x1=\"122\" y1=\"135\" x2=\"198\" y2=\"135\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\" stroke-linecap=\"round\"/><line x1=\"122\" y1=\"60\" x2=\"198\" y2=\"60\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\" stroke-linecap=\"round\"/></svg>", "alt": "Two thermometer scales side by side, joined by dashed lines at matching marks. Celsius 0 matches 273 kelvin, Celsius 100 matches 373 kelvin, and Celsius 25 matches a kelvin reading shown as a question mark."}
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
    prompt: "Camphor tablets are left in an open dish. The picture shows the dish on day 1 and on day 6. Which process explains the change?",
    options: [
      { id: "a", text: "Filtration" },
      { id: "b", text: "Sublimation" },
      { id: "c", text: "Sedimentation" },
      { id: "d", text: "Condensation" }
    ],
    answerId: "b",
    explanation: "The tablets have shrunk and no liquid has appeared in the dish: the camphor has changed straight from a solid into a vapour, which is sublimation. Condensation is a change from vapour to liquid, and it would have left drops in the dish.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Day 1: an open dish holding four large white camphor tablets. Day 6: the same dish holds only two very small tablets, and the dish is completely dry.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><path d=\"M20,150 Q80,185 140,150 Z\" fill=\"#e5e7eb\" stroke=\"#475569\" stroke-width=\"2\" stroke-linejoin=\"round\"/><circle cx=\"56\" cy=\"154\" r=\"9\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.2\"/><circle cx=\"74\" cy=\"154\" r=\"9\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.2\"/><circle cx=\"92\" cy=\"154\" r=\"9\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.2\"/><circle cx=\"108\" cy=\"154\" r=\"8\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.2\"/><path d=\"M180,150 Q240,185 300,150 Z\" fill=\"#e5e7eb\" stroke=\"#475569\" stroke-width=\"2\" stroke-linejoin=\"round\"/><circle cx=\"232\" cy=\"154\" r=\"3.5\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.2\"/><circle cx=\"250\" cy=\"154\" r=\"3\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.2\"/><text x=\"80\" y=\"205\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">day 1</text><text x=\"240\" y=\"205\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">day 6</text><text x=\"240\" y=\"120\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">dish dry</text><line x1=\"150\" y1=\"150\" x2=\"162.0\" y2=\"150.0\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"170,150 162,154.4 162,145.6\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/></svg>", "alt": "Day 1: an open dish holding four large white camphor tablets. Day 6: the same dish holds only two very small tablets, and the dish is completely dry."}
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
