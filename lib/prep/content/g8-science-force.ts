import type { ChapterDef, PrepQuestion } from "../types";

/** Force and Pressure - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g8-sci-force-a-q01",
    prompt: "A force can change all of these EXCEPT —",
    options: [
      { id: "a", text: "the speed of an object" },
      { id: "b", text: "the direction of motion" },
      { id: "c", text: "the shape of an object" },
      { id: "d", text: "the mass of an object" }
    ],
    answerId: "d",
    explanation: "A force can speed up, slow down or turn a moving object, and can change its shape, like squeezing clay. It cannot change the amount of matter in the object, its mass. Shape is tempting, but pressing a ball of dough shows a force can change shape.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-a-q02",
    prompt: "What is the SI unit of force?",
    options: [
      { id: "a", text: "Pascal" },
      { id: "b", text: "Joule" },
      { id: "c", text: "Newton" },
      { id: "d", text: "Kilogram" }
    ],
    answerId: "c",
    explanation: "Force is measured in newtons (N). The pascal is the unit of pressure, and the kilogram is the unit of mass.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-a-q03",
    prompt: "Which of these is a non-contact force?",
    options: [
      { id: "a", text: "The pull of a magnet on an iron pin held a little distance away" },
      { id: "b", text: "The friction between a shoe and the floor" },
      { id: "c", text: "The muscular force used to lift a bucket" },
      { id: "d", text: "The push of your hand opening a door" }
    ],
    answerId: "a",
    explanation: "A magnet can pull an iron pin without touching it, so magnetic force is a non-contact force. The other three act only when the objects touch.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-a-q04",
    prompt: "Which of these can a force NOT change?",
    options: [
      { id: "a", text: "The speed of a moving object" },
      { id: "b", text: "The direction of a moving object" },
      { id: "c", text: "The shape of an object" },
      { id: "d", text: "The mass of an object" }
    ],
    answerId: "d",
    explanation: "A force can start or stop motion and change speed, direction, or shape. It does not change how much matter, or mass, the object contains.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-a-q05",
    prompt: "Riya and Aman push the same box, as shown. What is the net force on the box?",
    options: [
      { id: "a", text: "10 N to the right" },
      { id: "b", text: "20 N to the right" },
      { id: "c", text: "50 N to the right" },
      { id: "d", text: "600 N to the right" }
    ],
    answerId: "c",
    explanation: "Both forces act to the right, so they add: 30 N + 20 N = 50 N to the right. 10 N would be the answer only if the two pushes acted in opposite directions.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A box on the floor. Two arrows on its left side both point to the right: the upper one, Riya, is 30 N and the lower one, Aman, is 20 N.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><line x1=\"10\" y1=\"170\" x2=\"310\" y2=\"170\" stroke=\"#1f2937\" stroke-width=\"2\" stroke-linecap=\"round\"/><rect x=\"170\" y=\"90\" width=\"90\" height=\"80\" fill=\"#d6a76a\" stroke=\"#78350f\" stroke-width=\"2\"/><line x1=\"170\" y1=\"90\" x2=\"260\" y2=\"170\" stroke=\"#92400e\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><line x1=\"260\" y1=\"90\" x2=\"170\" y2=\"170\" stroke=\"#92400e\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><line x1=\"60\" y1=\"110\" x2=\"158.0\" y2=\"110.0\" stroke=\"#2563eb\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"166,110 158,114.4 158,105.6\" fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1\" stroke-linejoin=\"round\"/><text x=\"90\" y=\"100\" font-size=\"13\" text-anchor=\"start\" font-weight=\"600\" fill=\"#1f2937\">Riya: 30 N</text><line x1=\"80\" y1=\"150\" x2=\"158.0\" y2=\"150.0\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"166,150 158,154.4 158,145.6\" fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1\" stroke-linejoin=\"round\"/><text x=\"90\" y=\"140\" font-size=\"13\" text-anchor=\"start\" font-weight=\"600\" fill=\"#1f2937\">Aman: 20 N</text></svg>", "alt": "A box on the floor. Two arrows on its left side both point to the right: the upper one, Riya, is 30 N and the lower one, Aman, is 20 N."}
  },
  {
    id: "g8-sci-force-a-q06",
    prompt: "In a tug-of-war, both teams pull the rope with exactly equal force in opposite directions. What happens to the rope?",
    options: [
      { id: "a", text: "It stays where it is." },
      { id: "b", text: "It moves toward the left team." },
      { id: "c", text: "It moves toward the right team." },
      { id: "d", text: "It keeps speeding up." }
    ],
    answerId: "a",
    explanation: "Equal and opposite forces cancel, so the net force is zero. A rope at rest stays at rest.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-a-q07",
    prompt: "A ball rolling on a grassy field slowly comes to a stop. Which force mainly stops it?",
    options: [
      { id: "a", text: "Magnetic force" },
      { id: "b", text: "Friction" },
      { id: "c", text: "Electrostatic force" },
      { id: "d", text: "Muscular force" }
    ],
    answerId: "b",
    explanation: "Friction between the ball and the grass opposes the ball's motion and gradually stops it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-a-q08",
    prompt: "School bags P and Q hold the same 5 kg load. Why is bag Q more comfortable to carry?",
    options: [
      { id: "a", text: "Its straps make the bag heavier" },
      { id: "b", text: "Its straps increase the pressure on the shoulders" },
      { id: "c", text: "It looks more attractive" },
      { id: "d", text: "Its straps spread the weight over a larger area and reduce the pressure" }
    ],
    answerId: "d",
    explanation: "Both bags weigh the same, but Q's wide straps touch more of each shoulder, so the same force is spread over a larger area and the pressure is lower. Straps that increased the pressure would make the bag hurt more, not less.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Two school bags, each holding 5 kg. Bag P has very thin straps; bag Q has wide, flat straps.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"40\" y=\"100\" width=\"90\" height=\"95\" rx=\"10\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><rect x=\"60\" y=\"140\" width=\"50\" height=\"30\" rx=\"4\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"1.5\"/><path d=\"M55,102 Q55,40 85,40 Q115,40 115,102\" fill=\"none\" stroke=\"#1e3a8a\" stroke-width=\"5\" stroke-linejoin=\"round\"/><path d=\"M55,102 Q55,40 85,40 Q115,40 115,102\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"3\" stroke-linejoin=\"round\"/><text x=\"85\" y=\"165\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1e3a8a\">5 kg</text><text x=\"85\" y=\"214\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">P</text><rect x=\"190\" y=\"100\" width=\"90\" height=\"95\" rx=\"10\" fill=\"#60a5fa\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><rect x=\"210\" y=\"140\" width=\"50\" height=\"30\" rx=\"4\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"1.5\"/><path d=\"M205,102 Q205,40 235,40 Q265,40 265,102\" fill=\"none\" stroke=\"#1e3a8a\" stroke-width=\"20\" stroke-linejoin=\"round\"/><path d=\"M205,102 Q205,40 235,40 Q265,40 265,102\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"18\" stroke-linejoin=\"round\"/><text x=\"235\" y=\"165\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1e3a8a\">5 kg</text><text x=\"235\" y=\"214\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">Q</text></svg>", "alt": "Two school bags, each holding 5 kg. Bag P has very thin straps; bag Q has wide, flat straps."}
  },
  {
    id: "g8-sci-force-a-q09",
    prompt: "Pressure is defined as \u2014",
    options: [
      { id: "a", text: "force acting per unit area" },
      { id: "b", text: "force multiplied by area" },
      { id: "c", text: "area per unit force" },
      { id: "d", text: "mass per unit volume" }
    ],
    answerId: "a",
    explanation: "Pressure is force divided by the area it acts on. Mass per unit volume is density, which is a different quantity.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-a-q10",
    prompt: "A balloon rubbed on dry hair can pick up tiny bits of paper. Which force is at work?",
    options: [
      { id: "a", text: "Magnetic force" },
      { id: "b", text: "Gravitational force" },
      { id: "c", text: "Friction" },
      { id: "d", text: "Electrostatic force" }
    ],
    answerId: "d",
    explanation: "Rubbing gives the balloon an electric charge. A charged object attracts light objects like paper bits through electrostatic force.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-a-q11",
    prompt: "As you go deeper into a swimming pool, the water pressure \u2014",
    options: [
      { id: "a", text: "decreases" },
      { id: "b", text: "increases" },
      { id: "c", text: "stays the same" },
      { id: "d", text: "becomes zero" }
    ],
    answerId: "b",
    explanation: "Deeper water has more water above it pressing down, so liquid pressure increases with depth.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-a-q12",
    prompt: "When you sip juice through a straw, the juice rises because \u2014",
    options: [
      { id: "a", text: "your mouth pulls the juice up directly with muscular force" },
      { id: "b", text: "gravity pushes the juice upward" },
      { id: "c", text: "sucking lowers the air pressure in the straw, and atmospheric pressure on the juice pushes it up" },
      { id: "d", text: "juice is lighter than air" }
    ],
    answerId: "c",
    explanation: "Sucking removes some air from the straw. The greater air pressure outside, acting on the juice surface, then pushes the juice up the straw.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-a-q13",
    prompt: "A force of 200 N acts evenly on an area of 4 m\u00b2. What is the pressure?",
    options: [
      { id: "a", text: "800 Pa" },
      { id: "b", text: "204 Pa" },
      { id: "c", text: "196 Pa" },
      { id: "d", text: "50 Pa" }
    ],
    answerId: "d",
    explanation: "Pressure = force \u00f7 area = 200 N \u00f7 4 m\u00b2 = 50 N/m\u00b2 = 50 Pa.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-a-q14",
    prompt: "Three small holes are made in a tall bottle full of water, as shown. From which hole does water come out with the greatest force?",
    options: [
      { id: "a", text: "From hole 3" },
      { id: "b", text: "From hole 2" },
      { id: "c", text: "From hole 1" },
      { id: "d", text: "From all three holes equally" }
    ],
    answerId: "a",
    explanation: "Hole 3 is lowest, with the deepest water above it, so the pressure there is greatest and its jet is strongest. Hole 1 near the top has the least water above it, so its jet is the weakest.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A tall bottle filled with water to near the top, with three small holes in one side: hole 1 near the top, hole 2 in the middle and hole 3 near the bottom. No water jets are shown.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><path d=\"M120,200 L120,60 Q120,46 134,40 L134,20 L166,20 L166,40 Q180,46 180,60 L180,200 Z\" fill=\"#ffffff\" stroke=\"#1f2937\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/><rect x=\"122\" y=\"54\" width=\"56\" height=\"144\" fill=\"#bfdbfe\" stroke=\"none\" stroke-width=\"1.5\"/><line x1=\"122\" y1=\"54\" x2=\"178\" y2=\"54\" stroke=\"#2563eb\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><line x1=\"120\" y1=\"200\" x2=\"180\" y2=\"200\" stroke=\"#1f2937\" stroke-width=\"2.2\" stroke-linecap=\"round\"/><circle cx=\"180\" cy=\"80\" r=\"4\" fill=\"#ffffff\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><circle cx=\"180\" cy=\"125\" r=\"4\" fill=\"#ffffff\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><circle cx=\"180\" cy=\"172\" r=\"4\" fill=\"#ffffff\" stroke=\"#1f2937\" stroke-width=\"1.5\"/><line x1=\"184\" y1=\"80\" x2=\"230\" y2=\"80\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><circle cx=\"184\" cy=\"80\" r=\"2\" fill=\"#475569\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"234\" y=\"85\" font-size=\"13\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">hole 1</text><line x1=\"184\" y1=\"125\" x2=\"230\" y2=\"125\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><circle cx=\"184\" cy=\"125\" r=\"2\" fill=\"#475569\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"234\" y=\"130\" font-size=\"13\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">hole 2</text><line x1=\"184\" y1=\"172\" x2=\"230\" y2=\"172\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><circle cx=\"184\" cy=\"172\" r=\"2\" fill=\"#475569\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"234\" y=\"177\" font-size=\"13\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">hole 3</text><line x1=\"60\" y1=\"212\" x2=\"260\" y2=\"212\" stroke=\"#94a3b8\" stroke-width=\"1\" stroke-linecap=\"round\"/></svg>", "alt": "A tall bottle filled with water to near the top, with three small holes in one side: hole 1 near the top, hole 2 in the middle and hole 3 near the bottom. No water jets are shown."}
  },
  {
    id: "g8-sci-force-a-q15",
    prompt: "The picture shows a cross-section of a dam holding back a lake. Why is the wall built in this shape?",
    options: [
      { id: "a", text: "So that the dam looks stronger" },
      { id: "b", text: "Because water is colder at the bottom" },
      { id: "c", text: "Because water pressure is greatest at the bottom" },
      { id: "d", text: "To stop fish from swimming through" }
    ],
    answerId: "c",
    explanation: "Water pressure increases with depth, so the bottom of the wall takes the biggest push from the lake; the wall is made thickest there. Colder water is not the reason: the push of the water on the wall depends on its depth.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A cross-section of a concrete dam: a wall that is narrow at the top and very wide at the bottom, with a deep lake on the left side and dry ground on the right.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"10\" y=\"60\" width=\"150\" height=\"140\" fill=\"#bfdbfe\" stroke=\"none\" stroke-width=\"1.5\"/><line x1=\"10\" y1=\"60\" x2=\"150\" y2=\"60\" stroke=\"#2563eb\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><path d=\"M30,60 q6,-4 12,0\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><path d=\"M70,60 q6,-4 12,0\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><path d=\"M110,60 q6,-4 12,0\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"150,40 180,40 280,200 150,200\" fill=\"#d1d5db\" stroke=\"#374151\" stroke-width=\"2\" stroke-linejoin=\"round\"/><line x1=\"0\" y1=\"200\" x2=\"320\" y2=\"200\" stroke=\"#78350f\" stroke-width=\"4\" stroke-linecap=\"round\"/><text x=\"70\" y=\"130\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">lake</text><text x=\"300\" y=\"190\" font-size=\"12\" text-anchor=\"end\" font-weight=\"500\" fill=\"#1f2937\">ground</text></svg>", "alt": "A cross-section of a concrete dam: a wall that is narrow at the top and very wide at the bottom, with a deep lake on the left side and dry ground on the right."}
  },
  {
    id: "g8-sci-force-a-q16",
    prompt: "An iron nail has a sharp pointed tip. The main reason is that \u2014",
    options: [
      { id: "a", text: "the pointed end makes the nail lighter" },
      { id: "b", text: "the small area of the tip produces a large pressure for the same force" },
      { id: "c", text: "the pointed end increases friction with the hammer" },
      { id: "d", text: "the pointed tip attracts the wood" }
    ],
    answerId: "b",
    explanation: "For the same hammer force, a tiny tip area gives a very high pressure, which lets the nail push into wood easily.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-a-q17",
    prompt: "A brick weighing 30 N has the measurements shown. On which labelled face should it rest to press on the ground with the GREATEST pressure?",
    options: [
      { id: "a", text: "Face P" },
      { id: "b", text: "Face Q" },
      { id: "c", text: "Face R" },
      { id: "d", text: "The pressure is the same on every face" }
    ],
    answerId: "a",
    explanation: "Pressure = force \u00f7 area, and the weight is 30 N whichever way the brick rests, so the smallest face gives the most pressure. Face P is 0.1 m \u00d7 0.05 m = 0.005 m\u00b2, giving 30 \u00f7 0.005 = 6000 Pa. Face Q is the largest face, so it gives the least pressure.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A brick drawn in three dimensions, 0.3 m long, 0.1 m deep and 0.05 m high. Q marks the large top face, R the long front face, and P the small end face.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><polygon points=\"70,120 250,120 250,150 70,150\" fill=\"#f97316\" stroke=\"#7c2d12\" stroke-width=\"2\" stroke-linejoin=\"round\"/><polygon points=\"70,120 120,80 300,80 250,120\" fill=\"#fdba74\" stroke=\"#7c2d12\" stroke-width=\"2\" stroke-linejoin=\"round\"/><polygon points=\"250,120 300,80 300,110 250,150\" fill=\"#ea580c\" stroke=\"#7c2d12\" stroke-width=\"2\" stroke-linejoin=\"round\"/><text x=\"185\" y=\"104\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">Q</text><text x=\"160\" y=\"141\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#ffffff\">R</text><text x=\"275\" y=\"122\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#ffffff\">P</text><line x1=\"160.0\" y1=\"165.0\" x2=\"77.0\" y2=\"165.0\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"70,165 77,161.2 77,168.8\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"160.0\" y1=\"165.0\" x2=\"243.0\" y2=\"165.0\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"250,165 243,168.8 243,161.2\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><text x=\"160\" y=\"182\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">0.3 m</text><line x1=\"282.0\" y1=\"139.0\" x2=\"263.48832077123234\" y2=\"153.65507938944108\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"258,158 261.1,150.6 265.9,156.7\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"282.0\" y1=\"139.0\" x2=\"300.51167922876766\" y2=\"124.34492061055893\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"306,120 302.9,127.4 298.1,121.3\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><text x=\"268\" y=\"176\" font-size=\"13\" text-anchor=\"start\" font-weight=\"600\" fill=\"#1f2937\">0.1 m</text><line x1=\"58.0\" y1=\"135.0\" x2=\"58.0\" y2=\"127.0\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"58,120 61.9,127 54.1,127\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"58.0\" y1=\"135.0\" x2=\"58.0\" y2=\"143.0\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"58,150 54.1,143 61.9,143\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><text x=\"52\" y=\"140\" font-size=\"12\" text-anchor=\"end\" font-weight=\"600\" fill=\"#1f2937\">0.05 m</text><text x=\"160\" y=\"40\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">weight 30 N</text></svg>", "alt": "A brick drawn in three dimensions, 0.3 m long, 0.1 m deep and 0.05 m high. Q marks the large top face, R the long front face, and P the small end face."}
  },
  {
    id: "g8-sci-force-a-q18",
    prompt: "Which pair contains ONLY contact forces?",
    options: [
      { id: "a", text: "Gravity and friction" },
      { id: "b", text: "Magnetic force and muscular force" },
      { id: "c", text: "Friction and muscular force" },
      { id: "d", text: "Electrostatic force and gravity" }
    ],
    answerId: "c",
    explanation: "Friction and muscular force both need the objects to touch. Gravity, magnetic force, and electrostatic force can act from a distance.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-a-q19",
    prompt: "Containers P, Q and R have the same base area and are filled with water as shown. How does the water pressure at the bottom compare?",
    options: [
      { id: "a", text: "It is greatest at the bottom of P" },
      { id: "b", text: "It is greatest at the bottom of Q" },
      { id: "c", text: "It is greatest at the bottom of R" },
      { id: "d", text: "It is the same in all three containers" }
    ],
    answerId: "d",
    explanation: "The dashed line shows the water is equally deep in all three, and liquid pressure depends on depth, not on the container's shape or how much water it holds. P holds the most water, but its extra water presses on the sloping sides, not on the base, so its bottom pressure is not greater.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Three containers on a bench with equal bases: P widens towards the top, Q has straight sides, and R narrows towards the top. A dashed line across all three marks the water surface in each.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><polygon points=\"40,190 90,190 109.643,80 20.3571,80\" fill=\"#bfdbfe\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polyline points=\"15,50 40,190 90,190 115,50\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><polygon points=\"140,190 190,190 190,80 140,80\" fill=\"#bfdbfe\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polyline points=\"140,50 140,190 190,190 190,50\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><polygon points=\"240,190 290,190 275.857,80 254.143,80\" fill=\"#bfdbfe\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><polyline points=\"258,50 240,190 290,190 272,50\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><line x1=\"10\" y1=\"80\" x2=\"310\" y2=\"80\" stroke=\"#2563eb\" stroke-width=\"1.5\" stroke-dasharray=\"6 4\" stroke-linecap=\"round\"/><line x1=\"10\" y1=\"190\" x2=\"310\" y2=\"190\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><text x=\"65\" y=\"210\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">P</text><text x=\"165\" y=\"210\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">Q</text><text x=\"265\" y=\"210\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">R</text></svg>", "alt": "Three containers on a bench with equal bases: P widens towards the top, Q has straight sides, and R narrows towards the top. A dashed line across all three marks the water surface in each."}
  },
  {
    id: "g8-sci-force-a-q20",
    prompt: "A rubber sucker pressed onto a smooth tile stays stuck. Why?",
    options: [
      { id: "a", text: "The rubber has glue on it." },
      { id: "b", text: "Pressing pushes air out from under it, and the atmospheric pressure outside holds it against the tile." },
      { id: "c", text: "The tile pulls the sucker with magnetic force." },
      { id: "d", text: "Air trapped inside the sucker pulls the tile." }
    ],
    answerId: "b",
    explanation: "Very little air is left under the cup, so the pressure there is low. The greater air pressure outside presses the sucker onto the tile.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-a-q21",
    prompt: "Compared with sea level, the atmospheric pressure at the top of a high mountain is \u2014",
    options: [
      { id: "a", text: "higher" },
      { id: "b", text: "the same" },
      { id: "c", text: "lower" },
      { id: "d", text: "zero" }
    ],
    answerId: "c",
    explanation: "At a height there is less air above you pressing down, so atmospheric pressure is lower. It is still not zero.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-a-q22",
    prompt: "Atmospheric pressure is about 100,000 Pa. What force does the air exert on a page of area 0.0225 m\u00b2 (15 cm \u00d7 15 cm)?",
    options: [
      { id: "a", text: "225 N" },
      { id: "b", text: "22.5 N" },
      { id: "c", text: "22,500 N" },
      { id: "d", text: "2,250 N" }
    ],
    answerId: "d",
    explanation: "Force = pressure \u00d7 area = 100,000 Pa \u00d7 0.0225 m\u00b2 = 2,250 N. The page is not crushed because air pushes on it equally from both sides.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-a-q23",
    prompt: "In a famous old experiment, two metal hemispheres were joined and the air between them was pumped out. Teams of horses could not pull them apart. Why?",
    options: [
      { id: "a", text: "The atmospheric pressure outside pressed the hemispheres together because there was almost no air inside to push back." },
      { id: "b", text: "The hemispheres were strong magnets." },
      { id: "c", text: "The hemispheres were glued together." },
      { id: "d", text: "Friction from the horses' hooves slowed them down." }
    ],
    answerId: "a",
    explanation: "With the air removed, nothing pushed outward from inside. The large atmospheric pressure acting on the outside held the halves tightly together.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-a-q24",
    prompt: "A girl weighing 500 N stands on both feet, which have a total contact area of 0.05 m\u00b2. She then lifts one foot and stands on the other. What pressure does she now exert on the floor?",
    options: [
      { id: "a", text: "5,000 Pa" },
      { id: "b", text: "20,000 Pa" },
      { id: "c", text: "10,000 Pa" },
      { id: "d", text: "25 Pa" }
    ],
    answerId: "b",
    explanation: "One foot has half the area: 0.05 \u00f7 2 = 0.025 m\u00b2. Pressure = 500 N \u00f7 0.025 m\u00b2 = 20,000 Pa, which is double the 10,000 Pa she exerts on both feet.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g8-sci-force-b-q01",
    prompt: "A footballer kicks a moving ball sideways, and it goes off in a new direction. This shows that a force can \u2014",
    options: [
      { id: "a", text: "change the mass of the ball" },
      { id: "b", text: "change the colour of the ball" },
      { id: "c", text: "change the direction of motion" },
      { id: "d", text: "change only the ball's temperature" }
    ],
    answerId: "c",
    explanation: "The kick changed the direction in which the ball was moving. Changing direction is one of the main effects of a force.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-b-q02",
    prompt: "To describe a force completely, we must state its \u2014",
    options: [
      { id: "a", text: "magnitude and direction" },
      { id: "b", text: "magnitude only" },
      { id: "c", text: "direction only" },
      { id: "d", text: "colour and size" }
    ],
    answerId: "a",
    explanation: "A force has both a size (magnitude) and a direction. A 10 N push to the left has a different effect from a 10 N push to the right.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-b-q03",
    prompt: "Which of these is NOT a contact force?",
    options: [
      { id: "a", text: "Friction" },
      { id: "b", text: "Muscular force" },
      { id: "c", text: "Normal force from a table" },
      { id: "d", text: "Gravitational force" }
    ],
    answerId: "d",
    explanation: "Gravity acts without touching. For example, it pulls a falling mango toward the Earth through the air. The other three need contact.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-b-q04",
    prompt: "Which instrument is used to measure force?",
    options: [
      { id: "a", text: "Thermometer" },
      { id: "b", text: "Spring balance" },
      { id: "c", text: "Barometer" },
      { id: "d", text: "Odometer" }
    ],
    answerId: "b",
    explanation: "A spring balance measures force in newtons. A barometer measures atmospheric pressure, and a thermometer measures temperature.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-b-q05",
    prompt: "When you press a ball of clay between your palms, it becomes flat. This shows that force can \u2014",
    options: [
      { id: "a", text: "change the shape of an object" },
      { id: "b", text: "change the mass of an object" },
      { id: "c", text: "have no effect on an object" },
      { id: "d", text: "turn a solid into a liquid" }
    ],
    answerId: "a",
    explanation: "Pressing the clay changed its shape. The amount of clay, or its mass, stayed the same.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-b-q06",
    prompt: "One pascal is equal to \u2014",
    options: [
      { id: "a", text: "1 N \u00d7 1 m" },
      { id: "b", text: "1 kg per m\u00b2" },
      { id: "c", text: "1 N per cm\u00b2" },
      { id: "d", text: "1 N per m\u00b2" }
    ],
    answerId: "d",
    explanation: "A pressure of one pascal means a force of one newton acting on one square metre.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-b-q07",
    prompt: "A book rests on a table. The table pushes up on the book. What is this upward push called?",
    options: [
      { id: "a", text: "Gravitational force" },
      { id: "b", text: "Magnetic force" },
      { id: "c", text: "Normal force" },
      { id: "d", text: "Frictional force" }
    ],
    answerId: "c",
    explanation: "The normal force is the push of a surface on an object resting on it. It acts at right angles to the surface, here straight up.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-b-q08",
    prompt: "Kabir pushes a cart east with 40 N. His friend pushes the same cart west with 15 N. What is the net force?",
    options: [
      { id: "a", text: "55 N east" },
      { id: "b", text: "25 N east" },
      { id: "c", text: "25 N west" },
      { id: "d", text: "55 N west" }
    ],
    answerId: "b",
    explanation: "Opposite forces subtract: 40 N \u2212 15 N = 25 N. The net force points in the direction of the larger force, which is east.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-b-q09",
    prompt: "Camels can walk easily on soft desert sand because they have \u2014",
    options: [
      { id: "a", text: "long necks" },
      { id: "b", text: "humps that store fat" },
      { id: "c", text: "hard, pointed hooves" },
      { id: "d", text: "broad, flat feet that spread their weight over a large area" }
    ],
    answerId: "d",
    explanation: "Broad feet increase the contact area, which lowers the pressure on the sand, so the camel's feet do not sink in deeply.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-b-q10",
    prompt: "Two plastic straws are rubbed with the same piece of paper. When one is brought near the other hanging straw, the hanging straw moves away. What does this show?",
    options: [
      { id: "a", text: "Magnetic force between the straws" },
      { id: "b", text: "Gravitational force between the straws" },
      { id: "c", text: "Electrostatic force, because similarly charged objects repel" },
      { id: "d", text: "Friction between the straws" }
    ],
    answerId: "c",
    explanation: "Both straws pick up the same kind of charge. Like charges repel, so the hanging straw is pushed away without being touched.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-b-q11",
    prompt: "Two vehicles of the same weight drive onto the same soft mud, as shown. Why does vehicle 2 stay on top of the mud?",
    options: [
      { id: "a", text: "Its tracks spread its weight over a larger area, so the pressure is lower" },
      { id: "b", text: "It moves faster" },
      { id: "c", text: "It presses harder on the ground" },
      { id: "d", text: "It weighs less" }
    ],
    answerId: "a",
    explanation: "Vehicle 2's wide tracks touch a much larger area of mud, so the same weight gives a lower pressure and it does not sink in. It does not press harder: a higher pressure would push it deeper into the mud, as happened to vehicle 1.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Two vehicles of equal weight on soft mud. Vehicle 1 has two narrow wheels that have sunk deep into the mud. Vehicle 2 has long wide tracks and sits on the surface.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"0\" y=\"140\" width=\"320\" height=\"80\" fill=\"#a16207\" stroke=\"none\" stroke-width=\"1.5\" opacity=\"0.55\"/><line x1=\"0\" y1=\"140\" x2=\"320\" y2=\"140\" stroke=\"#713f12\" stroke-width=\"2\" stroke-linecap=\"round\"/><rect x=\"30\" y=\"80\" width=\"100\" height=\"45\" rx=\"4\" fill=\"#facc15\" stroke=\"#713f12\" stroke-width=\"2\"/><rect x=\"80\" y=\"55\" width=\"40\" height=\"28\" fill=\"#fde68a\" stroke=\"#713f12\" stroke-width=\"2\"/><circle cx=\"50\" cy=\"152\" r=\"15\" fill=\"#374151\" stroke=\"#111827\" stroke-width=\"2\"/><circle cx=\"110\" cy=\"152\" r=\"15\" fill=\"#374151\" stroke=\"#111827\" stroke-width=\"2\"/><rect x=\"195\" y=\"80\" width=\"100\" height=\"45\" rx=\"4\" fill=\"#facc15\" stroke=\"#713f12\" stroke-width=\"2\"/><rect x=\"245\" y=\"55\" width=\"40\" height=\"28\" fill=\"#fde68a\" stroke=\"#713f12\" stroke-width=\"2\"/><rect x=\"185\" y=\"114\" width=\"120\" height=\"26\" rx=\"13\" fill=\"#374151\" stroke=\"#111827\" stroke-width=\"2\"/><circle cx=\"199\" cy=\"127\" r=\"8\" fill=\"#9ca3af\" stroke=\"#111827\" stroke-width=\"1.2\"/><circle cx=\"222\" cy=\"127\" r=\"8\" fill=\"#9ca3af\" stroke=\"#111827\" stroke-width=\"1.2\"/><circle cx=\"245\" cy=\"127\" r=\"8\" fill=\"#9ca3af\" stroke=\"#111827\" stroke-width=\"1.2\"/><circle cx=\"268\" cy=\"127\" r=\"8\" fill=\"#9ca3af\" stroke=\"#111827\" stroke-width=\"1.2\"/><circle cx=\"291\" cy=\"127\" r=\"8\" fill=\"#9ca3af\" stroke=\"#111827\" stroke-width=\"1.2\"/><text x=\"80\" y=\"200\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">vehicle 1</text><text x=\"245\" y=\"200\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">vehicle 2</text></svg>", "alt": "Two vehicles of equal weight on soft mud. Vehicle 1 has two narrow wheels that have sunk deep into the mud. Vehicle 2 has long wide tracks and sits on the surface."}
  },
  {
    id: "g8-sci-force-b-q12",
    prompt: "A ripe mango falls from a tree to the ground. Which force pulls it down?",
    options: [
      { id: "a", text: "Magnetic force" },
      { id: "b", text: "Gravitational force" },
      { id: "c", text: "Electrostatic force" },
      { id: "d", text: "Muscular force" }
    ],
    answerId: "b",
    explanation: "The Earth's gravity pulls all objects toward it. Gravity is a non-contact force.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-b-q13",
    prompt: "Knives P and Q are pressed onto a tomato with the same force. The close-ups show their edges. Which cuts more easily, and why?",
    options: [
      { id: "a", text: "Knife Q, because its edge has a larger area" },
      { id: "b", text: "Knife P, because its thin edge has a smaller area and gives greater pressure" },
      { id: "c", text: "Both cut equally well with the same force" },
      { id: "d", text: "Knife Q, because it gives more friction" }
    ],
    answerId: "b",
    explanation: "P's very thin edge touches only a tiny area, so the same force gives a much greater pressure and slices into the tomato. Knife Q's wider edge spreads the force over a larger area, which lowers the pressure, so the larger area does not help it cut.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Two knives pressing down on tomatoes with equal force arrows. Close-ups of the blades: knife P ends in a very thin edge; knife Q ends in a wide, flat edge.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><polygon points=\"40,30 110,30 110,60 75,120\" fill=\"#e5e7eb\" stroke=\"#1f2937\" stroke-width=\"1.8\" stroke-linejoin=\"round\"/><polygon points=\"200,30 270,30 270,60 250,110 220,110 200,60\" fill=\"#e5e7eb\" stroke=\"#1f2937\" stroke-width=\"1.8\" stroke-linejoin=\"round\"/><circle cx=\"75\" cy=\"160\" r=\"34\" fill=\"#ef4444\" stroke=\"#7f1d1d\" stroke-width=\"1.5\"/><circle cx=\"235\" cy=\"160\" r=\"34\" fill=\"#ef4444\" stroke=\"#7f1d1d\" stroke-width=\"1.5\"/><line x1=\"75\" y1=\"2\" x2=\"75.0\" y2=\"19.0\" stroke=\"#1f2937\" stroke-width=\"2.2\" stroke-linecap=\"round\"/><polygon points=\"75,27 70.6,19 79.4,19\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"235\" y1=\"2\" x2=\"235.0\" y2=\"19.0\" stroke=\"#1f2937\" stroke-width=\"2.2\" stroke-linecap=\"round\"/><polygon points=\"235,27 230.6,19 239.4,19\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><text x=\"160\" y=\"18\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">same force</text><text x=\"25\" y=\"50\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">P</text><text x=\"185\" y=\"50\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">Q</text><text x=\"75\" y=\"212\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">thin edge</text><text x=\"235\" y=\"212\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">wide edge</text></svg>", "alt": "Two knives pressing down on tomatoes with equal force arrows. Close-ups of the blades: knife P ends in a very thin edge; knife Q ends in a wide, flat edge."}
  },
  {
    id: "g8-sci-force-b-q14",
    prompt: "In the building shown, water comes out faster from tap T1 than from tap T4. Why?",
    options: [
      { id: "a", text: "Tap T1 is wider" },
      { id: "b", text: "The water at T1 is warmer" },
      { id: "c", text: "There is less friction in the pipe at T1" },
      { id: "d", text: "T1 has a greater height of water above it, so the pressure is higher" }
    ],
    answerId: "d",
    explanation: "T1 is on the ground floor, far below the water level in the roof tank, so the depth of water above it, and so the pressure, is greatest. The taps are drawn the same size, so T1 being wider cannot explain the faster flow.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A four-storey building with a water tank on the roof and one pipe running down the side. Tap T4 is on the top floor and tap T1 is on the ground floor; both taps are the same size.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"80\" y=\"50\" width=\"140\" height=\"160\" fill=\"#f1f5f9\" stroke=\"#475569\" stroke-width=\"2\"/><line x1=\"80\" y1=\"90\" x2=\"220\" y2=\"90\" stroke=\"#94a3b8\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><line x1=\"80\" y1=\"130\" x2=\"220\" y2=\"130\" stroke=\"#94a3b8\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><line x1=\"80\" y1=\"170\" x2=\"220\" y2=\"170\" stroke=\"#94a3b8\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><rect x=\"110\" y=\"18\" width=\"60\" height=\"32\" fill=\"#bfdbfe\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><line x1=\"110\" y1=\"26\" x2=\"170\" y2=\"26\" stroke=\"#2563eb\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><polyline points=\"170,44 240,44 240,196\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><line x1=\"240\" y1=\"76\" x2=\"256\" y2=\"76\" stroke=\"#64748b\" stroke-width=\"5\" stroke-linecap=\"round\"/><line x1=\"256\" y1=\"76\" x2=\"256\" y2=\"84\" stroke=\"#64748b\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"240\" y1=\"196\" x2=\"256\" y2=\"196\" stroke=\"#64748b\" stroke-width=\"5\" stroke-linecap=\"round\"/><line x1=\"256\" y1=\"196\" x2=\"256\" y2=\"204\" stroke=\"#64748b\" stroke-width=\"4\" stroke-linecap=\"round\"/><text x=\"266\" y=\"82\" font-size=\"14\" text-anchor=\"start\" font-weight=\"600\" fill=\"#1f2937\">T4</text><text x=\"266\" y=\"202\" font-size=\"14\" text-anchor=\"start\" font-weight=\"600\" fill=\"#1f2937\">T1</text><text x=\"150\" y=\"75\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">4th floor</text><text x=\"150\" y=\"195\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">ground floor</text><line x1=\"0\" y1=\"210\" x2=\"320\" y2=\"210\" stroke=\"#78350f\" stroke-width=\"3\" stroke-linecap=\"round\"/></svg>", "alt": "A four-storey building with a water tank on the roof and one pipe running down the side. Tap T4 is on the top floor and tap T1 is on the ground floor; both taps are the same size."}
  },
  {
    id: "g8-sci-force-b-q15",
    prompt: "A nurse fills a syringe by dipping the needle into medicine and pulling the plunger back. The liquid enters the syringe because \u2014",
    options: [
      { id: "a", text: "pulling the plunger lowers the pressure inside, and atmospheric pressure pushes the liquid in" },
      { id: "b", text: "the plunger pulls the liquid with magnetic force" },
      { id: "c", text: "gravity pulls the liquid upward" },
      { id: "d", text: "the liquid moves into empty spaces all by itself" }
    ],
    answerId: "a",
    explanation: "Pulling the plunger makes a low-pressure space inside the syringe. The higher air pressure on the medicine's surface pushes the liquid up into it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-b-q16",
    prompt: "Air presses on our bodies with a very large force. Why are we not crushed?",
    options: [
      { id: "a", text: "Air has no weight." },
      { id: "b", text: "Atmospheric pressure acts only on buildings." },
      { id: "c", text: "The pressure of fluids inside our bodies balances the air pressure outside." },
      { id: "d", text: "Our skin repels air." }
    ],
    answerId: "c",
    explanation: "The fluids inside our bodies push outward with a pressure about equal to the atmospheric pressure. The inside and outside pressures balance.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-b-q17",
    prompt: "A sealed packet of chips bought in the plains looks puffed up when it is carried to a hill station. Why?",
    options: [
      { id: "a", text: "The chips expand in the cold." },
      { id: "b", text: "More air leaks into the packet." },
      { id: "c", text: "Gravity is stronger on hills." },
      { id: "d", text: "The outside air pressure is lower at a height, so the air inside pushes the packet outward." }
    ],
    answerId: "d",
    explanation: "At a height, atmospheric pressure is lower. The air sealed inside is now at a higher pressure than the air outside, so it pushes the packet outward.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-b-q18",
    prompt: "A magnet will attract which of these?",
    options: [
      { id: "a", text: "Aluminium foil" },
      { id: "b", text: "Iron pins" },
      { id: "c", text: "Copper wire" },
      { id: "d", text: "A plastic scale" }
    ],
    answerId: "b",
    explanation: "Magnets attract magnetic materials such as iron. Aluminium, copper, and plastic are not attracted.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-b-q19",
    prompt: "You have a bar magnet and an iron bar that may or may not be a magnet. Which observation PROVES that the iron bar is itself a magnet?",
    options: [
      { id: "a", text: "One end of the iron bar is attracted to the magnet's north pole." },
      { id: "b", text: "The iron bar sticks to the side of the magnet." },
      { id: "c", text: "One end of the iron bar is pushed away (repelled) by the magnet's north pole." },
      { id: "d", text: "The iron bar feels heavy." }
    ],
    answerId: "c",
    explanation: "A magnet also attracts plain, unmagnetised iron, so attraction proves nothing. Only another magnet's like pole can repel it, so repulsion is the sure test.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-b-q20",
    prompt: "Use the data cards to decide who presses harder on the floor.",
    options: [
      { id: "a", text: "The woman, about 30 times more than the elephant" },
      { id: "b", text: "The elephant, because it is much heavier" },
      { id: "c", text: "Both exert equal pressure." },
      { id: "d", text: "The elephant, about 30 times more than the woman" }
    ],
    answerId: "a",
    explanation: "The woman exerts 600 \u00f7 0.0002 = 3,000,000 Pa and the elephant 40,000 \u00f7 0.4 = 100,000 Pa, so her pressure is about 30 times greater. The elephant is much heavier, but its weight is spread over a far larger area.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Two data cards. Woman in stiletto heels: weight 600 N, total contact area 0.0002 square metres. Elephant on four feet: weight 40,000 N, total contact area 0.4 square metres.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"15\" y=\"30\" width=\"140\" height=\"160\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"85\" y=\"54\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">Woman in heels</text><path d=\"M40,120 L70,96 L110,96 Q120,96 120,108 L120,116 L74,116 L52,128 L52,140 L48,140 L46,126 Z\" fill=\"#be185d\" stroke=\"#831843\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><text x=\"85\" y=\"152\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">weight 600 N</text><text x=\"85\" y=\"172\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">area 0.0002 m\u00b2</text><rect x=\"165\" y=\"30\" width=\"140\" height=\"160\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#475569\" stroke-width=\"1.5\"/><text x=\"235\" y=\"54\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">Elephant</text><ellipse cx=\"240\" cy=\"105\" rx=\"30\" ry=\"24\" fill=\"#9ca3af\" stroke=\"#374151\" stroke-width=\"1.5\"/><ellipse cx=\"222\" cy=\"84\" rx=\"5\" ry=\"4\" fill=\"#6b7280\" stroke=\"none\" stroke-width=\"1.5\"/><ellipse cx=\"234\" cy=\"84\" rx=\"5\" ry=\"4\" fill=\"#6b7280\" stroke=\"none\" stroke-width=\"1.5\"/><ellipse cx=\"246\" cy=\"84\" rx=\"5\" ry=\"4\" fill=\"#6b7280\" stroke=\"none\" stroke-width=\"1.5\"/><ellipse cx=\"258\" cy=\"84\" rx=\"5\" ry=\"4\" fill=\"#6b7280\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"235\" y=\"152\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">weight 40,000 N</text><text x=\"235\" y=\"172\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">area 0.4 m\u00b2</text></svg>", "alt": "Two data cards. Woman in stiletto heels: weight 600 N, total contact area 0.0002 square metres. Elephant on four feet: weight 40,000 N, total contact area 0.4 square metres."}
  },
  {
    id: "g8-sci-force-b-q21",
    prompt: "At a given depth inside a liquid, the liquid pressure acts \u2014",
    options: [
      { id: "a", text: "only downward" },
      { id: "b", text: "only sideways" },
      { id: "c", text: "only upward" },
      { id: "d", text: "equally in all directions" }
    ],
    answerId: "d",
    explanation: "At any one depth, a liquid pushes equally in every direction: down, up, and on the side walls of its container.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-b-q22",
    prompt: "Use the information in the picture to find the total pressure on the diver.",
    options: [
      { id: "a", text: "About 4 atmospheres" },
      { id: "b", text: "About 3 atmospheres" },
      { id: "c", text: "About 30 atmospheres" },
      { id: "d", text: "About 1 atmosphere" }
    ],
    answerId: "a",
    explanation: "The diver is 30 m deep, and every 10 m of water adds about 1 atmosphere, so the water adds about 3 atmospheres. The air above the sea adds 1 more, giving about 4 atmospheres. 3 atmospheres forgets the air already pressing on the sea surface.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A depth scale beside the sea marked 0, 10, 20 and 30 m. A note says the air at the surface presses with 1 atmosphere and the water adds 1 atmosphere for every 10 m. A diver floats at the 30 m mark.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"60\" y=\"50\" width=\"260\" height=\"170\" fill=\"#bfdbfe\" stroke=\"none\" stroke-width=\"1.5\"/><line x1=\"60\" y1=\"50\" x2=\"320\" y2=\"50\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-linecap=\"round\"/><text x=\"190\" y=\"26\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">air above: 1 atm</text><line x1=\"50\" y1=\"50\" x2=\"50\" y2=\"200\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><line x1=\"44\" y1=\"50\" x2=\"56\" y2=\"50\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"40\" y=\"55\" font-size=\"12\" text-anchor=\"end\" font-weight=\"600\" fill=\"#1f2937\">0 m</text><line x1=\"44\" y1=\"100\" x2=\"56\" y2=\"100\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"40\" y=\"105\" font-size=\"12\" text-anchor=\"end\" font-weight=\"600\" fill=\"#1f2937\">10 m</text><line x1=\"44\" y1=\"150\" x2=\"56\" y2=\"150\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"40\" y=\"155\" font-size=\"12\" text-anchor=\"end\" font-weight=\"600\" fill=\"#1f2937\">20 m</text><line x1=\"44\" y1=\"200\" x2=\"56\" y2=\"200\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><text x=\"40\" y=\"205\" font-size=\"12\" text-anchor=\"end\" font-weight=\"600\" fill=\"#1f2937\">30 m</text><text x=\"200\" y=\"90\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">+1 atm for every 10 m</text><ellipse cx=\"180\" cy=\"200\" rx=\"26\" ry=\"8\" fill=\"#111827\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"214\" cy=\"196\" r=\"8\" fill=\"#fbbf24\" stroke=\"#111827\" stroke-width=\"1.5\"/><rect x=\"160\" y=\"188\" width=\"24\" height=\"6\" fill=\"#f59e0b\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"260\" y=\"186\" font-size=\"12\" text-anchor=\"start\" font-weight=\"600\" fill=\"#1f2937\">diver</text></svg>", "alt": "A depth scale beside the sea marked 0, 10, 20 and 30 m. A note says the air at the surface presses with 1 atmosphere and the water adds 1 atmosphere for every 10 m. A diver floats at the 30 m mark."}
  },
  {
    id: "g8-sci-force-b-q23",
    prompt: "A person has fallen through thin ice on a pond. Rescuers are told to crawl or lie flat on the ice instead of walking. Why?",
    options: [
      { id: "a", text: "To keep themselves warm" },
      { id: "b", text: "To increase friction with the ice" },
      { id: "c", text: "To spread their weight over a larger area so the pressure is less and the ice does not crack" },
      { id: "d", text: "To move faster across the ice" }
    ],
    answerId: "c",
    explanation: "Lying flat greatly increases the contact area. For the same weight, the pressure on the ice drops, so the ice is less likely to break.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-b-q24",
    prompt: "Water is poured into the glass tube shown until it is about half full. When the water settles, how do the levels in arms X and Y compare?",
    options: [
      { id: "a", text: "Higher in the wide arm X" },
      { id: "b", text: "The same level in both arms" },
      { id: "c", text: "Higher in the narrow arm Y" },
      { id: "d", text: "Higher in whichever arm the water was poured into" }
    ],
    answerId: "b",
    explanation: "Liquid pressure depends only on depth, not on the width of the tube, so the water stops moving when both surfaces are at the same height. The narrow arm Y does not end up higher: the pressure at the bottom balances when the depths are equal.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"An empty U-shaped glass tube with a wide arm X on the left and a narrow arm Y on the right, joined at the bottom.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><path d=\"M70,30 L70,160 Q70,195 105,195 L215,195 Q235,195 235,170 L235,30\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/><path d=\"M130,30 L130,150 Q130,160 140,160 L210,160 Q215,160 215,150 L215,30\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/><text x=\"100\" y=\"22\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">X</text><text x=\"225\" y=\"22\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">Y</text><text x=\"285\" y=\"110\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">empty</text></svg>", "alt": "An empty U-shaped glass tube with a wide arm X on the left and a narrow arm Y on the right, joined at the bottom."}
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\u26a1",
    title: "Force and pressure",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "magnet",
    speak: "A force is a push or a pull. Pressure is force on a unit area.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "magnet",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Force", reveal: "Push or pull", emoji: "\ud83d\udc49" },
      { label: "Pressure", reveal: "Force divided by area", emoji: "\ud83d\udccf" },
      { label: "Friction", reveal: "Opposes motion", emoji: "\ud83d\uded1" },
      { label: "Air pressure", reveal: "Atmosphere pushes too", emoji: "\ud83c\udf2c\ufe0f" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Pressure equals\u2026",
    options: [
        { id: "a", text: "Force times area" },
        { id: "b", text: "Force divided by area" },
        { id: "c", text: "Mass times speed" },
        { id: "d", text: "Area divided by force" }
    ],
    answerId: "b",
    why: "Pressure is force on a unit area.",
    visual: "magnet",
    speak: "Pressure equals\u2026",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Force changes motion", "P = F/A", "Friction matters", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g8ScienceForce: ChapterDef = {
  id: "force-pressure",
  title: "Force and Pressure",
  emoji: "\u26a1",
  blurb: "Push, pull and pressure",
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

export const g8ScienceForceQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
