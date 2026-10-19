import type { ChapterDef, PrepQuestion } from "../types";

/** Metals and Non-metals - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g8-sci-metals-a-q01",
    prompt: "Processes 1 and 2 in the picture each use a different property of metals. Which property does process 1 use?",
    options: [
      { id: "a", text: "Ductility" },
      { id: "b", text: "Malleability" },
      { id: "c", text: "Sonority" },
      { id: "d", text: "Lustre" }
    ],
    answerId: "b",
    explanation: "In process 1 a hammer beats a metal lump into a thin flat sheet, which uses malleability. Ductility is the property used in process 2, where the metal is pulled out into a long thin wire.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Process 1: a hammer coming down on a metal lump on an anvil, next to a thin flat sheet it has made. Process 2: a metal rod being pulled through a small hole in a plate to make a long thin wire.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"30\" y=\"150\" width=\"110\" height=\"18\" fill=\"#475569\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><rect x=\"60\" y=\"168\" width=\"50\" height=\"30\" fill=\"#475569\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><ellipse cx=\"70\" cy=\"143\" rx=\"18\" ry=\"7\" fill=\"#cbd5e1\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><polygon points=\"96,146 140,146 138,150 94,150\" fill=\"#e2e8f0\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><rect x=\"56\" y=\"60\" width=\"34\" height=\"22\" fill=\"#78716c\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><line x1=\"90\" y1=\"71\" x2=\"140\" y2=\"40\" stroke=\"#a16207\" stroke-width=\"6\" stroke-linecap=\"round\"/><line x1=\"62\" y1=\"92\" x2=\"65.06527001946083\" y2=\"118.05479516541699\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"66,126 60.7,118.6 69.4,117.5\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><text x=\"85\" y=\"25\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">process 1</text><rect x=\"220\" y=\"70\" width=\"14\" height=\"110\" fill=\"#64748b\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><circle cx=\"227\" cy=\"125\" r=\"3\" fill=\"#ffffff\" stroke=\"#1f2937\" stroke-width=\"1\"/><rect x=\"170\" y=\"118\" width=\"50\" height=\"14\" fill=\"#cbd5e1\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><line x1=\"234\" y1=\"125\" x2=\"300\" y2=\"125\" stroke=\"#94a3b8\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><line x1=\"270\" y1=\"140\" x2=\"297.0\" y2=\"140.0\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"305,140 297,144.4 297,135.6\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><text x=\"240\" y=\"25\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">process 2</text></svg>", "alt": "Process 1: a hammer coming down on a metal lump on an anvil, next to a thin flat sheet it has made. Process 2: a metal rod being pulled through a small hole in a plate to make a long thin wire."}
  },
  {
    id: "g8-sci-metals-a-q02",
    prompt: "Which metal is a liquid at room temperature?",
    options: [
      { id: "a", text: "Sodium" },
      { id: "b", text: "Aluminium" },
      { id: "c", text: "Bromine" },
      { id: "d", text: "Mercury" }
    ],
    answerId: "d",
    explanation: "Mercury is the metal that is liquid at room temperature. Bromine is also a liquid, but it is a non-metal.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-a-q03",
    prompt: "Which of these non-metallic substances is a good conductor of electricity?",
    options: [
      { id: "a", text: "Graphite" },
      { id: "b", text: "Sulphur" },
      { id: "c", text: "Diamond" },
      { id: "d", text: "Iodine" }
    ],
    answerId: "a",
    explanation: "Graphite is a form of carbon that conducts electricity, which is why it is used in electrodes. Diamond, also carbon, does not conduct.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-a-q04",
    prompt: "A temple bell gives a ringing sound when struck. This property of metals is called \u2014",
    options: [
      { id: "a", text: "Malleability" },
      { id: "b", text: "Ductility" },
      { id: "c", text: "Sonority" },
      { id: "d", text: "Brittleness" }
    ],
    answerId: "c",
    explanation: "Sonority is the property of producing a ringing sound when struck. Most metals are sonorous.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-a-q05",
    prompt: "Which metal is kept under kerosene in the laboratory?",
    options: [
      { id: "a", text: "Copper" },
      { id: "b", text: "Iron" },
      { id: "c", text: "Sodium" },
      { id: "d", text: "Zinc" }
    ],
    answerId: "c",
    explanation: "Sodium reacts strongly with oxygen and with moisture in the air. Kerosene keeps air and water away from it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-a-q06",
    prompt: "Electric wires are commonly made of copper because copper is \u2014",
    options: [
      { id: "a", text: "A good conductor of electricity and ductile" },
      { id: "b", text: "Brittle and lustrous" },
      { id: "c", text: "A poor conductor of heat" },
      { id: "d", text: "Soft enough to cut with a knife" }
    ],
    answerId: "a",
    explanation: "Copper conducts electricity very well and can be drawn into thin wires. Both properties make it ideal for wiring.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-a-q07",
    prompt: "Follow the three steps in the picture. What happens to the red litmus paper in step 3?",
    options: [
      { id: "a", text: "It stays red" },
      { id: "b", text: "It turns colourless" },
      { id: "c", text: "It turns green" },
      { id: "d", text: "It turns blue" }
    ],
    answerId: "d",
    explanation: "Burning magnesium in air forms white magnesium oxide, a basic oxide. In water it forms magnesium hydroxide, a base, which turns red litmus blue. It does not stay red: red litmus stays red only in acidic or neutral solutions.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Step 1: a magnesium ribbon burning with a bright flame, held in tongs, leaving white ash. Step 2: the ash stirred into water in a beaker. Step 3: a strip of red litmus paper dipped into the solution, with a question mark.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><line x1=\"20\" y1=\"70\" x2=\"70\" y2=\"100\" stroke=\"#475569\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"20\" y1=\"78\" x2=\"70\" y2=\"102\" stroke=\"#475569\" stroke-width=\"3\" stroke-linecap=\"round\"/><line x1=\"70\" y1=\"101\" x2=\"90\" y2=\"112\" stroke=\"#9ca3af\" stroke-width=\"3\" stroke-linecap=\"round\"/><circle cx=\"92\" cy=\"112\" r=\"10\" fill=\"#fef9c3\" stroke=\"#facc15\" stroke-width=\"2\"/><line x1=\"92\" y1=\"112\" x2=\"110\" y2=\"112\" stroke=\"#facc15\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"92\" y1=\"112\" x2=\"92\" y2=\"94\" stroke=\"#facc15\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"92\" y1=\"112\" x2=\"79.4\" y2=\"99.4\" stroke=\"#facc15\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"92\" y1=\"112\" x2=\"104.6\" y2=\"99.4\" stroke=\"#facc15\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"92\" y1=\"112\" x2=\"104.6\" y2=\"124.6\" stroke=\"#facc15\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><ellipse cx=\"80\" cy=\"150\" rx=\"22\" ry=\"6\" fill=\"#f8fafc\" stroke=\"#94a3b8\" stroke-width=\"1.2\"/><text x=\"80\" y=\"140\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">white ash</text><rect x=\"132\" y=\"115\" width=\"56\" height=\"43\" fill=\"#f1f5f9\" stroke=\"none\" stroke-width=\"1.5\" opacity=\"0.8\"/><path d=\"M130,90 L130,154 Q130,160 136,160 L184,160 Q190,160 190,154 L190,90\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linejoin=\"round\"/><line x1=\"170\" y1=\"70\" x2=\"150\" y2=\"150\" stroke=\"#92400e\" stroke-width=\"3\" stroke-linecap=\"round\"/><rect x=\"232\" y=\"115\" width=\"56\" height=\"43\" fill=\"#f1f5f9\" stroke=\"none\" stroke-width=\"1.5\" opacity=\"0.8\"/><path d=\"M230,90 L230,154 Q230,160 236,160 L284,160 Q290,160 290,154 L290,90\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"254\" y=\"60\" width=\"12\" height=\"80\" fill=\"#f87171\" stroke=\"#991b1b\" stroke-width=\"1\"/><text x=\"285\" y=\"75\" font-size=\"22\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#dc2626\">?</text><text x=\"60\" y=\"195\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">1. burn</text><text x=\"160\" y=\"195\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">2. ash + water</text><text x=\"260\" y=\"195\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">3. red litmus</text><line x1=\"108\" y1=\"125\" x2=\"118.0\" y2=\"125.0\" stroke=\"#1f2937\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><polygon points=\"126,125 118,129.4 118,120.6\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"198\" y1=\"125\" x2=\"216.0\" y2=\"125.0\" stroke=\"#1f2937\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><polygon points=\"224,125 216,129.4 216,120.6\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/></svg>", "alt": "Step 1: a magnesium ribbon burning with a bright flame, held in tongs, leaving white ash. Step 2: the ash stirred into water in a beaker. Step 3: a strip of red litmus paper dipped into the solution, with a question mark."}
  },
  {
    id: "g8-sci-metals-a-q08",
    prompt: "Iron nails were kept for a week in the three tubes shown. Which conditions must both be present for iron to rust?",
    options: [
      { id: "a", text: "Oxygen only" },
      { id: "b", text: "Oxygen and water" },
      { id: "c", text: "Water only" },
      { id: "d", text: "Carbon dioxide and nitrogen" }
    ],
    answerId: "b",
    explanation: "Only the nail in tube 1, which has both air and water, has rusted. Tube 2 has water but no air (boiled water under oil), and tube 3 has air but no water (dried by calcium chloride). Water only cannot be right, because the nail in tube 2 had water and did not rust.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Three test tubes after a week. Tube 1: open, with a nail half in tap water, and the nail is covered in brown rust. Tube 2: corked, with a nail in boiled water under a layer of oil; the nail is clean. Tube 3: corked, with a nail in dry air above some calcium chloride; the nail is clean.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><path d=\"M42,110 L42,160.0 A18.0,18.0 0 0 0 78,160.0 L78,110 Z\" fill=\"#bfdbfe\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\" opacity=\"0.85\"/><path d=\"M40,40 L40,160.0 A20.0,20.0 0 0 0 80,160.0 L80,40\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"53\" y=\"46\" width=\"14\" height=\"5\" fill=\"#6b7280\" stroke=\"#1f2937\" stroke-width=\"1\"/><rect x=\"57\" y=\"50\" width=\"6\" height=\"105\" fill=\"#9ca3af\" stroke=\"#1f2937\" stroke-width=\"1\"/><polygon points=\"57,155 63,155 60,163\" fill=\"#9ca3af\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><circle cx=\"58\" cy=\"60\" r=\"2.5\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"62\" cy=\"69\" r=\"2.5\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"58\" cy=\"78\" r=\"2.5\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"62\" cy=\"87\" r=\"2.5\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"58\" cy=\"96\" r=\"2.5\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"62\" cy=\"105\" r=\"2.5\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"58\" cy=\"114\" r=\"2.5\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"62\" cy=\"123\" r=\"2.5\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"58\" cy=\"132\" r=\"2.5\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"62\" cy=\"141\" r=\"2.5\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><path d=\"M142,70 L142,160.0 A18.0,18.0 0 0 0 178,160.0 L178,70 Z\" fill=\"#bfdbfe\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\" opacity=\"0.85\"/><path d=\"M140,40 L140,160.0 A20.0,20.0 0 0 0 180,160.0 L180,40\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"138\" y=\"30\" width=\"44\" height=\"12\" rx=\"2\" fill=\"#b45309\" stroke=\"#78350f\" stroke-width=\"1.2\"/><rect x=\"142\" y=\"70\" width=\"36\" height=\"14\" fill=\"#fde047\" stroke=\"none\" stroke-width=\"1.5\" opacity=\"0.9\"/><rect x=\"153\" y=\"46\" width=\"14\" height=\"5\" fill=\"#6b7280\" stroke=\"#1f2937\" stroke-width=\"1\"/><rect x=\"157\" y=\"50\" width=\"6\" height=\"105\" fill=\"#9ca3af\" stroke=\"#1f2937\" stroke-width=\"1\"/><polygon points=\"157,155 163,155 160,163\" fill=\"#9ca3af\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><path d=\"M240,40 L240,160.0 A20.0,20.0 0 0 0 280,160.0 L280,40\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"238\" y=\"30\" width=\"44\" height=\"12\" rx=\"2\" fill=\"#b45309\" stroke=\"#78350f\" stroke-width=\"1.2\"/><rect x=\"242\" y=\"150\" width=\"36\" height=\"18\" fill=\"#f8fafc\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"248\" cy=\"160\" r=\"3\" fill=\"#e5e7eb\" stroke=\"#64748b\" stroke-width=\"0.8\"/><circle cx=\"254\" cy=\"155\" r=\"3\" fill=\"#e5e7eb\" stroke=\"#64748b\" stroke-width=\"0.8\"/><circle cx=\"260\" cy=\"160\" r=\"3\" fill=\"#e5e7eb\" stroke=\"#64748b\" stroke-width=\"0.8\"/><circle cx=\"266\" cy=\"155\" r=\"3\" fill=\"#e5e7eb\" stroke=\"#64748b\" stroke-width=\"0.8\"/><circle cx=\"272\" cy=\"160\" r=\"3\" fill=\"#e5e7eb\" stroke=\"#64748b\" stroke-width=\"0.8\"/><rect x=\"253\" y=\"41\" width=\"14\" height=\"5\" fill=\"#6b7280\" stroke=\"#1f2937\" stroke-width=\"1\"/><rect x=\"257\" y=\"45\" width=\"6\" height=\"87\" fill=\"#9ca3af\" stroke=\"#1f2937\" stroke-width=\"1\"/><polygon points=\"257,132 263,132 260,140\" fill=\"#9ca3af\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><text x=\"60\" y=\"200\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">1</text><text x=\"160\" y=\"200\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">2</text><text x=\"260\" y=\"200\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">3</text><text x=\"60\" y=\"214\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">tap water, open</text><text x=\"160\" y=\"214\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">boiled water + oil</text><text x=\"260\" y=\"214\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">calcium chloride</text></svg>", "alt": "Three test tubes after a week. Tube 1: open, with a nail half in tap water, and the nail is covered in brown rust. Tube 2: corked, with a nail in boiled water under a layer of oil; the nail is clean. Tube 3: corked, with a nail in dry air above some calcium chloride; the nail is clean."}
  },
  {
    id: "g8-sci-metals-a-q09",
    prompt: "Galvanisation is a method of protecting iron by coating it with a layer of \u2014",
    options: [
      { id: "a", text: "Zinc" },
      { id: "b", text: "Copper" },
      { id: "c", text: "Paint" },
      { id: "d", text: "Grease" }
    ],
    answerId: "a",
    explanation: "Galvanising means coating iron or steel with zinc. Painting and greasing also prevent rust, but they are not galvanisation.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-a-q10",
    prompt: "Zinc granules are added to dilute hydrochloric acid. The gas given off is \u2014",
    options: [
      { id: "a", text: "Oxygen" },
      { id: "b", text: "Carbon dioxide" },
      { id: "c", text: "Hydrogen" },
      { id: "d", text: "Chlorine" }
    ],
    answerId: "c",
    explanation: "Zinc reacts with dilute hydrochloric acid to form zinc chloride and hydrogen gas. The hydrogen burns with a pop sound.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-a-q11",
    prompt: "The picture shows an iron nail in copper sulphate solution at the start (tube 1) and the same tube after 30 minutes (tube 2). What colour change is seen in the solution?",
    options: [
      { id: "a", text: "Colourless to blue" },
      { id: "b", text: "Blue to light green" },
      { id: "c", text: "Light green to blue" },
      { id: "d", text: "No change at all" }
    ],
    answerId: "b",
    explanation: "Iron is more reactive than copper, so it displaces copper from the solution. Iron sulphate forms, which is light green, and brown copper coats the nail. Light green to blue is the reverse: the blue copper sulphate is used up, not made.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Tube 1, at the start: an iron nail standing in blue copper sulphate solution. Tube 2, after 30 minutes: the same nail now has a brown coating, and the colour of the solution is shown only as a question mark.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><path d=\"M72,70 L72,160.0 A18.0,18.0 0 0 0 108,160.0 L108,70 Z\" fill=\"#60a5fa\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\" opacity=\"0.85\"/><path d=\"M70,40 L70,160.0 A20.0,20.0 0 0 0 110,160.0 L110,40\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"83\" y=\"46\" width=\"14\" height=\"5\" fill=\"#6b7280\" stroke=\"#1f2937\" stroke-width=\"1\"/><rect x=\"87\" y=\"50\" width=\"6\" height=\"110\" fill=\"#9ca3af\" stroke=\"#1f2937\" stroke-width=\"1\"/><polygon points=\"87,160 93,160 90,168\" fill=\"#9ca3af\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><path d=\"M212,70 L212,160.0 A18.0,18.0 0 0 0 248,160.0 L248,70 Z\" fill=\"#f1f5f9\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\" opacity=\"0.85\"/><path d=\"M210,40 L210,160.0 A20.0,20.0 0 0 0 250,160.0 L250,40\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"223\" y=\"46\" width=\"14\" height=\"5\" fill=\"#6b7280\" stroke=\"#1f2937\" stroke-width=\"1\"/><rect x=\"227\" y=\"50\" width=\"6\" height=\"110\" fill=\"#9ca3af\" stroke=\"#1f2937\" stroke-width=\"1\"/><polygon points=\"227,160 233,160 230,168\" fill=\"#9ca3af\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><rect x=\"227\" y=\"88.5\" width=\"6\" height=\"71.5\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"242\" y=\"112\" font-size=\"24\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#dc2626\">?</text><text x=\"90\" y=\"205\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">tube 1: start</text><text x=\"230\" y=\"205\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">tube 2: 30 min</text><text x=\"90\" y=\"28\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">copper sulphate</text><line x1=\"130\" y1=\"110\" x2=\"182.0\" y2=\"110.0\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"190,110 182,114.4 182,105.6\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/></svg>", "alt": "Tube 1, at the start: an iron nail standing in blue copper sulphate solution. Tube 2, after 30 minutes: the same nail now has a brown coating, and the colour of the solution is shown only as a question mark."}
  },
  {
    id: "g8-sci-metals-a-q12",
    prompt: "Which non-metal is stored under water because it catches fire when exposed to air?",
    options: [
      { id: "a", text: "Sulphur" },
      { id: "b", text: "Carbon" },
      { id: "c", text: "Iodine" },
      { id: "d", text: "White phosphorus" }
    ],
    answerId: "d",
    explanation: "White phosphorus is very reactive and burns in air. Storing it under water keeps air away.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-a-q13",
    prompt: "Sulphur is burnt and the gas formed is dissolved in water. The solution will \u2014",
    options: [
      { id: "a", text: "Turn red litmus blue" },
      { id: "b", text: "Be basic in nature" },
      { id: "c", text: "Be neutral to litmus" },
      { id: "d", text: "Turn blue litmus red" }
    ],
    answerId: "d",
    explanation: "Burning sulphur forms sulphur dioxide, an acidic oxide. In water it forms sulphurous acid, which turns blue litmus red.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-a-q14",
    prompt: "Which of these non-metals has a shiny appearance (lustre)?",
    options: [
      { id: "a", text: "Sulphur" },
      { id: "b", text: "Iodine" },
      { id: "c", text: "Phosphorus" },
      { id: "d", text: "Charcoal" }
    ],
    answerId: "b",
    explanation: "Iodine is a non-metal, yet its crystals are shiny. It is an exception to the rule that non-metals are dull.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-a-q15",
    prompt: "Which is the hardest natural substance known?",
    options: [
      { id: "a", text: "Iron" },
      { id: "b", text: "Graphite" },
      { id: "c", text: "Diamond" },
      { id: "d", text: "Copper" }
    ],
    answerId: "c",
    explanation: "Diamond, a form of carbon, is the hardest natural substance. Graphite is also carbon, but it is soft.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-a-q16",
    prompt: "Which metal is soft enough to be cut with a knife?",
    options: [
      { id: "a", text: "Sodium" },
      { id: "b", text: "Iron" },
      { id: "c", text: "Copper" },
      { id: "d", text: "Aluminium" }
    ],
    answerId: "a",
    explanation: "Sodium and potassium are very soft metals. This is an exception, as most metals are hard.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-a-q17",
    prompt: "A metal strip is placed in a salt solution in each beaker shown. In which beaker will NO displacement reaction take place?",
    options: [
      { id: "a", text: "In beaker 1" },
      { id: "b", text: "In beaker 2" },
      { id: "c", text: "In beaker 3" },
      { id: "d", text: "In beaker 4" }
    ],
    answerId: "b",
    explanation: "A metal displaces another only if it is more reactive. Copper is less reactive than iron, so the copper strip in iron sulphate (beaker 2) cannot push the iron out. Beaker 4 does react: magnesium is more reactive than zinc, so it displaces zinc.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Four beakers. Beaker 1: a zinc strip in copper sulphate. Beaker 2: a copper strip in iron sulphate. Beaker 3: an iron nail in copper sulphate. Beaker 4: a magnesium ribbon in zinc sulphate.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"14\" y=\"98\" width=\"58\" height=\"60\" fill=\"#60a5fa\" stroke=\"none\" stroke-width=\"1.5\" opacity=\"0.8\"/><path d=\"M12,70 L12,154 Q12,160 18,160 L68,160 Q74,160 74,154 L74,70\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"37\" y=\"50\" width=\"12\" height=\"100\" fill=\"#cbd5e1\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><text x=\"43\" y=\"44\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">zinc</text><text x=\"43\" y=\"178\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">copper sulphate</text><text x=\"43\" y=\"200\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">beaker 1</text><rect x=\"92\" y=\"98\" width=\"58\" height=\"60\" fill=\"#bbf7d0\" stroke=\"none\" stroke-width=\"1.5\" opacity=\"0.8\"/><path d=\"M90,70 L90,154 Q90,160 96,160 L146,160 Q152,160 152,154 L152,70\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"115\" y=\"50\" width=\"12\" height=\"100\" fill=\"#d97706\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><text x=\"121\" y=\"44\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">copper</text><text x=\"121\" y=\"178\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">iron sulphate</text><text x=\"121\" y=\"200\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">beaker 2</text><rect x=\"170\" y=\"98\" width=\"58\" height=\"60\" fill=\"#60a5fa\" stroke=\"none\" stroke-width=\"1.5\" opacity=\"0.8\"/><path d=\"M168,70 L168,154 Q168,160 174,160 L224,160 Q230,160 230,154 L230,70\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"193\" y=\"50\" width=\"12\" height=\"100\" fill=\"#9ca3af\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><text x=\"199\" y=\"44\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">iron</text><text x=\"199\" y=\"178\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">copper sulphate</text><text x=\"199\" y=\"200\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">beaker 3</text><rect x=\"248\" y=\"98\" width=\"58\" height=\"60\" fill=\"#f1f5f9\" stroke=\"none\" stroke-width=\"1.5\" opacity=\"0.8\"/><path d=\"M246,70 L246,154 Q246,160 252,160 L302,160 Q308,160 308,154 L308,70\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"271\" y=\"50\" width=\"12\" height=\"100\" fill=\"#e5e7eb\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><text x=\"277\" y=\"44\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">magnesium</text><text x=\"277\" y=\"178\" font-size=\"10.5\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">zinc sulphate</text><text x=\"277\" y=\"200\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">beaker 4</text></svg>", "alt": "Four beakers. Beaker 1: a zinc strip in copper sulphate. Beaker 2: a copper strip in iron sulphate. Beaker 3: an iron nail in copper sulphate. Beaker 4: a magnesium ribbon in zinc sulphate."}
  },
  {
    id: "g8-sci-metals-a-q18",
    prompt: "Aluminium foil is used to wrap food mainly because aluminium is \u2014",
    options: [
      { id: "a", text: "Highly malleable" },
      { id: "b", text: "Highly sonorous" },
      { id: "c", text: "A poor conductor of heat" },
      { id: "d", text: "A liquid at room temperature" }
    ],
    answerId: "a",
    explanation: "Aluminium is very malleable, so it can be beaten into thin, flexible foil that wraps food easily.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-a-q19",
    prompt: "A copper vessel left in moist air slowly gets a dull green coating. This coating is \u2014",
    options: [
      { id: "a", text: "Rust" },
      { id: "b", text: "Copper sulphate" },
      { id: "c", text: "Pure copper oxide" },
      { id: "d", text: "A mixture of copper hydroxide and copper carbonate" }
    ],
    answerId: "d",
    explanation: "Copper reacts with moist air and carbon dioxide to form a green mixture of copper hydroxide and copper carbonate. Rust forms only on iron.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-a-q20",
    prompt: "Which statement is generally true for non-metals?",
    options: [
      { id: "a", text: "They are malleable." },
      { id: "b", text: "They are sonorous." },
      { id: "c", text: "Solid non-metals are brittle." },
      { id: "d", text: "They are good conductors of heat." }
    ],
    answerId: "c",
    explanation: "Solid non-metals such as sulphur and coal break into pieces when hammered. Malleability, sonority, and good conduction are metal properties.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-a-q21",
    prompt: "The picture shows two experiments with metals P, Q and R. What is the correct order of reactivity?",
    options: [
      { id: "a", text: "R > Q > P" },
      { id: "b", text: "Q > P > R" },
      { id: "c", text: "P > Q > R" },
      { id: "d", text: "P > R > Q" }
    ],
    answerId: "c",
    explanation: "A coating forms when the strip displaces the metal from its salt solution, and a metal displaces only a less reactive one. P displaced Q, and Q displaced R, so P > Q > R. R > Q > P reverses the order: the metal doing the displacing is the more reactive one.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Experiment 1: a strip of metal P in a solution of a salt of Q; after a while P is coated with a layer of metal Q. Experiment 2: a strip of metal Q in a solution of a salt of R; after a while Q is coated with a layer of metal R.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"42\" y=\"90\" width=\"86\" height=\"78\" fill=\"#e9d5ff\" stroke=\"none\" stroke-width=\"1.5\" opacity=\"0.8\"/><path d=\"M40,60 L40,164 Q40,170 46,170 L124,170 Q130,170 130,164 L130,60\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"79\" y=\"40\" width=\"12\" height=\"120\" fill=\"#cbd5e1\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><circle cx=\"89\" cy=\"94.0\" r=\"2.6\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"81\" cy=\"100.0\" r=\"2.6\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"89\" cy=\"106.0\" r=\"2.6\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"81\" cy=\"112.0\" r=\"2.6\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"89\" cy=\"118.0\" r=\"2.6\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"81\" cy=\"124.0\" r=\"2.6\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"89\" cy=\"130.0\" r=\"2.6\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"81\" cy=\"136.0\" r=\"2.6\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"89\" cy=\"142.0\" r=\"2.6\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"81\" cy=\"148.0\" r=\"2.6\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"89\" cy=\"154.0\" r=\"2.6\" fill=\"#7c3aed\" stroke=\"none\" stroke-width=\"1.5\"/><rect x=\"192\" y=\"90\" width=\"86\" height=\"78\" fill=\"#fed7aa\" stroke=\"none\" stroke-width=\"1.5\" opacity=\"0.8\"/><path d=\"M190,60 L190,164 Q190,170 196,170 L274,170 Q280,170 280,164 L280,60\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"229\" y=\"40\" width=\"12\" height=\"120\" fill=\"#ddd6fe\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><circle cx=\"239\" cy=\"94.0\" r=\"2.6\" fill=\"#c2410c\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"231\" cy=\"100.0\" r=\"2.6\" fill=\"#c2410c\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"239\" cy=\"106.0\" r=\"2.6\" fill=\"#c2410c\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"231\" cy=\"112.0\" r=\"2.6\" fill=\"#c2410c\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"239\" cy=\"118.0\" r=\"2.6\" fill=\"#c2410c\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"231\" cy=\"124.0\" r=\"2.6\" fill=\"#c2410c\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"239\" cy=\"130.0\" r=\"2.6\" fill=\"#c2410c\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"231\" cy=\"136.0\" r=\"2.6\" fill=\"#c2410c\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"239\" cy=\"142.0\" r=\"2.6\" fill=\"#c2410c\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"231\" cy=\"148.0\" r=\"2.6\" fill=\"#c2410c\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"239\" cy=\"154.0\" r=\"2.6\" fill=\"#c2410c\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"85\" y=\"32\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">strip P</text><text x=\"235\" y=\"32\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">strip Q</text><text x=\"85\" y=\"190\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">salt of Q solution</text><text x=\"235\" y=\"190\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">salt of R solution</text><text x=\"85\" y=\"210\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">coating of Q forms</text><text x=\"235\" y=\"210\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">coating of R forms</text></svg>", "alt": "Experiment 1: a strip of metal P in a solution of a salt of Q; after a while P is coated with a layer of metal Q. Experiment 2: a strip of metal Q in a solution of a salt of R; after a while Q is coated with a layer of metal R."}
  },
  {
    id: "g8-sci-metals-a-q22",
    prompt: "Aluminium foil is warmed with sodium hydroxide solution. A gas is given off that burns with a pop sound. The gas is \u2014",
    options: [
      { id: "a", text: "Oxygen" },
      { id: "b", text: "Nitrogen" },
      { id: "c", text: "Carbon dioxide" },
      { id: "d", text: "Hydrogen" }
    ],
    answerId: "d",
    explanation: "Aluminium reacts with sodium hydroxide to form hydrogen gas. A pop sound with a burning splint is the test for hydrogen.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-a-q23",
    prompt: "Why should copper sulphate solution NOT be stored in an iron container?",
    options: [
      { id: "a", text: "Iron displaces copper from the solution, so the container gets eaten away." },
      { id: "b", text: "Copper displaces iron, making the container stronger." },
      { id: "c", text: "Iron is less reactive than copper." },
      { id: "d", text: "Copper sulphate solution boils on contact with iron." }
    ],
    answerId: "a",
    explanation: "Iron is more reactive than copper. It slowly displaces copper and forms iron sulphate, so the container is damaged.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-a-q24",
    prompt: "Element X is dull and breaks easily when hammered. Its oxide dissolves in water to give a solution that turns blue litmus red. X is most likely \u2014",
    options: [
      { id: "a", text: "Magnesium" },
      { id: "b", text: "Sulphur" },
      { id: "c", text: "Sodium" },
      { id: "d", text: "Copper" }
    ],
    answerId: "b",
    explanation: "Dull, brittle, and forming an acidic oxide are all signs of a non-metal. Sulphur fits. The other three are metals that form basic oxides.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g8-sci-metals-b-q01",
    prompt: "The property of metals that allows them to be drawn into thin wires is called \u2014",
    options: [
      { id: "a", text: "Malleability" },
      { id: "b", text: "Sonority" },
      { id: "c", text: "Ductility" },
      { id: "d", text: "Lustre" }
    ],
    answerId: "c",
    explanation: "Ductility is the ability to be drawn into wires. Gold and silver are among the most ductile metals.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-b-q02",
    prompt: "A freshly cut surface of a metal looks shiny. This shine is called \u2014",
    options: [
      { id: "a", text: "Lustre" },
      { id: "b", text: "Ductility" },
      { id: "c", text: "Hardness" },
      { id: "d", text: "Sonority" }
    ],
    answerId: "a",
    explanation: "Lustre is the shine of a metal surface. Metals often look dull over time because a coating forms on them in air.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-b-q03",
    prompt: "Which non-metal is a liquid at room temperature?",
    options: [
      { id: "a", text: "Mercury" },
      { id: "b", text: "Sulphur" },
      { id: "c", text: "Iodine" },
      { id: "d", text: "Bromine" }
    ],
    answerId: "d",
    explanation: "Bromine is a reddish-brown liquid non-metal. Mercury is also a liquid, but it is a metal.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-b-q04",
    prompt: "Which non-metal is a key part of many fertilisers that help plants grow?",
    options: [
      { id: "a", text: "Oxygen" },
      { id: "b", text: "Nitrogen" },
      { id: "c", text: "Chlorine" },
      { id: "d", text: "Iodine" }
    ],
    answerId: "b",
    explanation: "Nitrogen is needed by plants to make proteins. Many fertilisers, such as urea, supply nitrogen.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-b-q05",
    prompt: "Which non-metal is used to kill germs in drinking water supplies?",
    options: [
      { id: "a", text: "Chlorine" },
      { id: "b", text: "Sulphur" },
      { id: "c", text: "Carbon" },
      { id: "d", text: "Nitrogen" }
    ],
    answerId: "a",
    explanation: "Chlorine is added in small amounts to water to kill harmful germs. This makes the water safe to drink.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-b-q06",
    prompt: "Which metal was traditionally used in clinical thermometers?",
    options: [
      { id: "a", text: "Iron" },
      { id: "b", text: "Sodium" },
      { id: "c", text: "Mercury" },
      { id: "d", text: "Aluminium" }
    ],
    answerId: "c",
    explanation: "Mercury is a liquid metal that expands evenly when heated. This made it useful in thermometers.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-b-q07",
    prompt: "A solution of which non-metal is applied on cuts and wounds as an antiseptic?",
    options: [
      { id: "a", text: "Sulphur" },
      { id: "b", text: "Iodine" },
      { id: "c", text: "Phosphorus" },
      { id: "d", text: "Bromine" }
    ],
    answerId: "b",
    explanation: "Tincture of iodine is a solution of iodine in alcohol. It is used as an antiseptic on wounds.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-b-q08",
    prompt: "When metals react with oxygen, they generally form \u2014",
    options: [
      { id: "a", text: "Acidic oxides" },
      { id: "b", text: "Neutral salts" },
      { id: "c", text: "Acids" },
      { id: "d", text: "Basic oxides" }
    ],
    answerId: "d",
    explanation: "Metal oxides are basic. When they dissolve in water, they form bases that turn red litmus blue.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-b-q09",
    prompt: "Which gas is formed when sulphur burns in air?",
    options: [
      { id: "a", text: "Hydrogen" },
      { id: "b", text: "Oxygen" },
      { id: "c", text: "Sulphur dioxide" },
      { id: "d", text: "Carbon dioxide" }
    ],
    answerId: "c",
    explanation: "Sulphur combines with oxygen to form sulphur dioxide. It has a sharp, choking smell.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-b-q10",
    prompt: "Look at the pan shown. Why is part X made of metal?",
    options: [
      { id: "a", text: "Metal is a good conductor of heat" },
      { id: "b", text: "Metal is sonorous" },
      { id: "c", text: "Metal is brittle" },
      { id: "d", text: "Metal has a low melting point" }
    ],
    answerId: "a",
    explanation: "Part X sits on the flame and must carry heat quickly to the food, so it is made of metal, a good conductor of heat. Handle Y is a poor conductor so it stays cool. A low melting point would be a problem: the base would melt on the stove.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A cooking pan on a gas flame. X points to the shiny body and base of the pan touching the flame; Y points to the black handle sticking out to the side.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><path d=\"M60,90 L70,140 Q72,150 82,150 L198,150 Q208,150 210,140 L220,90 Z\" fill=\"#cbd5e1\" stroke=\"#334155\" stroke-width=\"2\" stroke-linejoin=\"round\"/><ellipse cx=\"140\" cy=\"90\" rx=\"80\" ry=\"10\" fill=\"#e2e8f0\" stroke=\"#334155\" stroke-width=\"2\"/><rect x=\"218\" y=\"88\" width=\"90\" height=\"12\" rx=\"5\" fill=\"#111827\" stroke=\"#111827\" stroke-width=\"1\"/><path d=\"M100,185 q-8,-14 0,-30 q8,14 0,30 Z\" fill=\"#60a5fa\" stroke=\"#1d4ed8\" stroke-width=\"1\" stroke-linejoin=\"round\"/><path d=\"M125,185 q-8,-14 0,-30 q8,14 0,30 Z\" fill=\"#60a5fa\" stroke=\"#1d4ed8\" stroke-width=\"1\" stroke-linejoin=\"round\"/><path d=\"M150,185 q-8,-14 0,-30 q8,14 0,30 Z\" fill=\"#60a5fa\" stroke=\"#1d4ed8\" stroke-width=\"1\" stroke-linejoin=\"round\"/><path d=\"M175,185 q-8,-14 0,-30 q8,14 0,30 Z\" fill=\"#60a5fa\" stroke=\"#1d4ed8\" stroke-width=\"1\" stroke-linejoin=\"round\"/><rect x=\"80\" y=\"185\" width=\"120\" height=\"10\" fill=\"#475569\" stroke=\"none\" stroke-width=\"1.5\"/><line x1=\"80\" y1=\"140\" x2=\"30\" y2=\"175\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><circle cx=\"80\" cy=\"140\" r=\"2\" fill=\"#475569\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"26\" y=\"180\" font-size=\"16\" text-anchor=\"end\" font-weight=\"700\" fill=\"#1f2937\">X</text><line x1=\"285\" y1=\"94\" x2=\"290\" y2=\"50\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><circle cx=\"285\" cy=\"94\" r=\"2\" fill=\"#475569\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"290\" y=\"44\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">Y</text></svg>", "alt": "A cooking pan on a gas flame. X points to the shiny body and base of the pan touching the flame; Y points to the black handle sticking out to the side."}
  },
  {
    id: "g8-sci-metals-b-q11",
    prompt: "Which of these metals reacts most vigorously with cold water?",
    options: [
      { id: "a", text: "Copper" },
      { id: "b", text: "Iron" },
      { id: "c", text: "Gold" },
      { id: "d", text: "Sodium" }
    ],
    answerId: "d",
    explanation: "Sodium is high in the reactivity series and reacts violently with cold water. Copper and gold do not react with water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-b-q12",
    prompt: "The picture shows two metals in dilute hydrochloric acid. Why does one of them give no bubbles?",
    options: [
      { id: "a", text: "Copper is more reactive than hydrogen" },
      { id: "b", text: "Copper is less reactive than hydrogen" },
      { id: "c", text: "Copper is a non-metal" },
      { id: "d", text: "Copper is a liquid" }
    ],
    answerId: "b",
    explanation: "Bubbles of hydrogen form only around the zinc. Copper lies below hydrogen in the reactivity series, so it cannot push hydrogen out of the acid. If copper were more reactive than hydrogen, it would bubble just like the zinc.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Two test tubes of dilute hydrochloric acid. The tube with a zinc granule has many gas bubbles rising. The tube with a copper turning has no bubbles.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><path d=\"M82,80 L82,158.0 A20.0,20.0 0 0 0 122,158.0 L122,80 Z\" fill=\"#fef9c3\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\" opacity=\"0.85\"/><path d=\"M80,50 L80,158.0 A22.0,22.0 0 0 0 124,158.0 L124,50\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linejoin=\"round\"/><circle cx=\"102\" cy=\"162\" r=\"9\" fill=\"#94a3b8\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><circle cx=\"95\" cy=\"145\" r=\"2.8\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"1\"/><circle cx=\"102\" cy=\"135\" r=\"2.8\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"1\"/><circle cx=\"109\" cy=\"125\" r=\"2.8\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"1\"/><circle cx=\"95\" cy=\"115\" r=\"2.8\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"1\"/><circle cx=\"102\" cy=\"105\" r=\"2.8\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"1\"/><circle cx=\"109\" cy=\"95\" r=\"2.8\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"1\"/><circle cx=\"95\" cy=\"85\" r=\"2.8\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"1\"/><circle cx=\"102\" cy=\"75\" r=\"2.8\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"1\"/><path d=\"M202,80 L202,158.0 A20.0,20.0 0 0 0 242,158.0 L242,80 Z\" fill=\"#fef9c3\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\" opacity=\"0.85\"/><path d=\"M200,50 L200,158.0 A22.0,22.0 0 0 0 244,158.0 L244,50\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linejoin=\"round\"/><path d=\"M212,166 q10,-10 20,0 q-10,6 -20,0 Z\" fill=\"#d97706\" stroke=\"#78350f\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><text x=\"102\" y=\"204\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">zinc</text><text x=\"222\" y=\"204\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">copper</text><text x=\"160\" y=\"30\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">dilute hydrochloric acid</text></svg>", "alt": "Two test tubes of dilute hydrochloric acid. The tube with a zinc granule has many gas bubbles rising. The tube with a copper turning has no bubbles."}
  },
  {
    id: "g8-sci-metals-b-q13",
    prompt: "The reddish-brown substance called rust is mainly \u2014",
    options: [
      { id: "a", text: "Iron sulphate" },
      { id: "b", text: "Hydrated iron oxide" },
      { id: "c", text: "Iron carbonate" },
      { id: "d", text: "Iron chloride" }
    ],
    answerId: "b",
    explanation: "Rust forms when iron reacts with oxygen and water. It is mainly hydrated iron oxide.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-b-q14",
    prompt: "Which of these does NOT help prevent an iron gate from rusting?",
    options: [
      { id: "a", text: "Painting it" },
      { id: "b", text: "Applying grease" },
      { id: "c", text: "Washing it often with salt water" },
      { id: "d", text: "Galvanising it" }
    ],
    answerId: "c",
    explanation: "Salt water speeds up rusting. Painting, greasing, and galvanising keep air and moisture away from the iron.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-b-q15",
    prompt: "A zinc strip is placed in blue copper sulphate solution. What is observed after some time?",
    options: [
      { id: "a", text: "The solution becomes colourless and a reddish-brown layer forms on the zinc." },
      { id: "b", text: "The solution turns green and the zinc becomes shiny." },
      { id: "c", text: "The solution turns deeper blue and nothing forms on the zinc." },
      { id: "d", text: "No change is seen." }
    ],
    answerId: "a",
    explanation: "Zinc is more reactive than copper and displaces it. Zinc sulphate is colourless, and reddish-brown copper deposits on the strip.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-b-q16",
    prompt: "Diamond and graphite are both forms of carbon. Which statement about them is correct?",
    options: [
      { id: "a", text: "Both conduct electricity well." },
      { id: "b", text: "Diamond conducts electricity, but graphite does not." },
      { id: "c", text: "Both are very soft." },
      { id: "d", text: "Graphite conducts electricity, while diamond is very hard and does not." }
    ],
    answerId: "d",
    explanation: "Graphite is soft and conducts electricity. Diamond is the hardest natural substance and does not conduct electricity.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-b-q17",
    prompt: "Magnesium oxide dissolves in water to form magnesium hydroxide. This solution is \u2014",
    options: [
      { id: "a", text: "Basic" },
      { id: "b", text: "Acidic" },
      { id: "c", text: "Neutral" },
      { id: "d", text: "A strong acid" }
    ],
    answerId: "a",
    explanation: "Magnesium oxide is a metal oxide. Its solution in water is basic and turns red litmus blue.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-b-q18",
    prompt: "Iron railings were put up in towns P and Q at the same time. The picture shows them after five years. Why are the railings in town P more rusted?",
    options: [
      { id: "a", text: "Sea air has no oxygen." },
      { id: "b", text: "Salt stops water from touching the iron." },
      { id: "c", text: "Sea sand coats and protects the iron." },
      { id: "d", text: "Moist, salty air speeds up rusting." }
    ],
    answerId: "d",
    explanation: "Town P is beside the sea, where the air carries a lot of moisture and salt. Salt speeds up the reaction of iron with oxygen and water. Sea air does contain oxygen, so having no oxygen cannot be the reason; without oxygen there would be no rust at all.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Town P beside the sea, with waves and spray in the air, has an iron railing covered in brown rust spots. Town Q, far inland with dry hills and sun, has a railing with only a few spots.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><path d=\"M5,90 q8,-8 16,0 q8,8 16,0\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-linejoin=\"round\"/><path d=\"M37,90 q8,-8 16,0 q8,8 16,0\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-linejoin=\"round\"/><path d=\"M69,90 q8,-8 16,0 q8,8 16,0\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-linejoin=\"round\"/><path d=\"M101,90 q8,-8 16,0 q8,8 16,0\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"0\" y=\"92\" width=\"150\" height=\"12\" fill=\"#bfdbfe\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"20\" cy=\"60\" r=\"2\" fill=\"#93c5fd\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"38\" cy=\"68\" r=\"2\" fill=\"#93c5fd\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"56\" cy=\"76\" r=\"2\" fill=\"#93c5fd\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"74\" cy=\"60\" r=\"2\" fill=\"#93c5fd\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"92\" cy=\"68\" r=\"2\" fill=\"#93c5fd\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"110\" cy=\"76\" r=\"2\" fill=\"#93c5fd\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"128\" cy=\"60\" r=\"2\" fill=\"#93c5fd\" stroke=\"none\" stroke-width=\"1.5\"/><line x1=\"25\" y1=\"120\" x2=\"125\" y2=\"120\" stroke=\"#374151\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"25\" y1=\"170\" x2=\"125\" y2=\"170\" stroke=\"#374151\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"25\" y1=\"110\" x2=\"25\" y2=\"180\" stroke=\"#374151\" stroke-width=\"3.5\" stroke-linecap=\"round\"/><line x1=\"45\" y1=\"110\" x2=\"45\" y2=\"180\" stroke=\"#374151\" stroke-width=\"3.5\" stroke-linecap=\"round\"/><line x1=\"65\" y1=\"110\" x2=\"65\" y2=\"180\" stroke=\"#374151\" stroke-width=\"3.5\" stroke-linecap=\"round\"/><line x1=\"85\" y1=\"110\" x2=\"85\" y2=\"180\" stroke=\"#374151\" stroke-width=\"3.5\" stroke-linecap=\"round\"/><line x1=\"105\" y1=\"110\" x2=\"105\" y2=\"180\" stroke=\"#374151\" stroke-width=\"3.5\" stroke-linecap=\"round\"/><line x1=\"125\" y1=\"110\" x2=\"125\" y2=\"180\" stroke=\"#374151\" stroke-width=\"3.5\" stroke-linecap=\"round\"/><circle cx=\"25\" cy=\"120\" r=\"3.2\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"42\" cy=\"143\" r=\"3.2\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"59\" cy=\"166\" r=\"3.2\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"76\" cy=\"129\" r=\"3.2\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"93\" cy=\"152\" r=\"3.2\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"110\" cy=\"175\" r=\"3.2\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"27\" cy=\"138\" r=\"3.2\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"44\" cy=\"161\" r=\"3.2\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"61\" cy=\"124\" r=\"3.2\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"78\" cy=\"147\" r=\"3.2\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"95\" cy=\"170\" r=\"3.2\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"112\" cy=\"133\" r=\"3.2\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"29\" cy=\"156\" r=\"3.2\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"46\" cy=\"179\" r=\"3.2\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"63\" cy=\"142\" r=\"3.2\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"80\" cy=\"165\" r=\"3.2\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"97\" cy=\"128\" r=\"3.2\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"114\" cy=\"151\" r=\"3.2\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"31\" cy=\"174\" r=\"3.2\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"48\" cy=\"137\" r=\"3.2\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"65\" cy=\"160\" r=\"3.2\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"82\" cy=\"123\" r=\"3.2\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"99\" cy=\"146\" r=\"3.2\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"116\" cy=\"169\" r=\"3.2\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"33\" cy=\"132\" r=\"3.2\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"50\" cy=\"155\" r=\"3.2\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><path d=\"M175,100 L215,60 L250,95 L280,70 L320,100 Z\" fill=\"#fde68a\" stroke=\"#a16207\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><circle cx=\"290\" cy=\"30\" r=\"12\" fill=\"#facc15\" stroke=\"#b45309\" stroke-width=\"1.5\"/><line x1=\"195\" y1=\"120\" x2=\"295\" y2=\"120\" stroke=\"#374151\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"195\" y1=\"170\" x2=\"295\" y2=\"170\" stroke=\"#374151\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"195\" y1=\"110\" x2=\"195\" y2=\"180\" stroke=\"#374151\" stroke-width=\"3.5\" stroke-linecap=\"round\"/><line x1=\"215\" y1=\"110\" x2=\"215\" y2=\"180\" stroke=\"#374151\" stroke-width=\"3.5\" stroke-linecap=\"round\"/><line x1=\"235\" y1=\"110\" x2=\"235\" y2=\"180\" stroke=\"#374151\" stroke-width=\"3.5\" stroke-linecap=\"round\"/><line x1=\"255\" y1=\"110\" x2=\"255\" y2=\"180\" stroke=\"#374151\" stroke-width=\"3.5\" stroke-linecap=\"round\"/><line x1=\"275\" y1=\"110\" x2=\"275\" y2=\"180\" stroke=\"#374151\" stroke-width=\"3.5\" stroke-linecap=\"round\"/><line x1=\"295\" y1=\"110\" x2=\"295\" y2=\"180\" stroke=\"#374151\" stroke-width=\"3.5\" stroke-linecap=\"round\"/><circle cx=\"230\" cy=\"140\" r=\"3\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"270\" cy=\"160\" r=\"3\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"75\" y=\"205\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">town P (by the sea)</text><text x=\"245\" y=\"205\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">town Q (inland)</text><line x1=\"160\" y1=\"20\" x2=\"160\" y2=\"210\" stroke=\"#e2e8f0\" stroke-width=\"1\" stroke-linecap=\"round\"/></svg>", "alt": "Town P beside the sea, with waves and spray in the air, has an iron railing covered in brown rust spots. Town Q, far inland with dry hills and sun, has a railing with only a few spots."}
  },
  {
    id: "g8-sci-metals-b-q19",
    prompt: "Two rods of the same size are dropped onto a stone floor. The picture shows the sound each one makes. Which rod is metal, and why?",
    options: [
      { id: "a", text: "Rod 2, because metals are sonorous" },
      { id: "b", text: "Rod 1, because metals are ductile" },
      { id: "c", text: "Rod 1, because metals are sonorous" },
      { id: "d", text: "Rod 2, because metals are brittle" }
    ],
    answerId: "c",
    explanation: "Rod 1 gives a long ringing sound when it strikes the floor, so it is the metal rod: metals are sonorous. Ductility means being drawn into wires, which has nothing to do with the sound a rod makes.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Two rods of the same size hitting a stone floor. Rod 1 is shown with many curved sound lines and the words ring ring. Rod 2 is shown with one short mark and the word thud.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><line x1=\"0\" y1=\"180\" x2=\"320\" y2=\"180\" stroke=\"#57534e\" stroke-width=\"4\" stroke-linecap=\"round\"/><rect x=\"60\" y=\"60\" width=\"18\" height=\"118\" fill=\"#cbd5e1\" stroke=\"#334155\" stroke-width=\"1.5\" transform=\"rotate(-12 69 119)\"/><path d=\"M100,120 q10,20 0,40\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-linejoin=\"round\"/><path d=\"M112,110 q14,26 0,54\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-linejoin=\"round\"/><path d=\"M124,100 q18,32 0,68\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-linejoin=\"round\"/><text x=\"110\" y=\"80\" font-size=\"14\" text-anchor=\"start\" font-weight=\"700\" fill=\"#2563eb\">ring... ring...</text><rect x=\"220\" y=\"60\" width=\"18\" height=\"118\" fill=\"#d6a76a\" stroke=\"#78350f\" stroke-width=\"1.5\" transform=\"rotate(-12 229 119)\"/><line x1=\"256\" y1=\"160\" x2=\"268\" y2=\"160\" stroke=\"#78350f\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><text x=\"262\" y=\"145\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#78350f\">thud</text><text x=\"70\" y=\"205\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">rod 1</text><text x=\"230\" y=\"205\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">rod 2</text></svg>", "alt": "Two rods of the same size hitting a stone floor. Rod 1 is shown with many curved sound lines and the words ring ring. Rod 2 is shown with one short mark and the word thud."}
  },
  {
    id: "g8-sci-metals-b-q20",
    prompt: "Which of these is a non-metal?",
    options: [
      { id: "a", text: "Zinc" },
      { id: "b", text: "Carbon" },
      { id: "c", text: "Mercury" },
      { id: "d", text: "Aluminium" }
    ],
    answerId: "b",
    explanation: "Carbon is a non-metal. Zinc, mercury, and aluminium are metals, though mercury is a liquid.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-b-q21",
    prompt: "The nail in the tube shown has not rusted after a week. Why?",
    options: [
      { id: "a", text: "There is no water in the tube." },
      { id: "b", text: "The water is too cold." },
      { id: "c", text: "The oil reacts with the iron." },
      { id: "d", text: "The boiled water has almost no dissolved air, and the oil stops air from entering." }
    ],
    answerId: "d",
    explanation: "Boiling drives out the air dissolved in the water, and the oil layer stops fresh air from dissolving again. Without oxygen, iron cannot rust. There is water in the tube, so no water is wrong: it is air that is missing.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A corked test tube holding an iron nail in boiled water. A thin layer of oil floats on top of the water. The nail is clean.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><path d=\"M142,70 L142,170.0 A18.0,18.0 0 0 0 178,170.0 L178,70 Z\" fill=\"#bfdbfe\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\" opacity=\"0.85\"/><path d=\"M140,40 L140,170.0 A20.0,20.0 0 0 0 180,170.0 L180,40\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"138\" y=\"30\" width=\"44\" height=\"12\" rx=\"2\" fill=\"#b45309\" stroke=\"#78350f\" stroke-width=\"1.2\"/><rect x=\"142\" y=\"70\" width=\"36\" height=\"14\" fill=\"#fde047\" stroke=\"none\" stroke-width=\"1.5\" opacity=\"0.9\"/><rect x=\"153\" y=\"48\" width=\"14\" height=\"5\" fill=\"#6b7280\" stroke=\"#1f2937\" stroke-width=\"1\"/><rect x=\"157\" y=\"52\" width=\"6\" height=\"113\" fill=\"#9ca3af\" stroke=\"#1f2937\" stroke-width=\"1\"/><polygon points=\"157,165 163,165 160,173\" fill=\"#9ca3af\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"178\" y1=\"77\" x2=\"230\" y2=\"60\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><circle cx=\"178\" cy=\"77\" r=\"2\" fill=\"#475569\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"234\" y=\"65\" font-size=\"13\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">oil layer</text><line x1=\"176\" y1=\"140\" x2=\"230\" y2=\"140\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><circle cx=\"176\" cy=\"140\" r=\"2\" fill=\"#475569\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"234\" y=\"145\" font-size=\"13\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">boiled water</text><line x1=\"163\" y1=\"110\" x2=\"100\" y2=\"110\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><circle cx=\"163\" cy=\"110\" r=\"2\" fill=\"#475569\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"96\" y=\"115\" font-size=\"13\" text-anchor=\"end\" font-weight=\"700\" fill=\"#1f2937\">iron nail</text><text x=\"160\" y=\"214\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">after one week</text></svg>", "alt": "A corked test tube holding an iron nail in boiled water. A thin layer of oil floats on top of the water. The nail is clean."}
  },
  {
    id: "g8-sci-metals-b-q22",
    prompt: "Metal X is tested in the three tubes shown. What could metal X be?",
    options: [
      { id: "a", text: "Iron" },
      { id: "b", text: "Magnesium" },
      { id: "c", text: "Silver" },
      { id: "d", text: "Gold" }
    ],
    answerId: "a",
    explanation: "X gives hydrogen with dilute acid and displaces copper, but cannot displace zinc, so it is less reactive than zinc yet more reactive than copper and hydrogen. Iron fits. Magnesium is more reactive than zinc, so it would have displaced zinc in tube 3.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Three tubes, each with a piece of metal X. Tube 1, dilute hydrochloric acid: bubbles of gas rise. Tube 2, copper sulphate solution: X gets a brown coating. Tube 3, zinc sulphate solution: no change.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><path d=\"M47,80 L47,150.0 A18.0,18.0 0 0 0 83,150.0 L83,80 Z\" fill=\"#fef9c3\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\" opacity=\"0.85\"/><path d=\"M45,50 L45,150.0 A20.0,20.0 0 0 0 85,150.0 L85,50\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"59\" y=\"100\" width=\"12\" height=\"58\" fill=\"#9ca3af\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><circle cx=\"58\" cy=\"150\" r=\"2.6\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"1\"/><circle cx=\"65\" cy=\"138\" r=\"2.6\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"1\"/><circle cx=\"72\" cy=\"126\" r=\"2.6\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"1\"/><circle cx=\"58\" cy=\"114\" r=\"2.6\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"1\"/><circle cx=\"65\" cy=\"102\" r=\"2.6\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"1\"/><path d=\"M142,80 L142,150.0 A18.0,18.0 0 0 0 178,150.0 L178,80 Z\" fill=\"#60a5fa\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\" opacity=\"0.85\"/><path d=\"M140,50 L140,150.0 A20.0,20.0 0 0 0 180,150.0 L180,50\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"154\" y=\"100\" width=\"12\" height=\"58\" fill=\"#9ca3af\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><circle cx=\"164\" cy=\"126.1\" r=\"2.6\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"156\" cy=\"132.1\" r=\"2.6\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"164\" cy=\"138.1\" r=\"2.6\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"156\" cy=\"144.1\" r=\"2.6\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"164\" cy=\"150.1\" r=\"2.6\" fill=\"#b45309\" stroke=\"none\" stroke-width=\"1.5\"/><path d=\"M237,80 L237,150.0 A18.0,18.0 0 0 0 273,150.0 L273,80 Z\" fill=\"#f1f5f9\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\" opacity=\"0.85\"/><path d=\"M235,50 L235,150.0 A20.0,20.0 0 0 0 275,150.0 L275,50\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"249\" y=\"100\" width=\"12\" height=\"58\" fill=\"#9ca3af\" stroke=\"#1f2937\" stroke-width=\"1.2\"/><text x=\"65\" y=\"192\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">dilute acid</text><text x=\"65\" y=\"210\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">bubbles</text><text x=\"160\" y=\"192\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">copper sulphate</text><text x=\"160\" y=\"210\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">brown coat</text><text x=\"255\" y=\"192\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">zinc sulphate</text><text x=\"255\" y=\"210\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">no change</text><text x=\"160\" y=\"30\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">metal X in each tube</text></svg>", "alt": "Three tubes, each with a piece of metal X. Tube 1, dilute hydrochloric acid: bubbles of gas rise. Tube 2, copper sulphate solution: X gets a brown coating. Tube 3, zinc sulphate solution: no change."}
  },
  {
    id: "g8-sci-metals-b-q23",
    prompt: "Gold is widely used for making jewellery mainly because it \u2014",
    options: [
      { id: "a", text: "Reacts quickly with air" },
      { id: "b", text: "Is the hardest metal" },
      { id: "c", text: "Is lustrous, malleable, and does not corrode easily" },
      { id: "d", text: "Is the best conductor of heat" }
    ],
    answerId: "c",
    explanation: "Gold is very unreactive, so it keeps its shine. It is also malleable and ductile, so it can be shaped into fine designs.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-metals-b-q24",
    prompt: "Charcoal is burnt and the gas formed is bubbled through water. The solution will \u2014",
    options: [
      { id: "a", text: "Turn red litmus blue" },
      { id: "b", text: "Turn blue litmus slightly red" },
      { id: "c", text: "Turn red litmus deep red" },
      { id: "d", text: "Show no effect on any indicator" }
    ],
    answerId: "b",
    explanation: "Burning carbon forms carbon dioxide, an acidic oxide. It dissolves in water to form weak carbonic acid, which turns blue litmus slightly red.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\u2699\ufe0f",
    title: "Metals and non-metals",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "magnet",
    speak: "Metals are usually shiny, malleable and conduct heat and electricity.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "magnet",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Metals", reveal: "Shiny, malleable, ductile, conductors", emoji: "\ud83e\ude99" },
      { label: "Non-metals", reveal: "Often dull, brittle, poor conductors", emoji: "\ud83d\udca8" },
      { label: "Reactions", reveal: "With oxygen and acids", emoji: "\ud83e\uddea" },
      { label: "Uses", reveal: "Match property to use", emoji: "\ud83c\udfe0" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Drawing metals into wires is called\u2026",
    options: [
        { id: "a", text: "Malleability" },
        { id: "b", text: "Ductility" },
        { id: "c", text: "Brittleness" },
        { id: "d", text: "Sonority" }
    ],
    answerId: "b",
    why: "Ductility is drawing into wires.",
    visual: "magnet",
    speak: "Drawing metals into wires is called\u2026",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Metal properties", "Contrast non-metals", "Link uses to properties", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g8ScienceMetals: ChapterDef = {
  id: "metals-nonmetals",
  title: "Metals and Non-metals",
  emoji: "\u2699\ufe0f",
  blurb: "Properties and uses",
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

export const g8ScienceMetalsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
