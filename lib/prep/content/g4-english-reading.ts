import type { ChapterDef, PrepQuestion } from "../types";

/** Story Spotters - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g4-eng-ch01-a-q01",
    prompt: "Chintu the goat lived on Raju's farm. One morning, Raju's red slipper was missing. He looked under the bed. He looked behind the door. It was not there. Then his little sister Gauri laughed and pointed outside. Chintu was standing near the haystack. Something red was hanging from his mouth! Raju ran after him. Chintu ran around the well, past the hens and into the shed. At last, he dropped the slipper and bleated. The slipper was wet and chewed. Raju sighed, but he could not stop smiling. \"Next time, I will keep my slippers on the shelf,\" he said.\n\nRead Passage P1. What is the story mostly about?",
    options: [
      { id: "a", text: "Chintu takes Raju's slipper, and Raju gets it back." },
      { id: "b", text: "Raju buys new slippers at the market." },
      { id: "c", text: "Gauri loses her favourite toy." },
      { id: "d", text: "The hens run away from the farm." }
    ],
    answerId: "a",
    explanation: "The main idea is what the whole story is about. Every part of P1 is about the missing slipper and Chintu.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-a-q02",
    prompt: "Chintu the goat lived on Raju's farm. One morning, Raju's red slipper was missing. He looked under the bed. He looked behind the door. It was not there. Then his little sister Gauri laughed and pointed outside. Chintu was standing near the haystack. Something red was hanging from his mouth! Raju ran after him. Chintu ran around the well, past the hens and into the shed. At last, he dropped the slipper and bleated. The slipper was wet and chewed. Raju sighed, but he could not stop smiling. \"Next time, I will keep my slippers on the shelf,\" he said.\n\nRead Passage P1. Where did Raju look FIRST for his slipper?",
    options: [
      { id: "a", text: "Behind the door" },
      { id: "b", text: "In the shed" },
      { id: "c", text: "Under the bed" },
      { id: "d", text: "On the shelf" }
    ],
    answerId: "c",
    explanation: "The story says, \"He looked under the bed.\" Then he looked behind the door.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-a-q03",
    prompt: "Chintu the goat lived on Raju's farm. One morning, Raju's red slipper was missing. He looked under the bed. He looked behind the door. It was not there. Then his little sister Gauri laughed and pointed outside. Chintu was standing near the haystack. Something red was hanging from his mouth! Raju ran after him. Chintu ran around the well, past the hens and into the shed. At last, he dropped the slipper and bleated. The slipper was wet and chewed. Raju sighed, but he could not stop smiling. \"Next time, I will keep my slippers on the shelf,\" he said.\n\nRead Passage P1. Who laughed and pointed outside?",
    options: [
      { id: "a", text: "Raju" },
      { id: "b", text: "Gauri" },
      { id: "c", text: "Raju's mother" },
      { id: "d", text: "Chintu" }
    ],
    answerId: "b",
    explanation: "\"His little sister Gauri laughed and pointed outside.\" Look for the name in the story.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-a-q04",
    prompt: "Chintu the goat lived on Raju's farm. One morning, Raju's red slipper was missing. He looked under the bed. He looked behind the door. It was not there. Then his little sister Gauri laughed and pointed outside. Chintu was standing near the haystack. Something red was hanging from his mouth! Raju ran after him. Chintu ran around the well, past the hens and into the shed. At last, he dropped the slipper and bleated. The slipper was wet and chewed. Raju sighed, but he could not stop smiling. \"Next time, I will keep my slippers on the shelf,\" he said.\n\nRead Passage P1. Chintu ran in three places. Where did he run LAST?",
    options: [
      { id: "a", text: "Around the well" },
      { id: "b", text: "Past the hens" },
      { id: "c", text: "Near the haystack" },
      { id: "d", text: "Into the shed" }
    ],
    answerId: "d",
    explanation: "Chintu ran around the well, then past the hens, and last into the shed. That's where he dropped the slipper.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-a-q05",
    prompt: "Chintu the goat lived on Raju's farm. One morning, Raju's red slipper was missing. He looked under the bed. He looked behind the door. It was not there. Then his little sister Gauri laughed and pointed outside. Chintu was standing near the haystack. Something red was hanging from his mouth! Raju ran after him. Chintu ran around the well, past the hens and into the shed. At last, he dropped the slipper and bleated. The slipper was wet and chewed. Raju sighed, but he could not stop smiling. \"Next time, I will keep my slippers on the shelf,\" he said.\n\nRead Passage P1. \"He dropped the slipper and bleated.\" What does \"bleated\" mean?",
    options: [
      { id: "a", text: "Ran very fast" },
      { id: "b", text: "Ate some grass" },
      { id: "c", text: "Made the sound a goat makes" },
      { id: "d", text: "Fell asleep" }
    ],
    answerId: "c",
    explanation: "Chintu is a goat. A goat's sound, \"maa-maa,\" is called a bleat.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-a-q06",
    prompt: "Chintu the goat lived on Raju's farm. One morning, Raju's red slipper was missing. He looked under the bed. He looked behind the door. It was not there. Then his little sister Gauri laughed and pointed outside. Chintu was standing near the haystack. Something red was hanging from his mouth! Raju ran after him. Chintu ran around the well, past the hens and into the shed. At last, he dropped the slipper and bleated. The slipper was wet and chewed. Raju sighed, but he could not stop smiling. \"Next time, I will keep my slippers on the shelf,\" he said.\n\nRead Passage P1. Why will Raju keep his slippers on the shelf next time?",
    options: [
      { id: "a", text: "So Chintu cannot reach them and chew them" },
      { id: "b", text: "Because the shelf looks pretty" },
      { id: "c", text: "Because Gauri told him to" },
      { id: "d", text: "Because the slippers are new" }
    ],
    answerId: "a",
    explanation: "A goat cannot reach a high shelf. Raju wants to keep his slippers safe from Chintu.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-a-q07",
    prompt: "Chintu the goat lived on Raju's farm. One morning, Raju's red slipper was missing. He looked under the bed. He looked behind the door. It was not there. Then his little sister Gauri laughed and pointed outside. Chintu was standing near the haystack. Something red was hanging from his mouth! Raju ran after him. Chintu ran around the well, past the hens and into the shed. At last, he dropped the slipper and bleated. The slipper was wet and chewed. Raju sighed, but he could not stop smiling. \"Next time, I will keep my slippers on the shelf,\" he said.\n\nRead Passage P1. \"Raju sighed, but he could not stop smiling.\" How did Raju feel?",
    options: [
      { id: "a", text: "Very angry" },
      { id: "b", text: "Scared" },
      { id: "c", text: "Only sad" },
      { id: "d", text: "A little upset, but also amused" }
    ],
    answerId: "d",
    explanation: "A sigh shows he was a bit upset about his chewed slipper. His smile shows he also found Chintu funny.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-a-q08",
    prompt: "Asha's mother packed upma in her tiffin every Monday. Asha liked upma, but she was tired of it. Her friend Neel always brought aloo paratha. \"Let's swap today,\" said Neel. Asha agreed happily. At lunch, she took a big bite of the paratha. It was very spicy! Her eyes watered, and she quickly drank some water. Neel was enjoying the upma. \"This is so soft and tasty,\" he said. Asha laughed. \"Maybe my mother's upma is not so bad after all.\" From then on, they shared their tiffins every Monday.\n\nRead Passage P2. What did Asha's mother pack in her tiffin every Monday?",
    options: [
      { id: "a", text: "Aloo paratha" },
      { id: "b", text: "Upma" },
      { id: "c", text: "Idli" },
      { id: "d", text: "Rice" }
    ],
    answerId: "b",
    explanation: "The first line says Asha's mother packed upma. The aloo paratha was Neel's lunch.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-a-q09",
    prompt: "Asha's mother packed upma in her tiffin every Monday. Asha liked upma, but she was tired of it. Her friend Neel always brought aloo paratha. \"Let's swap today,\" said Neel. Asha agreed happily. At lunch, she took a big bite of the paratha. It was very spicy! Her eyes watered, and she quickly drank some water. Neel was enjoying the upma. \"This is so soft and tasty,\" he said. Asha laughed. \"Maybe my mother's upma is not so bad after all.\" From then on, they shared their tiffins every Monday.\n\nRead Passage P2. Why did Asha agree to swap tiffins?",
    options: [
      { id: "a", text: "Neel was very hungry." },
      { id: "b", text: "She was tired of eating upma." },
      { id: "c", text: "Her mother asked her to." },
      { id: "d", text: "The teacher told them to." }
    ],
    answerId: "b",
    explanation: "The story says Asha \"was tired of it.\" She wanted to try something different.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-a-q10",
    prompt: "Asha's mother packed upma in her tiffin every Monday. Asha liked upma, but she was tired of it. Her friend Neel always brought aloo paratha. \"Let's swap today,\" said Neel. Asha agreed happily. At lunch, she took a big bite of the paratha. It was very spicy! Her eyes watered, and she quickly drank some water. Neel was enjoying the upma. \"This is so soft and tasty,\" he said. Asha laughed. \"Maybe my mother's upma is not so bad after all.\" From then on, they shared their tiffins every Monday.\n\nRead Passage P2. Why did Asha's eyes water?",
    options: [
      { id: "a", text: "She was sad." },
      { id: "b", text: "Dust went into her eyes." },
      { id: "c", text: "She was sleepy." },
      { id: "d", text: "The paratha was very spicy." }
    ],
    answerId: "d",
    explanation: "Right before this, the story says, \"It was very spicy!\" Very spicy food can make our eyes water.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-a-q11",
    prompt: "Asha's mother packed upma in her tiffin every Monday. Asha liked upma, but she was tired of it. Her friend Neel always brought aloo paratha. \"Let's swap today,\" said Neel. Asha agreed happily. At lunch, she took a big bite of the paratha. It was very spicy! Her eyes watered, and she quickly drank some water. Neel was enjoying the upma. \"This is so soft and tasty,\" he said. Asha laughed. \"Maybe my mother's upma is not so bad after all.\" From then on, they shared their tiffins every Monday.\n\nRead Passage P2. What does Asha learn in the story?",
    options: [
      { id: "a", text: "Sometimes we like our own things more after trying something new." },
      { id: "b", text: "We should never share food." },
      { id: "c", text: "Spicy food is always bad." },
      { id: "d", text: "Upma is better than paratha for everyone." }
    ],
    answerId: "a",
    explanation: "After the swap, Asha says her mother's upma is \"not so bad after all.\" Trying something new helped her see it differently.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-a-q12",
    prompt: "Asha's mother packed upma in her tiffin every Monday. Asha liked upma, but she was tired of it. Her friend Neel always brought aloo paratha. \"Let's swap today,\" said Neel. Asha agreed happily. At lunch, she took a big bite of the paratha. It was very spicy! Her eyes watered, and she quickly drank some water. Neel was enjoying the upma. \"This is so soft and tasty,\" he said. Asha laughed. \"Maybe my mother's upma is not so bad after all.\" From then on, they shared their tiffins every Monday.\n\nRead Passage P2. What did Neel say about the upma?",
    options: [
      { id: "a", text: "It was too salty." },
      { id: "b", text: "It was too hot." },
      { id: "c", text: "It was soft and tasty." },
      { id: "d", text: "It was cold." }
    ],
    answerId: "c",
    explanation: "Neel said, \"This is so soft and tasty.\" He enjoyed it!",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-a-q13",
    prompt: "On Makar Sankranti, Diya and her grandfather went up to the terrace. First, they tied the string to the kite. Next, Grandfather held the kite high while Diya held the reel. Then a strong breeze came, and the kite rose into the blue sky. It danced above the rooftops with many other kites. Suddenly, another kite came close. Diya pulled her string gently, and her kite moved away safely. When the sun went down, they wound up the string and went downstairs, tired but happy.\n\nRead Passage P3. What did Diya and Grandfather do FIRST?",
    options: [
      { id: "a", text: "Held the kite high" },
      { id: "b", text: "Waited for the breeze" },
      { id: "c", text: "Wound up the string" },
      { id: "d", text: "Tied the string to the kite" }
    ],
    answerId: "d",
    explanation: "Look for the word \"First.\" \"First, they tied the string to the kite.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-a-q14",
    prompt: "On Makar Sankranti, Diya and her grandfather went up to the terrace. First, they tied the string to the kite. Next, Grandfather held the kite high while Diya held the reel. Then a strong breeze came, and the kite rose into the blue sky. It danced above the rooftops with many other kites. Suddenly, another kite came close. Diya pulled her string gently, and her kite moved away safely. When the sun went down, they wound up the string and went downstairs, tired but happy.\n\nRead Passage P3. \"It danced above the rooftops.\" This means the kite \u2014",
    options: [
      { id: "a", text: "fell down on the roof" },
      { id: "b", text: "moved up and down freely in the wind" },
      { id: "c", text: "broke into pieces" },
      { id: "d", text: "sang a song" }
    ],
    answerId: "b",
    explanation: "A kite cannot really dance. The words show it moving happily in the wind, like a dancer.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-a-q15",
    prompt: "On Makar Sankranti, Diya and her grandfather went up to the terrace. First, they tied the string to the kite. Next, Grandfather held the kite high while Diya held the reel. Then a strong breeze came, and the kite rose into the blue sky. It danced above the rooftops with many other kites. Suddenly, another kite came close. Diya pulled her string gently, and her kite moved away safely. When the sun went down, they wound up the string and went downstairs, tired but happy.\n\nRead Passage P3. Why did Diya pull her string gently?",
    options: [
      { id: "a", text: "To bring her kite down" },
      { id: "b", text: "To catch the other kite" },
      { id: "c", text: "To move her kite away from the other kite safely" },
      { id: "d", text: "Because her hands were tired" }
    ],
    answerId: "c",
    explanation: "Another kite came close. After she pulled, \"her kite moved away safely.\" So she was keeping it safe.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-a-q16",
    prompt: "On Makar Sankranti, Diya and her grandfather went up to the terrace. First, they tied the string to the kite. Next, Grandfather held the kite high while Diya held the reel. Then a strong breeze came, and the kite rose into the blue sky. It danced above the rooftops with many other kites. Suddenly, another kite came close. Diya pulled her string gently, and her kite moved away safely. When the sun went down, they wound up the string and went downstairs, tired but happy.\n\nRead Passage P3. When did Diya and Grandfather go downstairs?",
    options: [
      { id: "a", text: "When the sun went down" },
      { id: "b", text: "At noon" },
      { id: "c", text: "Early in the morning" },
      { id: "d", text: "When the kite broke" }
    ],
    answerId: "a",
    explanation: "\"When the sun went down, they wound up the string and went downstairs.\" Time words tell us when.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-a-q17",
    prompt: "**NOTICE**\nGreen Valley School  |  10 January\nOur school will hold a Book Fair in the school hall on Friday, 17 January, from 9 a.m. to 1 p.m. Students can buy story books, comics and colouring books. Parents are welcome. Please bring a cloth bag for your books.\n\u2014 Head Teacher\n\nRead Notice N1. What is the notice about?",
    options: [
      { id: "a", text: "A book fair" },
      { id: "b", text: "A sports day" },
      { id: "c", text: "A school holiday" },
      { id: "d", text: "A class picnic" }
    ],
    answerId: "a",
    explanation: "The notice says, \"Our school will hold a Book Fair.\" That is its main message.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-a-q18",
    prompt: "**NOTICE**\nGreen Valley School  |  10 January\nOur school will hold a Book Fair in the school hall on Friday, 17 January, from 9 a.m. to 1 p.m. Students can buy story books, comics and colouring books. Parents are welcome. Please bring a cloth bag for your books.\n\u2014 Head Teacher\n\nRead Notice N1. What should students bring?",
    options: [
      { id: "a", text: "Their lunch" },
      { id: "b", text: "A pencil box" },
      { id: "c", text: "A water bottle" },
      { id: "d", text: "A cloth bag" }
    ],
    answerId: "d",
    explanation: "The notice says, \"Please bring a cloth bag for your books.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-a-q19",
    prompt: "**NOTICE**\nGreen Valley School  |  10 January\nOur school will hold a Book Fair in the school hall on Friday, 17 January, from 9 a.m. to 1 p.m. Students can buy story books, comics and colouring books. Parents are welcome. Please bring a cloth bag for your books.\n\u2014 Head Teacher\n\nRead Notice N1. Mr. Sen wants to visit the Book Fair at 2 p.m. on Friday. Will it be open?",
    options: [
      { id: "a", text: "Yes, it is open all day." },
      { id: "b", text: "No, it ends at 1 p.m." },
      { id: "c", text: "Yes, parents can come at any time." },
      { id: "d", text: "No, it is on Thursday." }
    ],
    answerId: "b",
    explanation: "The fair runs from 9 a.m. to 1 p.m. By 2 p.m., it will be closed. Parents are welcome, but only during those hours.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-a-q20",
    prompt: "Read Picture in Words PD1. What is on the LEFT side of the picture?",
    options: [
      { id: "a", text: "A cow" },
      { id: "b", text: "A fruit cart" },
      { id: "c", text: "An old woman selling tomatoes and green chillies" },
      { id: "d", text: "A boy in a blue shirt" }
    ],
    answerId: "c",
    explanation: "The text says, \"On the left, an old woman is selling tomatoes and green chillies.\" The boy is in the middle.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-a-q21",
    prompt: "Read Picture in Words PD1. Why is the fruit seller waving a stick?",
    options: [
      { id: "a", text: "To call more customers" },
      { id: "b", text: "To point at the sky" },
      { id: "c", text: "To keep the cow away from his bananas" },
      { id: "d", text: "To play a game" }
    ],
    answerId: "c",
    explanation: "The text says he waves it \"to keep the cow away from his bananas.\" He doesn't want the cow to eat his fruit.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-a-q22",
    prompt: "Read Picture in Words PD1. At what time of day is the picture set?",
    options: [
      { id: "a", text: "In the morning" },
      { id: "b", text: "At night" },
      { id: "c", text: "In the evening" },
      { id: "d", text: "At midnight" }
    ],
    answerId: "a",
    explanation: "The first line says it is \"in the morning.\" The sunny sky is another clue.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-a-q23",
    prompt: "Read Picture in Words PD1. \"There is a busy market.\" Here, \"busy\" means \u2014",
    options: [
      { id: "a", text: "empty" },
      { id: "b", text: "closed" },
      { id: "c", text: "quiet" },
      { id: "d", text: "full of people doing many things" }
    ],
    answerId: "d",
    explanation: "The picture shows sellers, buyers, a boy and even a cow. A busy place has lots of people and activity.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-a-q24",
    prompt: "Asha's mother packed upma in her tiffin every Monday. Asha liked upma, but she was tired of it. Her friend Neel always brought aloo paratha. \"Let's swap today,\" said Neel. Asha agreed happily. At lunch, she took a big bite of the paratha. It was very spicy! Her eyes watered, and she quickly drank some water. Neel was enjoying the upma. \"This is so soft and tasty,\" he said. Asha laughed. \"Maybe my mother's upma is not so bad after all.\" From then on, they shared their tiffins every Monday.\n\nRead Passage P2. \"Let's swap today,\" said Neel. What does \"swap\" mean?",
    options: [
      { id: "a", text: "Eat quickly" },
      { id: "b", text: "Exchange" },
      { id: "c", text: "Throw away" },
      { id: "d", text: "Hide" }
    ],
    answerId: "b",
    explanation: "Asha ate Neel's paratha, and Neel ate Asha's upma. To swap means to give one thing and get another back.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g4-eng-ch01-b-q01",
    prompt: "Chintu the goat lived on Raju's farm. One morning, Raju's red slipper was missing. He looked under the bed. He looked behind the door. It was not there. Then his little sister Gauri laughed and pointed outside. Chintu was standing near the haystack. Something red was hanging from his mouth! Raju ran after him. Chintu ran around the well, past the hens and into the shed. At last, he dropped the slipper and bleated. The slipper was wet and chewed. Raju sighed, but he could not stop smiling. \"Next time, I will keep my slippers on the shelf,\" he said.\n\nRead Passage P1. Who is Chintu?",
    options: [
      { id: "a", text: "A dog" },
      { id: "b", text: "A goat" },
      { id: "c", text: "A boy" },
      { id: "d", text: "A hen" }
    ],
    answerId: "b",
    explanation: "The first line says, \"Chintu the goat lived on Raju's farm.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-b-q02",
    prompt: "Chintu the goat lived on Raju's farm. One morning, Raju's red slipper was missing. He looked under the bed. He looked behind the door. It was not there. Then his little sister Gauri laughed and pointed outside. Chintu was standing near the haystack. Something red was hanging from his mouth! Raju ran after him. Chintu ran around the well, past the hens and into the shed. At last, he dropped the slipper and bleated. The slipper was wet and chewed. Raju sighed, but he could not stop smiling. \"Next time, I will keep my slippers on the shelf,\" he said.\n\nRead Passage P1. What colour was Raju's missing slipper?",
    options: [
      { id: "a", text: "Blue" },
      { id: "b", text: "Green" },
      { id: "c", text: "Black" },
      { id: "d", text: "Red" }
    ],
    answerId: "d",
    explanation: "The story says \"Raju's red slipper was missing.\" Later, \"something red\" hung from Chintu's mouth.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-b-q03",
    prompt: "Chintu the goat lived on Raju's farm. One morning, Raju's red slipper was missing. He looked under the bed. He looked behind the door. It was not there. Then his little sister Gauri laughed and pointed outside. Chintu was standing near the haystack. Something red was hanging from his mouth! Raju ran after him. Chintu ran around the well, past the hens and into the shed. At last, he dropped the slipper and bleated. The slipper was wet and chewed. Raju sighed, but he could not stop smiling. \"Next time, I will keep my slippers on the shelf,\" he said.\n\nRead Passage P1. \"The slipper was wet and chewed.\" What does \"chewed\" mean?",
    options: [
      { id: "a", text: "Bitten again and again" },
      { id: "b", text: "Washed with soap" },
      { id: "c", text: "Painted" },
      { id: "d", text: "Folded neatly" }
    ],
    answerId: "a",
    explanation: "Chintu had the slipper in his mouth. To chew is to bite something many times, just as we chew food.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-b-q04",
    prompt: "Chintu the goat lived on Raju's farm. One morning, Raju's red slipper was missing. He looked under the bed. He looked behind the door. It was not there. Then his little sister Gauri laughed and pointed outside. Chintu was standing near the haystack. Something red was hanging from his mouth! Raju ran after him. Chintu ran around the well, past the hens and into the shed. At last, he dropped the slipper and bleated. The slipper was wet and chewed. Raju sighed, but he could not stop smiling. \"Next time, I will keep my slippers on the shelf,\" he said.\n\nRead Passage P1. What happened just BEFORE Raju ran after Chintu?",
    options: [
      { id: "a", text: "Chintu dropped the slipper." },
      { id: "b", text: "Raju said he would use the shelf." },
      { id: "c", text: "Gauri laughed and pointed outside." },
      { id: "d", text: "Chintu bleated." }
    ],
    answerId: "c",
    explanation: "Gauri pointed, Raju saw Chintu with something red, and then he ran. The other events came later.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-b-q05",
    prompt: "Chintu the goat lived on Raju's farm. One morning, Raju's red slipper was missing. He looked under the bed. He looked behind the door. It was not there. Then his little sister Gauri laughed and pointed outside. Chintu was standing near the haystack. Something red was hanging from his mouth! Raju ran after him. Chintu ran around the well, past the hens and into the shed. At last, he dropped the slipper and bleated. The slipper was wet and chewed. Raju sighed, but he could not stop smiling. \"Next time, I will keep my slippers on the shelf,\" he said.\n\nRead Passage P1. Which is the best title for this story?",
    options: [
      { id: "a", text: "The Slipper Thief" },
      { id: "b", text: "Gauri's Birthday" },
      { id: "c", text: "Rain on the Farm" },
      { id: "d", text: "The Big Well" }
    ],
    answerId: "a",
    explanation: "A good title tells us what the story is about. This story is about a goat who takes a slipper.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-b-q06",
    prompt: "Asha's mother packed upma in her tiffin every Monday. Asha liked upma, but she was tired of it. Her friend Neel always brought aloo paratha. \"Let's swap today,\" said Neel. Asha agreed happily. At lunch, she took a big bite of the paratha. It was very spicy! Her eyes watered, and she quickly drank some water. Neel was enjoying the upma. \"This is so soft and tasty,\" he said. Asha laughed. \"Maybe my mother's upma is not so bad after all.\" From then on, they shared their tiffins every Monday.\n\nRead Passage P2. How did Asha feel when Neel said, \"Let's swap today\"?",
    options: [
      { id: "a", text: "Angry" },
      { id: "b", text: "Scared" },
      { id: "c", text: "Bored" },
      { id: "d", text: "Happy" }
    ],
    answerId: "d",
    explanation: "The story says, \"Asha agreed happily.\" The word \"happily\" tells us her feeling.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-b-q07",
    prompt: "Asha's mother packed upma in her tiffin every Monday. Asha liked upma, but she was tired of it. Her friend Neel always brought aloo paratha. \"Let's swap today,\" said Neel. Asha agreed happily. At lunch, she took a big bite of the paratha. It was very spicy! Her eyes watered, and she quickly drank some water. Neel was enjoying the upma. \"This is so soft and tasty,\" he said. Asha laughed. \"Maybe my mother's upma is not so bad after all.\" From then on, they shared their tiffins every Monday.\n\nRead Passage P2. Why did Asha quickly drink some water?",
    options: [
      { id: "a", text: "She was thirsty after playing." },
      { id: "b", text: "The paratha was too spicy for her." },
      { id: "c", text: "The water was nice and cold." },
      { id: "d", text: "The teacher told her to." }
    ],
    answerId: "b",
    explanation: "She drank water right after the very spicy bite. Water helps when food feels too hot in the mouth.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-b-q08",
    prompt: "Asha's mother packed upma in her tiffin every Monday. Asha liked upma, but she was tired of it. Her friend Neel always brought aloo paratha. \"Let's swap today,\" said Neel. Asha agreed happily. At lunch, she took a big bite of the paratha. It was very spicy! Her eyes watered, and she quickly drank some water. Neel was enjoying the upma. \"This is so soft and tasty,\" he said. Asha laughed. \"Maybe my mother's upma is not so bad after all.\" From then on, they shared their tiffins every Monday.\n\nRead Passage P2. Asha says, \"Maybe my mother's upma is not so bad after all.\" What does this show?",
    options: [
      { id: "a", text: "She hates upma now." },
      { id: "b", text: "She wants to eat only paratha." },
      { id: "c", text: "She feels better about her mother's upma." },
      { id: "d", text: "She will stop eating lunch." }
    ],
    answerId: "c",
    explanation: "\"Not so bad after all\" means she has changed her mind. She likes the upma more than before.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-b-q09",
    prompt: "Asha's mother packed upma in her tiffin every Monday. Asha liked upma, but she was tired of it. Her friend Neel always brought aloo paratha. \"Let's swap today,\" said Neel. Asha agreed happily. At lunch, she took a big bite of the paratha. It was very spicy! Her eyes watered, and she quickly drank some water. Neel was enjoying the upma. \"This is so soft and tasty,\" he said. Asha laughed. \"Maybe my mother's upma is not so bad after all.\" From then on, they shared their tiffins every Monday.\n\nRead Passage P2. What happened at the END of the story?",
    options: [
      { id: "a", text: "Asha and Neel stopped being friends." },
      { id: "b", text: "They never swapped again." },
      { id: "c", text: "They ate lunch in the canteen." },
      { id: "d", text: "They shared their tiffins every Monday." }
    ],
    answerId: "d",
    explanation: "The last line says, \"From then on, they shared their tiffins every Monday.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-b-q10",
    prompt: "On Makar Sankranti, Diya and her grandfather went up to the terrace. First, they tied the string to the kite. Next, Grandfather held the kite high while Diya held the reel. Then a strong breeze came, and the kite rose into the blue sky. It danced above the rooftops with many other kites. Suddenly, another kite came close. Diya pulled her string gently, and her kite moved away safely. When the sun went down, they wound up the string and went downstairs, tired but happy.\n\nRead Passage P3. On which festival did Diya fly her kite?",
    options: [
      { id: "a", text: "Makar Sankranti" },
      { id: "b", text: "Diwali" },
      { id: "c", text: "Holi" },
      { id: "d", text: "Onam" }
    ],
    answerId: "a",
    explanation: "The first line names the festival: Makar Sankranti. Kite flying is a happy part of this festival.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-b-q11",
    prompt: "On Makar Sankranti, Diya and her grandfather went up to the terrace. First, they tied the string to the kite. Next, Grandfather held the kite high while Diya held the reel. Then a strong breeze came, and the kite rose into the blue sky. It danced above the rooftops with many other kites. Suddenly, another kite came close. Diya pulled her string gently, and her kite moved away safely. When the sun went down, they wound up the string and went downstairs, tired but happy.\n\nRead Passage P3. Who held the reel?",
    options: [
      { id: "a", text: "Grandfather" },
      { id: "b", text: "Diya's mother" },
      { id: "c", text: "Diya" },
      { id: "d", text: "Diya's friend" }
    ],
    answerId: "c",
    explanation: "\"Grandfather held the kite high while Diya held the reel.\" Read carefully. They had different jobs.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-b-q12",
    prompt: "On Makar Sankranti, Diya and her grandfather went up to the terrace. First, they tied the string to the kite. Next, Grandfather held the kite high while Diya held the reel. Then a strong breeze came, and the kite rose into the blue sky. It danced above the rooftops with many other kites. Suddenly, another kite came close. Diya pulled her string gently, and her kite moved away safely. When the sun went down, they wound up the string and went downstairs, tired but happy.\n\nRead Passage P3. What happened right AFTER the strong breeze came?",
    options: [
      { id: "a", text: "They tied the string to the kite." },
      { id: "b", text: "The kite rose into the blue sky." },
      { id: "c", text: "They went downstairs." },
      { id: "d", text: "Another kite came close." }
    ],
    answerId: "b",
    explanation: "\"Then a strong breeze came, and the kite rose into the blue sky.\" The wind lifted the kite.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-b-q13",
    prompt: "On Makar Sankranti, Diya and her grandfather went up to the terrace. First, they tied the string to the kite. Next, Grandfather held the kite high while Diya held the reel. Then a strong breeze came, and the kite rose into the blue sky. It danced above the rooftops with many other kites. Suddenly, another kite came close. Diya pulled her string gently, and her kite moved away safely. When the sun went down, they wound up the string and went downstairs, tired but happy.\n\nRead Passage P3. Diya and Grandfather were \"tired but happy.\" Why were they tired?",
    options: [
      { id: "a", text: "They had flown kites from morning till sunset." },
      { id: "b", text: "They were both ill." },
      { id: "c", text: "The stairs were broken." },
      { id: "d", text: "They had lost their kite." }
    ],
    answerId: "a",
    explanation: "They stayed on the terrace until \"the sun went down.\" A long day of kite flying is tiring but fun.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-b-q14",
    prompt: "On Makar Sankranti, Diya and her grandfather went up to the terrace. First, they tied the string to the kite. Next, Grandfather held the kite high while Diya held the reel. Then a strong breeze came, and the kite rose into the blue sky. It danced above the rooftops with many other kites. Suddenly, another kite came close. Diya pulled her string gently, and her kite moved away safely. When the sun went down, they wound up the string and went downstairs, tired but happy.\n\nRead Passage P3. \"They wound up the string.\" What does \"wound up\" mean here?",
    options: [
      { id: "a", text: "Cut it into pieces" },
      { id: "b", text: "Threw it away" },
      { id: "c", text: "Rolled it back onto the reel" },
      { id: "d", text: "Tied a knot in it" }
    ],
    answerId: "c",
    explanation: "At the end of kite flying, we roll the string back onto the reel so it doesn't tangle. That is winding it up.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-b-q15",
    prompt: "**NOTICE**\nGreen Valley School  |  10 January\nOur school will hold a Book Fair in the school hall on Friday, 17 January, from 9 a.m. to 1 p.m. Students can buy story books, comics and colouring books. Parents are welcome. Please bring a cloth bag for your books.\n\u2014 Head Teacher\n\nRead Notice N1. Who wrote the notice?",
    options: [
      { id: "a", text: "The parents" },
      { id: "b", text: "The students" },
      { id: "c", text: "A shopkeeper" },
      { id: "d", text: "The Head Teacher" }
    ],
    answerId: "d",
    explanation: "The name at the bottom of a notice tells us who wrote it. Here it is the Head Teacher.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-b-q16",
    prompt: "**NOTICE**\nGreen Valley School  |  10 January\nOur school will hold a Book Fair in the school hall on Friday, 17 January, from 9 a.m. to 1 p.m. Students can buy story books, comics and colouring books. Parents are welcome. Please bring a cloth bag for your books.\n\u2014 Head Teacher\n\nRead Notice N1. Where will the Book Fair be held?",
    options: [
      { id: "a", text: "In the playground" },
      { id: "b", text: "In the school hall" },
      { id: "c", text: "In the library" },
      { id: "d", text: "In the market" }
    ],
    answerId: "b",
    explanation: "The notice says the fair is \"in the school hall.\" A notice always tells us where.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-b-q17",
    prompt: "**NOTICE**\nGreen Valley School  |  10 January\nOur school will hold a Book Fair in the school hall on Friday, 17 January, from 9 a.m. to 1 p.m. Students can buy story books, comics and colouring books. Parents are welcome. Please bring a cloth bag for your books.\n\u2014 Head Teacher\n\nRead Notice N1. Which of these is NOT mentioned as something students can buy?",
    options: [
      { id: "a", text: "Story books" },
      { id: "b", text: "Comics" },
      { id: "c", text: "Toys" },
      { id: "d", text: "Colouring books" }
    ],
    answerId: "c",
    explanation: "The notice lists story books, comics and colouring books. Toys are not on the list.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-b-q18",
    prompt: "Read Picture in Words PD1. Who is holding his father's hand?",
    options: [
      { id: "a", text: "The old woman" },
      { id: "b", text: "A boy in a blue shirt" },
      { id: "c", text: "The fruit seller" },
      { id: "d", text: "A girl in a red dress" }
    ],
    answerId: "b",
    explanation: "\"In the middle, a boy in a blue shirt is holding his father's hand.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-b-q19",
    prompt: "Read Picture in Words PD1. What is the father paying for?",
    options: [
      { id: "a", text: "A bag of potatoes" },
      { id: "b", text: "Some tomatoes" },
      { id: "c", text: "Some bananas" },
      { id: "d", text: "Green chillies" }
    ],
    answerId: "a",
    explanation: "The text says, \"His father is paying for a bag of potatoes.\" The tomatoes and chillies belong to the old woman.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-b-q20",
    prompt: "Read Picture in Words PD1. Which sentence is TRUE about the picture?",
    options: [
      { id: "a", text: "The cow is eating the bananas." },
      { id: "b", text: "The market is empty." },
      { id: "c", text: "It is raining." },
      { id: "d", text: "The old woman is selling vegetables from a basket." }
    ],
    answerId: "d",
    explanation: "Check each sentence against the text. The cow is only standing near the cart, the market is busy, and the sky is sunny.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-b-q21",
    prompt: "Read Picture in Words PD1. \"The sky is clear and sunny.\" Here, \"clear\" means \u2014",
    options: [
      { id: "a", text: "cloudy" },
      { id: "b", text: "dark" },
      { id: "c", text: "rainy" },
      { id: "d", text: "without clouds" }
    ],
    answerId: "d",
    explanation: "A clear sky has no clouds, so the sun can shine. \"Sunny\" is a helpful clue.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-b-q22",
    prompt: "Chintu the goat lived on Raju's farm. One morning, Raju's red slipper was missing. He looked under the bed. He looked behind the door. It was not there. Then his little sister Gauri laughed and pointed outside. Chintu was standing near the haystack. Something red was hanging from his mouth! Raju ran after him. Chintu ran around the well, past the hens and into the shed. At last, he dropped the slipper and bleated. The slipper was wet and chewed. Raju sighed, but he could not stop smiling. \"Next time, I will keep my slippers on the shelf,\" he said.\n\nRead Passage P1. Why did Gauri laugh?",
    options: [
      { id: "a", text: "She remembered a joke." },
      { id: "b", text: "Raju fell down." },
      { id: "c", text: "She saw Chintu with the slipper in his mouth." },
      { id: "d", text: "She found her lost toy." }
    ],
    answerId: "c",
    explanation: "Gauri pointed outside, where Chintu stood with something red in his mouth. A goat with a slipper is a funny sight!",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-b-q23",
    prompt: "Asha's mother packed upma in her tiffin every Monday. Asha liked upma, but she was tired of it. Her friend Neel always brought aloo paratha. \"Let's swap today,\" said Neel. Asha agreed happily. At lunch, she took a big bite of the paratha. It was very spicy! Her eyes watered, and she quickly drank some water. Neel was enjoying the upma. \"This is so soft and tasty,\" he said. Asha laughed. \"Maybe my mother's upma is not so bad after all.\" From then on, they shared their tiffins every Monday.\n\nRead Passage P2. \"Her eyes watered.\" This means her eyes \u2014",
    options: [
      { id: "a", text: "were full of soap" },
      { id: "b", text: "filled with tears" },
      { id: "c", text: "turned blue" },
      { id: "d", text: "closed tightly" }
    ],
    answerId: "b",
    explanation: "When eyes \"water,\" tears come into them. Spicy food or a cut onion can make our eyes water.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g4-eng-ch01-b-q24",
    prompt: "On Makar Sankranti, Diya and her grandfather went up to the terrace. First, they tied the string to the kite. Next, Grandfather held the kite high while Diya held the reel. Then a strong breeze came, and the kite rose into the blue sky. It danced above the rooftops with many other kites. Suddenly, another kite came close. Diya pulled her string gently, and her kite moved away safely. When the sun went down, they wound up the string and went downstairs, tired but happy.\n\nRead Passage P3. What can we tell about Diya and her grandfather?",
    options: [
      { id: "a", text: "They enjoy spending time together." },
      { id: "b", text: "They do not like kites." },
      { id: "c", text: "They live in different cities." },
      { id: "d", text: "They argue all the time." }
    ],
    answerId: "a",
    explanation: "They work as a team and stay out all day. They end \"tired but happy,\" which shows they enjoyed it together.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83d\udd0e",
    title: "Hello, story spotter!",
    body: ["When we read, we find out what the story is really about.", "The answer is always in the story \u2014 go back and check.", "Lesson is optional; jump to a set anytime."],
    cta: "Let's go!",
    visual: "sentence",
    speak: "Hello, story spotter! When we read, we don't just look at the words. We find out what the story is really about.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Story spotter tools",
    lead: "Tap each card to reveal.",
    visual: "sentence",
    speak: "Tap each card: main idea, details, order words and new words.",
    cards: [
      { label: "Main idea", reveal: "What is the story mostly about?", emoji: "\ud83d\udca1" },
      { label: "Details", reveal: "Who, what, where and when", emoji: "\ud83e\udde9" },
      { label: "Order words", reveal: "first, next, then, at last", emoji: "\ud83d\udd22" },
      { label: "New words", reveal: "Read the words around it to guess", emoji: "\ud83d\udd24" }
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: "Find the clues",
    visual: "sentence",
    speak: "Mohan opened the door. His umbrella was dripping, and his shoes went squish, squish. The story did not say rain, but the clues told us. Squish is a soft, wet sound.",
    steps: ["\u201cMohan opened the door. His umbrella was dripping, and his shoes went squish, squish.\u201d", "Dripping umbrella + squishy shoes \u2192 it was raining!", "The story never said \u201crain\u201d \u2014 the clues told us", "\u201cSquish\u201d = a soft, wet sound"],
    punchline: "Clues in the story tell us more than the words say.",
  },
  {
    id: "t1",
    type: "try",
    title: "Your turn",
    prompt: "\u201cRiya yawned and rubbed her eyes. The moon was high in the sky.\u201d What time is it most likely?",
    options: [
      { id: "a", text: "Morning" },
      { id: "b", text: "Noon" },
      { id: "c", text: "Night" },
      { id: "d", text: "Lunch time" }
    ],
    answerId: "c",
    why: "Yawning, rubbing eyes and a high moon are clues that it is night.",
    visual: "sentence",
    speak: "\u201cRiya yawned and rubbed her eyes. The moon was high in the sky.\u201d What time is it most likely?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Super story spotter!",
    bullets: ["Main idea first, then details", "Use clues to guess new words", "Not sure? Read that part again", "Set A and Set B ready \u2014 24 MCQs each"],
    cta: "Back to chapter",
    speak: "Super story spotter! You are ready for the practice sets.",
  },
];

export const g4EnglishReading: ChapterDef = {
  id: "story-spotters",
  title: "Story Spotters",
  emoji: "\ud83d\udd0e",
  blurb: "Main idea, details & clue words",
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
  paperTopics: ["comprehension", "vocabulary"],
};

export const g4EnglishReadingQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
