import type { ChapterDef, PrepQuestion } from "../types";

/** Human Body - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g5-sci-body-a-q01",
    prompt: "How many bones does an adult human body usually have?",
    options: [
      { id: "a", text: "106" },
      { id: "b", text: "300" },
      { id: "c", text: "206" },
      { id: "d", text: "186" }
    ],
    answerId: "c",
    explanation: "An adult skeleton usually has 206 bones. A newborn baby has about 300, but some of them join together as the child grows.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-a-q02",
    prompt: "In the skeleton shown, which labelled part protects the heart and lungs?",
    options: [
      { id: "a", text: "Part A" },
      { id: "b", text: "Part B" },
      { id: "c", text: "Part C" },
      { id: "d", text: "Part D" }
    ],
    answerId: "a",
    explanation: "Part A is the ribcage: the ribs curve around the chest like the bars of a cage and guard the heart and lungs. Part B is the skull (protects the brain), C is the kneecap, and D is the hip bone.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" width=\"320\" height=\"220\" role=\"img\" aria-label=\"A labelled skeleton. A points to the ribcage, B to the skull, C to the kneecap, D to the hip bone.\">\n  <style>\n    .part { fill:#f6e7d0; stroke:#333; stroke-width:2; }\n    .bone { fill:#fbf8ef; stroke:#555; stroke-width:2; }\n    .limb { fill:none; stroke:#9a9a9a; stroke-width:6; stroke-linecap:round; }\n    .rib { fill:none; stroke:#777; stroke-width:2.5; stroke-linecap:round; }\n    .muscle { fill:#e88a8a; stroke:#8a2b2b; stroke-width:1.5; }\n    .nerve { fill:none; stroke:#d4a017; stroke-width:3; stroke-linecap:round; }\n    .brain { fill:#f4b6c2; stroke:#8a3b55; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:1.8; fill:none; stroke-linecap:round; stroke-linejoin:round; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .stick { fill:none; stroke:#333; stroke-width:3; stroke-linecap:round; stroke-linejoin:round; }\n    .head { fill:#f6d7b0; stroke:#333; stroke-width:2; }\n    .dark { fill:#333; }\n    .red { fill:#e05a4f; stroke:#333; stroke-width:1.5; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .sky { fill:#9fd3f5; stroke:#2b7bb9; stroke-width:1.5; }\n    .bag { fill:#6a8fd8; stroke:#2a3f73; stroke-width:1.5; }\n    .wood { fill:#c99a6b; stroke:#6b4a2b; stroke-width:1.5; }\n    .grey { fill:#cfcfcf; stroke:#555; stroke-width:1.5; }\n    .white { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#f7d46b; stroke:#333; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <ellipse class=\"bone\" cx=\"110\" cy=\"31\" rx=\"17\" ry=\"19\"/>\n  <circle class=\"dark\" cx=\"104\" cy=\"29\" r=\"3.5\"/><circle class=\"dark\" cx=\"116\" cy=\"29\" r=\"3.5\"/>\n  <path class=\"bone\" d=\"M101 45 Q110 56 119 45\"/>\n  <rect class=\"bone\" x=\"106\" y=\"53\" width=\"8\" height=\"5\" rx=\"1\"/>\n  <rect class=\"bone\" x=\"106\" y=\"60\" width=\"8\" height=\"5\" rx=\"1\"/>\n  <rect class=\"bone\" x=\"106\" y=\"67\" width=\"8\" height=\"5\" rx=\"1\"/>\n  <rect class=\"bone\" x=\"106\" y=\"74\" width=\"8\" height=\"5\" rx=\"1\"/>\n  <rect class=\"bone\" x=\"106\" y=\"81\" width=\"8\" height=\"5\" rx=\"1\"/>\n  <rect class=\"bone\" x=\"106\" y=\"88\" width=\"8\" height=\"5\" rx=\"1\"/>\n  <rect class=\"bone\" x=\"106\" y=\"95\" width=\"8\" height=\"5\" rx=\"1\"/>\n  <rect class=\"bone\" x=\"106\" y=\"102\" width=\"8\" height=\"5\" rx=\"1\"/>\n  <rect class=\"bone\" x=\"106\" y=\"109\" width=\"8\" height=\"5\" rx=\"1\"/>\n  <rect class=\"bone\" x=\"106\" y=\"116\" width=\"8\" height=\"5\" rx=\"1\"/>\n  <rect class=\"bone\" x=\"106\" y=\"123\" width=\"8\" height=\"5\" rx=\"1\"/>\n  <rect class=\"bone\" x=\"106\" y=\"130\" width=\"8\" height=\"5\" rx=\"1\"/>\n  <rect class=\"bone\" x=\"106\" y=\"137\" width=\"8\" height=\"5\" rx=\"1\"/>\n  <path class=\"rib\" d=\"M105 64 Q80 67 89 79\"/>\n  <path class=\"rib\" d=\"M115 64 Q140 67 131 79\"/>\n  <path class=\"rib\" d=\"M105 72 Q80 75 89 87\"/>\n  <path class=\"rib\" d=\"M115 72 Q140 75 131 87\"/>\n  <path class=\"rib\" d=\"M105 80 Q80 83 89 95\"/>\n  <path class=\"rib\" d=\"M115 80 Q140 83 131 95\"/>\n  <path class=\"rib\" d=\"M105 88 Q80 91 89 103\"/>\n  <path class=\"rib\" d=\"M115 88 Q140 91 131 103\"/>\n  <path class=\"rib\" d=\"M105 96 Q80 99 89 111\"/>\n  <path class=\"rib\" d=\"M115 96 Q140 99 131 111\"/>\n  <path class=\"rib\" d=\"M105 104 Q80 107 89 119\"/>\n  <path class=\"rib\" d=\"M115 104 Q140 107 131 119\"/>\n  <line class=\"rib\" x1=\"85\" y1=\"58\" x2=\"135\" y2=\"58\"/>\n  <polyline class=\"limb\" points=\"84,60 75,104 71,142\"/>\n  <polyline class=\"limb\" points=\"136,60 145,104 149,142\"/>\n  <path class=\"bone\" d=\"M92 140 Q110 126 128 140 L125 153 Q110 146 95 153 Z\"/>\n  <polyline class=\"limb\" points=\"99,151 96,182 94,212\"/>\n  <polyline class=\"limb\" points=\"121,151 124,182 126,212\"/>\n  <circle class=\"bone\" cx=\"96\" cy=\"182\" r=\"4.5\"/><circle class=\"bone\" cx=\"124\" cy=\"182\" r=\"4.5\"/>\n  <line class=\"arrow\" x1=\"135\" y1=\"92\" x2=\"208\" y2=\"92\"/>\n  <circle class=\"badge\" cx=\"220\" cy=\"92\" r=\"11\"/><text class=\"label\" x=\"220\" y=\"97\" text-anchor=\"middle\">A</text>\n  <line class=\"arrow\" x1=\"128\" y1=\"30\" x2=\"208\" y2=\"30\"/>\n  <circle class=\"badge\" cx=\"220\" cy=\"30\" r=\"11\"/><text class=\"label\" x=\"220\" y=\"35\" text-anchor=\"middle\">B</text>\n  <line class=\"arrow\" x1=\"91\" y1=\"182\" x2=\"40\" y2=\"182\"/>\n  <circle class=\"badge\" cx=\"28\" cy=\"182\" r=\"11\"/><text class=\"label\" x=\"28\" y=\"187\" text-anchor=\"middle\">C</text>\n  <line class=\"arrow\" x1=\"127\" y1=\"146\" x2=\"208\" y2=\"146\"/>\n  <circle class=\"badge\" cx=\"220\" cy=\"146\" r=\"11\"/><text class=\"label\" x=\"220\" y=\"151\" text-anchor=\"middle\">D</text>\n  <text class=\"small\" x=\"248\" y=\"210\" text-anchor=\"middle\">Human skeleton</text>\n</svg>", "alt": "A labelled skeleton. A points to the ribcage, B to the skull, C to the kneecap, D to the hip bone."}
  },
  {
    id: "g5-sci-body-a-q03",
    prompt: "Which is the longest bone in the human body?",
    options: [
      { id: "a", text: "A rib" },
      { id: "b", text: "The collarbone" },
      { id: "c", text: "A bone of the skull" },
      { id: "d", text: "The thigh bone" }
    ],
    answerId: "d",
    explanation: "The thigh bone (femur) runs from the hip to the knee. It is the longest and one of the strongest bones, because it carries much of the body's weight.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-a-q04",
    prompt: "Which type of joint is found at the shoulder?",
    options: [
      { id: "a", text: "Hinge joint" },
      { id: "b", text: "Ball-and-socket joint" },
      { id: "c", text: "Pivot joint" },
      { id: "d", text: "Fixed joint" }
    ],
    answerId: "b",
    explanation: "At the shoulder, the rounded top of the upper arm bone fits into a cup-shaped hollow. This ball-and-socket joint lets the arm swing in a full circle.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-a-q05",
    prompt: "The elbow in the picture moves like the door: it bends and straightens in only one direction. What type of joint is the elbow?",
    options: [
      { id: "a", text: "Pivot joint" },
      { id: "b", text: "Fixed joint" },
      { id: "c", text: "Hinge joint" },
      { id: "d", text: "Ball-and-socket joint" }
    ],
    answerId: "c",
    explanation: "A hinge joint moves back and forth in one direction, just like the hinge of a door. The elbow and the knee are both hinge joints.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" width=\"320\" height=\"220\" role=\"img\" aria-label=\"A door on a hinge opening one way, next to an arm bending at the elbow in one direction, with a question mark at the elbow.\">\n  <style>\n    .part { fill:#f6e7d0; stroke:#333; stroke-width:2; }\n    .bone { fill:#fbf8ef; stroke:#555; stroke-width:2; }\n    .limb { fill:none; stroke:#9a9a9a; stroke-width:6; stroke-linecap:round; }\n    .rib { fill:none; stroke:#777; stroke-width:2.5; stroke-linecap:round; }\n    .muscle { fill:#e88a8a; stroke:#8a2b2b; stroke-width:1.5; }\n    .nerve { fill:none; stroke:#d4a017; stroke-width:3; stroke-linecap:round; }\n    .brain { fill:#f4b6c2; stroke:#8a3b55; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:1.8; fill:none; stroke-linecap:round; stroke-linejoin:round; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .stick { fill:none; stroke:#333; stroke-width:3; stroke-linecap:round; stroke-linejoin:round; }\n    .head { fill:#f6d7b0; stroke:#333; stroke-width:2; }\n    .dark { fill:#333; }\n    .red { fill:#e05a4f; stroke:#333; stroke-width:1.5; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .sky { fill:#9fd3f5; stroke:#2b7bb9; stroke-width:1.5; }\n    .bag { fill:#6a8fd8; stroke:#2a3f73; stroke-width:1.5; }\n    .wood { fill:#c99a6b; stroke:#6b4a2b; stroke-width:1.5; }\n    .grey { fill:#cfcfcf; stroke:#555; stroke-width:1.5; }\n    .white { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#f7d46b; stroke:#333; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <rect class=\"wood\" x=\"30\" y=\"40\" width=\"10\" height=\"130\"/>\n  <polygon class=\"wood\" points=\"40,45 105,62 105,180 40,165\" opacity=\"0.9\"/>\n  <rect class=\"grey\" x=\"36\" y=\"60\" width=\"8\" height=\"16\" rx=\"2\"/><rect class=\"grey\" x=\"36\" y=\"130\" width=\"8\" height=\"16\" rx=\"2\"/>\n  <path class=\"arrow\" d=\"M112 120 Q130 95 118 70\"/>\n  <polyline class=\"arrow\" points=\"124.5,74.9 118,70 116.7,78.1\"/>\n  <text class=\"small\" x=\"68\" y=\"198\" text-anchor=\"middle\">Door hinge</text>\n  <text class=\"small\" x=\"68\" y=\"212\" text-anchor=\"middle\">opens one way</text>\n  <line class=\"dash\" x1=\"160\" y1=\"20\" x2=\"160\" y2=\"205\"/>\n  <line class=\"limb\" x1=\"180\" y1=\"150\" x2=\"245\" y2=\"150\"/>\n  <line class=\"limb\" x1=\"248\" y1=\"150\" x2=\"300\" y2=\"150\" stroke-dasharray=\"5 4\" opacity=\"0.6\"/>\n  <line class=\"limb\" x1=\"248\" y1=\"148\" x2=\"280\" y2=\"90\"/>\n  <circle class=\"bone\" cx=\"246\" cy=\"150\" r=\"7\"/>\n  <path class=\"arrow\" d=\"M300 138 Q300 105 285 92\"/>\n  <polyline class=\"arrow\" points=\"293.1,92.8 285,92 288.1,99.6\"/>\n  <text class=\"small\" x=\"210\" y=\"170\" text-anchor=\"middle\">upper arm</text>\n  <text class=\"small\" x=\"292\" y=\"78\" text-anchor=\"middle\">lower arm</text>\n  <circle class=\"badge\" cx=\"246\" cy=\"182\" r=\"11\"/><text class=\"label\" x=\"246\" y=\"187\" text-anchor=\"middle\">?</text>\n  <line class=\"arrow\" x1=\"246\" y1=\"171\" x2=\"246\" y2=\"159\"/>\n  <text class=\"small\" x=\"240\" y=\"212\" text-anchor=\"middle\">Elbow bends one way</text>\n</svg>", "alt": "A door on a hinge opening one way, next to an arm bending at the elbow in one direction, with a question mark at the elbow."}
  },
  {
    id: "g5-sci-body-a-q06",
    prompt: "The bones of the skull (except the lower jaw) are joined so that they cannot move. These are called:",
    options: [
      { id: "a", text: "Fixed joints" },
      { id: "b", text: "Hinge joints" },
      { id: "c", text: "Pivot joints" },
      { id: "d", text: "Ball-and-socket joints" }
    ],
    answerId: "a",
    explanation: "Fixed joints hold bones tightly together with no movement. The skull bones are joined this way to make a strong, solid case around the brain.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-a-q07",
    prompt: "What joins a muscle to a bone?",
    options: [
      { id: "a", text: "Ligament" },
      { id: "b", text: "Cartilage" },
      { id: "c", text: "Nerve" },
      { id: "d", text: "Tendon" }
    ],
    answerId: "d",
    explanation: "A tendon is a tough, cord-like band that connects a muscle to a bone. When the muscle pulls, the tendon pulls the bone. (Ligaments join bone to bone.)",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-a-q08",
    prompt: "Which of these is done by an involuntary muscle?",
    options: [
      { id: "a", text: "Kicking a football" },
      { id: "b", text: "The heart beating" },
      { id: "c", text: "Writing in a notebook" },
      { id: "d", text: "Waving goodbye" }
    ],
    answerId: "b",
    explanation: "The heart keeps beating on its own, day and night, without us deciding to make it beat. Kicking, writing, and waving are things we choose to do, using voluntary muscles.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-a-q09",
    prompt: "What carries messages between the brain and other parts of the body?",
    options: [
      { id: "a", text: "Tendons" },
      { id: "b", text: "Bones" },
      { id: "c", text: "Nerves" },
      { id: "d", text: "Ligaments" }
    ],
    answerId: "c",
    explanation: "Nerves are thin, thread-like paths that carry messages. They take information from the sense organs to the brain and carry the brain's commands to the muscles.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-a-q10",
    prompt: "With her eyes closed, Kavya can tell whether a cloth is rough or smooth. Which sense organ is she using?",
    options: [
      { id: "a", text: "Tongue" },
      { id: "b", text: "Skin" },
      { id: "c", text: "Nose" },
      { id: "d", text: "Ear" }
    ],
    answerId: "b",
    explanation: "The skin is the sense organ for touch. It can feel whether something is rough or smooth, hot or cold, soft or hard.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-a-q11",
    prompt: "Arjun turns his head left and right, as the arrows show, to check for traffic before crossing the road. Which type of joint, at the spot marked ?, makes this possible?",
    options: [
      { id: "a", text: "Hinge joint" },
      { id: "b", text: "Ball-and-socket joint" },
      { id: "c", text: "Pivot joint" },
      { id: "d", text: "Fixed joint" }
    ],
    answerId: "c",
    explanation: "A pivot joint lets one bone turn around another. The pivot joint at the top of the backbone, just below the skull, lets the head turn from side to side.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" width=\"320\" height=\"220\" role=\"img\" aria-label=\"A child's head seen from the front with a curved double arrow showing it turning left and right, and a question mark at the top of the neck.\">\n  <style>\n    .part { fill:#f6e7d0; stroke:#333; stroke-width:2; }\n    .bone { fill:#fbf8ef; stroke:#555; stroke-width:2; }\n    .limb { fill:none; stroke:#9a9a9a; stroke-width:6; stroke-linecap:round; }\n    .rib { fill:none; stroke:#777; stroke-width:2.5; stroke-linecap:round; }\n    .muscle { fill:#e88a8a; stroke:#8a2b2b; stroke-width:1.5; }\n    .nerve { fill:none; stroke:#d4a017; stroke-width:3; stroke-linecap:round; }\n    .brain { fill:#f4b6c2; stroke:#8a3b55; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:1.8; fill:none; stroke-linecap:round; stroke-linejoin:round; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .stick { fill:none; stroke:#333; stroke-width:3; stroke-linecap:round; stroke-linejoin:round; }\n    .head { fill:#f6d7b0; stroke:#333; stroke-width:2; }\n    .dark { fill:#333; }\n    .red { fill:#e05a4f; stroke:#333; stroke-width:1.5; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .sky { fill:#9fd3f5; stroke:#2b7bb9; stroke-width:1.5; }\n    .bag { fill:#6a8fd8; stroke:#2a3f73; stroke-width:1.5; }\n    .wood { fill:#c99a6b; stroke:#6b4a2b; stroke-width:1.5; }\n    .grey { fill:#cfcfcf; stroke:#555; stroke-width:1.5; }\n    .white { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#f7d46b; stroke:#333; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <path class=\"part\" d=\"M95 210 Q100 160 160 158 Q220 160 225 210 Z\"/>\n  <rect class=\"head\" x=\"148\" y=\"128\" width=\"24\" height=\"34\"/>\n  <circle class=\"head\" cx=\"160\" cy=\"92\" r=\"40\"/>\n  <circle class=\"dark\" cx=\"146\" cy=\"88\" r=\"4\"/><circle class=\"dark\" cx=\"174\" cy=\"88\" r=\"4\"/>\n  <path class=\"arrow\" d=\"M148 110 Q160 118 172 110\"/>\n  <path class=\"arrow\" d=\"M95 40 Q160 0 225 40\"/>\n  <polyline class=\"arrow\" points=\"98.1,32.4 95,40 103.1,39.2\"/>\n  <polyline class=\"arrow\" points=\"216.9,39.2 225,40 221.9,32.4\"/>\n  <text class=\"small\" x=\"70\" y=\"40\" text-anchor=\"middle\">left</text>\n  <text class=\"small\" x=\"252\" y=\"40\" text-anchor=\"middle\">right</text>\n  <circle class=\"dash\" cx=\"160\" cy=\"138\" r=\"13\"/>\n  <line class=\"arrow\" x1=\"174\" y1=\"140\" x2=\"238\" y2=\"140\"/>\n  <circle class=\"badge\" cx=\"250\" cy=\"140\" r=\"11\"/><text class=\"label\" x=\"250\" y=\"145\" text-anchor=\"middle\">?</text>\n  <text class=\"small\" x=\"160\" y=\"214\" text-anchor=\"middle\" opacity=\"0\">.</text>\n</svg>", "alt": "A child's head seen from the front with a curved double arrow showing it turning left and right, and a question mark at the top of the neck."}
  },
  {
    id: "g5-sci-body-a-q12",
    prompt: "The bar graph shows that a newborn baby has about 300 bones but an adult has only 206. The small picture shows what happens to some baby bones. What best explains the difference?",
    options: [
      { id: "a", text: "Some bones join (fuse) together as the child grows." },
      { id: "b", text: "Adults lose bones whenever they fall down." },
      { id: "c", text: "Bones dissolve if a person does not drink milk." },
      { id: "d", text: "Babies have extra ribs that fall off later." }
    ],
    answerId: "a",
    explanation: "Many bones in a baby's body are still in separate pieces. As the child grows, some of these pieces fuse into one bone, so the total drops to about 206.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" width=\"320\" height=\"220\" role=\"img\" aria-label=\"Bar graph: a newborn baby has about 300 bones and an adult has 206 bones. Beside it, two small bone pieces in a baby join into one bone in an adult.\">\n  <style>\n    .part { fill:#f6e7d0; stroke:#333; stroke-width:2; }\n    .bone { fill:#fbf8ef; stroke:#555; stroke-width:2; }\n    .limb { fill:none; stroke:#9a9a9a; stroke-width:6; stroke-linecap:round; }\n    .rib { fill:none; stroke:#777; stroke-width:2.5; stroke-linecap:round; }\n    .muscle { fill:#e88a8a; stroke:#8a2b2b; stroke-width:1.5; }\n    .nerve { fill:none; stroke:#d4a017; stroke-width:3; stroke-linecap:round; }\n    .brain { fill:#f4b6c2; stroke:#8a3b55; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:1.8; fill:none; stroke-linecap:round; stroke-linejoin:round; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .stick { fill:none; stroke:#333; stroke-width:3; stroke-linecap:round; stroke-linejoin:round; }\n    .head { fill:#f6d7b0; stroke:#333; stroke-width:2; }\n    .dark { fill:#333; }\n    .red { fill:#e05a4f; stroke:#333; stroke-width:1.5; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .sky { fill:#9fd3f5; stroke:#2b7bb9; stroke-width:1.5; }\n    .bag { fill:#6a8fd8; stroke:#2a3f73; stroke-width:1.5; }\n    .wood { fill:#c99a6b; stroke:#6b4a2b; stroke-width:1.5; }\n    .grey { fill:#cfcfcf; stroke:#555; stroke-width:1.5; }\n    .white { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#f7d46b; stroke:#333; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <line class=\"arrow\" x1=\"40\" y1=\"20\" x2=\"40\" y2=\"180\"/>\n  <line class=\"arrow\" x1=\"40\" y1=\"180\" x2=\"190\" y2=\"180\"/>\n  <rect class=\"sky\" x=\"62\" y=\"40\" width=\"40\" height=\"140\"/>\n  <rect class=\"green\" x=\"128\" y=\"84\" width=\"40\" height=\"96\"/>\n  <text class=\"label\" x=\"82\" y=\"34\" text-anchor=\"middle\">300</text>\n  <text class=\"label\" x=\"148\" y=\"78\" text-anchor=\"middle\">206</text>\n  <text class=\"small\" x=\"82\" y=\"196\" text-anchor=\"middle\">Newborn</text>\n  <text class=\"small\" x=\"148\" y=\"196\" text-anchor=\"middle\">Adult</text>\n  <text class=\"small\" x=\"115\" y=\"214\" text-anchor=\"middle\">Number of bones (about)</text>\n  <text class=\"small\" x=\"258\" y=\"40\" text-anchor=\"middle\">Baby</text>\n  <rect class=\"bone\" x=\"222\" y=\"50\" width=\"30\" height=\"12\" rx=\"5\"/><rect class=\"bone\" x=\"262\" y=\"50\" width=\"30\" height=\"12\" rx=\"5\"/>\n  <line class=\"arrow\" x1=\"257\" y1=\"76\" x2=\"257\" y2=\"112\"/>\n  <polyline class=\"arrow\" points=\"252.8,105.0 257,112 261.2,105.0\"/>\n  <rect class=\"bone\" x=\"222\" y=\"124\" width=\"70\" height=\"12\" rx=\"5\"/>\n  <text class=\"small\" x=\"258\" y=\"156\" text-anchor=\"middle\">Adult</text>\n  <text class=\"label\" x=\"258\" y=\"176\" text-anchor=\"middle\">?</text>\n</svg>", "alt": "Bar graph: a newborn baby has about 300 bones and an adult has 206 bones. Beside it, two small bone pieces in a baby join into one bone in an adult."}
  },
  {
    id: "g5-sci-body-a-q13",
    prompt: "Riya bends her arm at the elbow to lift a bag, as shown. What is muscle X (on the front of the upper arm) doing?",
    options: [
      { id: "a", text: "It relaxes and becomes longer." },
      { id: "b", text: "It contracts, becoming shorter and thicker." },
      { id: "c", text: "It pushes the lower arm bone upward." },
      { id: "d", text: "It stops working completely." }
    ],
    answerId: "b",
    explanation: "To bend the arm, the biceps contracts, which means it gets shorter and fatter (you can feel it bulge). This pulls the lower arm up. Muscles can only pull, never push.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" width=\"320\" height=\"220\" role=\"img\" aria-label=\"An arm bent at the elbow lifting a bag. Muscle X on the front of the upper arm is bulging; muscle Y is on the back of the upper arm.\">\n  <style>\n    .part { fill:#f6e7d0; stroke:#333; stroke-width:2; }\n    .bone { fill:#fbf8ef; stroke:#555; stroke-width:2; }\n    .limb { fill:none; stroke:#9a9a9a; stroke-width:6; stroke-linecap:round; }\n    .rib { fill:none; stroke:#777; stroke-width:2.5; stroke-linecap:round; }\n    .muscle { fill:#e88a8a; stroke:#8a2b2b; stroke-width:1.5; }\n    .nerve { fill:none; stroke:#d4a017; stroke-width:3; stroke-linecap:round; }\n    .brain { fill:#f4b6c2; stroke:#8a3b55; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:1.8; fill:none; stroke-linecap:round; stroke-linejoin:round; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .stick { fill:none; stroke:#333; stroke-width:3; stroke-linecap:round; stroke-linejoin:round; }\n    .head { fill:#f6d7b0; stroke:#333; stroke-width:2; }\n    .dark { fill:#333; }\n    .red { fill:#e05a4f; stroke:#333; stroke-width:1.5; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .sky { fill:#9fd3f5; stroke:#2b7bb9; stroke-width:1.5; }\n    .bag { fill:#6a8fd8; stroke:#2a3f73; stroke-width:1.5; }\n    .wood { fill:#c99a6b; stroke:#6b4a2b; stroke-width:1.5; }\n    .grey { fill:#cfcfcf; stroke:#555; stroke-width:1.5; }\n    .white { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#f7d46b; stroke:#333; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <circle class=\"bone\" cx=\"120\" cy=\"34\" r=\"10\"/>\n  <line class=\"limb\" x1=\"120\" y1=\"40\" x2=\"120\" y2=\"140\"/>\n  <line class=\"limb\" x1=\"122\" y1=\"142\" x2=\"205\" y2=\"142\"/>\n  <circle class=\"bone\" cx=\"120\" cy=\"142\" r=\"7\"/>\n  <ellipse class=\"muscle\" cx=\"135\" cy=\"88\" rx=\"13\" ry=\"34\"/>\n  <ellipse class=\"muscle\" cx=\"108\" cy=\"88\" rx=\"6\" ry=\"38\"/>\n  <line class=\"arrow\" x1=\"135\" y1=\"122\" x2=\"140\" y2=\"142\"/>\n  <line class=\"arrow\" x1=\"148\" y1=\"88\" x2=\"214\" y2=\"70\"/>\n  <circle class=\"badge\" cx=\"226\" cy=\"68\" r=\"11\"/><text class=\"label\" x=\"226\" y=\"73\" text-anchor=\"middle\">X</text>\n  <line class=\"arrow\" x1=\"102\" y1=\"88\" x2=\"58\" y2=\"88\"/>\n  <circle class=\"badge\" cx=\"46\" cy=\"88\" r=\"11\"/><text class=\"label\" x=\"46\" y=\"93\" text-anchor=\"middle\">Y</text>\n  <circle class=\"head\" cx=\"211\" cy=\"142\" r=\"8\"/>\n  <line class=\"arrow\" x1=\"211\" y1=\"150\" x2=\"211\" y2=\"162\"/>\n  <rect class=\"bag\" x=\"194\" y=\"162\" width=\"34\" height=\"34\" rx=\"4\"/>\n  <line class=\"arrow\" x1=\"250\" y1=\"190\" x2=\"250\" y2=\"140\"/>\n  <polyline class=\"arrow\" points=\"254.2,147.0 250,140 245.8,147.0\"/>\n  <text class=\"small\" x=\"262\" y=\"168\">lifting</text>\n  <text class=\"small\" x=\"62\" y=\"210\">elbow bending, bag going up</text>\n</svg>", "alt": "An arm bent at the elbow lifting a bag. Muscle X on the front of the upper arm is bulging; muscle Y is on the back of the upper arm."}
  },
  {
    id: "g5-sci-body-a-q14",
    prompt: "Which meal would help most in building strong bones?",
    options: [
      { id: "a", text: "Potato chips and a cola" },
      { id: "b", text: "Sweets and toffees" },
      { id: "c", text: "Fried snacks only" },
      { id: "d", text: "Ragi roti, curd, and green leafy vegetables" }
    ],
    answerId: "d",
    explanation: "Bones need calcium to be strong. Ragi, curd, milk, and green leafy vegetables are rich in calcium. Chips, cola, and sweets give very little of it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-a-q15",
    prompt: "The picture shows the path of the message when Meena touches a hot pan and jerks her hand away before she even thinks. Which part belongs in the box marked ?",
    options: [
      { id: "a", text: "Stomach" },
      { id: "b", text: "Spinal cord" },
      { id: "c", text: "Heart" },
      { id: "d", text: "Lungs" }
    ],
    answerId: "b",
    explanation: "This super-fast action is a reflex. The message from the skin goes to the spinal cord, which sends a command straight back to the arm muscles, saving time. The brain finds out a moment later and feels the pain.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" width=\"320\" height=\"220\" role=\"img\" aria-label=\"Message path for touching a hot pan: skin of the hand, a nerve, a box marked question mark, a nerve back to the arm muscle; the brain gets the message later.\">\n  <style>\n    .part { fill:#f6e7d0; stroke:#333; stroke-width:2; }\n    .bone { fill:#fbf8ef; stroke:#555; stroke-width:2; }\n    .limb { fill:none; stroke:#9a9a9a; stroke-width:6; stroke-linecap:round; }\n    .rib { fill:none; stroke:#777; stroke-width:2.5; stroke-linecap:round; }\n    .muscle { fill:#e88a8a; stroke:#8a2b2b; stroke-width:1.5; }\n    .nerve { fill:none; stroke:#d4a017; stroke-width:3; stroke-linecap:round; }\n    .brain { fill:#f4b6c2; stroke:#8a3b55; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:1.8; fill:none; stroke-linecap:round; stroke-linejoin:round; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .stick { fill:none; stroke:#333; stroke-width:3; stroke-linecap:round; stroke-linejoin:round; }\n    .head { fill:#f6d7b0; stroke:#333; stroke-width:2; }\n    .dark { fill:#333; }\n    .red { fill:#e05a4f; stroke:#333; stroke-width:1.5; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .sky { fill:#9fd3f5; stroke:#2b7bb9; stroke-width:1.5; }\n    .bag { fill:#6a8fd8; stroke:#2a3f73; stroke-width:1.5; }\n    .wood { fill:#c99a6b; stroke:#6b4a2b; stroke-width:1.5; }\n    .grey { fill:#cfcfcf; stroke:#555; stroke-width:1.5; }\n    .white { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#f7d46b; stroke:#333; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <ellipse class=\"grey\" cx=\"55\" cy=\"180\" rx=\"38\" ry=\"10\"/>\n  <rect class=\"dark\" x=\"90\" y=\"176\" width=\"40\" height=\"6\" rx=\"3\"/>\n  <path class=\"arrow\" d=\"M40 162 q4 -10 0 -18 M55 162 q4 -10 0 -18 M70 162 q4 -10 0 -18\" stroke=\"#e05a4f\"/>\n  <ellipse class=\"head\" cx=\"55\" cy=\"140\" rx=\"16\" ry=\"9\"/>\n  <text class=\"small\" x=\"55\" y=\"122\" text-anchor=\"middle\">hot pan</text>\n  <path class=\"nerve\" d=\"M70 136 Q120 110 150 95\"/>\n  <polyline class=\"arrow\" points=\"145.6,101.9 150,95 141.9,94.4\"/>\n  <rect class=\"card\" x=\"152\" y=\"72\" width=\"56\" height=\"40\" rx=\"6\"/>\n  <text class=\"label\" x=\"180\" y=\"98\" text-anchor=\"middle\">?</text>\n  <path class=\"nerve\" d=\"M208 100 Q250 120 255 150\"/>\n  <polyline class=\"arrow\" points=\"249.7,143.8 255,150 258.0,142.4\"/>\n  <ellipse class=\"muscle\" cx=\"258\" cy=\"170\" rx=\"28\" ry=\"12\"/>\n  <text class=\"small\" x=\"258\" y=\"198\" text-anchor=\"middle\">arm muscle pulls</text>\n  <text class=\"small\" x=\"258\" y=\"211\" text-anchor=\"middle\">hand away</text>\n  <ellipse class=\"brain\" cx=\"180\" cy=\"26\" rx=\"30\" ry=\"18\"/>\n  <text class=\"small\" x=\"180\" y=\"30\" text-anchor=\"middle\">brain</text>\n  <line class=\"dash\" x1=\"180\" y1=\"70\" x2=\"180\" y2=\"46\"/>\n  <polyline class=\"arrow\" points=\"184.2,53.0 180,46 175.8,53.0\"/>\n  <text class=\"small\" x=\"232\" y=\"54\">feels pain</text>\n  <text class=\"small\" x=\"232\" y=\"66\">a moment later</text>\n  <text class=\"small\" x=\"100\" y=\"100\" text-anchor=\"middle\">nerve</text>\n</svg>", "alt": "Message path for touching a hot pan: skin of the hand, a nerve, a box marked question mark, a nerve back to the arm muscle; the brain gets the message later."}
  },
  {
    id: "g5-sci-body-a-q16",
    prompt: "Odd one out: three of these actions are done by involuntary muscles. Which one is done by voluntary muscles?",
    options: [
      { id: "a", text: "The heart pumping blood" },
      { id: "b", text: "Food moving along the intestines" },
      { id: "c", text: "Pedalling a bicycle" },
      { id: "d", text: "The stomach churning food during sleep" }
    ],
    answerId: "c",
    explanation: "Pedalling is something you decide to do, using the skeletal muscles of your legs. These are voluntary muscles. The heart, stomach, and intestines work on their own.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-a-q17",
    prompt: "Rohan fell and his wrist is swollen. Which test would a doctor use to see if a bone is broken?",
    options: [
      { id: "a", text: "X-ray" },
      { id: "b", text: "Stethoscope check" },
      { id: "c", text: "Thermometer reading" },
      { id: "d", text: "Eye chart test" }
    ],
    answerId: "a",
    explanation: "X-rays pass through soft parts like skin and muscle but are blocked by bones. So an X-ray picture shows the bones clearly, including any crack or break.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-a-q18",
    prompt: "Which child in the picture is carrying the school bag in the healthiest way?",
    options: [
      { id: "a", text: "Child A \u2014 bag on one shoulder" },
      { id: "b", text: "Child B \u2014 bag hanging low near the knees" },
      { id: "c", text: "Child C \u2014 a huge, overfilled bag" },
      { id: "d", text: "Child D \u2014 both straps on, bag close to the back" }
    ],
    answerId: "d",
    explanation: "Using both straps spreads the weight evenly on both shoulders and keeps the backbone straight. A heavy bag on one side makes the body lean and can strain the back.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" width=\"320\" height=\"220\" role=\"img\" aria-label=\"Four children A to D carrying school bags. A: bag on one shoulder, body leaning. B: bag hanging low near the knees. C: a huge overfilled bag. D: both straps on, bag close to the back.\">\n  <style>\n    .part { fill:#f6e7d0; stroke:#333; stroke-width:2; }\n    .bone { fill:#fbf8ef; stroke:#555; stroke-width:2; }\n    .limb { fill:none; stroke:#9a9a9a; stroke-width:6; stroke-linecap:round; }\n    .rib { fill:none; stroke:#777; stroke-width:2.5; stroke-linecap:round; }\n    .muscle { fill:#e88a8a; stroke:#8a2b2b; stroke-width:1.5; }\n    .nerve { fill:none; stroke:#d4a017; stroke-width:3; stroke-linecap:round; }\n    .brain { fill:#f4b6c2; stroke:#8a3b55; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:1.8; fill:none; stroke-linecap:round; stroke-linejoin:round; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .stick { fill:none; stroke:#333; stroke-width:3; stroke-linecap:round; stroke-linejoin:round; }\n    .head { fill:#f6d7b0; stroke:#333; stroke-width:2; }\n    .dark { fill:#333; }\n    .red { fill:#e05a4f; stroke:#333; stroke-width:1.5; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .sky { fill:#9fd3f5; stroke:#2b7bb9; stroke-width:1.5; }\n    .bag { fill:#6a8fd8; stroke:#2a3f73; stroke-width:1.5; }\n    .wood { fill:#c99a6b; stroke:#6b4a2b; stroke-width:1.5; }\n    .grey { fill:#cfcfcf; stroke:#555; stroke-width:1.5; }\n    .white { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#f7d46b; stroke:#333; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <line class=\"dash\" x1=\"80\" y1=\"10\" x2=\"80\" y2=\"210\"/><line class=\"dash\" x1=\"160\" y1=\"10\" x2=\"160\" y2=\"210\"/><line class=\"dash\" x1=\"240\" y1=\"10\" x2=\"240\" y2=\"210\"/>\n  <circle class=\"head\" cx=\"32\" cy=\"67\" r=\"12\"/>\n  <polyline class=\"stick\" points=\"32,79 36.8,130\"/>\n  <polyline class=\"stick\" points=\"36.8,130 32,185\"/>\n  <polyline class=\"stick\" points=\"36.8,130 48,185\"/>\n  <line class=\"arrow\" x1=\"34\" y1=\"72\" x2=\"55\" y2=\"108\"/><rect class=\"bag\" x=\"50\" y=\"104\" width=\"22\" height=\"28\" rx=\"3\"/>\n  <polyline class=\"stick\" points=\"34,82 26,118\"/><polyline class=\"stick\" points=\"34,82 48,110\"/>\n  <circle class=\"head\" cx=\"120\" cy=\"67\" r=\"12\"/>\n  <polyline class=\"stick\" points=\"120,79 120.0,130\"/>\n  <polyline class=\"stick\" points=\"120.0,130 112,185\"/>\n  <polyline class=\"stick\" points=\"120.0,130 128,185\"/>\n  <line class=\"arrow\" x1=\"116\" y1=\"76\" x2=\"104\" y2=\"140\"/><line class=\"arrow\" x1=\"124\" y1=\"76\" x2=\"104\" y2=\"140\"/><rect class=\"bag\" x=\"90\" y=\"138\" width=\"22\" height=\"30\" rx=\"3\"/>\n  <polyline class=\"stick\" points=\"120,82 132,116\"/>\n  <circle class=\"head\" cx=\"208\" cy=\"67\" r=\"12\"/>\n  <polyline class=\"stick\" points=\"208,79 203.2,130\"/>\n  <polyline class=\"stick\" points=\"203.2,130 192,185\"/>\n  <polyline class=\"stick\" points=\"203.2,130 208,185\"/>\n  <rect class=\"bag\" x=\"164\" y=\"70\" width=\"34\" height=\"62\" rx=\"6\"/><text class=\"small\" x=\"181\" y=\"104\" text-anchor=\"middle\" fill=\"#fff\">!!!</text>\n  <polyline class=\"stick\" points=\"206,82 218,116\"/>\n  <circle class=\"head\" cx=\"282\" cy=\"67\" r=\"12\"/>\n  <polyline class=\"stick\" points=\"282,79 282.0,130\"/>\n  <polyline class=\"stick\" points=\"282.0,130 274,185\"/>\n  <polyline class=\"stick\" points=\"282.0,130 290,185\"/>\n  <rect class=\"bag\" x=\"264\" y=\"76\" width=\"16\" height=\"34\" rx=\"3\"/><line class=\"arrow\" x1=\"280\" y1=\"76\" x2=\"288\" y2=\"82\"/><line class=\"arrow\" x1=\"280\" y1=\"106\" x2=\"286\" y2=\"96\"/>\n  <polyline class=\"stick\" points=\"284,84 296,116\"/>\n  <circle class=\"badge\" cx=\"40\" cy=\"204\" r=\"11\"/><text class=\"label\" x=\"40\" y=\"209\" text-anchor=\"middle\">A</text>\n  <circle class=\"badge\" cx=\"120\" cy=\"204\" r=\"11\"/><text class=\"label\" x=\"120\" y=\"209\" text-anchor=\"middle\">B</text>\n  <circle class=\"badge\" cx=\"200\" cy=\"204\" r=\"11\"/><text class=\"label\" x=\"200\" y=\"209\" text-anchor=\"middle\">C</text>\n  <circle class=\"badge\" cx=\"282\" cy=\"204\" r=\"11\"/><text class=\"label\" x=\"282\" y=\"209\" text-anchor=\"middle\">D</text>\n</svg>", "alt": "Four children A to D carrying school bags. A: bag on one shoulder, body leaning. B: bag hanging low near the knees. C: a huge overfilled bag. D: both straps on, bag close to the back."}
  },
  {
    id: "g5-sci-body-a-q19",
    prompt: "In the picture, the yellow spinal cord runs through a tunnel inside a chain of small stacked bones (marked ?). What is this chain of bones called?",
    options: [
      { id: "a", text: "Ribcage" },
      { id: "b", text: "Backbone" },
      { id: "c", text: "Collarbone" },
      { id: "d", text: "Hip bone" }
    ],
    answerId: "b",
    explanation: "The backbone is made of many small ring-shaped bones called vertebrae, stacked one on top of another. The spinal cord runs safely through the tunnel made by their holes, just as the skull protects the brain.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" width=\"320\" height=\"220\" role=\"img\" aria-label=\"A chain of small stacked bones seen from the side, with the yellow spinal cord running down through them, marked with a question mark. A top view shows one ring-shaped bone with the cord in the hole.\">\n  <style>\n    .part { fill:#f6e7d0; stroke:#333; stroke-width:2; }\n    .bone { fill:#fbf8ef; stroke:#555; stroke-width:2; }\n    .limb { fill:none; stroke:#9a9a9a; stroke-width:6; stroke-linecap:round; }\n    .rib { fill:none; stroke:#777; stroke-width:2.5; stroke-linecap:round; }\n    .muscle { fill:#e88a8a; stroke:#8a2b2b; stroke-width:1.5; }\n    .nerve { fill:none; stroke:#d4a017; stroke-width:3; stroke-linecap:round; }\n    .brain { fill:#f4b6c2; stroke:#8a3b55; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:1.8; fill:none; stroke-linecap:round; stroke-linejoin:round; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .stick { fill:none; stroke:#333; stroke-width:3; stroke-linecap:round; stroke-linejoin:round; }\n    .head { fill:#f6d7b0; stroke:#333; stroke-width:2; }\n    .dark { fill:#333; }\n    .red { fill:#e05a4f; stroke:#333; stroke-width:1.5; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .sky { fill:#9fd3f5; stroke:#2b7bb9; stroke-width:1.5; }\n    .bag { fill:#6a8fd8; stroke:#2a3f73; stroke-width:1.5; }\n    .wood { fill:#c99a6b; stroke:#6b4a2b; stroke-width:1.5; }\n    .grey { fill:#cfcfcf; stroke:#555; stroke-width:1.5; }\n    .white { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#f7d46b; stroke:#333; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <rect class=\"bone\" x=\"70\" y=\"30\" width=\"46\" height=\"16\" rx=\"4\"/>\n  <polygon class=\"bone\" points=\"116,33 138,40 116,43\"/>\n  <rect class=\"bone\" x=\"70\" y=\"52\" width=\"46\" height=\"16\" rx=\"4\"/>\n  <polygon class=\"bone\" points=\"116,55 138,62 116,65\"/>\n  <rect class=\"bone\" x=\"70\" y=\"74\" width=\"46\" height=\"16\" rx=\"4\"/>\n  <polygon class=\"bone\" points=\"116,77 138,84 116,87\"/>\n  <rect class=\"bone\" x=\"70\" y=\"96\" width=\"46\" height=\"16\" rx=\"4\"/>\n  <polygon class=\"bone\" points=\"116,99 138,106 116,109\"/>\n  <rect class=\"bone\" x=\"70\" y=\"118\" width=\"46\" height=\"16\" rx=\"4\"/>\n  <polygon class=\"bone\" points=\"116,121 138,128 116,131\"/>\n  <rect class=\"bone\" x=\"70\" y=\"140\" width=\"46\" height=\"16\" rx=\"4\"/>\n  <polygon class=\"bone\" points=\"116,143 138,150 116,153\"/>\n  <rect class=\"bone\" x=\"70\" y=\"162\" width=\"46\" height=\"16\" rx=\"4\"/>\n  <polygon class=\"bone\" points=\"116,165 138,172 116,175\"/>\n  <line class=\"nerve\" x1=\"112\" y1=\"22\" x2=\"112\" y2=\"196\"/>\n  <line class=\"arrow\" x1=\"112\" y1=\"190\" x2=\"170\" y2=\"200\"/>\n  <text class=\"small\" x=\"174\" y=\"204\">spinal cord</text>\n  <path class=\"arrow\" d=\"M58 30 L50 30 L50 182 L58 182\"/>\n  <circle class=\"badge\" cx=\"32\" cy=\"106\" r=\"11\"/><text class=\"label\" x=\"32\" y=\"111\" text-anchor=\"middle\">?</text>\n  <text class=\"small\" x=\"250\" y=\"40\" text-anchor=\"middle\">One bone from the top</text>\n  <ellipse class=\"bone\" cx=\"250\" cy=\"96\" rx=\"40\" ry=\"30\"/>\n  <circle class=\"white\" cx=\"250\" cy=\"104\" r=\"12\"/>\n  <circle cx=\"250\" cy=\"104\" r=\"7\" fill=\"#d4a017\"/>\n  <polygon class=\"bone\" points=\"244,128 256,128 250,150\"/>\n  <text class=\"small\" x=\"250\" y=\"172\" text-anchor=\"middle\">tunnel for the cord</text>\n</svg>", "alt": "A chain of small stacked bones seen from the side, with the yellow spinal cord running down through them, marked with a question mark. A top view shows one ring-shaped bone with the cord in the hole."}
  },
  {
    id: "g5-sci-body-a-q20",
    prompt: "On which sense organ are the taste buds found?",
    options: [
      { id: "a", text: "Tongue" },
      { id: "b", text: "Nose" },
      { id: "c", text: "Skin" },
      { id: "d", text: "Eye" }
    ],
    answerId: "a",
    explanation: "The tongue has tiny taste buds that help us sense sweet, salty, sour, and bitter tastes. The messages then travel through nerves to the brain.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-a-q21",
    prompt: "Muscles can only pull, they cannot push. Why do muscles that move bones usually work in pairs?",
    options: [
      { id: "a", text: "So that one muscle can rest forever while the other works" },
      { id: "b", text: "Because one muscle alone is too small to be seen" },
      { id: "c", text: "So that one muscle pulls a bone one way and the other pulls it back" },
      { id: "d", text: "Because each bone must be joined to exactly two nerves" }
    ],
    answerId: "c",
    explanation: "Since a muscle cannot push, a single muscle could bend a joint but never straighten it again. A partner muscle on the other side pulls the bone back. The biceps and triceps are such a pair.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-a-q22",
    prompt: "Look at the arrows in the two pictures. The knee bends in only one direction, but the hip lets the leg swing forward, backward, and out to the side. Which statement explains this best?",
    options: [
      { id: "a", text: "The knee is a hinge joint, and the hip is a ball-and-socket joint that allows movement in many directions." },
      { id: "b", text: "The knee is a fixed joint, and the hip is a hinge joint." },
      { id: "c", text: "The knee has no muscles, but the hip does." },
      { id: "d", text: "The hip bone is longer than the thigh bone." }
    ],
    answerId: "a",
    explanation: "A hinge joint (knee) moves only back and forth. In a ball-and-socket joint (hip), the round top of the thigh bone turns in a cup, so the leg can move in many directions.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" width=\"320\" height=\"220\" role=\"img\" aria-label=\"Left: a knee with a single curved arrow showing it bends one way. Right: a hip with a ball-shaped bone end in a cup and arrows pointing forward, backward and to the side.\">\n  <style>\n    .part { fill:#f6e7d0; stroke:#333; stroke-width:2; }\n    .bone { fill:#fbf8ef; stroke:#555; stroke-width:2; }\n    .limb { fill:none; stroke:#9a9a9a; stroke-width:6; stroke-linecap:round; }\n    .rib { fill:none; stroke:#777; stroke-width:2.5; stroke-linecap:round; }\n    .muscle { fill:#e88a8a; stroke:#8a2b2b; stroke-width:1.5; }\n    .nerve { fill:none; stroke:#d4a017; stroke-width:3; stroke-linecap:round; }\n    .brain { fill:#f4b6c2; stroke:#8a3b55; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:1.8; fill:none; stroke-linecap:round; stroke-linejoin:round; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .stick { fill:none; stroke:#333; stroke-width:3; stroke-linecap:round; stroke-linejoin:round; }\n    .head { fill:#f6d7b0; stroke:#333; stroke-width:2; }\n    .dark { fill:#333; }\n    .red { fill:#e05a4f; stroke:#333; stroke-width:1.5; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .sky { fill:#9fd3f5; stroke:#2b7bb9; stroke-width:1.5; }\n    .bag { fill:#6a8fd8; stroke:#2a3f73; stroke-width:1.5; }\n    .wood { fill:#c99a6b; stroke:#6b4a2b; stroke-width:1.5; }\n    .grey { fill:#cfcfcf; stroke:#555; stroke-width:1.5; }\n    .white { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#f7d46b; stroke:#333; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <text class=\"label\" x=\"75\" y=\"22\" text-anchor=\"middle\">Knee</text>\n  <line class=\"limb\" x1=\"75\" y1=\"34\" x2=\"75\" y2=\"110\"/>\n  <circle class=\"bone\" cx=\"75\" cy=\"114\" r=\"8\"/>\n  <line class=\"limb\" x1=\"75\" y1=\"120\" x2=\"75\" y2=\"196\"/>\n  <line class=\"limb\" x1=\"78\" y1=\"118\" x2=\"40\" y2=\"182\" stroke-dasharray=\"5 4\" opacity=\"0.6\"/>\n  <path class=\"arrow\" d=\"M80 180 Q70 196 50 186\"/>\n  <polyline class=\"arrow\" points=\"58.0,184.5 50,186 55.1,192.4\"/>\n  <text class=\"small\" x=\"75\" y=\"212\" text-anchor=\"middle\">one direction only</text>\n  <line class=\"dash\" x1=\"160\" y1=\"15\" x2=\"160\" y2=\"205\"/>\n  <text class=\"label\" x=\"240\" y=\"22\" text-anchor=\"middle\">Hip</text>\n  <path class=\"bone\" d=\"M200 60 Q240 40 280 60 L270 80 Q240 66 210 80 Z\"/>\n  <path class=\"part\" d=\"M222 80 A20 20 0 0 0 262 80\" fill=\"#e9dcc2\"/>\n  <circle class=\"bone\" cx=\"242\" cy=\"88\" r=\"15\"/>\n  <line class=\"limb\" x1=\"242\" y1=\"100\" x2=\"242\" y2=\"190\"/>\n  <line class=\"arrow\" x1=\"252\" y1=\"160\" x2=\"290\" y2=\"160\"/>\n  <polyline class=\"arrow\" points=\"283.0,164.2 290,160 283.0,155.8\"/>\n  <line class=\"arrow\" x1=\"232\" y1=\"160\" x2=\"194\" y2=\"160\"/>\n  <polyline class=\"arrow\" points=\"201.0,155.8 194,160 201.0,164.2\"/>\n  <path class=\"arrow\" d=\"M258 120 Q290 110 296 130\"/>\n  <polyline class=\"arrow\" points=\"289.8,124.7 296,130 297.8,122.0\"/>\n  <path class=\"arrow\" d=\"M226 120 Q194 110 188 130\"/>\n  <polyline class=\"arrow\" points=\"186.2,122.0 188,130 194.2,124.7\"/>\n  <text class=\"small\" x=\"240\" y=\"212\" text-anchor=\"middle\">many directions</text>\n</svg>", "alt": "Left: a knee with a single curved arrow showing it bends one way. Right: a hip with a ball-shaped bone end in a cup and arrows pointing forward, backward and to the side."}
  },
  {
    id: "g5-sci-body-a-q23",
    prompt: "A man injures his spinal cord in his lower back. His leg muscles are healthy, but he cannot move his legs. What is the best explanation?",
    options: [
      { id: "a", text: "His leg bones have become too soft." },
      { id: "b", text: "His heart has stopped sending blood to the legs." },
      { id: "c", text: "His leg muscles have changed into involuntary muscles." },
      { id: "d", text: "Messages from his brain cannot travel past the injury to reach the leg muscles." }
    ],
    answerId: "d",
    explanation: "The brain's commands travel down the spinal cord and then along nerves to the muscles. If the spinal cord is damaged, the message is blocked, so the muscles never get the order to move.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-a-q24",
    prompt: "Imagine your skeleton had bones but no movable joints at all. What would happen?",
    options: [
      { id: "a", text: "You would grow taller much faster." },
      { id: "b", text: "Your bones would become soft like rubber." },
      { id: "c", text: "Your heart would stop beating." },
      { id: "d", text: "Your body would be stiff, and you could not bend your arms, legs, or fingers." }
    ],
    answerId: "d",
    explanation: "Movable joints are the places where the skeleton can bend or turn. Without them, the skeleton would be one stiff frame, and muscles would have no joint to move the bones around.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g5-sci-body-b-q01",
    prompt: "In the picture, part 1 is in the head, part 2 runs down the middle of the back, and the thin lines marked 3 branch out to the arms and legs. Together they carry messages around the body. What are parts 1, 2, and 3?",
    options: [
      { id: "a", text: "Brain, spinal cord, and nerves" },
      { id: "b", text: "Heart, lungs, and blood" },
      { id: "c", text: "Bones, joints, and muscles" },
      { id: "d", text: "Stomach, intestines, and liver" }
    ],
    answerId: "a",
    explanation: "The brain is the control centre, the spinal cord is the main message cable down the back, and nerves branch out to every part of the body. Together they make up the nervous system.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" width=\"320\" height=\"220\" role=\"img\" aria-label=\"Outline of a body. Part 1 is in the head, part 2 runs down the middle of the back, and part 3 is many thin lines branching out to the arms and legs.\">\n  <style>\n    .part { fill:#f6e7d0; stroke:#333; stroke-width:2; }\n    .bone { fill:#fbf8ef; stroke:#555; stroke-width:2; }\n    .limb { fill:none; stroke:#9a9a9a; stroke-width:6; stroke-linecap:round; }\n    .rib { fill:none; stroke:#777; stroke-width:2.5; stroke-linecap:round; }\n    .muscle { fill:#e88a8a; stroke:#8a2b2b; stroke-width:1.5; }\n    .nerve { fill:none; stroke:#d4a017; stroke-width:3; stroke-linecap:round; }\n    .brain { fill:#f4b6c2; stroke:#8a3b55; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:1.8; fill:none; stroke-linecap:round; stroke-linejoin:round; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .stick { fill:none; stroke:#333; stroke-width:3; stroke-linecap:round; stroke-linejoin:round; }\n    .head { fill:#f6d7b0; stroke:#333; stroke-width:2; }\n    .dark { fill:#333; }\n    .red { fill:#e05a4f; stroke:#333; stroke-width:1.5; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .sky { fill:#9fd3f5; stroke:#2b7bb9; stroke-width:1.5; }\n    .bag { fill:#6a8fd8; stroke:#2a3f73; stroke-width:1.5; }\n    .wood { fill:#c99a6b; stroke:#6b4a2b; stroke-width:1.5; }\n    .grey { fill:#cfcfcf; stroke:#555; stroke-width:1.5; }\n    .white { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#f7d46b; stroke:#333; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <circle class=\"head\" cx=\"160\" cy=\"36\" r=\"24\" fill-opacity=\"0.35\"/>\n  <path class=\"part\" d=\"M130 64 L190 64 L196 140 L180 140 L176 205 L164 205 L160 150 L156 205 L144 205 L140 140 L124 140 Z\" fill-opacity=\"0.35\"/>\n  <path class=\"part\" d=\"M130 66 L104 128 L112 131 L136 84 Z M190 66 L216 128 L208 131 L184 84 Z\" fill-opacity=\"0.35\"/>\n  <ellipse class=\"brain\" cx=\"160\" cy=\"32\" rx=\"17\" ry=\"12\"/>\n  <line class=\"nerve\" x1=\"160\" y1=\"44\" x2=\"160\" y2=\"140\" stroke-width=\"5\"/>\n  <polyline class=\"nerve\" points=\"160,72 136,82 112,126\" stroke-width=\"2\"/>\n  <polyline class=\"nerve\" points=\"160,72 184,82 208,126\" stroke-width=\"2\"/>\n  <polyline class=\"nerve\" points=\"160,140 150,170 150,202\" stroke-width=\"2\"/>\n  <polyline class=\"nerve\" points=\"160,140 170,170 170,202\" stroke-width=\"2\"/>\n  <line class=\"nerve\" x1=\"160\" y1=\"100\" x2=\"140\" y2=\"112\" stroke-width=\"2\"/><line class=\"nerve\" x1=\"160\" y1=\"100\" x2=\"180\" y2=\"112\" stroke-width=\"2\"/>\n  <line class=\"arrow\" x1=\"177\" y1=\"28\" x2=\"248\" y2=\"28\"/>\n  <circle class=\"badge\" cx=\"260\" cy=\"28\" r=\"11\"/><text class=\"label\" x=\"260\" y=\"33\" text-anchor=\"middle\">1</text>\n  <line class=\"arrow\" x1=\"163\" y1=\"96\" x2=\"248\" y2=\"96\"/>\n  <circle class=\"badge\" cx=\"260\" cy=\"96\" r=\"11\"/><text class=\"label\" x=\"260\" y=\"101\" text-anchor=\"middle\">2</text>\n  <line class=\"arrow\" x1=\"113\" y1=\"122\" x2=\"62\" y2=\"150\"/>\n  <circle class=\"badge\" cx=\"50\" cy=\"156\" r=\"11\"/><text class=\"label\" x=\"50\" y=\"161\" text-anchor=\"middle\">3</text>\n  <line class=\"arrow\" x1=\"171\" y1=\"185\" x2=\"248\" y2=\"185\"/>\n  <circle class=\"badge\" cx=\"260\" cy=\"185\" r=\"11\"/><text class=\"label\" x=\"260\" y=\"190\" text-anchor=\"middle\">3</text>\n</svg>", "alt": "Outline of a body. Part 1 is in the head, part 2 runs down the middle of the back, and part 3 is many thin lines branching out to the arms and legs."}
  },
  {
    id: "g5-sci-body-b-q02",
    prompt: "The tip of your nose and the flap of your ear can be bent gently and spring back. They are supported by:",
    options: [
      { id: "a", text: "Hard bone" },
      { id: "b", text: "Muscle only" },
      { id: "c", text: "Cartilage" },
      { id: "d", text: "Nerves" }
    ],
    answerId: "c",
    explanation: "Cartilage is a firm but bendy material, softer than bone. It gives shape to the outer ear and the tip of the nose, and it also cushions the ends of bones at joints.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-b-q03",
    prompt: "What do ligaments join together?",
    options: [
      { id: "a", text: "Muscle to skin" },
      { id: "b", text: "Muscle to bone" },
      { id: "c", text: "Nerve to brain" },
      { id: "d", text: "Bone to bone" }
    ],
    answerId: "d",
    explanation: "Ligaments are strong bands that hold bones together at a joint. Tendons, not ligaments, join muscles to bones.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-b-q04",
    prompt: "How many pairs of ribs does a human usually have?",
    options: [
      { id: "a", text: "6 pairs" },
      { id: "b", text: "12 pairs" },
      { id: "c", text: "20 pairs" },
      { id: "d", text: "24 pairs" }
    ],
    answerId: "b",
    explanation: "Most people have 12 pairs of ribs, which makes 24 ribs in all. They join the backbone at the back and form the ribcage around the chest.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-b-q05",
    prompt: "What is the special muscle that makes up the walls of the heart called?",
    options: [
      { id: "a", text: "Cardiac muscle" },
      { id: "b", text: "Skeletal muscle" },
      { id: "c", text: "Biceps" },
      { id: "d", text: "Tendon muscle" }
    ],
    answerId: "a",
    explanation: "Heart muscle is called cardiac muscle. It is involuntary, which means it works on its own, and it keeps contracting all through life without getting tired.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-b-q06",
    prompt: "Where in the body are smooth (involuntary) muscles found?",
    options: [
      { id: "a", text: "In the upper arm" },
      { id: "b", text: "In the thigh" },
      { id: "c", text: "In the walls of the stomach and intestines" },
      { id: "d", text: "In the fingers" }
    ],
    answerId: "c",
    explanation: "Smooth muscles line organs like the stomach and intestines. They squeeze slowly to mix food and move it along, without us controlling them.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-b-q07",
    prompt: "The pictures show four joints and the way each one moves. Three of them are the same type of joint. Which is the odd one out?",
    options: [
      { id: "a", text: "A \u2014 elbow" },
      { id: "b", text: "B \u2014 knee" },
      { id: "c", text: "C \u2014 finger" },
      { id: "d", text: "D \u2014 shoulder" }
    ],
    answerId: "d",
    explanation: "The elbow, knee, and finger joints are all hinge joints: they bend and straighten in one direction only, like a door. The shoulder is a ball-and-socket joint, where a round bone end turns in a cup, so the arm can swing in a full circle.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" width=\"320\" height=\"220\" role=\"img\" aria-label=\"Four joint pictures. A: elbow bending one way. B: knee bending one way. C: finger bending one way. D: shoulder with a ball in a cup swinging in a full circle.\">\n  <style>\n    .part { fill:#f6e7d0; stroke:#333; stroke-width:2; }\n    .bone { fill:#fbf8ef; stroke:#555; stroke-width:2; }\n    .limb { fill:none; stroke:#9a9a9a; stroke-width:6; stroke-linecap:round; }\n    .rib { fill:none; stroke:#777; stroke-width:2.5; stroke-linecap:round; }\n    .muscle { fill:#e88a8a; stroke:#8a2b2b; stroke-width:1.5; }\n    .nerve { fill:none; stroke:#d4a017; stroke-width:3; stroke-linecap:round; }\n    .brain { fill:#f4b6c2; stroke:#8a3b55; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:1.8; fill:none; stroke-linecap:round; stroke-linejoin:round; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .stick { fill:none; stroke:#333; stroke-width:3; stroke-linecap:round; stroke-linejoin:round; }\n    .head { fill:#f6d7b0; stroke:#333; stroke-width:2; }\n    .dark { fill:#333; }\n    .red { fill:#e05a4f; stroke:#333; stroke-width:1.5; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .sky { fill:#9fd3f5; stroke:#2b7bb9; stroke-width:1.5; }\n    .bag { fill:#6a8fd8; stroke:#2a3f73; stroke-width:1.5; }\n    .wood { fill:#c99a6b; stroke:#6b4a2b; stroke-width:1.5; }\n    .grey { fill:#cfcfcf; stroke:#555; stroke-width:1.5; }\n    .white { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#f7d46b; stroke:#333; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <rect class=\"card\" x=\"3\" y=\"8\" width=\"74\" height=\"176\" rx=\"6\"/>\n  <text class=\"small\" x=\"40\" y=\"26\" text-anchor=\"middle\">elbow</text>\n  <line class=\"limb\" x1=\"14\" y1=\"130\" x2=\"44\" y2=\"130\"/>\n  <line class=\"limb\" x1=\"46\" y1=\"128\" x2=\"60\" y2=\"80\"/>\n  <circle class=\"bone\" cx=\"45\" cy=\"130\" r=\"6\"/>\n  <path class=\"arrow\" d=\"M68 124 Q72 100 64 86\"/>\n  <polyline class=\"arrow\" points=\"70.6,90.8 64,86 62.9,94.1\"/>\n  <rect class=\"card\" x=\"83\" y=\"8\" width=\"74\" height=\"176\" rx=\"6\"/>\n  <text class=\"small\" x=\"120\" y=\"26\" text-anchor=\"middle\">knee</text>\n  <line class=\"limb\" x1=\"120\" y1=\"40\" x2=\"120\" y2=\"110\"/>\n  <circle class=\"bone\" cx=\"120\" cy=\"114\" r=\"6\"/>\n  <line class=\"limb\" x1=\"121\" y1=\"118\" x2=\"100\" y2=\"168\"/>\n  <path class=\"arrow\" d=\"M134 160 Q128 176 110 176\"/>\n  <polyline class=\"arrow\" points=\"117.0,171.8 110,176 117.0,180.2\"/>\n  <rect class=\"card\" x=\"163\" y=\"8\" width=\"74\" height=\"176\" rx=\"6\"/>\n  <text class=\"small\" x=\"200\" y=\"26\" text-anchor=\"middle\">finger</text>\n  <rect class=\"head\" x=\"176\" y=\"120\" width=\"44\" height=\"40\" rx=\"8\"/>\n  <line class=\"limb\" x1=\"200\" y1=\"120\" x2=\"200\" y2=\"88\" stroke-width=\"7\"/>\n  <circle class=\"bone\" cx=\"200\" cy=\"86\" r=\"5\"/>\n  <line class=\"limb\" x1=\"200\" y1=\"84\" x2=\"218\" y2=\"62\" stroke-width=\"7\"/>\n  <path class=\"arrow\" d=\"M226 80 Q232 64 222 52\"/>\n  <polyline class=\"arrow\" points=\"229.7,54.7 222,52 223.3,60.1\"/>\n  <rect class=\"card\" x=\"243\" y=\"8\" width=\"74\" height=\"176\" rx=\"6\"/>\n  <text class=\"small\" x=\"280\" y=\"26\" text-anchor=\"middle\">shoulder</text>\n  <path class=\"part\" d=\"M262 92 A18 18 0 0 1 298 92\" fill=\"#e9dcc2\"/>\n  <circle class=\"bone\" cx=\"280\" cy=\"98\" r=\"13\"/>\n  <line class=\"limb\" x1=\"280\" y1=\"110\" x2=\"280\" y2=\"164\"/>\n  <circle class=\"arrow\" cx=\"280\" cy=\"98\" r=\"30\" stroke-dasharray=\"6 4\"/>\n  <polyline class=\"arrow\" points=\"305.8,91.0 310,98 314.2,91.0\"/>\n  <circle class=\"badge\" cx=\"40\" cy=\"202\" r=\"11\"/><text class=\"label\" x=\"40\" y=\"207\" text-anchor=\"middle\">A</text>\n  <circle class=\"badge\" cx=\"120\" cy=\"202\" r=\"11\"/><text class=\"label\" x=\"120\" y=\"207\" text-anchor=\"middle\">B</text>\n  <circle class=\"badge\" cx=\"200\" cy=\"202\" r=\"11\"/><text class=\"label\" x=\"200\" y=\"207\" text-anchor=\"middle\">C</text>\n  <circle class=\"badge\" cx=\"280\" cy=\"202\" r=\"11\"/><text class=\"label\" x=\"280\" y=\"207\" text-anchor=\"middle\">D</text>\n</svg>", "alt": "Four joint pictures. A: elbow bending one way. B: knee bending one way. C: finger bending one way. D: shoulder with a ball in a cup swinging in a full circle."}
  },
  {
    id: "g5-sci-body-b-q08",
    prompt: "Kabir made the model shown: a ball fixed on the end of a stick sits inside a cup, and the stick can swing forward, backward, sideways, and round. Which two joints in our body does his model copy?",
    options: [
      { id: "a", text: "Knee and elbow" },
      { id: "b", text: "Shoulder and hip" },
      { id: "c", text: "Neck and skull" },
      { id: "d", text: "Elbow and finger" }
    ],
    answerId: "b",
    explanation: "The model is a ball-and-socket joint. In the shoulder and the hip, the round top of the arm bone or thigh bone fits into a cup-shaped hollow, so the limb can move in many directions. The knee, elbow, and finger are hinge joints; the neck has a pivot joint; the skull has fixed joints.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" width=\"320\" height=\"220\" role=\"img\" aria-label=\"A model: a ball fixed on the end of a stick sits inside a cup, with curved arrows showing the stick can swing in many directions.\">\n  <style>\n    .part { fill:#f6e7d0; stroke:#333; stroke-width:2; }\n    .bone { fill:#fbf8ef; stroke:#555; stroke-width:2; }\n    .limb { fill:none; stroke:#9a9a9a; stroke-width:6; stroke-linecap:round; }\n    .rib { fill:none; stroke:#777; stroke-width:2.5; stroke-linecap:round; }\n    .muscle { fill:#e88a8a; stroke:#8a2b2b; stroke-width:1.5; }\n    .nerve { fill:none; stroke:#d4a017; stroke-width:3; stroke-linecap:round; }\n    .brain { fill:#f4b6c2; stroke:#8a3b55; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:1.8; fill:none; stroke-linecap:round; stroke-linejoin:round; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .stick { fill:none; stroke:#333; stroke-width:3; stroke-linecap:round; stroke-linejoin:round; }\n    .head { fill:#f6d7b0; stroke:#333; stroke-width:2; }\n    .dark { fill:#333; }\n    .red { fill:#e05a4f; stroke:#333; stroke-width:1.5; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .sky { fill:#9fd3f5; stroke:#2b7bb9; stroke-width:1.5; }\n    .bag { fill:#6a8fd8; stroke:#2a3f73; stroke-width:1.5; }\n    .wood { fill:#c99a6b; stroke:#6b4a2b; stroke-width:1.5; }\n    .grey { fill:#cfcfcf; stroke:#555; stroke-width:1.5; }\n    .white { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#f7d46b; stroke:#333; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <path class=\"wood\" d=\"M100 60 L220 60 L220 76 Q160 70 100 76 Z\"/>\n  <path class=\"sky\" d=\"M128 74 Q128 120 160 120 Q192 120 192 74 Z\"/>\n  <text class=\"small\" x=\"240\" y=\"72\">cup</text>\n  <circle class=\"red\" cx=\"160\" cy=\"96\" r=\"22\"/>\n  <text class=\"small\" x=\"160\" y=\"100\" text-anchor=\"middle\" fill=\"#fff\">ball</text>\n  <rect class=\"wood\" x=\"154\" y=\"116\" width=\"12\" height=\"80\"/>\n  <text class=\"small\" x=\"176\" y=\"180\">stick</text>\n  <path class=\"arrow\" d=\"M120 180 Q160 214 200 180\"/>\n  <polyline class=\"arrow\" points=\"127.9,182.0 120,180 122.0,187.9\"/>\n  <polyline class=\"arrow\" points=\"198.0,187.9 200,180 192.1,182.0\"/>\n  <path class=\"arrow\" d=\"M100 130 Q86 160 104 190\"/>\n  <polyline class=\"arrow\" points=\"96.6,186.5 104,190 103.6,181.8\"/>\n  <path class=\"arrow\" d=\"M220 130 Q234 160 216 190\"/>\n  <polyline class=\"arrow\" points=\"216.4,181.8 216,190 223.4,186.5\"/>\n  <text class=\"small\" x=\"160\" y=\"30\" text-anchor=\"middle\">Kabir's joint model</text>\n  <text class=\"small\" x=\"160\" y=\"44\" text-anchor=\"middle\">swings forward, back, sideways, round</text>\n</svg>", "alt": "A model: a ball fixed on the end of a stick sits inside a cup, with curved arrows showing the stick can swing in many directions."}
  },
  {
    id: "g5-sci-body-b-q09",
    prompt: "Some bones have a soft material inside them that makes new blood cells. What is it called?",
    options: [
      { id: "a", text: "Bone marrow" },
      { id: "b", text: "Cartilage" },
      { id: "c", text: "Ligament" },
      { id: "d", text: "Tendon" }
    ],
    answerId: "a",
    explanation: "Bone marrow is a soft tissue found inside many bones. It works like a factory, making new blood cells for the body.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-b-q10",
    prompt: "Which vitamin does our skin make in sunlight, helping the body use calcium for strong bones?",
    options: [
      { id: "a", text: "Vitamin A" },
      { id: "b", text: "Vitamin C" },
      { id: "c", text: "Vitamin D" },
      { id: "d", text: "Vitamin K" }
    ],
    answerId: "c",
    explanation: "When gentle sunlight falls on the skin, the body makes vitamin D. Vitamin D helps the body take in and use calcium, which keeps bones hard and strong.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-b-q11",
    prompt: "In which part of the body is the smallest bone found?",
    options: [
      { id: "a", text: "Little finger" },
      { id: "b", text: "Little toe" },
      { id: "c", text: "Nose" },
      { id: "d", text: "Ear" }
    ],
    answerId: "d",
    explanation: "The smallest bone, called the stapes, is deep inside the ear. It is about the size of a grain of rice and helps pass sound towards the inner ear.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-b-q12",
    prompt: "A dog barks behind Sam, and he turns around. Using the mixed-up tiles in the picture, which order shows how the message travels?",
    options: [
      { id: "a", text: "Brain \u2192 ear \u2192 nerves \u2192 muscles" },
      { id: "b", text: "Ear \u2192 nerves \u2192 brain \u2192 nerves \u2192 muscles" },
      { id: "c", text: "Muscles \u2192 nerves \u2192 brain \u2192 ear" },
      { id: "d", text: "Ear \u2192 muscles \u2192 brain \u2192 nerves" }
    ],
    answerId: "b",
    explanation: "The ear picks up the sound and sends a message along nerves to the brain. The brain decides to turn and sends a command along other nerves to the neck and body muscles.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" width=\"320\" height=\"220\" role=\"img\" aria-label=\"A dog barks behind a boy, Sam, who turns around. Below are four mixed-up tiles: brain, ear, muscles, and nerves.\">\n  <style>\n    .part { fill:#f6e7d0; stroke:#333; stroke-width:2; }\n    .bone { fill:#fbf8ef; stroke:#555; stroke-width:2; }\n    .limb { fill:none; stroke:#9a9a9a; stroke-width:6; stroke-linecap:round; }\n    .rib { fill:none; stroke:#777; stroke-width:2.5; stroke-linecap:round; }\n    .muscle { fill:#e88a8a; stroke:#8a2b2b; stroke-width:1.5; }\n    .nerve { fill:none; stroke:#d4a017; stroke-width:3; stroke-linecap:round; }\n    .brain { fill:#f4b6c2; stroke:#8a3b55; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:1.8; fill:none; stroke-linecap:round; stroke-linejoin:round; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .stick { fill:none; stroke:#333; stroke-width:3; stroke-linecap:round; stroke-linejoin:round; }\n    .head { fill:#f6d7b0; stroke:#333; stroke-width:2; }\n    .dark { fill:#333; }\n    .red { fill:#e05a4f; stroke:#333; stroke-width:1.5; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .sky { fill:#9fd3f5; stroke:#2b7bb9; stroke-width:1.5; }\n    .bag { fill:#6a8fd8; stroke:#2a3f73; stroke-width:1.5; }\n    .wood { fill:#c99a6b; stroke:#6b4a2b; stroke-width:1.5; }\n    .grey { fill:#cfcfcf; stroke:#555; stroke-width:1.5; }\n    .white { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#f7d46b; stroke:#333; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <ellipse class=\"wood\" cx=\"50\" cy=\"66\" rx=\"28\" ry=\"16\"/>\n  <circle class=\"wood\" cx=\"82\" cy=\"52\" r=\"12\"/>\n  <line class=\"stick\" x1=\"34\" y1=\"78\" x2=\"34\" y2=\"94\"/><line class=\"stick\" x1=\"66\" y1=\"78\" x2=\"66\" y2=\"94\"/>\n  <circle class=\"dark\" cx=\"86\" cy=\"50\" r=\"2\"/>\n  <path class=\"arrow\" d=\"M100 44 q8 8 0 16 M110 38 q12 14 0 28 M120 32 q16 20 0 40\"/>\n  <text class=\"small\" x=\"60\" y=\"22\" text-anchor=\"middle\">Woof!</text>\n  <circle class=\"head\" cx=\"200\" cy=\"40\" r=\"15\"/>\n  <ellipse class=\"head\" cx=\"186\" cy=\"42\" rx=\"4\" ry=\"7\"/>\n  <polyline class=\"stick\" points=\"200,55 200,82\"/><polyline class=\"stick\" points=\"200,82 192,100\"/><polyline class=\"stick\" points=\"200,82 208,100\"/>\n  <path class=\"arrow\" d=\"M224 30 Q244 40 230 60\"/>\n  <polyline class=\"arrow\" points=\"231.3,51.9 230,60 237.7,57.3\"/>\n  <text class=\"small\" x=\"250\" y=\"34\">turns</text>\n  <text class=\"small\" x=\"160\" y=\"122\" text-anchor=\"middle\">Mixed-up tiles</text>\n  <rect class=\"card\" x=\"14\" y=\"132\" width=\"64\" height=\"40\" rx=\"8\"/>\n  <ellipse class=\"brain\" cx=\"46\" cy=\"152\" rx=\"20\" ry=\"13\"/>\n  <text class=\"label\" x=\"46.0\" y=\"192\" text-anchor=\"middle\"></text>\n  <text class=\"small\" x=\"46\" y=\"190\" text-anchor=\"middle\">brain</text>\n  <rect class=\"card\" x=\"90\" y=\"132\" width=\"64\" height=\"40\" rx=\"8\"/><ellipse class=\"head\" cx=\"122\" cy=\"152\" rx=\"9\" ry=\"14\"/><text class=\"small\" x=\"122\" y=\"190\" text-anchor=\"middle\">ear</text>\n  <rect class=\"card\" x=\"166\" y=\"132\" width=\"64\" height=\"40\" rx=\"8\"/><ellipse class=\"muscle\" cx=\"198\" cy=\"152\" rx=\"22\" ry=\"10\"/><text class=\"small\" x=\"198\" y=\"190\" text-anchor=\"middle\">muscles</text>\n  <rect class=\"card\" x=\"242\" y=\"132\" width=\"64\" height=\"40\" rx=\"8\"/><path class=\"nerve\" d=\"M252 152 Q262 140 274 152 T296 152\"/><text class=\"small\" x=\"274\" y=\"190\" text-anchor=\"middle\">nerves</text>\n  <text class=\"small\" x=\"160\" y=\"212\" text-anchor=\"middle\">(nerves can be used twice)</text>\n</svg>", "alt": "A dog barks behind a boy, Sam, who turns around. Below are four mixed-up tiles: brain, ear, muscles, and nerves."}
  },
  {
    id: "g5-sci-body-b-q13",
    prompt: "Ravi broke a bone in his arm, and the doctor put it in a plaster cast. What is the main purpose of the cast?",
    options: [
      { id: "a", text: "To keep the broken bone still so it can join back in the right position" },
      { id: "b", text: "To give the bone extra calcium through the skin" },
      { id: "c", text: "To stop the muscles from ever moving again" },
      { id: "d", text: "To keep the arm warm in winter" }
    ],
    answerId: "a",
    explanation: "Bones are living and can heal themselves. The cast holds the broken pieces still in the correct position so new bone can grow and join them properly.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-b-q14",
    prompt: "Your stomach keeps digesting food even while you are fast asleep. What does this tell you about stomach muscles?",
    options: [
      { id: "a", text: "They are voluntary muscles." },
      { id: "b", text: "They are joined to bones by tendons." },
      { id: "c", text: "They are involuntary muscles." },
      { id: "d", text: "They only work when you are awake." }
    ],
    answerId: "c",
    explanation: "Muscles that work without our control, even during sleep, are involuntary. The stomach's smooth muscles keep churning food whether we think about it or not.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-b-q15",
    prompt: "The web shows four cards around a skeleton. Which card is NOT a job of the skeleton?",
    options: [
      { id: "a", text: "Card A \u2014 giving the body its shape" },
      { id: "b", text: "Card B \u2014 protecting soft organs like the brain" },
      { id: "c", text: "Card C \u2014 helping the body move" },
      { id: "d", text: "Card D \u2014 digesting the food we eat" }
    ],
    answerId: "d",
    explanation: "The skeleton gives shape, support, and protection, and works with muscles to move the body. Digesting food is the job of the digestive system, not the skeleton.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" width=\"320\" height=\"220\" role=\"img\" aria-label=\"A web with a small skeleton in the middle joined to four cards: A gives shape, B protects the brain, C helps us move, D digests food.\">\n  <style>\n    .part { fill:#f6e7d0; stroke:#333; stroke-width:2; }\n    .bone { fill:#fbf8ef; stroke:#555; stroke-width:2; }\n    .limb { fill:none; stroke:#9a9a9a; stroke-width:6; stroke-linecap:round; }\n    .rib { fill:none; stroke:#777; stroke-width:2.5; stroke-linecap:round; }\n    .muscle { fill:#e88a8a; stroke:#8a2b2b; stroke-width:1.5; }\n    .nerve { fill:none; stroke:#d4a017; stroke-width:3; stroke-linecap:round; }\n    .brain { fill:#f4b6c2; stroke:#8a3b55; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:1.8; fill:none; stroke-linecap:round; stroke-linejoin:round; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .stick { fill:none; stroke:#333; stroke-width:3; stroke-linecap:round; stroke-linejoin:round; }\n    .head { fill:#f6d7b0; stroke:#333; stroke-width:2; }\n    .dark { fill:#333; }\n    .red { fill:#e05a4f; stroke:#333; stroke-width:1.5; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .sky { fill:#9fd3f5; stroke:#2b7bb9; stroke-width:1.5; }\n    .bag { fill:#6a8fd8; stroke:#2a3f73; stroke-width:1.5; }\n    .wood { fill:#c99a6b; stroke:#6b4a2b; stroke-width:1.5; }\n    .grey { fill:#cfcfcf; stroke:#555; stroke-width:1.5; }\n    .white { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#f7d46b; stroke:#333; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <line class=\"arrow\" x1=\"160\" y1=\"110\" x2=\"70\" y2=\"50\"/><line class=\"arrow\" x1=\"160\" y1=\"110\" x2=\"250\" y2=\"50\"/>\n  <line class=\"arrow\" x1=\"160\" y1=\"110\" x2=\"70\" y2=\"170\"/><line class=\"arrow\" x1=\"160\" y1=\"110\" x2=\"250\" y2=\"170\"/>\n  <circle class=\"white\" cx=\"160\" cy=\"110\" r=\"34\"/>\n  <circle class=\"bone\" cx=\"160\" cy=\"90\" r=\"8\"/><line class=\"rib\" x1=\"160\" y1=\"98\" x2=\"160\" y2=\"124\"/>\n  <path class=\"rib\" d=\"M152 104 Q144 108 148 116 M168 104 Q176 108 172 116\"/>\n  <line class=\"rib\" x1=\"160\" y1=\"124\" x2=\"152\" y2=\"138\"/><line class=\"rib\" x1=\"160\" y1=\"124\" x2=\"168\" y2=\"138\"/>\n  <rect class=\"card\" x=\"16\" y=\"20\" width=\"108\" height=\"56\" rx=\"8\"/>\n  <path class=\"dash\" d=\"M36 66 L36 42 Q44 30 52 42 L52 66\"/><text class=\"small\" x=\"88\" y=\"54\" text-anchor=\"middle\">gives shape</text>\n  <rect class=\"card\" x=\"196\" y=\"20\" width=\"108\" height=\"56\" rx=\"8\"/>\n  <ellipse class=\"brain\" cx=\"222\" cy=\"48\" rx=\"12\" ry=\"9\"/><path class=\"arrow\" d=\"M206 50 Q206 30 222 30 Q238 30 238 50\"/><text class=\"small\" x=\"276\" y=\"54\" text-anchor=\"middle\">protects</text>\n  <rect class=\"card\" x=\"16\" y=\"144\" width=\"108\" height=\"56\" rx=\"8\"/>\n  <circle class=\"head\" cx=\"38\" cy=\"158\" r=\"5\"/><polyline class=\"stick\" points=\"38,163 38,178 30,192\"/><polyline class=\"stick\" points=\"38,178 48,188\"/><text class=\"small\" x=\"86\" y=\"178\" text-anchor=\"middle\">helps move</text>\n  <rect class=\"card\" x=\"196\" y=\"144\" width=\"108\" height=\"56\" rx=\"8\"/>\n  <path class=\"muscle\" d=\"M212 158 Q236 150 236 170 Q236 192 214 186 Q222 176 212 158 Z\"/><text class=\"small\" x=\"272\" y=\"178\" text-anchor=\"middle\">digests food</text>\n  <circle class=\"badge\" cx=\"16\" cy=\"20\" r=\"11\"/><text class=\"label\" x=\"16\" y=\"25\" text-anchor=\"middle\">A</text>\n  <circle class=\"badge\" cx=\"304\" cy=\"20\" r=\"11\"/><text class=\"label\" x=\"304\" y=\"25\" text-anchor=\"middle\">B</text>\n  <circle class=\"badge\" cx=\"16\" cy=\"200\" r=\"11\"/><text class=\"label\" x=\"16\" y=\"205\" text-anchor=\"middle\">C</text>\n  <circle class=\"badge\" cx=\"304\" cy=\"200\" r=\"11\"/><text class=\"label\" x=\"304\" y=\"205\" text-anchor=\"middle\">D</text>\n</svg>", "alt": "A web with a small skeleton in the middle joined to four cards: A gives shape, B protects the brain, C helps us move, D digests food."}
  },
  {
    id: "g5-sci-body-b-q16",
    prompt: "After a long race, Priya's leg muscles feel tired and sore. Which type of muscle was working hardest?",
    options: [
      { id: "a", text: "Cardiac muscle" },
      { id: "b", text: "Skeletal (voluntary) muscle" },
      { id: "c", text: "Smooth muscle of the stomach" },
      { id: "d", text: "Muscles of the intestines" }
    ],
    answerId: "b",
    explanation: "Running uses the skeletal muscles of the legs, which pull on the bones to move them. These voluntary muscles can get tired after hard work and need rest.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-b-q17",
    prompt: "Look at children P and Q doing their homework. Which statement is correct?",
    options: [
      { id: "a", text: "Q's posture is better: back straight, feet flat on the floor, and the book at a comfortable distance." },
      { id: "b", text: "P's posture is better, because the face close to the book helps reading." },
      { id: "c", text: "P and Q are equally good for the back." },
      { id: "d", text: "P's posture is better, because bending low saves energy." }
    ],
    answerId: "a",
    explanation: "Q sits with the backbone in its natural straight shape and feet resting on the floor, and keeps the book at a proper distance. P's curved back and face close to the book strain the back, neck, and eyes if done for a long time.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" width=\"320\" height=\"220\" role=\"img\" aria-label=\"Two children doing homework at desks. Child P slouches with a curved back and face very close to the book. Child Q sits with a straight back, feet flat on the floor and the book at a comfortable distance.\">\n  <style>\n    .part { fill:#f6e7d0; stroke:#333; stroke-width:2; }\n    .bone { fill:#fbf8ef; stroke:#555; stroke-width:2; }\n    .limb { fill:none; stroke:#9a9a9a; stroke-width:6; stroke-linecap:round; }\n    .rib { fill:none; stroke:#777; stroke-width:2.5; stroke-linecap:round; }\n    .muscle { fill:#e88a8a; stroke:#8a2b2b; stroke-width:1.5; }\n    .nerve { fill:none; stroke:#d4a017; stroke-width:3; stroke-linecap:round; }\n    .brain { fill:#f4b6c2; stroke:#8a3b55; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:1.8; fill:none; stroke-linecap:round; stroke-linejoin:round; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .stick { fill:none; stroke:#333; stroke-width:3; stroke-linecap:round; stroke-linejoin:round; }\n    .head { fill:#f6d7b0; stroke:#333; stroke-width:2; }\n    .dark { fill:#333; }\n    .red { fill:#e05a4f; stroke:#333; stroke-width:1.5; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .sky { fill:#9fd3f5; stroke:#2b7bb9; stroke-width:1.5; }\n    .bag { fill:#6a8fd8; stroke:#2a3f73; stroke-width:1.5; }\n    .wood { fill:#c99a6b; stroke:#6b4a2b; stroke-width:1.5; }\n    .grey { fill:#cfcfcf; stroke:#555; stroke-width:1.5; }\n    .white { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#f7d46b; stroke:#333; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <line class=\"dash\" x1=\"160\" y1=\"10\" x2=\"160\" y2=\"210\"/>\n  <rect class=\"wood\" x=\"88\" y=\"110\" width=\"60\" height=\"8\"/><line class=\"stick\" x1=\"140\" y1=\"118\" x2=\"140\" y2=\"190\"/>\n  <rect class=\"white\" x=\"96\" y=\"104\" width=\"22\" height=\"6\"/>\n  <rect class=\"wood\" x=\"20\" y=\"140\" width=\"40\" height=\"6\"/><line class=\"stick\" x1=\"24\" y1=\"146\" x2=\"24\" y2=\"190\"/><line class=\"stick\" x1=\"56\" y1=\"146\" x2=\"56\" y2=\"190\"/>\n  <path class=\"stick\" d=\"M40 138 Q46 96 92 92\" stroke=\"#e05a4f\"/>\n  <circle class=\"head\" cx=\"102\" cy=\"92\" r=\"12\"/>\n  <polyline class=\"stick\" points=\"40,138 72,140 70,186\"/>\n  <polyline class=\"stick\" points=\"70,104 96,108\"/>\n  <text class=\"small\" x=\"62\" y=\"70\" text-anchor=\"middle\" fill=\"#b0302a\">curved back</text>\n  <circle class=\"badge\" cx=\"80\" cy=\"204\" r=\"11\"/><text class=\"label\" x=\"80\" y=\"209\" text-anchor=\"middle\">P</text>\n  <rect class=\"wood\" x=\"246\" y=\"120\" width=\"60\" height=\"8\"/><line class=\"stick\" x1=\"298\" y1=\"128\" x2=\"298\" y2=\"190\"/>\n  <polygon class=\"white\" points=\"252,120 270,102 276,106 260,120\"/>\n  <rect class=\"wood\" x=\"184\" y=\"140\" width=\"40\" height=\"6\"/><line class=\"stick\" x1=\"188\" y1=\"146\" x2=\"188\" y2=\"190\"/><line class=\"stick\" x1=\"220\" y1=\"146\" x2=\"220\" y2=\"190\"/>\n  <line class=\"stick\" x1=\"204\" y1=\"138\" x2=\"206\" y2=\"78\" stroke=\"#3a8a2a\"/>\n  <circle class=\"head\" cx=\"208\" cy=\"64\" r=\"12\"/>\n  <polyline class=\"stick\" points=\"204,138 236,140 236,190 248,190\"/>\n  <polyline class=\"stick\" points=\"206,96 236,112 254,116\"/>\n  <text class=\"small\" x=\"186\" y=\"40\" fill=\"#2a6a1a\">straight back</text>\n  <text class=\"small\" x=\"250\" y=\"204\">feet flat</text>\n  <circle class=\"badge\" cx=\"208\" cy=\"204\" r=\"11\"/><text class=\"label\" x=\"208\" y=\"209\" text-anchor=\"middle\">Q</text>\n</svg>", "alt": "Two children doing homework at desks. Child P slouches with a curved back and face very close to the book. Child Q sits with a straight back, feet flat on the floor and the book at a comfortable distance."}
  },
  {
    id: "g5-sci-body-b-q18",
    prompt: "Which joint is matched correctly with its body part?",
    options: [
      { id: "a", text: "Knee \u2013 pivot joint" },
      { id: "b", text: "Neck \u2013 hinge joint" },
      { id: "c", text: "Skull \u2013 fixed joint" },
      { id: "d", text: "Shoulder \u2013 hinge joint" }
    ],
    answerId: "c",
    explanation: "Skull bones are joined by fixed joints that do not move. The knee is a hinge joint, the neck has a pivot joint, and the shoulder is a ball-and-socket joint.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-b-q19",
    prompt: "Wearing a helmet while cycling mainly protects which parts of the body?",
    options: [
      { id: "a", text: "Ribcage and lungs" },
      { id: "b", text: "Backbone and spinal cord" },
      { id: "c", text: "Knees and elbows" },
      { id: "d", text: "Skull and brain" }
    ],
    answerId: "d",
    explanation: "A helmet adds an extra cushioned layer over the skull. In a fall, it absorbs the shock and helps protect the brain, which controls the whole body.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-b-q20",
    prompt: "Tara is blindfolded and pinches her nose shut, as shown. She eats small cubes of apple and raw potato and finds it hard to tell them apart. What does this experiment show?",
    options: [
      { id: "a", text: "The tongue cannot taste anything at all." },
      { id: "b", text: "The sense of smell helps us recognise the flavour of food." },
      { id: "c", text: "Apples and potatoes are the same food." },
      { id: "d", text: "Our eyes are the organ of taste." }
    ],
    answerId: "b",
    explanation: "Much of what we call \"flavour\" comes from smell. With the nose blocked, the tongue alone gets less information, so the brain finds it harder to tell similar foods apart.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" width=\"320\" height=\"220\" role=\"img\" aria-label=\"A blindfolded girl pinches her nose shut while tasting. Two plates hold a cube of apple and a cube of raw potato, each marked with a question mark.\">\n  <style>\n    .part { fill:#f6e7d0; stroke:#333; stroke-width:2; }\n    .bone { fill:#fbf8ef; stroke:#555; stroke-width:2; }\n    .limb { fill:none; stroke:#9a9a9a; stroke-width:6; stroke-linecap:round; }\n    .rib { fill:none; stroke:#777; stroke-width:2.5; stroke-linecap:round; }\n    .muscle { fill:#e88a8a; stroke:#8a2b2b; stroke-width:1.5; }\n    .nerve { fill:none; stroke:#d4a017; stroke-width:3; stroke-linecap:round; }\n    .brain { fill:#f4b6c2; stroke:#8a3b55; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:1.8; fill:none; stroke-linecap:round; stroke-linejoin:round; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .stick { fill:none; stroke:#333; stroke-width:3; stroke-linecap:round; stroke-linejoin:round; }\n    .head { fill:#f6d7b0; stroke:#333; stroke-width:2; }\n    .dark { fill:#333; }\n    .red { fill:#e05a4f; stroke:#333; stroke-width:1.5; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .sky { fill:#9fd3f5; stroke:#2b7bb9; stroke-width:1.5; }\n    .bag { fill:#6a8fd8; stroke:#2a3f73; stroke-width:1.5; }\n    .wood { fill:#c99a6b; stroke:#6b4a2b; stroke-width:1.5; }\n    .grey { fill:#cfcfcf; stroke:#555; stroke-width:1.5; }\n    .white { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#f7d46b; stroke:#333; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <circle class=\"head\" cx=\"110\" cy=\"80\" r=\"40\"/>\n  <rect class=\"dark\" x=\"68\" y=\"62\" width=\"84\" height=\"14\" rx=\"4\"/>\n  <text class=\"small\" x=\"110\" y=\"30\" text-anchor=\"middle\">blindfold</text><line class=\"arrow\" x1=\"110\" y1=\"34\" x2=\"110\" y2=\"60\"/>\n  <path class=\"arrow\" d=\"M100 108 Q110 116 120 108\"/>\n  <polygon class=\"head\" points=\"110,80 104,96 116,96\"/>\n  <line class=\"stick\" x1=\"117\" y1=\"96\" x2=\"150\" y2=\"160\"/><line class=\"stick\" x1=\"103\" y1=\"96\" x2=\"70\" y2=\"160\"/>\n  <ellipse class=\"head\" cx=\"118\" cy=\"94\" rx=\"5\" ry=\"7\"/><ellipse class=\"head\" cx=\"102\" cy=\"94\" rx=\"5\" ry=\"7\"/>\n  <text class=\"small\" x=\"160\" y=\"88\">fingers pinch</text><text class=\"small\" x=\"160\" y=\"100\">the nose shut</text>\n  <ellipse class=\"white\" cx=\"210\" cy=\"180\" rx=\"40\" ry=\"12\"/><rect class=\"yellow\" x=\"198\" y=\"160\" width=\"22\" height=\"18\" fill=\"#fff6d8\"/>\n  <ellipse class=\"white\" cx=\"280\" cy=\"180\" rx=\"34\" ry=\"12\"/><rect class=\"yellow\" x=\"270\" y=\"160\" width=\"22\" height=\"18\" fill=\"#f1e2b0\"/>\n  <text class=\"small\" x=\"210\" y=\"208\" text-anchor=\"middle\">apple?</text><text class=\"small\" x=\"281\" y=\"208\" text-anchor=\"middle\">potato?</text>\n  <text class=\"label\" x=\"210\" y=\"150\" text-anchor=\"middle\">?</text><text class=\"label\" x=\"281\" y=\"150\" text-anchor=\"middle\">?</text>\n</svg>", "alt": "A blindfolded girl pinches her nose shut while tasting. Two plates hold a cube of apple and a cube of raw potato, each marked with a question mark."}
  },
  {
    id: "g5-sci-body-b-q21",
    prompt: "The picture shows a skull with zig-zag lines where its bones meet, and a part labelled P that moves. Which statement is correct?",
    options: [
      { id: "a", text: "The zig-zag lines are fixed joints, and P (the lower jaw) is the only skull bone that moves, so we can chew and talk." },
      { id: "b", text: "The zig-zag lines are cracks caused by an injury." },
      { id: "c", text: "All the skull bones move a little each time we chew." },
      { id: "d", text: "P is joined to the skull by a fixed joint." }
    ],
    answerId: "a",
    explanation: "The zig-zag lines are fixed joints, where skull bones lock together like puzzle pieces to make a strong, solid case for the soft brain. The lower jaw (P) is the only skull bone that moves, which lets us chew and talk.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" width=\"320\" height=\"220\" role=\"img\" aria-label=\"Side view of a skull with zig-zag lines across the top where the skull bones meet, and the lower jaw labelled P with a curved arrow showing it opening and closing.\">\n  <style>\n    .part { fill:#f6e7d0; stroke:#333; stroke-width:2; }\n    .bone { fill:#fbf8ef; stroke:#555; stroke-width:2; }\n    .limb { fill:none; stroke:#9a9a9a; stroke-width:6; stroke-linecap:round; }\n    .rib { fill:none; stroke:#777; stroke-width:2.5; stroke-linecap:round; }\n    .muscle { fill:#e88a8a; stroke:#8a2b2b; stroke-width:1.5; }\n    .nerve { fill:none; stroke:#d4a017; stroke-width:3; stroke-linecap:round; }\n    .brain { fill:#f4b6c2; stroke:#8a3b55; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:1.8; fill:none; stroke-linecap:round; stroke-linejoin:round; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .stick { fill:none; stroke:#333; stroke-width:3; stroke-linecap:round; stroke-linejoin:round; }\n    .head { fill:#f6d7b0; stroke:#333; stroke-width:2; }\n    .dark { fill:#333; }\n    .red { fill:#e05a4f; stroke:#333; stroke-width:1.5; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .sky { fill:#9fd3f5; stroke:#2b7bb9; stroke-width:1.5; }\n    .bag { fill:#6a8fd8; stroke:#2a3f73; stroke-width:1.5; }\n    .wood { fill:#c99a6b; stroke:#6b4a2b; stroke-width:1.5; }\n    .grey { fill:#cfcfcf; stroke:#555; stroke-width:1.5; }\n    .white { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#f7d46b; stroke:#333; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <path class=\"bone\" d=\"M80 130 Q60 40 150 30 Q240 30 240 110 L232 140 L200 146 L196 160 L120 160 L112 140 Z\"/>\n  <polyline class=\"arrow\" points=\"100,72 112,62 124,72 136,62 148,72 160,62 172,72 184,62 196,72 208,62 220,72\" stroke=\"#8a5a2b\"/>\n  <polyline class=\"arrow\" points=\"160,40 152,50 164,58 154,66\" stroke=\"#8a5a2b\"/>\n  <circle class=\"dark\" cx=\"200\" cy=\"104\" r=\"14\"/>\n  <path class=\"dark\" d=\"M226 120 L234 132 L222 132 Z\"/>\n  <path class=\"bone\" d=\"M120 160 L196 160 L228 158 L232 176 Q180 196 132 184 L118 170 Z\"/>\n  <line class=\"arrow\" x1=\"150\" y1=\"164\" x2=\"150\" y2=\"180\"/><line class=\"arrow\" x1=\"170\" y1=\"164\" x2=\"170\" y2=\"180\"/><line class=\"arrow\" x1=\"190\" y1=\"164\" x2=\"190\" y2=\"180\"/>\n  <path class=\"arrow\" d=\"M250 150 Q268 168 252 190\"/>\n  <polyline class=\"arrow\" points=\"253.3,181.9 252,190 259.7,187.3\"/>\n  <polyline class=\"arrow\" points=\"257.7,152.7 250,150 251.3,158.1\"/>\n  <circle class=\"badge\" cx=\"280\" cy=\"186\" r=\"11\"/><text class=\"label\" x=\"280\" y=\"191\" text-anchor=\"middle\">P</text>\n  <line class=\"arrow\" x1=\"232\" y1=\"66\" x2=\"262\" y2=\"50\"/>\n  <text class=\"small\" x=\"248\" y=\"40\">zig-zag lines</text>\n</svg>", "alt": "Side view of a skull with zig-zag lines across the top where the skull bones meet, and the lower jaw labelled P with a curved arrow showing it opening and closing."}
  },
  {
    id: "g5-sci-body-b-q22",
    prompt: "When Riya breathes in deeply, her chest rises and grows wider. What does this tell us about the ribcage?",
    options: [
      { id: "a", text: "The ribs are made of soft muscle, not bone." },
      { id: "b", text: "The ribcage is a fixed joint like the skull." },
      { id: "c", text: "The ribs can move a little, helped by muscles between them, so the chest can expand." },
      { id: "d", text: "The lungs push the ribs outward with no help from muscles." }
    ],
    answerId: "c",
    explanation: "The ribs are joined to the backbone (and most to the breastbone through bendy cartilage), so they can move slightly. Muscles between the ribs lift them up and out, making room for the lungs to fill with air.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g5-sci-body-b-q23",
    prompt: "Asha built the arm model shown. String P runs along the front and string Q along the back; they stand for the two upper-arm muscles. To move the lower piece from bent (dotted) to straight, which string must she pull, and what does this tell us about a real arm?",
    options: [
      { id: "a", text: "Pull both P and Q at once: both muscles contract together." },
      { id: "b", text: "Pull P: the biceps contracts and the triceps relaxes." },
      { id: "c", text: "Pull neither: the arm straightens with both muscles relaxed." },
      { id: "d", text: "Pull Q: the triceps contracts and the biceps relaxes." }
    ],
    answerId: "d",
    explanation: "The string at the back (Q) is on the same side as the triceps. Pulling it draws the lower piece down so the arm straightens, while P goes slack, like a relaxing biceps. In a real arm, the triceps contracts to straighten the arm and the biceps relaxes; to bend it, they swap roles. Muscles can only pull, never push.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" width=\"320\" height=\"220\" role=\"img\" aria-label=\"A cardboard arm model. The upper piece is fixed upright, the lower piece is joined at a pin. String P runs along the front and string Q along the back. The lower piece moves from a dotted bent position to straight.\">\n  <style>\n    .part { fill:#f6e7d0; stroke:#333; stroke-width:2; }\n    .bone { fill:#fbf8ef; stroke:#555; stroke-width:2; }\n    .limb { fill:none; stroke:#9a9a9a; stroke-width:6; stroke-linecap:round; }\n    .rib { fill:none; stroke:#777; stroke-width:2.5; stroke-linecap:round; }\n    .muscle { fill:#e88a8a; stroke:#8a2b2b; stroke-width:1.5; }\n    .nerve { fill:none; stroke:#d4a017; stroke-width:3; stroke-linecap:round; }\n    .brain { fill:#f4b6c2; stroke:#8a3b55; stroke-width:2; }\n    .label { font-family: system-ui, sans-serif; font-size:14px; fill:#111; font-weight:600; }\n    .small { font-family: system-ui, sans-serif; font-size:11px; fill:#222; }\n    .arrow { stroke:#333; stroke-width:1.8; fill:none; stroke-linecap:round; stroke-linejoin:round; }\n    .badge { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .card { fill:#fffdf7; stroke:#999; stroke-width:1.5; }\n    .dash { fill:none; stroke:#888; stroke-width:1.5; stroke-dasharray:4 3; }\n    .stick { fill:none; stroke:#333; stroke-width:3; stroke-linecap:round; stroke-linejoin:round; }\n    .head { fill:#f6d7b0; stroke:#333; stroke-width:2; }\n    .dark { fill:#333; }\n    .red { fill:#e05a4f; stroke:#333; stroke-width:1.5; }\n    .green { fill:#8cc63f; stroke:#333; stroke-width:1.5; }\n    .sky { fill:#9fd3f5; stroke:#2b7bb9; stroke-width:1.5; }\n    .bag { fill:#6a8fd8; stroke:#2a3f73; stroke-width:1.5; }\n    .wood { fill:#c99a6b; stroke:#6b4a2b; stroke-width:1.5; }\n    .grey { fill:#cfcfcf; stroke:#555; stroke-width:1.5; }\n    .white { fill:#fff; stroke:#333; stroke-width:1.5; }\n    .yellow { fill:#f7d46b; stroke:#333; stroke-width:1.5; }\n  </style>\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n  <rect class=\"wood\" x=\"110\" y=\"20\" width=\"22\" height=\"110\" rx=\"4\"/>\n  <rect class=\"wood\" x=\"110\" y=\"128\" width=\"22\" height=\"80\" rx=\"4\"/>\n  <polygon class=\"wood\" points=\"132,128 196,70 210,84 132,150\" opacity=\"0.35\" stroke-dasharray=\"4 3\"/>\n  <circle class=\"dark\" cx=\"121\" cy=\"136\" r=\"5\"/>\n  <text class=\"small\" x=\"60\" y=\"140\">pin joint</text>\n  <path class=\"arrow\" d=\"M134 30 Q150 100 134 180\" stroke=\"#e05a4f\" stroke-width=\"3\"/>\n  <path class=\"arrow\" d=\"M108 30 Q96 120 108 168\" stroke=\"#2b7bb9\" stroke-width=\"3\"/>\n  <line class=\"arrow\" x1=\"145\" y1=\"100\" x2=\"190\" y2=\"120\"/>\n  <circle class=\"badge\" cx=\"202\" cy=\"122\" r=\"11\"/><text class=\"label\" x=\"202\" y=\"127\" text-anchor=\"middle\">P</text>\n  <line class=\"arrow\" x1=\"98\" y1=\"96\" x2=\"56\" y2=\"90\"/>\n  <circle class=\"badge\" cx=\"44\" cy=\"90\" r=\"11\"/><text class=\"label\" x=\"44\" y=\"95\" text-anchor=\"middle\">Q</text>\n  <path class=\"arrow\" d=\"M216 92 Q236 150 150 196\"/>\n  <polyline class=\"arrow\" points=\"155.1,189.6 150,196 158.0,197.5\"/>\n  <text class=\"small\" x=\"230\" y=\"170\">bent to straight</text>\n  <text class=\"small\" x=\"150\" y=\"14\" text-anchor=\"middle\">front of arm</text>\n</svg>", "alt": "A cardboard arm model. The upper piece is fixed upright, the lower piece is joined at a pin. String P runs along the front and string Q along the back. The lower piece moves from a dotted bent position to straight."}
  },
  {
    id: "g5-sci-body-b-q24",
    prompt: "Astronauts who spend months in space, where they float and their bones carry almost no weight, often come back with weaker bones. What does this suggest for people on Earth?",
    options: [
      { id: "a", text: "Bones get stronger when we rest and avoid moving." },
      { id: "b", text: "Regular exercise like walking, running, and jumping helps keep bones strong." },
      { id: "c", text: "Floating in water every day will make bones grow longer." },
      { id: "d", text: "Bones do not need any care once we are adults." }
    ],
    answerId: "b",
    explanation: "Bones are living parts that respond to use. When they carry weight and work hard, they stay strong. That is why active play and exercise, along with calcium and vitamin D, are good for our bones.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83e\uddb4",
    title: "Your body frame",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "plant",
    speak: "Bones make your skeleton. Joints let you move. Muscles pull. Nerves carry messages.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "plant",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Skeleton", reveal: "Shape, support, protection, movement", emoji: "\ud83e\uddb4" },
      { label: "Joints", reveal: "Hinge, ball-and-socket, pivot, fixed", emoji: "\ud83d\udd17" },
      { label: "Muscles", reveal: "Pull in pairs; tendons join to bones", emoji: "\ud83d\udcaa" },
      { label: "Nerves", reveal: "Messages and quick reflexes", emoji: "\ud83e\udde0" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Which bone protects the brain?",
    options: [
        { id: "a", text: "Ribcage" },
        { id: "b", text: "Skull" },
        { id: "c", text: "Thigh bone" },
        { id: "d", text: "Kneecap" }
    ],
    answerId: "b",
    why: "The skull guards the brain.",
    visual: "plant",
    speak: "Which bone protects the brain?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["206 adult bones", "Joints allow movement", "Muscles work in pairs", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g5ScienceBody: ChapterDef = {
  id: "human-body",
  title: "Human Body",
  emoji: "\\ud83e\\uddb4",
  blurb: "Skeleton, muscles and nerves",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "human-body",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "human-body",
      questions: SET_B,
    },
  ],
  paperTopics: ["human-body", "living-things"],
};

export const g5ScienceBodyQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
