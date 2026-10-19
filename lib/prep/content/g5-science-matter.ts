import type { ChapterDef, PrepQuestion } from "../types";

/** Matter and Materials - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g5-sci-matter-a-q01",
    prompt: "Anything that takes up space and has mass is called \u2014",
    options: [
      { id: "a", text: "matter" },
      { id: "b", text: "energy" },
      { id: "c", text: "force" },
      { id: "d", text: "light" }
    ],
    answerId: "a",
    explanation: "Matter is anything that takes up space and has mass. Solids, liquids and gases are all matter.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-matter-a-q02",
    prompt: "Which of these is a property of most metals?",
    options: [
      { id: "a", text: "They are usually good conductors of heat" },
      { id: "b", text: "They are always transparent" },
      { id: "c", text: "They dissolve in water easily" },
      { id: "d", text: "They never bend" }
    ],
    answerId: "a",
    explanation: "Most metals conduct heat (and electricity) well. Transparency and easy dissolving are not metal properties.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-matter-a-q03",
    prompt: "Look at the three sheets in front of a lamp. Which letter shows an opaque sheet that blocks nearly all light?",
    options: [
      { id: "a", text: "R" },
      { id: "b", text: "P" },
      { id: "c", text: "Q" },
      { id: "d", text: "Both P and Q" }
    ],
    answerId: "a",
    explanation: "R is cardboard, an opaque material. Light does not pass through it. P (clear glass) is transparent; Q (frosted) is translucent.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Three sheets labelled P Q R: clear glass, frosted glass, cardboard blocking a lamp\"><style>.part { fill:#dbeafe; stroke:#333; stroke-width:2; }\n.label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n.small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n.arrow { stroke:#333; stroke-width:1.5; fill:none; }\n.badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n.glass { fill:none; stroke:#333; stroke-width:2; }\n.water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }\n.metal { fill:#94a3b8; stroke:#334155; stroke-width:1.5; }\n.wood { fill:#c99a6b; stroke:#6b4a2b; stroke-width:1.5; }\n.card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n.green { fill:#86efac; stroke:#166534; stroke-width:1.5; }\n.red { fill:#fca5a5; stroke:#991b1b; stroke-width:1.5; }\n.sun { fill:#facc15; stroke:#b45309; stroke-width:2; }\n.soil { fill:#d6b48a; stroke:#333; stroke-width:1; }\n.dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }</style><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"22\" text-anchor=\"middle\">Lamp shining through sheets</text>\n  <circle class=\"sun\" cx=\"40\" cy=\"110\" r=\"14\"/>\n  <line class=\"arrow\" x1=\"56\" y1=\"110\" x2=\"90\" y2=\"110\"/>\n  <rect class=\"part\" x=\"95\" y=\"60\" width=\"40\" height=\"100\" fill=\"#e0f2fe\" opacity=\"0.5\"/>\n  <text class=\"label\" x=\"115\" y=\"185\" text-anchor=\"middle\">P</text>\n  <rect class=\"part\" x=\"155\" y=\"60\" width=\"40\" height=\"100\" fill=\"#cbd5e1\" opacity=\"0.7\"/>\n  <text class=\"label\" x=\"175\" y=\"185\" text-anchor=\"middle\">Q</text>\n  <rect class=\"wood\" x=\"215\" y=\"60\" width=\"40\" height=\"100\"/>\n  <text class=\"label\" x=\"235\" y=\"185\" text-anchor=\"middle\">R</text>\n  <text class=\"small\" x=\"280\" y=\"110\">?</text>\n  <text class=\"small\" x=\"160\" y=\"210\" text-anchor=\"middle\">Which sheet is opaque?</text>\n</svg>", "alt": "Three sheets labelled P Q R: clear glass, frosted glass, cardboard blocking a lamp"}
  },
  {
    id: "g5-sci-matter-a-q04",
    prompt: "A material that lets almost all light pass through clearly is called \u2014",
    options: [
      { id: "a", text: "transparent" },
      { id: "b", text: "opaque" },
      { id: "c", text: "translucent" },
      { id: "d", text: "magnetic" }
    ],
    answerId: "a",
    explanation: "Transparent materials (clear glass, clean water) let light pass so you can see through them clearly.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-matter-a-q05",
    prompt: "Salt disappears when stirred into water, but you can taste it. The salt has \u2014",
    options: [
      { id: "a", text: "dissolved" },
      { id: "b", text: "vanished forever" },
      { id: "c", text: "frozen" },
      { id: "d", text: "evaporated" }
    ],
    answerId: "a",
    explanation: "Salt dissolves in water. The particles spread out so you cannot see them, but the salt is still there.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-matter-a-q06",
    prompt: "Which beaker best shows a solute dissolving in a solvent?",
    options: [
      { id: "a", text: "Q" },
      { id: "b", text: "P" },
      { id: "c", text: "R" },
      { id: "d", text: "None of them" }
    ],
    answerId: "a",
    explanation: "Beaker Q shows salt being stirred into water \u2014 dissolving. P is already clear water; R is muddy water settling.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Three beakers: P clear water, Q salt dissolving with spoon, R muddy water settling\"><style>.part { fill:#dbeafe; stroke:#333; stroke-width:2; }\n.label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n.small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n.arrow { stroke:#333; stroke-width:1.5; fill:none; }\n.badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n.glass { fill:none; stroke:#333; stroke-width:2; }\n.water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }\n.metal { fill:#94a3b8; stroke:#334155; stroke-width:1.5; }\n.wood { fill:#c99a6b; stroke:#6b4a2b; stroke-width:1.5; }\n.card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n.green { fill:#86efac; stroke:#166534; stroke-width:1.5; }\n.red { fill:#fca5a5; stroke:#991b1b; stroke-width:1.5; }\n.sun { fill:#facc15; stroke:#b45309; stroke-width:2; }\n.soil { fill:#d6b48a; stroke:#333; stroke-width:1; }\n.dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }</style><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"20\" text-anchor=\"middle\">Three beakers</text>\n  <rect class=\"glass\" x=\"20\" y=\"50\" width=\"70\" height=\"110\"/>\n  <rect class=\"water\" x=\"22\" y=\"80\" width=\"66\" height=\"78\"/>\n  <text class=\"label\" x=\"55\" y=\"185\" text-anchor=\"middle\">P</text>\n  <rect class=\"glass\" x=\"125\" y=\"50\" width=\"70\" height=\"110\"/>\n  <rect class=\"water\" x=\"127\" y=\"80\" width=\"66\" height=\"78\"/>\n  <circle cx=\"150\" cy=\"100\" r=\"3\" fill=\"#fff\"/><circle cx=\"170\" cy=\"120\" r=\"3\" fill=\"#fff\"/>\n  <circle cx=\"155\" cy=\"140\" r=\"3\" fill=\"#fff\"/>\n  <line class=\"arrow\" x1=\"195\" y1=\"70\" x2=\"180\" y2=\"95\"/>\n  <text class=\"small\" x=\"210\" y=\"68\">stir</text>\n  <text class=\"label\" x=\"160\" y=\"185\" text-anchor=\"middle\">Q</text>\n  <rect class=\"glass\" x=\"230\" y=\"50\" width=\"70\" height=\"110\"/>\n  <rect class=\"water\" x=\"232\" y=\"80\" width=\"66\" height=\"78\"/>\n  <ellipse cx=\"265\" cy=\"145\" rx=\"28\" ry=\"10\" fill=\"#a16207\" opacity=\"0.6\"/>\n  <text class=\"label\" x=\"265\" y=\"185\" text-anchor=\"middle\">R</text>\n  <text class=\"small\" x=\"160\" y=\"210\" text-anchor=\"middle\">P clear \u00b7 Q dissolving \u00b7 R muddy</text>\n</svg>", "alt": "Three beakers: P clear water, Q salt dissolving with spoon, R muddy water settling"}
  },
  {
    id: "g5-sci-matter-a-q07",
    prompt: "Wood is often used for the handles of cooking pans because wood \u2014",
    options: [
      { id: "a", text: "conducts heat very well" },
      { id: "b", text: "is a poor conductor of heat" },
      { id: "c", text: "melts at a low temperature" },
      { id: "d", text: "dissolves in soup" }
    ],
    answerId: "b",
    explanation: "Wood is a poor heat conductor (an insulator), so the handle stays cooler than a metal handle would.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-matter-a-q08",
    prompt: "Which object in the tank is most likely an iron nail that sinks?",
    options: [
      { id: "a", text: "P" },
      { id: "b", text: "Q" },
      { id: "c", text: "R" },
      { id: "d", text: "Both P and R" }
    ],
    answerId: "b",
    explanation: "Q is the small metal bar at the bottom \u2014 like an iron nail, it is denser than water so it sinks. P and R float.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Tank of water with four objects: cork floating, iron nail sinking, plastic bottle floating, stone sinking \u2014 labelled P Q R S\"><style>.part { fill:#dbeafe; stroke:#333; stroke-width:2; }\n.label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n.small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n.arrow { stroke:#333; stroke-width:1.5; fill:none; }\n.badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n.glass { fill:none; stroke:#333; stroke-width:2; }\n.water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }\n.metal { fill:#94a3b8; stroke:#334155; stroke-width:1.5; }\n.wood { fill:#c99a6b; stroke:#6b4a2b; stroke-width:1.5; }\n.card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n.green { fill:#86efac; stroke:#166534; stroke-width:1.5; }\n.red { fill:#fca5a5; stroke:#991b1b; stroke-width:1.5; }\n.sun { fill:#facc15; stroke:#b45309; stroke-width:2; }\n.soil { fill:#d6b48a; stroke:#333; stroke-width:1; }\n.dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }</style><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"20\" text-anchor=\"middle\">Objects in a water tank</text>\n  <rect class=\"glass\" x=\"30\" y=\"40\" width=\"260\" height=\"140\"/>\n  <rect class=\"water\" x=\"32\" y=\"70\" width=\"256\" height=\"108\"/>\n  <ellipse class=\"wood\" cx=\"80\" cy=\"85\" rx=\"22\" ry=\"12\"/>\n  <circle class=\"badge\" cx=\"80\" cy=\"55\" r=\"10\"/><text class=\"label\" x=\"80\" y=\"60\" text-anchor=\"middle\">P</text>\n  <rect class=\"metal\" x=\"140\" y=\"155\" width=\"30\" height=\"8\"/>\n  <circle class=\"badge\" cx=\"155\" cy=\"140\" r=\"10\"/><text class=\"label\" x=\"155\" y=\"145\" text-anchor=\"middle\">Q</text>\n  <ellipse cx=\"220\" cy=\"90\" rx=\"18\" ry=\"14\" fill=\"#fda4af\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"badge\" cx=\"220\" cy=\"55\" r=\"10\"/><text class=\"label\" x=\"220\" y=\"60\" text-anchor=\"middle\">R</text>\n  <ellipse cx=\"270\" cy=\"160\" rx=\"16\" ry=\"12\" fill=\"#78716c\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"badge\" cx=\"270\" cy=\"130\" r=\"10\"/><text class=\"label\" x=\"270\" y=\"135\" text-anchor=\"middle\">S</text>\n</svg>", "alt": "Tank of water with four objects: cork floating, iron nail sinking, plastic bottle floating, stone sinking \u2014 labelled P Q R S"}
  },
  {
    id: "g5-sci-matter-a-q09",
    prompt: "Rubber is used for the soles of shoes mainly because it is \u2014",
    options: [
      { id: "a", text: "transparent and brittle" },
      { id: "b", text: "flexible and gives good grip" },
      { id: "c", text: "magnetic" },
      { id: "d", text: "soluble in rainwater" }
    ],
    answerId: "b",
    explanation: "Rubber bends and grips the floor, which helps you walk safely without slipping.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-matter-a-q10",
    prompt: "Which separation method does the picture show?",
    options: [
      { id: "a", text: "Sieving" },
      { id: "b", text: "Filtration" },
      { id: "c", text: "Magnetic separation" },
      { id: "d", text: "Handpicking" }
    ],
    answerId: "b",
    explanation: "A funnel with filter paper lets liquid through and traps solid bits \u2014 that is filtration.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Funnel with filter paper over a beaker; muddy mixture poured in; clear liquid below\"><style>.part { fill:#dbeafe; stroke:#333; stroke-width:2; }\n.label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n.small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n.arrow { stroke:#333; stroke-width:1.5; fill:none; }\n.badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n.glass { fill:none; stroke:#333; stroke-width:2; }\n.water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }\n.metal { fill:#94a3b8; stroke:#334155; stroke-width:1.5; }\n.wood { fill:#c99a6b; stroke:#6b4a2b; stroke-width:1.5; }\n.card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n.green { fill:#86efac; stroke:#166534; stroke-width:1.5; }\n.red { fill:#fca5a5; stroke:#991b1b; stroke-width:1.5; }\n.sun { fill:#facc15; stroke:#b45309; stroke-width:2; }\n.soil { fill:#d6b48a; stroke:#333; stroke-width:1; }\n.dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }</style><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"20\" text-anchor=\"middle\">Separation setup</text>\n  <path d=\"M120,40 L160,100 L200,40\" class=\"glass\"/>\n  <path d=\"M130,50 Q160,90 190,50\" fill=\"#d6b48a\" opacity=\"0.5\"/>\n  <ellipse cx=\"160\" cy=\"48\" rx=\"45\" ry=\"8\" fill=\"#a16207\" opacity=\"0.4\"/>\n  <rect class=\"glass\" x=\"120\" y=\"110\" width=\"80\" height=\"70\"/>\n  <rect class=\"water\" x=\"122\" y=\"140\" width=\"76\" height=\"38\"/>\n  <text class=\"small\" x=\"160\" y=\"200\" text-anchor=\"middle\">Clear liquid collects below</text>\n</svg>", "alt": "Funnel with filter paper over a beaker; muddy mixture poured in; clear liquid below"}
  },
  {
    id: "g5-sci-matter-a-q11",
    prompt: "To separate iron nails from a heap of sand quickly, the best method is \u2014",
    options: [
      { id: "a", text: "filtration" },
      { id: "b", text: "a magnet" },
      { id: "c", text: "evaporation" },
      { id: "d", text: "using only a large-hole sieve" }
    ],
    answerId: "b",
    explanation: "Iron is magnetic, so a magnet pulls the nails out of the sand. Filtration needs a liquid mixture.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-matter-a-q12",
    prompt: "Riya stirs sand into a jar of water (Jar 1). Jar 2 shows the same jar after it has stood still for one hour. What has happened in Jar 2?",
    options: [
      { id: "a", text: "Evaporation" },
      { id: "b", text: "Sedimentation" },
      { id: "c", text: "Condensation" },
      { id: "d", text: "Melting" }
    ],
    answerId: "b",
    explanation: "The heavier sand grains sank and collected at the bottom while the jar stood still. This is sedimentation. It is not evaporation: the water level has not dropped, so no water has turned into vapour.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Two jars of water with the same water level. Jar 1, just after stirring, is evenly cloudy brown. Jar 2, one hour later, has clear water above a layer of sand at the bottom.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"37\" y=\"62\" width=\"86\" height=\"108\" fill=\"#d6b48a\" stroke=\"none\" stroke-width=\"1.5\" opacity=\"0.75\"/><circle cx=\"48\" cy=\"92\" r=\"1.8\" fill=\"#a16207\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"70\" cy=\"110\" r=\"1.8\" fill=\"#a16207\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"90\" cy=\"84\" r=\"1.8\" fill=\"#a16207\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"58\" cy=\"130\" r=\"1.8\" fill=\"#a16207\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"100\" cy=\"120\" r=\"1.8\" fill=\"#a16207\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"80\" cy=\"140\" r=\"1.8\" fill=\"#a16207\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"44\" cy=\"150\" r=\"1.8\" fill=\"#a16207\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"96\" cy=\"156\" r=\"1.8\" fill=\"#a16207\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"64\" cy=\"162\" r=\"1.8\" fill=\"#a16207\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"110\" cy=\"98\" r=\"1.8\" fill=\"#a16207\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"52\" cy=\"112\" r=\"1.8\" fill=\"#a16207\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"86\" cy=\"126\" r=\"1.8\" fill=\"#a16207\" stroke=\"none\" stroke-width=\"1.5\"/><path d=\"M35,50 L35,162 Q35,170 43,170 L117,170 Q125,170 125,162 L125,50\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/><rect x=\"31\" y=\"42\" width=\"98\" height=\"10\" rx=\"3\" fill=\"#e5e7eb\" stroke=\"#6b7280\" stroke-width=\"1.2\"/><rect x=\"207\" y=\"62\" width=\"86\" height=\"92\" fill=\"#bfdbfe\" stroke=\"none\" stroke-width=\"1.5\" opacity=\"0.8\"/><rect x=\"207\" y=\"152\" width=\"86\" height=\"18\" fill=\"#c08a4a\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"212\" cy=\"166\" r=\"2.2\" fill=\"#92400e\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"225\" cy=\"159\" r=\"2.2\" fill=\"#92400e\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"238\" cy=\"164\" r=\"2.2\" fill=\"#92400e\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"251\" cy=\"157\" r=\"2.2\" fill=\"#92400e\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"264\" cy=\"162\" r=\"2.2\" fill=\"#92400e\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"277\" cy=\"155\" r=\"2.2\" fill=\"#92400e\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"290\" cy=\"160\" r=\"2.2\" fill=\"#92400e\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"223\" cy=\"165\" r=\"2.2\" fill=\"#92400e\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"236\" cy=\"158\" r=\"2.2\" fill=\"#92400e\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"249\" cy=\"163\" r=\"2.2\" fill=\"#92400e\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"262\" cy=\"156\" r=\"2.2\" fill=\"#92400e\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"275\" cy=\"161\" r=\"2.2\" fill=\"#92400e\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"288\" cy=\"166\" r=\"2.2\" fill=\"#92400e\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"221\" cy=\"159\" r=\"2.2\" fill=\"#92400e\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"234\" cy=\"164\" r=\"2.2\" fill=\"#92400e\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"247\" cy=\"157\" r=\"2.2\" fill=\"#92400e\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"260\" cy=\"162\" r=\"2.2\" fill=\"#92400e\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"273\" cy=\"155\" r=\"2.2\" fill=\"#92400e\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"286\" cy=\"160\" r=\"2.2\" fill=\"#92400e\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"219\" cy=\"165\" r=\"2.2\" fill=\"#92400e\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"232\" cy=\"158\" r=\"2.2\" fill=\"#92400e\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"245\" cy=\"163\" r=\"2.2\" fill=\"#92400e\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"258\" cy=\"156\" r=\"2.2\" fill=\"#92400e\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"271\" cy=\"161\" r=\"2.2\" fill=\"#92400e\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"284\" cy=\"166\" r=\"2.2\" fill=\"#92400e\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"217\" cy=\"159\" r=\"2.2\" fill=\"#92400e\" stroke=\"none\" stroke-width=\"1.5\"/><path d=\"M205,50 L205,162 Q205,170 213,170 L287,170 Q295,170 295,162 L295,50\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/><rect x=\"201\" y=\"42\" width=\"98\" height=\"10\" rx=\"3\" fill=\"#e5e7eb\" stroke=\"#6b7280\" stroke-width=\"1.2\"/><line x1=\"37\" y1=\"62\" x2=\"123\" y2=\"62\" stroke=\"#2563eb\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"207\" y1=\"62\" x2=\"293\" y2=\"62\" stroke=\"#2563eb\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"80\" y=\"196\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">Jar 1: just stirred</text><text x=\"250\" y=\"196\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">Jar 2: after 1 hour</text><line x1=\"140\" y1=\"110\" x2=\"182.0\" y2=\"110.0\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"190,110 182,114.4 182,105.6\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><text x=\"165\" y=\"100\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">wait</text></svg>", "alt": "Two jars of water with the same water level. Jar 1, just after stirring, is evenly cloudy brown. Jar 2, one hour later, has clear water above a layer of sand at the bottom."}
  },
  {
    id: "g5-sci-matter-a-q13",
    prompt: "In the change-of-state diagram, arrow 1 (ice \u2192 water) shows \u2014",
    options: [
      { id: "a", text: "freezing" },
      { id: "b", text: "burning" },
      { id: "c", text: "melting" },
      { id: "d", text: "condensation" }
    ],
    answerId: "c",
    explanation: "Ice changing to liquid water is melting. Freezing is the reverse; condensation makes liquid from vapour.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Arrow diagram: ice cube to water to steam with labels 1 and 2 on the arrows\"><style>.part { fill:#dbeafe; stroke:#333; stroke-width:2; }\n.label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n.small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n.arrow { stroke:#333; stroke-width:1.5; fill:none; }\n.badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n.glass { fill:none; stroke:#333; stroke-width:2; }\n.water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }\n.metal { fill:#94a3b8; stroke:#334155; stroke-width:1.5; }\n.wood { fill:#c99a6b; stroke:#6b4a2b; stroke-width:1.5; }\n.card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n.green { fill:#86efac; stroke:#166534; stroke-width:1.5; }\n.red { fill:#fca5a5; stroke:#991b1b; stroke-width:1.5; }\n.sun { fill:#facc15; stroke:#b45309; stroke-width:2; }\n.soil { fill:#d6b48a; stroke:#333; stroke-width:1; }\n.dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }</style><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"22\" text-anchor=\"middle\">Change of state</text>\n  <rect class=\"part\" x=\"30\" y=\"80\" width=\"50\" height=\"50\" fill=\"#e0f2fe\" stroke=\"#0369a1\"/>\n  <text class=\"small\" x=\"55\" y=\"150\" text-anchor=\"middle\">ice</text>\n  <line class=\"arrow\" x1=\"90\" y1=\"105\" x2=\"130\" y2=\"105\"/>\n  <circle class=\"badge\" cx=\"110\" cy=\"90\" r=\"10\"/><text class=\"label\" x=\"110\" y=\"95\" text-anchor=\"middle\">1</text>\n  <rect class=\"water\" x=\"140\" y=\"90\" width=\"50\" height=\"40\"/>\n  <rect class=\"glass\" x=\"140\" y=\"70\" width=\"50\" height=\"70\"/>\n  <text class=\"small\" x=\"165\" y=\"160\" text-anchor=\"middle\">water</text>\n  <line class=\"arrow\" x1=\"200\" y1=\"105\" x2=\"240\" y2=\"105\"/>\n  <circle class=\"badge\" cx=\"220\" cy=\"90\" r=\"10\"/><text class=\"label\" x=\"220\" y=\"95\" text-anchor=\"middle\">2</text>\n  <circle cx=\"270\" cy=\"80\" r=\"4\" fill=\"#64748b\"/><circle cx=\"285\" cy=\"95\" r=\"4\" fill=\"#64748b\"/>\n  <circle cx=\"275\" cy=\"110\" r=\"4\" fill=\"#64748b\"/><circle cx=\"290\" cy=\"70\" r=\"3\" fill=\"#64748b\"/>\n  <text class=\"small\" x=\"280\" y=\"150\" text-anchor=\"middle\">steam</text>\n</svg>", "alt": "Arrow diagram: ice cube to water to steam with labels 1 and 2 on the arrows"}
  },
  {
    id: "g5-sci-matter-a-q14",
    prompt: "Wet clothes dry on a sunny line mainly because water \u2014",
    options: [
      { id: "a", text: "freezes into ice" },
      { id: "b", text: "turns into salt" },
      { id: "c", text: "evaporates into the air" },
      { id: "d", text: "filters through the cloth" }
    ],
    answerId: "c",
    explanation: "Heat from the Sun helps water change into water vapour and mix with air \u2014 evaporation.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-matter-a-q15",
    prompt: "Which change is usually irreversible in everyday life?",
    options: [
      { id: "a", text: "Melting ice" },
      { id: "b", text: "Freezing water" },
      { id: "c", text: "Burning paper" },
      { id: "d", text: "Dissolving sugar then evaporating water" }
    ],
    answerId: "c",
    explanation: "Burning paper makes ash and smoke; you cannot get the paper back. Melting and freezing are reversible.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-matter-a-q16",
    prompt: "A plastic raincoat is useful in the rain because plastic is \u2014",
    options: [
      { id: "a", text: "magnetic" },
      { id: "b", text: "a good heat conductor" },
      { id: "c", text: "waterproof" },
      { id: "d", text: "soluble" }
    ],
    answerId: "c",
    explanation: "Plastic does not let water soak through easily, so it keeps you dry.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-matter-a-q17",
    prompt: "Which material is best for making a window pane you can see through?",
    options: [
      { id: "a", text: "Wood" },
      { id: "b", text: "Cardboard" },
      { id: "c", text: "Clear glass" },
      { id: "d", text: "Rubber" }
    ],
    answerId: "c",
    explanation: "Clear glass is transparent, so light passes through and you can see outside.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-matter-a-q18",
    prompt: "In the test circuit, which rod placed in gap X will most likely make the bulb light?",
    options: [
      { id: "a", text: "A wooden stick" },
      { id: "b", text: "A plastic comb" },
      { id: "c", text: "A copper wire" },
      { id: "d", text: "A rubber band" }
    ],
    answerId: "c",
    explanation: "Copper is a metal and a good electrical conductor, so it completes the circuit. Wood, plastic and rubber are insulators.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Circuit with battery, bulb, and gap X where different rods can be placed\"><style>.part { fill:#dbeafe; stroke:#333; stroke-width:2; }\n.label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n.small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n.arrow { stroke:#333; stroke-width:1.5; fill:none; }\n.badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n.glass { fill:none; stroke:#333; stroke-width:2; }\n.water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }\n.metal { fill:#94a3b8; stroke:#334155; stroke-width:1.5; }\n.wood { fill:#c99a6b; stroke:#6b4a2b; stroke-width:1.5; }\n.card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n.green { fill:#86efac; stroke:#166534; stroke-width:1.5; }\n.red { fill:#fca5a5; stroke:#991b1b; stroke-width:1.5; }\n.sun { fill:#facc15; stroke:#b45309; stroke-width:2; }\n.soil { fill:#d6b48a; stroke:#333; stroke-width:1; }\n.dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }</style><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"22\" text-anchor=\"middle\">Test circuit \u2014 gap X</text>\n  <rect class=\"metal\" x=\"40\" y=\"90\" width=\"50\" height=\"30\" rx=\"4\"/>\n  <text class=\"small\" x=\"65\" y=\"110\" text-anchor=\"middle\">battery</text>\n  <line class=\"arrow\" x1=\"90\" y1=\"105\" x2=\"130\" y2=\"105\"/>\n  <circle cx=\"160\" cy=\"105\" r=\"18\" fill=\"#fef08a\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text class=\"small\" x=\"160\" y=\"109\" text-anchor=\"middle\">bulb</text>\n  <line class=\"arrow\" x1=\"178\" y1=\"105\" x2=\"210\" y2=\"105\"/>\n  <rect class=\"dash\" x=\"215\" y=\"90\" width=\"50\" height=\"30\"/>\n  <text class=\"label\" x=\"240\" y=\"110\" text-anchor=\"middle\">X</text>\n  <line class=\"arrow\" x1=\"240\" y1=\"120\" x2=\"240\" y2=\"150\"/>\n  <line class=\"arrow\" x1=\"240\" y1=\"150\" x2=\"65\" y2=\"150\"/>\n  <line class=\"arrow\" x1=\"65\" y1=\"150\" x2=\"65\" y2=\"120\"/>\n  <text class=\"small\" x=\"160\" y=\"200\" text-anchor=\"middle\">Place a rod in gap X</text>\n</svg>", "alt": "Circuit with battery, bulb, and gap X where different rods can be placed"}
  },
  {
    id: "g5-sci-matter-a-q19",
    prompt: "Sugar mixed into water is best called a \u2014",
    options: [
      { id: "a", text: "pure element" },
      { id: "b", text: "new metal" },
      { id: "c", text: "gas only" },
      { id: "d", text: "mixture (solution)" }
    ],
    answerId: "d",
    explanation: "Dissolved sugar and water form a solution, which is a type of mixture. You can separate them by evaporating the water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-matter-a-q20",
    prompt: "Which property makes aluminium useful for making light cooking pots?",
    options: [
      { id: "a", text: "It is denser than lead" },
      { id: "b", text: "It is opaque to magnets only" },
      { id: "c", text: "It dissolves in oil" },
      { id: "d", text: "It is a good conductor of heat and fairly light" }
    ],
    answerId: "d",
    explanation: "Aluminium conducts heat well for cooking and is lighter than many other metals.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-matter-a-q21",
    prompt: "Arjun separates a dry mixture in the way shown in the picture. Which mixture could he be separating?",
    options: [
      { id: "a", text: "Salt from seawater" },
      { id: "b", text: "Ink from water" },
      { id: "c", text: "Iron pins from copper wire" },
      { id: "d", text: "Small pebbles from flour" }
    ],
    answerId: "d",
    explanation: "The picture shows sieving: fine powder falls through the holes of the sieve and bigger lumps stay on top. That suits pebbles mixed with flour. Salt in seawater cannot be sieved, because dissolved salt passes through any holes with the water; it needs evaporation.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A round sieve with a handle held over a bowl. Large grey lumps stay in the sieve while fine white powder falls through into the bowl.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><path d=\"M100,74 Q160,104 220,74\" fill=\"none\" stroke=\"#374151\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/><line x1=\"100\" y1=\"74\" x2=\"220\" y2=\"74\" stroke=\"#374151\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><line x1=\"110\" y1=\"76\" x2=\"110\" y2=\"78.5\" stroke=\"#9ca3af\" stroke-width=\"0.8\" stroke-linecap=\"round\"/><line x1=\"120\" y1=\"76\" x2=\"120\" y2=\"80.0\" stroke=\"#9ca3af\" stroke-width=\"0.8\" stroke-linecap=\"round\"/><line x1=\"130\" y1=\"76\" x2=\"130\" y2=\"81.5\" stroke=\"#9ca3af\" stroke-width=\"0.8\" stroke-linecap=\"round\"/><line x1=\"140\" y1=\"76\" x2=\"140\" y2=\"83.0\" stroke=\"#9ca3af\" stroke-width=\"0.8\" stroke-linecap=\"round\"/><line x1=\"150\" y1=\"76\" x2=\"150\" y2=\"84.5\" stroke=\"#9ca3af\" stroke-width=\"0.8\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"76\" x2=\"160\" y2=\"86.0\" stroke=\"#9ca3af\" stroke-width=\"0.8\" stroke-linecap=\"round\"/><line x1=\"170\" y1=\"76\" x2=\"170\" y2=\"84.5\" stroke=\"#9ca3af\" stroke-width=\"0.8\" stroke-linecap=\"round\"/><line x1=\"180\" y1=\"76\" x2=\"180\" y2=\"83.0\" stroke=\"#9ca3af\" stroke-width=\"0.8\" stroke-linecap=\"round\"/><line x1=\"190\" y1=\"76\" x2=\"190\" y2=\"81.5\" stroke=\"#9ca3af\" stroke-width=\"0.8\" stroke-linecap=\"round\"/><line x1=\"200\" y1=\"76\" x2=\"200\" y2=\"80.0\" stroke=\"#9ca3af\" stroke-width=\"0.8\" stroke-linecap=\"round\"/><line x1=\"210\" y1=\"76\" x2=\"210\" y2=\"78.5\" stroke=\"#9ca3af\" stroke-width=\"0.8\" stroke-linecap=\"round\"/><rect x=\"220\" y=\"70\" width=\"70\" height=\"8\" rx=\"3\" fill=\"#a16207\" stroke=\"#713f12\" stroke-width=\"1.2\"/><ellipse cx=\"120\" cy=\"66\" rx=\"7\" ry=\"5\" fill=\"#9ca3af\" stroke=\"#4b5563\" stroke-width=\"1\"/><ellipse cx=\"140\" cy=\"70\" rx=\"7\" ry=\"5\" fill=\"#9ca3af\" stroke=\"#4b5563\" stroke-width=\"1\"/><ellipse cx=\"162\" cy=\"64\" rx=\"7\" ry=\"5\" fill=\"#9ca3af\" stroke=\"#4b5563\" stroke-width=\"1\"/><ellipse cx=\"184\" cy=\"69\" rx=\"7\" ry=\"5\" fill=\"#9ca3af\" stroke=\"#4b5563\" stroke-width=\"1\"/><ellipse cx=\"150\" cy=\"60\" rx=\"7\" ry=\"5\" fill=\"#9ca3af\" stroke=\"#4b5563\" stroke-width=\"1\"/><ellipse cx=\"200\" cy=\"66\" rx=\"7\" ry=\"5\" fill=\"#9ca3af\" stroke=\"#4b5563\" stroke-width=\"1\"/><circle cx=\"130\" cy=\"92\" r=\"1.6\" fill=\"#f5f5f4\" stroke=\"#a8a29e\" stroke-width=\"0.6\"/><circle cx=\"150\" cy=\"100\" r=\"1.6\" fill=\"#f5f5f4\" stroke=\"#a8a29e\" stroke-width=\"0.6\"/><circle cx=\"170\" cy=\"95\" r=\"1.6\" fill=\"#f5f5f4\" stroke=\"#a8a29e\" stroke-width=\"0.6\"/><circle cx=\"190\" cy=\"104\" r=\"1.6\" fill=\"#f5f5f4\" stroke=\"#a8a29e\" stroke-width=\"0.6\"/><circle cx=\"140\" cy=\"112\" r=\"1.6\" fill=\"#f5f5f4\" stroke=\"#a8a29e\" stroke-width=\"0.6\"/><circle cx=\"175\" cy=\"116\" r=\"1.6\" fill=\"#f5f5f4\" stroke=\"#a8a29e\" stroke-width=\"0.6\"/><circle cx=\"160\" cy=\"124\" r=\"1.6\" fill=\"#f5f5f4\" stroke=\"#a8a29e\" stroke-width=\"0.6\"/><circle cx=\"195\" cy=\"120\" r=\"1.6\" fill=\"#f5f5f4\" stroke=\"#a8a29e\" stroke-width=\"0.6\"/><circle cx=\"125\" cy=\"120\" r=\"1.6\" fill=\"#f5f5f4\" stroke=\"#a8a29e\" stroke-width=\"0.6\"/><circle cx=\"185\" cy=\"132\" r=\"1.6\" fill=\"#f5f5f4\" stroke=\"#a8a29e\" stroke-width=\"0.6\"/><path d=\"M90,140 Q160,210 230,140 Z\" fill=\"#e7e5e4\" stroke=\"#57534e\" stroke-width=\"2\" stroke-linejoin=\"round\"/><ellipse cx=\"160\" cy=\"150\" rx=\"56\" ry=\"8\" fill=\"#fafaf9\" stroke=\"#d6d3d1\" stroke-width=\"1\"/><text x=\"160\" y=\"30\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">Sieve over a bowl</text><line x1=\"184\" y1=\"64\" x2=\"250\" y2=\"45\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><circle cx=\"184\" cy=\"64\" r=\"2\" fill=\"#475569\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"254\" y=\"50\" font-size=\"13\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">lumps</text><line x1=\"170\" y1=\"150\" x2=\"258\" y2=\"168\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><circle cx=\"170\" cy=\"150\" r=\"2\" fill=\"#475569\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"262\" y=\"173\" font-size=\"13\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">powder</text></svg>", "alt": "A round sieve with a handle held over a bowl. Large grey lumps stay in the sieve while fine white powder falls through into the bowl."}
  },
  {
    id: "g5-sci-matter-a-q22",
    prompt: "A translucent material \u2014",
    options: [
      { id: "a", text: "blocks all light" },
      { id: "b", text: "is always a metal" },
      { id: "c", text: "must be magnetic" },
      { id: "d", text: "lets some light through but not a clear view" }
    ],
    answerId: "d",
    explanation: "Frosted glass and tracing paper are translucent: light passes, but you cannot see sharp details through them.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-matter-a-q23",
    prompt: "Which statement about gases is true?",
    options: [
      { id: "a", text: "They have a fixed shape and volume" },
      { id: "b", text: "They have a fixed volume but no shape" },
      { id: "c", text: "They cannot be matter" },
      { id: "d", text: "They have neither fixed shape nor fixed volume" }
    ],
    answerId: "d",
    explanation: "Gases spread to fill their container. They have no fixed shape or volume of their own.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-matter-a-q24",
    prompt: "Why are electric wires coated with plastic?",
    options: [
      { id: "a", text: "Plastic makes the wire magnetic" },
      { id: "b", text: "Plastic helps electricity flow faster" },
      { id: "c", text: "Plastic dissolves dirt on the wire" },
      { id: "d", text: "Plastic is an electrical insulator and safer to touch" }
    ],
    answerId: "d",
    explanation: "Plastic is an insulator. The coating stops current from escaping and protects people from shocks.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g5-sci-matter-b-q01",
    prompt: "Which everyday object is made mainly because the material is flexible?",
    options: [
      { id: "a", text: "A rubber band" },
      { id: "b", text: "A glass window" },
      { id: "c", text: "A ceramic plate" },
      { id: "d", text: "A stone step" }
    ],
    answerId: "a",
    explanation: "Rubber bands stretch and bend without breaking. Glass, ceramic and stone are much more rigid.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-matter-b-q02",
    prompt: "To get salt from seawater, people often use \u2014",
    options: [
      { id: "a", text: "evaporation" },
      { id: "b", text: "a magnet" },
      { id: "c", text: "sieving alone" },
      { id: "d", text: "filtration of dry salt" }
    ],
    answerId: "a",
    explanation: "When seawater evaporates, water leaves as vapour and salt crystals remain.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-matter-b-q03",
    prompt: "Which material is the best electrical insulator for a plug cover?",
    options: [
      { id: "a", text: "Plastic" },
      { id: "b", text: "Copper" },
      { id: "c", text: "Aluminium" },
      { id: "d", text: "Iron" }
    ],
    answerId: "a",
    explanation: "Plastic does not let current pass easily, so it is safer for covers. Copper, aluminium and iron conduct.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-matter-b-q04",
    prompt: "Ravi shakes two liquids that do not mix in a jar, then waits five minutes. The picture shows the jar. What does it tell you about liquid X compared with liquid Y?",
    options: [
      { id: "a", text: "A cupful of X weighs less than a cupful of Y (X is less dense)" },
      { id: "b", text: "A cupful of X weighs more than a cupful of Y" },
      { id: "c", text: "X has dissolved in Y" },
      { id: "d", text: "X is attracted by a magnet" }
    ],
    answerId: "a",
    explanation: "X stays on top of Y, so the same amount of X is lighter: X is less dense than Y. X has not dissolved: if it had, the jar would hold one mixed liquid, not two separate layers.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A jar after shaking and standing for five minutes: a yellow layer X sits on top of a blue layer Y, with a sharp line between them.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"117\" y=\"60\" width=\"86\" height=\"34\" fill=\"#fde047\" stroke=\"none\" stroke-width=\"1.5\" opacity=\"0.9\"/><rect x=\"117\" y=\"94\" width=\"86\" height=\"74\" fill=\"#93c5fd\" stroke=\"none\" stroke-width=\"1.5\" opacity=\"0.85\"/><line x1=\"117\" y1=\"94\" x2=\"203\" y2=\"94\" stroke=\"#a16207\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><path d=\"M115,48 L115,160 Q115,168 123,168 L197,168 Q205,168 205,160 L205,48\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/><rect x=\"111\" y=\"40\" width=\"98\" height=\"10\" rx=\"3\" fill=\"#e5e7eb\" stroke=\"#6b7280\" stroke-width=\"1.2\"/><line x1=\"190\" y1=\"77\" x2=\"250\" y2=\"70\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><circle cx=\"190\" cy=\"77\" r=\"2\" fill=\"#475569\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"254\" y=\"75\" font-size=\"16\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">X</text><line x1=\"190\" y1=\"130\" x2=\"250\" y2=\"135\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><circle cx=\"190\" cy=\"130\" r=\"2\" fill=\"#475569\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"254\" y=\"140\" font-size=\"16\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">Y</text><text x=\"160\" y=\"200\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">after 5 minutes</text></svg>", "alt": "A jar after shaking and standing for five minutes: a yellow layer X sits on top of a blue layer Y, with a sharp line between them."}
  },
  {
    id: "g5-sci-matter-b-q05",
    prompt: "Crushing a chalk stick into powder is \u2014",
    options: [
      { id: "a", text: "a physical change of form" },
      { id: "b", text: "burning" },
      { id: "c", text: "a new plant growing" },
      { id: "d", text: "condensation" }
    ],
    answerId: "a",
    explanation: "The chalk is still chalk \u2014 only the size and shape changed. No new substance formed.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-matter-b-q06",
    prompt: "Four spoons stand in a bowl of hot water with a dab of butter on top of each handle. The picture shows them after two minutes. Which pair of materials could spoons 1 and 2 be made of?",
    options: [
      { id: "a", text: "Copper and iron" },
      { id: "b", text: "Wood and plastic" },
      { id: "c", text: "Bamboo and rubber" },
      { id: "d", text: "Wood and copper" }
    ],
    answerId: "a",
    explanation: "Heat travelled up spoons 1 and 2 fast enough to melt the butter, so both must be good conductors of heat, such as the metals copper and iron. Wood and copper cannot be right: a wooden spoon is a poor conductor, so its butter would stay solid.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Four spoons labelled 1 to 4 stand in a bowl of hot water. After two minutes the butter on spoons 1 and 2 has melted and run down; the butter on spoons 3 and 4 is still a firm lump.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><line x1=\"100\" y1=\"70\" x2=\"100\" y2=\"175\" stroke=\"#6b7280\" stroke-width=\"6\" stroke-linecap=\"round\"/><path d=\"M93,70 Q100,62 107,70 L104,86 Q100,92 97,84 Z\" fill=\"#fde68a\" stroke=\"#ca8a04\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"140\" y1=\"70\" x2=\"140\" y2=\"175\" stroke=\"#6b7280\" stroke-width=\"6\" stroke-linecap=\"round\"/><path d=\"M133,70 Q140,62 147,70 L144,86 Q140,92 137,84 Z\" fill=\"#fde68a\" stroke=\"#ca8a04\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"180\" y1=\"70\" x2=\"180\" y2=\"175\" stroke=\"#6b7280\" stroke-width=\"6\" stroke-linecap=\"round\"/><rect x=\"171\" y=\"56\" width=\"18\" height=\"14\" rx=\"3\" fill=\"#fde68a\" stroke=\"#ca8a04\" stroke-width=\"1.2\"/><line x1=\"220\" y1=\"70\" x2=\"220\" y2=\"175\" stroke=\"#6b7280\" stroke-width=\"6\" stroke-linecap=\"round\"/><rect x=\"211\" y=\"56\" width=\"18\" height=\"14\" rx=\"3\" fill=\"#fde68a\" stroke=\"#ca8a04\" stroke-width=\"1.2\"/><path d=\"M70,150 L80,195 L240,195 L250,150 Z\" fill=\"#bfdbfe\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linejoin=\"round\"/><path d=\"M88,140 q5,-8 0,-16 q-5,-8 0,-16\" fill=\"none\" stroke=\"#f87171\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><path d=\"M260,140 q5,-8 0,-16 q-5,-8 0,-16\" fill=\"none\" stroke=\"#f87171\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><text x=\"100\" y=\"42\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">1</text><text x=\"140\" y=\"42\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">2</text><text x=\"180\" y=\"42\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">3</text><text x=\"220\" y=\"42\" font-size=\"15\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">4</text><text x=\"160\" y=\"214\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">hot water \u00b7 after 2 minutes</text></svg>", "alt": "Four spoons labelled 1 to 4 stand in a bowl of hot water. After two minutes the butter on spoons 1 and 2 has melted and run down; the butter on spoons 3 and 4 is still a firm lump."}
  },
  {
    id: "g5-sci-matter-b-q07",
    prompt: "Muddy river water left still in a jar becomes clearer at the top because of \u2014",
    options: [
      { id: "a", text: "magnetic force" },
      { id: "b", text: "sedimentation" },
      { id: "c", text: "melting" },
      { id: "d", text: "photosynthesis" }
    ],
    answerId: "b",
    explanation: "Soil particles settle to the bottom (sedimentation), leaving clearer water above.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-matter-b-q08",
    prompt: "Which change of state is condensation?",
    options: [
      { id: "a", text: "Ice \u2192 water" },
      { id: "b", text: "Water vapour \u2192 liquid water" },
      { id: "c", text: "Water \u2192 ice" },
      { id: "d", text: "Wood \u2192 ash" }
    ],
    answerId: "b",
    explanation: "Condensation is gas (vapour) turning into liquid, like drops on a cold glass.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-matter-b-q09",
    prompt: "A mixture of pebbles and sand is best first separated by \u2014",
    options: [
      { id: "a", text: "evaporation" },
      { id: "b", text: "sieving" },
      { id: "c", text: "a magnet" },
      { id: "d", text: "burning" }
    ],
    answerId: "b",
    explanation: "Different sized solid pieces are separated with a sieve. Magnets need iron; evaporation needs a dissolved solid.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-matter-b-q10",
    prompt: "Why is glass used for spectacle lenses?",
    options: [
      { id: "a", text: "It is opaque" },
      { id: "b", text: "It can be transparent and shaped to bend light" },
      { id: "c", text: "It is magnetic" },
      { id: "d", text: "It dissolves in tears" }
    ],
    answerId: "b",
    explanation: "Clear glass (or plastic) lets light through and can be curved to help focus light for clearer vision.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-matter-b-q11",
    prompt: "Which is a reversible change?",
    options: [
      { id: "a", text: "Cooking an egg hard" },
      { id: "b", text: "Melting chocolate and letting it set again" },
      { id: "c", text: "Burning wood" },
      { id: "d", text: "Rusting of iron" }
    ],
    answerId: "b",
    explanation: "Melted chocolate can cool and become solid again. Cooking, burning and rusting make new substances that are hard to reverse.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-matter-b-q12",
    prompt: "In the lamp-and-sheets picture, sheet P (clear) is best described as \u2014",
    options: [
      { id: "a", text: "opaque" },
      { id: "b", text: "transparent" },
      { id: "c", text: "magnetic" },
      { id: "d", text: "soluble" }
    ],
    answerId: "b",
    explanation: "Clear glass lets nearly all light through with a clear view, so it is transparent.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Three sheets labelled P Q R: clear glass, frosted glass, cardboard blocking a lamp\"><style>.part { fill:#dbeafe; stroke:#333; stroke-width:2; }\n.label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n.small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n.arrow { stroke:#333; stroke-width:1.5; fill:none; }\n.badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n.glass { fill:none; stroke:#333; stroke-width:2; }\n.water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }\n.metal { fill:#94a3b8; stroke:#334155; stroke-width:1.5; }\n.wood { fill:#c99a6b; stroke:#6b4a2b; stroke-width:1.5; }\n.card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n.green { fill:#86efac; stroke:#166534; stroke-width:1.5; }\n.red { fill:#fca5a5; stroke:#991b1b; stroke-width:1.5; }\n.sun { fill:#facc15; stroke:#b45309; stroke-width:2; }\n.soil { fill:#d6b48a; stroke:#333; stroke-width:1; }\n.dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }</style><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"22\" text-anchor=\"middle\">Lamp shining through sheets</text>\n  <circle class=\"sun\" cx=\"40\" cy=\"110\" r=\"14\"/>\n  <line class=\"arrow\" x1=\"56\" y1=\"110\" x2=\"90\" y2=\"110\"/>\n  <rect class=\"part\" x=\"95\" y=\"60\" width=\"40\" height=\"100\" fill=\"#e0f2fe\" opacity=\"0.5\"/>\n  <text class=\"label\" x=\"115\" y=\"185\" text-anchor=\"middle\">P</text>\n  <rect class=\"part\" x=\"155\" y=\"60\" width=\"40\" height=\"100\" fill=\"#cbd5e1\" opacity=\"0.7\"/>\n  <text class=\"label\" x=\"175\" y=\"185\" text-anchor=\"middle\">Q</text>\n  <rect class=\"wood\" x=\"215\" y=\"60\" width=\"40\" height=\"100\"/>\n  <text class=\"label\" x=\"235\" y=\"185\" text-anchor=\"middle\">R</text>\n  <text class=\"small\" x=\"280\" y=\"110\">?</text>\n  <text class=\"small\" x=\"160\" y=\"210\" text-anchor=\"middle\">Which sheet is opaque?</text>\n</svg>", "alt": "Three sheets labelled P Q R: clear glass, frosted glass, cardboard blocking a lamp"}
  },
  {
    id: "g5-sci-matter-b-q13",
    prompt: "Pooja pours salty water into a wide dish and leaves it in the sun. The picture shows the dish on day 1 and on day 3. Which method has she used to get the salt back?",
    options: [
      { id: "a", text: "Handpicking" },
      { id: "b", text: "Sieving" },
      { id: "c", text: "Evaporation" },
      { id: "d", text: "Using a magnet" }
    ],
    answerId: "c",
    explanation: "The Sun's heat turned the water into vapour, which went into the air, and the white salt crystals were left in the dish. This is evaporation. Sieving cannot work, because dissolved salt passes through any sieve holes together with the water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Day 1: a wide dish of salty water in the sunshine. Day 3: the same dish is dry, with small white crystals left on its bottom.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><circle cx=\"160\" cy=\"38\" r=\"16\" fill=\"#facc15\" stroke=\"#b45309\" stroke-width=\"2\"/><line x1=\"182\" y1=\"38\" x2=\"190\" y2=\"38\" stroke=\"#b45309\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"138\" y1=\"38\" x2=\"130\" y2=\"38\" stroke=\"#b45309\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"60\" x2=\"160\" y2=\"68\" stroke=\"#b45309\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"175.4\" y1=\"53.4\" x2=\"181.0\" y2=\"59.0\" stroke=\"#b45309\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"144.6\" y1=\"53.4\" x2=\"139.0\" y2=\"59.0\" stroke=\"#b45309\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"175.4\" y1=\"22.6\" x2=\"181.0\" y2=\"17.0\" stroke=\"#b45309\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"144.6\" y1=\"22.6\" x2=\"139.0\" y2=\"17.0\" stroke=\"#b45309\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M30,160 L42,180 L118,180 L130,160 Z\" fill=\"#e5e7eb\" stroke=\"#374151\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"38\" y=\"160\" width=\"84\" height=\"12\" fill=\"#93c5fd\" stroke=\"none\" stroke-width=\"1.5\" opacity=\"0.9\"/><path d=\"M200,160 L212,180 L288,180 L300,160 Z\" fill=\"#e5e7eb\" stroke=\"#374151\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"210\" y=\"167\" width=\"7\" height=\"6\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"1\"/><rect x=\"221\" y=\"167\" width=\"7\" height=\"6\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"1\"/><rect x=\"232\" y=\"167\" width=\"7\" height=\"6\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"1\"/><rect x=\"243\" y=\"167\" width=\"7\" height=\"6\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"1\"/><rect x=\"254\" y=\"167\" width=\"7\" height=\"6\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"1\"/><rect x=\"265\" y=\"167\" width=\"7\" height=\"6\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"1\"/><rect x=\"276\" y=\"167\" width=\"7\" height=\"6\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"1\"/><rect x=\"287\" y=\"167\" width=\"7\" height=\"6\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"1\"/><text x=\"80\" y=\"205\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">Day 1</text><text x=\"250\" y=\"205\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">Day 3</text><line x1=\"140\" y1=\"170\" x2=\"182.0\" y2=\"170.0\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"190,170 182,174.4 182,165.6\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/></svg>", "alt": "Day 1: a wide dish of salty water in the sunshine. Day 3: the same dish is dry, with small white crystals left on its bottom."}
  },
  {
    id: "g5-sci-matter-b-q14",
    prompt: "Meena looks at a kitchen sponge through a magnifying glass, as shown. Why does the sponge soak up water so well?",
    options: [
      { id: "a", text: "It is made of metal" },
      { id: "b", text: "It is waterproof" },
      { id: "c", text: "It is full of tiny spaces that can hold water (porous)" },
      { id: "d", text: "It dissolves in water" }
    ],
    answerId: "c",
    explanation: "The close-up shows many small holes; water flows into these spaces and stays there, so the sponge is porous. Waterproof is the opposite: a waterproof material keeps water out instead of holding it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A yellow kitchen sponge on the left. A magnifying glass on the right shows a close-up view of its surface with many small holes.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"40\" y=\"80\" width=\"90\" height=\"55\" rx=\"6\" fill=\"#fde047\" stroke=\"#ca8a04\" stroke-width=\"2\"/><circle cx=\"55\" cy=\"92\" r=\"2\" fill=\"#ca8a04\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"72\" cy=\"103\" r=\"2\" fill=\"#ca8a04\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"89\" cy=\"114\" r=\"2\" fill=\"#ca8a04\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"106\" cy=\"125\" r=\"2\" fill=\"#ca8a04\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"123\" cy=\"102\" r=\"2\" fill=\"#ca8a04\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"70\" cy=\"113\" r=\"2\" fill=\"#ca8a04\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"87\" cy=\"124\" r=\"2\" fill=\"#ca8a04\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"104\" cy=\"101\" r=\"2\" fill=\"#ca8a04\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"121\" cy=\"112\" r=\"2\" fill=\"#ca8a04\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"68\" cy=\"123\" r=\"2\" fill=\"#ca8a04\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"85\" cy=\"100\" r=\"2\" fill=\"#ca8a04\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"102\" cy=\"111\" r=\"2\" fill=\"#ca8a04\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"119\" cy=\"122\" r=\"2\" fill=\"#ca8a04\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"66\" cy=\"99\" r=\"2\" fill=\"#ca8a04\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"220\" cy=\"105\" r=\"58\" fill=\"#fef9c3\" stroke=\"#374151\" stroke-width=\"4\"/><ellipse cx=\"190\" cy=\"77\" rx=\"7\" ry=\"5\" fill=\"#ffffff\" stroke=\"#ca8a04\" stroke-width=\"1\"/><ellipse cx=\"212\" cy=\"71\" rx=\"5\" ry=\"4\" fill=\"#ffffff\" stroke=\"#ca8a04\" stroke-width=\"1\"/><ellipse cx=\"234\" cy=\"79\" rx=\"8\" ry=\"6\" fill=\"#ffffff\" stroke=\"#ca8a04\" stroke-width=\"1\"/><ellipse cx=\"254\" cy=\"95\" rx=\"6\" ry=\"5\" fill=\"#ffffff\" stroke=\"#ca8a04\" stroke-width=\"1\"/><ellipse cx=\"182\" cy=\"103\" rx=\"6\" ry=\"7\" fill=\"#ffffff\" stroke=\"#ca8a04\" stroke-width=\"1\"/><ellipse cx=\"206\" cy=\"99\" rx=\"9\" ry=\"6\" fill=\"#ffffff\" stroke=\"#ca8a04\" stroke-width=\"1\"/><ellipse cx=\"230\" cy=\"107\" rx=\"6\" ry=\"5\" fill=\"#ffffff\" stroke=\"#ca8a04\" stroke-width=\"1\"/><ellipse cx=\"250\" cy=\"121\" rx=\"7\" ry=\"5\" fill=\"#ffffff\" stroke=\"#ca8a04\" stroke-width=\"1\"/><ellipse cx=\"190\" cy=\"129\" rx=\"7\" ry=\"5\" fill=\"#ffffff\" stroke=\"#ca8a04\" stroke-width=\"1\"/><ellipse cx=\"214\" cy=\"127\" rx=\"6\" ry=\"6\" fill=\"#ffffff\" stroke=\"#ca8a04\" stroke-width=\"1\"/><ellipse cx=\"236\" cy=\"135\" rx=\"5\" ry=\"4\" fill=\"#ffffff\" stroke=\"#ca8a04\" stroke-width=\"1\"/><ellipse cx=\"200\" cy=\"145\" rx=\"5\" ry=\"4\" fill=\"#ffffff\" stroke=\"#ca8a04\" stroke-width=\"1\"/><ellipse cx=\"260\" cy=\"113\" rx=\"4\" ry=\"4\" fill=\"#ffffff\" stroke=\"#ca8a04\" stroke-width=\"1\"/><line x1=\"261\" y1=\"146\" x2=\"296\" y2=\"190\" stroke=\"#374151\" stroke-width=\"8\" stroke-linecap=\"round\"/><line x1=\"130\" y1=\"100\" x2=\"168\" y2=\"92\" stroke=\"#94a3b8\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\" stroke-linecap=\"round\"/><line x1=\"130\" y1=\"120\" x2=\"168\" y2=\"128\" stroke=\"#94a3b8\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\" stroke-linecap=\"round\"/><text x=\"85\" y=\"160\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">sponge</text><text x=\"220\" y=\"30\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">close-up</text></svg>", "alt": "A yellow kitchen sponge on the left. A magnifying glass on the right shows a close-up view of its surface with many small holes."}
  },
  {
    id: "g5-sci-matter-b-q15",
    prompt: "Which object would float in the water tank like cork (P)?",
    options: [
      { id: "a", text: "A steel marble" },
      { id: "b", text: "An iron key" },
      { id: "c", text: "A piece of thermocol" },
      { id: "d", text: "A glass bead denser than water" }
    ],
    answerId: "c",
    explanation: "Thermocol (foam) is much less dense than water, so it floats like cork (P).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Tank of water with four objects: cork floating, iron nail sinking, plastic bottle floating, stone sinking \u2014 labelled P Q R S\"><style>.part { fill:#dbeafe; stroke:#333; stroke-width:2; }\n.label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n.small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n.arrow { stroke:#333; stroke-width:1.5; fill:none; }\n.badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n.glass { fill:none; stroke:#333; stroke-width:2; }\n.water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }\n.metal { fill:#94a3b8; stroke:#334155; stroke-width:1.5; }\n.wood { fill:#c99a6b; stroke:#6b4a2b; stroke-width:1.5; }\n.card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n.green { fill:#86efac; stroke:#166534; stroke-width:1.5; }\n.red { fill:#fca5a5; stroke:#991b1b; stroke-width:1.5; }\n.sun { fill:#facc15; stroke:#b45309; stroke-width:2; }\n.soil { fill:#d6b48a; stroke:#333; stroke-width:1; }\n.dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }</style><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"20\" text-anchor=\"middle\">Objects in a water tank</text>\n  <rect class=\"glass\" x=\"30\" y=\"40\" width=\"260\" height=\"140\"/>\n  <rect class=\"water\" x=\"32\" y=\"70\" width=\"256\" height=\"108\"/>\n  <ellipse class=\"wood\" cx=\"80\" cy=\"85\" rx=\"22\" ry=\"12\"/>\n  <circle class=\"badge\" cx=\"80\" cy=\"55\" r=\"10\"/><text class=\"label\" x=\"80\" y=\"60\" text-anchor=\"middle\">P</text>\n  <rect class=\"metal\" x=\"140\" y=\"155\" width=\"30\" height=\"8\"/>\n  <circle class=\"badge\" cx=\"155\" cy=\"140\" r=\"10\"/><text class=\"label\" x=\"155\" y=\"145\" text-anchor=\"middle\">Q</text>\n  <ellipse cx=\"220\" cy=\"90\" rx=\"18\" ry=\"14\" fill=\"#fda4af\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"badge\" cx=\"220\" cy=\"55\" r=\"10\"/><text class=\"label\" x=\"220\" y=\"60\" text-anchor=\"middle\">R</text>\n  <ellipse cx=\"270\" cy=\"160\" rx=\"16\" ry=\"12\" fill=\"#78716c\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle class=\"badge\" cx=\"270\" cy=\"130\" r=\"10\"/><text class=\"label\" x=\"270\" y=\"135\" text-anchor=\"middle\">S</text>\n</svg>", "alt": "Tank of water with four objects: cork floating, iron nail sinking, plastic bottle floating, stone sinking \u2014 labelled P Q R S"}
  },
  {
    id: "g5-sci-matter-b-q16",
    prompt: "Metals are often shiny when polished. This shine is called \u2014",
    options: [
      { id: "a", text: "transparency" },
      { id: "b", text: "solubility" },
      { id: "c", text: "metallic lustre" },
      { id: "d", text: "friction" }
    ],
    answerId: "c",
    explanation: "The characteristic shine of metals is called metallic lustre.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-matter-b-q17",
    prompt: "Which is the best reason to choose steel for a bridge beam?",
    options: [
      { id: "a", text: "Steel is transparent" },
      { id: "b", text: "Steel dissolves slowly in air" },
      { id: "c", text: "Steel is strong and hard" },
      { id: "d", text: "Steel is soft like rubber" }
    ],
    answerId: "c",
    explanation: "Bridges need materials that are strong and hard so they can support heavy loads.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-matter-b-q18",
    prompt: "Arrow 2 in the ice \u2192 water \u2192 steam diagram shows \u2014",
    options: [
      { id: "a", text: "freezing" },
      { id: "b", text: "melting" },
      { id: "c", text: "evaporation (or boiling to steam)" },
      { id: "d", text: "sedimentation" }
    ],
    answerId: "c",
    explanation: "Liquid water becoming steam is evaporation (or boiling). That is arrow 2.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Arrow diagram: ice cube to water to steam with labels 1 and 2 on the arrows\"><style>.part { fill:#dbeafe; stroke:#333; stroke-width:2; }\n.label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n.small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n.arrow { stroke:#333; stroke-width:1.5; fill:none; }\n.badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n.glass { fill:none; stroke:#333; stroke-width:2; }\n.water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }\n.metal { fill:#94a3b8; stroke:#334155; stroke-width:1.5; }\n.wood { fill:#c99a6b; stroke:#6b4a2b; stroke-width:1.5; }\n.card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n.green { fill:#86efac; stroke:#166534; stroke-width:1.5; }\n.red { fill:#fca5a5; stroke:#991b1b; stroke-width:1.5; }\n.sun { fill:#facc15; stroke:#b45309; stroke-width:2; }\n.soil { fill:#d6b48a; stroke:#333; stroke-width:1; }\n.dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }</style><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"22\" text-anchor=\"middle\">Change of state</text>\n  <rect class=\"part\" x=\"30\" y=\"80\" width=\"50\" height=\"50\" fill=\"#e0f2fe\" stroke=\"#0369a1\"/>\n  <text class=\"small\" x=\"55\" y=\"150\" text-anchor=\"middle\">ice</text>\n  <line class=\"arrow\" x1=\"90\" y1=\"105\" x2=\"130\" y2=\"105\"/>\n  <circle class=\"badge\" cx=\"110\" cy=\"90\" r=\"10\"/><text class=\"label\" x=\"110\" y=\"95\" text-anchor=\"middle\">1</text>\n  <rect class=\"water\" x=\"140\" y=\"90\" width=\"50\" height=\"40\"/>\n  <rect class=\"glass\" x=\"140\" y=\"70\" width=\"50\" height=\"70\"/>\n  <text class=\"small\" x=\"165\" y=\"160\" text-anchor=\"middle\">water</text>\n  <line class=\"arrow\" x1=\"200\" y1=\"105\" x2=\"240\" y2=\"105\"/>\n  <circle class=\"badge\" cx=\"220\" cy=\"90\" r=\"10\"/><text class=\"label\" x=\"220\" y=\"95\" text-anchor=\"middle\">2</text>\n  <circle cx=\"270\" cy=\"80\" r=\"4\" fill=\"#64748b\"/><circle cx=\"285\" cy=\"95\" r=\"4\" fill=\"#64748b\"/>\n  <circle cx=\"275\" cy=\"110\" r=\"4\" fill=\"#64748b\"/><circle cx=\"290\" cy=\"70\" r=\"3\" fill=\"#64748b\"/>\n  <text class=\"small\" x=\"280\" y=\"150\" text-anchor=\"middle\">steam</text>\n</svg>", "alt": "Arrow diagram: ice cube to water to steam with labels 1 and 2 on the arrows"}
  },
  {
    id: "g5-sci-matter-b-q19",
    prompt: "Which material should NOT be used for the body of a toaster's outer case if you want it cooler to touch?",
    options: [
      { id: "a", text: "Thick plastic with insulation" },
      { id: "b", text: "Wood-look insulated cover" },
      { id: "c", text: "Ceramic with a cool handle design" },
      { id: "d", text: "Bare thin copper sheet" }
    ],
    answerId: "d",
    explanation: "Bare copper conducts heat well, so the case could get very hot. Insulators stay cooler.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-matter-b-q20",
    prompt: "Filtration cannot separate \u2014",
    options: [
      { id: "a", text: "tea leaves from tea" },
      { id: "b", text: "sand from muddy water" },
      { id: "c", text: "chalk powder from water" },
      { id: "d", text: "salt already dissolved in water" }
    ],
    answerId: "d",
    explanation: "Dissolved salt particles pass through filter paper with the water. You need evaporation to get the salt back.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-matter-b-q21",
    prompt: "Which is an opaque material?",
    options: [
      { id: "a", text: "Clean air" },
      { id: "b", text: "Clear plastic wrap" },
      { id: "c", text: "Clean water in a glass" },
      { id: "d", text: "A wooden door" }
    ],
    answerId: "d",
    explanation: "A wooden door blocks light. Air, clear wrap and clean water let light through.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-matter-b-q22",
    prompt: "Aman mixes grey iron filings with yellow sulphur powder without heating. He then holds a magnet over the heap, as shown. What does the picture tell you?",
    options: [
      { id: "a", text: "The two powders have joined into one new substance" },
      { id: "b", text: "The magnet pulls the sulphur" },
      { id: "c", text: "Both powders have melted" },
      { id: "d", text: "It is a mixture, so the iron can still be pulled out" }
    ],
    answerId: "d",
    explanation: "Only the grey iron filings cling to the magnet, so the iron has kept its own properties: the powders are just mixed. If a new substance had formed, the magnet could not pick out the iron on its own.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A horseshoe magnet held over a heap of grey and yellow powder. Grey filings cling to the ends of the magnet; the yellow powder stays in the heap.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><path d=\"M125,100 L125,60 Q125,22 160,22 Q195,22 195,60 L195,100 L175,100 L175,60 Q175,42 160,42 Q145,42 145,60 L145,100 Z\" fill=\"#ef4444\" stroke=\"#7f1d1d\" stroke-width=\"2\" stroke-linejoin=\"round\"/><rect x=\"125\" y=\"92\" width=\"20\" height=\"10\" fill=\"#e5e7eb\" stroke=\"#7f1d1d\" stroke-width=\"1.5\"/><rect x=\"175\" y=\"92\" width=\"20\" height=\"10\" fill=\"#e5e7eb\" stroke=\"#7f1d1d\" stroke-width=\"1.5\"/><line x1=\"127\" y1=\"104\" x2=\"129\" y2=\"114\" stroke=\"#4b5563\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"131\" y1=\"104\" x2=\"133\" y2=\"114\" stroke=\"#4b5563\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"135\" y1=\"104\" x2=\"137\" y2=\"114\" stroke=\"#4b5563\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"139\" y1=\"104\" x2=\"141\" y2=\"114\" stroke=\"#4b5563\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"143\" y1=\"104\" x2=\"145\" y2=\"114\" stroke=\"#4b5563\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"147\" y1=\"104\" x2=\"149\" y2=\"114\" stroke=\"#4b5563\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"171\" y1=\"104\" x2=\"173\" y2=\"114\" stroke=\"#4b5563\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"175\" y1=\"104\" x2=\"177\" y2=\"114\" stroke=\"#4b5563\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"179\" y1=\"104\" x2=\"181\" y2=\"114\" stroke=\"#4b5563\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"183\" y1=\"104\" x2=\"185\" y2=\"114\" stroke=\"#4b5563\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"187\" y1=\"104\" x2=\"189\" y2=\"114\" stroke=\"#4b5563\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><line x1=\"191\" y1=\"104\" x2=\"193\" y2=\"114\" stroke=\"#4b5563\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><path d=\"M110,185 Q165,140 220,185 Z\" fill=\"#fef3c7\" stroke=\"#a16207\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><circle cx=\"130\" cy=\"172\" r=\"1.8\" fill=\"#4b5563\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"153\" cy=\"163\" r=\"1.8\" fill=\"#4b5563\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"176\" cy=\"172\" r=\"1.8\" fill=\"#4b5563\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"199\" cy=\"163\" r=\"1.8\" fill=\"#4b5563\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"152\" cy=\"172\" r=\"1.8\" fill=\"#4b5563\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"175\" cy=\"163\" r=\"1.8\" fill=\"#4b5563\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"198\" cy=\"172\" r=\"1.8\" fill=\"#4b5563\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"151\" cy=\"163\" r=\"1.8\" fill=\"#4b5563\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"174\" cy=\"172\" r=\"1.8\" fill=\"#4b5563\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"197\" cy=\"163\" r=\"1.8\" fill=\"#4b5563\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"150\" cy=\"172\" r=\"1.8\" fill=\"#4b5563\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"173\" cy=\"163\" r=\"1.8\" fill=\"#4b5563\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"196\" cy=\"172\" r=\"1.8\" fill=\"#4b5563\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"149\" cy=\"163\" r=\"1.8\" fill=\"#4b5563\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"172\" cy=\"172\" r=\"1.8\" fill=\"#4b5563\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"195\" cy=\"163\" r=\"1.8\" fill=\"#4b5563\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"148\" cy=\"172\" r=\"1.8\" fill=\"#4b5563\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"171\" cy=\"163\" r=\"1.8\" fill=\"#4b5563\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"194\" cy=\"172\" r=\"1.8\" fill=\"#4b5563\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"147\" cy=\"163\" r=\"1.8\" fill=\"#4b5563\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"170\" cy=\"172\" r=\"1.8\" fill=\"#4b5563\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"193\" cy=\"163\" r=\"1.8\" fill=\"#4b5563\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"126\" cy=\"176\" r=\"1.8\" fill=\"#eab308\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"145\" cy=\"163\" r=\"1.8\" fill=\"#eab308\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"164\" cy=\"170\" r=\"1.8\" fill=\"#eab308\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"183\" cy=\"157\" r=\"1.8\" fill=\"#eab308\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"202\" cy=\"164\" r=\"1.8\" fill=\"#eab308\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"143\" cy=\"171\" r=\"1.8\" fill=\"#eab308\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"162\" cy=\"158\" r=\"1.8\" fill=\"#eab308\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"181\" cy=\"165\" r=\"1.8\" fill=\"#eab308\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"200\" cy=\"172\" r=\"1.8\" fill=\"#eab308\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"141\" cy=\"159\" r=\"1.8\" fill=\"#eab308\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"160\" cy=\"166\" r=\"1.8\" fill=\"#eab308\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"179\" cy=\"173\" r=\"1.8\" fill=\"#eab308\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"198\" cy=\"160\" r=\"1.8\" fill=\"#eab308\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"139\" cy=\"167\" r=\"1.8\" fill=\"#eab308\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"158\" cy=\"174\" r=\"1.8\" fill=\"#eab308\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"177\" cy=\"161\" r=\"1.8\" fill=\"#eab308\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"196\" cy=\"168\" r=\"1.8\" fill=\"#eab308\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"137\" cy=\"175\" r=\"1.8\" fill=\"#eab308\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"156\" cy=\"162\" r=\"1.8\" fill=\"#eab308\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"175\" cy=\"169\" r=\"1.8\" fill=\"#eab308\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"194\" cy=\"176\" r=\"1.8\" fill=\"#eab308\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"135\" cy=\"163\" r=\"1.8\" fill=\"#eab308\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"154\" cy=\"170\" r=\"1.8\" fill=\"#eab308\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"173\" cy=\"157\" r=\"1.8\" fill=\"#eab308\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"192\" cy=\"164\" r=\"1.8\" fill=\"#eab308\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"133\" cy=\"171\" r=\"1.8\" fill=\"#eab308\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"152\" cy=\"158\" r=\"1.8\" fill=\"#eab308\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"171\" cy=\"165\" r=\"1.8\" fill=\"#eab308\" stroke=\"none\" stroke-width=\"1.5\"/><line x1=\"195\" y1=\"110\" x2=\"255\" y2=\"95\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><circle cx=\"195\" cy=\"110\" r=\"2\" fill=\"#475569\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"259\" y=\"100\" font-size=\"12\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">grey bits</text><line x1=\"205\" y1=\"178\" x2=\"255\" y2=\"175\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><circle cx=\"205\" cy=\"178\" r=\"2\" fill=\"#475569\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"259\" y=\"180\" font-size=\"12\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">yellow bits</text><text x=\"160\" y=\"212\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">no heating</text></svg>", "alt": "A horseshoe magnet held over a heap of grey and yellow powder. Grey filings cling to the ends of the magnet; the yellow powder stays in the heap."}
  },
  {
    id: "g5-sci-matter-b-q23",
    prompt: "Why do we use cotton or wool clothes in winter?",
    options: [
      { id: "a", text: "They are good heat conductors" },
      { id: "b", text: "They dissolve sweat instantly into salt" },
      { id: "c", text: "They are magnetic heaters" },
      { id: "d", text: "They trap air and act as heat insulators" }
    ],
    answerId: "d",
    explanation: "Air trapped in fluffy fibres slows heat loss from the body, so you stay warmer.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-matter-b-q24",
    prompt: "Which process gets pure water vapour to leave a salt solution?",
    options: [
      { id: "a", text: "Magnetic separation" },
      { id: "b", text: "Sieving" },
      { id: "c", text: "Sedimentation of salt crystals first" },
      { id: "d", text: "Evaporation" }
    ],
    answerId: "d",
    explanation: "Evaporation turns liquid water into vapour, leaving salt behind.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83e\uddea",
    title: "Matter and materials",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "water-cycle",
    speak: "Materials have properties that help us choose them for jobs. We can separate many mixtures and reverse some changes.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "water-cycle",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Properties", reveal: "Hard, flexible, transparent, waterproof\u2026", emoji: "\ud83d\udd0d" },
      { label: "Conductors", reveal: "Metals for heat and electricity", emoji: "\u26a1" },
      { label: "Mixtures", reveal: "Dissolve, settle, filter, evaporate", emoji: "\ud83e\uddc2" },
      { label: "Changes", reveal: "Some reverse; burning usually does not", emoji: "\ud83d\udd25" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Which material is best for coating electric wires?",
    options: [
        { id: "a", text: "Bare copper only" },
        { id: "b", text: "Plastic (insulator)" },
        { id: "c", text: "Salt water" },
        { id: "d", text: "Iron filings" }
    ],
    answerId: "b",
    why: "Plastic is an insulator that makes wires safer to touch.",
    visual: "water-cycle",
    speak: "Which material is best for coating electric wires?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Properties guide material choice", "Insulators vs conductors", "Match separation to the mixture", "Sets ready \u2014 24 MCQs each"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g5ScienceMatter: ChapterDef = {
  id: "matter-materials",
  title: "Matter and Materials",
  emoji: "\ud83e\uddea",
  blurb: "Properties, mixtures and separation",
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

export const g5ScienceMatterQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
