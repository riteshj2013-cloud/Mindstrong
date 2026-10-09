import type { ChapterDef, PrepQuestion } from "../types";

/** Matter and Materials - authored SOF content (original). */

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
    prompt: "Sand does not dissolve in water. After stirring and waiting, sand settles at the bottom. This settling is called \u2014",
    options: [
      { id: "a", text: "evaporation" },
      { id: "b", text: "sedimentation" },
      { id: "c", text: "condensation" },
      { id: "d", text: "melting" }
    ],
    answerId: "b",
    explanation: "Sedimentation is when heavier undissolved particles settle down. You can then pour off the clear water (decantation).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
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
    prompt: "Sieving is the best first step to separate \u2014",
    options: [
      { id: "a", text: "salt from seawater" },
      { id: "b", text: "ink from water" },
      { id: "c", text: "iron from copper wire" },
      { id: "d", text: "pebbles from flour" }
    ],
    answerId: "d",
    explanation: "A sieve lets fine flour fall through and keeps larger pebbles. Salt needs evaporation; metals need other methods.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
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
    prompt: "Oil floats on water mainly because oil is \u2014",
    options: [
      { id: "a", text: "less dense than water" },
      { id: "b", text: "heavier than steel" },
      { id: "c", text: "magnetic" },
      { id: "d", text: "transparent only" }
    ],
    answerId: "a",
    explanation: "Less dense liquids float on denser ones. Oil is less dense than water, so it stays on top.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
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
    prompt: "Which pair are both good heat conductors?",
    options: [
      { id: "a", text: "Copper and iron" },
      { id: "b", text: "Wood and plastic" },
      { id: "c", text: "Rubber and wool" },
      { id: "d", text: "Paper and cork" }
    ],
    answerId: "a",
    explanation: "Copper and iron are metals that conduct heat well. Wood, plastic, rubber, wool, paper and cork are poor conductors.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
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
    prompt: "Which method separates a dissolved solid from water after filtration is not needed?",
    options: [
      { id: "a", text: "Handpicking" },
      { id: "b", text: "Sieving" },
      { id: "c", text: "Evaporation" },
      { id: "d", text: "Using a magnet on sugar" }
    ],
    answerId: "c",
    explanation: "Heating or leaving the solution lets water evaporate; the dissolved solid remains.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-matter-b-q14",
    prompt: "A sponge soaks up water because it is \u2014",
    options: [
      { id: "a", text: "magnetic" },
      { id: "b", text: "opaque only" },
      { id: "c", text: "porous (has tiny spaces)" },
      { id: "d", text: "a pure metal" }
    ],
    answerId: "c",
    explanation: "Porous materials have tiny holes that can hold liquid. That is why a sponge absorbs water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
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
    prompt: "Mixing iron filings and sulphur powder (without heating) makes \u2014",
    options: [
      { id: "a", text: "a new single atom" },
      { id: "b", text: "pure water" },
      { id: "c", text: "only a gas" },
      { id: "d", text: "a mixture that a magnet can still pull iron from" }
    ],
    answerId: "d",
    explanation: "Without a chemical reaction, iron and sulphur stay a mixture. A magnet can still attract the iron filings.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
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
