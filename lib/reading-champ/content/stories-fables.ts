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
Hare: You are slow and I am fast.
Tortoise: Then we can race and see.

# page
meadow tortoise,hare
Hare: My boast is true on this path.
Tortoise: Pick a mark and we start.

# page
meadow tortoise
Tortoise: I am steady and will not stop.
caption: He set his feet on the path.

# page
meadow hare
Hare: I can nap and still win this.
caption: Hare laughed and shook his long legs.

# page
meadow tortoise,hare
Hare: Go now and try to catch me.
Tortoise: I start with one calm step.

# page
forest hare
caption: Hare ran far ahead of the start.
Hare: This race will be easy for me.

# page
forest tortoise
caption: Tortoise took one step then another.
Tortoise: Slow steps can still reach the end.

# page
forest hare
caption: Hare was far ahead by the trees.
Hare: I see no need to rush now.

# page
forest hare
Hare: A short nap will not cost me.
caption: He lay down in the warm shade.

# page
forest hare
caption: Hare shut his eyes and soon slept.
Hare: There is lots of time to rest.

# page
meadow tortoise
caption: Tortoise walked on under the hot sun.
Tortoise: I will not stop for a rest.

# page
meadow tortoise
Tortoise: Step after step I stay on course.
caption: His pace did not change at all.

# page
forest hare
caption: A bird saw Hare fast asleep.
caption: The bird kept still and watched.

# page
meadow tortoise,hare
caption: Tortoise came near the sleeping hare.
Tortoise: He can rest while I go past.

# page
meadow tortoise
caption: Tortoise went past the still hare.
Tortoise: I must get to the end mark.

# page
meadow tortoise
Tortoise: The end mark is not far now.
caption: He kept his eyes on the path.

# page
forest hare
caption: Hare woke and sat up fast.
Hare: I feel ready to run again.

# page
forest hare
Hare: Where is that slow walker now?
caption: The path ahead of him looked empty.

# page
forest hare
Hare: He must still be far behind me.
caption: Hare did not look back at first.

# page
meadow hare
caption: Then Hare ran hard toward the mark.
Hare: I can still get there first.

# page
meadow tortoise,hare
caption: Tortoise was close to the end mark.
Hare: Wait there so I can pass you.

# page
meadow tortoise
Tortoise: I did not wait on the way.
caption: His last steps were slow but sure.

# page
meadow tortoise,hare
caption: Tortoise crossed the end mark first.
Hare: No, that cannot be the end.

# page
meadow hare
Hare: How did you get here so soon?
caption: Hare stood still and stared at him.

# page
meadow tortoise,hare
Tortoise: You took a nap on the path.
Hare: I thought there was time to spare.

# page
meadow tortoise
Tortoise: Steady steps beat a long nap.
caption: Tortoise did not boast about the win.

# page
forest hare
Hare: My boast made me far too sure.
caption: He looked back at the warm shade.

# page
meadow tortoise,hare
Tortoise: Fast legs still need to stay on.
Hare: I left the race for a rest.

# page
meadow hare
Hare: That nap was my big mistake.
caption: Hare sat down beside the mark.

# page
meadow tortoise
Tortoise: I am glad we raced today.
caption: Tortoise gave him a small smile.

# page
meadow tortoise,hare
Hare: You won and you were fair.
Tortoise: I just kept going to the end.

# page
meadow hare
Hare: Next time I will not nap.
caption: He said it and he meant it.

# page
forest tortoise,hare
caption: They walked back into the trees.
Tortoise: We can race on a new day.

# page
forest hare
Hare: I will run the whole path.
caption: Hare no longer wanted a nap.

# page
meadow tortoise
Tortoise: A steady pace is my own way.
caption: Tortoise liked the calm walk home.

# page
meadow hare,tortoise
Hare: I can be fast and still stay.
Tortoise: Then the race stays fair for both.

# page
meadow tortoise,hare
caption: A bird met them on the path.
Hare: Tell him the slow one won.

# page
meadow tortoise
Tortoise: Tell him the nap lost the race.
caption: The bird nodded and flew off.

# page
forest tortoise,hare
Hare: I will not boast on the way.
Tortoise: Good, and I will stay steady.

# page
meadow tortoise,hare
caption: They went home side by side.
Tortoise: Steady steps can win a race.
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
savanna lion,mouse
caption: Lion slept in the tall warm grass.
Mouse: I did not see his big paw.

# page
savanna lion,mouse
Lion: Who ran across my paw just now?
Mouse: It was me and I am sorry.

# page
savanna lion,mouse
Lion: A small mouse woke me from sleep.
Mouse: Please do not be harsh with me.

# page
savanna lion,mouse
Mouse: I ask for mercy from you.
Lion: Why should I show you mercy?

# page
savanna mouse
Mouse: I meant no harm on your paw.
caption: The mouse shook in the dry grass.

# page
savanna lion
Lion: You are small but you woke me.
caption: Lion lifted one paw in the air.

# page
savanna lion,mouse
Mouse: Let me go and I can help.
Lion: How can a mouse help a lion?

# page
savanna lion,mouse
Lion: You are too small to be food.
Mouse: Then let me go free today.

# page
savanna lion,mouse
caption: Lion looked at the small mouse.
Lion: Go now and stay out of harm.

# page
savanna mouse
Mouse: Thank you for this kind mercy.
caption: The mouse ran off into the grass.

# page
forest mouse
caption: A bird saw Lion let him go.
Mouse: I will not forget this kind day.

# page
forest mouse
Mouse: One day I may pay him back.
caption: The bird flew off into the trees.

# page
savanna lion
caption: Lion lay back down in the sun.
Lion: A mouse is no meal for me.

# page
savanna lion
caption: Many days passed on the warm grass.
Lion: That mouse is gone from my mind.

# page
forest lion
caption: Thick ropes lay in a hidden net.
Lion: What is this rope across the path?

# page
forest lion
caption: Lion stepped into the rope net.
Lion: This net pulled tight around me.

# page
forest lion
Lion: I cannot pull my legs free.
caption: The net held him down on the ground.

# page
forest lion
Lion: I roar but no help comes.
caption: His loud roar rang through the trees.

# page
forest mouse
caption: The mouse heard that roar far off.
Mouse: That is Lion and he needs help.

# page
forest mouse
Mouse: He let me go on that first day.
caption: The mouse ran toward the loud roar.

# page
forest lion,mouse
Mouse: I came back as I said I would.
Lion: This net is thick and I am stuck.

# page
forest mouse,lion
Mouse: I can gnaw the rope bit by bit.
Lion: Your teeth look small for this net.

# page
forest mouse
caption: The mouse began to gnaw a rope.
Mouse: I will not stop until you are free.

# page
forest lion,mouse
Lion: Keep at it and do not fear.
caption: Bit by bit the net grew loose.

# page
forest mouse
Mouse: One rope is cut and more will go.
caption: His teeth worked on the next rope.

# page
forest lion
Lion: I can move a paw at last.
caption: The net slid off on one side.

# page
forest mouse,lion
Mouse: Stay still so I can reach the knot.
Lion: I will stay still for you.

# page
forest mouse
caption: He kept on until the knot gave way.
Mouse: The net is open on this side.

# page
forest lion,mouse
caption: Lion stood up free of the net.
Lion: You cut each rope that held me.

# page
savanna lion,mouse
Lion: You freed me when I could not move.
Mouse: You showed mercy when you let me go.

# page
savanna lion,mouse
Mouse: Small teeth can still cut a net.
Lion: I did not think a mouse could help.

# page
savanna lion,mouse
caption: They rested in the same patch of shade.
Lion: Small and big can care for each other.

# page
savanna mouse
Mouse: I am glad I came back to you.
caption: The mouse sat close by the big paw.

# page
savanna lion
Lion: Mercy came back to me as help.
caption: Lion bent his head down to the mouse.

# page
forest lion,mouse
caption: A bird saw them safe under the shade.
Lion: Tell no one to set a net here.

# page
forest mouse
Mouse: If a net comes I will gnaw it.
caption: The bird nodded from a high branch.

# page
savanna lion,mouse
Lion: I will watch the grass for ropes.
Mouse: And I will watch the trees for you.

# page
savanna lion
caption: Lion let the mouse stand on his paw.
Lion: You are a friend I can trust.

# page
forest mouse,lion
Mouse: I was scared but you were kind.
Lion: I was angry but I let you go.

# page
savanna lion,mouse
caption: They looked out over the warm grass.
Mouse: A small friend can still save a life.

# page
forest lion
Lion: Next time I will look for a net.
caption: He pawed the spot where ropes had been.

# page
savanna mouse
Mouse: And I will come if you roar.
caption: He found the path back to his den.

# page
forest lion,mouse
Lion: We each had a turn to give help.
Mouse: Kind acts come back to true friends.

# page
savanna lion,mouse
caption: Day ended and they shared the cool shade.
Lion: Go safe and come when I call.
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
Tortoise: This pond is too small for me now.
Duck: Where do you hope to go from here?

# page
pond tortoise,duck
Tortoise: I want a far pond with more room.
Duck: We know a wide pond past the town.

# page
pond duck,tortoise
Duck: We can carry you if you hold still.
Tortoise: How can you carry me through the air?

# page
pond duck,duck
caption: The ducks held a long stick between them.
Duck: Bite the stick and keep it in your mouth.

# page
pond tortoise,duck
Tortoise: I will keep a firm grip on it.
Duck: Your grip must last the whole way.

# page
pond duck,tortoise
Duck: Do not reply to the people below.
Tortoise: I can stay quiet if that keeps me safe.

# page
pond tortoise
Tortoise: I will not open my mouth to reply.
caption: He set his jaw firm on the stick.

# page
sky duck,tortoise
caption: The ducks rose and the pond fell away.
Tortoise: I will keep my mouth shut up here.

# page
sky tortoise,duck
caption: Wind slid past his face as they flew.
Duck: Hold the stick and trust your grip.

# page
sky duck,duck
Duck: We are high over the trees now.
caption: The town below looked small under them.

# page
village tortoise,duck
caption: People in the village looked up at them.
Duck: They see us so you must not talk.

# page
village duck,tortoise
caption: A child pointed up and began to laugh.
caption: Two ducks are lifting a tortoise high.

# page
village tortoise,duck
caption: More people came out of their homes.
Tortoise: They think this trip was not my plan.

# page
village duck,duck
caption: A man called the sight a big joke.
caption: The laughs grew loud under the ducks.

# page
sky tortoise
caption: The tortoise wanted to reply right then.
Tortoise: I must tell them this was my idea.

# page
sky duck,tortoise
Duck: Hold on since we are still high.
caption: His grip was all that kept him up.

# page
sky tortoise
Tortoise: They should know I asked for this ride.
caption: He forgot the warning about a reply.

# page
sky duck
Duck: If you reply you could fall from here.
caption: The duck felt the stick shift a bit.

# page
sky tortoise,duck
Tortoise: I need one short reply for them.
Duck: Not now while your mouth holds the stick.

# page
village tortoise,duck
caption: A boy yelled that the tortoise looked silly.
caption: Those words rose up to his ears.

# page
sky tortoise
Tortoise: I am not silly and I can talk.
caption: Pride swelled in him as the laughs rose.

# page
sky duck,tortoise
Duck: Please keep your grip and stay still.
caption: He opened his mouth to reply.

# page
sky tortoise
caption: The stick slipped from his open mouth.
Tortoise: I only wanted one short reply.

# page
sky duck
Duck: Hold on but he has let go.
caption: The ducks could not catch him in time.

# page
sky tortoise
caption: He fell through the high blue air.
Tortoise: I should have kept my mouth shut.

# page
pond tortoise
caption: A soft pond waited on the ground below.
caption: He landed in it with a big splash.

# page
pond tortoise
Tortoise: I am wet but I am still safe.
caption: The pond held him up like a soft bed.

# page
pond duck,tortoise
Duck: You are safe because the pond caught you.
Tortoise: I wanted the last word in the air.

# page
pond duck,duck
caption: The ducks came down beside the pond.
Duck: We told you not to reply up there.

# page
pond tortoise,duck
Tortoise: Their loud laughs made me need a reply.
Duck: A reply can wait until you land.

# page
pond tortoise
Tortoise: My grip was worth more than my words.
caption: He sat in the mud and shook hard.

# page
pond duck
Duck: You fell because you let go to talk.
caption: He nodded and looked at the wet stick.

# page
pond tortoise,duck
caption: People from the village ran to the pond.
caption: They saw he was wet but not hurt.

# page
pond tortoise,duck
Tortoise: Tell them I am fine and I learned.
Duck: You learned to wait before you speak.

# page
pond duck,tortoise
Duck: We can try the trip another day.
Tortoise: Next time I will not reply up high.

# page
pond tortoise
Tortoise: I will speak when my feet touch ground.
caption: He tapped the mud with one flat foot.

# page
pond duck,duck
Duck: If you keep your grip we can fly.
caption: They held the stick out for him again.

# page
pond tortoise,duck
Tortoise: I am ready and my mouth will stay shut.
Duck: Good, and do not reply to the laughs.

# page
sky tortoise,duck
caption: They rose again and passed over the village.
Tortoise: I hear them but I will not talk.

# page
sky duck
Duck: Your grip is firm and we are glad.
caption: This time his mouth did not open at all.

# page
pond tortoise,duck
caption: They came down at the far wide pond.
Duck: You made it here and you kept still.

# page
pond tortoise
Tortoise: This pond is wide and I like it.
caption: He let go when his feet hit mud.

# page
pond duck,tortoise
Duck: A reply is safe now that you stand.
Tortoise: Thank you for the ride and the lesson.

# page
pond tortoise
caption: He told the ducks what he had learned.
Tortoise: Waiting to speak kept me safe today.

# page
pond duck
caption: A child from town came to the bank.
Duck: He fell once but the pond saved him.

# page
pond tortoise,duck
Tortoise: I do not need the last word now.
caption: The child waved and ran back to town.

# page
pond tortoise,duck
Duck: Friends can lift you but you must help.
Tortoise: My job was the grip and the quiet.

# page
pond tortoise,duck
caption: They rested by the new pond at dusk.
Tortoise: I can talk now and I choose calm.
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
Hopper: Come sing with me while the day is warm.
Ant: I need to store food before winter.

# page
garden ant
caption: The ant lifted a grain and walked on.
Ant: A little each day will fill the nest.

# page
meadow hopper
caption: The grasshopper played and then took a nap.
Hopper: Winter is far so I will not worry.

# page
garden ant,hopper
Ant: You could store a little food too.
Hopper: Work like that is dull and songs are better.

# page
meadow ant
caption: The ant went back to the grain path.
Ant: I will store more before the sun sets.

# page
garden hopper
Hopper: Listen to this new song I made.
caption: The grasshopper jumped from leaf to leaf.

# page
meadow ant,hopper
Ant: Songs are sweet but winter will still come.
Hopper: I can sing now and store food later.

# page
garden ant
caption: Seed by seed the ant filled a corner.
Ant: This store will matter when the field is bare.

# page
meadow hopper
caption: The grasshopper lay in the sun and laughed.
Hopper: There is food all around me today.

# page
garden ant
Ant: The field will not stay full for long.
caption: She did not stop to rest in the shade.

# page
meadow ant,hopper
Hopper: You work while the whole meadow sings.
Ant: I store now so I can eat later.

# page
garden hopper
caption: A bird saw the grasshopper skip the work.
Hopper: Tell the bird I will plan some day.

# page
meadow ant
caption: The bird saw the ant store one more seed.
Ant: Please let me pass so I can keep on.

# page
garden ant,hopper
Ant: Come carry one seed with me now.
Hopper: One seed is too small to fuss about.

# page
meadow hopper
Hopper: I would rather hop and make a song.
caption: He hopped away across the warm grass.

# page
garden ant
caption: The ant shook her head and went on.
Ant: I will store enough for the cold days.

# page
meadow hopper
caption: Noon heat made the grasshopper slow his song.
Hopper: I can nap and the food will wait.

# page
garden ant
Ant: Food does not wait when the plants dry up.
caption: She packed seeds deep inside the nest.

# page
meadow ant,hopper
Hopper: Your nest must be full of dull seeds.
Ant: Full is good when winter locks the field.

# page
meadow ant
caption: All summer the ant kept the same task.
Ant: I store a bit and then I store more.

# page
garden ant,hopper
Ant: The leaves are dry at the field edge.
Hopper: Dry leaves make a fine beat for a song.

# page
garden ant
caption: The ant looked at the thin grain heads.
Ant: I must store these last seeds soon.

# page
meadow ant,hopper
Ant: The air is cool and the songs are thin.
Hopper: I still have hops left in my legs.

# page
garden hopper
caption: The grasshopper found the field picked clean.
Hopper: Where did all the loose grain go?

# page
meadow ant
caption: Cold wind bent the grass around the nest.
Ant: Winter is here and my store is shut in.

# page
garden hopper
Hopper: I am hungry and the ground is hard.
caption: His song came out small in the cold.

# page
meadow hopper
caption: The grasshopper stood at the nest door.
Hopper: I did not store and now I need food.

# page
burrow ant,hopper
Ant: Come in from the cold and sit down.
Hopper: I was wrong to laugh at your work.

# page
burrow ant
caption: The ant set out a small pile of seeds.
Ant: We can share one meal on this cold day.

# page
burrow hopper
Hopper: You would share even after I played?
caption: He ate slowly and looked at the pile.

# page
burrow ant,hopper
Ant: Sharing is kind and the next part is work.
Hopper: Tell me how a grasshopper can help.

# page
burrow hopper
Hopper: I can sweep the floor and sort the seeds.
caption: The grasshopper worked until the nest was tidy.

# page
burrow ant
Ant: That help makes room for more food.
caption: She moved the pile back into the store.

# page
garden ant,hopper
caption: They went out to the cold garden beds.
Hopper: I see a few seeds the wind missed.

# page
garden ant
Ant: Pick them up and we will store them.
caption: The grasshopper filled his arms with seeds.

# page
meadow ant,hopper
Hopper: My arms are small but I can make trips.
Ant: Many small trips can store a lot.

# page
meadow hopper
caption: He did not stop to sing this time.
Hopper: Work first and then a short song is fine.

# page
garden ant,hopper
Ant: Winter is easier when we both plan.
Hopper: I will store a little and still sing.

# page
burrow ant,hopper
caption: They put the new seeds in a dry cup.
Ant: This cup is our store for the next storm.

# page
burrow hopper
Hopper: I can guard the door when the wind hits.
caption: He packed a leaf over the seed cup.

# page
meadow ant,hopper
caption: A bird saw them share the load.
Ant: Tell the bird the grasshopper helps now.

# page
garden hopper
Hopper: I played all summer and that was my miss.
caption: He said it with a calm small voice.

# page
meadow ant
Ant: You help now and that is the fair part.
caption: She passed him a seed without a frown.

# page
garden ant,hopper
Hopper: Play is good and a plan is good too.
Ant: We can keep both if we store in time.

# page
burrow ant,hopper
caption: At night they ate a small shared meal.
Hopper: Thank you for the meal and the chance.

# page
meadow ant,hopper
caption: Morning frost sat on the grass by the nest.
Ant: Winter can be cold and we are still fed.

# page
garden hopper
caption: The grasshopper sang a soft song after the work.
Hopper: The song is better when the store is safe.

# page
meadow ant,hopper
Ant: Next summer I will store and you will help.
Hopper: Yes, and I will still make room for songs.
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
caption: A monkey and a crocodile met on the riverbank.
Monkey: I will share these sweet fruits with you.

# page
river monkey,croc
Crocodile: Your fruit is the best food I get.
Monkey: Take some home if you would like.

# page
forest monkey,croc
caption: They met by the tree on most warm days.
Crocodile: I like this cool spot under your branches.

# page
forest monkey
Monkey: This high fruit is ripe and sweet.
caption: He dropped a soft fruit down to his friend.

# page
river croc,monkey
Crocodile: My home is on the far side of the water.
Monkey: I have never seen that far bank.

# page
river monkey,croc
Monkey: Who waits for you when you leave here?
Crocodile: My wife sits by our door and watches.

# page
forest monkey
caption: The monkey picked a fresh pile for the trip.
Monkey: Take these to her with my good wish.

# page
river croc
caption: The crocodile swam home with fruit on his snout.
Crocodile: She will smile when she sees this gift.

# page
river croc
caption: His wife ate the fruit and then grew quiet.
Crocodile: She wants more than fruit from that tree.

# page
river croc
Crocodile: She says a monkey heart would make her strong.
caption: He stared at the water and did not smile.

# page
forest croc
caption: The next day he lay on the riverbank alone.
Crocodile: He is my friend and she still asked this.

# page
forest croc
Crocodile: If I hide the plan he may come with me.
caption: That choice sat like a stone in his chest.

# page
river monkey,croc
Crocodile: My wife wants to meet you at our home.
Monkey: I would like to meet her some day.

# page
river monkey
Monkey: I cannot swim and the water looks deep.
caption: He took one step back from the wet edge.

# page
river croc,monkey
Crocodile: Ride on my back and hold on tight.
Monkey: Will you keep to a smooth safe path?

# page
river monkey,croc
caption: A bird on the bank watched them talk.
Monkey: I trust you since we share fruit each day.

# page
river croc
Crocodile: Climb on and we will leave the riverbank.
caption: The bird tilted its head and stayed put.

# page
river monkey,croc
caption: The monkey sat down on the wide rough back.
Crocodile: Hold still while I push off from shore.

# page
river croc,monkey
caption: They moved out and the bank grew small.
Monkey: The water is cold around my feet.

# page
river monkey
Monkey: You are very quiet on this trip.
caption: His hands held the rough back a bit tighter.

# page
river croc
Crocodile: The deep part needs all my care.
caption: He slowed where the river ran dark and wide.

# page
river monkey,croc
Monkey: Why did we stop so far from shore?
Crocodile: I have to tell you a hard thing.

# page
river croc,monkey
Monkey: What hard thing can you not say yet?
Crocodile: My wife wants your heart to make her strong.

# page
river monkey
caption: The monkey hid his fear and stayed calm.
Monkey: Oh, my heart is not with me today.

# page
river croc,monkey
Crocodile: Where is your heart if it is not here?
Monkey: I left it in the tree on the riverbank.

# page
river monkey,croc
caption: The crocodile went still, torn and unsure.
Monkey: Take me back so I can fetch it.

# page
river croc
Crocodile: If your heart is there we must go back.
caption: He swung his long tail and turned toward shore.

# page
river monkey,croc
caption: The bird saw them turn in the deep water.
Monkey: Hurry to the tree and I will get it.

# page
forest monkey,croc
caption: At the riverbank the monkey climbed up fast.
Monkey: My heart was in me the whole time.

# page
forest monkey
caption: He stayed up high on a thick branch.
Monkey: I will not ride on your back again.

# page
river croc,monkey
Crocodile: You tricked me and now I have no prize.
Monkey: You hid a plan that would hurt me.

# page
forest monkey,croc
caption: The crocodile could not reach the high branch.
Monkey: A friend does not carry you toward harm.

# page
forest monkey
caption: He threw a fruit down but he stayed up.
Monkey: We can talk from here and I will not cross.

# page
forest monkey,croc
Crocodile: Come down and we can still be friends.
Monkey: Friends do not lead friends into deep water.

# page
forest monkey,croc
caption: The bird hopped near and heard the whole talk.
Monkey: Tell the trees he asked for my heart.

# page
forest croc
Crocodile: I was wrong to hide what she asked.
caption: He kept his eyes on the mud of the bank.

# page
forest monkey
Monkey: Quick thought got me back to this tree.
caption: He patted the branch as if it were home.

# page
river monkey,croc
Monkey: Trust has to be earned on dry ground.
Crocodile: I will not ask you to ride again.

# page
forest monkey
caption: The monkey tossed more fruit but stayed on the limb.
Monkey: Share food with me from this safe spot.

# page
river croc
Crocodile: I can eat here and leave your heart alone.
caption: He let the fruit sit and did not lunge.

# page
forest monkey,croc
Monkey: If you are sorry then show it each day.
Crocodile: I will come to the riverbank and only talk.

# page
river monkey
caption: Days later the crocodile waited under the tree.
Monkey: Stay on the bank and I will come low.

# page
forest monkey,croc
caption: He came down one branch but not to the ground.
Crocodile: I see you are still wise to keep space.

# page
river croc,monkey
Monkey: A safe friend can stand close and still be kind.
Crocodile: I will not reach for you or for your heart.

# page
forest monkey
caption: He dropped fruit into the open mouth below.
Monkey: This is how we share without a ride.

# page
river croc
Crocodile: The ride was my mistake and I own it.
caption: He ate and then backed into the shallow edge.

# page
forest monkey,croc
caption: The bird sang once and flew along the bank.
Monkey: A witness saw the trick and the truth.

# page
river monkey
Monkey: If a plan can hurt me I will step back.
caption: He shook his head at the deep water.

# page
forest croc
Crocodile: I told my wife the heart stays in the tree.
caption: He said it with a low and sorry voice.

# page
river monkey,croc
Monkey: Good, because my heart is mine to keep.
Crocodile: I will not trade a friend for a wish.

# page
river croc,monkey
Crocodile: May I still take fruit home to her?
Monkey: Yes, fruit is a gift and a heart is not.

# page
forest monkey,croc
caption: They made a new rule beside the water.
Monkey: Talk on the bank and do not ride far.

# page
river croc
Crocodile: I agree and I will keep that rule.
caption: He tapped the mud with his tail to mark it.

# page
forest monkey
Monkey: Fast thought and a tall tree saved me.
caption: He smiled down at the crocodile on the bank.

# page
river monkey,croc
caption: The bird watched them share one last fruit.
Crocodile: I am glad you got away from my plan.

# page
forest monkey
Monkey: I am glad I named the tree in time.
caption: He held the branch and let his breath slow.

# page
river croc,monkey
Crocodile: Next time I feel torn I will tell the truth.
Monkey: Truth on the riverbank is safer than a trick.

# page
forest monkey,croc
caption: Late light made a gold path on the water.
Monkey: Go home kind and leave my heart with me.

# page
river croc
Crocodile: I will and I will bring back only thanks.
caption: He slid into the river with no trick left.

# page
forest monkey
caption: He stayed up until the ripples died.
Monkey: A calm mind and a safe seat saved me.
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
night jackal
caption: A hungry jackal crept through the village at night.
Jackal: I need food and these dark lanes are empty.

# page
village jackal
caption: He slipped past a low wall into a yard.
Jackal: I smell a rich pot and I must look.

# page
village jackal
caption: The pot sat in a dark corner of the yard.
Jackal: If I lean in I can reach those scraps.

# page
village jackal
caption: His paws slipped and he fell into blue dye.
Jackal: I cannot see while this dye covers my eyes.

# page
village jackal
caption: He climbed out and blue dye ran off his legs.
Jackal: My fur is blue and it will not wipe off.

# page
night jackal
caption: He ran from the village into the dark trees.
Jackal: If they see this color they may fear me.

# page
forest jackal
caption: A still pool showed a blue face he did not know.
Jackal: That is my face but the color is not mine.

# page
forest jackal
caption: He rubbed his side but the dye stayed put.
Jackal: If I walk out they will not know me.

# page
forest jackal
caption: He sat and thought of a bold way to hide.
Jackal: I could pretend this blue makes me a king.


# page
forest bluejackal
caption: He tried a slow proud walk under the trees.
Bluejackal: If I sound like a king they may not ask.

# page
forest bluejackal
caption: He stood tall and let the dye look like a robe.
Bluejackal: From now on I will not say I am a jackal.

# page
forest bluejackal,lion
Lion: What are you with that strange blue fur?
Bluejackal: I am a new king and you should obey.

# page
forest bluejackal,lion
Lion: You are not a lion and not a plain jackal.
Bluejackal: A blue king does not have to look plain.

# page
forest bluejackal,hare
caption: Hare came close and then stepped back in doubt.
Hare: He looks like a strange blue king to me.

# page
forest bluejackal,hare
Hare: He is blue so maybe he is set over us.
Bluejackal: Yes, and the wise ones will obey at once.

# page
forest bluejackal,monkey
Monkey: I have not seen a king with fur like that.
Bluejackal: Bow now and bring the first share of food.

# page
forest bluejackal,lion,hare
caption: The group was unsure so they chose to obey.
Lion: We will obey until we know what you are.

# page
forest bluejackal,hare
caption: Hare set a big pile of food at his blue feet.
Bluejackal: A king eats first and the rest of you wait.

# page
forest bluejackal
caption: He liked the bows and the best bits of food.
Bluejackal: Keep your eyes low when you speak to me.

# page
forest bluejackal,monkey
Monkey: Where should the rest of us stand and wait?
Bluejackal: Stand back and do not block my new court.

# page
forest bluejackal
caption: He sent word that other jackals must leave the trees.
Bluejackal: Their howls annoy a king so drive them out.

# page
forest jackal
caption: His old group heard the order and went still.
Jackal: He wants to pretend he never ran with us.

# page
forest bluejackal,jackal
Bluejackal: Go now and do not howl near my seat.
Jackal: We will go but this pretend will not hold.

# page
night jackal
caption: The jackals walked off sad under the night trees.
Jackal: He chose a new look over his own kind.

# page
forest bluejackal,lion
Lion: A king who sends his own kind away is odd.
Bluejackal: Do not question me since I am not like them.

# page
forest bluejackal,hare
caption: Hare kept watch on the path as he was told.
Hare: This blue king asks for more food each hour.

# page
forest bluejackal,monkey
Monkey: I will look for fruit but this feels wrong.
Bluejackal: A king does not need your thoughts on it.

# page
forest bluejackal
caption: He made the group hunt while he sat and ate.
Bluejackal: A blue king does not chase his own meals.

# page
night bluejackal,lion
caption: Lion stood near and watched the blue fur in moonlight.
Lion: You will not hunt and you will not share.


# page
forest bluejackal,lion
Lion: A real king would not fear a wash of rain.
Bluejackal: I fear nothing and I will not step down.

# page
forest bluejackal
Bluejackal: Sharing is for the group and not for a king.
caption: He took the best share and pushed the rest away.

# page
forest bluejackal,monkey
caption: Monkey saw blue rub off on the leaves by his seat.
Monkey: Your color is coming off where you sit.

# page
forest bluejackal,monkey
Bluejackal: That is king dust and you will stay quiet.
Monkey: Dust does not stain a leaf the way dye might.

# page
forest bluejackal
Bluejackal: Say dye again and you will leave with the jackals.
caption: Monkey shut his mouth but he did not bow.

# page
forest bluejackal,hare
Hare: If color can rub off then what are you?
Bluejackal: I am your king and the blue is my hide.

# page
night bluejackal,lion
caption: Thick clouds piled up and the night grew heavy.
Lion: Rain is close and your blue may not like it.

# page
forest bluejackal
Bluejackal: No rain can change a king like me.
caption: He lifted his chin and told them to bow again.

# page
night bluejackal,hare,monkey
caption: Rain came down hard and long on the whole group.
Hare: Look at his legs where the blue runs off.

# page
night bluejackal
caption: The dye ran down his legs in thin blue streams.
Bluejackal: Wipe it back on before they see the fur.

# page
night bluejackal,lion
caption: More rain washed the dye off his back and face.
Lion: You are a jackal and the color was only dye.

# page
night jackal,lion
Jackal: I wanted to look like more than I am.
Lion: Pretend can last only until the truth shows.

# page
forest jackal,hare,monkey
caption: The group stepped back and no one bowed to him.
Hare: We did obey a color and not a true king.

# page
forest monkey,jackal
Monkey: The strange blue king was just a dye trick.
Jackal: I fell in dye and then I chose to pretend.

# page
night jackal
caption: He went to find his old group past the trees.
Jackal: They may not want me back at their side.

# page
forest jackal
caption: He found them at the edge of the night wood.
Jackal: I sent you away and that was wrong of me.

# page
forest jackal
caption: They looked at his plain fur and knew the truth.
Jackal: The rain took the dye and left the real me.

# page
forest jackal,lion
caption: Lion came too and stood so all could hear.
Lion: This jackal is not a king and the blue is gone.

# page
forest jackal
caption: They let him walk with them but not in front.
Jackal: I would rather be real than a pretend king.

# page
forest jackal,hare
Hare: You can walk with us if you do not pretend.
Jackal: I will not pretend to be a king again.

# page
forest jackal,monkey
Monkey: A trick color can fool a group for a while.
Jackal: It fooled you and it fooled me most of all.

# page
night jackal,lion
Lion: A true name is better than a fake blue hide.
Jackal: I am a jackal and that is enough for me.

# page
forest jackal
caption: His group passed him a small share of the food.
Jackal: Thank you for a place that is not a throne.

# page
forest jackal,hare
caption: Hare walked beside him but did not bow at all.
Hare: Friends do not need a king to stay kind.

# page
forest jackal,hare
caption: They walked home while the wet leaves shone.
Hare: Stay with us as a jackal and not a mask.

# page
night jackal
caption: The rain slowed and the dye was gone for good.
Jackal: I will tell the truth the next time I slip.

# page
village jackal
caption: He did not go back to the pot of blue dye.
Jackal: That yard taught me how fast a lie can grow.

# page
forest jackal,lion
Lion: The group will trust you if your words stay true.
Jackal: Then I will keep my name and my own fur.

# page
forest jackal
caption: His fur was plain and the blue king was gone.
Jackal: I do not need that dye to have a place.

# page
night jackal,monkey
Monkey: We were wrong to obey a strange blue king.
Jackal: And I was wrong to ask them to obey.

# page
forest jackal
caption: He slept with his group under the dark wet trees.
Jackal: A real jackal in the rain is better than a fake king.
`,
  }),
];
