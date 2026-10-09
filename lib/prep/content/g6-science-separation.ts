import type { ChapterDef, PrepQuestion } from "../types";

/** Sorting Materials - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g6-sci-sep-a-q01",
    prompt: "Handpicking is useful when —",
    options: [
      { id: "a", text: "unwanted pieces are large and easy to see" },
      { id: "b", text: "all particles are identical and invisible" },
      { id: "c", text: "you need to boil water" },
      { id: "d", text: "you need a magnet only" }
    ],
    answerId: "a",
    explanation: "Handpicking removes large, visible impurities by hand.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-a-q02",
    prompt: "Threshing separates —",
    options: [
      { id: "a", text: "cream by filtering paper" },
      { id: "b", text: "grain from stalks" },
      { id: "c", text: "salt from seawater by freezing only" },
      { id: "d", text: "iron from sand with hands only" }
    ],
    answerId: "b",
    explanation: "Threshing beats stalks so grain separates.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-a-q03",
    prompt: "Winnowing uses —",
    options: [
      { id: "a", text: "only filters" },
      { id: "b", text: "only evaporation pans" },
      { id: "c", text: "wind or blowing air to separate lighter husk" },
      { id: "d", text: "only magnets" }
    ],
    answerId: "c",
    explanation: "Lighter husk blows away; heavier grain falls.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-a-q04",
    prompt: "Sieving separates particles based on —",
    options: [
      { id: "a", text: "colour only" },
      { id: "b", text: "magnetism only" },
      { id: "c", text: "taste only" },
      { id: "d", text: "size" }
    ],
    answerId: "d",
    explanation: "A sieve lets smaller particles pass and holds larger ones.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-a-q05",
    prompt: "Sedimentation means —",
    options: [
      { id: "a", text: "heavier insoluble solids settle at the bottom of a liquid" },
      { id: "b", text: "solids fly upward always" },
      { id: "c", text: "salt disappears forever" },
      { id: "d", text: "fibres become yarn" }
    ],
    answerId: "a",
    explanation: "Heavy particles settle when a mixture stands.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-a-q06",
    prompt: "Decantation is —",
    options: [
      { id: "a", text: "measuring angles" },
      { id: "b", text: "pouring off liquid carefully after settling" },
      { id: "c", text: "boiling metal" },
      { id: "d", text: "spinning cotton" }
    ],
    answerId: "b",
    explanation: "After sedimentation, liquid is poured off the sediment.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-a-q07",
    prompt: "Filtration uses a filter to —",
    options: [
      { id: "a", text: "shear sheep" },
      { id: "b", text: "weave cloth" },
      { id: "c", text: "trap insoluble solids and let liquid pass" },
      { id: "d", text: "separate two gases by colour only" }
    ],
    answerId: "c",
    explanation: "Filter paper/cloth holds residue; filtrate passes.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-a-q08",
    prompt: "Evaporation separates —",
    options: [
      { id: "a", text: "iron from sand with wind" },
      { id: "b", text: "husks by handpicking only" },
      { id: "c", text: "yarn from fibre" },
      { id: "d", text: "dissolved solid from a solution by turning liquid to vapour" }
    ],
    answerId: "d",
    explanation: "Water evaporates; dissolved salt remains.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-a-q09",
    prompt: "Salt from seawater is obtained mainly by —",
    options: [
      { id: "a", text: "evaporation" },
      { id: "b", text: "winnowing" },
      { id: "c", text: "shearing" },
      { id: "d", text: "knitting" }
    ],
    answerId: "a",
    explanation: "Seawater is evaporated in pans; salt is left.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-a-q10",
    prompt: "A magnet can separate —",
    options: [
      { id: "a", text: "husks from grain by magnetism alone" },
      { id: "b", text: "iron filings from sand" },
      { id: "c", text: "salt from sugar" },
      { id: "d", text: "oil from water by magnetism alone" }
    ],
    answerId: "b",
    explanation: "Iron is magnetic; sand is not.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-a-q11",
    prompt: "Which mixture can be separated by filtration?",
    options: [
      { id: "a", text: "Sugar fully dissolved in water" },
      { id: "b", text: "Alcohol mixed completely as one phase without solid" },
      { id: "c", text: "Chalk powder in water" },
      { id: "d", text: "Salt fully dissolved in water" }
    ],
    answerId: "c",
    explanation: "Insoluble chalk is trapped by a filter; dissolved salt/sugar pass with water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-a-q12",
    prompt: "Cream from milk can be separated by —",
    options: [
      { id: "a", text: "winnowing husk" },
      { id: "b", text: "magnetic separation" },
      { id: "c", text: "sieving with large mesh only" },
      { id: "d", text: "centrifugation (or churning principles)" }
    ],
    answerId: "d",
    explanation: "Centrifugation spins denser and lighter parts apart; cream rises/separates.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-a-q13",
    prompt: "Which property allows winnowing?",
    options: [
      { id: "a", text: "Difference in weight/heaviness of particles" },
      { id: "b", text: "Identical weight of all particles" },
      { id: "c", text: "Only colour of books" },
      { id: "d", text: "Magnetism of husk" }
    ],
    answerId: "a",
    explanation: "Heavier grain and lighter husk respond differently to air flow.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-a-q14",
    prompt: "Insoluble impurities in water can be removed by —",
    options: [
      { id: "a", text: "sericulture" },
      { id: "b", text: "sedimentation and filtration" },
      { id: "c", text: "only adding more salt" },
      { id: "d", text: "weaving" }
    ],
    answerId: "b",
    explanation: "Settle, then filter to clarify water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-a-q15",
    prompt: "Which method suits separating tea leaves from prepared tea?",
    options: [
      { id: "a", text: "Winnowing on a farm roof only" },
      { id: "b", text: "Shearing" },
      { id: "c", text: "Filtration/straining" },
      { id: "d", text: "Magnetic separation" }
    ],
    answerId: "c",
    explanation: "A strainer filters tea leaves.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-a-q16",
    prompt: "Alcohol mixed completely with water is best separated in later classes by —",
    options: [
      { id: "a", text: "handpicking" },
      { id: "b", text: "winnowing" },
      { id: "c", text: "magnetic separation" },
      { id: "d", text: "distillation" }
    ],
    answerId: "d",
    explanation: "Miscible liquids need distillation (different boiling points), not simple pouring.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-a-q17",
    prompt: "Oil and water can be separated because they are —",
    options: [
      { id: "a", text: "immiscible and form layers" },
      { id: "b", text: "the same liquid" },
      { id: "c", text: "both magnetic" },
      { id: "d", text: "both solids" }
    ],
    answerId: "a",
    explanation: "Oil floats on water as a separate layer and can be skimmed/separated.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-a-q18",
    prompt: "Which is a pure substance among these everyday ideas?",
    options: [
      { id: "a", text: "Trail mix" },
      { id: "b", text: "Distilled water (approx. pure H2O)" },
      { id: "c", text: "Muddy river water" },
      { id: "d", text: "Air as a fixed compound" }
    ],
    answerId: "b",
    explanation: "Distilled water is essentially pure water; the others are mixtures.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-a-q19",
    prompt: "Air is best described as —",
    options: [
      { id: "a", text: "a fabric" },
      { id: "b", text: "a vitamin" },
      { id: "c", text: "a mixture of gases" },
      { id: "d", text: "a single pure element only" }
    ],
    answerId: "c",
    explanation: "Air contains nitrogen, oxygen and other gases mixed.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-a-q20",
    prompt: "Sieving flour removes —",
    options: [
      { id: "a", text: "all dissolved sugar" },
      { id: "b", text: "magnetic only dust" },
      { id: "c", text: "water by evaporation" },
      { id: "d", text: "larger impurities/lumps" }
    ],
    answerId: "d",
    explanation: "Lumps and bran bits stay on the sieve.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-a-q21",
    prompt: "Which method would you choose for iron nails mixed with sawdust?",
    options: [
      { id: "a", text: "Magnet" },
      { id: "b", text: "Winnowing only" },
      { id: "c", text: "Evaporation" },
      { id: "d", text: "Handloom" }
    ],
    answerId: "a",
    explanation: "A magnet pulls iron nails from sawdust.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-a-q22",
    prompt: "Condensation is the change from —",
    options: [
      { id: "a", text: "yarn to fabric" },
      { id: "b", text: "gas/vapour to liquid" },
      { id: "c", text: "liquid to solid always named condensation" },
      { id: "d", text: "solid to fibre" }
    ],
    answerId: "b",
    explanation: "Vapour cools to liquid in condensation.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-a-q23",
    prompt: "Why do we separate substances?",
    options: [
      { id: "a", text: "Only to name angles" },
      { id: "b", text: "Never for any reason" },
      { id: "c", text: "To get useful components or remove harmful ones" },
      { id: "d", text: "Only to weave cloth" }
    ],
    answerId: "c",
    explanation: "Separation yields useful materials and removes impurities.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-a-q24",
    prompt: "Which pair is a mixture?",
    options: [
      { id: "a", text: "Distilled water only" },
      { id: "b", text: "Pure gold element sample" },
      { id: "c", text: "Oxygen gas alone as element sample" },
      { id: "d", text: "Sand and salt" }
    ],
    answerId: "d",
    explanation: "Sand + salt is a mixture of two solids.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g6-sci-sep-b-q01",
    prompt: "After sedimentation, the clear liquid above is often called —",
    options: [
      { id: "a", text: "supernatant liquid" },
      { id: "b", text: "residue solid only" },
      { id: "c", text: "yarn" },
      { id: "d", text: "hull" }
    ],
    answerId: "a",
    explanation: "The clearer liquid above the settled solid is the supernatant.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-b-q02",
    prompt: "Residue on filter paper is —",
    options: [
      { id: "a", text: "a magnetic field" },
      { id: "b", text: "the solid left behind" },
      { id: "c", text: "the liquid that passed" },
      { id: "d", text: "a gas only" }
    ],
    answerId: "b",
    explanation: "Residue is the trapped solid; filtrate is the liquid that passed.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-b-q03",
    prompt: "Which separation uses heat and vapour?",
    options: [
      { id: "a", text: "Magnetic separation" },
      { id: "b", text: "Sieving dry sand only" },
      { id: "c", text: "Evaporation" },
      { id: "d", text: "Handpicking" }
    ],
    answerId: "c",
    explanation: "Evaporation needs heat (or sun) to vapourise liquid.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-b-q04",
    prompt: "Husk is separated from grain mainly by —",
    options: [
      { id: "a", text: "reeling silk" },
      { id: "b", text: "sericulture" },
      { id: "c", text: "knitting" },
      { id: "d", text: "winnowing" }
    ],
    answerId: "d",
    explanation: "Winnowing blows husk away from grain.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-b-q05",
    prompt: "Which mixture needs more than a magnet?",
    options: [
      { id: "a", text: "Salt dissolved in water" },
      { id: "b", text: "Iron filings in sand" },
      { id: "c", text: "Iron pins in rice" },
      { id: "d", text: "Steel screws in plastic beads" }
    ],
    answerId: "a",
    explanation: "Salt solution is non-magnetic; evaporation/other methods are needed.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-b-q06",
    prompt: "Loading (in water purification talks) helps —",
    options: [
      { id: "a", text: "grow cotton" },
      { id: "b", text: "fine clay settle faster by adding alum etc." },
      { id: "c", text: "spin silk" },
      { id: "d", text: "weave jute" }
    ],
    answerId: "b",
    explanation: "Alum helps fine suspended particles clump and settle.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-b-q07",
    prompt: "Which is insoluble in water?",
    options: [
      { id: "a", text: "Sugar" },
      { id: "b", text: "Lemon juice acids that dissolve" },
      { id: "c", text: "Sand" },
      { id: "d", text: "Salt" }
    ],
    answerId: "c",
    explanation: "Sand does not dissolve; salt and sugar do.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-b-q08",
    prompt: "Saturated solution means —",
    options: [
      { id: "a", text: "the beaker is empty" },
      { id: "b", text: "only gases present" },
      { id: "c", text: "a type of fabric" },
      { id: "d", text: "no more solute dissolves at that temperature" }
    ],
    answerId: "d",
    explanation: "At saturation, added solute remains undissolved.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-b-q09",
    prompt: "Which method separates butter from curd traditionally?",
    options: [
      { id: "a", text: "Churning" },
      { id: "b", text: "Magnetic separation" },
      { id: "c", text: "Sieving with brick mesh" },
      { id: "d", text: "Ginning" }
    ],
    answerId: "a",
    explanation: "Churning agitates to separate butter.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-b-q10",
    prompt: "Sawdust mixed with iron filings: best first step?",
    options: [
      { id: "a", text: "Weave them" },
      { id: "b", text: "Use a magnet" },
      { id: "c", text: "Evaporate with sun" },
      { id: "d", text: "Winnow as if husk identically always" }
    ],
    answerId: "b",
    explanation: "Magnet removes iron quickly.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-b-q11",
    prompt: "Which change is reversible among these separations?",
    options: [
      { id: "a", text: "Cooking an egg hard" },
      { id: "b", text: "Rusting iron completely as oxide only" },
      { id: "c", text: "Dissolving salt then evaporating water to get salt back" },
      { id: "d", text: "Burning paper to ash" }
    ],
    answerId: "c",
    explanation: "Salt can be recovered by evaporating water — a reversible physical separation path.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-b-q12",
    prompt: "Filtrate is —",
    options: [
      { id: "a", text: "the solid on the paper only" },
      { id: "b", text: "a sheep" },
      { id: "c", text: "a loom" },
      { id: "d", text: "the liquid that passes through the filter" }
    ],
    answerId: "d",
    explanation: "Filtrate = liquid collected after filtration.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-b-q13",
    prompt: "Why does oil float on water?",
    options: [
      { id: "a", text: "Oil is less dense than water" },
      { id: "b", text: "Oil is denser always" },
      { id: "c", text: "Oil is magnetic" },
      { id: "d", text: "Oil is a metal" }
    ],
    answerId: "a",
    explanation: "Lower density makes oil float as a layer.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-b-q14",
    prompt: "Which apparatus is typical for filtration in the lab?",
    options: [
      { id: "a", text: "Handloom" },
      { id: "b", text: "Filter paper + funnel" },
      { id: "c", text: "Charkha" },
      { id: "d", text: "Protractor" }
    ],
    answerId: "b",
    explanation: "Funnel and filter paper are standard.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-b-q15",
    prompt: "Separating colours of ink is an introduction to —",
    options: [
      { id: "a", text: "ginning" },
      { id: "b", text: "knitting" },
      { id: "c", text: "chromatography (later classes)" },
      { id: "d", text: "shearing" }
    ],
    answerId: "c",
    explanation: "Ink dyes can be separated by chromatography.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-b-q16",
    prompt: "Which is a heterogeneous mixture?",
    options: [
      { id: "a", text: "Salt completely dissolved in water" },
      { id: "b", text: "Sugar completely dissolved in water" },
      { id: "c", text: "Air well mixed as one phase discussion" },
      { id: "d", text: "Sand in water" }
    ],
    answerId: "d",
    explanation: "Sand in water shows distinct phases/particles — heterogeneous.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-b-q17",
    prompt: "Which is a homogeneous mixture?",
    options: [
      { id: "a", text: "Sugar solution" },
      { id: "b", text: "Sand and iron filings visibly mixed" },
      { id: "c", text: "Oil floating on water" },
      { id: "d", text: "Trail mix" }
    ],
    answerId: "a",
    explanation: "A clear sugar solution is uniform throughout.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-b-q18",
    prompt: "Pebbles from dal can be removed by —",
    options: [
      { id: "a", text: "reeling" },
      { id: "b", text: "handpicking" },
      { id: "c", text: "distillation only" },
      { id: "d", text: "magnetic separation always" }
    ],
    answerId: "b",
    explanation: "Large pebbles are handpicked from dal.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-b-q19",
    prompt: "Which property is used in magnetic separation?",
    options: [
      { id: "a", text: "Taste only" },
      { id: "b", text: "Smell only" },
      { id: "c", text: "Magnetism" },
      { id: "d", text: "Colour only" }
    ],
    answerId: "c",
    explanation: "Magnetic materials respond to a magnet.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-b-q20",
    prompt: "Drying clothes in the sun mainly involves —",
    options: [
      { id: "a", text: "sedimentation of cloth" },
      { id: "b", text: "magnetic drying" },
      { id: "c", text: "winnowing shirts" },
      { id: "d", text: "evaporation of water" }
    ],
    answerId: "d",
    explanation: "Water in clothes evaporates into air.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-b-q21",
    prompt: "Which statement is correct?",
    options: [
      { id: "a", text: "Mixtures can usually be separated by physical methods" },
      { id: "b", text: "Compounds are separated by winnowing always" },
      { id: "c", text: "All mixtures are magnetic" },
      { id: "d", text: "Filtration creates new elements" }
    ],
    answerId: "a",
    explanation: "Physical methods separate many mixtures without new substances.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-b-q22",
    prompt: "To get drinking water from muddy water at a basic level, you might —",
    options: [
      { id: "a", text: "shear it" },
      { id: "b", text: "allow settling, then filter (and further purify as needed)" },
      { id: "c", text: "add more mud" },
      { id: "d", text: "winnow it" }
    ],
    answerId: "b",
    explanation: "Sedimentation + filtration remove many solids (further purification may still be needed).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-b-q23",
    prompt: "Which mixture is best separated by sieving?",
    options: [
      { id: "a", text: "Alcohol in water" },
      { id: "b", text: "Cream in milk by sieve mesh only" },
      { id: "c", text: "Pebbles mixed with sand" },
      { id: "d", text: "Salt dissolved in water" }
    ],
    answerId: "c",
    explanation: "Different solid sizes → sieving works.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-b-q24",
    prompt: "The solid left after seawater evaporates is mainly —",
    options: [
      { id: "a", text: "pure oxygen cakes" },
      { id: "b", text: "cotton fibre" },
      { id: "c", text: "wool" },
      { id: "d", text: "salt" }
    ],
    answerId: "d",
    explanation: "Dissolved salts remain after water evaporates.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "⚗️",
    title: "Sorting Materials",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "atom-lite",
    speak: "We separate mixtures using properties like size, solubility and magnetism.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "atom-lite",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Handpicking", reveal: "Large unwanted pieces removed by hand", emoji: "✋" },
      { label: "Sieving", reveal: "Different sizes through a mesh", emoji: "🪟" },
      { label: "Filtration", reveal: "Solid trapped; liquid passes", emoji: "🧪" },
      { label: "Evaporation", reveal: "Liquid turns to vapour; solid left", emoji: "☀️" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Salt from salt water is obtained by —",
    options: [
        { id: "a", text: "sieving" },
        { id: "b", text: "evaporation" },
        { id: "c", text: "handpicking" },
        { id: "d", text: "winnowing" }
    ],
    answerId: "b",
    why: "Water evaporates; salt remains.",
    visual: "atom-lite",
    speak: "Salt from salt water is obtained by —",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Review the key ideas", "Watch tricky options", "Sets ready whenever you are"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g6ScienceSeparation: ChapterDef = {
  id: "sorting-materials",
  title: "Sorting Materials",
  emoji: "⚗️",
  blurb: "Properties and separation methods",
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

export const g6ScienceSeparationQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
