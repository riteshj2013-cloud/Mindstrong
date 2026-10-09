import type { ChapterDef, PrepQuestion } from "../types";

/** Light — Reflection & Refraction - authored olympiad-style content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g10-sci-light-a-q01",
    prompt: "The angle of incidence equals the angle of reflection. This is \u2014",
    options: [
      { id: "a", text: "a law of reflection" },
      { id: "b", text: "Snell's law only" },
      { id: "c", text: "Ohm's law" },
      { id: "d", text: "Hooke's law" }
    ],
    answerId: "a",
    explanation: "i = r, and incident ray, reflected ray, normal are coplanar.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-a-q02",
    prompt: "A ray along the normal to a plane mirror reflects \u2014",
    options: [
      { id: "a", text: "back on itself" },
      { id: "b", text: "at 90\u00b0 to the normal" },
      { id: "c", text: "parallel to the mirror" },
      { id: "d", text: "not at all" }
    ],
    answerId: "a",
    explanation: "i = 0 \u21d2 r = 0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-a-q03",
    prompt: "Image in a plane mirror is \u2014",
    options: [
      { id: "a", text: "virtual, erect, same size, laterally inverted" },
      { id: "b", text: "real and inverted" },
      { id: "c", text: "smaller always" },
      { id: "d", text: "magnified always" }
    ],
    answerId: "a",
    explanation: "Plane mirrors make virtual, same-size, left-right flipped images.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-a-q04",
    prompt: "Focal length f of a spherical mirror relates to radius R by \u2014",
    options: [
      { id: "a", text: "f = R/2" },
      { id: "b", text: "f = 2R" },
      { id: "c", text: "f = R" },
      { id: "d", text: "f = R\u00b2" }
    ],
    answerId: "a",
    explanation: "For spherical mirrors (paraxial), f = R/2.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-a-q05",
    prompt: "A concave mirror can form a real image when the object is \u2014",
    options: [
      { id: "a", text: "beyond the focus" },
      { id: "b", text: "between pole and focus only" },
      { id: "c", text: "at the pole" },
      { id: "d", text: "inside the mirror material" }
    ],
    answerId: "a",
    explanation: "Object outside F can give real inverted images on a screen.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-a-q06",
    prompt: "Magnification m = h\u2032/h equals \u2014",
    options: [
      { id: "a", text: "\u2212v/u for mirrors (sign convention)" },
      { id: "b", text: "u/v always positive only" },
      { id: "c", text: "f/R" },
      { id: "d", text: "R/f" }
    ],
    answerId: "a",
    explanation: "m = h\u2032/h = \u2212v/u in the New Cartesian convention for mirrors.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-a-q07",
    prompt: "A ray through the centre of curvature of a concave mirror \u2014",
    options: [
      { id: "a", text: "reflects back on itself" },
      { id: "b", text: "passes through focus only after" },
      { id: "c", text: "grazes the pole without reflecting" },
      { id: "d", text: "stops" }
    ],
    answerId: "a",
    explanation: "It hits along the normal (radius), so i=0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-a-q08",
    prompt: "Refraction is \u2014",
    options: [
      { id: "a", text: "bending of light when speed changes across a boundary" },
      { id: "b", text: "bouncing from a mirror" },
      { id: "c", text: "charging of electrons" },
      { id: "d", text: "sound echo" }
    ],
    answerId: "a",
    explanation: "Light changes direction with optical density change.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-a-q09",
    prompt: "Absolute refractive index n = \u2014",
    options: [
      { id: "a", text: "c/v" },
      { id: "b", text: "v/c" },
      { id: "c", text: "c\u00d7v" },
      { id: "d", text: "1/c" }
    ],
    answerId: "a",
    explanation: "n = speed in vacuum / speed in medium.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-a-q10",
    prompt: "Snell's law: n\u2081 sin i = \u2014",
    options: [
      { id: "a", text: "n\u2082 sin r" },
      { id: "b", text: "n\u2082 / sin r" },
      { id: "c", text: "sin i / n\u2082" },
      { id: "d", text: "n\u2081 / n\u2082" }
    ],
    answerId: "a",
    explanation: "n\u2081 sin i = n\u2082 sin r at a boundary.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-a-q11",
    prompt: "A convex lens is a \u2014",
    options: [
      { id: "a", text: "converging lens" },
      { id: "b", text: "diverging lens" },
      { id: "c", text: "plane mirror" },
      { id: "d", text: "prism only" }
    ],
    answerId: "a",
    explanation: "Thicker in the middle; brings parallel rays to a focus.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-a-q12",
    prompt: "A concave lens is a \u2014",
    options: [
      { id: "a", text: "diverging lens" },
      { id: "b", text: "converging lens" },
      { id: "c", text: "spherical mirror" },
      { id: "d", text: "optical fibre core only" }
    ],
    answerId: "a",
    explanation: "Thinner in the middle; spreads parallel rays.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-a-q13",
    prompt: "Power of a lens P = \u2014",
    options: [
      { id: "a", text: "1/f (f in metres), unit dioptre" },
      { id: "b", text: "f in cm" },
      { id: "c", text: "R/2" },
      { id: "d", text: "v\u2212u" }
    ],
    answerId: "a",
    explanation: "P = 1/f with f in m; unit D (dioptre).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-a-q14",
    prompt: "Total internal reflection needs \u2014",
    options: [
      { id: "a", text: "light in denser medium, i > critical angle" },
      { id: "b", text: "always i = 0" },
      { id: "c", text: "a rough surface" },
      { id: "d", text: "no boundary" }
    ],
    answerId: "a",
    explanation: "From denser to rarer, beyond critical angle, light reflects fully.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-a-q15",
    prompt: "Critical angle is the incidence angle in the denser medium for which \u2014",
    options: [
      { id: "a", text: "refraction angle in rarer medium is 90\u00b0" },
      { id: "b", text: "reflection is zero" },
      { id: "c", text: "light stops" },
      { id: "d", text: "n becomes 1" }
    ],
    answerId: "a",
    explanation: "At critical angle, refracted ray grazes the surface.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-a-q16",
    prompt: "Rainbows form mainly due to \u2014",
    options: [
      { id: "a", text: "dispersion and reflection in water drops" },
      { id: "b", text: "only mirrors" },
      { id: "c", text: "only diffraction in air without water" },
      { id: "d", text: "magnetism" }
    ],
    answerId: "a",
    explanation: "Droplets refract, reflect, and disperse sunlight.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-a-q17",
    prompt: "Which mirror is used as a shaving/makeup mirror?",
    options: [
      { id: "a", text: "concave (enlarged erect when close)" },
      { id: "b", text: "convex always diminished" },
      { id: "c", text: "plane only sometimes smaller" },
      { id: "d", text: "none" }
    ],
    answerId: "a",
    explanation: "Object between pole and F of concave \u2192 virtual enlarged erect.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-a-q18",
    prompt: "Rear-view mirrors on vehicles are often \u2014",
    options: [
      { id: "a", text: "convex (wider field, diminished erect)" },
      { id: "b", text: "concave only" },
      { id: "c", text: "plane always with no field gain" },
      { id: "d", text: "opaque" }
    ],
    answerId: "a",
    explanation: "Convex mirrors give a wider field of view.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-a-q19",
    prompt: "Lens formula:",
    options: [
      { id: "a", text: "1/v \u2212 1/u = 1/f" },
      { id: "b", text: "1/v + 1/u = 1/f always for lenses? mirrors differ" },
      { id: "c", text: "v\u2212u=f" },
      { id: "d", text: "m=f/u" }
    ],
    answerId: "a",
    explanation: "For thin lenses (Cartesian signs): 1/v \u2212 1/u = 1/f.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-a-q20",
    prompt: "SI unit of power of a lens is \u2014",
    options: [
      { id: "a", text: "dioptre (D)" },
      { id: "b", text: "metre" },
      { id: "c", text: "watt" },
      { id: "d", text: "candela" }
    ],
    answerId: "a",
    explanation: "1 D = 1 m\u207b\u00b9.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-a-q21",
    prompt: "A real image \u2014",
    options: [
      { id: "a", text: "can be caught on a screen" },
      { id: "b", text: "cannot exist for lenses" },
      { id: "c", text: "is always erect for single concave mirror all positions" },
      { id: "d", text: "needs no light" }
    ],
    answerId: "a",
    explanation: "Rays actually converge; screen shows the image.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-a-q22",
    prompt: "Lateral inversion means \u2014",
    options: [
      { id: "a", text: "left-right reversal in a plane mirror image" },
      { id: "b", text: "upside-down always" },
      { id: "c", text: "colour change" },
      { id: "d", text: "magnification >1 always" }
    ],
    answerId: "a",
    explanation: "Your left hand appears as the image's right.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-a-q23",
    prompt: "If u = \u221230 cm, f = \u221220 cm for a concave mirror, v equals \u2014",
    options: [
      { id: "a", text: "\u221260 cm" },
      { id: "b", text: "+60 cm" },
      { id: "c", text: "\u221212 cm" },
      { id: "d", text: "+30 cm" }
    ],
    answerId: "a",
    explanation: "1/v = 1/f \u2212 1/u = \u22121/20 + 1/30 = \u22121/60 \u2192 v=\u221260 cm (real).",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-a-q24",
    prompt: "White light splits into colours through a prism because of \u2014",
    options: [
      { id: "a", text: "dispersion (n depends on colour)" },
      { id: "b", text: "only reflection" },
      { id: "c", text: "magnetic lensing" },
      { id: "d", text: "diffraction only in vacuum" }
    ],
    answerId: "a",
    explanation: "Different wavelengths refract by different amounts.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g10-sci-light-b-q01",
    prompt: "The normal at the point of incidence is \u2014",
    options: [
      { id: "a", text: "perpendicular to the reflecting surface" },
      { id: "b", text: "parallel to the mirror" },
      { id: "c", text: "along the incident ray always" },
      { id: "d", text: "45\u00b0 always" }
    ],
    answerId: "a",
    explanation: "Angles i and r are measured from this normal.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-b-q02",
    prompt: "Image distance equals object distance for a plane mirror. Magnification is \u2014",
    options: [
      { id: "a", text: "+1" },
      { id: "b", text: "\u22121" },
      { id: "c", text: "0" },
      { id: "d", text: "2" }
    ],
    answerId: "a",
    explanation: "Same size, erect \u2192 m = +1.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-b-q03",
    prompt: "Rays parallel to the principal axis of a concave mirror reflect through \u2014",
    options: [
      { id: "a", text: "the focus" },
      { id: "b", text: "the centre of curvature always only" },
      { id: "c", text: "the pole only" },
      { id: "d", text: "infinity always after" }
    ],
    answerId: "a",
    explanation: "Definition of principal focus for a concave mirror.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-b-q04",
    prompt: "An object at the centre of curvature of a concave mirror forms image \u2014",
    options: [
      { id: "a", text: "at C, real, inverted, same size" },
      { id: "b", text: "at F, magnified" },
      { id: "c", text: "behind mirror, virtual" },
      { id: "d", text: "at infinity" }
    ],
    answerId: "a",
    explanation: "Object at C \u2192 image at C, m=\u22121.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-b-q05",
    prompt: "Relative refractive index of medium 2 w.r.t. 1 is \u2014",
    options: [
      { id: "a", text: "n\u2082/n\u2081" },
      { id: "b", text: "n\u2081/n\u2082 only always smaller" },
      { id: "c", text: "n\u2081\u00d7n\u2082" },
      { id: "d", text: "c" }
    ],
    answerId: "a",
    explanation: "\u2081n\u2082 = n\u2082/n\u2081 = v\u2081/v\u2082.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-b-q06",
    prompt: "A glass slab shifts a ray \u2014",
    options: [
      { id: "a", text: "laterally without changing direction (emergent parallel)" },
      { id: "b", text: "by focusing to a point always" },
      { id: "c", text: "by dispersing into a rainbow always" },
      { id: "d", text: "not at all if thick" }
    ],
    answerId: "a",
    explanation: "Emergent ray is parallel but displaced sideways.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-b-q07",
    prompt: "Twinkling of stars is mainly due to \u2014",
    options: [
      { id: "a", text: "atmospheric refraction" },
      { id: "b", text: "mirrors on Earth" },
      { id: "c", text: "stars switching off" },
      { id: "d", text: "dispersion in space vacuum only" }
    ],
    answerId: "a",
    explanation: "Changing air layers bend starlight irregularly.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-b-q08",
    prompt: "Optical fibres work on \u2014",
    options: [
      { id: "a", text: "total internal reflection" },
      { id: "b", text: "diffuse reflection only" },
      { id: "c", text: "only absorption" },
      { id: "d", text: "magnetic confinement" }
    ],
    answerId: "a",
    explanation: "Core\u2013cladding TIR guides light with low loss.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-b-q09",
    prompt: "For a thin lens, if object is at 2F, image is \u2014",
    options: [
      { id: "a", text: "at 2F, real, inverted, same size" },
      { id: "b", text: "at F" },
      { id: "c", text: "at infinity" },
      { id: "d", text: "virtual erect always" }
    ],
    answerId: "a",
    explanation: "Classic convex-lens case: u=\u22122f \u2192 v=+2f.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-b-q10",
    prompt: "A myopic eye is corrected by a \u2014",
    options: [
      { id: "a", text: "concave lens" },
      { id: "b", text: "convex lens" },
      { id: "c", text: "cylindrical only always" },
      { id: "d", text: "plane mirror" }
    ],
    answerId: "a",
    explanation: "Short-sight: focus in front of retina; diverge with concave.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-b-q11",
    prompt: "A hypermetropic eye is corrected by a \u2014",
    options: [
      { id: "a", text: "convex lens" },
      { id: "b", text: "concave lens" },
      { id: "c", text: "prism only" },
      { id: "d", text: "opaque contact" }
    ],
    answerId: "a",
    explanation: "Long-sight: focus behind retina; converge with convex.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-b-q12",
    prompt: "SI unit of focal length is \u2014",
    options: [
      { id: "a", text: "metre" },
      { id: "b", text: "dioptre" },
      { id: "c", text: "candela" },
      { id: "d", text: "newton" }
    ],
    answerId: "a",
    explanation: "f is a length.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-b-q13",
    prompt: "When light enters glass from air, its speed \u2014",
    options: [
      { id: "a", text: "decreases" },
      { id: "b", text: "increases" },
      { id: "c", text: "becomes infinite" },
      { id: "d", text: "becomes zero" }
    ],
    answerId: "a",
    explanation: "n>1 \u21d2 v = c/n < c.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-b-q14",
    prompt: "The colour of light related most to \u2014",
    options: [
      { id: "a", text: "wavelength / frequency" },
      { id: "b", text: "only amplitude of sound" },
      { id: "c", text: "mirror thickness only" },
      { id: "d", text: "lens power only" }
    ],
    answerId: "a",
    explanation: "Different wavelengths appear as different colours.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-b-q15",
    prompt: "A real image formed by a convex lens on a screen is usually \u2014",
    options: [
      { id: "a", text: "inverted" },
      { id: "b", text: "erect always" },
      { id: "c", text: "same as object colour-inverted only" },
      { id: "d", text: "invisible" }
    ],
    answerId: "a",
    explanation: "Single convex lens real images are inverted.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-b-q16",
    prompt: "Pole (P) of a spherical mirror is \u2014",
    options: [
      { id: "a", text: "the centre of the reflecting surface" },
      { id: "b", text: "the focus" },
      { id: "c", text: "centre of curvature" },
      { id: "d", text: "any point on the screen" }
    ],
    answerId: "a",
    explanation: "P is where the axis meets the mirror surface.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-b-q17",
    prompt: "If refractive index of water is 4/3, speed of light in water is about \u2014",
    options: [
      { id: "a", text: "2.25 \u00d7 10\u2078 m/s" },
      { id: "b", text: "3 \u00d7 10\u2078 m/s" },
      { id: "c", text: "1.5 \u00d7 10\u2078 m/s" },
      { id: "d", text: "4 \u00d7 10\u2078 m/s" }
    ],
    answerId: "a",
    explanation: "v=c/n \u2248 3e8/(4/3)=2.25e8 m/s.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-b-q18",
    prompt: "Astigmatism is commonly corrected using \u2014",
    options: [
      { id: "a", text: "cylindrical lenses" },
      { id: "b", text: "only concave spherical" },
      { id: "c", text: "only convex spherical" },
      { id: "d", text: "mirrors only" }
    ],
    answerId: "a",
    explanation: "Different meridians need different powers.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-b-q19",
    prompt: "The aperture of a spherical mirror is \u2014",
    options: [
      { id: "a", text: "the effective diameter of the reflecting surface" },
      { id: "b", text: "always equal to f" },
      { id: "c", text: "the wavelength" },
      { id: "d", text: "the magnification" }
    ],
    answerId: "a",
    explanation: "Wider aperture gathers more light but may add aberration.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-b-q20",
    prompt: "In mirror formula 1/v + 1/u = 1/f, sign convention usually takes \u2014",
    options: [
      { id: "a", text: "object distance u negative for real object in front" },
      { id: "b", text: "u always positive" },
      { id: "c", text: "f always positive for all mirrors" },
      { id: "d", text: "v never negative" }
    ],
    answerId: "a",
    explanation: "New Cartesian: light direction positive; real object u < 0.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-b-q21",
    prompt: "A pencil in a glass of water looks bent because of \u2014",
    options: [
      { id: "a", text: "refraction at the water surface" },
      { id: "b", text: "reflection only in the pencil" },
      { id: "c", text: "dispersion into a spectrum always" },
      { id: "d", text: "diffraction by air only" }
    ],
    answerId: "a",
    explanation: "Rays from the submerged part bend at the interface.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-b-q22",
    prompt: "Combination of two thin lenses in contact: power \u2014",
    options: [
      { id: "a", text: "P = P\u2081 + P\u2082" },
      { id: "b", text: "P = P\u2081P\u2082" },
      { id: "c", text: "P = P\u2081 \u2212 P\u2082 only" },
      { id: "d", text: "P = 1/(P\u2081+P\u2082)" }
    ],
    answerId: "a",
    explanation: "Powers add for thin lenses in contact.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-b-q23",
    prompt: "Which phenomenon does NOT need a change of medium?",
    options: [
      { id: "a", text: "reflection at a mirror in one medium" },
      { id: "b", text: "refraction" },
      { id: "c", text: "TIR requiring denser start" },
      { id: "d", text: "Snell's law bending" }
    ],
    answerId: "a",
    explanation: "Reflection can occur at a mirror within the same medium.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  },
  {
    id: "g10-sci-light-b-q24",
    prompt: "If f_convex = +20 cm, power is \u2014",
    options: [
      { id: "a", text: "+5 D" },
      { id: "b", text: "+0.2 D" },
      { id: "c", text: "\u22125 D" },
      { id: "d", text: "+20 D" }
    ],
    answerId: "a",
    explanation: "f=0.20 m; P=1/0.2=+5 D.",
    hints: ["Read carefully.", "Eliminate impossible options first."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83d\udd06",
    title: "Light \u2014 Reflection & Refraction",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "none",
    speak: "Mirrors reflect; lenses bend. Signs and formulas keep images organised.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "none",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Reflection", reveal: "i = r; plane & spherical mirrors", emoji: "\ud83e\ude9e" },
      { label: "Refraction", reveal: "Snell's law; n = c/v", emoji: "\u2197\ufe0f" },
      { label: "Lenses", reveal: "Convex converges; concave diverges", emoji: "\ud83d\udd0e" },
      { label: "Applications", reveal: "Eyes, fibres, vehicle mirrors", emoji: "\ud83d\udc41\ufe0f" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "A convex rear-view mirror is used because it gives \u2014",
    options: [
        { id: "a", text: "a wider field of view" },
        { id: "b", text: "always magnification > 1" },
        { id: "c", text: "real images on the road" },
        { id: "d", text: "no image" }
    ],
    answerId: "a",
    why: "Convex mirrors show more area, though objects look smaller.",
    visual: "none",
    speak: "A convex rear-view mirror is used because it gives \u2014",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Light toolkit", "i = r", "Snell & n", "Lens/mirror formula with signs"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g10ScienceLight: ChapterDef = {
  id: "light",
  title: "Light \u2014 Reflection & Refraction",
  emoji: "\ud83d\udd06",
  blurb: "Mirrors, lenses & refraction",
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

export const g10ScienceLightQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
