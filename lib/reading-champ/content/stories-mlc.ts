import { g, makeStory, q } from "./script";

const books = ["books", "friendship"];

export const MLC_STORIES = [
  makeStory({
    id: "mlc-glow",
    title: "The Glowing Book",
    seriesId: "midnight-library",
    episode: 1,
    genre: "fiction",
    subgenre: "adventure",
    themes: books,
    ladderLevel: 5,
    expectedMinutes: 6,
    stretchEligible: false,
    glossary: [g("library", "A room full of books you can borrow."), g("glow", "A soft light.")],
    talkAbout: "Would you open a glowing book if a friend stayed with you?",
    comprehension: [
      q("What was glowing?", [["book", "The book", "📘"], ["window", "The window", "🪟"], ["lamp", "A lamp", "💡"]], "book", "recall"),
      q("How do the friends feel at the end?", [["brave", "Glad and brave", "🤝"], ["mad", "Mad", "😠"], ["lost", "Lost", "😕"]], "brave", "inference"),
    ],
    script: `
# page
library mira,dev
Mira: That blue book is glowing.
Dev: I see it on the high shelf.

# page
library mira,dev
caption: They stepped closer, side by side.
Mira: The light is soft, not hot.

# page
stacks mira,dev
Dev: Should a grown-up see this too?
Mira: A note is tucked under the book.

# page
stacks mira,dev
caption: The note was written in neat ink.
Dev: It says, For the club after school.

# page
library mira,dev
Mira: We can open it together.
Dev: I will hold this side.

# page
library mira,dev
caption: A map of the library sat inside.
Mira: A star marks the window seat.

# page
night mira,dev
Dev: The seat is by the tall window.
Mira: I see a red ribbon there.

# page
night mira,dev
caption: Mira lifted the ribbon with care.
Dev: The book glow jumped to it.

# page
library mira,dev
Mira: The book is quiet now.
Dev: The ribbon can light our way.

# page
library mira,dev
caption: They put the book back on the shelf.
Mira: Next time we bring one more friend.
`,
  }),
  makeStory({
    id: "mlc-shelf",
    title: "The Quiet Shelf",
    seriesId: "midnight-library",
    episode: 2,
    genre: "fiction",
    subgenre: "adventure",
    themes: books,
    ladderLevel: 5,
    expectedMinutes: 6,
    stretchEligible: true,
    glossary: [g("library", "A room full of books you can borrow."), g("shy", "Quiet, and not ready to be seen yet.")],
    talkAbout: "The shy book was turned the wrong way. How do you help someone feel easy to find?",
    comprehension: [
      q("What was wrong with the book?", [["back", "Its back faced out", "📘"], ["wet", "It was wet", "💧"], ["gone", "It was gone", "🚫"]], "back", "recall"),
      q("Why did they turn it around?", [["find", "So a reader could find it", "👀"], ["hide", "To hide it", "🙈"], ["sell", "To sell it", "💰"]], "find", "inference"),
    ],
    script: `
# page
library mira,dev
Mira: This library shelf is very quiet.
Dev: I hear a tiny tap.

# page
stacks mira,dev
caption: One book faced the wrong way.
Mira: I cannot see its name.

# page
stacks mira,dev
Dev: Maybe it feels shy.
Mira: A shy book still wants a reader.

# page
library page,mira
Page: I felt that tap too.
Dev: Can we turn it out?

# page
stacks mira,dev
caption: Dev turned the book with slow hands.
Mira: The name says The Lost Kite.

# page
library mira,dev
Dev: Now someone can find it.
Mira: We can read the first page.

# page
library mira,dev
caption: The first page showed a red kite.
Dev: It got stuck in a tall tree.

# page
garden mira,dev
Mira: In the story, friends wait under it.
Dev: They do not tug the string.

# page
garden mira,dev
caption: A soft wind lifts the kite free.
Mira: Waiting was the kind plan.

# page
library mira,dev
Dev: The tap stopped.
Mira: The shy book is easy to see now.
`,
  }),
  makeStory({
    id: "mlc-door",
    title: "The Door in the Shelf",
    seriesId: "midnight-library",
    episode: 3,
    genre: "fiction",
    subgenre: "adventure",
    themes: books,
    ladderLevel: 6,
    expectedMinutes: 7,
    stretchEligible: true,
    glossary: [
      g("nervous", "A fluttery feeling before something new."),
      g("fable", "A very old story that teaches a kind idea."),
      g("lonely", "Feeling alone and wishing for a friend."),
    ],
    talkAbout: "Dev felt nervous and then glad. When have you felt both?",
    comprehension: [
      q("Where did the tiny door lead?", [["garden", "A quiet garden", "🌿"], ["sea", "The sea", "🌊"], ["shop", "A shop", "🏪"]], "garden", "recall"),
      q("How did Dev feel at first?", [["nervous", "A bit nervous", "😟"], ["angry", "Angry", "😠"], ["bored", "Bored", "😐"]], "nervous", "inference"),
    ],
    script: `
# page
stacks mira,dev
Mira: There is a tiny door in this shelf.
Dev: I feel a bit nervous.

# page
stacks mira,dev
caption: The door was no taller than a hand.
Mira: We can peek, then step back.

# page
garden mira,dev
caption: The door opened onto a quiet garden.
Dev: It smells like paper and rain.

# page
garden mira,dev
Mira: These plants have pages for leaves.
Dev: This one is a fable.

# page
garden mira,dev
caption: A small book sat alone on a stone.
Mira: It looks lonely.

# page
garden mira,dev
Dev: I was nervous, but I can sit.
Mira: We will read one page with it.

# page
garden mira,dev
caption: The fable was about a kind mouse.
Dev: The book looks less lonely now.

# page
garden mira,dev
Mira: Stories like a person to stay.
Dev: We can come back after school.

# page
stacks mira,dev
caption: They shut the tiny door with care.
Dev: I am glad we went in.

# page
library mira,dev
Mira: Nervous can sit next to brave.
Dev: Next time I will knock first.
`,
  }),
  makeStory({
    id: "mlc-map",
    title: "The Map That Folded",
    seriesId: "midnight-library",
    episode: 4,
    genre: "fiction",
    subgenre: "adventure",
    themes: books,
    ladderLevel: 6,
    expectedMinutes: 7,
    stretchEligible: false,
    glossary: [g("library", "A room full of books you can borrow."), g("blank", "Empty, with nothing drawn yet.")],
    talkAbout: "The map worked only when Mira and Dev held it together. What is something you do better with a friend?",
    comprehension: [
      q("When did the map show the room?", [["both", "When both friends held it", "🤝"], ["one", "When one left", "🚶"], ["dark", "Only at noon", "☀️"]], "both", "recall"),
      q("Why did the lines fade?", [["apart", "They let go of each other", "👋"], ["rain", "Rain washed them", "🌧️"], ["ink", "The ink was bad", "🖊️"]], "apart", "inference"),
    ],
    script: `
# page
library mira,dev
Mira: The map from the book is blank.
Dev: It had lines last time.

# page
library mira,dev
caption: Mira held one side and Dev held the other.
Dev: Look, the lines came back.

# page
stacks mira,dev
Mira: It shows a room behind the stacks.
Dev: I have never seen that door.

# page
stacks mira,dev
caption: Dev let go to point.
Mira: The map went blank again.

# page
stacks mira,dev
Dev: It needs both of us.
Mira: Then we hold it and walk slow.

# page
night mira,dev
caption: A low door waited behind the last shelf.
Dev: The map star sits on this spot.

# page
night mira,dev
Mira: Inside is a round table.
Dev: Two chairs. One for each of us.

# page
library mira,dev
caption: A card on the table said Club.
Mira: The library saved us a place.

# page
library mira,dev
Dev: If I drop my side, we get lost.
Mira: So we keep hold until we are out.

# page
library mira,dev
caption: They folded the map and smiled.
Dev: This club is a two-person map.
`,
  }),
  makeStory({
    id: "mlc-bell",
    title: "The Night Bell",
    seriesId: "midnight-library",
    episode: 5,
    genre: "fiction",
    subgenre: "adventure",
    themes: books,
    ladderLevel: 7,
    expectedMinutes: 8,
    stretchEligible: false,
    glossary: [g("library", "A room full of books you can borrow."), g("bell", "A small cup of metal that rings.")],
    talkAbout: "The bell rang because a story wanted a listener. Who do you like to read to?",
    comprehension: [
      q("What made the bell stop?", [["read", "They read the story aloud", "📖"], ["hid", "They hid the bell", "🙈"], ["ran", "They ran away", "🏃"]], "read", "recall"),
      q("Why did the bell ring?", [["hear", "A story needed someone to hear it", "🔔"], ["lunch", "It was lunch time", "🥪"], ["fire", "There was a fire", "🔥"]], "hear", "inference"),
    ],
    script: `
# page
night mira,dev
caption: A small bell rang over the library door.
Dev: We did not touch it.

# page
library mira,dev
Mira: It rings, then it waits.
Dev: Maybe it wants us to follow the sound.

# page
stacks mira,dev
caption: The sound led them to a low stool.
Mira: A picture book is open on it.

# page
stacks mira,dev
Dev: The bell rings harder when we walk past.
Mira: And it slows when we stop to look.

# page
library page,mira
Page: That bell marks a story with no listener.
Dev: So it is asking, not warning.

# page
library mira,dev
caption: They sat on the stool together.
Mira: I will read the first lines out loud.

# page
library mira,dev
Dev: It is about a boat and a paper star.
Mira: The star shows the boat the way home.

# page
night mira,dev
caption: Dev read the next page without rushing.
Mira: The bell is softer now.

# page
library mira,dev
Dev: On the last page, the boat finds the dock.
Mira: Listen. The bell stopped.

# page
library page,mira
Page: A story rests when someone hears it.
Dev: We can listen again next time it calls.
`,
  }),
  makeStory({
    id: "mlc-page",
    title: "The Missing Page",
    seriesId: "midnight-library",
    episode: 6,
    genre: "fiction",
    subgenre: "adventure",
    themes: books,
    ladderLevel: 7,
    expectedMinutes: 8,
    stretchEligible: true,
    glossary: [g("blank", "Empty, with no words yet."), g("lantern", "A light you can carry."), g("fair", "Kind and even for the people in it.")],
    talkAbout: "The last page stayed blank until they chose a fair ending. What would you have written?",
    comprehension: [
      q("What was missing?", [["page", "The last page of words", "📄"], ["door", "The library door", "🚪"], ["cat", "A cat", "🐱"]], "page", "recall"),
      q("Which choice brought the words back?", [["share", "Share the lantern", "💡"], ["hide", "Hide the light", "🙈"], ["break", "Break the lantern", "💥"]], "share", "inference"),
    ],
    script: `
# page
library mira,dev
Mira: This story stops before the end.
Dev: The last page is blank.

# page
stacks mira,dev
caption: The hero stood in a dark wood with one lantern.
Mira: Two paths wait, and both look hard.

# page
stacks mira,dev
Dev: If she keeps the light, she is safe.
Mira: But the other path has a lost child.

# page
library page,mira
Page: Some endings wait for a fair choice.
Dev: Fair means both people get care.

# page
library mira,dev
Mira: She could share the lantern.
Dev: Then neither path is all dark.

# page
night mira,dev
caption: Mira said the choice out loud.
Dev: Share the light. Walk the slow path.

# page
night mira,dev
caption: Ink began to return to the blank page.
Mira: She hands the child half the glow.

# page
library mira,dev
Dev: They reach the town gate together.
Mira: The lantern is dim, but it lasts.

# page
library mira,dev
caption: The last line thanked the reader.
Dev: Our fair idea matched the story.

# page
library mira,dev
Mira: A blank page can be a question.
Dev: I like that we did not rush it.
`,
  }),
  makeStory({
    id: "mlc-lamp",
    title: "The Last Lamp",
    seriesId: "midnight-library",
    episode: 7,
    genre: "fiction",
    subgenre: "adventure",
    themes: books,
    ladderLevel: 8,
    expectedMinutes: 9,
    stretchEligible: false,
    glossary: [g("library", "A room full of books you can borrow."), g("ribbon", "A thin strip of cloth."), g("outage", "A time when the lights go out.")],
    talkAbout: "The ribbon was a small light, but it was enough to lead Page to the door. When has a small help been enough?",
    comprehension: [
      q("Why was the library dark?", [["out", "The lamp went out", "💡"], ["paint", "Someone painted it", "🎨"], ["noon", "It was noon", "☀️"]], "out", "recall"),
      q("How did they help Page?", [["glow", "The ribbon glow led her out", "🎀"], ["shout", "They shouted at her", "📣"], ["hide", "They hid the door", "🚪"]], "glow", "inference"),
    ],
    script: `
# page
night mira,dev
caption: Rain tapped the library windows, and the lamp clicked off.
Mira: I cannot see the shelves.

# page
library mira,dev
Dev: This is an outage. The lights may stay off.
Mira: The ribbon from the club book still glows.

# page
stacks mira,dev
caption: They held the ribbon up like a small moon.
Dev: It shows one shelf at a time.

# page
stacks page,mira
Page: I am by the tall shelf. I lost the door.
Mira: Stay there. We will come to you.

# page
night page,dev
caption: Page had her hands on a row of books.
Dev: Take my arm. Mira has the light.

# page
library mira,dev
Mira: Step where the glow falls.
Page: I can see my shoes now. Thank you.

# page
library page,mira
caption: A chair leg almost caught Page's foot.
Dev: Wait. I will move it.

# page
night mira,dev
Mira: The door is ten steps ahead.
Page: Count them with me, slow and loud.

# page
library page,dev
caption: They counted, and the door handle shone.
Page: Fresh air. You two kept me safe.

# page
night mira,dev
Dev: The ribbon is a small light.
Mira: Small was enough for the walk.

# page
library page,mira
Page: When the lamp returns, we will check the room.
Dev: And we will put the ribbon back in its book.

# page
library mira,dev
caption: The lamp flickered, then held steady.
Mira: The club can be a light for someone else.
`,
  }),
  makeStory({
    id: "mlc-waited",
    title: "The Story That Waited",
    seriesId: "midnight-library",
    episode: 8,
    genre: "fiction",
    subgenre: "adventure",
    themes: books,
    ladderLevel: 8,
    expectedMinutes: 9,
    stretchEligible: true,
    glossary: [g("dusty", "Covered in soft grey dust."), g("invite", "To ask someone to join you."), g("patient", "Able to wait without being unkind.")],
    talkAbout: "The book had waited a long time for a new listener. Is there a story you would like to share with someone?",
    comprehension: [
      q("What did the card inside the book ask?", [["read", "Read me to someone new", "📖"], ["burn", "Burn the book", "🔥"], ["sell", "Sell the book", "💰"]], "read", "recall"),
      q("Why did they invite Page?", [["hear", "The book wanted a new listener", "👂"], ["fix", "Page had to fix the roof", "🏠"], ["race", "They wanted a race", "🏁"]], "hear", "inference"),
    ],
    script: `
# page
stacks mira,dev
caption: A dusty book sat at the end of the shelf, wider than the rest.
Mira: No one has pulled this one in a long time.

# page
library mira,dev
Dev: The pages smell like old rain.
Mira: There is a card in the front.

# page
library mira,dev
caption: The card said, Read me to someone new.
Dev: It has been patient. We should not rush past it.

# page
stacks page,mira
Mira: Page, may we invite you to hear a story?
Page: I would like that. Let me sit.

# page
library page,dev
caption: Dev wiped the dust with a soft cloth.
Page: Start at the first line, even if it is slow.

# page
library mira,dev
Mira: Once, a bridge waited for a walker.
Dev: The traveler was afraid of the gap.

# page
night mira,page
caption: Page closed her eyes and smiled at the next part.
Page: The bridge did not hurry the traveler.

# page
library mira,dev
Dev: And the traveler took one board at a time.
Mira: That is why the book could wait for us.

# page
library page,mira
Page: A patient story is still alive.
Dev: We can put a fresh card in the club box.

# page
stacks mira,dev
caption: The fresh card said, Ask a new friend to listen.
Mira: Next week this book will not be dusty.

# page
library mira,dev
Dev: Waiting was not the same as being left behind.
Mira: Someone just had to invite a listener.

# page
library page,dev
Page: I will remember the bridge when I feel stuck.
Dev: Then the story did its work.
`,
  }),
  makeStory({
    id: "mlc-club",
    title: "The Club Stays Open",
    seriesId: "midnight-library",
    episode: 9,
    genre: "fiction",
    subgenre: "adventure",
    themes: books,
    ladderLevel: 9,
    expectedMinutes: 10,
    stretchEligible: false,
    glossary: [
      g("secret", "Something kept from other people."),
      g("borrow", "To use something and then give it back."),
      g("member", "A person who belongs to a group."),
    ],
    talkAbout: "Mira and Dev chose to share the club instead of keeping it a secret. When is sharing fairer than keeping something just for you?",
    comprehension: [
      q("What did they decide about the glowing book?", [["share", "Put it back so others can borrow it", "📚"], ["hide", "Hide it at home", "🏠"], ["sell", "Sell it", "💰"]], "share", "recall"),
      q("Why was a closed club unfair?", [["few", "Only two people could use the stories", "🚪"], ["dark", "The room was too dark", "🌑"], ["long", "The books were too long", "📏"]], "few", "inference"),
    ],
    script: `
# page
night mira,dev
caption: The ribbon glowed on the club table, and the library was almost empty.
Mira: We could take the book home and keep it a secret.

# page
library mira,dev
Dev: Then no one else would find the map.
Mira: A secret club sounds special. It also sounds small.

# page
library page,mira
Page: Books in this room are here to borrow, not to hide.
Dev: If we lock the door, the bell cannot call anyone new.

# page
stacks mira,dev
caption: They walked past shelves that other children would need the next day.
Mira: The shy book, the fable, the dusty bridge story.

# page
stacks mira,dev
Dev: Those stories helped us because we could reach them.
Mira: If we keep the glow, we close that reach.

# page
library mira,dev
caption: Mira set the glowing book back in its gap.
Dev: It still shines a little, but it stays on the shelf.

# page
library page,dev
Page: You can make a card that says how to join.
Mira: Any member must read with care and put books back.

# page
night mira,dev
caption: Dev wrote, Come after school. Bring a friend. Listen first.
Page: That is a club I can point children toward.

# page
library mira,dev
Mira: I will miss having the ribbon in my pocket.
Dev: You can borrow it on club days, then return it.

# page
garden mira,dev
caption: They taped one card by the tiny door and one by the bell.
Mira: The club stays open even when we go home.

# page
library page,mira
Page: A secret can feel safe, and a shared room can feel safe too.
Dev: This one is safer because more people can help.

# page
night mira,dev
caption: The bell gave one soft ring, as if it agreed.
Mira: Next listener, the shelf is yours.
`,
  }),
  makeStory({
    id: "mlc-pace",
    title: "Two Ways to Read",
    seriesId: "midnight-library",
    episode: 10,
    genre: "fiction",
    subgenre: "adventure",
    themes: books,
    ladderLevel: 9,
    expectedMinutes: 10,
    stretchEligible: true,
    glossary: [
      g("pace", "How fast or slow you go."),
      g("detail", "A small part that matters."),
      g("chapter", "One section of a longer story."),
    ],
    talkAbout: "Mira liked a fast pace and Dev liked a slow one. How do you and someone you know read differently?",
    comprehension: [
      q("What did Mira miss by reading fast?", [["clue", "A small clue in the picture", "🔎"], ["door", "The front door", "🚪"], ["bus", "The bus", "🚌"]], "clue", "recall"),
      q("What did they learn about pace?", [["both", "Each pace can find something", "🐢"], ["one", "Only the fast way works", "⚡"], ["none", "Pace does not matter", "🚫"]], "both", "inference"),
    ],
    script: `
# page
library mira,dev
Mira: I finished the chapter. You are still on page two.
Dev: I am looking at the picture in the corner.

# page
stacks mira,dev
caption: Mira tapped her foot, ready for the next book.
Dev: There is a tiny key drawn in the window.

# page
library mira,dev
Mira: I did not see a key. I was chasing the plot.
Dev: And I do not know yet why the boat left.

# page
library page,mira
Page: A fast pace can catch the shape of a story.
Dev: A slow pace can catch a detail.

# page
night mira,dev
caption: They traded ways for one chapter.
Mira: I will put my finger on each picture.

# page
library mira,dev
Dev: I will read the words straight through once.
Mira: Tell me the shape. I will tell you the clue.

# page
stacks mira,dev
caption: Mira found the key. Dev found why the boat left at dawn.
Dev: The key opens the dock box.

# page
library mira,dev
Mira: I would have missed it at my old pace.
Dev: And I would have missed the reason they sailed.

# page
garden mira,dev
caption: They sat by the window seat and did not argue about speed.
Page: Keep the way that fits you, and borrow the other when you are stuck.

# page
library mira,dev
Mira: My pace is still quick. I can pause for details.
Dev: My pace is still slow. I can ask what happens next.

# page
night mira,dev
caption: The map showed both the path and a small star they had skipped.
Mira: We needed both kinds of looking.

# page
library mira,dev
Dev: The club can welcome a fast reader and a slow one.
Mira: The story is big enough for both.
`,
  }),
];
