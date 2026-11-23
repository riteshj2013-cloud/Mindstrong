import type { ChapterDef, PrepQuestion } from "../types";

/** Life Processes - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g10-sci-life-a-q01",
    prompt: "The process of obtaining and using food in living organisms is called \u2014",
    options: [
      { id: "a", text: "phototropism" },
      { id: "b", text: "nutrition" },
      { id: "c", text: "transpiration only" },
      { id: "d", text: "excretion only" }
    ],
    answerId: "b",
    explanation: "Nutrition is taking in food and using it for energy and growth. 'Transpiration only' is tempting because it is also a life process, but transpiration is water loss from leaves.",
    hints: ["The life process here covers taking in food and using it for energy and growth. Name the overall process."]
  },
  {
    id: "g10-sci-life-a-q02",
    prompt: "Autotrophs \u2014",
    options: [
      { id: "a", text: "lack chlorophyll always" },
      { id: "b", text: "only eat animals" },
      { id: "c", text: "cannot use sunlight" },
      { id: "d", text: "make their own food (e.g. photosynthesis)" }
    ],
    answerId: "d",
    explanation: "Autotrophs make their own food from simple substances, as green plants do by photosynthesis. 'Lack chlorophyll always' is tempting, but green plants are autotrophs because they have chlorophyll.",
    hints: ["'Auto' means self and 'troph' means nourishment. How does an autotroph get its food?"]
  },
  {
    id: "g10-sci-life-a-q03",
    prompt: "The site of photosynthesis in a plant cell is the \u2014",
    options: [
      { id: "a", text: "nucleus" },
      { id: "b", text: "chloroplast" },
      { id: "c", text: "mitochondrion" },
      { id: "d", text: "ribosome" }
    ],
    answerId: "b",
    explanation: "Chloroplasts hold chlorophyll, which traps light for photosynthesis. The mitochondrion is tempting because it also handles energy, but it releases energy from food by respiration.",
    hints: ["Green plastids do photosynthesis."]
  },
  {
    id: "g10-sci-life-a-q04",
    prompt: "Look at the pores on the leaf. Stomata mainly help in —",
    options: [
      { id: "a", text: "gas exchange and transpiration" },
      { id: "b", text: "absorbing minerals from soil" },
      { id: "c", text: "transporting food in phloem exclusively" },
      { id: "d", text: "storing starch only" }
    ],
    answerId: "a",
    explanation: "The pores let gases enter and leave and also let water vapour out, so they help in gas exchange and transpiration. “Absorbing minerals from soil” is tempting, but that is done by the roots, not by stomata on leaves.",
    hints: ["Guard cells open and close stomata."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A close-up of a leaf surface with a pore between two sausage-shaped cells.\">\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n<text x=\"160\" y=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">Pores on a leaf surface</text>\n  <rect x=\"30\" y=\"50\" width=\"260\" height=\"130\" fill=\"#86efac\" stroke=\"#166534\" stroke-width=\"2\" rx=\"8\"/>\n  <ellipse cx=\"160\" cy=\"110\" rx=\"16\" ry=\"24\" fill=\"#166534\" stroke=\"#14532d\" stroke-width=\"1.5\"/>\n  <ellipse cx=\"200\" cy=\"110\" rx=\"16\" ry=\"24\" fill=\"#166534\" stroke=\"#14532d\" stroke-width=\"1.5\"/>\n  <ellipse cx=\"180\" cy=\"110\" rx=\"8\" ry=\"16\" fill=\"#f0fdf4\" stroke=\"#14532d\" stroke-width=\"1.5\"/>\n  <text x=\"160\" y=\"204\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">A pore sits between a pair of cells</text>\n</svg>", "alt": "A close-up of a leaf surface with a pore between two sausage-shaped cells."}
  },
  {
    id: "g10-sci-life-a-q05",
    prompt: "In humans, proteins are mainly digested by \u2014",
    options: [
      { id: "a", text: "bile salts only" },
      { id: "b", text: "amylase only" },
      { id: "c", text: "lipase only" },
      { id: "d", text: "pepsin and trypsin" }
    ],
    answerId: "d",
    explanation: "Pepsin in the stomach and trypsin from the pancreas break down proteins. 'Amylase only' is tempting because it is a well-known enzyme, but amylase digests starch.",
    hints: ["Proteases digest proteins."]
  },
  {
    id: "g10-sci-life-a-q06",
    prompt: "Look at the organs. Bile is produced by the —",
    options: [
      { id: "a", text: "stomach" },
      { id: "b", text: "kidney" },
      { id: "c", text: "liver" },
      { id: "d", text: "pancreas" }
    ],
    answerId: "c",
    explanation: "The large organ labelled P is the liver, which produces bile. The pancreas, labelled S, is tempting because its juice also enters the small intestine, but it makes enzymes, not bile. Sac Q is the gall bladder, which stores bile rather than making it.",
    hints: ["Bile emulsifies fats."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Some organs of the abdomen, labelled P, Q, R and S.\">\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n<text x=\"160\" y=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">Some organs of the abdomen</text>\n  <path d=\"M 80 70 Q 160 40 230 70 L 210 110 Q 150 90 90 110 Z\" fill=\"#fca5a5\" stroke=\"#7f1d1d\" stroke-width=\"2\"/>\n  <ellipse cx=\"120\" cy=\"140\" rx=\"36\" ry=\"22\" fill=\"#fde68a\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <ellipse cx=\"200\" cy=\"108\" rx=\"8\" ry=\"12\" fill=\"#fef3c7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <ellipse cx=\"180\" cy=\"150\" rx=\"34\" ry=\"12\" fill=\"#fef3c7\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <line x1=\"58\" y1=\"72\" x2=\"86\" y2=\"76\" stroke=\"#333\" stroke-width=\"1.2\" fill=\"none\"/>\n  <text x=\"50\" y=\"76\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#111\">P</text>\n  <line x1=\"254\" y1=\"100\" x2=\"210\" y2=\"106\" stroke=\"#333\" stroke-width=\"1.2\" fill=\"none\"/>\n  <text x=\"262\" y=\"104\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#111\">Q</text>\n  <line x1=\"58\" y1=\"146\" x2=\"84\" y2=\"142\" stroke=\"#333\" stroke-width=\"1.2\" fill=\"none\"/>\n  <text x=\"50\" y=\"150\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#111\">R</text>\n  <line x1=\"254\" y1=\"156\" x2=\"214\" y2=\"152\" stroke=\"#333\" stroke-width=\"1.2\" fill=\"none\"/>\n  <text x=\"262\" y=\"160\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#111\">S</text>\n</svg>", "alt": "Some organs of the abdomen, labelled P, Q, R and S."}
  },
  {
    id: "g10-sci-life-a-q07",
    prompt: "The respiratory pigment in human blood is \u2014",
    options: [
      { id: "a", text: "pepsin" },
      { id: "b", text: "insulin" },
      { id: "c", text: "chlorophyll" },
      { id: "d", text: "haemoglobin" }
    ],
    answerId: "d",
    explanation: "Haemoglobin in red blood cells carries oxygen. Chlorophyll is tempting because it is also a coloured pigment, but it traps light in plants.",
    hints: ["Iron-containing pigment binds O₂."]
  },
  {
    id: "g10-sci-life-a-q08",
    prompt: "Aerobic respiration yields more energy because \u2014",
    options: [
      { id: "a", text: "ATP is not involved" },
      { id: "b", text: "glucose is fully oxidised using oxygen" },
      { id: "c", text: "only fermentation occurs" },
      { id: "d", text: "no oxygen is used" }
    ],
    answerId: "b",
    explanation: "With oxygen, glucose is broken down fully to CO₂ and water, releasing far more energy (ATP). 'No oxygen is used' is tempting, but that describes anaerobic respiration, which releases less.",
    hints: ["Aerobic = with oxygen."]
  },
  {
    id: "g10-sci-life-a-q09",
    prompt: "In anaerobic respiration in muscle, glucose forms \u2014",
    options: [
      { id: "a", text: "lactic acid" },
      { id: "b", text: "alcohol and CO\u2082 always in muscle" },
      { id: "c", text: "only water" },
      { id: "d", text: "urea" }
    ],
    answerId: "a",
    explanation: "When muscles run short of oxygen, glucose is turned into lactic acid. 'Alcohol and CO₂' is tempting because that is also anaerobic, but it happens in yeast, not in muscle.",
    hints: ["Yeast makes alcohol; muscles make lactate."]
  },
  {
    id: "g10-sci-life-a-q10",
    prompt: "At night, when transpiration is very low, water still rises a little in the xylem of a plant. This is mainly due to \u2014",
    options: [
      { id: "a", text: "photosynthesis in the leaves" },
      { id: "b", text: "translocation in the phloem" },
      { id: "c", text: "root pressure" },
      { id: "d", text: "peristalsis" }
    ],
    answerId: "c",
    explanation: "Root cells actively take in ions from the soil, and water follows by osmosis. This builds root pressure that pushes water up the xylem, which matters most at night. Translocation is tempting, but it moves food through the phloem, not water through the xylem.",
    hints: ["Root cells take in ions from the soil and water follows by osmosis. What builds up at the base of the xylem?"]
  },
  {
    id: "g10-sci-life-a-q11",
    prompt: "Sugars made in the leaves reach the roots of a plant through the \u2014",
    options: [
      { id: "a", text: "xylem" },
      { id: "b", text: "root hairs" },
      { id: "c", text: "phloem" },
      { id: "d", text: "stomata" }
    ],
    answerId: "c",
    explanation: "Phloem carries food (sugars) from the leaves to other parts of the plant, including the roots; this is translocation. Xylem is tempting because it also connects roots and leaves, but it carries water and minerals upward.",
    hints: ["Plants have two transport tissues: one carries water up from roots, the other carries food from leaves. Which carries sugars?"]
  },
  {
    id: "g10-sci-life-a-q12",
    prompt: "Look at the filtering unit. The functional unit of the kidney is the —",
    options: [
      { id: "a", text: "alveolus" },
      { id: "b", text: "villus" },
      { id: "c", text: "nephron" },
      { id: "d", text: "neuron" }
    ],
    answerId: "c",
    explanation: "Each kidney is made of many tiny units called nephrons, each with a cup and a coiled tube. The alveolus is tempting because it is also a tiny working unit, but it belongs to the lungs.",
    hints: ["Each kidney has about a million tiny filtering units, each with a glomerulus and a tubule. What is one such unit called?"],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A kidney filtering unit: a cup-shaped start with a knot of capillaries inside, then a long coiled tube leading to a duct.\">\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n<text x=\"160\" y=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">A filtering unit of the kidney</text>\n  <circle cx=\"80\" cy=\"80\" r=\"28\" fill=\"#fef3c7\" stroke=\"#333\" stroke-width=\"2\"/>\n  <circle cx=\"80\" cy=\"80\" r=\"14\" fill=\"#fecaca\" stroke=\"#b91c1c\" stroke-width=\"1.5\"/>\n  <path d=\"M 108 80 C 160 80 150 50 200 50 C 250 50 250 90 200 90 C 150 90 160 130 220 130 C 270 130 260 170 160 170 L 80 170\" fill=\"none\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text x=\"70\" y=\"190\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"400\" fill=\"#222\">to a duct</text>\n  <text x=\"160\" y=\"214\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">A cup, a coiled tube and a duct are shown</text>\n</svg>", "alt": "A kidney filtering unit: a cup-shaped start with a knot of capillaries inside, then a long coiled tube leading to a duct."}
  },
  {
    id: "g10-sci-life-a-q13",
    prompt: "Look at the heart. Blood is pumped from left ventricle to the body through the —",
    options: [
      { id: "a", text: "aorta" },
      { id: "b", text: "pulmonary artery" },
      { id: "c", text: "pulmonary vein" },
      { id: "d", text: "vena cava" }
    ],
    answerId: "a",
    explanation: "The vessel leaving the left ventricle for the body is the aorta. The pulmonary artery is tempting because it also leaves the heart, but it starts at the right ventricle and goes to the lungs.",
    hints: ["The left ventricle pumps oxygenated blood to the whole body. Which is the largest artery leaving the heart?"],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A four-chambered heart labelled RA, LA, RV and LV, with a vessel leaving the left ventricle and rising between the atria.\">\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n<text x=\"160\" y=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">A human heart</text>\n  <rect x=\"90\" y=\"70\" width=\"60\" height=\"50\" fill=\"#dbeafe\" stroke=\"#7f1d1d\" stroke-width=\"2\"/>\n  <rect x=\"170\" y=\"70\" width=\"60\" height=\"50\" fill=\"#fecaca\" stroke=\"#7f1d1d\" stroke-width=\"2\"/>\n  <rect x=\"90\" y=\"120\" width=\"60\" height=\"56\" fill=\"#dbeafe\" stroke=\"#7f1d1d\" stroke-width=\"2\"/>\n  <rect x=\"170\" y=\"120\" width=\"60\" height=\"56\" fill=\"#fecaca\" stroke=\"#7f1d1d\" stroke-width=\"2\"/>\n  <path d=\"M 172 140 L 160 140 L 160 46 Q 160 36 172 36 L 250 36 L 250 56\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"3\"/>\n  <path d=\"M 70 40 L 70 90 L 90 90\" fill=\"none\" stroke=\"#1d4ed8\" stroke-width=\"2\"/>\n  <text x=\"120\" y=\"100\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">RA</text>\n  <text x=\"200\" y=\"100\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">LA</text>\n  <text x=\"120\" y=\"152\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">RV</text>\n  <text x=\"200\" y=\"152\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">LV</text>\n</svg>", "alt": "A four-chambered heart labelled RA, LA, RV and LV, with a vessel leaving the left ventricle and rising between the atria."}
  },
  {
    id: "g10-sci-life-a-q14",
    prompt: "Pulmonary artery carries \u2014",
    options: [
      { id: "a", text: "oxygenated blood to body" },
      { id: "b", text: "oxygenated blood to lungs" },
      { id: "c", text: "lymph" },
      { id: "d", text: "deoxygenated blood to lungs" }
    ],
    answerId: "d",
    explanation: "The pulmonary artery takes deoxygenated blood from the right ventricle to the lungs. 'Oxygenated blood to lungs' is tempting because most arteries carry oxygenated blood, but this one carries blood that still needs oxygen.",
    hints: ["Most arteries carry oxygen-rich blood, but the pulmonary artery leaves the right ventricle. Where does it go, and carrying what?"]
  },
  {
    id: "g10-sci-life-a-q15",
    prompt: "Look at the wall of the small intestine. Villi in the small intestine —",
    options: [
      { id: "a", text: "pump blood" },
      { id: "b", text: "increase surface area for absorption" },
      { id: "c", text: "filter urea" },
      { id: "d", text: "produce bile" }
    ],
    answerId: "b",
    explanation: "The folds are villi, which increase the surface for absorbing digested food. Produce bile is tempting because bile also acts in the small intestine, but bile is made in the liver.",
    hints: ["More area → faster absorption."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"The small-intestine wall is lined with many finger-like folds. An arrow points to a magnified view of one fold.\">\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n<text x=\"160\" y=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">The wall of the small intestine</text>\n  <rect x=\"20\" y=\"80\" width=\"140\" height=\"80\" fill=\"#fecaca\" stroke=\"#9f1239\" stroke-width=\"2\"/>\n  <ellipse cx=\"50\" cy=\"120\" rx=\"12\" ry=\"36\" fill=\"#fda4af\" stroke=\"#9f1239\" stroke-width=\"1.5\"/>\n  <ellipse cx=\"80\" cy=\"120\" rx=\"12\" ry=\"36\" fill=\"#fda4af\" stroke=\"#9f1239\" stroke-width=\"1.5\"/>\n  <ellipse cx=\"110\" cy=\"120\" rx=\"12\" ry=\"36\" fill=\"#fda4af\" stroke=\"#9f1239\" stroke-width=\"1.5\"/>\n  <line x1=\"160\" y1=\"120\" x2=\"190\" y2=\"120\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>  <polyline points=\"184.0,123.0 190,120 184.0,117.0\" stroke=\"#333\" stroke-width=\"1.5\" fill=\"none\"/>\n  <path d=\"M 210 200 L 210 70 Q 260 30 300 70 L 300 200\" fill=\"#fecaca\" stroke=\"#9f1239\" stroke-width=\"2\"/>\n  <text x=\"90\" y=\"60\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">wall</text>\n  <text x=\"255\" y=\"135\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">one fold</text>\n  <text x=\"160\" y=\"214\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">The wall is lined with many folds</text>\n</svg>", "alt": "The small-intestine wall is lined with many finger-like folds. An arrow points to a magnified view of one fold."}
  },
  {
    id: "g10-sci-life-a-q16",
    prompt: "Transpiration helps in \u2014",
    options: [
      { id: "a", text: "ascent of sap and cooling" },
      { id: "b", text: "photosynthesis dark reaction only" },
      { id: "c", text: "protein synthesis" },
      { id: "d", text: "nerve impulse" }
    ],
    answerId: "a",
    explanation: "Water evaporating from leaves pulls water up the xylem (ascent of sap) and cools the leaf. 'Photosynthesis dark reaction only' is tempting because it happens in leaves too, but it does not move water up the plant.",
    hints: ["In transpiration, water evaporating from leaves pulls more water up the xylem and takes heat away. Which two benefits follow?"]
  },
  {
    id: "g10-sci-life-a-q17",
    prompt: "Human excretory wastes include \u2014",
    options: [
      { id: "a", text: "starch" },
      { id: "b", text: "urea" },
      { id: "c", text: "oxygen" },
      { id: "d", text: "glucose as main waste" }
    ],
    answerId: "b",
    explanation: "Urea is the main nitrogen-containing waste, removed in urine. 'Glucose as main waste' is tempting because it appears in tests, but glucose is useful fuel and is normally taken back into the blood.",
    hints: ["The liver turns extra amino acids into a nitrogen waste that kidneys filter into urine. Which waste is it?"]
  },
  {
    id: "g10-sci-life-a-q18",
    prompt: "Platelets help in \u2014",
    options: [
      { id: "a", text: "digesting fat" },
      { id: "b", text: "carrying oxygen" },
      { id: "c", text: "fighting all viruses alone" },
      { id: "d", text: "blood clotting" }
    ],
    answerId: "d",
    explanation: "Platelets gather at a cut and help the blood clot. 'Carrying oxygen' is tempting because platelets are in blood, but red blood cells carry oxygen.",
    hints: ["Platelets gather at a cut and help seal it. Which process stops the bleeding?"]
  },
  {
    id: "g10-sci-life-a-q19",
    prompt: "The breakdown of pyruvate in mitochondria (with O\u2082) yields \u2014",
    options: [
      { id: "a", text: "only alcohol" },
      { id: "b", text: "only lactic acid" },
      { id: "c", text: "CO\u2082, H\u2082O and energy (ATP)" },
      { id: "d", text: "starch" }
    ],
    answerId: "c",
    explanation: "With oxygen, pyruvate is broken down in mitochondria to CO₂, H₂O and a lot of ATP. 'Only lactic acid' is tempting, but that is the anaerobic route in muscles, without oxygen.",
    hints: ["Mitochondria = aerobic ATP factories."]
  },
  {
    id: "g10-sci-life-a-q20",
    prompt: "Heterotrophs \u2014",
    options: [
      { id: "a", text: "depend on other organisms for food" },
      { id: "b", text: "need no energy" },
      { id: "c", text: "always photosynthesise" },
      { id: "d", text: "make food from CO\u2082 only" }
    ],
    answerId: "a",
    explanation: "Heterotrophs, like animals and fungi, cannot make their own food and depend on other organisms. 'Make food from CO₂ only' is tempting, but making food from CO₂ is what autotrophs do.",
    hints: ["Hetero = other-feeding."]
  },
  {
    id: "g10-sci-life-a-q21",
    prompt: "Salivary amylase begins digestion of \u2014",
    options: [
      { id: "a", text: "starch" },
      { id: "b", text: "protein" },
      { id: "c", text: "fat" },
      { id: "d", text: "vitamins" }
    ],
    answerId: "a",
    explanation: "Salivary amylase starts breaking starch into sugar in the mouth. Protein is tempting, but protein digestion starts in the stomach with pepsin.",
    hints: ["Salivary amylase works in the mouth on a carbohydrate in rice and chapati, turning it sweet as you chew."]
  },
  {
    id: "g10-sci-life-a-q22",
    prompt: "Look at the heart, lungs and body. Double circulation in humans means blood goes through the heart —",
    options: [
      { id: "a", text: "never to the lungs" },
      { id: "b", text: "only in veins" },
      { id: "c", text: "only once ever" },
      { id: "d", text: "twice for each complete body circuit (pulmonary + systemic)" }
    ],
    answerId: "d",
    explanation: "Blood goes through the heart twice in one complete circuit: once to the lungs and once to the body. “Never to the lungs” is wrong because one of the two loops is the pulmonary circuit.",
    hints: ["Think two loops: heart→lungs→heart→body→heart."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A heart in the centre, with the lungs above and the body below.\">\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n<text x=\"160\" y=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">The heart, lungs and body</text>\n  <circle cx=\"160\" cy=\"120\" r=\"28\" fill=\"#fecaca\" stroke=\"#7f1d1d\" stroke-width=\"2\"/>\n  <text x=\"160\" y=\"124\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">heart</text>\n  <ellipse cx=\"160\" cy=\"44\" rx=\"36\" ry=\"16\" fill=\"#e0f2fe\" stroke=\"#0369a1\" stroke-width=\"1.5\"/>\n  <text x=\"160\" y=\"48\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">lungs</text>\n  <ellipse cx=\"160\" cy=\"190\" rx=\"70\" ry=\"16\" fill=\"#fef3c7\" stroke=\"#a16207\" stroke-width=\"1.5\"/>\n  <text x=\"160\" y=\"194\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">body</text>\n</svg>", "alt": "A heart in the centre, with the lungs above and the body below."}
  },
  {
    id: "g10-sci-life-a-q23",
    prompt: "Guard cells control \u2014",
    options: [
      { id: "a", text: "heart rate" },
      { id: "b", text: "urine volume only" },
      { id: "c", text: "stomatal opening" },
      { id: "d", text: "bone growth" }
    ],
    answerId: "c",
    explanation: "Guard cells swell to open the stomatal pore and shrink to close it. 'Urine volume only' is tempting because it is also about controlling water, but that is the kidney's job.",
    hints: ["Kidney-bean shaped cells around the pore."]
  },
  {
    id: "g10-sci-life-a-q24",
    prompt: "Dialysis is used when \u2014",
    options: [
      { id: "a", text: "liver makes too much bile" },
      { id: "b", text: "kidneys fail to filter blood" },
      { id: "c", text: "lungs lack alveoli temporarily for fun" },
      { id: "d", text: "stomach lacks acid" }
    ],
    answerId: "b",
    explanation: "Dialysis filters the blood with a machine when the kidneys fail. 'Liver makes too much bile' is tempting because the liver is also an organ that cleans the blood, but dialysis does the kidneys' job.",
    hints: ["Dialysis cleans blood externally."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g10-sci-life-b-q01",
    prompt: "Look at the potted plant. Before testing a leaf for starch, a potted plant is kept in the dark for about two days. Why?",
    options: [
      { id: "a", text: "To increase the amount of chlorophyll" },
      { id: "b", text: "To make all the stomata open" },
      { id: "c", text: "To use up the starch already stored in the leaves" },
      { id: "d", text: "To kill the leaf cells so that iodine can enter" }
    ],
    answerId: "c",
    explanation: "In the dark the plant uses up starch already stored in the leaves, so a later starch test can show whether new starch was made. Opening the stomata is not the reason for this dark period.",
    hints: ["The test should show only starch made during the experiment. What must happen to starch the leaf had beforehand?"],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A potted plant stands inside a dark cover. A caption notes that the plant is kept in the dark for a day or two.\">\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n<text x=\"160\" y=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">A potted plant left in the dark</text>\n  <rect x=\"30\" y=\"40\" width=\"120\" height=\"140\" fill=\"#1e293b\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text x=\"90\" y=\"70\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#f8fafc\">dark</text>\n  <line x1=\"90\" y1=\"110\" x2=\"90\" y2=\"160\" stroke=\"#166534\" stroke-width=\"3\" fill=\"none\"/>\n  <ellipse cx=\"70\" cy=\"120\" rx=\"16\" ry=\"10\" fill=\"#4ade80\" stroke=\"#166534\" stroke-width=\"1.5\"/>\n  <ellipse cx=\"110\" cy=\"120\" rx=\"16\" ry=\"10\" fill=\"#4ade80\" stroke=\"#166534\" stroke-width=\"1.5\"/>\n  <rect x=\"60\" y=\"160\" width=\"60\" height=\"16\" fill=\"#a16207\" stroke=\"#78350f\" stroke-width=\"2\"/>\n  <text x=\"220\" y=\"100\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">The plant is kept</text>\n  <text x=\"220\" y=\"116\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">in the dark for</text>\n  <text x=\"220\" y=\"132\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">a day or two</text>\n  <text x=\"160\" y=\"206\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">A plant stands inside a dark cover</text>\n</svg>", "alt": "A potted plant stands inside a dark cover. A caption notes that the plant is kept in the dark for a day or two."}
  },
  {
    id: "g10-sci-life-b-q02",
    prompt: "Oxygen released in photosynthesis comes mainly from \u2014",
    options: [
      { id: "a", text: "carbon dioxide" },
      { id: "b", text: "water" },
      { id: "c", text: "soil minerals" },
      { id: "d", text: "glucose" }
    ],
    answerId: "b",
    explanation: "The O₂ given out in photosynthesis comes from splitting water molecules. Carbon dioxide is tempting because it contains oxygen, but its oxygen ends up in glucose.",
    hints: ["Experiments with labelled oxygen show the O₂ released comes from splitting a raw material taken in by roots."]
  },
  {
    id: "g10-sci-life-b-q03",
    prompt: "Peristalsis is \u2014",
    options: [
      { id: "a", text: "leaf folding" },
      { id: "b", text: "blood clotting" },
      { id: "c", text: "urine storage only" },
      { id: "d", text: "wave-like muscle movement pushing food" }
    ],
    answerId: "d",
    explanation: "Peristalsis is a wave of muscle contractions that pushes food along the gut. 'Blood clotting' is tempting because it is also a body process, but it has nothing to do with moving food.",
    hints: ["The oesophagus and intestine walls contract in rhythmic waves. What does that rhythmic squeezing do to food?"]
  },
  {
    id: "g10-sci-life-b-q04",
    prompt: "Emulsification of fats is done by \u2014",
    options: [
      { id: "a", text: "bile salts" },
      { id: "b", text: "amylase" },
      { id: "c", text: "pepsin" },
      { id: "d", text: "HCl alone" }
    ],
    answerId: "a",
    explanation: "Bile salts break large fat drops into tiny droplets so lipase can work faster. 'Pepsin' is tempting because it is a digestive enzyme, but it digests protein, not fat.",
    hints: ["Emulsify = break into droplets."]
  },
  {
    id: "g10-sci-life-b-q05",
    prompt: "Look at the air sacs. Alveoli are adapted for gas exchange by having —",
    options: [
      { id: "a", text: "large surface area and thin walls" },
      { id: "b", text: "nephrons" },
      { id: "c", text: "chloroplasts" },
      { id: "d", text: "thick cartilage only" }
    ],
    answerId: "a",
    explanation: "The many small sacs give a large surface, and their walls are thin so gases can pass quickly. Chloroplasts belong to plant cells, not to lung air sacs.",
    hints: ["Thin + moist + huge area = fast diffusion."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A cluster of small air sacs joined to an air tube. Thin blood vessels run along the outside of the sacs.\">\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n<text x=\"160\" y=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">Air sacs in a lung</text>\n  <circle cx=\"100\" cy=\"100\" r=\"28\" fill=\"#fde68a\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle cx=\"145\" cy=\"80\" r=\"26\" fill=\"#fde68a\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle cx=\"190\" cy=\"105\" r=\"30\" fill=\"#fde68a\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle cx=\"130\" cy=\"130\" r=\"24\" fill=\"#fde68a\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <circle cx=\"175\" cy=\"145\" r=\"22\" fill=\"#fde68a\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path d=\"M 210 90 C 230 100 230 120 210 130\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n  <path d=\"M 80 90 C 60 100 60 120 80 130\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n  <line x1=\"160\" y1=\"50\" x2=\"160\" y2=\"70\" stroke=\"#333\" stroke-width=\"2\" fill=\"none\"/>\n  <text x=\"160\" y=\"48\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"400\" fill=\"#222\">air tube</text>\n  <text x=\"160\" y=\"200\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">A cluster of small air sacs joined to a tube</text>\n</svg>", "alt": "A cluster of small air sacs joined to an air tube. Thin blood vessels run along the outside of the sacs."}
  },
  {
    id: "g10-sci-life-b-q06",
    prompt: "Lymph \u2014",
    options: [
      { id: "a", text: "is identical to pure water" },
      { id: "b", text: "is made in alveoli" },
      { id: "c", text: "carries oxygen mainly via haemoglobin" },
      { id: "d", text: "returns tissue fluid to blood and helps immunity" }
    ],
    answerId: "d",
    explanation: "Lymph carries extra tissue fluid back to the blood and its white cells help fight infection. 'Carries oxygen mainly via haemoglobin' is tempting because lymph comes from blood, but it has no red blood cells.",
    hints: ["Lymph nodes filter lymph."]
  },
  {
    id: "g10-sci-life-b-q07",
    prompt: "Sphygmomanometer measures \u2014",
    options: [
      { id: "a", text: "body temperature only" },
      { id: "b", text: "blood sugar only" },
      { id: "c", text: "blood pressure" },
      { id: "d", text: "lung volume only" }
    ],
    answerId: "c",
    explanation: "A sphygmomanometer measures blood pressure. 'Body temperature only' is tempting because it is also a doctor's instrument, but temperature is measured with a thermometer.",
    hints: ["A sphygmomanometer has an arm cuff and a pressure gauge. What does a doctor read with it?"]
  },
  {
    id: "g10-sci-life-b-q08",
    prompt: "Look at the plant. In plants, transport of water is mainly driven by —",
    options: [
      { id: "a", text: "transpiration pull" },
      { id: "b", text: "blood pressure" },
      { id: "c", text: "bile flow" },
      { id: "d", text: "peristalsis" }
    ],
    answerId: "a",
    explanation: "Water is pulled up the stem as vapour leaves the leaves, which is transpiration pull. “Blood pressure” is a driving force in animals, not in plants.",
    hints: ["Water evaporating from leaves pulls a column of water up the xylem. What is this pulling force called?"],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A plant in soil. Arrow P points up the stem from the roots.\">\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n<text x=\"160\" y=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">Water movement in a plant</text>\n  <line x1=\"160\" y1=\"60\" x2=\"160\" y2=\"150\" stroke=\"#166534\" stroke-width=\"4\" fill=\"none\"/>\n  <ellipse cx=\"130\" cy=\"70\" rx=\"26\" ry=\"14\" fill=\"#4ade80\" stroke=\"#166534\" stroke-width=\"1.5\"/>\n  <ellipse cx=\"190\" cy=\"70\" rx=\"26\" ry=\"14\" fill=\"#4ade80\" stroke=\"#166534\" stroke-width=\"1.5\"/>\n  <line x1=\"160\" y1=\"150\" x2=\"130\" y2=\"190\" stroke=\"#78350f\" stroke-width=\"2\" fill=\"none\"/>\n  <line x1=\"160\" y1=\"150\" x2=\"190\" y2=\"190\" stroke=\"#78350f\" stroke-width=\"2\" fill=\"none\"/>\n  <rect x=\"40\" y=\"194\" width=\"240\" height=\"8\" fill=\"#a16207\" stroke=\"#78350f\" stroke-width=\"2\"/>\n  <line x1=\"160\" y1=\"185\" x2=\"160\" y2=\"90\" stroke=\"#1d4ed8\" stroke-width=\"2\" fill=\"none\"/>  <polyline points=\"163.5,97.0 160,90 156.5,97.0\" stroke=\"#1d4ed8\" stroke-width=\"2\" fill=\"none\"/>\n  <text x=\"142\" y=\"130\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">P</text>\n  <text x=\"160\" y=\"216\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">Path P goes up the stem from the roots</text>\n</svg>", "alt": "A plant in soil. Arrow P points up the stem from the roots."}
  },
  {
    id: "g10-sci-life-b-q09",
    prompt: "Ammonia is highly toxic; humans convert it to \u2014",
    options: [
      { id: "a", text: "oxygen in lungs" },
      { id: "b", text: "glucose in muscle" },
      { id: "c", text: "starch in leaves" },
      { id: "d", text: "urea in the liver" }
    ],
    answerId: "d",
    explanation: "The liver turns toxic ammonia into less harmful urea, which the kidneys remove. 'Glucose in muscle' is tempting, but glucose has no nitrogen and cannot hold the ammonia's nitrogen.",
    hints: ["Ammonia is changed into a less toxic substance before the kidneys remove it. Which organ does it, and into what?"]
  },
  {
    id: "g10-sci-life-b-q10",
    prompt: "Capillaries are \u2014",
    options: [
      { id: "a", text: "the largest arteries" },
      { id: "b", text: "valves in veins only" },
      { id: "c", text: "thin-walled vessels for exchange with tissues" },
      { id: "d", text: "air sacs" }
    ],
    answerId: "c",
    explanation: "Capillaries have walls one cell thick, so substances pass between blood and tissues. 'The largest arteries' is tempting because they are also blood vessels, but capillaries are the smallest.",
    hints: ["Exchange happens at capillary beds."]
  },
  {
    id: "g10-sci-life-b-q11",
    prompt: "HCl in the stomach \u2014",
    options: [
      { id: "a", text: "digests cellulose fully" },
      { id: "b", text: "kills microbes and activates pepsin" },
      { id: "c", text: "makes bile" },
      { id: "d", text: "absorbs vitamins" }
    ],
    answerId: "b",
    explanation: "Stomach HCl kills germs and gives the acid conditions pepsin needs to work. 'Makes bile' is tempting because both act on food, but the liver makes bile.",
    hints: ["Stomach acid is a chemical defence too."]
  },
  {
    id: "g10-sci-life-b-q12",
    prompt: "Aerobic respiration equation overall:",
    options: [
      { id: "a", text: "6CO\u2082 \u2192 glucose in animals" },
      { id: "b", text: "C\u2086H\u2081\u2082O\u2086 \u2192 lactic acid only" },
      { id: "c", text: "N\u2082 + O\u2082 \u2192 protein" },
      { id: "d", text: "C\u2086H\u2081\u2082O\u2086 + 6O\u2082 \u2192 6CO\u2082 + 6H\u2082O + energy" }
    ],
    answerId: "d",
    explanation: "Aerobic respiration: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy. 'C₆H₁₂O₆ → lactic acid only' is tempting because it also starts with glucose, but that is anaerobic respiration in muscles.",
    hints: ["Aerobic respiration uses glucose and oxygen. Balance the products: how many CO₂ and H₂O per glucose?"]
  },
  {
    id: "g10-sci-life-b-q13",
    prompt: "Valves in veins \u2014",
    options: [
      { id: "a", text: "secrete enzymes" },
      { id: "b", text: "prevent backflow of blood" },
      { id: "c", text: "produce RBCs" },
      { id: "d", text: "filter urea" }
    ],
    answerId: "b",
    explanation: "Vein valves let blood flow only towards the heart and stop it flowing back. 'Produce RBCs' is tempting because both concern blood, but red blood cells are made in bone marrow.",
    hints: ["Especially important in leg veins."]
  },
  {
    id: "g10-sci-life-b-q14",
    prompt: "Look at the cup and the knot of capillaries. Bowman's capsule is part of —",
    options: [
      { id: "a", text: "nephron filtration" },
      { id: "b", text: "alveolus" },
      { id: "c", text: "villus" },
      { id: "d", text: "stomata" }
    ],
    answerId: "a",
    explanation: "The cup labelled Q is Bowman's capsule, the start of a nephron, where filtration begins. The alveolus is tempting because it is also a small cup-like structure, but it is an air sac in the lung.",
    hints: ["Bowman's capsule is the cup around the glomerulus where blood is first filtered. Which kidney unit is it part of?"],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A knot of capillaries labelled P sits inside a cup labelled Q, with a tube leading away.\">\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n<text x=\"160\" y=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">A cup around a knot of capillaries</text>\n  <circle cx=\"160\" cy=\"110\" r=\"60\" fill=\"#fef3c7\" stroke=\"#333\" stroke-width=\"2\"/>\n  <circle cx=\"160\" cy=\"110\" r=\"30\" fill=\"#fecaca\" stroke=\"#b91c1c\" stroke-width=\"2\"/>\n  <path d=\"M 70 70 C 100 70 110 90 130 90\" fill=\"none\" stroke=\"#b91c1c\" stroke-width=\"3\"/>\n  <path d=\"M 130 130 C 110 140 80 150 60 150\" fill=\"none\" stroke=\"#7f1d1d\" stroke-width=\"3\"/>\n  <path d=\"M 220 110 C 260 110 260 160 220 180\" fill=\"none\" stroke=\"#333\" stroke-width=\"2\"/>\n  <text x=\"160\" y=\"114\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">P</text>\n  <text x=\"230\" y=\"80\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">Q</text>\n  <line x1=\"200\" y1=\"70\" x2=\"175\" y2=\"90\" stroke=\"#333\" stroke-width=\"1.2\" fill=\"none\"/>  <polyline points=\"177.3,84.9 175,90 180.5,88.8\" stroke=\"#333\" stroke-width=\"1.2\" fill=\"none\"/>\n</svg>", "alt": "A knot of capillaries labelled P sits inside a cup labelled Q, with a tube leading away."}
  },
  {
    id: "g10-sci-life-b-q15",
    prompt: "Paramecium takes food by \u2014",
    options: [
      { id: "a", text: "roots" },
      { id: "b", text: "photosynthesis" },
      { id: "c", text: "stomata" },
      { id: "d", text: "cilia sweeping into oral groove" }
    ],
    answerId: "d",
    explanation: "Paramecium's cilia beat to sweep food into its oral groove. 'Photosynthesis' is tempting because it is a single-celled organism like some algae, but Paramecium has no chloroplasts.",
    hints: ["Paramecium is covered in tiny hair-like structures that beat to move water. Where do they sweep food?"]
  },
  {
    id: "g10-sci-life-b-q16",
    prompt: "ATP is \u2014",
    options: [
      { id: "a", text: "a waste like urea" },
      { id: "b", text: "a respiratory pigment" },
      { id: "c", text: "a plant hormone only" },
      { id: "d", text: "an energy currency of cells" }
    ],
    answerId: "d",
    explanation: "ATP stores energy that cells can use at once, so it is called the cell's energy currency. 'A respiratory pigment' is tempting because ATP is linked to respiration, but pigments like haemoglobin carry oxygen.",
    hints: ["Respiration charges ATP batteries."]
  },
  {
    id: "g10-sci-life-b-q17",
    prompt: "Desert plants often have \u2014",
    options: [
      { id: "a", text: "only phloem, no xylem" },
      { id: "b", text: "no roots" },
      { id: "c", text: "sunken stomata / thick cuticle to reduce water loss" },
      { id: "d", text: "gills" }
    ],
    answerId: "c",
    explanation: "Sunken stomata and a thick waxy cuticle cut down water loss in dry places. 'No roots' is tempting because water is scarce, but desert plants usually have long roots to reach water.",
    hints: ["Desert plants must lose as little water as possible. Which features reduce water loss from leaves?"]
  },
  {
    id: "g10-sci-life-b-q18",
    prompt: "Blood group antibodies are found in \u2014",
    options: [
      { id: "a", text: "plasma" },
      { id: "b", text: "platelets only" },
      { id: "c", text: "only inside RBCs haemoglobin" },
      { id: "d", text: "bone matrix" }
    ],
    answerId: "a",
    explanation: "Blood-group antibodies float in the plasma. 'Only inside RBCs haemoglobin' is tempting because blood groups depend on red cells, but red cells carry the antigens; the antibodies are in plasma.",
    hints: ["Blood has cells and a straw-coloured liquid part. In ABO groups, antigens sit on red cells; where are antibodies?"]
  },
  {
    id: "g10-sci-life-b-q19",
    prompt: "The pancreas secretes \u2014",
    options: [
      { id: "a", text: "only urea" },
      { id: "b", text: "only bile" },
      { id: "c", text: "digestive enzymes and hormones (insulin/glucagon)" },
      { id: "d", text: "only HCl" }
    ],
    answerId: "c",
    explanation: "The pancreas releases digestive enzymes into the intestine and the hormones insulin and glucagon into the blood. 'Only bile' is tempting because bile also enters the intestine, but bile comes from the liver.",
    hints: ["Dual gland: gut enzymes and blood sugar control."]
  },
  {
    id: "g10-sci-life-b-q20",
    prompt: "During heavy exercise, breathing rate rises to \u2014",
    options: [
      { id: "a", text: "supply more O\u2082 and remove more CO\u2082" },
      { id: "b", text: "cool blood by stopping heart" },
      { id: "c", text: "close all alveoli" },
      { id: "d", text: "stop respiration" }
    ],
    answerId: "a",
    explanation: "Working muscles need more oxygen and make more CO₂, so we breathe faster. 'Stop respiration' is tempting only if you mix up breathing and respiration, but cells respire faster, not slower.",
    hints: ["During heavy exercise muscles respire faster. What must the lungs bring in faster, and what must they remove?"]
  },
  {
    id: "g10-sci-life-b-q21",
    prompt: "Saprophytic nutrition is seen in \u2014",
    options: [
      { id: "a", text: "green leaves only" },
      { id: "b", text: "fungi like mushrooms on dead matter" },
      { id: "c", text: "fish gills" },
      { id: "d", text: "human stomach only" }
    ],
    answerId: "b",
    explanation: "Saprophytes like mushrooms feed on dead and decaying matter. 'Green leaves only' is tempting because leaves also make or use food, but green leaves make their own food by photosynthesis.",
    hints: ["Saprophytes feed on dead and decaying matter and break it down. Which organisms grow on rotting logs?"]
  },
  {
    id: "g10-sci-life-b-q22",
    prompt: "Look at the organs. The correct path of urine is —",
    options: [
      { id: "a", text: "liver → ureter → skin" },
      { id: "b", text: "kidney → ureter → bladder → urethra" },
      { id: "c", text: "bladder → kidney → ureter" },
      { id: "d", text: "kidney → urethra → bladder" }
    ],
    answerId: "b",
    explanation: "Urine goes from each kidney along a ureter to the bladder, then out through the urethra. Liver to the skin is not a path for urine; the liver does not lie on this route.",
    hints: ["Ureter from kidney; urethra exits body."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"Two bean-shaped organs above a bag-shaped organ.\">\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n<text x=\"160\" y=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">Some organs of the body</text>\n  <path d=\"M 96 56 C 80 70 82 96 100 104 C 112 108 118 96 110 84 C 104 76 116 64 110 58 C 106 52 100 52 96 56 Z\" fill=\"#fde68a\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <path d=\"M 224 56 C 240 70 238 96 220 104 C 208 108 202 96 210 84 C 216 76 204 64 210 58 C 214 52 220 52 224 56 Z\" fill=\"#fde68a\" stroke=\"#333\" stroke-width=\"1.5\"/>\n  <ellipse cx=\"160\" cy=\"160\" rx=\"28\" ry=\"22\" fill=\"#fde68a\" stroke=\"#333\" stroke-width=\"1.5\"/>\n</svg>", "alt": "Two bean-shaped organs above a bag-shaped organ."}
  },
  {
    id: "g10-sci-life-b-q23",
    prompt: "Chlorophyll appears green because it \u2014",
    options: [
      { id: "a", text: "is made of iron oxide" },
      { id: "b", text: "absorbs only green" },
      { id: "c", text: "reflects green wavelengths mainly" },
      { id: "d", text: "emits only X-rays" }
    ],
    answerId: "c",
    explanation: "Chlorophyll absorbs mainly red and blue light and reflects green, so leaves look green. 'Absorbs only green' is tempting, but a colour that is absorbed cannot reach our eyes.",
    hints: ["What you see is what isn't strongly absorbed."]
  },
  {
    id: "g10-sci-life-b-q24",
    prompt: "Look at the two lower chambers. Why is the wall of the left ventricle thicker than the right?",
    options: [
      { id: "a", text: "It stores urine" },
      { id: "b", text: "It pumps blood all around the body at higher pressure" },
      { id: "c", text: "It makes bile" },
      { id: "d", text: "It only pumps to lungs" }
    ],
    answerId: "b",
    explanation: "The left ventricle has a thicker wall because it pumps blood all around the body at a higher pressure. “It only pumps to lungs” describes the right ventricle, which has the thinner wall.",
    hints: ["Thicker muscle → higher pressure."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"The two lower chambers of a heart. The right ventricle is labelled RV with a thinner wall. The left ventricle is labelled LV with a thicker wall.\">\n  <rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/>\n<text x=\"160\" y=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#111\">The two lower chambers of the heart</text>\n  <rect x=\"70\" y=\"70\" width=\"80\" height=\"90\" fill=\"#fecaca\" stroke=\"#7f1d1d\" stroke-width=\"2\"/>\n  <rect x=\"170\" y=\"60\" width=\"80\" height=\"100\" fill=\"#e11d48\" stroke=\"#7f1d1d\" stroke-width=\"3\"/>\n  <text x=\"110\" y=\"116\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"400\" fill=\"#7f1d1d\">RV</text>\n  <text x=\"210\" y=\"116\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"400\" fill=\"#fff\">LV</text>\n  <text x=\"110\" y=\"180\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">thinner wall</text>\n  <text x=\"210\" y=\"180\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">thicker wall</text>\n  <text x=\"160\" y=\"210\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"400\" fill=\"#222\">Compare the walls of the two ventricles</text>\n</svg>", "alt": "The two lower chambers of a heart. The right ventricle is labelled RV with a thinner wall. The left ventricle is labelled LV with a thicker wall."}
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83e\uddec",
    title: "Life Processes",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "plant",
    speak: "Living things nutrition, breathe, transport, and excrete.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "plant",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Nutrition", reveal: "Auto vs hetero; digestion", emoji: "\ud83e\udd57" },
      { label: "Respiration", reveal: "Aerobic vs anaerobic ATP", emoji: "\ud83d\udca8" },
      { label: "Transport", reveal: "Xylem/phloem; blood", emoji: "\ud83e\ude78" },
      { label: "Excretion", reveal: "Nephrons remove urea", emoji: "\ud83e\uddea" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Which tissue carries water up a plant?",
    options: [
        { id: "a", text: "Xylem" },
        { id: "b", text: "Phloem only" },
        { id: "c", text: "Blood" },
        { id: "d", text: "Nerves" }
    ],
    answerId: "a",
    why: "Xylem vessels move water and minerals upward.",
    visual: "plant",
    speak: "Which tissue carries water up a plant?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Life processes ready", "Food \u2192 energy", "Gas exchange", "Clean the blood"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g10ScienceLifeProcesses: ChapterDef = {
  id: "life-processes",
  title: "Life Processes",
  emoji: "\ud83e\uddec",
  blurb: "Nutrition, breath, transport, excretion",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "plant",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "plant",
      questions: SET_B,
    },
  ],
  paperTopics: ["plant"],
};

export const g10ScienceLifeProcessesQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
