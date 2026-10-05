import type { ChapterDef, PrepQuestion } from "../types";

/** Detective Eyes — authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g5-eng-ch01-a-q01",
    prompt: "On the morning of Pongal, Kavya woke early and found the rangoli outside her door smudged at one corner. Tiny prints, shaped like little stars, ran across the white rice-flour pattern and disappeared under the neem tree. Kavya frowned, then smiled. Last night she had left a bowl of milk near the gate for the thin grey kitten that visited every evening. Now the bowl was empty and licked clean. She looked up. On the lowest branch of the neem tree sat the kitten, its paws dusted white. \"So you are my artist,\" Kavya laughed. Instead of feeling cross, she fetched more rice flour and drew a small kitten in the corner of her design.\n\nRead Passage P1. What is the passage mostly about?",
    options: [
      { id: "a", text: "Kavya finds out who smudged her rangoli and responds kindly." },
      { id: "b", text: "How to make a rangoli with rice flour." },
      { id: "c", text: "A kitten that gets lost in a neem tree." },
      { id: "d", text: "What Kavya eats for breakfast on Pongal." }
    ],
    answerId: "a",
    explanation: "The main idea covers the whole passage. Every part of P1 is about the smudged rangoli, the clues, and how Kavya reacts.",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-a-q02",
    prompt: "On the morning of Pongal, Kavya woke early and found the rangoli outside her door smudged at one corner. Tiny prints, shaped like little stars, ran across the white rice-flour pattern and disappeared under the neem tree. Kavya frowned, then smiled. Last night she had left a bowl of milk near the gate for the thin grey kitten that visited every evening. Now the bowl was empty and licked clean. She looked up. On the lowest branch of the neem tree sat the kitten, its paws dusted white. \"So you are my artist,\" Kavya laughed. Instead of feeling cross, she fetched more rice flour and drew a small kitten in the corner of her design.\n\nRead Passage P1. Where did the star-shaped prints disappear?",
    options: [
      { id: "a", text: "Near the gate" },
      { id: "b", text: "Under the neem tree" },
      { id: "c", text: "Inside the house" },
      { id: "d", text: "Beside the milk bowl" }
    ],
    answerId: "b",
    explanation: "For detail questions, find the exact line. P1 says the prints \"disappeared under the neem tree.\"",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-a-q03",
    prompt: "On the morning of Pongal, Kavya woke early and found the rangoli outside her door smudged at one corner. Tiny prints, shaped like little stars, ran across the white rice-flour pattern and disappeared under the neem tree. Kavya frowned, then smiled. Last night she had left a bowl of milk near the gate for the thin grey kitten that visited every evening. Now the bowl was empty and licked clean. She looked up. On the lowest branch of the neem tree sat the kitten, its paws dusted white. \"So you are my artist,\" Kavya laughed. Instead of feeling cross, she fetched more rice flour and drew a small kitten in the corner of her design.\n\nRead Passage P1. Why were the kitten's paws dusted white?",
    options: [
      { id: "a", text: "Milk had spilled on them." },
      { id: "b", text: "It had touched white paint on the gate." },
      { id: "c", text: "It had walked across the rice-flour rangoli." },
      { id: "d", text: "It was born with white paws." }
    ],
    answerId: "c",
    explanation: "Link the clues: the rangoli was made of white rice flour, and prints ran across it. The kitten's paws picked up the flour.",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-a-q04",
    prompt: "On the morning of Pongal, Kavya woke early and found the rangoli outside her door smudged at one corner. Tiny prints, shaped like little stars, ran across the white rice-flour pattern and disappeared under the neem tree. Kavya frowned, then smiled. Last night she had left a bowl of milk near the gate for the thin grey kitten that visited every evening. Now the bowl was empty and licked clean. She looked up. On the lowest branch of the neem tree sat the kitten, its paws dusted white. \"So you are my artist,\" Kavya laughed. Instead of feeling cross, she fetched more rice flour and drew a small kitten in the corner of her design.\n\nRead Passage P1. \"Kavya frowned, then smiled.\" When she frowned, Kavya was probably feeling —",
    options: [
      { id: "a", text: "sleepy" },
      { id: "b", text: "proud" },
      { id: "c", text: "excited" },
      { id: "d", text: "puzzled or a little upset" }
    ],
    answerId: "d",
    explanation: "A frown is the face we make when something seems wrong or confusing. She had just seen her rangoli smudged.",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-a-q05",
    prompt: "On the morning of Pongal, Kavya woke early and found the rangoli outside her door smudged at one corner. Tiny prints, shaped like little stars, ran across the white rice-flour pattern and disappeared under the neem tree. Kavya frowned, then smiled. Last night she had left a bowl of milk near the gate for the thin grey kitten that visited every evening. Now the bowl was empty and licked clean. She looked up. On the lowest branch of the neem tree sat the kitten, its paws dusted white. \"So you are my artist,\" Kavya laughed. Instead of feeling cross, she fetched more rice flour and drew a small kitten in the corner of her design.\n\nRead Passage P1. Which words best describe Kavya?",
    options: [
      { id: "a", text: "Forgiving and creative" },
      { id: "b", text: "Careless and lazy" },
      { id: "c", text: "Afraid of animals" },
      { id: "d", text: "Quick to give up" }
    ],
    answerId: "a",
    explanation: "Actions show character. She laughed instead of getting cross (forgiving) and added a kitten to her design (creative).",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-a-q06",
    prompt: "Rohan was tying his shoelaces for cricket practice when Dadi called from the balcony. \"Take your umbrella, beta.\" Rohan glanced at the sky. The sun was still peeping out, though a heavy blanket of grey was creeping in from the east. \"It won't rain, Dadi,\" he said. Dadi simply pointed at the steps. A long line of ants was marching up the wall, carrying tiny white eggs. The sparrows had gone quiet, and the air smelled of wet earth even though the ground was dry. Rohan sighed and grabbed his umbrella. Twenty minutes later, as the first fat drops drummed on the ground, he was the only player on the field who stayed dry. He grinned and decided to listen to Dadi more often.\n\nRead Passage P2. What was Rohan getting ready for?",
    options: [
      { id: "a", text: "Cricket practice" },
      { id: "b", text: "A trip to the market" },
      { id: "c", text: "School" },
      { id: "d", text: "A music class" }
    ],
    answerId: "a",
    explanation: "The first sentence tells us. He was \"tying his shoelaces for cricket practice.\"",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-a-q07",
    prompt: "Rohan was tying his shoelaces for cricket practice when Dadi called from the balcony. \"Take your umbrella, beta.\" Rohan glanced at the sky. The sun was still peeping out, though a heavy blanket of grey was creeping in from the east. \"It won't rain, Dadi,\" he said. Dadi simply pointed at the steps. A long line of ants was marching up the wall, carrying tiny white eggs. The sparrows had gone quiet, and the air smelled of wet earth even though the ground was dry. Rohan sighed and grabbed his umbrella. Twenty minutes later, as the first fat drops drummed on the ground, he was the only player on the field who stayed dry. He grinned and decided to listen to Dadi more often.\n\nRead Passage P2. Which of these was NOT a clue that rain was coming?",
    options: [
      { id: "a", text: "Ants carrying eggs up the wall" },
      { id: "b", text: "The sparrows going quiet" },
      { id: "c", text: "The smell of wet earth" },
      { id: "d", text: "The sun still peeping out" }
    ],
    answerId: "d",
    explanation: "Watch for NOT in a question. Sunshine is why Rohan thought it would stay dry, so it is not a rain clue.",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-a-q08",
    prompt: "Rohan was tying his shoelaces for cricket practice when Dadi called from the balcony. \"Take your umbrella, beta.\" Rohan glanced at the sky. The sun was still peeping out, though a heavy blanket of grey was creeping in from the east. \"It won't rain, Dadi,\" he said. Dadi simply pointed at the steps. A long line of ants was marching up the wall, carrying tiny white eggs. The sparrows had gone quiet, and the air smelled of wet earth even though the ground was dry. Rohan sighed and grabbed his umbrella. Twenty minutes later, as the first fat drops drummed on the ground, he was the only player on the field who stayed dry. He grinned and decided to listen to Dadi more often.\n\nRead Passage P2. \"A heavy blanket of grey was creeping in from the east.\" Here, \"a heavy blanket of grey\" means —",
    options: [
      { id: "a", text: "a woollen blanket on a clothesline" },
      { id: "b", text: "a thick layer of dark clouds" },
      { id: "c", text: "smoke from a kitchen" },
      { id: "d", text: "the shadow of a tall building" }
    ],
    answerId: "b",
    explanation: "The writer is describing the sky. The clouds cover it the way a thick blanket covers a bed.",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-a-q09",
    prompt: "Rohan was tying his shoelaces for cricket practice when Dadi called from the balcony. \"Take your umbrella, beta.\" Rohan glanced at the sky. The sun was still peeping out, though a heavy blanket of grey was creeping in from the east. \"It won't rain, Dadi,\" he said. Dadi simply pointed at the steps. A long line of ants was marching up the wall, carrying tiny white eggs. The sparrows had gone quiet, and the air smelled of wet earth even though the ground was dry. Rohan sighed and grabbed his umbrella. Twenty minutes later, as the first fat drops drummed on the ground, he was the only player on the field who stayed dry. He grinned and decided to listen to Dadi more often.\n\nRead Passage P2. Which sentence best states the lesson of the story?",
    options: [
      { id: "a", text: "Cricket should never be played in the monsoon." },
      { id: "b", text: "Noticing nature carefully and listening to experienced elders can help us." },
      { id: "c", text: "Umbrellas are too heavy to carry to practice." },
      { id: "d", text: "Ants are afraid of the rain." }
    ],
    answerId: "b",
    explanation: "A lesson fits the whole story. Dadi read nature's clues, Rohan listened, and it helped him.",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-a-q10",
    prompt: "Class 5B had a problem: the books in their classroom cupboard were gathering dust, and nobody could find anything. So Ms. Fernandes suggested a project. First, the students sorted the books into three piles: stories, science and poems. Next, Imran and Priya made colourful labels for each shelf. Then the whole class voted on a name for their new corner. \"The Cosy Nook\" won by six votes. Finally, Tenzin designed a borrowing card so that every book could be tracked. Within a month, the once-forgotten books were hardly ever on the shelves. They were always out with readers. Ms. Fernandes was delighted. \"An empty shelf,\" she said, \"is the best compliment a library can get.\"\n\nRead Passage P3. What did the students do FIRST?",
    options: [
      { id: "a", text: "Made labels for the shelves" },
      { id: "b", text: "Voted on a name" },
      { id: "c", text: "Sorted the books into three piles" },
      { id: "d", text: "Designed a borrowing card" }
    ],
    answerId: "c",
    explanation: "Order words like First, Next, Then and Finally show the sequence. \"First\" comes before sorting the books.",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-a-q11",
    prompt: "Class 5B had a problem: the books in their classroom cupboard were gathering dust, and nobody could find anything. So Ms. Fernandes suggested a project. First, the students sorted the books into three piles: stories, science and poems. Next, Imran and Priya made colourful labels for each shelf. Then the whole class voted on a name for their new corner. \"The Cosy Nook\" won by six votes. Finally, Tenzin designed a borrowing card so that every book could be tracked. Within a month, the once-forgotten books were hardly ever on the shelves. They were always out with readers. Ms. Fernandes was delighted. \"An empty shelf,\" she said, \"is the best compliment a library can get.\"\n\nRead Passage P3. Who designed the borrowing card?",
    options: [
      { id: "a", text: "Imran" },
      { id: "b", text: "Priya" },
      { id: "c", text: "Ms. Fernandes" },
      { id: "d", text: "Tenzin" }
    ],
    answerId: "d",
    explanation: "Scan for the key words \"borrowing card.\" The sentence says Tenzin designed it.",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-a-q12",
    prompt: "Class 5B had a problem: the books in their classroom cupboard were gathering dust, and nobody could find anything. So Ms. Fernandes suggested a project. First, the students sorted the books into three piles: stories, science and poems. Next, Imran and Priya made colourful labels for each shelf. Then the whole class voted on a name for their new corner. \"The Cosy Nook\" won by six votes. Finally, Tenzin designed a borrowing card so that every book could be tracked. Within a month, the once-forgotten books were hardly ever on the shelves. They were always out with readers. Ms. Fernandes was delighted. \"An empty shelf,\" she said, \"is the best compliment a library can get.\"\n\nRead Passage P3. Ms. Fernandes says, \"An empty shelf is the best compliment a library can get.\" What does she mean?",
    options: [
      { id: "a", text: "Books being out with readers shows the children love the library." },
      { id: "b", text: "The library does not have enough books." },
      { id: "c", text: "The shelves should be taken away." },
      { id: "d", text: "Students must return books more quickly." }
    ],
    answerId: "a",
    explanation: "The shelves are empty because every book is being borrowed and read. To her, that is the highest praise.",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-a-q13",
    prompt: "**NOTICE — Green Thumbs Club**\nSunflower Public School  |  Date: 12 July\nAll Class 4 and Class 5 students are invited to join the Green Thumbs Club. We will plant saplings in the school garden on Saturday, 19 July, from 8:00 a.m. to 10:00 a.m. Please bring a water bottle, a cap and old gloves. Seeds and tools will be provided. Give your name to your class monitor by Wednesday, 16 July.\n— Anita Rao, Club Secretary\n\nRead Notice N1. By which date must students give their names?",
    options: [
      { id: "a", text: "12 July" },
      { id: "b", text: "19 July" },
      { id: "c", text: "16 July" },
      { id: "d", text: "10 July" }
    ],
    answerId: "c",
    explanation: "A notice has several dates. 12 July is when it was written, 19 July is the event, and 16 July is the last day to give names.",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-a-q14",
    prompt: "**NOTICE — Green Thumbs Club**\nSunflower Public School  |  Date: 12 July\nAll Class 4 and Class 5 students are invited to join the Green Thumbs Club. We will plant saplings in the school garden on Saturday, 19 July, from 8:00 a.m. to 10:00 a.m. Please bring a water bottle, a cap and old gloves. Seeds and tools will be provided. Give your name to your class monitor by Wednesday, 16 July.\n— Anita Rao, Club Secretary\n\nRead Notice N1. Which item do students NOT need to bring?",
    options: [
      { id: "a", text: "A water bottle" },
      { id: "b", text: "A cap" },
      { id: "c", text: "Old gloves" },
      { id: "d", text: "Seeds" }
    ],
    answerId: "d",
    explanation: "The notice says \"Seeds and tools will be provided.\" That means the club will give them out.",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-a-q15",
    prompt: "Which word is an adverb in this sentence?\n\"The kitten climbed quickly up the neem tree.\"",
    options: [
      { id: "a", text: "kitten" },
      { id: "b", text: "climbed" },
      { id: "c", text: "quickly" },
      { id: "d", text: "tree" }
    ],
    answerId: "c",
    explanation: "An adverb tells how an action happens. \"Quickly\" tells us how the kitten climbed. Many adverbs end in -ly.",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-a-q16",
    prompt: "Choose the correct pronoun.\n\"Priya and ___ made the labels for the shelves.\"",
    options: [
      { id: "a", text: "me" },
      { id: "b", text: "I" },
      { id: "c", text: "myself" },
      { id: "d", text: "mine" }
    ],
    answerId: "b",
    explanation: "Try removing \"Priya and.\" You would say \"I made the labels,\" not \"me made.\" So the subject pronoun \"I\" is correct.",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-a-q17",
    prompt: "Fill in the blanks with the correct articles.\n\"She is ___ honest girl who always tells ___ truth.\"",
    options: [
      { id: "a", text: "a, a" },
      { id: "b", text: "an, the" },
      { id: "c", text: "an, a" },
      { id: "d", text: "the, an" }
    ],
    answerId: "b",
    explanation: "\"Honest\" begins with a vowel sound because the h is silent, so it takes \"an.\" We always say \"the truth.\"",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-a-q18",
    prompt: "Choose the correct verb form.\n\"Look! The children ___ kites on the terrace.\"",
    options: [
      { id: "a", text: "fly" },
      { id: "b", text: "flew" },
      { id: "c", text: "are flying" },
      { id: "d", text: "has flown" }
    ],
    answerId: "c",
    explanation: "\"Look!\" tells us it is happening right now. Use the present continuous (am/is/are + -ing).",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-a-q19",
    prompt: "Choose the correct preposition.\n\"The puppy hid ___ the bed until the thunder stopped.\"",
    options: [
      { id: "a", text: "under" },
      { id: "b", text: "at" },
      { id: "c", text: "of" },
      { id: "d", text: "since" }
    ],
    answerId: "a",
    explanation: "\"Under\" shows position below something. A frightened puppy hides below the bed.",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-a-q20",
    prompt: "Choose the correct conjunction.\n\"Rohan wanted to keep playing, ___ it started to pour.\"",
    options: [
      { id: "a", text: "because" },
      { id: "b", text: "but" },
      { id: "c", text: "so" },
      { id: "d", text: "or" }
    ],
    answerId: "b",
    explanation: "\"But\" joins two ideas that go against each other. He wanted to play, but the rain stopped him.",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-a-q21",
    prompt: "Which word correctly means \"not happy\"?",
    options: [
      { id: "a", text: "dishappy" },
      { id: "b", text: "inhappy" },
      { id: "c", text: "unhappy" },
      { id: "d", text: "nonhappy" }
    ],
    answerId: "c",
    explanation: "The prefix \"un-\" means \"not.\" It is the one used with \"happy,\" as in unkind and unable.",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-a-q22",
    prompt: "Your classmate's pencil box falls and everything spills on the floor. What is the kindest thing to say?",
    options: [
      { id: "a", text: "\"Pick it up yourself.\"" },
      { id: "b", text: "\"Why did you do that?\"" },
      { id: "c", text: "\"That is not my problem.\"" },
      { id: "d", text: "\"Let me help you pick these up.\"" }
    ],
    answerId: "d",
    explanation: "A kind reply offers help and does not blame. Offering to help makes your friend feel supported.",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-a-q23",
    prompt: "Rearrange the parts to make a correct sentence.\nP: every Monday  Q: visits  R: My grandmother  S: the old library",
    options: [
      { id: "a", text: "P R Q S" },
      { id: "b", text: "S Q R P" },
      { id: "c", text: "Q R P S" },
      { id: "d", text: "R Q S P" }
    ],
    answerId: "d",
    explanation: "English sentences usually follow who + action + what + when. \"My grandmother visits the old library every Monday.\"",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-a-q24",
    prompt: "\"We watch the birds from the watch tower.\"\nHow is the word \"watch\" used each time?",
    options: [
      { id: "a", text: "The first \"watch\" is a verb and the second describes the tower." },
      { id: "b", text: "Both are verbs." },
      { id: "c", text: "The first \"watch\" is a noun and the second is a verb." },
      { id: "d", text: "Both are adverbs." }
    ],
    answerId: "a",
    explanation: "A word's job depends on where it sits. \"We watch\" is an action (verb). \"Watch tower\" names a kind of tower.",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g5-eng-ch01-b-q01",
    prompt: "On the morning of Pongal, Kavya woke early and found the rangoli outside her door smudged at one corner. Tiny prints, shaped like little stars, ran across the white rice-flour pattern and disappeared under the neem tree. Kavya frowned, then smiled. Last night she had left a bowl of milk near the gate for the thin grey kitten that visited every evening. Now the bowl was empty and licked clean. She looked up. On the lowest branch of the neem tree sat the kitten, its paws dusted white. \"So you are my artist,\" Kavya laughed. Instead of feeling cross, she fetched more rice flour and drew a small kitten in the corner of her design.\n\nRead Passage P1. What had Kavya left near the gate the night before?",
    options: [
      { id: "a", text: "Some rice flour" },
      { id: "b", text: "A bowl of milk" },
      { id: "c", text: "A clay lamp" },
      { id: "d", text: "A ball of wool" }
    ],
    answerId: "b",
    explanation: "The passage says she \"had left a bowl of milk near the gate\" for the visiting kitten.",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-b-q02",
    prompt: "On the morning of Pongal, Kavya woke early and found the rangoli outside her door smudged at one corner. Tiny prints, shaped like little stars, ran across the white rice-flour pattern and disappeared under the neem tree. Kavya frowned, then smiled. Last night she had left a bowl of milk near the gate for the thin grey kitten that visited every evening. Now the bowl was empty and licked clean. She looked up. On the lowest branch of the neem tree sat the kitten, its paws dusted white. \"So you are my artist,\" Kavya laughed. Instead of feeling cross, she fetched more rice flour and drew a small kitten in the corner of her design.\n\nRead Passage P1. Which of these happened LAST?",
    options: [
      { id: "a", text: "Kavya saw that her rangoli was smudged." },
      { id: "b", text: "Kavya noticed the bowl was empty." },
      { id: "c", text: "Kavya spotted the kitten on the branch." },
      { id: "d", text: "Kavya drew a small kitten in her design." }
    ],
    answerId: "d",
    explanation: "Retell the story in order. Drawing the kitten is the final action in the passage.",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-b-q03",
    prompt: "On the morning of Pongal, Kavya woke early and found the rangoli outside her door smudged at one corner. Tiny prints, shaped like little stars, ran across the white rice-flour pattern and disappeared under the neem tree. Kavya frowned, then smiled. Last night she had left a bowl of milk near the gate for the thin grey kitten that visited every evening. Now the bowl was empty and licked clean. She looked up. On the lowest branch of the neem tree sat the kitten, its paws dusted white. \"So you are my artist,\" Kavya laughed. Instead of feeling cross, she fetched more rice flour and drew a small kitten in the corner of her design.\n\nRead Passage P1. Why does Kavya call the kitten \"my artist\"?",
    options: [
      { id: "a", text: "The kitten had painted a picture on the wall." },
      { id: "b", text: "The kitten's paw prints had added a new pattern to the rangoli." },
      { id: "c", text: "The kitten was very colourful." },
      { id: "d", text: "The kitten liked to watch her draw." }
    ],
    answerId: "b",
    explanation: "Kavya is joking. The star-shaped prints were like the kitten's own \"art\" on her rangoli.",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-b-q04",
    prompt: "On the morning of Pongal, Kavya woke early and found the rangoli outside her door smudged at one corner. Tiny prints, shaped like little stars, ran across the white rice-flour pattern and disappeared under the neem tree. Kavya frowned, then smiled. Last night she had left a bowl of milk near the gate for the thin grey kitten that visited every evening. Now the bowl was empty and licked clean. She looked up. On the lowest branch of the neem tree sat the kitten, its paws dusted white. \"So you are my artist,\" Kavya laughed. Instead of feeling cross, she fetched more rice flour and drew a small kitten in the corner of her design.\n\nRead Passage P1. \"...the thin grey kitten that visited every evening.\" Which phrase is closest in meaning to \"visited\"?",
    options: [
      { id: "a", text: "came to see" },
      { id: "b", text: "ran away from" },
      { id: "c", text: "slept in" },
      { id: "d", text: "hid from" }
    ],
    answerId: "a",
    explanation: "To visit is to come and spend time somewhere. The kitten came to Kavya's house each evening.",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-b-q05",
    prompt: "Rohan was tying his shoelaces for cricket practice when Dadi called from the balcony. \"Take your umbrella, beta.\" Rohan glanced at the sky. The sun was still peeping out, though a heavy blanket of grey was creeping in from the east. \"It won't rain, Dadi,\" he said. Dadi simply pointed at the steps. A long line of ants was marching up the wall, carrying tiny white eggs. The sparrows had gone quiet, and the air smelled of wet earth even though the ground was dry. Rohan sighed and grabbed his umbrella. Twenty minutes later, as the first fat drops drummed on the ground, he was the only player on the field who stayed dry. He grinned and decided to listen to Dadi more often.\n\nRead Passage P2. Which title would suit the passage best?",
    options: [
      { id: "a", text: "Rohan Wins the Cup" },
      { id: "b", text: "The Lost Cricket Ball" },
      { id: "c", text: "The Sparrows' New Nest" },
      { id: "d", text: "Dadi Was Right" }
    ],
    answerId: "d",
    explanation: "A good title matches the main idea. The story is about Dadi's warning coming true.",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-b-q06",
    prompt: "Rohan was tying his shoelaces for cricket practice when Dadi called from the balcony. \"Take your umbrella, beta.\" Rohan glanced at the sky. The sun was still peeping out, though a heavy blanket of grey was creeping in from the east. \"It won't rain, Dadi,\" he said. Dadi simply pointed at the steps. A long line of ants was marching up the wall, carrying tiny white eggs. The sparrows had gone quiet, and the air smelled of wet earth even though the ground was dry. Rohan sighed and grabbed his umbrella. Twenty minutes later, as the first fat drops drummed on the ground, he was the only player on the field who stayed dry. He grinned and decided to listen to Dadi more often.\n\nRead Passage P2. From which direction were the grey clouds coming?",
    options: [
      { id: "a", text: "West" },
      { id: "b", text: "North" },
      { id: "c", text: "East" },
      { id: "d", text: "South" }
    ],
    answerId: "c",
    explanation: "Look for the direction word in the sky description. The clouds were \"creeping in from the east.\"",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-b-q07",
    prompt: "Rohan was tying his shoelaces for cricket practice when Dadi called from the balcony. \"Take your umbrella, beta.\" Rohan glanced at the sky. The sun was still peeping out, though a heavy blanket of grey was creeping in from the east. \"It won't rain, Dadi,\" he said. Dadi simply pointed at the steps. A long line of ants was marching up the wall, carrying tiny white eggs. The sparrows had gone quiet, and the air smelled of wet earth even though the ground was dry. Rohan sighed and grabbed his umbrella. Twenty minutes later, as the first fat drops drummed on the ground, he was the only player on the field who stayed dry. He grinned and decided to listen to Dadi more often.\n\nRead Passage P2. \"The first fat drops drummed on the ground.\" The word \"drummed\" suggests that the raindrops —",
    options: [
      { id: "a", text: "fell without any sound" },
      { id: "b", text: "made a steady beating sound" },
      { id: "c", text: "were brightly coloured" },
      { id: "d", text: "were part of a band" }
    ],
    answerId: "b",
    explanation: "The writer compares the sound of rain to a drum. \"Drummed\" means the drops beat steadily on the ground.",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-b-q08",
    prompt: "Rohan was tying his shoelaces for cricket practice when Dadi called from the balcony. \"Take your umbrella, beta.\" Rohan glanced at the sky. The sun was still peeping out, though a heavy blanket of grey was creeping in from the east. \"It won't rain, Dadi,\" he said. Dadi simply pointed at the steps. A long line of ants was marching up the wall, carrying tiny white eggs. The sparrows had gone quiet, and the air smelled of wet earth even though the ground was dry. Rohan sighed and grabbed his umbrella. Twenty minutes later, as the first fat drops drummed on the ground, he was the only player on the field who stayed dry. He grinned and decided to listen to Dadi more often.\n\nRead Passage P2. Why was Rohan \"the only player on the field who stayed dry\"?",
    options: [
      { id: "a", text: "The other players had not brought umbrellas." },
      { id: "b", text: "He stood under a tree the whole time." },
      { id: "c", text: "He left the field before the rain began." },
      { id: "d", text: "He was not playing that day." }
    ],
    answerId: "a",
    explanation: "Rohan stayed dry because of his umbrella. If he was the only dry one, the others must not have had umbrellas.",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-b-q09",
    prompt: "Rohan was tying his shoelaces for cricket practice when Dadi called from the balcony. \"Take your umbrella, beta.\" Rohan glanced at the sky. The sun was still peeping out, though a heavy blanket of grey was creeping in from the east. \"It won't rain, Dadi,\" he said. Dadi simply pointed at the steps. A long line of ants was marching up the wall, carrying tiny white eggs. The sparrows had gone quiet, and the air smelled of wet earth even though the ground was dry. Rohan sighed and grabbed his umbrella. Twenty minutes later, as the first fat drops drummed on the ground, he was the only player on the field who stayed dry. He grinned and decided to listen to Dadi more often.\n\nRead Passage P2. How did Rohan most likely feel at the end?",
    options: [
      { id: "a", text: "Bored" },
      { id: "b", text: "Angry with Dadi" },
      { id: "c", text: "Grateful and pleased" },
      { id: "d", text: "Frightened" }
    ],
    answerId: "c",
    explanation: "The clue \"he grinned\" shows he was happy. Deciding to listen to Dadi more shows he was grateful.",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-b-q10",
    prompt: "Class 5B had a problem: the books in their classroom cupboard were gathering dust, and nobody could find anything. So Ms. Fernandes suggested a project. First, the students sorted the books into three piles: stories, science and poems. Next, Imran and Priya made colourful labels for each shelf. Then the whole class voted on a name for their new corner. \"The Cosy Nook\" won by six votes. Finally, Tenzin designed a borrowing card so that every book could be tracked. Within a month, the once-forgotten books were hardly ever on the shelves. They were always out with readers. Ms. Fernandes was delighted. \"An empty shelf,\" she said, \"is the best compliment a library can get.\"\n\nRead Passage P3. What is the passage mainly about?",
    options: [
      { id: "a", text: "How Class 5B turned a dusty cupboard into a popular reading corner" },
      { id: "b", text: "How to write science poems" },
      { id: "c", text: "Ms. Fernandes's favourite books" },
      { id: "d", text: "An election for class monitor" }
    ],
    answerId: "a",
    explanation: "The main idea runs from beginning to end: a problem (dusty books), the steps taken, and a happy result.",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-b-q11",
    prompt: "Class 5B had a problem: the books in their classroom cupboard were gathering dust, and nobody could find anything. So Ms. Fernandes suggested a project. First, the students sorted the books into three piles: stories, science and poems. Next, Imran and Priya made colourful labels for each shelf. Then the whole class voted on a name for their new corner. \"The Cosy Nook\" won by six votes. Finally, Tenzin designed a borrowing card so that every book could be tracked. Within a month, the once-forgotten books were hardly ever on the shelves. They were always out with readers. Ms. Fernandes was delighted. \"An empty shelf,\" she said, \"is the best compliment a library can get.\"\n\nRead Passage P3. Into how many piles did the students sort the books?",
    options: [
      { id: "a", text: "Two" },
      { id: "b", text: "Four" },
      { id: "c", text: "Five" },
      { id: "d", text: "Three" }
    ],
    answerId: "d",
    explanation: "The passage names three piles: stories, science and poems. Counting the list helps confirm it.",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-b-q12",
    prompt: "Class 5B had a problem: the books in their classroom cupboard were gathering dust, and nobody could find anything. So Ms. Fernandes suggested a project. First, the students sorted the books into three piles: stories, science and poems. Next, Imran and Priya made colourful labels for each shelf. Then the whole class voted on a name for their new corner. \"The Cosy Nook\" won by six votes. Finally, Tenzin designed a borrowing card so that every book could be tracked. Within a month, the once-forgotten books were hardly ever on the shelves. They were always out with readers. Ms. Fernandes was delighted. \"An empty shelf,\" she said, \"is the best compliment a library can get.\"\n\nRead Passage P3. What does \"once-forgotten books\" mean?",
    options: [
      { id: "a", text: "Brand-new books" },
      { id: "b", text: "Books with torn pages" },
      { id: "c", text: "Books that had been ignored earlier" },
      { id: "d", text: "Books that were lost forever" }
    ],
    answerId: "c",
    explanation: "\"Once\" here means \"at an earlier time.\" Before the project, the books sat unused and gathering dust.",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-b-q13",
    prompt: "Class 5B had a problem: the books in their classroom cupboard were gathering dust, and nobody could find anything. So Ms. Fernandes suggested a project. First, the students sorted the books into three piles: stories, science and poems. Next, Imran and Priya made colourful labels for each shelf. Then the whole class voted on a name for their new corner. \"The Cosy Nook\" won by six votes. Finally, Tenzin designed a borrowing card so that every book could be tracked. Within a month, the once-forgotten books were hardly ever on the shelves. They were always out with readers. Ms. Fernandes was delighted. \"An empty shelf,\" she said, \"is the best compliment a library can get.\"\n\nRead Passage P3. What happened right AFTER Imran and Priya made the labels?",
    options: [
      { id: "a", text: "The books were sorted." },
      { id: "b", text: "The class voted on a name." },
      { id: "c", text: "Tenzin designed a borrowing card." },
      { id: "d", text: "Ms. Fernandes suggested the project." }
    ],
    answerId: "b",
    explanation: "Labels came \"Next,\" and \"Then\" the class voted. Order words act like steps on a ladder.",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-b-q14",
    prompt: "**NOTICE — Green Thumbs Club**\nSunflower Public School  |  Date: 12 July\nAll Class 4 and Class 5 students are invited to join the Green Thumbs Club. We will plant saplings in the school garden on Saturday, 19 July, from 8:00 a.m. to 10:00 a.m. Please bring a water bottle, a cap and old gloves. Seeds and tools will be provided. Give your name to your class monitor by Wednesday, 16 July.\n— Anita Rao, Club Secretary\n\nRead Notice N1. What is the main purpose of the notice?",
    options: [
      { id: "a", text: "To invite students to join a planting activity" },
      { id: "b", text: "To announce a school holiday" },
      { id: "c", text: "To sell seeds and tools" },
      { id: "d", text: "To report a lost cap" }
    ],
    answerId: "a",
    explanation: "A notice's purpose is usually in its first lines. Students are \"invited to join\" and plant saplings.",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-b-q15",
    prompt: "**NOTICE — Green Thumbs Club**\nSunflower Public School  |  Date: 12 July\nAll Class 4 and Class 5 students are invited to join the Green Thumbs Club. We will plant saplings in the school garden on Saturday, 19 July, from 8:00 a.m. to 10:00 a.m. Please bring a water bottle, a cap and old gloves. Seeds and tools will be provided. Give your name to your class monitor by Wednesday, 16 July.\n— Anita Rao, Club Secretary\n\nRead Notice N1. Who wrote the notice?",
    options: [
      { id: "a", text: "The class monitor" },
      { id: "b", text: "The principal" },
      { id: "c", text: "Anita Rao" },
      { id: "d", text: "Ms. Fernandes" }
    ],
    answerId: "c",
    explanation: "The writer's name and role usually appear at the end of a notice. Here it is Anita Rao, Club Secretary.",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-b-q16",
    prompt: "**NOTICE — Green Thumbs Club**\nSunflower Public School  |  Date: 12 July\nAll Class 4 and Class 5 students are invited to join the Green Thumbs Club. We will plant saplings in the school garden on Saturday, 19 July, from 8:00 a.m. to 10:00 a.m. Please bring a water bottle, a cap and old gloves. Seeds and tools will be provided. Give your name to your class monitor by Wednesday, 16 July.\n— Anita Rao, Club Secretary\n\nRead Notice N1. Riya is in Class 3. According to the notice, can she join the club?",
    options: [
      { id: "a", text: "Yes, because everyone is invited." },
      { id: "b", text: "No, because it is for Class 4 and Class 5 students." },
      { id: "c", text: "Yes, if she brings old gloves." },
      { id: "d", text: "No, because the club is only for teachers." }
    ],
    answerId: "b",
    explanation: "Check who the notice is for. It invites only Class 4 and Class 5 students, and bringing gloves does not change that.",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-b-q17",
    prompt: "Which words are adjectives in this sentence?\n\"The tiny sparrow built a neat nest.\"",
    options: [
      { id: "a", text: "tiny, neat" },
      { id: "b", text: "sparrow, nest" },
      { id: "c", text: "built, nest" },
      { id: "d", text: "sparrow, built" }
    ],
    answerId: "a",
    explanation: "Adjectives describe nouns. \"Tiny\" describes the sparrow and \"neat\" describes the nest.",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-b-q18",
    prompt: "Choose the correct verb form.\n\"Yesterday, our class ___ a play about the monsoon.\"",
    options: [
      { id: "a", text: "watch" },
      { id: "b", text: "watches" },
      { id: "c", text: "watched" },
      { id: "d", text: "watching" }
    ],
    answerId: "c",
    explanation: "\"Yesterday\" signals the past, so we need the simple past tense: watched.",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-b-q19",
    prompt: "Choose the correct preposition.\n\"Diwali usually comes ___ October or November.\"",
    options: [
      { id: "a", text: "at" },
      { id: "b", text: "on" },
      { id: "c", text: "in" },
      { id: "d", text: "to" }
    ],
    answerId: "c",
    explanation: "Use \"in\" for months and years, \"on\" for days and dates, and \"at\" for clock times.",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-b-q20",
    prompt: "Choose the correct conjunction.\n\"Take your umbrella, ___ you will get wet.\"",
    options: [
      { id: "a", text: "or" },
      { id: "b", text: "and" },
      { id: "c", text: "because" },
      { id: "d", text: "but" }
    ],
    answerId: "a",
    explanation: "Here \"or\" means \"if you don't.\" It shows what will happen if you don't follow the advice.",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-b-q21",
    prompt: "Which is the noun form of the adjective \"kind\"?",
    options: [
      { id: "a", text: "kindly" },
      { id: "b", text: "kinder" },
      { id: "c", text: "unkind" },
      { id: "d", text: "kindness" }
    ],
    answerId: "d",
    explanation: "The suffix \"-ness\" turns an adjective into a noun, as in kind to kindness and happy to happiness.",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-b-q22",
    prompt: "Choose the word that is OPPOSITE in meaning to \"ancient.\"",
    options: [
      { id: "a", text: "old" },
      { id: "b", text: "huge" },
      { id: "c", text: "broken" },
      { id: "d", text: "modern" }
    ],
    answerId: "d",
    explanation: "\"Ancient\" means very old, from long ago. Its opposite is \"modern,\" meaning of the present time. \"Old\" is a synonym.",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-b-q23",
    prompt: "You want to borrow a book from The Cosy Nook. Which is the most polite way to ask your teacher?",
    options: [
      { id: "a", text: "\"Give me that book now.\"" },
      { id: "b", text: "\"I am taking this book.\"" },
      { id: "c", text: "\"Book, quickly!\"" },
      { id: "d", text: "\"May I borrow this book, please?\"" }
    ],
    answerId: "d",
    explanation: "\"May I\" asks for permission, and \"please\" adds politeness. Together they make a respectful request.",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  },
  {
    id: "g5-eng-ch01-b-q24",
    prompt: "Which sentence is punctuated correctly?",
    options: [
      { id: "a", text: "\"where is my bag\" asked Meena." },
      { id: "b", text: "\"Where is my bag?\" asked Meena." },
      { id: "c", text: "\"Where is my bag.\" asked Meena?" },
      { id: "d", text: "Where is my bag? \"asked Meena.\"" }
    ],
    answerId: "b",
    explanation: "Quotation marks go around the exact spoken words. A question starts with a capital letter, and its question mark stays inside the quotation marks.",
    hints: ["Look, Link, Decide — find clues in the passage.","Eliminate answers the text does not support."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "🕵️",
    title: "Hello, detective!",
    body: [
      "Today you read stories the way a detective looks at a puzzle.",
      "Writers leave clues — you Look, Link, Decide.",
      "Optional lesson; sets unlock either way.",
    ],
    cta: "Hunt clues!",
    visual: "sentence",
    speak: "Hello, detective! Today, you will read stories the way a detective looks at a puzzle.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Look · Link · Decide",
    lead: "Tap each detective move.",
    visual: "sentence",
    speak: "Look for clues. Link them to real life. Decide what fits, then check the story.",
    cards: [
      { label: "Look", reveal: "Clues: what characters do, say, see, and feel", emoji: "👀" },
      { label: "Link", reveal: "Connect clues to real-life knowledge", emoji: "🔗" },
      { label: "Decide", reveal: "Pick what fits — then check the story again", emoji: "✅" },
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: "Clues without the word rain",
    visual: "sentence",
    speak: "Muddy shoes, dripping hair, a soggy notebook. She got caught in the rain. Soggy means very wet.",
    steps: [
      "Muddy shoes + dripping hair + soggy notebook",
      "Link: rain makes things muddy and wet",
      "Decide: Asha got caught in the rain",
      "Bonus: soggy = very wet from context",
    ],
    punchline: "The story never said rain — you found it.",
  },
  {
    id: "t1",
    type: "try",
    title: "Your turn",
    prompt: "Leela watered the plants because the soil felt dry. Why did she water them?",
    options: [
      { id: "a", text: "The soil felt dry" },
      { id: "b", text: "It was raining" },
      { id: "c", text: "She was bored" },
      { id: "d", text: "The plants were fake" },
    ],
    answerId: "a",
    why: "The passage says because the soil felt dry — evidence beats guesses.",
    visual: "sentence",
    speak: "Why did Leela water the plants?",
  },
  {
    id: "c1",
    type: "check",
    title: "Quick check",
    visual: "sentence",
    speak: "Which habit makes you a better reading detective?",
    question: {
      id: "eng-check",
      prompt: "Best detective habit?",
      options: [
        { id: "a", text: "Guess without reading" },
        { id: "b", text: "Hunt for at least two clues before choosing" },
        { id: "c", text: "Skip the passage" },
        { id: "d", text: "Only read the options" },
      ],
      answerId: "b",
      explanation: "Two clues beat one guess. The answer hides in the passage.",
      hints: ["Evidence first.", "Look, Link, Decide."],
    },
  },
  {
    id: "w",
    type: "wrap",
    emoji: "🔎",
    title: "Wonderful work, detective!",
    bullets: [
      "Look · Link · Decide",
      "Vocab from context",
      "Grammar and expression in the sets",
      "Set A and Set B — 24 questions each",
    ],
    cta: "Back to chapter",
    speak: "Wonderful work, detective! The more closely you read, the more every story will tell you.",
  },
];

export const g5EnglishDetective: ChapterDef = {
  id: "detective-eyes",
  title: "Detective Eyes",
  emoji: "🕵️",
  blurb: "Clues, inference & grammar",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "comprehension",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "comprehension",
      questions: SET_B,
    },
  ],
  paperTopics: ["comprehension", "grammar", "vocabulary"],
};

export const g5EnglishDetectiveQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
