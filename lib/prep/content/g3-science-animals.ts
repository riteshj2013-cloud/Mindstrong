import type { ChapterDef, PrepQuestion } from "../types";

/** Animals: Food & Homes - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g3-sci-animals-a-q01",
    prompt: "Which animal eats only plants?",
    options: [
      { id: "a", text: "Lion" },
      { id: "b", text: "Cow" },
      { id: "c", text: "Eagle" },
      { id: "d", text: "Snake" }
    ],
    answerId: "b",
    explanation: "A cow eats grass and leaves. It does not eat other animals, so it is a herbivore.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-a-q02",
    prompt: "What do we call animals that eat only plants?",
    options: [
      { id: "a", text: "Herbivores" },
      { id: "b", text: "Carnivores" },
      { id: "c", text: "Omnivores" },
      { id: "d", text: "Insects" }
    ],
    answerId: "a",
    explanation: "Herbivores are plant eaters. Cows, goats and deer are herbivores.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-a-q03",
    prompt: "What does a lion eat?",
    options: [
      { id: "a", text: "Grass" },
      { id: "b", text: "Fruits" },
      { id: "c", text: "Other animals" },
      { id: "d", text: "Seeds" }
    ],
    answerId: "c",
    explanation: "A lion hunts other animals, like deer and zebras. It is a carnivore.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-a-q04",
    prompt: "Where does a bird lay its eggs?",
    options: [
      { id: "a", text: "Den" },
      { id: "b", text: "Kennel" },
      { id: "c", text: "Hive" },
      { id: "d", text: "Nest" }
    ],
    answerId: "d",
    explanation: "Birds build nests with twigs, grass and leaves. They lay eggs and keep babies there.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-a-q05",
    prompt: "Where do honeybees live?",
    options: [
      { id: "a", text: "Hive" },
      { id: "b", text: "Stable" },
      { id: "c", text: "Sty" },
      { id: "d", text: "Burrow" }
    ],
    answerId: "a",
    explanation: "Bees live together in a hive. They make honey there too.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-a-q06",
    prompt: "A crow eats grains and also eats worms. What kind of eater is a crow?",
    options: [
      { id: "a", text: "Herbivore" },
      { id: "b", text: "Carnivore" },
      { id: "c", text: "Omnivore" },
      { id: "d", text: "Insect" }
    ],
    answerId: "c",
    explanation: "A crow eats both plant food and animal food. So it is an omnivore.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-a-q07",
    prompt: "People make a small house for their pet dog. What is it called?",
    options: [
      { id: "a", text: "Nest" },
      { id: "b", text: "Kennel" },
      { id: "c", text: "Hive" },
      { id: "d", text: "Den" }
    ],
    answerId: "b",
    explanation: "A kennel is a dog's home. People build it to keep the dog safe and dry.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-a-q08",
    prompt: "Which of these animals is a carnivore?",
    options: [
      { id: "a", text: "Deer" },
      { id: "b", text: "Goat" },
      { id: "c", text: "Rabbit" },
      { id: "d", text: "Tiger" }
    ],
    answerId: "d",
    explanation: "A tiger hunts and eats other animals. Deer, goats and rabbits eat plants.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-a-q09",
    prompt: "Where does a horse live?",
    options: [
      { id: "a", text: "Stable" },
      { id: "b", text: "Sty" },
      { id: "c", text: "Hive" },
      { id: "d", text: "Nest" }
    ],
    answerId: "a",
    explanation: "A stable is a home people make for horses. It keeps them safe from rain and sun.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-a-q10",
    prompt: "A rabbit digs a hole under the ground to live in. What is this home called?",
    options: [
      { id: "a", text: "Den" },
      { id: "b", text: "Nest" },
      { id: "c", text: "Burrow" },
      { id: "d", text: "Kennel" }
    ],
    answerId: "c",
    explanation: "A burrow is a hole dug in the ground. Rabbits hide and sleep in burrows.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-a-q11",
    prompt: "Sharp pointed teeth help an animal tear meat. Which animal has such teeth?",
    options: [
      { id: "a", text: "Cow" },
      { id: "b", text: "Lion" },
      { id: "c", text: "Goat" },
      { id: "d", text: "Deer" }
    ],
    answerId: "b",
    explanation: "A lion eats meat, so it has sharp pointed teeth. Cows, goats and deer have flat teeth for plants.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-a-q12",
    prompt: "Flat teeth are good for grinding. What food do flat teeth help to chew?",
    options: [
      { id: "a", text: "Meat" },
      { id: "b", text: "Grass and leaves" },
      { id: "c", text: "Fish" },
      { id: "d", text: "Insects" }
    ],
    answerId: "b",
    explanation: "Plant eaters like cows have flat teeth. They grind grass and leaves into small bits.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-a-q13",
    prompt: "Where does a pig live on a farm?",
    options: [
      { id: "a", text: "Stable" },
      { id: "b", text: "Kennel" },
      { id: "c", text: "Sty" },
      { id: "d", text: "Hive" }
    ],
    answerId: "c",
    explanation: "A sty is a pig's home. Farmers build it for their pigs.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-a-q14",
    prompt: "An eagle has a strong hooked beak. How does this beak help it?",
    options: [
      { id: "a", text: "To crack nuts" },
      { id: "b", text: "To sip nectar" },
      { id: "c", text: "To tear meat" },
      { id: "d", text: "To dig soil" }
    ],
    answerId: "c",
    explanation: "An eagle eats small animals. Its hooked beak works like a hook to tear meat.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-a-q15",
    prompt: "Which group has only omnivores?",
    options: [
      { id: "a", text: "Crow, bear, human" },
      { id: "b", text: "Lion, tiger, eagle" },
      { id: "c", text: "Cow, goat, deer" },
      { id: "d", text: "Rabbit, horse, camel" }
    ],
    answerId: "a",
    explanation: "Crows, bears and humans eat both plants and animals. The other groups eat only one kind of food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-a-q16",
    prompt: "A lion rests in a cave with its cubs. What is a lion's home called?",
    options: [
      { id: "a", text: "Den" },
      { id: "b", text: "Nest" },
      { id: "c", text: "Hive" },
      { id: "d", text: "Sty" }
    ],
    answerId: "a",
    explanation: "A den is a lion's home. It is often a cave or a hidden spot in rocks.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-a-q17",
    prompt: "Why does a bird build a nest?",
    options: [
      { id: "a", text: "To lay eggs and keep its babies safe" },
      { id: "b", text: "To store water for summer" },
      { id: "c", text: "To play games with friends" },
      { id: "d", text: "To hide its food from people" }
    ],
    answerId: "a",
    explanation: "A nest is a safe, soft place. Birds lay eggs there and care for their babies.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-a-q18",
    prompt: "Find the odd one out: Cow, Goat, Tiger, Deer.",
    options: [
      { id: "a", text: "Cow" },
      { id: "b", text: "Goat" },
      { id: "c", text: "Tiger" },
      { id: "d", text: "Deer" }
    ],
    answerId: "c",
    explanation: "A tiger eats other animals. Cow, goat and deer eat only plants.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-a-q19",
    prompt: "A bear eats fish, honey and berries. What kind of eater is a bear?",
    options: [
      { id: "a", text: "Herbivore" },
      { id: "b", text: "Omnivore" },
      { id: "c", text: "Carnivore" },
      { id: "d", text: "Insect" }
    ],
    answerId: "b",
    explanation: "Fish is animal food. Honey and berries come from plants and flowers. A bear eats both, so it is an omnivore.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-a-q20",
    prompt: "Look at this food chain: Grass \u2192 Rabbit \u2192 ? Which animal fits in the gap?",
    options: [
      { id: "a", text: "Cow" },
      { id: "b", text: "Fox" },
      { id: "c", text: "Goat" },
      { id: "d", text: "Deer" }
    ],
    answerId: "b",
    explanation: "Grass is eaten by the rabbit. A fox eats rabbits. Cow, goat and deer eat plants, not rabbits.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-a-q21",
    prompt: "The tailorbird makes a special nest. How does it make it?",
    options: [
      { id: "a", text: "By digging a hole in the sand" },
      { id: "b", text: "By building it with wax" },
      { id: "c", text: "By living in a big cave" },
      { id: "d", text: "By stitching leaves together" }
    ],
    answerId: "d",
    explanation: "The tailorbird uses its sharp beak like a needle. It stitches big leaves together to make a cup-like nest.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-a-q22",
    prompt: "Which animal is NOT matched with the correct home?",
    options: [
      { id: "a", text: "Bee \u2014 hive" },
      { id: "b", text: "Horse \u2014 stable" },
      { id: "c", text: "Dog \u2014 kennel" },
      { id: "d", text: "Pig \u2014 nest" }
    ],
    answerId: "d",
    explanation: "A pig lives in a sty, not a nest. Birds live in nests.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-a-q23",
    prompt: "Which animal eats only plants AND lives in a burrow?",
    options: [
      { id: "a", text: "Snake" },
      { id: "b", text: "Fox" },
      { id: "c", text: "Lion" },
      { id: "d", text: "Rabbit" }
    ],
    answerId: "d",
    explanation: "A rabbit eats grass and carrots, so it is a herbivore. It also lives in a burrow. Snake, fox and lion eat other animals.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-a-q24",
    prompt: "Humans are omnivores. Which meal shows that we eat both plant food and animal food?",
    options: [
      { id: "a", text: "A bowl of salad" },
      { id: "b", text: "A plate of fruits" },
      { id: "c", text: "A bowl of boiled peas" },
      { id: "d", text: "Rice with egg curry" }
    ],
    answerId: "d",
    explanation: "Rice comes from a plant. Eggs come from hens. This meal has both kinds of food.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g3-sci-animals-b-q01",
    prompt: "Which animal eats grass?",
    options: [
      { id: "a", text: "Goat" },
      { id: "b", text: "Eagle" },
      { id: "c", text: "Lion" },
      { id: "d", text: "Snake" }
    ],
    answerId: "a",
    explanation: "A goat eats grass and leaves. It is a herbivore.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-b-q02",
    prompt: "What do we call animals that eat other animals?",
    options: [
      { id: "a", text: "Herbivores" },
      { id: "b", text: "Carnivores" },
      { id: "c", text: "Omnivores" },
      { id: "d", text: "Plants" }
    ],
    answerId: "b",
    explanation: "Carnivores are animal eaters. Lions, tigers and eagles are carnivores.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-b-q03",
    prompt: "What does a snake eat?",
    options: [
      { id: "a", text: "Grass" },
      { id: "b", text: "Leaves" },
      { id: "c", text: "Frogs and rats" },
      { id: "d", text: "Fruits" }
    ],
    answerId: "c",
    explanation: "A snake eats small animals like frogs, rats and eggs. It is a carnivore.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-b-q04",
    prompt: "What does a spider make to live in and catch food?",
    options: [
      { id: "a", text: "Nest" },
      { id: "b", text: "Hive" },
      { id: "c", text: "Den" },
      { id: "d", text: "Web" }
    ],
    answerId: "d",
    explanation: "A spider spins a sticky web. Insects get stuck in it, and the spider eats them.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-b-q05",
    prompt: "What does a deer eat?",
    options: [
      { id: "a", text: "Grass and leaves" },
      { id: "b", text: "Meat" },
      { id: "c", text: "Fish" },
      { id: "d", text: "Insects" }
    ],
    answerId: "a",
    explanation: "A deer eats grass and leaves. It is a plant eater.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-b-q06",
    prompt: "Farmers build a home for their cows. What is it called?",
    options: [
      { id: "a", text: "Shed" },
      { id: "b", text: "Hive" },
      { id: "c", text: "Web" },
      { id: "d", text: "Nest" }
    ],
    answerId: "a",
    explanation: "Cows live in a cowshed. It keeps them safe from rain and hot sun.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-b-q07",
    prompt: "Which of these is an omnivore?",
    options: [
      { id: "a", text: "Deer" },
      { id: "b", text: "Human" },
      { id: "c", text: "Tiger" },
      { id: "d", text: "Rabbit" }
    ],
    answerId: "b",
    explanation: "Humans eat plant food like rice and fruits. We also eat eggs, fish or milk. So we are omnivores.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-b-q08",
    prompt: "Ants build a small hill of soil with tunnels inside. What is it called?",
    options: [
      { id: "a", text: "Stable" },
      { id: "b", text: "Kennel" },
      { id: "c", text: "Anthill" },
      { id: "d", text: "Sty" }
    ],
    answerId: "c",
    explanation: "Ants live together in an anthill. It has many tiny tunnels and rooms.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-b-q09",
    prompt: "Which animal lives in a nest?",
    options: [
      { id: "a", text: "Sparrow" },
      { id: "b", text: "Lion" },
      { id: "c", text: "Pig" },
      { id: "d", text: "Horse" }
    ],
    answerId: "a",
    explanation: "A sparrow is a bird. Birds build nests to live in and lay eggs.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-b-q10",
    prompt: "What does an elephant eat?",
    options: [
      { id: "a", text: "Meat" },
      { id: "b", text: "Fish" },
      { id: "c", text: "Insects" },
      { id: "d", text: "Leaves and branches" }
    ],
    answerId: "d",
    explanation: "An elephant is a big plant eater. It eats grass, leaves, branches and fruits.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-b-q11",
    prompt: "Why do animals need homes?",
    options: [
      { id: "a", text: "To stay safe from enemies, rain and heat" },
      { id: "b", text: "To grow taller" },
      { id: "c", text: "To change their colour" },
      { id: "d", text: "To learn to talk" }
    ],
    answerId: "a",
    explanation: "A home is a safe place. It protects animals from enemies and bad weather.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-b-q12",
    prompt: "Which animal carries its home on its back?",
    options: [
      { id: "a", text: "Cow" },
      { id: "b", text: "Snail" },
      { id: "c", text: "Dog" },
      { id: "d", text: "Lion" }
    ],
    answerId: "b",
    explanation: "A snail has a hard shell on its back. It hides inside the shell when in danger.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-b-q13",
    prompt: "A parrot has a strong curved beak. How does this beak help it?",
    options: [
      { id: "a", text: "To tear meat" },
      { id: "b", text: "To catch fish" },
      { id: "c", text: "To crack nuts and eat fruits" },
      { id: "d", text: "To sip nectar" }
    ],
    answerId: "c",
    explanation: "A parrot eats nuts, seeds and fruits. Its strong curved beak cracks hard shells.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-b-q14",
    prompt: "A sunbird has a long thin beak. What does it help the sunbird do?",
    options: [
      { id: "a", text: "Crack nuts" },
      { id: "b", text: "Sip nectar from flowers" },
      { id: "c", text: "Tear meat" },
      { id: "d", text: "Dig the soil" }
    ],
    answerId: "b",
    explanation: "A long thin beak fits deep inside a flower. The sunbird sips the sweet nectar.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-b-q15",
    prompt: "Which animal has sharp pointed teeth and sharp claws to catch other animals?",
    options: [
      { id: "a", text: "Cow" },
      { id: "b", text: "Goat" },
      { id: "c", text: "Tiger" },
      { id: "d", text: "Camel" }
    ],
    answerId: "c",
    explanation: "A tiger hunts other animals. Its sharp claws grab, and its pointed teeth tear meat.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-b-q16",
    prompt: "Find the odd one out: Lion, Tiger, Eagle, Rabbit.",
    options: [
      { id: "a", text: "Lion" },
      { id: "b", text: "Tiger" },
      { id: "c", text: "Eagle" },
      { id: "d", text: "Rabbit" }
    ],
    answerId: "d",
    explanation: "A rabbit eats plants. Lion, tiger and eagle eat other animals.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-b-q17",
    prompt: "Which animal and home are matched correctly?",
    options: [
      { id: "a", text: "Bee \u2014 den" },
      { id: "b", text: "Rabbit \u2014 burrow" },
      { id: "c", text: "Horse \u2014 hive" },
      { id: "d", text: "Bird \u2014 sty" }
    ],
    answerId: "b",
    explanation: "A rabbit lives in a burrow under the ground. Bees live in hives, horses in stables and birds in nests.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-b-q18",
    prompt: "Baby birds stay in the nest for many days. Why?",
    options: [
      { id: "a", text: "They do not like the sky" },
      { id: "b", text: "They are too big to leave" },
      { id: "c", text: "The nest is very cold" },
      { id: "d", text: "They cannot fly yet and need their parents' care" }
    ],
    answerId: "d",
    explanation: "Baby birds are too small to fly. Their parents feed them and keep them safe in the nest.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-b-q19",
    prompt: "Bees store a sweet food inside their hive. What is it?",
    options: [
      { id: "a", text: "Milk" },
      { id: "b", text: "Honey" },
      { id: "c", text: "Grass" },
      { id: "d", text: "Water" }
    ],
    answerId: "b",
    explanation: "Bees make honey from flower nectar. They store it in the hive to eat later.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-b-q20",
    prompt: "The koel does not build its own nest. Where does it lay its eggs?",
    options: [
      { id: "a", text: "In a hole in the ground" },
      { id: "b", text: "In an eagle's nest" },
      { id: "c", text: "In a crow's nest" },
      { id: "d", text: "In a beehive" }
    ],
    answerId: "c",
    explanation: "The koel lays its eggs in a crow's nest. The crow then looks after the koel's eggs.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-b-q21",
    prompt: "Rahul sees bones and fur near the mouth of a rocky cave in a forest. Which animal most likely lives there?",
    options: [
      { id: "a", text: "Cow" },
      { id: "b", text: "Goat" },
      { id: "c", text: "Rabbit" },
      { id: "d", text: "Lion" }
    ],
    answerId: "d",
    explanation: "Bones and fur are leftovers from a meat meal. A lion eats meat and lives in a den, like a cave.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-b-q22",
    prompt: "A cow chews its food again and again for a long time. Which teeth help it do this?",
    options: [
      { id: "a", text: "Long pointed teeth" },
      { id: "b", text: "A hooked beak" },
      { id: "c", text: "Flat grinding teeth" },
      { id: "d", text: "It has no teeth" }
    ],
    answerId: "c",
    explanation: "A cow has flat teeth. They grind tough grass into soft bits.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-b-q23",
    prompt: "Which list shows a herbivore, then a carnivore, then an omnivore?",
    options: [
      { id: "a", text: "Goat, Lion, Crow" },
      { id: "b", text: "Lion, Goat, Crow" },
      { id: "c", text: "Crow, Goat, Lion" },
      { id: "d", text: "Goat, Crow, Lion" }
    ],
    answerId: "a",
    explanation: "A goat eats plants. A lion eats animals. A crow eats both. So the order is goat, lion, crow.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g3-sci-animals-b-q24",
    prompt: "A weaver bird hangs its nest from the tip of a thin branch. How does this help?",
    options: [
      { id: "a", text: "The nest gets more rain" },
      { id: "b", text: "The bird can find food inside the nest" },
      { id: "c", text: "The nest is easy for snakes to reach" },
      { id: "d", text: "Snakes and other enemies find it hard to reach the eggs" }
    ],
    answerId: "d",
    explanation: "A thin branch cannot hold heavy enemies. So the eggs and babies stay safe.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83d\udc3e",
    title: "Animals, food and homes",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "plant",
    speak: "Animals need food and a safe home. Some eat plants, some eat other animals, some eat both.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "plant",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Herbivores", reveal: "Eat plants", emoji: "\ud83c\udf3f" },
      { label: "Carnivores", reveal: "Eat other animals", emoji: "\ud83e\udd81" },
      { label: "Omnivores", reveal: "Eat both", emoji: "\ud83d\udc3b" },
      { label: "Homes", reveal: "Nests, burrows, dens, hives", emoji: "\ud83c\udfe0" }
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
    bullets: ["Food groups", "Homes keep animals safe", "Match animal to diet", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g3ScienceAnimals: ChapterDef = {
  id: "animals-food-homes",
  title: "Animals: Food & Homes",
  emoji: "\ud83d\udc3e",
  blurb: "What animals eat and where they live",
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

export const g3ScienceAnimalsQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
