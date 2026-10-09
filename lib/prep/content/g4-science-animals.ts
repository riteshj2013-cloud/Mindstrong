import type { ChapterDef, PrepQuestion } from "../types";

/** Animals - habitats, food habits, adaptations, life cycles (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g4-sci-animals-a-q01",
    prompt: "A habitat is ______.",
    options: [
      { id: "a", text: "The natural place where an animal lives" },
      { id: "b", text: "Only a zoo cage" },
      { id: "c", text: "A type of food" },
      { id: "d", text: "A kind of bone" }
    ],
    answerId: "a",
    explanation: "A habitat is an animal's natural home, such as a forest, desert, pond or ocean.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-a-q02",
    prompt: "Which animal is best suited to living in water most of the time?",
    options: [
      { id: "a", text: "Camel" },
      { id: "b", text: "Fish" },
      { id: "c", text: "Eagle" },
      { id: "d", text: "Camel cricket" }
    ],
    answerId: "b",
    explanation: "Fish have gills and fins suited to living in water. Camels are desert animals; eagles fly in air.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-a-q03",
    prompt: "Animals that eat only plants are called ______.",
    options: [
      { id: "a", text: "Carnivores" },
      { id: "b", text: "Omnivores" },
      { id: "c", text: "Herbivores" },
      { id: "d", text: "Producers" }
    ],
    answerId: "c",
    explanation: "Herbivores eat plants. Cows, deer and goats are herbivores.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-a-q04",
    prompt: "A tiger mainly eats other animals. A tiger is a ______.",
    options: [
      { id: "a", text: "Herbivore" },
      { id: "b", text: "Producer" },
      { id: "c", text: "Seed" },
      { id: "d", text: "Carnivore" }
    ],
    answerId: "d",
    explanation: "Carnivores eat other animals. Tigers, lions and eagles are carnivores.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-a-q05",
    prompt: "A crow eats grains and also insects or leftover food. A crow is an ______.",
    options: [
      { id: "a", text: "Omnivore" },
      { id: "b", text: "Herbivore only" },
      { id: "c", text: "Carnivore only" },
      { id: "d", text: "Producer" }
    ],
    answerId: "a",
    explanation: "Omnivores eat both plant and animal food. Crows, bears and humans are omnivores.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-a-q06",
    prompt: "Which adaptation helps a camel live in the desert?",
    options: [
      { id: "a", text: "Gills for breathing underwater" },
      { id: "b", text: "Storing fat in its hump and going long without water" },
      { id: "c", text: "Bright feathers for swimming" },
      { id: "d", text: "Webbed feet for ice skating" }
    ],
    answerId: "b",
    explanation: "Camels store fat in the hump and can travel long distances with little water in hot deserts.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-a-q07",
    prompt: "Polar bears have thick fur and a layer of fat. This mainly helps them ______.",
    options: [
      { id: "a", text: "Stay cool in a desert" },
      { id: "b", text: "Fly between trees" },
      { id: "c", text: "Stay warm in a cold habitat" },
      { id: "d", text: "Breathe underwater forever" }
    ],
    answerId: "c",
    explanation: "Thick fur and fat keep polar bears warm in icy polar habitats.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-a-q08",
    prompt: "A frog can live both in water and on land. Such animals are called ______.",
    options: [
      { id: "a", text: "Only fish" },
      { id: "b", text: "Only birds" },
      { id: "c", text: "Insects with six wings" },
      { id: "d", text: "Amphibians" }
    ],
    answerId: "d",
    explanation: "Amphibians such as frogs can live in water and on land at different times of life.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-a-q09",
    prompt: "Which is the correct order in a simple butterfly life cycle?",
    options: [
      { id: "a", text: "Egg \u2192 larva (caterpillar) \u2192 pupa \u2192 adult butterfly" },
      { id: "b", text: "Adult \u2192 egg \u2192 pupa \u2192 larva" },
      { id: "c", text: "Pupa \u2192 adult \u2192 egg \u2192 rock" },
      { id: "d", text: "Larva \u2192 adult \u2192 egg \u2192 pupa \u2192 seed" }
    ],
    answerId: "a",
    explanation: "A butterfly grows from egg to larva (caterpillar), then pupa (chrysalis), then adult butterfly.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-a-q10",
    prompt: "A tadpole grows into a ______.",
    options: [
      { id: "a", text: "Butterfly" },
      { id: "b", text: "Frog" },
      { id: "c", text: "Hen" },
      { id: "d", text: "Snake egg" }
    ],
    answerId: "b",
    explanation: "Frogs lay eggs in water. Tadpoles hatch and slowly change into frogs.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-a-q11",
    prompt: "Which habitat is hot and dry, with little rainfall?",
    options: [
      { id: "a", text: "Rainforest" },
      { id: "b", text: "Pond" },
      { id: "c", text: "Desert" },
      { id: "d", text: "Ocean deep" }
    ],
    answerId: "c",
    explanation: "Deserts are hot and dry with very little rain. Camels and cactus are desert survivors.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-a-q12",
    prompt: "Deer live in forests and eat leaves and grass. Their habitat and food match because ______.",
    options: [
      { id: "a", text: "Forests have no plants" },
      { id: "b", text: "Deer eat only fish" },
      { id: "c", text: "Deer need icebergs" },
      { id: "d", text: "Forests provide plants to eat and cover to hide" }
    ],
    answerId: "d",
    explanation: "Forest plants give deer food, and trees and bushes help them hide from predators.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-a-q13",
    prompt: "Fish breathe underwater using ______.",
    options: [
      { id: "a", text: "Gills" },
      { id: "b", text: "Lungs like ours only" },
      { id: "c", text: "Feathers" },
      { id: "d", text: "Humps" }
    ],
    answerId: "a",
    explanation: "Gills take oxygen dissolved in water so fish can breathe underwater.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-a-q14",
    prompt: "A bird's wings are an adaptation mainly for ______.",
    options: [
      { id: "a", text: "Digging deep burrows only" },
      { id: "b", text: "Flying" },
      { id: "c", text: "Storing desert water" },
      { id: "d", text: "Chewing grass like a cow" }
    ],
    answerId: "b",
    explanation: "Wings help most birds fly, which helps them find food, escape danger and migrate.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-a-q15",
    prompt: "Which animal has a long sticky tongue useful for catching insects?",
    options: [
      { id: "a", text: "Cow" },
      { id: "b", text: "Fish with no tongue use" },
      { id: "c", text: "Frog or chameleon (insect catchers)" },
      { id: "d", text: "Camel hump" }
    ],
    answerId: "c",
    explanation: "Frogs and chameleons use long sticky tongues to catch insects quickly.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-a-q16",
    prompt: "In a simple food chain: grass \u2192 rabbit \u2192 fox. The rabbit is a ______.",
    options: [
      { id: "a", text: "Producer" },
      { id: "b", text: "Only a carnivore" },
      { id: "c", text: "Non-living thing" },
      { id: "d", text: "Herbivore (plant eater)" }
    ],
    answerId: "d",
    explanation: "The rabbit eats grass, so it is a herbivore. The fox that eats the rabbit is a carnivore.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-a-q17",
    prompt: "Which animal is adapted to life in trees with a long tail for balance?",
    options: [
      { id: "a", text: "Monkey" },
      { id: "b", text: "Fish" },
      { id: "c", text: "Earthworm" },
      { id: "d", text: "Camel" }
    ],
    answerId: "a",
    explanation: "Many monkeys live in trees. A long tail helps with balance while climbing and jumping.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-a-q18",
    prompt: "A hen's life cycle includes eggs. Chicks hatch from eggs. This means hens are ______.",
    options: [
      { id: "a", text: "Animals that never have young" },
      { id: "b", text: "Animals that lay eggs (oviparous birds)" },
      { id: "c", text: "Plants" },
      { id: "d", text: "Only underwater animals" }
    ],
    answerId: "b",
    explanation: "Birds like hens lay eggs. The chick develops inside the egg and then hatches.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-a-q19",
    prompt: "Webbed feet help a duck mainly to ______.",
    options: [
      { id: "a", text: "Run on desert sand only" },
      { id: "b", text: "Dig metal" },
      { id: "c", text: "Swim in water" },
      { id: "d", text: "Make honey" }
    ],
    answerId: "c",
    explanation: "Webbed feet act like paddles and help ducks swim well in water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-a-q20",
    prompt: "Which of these is a nocturnal animal (active mainly at night)?",
    options: [
      { id: "a", text: "Crow at noon only" },
      { id: "b", text: "Butterfly in bright sun only" },
      { id: "c", text: "Hen in the afternoon only" },
      { id: "d", text: "Owl" }
    ],
    answerId: "d",
    explanation: "Owls are mostly nocturnal. They hunt at night and have eyes and ears suited to low light.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-a-q21",
    prompt: "Thick scales on a crocodile help it ______.",
    options: [
      { id: "a", text: "Protect its body and live well in watery habitats" },
      { id: "b", text: "Fly long distances" },
      { id: "c", text: "Make milk" },
      { id: "d", text: "Photosynthesise" }
    ],
    answerId: "a",
    explanation: "Tough scales protect the crocodile's body as it lives in and near water.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-a-q22",
    prompt: "Which animal would you most expect in a freshwater pond habitat?",
    options: [
      { id: "a", text: "Polar bear" },
      { id: "b", text: "Frog" },
      { id: "c", text: "Camel" },
      { id: "d", text: "Penguin on ice only" }
    ],
    answerId: "b",
    explanation: "Frogs and many insects, fish and plants live in or near freshwater ponds.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-a-q23",
    prompt: "An adaptation is ______.",
    options: [
      { id: "a", text: "A random toy" },
      { id: "b", text: "Only a human invention" },
      { id: "c", text: "A body feature or behaviour that helps an animal survive in its habitat" },
      { id: "d", text: "A type of rock" }
    ],
    answerId: "c",
    explanation: "Adaptations are features or behaviours that help living things survive where they live.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-a-q24",
    prompt: "Why do many desert animals stay in burrows during the hot day?",
    options: [
      { id: "a", text: "To find ice cream" },
      { id: "b", text: "To grow gills" },
      { id: "c", text: "To become plants" },
      { id: "d", text: "To escape the extreme heat" }
    ],
    answerId: "d",
    explanation: "Burrows stay cooler. Staying underground by day helps desert animals avoid deadly heat.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g4-sci-animals-b-q01",
    prompt: "Which habitat has many tall trees, shade and high rainfall?",
    options: [
      { id: "a", text: "Forest (especially rainforest or dense forest)" },
      { id: "b", text: "Desert" },
      { id: "c", text: "Icy polar desert only" },
      { id: "d", text: "Classroom" }
    ],
    answerId: "a",
    explanation: "Forests have many trees. Rainforests are wet and full of plants and animals.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-b-q02",
    prompt: "A lion lives mainly in grasslands or forests and hunts other animals. Its food habit is ______.",
    options: [
      { id: "a", text: "Herbivore" },
      { id: "b", text: "Carnivore" },
      { id: "c", text: "Producer" },
      { id: "d", text: "Only nectar feeder" }
    ],
    answerId: "b",
    explanation: "Lions are carnivores. They hunt and eat other animals.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-b-q03",
    prompt: "Which animal is an herbivore?",
    options: [
      { id: "a", text: "Eagle" },
      { id: "b", text: "Shark" },
      { id: "c", text: "Goat" },
      { id: "d", text: "Tiger" }
    ],
    answerId: "c",
    explanation: "Goats eat plants such as grass and leaves, so they are herbivores.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-b-q04",
    prompt: "Sharp claws and strong beaks in eagles are adaptations for ______.",
    options: [
      { id: "a", text: "Eating only grass" },
      { id: "b", text: "Making honey" },
      { id: "c", text: "Breathing underwater" },
      { id: "d", text: "Catching and tearing animal food" }
    ],
    answerId: "d",
    explanation: "Eagles are carnivores. Sharp claws and hooked beaks help them catch and tear meat.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-b-q05",
    prompt: "A penguin's flipper-like wings and waterproof feathers help it ______.",
    options: [
      { id: "a", text: "Swim and stay warm in cold ocean habitats" },
      { id: "b", text: "Fly like an eagle over deserts" },
      { id: "c", text: "Climb tall mango trees" },
      { id: "d", text: "Store water in a hump" }
    ],
    answerId: "a",
    explanation: "Penguins are adapted for cold seas. Flippers help them swim; feathers help keep water out and stay warm.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-b-q06",
    prompt: "In the butterfly life cycle, the caterpillar is the ______ stage.",
    options: [
      { id: "a", text: "Egg" },
      { id: "b", text: "Larva" },
      { id: "c", text: "Adult only" },
      { id: "d", text: "Seed" }
    ],
    answerId: "b",
    explanation: "The caterpillar is the larva stage. It eats a lot before becoming a pupa.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-b-q07",
    prompt: "During metamorphosis, a tadpole grows ______.",
    options: [
      { id: "a", text: "Wings first like a bird" },
      { id: "b", text: "A camel hump" },
      { id: "c", text: "Legs and lungs as it becomes a frog" },
      { id: "d", text: "Feathers" }
    ],
    answerId: "c",
    explanation: "Tadpoles live in water and slowly grow legs; lungs develop as they become frogs that can live on land.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-b-q08",
    prompt: "Which food chain is in a sensible order?",
    options: [
      { id: "a", text: "Tiger \u2192 grass \u2192 deer" },
      { id: "b", text: "Deer \u2192 grass \u2192 tiger" },
      { id: "c", text: "Tiger \u2192 deer \u2192 grass as food for tiger first" },
      { id: "d", text: "Grass \u2192 deer \u2192 tiger" }
    ],
    answerId: "d",
    explanation: "Producers (grass) are eaten by herbivores (deer), which may be eaten by carnivores (tiger).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-b-q09",
    prompt: "Hollow bones and light bodies help many birds to ______.",
    options: [
      { id: "a", text: "Fly more easily" },
      { id: "b", text: "Sink quickly in mud" },
      { id: "c", text: "Store months of desert water" },
      { id: "d", text: "Dig coal mines" }
    ],
    answerId: "a",
    explanation: "Light, hollow bones make flying easier for many birds.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-b-q10",
    prompt: "Which animal uses echolocation (sound echoes) to find its way in the dark?",
    options: [
      { id: "a", text: "Cow" },
      { id: "b", text: "Bat" },
      { id: "c", text: "Goldfish in a bowl only" },
      { id: "d", text: "Butterfly" }
    ],
    answerId: "b",
    explanation: "Bats send out sounds and listen to echoes to find objects and prey in the dark.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-b-q11",
    prompt: "A fish's streamlined body shape helps it ______.",
    options: [
      { id: "a", text: "Walk on land easily" },
      { id: "b", text: "Fly between clouds" },
      { id: "c", text: "Move smoothly through water" },
      { id: "d", text: "Store fat in a hump" }
    ],
    answerId: "c",
    explanation: "A pointed, smooth shape reduces water resistance so fish can swim efficiently.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-b-q12",
    prompt: "Animals that are active during the day are called ______.",
    options: [
      { id: "a", text: "Nocturnal" },
      { id: "b", text: "Amphibians only" },
      { id: "c", text: "Producers" },
      { id: "d", text: "Diurnal" }
    ],
    answerId: "d",
    explanation: "Diurnal animals are active by day. Nocturnal animals are active at night.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-b-q13",
    prompt: "Which feature helps a polar animal hide in snow?",
    options: [
      { id: "a", text: "White fur that blends with snow" },
      { id: "b", text: "Bright red colour always" },
      { id: "c", text: "Green leaves on its back" },
      { id: "d", text: "Metal shell" }
    ],
    answerId: "a",
    explanation: "White fur is camouflage in snowy habitats, helping animals hide from prey or predators.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-b-q14",
    prompt: "Cows have flat teeth mainly to ______.",
    options: [
      { id: "a", text: "Tear meat like a tiger" },
      { id: "b", text: "Grind plant food" },
      { id: "c", text: "Catch fish" },
      { id: "d", text: "Drill wood" }
    ],
    answerId: "b",
    explanation: "Flat grinding teeth suit herbivores that chew grass and other plants.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-b-q15",
    prompt: "A life cycle shows ______.",
    options: [
      { id: "a", text: "Only one day in an animal's life" },
      { id: "b", text: "Only the habitat map" },
      { id: "c", text: "The stages an animal passes through as it grows and reproduces" },
      { id: "d", text: "A food menu only" }
    ],
    answerId: "c",
    explanation: "A life cycle includes stages from young to adult and often how the next generation begins.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-b-q16",
    prompt: "Which animal is best matched to a burrow habitat under the ground?",
    options: [
      { id: "a", text: "Eagle nesting only on cliffs" },
      { id: "b", text: "Shark" },
      { id: "c", text: "Penguin on open ice only" },
      { id: "d", text: "Rabbit" }
    ],
    answerId: "d",
    explanation: "Rabbits often live in burrows that shelter them from weather and predators.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-b-q17",
    prompt: "Gills : fish :: lungs : ______.",
    options: [
      { id: "a", text: "Human (and many land animals)" },
      { id: "b", text: "Shark only" },
      { id: "c", text: "Leaf" },
      { id: "d", text: "Rock" }
    ],
    answerId: "a",
    explanation: "Fish use gills in water; humans and many land animals use lungs to breathe air.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-b-q18",
    prompt: "Why do birds build nests?",
    options: [
      { id: "a", text: "To store cars" },
      { id: "b", text: "To lay eggs and raise chicks safely" },
      { id: "c", text: "To photosynthesise" },
      { id: "d", text: "To hunt whales" }
    ],
    answerId: "b",
    explanation: "Nests give a safe place for eggs and young chicks.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-b-q19",
    prompt: "A chameleon changing colour is mainly useful for ______.",
    options: [
      { id: "a", text: "Making food from sunlight" },
      { id: "b", text: "Flying to the moon" },
      { id: "c", text: "Camouflage and signalling in its habitat" },
      { id: "d", text: "Breathing underwater only" }
    ],
    answerId: "c",
    explanation: "Colour change can help a chameleon blend in (camouflage) and communicate.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-b-q20",
    prompt: "Which animal group typically has six legs?",
    options: [
      { id: "a", text: "Birds" },
      { id: "b", text: "Fish" },
      { id: "c", text: "Snakes" },
      { id: "d", text: "Insects" }
    ],
    answerId: "d",
    explanation: "Adult insects typically have six legs. Spiders have eight and are not insects.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-b-q21",
    prompt: "Migrating birds travel long distances mainly to ______.",
    options: [
      { id: "a", text: "Find better weather and food at different times of year" },
      { id: "b", text: "Become fish" },
      { id: "c", text: "Lose their wings" },
      { id: "d", text: "Turn into eggs permanently" }
    ],
    answerId: "a",
    explanation: "Migration helps birds find warmer places and more food when seasons change.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-b-q22",
    prompt: "Which is an aquatic habitat?",
    options: [
      { id: "a", text: "Desert dune" },
      { id: "b", text: "Ocean or river" },
      { id: "c", text: "Classroom desk" },
      { id: "d", text: "Mountain cave with no water" }
    ],
    answerId: "b",
    explanation: "Aquatic habitats are water habitats such as oceans, rivers, lakes and ponds.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-b-q23",
    prompt: "A thick fat layer under a seal's skin is an adaptation to ______.",
    options: [
      { id: "a", text: "Keep cool in a hot desert" },
      { id: "b", text: "Help it climb trees" },
      { id: "c", text: "Keep warm in cold water" },
      { id: "d", text: "Help it eat only leaves" }
    ],
    answerId: "c",
    explanation: "Blubber (fat) insulates seals so they stay warm in cold seas.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g4-sci-animals-b-q24",
    prompt: "Humans are omnivores because we ______.",
    options: [
      { id: "a", text: "Eat only grass" },
      { id: "b", text: "Never eat plants" },
      { id: "c", text: "Breathe only with gills" },
      { id: "d", text: "Can eat both plant foods and animal foods" }
    ],
    answerId: "d",
    explanation: "An Indian thali may include rice and vegetables (plants) and also curd, egg or fish (animal foods).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83d\udc3e",
    title: "Homes, food and clever bodies",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "plant",
    speak: "Animals live in habitats. They eat plants, animals or both. Bodies and behaviours help them survive. Life cycles show how they grow.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "plant",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Habitats", reveal: "Forest, desert, pond, ocean, polar homes", emoji: "\ud83c\udf0d" },
      { label: "Food habits", reveal: "Herbivore, carnivore, omnivore", emoji: "\ud83e\udd57" },
      { label: "Adaptations", reveal: "Fur, gills, wings, camouflage, humps", emoji: "\ud83d\udc2b" },
      { label: "Life cycles", reveal: "Egg \u2192 young stages \u2192 adult (butterfly, frog, hen)", emoji: "\ud83e\udd8b" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "An animal that eats only plants is a\u2026",
    options: [
        { id: "a", text: "Carnivore" },
        { id: "b", text: "Herbivore" },
        { id: "c", text: "Omnivore" },
        { id: "d", text: "Producer" }
    ],
    answerId: "b",
    why: "Herbivores eat plants.",
    visual: "plant",
    speak: "An animal that eats only plants is a\u2026",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Habitat is a natural home", "Food habits and adaptations help survival", "Life cycles show growth stages", "Set A and Set B ready \u2014 24 MCQs each"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g4ScienceAnimals: ChapterDef = {
  id: "animals",
  title: "Animals",
  emoji: "\ud83d\udc3e",
  blurb: "Habitats, food, adaptations and life cycles",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "living-things",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "living-things",
      questions: SET_B,
    },
  ],
  paperTopics: ["living-things", "human-body"],
};

export const g4ScienceAnimalsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
