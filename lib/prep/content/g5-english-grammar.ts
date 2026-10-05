import type { ChapterDef, PrepQuestion } from "../types";

/** Word Builders - authored SOF content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g5-eng-ch02-a-q01",
    prompt: "Every year, our colony holds a small mela in the park behind the post office. This year, my brother Kabir and I are running a lemonade stall. Last Sunday, we painted a bright yellow sign and borrowed six glass jars from Mrs. Iyer. Right now, Kabir is squeezing lemons, and I am counting paper cups. Our cousin Zoya will bring mint leaves tomorrow morning. She grows them in pots on her balcony. Kabir thinks our lemonade is the tastiest in the whole colony. I am not so sure, because Uncle Joseph's kulfi stall is always the busiest one! Still, we are going to try our best. The mela begins at four o'clock sharp.\n\nRead Passage P1. \"Right now, Kabir is squeezing lemons.\" Which tense is this sentence in?",
    options: [
      { id: "a", text: "Present continuous" },
      { id: "b", text: "Simple present" },
      { id: "c", text: "Simple past" },
      { id: "d", text: "Simple future" }
    ],
    answerId: "a",
    explanation: "\"Is + squeezing\" (am/is/are + -ing) shows an action happening at this moment. \"Right now\" is a helpful clue.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-a-q02",
    prompt: "Every year, our colony holds a small mela in the park behind the post office. This year, my brother Kabir and I are running a lemonade stall. Last Sunday, we painted a bright yellow sign and borrowed six glass jars from Mrs. Iyer. Right now, Kabir is squeezing lemons, and I am counting paper cups. Our cousin Zoya will bring mint leaves tomorrow morning. She grows them in pots on her balcony. Kabir thinks our lemonade is the tastiest in the whole colony. I am not so sure, because Uncle Joseph's kulfi stall is always the busiest one! Still, we are going to try our best. The mela begins at four o'clock sharp.\n\nRead Passage P1. Which sentence from the passage talks about the FUTURE?",
    options: [
      { id: "a", text: "\"We painted a bright yellow sign.\"" },
      { id: "b", text: "\"She grows them in pots on her balcony.\"" },
      { id: "c", text: "\"Our cousin Zoya will bring mint leaves tomorrow morning.\"" },
      { id: "d", text: "\"I am counting paper cups.\"" }
    ],
    answerId: "c",
    explanation: "\"Will + bring\" and the time word \"tomorrow\" show an action that has not happened yet.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-a-q03",
    prompt: "Every year, our colony holds a small mela in the park behind the post office. This year, my brother Kabir and I are running a lemonade stall. Last Sunday, we painted a bright yellow sign and borrowed six glass jars from Mrs. Iyer. Right now, Kabir is squeezing lemons, and I am counting paper cups. Our cousin Zoya will bring mint leaves tomorrow morning. She grows them in pots on her balcony. Kabir thinks our lemonade is the tastiest in the whole colony. I am not so sure, because Uncle Joseph's kulfi stall is always the busiest one! Still, we are going to try our best. The mela begins at four o'clock sharp.\n\nRead Passage P1. \"Uncle Joseph's kulfi stall is always the busiest one.\" The word \"busiest\" is in which degree of comparison?",
    options: [
      { id: "a", text: "Positive" },
      { id: "b", text: "Superlative" },
      { id: "c", text: "Comparative" },
      { id: "d", text: "It is not an adjective." }
    ],
    answerId: "b",
    explanation: "The superlative (-est or \"most\") compares three or more things. Here, his stall is compared with every stall at the mela.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-a-q04",
    prompt: "Every year, our colony holds a small mela in the park behind the post office. This year, my brother Kabir and I are running a lemonade stall. Last Sunday, we painted a bright yellow sign and borrowed six glass jars from Mrs. Iyer. Right now, Kabir is squeezing lemons, and I am counting paper cups. Our cousin Zoya will bring mint leaves tomorrow morning. She grows them in pots on her balcony. Kabir thinks our lemonade is the tastiest in the whole colony. I am not so sure, because Uncle Joseph's kulfi stall is always the busiest one! Still, we are going to try our best. The mela begins at four o'clock sharp.\n\nRead Passage P1. Which word from the passage is a proper noun?",
    options: [
      { id: "a", text: "park" },
      { id: "b", text: "lemons" },
      { id: "c", text: "colony" },
      { id: "d", text: "Zoya" }
    ],
    answerId: "d",
    explanation: "A proper noun is the special name of a particular person, place or thing, and it begins with a capital letter.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-a-q05",
    prompt: "**Guide:** Look carefully, children. That heron is standing very still.\n**Neha:** Why is it so quiet?\n**Guide:** It is waiting for a fish. Herons hunt patiently.\n**Sam:** Those ducks are much noisier than the heron!\n**Guide:** Yes, and the geese are the noisiest birds here. Each goose honks loudly when someone comes near.\n**Neha:** Who feeds them?\n**Guide:** Nobody feeds them. They find their own food in the lake.\n**Sam:** I will draw the heron in my notebook tonight.\n**Neha:** And I am going to write a poem about the geese!\n\nRead Passage P2. The guide says, \"Each goose honks loudly.\" What is the plural of \"goose\"?",
    options: [
      { id: "a", text: "gooses" },
      { id: "b", text: "goose" },
      { id: "c", text: "geese" },
      { id: "d", text: "geeses" }
    ],
    answerId: "c",
    explanation: "Some nouns change their vowels in the plural instead of adding -s. Goose becomes geese, just as tooth becomes teeth.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-a-q06",
    prompt: "**Guide:** Look carefully, children. That heron is standing very still.\n**Neha:** Why is it so quiet?\n**Guide:** It is waiting for a fish. Herons hunt patiently.\n**Sam:** Those ducks are much noisier than the heron!\n**Guide:** Yes, and the geese are the noisiest birds here. Each goose honks loudly when someone comes near.\n**Neha:** Who feeds them?\n**Guide:** Nobody feeds them. They find their own food in the lake.\n**Sam:** I will draw the heron in my notebook tonight.\n**Neha:** And I am going to write a poem about the geese!\n\nRead Passage P2. \"Herons hunt patiently.\" What does the adverb \"patiently\" tell us?",
    options: [
      { id: "a", text: "How herons hunt" },
      { id: "b", text: "When herons hunt" },
      { id: "c", text: "Where herons hunt" },
      { id: "d", text: "How many herons hunt" }
    ],
    answerId: "a",
    explanation: "\"Patiently\" is an adverb of manner. It answers \"How?\" They hunt by waiting calmly.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-a-q07",
    prompt: "Grandpa's bicycle is older than my father. It has a rusty bell, a wide leather seat and a basket that once carried vegetables from the market every day. Yesterday, Grandpa and I cleaned it together. He oiled the chain carefully while I polished the handlebars. \"This bicycle took me to my first job,\" he said proudly. \"It carried your grandmother to her school, where she taught for thirty years.\" I tried to ride it, but my feet barely touched the pedals. Grandpa laughed gently. \"You will grow into it,\" he promised. Today, the bicycle stands in the courtyard, shining like new. It is the most beautiful thing in our house.\n\nRead Passage P3. \"It carried your grandmother to her school,\" he said. What does the pronoun \"It\" refer to?",
    options: [
      { id: "a", text: "The first job" },
      { id: "b", text: "The market" },
      { id: "c", text: "The basket" },
      { id: "d", text: "The bicycle" }
    ],
    answerId: "d",
    explanation: "Look back at the noun just before. Grandpa says \"This bicycle took me to my first job,\" then continues talking about the same bicycle.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-a-q08",
    prompt: "Which of these is a collective noun?",
    options: [
      { id: "a", text: "happiness" },
      { id: "b", text: "flock" },
      { id: "c", text: "river" },
      { id: "d", text: "Mumbai" }
    ],
    answerId: "b",
    explanation: "A collective noun names a group as one unit, like a flock of birds, a team of players or a bunch of keys.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-a-q09",
    prompt: "What is the masculine form of \"niece\"?",
    options: [
      { id: "a", text: "uncle" },
      { id: "b", text: "nephew" },
      { id: "c", text: "cousin" },
      { id: "d", text: "son" }
    ],
    answerId: "b",
    explanation: "Niece and nephew are a pair. They are the daughter and son of your brother or sister.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-a-q10",
    prompt: "Which of these is an abstract noun?",
    options: [
      { id: "a", text: "table" },
      { id: "b", text: "Priya" },
      { id: "c", text: "crowd" },
      { id: "d", text: "honesty" }
    ],
    answerId: "d",
    explanation: "An abstract noun names a quality or feeling you cannot touch or see, like honesty, courage or joy.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-a-q11",
    prompt: "Choose the correct pronoun.\n\"The red notebook on the desk is ___. I wrote my name inside it.\"",
    options: [
      { id: "a", text: "mine" },
      { id: "b", text: "me" },
      { id: "c", text: "my" },
      { id: "d", text: "I" }
    ],
    answerId: "a",
    explanation: "\"Mine\" is a possessive pronoun that stands alone. \"My\" needs a noun after it, as in \"my notebook.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-a-q12",
    prompt: "Choose the correct word.\n\"The little boy tied his shoelaces all by ___.\"",
    options: [
      { id: "a", text: "him" },
      { id: "b", text: "his" },
      { id: "c", text: "himself" },
      { id: "d", text: "hisself" }
    ],
    answerId: "c",
    explanation: "Reflexive pronouns end in -self or -selves. \"Hisself\" is a common mistake; the correct word is \"himself.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-a-q13",
    prompt: "Fill in the blank.\n\"Mount Everest is the ___ mountain in the world.\"",
    options: [
      { id: "a", text: "high" },
      { id: "b", text: "higher" },
      { id: "c", text: "more high" },
      { id: "d", text: "highest" }
    ],
    answerId: "d",
    explanation: "\"The ___ in the world\" compares one thing with all others, so we need the superlative: highest.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-a-q14",
    prompt: "Fill in the blank.\n\"Riya's handwriting is good, but Meera's is even ___.\"",
    options: [
      { id: "a", text: "gooder" },
      { id: "b", text: "better" },
      { id: "c", text: "more good" },
      { id: "d", text: "best" }
    ],
    answerId: "b",
    explanation: "\"Good\" is irregular: good, better, best. Two people are compared here, so the comparative \"better\" fits.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-a-q15",
    prompt: "Fill in the blank.\n\"This painting is ___ than that one.\"",
    options: [
      { id: "a", text: "beautifuller" },
      { id: "b", text: "most beautiful" },
      { id: "c", text: "more beautiful" },
      { id: "d", text: "beautifullest" }
    ],
    answerId: "c",
    explanation: "Long adjectives use \"more\" and \"most\" instead of -er and -est. \"Than\" tells us two things are compared.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-a-q16",
    prompt: "Choose the correct verb.\n\"Last week, our class ___ to the science museum.\"",
    options: [
      { id: "a", text: "went" },
      { id: "b", text: "go" },
      { id: "c", text: "goed" },
      { id: "d", text: "gone" }
    ],
    answerId: "a",
    explanation: "\"Last week\" signals the simple past. \"Go\" is irregular, and its past form is \"went,\" not \"goed.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-a-q17",
    prompt: "Choose the correct verb.\n\"I ___ my homework when the lights went out.\"",
    options: [
      { id: "a", text: "was doing" },
      { id: "b", text: "am doing" },
      { id: "c", text: "did" },
      { id: "d", text: "do" }
    ],
    answerId: "a",
    explanation: "The past continuous (was/were + -ing) shows an action in progress when something else happened in the past.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-a-q18",
    prompt: "Fill in the blank.\n\"Look at those dark clouds! It ___ rain.\"",
    options: [
      { id: "a", text: "rained" },
      { id: "b", text: "rains" },
      { id: "c", text: "was raining" },
      { id: "d", text: "is going to" }
    ],
    answerId: "d",
    explanation: "Use \"going to\" when you can see clues that something is about to happen. The dark clouds are the clue.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-a-q19",
    prompt: "Choose the correct verb.\n\"Each of the students ___ a library card.\"",
    options: [
      { id: "a", text: "have" },
      { id: "b", text: "has" },
      { id: "c", text: "are having" },
      { id: "d", text: "were have" }
    ],
    answerId: "b",
    explanation: "The subject is \"Each,\" which means every single one. It is singular and takes \"has,\" even though \"students\" comes just before the verb.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-a-q20",
    prompt: "Choose the correct verb.\n\"My brother and my sister ___ to school by bus.\"",
    options: [
      { id: "a", text: "goes" },
      { id: "b", text: "is going" },
      { id: "c", text: "go" },
      { id: "d", text: "has go" }
    ],
    answerId: "c",
    explanation: "Two subjects joined by \"and\" make a plural subject, so the verb has no -s: they go.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-a-q21",
    prompt: "The sentence is split into four parts. Which part has an error?\n\"Yesterday / my friends / goes / to the market.\"",
    options: [
      { id: "a", text: "Yesterday" },
      { id: "b", text: "my friends" },
      { id: "c", text: "goes" },
      { id: "d", text: "to the market" }
    ],
    answerId: "c",
    explanation: "\"Yesterday\" needs the past tense. The correct sentence is \"Yesterday my friends went to the market.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-a-q22",
    prompt: "\"We will meet at the gate tomorrow.\"\nThe word \"tomorrow\" is an adverb of \u2014",
    options: [
      { id: "a", text: "time" },
      { id: "b", text: "place" },
      { id: "c", text: "manner" },
      { id: "d", text: "frequency" }
    ],
    answerId: "a",
    explanation: "Adverbs of time answer \"When?\" Tomorrow, today, yesterday and soon are all adverbs of time.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-a-q23",
    prompt: "Which sentence is grammatically correct?",
    options: [
      { id: "a", text: "She don't like spicy food." },
      { id: "b", text: "He have two puppies." },
      { id: "c", text: "They was late for school." },
      { id: "d", text: "The dog wags its tail happily." }
    ],
    answerId: "d",
    explanation: "Singular subjects take does/has/was, and plural subjects take were. Only D matches its subject and verb correctly.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-a-q24",
    prompt: "\"Kabir runs fast.\"\nIn this sentence, the word \"fast\" is \u2014",
    options: [
      { id: "a", text: "an adjective" },
      { id: "b", text: "an adverb" },
      { id: "c", text: "a noun" },
      { id: "d", text: "a verb" }
    ],
    answerId: "b",
    explanation: "\"Fast\" tells how Kabir runs, so it describes the verb and is an adverb. In \"a fast car,\" it would be an adjective.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g5-eng-ch02-b-q01",
    prompt: "Every year, our colony holds a small mela in the park behind the post office. This year, my brother Kabir and I are running a lemonade stall. Last Sunday, we painted a bright yellow sign and borrowed six glass jars from Mrs. Iyer. Right now, Kabir is squeezing lemons, and I am counting paper cups. Our cousin Zoya will bring mint leaves tomorrow morning. She grows them in pots on her balcony. Kabir thinks our lemonade is the tastiest in the whole colony. I am not so sure, because Uncle Joseph's kulfi stall is always the busiest one! Still, we are going to try our best. The mela begins at four o'clock sharp.\n\nRead Passage P1. \"We borrowed six glass jars from Mrs. Iyer.\" Which word in this sentence is a plural noun?",
    options: [
      { id: "a", text: "Mrs. Iyer" },
      { id: "b", text: "jars" },
      { id: "c", text: "borrowed" },
      { id: "d", text: "six" }
    ],
    answerId: "b",
    explanation: "A plural noun names more than one thing. \"Jars\" adds -s to show there are many. \"Six\" tells how many but is not a noun here.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-b-q02",
    prompt: "Every year, our colony holds a small mela in the park behind the post office. This year, my brother Kabir and I are running a lemonade stall. Last Sunday, we painted a bright yellow sign and borrowed six glass jars from Mrs. Iyer. Right now, Kabir is squeezing lemons, and I am counting paper cups. Our cousin Zoya will bring mint leaves tomorrow morning. She grows them in pots on her balcony. Kabir thinks our lemonade is the tastiest in the whole colony. I am not so sure, because Uncle Joseph's kulfi stall is always the busiest one! Still, we are going to try our best. The mela begins at four o'clock sharp.\n\nRead Passage P1. \"She grows them in pots on her balcony.\" What does \"them\" refer to?",
    options: [
      { id: "a", text: "The pots" },
      { id: "b", text: "The paper cups" },
      { id: "c", text: "The lemons" },
      { id: "d", text: "The mint leaves" }
    ],
    answerId: "d",
    explanation: "The sentence before says Zoya will bring mint leaves. \"Them\" replaces that noun so it isn't repeated.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-b-q03",
    prompt: "Every year, our colony holds a small mela in the park behind the post office. This year, my brother Kabir and I are running a lemonade stall. Last Sunday, we painted a bright yellow sign and borrowed six glass jars from Mrs. Iyer. Right now, Kabir is squeezing lemons, and I am counting paper cups. Our cousin Zoya will bring mint leaves tomorrow morning. She grows them in pots on her balcony. Kabir thinks our lemonade is the tastiest in the whole colony. I am not so sure, because Uncle Joseph's kulfi stall is always the busiest one! Still, we are going to try our best. The mela begins at four o'clock sharp.\n\nRead Passage P1. \"Still, we are going to try our best.\" What does this sentence show?",
    options: [
      { id: "a", text: "A plan for the future" },
      { id: "b", text: "A daily habit" },
      { id: "c", text: "An action that is already finished" },
      { id: "d", text: "Someone walking somewhere right now" }
    ],
    answerId: "a",
    explanation: "\"Are going to + verb\" shows a future plan. It does not mean anyone is walking; the trying will happen at the mela.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-b-q04",
    prompt: "Every year, our colony holds a small mela in the park behind the post office. This year, my brother Kabir and I are running a lemonade stall. Last Sunday, we painted a bright yellow sign and borrowed six glass jars from Mrs. Iyer. Right now, Kabir is squeezing lemons, and I am counting paper cups. Our cousin Zoya will bring mint leaves tomorrow morning. She grows them in pots on her balcony. Kabir thinks our lemonade is the tastiest in the whole colony. I am not so sure, because Uncle Joseph's kulfi stall is always the busiest one! Still, we are going to try our best. The mela begins at four o'clock sharp.\n\nRead Passage P1. Fill in the blank with the correct form of the verb.\n\"The mela ___ at four o'clock sharp.\"",
    options: [
      { id: "a", text: "begin" },
      { id: "b", text: "beginning" },
      { id: "c", text: "begins" },
      { id: "d", text: "are beginning" }
    ],
    answerId: "c",
    explanation: "\"The mela\" is one thing, a singular subject. In the simple present, singular subjects take a verb ending in -s.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-b-q05",
    prompt: "**Guide:** Look carefully, children. That heron is standing very still.\n**Neha:** Why is it so quiet?\n**Guide:** It is waiting for a fish. Herons hunt patiently.\n**Sam:** Those ducks are much noisier than the heron!\n**Guide:** Yes, and the geese are the noisiest birds here. Each goose honks loudly when someone comes near.\n**Neha:** Who feeds them?\n**Guide:** Nobody feeds them. They find their own food in the lake.\n**Sam:** I will draw the heron in my notebook tonight.\n**Neha:** And I am going to write a poem about the geese!\n\nRead Passage P2. Which form of \"noisy\" from the passage is in the COMPARATIVE degree?",
    options: [
      { id: "a", text: "noisier" },
      { id: "b", text: "noisy" },
      { id: "c", text: "noisiest" },
      { id: "d", text: "noise" }
    ],
    answerId: "a",
    explanation: "The comparative compares two things, often with \"than.\" \"The ducks are noisier than the heron.\" Y changes to i before -er.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-b-q06",
    prompt: "**Guide:** Look carefully, children. That heron is standing very still.\n**Neha:** Why is it so quiet?\n**Guide:** It is waiting for a fish. Herons hunt patiently.\n**Sam:** Those ducks are much noisier than the heron!\n**Guide:** Yes, and the geese are the noisiest birds here. Each goose honks loudly when someone comes near.\n**Neha:** Who feeds them?\n**Guide:** Nobody feeds them. They find their own food in the lake.\n**Sam:** I will draw the heron in my notebook tonight.\n**Neha:** And I am going to write a poem about the geese!\n\nRead Passage P2. Neha asks, \"Who feeds them?\" Who does \"them\" refer to?",
    options: [
      { id: "a", text: "The children" },
      { id: "b", text: "The fish" },
      { id: "c", text: "The guides" },
      { id: "d", text: "The geese" }
    ],
    answerId: "d",
    explanation: "The guide has just been talking about the geese honking. Neha's \"them\" points back to those birds.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-b-q07",
    prompt: "**Guide:** Look carefully, children. That heron is standing very still.\n**Neha:** Why is it so quiet?\n**Guide:** It is waiting for a fish. Herons hunt patiently.\n**Sam:** Those ducks are much noisier than the heron!\n**Guide:** Yes, and the geese are the noisiest birds here. Each goose honks loudly when someone comes near.\n**Neha:** Who feeds them?\n**Guide:** Nobody feeds them. They find their own food in the lake.\n**Sam:** I will draw the heron in my notebook tonight.\n**Neha:** And I am going to write a poem about the geese!\n\nRead Passage P2. \"I will draw the heron in my notebook tonight.\" Which tense is used?",
    options: [
      { id: "a", text: "Simple past" },
      { id: "b", text: "Simple future" },
      { id: "c", text: "Present continuous" },
      { id: "d", text: "Past continuous" }
    ],
    answerId: "b",
    explanation: "\"Will + base verb\" forms the simple future. \"Tonight\" confirms the drawing hasn't happened yet.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-b-q08",
    prompt: "Grandpa's bicycle is older than my father. It has a rusty bell, a wide leather seat and a basket that once carried vegetables from the market every day. Yesterday, Grandpa and I cleaned it together. He oiled the chain carefully while I polished the handlebars. \"This bicycle took me to my first job,\" he said proudly. \"It carried your grandmother to her school, where she taught for thirty years.\" I tried to ride it, but my feet barely touched the pedals. Grandpa laughed gently. \"You will grow into it,\" he promised. Today, the bicycle stands in the courtyard, shining like new. It is the most beautiful thing in our house.\n\nRead Passage P3. Which verb from the passage is in the simple past tense?",
    options: [
      { id: "a", text: "stands" },
      { id: "b", text: "will grow" },
      { id: "c", text: "cleaned" },
      { id: "d", text: "is" }
    ],
    answerId: "c",
    explanation: "\"Yesterday, Grandpa and I cleaned it.\" Regular verbs add -ed for the simple past. The others are present or future.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-b-q09",
    prompt: "Choose the adverb that best completes the sentence.\n\"The baby slept ___ in her cradle.\"",
    options: [
      { id: "a", text: "peaceful" },
      { id: "b", text: "peace" },
      { id: "c", text: "peaceable" },
      { id: "d", text: "peacefully" }
    ],
    answerId: "d",
    explanation: "We need a word that tells how the baby slept. Adding -ly to the adjective \"peaceful\" makes the adverb \"peacefully.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-b-q10",
    prompt: "Which of these is a common noun?",
    options: [
      { id: "a", text: "city" },
      { id: "b", text: "Delhi" },
      { id: "c", text: "Ganga" },
      { id: "d", text: "Monday" }
    ],
    answerId: "a",
    explanation: "A common noun is a general name and has no capital letter. \"City\" could be any city; \"Delhi\" names one particular city.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-b-q11",
    prompt: "What is the plural of \"knife\"?",
    options: [
      { id: "a", text: "knifes" },
      { id: "b", text: "knive" },
      { id: "c", text: "knives" },
      { id: "d", text: "knifs" }
    ],
    answerId: "c",
    explanation: "Many nouns ending in -f or -fe change to -ves in the plural: knife to knives, leaf to leaves, wolf to wolves.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-b-q12",
    prompt: "What is the feminine form of \"lion\"? Choose the correct spelling.",
    options: [
      { id: "a", text: "lionness" },
      { id: "b", text: "lioness" },
      { id: "c", text: "lionee" },
      { id: "d", text: "lionest" }
    ],
    answerId: "b",
    explanation: "Add \"-ess\" to \"lion\" to make \"lioness,\" with one n before -ess. The same pattern gives host to hostess.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-b-q13",
    prompt: "Choose the correct pronoun.\n\"Is this your umbrella or ___?\"",
    options: [
      { id: "a", text: "theirs" },
      { id: "b", text: "their" },
      { id: "c", text: "them" },
      { id: "d", text: "they" }
    ],
    answerId: "a",
    explanation: "The blank stands alone with no noun after it, so we need a possessive pronoun: theirs. \"Their\" must be followed by a noun.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-b-q14",
    prompt: "Choose the correct pronoun.\n\"Mother gave the sweets to Arjun and ___.\"",
    options: [
      { id: "a", text: "I" },
      { id: "b", text: "mine" },
      { id: "c", text: "me" },
      { id: "d", text: "myself" }
    ],
    answerId: "c",
    explanation: "Remove \"Arjun and\" to test it: \"Mother gave the sweets to me.\" After words like \"to,\" use object pronouns (me, him, her).",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-b-q15",
    prompt: "Fill in the blank with the correct form of \"hot.\"\n\"Today is the ___ day of the year so far.\"",
    options: [
      { id: "a", text: "hotest" },
      { id: "b", text: "more hot" },
      { id: "c", text: "hotter" },
      { id: "d", text: "hottest" }
    ],
    answerId: "d",
    explanation: "\"The ___ of the year\" needs the superlative. Short words ending in one vowel and one consonant double the consonant: hot, hotter, hottest.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-b-q16",
    prompt: "Fill in the blank.\n\"My cold is ___ today than it was yesterday.\"",
    options: [
      { id: "a", text: "badder" },
      { id: "b", text: "worse" },
      { id: "c", text: "worst" },
      { id: "d", text: "more bad" }
    ],
    answerId: "b",
    explanation: "\"Bad\" is irregular: bad, worse, worst. \"Than\" means we are comparing two days, so we use the comparative \"worse.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-b-q17",
    prompt: "Choose the correct verb.\n\"The sun ___ in the east.\"",
    options: [
      { id: "a", text: "rising" },
      { id: "b", text: "rose" },
      { id: "c", text: "rises" },
      { id: "d", text: "is rise" }
    ],
    answerId: "c",
    explanation: "The simple present is used for facts that are always true. With a singular subject like \"the sun,\" add -s.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-b-q18",
    prompt: "Choose the correct verb.\n\"While we ___ dinner, the doorbell rang.\"",
    options: [
      { id: "a", text: "eat" },
      { id: "b", text: "were eating" },
      { id: "c", text: "are eating" },
      { id: "d", text: "will eat" }
    ],
    answerId: "b",
    explanation: "Dinner was in progress when the bell rang, and both happened in the past. The past continuous \"were eating\" shows the longer action.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-b-q19",
    prompt: "Fill in the blank.\n\"I'm so thirsty!\" \"Sit down, I ___ get you some water.\"",
    options: [
      { id: "a", text: "will" },
      { id: "b", text: "was" },
      { id: "c", text: "did" },
      { id: "d", text: "am" }
    ],
    answerId: "a",
    explanation: "Use \"will\" for a decision or offer made at the moment of speaking. The speaker decides to help right then.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-b-q20",
    prompt: "Choose the correct verb.\n\"The bunch of bananas ___ on the kitchen table.\"",
    options: [
      { id: "a", text: "are" },
      { id: "b", text: "were" },
      { id: "c", text: "have" },
      { id: "d", text: "is" }
    ],
    answerId: "d",
    explanation: "The real subject is \"bunch,\" one group, not \"bananas.\" A singular subject takes \"is.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-b-q21",
    prompt: "The sentence is split into four parts. Which part has an error?\n\"The tortoise / walked / across the road / very slow.\"",
    options: [
      { id: "a", text: "The tortoise" },
      { id: "b", text: "walked" },
      { id: "c", text: "across the road" },
      { id: "d", text: "very slow" }
    ],
    answerId: "d",
    explanation: "To describe how it walked, we need an adverb: \"very slowly.\" \"Slow\" is an adjective, as in \"a slow tortoise.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-b-q22",
    prompt: "Choose the adverb that fits the meaning.\n\"Ravi ___ forgets his lunchbox. He is very careful.\"",
    options: [
      { id: "a", text: "always" },
      { id: "b", text: "often" },
      { id: "c", text: "never" },
      { id: "d", text: "usually" }
    ],
    answerId: "c",
    explanation: "The second sentence is the clue. A very careful boy would not forget things, so \"never\" is the right adverb of frequency.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-b-q23",
    prompt: "Which sentence is correct?",
    options: [
      { id: "a", text: "The childrens are singing." },
      { id: "b", text: "The children are singing." },
      { id: "c", text: "The children is singing." },
      { id: "d", text: "The childs are singing." }
    ],
    answerId: "b",
    explanation: "\"Children\" is already plural, so never add -s. A plural subject takes \"are.\"",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  },
  {
    id: "g5-eng-ch02-b-q24",
    prompt: "In which sentence is the word \"light\" used as an ADJECTIVE?",
    options: [
      { id: "a", text: "Please carry this light bag for me." },
      { id: "b", text: "Please light the lamp before evening." },
      { id: "c", text: "The light in the room is too bright." },
      { id: "d", text: "Light travels faster than sound." }
    ],
    answerId: "a",
    explanation: "An adjective describes a noun. In A, \"light\" describes the bag. In B it is a verb, and in C and D it is a noun.",
    hints: ["Look for clues in the text.", "Eliminate unsupported answers."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "\ud83e\uddf1",
    title: "Word builders",
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
    cta: "Let's go!",
    visual: "sentence",
    speak: "Every word has a job: nouns, pronouns, adjectives, verbs and adverbs.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "sentence",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Nouns", reveal: "Name people, places, ideas", emoji: "\ud83d\udcdb" },
      { label: "Pronouns", reveal: "Stand in for nouns", emoji: "\ud83d\udd01" },
      { label: "Adjectives", reveal: "Describe nouns", emoji: "\ud83c\udfa8" },
      { label: "Verbs and adverbs", reveal: "Action plus how/when/where", emoji: "\u26a1" }
    ],
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
    prompt: "In \"Mira quickly packed,\" which is an adverb?",
    options: [
        { id: "a", text: "Mira" },
        { id: "b", text: "quickly" },
        { id: "c", text: "packed" },
        { id: "d", text: "bag" }
    ],
    answerId: "b",
    why: "Quickly tells how she packed.",
    visual: "sentence",
    speak: "In \"Mira quickly packed,\" which is an adverb?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Nice work!",
    bullets: ["Know each word job", "Subject-verb agree", "Compare carefully", "Sets ready"],
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];

export const g5EnglishGrammar: ChapterDef = {
  id: "word-builders",
  title: "Word Builders",
  emoji: "\ud83e\uddf1",
  blurb: "Grammar comes alive",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "grammar",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "grammar",
      questions: SET_B,
    },
  ],
  paperTopics: ["grammar", "vocabulary"],
};

export const g5EnglishGrammarQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
