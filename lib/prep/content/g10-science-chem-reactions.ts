import type { ChapterDef, PrepQuestion } from "../types";

/** Chemical Reactions - authored olympiad-style content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g10-sci-chem-a-q01",
    prompt: "A chemical reaction in which heat is absorbed is called \u2014",
    options: [
      { id: "a", text: "displacement" },
      { id: "b", text: "exothermic" },
      { id: "c", text: "neutralisation" },
      { id: "d", text: "endothermic" }
    ],
    answerId: "d",
    explanation: "Endothermic reactions take in heat from the surroundings.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q02",
    prompt: "Rusting of iron is an example of \u2014",
    options: [
      { id: "a", text: "sublimation" },
      { id: "b", text: "oxidation / corrosion" },
      { id: "c", text: "reduction only" },
      { id: "d", text: "distillation" }
    ],
    answerId: "b",
    explanation: "Iron reacts with oxygen and moisture to form hydrated iron oxide (rust).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q03",
    prompt: "In the reaction Zn + CuSO\u2084 \u2192 ZnSO\u2084 + Cu, zinc \u2014",
    options: [
      { id: "a", text: "acts as an acid" },
      { id: "b", text: "is reduced" },
      { id: "c", text: "sublimes" },
      { id: "d", text: "displaces copper" }
    ],
    answerId: "d",
    explanation: "More reactive Zn displaces Cu from CuSO\u2084.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q04",
    prompt: "Balanced equation for hydrogen burning in oxygen is \u2014",
    options: [
      { id: "a", text: "H\u2082 + O \u2192 H\u2082O" },
      { id: "b", text: "H\u2082 + O\u2082 \u2192 H\u2082O" },
      { id: "c", text: "2H\u2082 + O\u2082 \u2192 H\u2082O\u2082" },
      { id: "d", text: "2H\u2082 + O\u2082 \u2192 2H\u2082O" }
    ],
    answerId: "d",
    explanation: "Two H\u2082 molecules need one O\u2082 to make two H\u2082O.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q05",
    prompt: "Quicklime reacts with water to give \u2014",
    options: [
      { id: "a", text: "limestone" },
      { id: "b", text: "CO\u2082 only" },
      { id: "c", text: "CaO\u2082" },
      { id: "d", text: "slaked lime (Ca(OH)\u2082) with heat release" }
    ],
    answerId: "d",
    explanation: "CaO + H\u2082O \u2192 Ca(OH)\u2082 is highly exothermic.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q06",
    prompt: "Which is a decomposition reaction?",
    options: [
      { id: "a", text: "Fe + S \u2192 FeS" },
      { id: "b", text: "2Pb(NO\u2083)\u2082 \u2192 2PbO + 4NO\u2082 + O\u2082" },
      { id: "c", text: "NaOH + HCl \u2192 NaCl + H\u2082O" },
      { id: "d", text: "Zn + CuSO\u2084 \u2192 ZnSO\u2084 + Cu" }
    ],
    answerId: "b",
    explanation: "One compound breaks into simpler products.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q07",
    prompt: "Oxidation is \u2014",
    options: [
      { id: "a", text: "only gain of hydrogen" },
      { id: "b", text: "melting" },
      { id: "c", text: "gain of oxygen or loss of hydrogen/electrons" },
      { id: "d", text: "only loss of oxygen" }
    ],
    answerId: "c",
    explanation: "Classical and electronic definitions of oxidation.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q08",
    prompt: "Rancidity in oils and fats is due to \u2014",
    options: [
      { id: "a", text: "sublimation" },
      { id: "b", text: "neutralisation" },
      { id: "c", text: "reduction by sugars" },
      { id: "d", text: "oxidation" }
    ],
    answerId: "d",
    explanation: "Fats oxidise when exposed to air, causing off smells.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q09",
    prompt: "A redox reaction involves \u2014",
    options: [
      { id: "a", text: "only neutralisation" },
      { id: "b", text: "only oxidation" },
      { id: "c", text: "both oxidation and reduction" },
      { id: "d", text: "only precipitation" }
    ],
    answerId: "c",
    explanation: "Oxidation and reduction occur together.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q10",
    prompt: "Which observation suggests a chemical change?",
    options: [
      { id: "a", text: "salt dissolving" },
      { id: "b", text: "gas evolution with new substance formed" },
      { id: "c", text: "ice melting" },
      { id: "d", text: "water boiling" }
    ],
    answerId: "b",
    explanation: "New substances (and often gas/heat/colour change) mark chemical change.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q11",
    prompt: "Fe\u2082O\u2083 + 2Al \u2192 2Fe + Al\u2082O\u2083 is used in \u2014",
    options: [
      { id: "a", text: "soap making" },
      { id: "b", text: "electroplating only" },
      { id: "c", text: "thermit welding" },
      { id: "d", text: "photosynthesis" }
    ],
    answerId: "c",
    explanation: "Highly exothermic displacement (thermite) welds rails.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q12",
    prompt: "Acid + base \u2192 salt + water is \u2014",
    options: [
      { id: "a", text: "neutralisation" },
      { id: "b", text: "double? also a double displacement" },
      { id: "c", text: "decomposition" },
      { id: "d", text: "displacement" }
    ],
    answerId: "a",
    explanation: "Classic neutralisation definition.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q13",
    prompt: "Which metal is most reactive among Na, Cu, Au?",
    options: [
      { id: "a", text: "Au" },
      { id: "b", text: "Na" },
      { id: "c", text: "Cu" },
      { id: "d", text: "all equal" }
    ],
    answerId: "b",
    explanation: "Sodium sits high in the reactivity series; gold is least reactive of these.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q14",
    prompt: "Precipitation reactions typically are \u2014",
    options: [
      { id: "a", text: "only electrolysis" },
      { id: "b", text: "only combustion" },
      { id: "c", text: "sublimation" },
      { id: "d", text: "double displacement forming an insoluble salt" }
    ],
    answerId: "d",
    explanation: "Ions swap and an insoluble product settles out.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q15",
    prompt: "Burning of magnesium ribbon in air produces \u2014",
    options: [
      { id: "a", text: "MgO (white ash) with bright light" },
      { id: "b", text: "MgSO\u2084" },
      { id: "c", text: "only soot" },
      { id: "d", text: "MgCl\u2082" }
    ],
    answerId: "a",
    explanation: "2Mg + O\u2082 \u2192 2MgO, highly exothermic with white light.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q16",
    prompt: "In electrolysis of water, the gas at the cathode is \u2014",
    options: [
      { id: "a", text: "oxygen" },
      { id: "b", text: "chlorine" },
      { id: "c", text: "hydrogen" },
      { id: "d", text: "nitrogen" }
    ],
    answerId: "c",
    explanation: "H\u207a ions gain electrons at the cathode \u2192 H\u2082.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q17",
    prompt: "Which prevents rancidity?",
    options: [
      { id: "a", text: "adding antioxidants / airtight packing" },
      { id: "b", text: "adding more oxygen" },
      { id: "c", text: "heating repeatedly with air" },
      { id: "d", text: "leaving oil open in sun" }
    ],
    answerId: "a",
    explanation: "Limit oxygen exposure or add antioxidants.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q18",
    prompt: "CuO + H\u2082 \u2192 Cu + H\u2082O: hydrogen acts as \u2014",
    options: [
      { id: "a", text: "a catalyst only" },
      { id: "b", text: "an acid" },
      { id: "c", text: "a reducing agent" },
      { id: "d", text: "an oxidising agent" }
    ],
    answerId: "c",
    explanation: "H\u2082 removes oxygen from CuO, so H\u2082 is oxidised and CuO reduced.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q19",
    prompt: "The brown gas in thermal decomposition of lead nitrate is \u2014",
    options: [
      { id: "a", text: "O\u2082 only" },
      { id: "b", text: "N\u2082" },
      { id: "c", text: "NO\u2082" },
      { id: "d", text: "CO\u2082" }
    ],
    answerId: "c",
    explanation: "2Pb(NO\u2083)\u2082 \u2192 2PbO + 4NO\u2082 + O\u2082; NO\u2082 is brown.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q20",
    prompt: "Combination reaction example:",
    options: [
      { id: "a", text: "Zn + H\u2082SO\u2084 \u2192 ZnSO\u2084 + H\u2082" },
      { id: "b", text: "C + O\u2082 \u2192 CO\u2082" },
      { id: "c", text: "CaCO\u2083 \u2192 CaO + CO\u2082" },
      { id: "d", text: "AgNO\u2083 + NaCl \u2192 AgCl + NaNO\u2083" }
    ],
    answerId: "b",
    explanation: "Two or more substances combine into one.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q21",
    prompt: "Whitewashing uses which reaction after slaked lime on walls?",
    options: [
      { id: "a", text: "CaO + SiO\u2082 \u2192 slag" },
      { id: "b", text: "Ca(OH)\u2082 + CO\u2082 \u2192 CaCO\u2083 + H\u2082O" },
      { id: "c", text: "Ca + H\u2082O \u2192 Ca(OH)\u2082" },
      { id: "d", text: "CaCO\u2083 \u2192 CaO + CO\u2082" }
    ],
    answerId: "b",
    explanation: "Carbon dioxide turns slaked lime into hard CaCO\u2083.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q22",
    prompt: "Galvanisation protects iron by coating with \u2014",
    options: [
      { id: "a", text: "zinc" },
      { id: "b", text: "lead" },
      { id: "c", text: "copper only" },
      { id: "d", text: "silver" }
    ],
    answerId: "a",
    explanation: "Zinc coating (galvanising) sacrificially protects iron.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q23",
    prompt: "In 2Na + 2H\u2082O \u2192 2NaOH + H\u2082, sodium is \u2014",
    options: [
      { id: "a", text: "oxidised" },
      { id: "b", text: "reduced" },
      { id: "c", text: "precipitated" },
      { id: "d", text: "a catalyst" }
    ],
    answerId: "a",
    explanation: "Na loses electrons to form Na\u207a in NaOH.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q24",
    prompt: "Balancing: __ Fe + __ H\u2082O \u2192 __ Fe\u2083O\u2084 + __ H\u2082. Coefficients are \u2014",
    options: [
      { id: "a", text: "3, 4, 1, 4" },
      { id: "b", text: "1, 1, 1, 1" },
      { id: "c", text: "2, 3, 1, 3" },
      { id: "d", text: "3, 2, 1, 2" }
    ],
    answerId: "a",
    explanation: "3Fe + 4H\u2082O \u2192 Fe\u2083O\u2084 + 4H\u2082.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g10-sci-chem-b-q01",
    prompt: "Exothermic reactions \u2014",
    options: [
      { id: "a", text: "release heat to surroundings" },
      { id: "b", text: "always absorb heat" },
      { id: "c", text: "only occur in darkness" },
      { id: "d", text: "never change temperature" }
    ],
    answerId: "a",
    explanation: "Energy is given out as heat/light.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q02",
    prompt: "Which is NOT a chemical change?",
    options: [
      { id: "a", text: "burning of wax" },
      { id: "b", text: "digestion of food" },
      { id: "c", text: "rusting of iron" },
      { id: "d", text: "melting of wax" }
    ],
    answerId: "d",
    explanation: "Melting is physical; composition stays C\u2099H\u2098.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q03",
    prompt: "Double displacement: BaCl\u2082 + Na\u2082SO\u2084 \u2192 \u2014",
    options: [
      { id: "a", text: "BaSO\u2084\u2193 + 2NaCl" },
      { id: "b", text: "Na\u2082Ba" },
      { id: "c", text: "BaSO\u2084 + NaCl only unbalanced" },
      { id: "d", text: "Ba + Cl\u2082" }
    ],
    answerId: "a",
    explanation: "BaSO\u2084 precipitates; sodium chloride stays dissolved.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q04",
    prompt: "Corrosion of copper in moist air forms a green coating of \u2014",
    options: [
      { id: "a", text: "pure copper oxide black only always" },
      { id: "b", text: "basic copper carbonate" },
      { id: "c", text: "copper sulphate only" },
      { id: "d", text: "copper metal" }
    ],
    answerId: "b",
    explanation: "Patina is basic copper carbonate (and related compounds).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q05",
    prompt: "In the reactivity series, which displaces H\u2082 from dilute acids most readily among Zn, Cu, Ag?",
    options: [
      { id: "a", text: "Cu" },
      { id: "b", text: "Ag" },
      { id: "c", text: "Zn" },
      { id: "d", text: "none" }
    ],
    answerId: "c",
    explanation: "Zn is above hydrogen; Cu and Ag are below.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q06",
    prompt: "Photosynthesis is overall \u2014",
    options: [
      { id: "a", text: "electrolysis" },
      { id: "b", text: "endothermic (needs sunlight)" },
      { id: "c", text: "a displacement of metals" },
      { id: "d", text: "exothermic like burning" }
    ],
    answerId: "b",
    explanation: "Light energy is absorbed to make glucose.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q07",
    prompt: "Identifying gases: a gas that turns limewater milky is \u2014",
    options: [
      { id: "a", text: "O\u2082" },
      { id: "b", text: "H\u2082" },
      { id: "c", text: "N\u2082" },
      { id: "d", text: "CO\u2082" }
    ],
    answerId: "d",
    explanation: "CO\u2082 + Ca(OH)\u2082 \u2192 CaCO\u2083\u2193 + H\u2082O.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q08",
    prompt: "H\u2082 gas burns with a \u2014",
    options: [
      { id: "a", text: "no reaction" },
      { id: "b", text: "purple smoke always" },
      { id: "c", text: "pop sound" },
      { id: "d", text: "green flame only" }
    ],
    answerId: "c",
    explanation: "Classic pop test for hydrogen.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q09",
    prompt: "Oxygen relights a glowing splint because it \u2014",
    options: [
      { id: "a", text: "is inert" },
      { id: "b", text: "is a noble gas" },
      { id: "c", text: "is acidic" },
      { id: "d", text: "supports combustion" }
    ],
    answerId: "d",
    explanation: "O\u2082 is needed for combustion to resume.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q10",
    prompt: "Neutralisation of HCl with NaOH produces \u2014",
    options: [
      { id: "a", text: "NaOH only" },
      { id: "b", text: "Cl\u2082 gas" },
      { id: "c", text: "NaCl and H\u2082O" },
      { id: "d", text: "H\u2082 only" }
    ],
    answerId: "c",
    explanation: "HCl + NaOH \u2192 NaCl + H\u2082O.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q11",
    prompt: "Which equation is balanced?",
    options: [
      { id: "a", text: "CH\u2084 + 2O\u2082 \u2192 CO\u2082 + H\u2082O" },
      { id: "b", text: "C + O\u2082 \u2192 CO" },
      { id: "c", text: "CH\u2084 + O\u2082 \u2192 CO\u2082 + H\u2082O" },
      { id: "d", text: "CH\u2084 + 2O\u2082 \u2192 CO\u2082 + 2H\u2082O" }
    ],
    answerId: "d",
    explanation: "C:1, H:4, O:4 on both sides.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q12",
    prompt: "Electrolytic refining of copper uses \u2014",
    options: [
      { id: "a", text: "iron electrodes" },
      { id: "b", text: "impure Cu anode, pure Cu cathode, CuSO\u2084 electrolyte" },
      { id: "c", text: "only water" },
      { id: "d", text: "zinc anode always" }
    ],
    answerId: "b",
    explanation: "Cu dissolves from anode and deposits pure on cathode.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q13",
    prompt: "A shiny brown coin turns green: the change is mainly \u2014",
    options: [
      { id: "a", text: "magnetic" },
      { id: "b", text: "only physical polishing loss" },
      { id: "c", text: "chemical (corrosion)" },
      { id: "d", text: "melting" }
    ],
    answerId: "c",
    explanation: "Surface compounds form \u2014 a chemical change.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q14",
    prompt: "In MnO\u2082 + 4HCl \u2192 MnCl\u2082 + 2H\u2082O + Cl\u2082, MnO\u2082 acts as \u2014",
    options: [
      { id: "a", text: "an oxidising agent" },
      { id: "b", text: "a reducing agent" },
      { id: "c", text: "a base" },
      { id: "d", text: "an acid" }
    ],
    answerId: "a",
    explanation: "MnO\u2082 oxidises Cl\u207b to Cl\u2082 and is itself reduced.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q15",
    prompt: "Food cans are coated with tin because tin is \u2014",
    options: [
      { id: "a", text: "less reactive and non-toxic lining" },
      { id: "b", text: "magnetic" },
      { id: "c", text: "more reactive than iron always for food" },
      { id: "d", text: "a gas" }
    ],
    answerId: "a",
    explanation: "Tin plating protects and is food-safe.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q16",
    prompt: "Respiration is overall \u2014",
    options: [
      { id: "a", text: "neutralisation" },
      { id: "b", text: "sublimation" },
      { id: "c", text: "exothermic" },
      { id: "d", text: "endothermic" }
    ],
    answerId: "c",
    explanation: "Glucose oxidation releases energy for cells.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q17",
    prompt: "Which pair is a redox pair in ZnO + C \u2192 Zn + CO?",
    options: [
      { id: "a", text: "C oxidised, ZnO reduced" },
      { id: "b", text: "neither" },
      { id: "c", text: "both reduced" },
      { id: "d", text: "both oxidised" }
    ],
    answerId: "a",
    explanation: "Carbon gains oxygen (oxidised); ZnO loses oxygen (reduced).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q18",
    prompt: "Dilute H\u2082SO\u2084 on zinc liberates a gas that \u2014",
    options: [
      { id: "a", text: "bleaches litmus permanently as Cl\u2082" },
      { id: "b", text: "burns with a pop" },
      { id: "c", text: "turns limewater milky" },
      { id: "d", text: "relights a glowing splint" }
    ],
    answerId: "b",
    explanation: "Zn + H\u2082SO\u2084 \u2192 ZnSO\u2084 + H\u2082.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q19",
    prompt: "Marble chips with dilute HCl produce \u2014",
    options: [
      { id: "a", text: "N\u2082" },
      { id: "b", text: "CO\u2082" },
      { id: "c", text: "O\u2082" },
      { id: "d", text: "H\u2082" }
    ],
    answerId: "b",
    explanation: "CaCO\u2083 + 2HCl \u2192 CaCl\u2082 + H\u2082O + CO\u2082.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q20",
    prompt: "Black CuO heated with hydrogen becomes brownish Cu. This shows \u2014",
    options: [
      { id: "a", text: "oxidation of CuO" },
      { id: "b", text: "neutralisation" },
      { id: "c", text: "reduction of CuO" },
      { id: "d", text: "CuO sublimed" }
    ],
    answerId: "c",
    explanation: "CuO loses oxygen \u2192 copper metal.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q21",
    prompt: "Antacids work mainly by \u2014",
    options: [
      { id: "a", text: "precipitating gold" },
      { id: "b", text: "reducing enzymes" },
      { id: "c", text: "oxidising food" },
      { id: "d", text: "neutralising excess stomach acid" }
    ],
    answerId: "d",
    explanation: "Bases like Mg(OH)\u2082 neutralise HCl.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q22",
    prompt: "Which is an example of a photochemical reaction?",
    options: [
      { id: "a", text: "dissolving sugar" },
      { id: "b", text: "2AgBr \u2192 2Ag + Br\u2082 (light)" },
      { id: "c", text: "melting ice" },
      { id: "d", text: "rusting in a closed box" }
    ],
    answerId: "b",
    explanation: "Silver bromide decomposes in light (photography).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q23",
    prompt: "To balance Al + Fe\u2082O\u2083 \u2192 Al\u2082O\u2083 + Fe, correct coefficients include \u2014",
    options: [
      { id: "a", text: "2Al + Fe\u2082O\u2083 \u2192 Al\u2082O\u2083 + 2Fe" },
      { id: "b", text: "4Al + \u2026" },
      { id: "c", text: "3Al + Fe\u2082O\u2083 \u2192 \u2026" },
      { id: "d", text: "Al + Fe\u2082O\u2083 \u2192 Al\u2082O\u2083 + Fe" }
    ],
    answerId: "a",
    explanation: "2 Al atoms make one Al\u2082O\u2083; Fe\u2082O\u2083 gives 2 Fe.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q24",
    prompt: "Chips bags are flushed with nitrogen to \u2014",
    options: [
      { id: "a", text: "make them heavier" },
      { id: "b", text: "add nutrients" },
      { id: "c", text: "cause rusting" },
      { id: "d", text: "prevent oxidation / rancidity" }
    ],
    answerId: "d",
    explanation: "Inert N\u2082 displaces oxygen that would oxidise fats.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\u2697\ufe0f",
    title: "Chemical Reactions",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "atom-lite",
    speak: "Atoms rearrange. Balance equations and spot redox, heat, and precipitates.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "atom-lite",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Types", reveal: "Combine, decompose, displace, double displace", emoji: "\ud83d\udd00" },
      { label: "Redox", reveal: "Oxidation and reduction together", emoji: "\ud83d\udd0b" },
      { label: "Energy", reveal: "Exo releases heat; endo absorbs", emoji: "\ud83c\udf21\ufe0f" },
      { label: "Everyday", reveal: "Rust, rancidity, neutralisation", emoji: "\ud83c\udfe0" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Rusting of iron needs \u2014",
    options: [
        { id: "a", text: "air and moisture" },
        { id: "b", text: "only darkness" },
        { id: "c", text: "only pure N\u2082" },
        { id: "d", text: "vacuum" }
    ],
    answerId: "a",
    why: "Oxygen and water together drive rust formation.",
    visual: "atom-lite",
    speak: "Rusting of iron needs \u2014",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Reactions toolkit", "Balance atoms", "Spot redox", "Protect from rust & rancidity"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g10ScienceChemReactions: ChapterDef = {
  id: "chem-reactions",
  title: "Chemical Reactions",
  emoji: "\u2697\ufe0f",
  blurb: "Balance, redox, rust & rancidity",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "matter-lite",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "matter-lite",
      questions: SET_B,
    },
  ],
  paperTopics: ["matter-lite"],
};

export const g10ScienceChemReactionsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
