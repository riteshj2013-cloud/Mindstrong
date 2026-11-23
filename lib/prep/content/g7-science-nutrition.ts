import type { ChapterDef, PrepQuestion } from "../types";

/** Nutrition in Plants and Animals - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g7-sci-nutrition-a-q01",
    prompt: "Organisms that make their own food are called\u2026",
    options: [
      { id: "a", text: "Autotrophs" },
      { id: "b", text: "Heterotrophs" },
      { id: "c", text: "Parasites only" },
      { id: "d", text: "Saprotrophs only" }
    ],
    answerId: "a",
    explanation: "Autotrophs synthesise food (e.g. green plants).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-a-q02",
    prompt: "The process by which green plants make food is\u2026",
    options: [
      { id: "a", text: "Respiration only" },
      { id: "b", text: "Photosynthesis" },
      { id: "c", text: "Transpiration only" },
      { id: "d", text: "Digestion" }
    ],
    answerId: "b",
    explanation: "Photosynthesis uses light to make food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-a-q03",
    prompt: "Which gas do plants take in for photosynthesis?",
    options: [
      { id: "a", text: "Nitrogen only" },
      { id: "b", text: "Ozone" },
      { id: "c", text: "Carbon dioxide" },
      { id: "d", text: "Helium" }
    ],
    answerId: "c",
    explanation: "CO\u2082 is a raw material for photosynthesis.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-a-q04",
    prompt: "Look at the leaf in sunlight. Which gas is released as a by-product of photosynthesis?",
    options: [
      { id: "a", text: "Nitrogen" },
      { id: "b", text: "Carbon monoxide" },
      { id: "c", text: "Argon" },
      { id: "d", text: "Oxygen" }
    ],
    answerId: "d",
    explanation: "The extra gas given off in photosynthesis is oxygen. Nitrogen is tempting because it makes up most of the air, but it is not released as a by-product of this process.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A green leaf in sunlight. Arrows show a gas leaving the leaf into a small bubble labelled gas.\">\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n<text x=\"160\" y=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">A green leaf in sunlight</text>\n  <circle cx=\"50\" cy=\"40\" r=\"14\" fill=\"#facc15\" stroke=\"#ca8a04\" stroke-width=\"2\"/>\n  <ellipse cx=\"160\" cy=\"110\" rx=\"70\" ry=\"36\" fill=\"#86efac\" stroke=\"#166534\" stroke-width=\"2\"/>\n  <line x1=\"90\" y1=\"110\" x2=\"230\" y2=\"110\" stroke=\"#166534\" stroke-width=\"1.5\" fill=\"none\"/>\n  <line x1=\"90\" y1=\"110\" x2=\"70\" y2=\"150\" stroke=\"#166534\" stroke-width=\"2\" fill=\"none\"/>\n  <line x1=\"200\" y1=\"80\" x2=\"230\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"1.5\" fill=\"none\"/>  <polyline points=\"227.9,56.4 230,50 223.6,52.1\" stroke=\"#64748b\" stroke-width=\"1.5\" fill=\"none\"/>\n  <line x1=\"170\" y1=\"74\" x2=\"185\" y2=\"44\" stroke=\"#64748b\" stroke-width=\"1.5\" fill=\"none\"/>  <polyline points=\"185.0,50.7 185,44 179.6,48.0\" stroke=\"#64748b\" stroke-width=\"1.5\" fill=\"none\"/>\n  <circle cx=\"236\" cy=\"44\" r=\"8\" fill=\"#e0f2fe\" stroke=\"#64748b\" stroke-width=\"2\"/>\n  <text x=\"250\" y=\"36\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">gas</text>\n  <text x=\"160\" y=\"200\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">A gas leaves the leaf in sunlight</text>\n</svg>", "alt": "A green leaf in sunlight. Arrows show a gas leaving the leaf into a small bubble labelled gas."}
  },
  {
    id: "g7-sci-nutrition-a-q05",
    prompt: "The green pigment that traps sunlight is\u2026",
    options: [
      { id: "a", text: "Chlorophyll" },
      { id: "b", text: "Haemoglobin" },
      { id: "c", text: "Melanin" },
      { id: "d", text: "Keratin" }
    ],
    answerId: "a",
    explanation: "Chlorophyll in chloroplasts traps light energy.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-a-q06",
    prompt: "Look at the plant cell. Where does photosynthesis mainly occur in a leaf?",
    options: [
      { id: "a", text: "Mitochondria only" },
      { id: "b", text: "Chloroplasts" },
      { id: "c", text: "Nucleus only" },
      { id: "d", text: "Cell wall only" }
    ],
    answerId: "b",
    explanation: "Photosynthesis takes place in the chloroplasts, labelled R. “Nucleus only” is tempting because the nucleus is a well-known part of the cell, but it is not the site of this process.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A plant cell with four parts labelled P, Q, R and S.\">\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n<text x=\"160\" y=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">A plant cell</text>\n  <ellipse cx=\"160\" cy=\"112\" rx=\"112\" ry=\"72\" fill=\"#ecfccb\" stroke=\"#333\" stroke-width=\"2.5\"/>\n  <ellipse cx=\"160\" cy=\"112\" rx=\"102\" ry=\"62\" fill=\"#f7fee7\" stroke=\"#65a30d\" stroke-width=\"1.2\"/>\n  <circle cx=\"200\" cy=\"96\" r=\"16\" fill=\"#e0f2fe\" stroke=\"#0369a1\" stroke-width=\"2\"/>\n  <ellipse cx=\"110\" cy=\"92\" rx=\"14\" ry=\"7\" fill=\"#16a34a\" stroke=\"#14532d\" stroke-width=\"1.5\"/>\n  <ellipse cx=\"130\" cy=\"140\" rx=\"14\" ry=\"7\" fill=\"#16a34a\" stroke=\"#14532d\" stroke-width=\"1.5\"/>\n  <ellipse cx=\"95\" cy=\"125\" rx=\"14\" ry=\"7\" fill=\"#16a34a\" stroke=\"#14532d\" stroke-width=\"1.5\"/>\n  <ellipse cx=\"150\" cy=\"78\" rx=\"14\" ry=\"7\" fill=\"#16a34a\" stroke=\"#14532d\" stroke-width=\"1.5\"/>\n  <ellipse cx=\"180\" cy=\"140\" rx=\"8\" ry=\"4.5\" fill=\"#fdba74\" stroke=\"#9a3412\" stroke-width=\"1.5\"/>\n  <ellipse cx=\"215\" cy=\"128\" rx=\"8\" ry=\"4.5\" fill=\"#fdba74\" stroke=\"#9a3412\" stroke-width=\"1.5\"/>\n  <ellipse cx=\"160\" cy=\"112\" rx=\"8\" ry=\"4.5\" fill=\"#fdba74\" stroke=\"#9a3412\" stroke-width=\"1.5\"/>\n  <line x1=\"285\" y1=\"112\" x2=\"271\" y2=\"112\" stroke=\"#333\" stroke-width=\"1.2\" fill=\"none\"/>\n  <text x=\"293\" y=\"108\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#111\">P</text>\n  <line x1=\"240\" y1=\"70\" x2=\"212\" y2=\"86\" stroke=\"#333\" stroke-width=\"1.2\" fill=\"none\"/>\n  <text x=\"240\" y=\"66\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#111\">Q</text>\n  <line x1=\"80\" y1=\"70\" x2=\"104\" y2=\"88\" stroke=\"#333\" stroke-width=\"1.2\" fill=\"none\"/>\n  <text x=\"80\" y=\"66\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#111\">R</text>\n  <line x1=\"200\" y1=\"176\" x2=\"184\" y2=\"144\" stroke=\"#333\" stroke-width=\"1.2\" fill=\"none\"/>\n  <text x=\"200\" y=\"190\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#111\">S</text>\n</svg>", "alt": "A plant cell with four parts labelled P, Q, R and S."}
  },
  {
    id: "g7-sci-nutrition-a-q07",
    prompt: "Organisms that depend on others for food are\u2026",
    options: [
      { id: "a", text: "Autotrophs" },
      { id: "b", text: "Producers only" },
      { id: "c", text: "Heterotrophs" },
      { id: "d", text: "Chemosynthesisers only" }
    ],
    answerId: "c",
    explanation: "Heterotrophs cannot make food; they consume it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-a-q08",
    prompt: "Fungi that feed on dead matter are\u2026",
    options: [
      { id: "a", text: "Parasites" },
      { id: "b", text: "Autotrophs" },
      { id: "c", text: "Herbivores" },
      { id: "d", text: "Saprotrophs" }
    ],
    answerId: "d",
    explanation: "Saprotrophs secrete enzymes on dead organic matter and absorb nutrients.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-a-q09",
    prompt: "Cuscuta (dodder) is an example of a\u2026",
    options: [
      { id: "a", text: "Parasitic plant" },
      { id: "b", text: "Autotrophic tree" },
      { id: "c", text: "Saprotrophic mushroom" },
      { id: "d", text: "Insect only" }
    ],
    answerId: "a",
    explanation: "Cuscuta takes food from a host plant.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-a-q10",
    prompt: "Insectivorous plants like pitcher plant mainly capture insects to obtain\u2026",
    options: [
      { id: "a", text: "Only sunlight" },
      { id: "b", text: "Nitrogen nutrients" },
      { id: "c", text: "Only carbon dioxide" },
      { id: "d", text: "Only water vapour" }
    ],
    answerId: "b",
    explanation: "They grow in nitrogen-poor soil and get nitrogen from insects.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-a-q11",
    prompt: "Look at the underside of the leaf. Stomata on leaves mainly help in…",
    options: [
      { id: "a", text: "Making bones" },
      { id: "b", text: "Pumping blood" },
      { id: "c", text: "Gas exchange" },
      { id: "d", text: "Hearing sound" }
    ],
    answerId: "c",
    explanation: "The pores between the guard cells allow gases to enter and leave the leaf. Hearing sound is unrelated to these pores.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"The underside of a leaf showing several pores, each sitting between a pair of sausage-shaped cells.\">\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n<text x=\"160\" y=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">The underside of a leaf</text>\n  <rect x=\"40\" y=\"50\" width=\"240\" height=\"120\" fill=\"#86efac\" stroke=\"#166534\" stroke-width=\"2\" rx=\"8\"/>\n  <ellipse cx=\"80\" cy=\"90\" rx=\"8\" ry=\"12\" fill=\"#166534\" stroke=\"#14532d\" stroke-width=\"1.5\"/>\n  <ellipse cx=\"100\" cy=\"90\" rx=\"8\" ry=\"12\" fill=\"#166534\" stroke=\"#14532d\" stroke-width=\"1.5\"/>\n  <ellipse cx=\"90\" cy=\"90\" rx=\"4\" ry=\"8\" fill=\"#f0fdf4\" stroke=\"#14532d\" stroke-width=\"1\"/>\n  <ellipse cx=\"150\" cy=\"110\" rx=\"8\" ry=\"12\" fill=\"#166534\" stroke=\"#14532d\" stroke-width=\"1.5\"/>\n  <ellipse cx=\"170\" cy=\"110\" rx=\"8\" ry=\"12\" fill=\"#166534\" stroke=\"#14532d\" stroke-width=\"1.5\"/>\n  <ellipse cx=\"160\" cy=\"110\" rx=\"4\" ry=\"8\" fill=\"#f0fdf4\" stroke=\"#14532d\" stroke-width=\"1\"/>\n  <ellipse cx=\"220\" cy=\"90\" rx=\"8\" ry=\"12\" fill=\"#166534\" stroke=\"#14532d\" stroke-width=\"1.5\"/>\n  <ellipse cx=\"240\" cy=\"90\" rx=\"8\" ry=\"12\" fill=\"#166534\" stroke=\"#14532d\" stroke-width=\"1.5\"/>\n  <ellipse cx=\"230\" cy=\"90\" rx=\"4\" ry=\"8\" fill=\"#f0fdf4\" stroke=\"#14532d\" stroke-width=\"1\"/>\n  <ellipse cx=\"110\" cy=\"140\" rx=\"8\" ry=\"12\" fill=\"#166534\" stroke=\"#14532d\" stroke-width=\"1.5\"/>\n  <ellipse cx=\"130\" cy=\"140\" rx=\"8\" ry=\"12\" fill=\"#166534\" stroke=\"#14532d\" stroke-width=\"1.5\"/>\n  <ellipse cx=\"120\" cy=\"140\" rx=\"4\" ry=\"8\" fill=\"#f0fdf4\" stroke=\"#14532d\" stroke-width=\"1\"/>\n  <ellipse cx=\"190\" cy=\"140\" rx=\"8\" ry=\"12\" fill=\"#166534\" stroke=\"#14532d\" stroke-width=\"1.5\"/>\n  <ellipse cx=\"210\" cy=\"140\" rx=\"8\" ry=\"12\" fill=\"#166534\" stroke=\"#14532d\" stroke-width=\"1.5\"/>\n  <ellipse cx=\"200\" cy=\"140\" rx=\"4\" ry=\"8\" fill=\"#f0fdf4\" stroke=\"#14532d\" stroke-width=\"1\"/>\n  <text x=\"160\" y=\"200\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">Pores sit between pairs of cells</text>\n</svg>", "alt": "The underside of a leaf showing several pores, each sitting between a pair of sausage-shaped cells."}
  },
  {
    id: "g7-sci-nutrition-a-q12",
    prompt: "A bear eats berries, roots, honey and fish. Based on its diet, a bear is \u2014",
    options: [
      { id: "a", text: "a herbivore" },
      { id: "b", text: "a carnivore" },
      { id: "c", text: "a parasite" },
      { id: "d", text: "an omnivore" }
    ],
    answerId: "d",
    explanation: "An animal that eats both plants (berries, roots) and animals (fish) is an omnivore. \u201cCarnivore\u201d is tempting because bears catch fish, but they eat plant food too.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-a-q13",
    prompt: "Humans are typically\u2026",
    options: [
      { id: "a", text: "Omnivores" },
      { id: "b", text: "Autotrophs" },
      { id: "c", text: "Saprotrophs" },
      { id: "d", text: "Producers" }
    ],
    answerId: "a",
    explanation: "Humans eat plant and animal foods.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-a-q14",
    prompt: "The first step of nutrition in animals is usually\u2026",
    options: [
      { id: "a", text: "Egestion" },
      { id: "b", text: "Ingestion" },
      { id: "c", text: "Photosynthesis" },
      { id: "d", text: "Transpiration" }
    ],
    answerId: "b",
    explanation: "Ingestion means taking in food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-a-q15",
    prompt: "Look at the digestive tract. In humans, protein digestion begins mainly in the…",
    options: [
      { id: "a", text: "Mouth only" },
      { id: "b", text: "Large intestine only" },
      { id: "c", text: "Stomach" },
      { id: "d", text: "Nose" }
    ],
    answerId: "c",
    explanation: "Protein digestion begins in the stomach, labelled R. “Mouth only” is tempting because digestion of starch begins there, but protein-digesting juice is released in the stomach.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A simple digestive tract with four parts labelled P, Q, R and S.\">\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n<text x=\"160\" y=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">The digestive tract</text>\n  <circle cx=\"160\" cy=\"48\" r=\"10\" fill=\"#fde68a\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line x1=\"160\" y1=\"58\" x2=\"160\" y2=\"80\" stroke=\"#333\" stroke-width=\"2\" fill=\"none\"/>\n  <rect x=\"154\" y=\"80\" width=\"12\" height=\"28\" fill=\"#fde68a\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <ellipse cx=\"170\" cy=\"126\" rx=\"28\" ry=\"18\" fill=\"#fde68a\" stroke=\"#333\" stroke-width=\"2\"/>\n  <path d=\"M 170 144 C 120 150 120 170 170 176 C 220 182 220 198 160 204\" fill=\"none\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line x1=\"116\" y1=\"48\" x2=\"148\" y2=\"48\" stroke=\"#333\" stroke-width=\"1.2\" fill=\"none\"/>\n  <text x=\"110\" y=\"52\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#111\">P</text>\n  <line x1=\"116\" y1=\"94\" x2=\"152\" y2=\"94\" stroke=\"#333\" stroke-width=\"1.2\" fill=\"none\"/>\n  <text x=\"110\" y=\"98\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#111\">Q</text>\n  <line x1=\"234\" y1=\"126\" x2=\"200\" y2=\"126\" stroke=\"#333\" stroke-width=\"1.2\" fill=\"none\"/>\n  <text x=\"240\" y=\"130\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#111\">R</text>\n  <line x1=\"234\" y1=\"186\" x2=\"208\" y2=\"186\" stroke=\"#333\" stroke-width=\"1.2\" fill=\"none\"/>\n  <text x=\"240\" y=\"190\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#111\">S</text>\n</svg>", "alt": "A simple digestive tract with four parts labelled P, Q, R and S."}
  },
  {
    id: "g7-sci-nutrition-a-q16",
    prompt: "Bile produced by the liver helps mainly to\u2026",
    options: [
      { id: "a", text: "Digest starch in the mouth" },
      { id: "b", text: "Absorb oxygen" },
      { id: "c", text: "Make chlorophyll" },
      { id: "d", text: "Emulsify fats" }
    ],
    answerId: "d",
    explanation: "Bile emulsifies fats for easier digestion.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-a-q17",
    prompt: "Look at the inner wall of the small intestine. Villi in the small intestine increase…",
    options: [
      { id: "a", text: "Surface area for absorption" },
      { id: "b", text: "Bone length" },
      { id: "c", text: "Heart rate" },
      { id: "d", text: "Leaf area" }
    ],
    answerId: "a",
    explanation: "The finger-like folds give a much larger surface for absorbing digested food. Bone length is unrelated to the gut wall.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A section of the small intestine wall lined with many closely packed finger-like folds.\">\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n<text x=\"160\" y=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">The inner wall of the small intestine</text>\n  <rect x=\"30\" y=\"50\" width=\"260\" height=\"130\" fill=\"#fecaca\" stroke=\"#7f1d1d\" stroke-width=\"2\"/>\n  <ellipse cx=\"50\" cy=\"110\" rx=\"14\" ry=\"50\" fill=\"#fda4af\" stroke=\"#9f1239\" stroke-width=\"1.5\"/>\n  <line x1=\"50\" y1=\"70\" x2=\"50\" y2=\"150\" stroke=\"#be123c\" stroke-width=\"1\" fill=\"none\"/>\n  <ellipse cx=\"90\" cy=\"110\" rx=\"14\" ry=\"50\" fill=\"#fda4af\" stroke=\"#9f1239\" stroke-width=\"1.5\"/>\n  <line x1=\"90\" y1=\"70\" x2=\"90\" y2=\"150\" stroke=\"#be123c\" stroke-width=\"1\" fill=\"none\"/>\n  <ellipse cx=\"130\" cy=\"110\" rx=\"14\" ry=\"50\" fill=\"#fda4af\" stroke=\"#9f1239\" stroke-width=\"1.5\"/>\n  <line x1=\"130\" y1=\"70\" x2=\"130\" y2=\"150\" stroke=\"#be123c\" stroke-width=\"1\" fill=\"none\"/>\n  <ellipse cx=\"170\" cy=\"110\" rx=\"14\" ry=\"50\" fill=\"#fda4af\" stroke=\"#9f1239\" stroke-width=\"1.5\"/>\n  <line x1=\"170\" y1=\"70\" x2=\"170\" y2=\"150\" stroke=\"#be123c\" stroke-width=\"1\" fill=\"none\"/>\n  <ellipse cx=\"210\" cy=\"110\" rx=\"14\" ry=\"50\" fill=\"#fda4af\" stroke=\"#9f1239\" stroke-width=\"1.5\"/>\n  <line x1=\"210\" y1=\"70\" x2=\"210\" y2=\"150\" stroke=\"#be123c\" stroke-width=\"1\" fill=\"none\"/>\n  <ellipse cx=\"250\" cy=\"110\" rx=\"14\" ry=\"50\" fill=\"#fda4af\" stroke=\"#9f1239\" stroke-width=\"1.5\"/>\n  <line x1=\"250\" y1=\"70\" x2=\"250\" y2=\"150\" stroke=\"#be123c\" stroke-width=\"1\" fill=\"none\"/>\n  <text x=\"160\" y=\"204\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">Many finger-like folds line the wall</text>\n</svg>", "alt": "A section of the small intestine wall lined with many closely packed finger-like folds."}
  },
  {
    id: "g7-sci-nutrition-a-q18",
    prompt: "Carbohydrates are mainly used by the body for\u2026",
    options: [
      { id: "a", text: "Only building bones" },
      { id: "b", text: "Energy" },
      { id: "c", text: "Only carrying oxygen in leaves" },
      { id: "d", text: "Insulation alone" }
    ],
    answerId: "b",
    explanation: "Carbohydrates are a primary energy source.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-a-q19",
    prompt: "Iodine deficiency can lead to\u2026",
    options: [
      { id: "a", text: "Scurvy" },
      { id: "b", text: "Rickets only" },
      { id: "c", text: "Goitre" },
      { id: "d", text: "Night blindness only" }
    ],
    answerId: "c",
    explanation: "Lack of iodine affects the thyroid and can cause goitre.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-a-q20",
    prompt: "Vitamin C deficiency causes\u2026",
    options: [
      { id: "a", text: "Goitre" },
      { id: "b", text: "Beriberi only" },
      { id: "c", text: "Anaemia from iron only" },
      { id: "d", text: "Scurvy" }
    ],
    answerId: "d",
    explanation: "Scurvy is linked to lack of vitamin C.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-a-q21",
    prompt: "A food chain always begins with a\u2026",
    options: [
      { id: "a", text: "Producer" },
      { id: "b", text: "Carnivore" },
      { id: "c", text: "Decomposer only as starter" },
      { id: "d", text: "Parasite" }
    ],
    answerId: "a",
    explanation: "Producers (usually green plants) start food chains.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-a-q22",
    prompt: "Rumination in cows involves\u2026",
    options: [
      { id: "a", text: "Photosynthesis in the stomach" },
      { id: "b", text: "Bringing back partly chewed food to chew again" },
      { id: "c", text: "Breathing underwater" },
      { id: "d", text: "Making nectar" }
    ],
    answerId: "b",
    explanation: "Ruminants chew the cud.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-a-q23",
    prompt: "Look at the organism taking in food. Amoeba takes in food using…",
    options: [
      { id: "a", text: "Teeth" },
      { id: "b", text: "Stomata" },
      { id: "c", text: "Pseudopodia" },
      { id: "d", text: "Gills" }
    ],
    answerId: "c",
    explanation: "Amoeba surrounds food with soft projections called pseudopodia. Teeth are tempting because they are used for taking in food in many animals, but amoeba has no teeth.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A single-celled organism with an uneven outline beside a small particle labelled food.\">\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n<text x=\"160\" y=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">A tiny organism taking in food</text>\n  <path d=\"M 80 110 C 70 70 130 50 160 80 C 190 50 250 70 230 110 C 250 150 200 180 160 150 C 120 180 70 150 80 110 Z\" fill=\"#fde68a\" stroke=\"#333\" stroke-width=\"2\"/>\n  <circle cx=\"140\" cy=\"100\" r=\"8\" fill=\"#e0f2fe\" stroke=\"#0369a1\" stroke-width=\"2\"/>\n  <circle cx=\"250\" cy=\"90\" r=\"10\" fill=\"#86efac\" stroke=\"#166534\" stroke-width=\"2\"/>\n  <text x=\"278\" y=\"94\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"400\" fill=\"#222\">food</text>\n  <path d=\"M 210 90 C 230 80 235 85 240 90\" fill=\"none\" stroke=\"#333\" stroke-width=\"2\"/>\n  <path d=\"M 210 120 C 230 125 235 115 240 100\" fill=\"none\" stroke=\"#333\" stroke-width=\"2\"/>\n</svg>", "alt": "A single-celled organism with an uneven outline beside a small particle labelled food."}
  },
  {
    id: "g7-sci-nutrition-a-q24",
    prompt: "Which is a symbiotic nutrition example?",
    options: [
      { id: "a", text: "Tiger hunting deer" },
      { id: "b", text: "Mushroom on dead log only" },
      { id: "c", text: "Cuscuta on host only" },
      { id: "d", text: "Lichen (alga + fungus)" }
    ],
    answerId: "d",
    explanation: "In lichens, alga and fungus live together with mutual benefit.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g7-sci-nutrition-b-q01",
    prompt: "Look at the plant. Raw materials for photosynthesis are mainly…",
    options: [
      { id: "a", text: "Carbon dioxide and water" },
      { id: "b", text: "Oxygen and nitrogen" },
      { id: "c", text: "Proteins and fats" },
      { id: "d", text: "Soil only" }
    ],
    answerId: "a",
    explanation: "The plant takes in carbon dioxide from the air and water from the soil, and those are the main raw materials for photosynthesis. Proteins and fats are made in living things; they are not the starting materials of this process.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A green plant growing in soil in sunlight.\">\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n<text x=\"160\" y=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">A green plant in sunlight</text>\n  <circle cx=\"50\" cy=\"36\" r=\"12\" fill=\"#facc15\" stroke=\"#ca8a04\" stroke-width=\"2\"/>\n  <line x1=\"160\" y1=\"80\" x2=\"160\" y2=\"160\" stroke=\"#166534\" stroke-width=\"3\" fill=\"none\"/>\n  <ellipse cx=\"130\" cy=\"90\" rx=\"28\" ry=\"16\" fill=\"#4ade80\" stroke=\"#166534\" stroke-width=\"1.5\"/>\n  <ellipse cx=\"190\" cy=\"90\" rx=\"28\" ry=\"16\" fill=\"#4ade80\" stroke=\"#166534\" stroke-width=\"1.5\"/>\n  <ellipse cx=\"160\" cy=\"70\" rx=\"24\" ry=\"14\" fill=\"#4ade80\" stroke=\"#166534\" stroke-width=\"1.5\"/>\n  <line x1=\"160\" y1=\"160\" x2=\"130\" y2=\"190\" stroke=\"#78350f\" stroke-width=\"2\" fill=\"none\"/>\n  <line x1=\"160\" y1=\"160\" x2=\"190\" y2=\"190\" stroke=\"#78350f\" stroke-width=\"2\" fill=\"none\"/>\n  <line x1=\"160\" y1=\"160\" x2=\"160\" y2=\"196\" stroke=\"#78350f\" stroke-width=\"2\" fill=\"none\"/>\n  <rect x=\"40\" y=\"196\" width=\"240\" height=\"8\" fill=\"#a16207\" stroke=\"#78350f\" stroke-width=\"1\"/>\n</svg>", "alt": "A green plant growing in soil in sunlight."}
  },
  {
    id: "g7-sci-nutrition-b-q02",
    prompt: "The site of photosynthesis in plant cells is the\u2026",
    options: [
      { id: "a", text: "Ribosome" },
      { id: "b", text: "Chloroplast" },
      { id: "c", text: "Vacuole only" },
      { id: "d", text: "Cell wall" }
    ],
    answerId: "b",
    explanation: "Chloroplasts house the photosynthetic machinery.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-b-q03",
    prompt: "Heterotrophic nutrition means\u2026",
    options: [
      { id: "a", text: "Making food with sunlight only" },
      { id: "b", text: "Living without energy" },
      { id: "c", text: "Depending on other organisms for food" },
      { id: "d", text: "Breathing nitrogen only" }
    ],
    answerId: "c",
    explanation: "Heterotrophs obtain ready-made food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-b-q04",
    prompt: "Pitcher plant is green, yet it traps insects mainly because\u2026",
    options: [
      { id: "a", text: "It cannot photosynthesise at all" },
      { id: "b", text: "It needs no water" },
      { id: "c", text: "It is a fungus" },
      { id: "d", text: "Soil lacks enough nitrogen" }
    ],
    answerId: "d",
    explanation: "It still photosynthesises but supplements nitrogen from insects.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-b-q05",
    prompt: "During photosynthesis, solar energy is stored as\u2026",
    options: [
      { id: "a", text: "Chemical energy in food" },
      { id: "b", text: "Sound energy" },
      { id: "c", text: "Nuclear energy" },
      { id: "d", text: "Magnetic energy" }
    ],
    answerId: "a",
    explanation: "Light energy converts to chemical energy in glucose/starch.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-b-q06",
    prompt: "Look at the leaf in the dish. Starch in leaves can be tested with…",
    options: [
      { id: "a", text: "Limewater only" },
      { id: "b", text: "Iodine solution" },
      { id: "c", text: "Phenolphthalein only" },
      { id: "d", text: "Copper sulphate only for starch" }
    ],
    answerId: "b",
    explanation: "Iodine solution is used to test for starch and turns blue-black if starch is present. “Limewater only” is tempting because it is a common test reagent, but it is used for carbon dioxide, not for starch.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A green leaf lies in a shallow dish. A dropper above the dish is adding a liquid to the leaf.\">\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n<text x=\"160\" y=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">A leaf test in a dish</text>\n  <ellipse cx=\"160\" cy=\"120\" rx=\"90\" ry=\"50\" fill=\"#fef3c7\" stroke=\"#333\" stroke-width=\"2\"/>\n  <ellipse cx=\"160\" cy=\"110\" rx=\"50\" ry=\"22\" fill=\"#86efac\" stroke=\"#166534\" stroke-width=\"1.5\"/>\n  <rect x=\"200\" y=\"40\" width=\"10\" height=\"40\" fill=\"none\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <polygon points=\"200,80 210,80 205,92\" fill=\"#78350f\" stroke=\"#333\" stroke-width=\"1\"/>\n  <text x=\"230\" y=\"55\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">liquid</text>\n  <text x=\"160\" y=\"200\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">A liquid is added to a leaf in a dish</text>\n</svg>", "alt": "A green leaf lies in a shallow dish. A dropper above the dish is adding a liquid to the leaf."}
  },
  {
    id: "g7-sci-nutrition-b-q07",
    prompt: "Parasitic nutrition harms the\u2026",
    options: [
      { id: "a", text: "Only the parasite never" },
      { id: "b", text: "Soil only" },
      { id: "c", text: "Host" },
      { id: "d", text: "Sun only" }
    ],
    answerId: "c",
    explanation: "Parasites derive nutrition from a living host, often harming it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-b-q08",
    prompt: "Look at the digestive tract. In human digestion, starch digestion begins in the…",
    options: [
      { id: "a", text: "Stomach only" },
      { id: "b", text: "Large intestine" },
      { id: "c", text: "Liver" },
      { id: "d", text: "Mouth" }
    ],
    answerId: "d",
    explanation: "Starch digestion begins in the mouth, where saliva acts on it. “Stomach only” is tempting because protein digestion begins there, but starch digestion has already started in the mouth.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A simple digestive system with four parts labelled P, Q, R and S.\">\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n<text x=\"160\" y=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">The digestive system</text>\n  <path d=\"M 110 36 Q 160 28 210 36 L 236 196 Q 160 206 84 196 Z\" fill=\"#fffdf7\" stroke=\"#999\" stroke-width=\"1.5\"/>\n  <ellipse cx=\"160\" cy=\"46\" rx=\"12\" ry=\"6\" fill=\"#fde68a\" stroke=\"#333\" stroke-width=\"2\"/>\n  <line x1=\"160\" y1=\"52\" x2=\"160\" y2=\"101\" stroke=\"#333\" stroke-width=\"3\" fill=\"none\"/>\n  <path d=\"M 112 96 Q 140 86 156 98 L 150 124 Q 128 130 110 116 Z\" fill=\"#fde68a\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <ellipse cx=\"174\" cy=\"112\" rx=\"22\" ry=\"16\" fill=\"#fde68a\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path d=\"M 112 186 L 112 146 L 208 146 L 208 186\" fill=\"none\" stroke=\"#333\" stroke-width=\"5\"/>\n  <line x1=\"78\" y1=\"46\" x2=\"146\" y2=\"46\" stroke=\"#333\" stroke-width=\"1.2\" fill=\"none\"/>\n  <text x=\"70\" y=\"50\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#111\">P</text>\n  <line x1=\"78\" y1=\"108\" x2=\"112\" y2=\"108\" stroke=\"#333\" stroke-width=\"1.2\" fill=\"none\"/>\n  <text x=\"70\" y=\"112\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#111\">Q</text>\n  <line x1=\"250\" y1=\"108\" x2=\"196\" y2=\"112\" stroke=\"#333\" stroke-width=\"1.2\" fill=\"none\"/>\n  <text x=\"258\" y=\"112\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#111\">R</text>\n  <line x1=\"250\" y1=\"166\" x2=\"210\" y2=\"168\" stroke=\"#333\" stroke-width=\"1.2\" fill=\"none\"/>\n  <text x=\"258\" y=\"170\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#111\">S</text>\n</svg>", "alt": "A simple digestive system with four parts labelled P, Q, R and S."}
  },
  {
    id: "g7-sci-nutrition-b-q09",
    prompt: "Look at the close-up of one fold. The finger-like projections for absorption are…",
    options: [
      { id: "a", text: "Villi" },
      { id: "b", text: "Alveoli only" },
      { id: "c", text: "Nephrons only" },
      { id: "d", text: "Stomata" }
    ],
    answerId: "a",
    explanation: "The finger-like projections are villi, which absorb digested food. “Alveoli only” is tempting because they are also tiny structures with a large surface, but they are the air sacs of the lungs.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A close-up of one finger-like fold from a gut wall, with a thin blood vessel running up the middle.\">\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n<text x=\"160\" y=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">A close-up of one fold</text>\n  <path d=\"M 80 200 L 80 90 Q 160 20 240 90 L 240 200\" fill=\"#fecaca\" stroke=\"#9f1239\" stroke-width=\"2\"/>\n  <path d=\"M 160 40 L 160 180\" fill=\"none\" stroke=\"#be123c\" stroke-width=\"1.5\"/>\n  <path d=\"M 160 80 C 140 90 140 110 160 120\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.5\"/>\n  <path d=\"M 160 120 C 180 130 180 150 160 160\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.5\"/>\n  <text x=\"160\" y=\"214\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">A thin blood vessel runs inside the fold</text>\n</svg>", "alt": "A close-up of one finger-like fold from a gut wall, with a thin blood vessel running up the middle."}
  },
  {
    id: "g7-sci-nutrition-b-q10",
    prompt: "Proteins are broken down into\u2026",
    options: [
      { id: "a", text: "Glucose only" },
      { id: "b", text: "Amino acids" },
      { id: "c", text: "Fatty acids only" },
      { id: "d", text: "Vitamins" }
    ],
    answerId: "b",
    explanation: "Proteins digest to amino acids.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-b-q11",
    prompt: "Fats are broken down into\u2026",
    options: [
      { id: "a", text: "Amino acids" },
      { id: "b", text: "Glucose only" },
      { id: "c", text: "Fatty acids and glycerol" },
      { id: "d", text: "Starch" }
    ],
    answerId: "c",
    explanation: "Fat digestion yields fatty acids and glycerol.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-b-q12",
    prompt: "A balanced diet should include\u2026",
    options: [
      { id: "a", text: "Only sugar" },
      { id: "b", text: "Only fat" },
      { id: "c", text: "Only vitamins" },
      { id: "d", text: "Carbohydrates, proteins, fats, vitamins, minerals, fibre and water" }
    ],
    answerId: "d",
    explanation: "All nutrient classes matter in balance.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-b-q13",
    prompt: "Night blindness is linked to deficiency of\u2026",
    options: [
      { id: "a", text: "Vitamin A" },
      { id: "b", text: "Vitamin C" },
      { id: "c", text: "Vitamin D only" },
      { id: "d", text: "Iodine" }
    ],
    answerId: "a",
    explanation: "Vitamin A deficiency can cause night blindness.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-b-q14",
    prompt: "Rickets is associated with deficiency of\u2026",
    options: [
      { id: "a", text: "Vitamin C only" },
      { id: "b", text: "Vitamin D (and related calcium issues)" },
      { id: "c", text: "Iodine only" },
      { id: "d", text: "Vitamin K only as sole cause named here" }
    ],
    answerId: "b",
    explanation: "Vitamin D helps calcium use for bones; deficiency relates to rickets.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-b-q15",
    prompt: "Decomposers in a food chain\u2026",
    options: [
      { id: "a", text: "Make food from sunlight" },
      { id: "b", text: "Only eat living lions" },
      { id: "c", text: "Break down dead matter and recycle nutrients" },
      { id: "d", text: "Stop all cycles" }
    ],
    answerId: "c",
    explanation: "Bacteria and fungi recycle materials.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-b-q16",
    prompt: "Holozoic nutrition involves\u2026",
    options: [
      { id: "a", text: "Absorbing only from dead logs as fungi do" },
      { id: "b", text: "Photosynthesis" },
      { id: "c", text: "Parasitism only" },
      { id: "d", text: "Ingesting and digesting solid food internally" }
    ],
    answerId: "d",
    explanation: "Humans and many animals show holozoic nutrition.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-b-q17",
    prompt: "In photosynthesis equation terms, sugar is a\u2026",
    options: [
      { id: "a", text: "Product" },
      { id: "b", text: "Reactant only" },
      { id: "c", text: "Catalyst only" },
      { id: "d", text: "Pigment" }
    ],
    answerId: "a",
    explanation: "Glucose/sugar is produced; CO\u2082 and water are reactants.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-b-q18",
    prompt: "Leaves appear green because chlorophyll\u2026",
    options: [
      { id: "a", text: "Produces green paint" },
      { id: "b", text: "Reflects green light more than it absorbs it" },
      { id: "c", text: "Absorbs green light and reflects all other colours" },
      { id: "d", text: "Turns into iodine" }
    ],
    answerId: "b",
    explanation: "Chlorophyll absorbs red and blue light strongly and reflects much of the green, so leaves look green. 'Absorbs green light' is tempting, but it is the reverse: the colour we see is the light that is reflected, not absorbed.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-b-q19",
    prompt: "Look at the living things. A food web is…",
    options: [
      { id: "a", text: "A single straight chain only" },
      { id: "b", text: "Only producers" },
      { id: "c", text: "Many interlinked food chains" },
      { id: "d", text: "A vitamin chart" }
    ],
    answerId: "c",
    explanation: "A food web is made of many food chains that share the same plants or animals. A single straight chain is tempting because a food chain is usually learned first, but most animals eat, and are eaten by, more than one kind of living thing, so the chains link up.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Six boxes labelled grass, insect, frog, mouse, snake and hawk.\">\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n<text x=\"160\" y=\"18\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">Living things in a meadow</text>\n  <rect x=\"40\" y=\"150\" width=\"60\" height=\"24\" fill=\"#fef9c3\" stroke=\"#333\" stroke-width=\"1.5\" rx=\"3\"/>\n  <text x=\"70\" y=\"167\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">grass</text>\n  <rect x=\"40\" y=\"80\" width=\"60\" height=\"24\" fill=\"#fef9c3\" stroke=\"#333\" stroke-width=\"1.5\" rx=\"3\"/>\n  <text x=\"70\" y=\"97\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">insect</text>\n  <rect x=\"140\" y=\"40\" width=\"60\" height=\"24\" fill=\"#fef9c3\" stroke=\"#333\" stroke-width=\"1.5\" rx=\"3\"/>\n  <text x=\"170\" y=\"57\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">frog</text>\n  <rect x=\"240\" y=\"80\" width=\"60\" height=\"24\" fill=\"#fef9c3\" stroke=\"#333\" stroke-width=\"1.5\" rx=\"3\"/>\n  <text x=\"270\" y=\"97\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">snake</text>\n  <rect x=\"240\" y=\"150\" width=\"60\" height=\"24\" fill=\"#fef9c3\" stroke=\"#333\" stroke-width=\"1.5\" rx=\"3\"/>\n  <text x=\"270\" y=\"167\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">hawk</text>\n  <rect x=\"140\" y=\"150\" width=\"60\" height=\"24\" fill=\"#fef9c3\" stroke=\"#333\" stroke-width=\"1.5\" rx=\"3\"/>\n  <text x=\"170\" y=\"167\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">mouse</text>\n</svg>", "alt": "Six boxes labelled grass, insect, frog, mouse, snake and hawk."}
  },
  {
    id: "g7-sci-nutrition-b-q20",
    prompt: "Saliva contains an enzyme that acts on\u2026",
    options: [
      { id: "a", text: "Fats only" },
      { id: "b", text: "Proteins only" },
      { id: "c", text: "Vitamins" },
      { id: "d", text: "Starch" }
    ],
    answerId: "d",
    explanation: "Salivary amylase acts on starch.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-b-q21",
    prompt: "Look at the paths in the stem. Water and minerals are transported from roots mainly through…",
    options: [
      { id: "a", text: "Xylem" },
      { id: "b", text: "Phloem only" },
      { id: "c", text: "Stomata tubes of blood" },
      { id: "d", text: "Nerves" }
    ],
    answerId: "a",
    explanation: "Water and minerals travel up from the roots in the xylem, shown as path P. “Phloem only” is tempting because it is the other transport tissue, but phloem mainly carries food from the leaves, as along path Q.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A plant with roots in the soil. Arrow P points up the stem from the roots. Arrow Q points down the stem from the leaves.\">\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n<text x=\"160\" y=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">Paths in a plant stem</text>\n  <line x1=\"160\" y1=\"50\" x2=\"160\" y2=\"150\" stroke=\"#166534\" stroke-width=\"4\" fill=\"none\"/>\n  <ellipse cx=\"130\" cy=\"60\" rx=\"24\" ry=\"14\" fill=\"#4ade80\" stroke=\"#166534\" stroke-width=\"1.5\"/>\n  <ellipse cx=\"190\" cy=\"60\" rx=\"24\" ry=\"14\" fill=\"#4ade80\" stroke=\"#166534\" stroke-width=\"1.5\"/>\n  <line x1=\"160\" y1=\"150\" x2=\"130\" y2=\"190\" stroke=\"#78350f\" stroke-width=\"2\" fill=\"none\"/>\n  <line x1=\"160\" y1=\"150\" x2=\"190\" y2=\"190\" stroke=\"#78350f\" stroke-width=\"2\" fill=\"none\"/>\n  <rect x=\"40\" y=\"194\" width=\"240\" height=\"8\" fill=\"#a16207\" stroke=\"#78350f\" stroke-width=\"1\"/>\n  <line x1=\"148\" y1=\"140\" x2=\"148\" y2=\"80\" stroke=\"#1d4ed8\" stroke-width=\"2\" fill=\"none\"/>  <polyline points=\"151.0,86.0 148,80 145.0,86.0\" stroke=\"#1d4ed8\" stroke-width=\"2\" fill=\"none\"/>\n  <text x=\"128\" y=\"110\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">P</text>\n  <line x1=\"172\" y1=\"80\" x2=\"172\" y2=\"140\" stroke=\"#b91c1c\" stroke-width=\"2\" fill=\"none\"/>  <polyline points=\"169.0,134.0 172,140 175.0,134.0\" stroke=\"#b91c1c\" stroke-width=\"2\" fill=\"none\"/>\n  <text x=\"190\" y=\"110\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">Q</text>\n  <text x=\"160\" y=\"216\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">P goes up from the roots; Q goes down from the leaves</text>\n</svg>", "alt": "A plant with roots in the soil. Arrow P points up the stem from the roots. Arrow Q points down the stem from the leaves."}
  },
  {
    id: "g7-sci-nutrition-b-q22",
    prompt: "Food (sugar) is transported in plants mainly through\u2026",
    options: [
      { id: "a", text: "Xylem only" },
      { id: "b", text: "Phloem" },
      { id: "c", text: "Stomata only" },
      { id: "d", text: "Root hairs only" }
    ],
    answerId: "b",
    explanation: "Phloem transports food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-b-q23",
    prompt: "Which mode of nutrition does a mushroom show?",
    options: [
      { id: "a", text: "Autotrophic photosynthesis like leaves" },
      { id: "b", text: "Holozoic chewing" },
      { id: "c", text: "Saprotrophic" },
      { id: "d", text: "Parasitic on sunlight" }
    ],
    answerId: "c",
    explanation: "Mushrooms feed on dead organic matter.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g7-sci-nutrition-b-q24",
    prompt: "Why are green plants called producers?",
    options: [
      { id: "a", text: "They produce only oxygen for sale" },
      { id: "b", text: "They produce soil rocks" },
      { id: "c", text: "They produce consumers" },
      { id: "d", text: "They produce food that supports other organisms" }
    ],
    answerId: "d",
    explanation: "Producers synthesise organic food from inorganic materials.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83c\udf3f",
    title: "Nutrition in Plants and Animals",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "plant",
    speak: "Plants make food; animals take it in. Know the modes of nutrition.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "plant",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Autotrophs", reveal: "Make their own food", emoji: "\ud83c\udf1e" },
      { label: "Heterotrophs", reveal: "Depend on others for food", emoji: "\ud83c\udf7d\ufe0f" },
      { label: "Photosynthesis", reveal: "Light, CO\u2082, water \u2192 food + oxygen", emoji: "\ud83c\udf43" },
      { label: "Digestion", reveal: "Break food into absorbable forms", emoji: "\ud83e\udec1" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Green plants are mainly\u2026",
    options: [
        { id: "a", text: "Autotrophs" },
        { id: "b", text: "Parasites only" },
        { id: "c", text: "Saprotrophs only" },
        { id: "d", text: "Carnivores" }
    ],
    answerId: "a",
    why: "They make food by photosynthesis.",
    visual: "plant",
    speak: "Green plants are mainly\u2026",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Autotroph vs heterotroph", "Photosynthesis basics", "Animal nutrition steps", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g7ScienceNutrition: ChapterDef = {
  id: "nutrition",
  title: "Nutrition in Plants and Animals",
  emoji: "\ud83c\udf3f",
  blurb: "How living things get food",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "living-things",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "living-things",
      questions: SET_B,
    },
  ],
  paperTopics: ["living-things", "human-body"],
};

export const g7ScienceNutritionQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
