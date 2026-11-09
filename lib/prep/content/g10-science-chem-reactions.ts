import type { ChapterDef, PrepQuestion } from "../types";

/** Chemical Reactions - original olympiad-style content (not affiliated with SOF). */

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
    explanation: "Endothermic reactions take in heat from the surroundings. 'Exothermic' is tempting because the word also deals with heat, but exothermic reactions give heat out.",
    hints: ["Endo = heat in; exo = heat out."]
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
    hints: ["Rust forms when iron reacts with oxygen and moisture over time. Which processes name that kind of reaction?"]
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
    explanation: "Zinc is more reactive than copper, so it pushes copper out of CuSO₄. 'Is reduced' is tempting because a change happens to zinc, but zinc loses electrons and is oxidised; copper ions are reduced.",
    hints: ["Compare reactivity: Zn above Cu in the series."]
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
    explanation: "Two H₂ molecules react with one O₂ to give two H₂O, so H and O both balance (4 H, 2 O). H₂ + O₂ → H₂O is tempting because it has the right substances, but it has 2 O atoms on the left and only 1 on the right.",
    hints: ["Count H and O atoms on both sides. Hydrogen and oxygen are diatomic, so the product must balance both."]
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
    explanation: "CaO + H₂O → Ca(OH)₂, slaked lime, with a lot of heat given out. 'Limestone' is tempting because quicklime is made from limestone, but adding water gives slaked lime, not CaCO₃.",
    hints: ["Quicklime is CaO; adding water slakes it."]
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
    explanation: "Heating lead nitrate breaks one compound into PbO, NO₂ and O₂, which is decomposition. Fe + S → FeS is tempting because it is also a simple reaction, but two substances join, so it is combination.",
    hints: ["Decomposition: one reactant → multiple products."]
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
    explanation: "Oxidation is gain of oxygen, loss of hydrogen, or loss of electrons. 'Only gain of hydrogen' is tempting because hydrogen is involved, but gaining hydrogen is reduction.",
    hints: ["Watch for the word 'only'. Oxidation has more than one textbook definition. Which choice does not limit it to one idea?"]
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
    explanation: "Fats and oils react with oxygen in air and go rancid, with a bad smell and taste. 'Reduction by sugars' is tempting because food chemistry is involved, but rancidity is an oxidation, not a reduction.",
    hints: ["Air and light speed up rancidity."]
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
    explanation: "In a redox reaction one substance is oxidised while another is reduced; the two always happen together. 'Only oxidation' is tempting because oxidation is easier to spot, but the electrons lost must be gained by something.",
    hints: ["In a redox reaction, electrons lost by one substance are gained by another. Which two processes happen together?"]
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
    hints: ["Physical changes don't make new substances."]
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
    explanation: "Aluminium displaces iron from Fe₂O₃ with so much heat that the iron melts, which is used to weld rails (thermit welding). 'Electroplating only' is tempting because metals are involved, but electroplating uses electricity, not this displacement.",
    hints: ["Aluminium reduces iron oxide and gives molten iron with intense heat. Which use joins railway tracks with that iron?"]
  },
  {
    id: "g10-sci-chem-a-q12",
    prompt: "Acid + base \u2192 salt + water is \u2014",
    options: [
      { id: "a", text: "neutralisation" },
      { id: "b", text: "combination" },
      { id: "c", text: "decomposition" },
      { id: "d", text: "displacement" }
    ],
    answerId: "a",
    explanation: "An acid reacting with a base to give salt and water is neutralisation. Displacement is tempting because ions swap partners, but no single more reactive element pushes another out of a compound. It is not combination, which makes one product, or decomposition, where one substance breaks down.",
    hints: ["H⁺ from acid and OH⁻ from base form water."]
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
    hints: ["Recall the reactivity series: which of the three reacts violently with water and must be stored under kerosene?"]
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
    explanation: "In precipitation, ions of two salts swap partners (double displacement) and one product is insoluble. 'Only combustion' is tempting, but combustion is burning in oxygen; no ions swap.",
    hints: ["Look for a cloudy solid forming in solution."]
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
    explanation: "2Mg + O₂ → 2MgO: magnesium burns with a dazzling white light and leaves white MgO ash. 'Only soot' is tempting because burning often gives soot, but soot is carbon, and magnesium has no carbon.",
    hints: ["Magnesium oxidises to magnesium oxide."]
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
    explanation: "At the cathode, H⁺ ions gain electrons and hydrogen gas forms (twice the volume of oxygen). Oxygen is tempting, but oxygen collects at the anode.",
    hints: ["At the cathode, positive ions gain electrons. In water electrolysis, which gas collects there with twice the volume?"]
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
    explanation: "Antioxidants and airtight packing keep oxygen from reacting with the fats. 'Adding more oxygen' is tempting only if you forget the cause: oxygen is what makes fats rancid.",
    hints: ["Rancidity is oxidation of fats and oils. Which choice keeps oxygen away or slows its attack?"]
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
    hints: ["Hydrogen takes oxygen away from copper oxide. What do we call a substance that removes oxygen from another and is itself oxidised?"]
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
    explanation: "Lead nitrate gives off brown NO₂ fumes on heating, along with O₂. 'O₂ only' is tempting because oxygen is released too, but oxygen is colourless.",
    hints: ["Heating lead nitrate gives lead oxide, oxygen and a reddish-brown gas. Which oxide of nitrogen has that colour?"]
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
    explanation: "In C + O₂ → CO₂ two substances combine into one product. CaCO₃ → CaO + CO₂ is tempting because it also involves CO₂, but one substance breaks apart, so it is decomposition.",
    hints: ["Combination: many reactants → one product."]
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
    explanation: "After whitewashing, Ca(OH)₂ slowly reacts with CO₂ in air to form a hard, shiny layer of CaCO₃. CaCO₃ → CaO + CO₂ is tempting because it has the same substances, but it is the reverse: it needs strong heating.",
    hints: ["Walls harden as carbonate forms."]
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
    explanation: "Galvanising coats iron with zinc, which corrodes first and protects the iron. Copper is tempting because it is also used for coatings, but it is less reactive than iron and does not protect it sacrificially.",
    hints: ["Galvanised iron has a coating of a more reactive metal that corrodes first. Which listed metal is above iron?"]
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
    explanation: "Sodium loses an electron to become Na⁺ in NaOH, so it is oxidised. 'Reduced' is tempting because hydrogen is involved, but it is the water's hydrogen that is reduced to H₂.",
    hints: ["Sodium goes from Na atoms to Na⁺ ions in NaOH. Losing electrons is which process?"]
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
    explanation: "3Fe + 4H₂O → Fe₃O₄ + 4H₂: 3 Fe, 8 H and 4 O on each side. 3, 2, 1, 2 is tempting because 3 Fe is right, but then there are only 2 O atoms on the left and 4 in Fe₃O₄.",
    hints: ["Balance Fe, then O, then H."]
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
    explanation: "Exothermic reactions give energy out as heat (and sometimes light). 'Always absorb heat' is tempting because both describe heat, but that describes endothermic reactions.",
    hints: ["Exo = heat exits the system."]
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
    explanation: "Melting wax only changes its state; it is still the same wax, so this is a physical change. 'Burning of wax' is tempting because it is the same substance, but burning makes new substances (CO₂ and water).",
    hints: ["Ask of each change: was a new substance formed? Burning, digestion and rusting make new substances."]
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
    explanation: "Ba²⁺ and Na⁺ swap partners: BaSO₄ forms as a white precipitate and 2NaCl stays dissolved. 'BaSO₄ + NaCl only unbalanced' is tempting because it has the right products, but it needs 2NaCl to balance the sodium.",
    hints: ["In double displacement, the ions swap partners. Barium sulphate is insoluble; check the product equation is balanced."]
  },
  {
    id: "g10-sci-chem-b-q04",
    prompt: "Corrosion of copper in moist air forms a green coating of \u2014",
    options: [
      { id: "a", text: "black copper oxide" },
      { id: "b", text: "basic copper carbonate" },
      { id: "c", text: "copper sulphate" },
      { id: "d", text: "copper metal" }
    ],
    answerId: "b",
    explanation: "Moist air with CO₂ turns copper's surface into green basic copper carbonate. 'Black copper oxide' is tempting because copper also forms an oxide, but copper oxide is black, not green.",
    hints: ["Think Statue of Liberty green layer."]
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
    explanation: "Zn is above hydrogen in the reactivity series, so it displaces H\u2082 from dilute acids and bubbles appear. Cu is tempting because it is a familiar metal, but Cu and Ag both lie below hydrogen, so neither releases H\u2082 from a dilute acid. 'none' is wrong because zinc does react.",
    hints: ["Metals above H₂ liberate hydrogen from dilute acids."]
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
    explanation: "Photosynthesis takes in light energy and stores it in glucose, so overall it is endothermic. 'Exothermic like burning' is tempting because it involves CO₂ and O₂ like burning, but it runs the other way and absorbs energy.",
    hints: ["During photosynthesis, plants absorb light energy and store it in glucose. Does the reaction take in energy or give it out?"]
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
    explanation: "CO₂ reacts with limewater to form insoluble CaCO₃, which makes it milky. O₂ is tempting because it is a common test gas, but oxygen relights a glowing splint; it does not turn limewater milky.",
    hints: ["Limewater test for carbon dioxide."]
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
    explanation: "Hydrogen burns with a 'pop' when a lit splint is brought near. 'Green flame only' is tempting because flame colours are used in tests, but those tests are for metal ions, not hydrogen.",
    hints: ["Collect and ignite carefully — pop confirms H₂."]
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
    explanation: "Oxygen supports combustion, so a glowing splint bursts back into flame. 'Is inert' is tempting because oxygen is a colourless gas, but inert gases would put the splint out.",
    hints: ["Glowing splint test for oxygen."]
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
    explanation: "Acid + base gives salt + water: HCl + NaOH → NaCl + H₂O. 'Cl₂ gas' is tempting because HCl contains chlorine, but the chloride ends up in the salt NaCl, not as a gas.",
    hints: ["Neutralisation of an acid by a base gives a salt plus water. Which salt comes from sodium and chloride?"]
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
    explanation: "CH₄ + 2O₂ → CO₂ + 2H₂O has 1 C, 4 H and 4 O on each side. CH₄ + 2O₂ → CO₂ + H₂O is tempting because the left side is right, but the right side has only 2 H and 3 O.",
    hints: ["Count each element after balancing."]
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
    explanation: "Impure copper is the anode, pure copper the cathode and CuSO₄ the electrolyte; copper dissolves at the anode and deposits pure at the cathode. 'Iron electrodes' is tempting, but iron would not let pure copper move from one electrode to the other.",
    hints: ["Anode oxidises; cathode reduces Cu²⁺."]
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
    explanation: "The green layer is a new substance formed on the surface (corrosion), so the change is chemical. 'Only physical polishing loss' is tempting because the shine is lost, but a new green compound has formed.",
    hints: ["A green coating on a copper coin is a new substance. Does forming a new substance mean a physical change?"]
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
    explanation: "MnO₂ takes electrons from Cl⁻, turning it into Cl₂, and is itself reduced to MnCl₂, so it is the oxidising agent. 'A reducing agent' is tempting, but MnO₂ loses oxygen, so it is the one being reduced.",
    hints: ["MnO₂ loses oxygen and ends up as MnCl₂, while HCl becomes Cl₂. What role does a substance that gets reduced play?"]
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
    explanation: "Tin is less reactive than iron and safe with food, so it lines cans without spoiling the food. 'More reactive than iron always for food' is tempting, but tin is less reactive than iron; that is why it does not react with the food.",
    hints: ["Tin is less reactive in this use context."]
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
    explanation: "Respiration oxidises glucose and releases energy for cells, so it is exothermic. 'Endothermic' is tempting because it is the reverse of photosynthesis, but the reverse of an energy-absorbing reaction releases energy.",
    hints: ["Respiration breaks down glucose and releases energy that keeps us warm. Is energy taken in or given out?"]
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
    explanation: "Carbon gains oxygen to form CO (oxidised) while ZnO loses oxygen to form Zn (reduced). 'Both reduced' is tempting, but oxygen leaving ZnO must go somewhere, so one substance is oxidised.",
    hints: ["Follow the oxygen in this redox change: it leaves zinc oxide and joins carbon. Which substance gains oxygen and which loses it?"]
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
    explanation: "Zn + H₂SO₄ → ZnSO₄ + H₂, and hydrogen burns with a pop. 'Turns limewater milky' is tempting because acids on marble do that, but that test is for CO₂, and zinc has no carbonate.",
    hints: ["Hydrogen gives the pop test."]
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
    explanation: "Marble is CaCO₃: CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂. H₂ is tempting because acids with metals give hydrogen, but marble is a carbonate, not a metal.",
    hints: ["Marble is calcium carbonate. A carbonate reacts with acid to give a salt, water and which gas that turns lime water milky?"]
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
    explanation: "CuO loses its oxygen to hydrogen and becomes copper, so CuO is reduced. 'Oxidation of CuO' is tempting because oxygen is involved, but the oxygen leaves CuO; it is hydrogen that is oxidised.",
    hints: ["Black CuO turns to brown Cu as hydrogen takes away its oxygen. What is losing oxygen called?"]
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
    explanation: "Antacids are mild bases such as Mg(OH)₂ that neutralise excess HCl in the stomach. 'Oxidising food' is tempting because digestion breaks food down, but antacids only cancel acid.",
    hints: ["Think acid–base neutralisation."]
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
    explanation: "Silver bromide breaks down into silver and bromine when light falls on it, a reaction used in black-and-white photography. 'Rusting in a closed box' is tempting because it is a chemical change, but it needs moisture and air, not light.",
    hints: ["'Photo' means light. Which reaction happens only when light falls on the substance, as in old camera film?"]
  },
  {
    id: "g10-sci-chem-b-q23",
    prompt: "To balance Al + Fe\u2082O\u2083 \u2192 Al\u2082O\u2083 + Fe, correct coefficients include \u2014",
    options: [
      { id: "a", text: "2Al + Fe\u2082O\u2083 \u2192 Al\u2082O\u2083 + 2Fe" },
      { id: "b", text: "Al + 2Fe₂O₃ → Al₂O₃ + 4Fe" },
      { id: "c", text: "3Al + Fe\u2082O\u2083 \u2192 Al\u2082O\u2083 + 2Fe" },
      { id: "d", text: "Al + Fe\u2082O\u2083 \u2192 Al\u2082O\u2083 + Fe" }
    ],
    answerId: "a",
    explanation: "2Al + Fe₂O₃ → Al₂O₃ + 2Fe has 2 Al, 2 Fe and 3 O on each side. Al + Fe₂O₃ → Al₂O₃ + Fe is tempting because the formulas are right, but it has 1 Al on the left and 2 on the right. 3Al + Fe₂O₃ → Al₂O₃ + 2Fe fixes the Fe but leaves 3 Al on the left and only 2 on the right.",
    hints: ["Balance Al and Fe together."]
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
    explanation: "Nitrogen is unreactive, so flushing it in pushes out the oxygen that would make the oil in chips go rancid. 'Add nutrients' is tempting because nitrogen is a plant nutrient, but here it only keeps oxygen away.",
    hints: ["Oils in chips turn rancid when oxygen attacks them. Why would packers push air out with an unreactive gas?"]
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
