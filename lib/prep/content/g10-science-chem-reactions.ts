import type { ChapterDef, PrepQuestion } from "../types";

/** Chemical Reactions - authored olympiad-style content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g10-sci-chem-a-q01",
    prompt: "A chemical reaction in which heat is absorbed is called \u2014",
    options: [
      { id: "a", text: "endothermic" },
      { id: "b", text: "exothermic" },
      { id: "c", text: "displacement" },
      { id: "d", text: "neutralisation" }
    ],
    answerId: "a",
    explanation: "Endothermic reactions take in heat from the surroundings.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q02",
    prompt: "Rusting of iron is an example of \u2014",
    options: [
      { id: "a", text: "oxidation / corrosion" },
      { id: "b", text: "reduction only" },
      { id: "c", text: "sublimation" },
      { id: "d", text: "distillation" }
    ],
    answerId: "a",
    explanation: "Iron reacts with oxygen and moisture to form hydrated iron oxide (rust).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q03",
    prompt: "In the reaction Zn + CuSO\u2084 \u2192 ZnSO\u2084 + Cu, zinc \u2014",
    options: [
      { id: "a", text: "displaces copper" },
      { id: "b", text: "is reduced" },
      { id: "c", text: "acts as an acid" },
      { id: "d", text: "sublimes" }
    ],
    answerId: "a",
    explanation: "More reactive Zn displaces Cu from CuSO\u2084.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q04",
    prompt: "Balanced equation for hydrogen burning in oxygen is \u2014",
    options: [
      { id: "a", text: "2H\u2082 + O\u2082 \u2192 2H\u2082O" },
      { id: "b", text: "H\u2082 + O\u2082 \u2192 H\u2082O" },
      { id: "c", text: "H\u2082 + O \u2192 H\u2082O" },
      { id: "d", text: "2H\u2082 + O\u2082 \u2192 H\u2082O\u2082" }
    ],
    answerId: "a",
    explanation: "Two H\u2082 molecules need one O\u2082 to make two H\u2082O.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q05",
    prompt: "Quicklime reacts with water to give \u2014",
    options: [
      { id: "a", text: "slaked lime (Ca(OH)\u2082) with heat release" },
      { id: "b", text: "limestone" },
      { id: "c", text: "CO\u2082 only" },
      { id: "d", text: "CaO\u2082" }
    ],
    answerId: "a",
    explanation: "CaO + H\u2082O \u2192 Ca(OH)\u2082 is highly exothermic.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q06",
    prompt: "Which is a decomposition reaction?",
    options: [
      { id: "a", text: "2Pb(NO\u2083)\u2082 \u2192 2PbO + 4NO\u2082 + O\u2082" },
      { id: "b", text: "Zn + CuSO\u2084 \u2192 ZnSO\u2084 + Cu" },
      { id: "c", text: "NaOH + HCl \u2192 NaCl + H\u2082O" },
      { id: "d", text: "Fe + S \u2192 FeS" }
    ],
    answerId: "a",
    explanation: "One compound breaks into simpler products.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q07",
    prompt: "Oxidation is \u2014",
    options: [
      { id: "a", text: "gain of oxygen or loss of hydrogen/electrons" },
      { id: "b", text: "only gain of hydrogen" },
      { id: "c", text: "only loss of oxygen" },
      { id: "d", text: "melting" }
    ],
    answerId: "a",
    explanation: "Classical and electronic definitions of oxidation.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q08",
    prompt: "Rancidity in oils and fats is due to \u2014",
    options: [
      { id: "a", text: "oxidation" },
      { id: "b", text: "reduction by sugars" },
      { id: "c", text: "neutralisation" },
      { id: "d", text: "sublimation" }
    ],
    answerId: "a",
    explanation: "Fats oxidise when exposed to air, causing off smells.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q09",
    prompt: "A redox reaction involves \u2014",
    options: [
      { id: "a", text: "both oxidation and reduction" },
      { id: "b", text: "only oxidation" },
      { id: "c", text: "only precipitation" },
      { id: "d", text: "only neutralisation" }
    ],
    answerId: "a",
    explanation: "Oxidation and reduction occur together.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q10",
    prompt: "Which observation suggests a chemical change?",
    options: [
      { id: "a", text: "gas evolution with new substance formed" },
      { id: "b", text: "ice melting" },
      { id: "c", text: "salt dissolving" },
      { id: "d", text: "water boiling" }
    ],
    answerId: "a",
    explanation: "New substances (and often gas/heat/colour change) mark chemical change.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q11",
    prompt: "Fe\u2082O\u2083 + 2Al \u2192 2Fe + Al\u2082O\u2083 is used in \u2014",
    options: [
      { id: "a", text: "thermit welding" },
      { id: "b", text: "photosynthesis" },
      { id: "c", text: "electroplating only" },
      { id: "d", text: "soap making" }
    ],
    answerId: "a",
    explanation: "Highly exothermic displacement (thermite) welds rails.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q12",
    prompt: "Acid + base \u2192 salt + water is \u2014",
    options: [
      { id: "a", text: "neutralisation" },
      { id: "b", text: "displacement" },
      { id: "c", text: "decomposition" },
      { id: "d", text: "double? also a double displacement" }
    ],
    answerId: "a",
    explanation: "Classic neutralisation definition.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q13",
    prompt: "Which metal is most reactive among Na, Cu, Au?",
    options: [
      { id: "a", text: "Na" },
      { id: "b", text: "Cu" },
      { id: "c", text: "Au" },
      { id: "d", text: "all equal" }
    ],
    answerId: "a",
    explanation: "Sodium sits high in the reactivity series; gold is least reactive of these.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q14",
    prompt: "Precipitation reactions typically are \u2014",
    options: [
      { id: "a", text: "double displacement forming an insoluble salt" },
      { id: "b", text: "only combustion" },
      { id: "c", text: "only electrolysis" },
      { id: "d", text: "sublimation" }
    ],
    answerId: "a",
    explanation: "Ions swap and an insoluble product settles out.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q15",
    prompt: "Burning of magnesium ribbon in air produces \u2014",
    options: [
      { id: "a", text: "MgO (white ash) with bright light" },
      { id: "b", text: "MgCl\u2082" },
      { id: "c", text: "only soot" },
      { id: "d", text: "MgSO\u2084" }
    ],
    answerId: "a",
    explanation: "2Mg + O\u2082 \u2192 2MgO, highly exothermic with white light.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q16",
    prompt: "In electrolysis of water, the gas at the cathode is \u2014",
    options: [
      { id: "a", text: "hydrogen" },
      { id: "b", text: "oxygen" },
      { id: "c", text: "chlorine" },
      { id: "d", text: "nitrogen" }
    ],
    answerId: "a",
    explanation: "H\u207a ions gain electrons at the cathode \u2192 H\u2082.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q17",
    prompt: "Which prevents rancidity?",
    options: [
      { id: "a", text: "adding antioxidants / airtight packing" },
      { id: "b", text: "leaving oil open in sun" },
      { id: "c", text: "heating repeatedly with air" },
      { id: "d", text: "adding more oxygen" }
    ],
    answerId: "a",
    explanation: "Limit oxygen exposure or add antioxidants.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q18",
    prompt: "CuO + H\u2082 \u2192 Cu + H\u2082O: hydrogen acts as \u2014",
    options: [
      { id: "a", text: "a reducing agent" },
      { id: "b", text: "an oxidising agent" },
      { id: "c", text: "a catalyst only" },
      { id: "d", text: "an acid" }
    ],
    answerId: "a",
    explanation: "H\u2082 removes oxygen from CuO, so H\u2082 is oxidised and CuO reduced.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q19",
    prompt: "The brown gas in thermal decomposition of lead nitrate is \u2014",
    options: [
      { id: "a", text: "NO\u2082" },
      { id: "b", text: "N\u2082" },
      { id: "c", text: "O\u2082 only" },
      { id: "d", text: "CO\u2082" }
    ],
    answerId: "a",
    explanation: "2Pb(NO\u2083)\u2082 \u2192 2PbO + 4NO\u2082 + O\u2082; NO\u2082 is brown.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q20",
    prompt: "Combination reaction example:",
    options: [
      { id: "a", text: "C + O\u2082 \u2192 CO\u2082" },
      { id: "b", text: "CaCO\u2083 \u2192 CaO + CO\u2082" },
      { id: "c", text: "Zn + H\u2082SO\u2084 \u2192 ZnSO\u2084 + H\u2082" },
      { id: "d", text: "AgNO\u2083 + NaCl \u2192 AgCl + NaNO\u2083" }
    ],
    answerId: "a",
    explanation: "Two or more substances combine into one.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q21",
    prompt: "Whitewashing uses which reaction after slaked lime on walls?",
    options: [
      { id: "a", text: "Ca(OH)\u2082 + CO\u2082 \u2192 CaCO\u2083 + H\u2082O" },
      { id: "b", text: "CaCO\u2083 \u2192 CaO + CO\u2082" },
      { id: "c", text: "Ca + H\u2082O \u2192 Ca(OH)\u2082" },
      { id: "d", text: "CaO + SiO\u2082 \u2192 slag" }
    ],
    answerId: "a",
    explanation: "Carbon dioxide turns slaked lime into hard CaCO\u2083.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-a-q22",
    prompt: "Galvanisation protects iron by coating with \u2014",
    options: [
      { id: "a", text: "zinc" },
      { id: "b", text: "copper only" },
      { id: "c", text: "silver" },
      { id: "d", text: "lead" }
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
      { id: "c", text: "a catalyst" },
      { id: "d", text: "precipitated" }
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
      { id: "c", text: "never change temperature" },
      { id: "d", text: "only occur in darkness" }
    ],
    answerId: "a",
    explanation: "Energy is given out as heat/light.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q02",
    prompt: "Which is NOT a chemical change?",
    options: [
      { id: "a", text: "melting of wax" },
      { id: "b", text: "burning of wax" },
      { id: "c", text: "rusting of iron" },
      { id: "d", text: "digestion of food" }
    ],
    answerId: "a",
    explanation: "Melting is physical; composition stays C\u2099H\u2098.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q03",
    prompt: "Double displacement: BaCl\u2082 + Na\u2082SO\u2084 \u2192 \u2014",
    options: [
      { id: "a", text: "BaSO\u2084\u2193 + 2NaCl" },
      { id: "b", text: "BaSO\u2084 + NaCl only unbalanced" },
      { id: "c", text: "Ba + Cl\u2082" },
      { id: "d", text: "Na\u2082Ba" }
    ],
    answerId: "a",
    explanation: "BaSO\u2084 precipitates; sodium chloride stays dissolved.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q04",
    prompt: "Corrosion of copper in moist air forms a green coating of \u2014",
    options: [
      { id: "a", text: "basic copper carbonate" },
      { id: "b", text: "copper sulphate only" },
      { id: "c", text: "pure copper oxide black only always" },
      { id: "d", text: "copper metal" }
    ],
    answerId: "a",
    explanation: "Patina is basic copper carbonate (and related compounds).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q05",
    prompt: "In the reactivity series, which displaces H\u2082 from dilute acids most readily among Zn, Cu, Ag?",
    options: [
      { id: "a", text: "Zn" },
      { id: "b", text: "Cu" },
      { id: "c", text: "Ag" },
      { id: "d", text: "none" }
    ],
    answerId: "a",
    explanation: "Zn is above hydrogen; Cu and Ag are below.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q06",
    prompt: "Photosynthesis is overall \u2014",
    options: [
      { id: "a", text: "endothermic (needs sunlight)" },
      { id: "b", text: "exothermic like burning" },
      { id: "c", text: "a displacement of metals" },
      { id: "d", text: "electrolysis" }
    ],
    answerId: "a",
    explanation: "Light energy is absorbed to make glucose.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q07",
    prompt: "Identifying gases: a gas that turns limewater milky is \u2014",
    options: [
      { id: "a", text: "CO\u2082" },
      { id: "b", text: "H\u2082" },
      { id: "c", text: "O\u2082" },
      { id: "d", text: "N\u2082" }
    ],
    answerId: "a",
    explanation: "CO\u2082 + Ca(OH)\u2082 \u2192 CaCO\u2083\u2193 + H\u2082O.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q08",
    prompt: "H\u2082 gas burns with a \u2014",
    options: [
      { id: "a", text: "pop sound" },
      { id: "b", text: "green flame only" },
      { id: "c", text: "no reaction" },
      { id: "d", text: "purple smoke always" }
    ],
    answerId: "a",
    explanation: "Classic pop test for hydrogen.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q09",
    prompt: "Oxygen relights a glowing splint because it \u2014",
    options: [
      { id: "a", text: "supports combustion" },
      { id: "b", text: "is inert" },
      { id: "c", text: "is acidic" },
      { id: "d", text: "is a noble gas" }
    ],
    answerId: "a",
    explanation: "O\u2082 is needed for combustion to resume.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q10",
    prompt: "Neutralisation of HCl with NaOH produces \u2014",
    options: [
      { id: "a", text: "NaCl and H\u2082O" },
      { id: "b", text: "NaOH only" },
      { id: "c", text: "Cl\u2082 gas" },
      { id: "d", text: "H\u2082 only" }
    ],
    answerId: "a",
    explanation: "HCl + NaOH \u2192 NaCl + H\u2082O.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q11",
    prompt: "Which equation is balanced?",
    options: [
      { id: "a", text: "CH\u2084 + 2O\u2082 \u2192 CO\u2082 + 2H\u2082O" },
      { id: "b", text: "CH\u2084 + O\u2082 \u2192 CO\u2082 + H\u2082O" },
      { id: "c", text: "CH\u2084 + 2O\u2082 \u2192 CO\u2082 + H\u2082O" },
      { id: "d", text: "C + O\u2082 \u2192 CO" }
    ],
    answerId: "a",
    explanation: "C:1, H:4, O:4 on both sides.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q12",
    prompt: "Electrolytic refining of copper uses \u2014",
    options: [
      { id: "a", text: "impure Cu anode, pure Cu cathode, CuSO\u2084 electrolyte" },
      { id: "b", text: "iron electrodes" },
      { id: "c", text: "only water" },
      { id: "d", text: "zinc anode always" }
    ],
    answerId: "a",
    explanation: "Cu dissolves from anode and deposits pure on cathode.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q13",
    prompt: "A shiny brown coin turns green: the change is mainly \u2014",
    options: [
      { id: "a", text: "chemical (corrosion)" },
      { id: "b", text: "only physical polishing loss" },
      { id: "c", text: "melting" },
      { id: "d", text: "magnetic" }
    ],
    answerId: "a",
    explanation: "Surface compounds form \u2014 a chemical change.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q14",
    prompt: "In MnO\u2082 + 4HCl \u2192 MnCl\u2082 + 2H\u2082O + Cl\u2082, MnO\u2082 acts as \u2014",
    options: [
      { id: "a", text: "an oxidising agent" },
      { id: "b", text: "a reducing agent" },
      { id: "c", text: "an acid" },
      { id: "d", text: "a base" }
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
      { id: "b", text: "more reactive than iron always for food" },
      { id: "c", text: "magnetic" },
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
      { id: "a", text: "exothermic" },
      { id: "b", text: "endothermic" },
      { id: "c", text: "neutralisation" },
      { id: "d", text: "sublimation" }
    ],
    answerId: "a",
    explanation: "Glucose oxidation releases energy for cells.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q17",
    prompt: "Which pair is a redox pair in ZnO + C \u2192 Zn + CO?",
    options: [
      { id: "a", text: "C oxidised, ZnO reduced" },
      { id: "b", text: "both oxidised" },
      { id: "c", text: "both reduced" },
      { id: "d", text: "neither" }
    ],
    answerId: "a",
    explanation: "Carbon gains oxygen (oxidised); ZnO loses oxygen (reduced).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q18",
    prompt: "Dilute H\u2082SO\u2084 on zinc liberates a gas that \u2014",
    options: [
      { id: "a", text: "burns with a pop" },
      { id: "b", text: "turns limewater milky" },
      { id: "c", text: "relights a glowing splint" },
      { id: "d", text: "bleaches litmus permanently as Cl\u2082" }
    ],
    answerId: "a",
    explanation: "Zn + H\u2082SO\u2084 \u2192 ZnSO\u2084 + H\u2082.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q19",
    prompt: "Marble chips with dilute HCl produce \u2014",
    options: [
      { id: "a", text: "CO\u2082" },
      { id: "b", text: "O\u2082" },
      { id: "c", text: "H\u2082" },
      { id: "d", text: "N\u2082" }
    ],
    answerId: "a",
    explanation: "CaCO\u2083 + 2HCl \u2192 CaCl\u2082 + H\u2082O + CO\u2082.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q20",
    prompt: "Black CuO heated with hydrogen becomes brownish Cu. This shows \u2014",
    options: [
      { id: "a", text: "reduction of CuO" },
      { id: "b", text: "oxidation of CuO" },
      { id: "c", text: "CuO sublimed" },
      { id: "d", text: "neutralisation" }
    ],
    answerId: "a",
    explanation: "CuO loses oxygen \u2192 copper metal.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q21",
    prompt: "Antacids work mainly by \u2014",
    options: [
      { id: "a", text: "neutralising excess stomach acid" },
      { id: "b", text: "oxidising food" },
      { id: "c", text: "reducing enzymes" },
      { id: "d", text: "precipitating gold" }
    ],
    answerId: "a",
    explanation: "Bases like Mg(OH)\u2082 neutralise HCl.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q22",
    prompt: "Which is an example of a photochemical reaction?",
    options: [
      { id: "a", text: "2AgBr \u2192 2Ag + Br\u2082 (light)" },
      { id: "b", text: "rusting in a closed box" },
      { id: "c", text: "dissolving sugar" },
      { id: "d", text: "melting ice" }
    ],
    answerId: "a",
    explanation: "Silver bromide decomposes in light (photography).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q23",
    prompt: "To balance Al + Fe\u2082O\u2083 \u2192 Al\u2082O\u2083 + Fe, correct coefficients include \u2014",
    options: [
      { id: "a", text: "2Al + Fe\u2082O\u2083 \u2192 Al\u2082O\u2083 + 2Fe" },
      { id: "b", text: "Al + Fe\u2082O\u2083 \u2192 Al\u2082O\u2083 + Fe" },
      { id: "c", text: "3Al + Fe\u2082O\u2083 \u2192 \u2026" },
      { id: "d", text: "4Al + \u2026" }
    ],
    answerId: "a",
    explanation: "2 Al atoms make one Al\u2082O\u2083; Fe\u2082O\u2083 gives 2 Fe.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-chem-b-q24",
    prompt: "Chips bags are flushed with nitrogen to \u2014",
    options: [
      { id: "a", text: "prevent oxidation / rancidity" },
      { id: "b", text: "add nutrients" },
      { id: "c", text: "make them heavier" },
      { id: "d", text: "cause rusting" }
    ],
    answerId: "a",
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
