import type { ChapterDef, PrepQuestion } from "../types";

/** Force and Simple Machines - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g5-sci-force-a-q01",
    prompt: "In science, a force is best described as \u2014",
    options: [
      { id: "a", text: "a push or a pull" },
      { id: "b", text: "only a colour change" },
      { id: "c", text: "only a loud sound" },
      { id: "d", text: "the mass of an object" }
    ],
    answerId: "a",
    explanation: "A force is any push or pull. Mass measures how much matter an object has; it is not a force.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-force-a-q02",
    prompt: "Which labelled scene shows friction slowing a moving ball?",
    options: [
      { id: "a", text: "Q" },
      { id: "b", text: "P" },
      { id: "c", text: "R" },
      { id: "d", text: "S" }
    ],
    answerId: "a",
    explanation: "In Q the ball rolls into grass and slows \u2014 friction opposes the motion. P starts motion; R changes shape; S is magnetic pull.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Four mini scenes labelled P Q R S: ball kicked, ball rolling into grass slowing, clay squashed, magnet pulling pin\"><style>.part { fill:#fde68a; stroke:#333; stroke-width:2; }\n.label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n.small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n.arrow { stroke:#333; stroke-width:1.8; fill:none; stroke-linecap:round; }\n.badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n.wood { fill:#c99a6b; stroke:#6b4a2b; stroke-width:1.5; }\n.metal { fill:#94a3b8; stroke:#334155; stroke-width:1.5; }\n.card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n.rope { fill:none; stroke:#78716c; stroke-width:2.5; }\n.fulcrum { fill:#444; }\n.green { fill:#86efac; stroke:#166534; stroke-width:1.5; }\n.dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }</style><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"18\" text-anchor=\"middle\">What is happening?</text>\n  <rect class=\"card\" x=\"15\" y=\"35\" width=\"140\" height=\"75\"/>\n  <circle class=\"part\" cx=\"50\" cy=\"75\" r=\"12\"/>\n  <line class=\"arrow\" x1=\"70\" y1=\"75\" x2=\"120\" y2=\"75\"/>\n  <text class=\"label\" x=\"30\" y=\"55\">P</text>\n  <text class=\"small\" x=\"85\" y=\"100\" text-anchor=\"middle\">kick starts motion</text>\n  <rect class=\"card\" x=\"165\" y=\"35\" width=\"140\" height=\"75\"/>\n  <circle class=\"part\" cx=\"200\" cy=\"75\" r=\"12\"/>\n  <line class=\"dash\" x1=\"220\" y1=\"75\" x2=\"280\" y2=\"75\"/>\n  <text class=\"label\" x=\"180\" y=\"55\">Q</text>\n  <text class=\"small\" x=\"235\" y=\"100\" text-anchor=\"middle\">slows on grass</text>\n  <rect class=\"card\" x=\"15\" y=\"120\" width=\"140\" height=\"75\"/>\n  <ellipse class=\"part\" cx=\"80\" cy=\"160\" rx=\"30\" ry=\"14\"/>\n  <text class=\"label\" x=\"30\" y=\"140\">R</text>\n  <text class=\"small\" x=\"80\" y=\"185\" text-anchor=\"middle\">clay flattened</text>\n  <rect class=\"card\" x=\"165\" y=\"120\" width=\"140\" height=\"75\"/>\n  <rect class=\"metal\" x=\"200\" y=\"145\" width=\"30\" height=\"14\"/>\n  <line class=\"arrow\" x1=\"250\" y1=\"152\" x2=\"235\" y2=\"152\"/>\n  <circle cx=\"260\" cy=\"152\" r=\"6\" fill=\"#aaa\" stroke=\"#333\"/>\n  <text class=\"label\" x=\"180\" y=\"140\">S</text>\n  <text class=\"small\" x=\"235\" y=\"185\" text-anchor=\"middle\">magnet pulls pin</text>\n</svg>", "alt": "Four mini scenes labelled P Q R S: ball kicked, ball rolling into grass slowing, clay squashed, magnet pulling pin"}
  },
  {
    id: "g5-sci-force-a-q03",
    prompt: "Earth pulls a falling mango downward. This force is called \u2014",
    options: [
      { id: "a", text: "gravity" },
      { id: "b", text: "friction only" },
      { id: "c", text: "magnetism only" },
      { id: "d", text: "sound" }
    ],
    answerId: "a",
    explanation: "Gravity is the pull of Earth on objects. It acts even when nothing is touching the mango.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-force-a-q04",
    prompt: "A simple machine that is a stiff bar turning about a fixed point is a \u2014",
    options: [
      { id: "a", text: "lever" },
      { id: "b", text: "screw only" },
      { id: "c", text: "wheel without an axle" },
      { id: "d", text: "electric motor" }
    ],
    answerId: "a",
    explanation: "A lever is a rigid bar that turns about a fulcrum. See-saws and crowbars are levers.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-force-a-q05",
    prompt: "On the see-saw diagram, the letter F marks the \u2014",
    options: [
      { id: "a", text: "fulcrum" },
      { id: "b", text: "effort force only" },
      { id: "c", text: "load only" },
      { id: "d", text: "pulley wheel" }
    ],
    answerId: "a",
    explanation: "F is the triangle support \u2014 the fulcrum \u2014 the fixed turning point of the lever.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A see-saw lever: load on left, fulcrum triangle in middle marked F, effort on right marked E\"><style>.part { fill:#fde68a; stroke:#333; stroke-width:2; }\n.label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n.small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n.arrow { stroke:#333; stroke-width:1.8; fill:none; stroke-linecap:round; }\n.badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n.wood { fill:#c99a6b; stroke:#6b4a2b; stroke-width:1.5; }\n.metal { fill:#94a3b8; stroke:#334155; stroke-width:1.5; }\n.card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n.rope { fill:none; stroke:#78716c; stroke-width:2.5; }\n.fulcrum { fill:#444; }\n.green { fill:#86efac; stroke:#166534; stroke-width:1.5; }\n.dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }</style><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"22\" text-anchor=\"middle\">See-saw (lever)</text>\n  <rect class=\"wood\" x=\"40\" y=\"100\" width=\"240\" height=\"12\"/>\n  <polygon class=\"fulcrum\" points=\"160,112 145,160 175,160\"/>\n  <circle class=\"badge\" cx=\"160\" cy=\"175\" r=\"10\"/><text class=\"label\" x=\"160\" y=\"180\" text-anchor=\"middle\">F</text>\n  <rect class=\"part\" x=\"50\" y=\"70\" width=\"36\" height=\"28\"/>\n  <text class=\"small\" x=\"68\" y=\"90\" text-anchor=\"middle\">load</text>\n  <line class=\"arrow\" x1=\"250\" y1=\"70\" x2=\"250\" y2=\"95\"/>\n  <circle class=\"badge\" cx=\"250\" cy=\"55\" r=\"10\"/><text class=\"label\" x=\"250\" y=\"60\" text-anchor=\"middle\">E</text>\n  <text class=\"small\" x=\"250\" y=\"85\" text-anchor=\"middle\">effort</text>\n  <text class=\"small\" x=\"160\" y=\"210\" text-anchor=\"middle\">F = fulcrum</text>\n</svg>", "alt": "A see-saw lever: load on left, fulcrum triangle in middle marked F, effort on right marked E"}
  },
  {
    id: "g5-sci-force-a-q06",
    prompt: "Which everyday tool is a pair of levers working together?",
    options: [
      { id: "a", text: "Scissors" },
      { id: "b", text: "A slide ramp alone" },
      { id: "c", text: "A screw lid alone" },
      { id: "d", text: "A magnet" }
    ],
    answerId: "a",
    explanation: "Scissors have two lever arms sharing a fulcrum at the pivot screw.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-force-a-q07",
    prompt: "A ball at rest starts moving when kicked. The kick \u2014",
    options: [
      { id: "a", text: "removes all gravity" },
      { id: "b", text: "applies a force that starts motion" },
      { id: "c", text: "changes the ball's mass" },
      { id: "d", text: "is not a force" }
    ],
    answerId: "b",
    explanation: "Forces can start motion. The kick pushes the ball; mass stays the same and gravity still acts.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-force-a-q08",
    prompt: "We rub our hands together to feel warmth. The force opposing the rubbing is \u2014",
    options: [
      { id: "a", text: "gravity alone" },
      { id: "b", text: "friction" },
      { id: "c", text: "magnetism alone" },
      { id: "d", text: "a pulley force" }
    ],
    answerId: "b",
    explanation: "Friction between the palms opposes the sliding and can produce heat.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-force-a-q09",
    prompt: "A fixed pulley is useful mainly because it \u2014",
    options: [
      { id: "a", text: "halves the effort" },
      { id: "b", text: "lets you change the direction of your pull" },
      { id: "c", text: "makes the load lighter" },
      { id: "d", text: "removes friction" }
    ],
    answerId: "b",
    explanation: "With a single fixed pulley you pull down on the rope and the load goes up, so the pulley changes the direction of your pull. 'Halves the effort' is tempting, but that is what a movable pulley does; with one fixed pulley you still pull about as hard as the load's weight. The load does not become lighter, and the wheel still has some friction.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A single fixed pulley on a beam with rope over wheel; load hanging on one side, hand pulling other side\"><style>.part { fill:#fde68a; stroke:#333; stroke-width:2; }\n.label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n.small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n.arrow { stroke:#333; stroke-width:1.8; fill:none; stroke-linecap:round; }\n.badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n.wood { fill:#c99a6b; stroke:#6b4a2b; stroke-width:1.5; }\n.metal { fill:#94a3b8; stroke:#334155; stroke-width:1.5; }\n.card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n.rope { fill:none; stroke:#78716c; stroke-width:2.5; }\n.fulcrum { fill:#444; }\n.green { fill:#86efac; stroke:#166534; stroke-width:1.5; }\n.dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }</style><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"20\" text-anchor=\"middle\">Fixed pulley</text>\n  <rect class=\"wood\" x=\"60\" y=\"30\" width=\"200\" height=\"12\"/>\n  <circle class=\"metal\" cx=\"160\" cy=\"70\" r=\"22\"/>\n  <circle cx=\"160\" cy=\"70\" r=\"6\" fill=\"#444\"/>\n  <path class=\"rope\" d=\"M160,48 Q160,40 160,30\"/>\n  <path class=\"rope\" d=\"M138,70 L138,160\"/>\n  <path class=\"rope\" d=\"M182,70 L182,140\"/>\n  <rect class=\"part\" x=\"120\" y=\"160\" width=\"36\" height=\"28\"/>\n  <text class=\"small\" x=\"138\" y=\"205\" text-anchor=\"middle\">load</text>\n  <line class=\"arrow\" x1=\"182\" y1=\"150\" x2=\"182\" y2=\"175\"/>\n  <text class=\"small\" x=\"210\" y=\"180\">pull</text>\n</svg>", "alt": "A single fixed pulley on a beam with rope over wheel; load hanging on one side, hand pulling other side"}
  },
  {
    id: "g5-sci-force-a-q10",
    prompt: "Path P (the long ramp) compared with path Q (straight up) usually needs \u2014",
    options: [
      { id: "a", text: "a larger force over a shorter path" },
      { id: "b", text: "a smaller force over a longer path" },
      { id: "c", text: "zero force" },
      { id: "d", text: "magnetic force only" }
    ],
    answerId: "b",
    explanation: "An inclined plane spreads the work: smaller effort, longer distance.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A box being pushed up a long gentle ramp versus a steep short cliff path labelled P and Q\"><style>.part { fill:#fde68a; stroke:#333; stroke-width:2; }\n.label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n.small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n.arrow { stroke:#333; stroke-width:1.8; fill:none; stroke-linecap:round; }\n.badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n.wood { fill:#c99a6b; stroke:#6b4a2b; stroke-width:1.5; }\n.metal { fill:#94a3b8; stroke:#334155; stroke-width:1.5; }\n.card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n.rope { fill:none; stroke:#78716c; stroke-width:2.5; }\n.fulcrum { fill:#444; }\n.green { fill:#86efac; stroke:#166534; stroke-width:1.5; }\n.dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }</style><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"20\" text-anchor=\"middle\">Two ways to a platform</text>\n  <rect class=\"wood\" x=\"20\" y=\"160\" width=\"80\" height=\"12\"/>\n  <rect class=\"wood\" x=\"220\" y=\"50\" width=\"80\" height=\"12\"/>\n  <line class=\"arrow\" x1=\"100\" y1=\"160\" x2=\"220\" y2=\"62\"/>\n  <text class=\"label\" x=\"150\" y=\"140\">P</text>\n  <line class=\"dash\" x1=\"60\" y1=\"160\" x2=\"60\" y2=\"62\"/>\n  <line class=\"dash\" x1=\"60\" y1=\"62\" x2=\"220\" y2=\"62\"/>\n  <text class=\"label\" x=\"40\" y=\"110\">Q</text>\n  <rect class=\"part\" x=\"130\" y=\"100\" width=\"28\" height=\"22\"/>\n  <text class=\"small\" x=\"160\" y=\"200\" text-anchor=\"middle\">P ramp \u00b7 Q straight up</text>\n</svg>", "alt": "A box being pushed up a long gentle ramp versus a steep short cliff path labelled P and Q"}
  },
  {
    id: "g5-sci-force-a-q11",
    prompt: "Which force can act without touching the object?",
    options: [
      { id: "a", text: "Friction between shoe and floor" },
      { id: "b", text: "The pull of a magnet on a nearby iron pin" },
      { id: "c", text: "Pushing a door with your hand" },
      { id: "d", text: "Dragging a box on sand" }
    ],
    answerId: "b",
    explanation: "Magnetism (and gravity) can act at a distance. Friction and muscular pushes need contact.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-force-a-q12",
    prompt: "Shoes with rough soles help you walk on slippery tiles because they \u2014",
    options: [
      { id: "a", text: "remove gravity" },
      { id: "b", text: "increase friction for better grip" },
      { id: "c", text: "make you weigh less" },
      { id: "d", text: "turn you into a magnet" }
    ],
    answerId: "b",
    explanation: "Rougher soles raise friction so your feet do not slide as easily.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-force-a-q13",
    prompt: "The triangular blade W splitting the log is acting as a \u2014",
    options: [
      { id: "a", text: "pulley" },
      { id: "b", text: "wheel and axle" },
      { id: "c", text: "wedge" },
      { id: "d", text: "see-saw fulcrum only" }
    ],
    answerId: "c",
    explanation: "A wedge is thick at one end and thin at the other. It forces materials apart when driven in.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"An axe head wedge splitting a log, labelled W on the triangular blade\"><style>.part { fill:#fde68a; stroke:#333; stroke-width:2; }\n.label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n.small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n.arrow { stroke:#333; stroke-width:1.8; fill:none; stroke-linecap:round; }\n.badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n.wood { fill:#c99a6b; stroke:#6b4a2b; stroke-width:1.5; }\n.metal { fill:#94a3b8; stroke:#334155; stroke-width:1.5; }\n.card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n.rope { fill:none; stroke:#78716c; stroke-width:2.5; }\n.fulcrum { fill:#444; }\n.green { fill:#86efac; stroke:#166534; stroke-width:1.5; }\n.dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }</style><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"22\" text-anchor=\"middle\">Splitting a log</text>\n  <rect class=\"wood\" x=\"60\" y=\"80\" width=\"200\" height=\"80\"/>\n  <line class=\"dash\" x1=\"160\" y1=\"80\" x2=\"160\" y2=\"160\"/>\n  <polygon class=\"metal\" points=\"160,70 130,130 190,130\"/>\n  <circle class=\"badge\" cx=\"160\" cy=\"50\" r=\"10\"/><text class=\"label\" x=\"160\" y=\"55\" text-anchor=\"middle\">W</text>\n  <text class=\"small\" x=\"160\" y=\"200\" text-anchor=\"middle\">W = wedge-shaped blade</text>\n</svg>", "alt": "An axe head wedge splitting a log, labelled W on the triangular blade"}
  },
  {
    id: "g5-sci-force-a-q14",
    prompt: "Sana cuts a right-angled paper triangle (1) and winds it round a pencil (2). The slanting edge makes a spiral, as shown. Which simple machine has she made a model of?",
    options: [
      { id: "a", text: "A wheel and axle" },
      { id: "b", text: "A pulley" },
      { id: "c", text: "A screw" },
      { id: "d", text: "A lever" }
    ],
    answerId: "c",
    explanation: "The slanting edge of the triangle is a ramp (an inclined plane); wound round a rod it becomes the spiral thread of a screw. It is not a wheel and axle, which needs a large wheel fixed to a thin rod that turns with it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Step 1: a right-angled paper triangle with its slanting edge drawn in red. Step 2: the same paper wound round a pencil, the red edge forming a spiral up the pencil.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><polygon points=\"30,170 130,170 130,60\" fill=\"#fef3c7\" stroke=\"#92400e\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><line x1=\"30\" y1=\"170\" x2=\"130\" y2=\"60\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-linecap=\"round\"/><text x=\"80\" y=\"200\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">1</text><rect x=\"205\" y=\"40\" width=\"26\" height=\"140\" fill=\"#fde68a\" stroke=\"#a16207\" stroke-width=\"1.5\"/><polygon points=\"205,180 231,180 218,200\" fill=\"#fcd34d\" stroke=\"#a16207\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><path d=\"M205,70 Q218,80 231,58\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-linejoin=\"round\"/><path d=\"M205,92 Q218,102 231,80\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-linejoin=\"round\"/><path d=\"M205,114 Q218,124 231,102\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-linejoin=\"round\"/><path d=\"M205,136 Q218,146 231,124\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-linejoin=\"round\"/><path d=\"M205,158 Q218,168 231,146\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-linejoin=\"round\"/><text x=\"270\" y=\"200\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">2</text><line x1=\"150\" y1=\"120\" x2=\"182.0\" y2=\"120.0\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"190,120 182,124.4 182,115.6\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/></svg>", "alt": "Step 1: a right-angled paper triangle with its slanting edge drawn in red. Step 2: the same paper wound round a pencil, the red edge forming a spiral up the pencil."}
  },
  {
    id: "g5-sci-force-a-q15",
    prompt: "Which machine helps the cart move more easily than dragging the box?",
    options: [
      { id: "a", text: "A wedge only" },
      { id: "b", text: "A see-saw only" },
      { id: "c", text: "A wheel and axle" },
      { id: "d", text: "A screw lid only" }
    ],
    answerId: "c",
    explanation: "Wheels on an axle let the load roll, which needs less force than sliding the box.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A cart with two wheels and axle carrying a box, next to a box being dragged without wheels\"><style>.part { fill:#fde68a; stroke:#333; stroke-width:2; }\n.label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n.small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n.arrow { stroke:#333; stroke-width:1.8; fill:none; stroke-linecap:round; }\n.badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n.wood { fill:#c99a6b; stroke:#6b4a2b; stroke-width:1.5; }\n.metal { fill:#94a3b8; stroke:#334155; stroke-width:1.5; }\n.card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n.rope { fill:none; stroke:#78716c; stroke-width:2.5; }\n.fulcrum { fill:#444; }\n.green { fill:#86efac; stroke:#166534; stroke-width:1.5; }\n.dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }</style><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"22\" text-anchor=\"middle\">Moving a heavy box</text>\n  <rect class=\"wood\" x=\"40\" y=\"100\" width=\"90\" height=\"40\"/>\n  <circle class=\"metal\" cx=\"60\" cy=\"150\" r=\"14\"/>\n  <circle class=\"metal\" cx=\"110\" cy=\"150\" r=\"14\"/>\n  <line class=\"arrow\" x1=\"140\" y1=\"120\" x2=\"170\" y2=\"120\"/>\n  <text class=\"small\" x=\"90\" y=\"90\" text-anchor=\"middle\">with wheels</text>\n  <rect class=\"part\" x=\"200\" y=\"120\" width=\"70\" height=\"40\"/>\n  <line class=\"dash\" x1=\"200\" y1=\"165\" x2=\"270\" y2=\"165\"/>\n  <text class=\"small\" x=\"235\" y=\"110\" text-anchor=\"middle\">dragging</text>\n  <text class=\"small\" x=\"160\" y=\"200\" text-anchor=\"middle\">Wheels reduce friction</text>\n</svg>", "alt": "A cart with two wheels and axle carrying a box, next to a box being dragged without wheels"}
  },
  {
    id: "g5-sci-force-a-q16",
    prompt: "When you press soft clay and it flattens, the force has \u2014",
    options: [
      { id: "a", text: "changed the speed of the clay" },
      { id: "b", text: "changed the direction of the clay" },
      { id: "c", text: "changed the shape of the clay" },
      { id: "d", text: "changed the mass of the clay" }
    ],
    answerId: "c",
    explanation: "Forces can change the shape of an object as well as its motion, and pressing flattens the clay into a new shape (scene R). Changing its speed or direction is tempting because forces start, stop and turn moving things (scenes P and Q), but the pressed clay stays where it is. Its mass does not change either: it is the same amount of clay.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Four mini scenes labelled P Q R S: a ball being kicked, a ball rolling onto grass, a lump of clay being pressed, a magnet near a pin\"><style>.part { fill:#fde68a; stroke:#333; stroke-width:2; }\n.label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n.small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n.arrow { stroke:#333; stroke-width:1.8; fill:none; stroke-linecap:round; }\n.badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n.wood { fill:#c99a6b; stroke:#6b4a2b; stroke-width:1.5; }\n.metal { fill:#94a3b8; stroke:#334155; stroke-width:1.5; }\n.card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n.rope { fill:none; stroke:#78716c; stroke-width:2.5; }\n.fulcrum { fill:#444; }\n.green { fill:#86efac; stroke:#166534; stroke-width:1.5; }\n.dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }</style><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"18\" text-anchor=\"middle\">What is happening?</text>\n  <rect class=\"card\" x=\"15\" y=\"35\" width=\"140\" height=\"75\"/>\n  <circle class=\"part\" cx=\"50\" cy=\"75\" r=\"12\"/>\n  <line class=\"arrow\" x1=\"70\" y1=\"75\" x2=\"120\" y2=\"75\"/>\n  <text class=\"label\" x=\"30\" y=\"55\">P</text>\n  <rect class=\"card\" x=\"165\" y=\"35\" width=\"140\" height=\"75\"/>\n  <circle class=\"part\" cx=\"200\" cy=\"75\" r=\"12\"/>\n  <line class=\"dash\" x1=\"220\" y1=\"75\" x2=\"280\" y2=\"75\"/>\n  <text class=\"label\" x=\"180\" y=\"55\">Q</text>\n  <rect class=\"card\" x=\"15\" y=\"120\" width=\"140\" height=\"75\"/>\n  <ellipse class=\"part\" cx=\"80\" cy=\"160\" rx=\"30\" ry=\"14\"/>\n  <text class=\"label\" x=\"30\" y=\"140\">R</text>\n  <rect class=\"card\" x=\"165\" y=\"120\" width=\"140\" height=\"75\"/>\n  <rect class=\"metal\" x=\"200\" y=\"145\" width=\"30\" height=\"14\"/>\n  <line class=\"arrow\" x1=\"250\" y1=\"152\" x2=\"235\" y2=\"152\"/>\n  <circle cx=\"260\" cy=\"152\" r=\"6\" fill=\"#aaa\" stroke=\"#333\"/>\n  <text class=\"label\" x=\"180\" y=\"140\">S</text>\n</svg>", "alt": "Four mini scenes labelled P Q R S: a ball being kicked, a ball rolling onto grass, a lump of clay being pressed, a magnet near a pin"}
  },
  {
    id: "g5-sci-force-a-q17",
    prompt: "Oiling a bicycle chain usually \u2014",
    options: [
      { id: "a", text: "increases friction on purpose" },
      { id: "b", text: "increases the bike's mass a lot" },
      { id: "c", text: "reduces friction so parts move more easily" },
      { id: "d", text: "turns the chain into a lever" }
    ],
    answerId: "c",
    explanation: "Lubricants reduce friction between moving parts so they do not scrape and wear as much.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-force-a-q18",
    prompt: "The load on a lever is \u2014",
    options: [
      { id: "a", text: "always the fulcrum pin" },
      { id: "b", text: "the effort you apply only" },
      { id: "c", text: "the object you want to move or lift" },
      { id: "d", text: "never needed" }
    ],
    answerId: "c",
    explanation: "Load means the weight or resistance you are trying to move. Effort is the force you apply.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-force-a-q19",
    prompt: "Which example is an inclined plane?",
    options: [
      { id: "a", text: "A see-saw" },
      { id: "b", text: "A flagpole pulley" },
      { id: "c", text: "Scissors" },
      { id: "d", text: "A sloping ramp into a truck" }
    ],
    answerId: "d",
    explanation: "A ramp is a classic inclined plane. See-saws and scissors are levers; flagpoles often use pulleys.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-force-a-q20",
    prompt: "A door knob is a simple machine closest to a \u2014",
    options: [
      { id: "a", text: "wedge splitting wood" },
      { id: "b", text: "fixed pulley on a well" },
      { id: "c", text: "lever see-saw only" },
      { id: "d", text: "wheel and axle" }
    ],
    answerId: "d",
    explanation: "Turning the knob (wheel) turns a shaft (axle) that pulls the latch \u2014 wheel and axle.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-force-a-q21",
    prompt: "Which statement about forces is true?",
    options: [
      { id: "a", text: "Forces cannot change direction of motion" },
      { id: "b", text: "Friction always helps sliding with zero grip needed" },
      { id: "c", text: "Magnets attract all plastics" },
      { id: "d", text: "A force can change an object's speed or direction" }
    ],
    answerId: "d",
    explanation: "Forces can speed up, slow down, or turn objects. Magnets do not attract ordinary plastics.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-force-a-q22",
    prompt: "Why do we use a crowbar to lift a heavy lid?",
    options: [
      { id: "a", text: "It removes the lid's mass" },
      { id: "b", text: "It creates energy" },
      { id: "c", text: "It stops gravity" },
      { id: "d", text: "It is a lever that helps a smaller effort move a larger load" }
    ],
    answerId: "d",
    explanation: "With the fulcrum placed well, a crowbar multiplies your effort so a heavy lid becomes easier to lift.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-force-a-q23",
    prompt: "Smooth ice is slippery mainly because there is \u2014",
    options: [
      { id: "a", text: "extra magnetism" },
      { id: "b", text: "extra gravity only" },
      { id: "c", text: "more sand friction" },
      { id: "d", text: "very little friction" }
    ],
    answerId: "d",
    explanation: "Low friction means surfaces slide easily. That is why ice feels slippery.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-force-a-q24",
    prompt: "Which is NOT a simple machine in this chapter's usual list?",
    options: [
      { id: "a", text: "Lever" },
      { id: "b", text: "Pulley" },
      { id: "c", text: "Inclined plane" },
      { id: "d", text: "Smartphone battery" }
    ],
    answerId: "d",
    explanation: "Levers, pulleys, ramps, wheels, screws and wedges are simple machines. A battery is an energy source, not a simple machine.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g5-sci-force-b-q01",
    prompt: "Pushing a shopping trolley is an example of \u2014",
    options: [
      { id: "a", text: "a contact force from your muscles" },
      { id: "b", text: "gravity disappearing" },
      { id: "c", text: "friction vanishing forever" },
      { id: "d", text: "a non-force event" }
    ],
    answerId: "a",
    explanation: "Your muscles push the trolley while touching it \u2014 a contact force (muscular force).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-force-b-q02",
    prompt: "Which scene shows a force changing shape?",
    options: [
      { id: "a", text: "R" },
      { id: "b", text: "P" },
      { id: "c", text: "Q" },
      { id: "d", text: "S" }
    ],
    answerId: "a",
    explanation: "R shows clay flattened by a push \u2014 shape change. P starts motion; Q is friction slowing; S is magnetism.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Four mini scenes labelled P Q R S: ball kicked, ball rolling into grass slowing, clay squashed, magnet pulling pin\"><style>.part { fill:#fde68a; stroke:#333; stroke-width:2; }\n.label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n.small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n.arrow { stroke:#333; stroke-width:1.8; fill:none; stroke-linecap:round; }\n.badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n.wood { fill:#c99a6b; stroke:#6b4a2b; stroke-width:1.5; }\n.metal { fill:#94a3b8; stroke:#334155; stroke-width:1.5; }\n.card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n.rope { fill:none; stroke:#78716c; stroke-width:2.5; }\n.fulcrum { fill:#444; }\n.green { fill:#86efac; stroke:#166534; stroke-width:1.5; }\n.dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }</style><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"18\" text-anchor=\"middle\">What is happening?</text>\n  <rect class=\"card\" x=\"15\" y=\"35\" width=\"140\" height=\"75\"/>\n  <circle class=\"part\" cx=\"50\" cy=\"75\" r=\"12\"/>\n  <line class=\"arrow\" x1=\"70\" y1=\"75\" x2=\"120\" y2=\"75\"/>\n  <text class=\"label\" x=\"30\" y=\"55\">P</text>\n  <text class=\"small\" x=\"85\" y=\"100\" text-anchor=\"middle\">kick starts motion</text>\n  <rect class=\"card\" x=\"165\" y=\"35\" width=\"140\" height=\"75\"/>\n  <circle class=\"part\" cx=\"200\" cy=\"75\" r=\"12\"/>\n  <line class=\"dash\" x1=\"220\" y1=\"75\" x2=\"280\" y2=\"75\"/>\n  <text class=\"label\" x=\"180\" y=\"55\">Q</text>\n  <text class=\"small\" x=\"235\" y=\"100\" text-anchor=\"middle\">slows on grass</text>\n  <rect class=\"card\" x=\"15\" y=\"120\" width=\"140\" height=\"75\"/>\n  <ellipse class=\"part\" cx=\"80\" cy=\"160\" rx=\"30\" ry=\"14\"/>\n  <text class=\"label\" x=\"30\" y=\"140\">R</text>\n  <text class=\"small\" x=\"80\" y=\"185\" text-anchor=\"middle\">clay flattened</text>\n  <rect class=\"card\" x=\"165\" y=\"120\" width=\"140\" height=\"75\"/>\n  <rect class=\"metal\" x=\"200\" y=\"145\" width=\"30\" height=\"14\"/>\n  <line class=\"arrow\" x1=\"250\" y1=\"152\" x2=\"235\" y2=\"152\"/>\n  <circle cx=\"260\" cy=\"152\" r=\"6\" fill=\"#aaa\" stroke=\"#333\"/>\n  <text class=\"label\" x=\"180\" y=\"140\">S</text>\n  <text class=\"small\" x=\"235\" y=\"185\" text-anchor=\"middle\">magnet pulls pin</text>\n</svg>", "alt": "Four mini scenes labelled P Q R S: ball kicked, ball rolling into grass slowing, clay squashed, magnet pulling pin"}
  },
  {
    id: "g5-sci-force-b-q03",
    prompt: "A magnet pulling an iron pin from a short distance is \u2014",
    options: [
      { id: "a", text: "a non-contact force" },
      { id: "b", text: "friction only" },
      { id: "c", text: "a type of sound" },
      { id: "d", text: "only possible underwater" }
    ],
    answerId: "a",
    explanation: "Magnetic force can act without touching. Friction needs surfaces in contact.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-force-b-q04",
    prompt: "The fixed point about which a lever turns is the \u2014",
    options: [
      { id: "a", text: "fulcrum" },
      { id: "b", text: "load only" },
      { id: "c", text: "effort only" },
      { id: "d", text: "wedge tip" }
    ],
    answerId: "a",
    explanation: "Fulcrum means the support or pivot. Load is what you move; effort is what you apply.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-force-b-q05",
    prompt: "Pulling down on a fixed-pulley rope to raise a flag is useful because \u2014",
    options: [
      { id: "a", text: "you can apply effort in a convenient direction" },
      { id: "b", text: "the flag loses all weight" },
      { id: "c", text: "friction becomes infinite" },
      { id: "d", text: "gravity reverses" }
    ],
    answerId: "a",
    explanation: "Fixed pulleys mainly redirect force so you can pull in a comfortable direction.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A single fixed pulley on a beam with rope over wheel; load hanging on one side, hand pulling other side\"><style>.part { fill:#fde68a; stroke:#333; stroke-width:2; }\n.label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n.small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n.arrow { stroke:#333; stroke-width:1.8; fill:none; stroke-linecap:round; }\n.badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n.wood { fill:#c99a6b; stroke:#6b4a2b; stroke-width:1.5; }\n.metal { fill:#94a3b8; stroke:#334155; stroke-width:1.5; }\n.card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n.rope { fill:none; stroke:#78716c; stroke-width:2.5; }\n.fulcrum { fill:#444; }\n.green { fill:#86efac; stroke:#166534; stroke-width:1.5; }\n.dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }</style><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"20\" text-anchor=\"middle\">Fixed pulley</text>\n  <rect class=\"wood\" x=\"60\" y=\"30\" width=\"200\" height=\"12\"/>\n  <circle class=\"metal\" cx=\"160\" cy=\"70\" r=\"22\"/>\n  <circle cx=\"160\" cy=\"70\" r=\"6\" fill=\"#444\"/>\n  <path class=\"rope\" d=\"M160,48 Q160,40 160,30\"/>\n  <path class=\"rope\" d=\"M138,70 L138,160\"/>\n  <path class=\"rope\" d=\"M182,70 L182,140\"/>\n  <rect class=\"part\" x=\"120\" y=\"160\" width=\"36\" height=\"28\"/>\n  <text class=\"small\" x=\"138\" y=\"205\" text-anchor=\"middle\">load</text>\n  <line class=\"arrow\" x1=\"182\" y1=\"150\" x2=\"182\" y2=\"175\"/>\n  <text class=\"small\" x=\"210\" y=\"180\">pull</text>\n</svg>", "alt": "A single fixed pulley on a beam with rope over wheel; load hanging on one side, hand pulling other side"}
  },
  {
    id: "g5-sci-force-b-q06",
    prompt: "The same push sends an identical wooden block along four different surfaces. The arrows show how far it slid on each. Which surface is most likely rough sandpaper?",
    options: [
      { id: "a", text: "Surface P" },
      { id: "b", text: "Surface Q" },
      { id: "c", text: "Surface R" },
      { id: "d", text: "Surface S" }
    ],
    answerId: "a",
    explanation: "The block stopped soonest on P, so P gave the most friction, which fits rough sandpaper gripping the block. Surface Q, where the block slid farthest, has the least friction, more like smooth ice.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Four strips labelled P, Q, R and S with a wooden block at the left end of each. Arrows show it slid about 20 cm on P, 95 cm on Q, 70 cm on R and 45 cm on S.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><text x=\"165\" y=\"26\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">same push each time</text><rect x=\"40\" y=\"40\" width=\"250\" height=\"18\" fill=\"#f3f4f6\" stroke=\"#9ca3af\" stroke-width=\"1\"/><text x=\"26\" y=\"54\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">P</text><rect x=\"42\" y=\"42\" width=\"16\" height=\"14\" fill=\"#c99a6b\" stroke=\"#6b4a2b\" stroke-width=\"1\"/><line x1=\"60\" y1=\"49\" x2=\"89.0\" y2=\"49.0\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"96,49 89,52.9 89,45.1\" fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1\" stroke-linejoin=\"round\"/><rect x=\"40\" y=\"84\" width=\"250\" height=\"18\" fill=\"#f3f4f6\" stroke=\"#9ca3af\" stroke-width=\"1\"/><text x=\"26\" y=\"98\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">Q</text><rect x=\"42\" y=\"86\" width=\"16\" height=\"14\" fill=\"#c99a6b\" stroke=\"#6b4a2b\" stroke-width=\"1\"/><line x1=\"60\" y1=\"93\" x2=\"224.0\" y2=\"93.0\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"231,93 224,96.8 224,89.2\" fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1\" stroke-linejoin=\"round\"/><rect x=\"40\" y=\"128\" width=\"250\" height=\"18\" fill=\"#f3f4f6\" stroke=\"#9ca3af\" stroke-width=\"1\"/><text x=\"26\" y=\"142\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">R</text><rect x=\"42\" y=\"130\" width=\"16\" height=\"14\" fill=\"#c99a6b\" stroke=\"#6b4a2b\" stroke-width=\"1\"/><line x1=\"60\" y1=\"137\" x2=\"179.0\" y2=\"137.0\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"186,137 179,140.8 179,133.2\" fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1\" stroke-linejoin=\"round\"/><rect x=\"40\" y=\"172\" width=\"250\" height=\"18\" fill=\"#f3f4f6\" stroke=\"#9ca3af\" stroke-width=\"1\"/><text x=\"26\" y=\"186\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">S</text><rect x=\"42\" y=\"174\" width=\"16\" height=\"14\" fill=\"#c99a6b\" stroke=\"#6b4a2b\" stroke-width=\"1\"/><line x1=\"60\" y1=\"181\" x2=\"134.0\" y2=\"181.0\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-linecap=\"round\"/><polygon points=\"141,181 134,184.8 134,177.2\" fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1\" stroke-linejoin=\"round\"/><text x=\"102\" y=\"53\" font-size=\"12\" text-anchor=\"start\" font-weight=\"600\" fill=\"#1f2937\">20 cm</text><text x=\"237\" y=\"97\" font-size=\"12\" text-anchor=\"start\" font-weight=\"600\" fill=\"#1f2937\">95 cm</text><text x=\"192\" y=\"141\" font-size=\"12\" text-anchor=\"start\" font-weight=\"600\" fill=\"#1f2937\">70 cm</text><text x=\"147\" y=\"185\" font-size=\"12\" text-anchor=\"start\" font-weight=\"600\" fill=\"#1f2937\">45 cm</text></svg>", "alt": "Four strips labelled P, Q, R and S with a wooden block at the left end of each. Arrows show it slid about 20 cm on P, 95 cm on Q, 70 cm on R and 45 cm on S."}
  },
  {
    id: "g5-sci-force-b-q07",
    prompt: "An axe head is a wedge. Wedges help us \u2014",
    options: [
      { id: "a", text: "store electricity" },
      { id: "b", text: "split or cut materials by forcing them apart" },
      { id: "c", text: "measure temperature" },
      { id: "d", text: "make magnets" }
    ],
    answerId: "b",
    explanation: "The thin edge enters a crack and the thicker part pushes sides apart \u2014 splitting or cutting.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"An axe head wedge splitting a log, labelled W on the triangular blade\"><style>.part { fill:#fde68a; stroke:#333; stroke-width:2; }\n.label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n.small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n.arrow { stroke:#333; stroke-width:1.8; fill:none; stroke-linecap:round; }\n.badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n.wood { fill:#c99a6b; stroke:#6b4a2b; stroke-width:1.5; }\n.metal { fill:#94a3b8; stroke:#334155; stroke-width:1.5; }\n.card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n.rope { fill:none; stroke:#78716c; stroke-width:2.5; }\n.fulcrum { fill:#444; }\n.green { fill:#86efac; stroke:#166534; stroke-width:1.5; }\n.dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }</style><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"22\" text-anchor=\"middle\">Splitting a log</text>\n  <rect class=\"wood\" x=\"60\" y=\"80\" width=\"200\" height=\"80\"/>\n  <line class=\"dash\" x1=\"160\" y1=\"80\" x2=\"160\" y2=\"160\"/>\n  <polygon class=\"metal\" points=\"160,70 130,130 190,130\"/>\n  <circle class=\"badge\" cx=\"160\" cy=\"50\" r=\"10\"/><text class=\"label\" x=\"160\" y=\"55\" text-anchor=\"middle\">W</text>\n  <text class=\"small\" x=\"160\" y=\"200\" text-anchor=\"middle\">W = wedge-shaped blade</text>\n</svg>", "alt": "An axe head wedge splitting a log, labelled W on the triangular blade"}
  },
  {
    id: "g5-sci-force-b-q08",
    prompt: "Compared with lifting a box straight up (Q), pushing it along ramp P usually means \u2014",
    options: [
      { id: "a", text: "harder force, shorter path only" },
      { id: "b", text: "easier force along a longer path" },
      { id: "c", text: "the box becomes weightless" },
      { id: "d", text: "no simple machine is used" }
    ],
    answerId: "b",
    explanation: "Ramps trade a longer distance for a smaller needed push.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A box being pushed up a long gentle ramp versus a steep short cliff path labelled P and Q\"><style>.part { fill:#fde68a; stroke:#333; stroke-width:2; }\n.label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n.small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n.arrow { stroke:#333; stroke-width:1.8; fill:none; stroke-linecap:round; }\n.badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n.wood { fill:#c99a6b; stroke:#6b4a2b; stroke-width:1.5; }\n.metal { fill:#94a3b8; stroke:#334155; stroke-width:1.5; }\n.card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n.rope { fill:none; stroke:#78716c; stroke-width:2.5; }\n.fulcrum { fill:#444; }\n.green { fill:#86efac; stroke:#166534; stroke-width:1.5; }\n.dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }</style><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"20\" text-anchor=\"middle\">Two ways to a platform</text>\n  <rect class=\"wood\" x=\"20\" y=\"160\" width=\"80\" height=\"12\"/>\n  <rect class=\"wood\" x=\"220\" y=\"50\" width=\"80\" height=\"12\"/>\n  <line class=\"arrow\" x1=\"100\" y1=\"160\" x2=\"220\" y2=\"62\"/>\n  <text class=\"label\" x=\"150\" y=\"140\">P</text>\n  <line class=\"dash\" x1=\"60\" y1=\"160\" x2=\"60\" y2=\"62\"/>\n  <line class=\"dash\" x1=\"60\" y1=\"62\" x2=\"220\" y2=\"62\"/>\n  <text class=\"label\" x=\"40\" y=\"110\">Q</text>\n  <rect class=\"part\" x=\"130\" y=\"100\" width=\"28\" height=\"22\"/>\n  <text class=\"small\" x=\"160\" y=\"200\" text-anchor=\"middle\">P ramp \u00b7 Q straight up</text>\n</svg>", "alt": "A box being pushed up a long gentle ramp versus a steep short cliff path labelled P and Q"}
  },
  {
    id: "g5-sci-force-b-q09",
    prompt: "Which pair is a wheel-and-axle system?",
    options: [
      { id: "a", text: "See-saw plank and pivot only" },
      { id: "b", text: "Bicycle wheel turning with its axle" },
      { id: "c", text: "Filter paper and funnel" },
      { id: "d", text: "Salt dissolving in water" }
    ],
    answerId: "b",
    explanation: "The wheel turns with a central axle. That rolling setup is a wheel and axle.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-force-b-q10",
    prompt: "Friction can be helpful when \u2014",
    options: [
      { id: "a", text: "you want a greased axle to seize" },
      { id: "b", text: "you need to walk without slipping" },
      { id: "c", text: "you want a slide to never stop a child" },
      { id: "d", text: "you oil a lock to jam it" }
    ],
    answerId: "b",
    explanation: "Friction gives grip for walking and holding objects. We reduce it when we want smooth spinning.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-force-b-q11",
    prompt: "On the see-saw, E stands for \u2014",
    options: [
      { id: "a", text: "the Earth only" },
      { id: "b", text: "the effort (the push or pull you apply)" },
      { id: "c", text: "the electric current" },
      { id: "d", text: "the empty space" }
    ],
    answerId: "b",
    explanation: "Effort is the force applied to work the lever. F is fulcrum; the other end holds the load.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A see-saw lever: load on left, fulcrum triangle in middle marked F, effort on right marked E\"><style>.part { fill:#fde68a; stroke:#333; stroke-width:2; }\n.label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n.small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n.arrow { stroke:#333; stroke-width:1.8; fill:none; stroke-linecap:round; }\n.badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n.wood { fill:#c99a6b; stroke:#6b4a2b; stroke-width:1.5; }\n.metal { fill:#94a3b8; stroke:#334155; stroke-width:1.5; }\n.card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n.rope { fill:none; stroke:#78716c; stroke-width:2.5; }\n.fulcrum { fill:#444; }\n.green { fill:#86efac; stroke:#166534; stroke-width:1.5; }\n.dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }</style><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"22\" text-anchor=\"middle\">See-saw (lever)</text>\n  <rect class=\"wood\" x=\"40\" y=\"100\" width=\"240\" height=\"12\"/>\n  <polygon class=\"fulcrum\" points=\"160,112 145,160 175,160\"/>\n  <circle class=\"badge\" cx=\"160\" cy=\"175\" r=\"10\"/><text class=\"label\" x=\"160\" y=\"180\" text-anchor=\"middle\">F</text>\n  <rect class=\"part\" x=\"50\" y=\"70\" width=\"36\" height=\"28\"/>\n  <text class=\"small\" x=\"68\" y=\"90\" text-anchor=\"middle\">load</text>\n  <line class=\"arrow\" x1=\"250\" y1=\"70\" x2=\"250\" y2=\"95\"/>\n  <circle class=\"badge\" cx=\"250\" cy=\"55\" r=\"10\"/><text class=\"label\" x=\"250\" y=\"60\" text-anchor=\"middle\">E</text>\n  <text class=\"small\" x=\"250\" y=\"85\" text-anchor=\"middle\">effort</text>\n  <text class=\"small\" x=\"160\" y=\"210\" text-anchor=\"middle\">F = fulcrum</text>\n</svg>", "alt": "A see-saw lever: load on left, fulcrum triangle in middle marked F, effort on right marked E"}
  },
  {
    id: "g5-sci-force-b-q12",
    prompt: "A force can NOT \u2014",
    options: [
      { id: "a", text: "start motion" },
      { id: "b", text: "change an object's mass by itself in these examples" },
      { id: "c", text: "change direction" },
      { id: "d", text: "change shape" }
    ],
    answerId: "b",
    explanation: "Everyday pushes and pulls change motion or shape. They do not create or destroy the object's mass.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-force-b-q13",
    prompt: "Why do heavy suitcases often have wheels?",
    options: [
      { id: "a", text: "Wheels increase the suitcase's weight" },
      { id: "b", text: "Wheels remove gravity" },
      { id: "c", text: "Rolling needs less force than dragging" },
      { id: "d", text: "Wheels are wedges" }
    ],
    answerId: "c",
    explanation: "Rolling on wheels reduces the effect of friction compared with sliding the whole case on the ground.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A cart with two wheels and axle carrying a box, next to a box being dragged without wheels\"><style>.part { fill:#fde68a; stroke:#333; stroke-width:2; }\n.label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n.small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n.arrow { stroke:#333; stroke-width:1.8; fill:none; stroke-linecap:round; }\n.badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n.wood { fill:#c99a6b; stroke:#6b4a2b; stroke-width:1.5; }\n.metal { fill:#94a3b8; stroke:#334155; stroke-width:1.5; }\n.card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n.rope { fill:none; stroke:#78716c; stroke-width:2.5; }\n.fulcrum { fill:#444; }\n.green { fill:#86efac; stroke:#166534; stroke-width:1.5; }\n.dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }</style><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"22\" text-anchor=\"middle\">Moving a heavy box</text>\n  <rect class=\"wood\" x=\"40\" y=\"100\" width=\"90\" height=\"40\"/>\n  <circle class=\"metal\" cx=\"60\" cy=\"150\" r=\"14\"/>\n  <circle class=\"metal\" cx=\"110\" cy=\"150\" r=\"14\"/>\n  <line class=\"arrow\" x1=\"140\" y1=\"120\" x2=\"170\" y2=\"120\"/>\n  <text class=\"small\" x=\"90\" y=\"90\" text-anchor=\"middle\">with wheels</text>\n  <rect class=\"part\" x=\"200\" y=\"120\" width=\"70\" height=\"40\"/>\n  <line class=\"dash\" x1=\"200\" y1=\"165\" x2=\"270\" y2=\"165\"/>\n  <text class=\"small\" x=\"235\" y=\"110\" text-anchor=\"middle\">dragging</text>\n  <text class=\"small\" x=\"160\" y=\"200\" text-anchor=\"middle\">Wheels reduce friction</text>\n</svg>", "alt": "A cart with two wheels and axle carrying a box, next to a box being dragged without wheels"}
  },
  {
    id: "g5-sci-force-b-q14",
    prompt: "Which simple machine is a staircase most like?",
    options: [
      { id: "a", text: "A magnet" },
      { id: "b", text: "A pulley" },
      { id: "c", text: "An inclined plane (made of steps)" },
      { id: "d", text: "A see-saw fulcrum alone" }
    ],
    answerId: "c",
    explanation: "Stairs raise you gradually, like a ramp divided into steps \u2014 an inclined plane idea.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-force-b-q15",
    prompt: "A ball rolling on grass slows down mainly because of \u2014",
    options: [
      { id: "a", text: "magnetism from the Moon" },
      { id: "b", text: "extra gravity only at night" },
      { id: "c", text: "friction" },
      { id: "d", text: "the ball losing its mass" }
    ],
    answerId: "c",
    explanation: "Grass rubs against the ball and opposes motion \u2014 friction.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-force-b-q16",
    prompt: "Which tool uses a screw?",
    options: [
      { id: "a", text: "A plain flat ruler" },
      { id: "b", text: "A see-saw plank" },
      { id: "c", text: "A jar lid with threads" },
      { id: "d", text: "A rubber balloon alone" }
    ],
    answerId: "c",
    explanation: "Threaded lids and screws wind an inclined plane around a cylinder.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-force-b-q17",
    prompt: "Two teams pull a rope equally hard in opposite directions. The rope \u2014",
    options: [
      { id: "a", text: "must fly upward" },
      { id: "b", text: "must double its mass" },
      { id: "c", text: "may stay still if forces balance" },
      { id: "d", text: "creates a magnet" }
    ],
    answerId: "c",
    explanation: "Equal and opposite forces can cancel, so the rope may not move (net force zero).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-force-b-q18",
    prompt: "A crowbar lifting a stone is mainly a \u2014",
    options: [
      { id: "a", text: "pulley" },
      { id: "b", text: "wheel without axle" },
      { id: "c", text: "lever" },
      { id: "d", text: "transparent material test" }
    ],
    answerId: "c",
    explanation: "The bar turns about a fulcrum to move the stone \u2014 a lever.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-force-b-q19",
    prompt: "Which action reduces friction on purpose?",
    options: [
      { id: "a", text: "Spreading sand on icy steps" },
      { id: "b", text: "Using rubber mats in a bath" },
      { id: "c", text: "Wearing grippy sports shoes" },
      { id: "d", text: "Putting oil on a stiff hinge" }
    ],
    answerId: "d",
    explanation: "Oil lubricates the hinge so parts slide more easily. The other choices increase grip.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-force-b-q20",
    prompt: "Simple machines help us mainly by \u2014",
    options: [
      { id: "a", text: "destroying energy completely" },
      { id: "b", text: "removing the need for any force ever" },
      { id: "c", text: "increasing an object's mass" },
      { id: "d", text: "making tasks easier with a helpful force or direction" }
    ],
    answerId: "d",
    explanation: "Machines do not create energy from nothing; they help us apply forces more usefully.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-force-b-q21",
    prompt: "Which force pulls you toward the ground when you jump?",
    options: [
      { id: "a", text: "Friction of your socks only" },
      { id: "b", text: "Magnetism of your shoes only" },
      { id: "c", text: "Air colour" },
      { id: "d", text: "Gravity" }
    ],
    answerId: "d",
    explanation: "Gravity pulls objects toward Earth, so jumpers come back down.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-force-b-q22",
    prompt: "In the pulley picture, the wheel at the top is there to \u2014",
    options: [
      { id: "a", text: "heat the rope" },
      { id: "b", text: "dissolve the load" },
      { id: "c", text: "measure time" },
      { id: "d", text: "guide the rope and change pull direction" }
    ],
    answerId: "d",
    explanation: "The grooved wheel lets the rope run smoothly while you pull one side to lift the other.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A single fixed pulley on a beam with rope over wheel; load hanging on one side, hand pulling other side\"><style>.part { fill:#fde68a; stroke:#333; stroke-width:2; }\n.label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n.small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n.arrow { stroke:#333; stroke-width:1.8; fill:none; stroke-linecap:round; }\n.badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n.wood { fill:#c99a6b; stroke:#6b4a2b; stroke-width:1.5; }\n.metal { fill:#94a3b8; stroke:#334155; stroke-width:1.5; }\n.card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n.rope { fill:none; stroke:#78716c; stroke-width:2.5; }\n.fulcrum { fill:#444; }\n.green { fill:#86efac; stroke:#166534; stroke-width:1.5; }\n.dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }</style><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"160\" y=\"20\" text-anchor=\"middle\">Fixed pulley</text>\n  <rect class=\"wood\" x=\"60\" y=\"30\" width=\"200\" height=\"12\"/>\n  <circle class=\"metal\" cx=\"160\" cy=\"70\" r=\"22\"/>\n  <circle cx=\"160\" cy=\"70\" r=\"6\" fill=\"#444\"/>\n  <path class=\"rope\" d=\"M160,48 Q160,40 160,30\"/>\n  <path class=\"rope\" d=\"M138,70 L138,160\"/>\n  <path class=\"rope\" d=\"M182,70 L182,140\"/>\n  <rect class=\"part\" x=\"120\" y=\"160\" width=\"36\" height=\"28\"/>\n  <text class=\"small\" x=\"138\" y=\"205\" text-anchor=\"middle\">load</text>\n  <line class=\"arrow\" x1=\"182\" y1=\"150\" x2=\"182\" y2=\"175\"/>\n  <text class=\"small\" x=\"210\" y=\"180\">pull</text>\n</svg>", "alt": "A single fixed pulley on a beam with rope over wheel; load hanging on one side, hand pulling other side"}
  },
  {
    id: "g5-sci-force-b-q23",
    prompt: "A bottle opener lifting a metal cap is acting chiefly as a \u2014",
    options: [
      { id: "a", text: "magnet separator" },
      { id: "b", text: "measuring cylinder" },
      { id: "c", text: "water filter" },
      { id: "d", text: "lever" }
    ],
    answerId: "d",
    explanation: "You push down on one end; the opener pivots and lifts the cap \u2014 lever action.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-force-b-q24",
    prompt: "Which statement about friction is correct?",
    options: [
      { id: "a", text: "Friction never happens on Earth" },
      { id: "b", text: "Friction always pulls upward against gravity only" },
      { id: "c", text: "Friction attracts iron like a magnet" },
      { id: "d", text: "Friction can produce heat when surfaces rub" }
    ],
    answerId: "d",
    explanation: "Rubbing surfaces oppose motion and can warm up \u2014 both are friction effects.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\u2699\ufe0f",
    title: "Force and machines",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "magnet",
    speak: "Forces push or pull. Simple machines like levers, pulleys and ramps help us do jobs with a smarter use of force.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "magnet",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Force", reveal: "Push or pull \u2014 changes motion or shape", emoji: "\ud83d\udc49" },
      { label: "Friction", reveal: "Opposes sliding; gives grip", emoji: "\ud83d\uded1" },
      { label: "Levers & pulleys", reveal: "Fulcrum, load, effort; change direction", emoji: "\u2696\ufe0f" },
      { label: "Ramps & wheels", reveal: "Smaller force, longer path; roll not drag", emoji: "🚚" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "A see-saw is mainly which simple machine?",
    options: [
        { id: "a", text: "Pulley" },
        { id: "b", text: "Lever" },
        { id: "c", text: "Wedge only" },
        { id: "d", text: "Screw only" }
    ],
    answerId: "b",
    why: "A see-saw is a lever that turns about a fulcrum.",
    visual: "magnet",
    speak: "A see-saw is mainly which simple machine?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Force = push or pull", "Friction can help or hinder", "Name the six simple machines", "Sets ready \u2014 24 MCQs each"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g5ScienceForce: ChapterDef = {
  id: "force-machines",
  title: "Force and Simple Machines",
  emoji: "\u2699\ufe0f",
  blurb: "Pushes, friction and simple machines",
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

export const g5ScienceForceQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
