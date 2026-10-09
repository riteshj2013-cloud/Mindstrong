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
      { id: "a", text: "grain from stalks" },
      { id: "b", text: "salt from seawater by freezing only" },
      { id: "c", text: "iron from sand with hands only" },
      { id: "d", text: "cream by filtering paper" }
    ],
    answerId: "a",
    explanation: "Threshing beats stalks so grain separates.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-a-q03",
    prompt: "Winnowing uses —",
    options: [
      { id: "a", text: "wind or blowing air to separate lighter husk" },
      { id: "b", text: "only magnets" },
      { id: "c", text: "only filters" },
      { id: "d", text: "only evaporation pans" }
    ],
    answerId: "a",
    explanation: "Lighter husk blows away; heavier grain falls.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-a-q04",
    prompt: "Sieving separates particles based on —",
    options: [
      { id: "a", text: "size" },
      { id: "b", text: "colour only" },
      { id: "c", text: "magnetism only" },
      { id: "d", text: "taste only" }
    ],
    answerId: "a",
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
      { id: "a", text: "pouring off liquid carefully after settling" },
      { id: "b", text: "boiling metal" },
      { id: "c", text: "spinning cotton" },
      { id: "d", text: "measuring angles" }
    ],
    answerId: "a",
    explanation: "After sedimentation, liquid is poured off the sediment.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-a-q07",
    prompt: "Filtration uses a filter to —",
    options: [
      { id: "a", text: "trap insoluble solids and let liquid pass" },
      { id: "b", text: "separate two gases by colour only" },
      { id: "c", text: "shear sheep" },
      { id: "d", text: "weave cloth" }
    ],
    answerId: "a",
    explanation: "Filter paper/cloth holds residue; filtrate passes.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-a-q08",
    prompt: "Evaporation separates —",
    options: [
      { id: "a", text: "dissolved solid from a solution by turning liquid to vapour" },
      { id: "b", text: "iron from sand with wind" },
      { id: "c", text: "husks by handpicking only" },
      { id: "d", text: "yarn from fibre" }
    ],
    answerId: "a",
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
      { id: "a", text: "iron filings from sand" },
      { id: "b", text: "salt from sugar" },
      { id: "c", text: "oil from water by magnetism alone" },
      { id: "d", text: "husks from grain by magnetism alone" }
    ],
    answerId: "a",
    explanation: "Iron is magnetic; sand is not.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-a-q11",
    prompt: "Which mixture can be separated by filtration?",
    options: [
      { id: "a", text: "Chalk powder in water" },
      { id: "b", text: "Salt fully dissolved in water" },
      { id: "c", text: "Sugar fully dissolved in water" },
      { id: "d", text: "Alcohol mixed completely as one phase without solid" }
    ],
    answerId: "a",
    explanation: "Insoluble chalk is trapped by a filter; dissolved salt/sugar pass with water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-a-q12",
    prompt: "Cream from milk can be separated by —",
    options: [
      { id: "a", text: "centrifugation (or churning principles)" },
      { id: "b", text: "winnowing husk" },
      { id: "c", text: "magnetic separation" },
      { id: "d", text: "sieving with large mesh only" }
    ],
    answerId: "a",
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
      { id: "a", text: "sedimentation and filtration" },
      { id: "b", text: "only adding more salt" },
      { id: "c", text: "weaving" },
      { id: "d", text: "sericulture" }
    ],
    answerId: "a",
    explanation: "Settle, then filter to clarify water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-a-q15",
    prompt: "Which method suits separating tea leaves from prepared tea?",
    options: [
      { id: "a", text: "Filtration/straining" },
      { id: "b", text: "Magnetic separation" },
      { id: "c", text: "Winnowing on a farm roof only" },
      { id: "d", text: "Shearing" }
    ],
    answerId: "a",
    explanation: "A strainer filters tea leaves.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-a-q16",
    prompt: "Alcohol mixed completely with water is best separated in later classes by —",
    options: [
      { id: "a", text: "distillation" },
      { id: "b", text: "handpicking" },
      { id: "c", text: "winnowing" },
      { id: "d", text: "magnetic separation" }
    ],
    answerId: "a",
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
      { id: "a", text: "Distilled water (approx. pure H2O)" },
      { id: "b", text: "Muddy river water" },
      { id: "c", text: "Air as a fixed compound" },
      { id: "d", text: "Trail mix" }
    ],
    answerId: "a",
    explanation: "Distilled water is essentially pure water; the others are mixtures.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-a-q19",
    prompt: "Air is best described as —",
    options: [
      { id: "a", text: "a mixture of gases" },
      { id: "b", text: "a single pure element only" },
      { id: "c", text: "a fabric" },
      { id: "d", text: "a vitamin" }
    ],
    answerId: "a",
    explanation: "Air contains nitrogen, oxygen and other gases mixed.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-a-q20",
    prompt: "Sieving flour removes —",
    options: [
      { id: "a", text: "larger impurities/lumps" },
      { id: "b", text: "all dissolved sugar" },
      { id: "c", text: "magnetic only dust" },
      { id: "d", text: "water by evaporation" }
    ],
    answerId: "a",
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
      { id: "a", text: "gas/vapour to liquid" },
      { id: "b", text: "liquid to solid always named condensation" },
      { id: "c", text: "solid to fibre" },
      { id: "d", text: "yarn to fabric" }
    ],
    answerId: "a",
    explanation: "Vapour cools to liquid in condensation.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-a-q23",
    prompt: "Why do we separate substances?",
    options: [
      { id: "a", text: "To get useful components or remove harmful ones" },
      { id: "b", text: "Only to weave cloth" },
      { id: "c", text: "Only to name angles" },
      { id: "d", text: "Never for any reason" }
    ],
    answerId: "a",
    explanation: "Separation yields useful materials and removes impurities.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-a-q24",
    prompt: "Which pair is a mixture?",
    options: [
      { id: "a", text: "Sand and salt" },
      { id: "b", text: "Distilled water only" },
      { id: "c", text: "Pure gold element sample" },
      { id: "d", text: "Oxygen gas alone as element sample" }
    ],
    answerId: "a",
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
      { id: "a", text: "the solid left behind" },
      { id: "b", text: "the liquid that passed" },
      { id: "c", text: "a gas only" },
      { id: "d", text: "a magnetic field" }
    ],
    answerId: "a",
    explanation: "Residue is the trapped solid; filtrate is the liquid that passed.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-b-q03",
    prompt: "Which separation uses heat and vapour?",
    options: [
      { id: "a", text: "Evaporation" },
      { id: "b", text: "Handpicking" },
      { id: "c", text: "Magnetic separation" },
      { id: "d", text: "Sieving dry sand only" }
    ],
    answerId: "a",
    explanation: "Evaporation needs heat (or sun) to vapourise liquid.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-b-q04",
    prompt: "Husk is separated from grain mainly by —",
    options: [
      { id: "a", text: "winnowing" },
      { id: "b", text: "reeling silk" },
      { id: "c", text: "sericulture" },
      { id: "d", text: "knitting" }
    ],
    answerId: "a",
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
      { id: "a", text: "fine clay settle faster by adding alum etc." },
      { id: "b", text: "spin silk" },
      { id: "c", text: "weave jute" },
      { id: "d", text: "grow cotton" }
    ],
    answerId: "a",
    explanation: "Alum helps fine suspended particles clump and settle.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-b-q07",
    prompt: "Which is insoluble in water?",
    options: [
      { id: "a", text: "Sand" },
      { id: "b", text: "Salt" },
      { id: "c", text: "Sugar" },
      { id: "d", text: "Lemon juice acids that dissolve" }
    ],
    answerId: "a",
    explanation: "Sand does not dissolve; salt and sugar do.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-b-q08",
    prompt: "Saturated solution means —",
    options: [
      { id: "a", text: "no more solute dissolves at that temperature" },
      { id: "b", text: "the beaker is empty" },
      { id: "c", text: "only gases present" },
      { id: "d", text: "a type of fabric" }
    ],
    answerId: "a",
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
      { id: "a", text: "Use a magnet" },
      { id: "b", text: "Evaporate with sun" },
      { id: "c", text: "Winnow as if husk identically always" },
      { id: "d", text: "Weave them" }
    ],
    answerId: "a",
    explanation: "Magnet removes iron quickly.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-b-q11",
    prompt: "Which change is reversible among these separations?",
    options: [
      { id: "a", text: "Dissolving salt then evaporating water to get salt back" },
      { id: "b", text: "Burning paper to ash" },
      { id: "c", text: "Cooking an egg hard" },
      { id: "d", text: "Rusting iron completely as oxide only" }
    ],
    answerId: "a",
    explanation: "Salt can be recovered by evaporating water — a reversible physical separation path.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-b-q12",
    prompt: "Filtrate is —",
    options: [
      { id: "a", text: "the liquid that passes through the filter" },
      { id: "b", text: "the solid on the paper only" },
      { id: "c", text: "a sheep" },
      { id: "d", text: "a loom" }
    ],
    answerId: "a",
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
      { id: "a", text: "Filter paper + funnel" },
      { id: "b", text: "Charkha" },
      { id: "c", text: "Protractor" },
      { id: "d", text: "Handloom" }
    ],
    answerId: "a",
    explanation: "Funnel and filter paper are standard.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-b-q15",
    prompt: "Separating colours of ink is an introduction to —",
    options: [
      { id: "a", text: "chromatography (later classes)" },
      { id: "b", text: "shearing" },
      { id: "c", text: "ginning" },
      { id: "d", text: "knitting" }
    ],
    answerId: "a",
    explanation: "Ink dyes can be separated by chromatography.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-b-q16",
    prompt: "Which is a heterogeneous mixture?",
    options: [
      { id: "a", text: "Sand in water" },
      { id: "b", text: "Salt completely dissolved in water" },
      { id: "c", text: "Sugar completely dissolved in water" },
      { id: "d", text: "Air well mixed as one phase discussion" }
    ],
    answerId: "a",
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
      { id: "a", text: "handpicking" },
      { id: "b", text: "distillation only" },
      { id: "c", text: "magnetic separation always" },
      { id: "d", text: "reeling" }
    ],
    answerId: "a",
    explanation: "Large pebbles are handpicked from dal.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-b-q19",
    prompt: "Which property is used in magnetic separation?",
    options: [
      { id: "a", text: "Magnetism" },
      { id: "b", text: "Colour only" },
      { id: "c", text: "Taste only" },
      { id: "d", text: "Smell only" }
    ],
    answerId: "a",
    explanation: "Magnetic materials respond to a magnet.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-b-q20",
    prompt: "Drying clothes in the sun mainly involves —",
    options: [
      { id: "a", text: "evaporation of water" },
      { id: "b", text: "sedimentation of cloth" },
      { id: "c", text: "magnetic drying" },
      { id: "d", text: "winnowing shirts" }
    ],
    answerId: "a",
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
      { id: "a", text: "allow settling, then filter (and further purify as needed)" },
      { id: "b", text: "add more mud" },
      { id: "c", text: "winnow it" },
      { id: "d", text: "shear it" }
    ],
    answerId: "a",
    explanation: "Sedimentation + filtration remove many solids (further purification may still be needed).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-b-q23",
    prompt: "Which mixture is best separated by sieving?",
    options: [
      { id: "a", text: "Pebbles mixed with sand" },
      { id: "b", text: "Salt dissolved in water" },
      { id: "c", text: "Alcohol in water" },
      { id: "d", text: "Cream in milk by sieve mesh only" }
    ],
    answerId: "a",
    explanation: "Different solid sizes → sieving works.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g6-sci-sep-b-q24",
    prompt: "The solid left after seawater evaporates is mainly —",
    options: [
      { id: "a", text: "salt" },
      { id: "b", text: "pure oxygen cakes" },
      { id: "c", text: "cotton fibre" },
      { id: "d", text: "wool" }
    ],
    answerId: "a",
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
