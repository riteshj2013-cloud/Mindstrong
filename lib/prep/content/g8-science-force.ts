import type { ChapterDef, PrepQuestion } from "../types";

/** Force and Pressure - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g8-sci-force-a-q01",
    prompt: "In science, a force is best described as \u2014",
    options: [
      { id: "a", text: "only a push" },
      { id: "b", text: "a push or a pull" },
      { id: "c", text: "only a pull" },
      { id: "d", text: "the speed of a moving object" }
    ],
    answerId: "b",
    explanation: "A force is any push or pull on an object. Speed describes motion. It is not a force.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-a-q02",
    prompt: "What is the SI unit of force?",
    options: [
      { id: "a", text: "Pascal" },
      { id: "b", text: "Joule" },
      { id: "c", text: "Newton" },
      { id: "d", text: "Kilogram" }
    ],
    answerId: "c",
    explanation: "Force is measured in newtons (N). The pascal is the unit of pressure, and the kilogram is the unit of mass.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-a-q03",
    prompt: "Which of these is a non-contact force?",
    options: [
      { id: "a", text: "The pull of a magnet on an iron pin held a little distance away" },
      { id: "b", text: "The friction between a shoe and the floor" },
      { id: "c", text: "The muscular force used to lift a bucket" },
      { id: "d", text: "The push of your hand opening a door" }
    ],
    answerId: "a",
    explanation: "A magnet can pull an iron pin without touching it, so magnetic force is a non-contact force. The other three act only when the objects touch.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-a-q04",
    prompt: "Which of these can a force NOT change?",
    options: [
      { id: "a", text: "The speed of a moving object" },
      { id: "b", text: "The direction of a moving object" },
      { id: "c", text: "The shape of an object" },
      { id: "d", text: "The mass of an object" }
    ],
    answerId: "d",
    explanation: "A force can start or stop motion and change speed, direction, or shape. It does not change how much matter, or mass, the object contains.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-a-q05",
    prompt: "Riya pushes a box to the right with a force of 30 N. Aman pushes the same box to the right with 20 N. What is the net force on the box?",
    options: [
      { id: "a", text: "10 N to the right" },
      { id: "b", text: "20 N to the right" },
      { id: "c", text: "50 N to the right" },
      { id: "d", text: "600 N to the right" }
    ],
    answerId: "c",
    explanation: "Forces acting in the same direction add up: 30 N + 20 N = 50 N, to the right.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-a-q06",
    prompt: "In a tug-of-war, both teams pull the rope with exactly equal force in opposite directions. What happens to the rope?",
    options: [
      { id: "a", text: "It stays where it is." },
      { id: "b", text: "It moves toward the left team." },
      { id: "c", text: "It moves toward the right team." },
      { id: "d", text: "It keeps speeding up." }
    ],
    answerId: "a",
    explanation: "Equal and opposite forces cancel, so the net force is zero. A rope at rest stays at rest.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-a-q07",
    prompt: "A ball rolling on a grassy field slowly comes to a stop. Which force mainly stops it?",
    options: [
      { id: "a", text: "Magnetic force" },
      { id: "b", text: "Friction" },
      { id: "c", text: "Electrostatic force" },
      { id: "d", text: "Muscular force" }
    ],
    answerId: "b",
    explanation: "Friction between the ball and the grass opposes the ball's motion and gradually stops it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-a-q08",
    prompt: "Why do good school bags have wide shoulder straps?",
    options: [
      { id: "a", text: "To make the bag heavier" },
      { id: "b", text: "To increase the pressure on the shoulders" },
      { id: "c", text: "To make the bag look attractive" },
      { id: "d", text: "To spread the weight over a larger area and reduce pressure" }
    ],
    answerId: "d",
    explanation: "Pressure = force \u00f7 area. A wider strap gives a larger area, so the same weight produces less pressure and the bag feels more comfortable.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-a-q09",
    prompt: "Pressure is defined as \u2014",
    options: [
      { id: "a", text: "force acting per unit area" },
      { id: "b", text: "force multiplied by area" },
      { id: "c", text: "area per unit force" },
      { id: "d", text: "mass per unit volume" }
    ],
    answerId: "a",
    explanation: "Pressure is force divided by the area it acts on. Mass per unit volume is density, which is a different quantity.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-a-q10",
    prompt: "A balloon rubbed on dry hair can pick up tiny bits of paper. Which force is at work?",
    options: [
      { id: "a", text: "Magnetic force" },
      { id: "b", text: "Gravitational force" },
      { id: "c", text: "Friction" },
      { id: "d", text: "Electrostatic force" }
    ],
    answerId: "d",
    explanation: "Rubbing gives the balloon an electric charge. A charged object attracts light objects like paper bits through electrostatic force.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-a-q11",
    prompt: "As you go deeper into a swimming pool, the water pressure \u2014",
    options: [
      { id: "a", text: "decreases" },
      { id: "b", text: "increases" },
      { id: "c", text: "stays the same" },
      { id: "d", text: "becomes zero" }
    ],
    answerId: "b",
    explanation: "Deeper water has more water above it pressing down, so liquid pressure increases with depth.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-a-q12",
    prompt: "When you sip juice through a straw, the juice rises because \u2014",
    options: [
      { id: "a", text: "your mouth pulls the juice up directly with muscular force" },
      { id: "b", text: "gravity pushes the juice upward" },
      { id: "c", text: "sucking lowers the air pressure in the straw, and atmospheric pressure on the juice pushes it up" },
      { id: "d", text: "juice is lighter than air" }
    ],
    answerId: "c",
    explanation: "Sucking removes some air from the straw. The greater air pressure outside, acting on the juice surface, then pushes the juice up the straw.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-a-q13",
    prompt: "A force of 200 N acts evenly on an area of 4 m\u00b2. What is the pressure?",
    options: [
      { id: "a", text: "800 Pa" },
      { id: "b", text: "204 Pa" },
      { id: "c", text: "196 Pa" },
      { id: "d", text: "50 Pa" }
    ],
    answerId: "d",
    explanation: "Pressure = force \u00f7 area = 200 N \u00f7 4 m\u00b2 = 50 N/m\u00b2 = 50 Pa.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-a-q14",
    prompt: "A tall water bottle has three small holes, one near the top, one in the middle, and one near the bottom. From which hole does water come out with the greatest force?",
    options: [
      { id: "a", text: "The hole near the bottom" },
      { id: "b", text: "The hole in the middle" },
      { id: "c", text: "The hole near the top" },
      { id: "d", text: "All three holes equally" }
    ],
    answerId: "a",
    explanation: "The bottom hole has the most water above it. Pressure is greatest there, so water rushes out with the most force.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-a-q15",
    prompt: "Why are the walls of a dam made thicker at the bottom than at the top?",
    options: [
      { id: "a", text: "So that the dam looks stronger" },
      { id: "b", text: "Because water is colder at the bottom" },
      { id: "c", text: "Because water pressure is greatest at the bottom" },
      { id: "d", text: "To stop fish from swimming through" }
    ],
    answerId: "c",
    explanation: "Water pressure increases with depth, so the base of the dam must withstand the largest push. A thicker base makes it stronger there.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-a-q16",
    prompt: "An iron nail has a sharp pointed tip. The main reason is that \u2014",
    options: [
      { id: "a", text: "the pointed end makes the nail lighter" },
      { id: "b", text: "the small area of the tip produces a large pressure for the same force" },
      { id: "c", text: "the pointed end increases friction with the hammer" },
      { id: "d", text: "the pointed tip attracts the wood" }
    ],
    answerId: "b",
    explanation: "For the same hammer force, a tiny tip area gives a very high pressure, which lets the nail push into wood easily.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-a-q17",
    prompt: "A brick weighing 30 N measures 0.3 m \u00d7 0.1 m \u00d7 0.05 m. On which face should it rest to exert the GREATEST pressure on the ground?",
    options: [
      { id: "a", text: "The 0.1 m \u00d7 0.05 m face" },
      { id: "b", text: "The 0.3 m \u00d7 0.1 m face" },
      { id: "c", text: "The 0.3 m \u00d7 0.05 m face" },
      { id: "d", text: "The pressure is the same on every face." }
    ],
    answerId: "a",
    explanation: "The weight stays 30 N, so pressure is largest on the smallest area. The 0.1 m \u00d7 0.05 m face is only 0.005 m\u00b2, which gives 30 \u00f7 0.005 = 6000 Pa.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-a-q18",
    prompt: "Which pair contains ONLY contact forces?",
    options: [
      { id: "a", text: "Gravity and friction" },
      { id: "b", text: "Magnetic force and muscular force" },
      { id: "c", text: "Friction and muscular force" },
      { id: "d", text: "Electrostatic force and gravity" }
    ],
    answerId: "c",
    explanation: "Friction and muscular force both need the objects to touch. Gravity, magnetic force, and electrostatic force can act from a distance.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-a-q19",
    prompt: "Three containers have very different shapes: one wide, one narrow, and one cone-shaped. Each has the same base area and is filled with water to the same height. How does the water pressure at the bottom compare?",
    options: [
      { id: "a", text: "It is greatest in the widest container." },
      { id: "b", text: "It is greatest in the narrowest container." },
      { id: "c", text: "It is greatest in the container holding the most water." },
      { id: "d", text: "It is the same in all three containers." }
    ],
    answerId: "d",
    explanation: "Liquid pressure depends on the depth of the liquid, not on the container's shape or the total amount of water. Equal depth means equal pressure at the bottom.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-a-q20",
    prompt: "A rubber sucker pressed onto a smooth tile stays stuck. Why?",
    options: [
      { id: "a", text: "The rubber has glue on it." },
      { id: "b", text: "Pressing pushes air out from under it, and the atmospheric pressure outside holds it against the tile." },
      { id: "c", text: "The tile pulls the sucker with magnetic force." },
      { id: "d", text: "Air trapped inside the sucker pulls the tile." }
    ],
    answerId: "b",
    explanation: "Very little air is left under the cup, so the pressure there is low. The greater air pressure outside presses the sucker onto the tile.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-a-q21",
    prompt: "Compared with sea level, the atmospheric pressure at the top of a high mountain is \u2014",
    options: [
      { id: "a", text: "higher" },
      { id: "b", text: "the same" },
      { id: "c", text: "lower" },
      { id: "d", text: "zero" }
    ],
    answerId: "c",
    explanation: "At a height there is less air above you pressing down, so atmospheric pressure is lower. It is still not zero.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-a-q22",
    prompt: "Atmospheric pressure is about 100,000 Pa. What force does the air exert on a page of area 0.0225 m\u00b2 (15 cm \u00d7 15 cm)?",
    options: [
      { id: "a", text: "225 N" },
      { id: "b", text: "22.5 N" },
      { id: "c", text: "22,500 N" },
      { id: "d", text: "2,250 N" }
    ],
    answerId: "d",
    explanation: "Force = pressure \u00d7 area = 100,000 Pa \u00d7 0.0225 m\u00b2 = 2,250 N. The page is not crushed because air pushes on it equally from both sides.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-a-q23",
    prompt: "In a famous old experiment, two metal hemispheres were joined and the air between them was pumped out. Teams of horses could not pull them apart. Why?",
    options: [
      { id: "a", text: "The atmospheric pressure outside pressed the hemispheres together because there was almost no air inside to push back." },
      { id: "b", text: "The hemispheres were strong magnets." },
      { id: "c", text: "The hemispheres were glued together." },
      { id: "d", text: "Friction from the horses' hooves slowed them down." }
    ],
    answerId: "a",
    explanation: "With the air removed, nothing pushed outward from inside. The large atmospheric pressure acting on the outside held the halves tightly together.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-a-q24",
    prompt: "A girl weighing 500 N stands on both feet, which have a total contact area of 0.05 m\u00b2. She then lifts one foot and stands on the other. What pressure does she now exert on the floor?",
    options: [
      { id: "a", text: "5,000 Pa" },
      { id: "b", text: "20,000 Pa" },
      { id: "c", text: "10,000 Pa" },
      { id: "d", text: "25 Pa" }
    ],
    answerId: "b",
    explanation: "One foot has half the area: 0.05 \u00f7 2 = 0.025 m\u00b2. Pressure = 500 N \u00f7 0.025 m\u00b2 = 20,000 Pa, which is double the 10,000 Pa she exerts on both feet.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g8-sci-force-b-q01",
    prompt: "A footballer kicks a moving ball sideways, and it goes off in a new direction. This shows that a force can \u2014",
    options: [
      { id: "a", text: "change the mass of the ball" },
      { id: "b", text: "change the colour of the ball" },
      { id: "c", text: "change the direction of motion" },
      { id: "d", text: "change only the ball's temperature" }
    ],
    answerId: "c",
    explanation: "The kick changed the direction in which the ball was moving. Changing direction is one of the main effects of a force.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-b-q02",
    prompt: "To describe a force completely, we must state its \u2014",
    options: [
      { id: "a", text: "magnitude and direction" },
      { id: "b", text: "magnitude only" },
      { id: "c", text: "direction only" },
      { id: "d", text: "colour and size" }
    ],
    answerId: "a",
    explanation: "A force has both a size (magnitude) and a direction. A 10 N push to the left has a different effect from a 10 N push to the right.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-b-q03",
    prompt: "Which of these is NOT a contact force?",
    options: [
      { id: "a", text: "Friction" },
      { id: "b", text: "Muscular force" },
      { id: "c", text: "Normal force from a table" },
      { id: "d", text: "Gravitational force" }
    ],
    answerId: "d",
    explanation: "Gravity acts without touching. For example, it pulls a falling mango toward the Earth through the air. The other three need contact.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-b-q04",
    prompt: "Which instrument is used to measure force?",
    options: [
      { id: "a", text: "Thermometer" },
      { id: "b", text: "Spring balance" },
      { id: "c", text: "Barometer" },
      { id: "d", text: "Odometer" }
    ],
    answerId: "b",
    explanation: "A spring balance measures force in newtons. A barometer measures atmospheric pressure, and a thermometer measures temperature.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-b-q05",
    prompt: "When you press a ball of clay between your palms, it becomes flat. This shows that force can \u2014",
    options: [
      { id: "a", text: "change the shape of an object" },
      { id: "b", text: "change the mass of an object" },
      { id: "c", text: "have no effect on an object" },
      { id: "d", text: "turn a solid into a liquid" }
    ],
    answerId: "a",
    explanation: "Pressing the clay changed its shape. The amount of clay, or its mass, stayed the same.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-b-q06",
    prompt: "One pascal is equal to \u2014",
    options: [
      { id: "a", text: "1 N \u00d7 1 m" },
      { id: "b", text: "1 kg per m\u00b2" },
      { id: "c", text: "1 N per cm\u00b2" },
      { id: "d", text: "1 N per m\u00b2" }
    ],
    answerId: "d",
    explanation: "A pressure of one pascal means a force of one newton acting on one square metre.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-b-q07",
    prompt: "A book rests on a table. The table pushes up on the book. What is this upward push called?",
    options: [
      { id: "a", text: "Gravitational force" },
      { id: "b", text: "Magnetic force" },
      { id: "c", text: "Normal force" },
      { id: "d", text: "Frictional force" }
    ],
    answerId: "c",
    explanation: "The normal force is the push of a surface on an object resting on it. It acts at right angles to the surface, here straight up.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-b-q08",
    prompt: "Kabir pushes a cart east with 40 N. His friend pushes the same cart west with 15 N. What is the net force?",
    options: [
      { id: "a", text: "55 N east" },
      { id: "b", text: "25 N east" },
      { id: "c", text: "25 N west" },
      { id: "d", text: "55 N west" }
    ],
    answerId: "b",
    explanation: "Opposite forces subtract: 40 N \u2212 15 N = 25 N. The net force points in the direction of the larger force, which is east.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-b-q09",
    prompt: "Camels can walk easily on soft desert sand because they have \u2014",
    options: [
      { id: "a", text: "long necks" },
      { id: "b", text: "humps that store fat" },
      { id: "c", text: "hard, pointed hooves" },
      { id: "d", text: "broad, flat feet that spread their weight over a large area" }
    ],
    answerId: "d",
    explanation: "Broad feet increase the contact area, which lowers the pressure on the sand, so the camel's feet do not sink in deeply.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-b-q10",
    prompt: "Two plastic straws are rubbed with the same piece of paper. When one is brought near the other hanging straw, the hanging straw moves away. What does this show?",
    options: [
      { id: "a", text: "Magnetic force between the straws" },
      { id: "b", text: "Gravitational force between the straws" },
      { id: "c", text: "Electrostatic force, because similarly charged objects repel" },
      { id: "d", text: "Friction between the straws" }
    ],
    answerId: "c",
    explanation: "Both straws pick up the same kind of charge. Like charges repel, so the hanging straw is pushed away without being touched.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-b-q11",
    prompt: "Army tanks and bulldozers move on wide caterpillar tracks instead of narrow wheels. This is mainly to \u2014",
    options: [
      { id: "a", text: "spread their weight over a larger area and reduce pressure on the ground" },
      { id: "b", text: "increase their top speed" },
      { id: "c", text: "increase their pressure on the ground for digging" },
      { id: "d", text: "reduce their weight" }
    ],
    answerId: "a",
    explanation: "Tracks cover a large area, so the heavy vehicle exerts less pressure and does not sink into soft or muddy ground.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-b-q12",
    prompt: "A ripe mango falls from a tree to the ground. Which force pulls it down?",
    options: [
      { id: "a", text: "Magnetic force" },
      { id: "b", text: "Gravitational force" },
      { id: "c", text: "Electrostatic force" },
      { id: "d", text: "Muscular force" }
    ],
    answerId: "b",
    explanation: "The Earth's gravity pulls all objects toward it. Gravity is a non-contact force.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-b-q13",
    prompt: "Which knife cuts vegetables more easily, and why?",
    options: [
      { id: "a", text: "A blunt knife, because its edge has a larger area" },
      { id: "b", text: "A sharp knife, because its thin edge has a smaller area and produces greater pressure" },
      { id: "c", text: "Both cut equally well with the same force." },
      { id: "d", text: "A blunt knife, because it produces more friction" }
    ],
    answerId: "b",
    explanation: "The same force on the sharp knife's very thin edge gives a much higher pressure, which cuts through the vegetable more easily.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-b-q14",
    prompt: "A water tank is on the roof of a four-storey building. Water flows faster from a tap on the ground floor than from a tap on the top floor. Why?",
    options: [
      { id: "a", text: "Taps on the ground floor are always wider." },
      { id: "b", text: "Water on the ground floor is warmer." },
      { id: "c", text: "There is less friction in pipes on the ground floor." },
      { id: "d", text: "The ground-floor tap has a greater height of water above it, so the pressure is higher." }
    ],
    answerId: "d",
    explanation: "Liquid pressure increases with depth. The ground-floor tap is much farther below the water level in the tank, so the pressure there is greater.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-b-q15",
    prompt: "A nurse fills a syringe by dipping the needle into medicine and pulling the plunger back. The liquid enters the syringe because \u2014",
    options: [
      { id: "a", text: "pulling the plunger lowers the pressure inside, and atmospheric pressure pushes the liquid in" },
      { id: "b", text: "the plunger pulls the liquid with magnetic force" },
      { id: "c", text: "gravity pulls the liquid upward" },
      { id: "d", text: "the liquid moves into empty spaces all by itself" }
    ],
    answerId: "a",
    explanation: "Pulling the plunger makes a low-pressure space inside the syringe. The higher air pressure on the medicine's surface pushes the liquid up into it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-b-q16",
    prompt: "Air presses on our bodies with a very large force. Why are we not crushed?",
    options: [
      { id: "a", text: "Air has no weight." },
      { id: "b", text: "Atmospheric pressure acts only on buildings." },
      { id: "c", text: "The pressure of fluids inside our bodies balances the air pressure outside." },
      { id: "d", text: "Our skin repels air." }
    ],
    answerId: "c",
    explanation: "The fluids inside our bodies push outward with a pressure about equal to the atmospheric pressure. The inside and outside pressures balance.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-b-q17",
    prompt: "A sealed packet of chips bought in the plains looks puffed up when it is carried to a hill station. Why?",
    options: [
      { id: "a", text: "The chips expand in the cold." },
      { id: "b", text: "More air leaks into the packet." },
      { id: "c", text: "Gravity is stronger on hills." },
      { id: "d", text: "The outside air pressure is lower at a height, so the air inside pushes the packet outward." }
    ],
    answerId: "d",
    explanation: "At a height, atmospheric pressure is lower. The air sealed inside is now at a higher pressure than the air outside, so it pushes the packet outward.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-b-q18",
    prompt: "A magnet will attract which of these?",
    options: [
      { id: "a", text: "Aluminium foil" },
      { id: "b", text: "Iron pins" },
      { id: "c", text: "Copper wire" },
      { id: "d", text: "A plastic scale" }
    ],
    answerId: "b",
    explanation: "Magnets attract magnetic materials such as iron. Aluminium, copper, and plastic are not attracted.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-b-q19",
    prompt: "You have a bar magnet and an iron bar that may or may not be a magnet. Which observation PROVES that the iron bar is itself a magnet?",
    options: [
      { id: "a", text: "One end of the iron bar is attracted to the magnet's north pole." },
      { id: "b", text: "The iron bar sticks to the side of the magnet." },
      { id: "c", text: "One end of the iron bar is pushed away (repelled) by the magnet's north pole." },
      { id: "d", text: "The iron bar feels heavy." }
    ],
    answerId: "c",
    explanation: "A magnet also attracts plain, unmagnetised iron, so attraction proves nothing. Only another magnet's like pole can repel it, so repulsion is the sure test.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-b-q20",
    prompt: "A woman weighing 600 N stands on stiletto heels with a total contact area of 0.0002 m\u00b2. An elephant weighing 40,000 N stands on four feet with a total area of 0.4 m\u00b2. Who exerts more pressure on the floor?",
    options: [
      { id: "a", text: "The woman, about 30 times more than the elephant" },
      { id: "b", text: "The elephant, because it is much heavier" },
      { id: "c", text: "Both exert equal pressure." },
      { id: "d", text: "The elephant, about 30 times more than the woman" }
    ],
    answerId: "a",
    explanation: "The woman exerts 600 \u00f7 0.0002 = 3,000,000 Pa. The elephant exerts 40,000 \u00f7 0.4 = 100,000 Pa. Her tiny heel area makes her pressure about 30 times greater.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-b-q21",
    prompt: "At a given depth inside a liquid, the liquid pressure acts \u2014",
    options: [
      { id: "a", text: "only downward" },
      { id: "b", text: "only sideways" },
      { id: "c", text: "only upward" },
      { id: "d", text: "equally in all directions" }
    ],
    answerId: "d",
    explanation: "At any one depth, a liquid pushes equally in every direction: down, up, and on the side walls of its container.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-b-q22",
    prompt: "In the sea, water pressure rises by about 1 atmosphere for every 10 m of depth. The air at the surface already presses with about 1 atmosphere. What is the total pressure on a diver 30 m deep?",
    options: [
      { id: "a", text: "About 4 atmospheres" },
      { id: "b", text: "About 3 atmospheres" },
      { id: "c", text: "About 30 atmospheres" },
      { id: "d", text: "About 1 atmosphere" }
    ],
    answerId: "a",
    explanation: "30 m of water adds about 3 atmospheres. Adding the 1 atmosphere of air above the water gives a total of about 4 atmospheres.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-b-q23",
    prompt: "A person has fallen through thin ice on a pond. Rescuers are told to crawl or lie flat on the ice instead of walking. Why?",
    options: [
      { id: "a", text: "To keep themselves warm" },
      { id: "b", text: "To increase friction with the ice" },
      { id: "c", text: "To spread their weight over a larger area so the pressure is less and the ice does not crack" },
      { id: "d", text: "To move faster across the ice" }
    ],
    answerId: "c",
    explanation: "Lying flat greatly increases the contact area. For the same weight, the pressure on the ice drops, so the ice is less likely to break.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g8-sci-force-b-q24",
    prompt: "Water is poured into a U-shaped glass tube with one wide arm and one narrow arm. When the water settles, how do the water levels in the two arms compare?",
    options: [
      { id: "a", text: "Higher in the wide arm" },
      { id: "b", text: "The same level in both arms" },
      { id: "c", text: "Higher in the narrow arm" },
      { id: "d", text: "Higher in whichever arm the water was poured into" }
    ],
    answerId: "b",
    explanation: "Liquid pressure depends only on depth, not on the width of the tube. The water settles when the pressure at the bottom is equal from both sides, which happens when both levels are the same height.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\u26a1",
    title: "Force and pressure",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "magnet",
    speak: "A force is a push or a pull. Pressure is force on a unit area.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "magnet",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Force", reveal: "Push or pull", emoji: "\ud83d\udc49" },
      { label: "Pressure", reveal: "Force divided by area", emoji: "\ud83d\udccf" },
      { label: "Friction", reveal: "Opposes motion", emoji: "\ud83d\uded1" },
      { label: "Air pressure", reveal: "Atmosphere pushes too", emoji: "\ud83c\udf2c\ufe0f" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "Pressure equals\u2026",
    options: [
        { id: "a", text: "Force times area" },
        { id: "b", text: "Force divided by area" },
        { id: "c", text: "Mass times speed" },
        { id: "d", text: "Area divided by force" }
    ],
    answerId: "b",
    why: "Pressure is force on a unit area.",
    visual: "magnet",
    speak: "Pressure equals\u2026",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Force changes motion", "P = F/A", "Friction matters", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g8ScienceForce: ChapterDef = {
  id: "force-pressure",
  title: "Force and Pressure",
  emoji: "\u26a1",
  blurb: "Push, pull and pressure",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "forces-energy",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "forces-energy",
      questions: SET_B,
    },
  ],
  paperTopics: ["forces-energy", "materials"],
};

export const g8ScienceForceQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
