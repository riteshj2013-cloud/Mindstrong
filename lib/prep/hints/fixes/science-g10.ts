/**
 * Grade 10 Science — item-specific hint fixes (fix layer).
 * Source: app repo origin/main c5a133b (lib/prep/content + lib/prep/hints). Written 2026-10-19.
 * Items changed: 61 | hints: 61
 * By category (primary): answer-leak fixed 12 · chapter-shared hint split 0 · other strict-check fixes 49
 * Each entry is a method nudge (≤25 words) naming something from the stem, options or figure; no option letters,
 * never the correct option text. Items whose overlay had two hints keep two (gentle, stronger).
 * Merge: these WIN over G10_SCIENCE_HINTS and over authored question.hints (see ../index.ts applyHints).
 */
import type { HintOverlay } from "../types";

export const G10_SCIENCE_HINT_FIXES: Record<string, HintOverlay> = {
  // g10-science-chem-reactions
  "g10-sci-chem-a-q02": ["Rust forms when iron reacts with oxygen and moisture over time. Which processes name that kind of reaction?"],
  "g10-sci-chem-a-q04": ["Count H and O atoms on both sides. Hydrogen and oxygen are diatomic, so the product must balance both."],
  "g10-sci-chem-a-q07": ["Remember OIL RIG for electron transfer, and recall oxygen and hydrogen in burning. Which choice covers all three ideas?"],
  "g10-sci-chem-a-q09": ["In a redox reaction, electrons lost by one substance are gained by another. Which two processes happen together?"],
  "g10-sci-chem-a-q11": ["Aluminium reduces iron oxide and gives molten iron with intense heat. Which use joins railway tracks with that iron?"],
  "g10-sci-chem-a-q13": ["Recall the reactivity series: which of the three reacts violently with water and must be stored under kerosene?"],
  "g10-sci-chem-a-q16": ["At the cathode, positive ions gain electrons. In water electrolysis, which gas collects there with twice the volume?"],
  "g10-sci-chem-a-q17": ["Rancidity is oxidation of fats and oils. Which choice keeps oxygen away or slows its attack?"],
  "g10-sci-chem-a-q18": ["Hydrogen takes oxygen away from copper oxide. What do we call a substance that removes oxygen from another and is itself oxidised?"],
  "g10-sci-chem-a-q19": ["Heating lead nitrate gives lead oxide, oxygen and a reddish-brown gas. Which oxide of nitrogen has that colour?"],
  "g10-sci-chem-a-q22": ["Galvanised iron has a coating of a more reactive metal that corrodes first. Which listed metal is above iron?"],
  "g10-sci-chem-a-q23": ["Sodium goes from Na atoms to Na⁺ ions in NaOH. Losing electrons is which process?"],
  "g10-sci-chem-b-q02": ["Ask of each change: was a new substance formed? Burning, digestion and rusting make new substances."],
  "g10-sci-chem-b-q03": ["In double displacement, the ions swap partners. Barium sulphate is insoluble; check the product equation is balanced."],
  "g10-sci-chem-b-q06": ["During photosynthesis, plants absorb light energy and store it in glucose. Does the reaction take in energy or give it out?"],
  "g10-sci-chem-b-q10": ["Neutralisation of an acid by a base gives a salt plus water. Which salt comes from sodium and chloride?"],
  "g10-sci-chem-b-q13": ["A green coating on a copper coin is a new substance. Does forming a new substance mean a physical change?"],
  "g10-sci-chem-b-q14": ["MnO₂ loses oxygen and ends up as MnCl₂, while HCl becomes Cl₂. What role does a substance that gets reduced play?"],
  "g10-sci-chem-b-q16": ["Respiration breaks down glucose and releases energy that keeps us warm. Is energy taken in or given out?"],
  "g10-sci-chem-b-q17": ["Track oxygen in zinc oxide plus carbon: whatever gains oxygen is oxidised; whatever loses oxygen is reduced."],
  "g10-sci-chem-b-q19": ["Marble is calcium carbonate. A carbonate reacts with acid to give a salt, water and which gas that turns lime water milky?"],
  "g10-sci-chem-b-q22": ["'Photo' means light. Which reaction happens only when light falls on the substance, as in old camera film?"],
  "g10-sci-chem-b-q24": ["Oils in chips turn rancid when oxygen attacks them. Why would packers push air out with an unreactive gas?"],
  // g10-science-life-processes
  "g10-sci-life-a-q01": ["The life process here covers taking in food and using it for energy and growth. Name the overall process."],
  "g10-sci-life-a-q02": ["'Auto' means self and 'troph' means nourishment. How does an autotroph get its food?"],
  "g10-sci-life-a-q11": ["Plants have two transport tissues: one carries water up from roots, the other carries food from leaves. Which carries sugars?"],
  "g10-sci-life-a-q13": ["The left ventricle pumps oxygenated blood to the whole body. Which is the largest artery leaving the heart?"],
  "g10-sci-life-a-q16": ["In transpiration, water evaporating from leaves pulls more water up the xylem and takes heat away. Which two benefits follow?"],
  "g10-sci-life-a-q17": ["The liver turns extra amino acids into a nitrogen waste that kidneys filter into urine. Which waste is it?"],
  "g10-sci-life-a-q21": ["Salivary amylase works in the mouth on a carbohydrate in rice and chapati, turning it sweet as you chew."],
  "g10-sci-life-b-q01": ["Photosynthesis makes glucose and releases oxygen. Which raw materials enter the leaf through stomata and roots?"],
  "g10-sci-life-b-q02": ["Experiments with labelled oxygen show the O₂ released comes from splitting a raw material taken in by roots."],
  "g10-sci-life-b-q03": ["The oesophagus and intestine walls contract in rhythmic waves. What does that rhythmic squeezing do to food?"],
  "g10-sci-life-b-q07": ["A sphygmomanometer has an arm cuff and a pressure gauge. What does a doctor read with it?"],
  "g10-sci-life-b-q12": ["Aerobic respiration uses glucose and oxygen. Balance the products: how many CO₂ and H₂O per glucose?"],
  "g10-sci-life-b-q14": ["Bowman's capsule is the cup around the glomerulus where blood is first filtered. Which kidney unit is it part of?"],
  "g10-sci-life-b-q15": ["Paramecium is covered in tiny hair-like structures that beat to move water. Where do they sweep food?"],
  "g10-sci-life-b-q17": ["Desert plants must lose as little water as possible. Which features reduce water loss from leaves?"],
  "g10-sci-life-b-q18": ["Blood has cells and a straw-coloured liquid part. In ABO groups, antigens sit on red cells; where are antibodies?"],
  "g10-sci-life-b-q20": ["During heavy exercise muscles respire faster. What must the lungs bring in faster, and what must they remove?"],
  "g10-sci-life-b-q21": ["Saprophytes feed on dead and decaying matter and break it down. Which organisms grow on rotting logs?"],
  // g10-science-light
  "g10-sci-light-a-q01": ["Measure both angles from the normal at the point of incidence. Which rule states that they are equal?"],
  "g10-sci-light-a-q06": ["Magnification compares image height with object height. For mirrors, write it using image and object distances with signs."],
  "g10-sci-light-a-q07": ["A ray through the centre of curvature meets the mirror along its normal, at 0° incidence. Where does it go?"],
  "g10-sci-light-a-q09": ["Refractive index compares the speed of light in vacuum with its speed in the medium. Which ratio is that?"],
  "g10-sci-light-a-q14": ["Optical fibres trap light inside. Which medium must the light start in, and how must the angle compare with the critical angle?"],
  "g10-sci-light-a-q15": ["At the critical angle the refracted ray just grazes the boundary. What is the angle of refraction then?"],
  "g10-sci-light-a-q16": ["For rainbows, sunlight entering each raindrop bends, splits into colours and bounces off the back. Which two processes matter?"],
  "g10-sci-light-a-q17": ["Think of the inside of a steel spoon held close to your face. Which mirror type acts like that?"],
  "g10-sci-light-a-q18": ["Rear-view mirrors show a wide area with smaller, upright images. Which mirror type bulges outward?"],
  "g10-sci-light-a-q19": ["The lens formula links object distance u, image distance v and focal length f. Mind the sign convention."],
  "g10-sci-light-a-q24": ["In a prism violet bends more than red, because the glass slows each colour differently. What is that splitting called?"],
  "g10-sci-light-b-q04": ["For a concave mirror, rays from an object at the centre of curvature return along themselves. Where is the image, and how big?"],
  "g10-sci-light-b-q05": ["Relative refractive index of medium 2 with respect to medium 1 is a ratio of the two absolute indices."],
  "g10-sci-light-b-q08": ["Light inside an optical fibre core keeps hitting the wall above the critical angle. Which effect keeps it trapped?"],
  "g10-sci-light-b-q12": ["Focal length is a distance, measured from the optical centre to the focus. What is the SI unit of length?"],
  "g10-sci-light-b-q13": ["Glass is optically denser than air. Use n = c/v: if n rises above 1, what happens to v?"],
  "g10-sci-light-b-q14": ["Colour stays the same when light passes from air into water. Which property of the wave stays fixed then?"],
  "g10-sci-light-b-q17": ["Speed in water = c ÷ n. Divide 3 × 10⁸ m/s by 4/3."],
  "g10-sci-light-b-q22": ["Lens power is measured in dioptres. For two thin lenses in contact, how do the separate powers combine?"],
  "g10-sci-light-b-q24": ["Power P = 1/f with f in metres. Convert 20 cm to metres before taking the reciprocal."],
};
