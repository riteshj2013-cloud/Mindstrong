import type { ChapterDef, PrepQuestion } from "../types";

/** Life Processes - authored olympiad-style content (original). */

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
    explanation: "Nutrition covers intake and utilisation of food.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "Green plants and some bacteria fix energy into food.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "Chlorophyll in chloroplasts captures light.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-a-q04",
    prompt: "Stomata mainly help in \u2014",
    options: [
      { id: "a", text: "gas exchange and transpiration" },
      { id: "b", text: "absorbing minerals from soil" },
      { id: "c", text: "transporting food in phloem exclusively" },
      { id: "d", text: "storing starch only" }
    ],
    answerId: "a",
    explanation: "Pores on leaves exchange CO\u2082/O\u2082 and release water vapour.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "Pepsin (stomach) and trypsin (intestine) cleave proteins.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-a-q06",
    prompt: "Bile is produced by the \u2014",
    options: [
      { id: "a", text: "stomach" },
      { id: "b", text: "kidney" },
      { id: "c", text: "liver" },
      { id: "d", text: "pancreas" }
    ],
    answerId: "c",
    explanation: "Liver makes bile; gall bladder stores it.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "Haemoglobin in RBCs carries oxygen.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "Complete oxidation to CO\u2082 and H\u2082O releases more ATP.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "Oxygen debt leads to lactic acid in muscles.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-a-q10",
    prompt: "Xylem transports \u2014",
    options: [
      { id: "a", text: "oxygen only" },
      { id: "b", text: "food downward only" },
      { id: "c", text: "water and minerals upward" },
      { id: "d", text: "urea" }
    ],
    answerId: "c",
    explanation: "Xylem sap moves from roots toward leaves.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-a-q11",
    prompt: "Phloem transports \u2014",
    options: [
      { id: "a", text: "only water upward" },
      { id: "b", text: "carbon dioxide soilward" },
      { id: "c", text: "food (sugars) to plant parts" },
      { id: "d", text: "only minerals" }
    ],
    answerId: "c",
    explanation: "Translocation moves sucrose via phloem.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-a-q12",
    prompt: "The functional unit of the kidney is the \u2014",
    options: [
      { id: "a", text: "alveolus" },
      { id: "b", text: "villus" },
      { id: "c", text: "nephron" },
      { id: "d", text: "neuron" }
    ],
    answerId: "c",
    explanation: "Nephrons filter blood and form urine.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-a-q13",
    prompt: "Blood is pumped from left ventricle to the body through the \u2014",
    options: [
      { id: "a", text: "aorta" },
      { id: "b", text: "pulmonary artery" },
      { id: "c", text: "pulmonary vein" },
      { id: "d", text: "vena cava" }
    ],
    answerId: "a",
    explanation: "Aorta is the main systemic artery.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "Right ventricle \u2192 pulmonary artery \u2192 lungs.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-a-q15",
    prompt: "Villi in the small intestine \u2014",
    options: [
      { id: "a", text: "pump blood" },
      { id: "b", text: "increase surface area for absorption" },
      { id: "c", text: "filter urea" },
      { id: "d", text: "produce bile" }
    ],
    answerId: "b",
    explanation: "Finger-like folds maximise nutrient uptake.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "Water loss pulls the xylem stream and cools leaves.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "Nitrogenous waste urea is removed in urine.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "Platelets trigger clot formation at wounds.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "Krebs cycle / aerobic path in mitochondria.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "Animals and fungi are heterotrophs.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "Amylase converts starch toward maltose in the mouth.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-a-q22",
    prompt: "Double circulation in humans means blood goes through the heart \u2014",
    options: [
      { id: "a", text: "never to the lungs" },
      { id: "b", text: "only in veins" },
      { id: "c", text: "only once ever" },
      { id: "d", text: "twice for each complete body circuit (pulmonary + systemic)" }
    ],
    answerId: "d",
    explanation: "Pulmonary and systemic circulations are separate; blood returns to the heart between them.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "Turgid guard cells open the stoma.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "Artificial filtering replaces kidney function.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g10-sci-life-b-q01",
    prompt: "Raw materials for photosynthesis are \u2014",
    options: [
      { id: "a", text: "urea" },
      { id: "b", text: "only nitrogen gas" },
      { id: "c", text: "CO\u2082 and H\u2082O (with light & chlorophyll)" },
      { id: "d", text: "only O\u2082" }
    ],
    answerId: "c",
    explanation: "6CO\u2082 + 6H\u2082O \u2192 C\u2086H\u2081\u2082O\u2086 + 6O\u2082 (light).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "Photolysis of water releases O\u2082.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "Gut walls contract rhythmically to move food.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "Bile breaks fat into tiny droplets for lipase.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-b-q05",
    prompt: "Alveoli are adapted for gas exchange by having \u2014",
    options: [
      { id: "a", text: "large surface area and thin walls" },
      { id: "b", text: "nephrons" },
      { id: "c", text: "chloroplasts" },
      { id: "d", text: "thick cartilage only" }
    ],
    answerId: "a",
    explanation: "Millions of thin, moist pouches contact capillaries.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "Lymphatic system drains excess fluid and fights pathogens.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "It reads systolic/diastolic arterial pressure.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-b-q08",
    prompt: "In plants, transport of water is mainly driven by \u2014",
    options: [
      { id: "a", text: "transpiration pull" },
      { id: "b", text: "blood pressure" },
      { id: "c", text: "bile flow" },
      { id: "d", text: "peristalsis" }
    ],
    answerId: "a",
    explanation: "Evaporation from leaves pulls the xylem column.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "Ornithine cycle forms urea for safer excretion.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "One-cell-thick walls allow diffusion.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "Acidic pH (~2) and pepsinogen \u2192 pepsin.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "Complete oxidation of glucose with oxygen.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "One-way valves aid return against gravity.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-b-q14",
    prompt: "Bowman's capsule is part of \u2014",
    options: [
      { id: "a", text: "nephron filtration" },
      { id: "b", text: "alveolus" },
      { id: "c", text: "villus" },
      { id: "d", text: "stomata" }
    ],
    answerId: "a",
    explanation: "It cups the glomerulus for ultrafiltration.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "Ciliary currents bring particles to the cytostome.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "Adenosine triphosphate stores usable energy.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "Xerophyte adaptations conserve water.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "Plasma carries antibodies (and many proteins).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "Exocrine enzymes + endocrine insulin/glucagon.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "Muscles need more ATP and produce more CO\u2082.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "Saprophytes digest dead organic matter externally.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-b-q22",
    prompt: "The correct path of urine is \u2014",
    options: [
      { id: "a", text: "liver \u2192 ureter \u2192 skin" },
      { id: "b", text: "kidney \u2192 ureter \u2192 bladder \u2192 urethra" },
      { id: "c", text: "bladder \u2192 kidney \u2192 ureter" },
      { id: "d", text: "kidney \u2192 urethra \u2192 bladder" }
    ],
    answerId: "b",
    explanation: "Standard urinary tract order.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
    explanation: "It absorbs red/blue and reflects green.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-life-b-q24",
    prompt: "Why is the wall of the left ventricle thicker than the right?",
    options: [
      { id: "a", text: "It stores urine" },
      { id: "b", text: "It pumps blood all around the body at higher pressure" },
      { id: "c", text: "It makes bile" },
      { id: "d", text: "It only pumps to lungs" }
    ],
    answerId: "b",
    explanation: "Systemic circuit needs stronger push than pulmonary.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
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
