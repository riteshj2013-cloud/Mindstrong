import type { ChapterDef, PrepQuestion } from "../types";

/** Our Environment and Natural Resources - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g5-sci-env-a-q01",
    prompt: "Things we get from nature and use are called \u2014",
    options: [
      { id: "a", text: "natural resources" },
      { id: "b", text: "only plastic toys" },
      { id: "c", text: "artificial gravity" },
      { id: "d", text: "exam papers" }
    ],
    answerId: "a",
    explanation: "Natural resources include air, water, soil, forests, minerals and fuels that come from nature.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-env-a-q02",
    prompt: "In the resource cards, which letter shows a non-renewable fossil fuel?",
    options: [
      { id: "a", text: "Q" },
      { id: "b", text: "P" },
      { id: "c", text: "R" },
      { id: "d", text: "S" }
    ],
    answerId: "a",
    explanation: "Q is coal, a fossil fuel that takes millions of years to form. Sunlight, trees and rivers can renew on shorter timescales.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Four cards labelled P Q R S: sun, coal lump, tree, flowing river\"><style>.part { fill:#bbf7d0; stroke:#333; stroke-width:2; }\n.label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n.small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n.arrow { stroke:#333; stroke-width:1.5; fill:none; }\n.badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n.tree { fill:#16a34a; stroke:#14532d; stroke-width:1.5; }\n.trunk { fill:#92400e; stroke:#333; stroke-width:1; }\n.water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }\n.sun { fill:#facc15; stroke:#b45309; stroke-width:2; }\n.smoke { fill:#94a3b8; opacity:0.7; }\n.card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n.soil { fill:#d6b48a; stroke:#333; stroke-width:1; }\n.dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }</style><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"20\" text-anchor=\"middle\">Natural resources</text>\n  <rect class=\"card\" x=\"20\" y=\"40\" width=\"130\" height=\"70\"/>\n  <circle class=\"sun\" cx=\"55\" cy=\"75\" r=\"16\"/>\n  <text class=\"label\" x=\"100\" y=\"80\">P</text>\n  <text class=\"small\" x=\"85\" y=\"100\" text-anchor=\"middle\">sunlight</text>\n  <rect class=\"card\" x=\"170\" y=\"40\" width=\"130\" height=\"70\"/>\n  <ellipse cx=\"210\" cy=\"75\" rx=\"20\" ry=\"14\" fill=\"#444\" stroke=\"#111\"/>\n  <text class=\"label\" x=\"255\" y=\"80\">Q</text>\n  <text class=\"small\" x=\"235\" y=\"100\" text-anchor=\"middle\">coal</text>\n  <rect class=\"card\" x=\"20\" y=\"125\" width=\"130\" height=\"70\"/>\n  <rect class=\"trunk\" x=\"55\" y=\"155\" width=\"10\" height=\"25\"/>\n  <ellipse class=\"tree\" cx=\"60\" cy=\"150\" rx=\"22\" ry=\"16\"/>\n  <text class=\"label\" x=\"110\" y=\"165\">R</text>\n  <text class=\"small\" x=\"85\" y=\"185\" text-anchor=\"middle\">forest tree</text>\n  <rect class=\"card\" x=\"170\" y=\"125\" width=\"130\" height=\"70\"/>\n  <path class=\"water\" d=\"M190,155 Q210,145 230,155 Q250,165 270,150\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"4\"/>\n  <text class=\"label\" x=\"255\" y=\"175\">S</text>\n  <text class=\"small\" x=\"235\" y=\"190\" text-anchor=\"middle\">river</text>\n</svg>", "alt": "Four cards labelled P Q R S: sun, coal lump, tree, flowing river"}
  },
  {
    id: "g5-sci-env-a-q03",
    prompt: "Which gas do green plants release that animals need to breathe?",
    options: [
      { id: "a", text: "Oxygen" },
      { id: "b", text: "Only smoke" },
      { id: "c", text: "Only nitrogen from factories" },
      { id: "d", text: "Helium balloons only" }
    ],
    answerId: "a",
    explanation: "In sunlight, green plants make food and release oxygen that animals and people breathe.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-env-a-q04",
    prompt: "Saving electricity by switching off unused fans is an example of \u2014",
    options: [
      { id: "a", text: "conservation" },
      { id: "b", text: "wasting fuel on purpose" },
      { id: "c", text: "increasing pollution for fun" },
      { id: "d", text: "deforestation" }
    ],
    answerId: "a",
    explanation: "Conservation means careful use so resources last longer and less fuel is burned at power stations.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-env-a-q05",
    prompt: "Which number in the three green habits stands for recycle?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "1" },
      { id: "c", text: "2" },
      { id: "d", text: "None" }
    ],
    answerId: "a",
    explanation: "Bin 3 is recycle \u2014 turning used materials into new products. 1 is reduce; 2 is reuse.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Three bins labelled 1 2 3 with icons: smaller use arrow, reuse bag, recycle arrows\"><style>.part { fill:#bbf7d0; stroke:#333; stroke-width:2; }\n.label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n.small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n.arrow { stroke:#333; stroke-width:1.5; fill:none; }\n.badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n.tree { fill:#16a34a; stroke:#14532d; stroke-width:1.5; }\n.trunk { fill:#92400e; stroke:#333; stroke-width:1; }\n.water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }\n.sun { fill:#facc15; stroke:#b45309; stroke-width:2; }\n.smoke { fill:#94a3b8; opacity:0.7; }\n.card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n.soil { fill:#d6b48a; stroke:#333; stroke-width:1; }\n.dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }</style><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"22\" text-anchor=\"middle\">Three green habits</text>\n  <rect class=\"card\" x=\"20\" y=\"50\" width=\"85\" height=\"120\"/>\n  <text class=\"label\" x=\"62\" y=\"80\" text-anchor=\"middle\">1</text>\n  <text class=\"small\" x=\"62\" y=\"110\" text-anchor=\"middle\">use less</text>\n  <text class=\"small\" x=\"62\" y=\"130\" text-anchor=\"middle\">(reduce)</text>\n  <rect class=\"card\" x=\"117\" y=\"50\" width=\"85\" height=\"120\"/>\n  <text class=\"label\" x=\"160\" y=\"80\" text-anchor=\"middle\">2</text>\n  <text class=\"small\" x=\"160\" y=\"110\" text-anchor=\"middle\">use again</text>\n  <text class=\"small\" x=\"160\" y=\"130\" text-anchor=\"middle\">(reuse)</text>\n  <rect class=\"card\" x=\"215\" y=\"50\" width=\"85\" height=\"120\"/>\n  <text class=\"label\" x=\"257\" y=\"80\" text-anchor=\"middle\">3</text>\n  <text class=\"small\" x=\"257\" y=\"110\" text-anchor=\"middle\">make new</text>\n  <text class=\"small\" x=\"257\" y=\"130\" text-anchor=\"middle\">(recycle)</text>\n  <text class=\"small\" x=\"160\" y=\"200\" text-anchor=\"middle\">Which number is recycle?</text>\n</svg>", "alt": "Three bins labelled 1 2 3 with icons: smaller use arrow, reuse bag, recycle arrows"}
  },
  {
    id: "g5-sci-env-a-q06",
    prompt: "Rain filling rivers and lakes is part of the \u2014",
    options: [
      { id: "a", text: "water cycle" },
      { id: "b", text: "rock cycle only" },
      { id: "c", text: "electric circuit" },
      { id: "d", text: "digestive system" }
    ],
    answerId: "a",
    explanation: "Water evaporates, forms clouds, falls as rain and returns to land and sea \u2014 the water cycle.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Water cycle style: sun, vapour arrows up from lake, cloud, rain down to land\"><style>.part { fill:#bbf7d0; stroke:#333; stroke-width:2; }\n.label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n.small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n.arrow { stroke:#333; stroke-width:1.5; fill:none; }\n.badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n.tree { fill:#16a34a; stroke:#14532d; stroke-width:1.5; }\n.trunk { fill:#92400e; stroke:#333; stroke-width:1; }\n.water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }\n.sun { fill:#facc15; stroke:#b45309; stroke-width:2; }\n.smoke { fill:#94a3b8; opacity:0.7; }\n.card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n.soil { fill:#d6b48a; stroke:#333; stroke-width:1; }\n.dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }</style><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"20\" text-anchor=\"middle\">Water on the move</text>\n  <circle class=\"sun\" cx=\"50\" cy=\"50\" r=\"16\"/>\n  <rect class=\"water\" x=\"40\" y=\"150\" width=\"100\" height=\"40\"/>\n  <text class=\"small\" x=\"90\" y=\"175\" text-anchor=\"middle\">lake</text>\n  <path class=\"arrow\" d=\"M90,145 Q90,100 120,70\"/>\n  <text class=\"small\" x=\"70\" y=\"100\">1</text>\n  <ellipse cx=\"180\" cy=\"55\" rx=\"40\" ry=\"20\" fill=\"#cbd5e1\" stroke=\"#333\"/>\n  <text class=\"small\" x=\"180\" y=\"60\" text-anchor=\"middle\">cloud</text>\n  <line class=\"arrow\" x1=\"200\" y1=\"75\" x2=\"220\" y2=\"120\"/>\n  <line class=\"arrow\" x1=\"190\" y1=\"75\" x2=\"200\" y2=\"120\"/>\n  <text class=\"small\" x=\"230\" y=\"100\">2</text>\n  <rect class=\"soil\" x=\"200\" y=\"150\" width=\"90\" height=\"40\"/>\n  <text class=\"small\" x=\"245\" y=\"175\" text-anchor=\"middle\">land</text>\n</svg>", "alt": "Water cycle style: sun, vapour arrows up from lake, cloud, rain down to land"}
  },
  {
    id: "g5-sci-env-a-q07",
    prompt: "A resource that can be replaced naturally in a reasonable time is called \u2014",
    options: [
      { id: "a", text: "non-renewable" },
      { id: "b", text: "renewable" },
      { id: "c", text: "artificial only" },
      { id: "d", text: "polluted forever" }
    ],
    answerId: "b",
    explanation: "Sunlight, wind and carefully managed forests are renewable. Coal and petroleum are non-renewable.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-env-a-q08",
    prompt: "Smoke from chimneys marked A mainly causes \u2014",
    options: [
      { id: "a", text: "noise pollution only" },
      { id: "b", text: "air pollution" },
      { id: "c", text: "soil to become gold" },
      { id: "d", text: "more oxygen overnight" }
    ],
    answerId: "b",
    explanation: "Smoke and gases mix into the air and can harm breathing and the climate \u2014 air pollution.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Factory with smoke stacks beside a river; fish symbol with X; labels A air smoke and B dirty water pipe\"><style>.part { fill:#bbf7d0; stroke:#333; stroke-width:2; }\n.label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n.small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n.arrow { stroke:#333; stroke-width:1.5; fill:none; }\n.badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n.tree { fill:#16a34a; stroke:#14532d; stroke-width:1.5; }\n.trunk { fill:#92400e; stroke:#333; stroke-width:1; }\n.water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }\n.sun { fill:#facc15; stroke:#b45309; stroke-width:2; }\n.smoke { fill:#94a3b8; opacity:0.7; }\n.card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n.soil { fill:#d6b48a; stroke:#333; stroke-width:1; }\n.dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }</style><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"20\" text-anchor=\"middle\">Pollution scene</text>\n  <rect x=\"40\" y=\"80\" width=\"90\" height=\"70\" fill=\"#94a3b8\" stroke=\"#333\"/>\n  <rect x=\"55\" y=\"50\" width=\"12\" height=\"30\" fill=\"#64748b\" stroke=\"#333\"/>\n  <rect x=\"90\" y=\"45\" width=\"12\" height=\"35\" fill=\"#64748b\" stroke=\"#333\"/>\n  <ellipse class=\"smoke\" cx=\"61\" cy=\"35\" rx=\"14\" ry=\"10\"/>\n  <ellipse class=\"smoke\" cx=\"96\" cy=\"28\" rx=\"16\" ry=\"12\"/>\n  <circle class=\"badge\" cx=\"70\" cy=\"25\" r=\"10\"/><text class=\"label\" x=\"70\" y=\"30\" text-anchor=\"middle\">A</text>\n  <rect class=\"water\" x=\"160\" y=\"130\" width=\"140\" height=\"40\"/>\n  <path d=\"M130,120 L160,140\" stroke=\"#78716c\" stroke-width=\"6\"/>\n  <circle class=\"badge\" cx=\"145\" cy=\"115\" r=\"10\"/><text class=\"label\" x=\"145\" y=\"120\" text-anchor=\"middle\">B</text>\n  <text class=\"small\" x=\"230\" y=\"155\" text-anchor=\"middle\">river</text>\n  <text class=\"small\" x=\"230\" y=\"185\" text-anchor=\"middle\">fish in trouble</text>\n</svg>", "alt": "Factory with smoke stacks beside a river; fish symbol with X; labels A air smoke and B dirty water pipe"}
  },
  {
    id: "g5-sci-env-a-q09",
    prompt: "Reusing a sturdy shopping bag instead of taking a new plastic bag each time is \u2014",
    options: [
      { id: "a", text: "reduce only, never reuse" },
      { id: "b", text: "reuse" },
      { id: "c", text: "burning waste" },
      { id: "d", text: "mining coal" }
    ],
    answerId: "b",
    explanation: "Using the same bag again is reuse. It also helps reduce how many new bags are made.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-env-a-q10",
    prompt: "Hillside Q compared with forest P is an example of \u2014",
    options: [
      { id: "a", text: "afforestation" },
      { id: "b", text: "deforestation" },
      { id: "c", text: "the water cycle speeding up helpfully" },
      { id: "d", text: "planting more trees" }
    ],
    answerId: "b",
    explanation: "Q shows a cleared hillside with stumps \u2014 deforestation. P still has a living forest.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Split scene: left healthy forest with many trees, right bare hill with stumps labelled Deforested\"><style>.part { fill:#bbf7d0; stroke:#333; stroke-width:2; }\n.label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n.small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n.arrow { stroke:#333; stroke-width:1.5; fill:none; }\n.badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n.tree { fill:#16a34a; stroke:#14532d; stroke-width:1.5; }\n.trunk { fill:#92400e; stroke:#333; stroke-width:1; }\n.water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }\n.sun { fill:#facc15; stroke:#b45309; stroke-width:2; }\n.smoke { fill:#94a3b8; opacity:0.7; }\n.card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n.soil { fill:#d6b48a; stroke:#333; stroke-width:1; }\n.dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }</style><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"18\" text-anchor=\"middle\">Two hillsides</text>\n  <line class=\"dash\" x1=\"160\" y1=\"30\" x2=\"160\" y2=\"200\"/>\n  <rect class=\"trunk\" x=\"50\" y=\"120\" width=\"10\" height=\"40\"/>\n  <ellipse class=\"tree\" cx=\"55\" cy=\"115\" rx=\"20\" ry=\"18\"/>\n  <rect class=\"trunk\" x=\"90\" y=\"130\" width=\"10\" height=\"40\"/>\n  <ellipse class=\"tree\" cx=\"95\" cy=\"125\" rx=\"18\" ry=\"16\"/>\n  <rect class=\"trunk\" x=\"30\" y=\"140\" width=\"10\" height=\"35\"/>\n  <ellipse class=\"tree\" cx=\"35\" cy=\"135\" rx=\"16\" ry=\"14\"/>\n  <text class=\"small\" x=\"70\" y=\"200\" text-anchor=\"middle\">P forest</text>\n  <rect class=\"trunk\" x=\"200\" y=\"150\" width=\"12\" height=\"12\"/>\n  <rect class=\"trunk\" x=\"240\" y=\"155\" width=\"12\" height=\"10\"/>\n  <rect class=\"trunk\" x=\"280\" y=\"148\" width=\"12\" height=\"14\"/>\n  <path d=\"M180,170 Q240,160 310,175\" fill=\"none\" stroke=\"#a16207\" stroke-width=\"3\"/>\n  <text class=\"small\" x=\"250\" y=\"200\" text-anchor=\"middle\">Q cleared</text>\n</svg>", "alt": "Split scene: left healthy forest with many trees, right bare hill with stumps labelled Deforested"}
  },
  {
    id: "g5-sci-env-a-q11",
    prompt: "Which energy source in the picture is a fossil fuel?",
    options: [
      { id: "a", text: "P solar" },
      { id: "b", text: "R coal" },
      { id: "c", text: "Q wind" },
      { id: "d", text: "Both P and Q" }
    ],
    answerId: "b",
    explanation: "R is a coal plant. Coal is a fossil fuel. Solar (P) and wind (Q) are renewable.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Solar panel on roof, wind turbine, and coal plant chimney in a row labelled P Q R\"><style>.part { fill:#bbf7d0; stroke:#333; stroke-width:2; }\n.label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n.small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n.arrow { stroke:#333; stroke-width:1.5; fill:none; }\n.badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n.tree { fill:#16a34a; stroke:#14532d; stroke-width:1.5; }\n.trunk { fill:#92400e; stroke:#333; stroke-width:1; }\n.water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }\n.sun { fill:#facc15; stroke:#b45309; stroke-width:2; }\n.smoke { fill:#94a3b8; opacity:0.7; }\n.card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n.soil { fill:#d6b48a; stroke:#333; stroke-width:1; }\n.dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }</style><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"20\" text-anchor=\"middle\">Energy sources</text>\n  <rect class=\"card\" x=\"15\" y=\"45\" width=\"90\" height=\"130\"/>\n  <rect x=\"30\" y=\"70\" width=\"60\" height=\"40\" fill=\"#1e3a8a\" stroke=\"#333\"/>\n  <line x1=\"30\" y1=\"90\" x2=\"90\" y2=\"90\" stroke=\"#93c5fd\"/>\n  <line x1=\"60\" y1=\"70\" x2=\"60\" y2=\"110\" stroke=\"#93c5fd\"/>\n  <circle class=\"sun\" cx=\"60\" cy=\"55\" r=\"8\"/>\n  <text class=\"label\" x=\"60\" y=\"150\" text-anchor=\"middle\">P</text>\n  <text class=\"small\" x=\"60\" y=\"165\" text-anchor=\"middle\">solar</text>\n  <rect class=\"card\" x=\"115\" y=\"45\" width=\"90\" height=\"130\"/>\n  <line x1=\"160\" y1=\"160\" x2=\"160\" y2=\"80\" stroke=\"#333\" stroke-width=\"3\"/>\n  <polygon points=\"160,80 140,100 180,100\" fill=\"#94a3b8\" stroke=\"#333\"/>\n  <text class=\"label\" x=\"160\" y=\"150\" text-anchor=\"middle\">Q</text>\n  <text class=\"small\" x=\"160\" y=\"165\" text-anchor=\"middle\">wind</text>\n  <rect class=\"card\" x=\"215\" y=\"45\" width=\"90\" height=\"130\"/>\n  <rect x=\"240\" y=\"100\" width=\"40\" height=\"50\" fill=\"#78716c\" stroke=\"#333\"/>\n  <rect x=\"255\" y=\"70\" width=\"10\" height=\"30\" fill=\"#444\" stroke=\"#333\"/>\n  <ellipse class=\"smoke\" cx=\"260\" cy=\"55\" rx=\"14\" ry=\"10\"/>\n  <text class=\"label\" x=\"260\" y=\"165\" text-anchor=\"middle\">R</text>\n  <text class=\"small\" x=\"260\" y=\"180\" text-anchor=\"middle\">coal</text>\n</svg>", "alt": "Solar panel on roof, wind turbine, and coal plant chimney in a row labelled P Q R"}
  },
  {
    id: "g5-sci-env-a-q12",
    prompt: "Dirty water pipe B flowing into the river mainly causes \u2014",
    options: [
      { id: "a", text: "air pollution only" },
      { id: "b", text: "water pollution" },
      { id: "c", text: "noise pollution only" },
      { id: "d", text: "a new renewable forest" }
    ],
    answerId: "b",
    explanation: "Waste liquid entering the river harms fish and drinking water \u2014 water pollution.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Factory with smoke stacks beside a river; fish symbol with X; labels A air smoke and B dirty water pipe\"><style>.part { fill:#bbf7d0; stroke:#333; stroke-width:2; }\n.label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n.small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n.arrow { stroke:#333; stroke-width:1.5; fill:none; }\n.badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n.tree { fill:#16a34a; stroke:#14532d; stroke-width:1.5; }\n.trunk { fill:#92400e; stroke:#333; stroke-width:1; }\n.water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }\n.sun { fill:#facc15; stroke:#b45309; stroke-width:2; }\n.smoke { fill:#94a3b8; opacity:0.7; }\n.card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n.soil { fill:#d6b48a; stroke:#333; stroke-width:1; }\n.dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }</style><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"20\" text-anchor=\"middle\">Pollution scene</text>\n  <rect x=\"40\" y=\"80\" width=\"90\" height=\"70\" fill=\"#94a3b8\" stroke=\"#333\"/>\n  <rect x=\"55\" y=\"50\" width=\"12\" height=\"30\" fill=\"#64748b\" stroke=\"#333\"/>\n  <rect x=\"90\" y=\"45\" width=\"12\" height=\"35\" fill=\"#64748b\" stroke=\"#333\"/>\n  <ellipse class=\"smoke\" cx=\"61\" cy=\"35\" rx=\"14\" ry=\"10\"/>\n  <ellipse class=\"smoke\" cx=\"96\" cy=\"28\" rx=\"16\" ry=\"12\"/>\n  <circle class=\"badge\" cx=\"70\" cy=\"25\" r=\"10\"/><text class=\"label\" x=\"70\" y=\"30\" text-anchor=\"middle\">A</text>\n  <rect class=\"water\" x=\"160\" y=\"130\" width=\"140\" height=\"40\"/>\n  <path d=\"M130,120 L160,140\" stroke=\"#78716c\" stroke-width=\"6\"/>\n  <circle class=\"badge\" cx=\"145\" cy=\"115\" r=\"10\"/><text class=\"label\" x=\"145\" y=\"120\" text-anchor=\"middle\">B</text>\n  <text class=\"small\" x=\"230\" y=\"155\" text-anchor=\"middle\">river</text>\n  <text class=\"small\" x=\"230\" y=\"185\" text-anchor=\"middle\">fish in trouble</text>\n</svg>", "alt": "Factory with smoke stacks beside a river; fish symbol with X; labels A air smoke and B dirty water pipe"}
  },
  {
    id: "g5-sci-env-a-q13",
    prompt: "Which is a non-renewable resource?",
    options: [
      { id: "a", text: "Sunlight" },
      { id: "b", text: "Wind" },
      { id: "c", text: "Petroleum (crude oil)" },
      { id: "d", text: "Flowing river water used carefully" }
    ],
    answerId: "c",
    explanation: "Petroleum formed over millions of years and cannot be replaced quickly once we burn it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-env-a-q14",
    prompt: "Planting new trees on a bare hill is called \u2014",
    options: [
      { id: "a", text: "deforestation" },
      { id: "b", text: "air pollution" },
      { id: "c", text: "afforestation (or reforestation)" },
      { id: "d", text: "mining" }
    ],
    answerId: "c",
    explanation: "Afforestation/reforestation means growing forests again, which helps soil, wildlife and air quality.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-env-a-q15",
    prompt: "Which habit best matches reduce?",
    options: [
      { id: "a", text: "Printing posters on both sides of scrap paper after first use only as art frames" },
      { id: "b", text: "Buying a new bottle every hour" },
      { id: "c", text: "Using a smaller amount of water while brushing teeth" },
      { id: "d", text: "Throwing intact jars straight to landfill without thought" }
    ],
    answerId: "c",
    explanation: "Using less water is reduce. Reusing jars is reuse; recycling paper is recycle.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-env-a-q16",
    prompt: "Soil is important because it \u2014",
    options: [
      { id: "a", text: "is only useful as smoke" },
      { id: "b", text: "blocks all rain forever" },
      { id: "c", text: "helps plants grow and stores water and nutrients" },
      { id: "d", text: "is a fossil fuel like petrol" }
    ],
    answerId: "c",
    explanation: "Healthy soil supports crops and forests. Erosion and chemical waste damage this resource.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-env-a-q17",
    prompt: "Loudspeakers at very high volume late at night near homes can cause \u2014",
    options: [
      { id: "a", text: "water purification" },
      { id: "b", text: "soil fertility" },
      { id: "c", text: "noise pollution" },
      { id: "d", text: "more rainfall" }
    ],
    answerId: "c",
    explanation: "Unwanted loud sound that disturbs people and animals is noise pollution.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-env-a-q18",
    prompt: "Which is the cleanest choice among the three pictured energy ideas for daily electricity?",
    options: [
      { id: "a", text: "Only R coal with thick smoke" },
      { id: "b", text: "Burning more coal than R" },
      { id: "c", text: "P solar panels (when the Sun shines)" },
      { id: "d", text: "Adding more smoke to R" }
    ],
    answerId: "c",
    explanation: "Solar energy does not burn fuel at the panel. Coal burning releases smoke and greenhouse gases.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Solar panel on roof, wind turbine, and coal plant chimney in a row labelled P Q R\"><style>.part { fill:#bbf7d0; stroke:#333; stroke-width:2; }\n.label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n.small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n.arrow { stroke:#333; stroke-width:1.5; fill:none; }\n.badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n.tree { fill:#16a34a; stroke:#14532d; stroke-width:1.5; }\n.trunk { fill:#92400e; stroke:#333; stroke-width:1; }\n.water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }\n.sun { fill:#facc15; stroke:#b45309; stroke-width:2; }\n.smoke { fill:#94a3b8; opacity:0.7; }\n.card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n.soil { fill:#d6b48a; stroke:#333; stroke-width:1; }\n.dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }</style><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"20\" text-anchor=\"middle\">Energy sources</text>\n  <rect class=\"card\" x=\"15\" y=\"45\" width=\"90\" height=\"130\"/>\n  <rect x=\"30\" y=\"70\" width=\"60\" height=\"40\" fill=\"#1e3a8a\" stroke=\"#333\"/>\n  <line x1=\"30\" y1=\"90\" x2=\"90\" y2=\"90\" stroke=\"#93c5fd\"/>\n  <line x1=\"60\" y1=\"70\" x2=\"60\" y2=\"110\" stroke=\"#93c5fd\"/>\n  <circle class=\"sun\" cx=\"60\" cy=\"55\" r=\"8\"/>\n  <text class=\"label\" x=\"60\" y=\"150\" text-anchor=\"middle\">P</text>\n  <text class=\"small\" x=\"60\" y=\"165\" text-anchor=\"middle\">solar</text>\n  <rect class=\"card\" x=\"115\" y=\"45\" width=\"90\" height=\"130\"/>\n  <line x1=\"160\" y1=\"160\" x2=\"160\" y2=\"80\" stroke=\"#333\" stroke-width=\"3\"/>\n  <polygon points=\"160,80 140,100 180,100\" fill=\"#94a3b8\" stroke=\"#333\"/>\n  <text class=\"label\" x=\"160\" y=\"150\" text-anchor=\"middle\">Q</text>\n  <text class=\"small\" x=\"160\" y=\"165\" text-anchor=\"middle\">wind</text>\n  <rect class=\"card\" x=\"215\" y=\"45\" width=\"90\" height=\"130\"/>\n  <rect x=\"240\" y=\"100\" width=\"40\" height=\"50\" fill=\"#78716c\" stroke=\"#333\"/>\n  <rect x=\"255\" y=\"70\" width=\"10\" height=\"30\" fill=\"#444\" stroke=\"#333\"/>\n  <ellipse class=\"smoke\" cx=\"260\" cy=\"55\" rx=\"14\" ry=\"10\"/>\n  <text class=\"label\" x=\"260\" y=\"165\" text-anchor=\"middle\">R</text>\n  <text class=\"small\" x=\"260\" y=\"180\" text-anchor=\"middle\">coal</text>\n</svg>", "alt": "Solar panel on roof, wind turbine, and coal plant chimney in a row labelled P Q R"}
  },
  {
    id: "g5-sci-env-a-q19",
    prompt: "Wildlife suffers when forests are cleared mainly because animals lose \u2014",
    options: [
      { id: "a", text: "television signals" },
      { id: "b", text: "school uniforms" },
      { id: "c", text: "mobile phones" },
      { id: "d", text: "habitat (homes and food)" }
    ],
    answerId: "d",
    explanation: "Forests are homes and food sources. Clearing them leaves many animals without habitat.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-env-a-q20",
    prompt: "Which action conserves water at home?",
    options: [
      { id: "a", text: "Leaving the tap on while soaping dishes the whole time" },
      { id: "b", text: "Watering plants at midday so more evaporates" },
      { id: "c", text: "Washing the car with a running hose for an hour daily" },
      { id: "d", text: "Collecting rainwater in a clean barrel for plants" }
    ],
    answerId: "d",
    explanation: "Rainwater harvesting saves treated tap water. Running taps and midday waste lose water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-env-a-q21",
    prompt: "Coal, petroleum and natural gas are grouped as \u2014",
    options: [
      { id: "a", text: "renewable forest products" },
      { id: "b", text: "only laboratory chemicals" },
      { id: "c", text: "forms of pure oxygen" },
      { id: "d", text: "fossil fuels" }
    ],
    answerId: "d",
    explanation: "They formed from ancient living things buried long ago and are burned for energy \u2014 fossil fuels.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-env-a-q22",
    prompt: "Throwing plastic wrappers into a lake harms the environment mainly as \u2014",
    options: [
      { id: "a", text: "a renewable energy plan" },
      { id: "b", text: "afforestation" },
      { id: "c", text: "a way to make oxygen" },
      { id: "d", text: "water and soil pollution" }
    ],
    answerId: "d",
    explanation: "Plastic waste dirties water and land, harms animals, and lasts a long time.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-env-a-q23",
    prompt: "In the water diagram, arrow 1 (lake toward cloud) mainly shows \u2014",
    options: [
      { id: "a", text: "rainfall" },
      { id: "b", text: "condensation only as rain" },
      { id: "c", text: "filtration in a funnel" },
      { id: "d", text: "evaporation" }
    ],
    answerId: "d",
    explanation: "Heat lifts water as vapour from the lake \u2014 evaporation \u2014 before clouds form.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Water cycle style: sun, vapour arrows up from lake, cloud, rain down to land\"><style>.part { fill:#bbf7d0; stroke:#333; stroke-width:2; }\n.label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n.small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n.arrow { stroke:#333; stroke-width:1.5; fill:none; }\n.badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n.tree { fill:#16a34a; stroke:#14532d; stroke-width:1.5; }\n.trunk { fill:#92400e; stroke:#333; stroke-width:1; }\n.water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }\n.sun { fill:#facc15; stroke:#b45309; stroke-width:2; }\n.smoke { fill:#94a3b8; opacity:0.7; }\n.card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n.soil { fill:#d6b48a; stroke:#333; stroke-width:1; }\n.dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }</style><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"20\" text-anchor=\"middle\">Water on the move</text>\n  <circle class=\"sun\" cx=\"50\" cy=\"50\" r=\"16\"/>\n  <rect class=\"water\" x=\"40\" y=\"150\" width=\"100\" height=\"40\"/>\n  <text class=\"small\" x=\"90\" y=\"175\" text-anchor=\"middle\">lake</text>\n  <path class=\"arrow\" d=\"M90,145 Q90,100 120,70\"/>\n  <text class=\"small\" x=\"70\" y=\"100\">1</text>\n  <ellipse cx=\"180\" cy=\"55\" rx=\"40\" ry=\"20\" fill=\"#cbd5e1\" stroke=\"#333\"/>\n  <text class=\"small\" x=\"180\" y=\"60\" text-anchor=\"middle\">cloud</text>\n  <line class=\"arrow\" x1=\"200\" y1=\"75\" x2=\"220\" y2=\"120\"/>\n  <line class=\"arrow\" x1=\"190\" y1=\"75\" x2=\"200\" y2=\"120\"/>\n  <text class=\"small\" x=\"230\" y=\"100\">2</text>\n  <rect class=\"soil\" x=\"200\" y=\"150\" width=\"90\" height=\"40\"/>\n  <text class=\"small\" x=\"245\" y=\"175\" text-anchor=\"middle\">land</text>\n</svg>", "alt": "Water cycle style: sun, vapour arrows up from lake, cloud, rain down to land"}
  },
  {
    id: "g5-sci-env-a-q24",
    prompt: "The 3 R's of waste management are \u2014",
    options: [
      { id: "a", text: "Run, Rest, Race" },
      { id: "b", text: "Read, Write, Recite" },
      { id: "c", text: "Rock, River, Rain only" },
      { id: "d", text: "Reduce, Reuse, Recycle" }
    ],
    answerId: "d",
    explanation: "Reduce waste, reuse items, and recycle materials are the classic 3 R's.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g5-sci-env-b-q01",
    prompt: "Air is a natural resource because \u2014",
    options: [
      { id: "a", text: "living things need it and it comes from nature" },
      { id: "b", text: "it is made only in factories" },
      { id: "c", text: "it is a fossil fuel" },
      { id: "d", text: "it cannot be polluted" }
    ],
    answerId: "a",
    explanation: "We breathe air every moment. Keeping air clean is part of caring for resources.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-env-b-q02",
    prompt: "Which letter shows a renewable energy source powered by moving air?",
    options: [
      { id: "a", text: "Q" },
      { id: "b", text: "R" },
      { id: "c", text: "Neither" },
      { id: "d", text: "Only coal R" }
    ],
    answerId: "a",
    explanation: "Q is a wind turbine. Wind is renewable. R (coal) is non-renewable.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Solar panel on roof, wind turbine, and coal plant chimney in a row labelled P Q R\"><style>.part { fill:#bbf7d0; stroke:#333; stroke-width:2; }\n.label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n.small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n.arrow { stroke:#333; stroke-width:1.5; fill:none; }\n.badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n.tree { fill:#16a34a; stroke:#14532d; stroke-width:1.5; }\n.trunk { fill:#92400e; stroke:#333; stroke-width:1; }\n.water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }\n.sun { fill:#facc15; stroke:#b45309; stroke-width:2; }\n.smoke { fill:#94a3b8; opacity:0.7; }\n.card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n.soil { fill:#d6b48a; stroke:#333; stroke-width:1; }\n.dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }</style><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"20\" text-anchor=\"middle\">Energy sources</text>\n  <rect class=\"card\" x=\"15\" y=\"45\" width=\"90\" height=\"130\"/>\n  <rect x=\"30\" y=\"70\" width=\"60\" height=\"40\" fill=\"#1e3a8a\" stroke=\"#333\"/>\n  <line x1=\"30\" y1=\"90\" x2=\"90\" y2=\"90\" stroke=\"#93c5fd\"/>\n  <line x1=\"60\" y1=\"70\" x2=\"60\" y2=\"110\" stroke=\"#93c5fd\"/>\n  <circle class=\"sun\" cx=\"60\" cy=\"55\" r=\"8\"/>\n  <text class=\"label\" x=\"60\" y=\"150\" text-anchor=\"middle\">P</text>\n  <text class=\"small\" x=\"60\" y=\"165\" text-anchor=\"middle\">solar</text>\n  <rect class=\"card\" x=\"115\" y=\"45\" width=\"90\" height=\"130\"/>\n  <line x1=\"160\" y1=\"160\" x2=\"160\" y2=\"80\" stroke=\"#333\" stroke-width=\"3\"/>\n  <polygon points=\"160,80 140,100 180,100\" fill=\"#94a3b8\" stroke=\"#333\"/>\n  <text class=\"label\" x=\"160\" y=\"150\" text-anchor=\"middle\">Q</text>\n  <text class=\"small\" x=\"160\" y=\"165\" text-anchor=\"middle\">wind</text>\n  <rect class=\"card\" x=\"215\" y=\"45\" width=\"90\" height=\"130\"/>\n  <rect x=\"240\" y=\"100\" width=\"40\" height=\"50\" fill=\"#78716c\" stroke=\"#333\"/>\n  <rect x=\"255\" y=\"70\" width=\"10\" height=\"30\" fill=\"#444\" stroke=\"#333\"/>\n  <ellipse class=\"smoke\" cx=\"260\" cy=\"55\" rx=\"14\" ry=\"10\"/>\n  <text class=\"label\" x=\"260\" y=\"165\" text-anchor=\"middle\">R</text>\n  <text class=\"small\" x=\"260\" y=\"180\" text-anchor=\"middle\">coal</text>\n</svg>", "alt": "Solar panel on roof, wind turbine, and coal plant chimney in a row labelled P Q R"}
  },
  {
    id: "g5-sci-env-b-q03",
    prompt: "Composting kitchen peels to enrich garden soil is closest to \u2014",
    options: [
      { id: "a", text: "recycling nutrients wisely" },
      { id: "b", text: "burning fossil coal" },
      { id: "c", text: "noise pollution" },
      { id: "d", text: "deforestation" }
    ],
    answerId: "a",
    explanation: "Compost returns nutrients to soil instead of wasting food scraps in landfill.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-env-b-q04",
    prompt: "Which resource card shows sunlight?",
    options: [
      { id: "a", text: "P" },
      { id: "b", text: "Q" },
      { id: "c", text: "R" },
      { id: "d", text: "S" }
    ],
    answerId: "a",
    explanation: "P is the Sun card. Sunlight is a renewable resource used by plants and solar panels.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Four cards labelled P Q R S: sun, coal lump, tree, flowing river\"><style>.part { fill:#bbf7d0; stroke:#333; stroke-width:2; }\n.label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n.small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n.arrow { stroke:#333; stroke-width:1.5; fill:none; }\n.badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n.tree { fill:#16a34a; stroke:#14532d; stroke-width:1.5; }\n.trunk { fill:#92400e; stroke:#333; stroke-width:1; }\n.water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }\n.sun { fill:#facc15; stroke:#b45309; stroke-width:2; }\n.smoke { fill:#94a3b8; opacity:0.7; }\n.card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n.soil { fill:#d6b48a; stroke:#333; stroke-width:1; }\n.dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }</style><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"20\" text-anchor=\"middle\">Natural resources</text>\n  <rect class=\"card\" x=\"20\" y=\"40\" width=\"130\" height=\"70\"/>\n  <circle class=\"sun\" cx=\"55\" cy=\"75\" r=\"16\"/>\n  <text class=\"label\" x=\"100\" y=\"80\">P</text>\n  <text class=\"small\" x=\"85\" y=\"100\" text-anchor=\"middle\">sunlight</text>\n  <rect class=\"card\" x=\"170\" y=\"40\" width=\"130\" height=\"70\"/>\n  <ellipse cx=\"210\" cy=\"75\" rx=\"20\" ry=\"14\" fill=\"#444\" stroke=\"#111\"/>\n  <text class=\"label\" x=\"255\" y=\"80\">Q</text>\n  <text class=\"small\" x=\"235\" y=\"100\" text-anchor=\"middle\">coal</text>\n  <rect class=\"card\" x=\"20\" y=\"125\" width=\"130\" height=\"70\"/>\n  <rect class=\"trunk\" x=\"55\" y=\"155\" width=\"10\" height=\"25\"/>\n  <ellipse class=\"tree\" cx=\"60\" cy=\"150\" rx=\"22\" ry=\"16\"/>\n  <text class=\"label\" x=\"110\" y=\"165\">R</text>\n  <text class=\"small\" x=\"85\" y=\"185\" text-anchor=\"middle\">forest tree</text>\n  <rect class=\"card\" x=\"170\" y=\"125\" width=\"130\" height=\"70\"/>\n  <path class=\"water\" d=\"M190,155 Q210,145 230,155 Q250,165 270,150\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"4\"/>\n  <text class=\"label\" x=\"255\" y=\"175\">S</text>\n  <text class=\"small\" x=\"235\" y=\"190\" text-anchor=\"middle\">river</text>\n</svg>", "alt": "Four cards labelled P Q R S: sun, coal lump, tree, flowing river"}
  },
  {
    id: "g5-sci-env-b-q05",
    prompt: "Turning off a dripping tap helps mainly to \u2014",
    options: [
      { id: "a", text: "conserve water" },
      { id: "b", text: "increase air pollution" },
      { id: "c", text: "mine more coal" },
      { id: "d", text: "clear a forest" }
    ],
    answerId: "a",
    explanation: "A drip wastes a lot of water over days. Fixing it is simple conservation.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-env-b-q06",
    prompt: "Forests help reduce soil erosion because tree roots \u2014",
    options: [
      { id: "a", text: "hold the soil in place" },
      { id: "b", text: "turn soil into plastic" },
      { id: "c", text: "remove all water forever" },
      { id: "d", text: "attract only factory smoke" }
    ],
    answerId: "a",
    explanation: "Roots bind soil so rain is less likely to wash it away \u2014 one reason deforestation is harmful.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-env-b-q07",
    prompt: "Vehicle exhaust in a busy street is mainly \u2014",
    options: [
      { id: "a", text: "noise only, never chemical" },
      { id: "b", text: "air pollution" },
      { id: "c", text: "a type of forest" },
      { id: "d", text: "pure oxygen therapy" }
    ],
    answerId: "b",
    explanation: "Exhaust gases and particles dirty the air people breathe \u2014 air pollution (and engines can add noise too).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-env-b-q08",
    prompt: "Which is renewable if managed carefully?",
    options: [
      { id: "a", text: "Coal seam" },
      { id: "b", text: "Forest timber with replanting" },
      { id: "c", text: "Petroleum well" },
      { id: "d", text: "Ancient fossil gas only" }
    ],
    answerId: "b",
    explanation: "Trees can regrow if we plant and protect them. Coal, oil and gas do not renew on human timescales.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-env-b-q09",
    prompt: "Bin 2 in the habits chart means \u2014",
    options: [
      { id: "a", text: "reduce only" },
      { id: "b", text: "reuse" },
      { id: "c", text: "recycle only" },
      { id: "d", text: "burn everything" }
    ],
    answerId: "b",
    explanation: "2 is reuse \u2014 using an item again for the same or a new purpose.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Three bins labelled 1 2 3 with icons: smaller use arrow, reuse bag, recycle arrows\"><style>.part { fill:#bbf7d0; stroke:#333; stroke-width:2; }\n.label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n.small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n.arrow { stroke:#333; stroke-width:1.5; fill:none; }\n.badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n.tree { fill:#16a34a; stroke:#14532d; stroke-width:1.5; }\n.trunk { fill:#92400e; stroke:#333; stroke-width:1; }\n.water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }\n.sun { fill:#facc15; stroke:#b45309; stroke-width:2; }\n.smoke { fill:#94a3b8; opacity:0.7; }\n.card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n.soil { fill:#d6b48a; stroke:#333; stroke-width:1; }\n.dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }</style><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"22\" text-anchor=\"middle\">Three green habits</text>\n  <rect class=\"card\" x=\"20\" y=\"50\" width=\"85\" height=\"120\"/>\n  <text class=\"label\" x=\"62\" y=\"80\" text-anchor=\"middle\">1</text>\n  <text class=\"small\" x=\"62\" y=\"110\" text-anchor=\"middle\">use less</text>\n  <text class=\"small\" x=\"62\" y=\"130\" text-anchor=\"middle\">(reduce)</text>\n  <rect class=\"card\" x=\"117\" y=\"50\" width=\"85\" height=\"120\"/>\n  <text class=\"label\" x=\"160\" y=\"80\" text-anchor=\"middle\">2</text>\n  <text class=\"small\" x=\"160\" y=\"110\" text-anchor=\"middle\">use again</text>\n  <text class=\"small\" x=\"160\" y=\"130\" text-anchor=\"middle\">(reuse)</text>\n  <rect class=\"card\" x=\"215\" y=\"50\" width=\"85\" height=\"120\"/>\n  <text class=\"label\" x=\"257\" y=\"80\" text-anchor=\"middle\">3</text>\n  <text class=\"small\" x=\"257\" y=\"110\" text-anchor=\"middle\">make new</text>\n  <text class=\"small\" x=\"257\" y=\"130\" text-anchor=\"middle\">(recycle)</text>\n  <text class=\"small\" x=\"160\" y=\"200\" text-anchor=\"middle\">Which number is recycle?</text>\n</svg>", "alt": "Three bins labelled 1 2 3 with icons: smaller use arrow, reuse bag, recycle arrows"}
  },
  {
    id: "g5-sci-env-b-q10",
    prompt: "Why is coal called non-renewable?",
    options: [
      { id: "a", text: "It forms again every night" },
      { id: "b", text: "It takes millions of years to form and we use it up faster than it forms" },
      { id: "c", text: "It is made of pure oxygen" },
      { id: "d", text: "It never releases energy" }
    ],
    answerId: "b",
    explanation: "Fossil fuels form far too slowly to replace what we burn today.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-env-b-q11",
    prompt: "Paper sent to a recycling plant to make new notebooks is \u2014",
    options: [
      { id: "a", text: "reuse of the same notebook page only" },
      { id: "b", text: "recycle" },
      { id: "c", text: "deforestation of the notebook" },
      { id: "d", text: "noise pollution" }
    ],
    answerId: "b",
    explanation: "Recycling changes old paper into new paper products.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-env-b-q12",
    prompt: "Arrow 2 (cloud toward land) in the water picture mainly shows \u2014",
    options: [
      { id: "a", text: "evaporation from the lake" },
      { id: "b", text: "precipitation (rain)" },
      { id: "c", text: "a coal mine" },
      { id: "d", text: "magnetic force" }
    ],
    answerId: "b",
    explanation: "Water falling from clouds is precipitation \u2014 often rain.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Water cycle style: sun, vapour arrows up from lake, cloud, rain down to land\"><style>.part { fill:#bbf7d0; stroke:#333; stroke-width:2; }\n.label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n.small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n.arrow { stroke:#333; stroke-width:1.5; fill:none; }\n.badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n.tree { fill:#16a34a; stroke:#14532d; stroke-width:1.5; }\n.trunk { fill:#92400e; stroke:#333; stroke-width:1; }\n.water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }\n.sun { fill:#facc15; stroke:#b45309; stroke-width:2; }\n.smoke { fill:#94a3b8; opacity:0.7; }\n.card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n.soil { fill:#d6b48a; stroke:#333; stroke-width:1; }\n.dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }</style><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"20\" text-anchor=\"middle\">Water on the move</text>\n  <circle class=\"sun\" cx=\"50\" cy=\"50\" r=\"16\"/>\n  <rect class=\"water\" x=\"40\" y=\"150\" width=\"100\" height=\"40\"/>\n  <text class=\"small\" x=\"90\" y=\"175\" text-anchor=\"middle\">lake</text>\n  <path class=\"arrow\" d=\"M90,145 Q90,100 120,70\"/>\n  <text class=\"small\" x=\"70\" y=\"100\">1</text>\n  <ellipse cx=\"180\" cy=\"55\" rx=\"40\" ry=\"20\" fill=\"#cbd5e1\" stroke=\"#333\"/>\n  <text class=\"small\" x=\"180\" y=\"60\" text-anchor=\"middle\">cloud</text>\n  <line class=\"arrow\" x1=\"200\" y1=\"75\" x2=\"220\" y2=\"120\"/>\n  <line class=\"arrow\" x1=\"190\" y1=\"75\" x2=\"200\" y2=\"120\"/>\n  <text class=\"small\" x=\"230\" y=\"100\">2</text>\n  <rect class=\"soil\" x=\"200\" y=\"150\" width=\"90\" height=\"40\"/>\n  <text class=\"small\" x=\"245\" y=\"175\" text-anchor=\"middle\">land</text>\n</svg>", "alt": "Water cycle style: sun, vapour arrows up from lake, cloud, rain down to land"}
  },
  {
    id: "g5-sci-env-b-q13",
    prompt: "Dumping factory waste into a river is harmful mainly because it \u2014",
    options: [
      { id: "a", text: "makes the river a renewable forest" },
      { id: "b", text: "increases oxygen for free forever" },
      { id: "c", text: "pollutes water and can kill aquatic life" },
      { id: "d", text: "plants more trees automatically" }
    ],
    answerId: "c",
    explanation: "Chemicals and waste lower water quality and can poison fish and people who use the river.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Factory with smoke stacks beside a river; fish symbol with X; labels A air smoke and B dirty water pipe\"><style>.part { fill:#bbf7d0; stroke:#333; stroke-width:2; }\n.label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n.small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n.arrow { stroke:#333; stroke-width:1.5; fill:none; }\n.badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n.tree { fill:#16a34a; stroke:#14532d; stroke-width:1.5; }\n.trunk { fill:#92400e; stroke:#333; stroke-width:1; }\n.water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }\n.sun { fill:#facc15; stroke:#b45309; stroke-width:2; }\n.smoke { fill:#94a3b8; opacity:0.7; }\n.card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n.soil { fill:#d6b48a; stroke:#333; stroke-width:1; }\n.dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }</style><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"20\" text-anchor=\"middle\">Pollution scene</text>\n  <rect x=\"40\" y=\"80\" width=\"90\" height=\"70\" fill=\"#94a3b8\" stroke=\"#333\"/>\n  <rect x=\"55\" y=\"50\" width=\"12\" height=\"30\" fill=\"#64748b\" stroke=\"#333\"/>\n  <rect x=\"90\" y=\"45\" width=\"12\" height=\"35\" fill=\"#64748b\" stroke=\"#333\"/>\n  <ellipse class=\"smoke\" cx=\"61\" cy=\"35\" rx=\"14\" ry=\"10\"/>\n  <ellipse class=\"smoke\" cx=\"96\" cy=\"28\" rx=\"16\" ry=\"12\"/>\n  <circle class=\"badge\" cx=\"70\" cy=\"25\" r=\"10\"/><text class=\"label\" x=\"70\" y=\"30\" text-anchor=\"middle\">A</text>\n  <rect class=\"water\" x=\"160\" y=\"130\" width=\"140\" height=\"40\"/>\n  <path d=\"M130,120 L160,140\" stroke=\"#78716c\" stroke-width=\"6\"/>\n  <circle class=\"badge\" cx=\"145\" cy=\"115\" r=\"10\"/><text class=\"label\" x=\"145\" y=\"120\" text-anchor=\"middle\">B</text>\n  <text class=\"small\" x=\"230\" y=\"155\" text-anchor=\"middle\">river</text>\n  <text class=\"small\" x=\"230\" y=\"185\" text-anchor=\"middle\">fish in trouble</text>\n</svg>", "alt": "Factory with smoke stacks beside a river; fish symbol with X; labels A air smoke and B dirty water pipe"}
  },
  {
    id: "g5-sci-env-b-q14",
    prompt: "Which everyday choice supports conservation of fuel?",
    options: [
      { id: "a", text: "Leaving all lights on when empty" },
      { id: "b", text: "Using a car for a 50-metre walk every time" },
      { id: "c", text: "Walking or cycling a short safe trip" },
      { id: "d", text: "Burning leaves in the street daily" }
    ],
    answerId: "c",
    explanation: "Walking or cycling saves petrol/diesel and reduces exhaust for short trips.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-env-b-q15",
    prompt: "Minerals like iron ore are taken from the Earth by \u2014",
    options: [
      { id: "a", text: "photosynthesis only" },
      { id: "b", text: "the water cycle alone" },
      { id: "c", text: "mining" },
      { id: "d", text: "recycling sunlight" }
    ],
    answerId: "c",
    explanation: "Mining extracts minerals. Many mineral stocks are limited, so wise use and recycling metals matter.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-env-b-q16",
    prompt: "A national park that protects tigers mainly helps \u2014",
    options: [
      { id: "a", text: "increase deforestation" },
      { id: "b", text: "raise factory smoke" },
      { id: "c", text: "wildlife conservation" },
      { id: "d", text: "waste more plastic" }
    ],
    answerId: "c",
    explanation: "Protected areas keep habitats safer so endangered animals can survive.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-env-b-q17",
    prompt: "Which energy pair is both renewable?",
    options: [
      { id: "a", text: "Coal and petroleum" },
      { id: "b", text: "Coal and natural gas" },
      { id: "c", text: "Solar and wind" },
      { id: "d", text: "Petrol and diesel only" }
    ],
    answerId: "c",
    explanation: "Solar and wind renew daily. Coal, petroleum, petrol and diesel are fossil-fuel based.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Solar panel on roof, wind turbine, and coal plant chimney in a row labelled P Q R\"><style>.part { fill:#bbf7d0; stroke:#333; stroke-width:2; }\n.label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n.small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n.arrow { stroke:#333; stroke-width:1.5; fill:none; }\n.badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n.tree { fill:#16a34a; stroke:#14532d; stroke-width:1.5; }\n.trunk { fill:#92400e; stroke:#333; stroke-width:1; }\n.water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }\n.sun { fill:#facc15; stroke:#b45309; stroke-width:2; }\n.smoke { fill:#94a3b8; opacity:0.7; }\n.card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n.soil { fill:#d6b48a; stroke:#333; stroke-width:1; }\n.dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }</style><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"20\" text-anchor=\"middle\">Energy sources</text>\n  <rect class=\"card\" x=\"15\" y=\"45\" width=\"90\" height=\"130\"/>\n  <rect x=\"30\" y=\"70\" width=\"60\" height=\"40\" fill=\"#1e3a8a\" stroke=\"#333\"/>\n  <line x1=\"30\" y1=\"90\" x2=\"90\" y2=\"90\" stroke=\"#93c5fd\"/>\n  <line x1=\"60\" y1=\"70\" x2=\"60\" y2=\"110\" stroke=\"#93c5fd\"/>\n  <circle class=\"sun\" cx=\"60\" cy=\"55\" r=\"8\"/>\n  <text class=\"label\" x=\"60\" y=\"150\" text-anchor=\"middle\">P</text>\n  <text class=\"small\" x=\"60\" y=\"165\" text-anchor=\"middle\">solar</text>\n  <rect class=\"card\" x=\"115\" y=\"45\" width=\"90\" height=\"130\"/>\n  <line x1=\"160\" y1=\"160\" x2=\"160\" y2=\"80\" stroke=\"#333\" stroke-width=\"3\"/>\n  <polygon points=\"160,80 140,100 180,100\" fill=\"#94a3b8\" stroke=\"#333\"/>\n  <text class=\"label\" x=\"160\" y=\"150\" text-anchor=\"middle\">Q</text>\n  <text class=\"small\" x=\"160\" y=\"165\" text-anchor=\"middle\">wind</text>\n  <rect class=\"card\" x=\"215\" y=\"45\" width=\"90\" height=\"130\"/>\n  <rect x=\"240\" y=\"100\" width=\"40\" height=\"50\" fill=\"#78716c\" stroke=\"#333\"/>\n  <rect x=\"255\" y=\"70\" width=\"10\" height=\"30\" fill=\"#444\" stroke=\"#333\"/>\n  <ellipse class=\"smoke\" cx=\"260\" cy=\"55\" rx=\"14\" ry=\"10\"/>\n  <text class=\"label\" x=\"260\" y=\"165\" text-anchor=\"middle\">R</text>\n  <text class=\"small\" x=\"260\" y=\"180\" text-anchor=\"middle\">coal</text>\n</svg>", "alt": "Solar panel on roof, wind turbine, and coal plant chimney in a row labelled P Q R"}
  },
  {
    id: "g5-sci-env-b-q18",
    prompt: "Plastic litter on a beach is a form of \u2014",
    options: [
      { id: "a", text: "afforestation" },
      { id: "b", text: "renewable coal" },
      { id: "c", text: "pollution" },
      { id: "d", text: "pure natural gas" }
    ],
    answerId: "c",
    explanation: "Litter dirties land and sea and harms animals \u2014 pollution.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-env-b-q19",
    prompt: "Which best describes reduce?",
    options: [
      { id: "a", text: "Melting bottles into new bottles only" },
      { id: "b", text: "Using the same jar as a pencil holder" },
      { id: "c", text: "Planting a forest" },
      { id: "d", text: "Buying and wasting fewer disposable items" }
    ],
    answerId: "d",
    explanation: "Reduce means cutting how much you consume and throw away in the first place.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-env-b-q20",
    prompt: "Cutting all trees on hillside P would most likely \u2014",
    options: [
      { id: "a", text: "improve wildlife homes" },
      { id: "b", text: "increase oxygen production there" },
      { id: "c", text: "stop all rain on Earth forever" },
      { id: "d", text: "raise the risk of soil wash-away like hillside Q" }
    ],
    answerId: "d",
    explanation: "Without tree cover, soil erodes more easily \u2014 the cleared look of Q.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Split scene: left healthy forest with many trees, right bare hill with stumps labelled Deforested\"><style>.part { fill:#bbf7d0; stroke:#333; stroke-width:2; }\n.label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n.small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n.arrow { stroke:#333; stroke-width:1.5; fill:none; }\n.badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n.tree { fill:#16a34a; stroke:#14532d; stroke-width:1.5; }\n.trunk { fill:#92400e; stroke:#333; stroke-width:1; }\n.water { fill:#60a5fa; fill-opacity:0.75; stroke:none; }\n.sun { fill:#facc15; stroke:#b45309; stroke-width:2; }\n.smoke { fill:#94a3b8; opacity:0.7; }\n.card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n.soil { fill:#d6b48a; stroke:#333; stroke-width:1; }\n.dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }</style><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"18\" text-anchor=\"middle\">Two hillsides</text>\n  <line class=\"dash\" x1=\"160\" y1=\"30\" x2=\"160\" y2=\"200\"/>\n  <rect class=\"trunk\" x=\"50\" y=\"120\" width=\"10\" height=\"40\"/>\n  <ellipse class=\"tree\" cx=\"55\" cy=\"115\" rx=\"20\" ry=\"18\"/>\n  <rect class=\"trunk\" x=\"90\" y=\"130\" width=\"10\" height=\"40\"/>\n  <ellipse class=\"tree\" cx=\"95\" cy=\"125\" rx=\"18\" ry=\"16\"/>\n  <rect class=\"trunk\" x=\"30\" y=\"140\" width=\"10\" height=\"35\"/>\n  <ellipse class=\"tree\" cx=\"35\" cy=\"135\" rx=\"16\" ry=\"14\"/>\n  <text class=\"small\" x=\"70\" y=\"200\" text-anchor=\"middle\">P forest</text>\n  <rect class=\"trunk\" x=\"200\" y=\"150\" width=\"12\" height=\"12\"/>\n  <rect class=\"trunk\" x=\"240\" y=\"155\" width=\"12\" height=\"10\"/>\n  <rect class=\"trunk\" x=\"280\" y=\"148\" width=\"12\" height=\"14\"/>\n  <path d=\"M180,170 Q240,160 310,175\" fill=\"none\" stroke=\"#a16207\" stroke-width=\"3\"/>\n  <text class=\"small\" x=\"250\" y=\"200\" text-anchor=\"middle\">Q cleared</text>\n</svg>", "alt": "Split scene: left healthy forest with many trees, right bare hill with stumps labelled Deforested"}
  },
  {
    id: "g5-sci-env-b-q21",
    prompt: "Natural gas used in many kitchens is \u2014",
    options: [
      { id: "a", text: "a renewable tree sap" },
      { id: "b", text: "made only by wind turbines" },
      { id: "c", text: "pure recycled plastic" },
      { id: "d", text: "a fossil fuel" }
    ],
    answerId: "d",
    explanation: "Natural gas formed long ago with other fossil fuels and is non-renewable.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-env-b-q22",
    prompt: "An open garbage dump near wells can lead to \u2014",
    options: [
      { id: "a", text: "cleaner drinking water" },
      { id: "b", text: "instant afforestation" },
      { id: "c", text: "more oxygen from plastics" },
      { id: "d", text: "soil and water pollution" }
    ],
    answerId: "d",
    explanation: "Rotting waste and liquids can soak into soil and groundwater \u2014 dangerous pollution.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-env-b-q23",
    prompt: "Which is an example of reuse?",
    options: [
      { id: "a", text: "Throwing a jar away at once" },
      { id: "b", text: "Buying a new jar each day" },
      { id: "c", text: "Melting the jar in a big factory only" },
      { id: "d", text: "Washing a glass jar and storing spices in it" }
    ],
    answerId: "d",
    explanation: "Using the jar again for spices is reuse. Factory remaking would be recycling.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-env-b-q24",
    prompt: "Caring for our environment means \u2014",
    options: [
      { id: "a", text: "using every forest in one year" },
      { id: "b", text: "dumping waste into rivers freely" },
      { id: "c", text: "burning more coal with no filters on purpose" },
      { id: "d", text: "using resources wisely and cutting harmful waste" }
    ],
    answerId: "d",
    explanation: "Environment care combines conservation, less pollution, and protecting living things.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83c\udf0d",
    title: "Our environment",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "plant",
    speak: "Natural resources support life. We protect them by cutting waste and pollution and by choosing wiser energy habits.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "plant",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Resources", reveal: "Air, water, soil, forests, minerals, fuels", emoji: "\ud83c\udf3f" },
      { label: "Renewable?", reveal: "Sun and wind renew; coal and oil do not", emoji: "\u267b\ufe0f" },
      { label: "Pollution", reveal: "Air, water, soil, noise", emoji: "\ud83c\udfed" },
      { label: "3 R's", reveal: "Reduce, reuse, recycle", emoji: "\ud83d\udd01" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Which is a renewable resource?",
    options: [
        { id: "a", text: "Coal" },
        { id: "b", text: "Petroleum" },
        { id: "c", text: "Sunlight" },
        { id: "d", text: "Natural gas" }
    ],
    answerId: "c",
    why: "Sunlight renews every day. Coal, petroleum and natural gas are fossil fuels.",
    visual: "plant",
    speak: "Which is a renewable resource?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Know renewable vs non-renewable", "Spot pollution types", "Practise the 3 R's", "Sets ready \u2014 24 MCQs each"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g5ScienceEnvironment: ChapterDef = {
  id: "environment-resources",
  title: "Our Environment and Natural Resources",
  emoji: "\ud83c\udf0d",
  blurb: "Resources, pollution and the 3 R's",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "earth-space",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "earth-space",
      questions: SET_B,
    },
  ],
  paperTopics: ["earth-space", "living-things"],
};

export const g5ScienceEnvironmentQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
