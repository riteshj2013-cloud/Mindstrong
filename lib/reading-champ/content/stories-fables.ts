import { adaptedSource, g, makeStory, q } from "./script";

const AESOP = "https://www.gutenberg.org/ebooks/21";
const PANCHA = "https://archive.org/details/in.ernet.dli.2015.37110";
const JATAKA = "https://www.gutenberg.org/ebooks/51880";

const aesopNote = "Do not brand this with Project Gutenberg. The link is the traditional public-domain text. These words are a new retelling.";

export const FABLE_STORIES = [
  makeStory({
    id: "aesop-tortoise-hare",
    title: "The Tortoise and the Hare",
    seriesId: "shared-fables",
    episode: 1,
    genre: "fiction",
    subgenre: "fable",
    themes: ["kindness", "animals"],
    ladderLevel: 5,
    expectedMinutes: 6,
    stretchEligible: false,
    glossary: [g("steady", "Slow and even, not stopping."), g("boast", "To talk as if you cannot lose.")],
    talkAbout: "The hare was fast and still lost. When does slow and steady help you?",
    comprehension: [
      q("Who won the race?", [["tortoise", "The tortoise", "🐢"], ["hare", "The hare", "🐰"], ["bird", "A bird", "🐦"]], "tortoise", "recall"),
      q("Why did the hare lose?", [["nap", "He stopped for a nap", "😴"], ["mud", "He got lost in mud", "🌧️"], ["tie", "His shoes fell off", "👟"]], "nap", "inference"),
    ],
    source: adaptedSource(
      "Original retelling of the public-domain fable “The Tortoise and the Hare,” attributed to Aesop.",
      AESOP,
      aesopNote,
    ),
    script: `
# page
meadow tortoise,hare
Hare: I am fast, and you are slow.
Tortoise: I am steady, so let us race.

# page
meadow hare
caption: Hare liked to boast about his legs.
Hare: I will nap and still win.

# page
meadow tortoise
caption: Tortoise started at a calm walk.
Tortoise: One step, then the next.

# page
forest hare
caption: Hare ran far ahead and lay down.
Hare: There is lots of time.

# page
meadow tortoise
caption: Tortoise passed the sleeping hare.
Tortoise: I will not stop yet.

# page
forest hare
caption: Hare woke and saw an empty path.
Hare: Where did that slow walker go?

# page
meadow tortoise,hare
caption: Tortoise was near the end mark.
Hare: I can still dash past.

# page
meadow tortoise
caption: Hare ran hard, but the mark was close.
Tortoise: I kept my steady pace.

# page
meadow tortoise,hare
Hare: You won, and I stopped too long.
Tortoise: Fast is fine, and stopping cost you.

# page
garden tortoise,hare
caption: They walked home side by side.
Hare: Next time I will stay with the race.
`,
  }),
  makeStory({
    id: "aesop-lion-mouse",
    title: "The Lion and the Mouse",
    seriesId: "shared-fables",
    episode: 2,
    genre: "fiction",
    subgenre: "fable",
    themes: ["kindness", "animals"],
    ladderLevel: 6,
    expectedMinutes: 7,
    stretchEligible: false,
    glossary: [g("mercy", "Kindness when you could be harsh."), g("gnaw", "To chew through something bit by bit."), g("net", "A trap made of rope.")],
    talkAbout: "The mouse was small and still helped. When has a small person helped you?",
    comprehension: [
      q("What did the lion do when the mouse woke him?", [["let", "He let the mouse go", "🤝"], ["ate", "He ate the mouse", "🍽️"], ["hid", "He hid in a tree", "🌳"]], "let", "recall"),
      q("How did the mouse help later?", [["rope", "He gnawed the net", "🐭"], ["roar", "He roared louder", "📣"], ["ran", "He ran away", "🏃"]], "rope", "inference"),
    ],
    source: adaptedSource(
      "Original retelling of the public-domain fable “The Lion and the Mouse,” attributed to Aesop.",
      AESOP,
      aesopNote,
    ),
    script: `
# page
savanna lion
caption: Lion slept in the warm grass.
Mouse: Oh! I did not see his paw.

# page
savanna lion,mouse
Lion: A mouse woke me, and I could be harsh.
Mouse: Please show mercy, since I meant no harm.

# page
savanna lion,mouse
caption: Lion looked at the tiny shaker.
Lion: Go. You are too small to be a meal.

# page
meadow mouse
Mouse: Thank you. I will not forget.
caption: The mouse ran into the grass.

# page
savanna lion
caption: Days later, ropes held Lion down.
Lion: A net. I cannot pull free.

# page
savanna mouse,lion
Mouse: I heard you roar. I came back.
Lion: These ropes are thick.

# page
savanna mouse
caption: The mouse began to gnaw one rope.
Mouse: Small teeth can still cut.

# page
savanna lion,mouse
caption: Strand by strand, the net loosened.
Lion: I can move a paw.

# page
meadow lion,mouse
Lion: You freed me. Mercy came back as help.
Mouse: You let me go when you did not have to.

# page
savanna lion,mouse
caption: They rested in the same patch of shade.
Lion: Small and large can care for each other.
`,
  }),
  makeStory({
    id: "jataka-tortoise",
    title: "The Tortoise Who Let Go",
    seriesId: "shared-fables",
    episode: 3,
    genre: "fiction",
    subgenre: "fable",
    themes: ["kindness", "animals"],
    ladderLevel: 7,
    expectedMinutes: 8,
    stretchEligible: false,
    glossary: [g("grip", "A firm hold."), g("pond", "A small pool of water."), g("reply", "To answer someone.")],
    talkAbout: "The tortoise wanted to reply in the air. When is it wiser to wait before you speak?",
    comprehension: [
      q("How did the ducks carry the tortoise?", [["stick", "He held a stick in his mouth", "🪵"], ["bag", "In a bag", "👜"], ["boat", "On a boat", "⛵"]], "stick", "recall"),
      q("Why did he fall?", [["talk", "He opened his mouth to reply", "💬"], ["rain", "Rain pushed him", "🌧️"], ["sleep", "He fell asleep", "😴"]], "talk", "inference"),
    ],
    source: adaptedSource(
      "Original retelling of the Kacchapa Jataka, “The Talkative Tortoise,” a public-domain birth story.",
      JATAKA,
      "The old telling has the tortoise fall and die. This version keeps the lesson and lands him safely in a pond. Do not copy the source edition’s wording. Do not brand with Project Gutenberg.",
    ),
    script: `
# page
pond tortoise,duck
Tortoise: I want to see the far pond.
Duck: We can carry you if you keep a grip.

# page
pond duck,duck
caption: The ducks held a stick between them.
Duck: Bite the middle. Do not reply to anyone.

# page
sky tortoise,duck
caption: They lifted off. The town looked small.
Tortoise: I will keep my mouth shut.

# page
village tortoise,duck
caption: People below looked up and laughed.
caption: Two ducks are carrying a tortoise.

# page
sky tortoise
caption: The tortoise wanted to reply.
Tortoise: I must tell them this was my idea.

# page
sky duck,tortoise
Duck: Hold on. We are still high.
caption: He opened his mouth anyway.

# page
pond tortoise
caption: He let go of the stick and fell.
caption: A soft pond caught him with a splash.

# page
pond duck,tortoise
Duck: You are safe, but you are wet.
Tortoise: I wanted the last word.

# page
pond tortoise,duck
Duck: A reply can wait until you land.
Tortoise: My grip mattered more than my point.

# page
meadow tortoise,duck
caption: They tried again the next day, and he stayed quiet.
Tortoise: I will speak when my feet touch ground.
`,
  }),
  makeStory({
    id: "aesop-ant",
    title: "The Ant and the Grasshopper",
    seriesId: "shared-fables",
    episode: 4,
    genre: "fiction",
    subgenre: "fable",
    themes: ["kindness", "animals"],
    ladderLevel: 7,
    expectedMinutes: 8,
    stretchEligible: true,
    glossary: [g("store", "To put something away for later."), g("grasshopper", "A green insect with long jumping legs."), g("winter", "The cold season.")],
    talkAbout: "The ant shared, and the grasshopper helped afterward. What is a fair way to share work?",
    comprehension: [
      q("What did the ant do all summer?", [["food", "Stored food", "🌾"], ["sang", "Only sang", "🎵"], ["slept", "Slept all day", "😴"]], "food", "recall"),
      q("What happened in winter?", [["share", "The ant shared, and the hopper helped", "🤝"], ["left", "The ant left town", "🚂"], ["melt", "The food melted", "💧"]], "share", "inference"),
    ],
    source: adaptedSource(
      "Original retelling of the public-domain fable “The Ant and the Grasshopper,” attributed to Aesop.",
      AESOP,
      "Many old tellings refuse to share. This one lets the ant share a meal, and the grasshopper helps next. " + aesopNote,
    ),
    script: `
# page
meadow ant,hopper
Hopper: Come sing. The day is warm.
Ant: I need to store food before winter.

# page
garden ant
caption: The ant carried grain, bit by bit.
Ant: A little each day fills the nest.

# page
meadow hopper
caption: The grasshopper played and napped.
Hopper: Winter is far. I will not think of it.

# page
forest ant,hopper
Ant: You could store a little too.
Hopper: Storing is dull. Songs are better.

# page
meadow hopper
caption: The air grew cold. The songs got thin.
Hopper: The grain in the field is gone.

# page
burrow ant,hopper
Hopper: I am hungry, and I did not store.
Ant: Come in, and we can share one meal.

# page
burrow ant
caption: The ant set out a small pile.
Ant: Sharing is kind. Next time, help me gather.

# page
burrow hopper
Hopper: I can sweep and sort.
caption: The grasshopper worked until the nest was tidy.

# page
meadow ant,hopper
Ant: Winter is easier when we both plan.
Hopper: I will store a little and still sing.

# page
garden ant,hopper
caption: They put a few seeds away side by side.
Hopper: Play is good. A plan is good too.
`,
  }),
  makeStory({
    id: "pancha-monkey",
    title: "The Monkey and the Crocodile",
    seriesId: "shared-fables",
    episode: 5,
    genre: "fiction",
    subgenre: "fable",
    themes: ["kindness", "animals"],
    ladderLevel: 8,
    expectedMinutes: 9,
    stretchEligible: true,
    glossary: [
      g("crocodile", "A long reptile that lives in rivers."),
      g("heart", "Here, the monkey's life, which the crocodile wanted."),
      g("riverbank", "The land at the edge of a river."),
    ],
    talkAbout: "The monkey noticed the danger and thought fast. What is a safe way to leave a friend who is not being safe?",
    comprehension: [
      q("What did the crocodile say in the river?", [["heart", "He wanted the monkey's heart", "💔"], ["song", "He wanted a song", "🎵"], ["map", "He wanted a map", "🗺️"]], "heart", "recall"),
      q("How did the monkey get away?", [["tree", "He said his heart was in the tree", "🌳"], ["swim", "He swam across the sea", "🌊"], ["net", "He called a lion", "🦁"]], "tree", "inference"),
    ],
    source: adaptedSource(
      "Original retelling of a public-domain Panchatantra tale about a monkey and a crocodile.",
      PANCHA,
      "The 1925 Ryder translation is in the public domain. This comic does not copy that wording. The wife’s wish is told gently for ages 8–10.",
    ),
    script: `
# page
river monkey,croc
caption: A monkey and a crocodile met often on the riverbank.
Monkey: I will share these sweet fruits.

# page
forest monkey,croc
Croc: My wife wants to meet you.
Monkey: I cannot swim. How would I cross?

# page
river croc
caption: The crocodile let the monkey ride on his back.
Croc: Hold still. The water is deep in the middle.

# page
river monkey,croc
Monkey: You are very quiet today.
Croc: My wife thinks a monkey heart would make her strong.

# page
river monkey
caption: The monkey hid his fear and kept his voice calm.
Monkey: Oh. My heart is not with me.

# page
river croc,monkey
Croc: Where is it?
Monkey: I left it in the tree on the riverbank.

# page
river monkey,croc
caption: The crocodile turned back, greedy and unsure.
Monkey: I can fetch it if you take me to that tree.

# page
forest monkey
caption: At the bank, the monkey climbed fast and stayed up high.
Monkey: My heart was here all along. I will not ride again.

# page
river croc
Croc: You tricked me.
Monkey: You hid a plan that would hurt me.

# page
forest monkey,croc
caption: The crocodile could not reach the high branch.
Monkey: A friend does not carry you toward harm.

# page
river monkey
caption: He threw fruit down, but he did not come down.
Monkey: We can talk from here. I will not cross with you.

# page
forest monkey
caption: The monkey told the other animals what had happened.
Monkey: Quick thinking got me home. Trust still has to be earned.
`,
  }),
  makeStory({
    id: "pancha-jackal",
    title: "The Blue Jackal",
    seriesId: "shared-fables",
    episode: 6,
    genre: "fiction",
    subgenre: "fable",
    themes: ["kindness", "animals"],
    ladderLevel: 9,
    expectedMinutes: 10,
    stretchEligible: false,
    glossary: [
      g("jackal", "A wild dog that lives in a group."),
      g("dye", "A color that soaks into fur or cloth."),
      g("pretend", "To act like something you are not."),
    ],
    talkAbout: "The blue color washed off. Why is pretending to be someone else a hard job to keep up?",
    comprehension: [
      q("Why did the animals obey at first?", [["blue", "He looked like a strange blue king", "🔵"], ["gold", "He paid them gold", "💰"], ["map", "He had a map", "🗺️"]], "blue", "recall"),
      q("What showed the truth?", [["rain", "Rain washed the dye off", "🌧️"], ["book", "A book told them", "📘"], ["song", "He sang his name", "🎵"]], "rain", "inference"),
    ],
    source: adaptedSource(
      "Original retelling of the public-domain Panchatantra tale of the blue jackal.",
      PANCHA,
      "The 1925 Ryder translation is in the public domain. This comic does not copy that wording.",
    ),
    script: `
# page
market jackal
caption: A hungry jackal slipped into a market and fell into a pot of blue dye.
Jackal: I cannot see. Everything drips.

# page
forest bluejackal
caption: He ran to the forest. The blue did not wipe off.
Jackal: If they see me like this, they may not know me.

# page
forest bluejackal,lion
Lion: What are you? You are not a lion, and you are not a usual jackal.
Bluejackal: I am a new king. Obey me.

# page
savanna bluejackal,hare
caption: The animals were unsure, so they obeyed.
Hare: He is blue. Maybe he really is set over us.

# page
forest bluejackal
caption: The jackal liked the bows and the first share of food.
Jackal: Send the other jackals away. Their howls annoy me.

# page
meadow jackal
caption: His own family left, sad and confused.
Jackal: He wants to pretend he never ran with us.

# page
forest bluejackal,lion
Lion: A king who fears his own kind is odd.
Bluejackal: Do not question me. I am not one of them.

# page
sky bluejackal
caption: Rain came hard and long.
caption: The dye ran down his legs in blue streams.

# page
meadow jackal,lion
Lion: You are a jackal. The color was dye.
Jackal: I wanted to be more than I am.

# page
forest jackal
caption: The animals stepped back. No one bowed.
Lion: Pretend can last only until the truth shows.

# page
meadow jackal
caption: He found his family at the edge of the trees.
Jackal: I sent you away. That was wrong.

# page
forest jackal
caption: They let him walk with them, but not at the front.
Jackal: I would rather be a real jackal than a blue pretend king.
`,
  }),
];
