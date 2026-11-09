import type { ChapterDef, PrepQuestion } from "../types";

/** Light — Reflection & Refraction - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g10-sci-light-a-q01",
    prompt: "The angle of incidence equals the angle of reflection. This is \u2014",
    options: [
      { id: "a", text: "a law of reflection" },
      { id: "b", text: "Ohm's law" },
      { id: "c", text: "Snell's law only" },
      { id: "d", text: "Hooke's law" }
    ],
    answerId: "a",
    explanation: "i = r, and incident ray, reflected ray, normal are coplanar.",
    hints: ["Measure both angles from the normal at the point of incidence. Which rule states that they are equal?"]
  },
  {
    id: "g10-sci-light-a-q02",
    prompt: "A ray along the normal to a plane mirror reflects \u2014",
    options: [
      { id: "a", text: "at 90\u00b0 to the normal" },
      { id: "b", text: "parallel to the mirror" },
      { id: "c", text: "not at all" },
      { id: "d", text: "back on itself" }
    ],
    answerId: "d",
    explanation: "A ray along the normal has i = 0, so r = 0 and it goes straight back along its path. 'At 90° to the normal' is tempting because 90° appears in the diagram, but that would send the ray along the mirror surface.",
    hints: ["Head-on to the normal means bounce straight back."]
  },
  {
    id: "g10-sci-light-a-q03",
    prompt: "Image in a plane mirror is \u2014",
    options: [
      { id: "a", text: "smaller always" },
      { id: "b", text: "real and inverted" },
      { id: "c", text: "magnified always" },
      { id: "d", text: "virtual, erect, same size, laterally inverted" }
    ],
    answerId: "d",
    explanation: "Plane mirrors make virtual, same-size, left-right flipped images.",
    hints: ["Stand in front of a bathroom mirror."]
  },
  {
    id: "g10-sci-light-a-q04",
    prompt: "Focal length f of a spherical mirror relates to radius R by \u2014",
    options: [
      { id: "a", text: "f = R\u00b2" },
      { id: "b", text: "f = 2R" },
      { id: "c", text: "f = R/2" },
      { id: "d", text: "f = R" }
    ],
    answerId: "c",
    explanation: "For a spherical mirror the focus lies halfway between the pole and the centre of curvature, so f = R/2. f = 2R is tempting because the factor 2 is right, but it puts the focus beyond C instead of between P and C.",
    hints: ["Centre of curvature is twice the focal length away."]
  },
  {
    id: "g10-sci-light-a-q05",
    prompt: "A concave mirror can form a real image when the object is \u2014",
    options: [
      { id: "a", text: "inside the mirror material" },
      { id: "b", text: "beyond the focus" },
      { id: "c", text: "at the pole" },
      { id: "d", text: "between pole and focus only" }
    ],
    answerId: "b",
    explanation: "A concave mirror forms a real, inverted image when the object is beyond the focus. 'Between pole and focus only' is tempting because the mirror magnifies there, but that image is virtual and cannot be caught on a screen.",
    hints: ["A concave mirror forms real images only for objects on one side of F. Which side: nearer the pole or farther?"]
  },
  {
    id: "g10-sci-light-a-q06",
    prompt: "Magnification m = h\u2032/h equals \u2014",
    options: [
      { id: "a", text: "u/v always positive only" },
      { id: "b", text: "f/R" },
      { id: "c", text: "\u2212v/u for mirrors (sign convention)" },
      { id: "d", text: "R/f" }
    ],
    answerId: "c",
    explanation: "m = h\u2032/h = \u2212v/u in the New Cartesian convention for mirrors.",
    hints: ["Magnification compares image height with object height. For mirrors, write it using image and object distances with signs."]
  },
  {
    id: "g10-sci-light-a-q07",
    prompt: "A ray through the centre of curvature of a concave mirror \u2014",
    options: [
      { id: "a", text: "reflects back on itself" },
      { id: "b", text: "stops" },
      { id: "c", text: "passes through focus only after" },
      { id: "d", text: "grazes the pole without reflecting" }
    ],
    answerId: "a",
    explanation: "A ray through C meets the mirror along a radius, which is the normal, so i = 0 and it reflects back on itself. 'Passes through focus only after' is tempting, but that is what happens to rays parallel to the axis.",
    hints: ["A ray through the centre of curvature meets the mirror along its normal, at 0° incidence. Where does it go?"]
  },
  {
    id: "g10-sci-light-a-q08",
    prompt: "Refraction is \u2014",
    options: [
      { id: "a", text: "bouncing from a mirror" },
      { id: "b", text: "charging of electrons" },
      { id: "c", text: "bending of light when speed changes across a boundary" },
      { id: "d", text: "sound echo" }
    ],
    answerId: "c",
    explanation: "Refraction is the bending of light when it crosses into a medium where its speed changes. 'Bouncing from a mirror' is tempting because it also changes the ray's direction, but that is reflection.",
    hints: ["Air → glass bends toward the normal (usually)."]
  },
  {
    id: "g10-sci-light-a-q09",
    prompt: "Absolute refractive index n = \u2014",
    options: [
      { id: "a", text: "v/c" },
      { id: "b", text: "1/c" },
      { id: "c", text: "c/v" },
      { id: "d", text: "c\u00d7v" }
    ],
    answerId: "c",
    explanation: "n = c/v: speed in vacuum divided by speed in the medium, so n > 1 for glass. v/c is tempting because it uses the same speeds, but it is the reciprocal and would be less than 1.",
    hints: ["Refractive index compares the speed of light in vacuum with its speed in the medium. Which ratio is that?"]
  },
  {
    id: "g10-sci-light-a-q10",
    prompt: "Snell's law: n\u2081 sin i = \u2014",
    options: [
      { id: "a", text: "n\u2081 / n\u2082" },
      { id: "b", text: "n\u2082 sin r" },
      { id: "c", text: "n\u2082 / sin r" },
      { id: "d", text: "sin i / n\u2082" }
    ],
    answerId: "b",
    explanation: "Snell's law: n₁ sin i = n₂ sin r. n₂ / sin r is tempting because it has the same symbols, but the refractive index and the sine are multiplied, not divided.",
    hints: ["Product n sinθ is conserved across the interface."]
  },
  {
    id: "g10-sci-light-a-q11",
    prompt: "A convex lens is a \u2014",
    options: [
      { id: "a", text: "diverging lens" },
      { id: "b", text: "converging lens" },
      { id: "c", text: "plane mirror" },
      { id: "d", text: "prism only" }
    ],
    answerId: "b",
    explanation: "A convex lens is thicker in the middle and brings parallel rays together at a focus, so it is converging. 'Diverging lens' is tempting, but that is the concave lens, which is thinner in the middle.",
    hints: ["Convex lenses converge."]
  },
  {
    id: "g10-sci-light-a-q12",
    prompt: "A concave lens is a \u2014",
    options: [
      { id: "a", text: "optical fibre core only" },
      { id: "b", text: "diverging lens" },
      { id: "c", text: "spherical mirror" },
      { id: "d", text: "converging lens" }
    ],
    answerId: "b",
    explanation: "A concave lens is thinner in the middle and spreads parallel rays apart, so it is diverging. 'Spherical mirror' is tempting because concave mirrors exist too, but a lens lets light pass through rather than reflecting it.",
    hints: ["Concave lenses diverge."]
  },
  {
    id: "g10-sci-light-a-q13",
    prompt: "Power of a lens P = \u2014",
    options: [
      { id: "a", text: "R/2" },
      { id: "b", text: "1/f (f in metres), unit dioptre" },
      { id: "c", text: "f in cm" },
      { id: "d", text: "v\u2212u" }
    ],
    answerId: "b",
    explanation: "P = 1/f with f in metres; the unit is the dioptre. 'R/2' is tempting because it is a familiar lens-and-mirror formula, but it gives the focal length of a mirror, not power.",
    hints: ["Converging lenses have positive power."]
  },
  {
    id: "g10-sci-light-a-q14",
    prompt: "Total internal reflection needs \u2014",
    options: [
      { id: "a", text: "a rough surface" },
      { id: "b", text: "no boundary" },
      { id: "c", text: "light in denser medium, i > critical angle" },
      { id: "d", text: "always i = 0" }
    ],
    answerId: "c",
    explanation: "From denser to rarer, beyond critical angle, light reflects fully.",
    hints: ["Optical fibres trap rays by total internal reflection. Think about which side of the boundary the ray starts on, and how steeply it strikes."]
  },
  {
    id: "g10-sci-light-a-q15",
    prompt: "Critical angle is the incidence angle in the denser medium for which \u2014",
    options: [
      { id: "a", text: "refraction angle in rarer medium is 90\u00b0" },
      { id: "b", text: "n becomes 1" },
      { id: "c", text: "reflection is zero" },
      { id: "d", text: "light stops" }
    ],
    answerId: "a",
    explanation: "At the critical angle the refracted ray just grazes the surface, so the angle of refraction is 90°. 'Reflection is zero' is tempting, but beyond the critical angle all the light reflects (total internal reflection).",
    hints: ["At the critical angle the refracted ray just grazes the boundary. What is the angle of refraction then?"]
  },
  {
    id: "g10-sci-light-a-q16",
    prompt: "Rainbows form mainly due to \u2014",
    options: [
      { id: "a", text: "only diffraction in air without water" },
      { id: "b", text: "magnetism" },
      { id: "c", text: "only mirrors" },
      { id: "d", text: "dispersion and reflection in water drops" }
    ],
    answerId: "d",
    explanation: "Raindrops refract, disperse and internally reflect sunlight, splitting it into colours. 'Only mirrors' is tempting because reflection is part of it, but without dispersion the colours would not separate.",
    hints: ["For rainbows, sunlight entering each raindrop bends, splits into colours and bounces off the back. Which two processes matter?"]
  },
  {
    id: "g10-sci-light-a-q17",
    prompt: "Which mirror is used as a shaving/makeup mirror?",
    options: [
      { id: "a", text: "convex always diminished" },
      { id: "b", text: "none" },
      { id: "c", text: "plane only sometimes smaller" },
      { id: "d", text: "concave (enlarged erect when close)" }
    ],
    answerId: "d",
    explanation: "Object between pole and F of concave \u2192 virtual enlarged erect.",
    hints: ["Think of the inside of a steel spoon held close to your face. Which mirror type acts like that?"]
  },
  {
    id: "g10-sci-light-a-q18",
    prompt: "Rear-view mirrors on vehicles are often \u2014",
    options: [
      { id: "a", text: "plane always with no field gain" },
      { id: "b", text: "opaque" },
      { id: "c", text: "convex (wider field, diminished erect)" },
      { id: "d", text: "concave only" }
    ],
    answerId: "c",
    explanation: "Convex mirrors always give an erect, smaller image and show a wider area behind the vehicle. 'Concave only' is tempting because concave mirrors magnify, but their image flips and the view is narrow.",
    hints: ["Rear-view mirrors show a wide area with smaller, upright images. Which mirror type bulges outward?"]
  },
  {
    id: "g10-sci-light-a-q19",
    prompt: "Which is the lens formula for a thin lens (new Cartesian sign convention)?",
    options: [
      { id: "a", text: "v\u2212u=f" },
      { id: "b", text: "1/v + 1/u = 1/f" },
      { id: "c", text: "m=f/u" },
      { id: "d", text: "1/v \u2212 1/u = 1/f" }
    ],
    answerId: "d",
    explanation: "For a thin lens, with the new Cartesian sign convention, 1/v − 1/u = 1/f. 1/v + 1/u = 1/f is tempting, but that is the mirror formula; for a lens the sign between 1/v and 1/u is minus. v − u = f has no reciprocals, and magnification for a lens is m = v/u, not f/u.",
    hints: ["The lens formula links object distance u, image distance v and focal length f. Mind the sign convention."]
  },
  {
    id: "g10-sci-light-a-q20",
    prompt: "SI unit of power of a lens is \u2014",
    options: [
      { id: "a", text: "watt" },
      { id: "b", text: "dioptre (D)" },
      { id: "c", text: "metre" },
      { id: "d", text: "candela" }
    ],
    answerId: "b",
    explanation: "Lens power is measured in dioptres: 1 D = 1 m⁻¹. Watt is tempting because it is the SI unit of power in physics, but lens 'power' means how strongly it bends light, not energy per second.",
    hints: ["Lens power is 1/f with f in metres. What special name is given to the unit 1/m for lenses?"]
  },
  {
    id: "g10-sci-light-a-q21",
    prompt: "A real image \u2014",
    options: [
      { id: "a", text: "needs no light" },
      { id: "b", text: "cannot exist for lenses" },
      { id: "c", text: "is always erect for single concave mirror all positions" },
      { id: "d", text: "can be caught on a screen" }
    ],
    answerId: "d",
    explanation: "In a real image the rays actually meet, so the image can be caught on a screen. 'Cannot exist for lenses' is tempting, but a convex lens forms real images, as in a projector.",
    hints: ["Virtual images cannot be screened."]
  },
  {
    id: "g10-sci-light-a-q22",
    prompt: "Lateral inversion means \u2014",
    options: [
      { id: "a", text: "left-right reversal in a plane mirror image" },
      { id: "b", text: "colour change" },
      { id: "c", text: "upside-down always" },
      { id: "d", text: "magnification >1 always" }
    ],
    answerId: "a",
    explanation: "In a plane mirror, left and right appear swapped: your raised right hand looks like the image's left. 'Upside-down always' is tempting, but a plane mirror image stays upright.",
    hints: ["Wave at a mirror with one hand."]
  },
  {
    id: "g10-sci-light-a-q23",
    prompt: "If u = \u221230 cm, f = \u221220 cm for a concave mirror, v equals \u2014",
    options: [
      { id: "a", text: "\u221260 cm" },
      { id: "b", text: "\u221212 cm" },
      { id: "c", text: "+60 cm" },
      { id: "d", text: "+30 cm" }
    ],
    answerId: "a",
    explanation: "1/v = 1/f − 1/u = −1/20 + 1/30 = −1/60, so v = −60 cm (a real image in front). −12 cm is tempting, but it comes from adding 1/f and 1/u instead of subtracting.",
    hints: ["Use mirror formula 1/v+1/u=1/f."]
  },
  {
    id: "g10-sci-light-a-q24",
    prompt: "White light splits into colours through a prism because of \u2014",
    options: [
      { id: "a", text: "dispersion (n depends on colour)" },
      { id: "b", text: "magnetic lensing" },
      { id: "c", text: "only reflection" },
      { id: "d", text: "diffraction only in vacuum" }
    ],
    answerId: "a",
    explanation: "Glass bends each colour by a different amount because its refractive index depends on wavelength, so white light spreads into a spectrum. 'Only reflection' is tempting because a prism's faces can reflect, but reflection does not separate colours.",
    hints: ["In a prism violet bends more than red, because the glass slows each colour differently. What is that splitting called?"]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g10-sci-light-b-q01",
    prompt: "The normal at the point of incidence is \u2014",
    options: [
      { id: "a", text: "parallel to the mirror" },
      { id: "b", text: "perpendicular to the reflecting surface" },
      { id: "c", text: "along the incident ray always" },
      { id: "d", text: "45\u00b0 always" }
    ],
    answerId: "b",
    explanation: "The normal is the line perpendicular to the surface at the point of incidence; angles i and r are measured from it. 'Parallel to the mirror' is tempting, but that line lies along the surface, not at 90° to it.",
    hints: ["The normal is drawn where the ray hits the mirror. What angle does it make with the mirror surface?"]
  },
  {
    id: "g10-sci-light-b-q02",
    prompt: "Image distance equals object distance for a plane mirror. Magnification is \u2014",
    options: [
      { id: "a", text: "\u22121" },
      { id: "b", text: "+1" },
      { id: "c", text: "0" },
      { id: "d", text: "2" }
    ],
    answerId: "b",
    explanation: "A plane mirror image is erect and the same size, so m = +1. −1 is tempting because the size is the same, but the minus sign means an inverted image.",
    hints: ["Plane mirror: |v|=|u|, erect."]
  },
  {
    id: "g10-sci-light-b-q03",
    prompt: "Rays parallel to the principal axis of a concave mirror reflect through \u2014",
    options: [
      { id: "a", text: "the pole only" },
      { id: "b", text: "the centre of curvature" },
      { id: "c", text: "the focus" },
      { id: "d", text: "a point beyond the centre of curvature" }
    ],
    answerId: "c",
    explanation: "Rays parallel to the axis reflect through the principal focus of a concave mirror. 'The centre of curvature' is tempting, but rays pass through C only when they arrive along a radius.",
    hints: ["Parallel in → through F out."]
  },
  {
    id: "g10-sci-light-b-q04",
    prompt: "An object at the centre of curvature of a concave mirror forms image \u2014",
    options: [
      { id: "a", text: "behind mirror, virtual" },
      { id: "b", text: "at infinity" },
      { id: "c", text: "at F, magnified" },
      { id: "d", text: "at C, real, inverted, same size" }
    ],
    answerId: "d",
    explanation: "An object at C forms an image at C that is real, inverted and the same size (m = −1). 'At F, magnified' is tempting, but the image is at F only when the object is very far away, and then it is tiny.",
    hints: ["For a concave mirror, rays from an object at the centre of curvature return along themselves. Where is the image, and how big?"]
  },
  {
    id: "g10-sci-light-b-q05",
    prompt: "Relative refractive index of medium 2 w.r.t. 1 is \u2014",
    options: [
      { id: "a", text: "c" },
      { id: "b", text: "n₁/n₂" },
      { id: "c", text: "n\u2082/n\u2081" },
      { id: "d", text: "n\u2081\u00d7n\u2082" }
    ],
    answerId: "c",
    explanation: "The refractive index of medium 2 with respect to medium 1 is n₂/n₁ (= v₁/v₂). n₁/n₂ is tempting because it uses the same two values, but it is medium 1 with respect to medium 2.",
    hints: ["Relative refractive index of medium 2 with respect to medium 1 is a ratio of the two absolute indices."]
  },
  {
    id: "g10-sci-light-b-q06",
    prompt: "A glass slab shifts a ray \u2014",
    options: [
      { id: "a", text: "not at all if thick" },
      { id: "b", text: "by focusing to a point always" },
      { id: "c", text: "laterally without changing direction (emergent parallel)" },
      { id: "d", text: "by dispersing into a rainbow always" }
    ],
    answerId: "c",
    explanation: "Light bends in at the first face and back out at the second by the same amount, so the emergent ray is parallel to the incident ray but shifted sideways. 'By dispersing into a rainbow always' is tempting, but a parallel-sided slab does not spread colours noticeably.",
    hints: ["Lateral shift increases with thickness."]
  },
  {
    id: "g10-sci-light-b-q07",
    prompt: "Twinkling of stars is mainly due to \u2014",
    options: [
      { id: "a", text: "stars switching off" },
      { id: "b", text: "atmospheric refraction" },
      { id: "c", text: "dispersion in space vacuum only" },
      { id: "d", text: "mirrors on Earth" }
    ],
    answerId: "b",
    explanation: "Moving air layers of different density keep bending starlight by changing amounts, so stars seem to flicker. 'Dispersion in space vacuum only' is tempting, but a vacuum does not bend light; the effect comes from our atmosphere.",
    hints: ["Planets twinkle less (extended disks)."]
  },
  {
    id: "g10-sci-light-b-q08",
    prompt: "Optical fibres work on \u2014",
    options: [
      { id: "a", text: "only absorption" },
      { id: "b", text: "magnetic confinement" },
      { id: "c", text: "total internal reflection" },
      { id: "d", text: "diffuse reflection only" }
    ],
    answerId: "c",
    explanation: "Light inside the fibre's core keeps hitting the boundary beyond the critical angle and reflects totally, so it travels far with little loss. 'Diffuse reflection only' is tempting because reflection is involved, but diffuse reflection scatters light and would lose it.",
    hints: ["Light inside an optical fibre core keeps hitting the wall above the critical angle. Which effect keeps it trapped?"]
  },
  {
    id: "g10-sci-light-b-q09",
    prompt: "For a thin lens, if object is at 2F, image is \u2014",
    options: [
      { id: "a", text: "virtual erect always" },
      { id: "b", text: "at F" },
      { id: "c", text: "at infinity" },
      { id: "d", text: "at 2F, real, inverted, same size" }
    ],
    answerId: "d",
    explanation: "For a convex lens, an object at 2F gives an image at 2F on the other side that is real, inverted and the same size. 'At F' is tempting, but the image forms at F only for an object very far away.",
    hints: ["Same-size real image at 2F."]
  },
  {
    id: "g10-sci-light-b-q10",
    prompt: "A myopic eye is corrected by a \u2014",
    options: [
      { id: "a", text: "concave lens" },
      { id: "b", text: "plane mirror" },
      { id: "c", text: "cylindrical lens" },
      { id: "d", text: "convex lens" }
    ],
    answerId: "a",
    explanation: "Short-sight: focus in front of retina; diverge with concave.",
    hints: ["Myopia → diverging lens."]
  },
  {
    id: "g10-sci-light-b-q11",
    prompt: "A hypermetropic eye is corrected by a \u2014",
    options: [
      { id: "a", text: "opaque contact" },
      { id: "b", text: "convex lens" },
      { id: "c", text: "concave lens" },
      { id: "d", text: "prism only" }
    ],
    answerId: "b",
    explanation: "A long-sighted eye focuses near objects behind the retina, so a converging convex lens is used. 'Concave lens' is tempting because it is the other common spectacle lens, but it corrects short sight.",
    hints: ["Hypermetropia → converging lens."]
  },
  {
    id: "g10-sci-light-b-q12",
    prompt: "SI unit of focal length is \u2014",
    options: [
      { id: "a", text: "dioptre" },
      { id: "b", text: "candela" },
      { id: "c", text: "newton" },
      { id: "d", text: "metre" }
    ],
    answerId: "d",
    explanation: "Focal length is a distance, so its SI unit is the metre. Dioptre is tempting because it is used with lenses, but it is the unit of power (1/f), not of f.",
    hints: ["Focal length is a distance, measured from the optical centre to the focus. What is the SI unit of length?"]
  },
  {
    id: "g10-sci-light-b-q13",
    prompt: "When light enters glass from air, its speed \u2014",
    options: [
      { id: "a", text: "increases" },
      { id: "b", text: "becomes zero" },
      { id: "c", text: "becomes infinite" },
      { id: "d", text: "decreases" }
    ],
    answerId: "d",
    explanation: "Glass has n > 1, so light slows down: v = c/n. 'Increases' is tempting because the ray bends, but bending towards the normal shows that light has slowed.",
    hints: ["Glass is optically denser than air. Use n = c/v: if n rises above 1, what happens to v?"]
  },
  {
    id: "g10-sci-light-b-q14",
    prompt: "The colour of light related most to \u2014",
    options: [
      { id: "a", text: "wavelength / frequency" },
      { id: "b", text: "mirror thickness only" },
      { id: "c", text: "only amplitude of sound" },
      { id: "d", text: "lens power only" }
    ],
    answerId: "a",
    explanation: "The colour we see depends on the light's wavelength (or frequency). 'Only amplitude of sound' is tempting because amplitude matters for loudness, but that is sound, not light colour.",
    hints: ["Colour stays the same when light passes from air into water. Which property of the wave stays fixed then?"]
  },
  {
    id: "g10-sci-light-b-q15",
    prompt: "A real image formed by a convex lens on a screen is usually \u2014",
    options: [
      { id: "a", text: "inverted" },
      { id: "b", text: "invisible" },
      { id: "c", text: "same as object colour-inverted only" },
      { id: "d", text: "erect always" }
    ],
    answerId: "a",
    explanation: "Real images made by a single convex lens are inverted, as seen on a projector screen. 'Erect always' is tempting because a magnifying glass shows an erect image, but that image is virtual.",
    hints: ["Upside-down on the screen."]
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
    explanation: "The pole is the centre of the mirror's reflecting surface, where the principal axis meets it. 'Centre of curvature' is tempting because of the word 'centre', but C is the centre of the sphere, away from the mirror.",
    hints: ["Vertex of the mirror."]
  },
  {
    id: "g10-sci-light-b-q17",
    prompt: "If refractive index of water is 4/3, speed of light in water is about \u2014",
    options: [
      { id: "a", text: "2.25 \u00d7 10\u2078 m/s" },
      { id: "b", text: "4 \u00d7 10\u2078 m/s" },
      { id: "c", text: "1.5 \u00d7 10\u2078 m/s" },
      { id: "d", text: "3 \u00d7 10\u2078 m/s" }
    ],
    answerId: "a",
    explanation: "v = c/n = (3 × 10⁸)/(4/3) = 2.25 × 10⁸ m/s. 4 × 10⁸ m/s is tempting, but that multiplies by 4/3 and would make light faster than in vacuum.",
    hints: ["Speed in water = c ÷ n. Divide 3 × 10⁸ m/s by 4/3."]
  },
  {
    id: "g10-sci-light-b-q18",
    prompt: "Astigmatism is commonly corrected using \u2014",
    options: [
      { id: "a", text: "mirrors only" },
      { id: "b", text: "only convex spherical" },
      { id: "c", text: "cylindrical lenses" },
      { id: "d", text: "only concave spherical" }
    ],
    answerId: "c",
    explanation: "In astigmatism the eye focuses differently in different directions, so a cylindrical lens that bends one direction more is used. 'Only concave spherical' is tempting because it corrects short sight, but a spherical lens bends all directions equally.",
    hints: ["Cylinder lenses fix uneven cornea focus."]
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
    explanation: "The aperture is the width (effective diameter) of the mirror's reflecting surface. 'Always equal to f' is tempting because both are mirror lengths, but f is measured along the axis and has no fixed link to the width.",
    hints: ["Think of the mirror's opening size."]
  },
  {
    id: "g10-sci-light-b-q20",
    prompt: "In mirror formula 1/v + 1/u = 1/f, sign convention usually takes \u2014",
    options: [
      { id: "a", text: "u always positive" },
      { id: "b", text: "object distance u negative for real object in front" },
      { id: "c", text: "v never negative" },
      { id: "d", text: "f always positive for all mirrors" }
    ],
    answerId: "b",
    explanation: "In the New Cartesian convention distances are measured from the pole, positive in the direction of incident light, so a real object in front has negative u. 'u always positive' is tempting because distances feel positive, but the object lies against the direction of the light.",
    hints: ["Be consistent with one convention."]
  },
  {
    id: "g10-sci-light-b-q21",
    prompt: "A pencil in a glass of water looks bent because of \u2014",
    options: [
      { id: "a", text: "diffraction by air only" },
      { id: "b", text: "dispersion into a spectrum always" },
      { id: "c", text: "reflection only in the pencil" },
      { id: "d", text: "refraction at the water surface" }
    ],
    answerId: "d",
    explanation: "Light from the part under water bends as it leaves the water, so that part looks raised and the pencil seems bent. 'Reflection only in the pencil' is tempting, but the bend appears exactly at the water surface, where light refracts.",
    hints: ["Apparent depth / bent stick effect."]
  },
  {
    id: "g10-sci-light-b-q22",
    prompt: "Combination of two thin lenses in contact: power \u2014",
    options: [
      { id: "a", text: "P = P\u2081 \u2212 P\u2082 only" },
      { id: "b", text: "P = P\u2081P\u2082" },
      { id: "c", text: "P = 1/(P\u2081+P\u2082)" },
      { id: "d", text: "P = P\u2081 + P\u2082" }
    ],
    answerId: "d",
    explanation: "For thin lenses in contact the powers add: P = P₁ + P₂. P = P₁P₂ is tempting, but multiplying powers would give the wrong unit (D²).",
    hints: ["Lens power is measured in dioptres. For two thin lenses in contact, how do the separate powers combine?"]
  },
  {
    id: "g10-sci-light-b-q23",
    prompt: "Which phenomenon does NOT need a change of medium?",
    options: [
      { id: "a", text: "Snell's law bending" },
      { id: "b", text: "TIR requiring denser start" },
      { id: "c", text: "reflection at a mirror in one medium" },
      { id: "d", text: "refraction" }
    ],
    answerId: "c",
    explanation: "Reflection at a mirror happens without light leaving its medium. 'TIR requiring denser start' is tempting because TIR is reflection, but it only happens at a boundary with a rarer medium.",
    hints: ["Refraction needs two media."]
  },
  {
    id: "g10-sci-light-b-q24",
    prompt: "If f_convex = +20 cm, power is \u2014",
    options: [
      { id: "a", text: "+0.2 D" },
      { id: "b", text: "+5 D" },
      { id: "c", text: "\u22125 D" },
      { id: "d", text: "+20 D" }
    ],
    answerId: "b",
    explanation: "f = +20 cm = 0.20 m, so P = 1/0.20 = +5 D. +0.2 D is tempting, but that is the focal length in metres, not its reciprocal.",
    hints: ["Power P = 1/f with f in metres. Convert 20 cm to metres before taking the reciprocal."]
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
