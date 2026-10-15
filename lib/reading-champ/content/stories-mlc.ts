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
stacks mira,dev
Mira: The light looks soft and blue.
Dev: Can we get it down?

# page
stacks mira,dev
Mira: I will hold the chair still.
Dev: I can reach the blue book.

# page
library mira,dev
Mira: It feels warm, not hot.
Dev: The glow sits on the cover.

# page
library mira,dev
Mira: Let us open it here.
Dev: I want to read it fast.

# page
night mira,dev
Mira: My eyes skip down the page.
Dev: The blue light is fading.

# page
night mira,dev
Mira: Slow down, the glow is thin.
Dev: I still want the next line.

# page
stacks mira,dev
Mira: Now the book looks dim.
Dev: Fast reading made the glow fade.

# page
library mira,dev
Mira: Let me try one more time.
Dev: I will read even faster.

# page
library mira,dev
Mira: The light is almost gone.
Dev: This way is not working.

# page
stacks mira,dev
Mira: Stop, we need a new plan.
Dev: What if we read slow?

# page
stacks mira,dev
Mira: There is a hard word here.
Dev: Tap it and we can learn.

# page
library mira,dev
Mira: The note says it means glow.
Dev: Glow means a soft light.

# page
library mira,dev
Mira: So the book light is a glow.
Dev: I get it now, thank you.

# page
night mira,dev
Mira: I will read this line slow.
Dev: I will not skip a word.

# page
night mira,dev
Mira: Look, a little glow is back.
Dev: Slow reading brings it home.

# page
library mira,dev
Mira: Let us read the next part.
Dev: One line, then we rest.

# page
library page,mira,dev
Page: I see you found the glow.
Mira: It faded when we went fast.

# page
library page,dev
Page: This book stays in the library.
Dev: May we read it in here?

# page
library page,mira
Page: Yes, it lives on this shelf.
Mira: We will not take it home.

# page
stacks mira,dev
Mira: I will mark our page.
Dev: Use this card so we know.

# page
stacks mira,dev
Mira: The card sits in the book.
Dev: Now we can find our spot.

# page
library mira,dev
Mira: We should put it back.
Dev: The glow can rest here.

# page
night mira,dev
Mira: See you at the library.
Dev: I will come the next day.

# page
library mira,dev
Mira: You came back, I am glad.
Dev: The blue book still glows.

# page
library mira,dev
Mira: Your turn to read first.
Dev: Then you can take a turn.

# page
stacks mira,dev
Dev: I will keep my pace slow.
Mira: I like how the glow holds.

# page
stacks mira,dev
Mira: Now it is my turn.
Dev: I will sit and listen.

# page
night mira,dev
Mira: The story is getting good.
Dev: I feel a yawn coming.

# page
night mira,dev
Mira: If we push on, we may tire.
Dev: Tired eyes skip the words.

# page
library mira,dev
Mira: Let us stop while we are glad.
Dev: I want to feel brave, not worn.

# page
library mira,dev
Dev: We can save the rest.
Mira: The glow will wait for us.

# page
stacks mira,dev
Mira: I am glad we came back.
Dev: I feel brave for going slow.

# page
stacks mira,dev
Mira: Fast was fun, but it failed.
Dev: Slow gave the glow back.

# page
library page,mira
Page: You two look calm and glad.
Mira: We chose to stop in time.

# page
library page,dev
Page: That is a brave kind of stop.
Dev: We will read more next time.

# page
night mira,dev
Mira: The book is on its shelf.
Dev: Our card keeps the place.

# page
night mira,dev
Mira: I am glad you stayed with me.
Dev: I am brave when you are here.

# page
library mira,dev
Mira: The glow is soft again.
Dev: We did not rush the end.

# page
library mira,dev
Mira: I feel glad and brave.
Dev: So do I, my friend.
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
Mira: This shelf in the library is quiet.
Dev: I hear a tiny tap.

# page
stacks mira,dev
Mira: One book has its back out.
Dev: I cannot see the name.

# page
stacks mira,dev
Mira: It looks like it feels shy.
Dev: A shy book still wants a reader.

# page
library mira,dev
Mira: The back faces the room.
Dev: The name faces the shelf.

# page
library mira,dev
Mira: A little kid is coming.
Dev: She may walk right past it.

# page
stacks mira,dev
Mira: She looked and kept going.
Dev: She missed the shy book.

# page
stacks mira,dev
Mira: We should turn it around.
Dev: Then a reader can find it.

# page
library mira,dev
Mira: Turn it so the name shows.
Dev: I will use two slow hands.

# page
stacks mira,dev
Dev: Now the name faces out.
Mira: It says The Lost Kite.

# page
stacks mira,dev
Mira: The kid might come back.
Dev: Let us leave it this way.

# page
library mira,dev
Mira: Oh no, a bag hit the shelf.
Dev: The shy book spun around.

# page
library mira,dev
Mira: Its back faces out again.
Dev: That bump undid our work.

# page
stacks mira,dev
Mira: We can turn it once more.
Dev: This time we add a sign.

# page
stacks mira,dev
Mira: The sign can say, Look here.
Dev: A small sign may help a kid.

# page
library mira,dev
Mira: I will write it on this card.
Dev: Keep the words big and clear.

# page
library mira,dev
Mira: I set the sign up high.
Dev: Can a little kid see it?

# page
stacks mira,dev
Mira: The kid is back in the row.
Dev: She looks up, not at the book.

# page
stacks mira,dev
Mira: She walked past the shy book.
Dev: The sign is in the wrong spot.

# page
library mira,dev
Mira: Let us move the sign down.
Dev: Put it by the book name.

# page
library mira,dev
Mira: Now the card is at her eyes.
Dev: The name still faces out.

# page
night mira,dev
Mira: We should not stand in the way.
Dev: We can watch from this chair.

# page
night mira,dev
Mira: Here she comes down the row.
Dev: I hope she sees the sign.

# page
stacks mira,dev
Mira: She stopped at the card.
Dev: Her hand is on the book.

# page
stacks mira,dev
Mira: She pulled it from the shelf.
Dev: She found it all by herself.

# page
library mira,dev
Mira: Look at her glad smile.
Dev: The shy book has a reader.

# page
library mira,dev
Mira: She sat and opened page one.
Dev: We did not have to push it.

# page
library mira,dev
Mira: The tap on the shelf stopped.
Dev: I think the book feels seen.

# page
library page,mira
Page: I saw what you did.
Mira: Its back faced out at first.

# page
library page,dev
Page: Why did you turn it?
Dev: So a reader could find it.

# page
stacks page,mira
Page: A shy book can hide its name.
Mira: We made the name easy to see.

# page
stacks mira,dev
Mira: The sign stays on the shelf.
Dev: It tells kids where to look.

# page
night mira,dev
Mira: The library feels kind now.
Dev: One small turn can help.

# page
library mira,dev
Mira: I am glad she found it.
Dev: I was sad when she missed it.

# page
library mira,dev
Mira: The bump was a real setback.
Dev: We did not give up.

# page
stacks mira,dev
Mira: Facing out was the fix.
Dev: The back no longer hides it.

# page
stacks mira,dev
Mira: We can check this shelf again.
Dev: Next time we look for backs.

# page
night mira,dev
Mira: Other books face out fine.
Dev: Only that one was shy.

# page
night mira,dev
Mira: The kid is still reading.
Dev: She looks calm and glad.

# page
library mira,dev
Mira: We can leave the sign up.
Dev: It will help the next reader.

# page
library mira,dev
Mira: The quiet shelf is not a trap.
Dev: A shy book can be found.
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
Mira: There is a tiny door here.
Dev: It sits in the low shelf.

# page
stacks mira,dev
Mira: The door is as tall as my hand.
Dev: I feel a bit nervous.

# page
stacks mira,dev
Mira: We can peek and step back.
Dev: I am nervous, but I will try.

# page
stacks mira,dev
Dev: What if it is dark in there?
Mira: Then we close it and leave.

# page
garden mira,dev
Mira: The door leads to a quiet garden.
Dev: I smell rain and old paper.

# page
garden mira,dev
Mira: These plants have pages for leaves.
Dev: I am still a little nervous.

# page
garden mira,dev
Mira: Look at the stone by the path.
Dev: A small book sits all alone.

# page
garden mira,dev
Mira: The cover says it is a fable.
Dev: A fable is a very old story.

# page
garden mira,dev
Mira: This fable may teach a kind idea.
Dev: Can we sit and read a bit?

# page
garden mira,dev
Mira: Yes, the stone makes a good seat.
Dev: My nervous feeling is a bit less.

# page
garden mira,dev
Dev: The first line is about a bird.
Mira: The bird has no friend at all.

# page
garden mira,dev
Mira: The bird feels lonely in the tree.
Dev: Lonely means it wants a friend.

# page
garden mira,dev
Mira: Day after day, the bird waits.
Dev: No one stops under the tree.

# page
garden mira,dev
Mira: Then a small kid looks up.
Dev: The kid says, I will sit too.

# page
garden mira,dev
Mira: The bird is not lonely now.
Dev: A friend was all it needed.

# page
garden mira,dev
Dev: I was nervous at the door.
Mira: And now you look glad.

# page
garden mira,dev
Mira: This fable fits our club.
Dev: The club can be a kind place.

# page
garden mira,dev
Dev: A place for a kid who feels lonely.
Mira: We can save that idea.

# page
garden mira,dev
Mira: Let us read one more page.
Dev: I like this quiet garden.

# page
night mira,dev
Mira: Do you hear that bell?
Dev: It rings from the far door.

# page
night mira,dev
Mira: The bell means we should go.
Dev: But the fable is not done.

# page
night mira,dev
Mira: We must not stay past the bell.
Dev: I wish we had more time.

# page
night mira,dev
Mira: We can mark the page and leave.
Dev: Will the garden still be here?

# page
garden mira,dev
Mira: Yes, the tiny door will wait.
Dev: Then I can close the book.

# page
garden mira,dev
Dev: The path back looks dim now.
Mira: Stay by me and walk slow.

# page
garden mira,dev
Mira: The bell rings a second time.
Dev: I feel nervous all over again.

# page
stacks mira,dev
Mira: Here is the shelf with the door.
Dev: I see the room we know.

# page
stacks mira,dev
Mira: Shut the tiny door with care.
Dev: We left when the bell rang.

# page
stacks mira,dev
Dev: I am glad we went in.
Mira: Nervous can sit next to brave.

# page
library mira,dev
Mira: What should we tell the club?
Dev: A lonely kid needs a seat.

# page
library page,mira
Page: You two are back on time.
Mira: The bell sent us out.

# page
library page,dev
Page: How did you feel at first?
Dev: I felt nervous at the door.

# page
library page,mira
Page: And where did the door lead?
Mira: It led to a quiet garden.

# page
library mira,dev
Dev: We found a fable in there.
Mira: It was about a lonely bird.

# page
library page,dev
Page: What did the fable teach you?
Dev: A friend can ease a lonely day.

# page
library mira,dev
Mira: Our club can be that friend.
Dev: We can save a chair for a kid.

# page
stacks mira,dev
Mira: We can put a note on it.
Dev: The note can say, Sit with us.

# page
stacks mira,dev
Mira: If a kid feels lonely, they can sit.
Dev: No one has to read alone.

# page
night mira,dev
Mira: I am glad you came with me.
Dev: I was nervous, then I was glad.

# page
night mira,dev
Dev: Next time I may knock first.
Mira: And we will still mind the bell.

# page
library mira,dev
Mira: The fable stays in the garden.
Dev: The idea comes back with us.

# page
library mira,dev
Mira: A club is more than a door.
Dev: It is a place to be with friends.

# page
stacks page,mira
Page: I like the chair plan.
Mira: We will keep the seat free.

# page
library mira,dev
Dev: I feel glad, not nervous now.
Mira: We can go home on time.
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
Mira: This map from the book is blank.
Dev: It had lines the last time.

# page
library mira,dev
Mira: I hold it and I see no room.
Dev: Let me try it on my own.

# page
library mira,dev
Dev: Still blank when I hold it.
Mira: One pair of hands is not enough.

# page
stacks mira,dev
Mira: Come hold the other side.
Dev: We can try it as a team.

# page
stacks mira,dev
Dev: Look, the lines came back.
Mira: The map shows the library now.

# page
stacks mira,dev
Mira: A star marks a small room.
Dev: The room is past the tall stacks.

# page
library mira,dev
Mira: Let us walk and keep our hold.
Dev: I will not let my side go.

# page
night mira,dev
Dev: The line turns at this shelf.
Mira: It points to a low door.

# page
night mira,dev
Dev: I want to point at the star.
Mira: If you let go, wait.

# page
stacks mira,dev
Dev: I let go for one second.
Mira: The lines fade when we let go.

# page
stacks mira,dev
Dev: It is blank in my hands.
Mira: Grab your side and hold still.

# page
library mira,dev
Dev: The lines are back again.
Mira: The map needs both of us.

# page
stacks mira,dev
Mira: It shows the room when both hold it.
Dev: So we walk as one pair.

# page
stacks mira,dev
Dev: Left path or right path?
Mira: The line goes to the left.

# page
night mira,dev
Mira: I will check the right just in case.
Dev: Do not drop the map.

# page
night mira,dev
Dev: You went too far ahead.
Mira: I still have my side.

# page
stacks mira,dev
Dev: My side went slack and blank.
Mira: I cannot see you now.

# page
stacks mira,dev
Mira: Dev, say my name if you hear me.
Dev: I hear you, but I see shelves.

# page
library mira,dev
Mira: Stay where you are and keep talking.
Dev: I am by a red chair.

# page
night mira,dev
Mira: I do not see a red chair.
Dev: Then we are split in the stacks.

# page
stacks mira,dev
Mira: The map is blank while we are apart.
Dev: Apart means the lines will not show.

# page
stacks mira,dev
Dev: Follow my voice, not a guess.
Mira: I am walking to the sound.

# page
night mira,dev
Mira: I see your hand past the books.
Dev: Take the map with me.

# page
night mira,dev
Dev: We both hold it once more.
Mira: The lines come back at once.

# page
library mira,dev
Mira: There you are, I am glad.
Dev: We got lost when we split.

# page
library mira,dev
Dev: Now the star is bright again.
Mira: It leads to the low door.

# page
stacks mira,dev
Mira: Keep both hands on the map.
Dev: I will not point and drop it.

# page
stacks mira,dev
Dev: The door is right here.
Mira: The star sits on this spot.

# page
night mira,dev
Mira: Inside is a round table.
Dev: Two chairs, one for each of us.

# page
night mira,dev
Mira: A card on the table says Club.
Dev: The library saved us a place.

# page
library mira,dev
Dev: We can sit if we still hold it.
Mira: Or we set it down as a pair.

# page
library mira,dev
Mira: We are in the nook now.
Dev: We can fold it with both hands.

# page
stacks mira,dev
Dev: If I drop my side, we get lost.
Mira: So we keep hold until we are out.

# page
stacks mira,dev
Mira: Let us read one short page here.
Dev: Then we leave on the same path.

# page
night mira,dev
Mira: This nook is calm and quiet.
Dev: I like that we found it together.

# page
night mira,dev
Mira: Time to hold the map and go.
Dev: Left side for me, right for you.

# page
library mira,dev
Mira: The lines stay while we hold on.
Dev: I see the main room ahead.

# page
library mira,dev
Dev: We are out and still a pair.
Mira: Now we can fold the map.

# page
stacks mira,dev
Mira: Blank paper, until we need it.
Dev: It works when both of us hold it.

# page
stacks mira,dev
Dev: I will not run off again.
Mira: We find each other with the map.

# page
library mira,dev
Mira: The nook can be our club spot.
Dev: We will share the way in.

# page
library page,mira
Page: You both look glad and calm.
Mira: The map was blank until we held it.

# page
library page,dev
Page: Why did the lines fade?
Dev: They fade when we let go.

# page
night mira,dev
Mira: Next time we hold it the whole way.
Dev: A folded map can still help.
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
Mira: A bell is ringing over the door.
Dev: We did not touch the bell.

# page
night mira,dev
Mira: It rings, and then it waits.
Dev: The library is still and dim.

# page
library mira,dev
Mira: Maybe it wants us to follow.
Dev: Let us walk to the sound.

# page
library mira,dev
Dev: The sound is soft, then hard.
Mira: It comes from the low stacks.

# page
stacks mira,dev
Mira: I see a stool by the wall.
Dev: A picture book lies open there.

# page
stacks mira,dev
Mira: The bell rings when we walk past.
Dev: It slows when we stop to look.

# page
stacks mira,dev
Dev: What if the book is the cause?
Mira: The bell sits on the book.

# page
library mira,dev
Mira: No one is here to hear it.
Dev: A story may need a kid.

# page
library page,mira
Page: That bell marks a lost story.
Mira: Lost how, if the book is here?

# page
library page,dev
Page: It has no kid to hear it.
Dev: So the bell is asking us.

# page
library page,mira
Page: It is not a fire bell.
Mira: And it is not lunch time.

# page
stacks mira,dev
Mira: We could hide the bell now.
Dev: Then the loud noise might stop.

# page
stacks mira,dev
Dev: I put it under this cloth.
Mira: The cloth is thick and soft.

# page
stacks mira,dev
Mira: It rings harder under the cloth.
Dev: Hiding it was a bad plan.

# page
night mira,dev
Dev: Let me try this box next.
Mira: A box may block the sound.

# page
night mira,dev
Mira: Now the bell rings even harder.
Dev: Take it out of the box.

# page
library mira,dev
Mira: Hiding the bell makes it worse.
Dev: We need a new kind of plan.

# page
library mira,dev
Dev: Page said it needs a kid to hear.
Mira: Then we should read the story.

# page
stacks mira,dev
Mira: I will read the first lines aloud.
Dev: I will sit and hear each word.

# page
stacks mira,dev
Dev: The bell is a bit softer.
Mira: Keep going and do not rush.

# page
library mira,dev
Mira: It is about a boat at sea.
Dev: A paper star shows the way.

# page
library mira,dev
Dev: Let me read the next page.
Mira: Read it aloud so we both hear.

# page
night mira,dev
Dev: The star leads the boat by night.
Mira: The bell is soft, but not done.

# page
night mira,dev
Mira: I want to skip to the end.
Dev: If we skip, it may ring again.

# page
stacks mira,dev
Mira: I skipped two lines just now.
Dev: Hear that, the bell got loud.

# page
stacks mira,dev
Mira: I will go back and read them.
Dev: Each line has to be heard.

# page
library mira,dev
Dev: The boat can see the dock now.
Mira: The star was right all along.

# page
library mira,dev
Mira: On the last page, the boat rests.
Dev: Listen now, the bell has stopped.

# page
library page,mira
Page: A story rests when a kid hears it.
Mira: We read the whole book aloud.

# page
library page,dev
Page: Why did the bell ring at all?
Dev: A story needed a kid to hear it.

# page
night mira,dev
Mira: Reading aloud made the bell stop.
Dev: Hiding it only made it worse.

# page
night mira,dev
Mira: We should read it to Page too.
Dev: She can be the next to hear.

# page
library page,mira
Page: I would like to hear it.
Mira: Then sit with us by the stool.

# page
library page,dev
Dev: I will start at the first line.
Page: I am glad to be the one.

# page
stacks page,mira
Mira: The boat is lost, but not for long.
Page: The paper star is a kind guide.

# page
stacks page,dev
Dev: Now the boat finds the dock.
Page: And the bell stays still for us.

# page
library mira,dev
Mira: Who should hear it next time?
Dev: The little kid by the desk.

# page
library mira,dev
Dev: She likes boats and night stars.
Mira: We can ask her after school.

# page
night page,mira
Page: A bell is a call, not a warning.
Mira: We will bring a kid to hear.

# page
night page,dev
Page: Do not hide it if it rings.
Dev: We will read the story aloud.

# page
library mira,dev
Mira: I will write her name on a card.
Dev: The card can mark the stool.

# page
library mira,dev
Dev: Next bell, we will not be scared.
Mira: We know what the sound means.

# page
stacks mira,dev
Mira: The picture book can stay here.
Dev: The library will keep it safe.

# page
stacks mira,dev
Mira: I am glad we stayed to read.
Dev: The night bell is quiet now.

# page
library mira,dev
Mira: One story, one kid, one calm bell.
Dev: That is a good club rule.

# page
library page,dev
Page: You chose a kind next step.
Dev: The kid will hear it from us.

# page
night mira,dev
Mira: We can put the bell back.
Dev: It can rest until it is needed.

# page
night mira,dev
Mira: If it rings, we read aloud.
Dev: And a kid will be there to hear.
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
Dev: The last page is fully blank.

# page
library mira,dev
Mira: The last page of words is missing.
Dev: I see no ink on it at all.

# page
stacks mira,dev
Mira: Let us search the desk first.
Dev: I will check the floor too.

# page
stacks mira,dev
Dev: No loose page under the desk.
Mira: The blank page is still blank.

# page
library mira,dev
Mira: Maybe the words fell out here.
Dev: I see a scrap by the chair.

# page
library mira,dev
Mira: The scrap says, Hide the light.
Dev: That ending sounds mean to me.

# page
stacks mira,dev
Dev: That mean end is not my pick.
Mira: Let us keep looking for the real page.

# page
stacks mira,dev
Mira: Check the book beside this one.
Dev: I feel a card in the back.

# page
night mira,dev
Dev: This card was used as a bookmark.
Mira: The bookmark is full of words.

# page
night mira,dev
Mira: These are the missing last words.
Dev: They tell of a dark wood.

# page
library mira,dev
Mira: A hero stands with one lantern.
Dev: The lantern is her only light.

# page
library mira,dev
Dev: Two paths wait, and both look hard.
Mira: One path is safe if she keeps it.

# page
stacks mira,dev
Mira: The other path has a lost child.
Dev: If she keeps the lantern, the child waits.

# page
stacks mira,dev
Dev: Let me press the bookmark on the page.
Mira: The words will not stick to it.

# page
library mira,dev
Mira: The page is blank once I let go.
Dev: The bookmark is not the fix.

# page
library page,mira
Page: Some endings wait for a fair choice.
Mira: What does fair mean in this tale?

# page
library page,dev
Page: Fair means both people get care.
Dev: So one light for two is fair.

# page
library mira,dev
Mira: She could hide the light and run.
Dev: Then the child stays in the dark.

# page
night mira,dev
Dev: Or she could break the lantern.
Mira: Then no one has any light.

# page
night mira,dev
Mira: Hide and break are both mean.
Dev: A fair end would share the lantern.

# page
stacks mira,dev
Mira: What if we try the mean one first?
Dev: Just to see if ink comes back.

# page
stacks mira,dev
Dev: I will say, Hide the light.
Mira: The blank page does not change.

# page
library mira,dev
Mira: Now we say, Break the lantern.
Dev: Still no words, still a blank page.

# page
library mira,dev
Dev: Mean choices do not bring ink.
Mira: We should try the fair one.

# page
night mira,dev
Mira: I will say the choice out loud.
Dev: Share the lantern, and walk slow.

# page
night mira,dev
Dev: Look, the ink is coming back.
Mira: The blank page is filling up.

# page
library mira,dev
Mira: She shares the lantern with the child.
Dev: Each of them holds half the glow.

# page
library mira,dev
Dev: They reach the town gate side by side.
Mira: The lantern is dim, but it lasts.

# page
stacks mira,dev
Mira: The last line thanks the reader.
Dev: Our fair idea brought the words.

# page
stacks mira,dev
Dev: Share the lantern was the right pick.
Mira: Hide and break left the page blank.

# page
library page,mira
Page: You chose a fair ending today.
Mira: We wrote it as a team.

# page
library page,dev
Page: The words came back for a reason.
Dev: We shared the lantern in the tale.

# page
night mira,dev
Mira: A blank page can wait for a choice.
Dev: It asked us what would be fair.

# page
night mira,dev
Mira: I am glad we did not rush it.
Dev: A mean end would have felt wrong.

# page
library mira,dev
Mira: Let us read the new last page.
Dev: I will read the first new line.

# page
library mira,dev
Dev: The hero does not leave the child.
Mira: She shares, and they both get home.

# page
stacks mira,dev
Mira: We should write our names on a note.
Dev: The note can say we chose fair.

# page
stacks mira,dev
Dev: A kid can choose the fair end too.
Mira: We will leave the tale as it is.

# page
library mira,dev
Mira: The bookmark can go back in the book.
Dev: It is a spare, not the real end.

# page
library mira,dev
Mira: I like that the child is safe too.
Dev: Fair light is better than a mean win.

# page
night mira,dev
Mira: No one had to break the lantern.
Dev: No one had to hide the light.

# page
night mira,dev
Dev: Share was the choice that worked.
Mira: The words came back for that.

# page
library page,dev
Page: Put the book on the shelf with care.
Dev: The last page of words is here now.

# page
library mira,dev
Mira: We can tell the club this tale.
Dev: Fair endings are worth the wait.

# page
stacks mira,dev
Mira: The blank page made me mad at first.
Dev: The search took a long time.

# page
stacks mira,dev
Dev: The mean scrap was a trap.
Mira: We did not fall for it.

# page
night mira,dev
Mira: I feel calm now that it is done.
Dev: The lantern tale has a good end.

# page
night mira,dev
Dev: Next book, we look for a fair end.
Mira: And we will not break a thing.
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
Mira: Rain taps on the library windows.
Dev: The big lamp just clicked off.

# page
night mira,dev
Mira: I cannot see the shelves at all.
Dev: This is an outage, not noon.

# page
library mira,dev
Dev: No one painted the room dark.
Mira: The lamp went out, that is all.

# page
library mira,dev
Mira: The lights may stay off a while.
Dev: We need a small light to read.

# page
stacks mira,dev
Mira: The club book is on this shelf.
Dev: The ribbon in it still glows.

# page
stacks mira,dev
Dev: Let me pull the ribbon free.
Mira: Hold it up like a small moon.

# page
library mira,dev
Mira: It shows one shelf at a time.
Dev: We can share this small light.

# page
library mira,dev
Dev: Your turn to hold the ribbon.
Mira: Then I will pass it back to you.

# page
night mira,dev
Mira: We can read a chapter like this.
Dev: I want to race to the end.

# page
night mira,dev
Mira: If we rush, we may miss a line.
Dev: Fine, we will take turns and go slow.

# page
stacks mira,dev
Dev: I will read the first page.
Mira: I will hold the ribbon still.

# page
stacks mira,dev
Mira: Now I read, and you hold the glow.
Dev: The ribbon glow is small but clear.

# page
library mira,dev
Dev: This part is good, do not skip.
Mira: I will not rush the chapter.

# page
library page,mira
Page: I am by the tall shelf.
Mira: We hear you, what is wrong?

# page
stacks page,mira
Page: I lost the door in the dark.
Mira: Stay there, we will come to you.

# page
night page,dev
Dev: Keep your hands on the books.
Page: I am glad to hear your voice.

# page
library mira,dev
Mira: We should help Page get out first.
Dev: We can mark the chapter and go.

# page
stacks mira,dev
Dev: The ribbon shows a narrow path.
Mira: Step only where the glow falls.

# page
stacks mira,dev
Mira: Page, take my arm and walk slow.
Dev: I will hold the ribbon high.

# page
night page,dev
Page: I can see my shoes now.
Dev: The ribbon glow will lead you.

# page
library mira,dev
Mira: A chair leg is in the way.
Dev: Wait, I will move it aside.

# page
library page,mira
Page: I almost tripped on that leg.
Mira: We will go even slower now.

# page
night mira,dev
Dev: I tried to rush and the glow dipped.
Mira: Slow steps keep the ribbon bright.

# page
night page,mira
Page: Do not shout, I can hear you.
Mira: We will not shout or hide the door.

# page
stacks mira,dev
Mira: The door is ten steps ahead.
Dev: Count them with me, slow and loud.

# page
stacks page,dev
Page: One, two, three, I see a shine.
Dev: That shine is the door handle.

# page
library page,mira
Page: Four, five, six, the air feels new.
Mira: We are close, so count the rest.

# page
library page,dev
Dev: The door handle is in your hand.
Page: Fresh air, you two kept me safe.

# page
night mira,dev
Mira: The ribbon glow led you out.
Dev: A small light was enough for Page.

# page
night page,mira
Page: Thank you for not leaving me.
Mira: The club can be a light too.

# page
library mira,dev
Dev: The lamp is still out in there.
Mira: We can go back and read.

# page
library mira,dev
Mira: Our chapter is waiting for us.
Dev: We take turns, and we do not rush.

# page
stacks mira,dev
Dev: Your turn to hold the ribbon now.
Mira: I will read this page in full.

# page
stacks mira,dev
Mira: Now you read, and I hold the glow.
Dev: I like this slow way better.

# page
night mira,dev
Dev: I almost skipped a line again.
Mira: Go back, the outage can wait.

# page
night mira,dev
Mira: The line you skipped had the clue.
Dev: I am glad you made me stop.

# page
library mira,dev
Mira: Two pages left in the chapter.
Dev: We can do them one by one.

# page
library mira,dev
Dev: I will not race the last page.
Mira: Read it like the door walk.

# page
stacks mira,dev
Mira: The hero finds the path at last.
Dev: That is the end of the chapter.

# page
stacks mira,dev
Dev: We got there without a rush.
Mira: The ribbon is still glowing soft.

# page
night page,dev
Page: I can see you from the door.
Dev: The outage is not over yet.

# page
night page,mira
Page: Come out if your eyes are tired.
Mira: We just have to put the book back.

# page
library mira,dev
Mira: The ribbon goes back in the book.
Dev: We do not need it in our pockets.

# page
library mira,dev
Dev: Look, the lamp is coming back on.
Mira: It holds a steady glow this time.

# page
stacks mira,dev
Mira: The library is bright again now.
Dev: The outage did not last all night.

# page
stacks page,mira
Page: When the lamp returns, we check the room.
Mira: The chair is back by the table.

# page
library page,dev
Page: You led me with a ribbon glow.
Dev: We shared it and took our turns.

# page
library mira,dev
Mira: Small help was enough for the walk.
Dev: And enough for the whole chapter.

# page
night mira,dev
Mira: I am glad we stayed slow.
Dev: I feel brave in the dark now.

# page
night mira,dev
Dev: Next outage, we know what to do.
Mira: Share the light and take turns.

# page
library mira,dev
Mira: We should tell the club the plan.
Dev: A ribbon can be a night tool.

# page
library page,mira
Page: Keep the ribbon in the club book.
Mira: We will, so the next pair can use it.

# page
stacks mira,dev
Dev: I liked the slow chapter a lot.
Mira: The plot made sense when we did not skip.

# page
stacks mira,dev
Mira: Page is safe at the main door.
Dev: The ribbon glow did that job.

# page
night mira,dev
Mira: Noon was bright, this was not noon.
Dev: And no one painted the walls.

# page
night mira,dev
Dev: The lamp went out, and we stayed calm.
Mira: That is the story I will tell.

# page
library mira,dev
Mira: Our chapter card is in the book.
Dev: We can start the next one by day.

# page
library mira,dev
Dev: I do not need to race ahead.
Mira: Slow light still gets you there.

# page
stacks page,dev
Page: You two were a good team tonight.
Dev: The library felt kind in the dark.

# page
library mira,dev
Mira: I am glad we had the ribbon.
Dev: A small glow can lead the way.
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
Mira: This hold shelf has one wide book.
Dev: It looks dusty on the top.

# page
stacks mira,dev
Dev: No one has pulled it in a long time.
Mira: It has been waiting for us.

# page
library mira,dev
Mira: The pages smell like old rain.
Dev: There is a card in the front.

# page
library mira,dev
Mira: The card says, Read me to a new friend.
Dev: Not burn it, and not sell it.

# page
library mira,dev
Dev: It has been patient for so long.
Mira: We should not rush past a patient book.

# page
stacks mira,dev
Mira: A kid is reaching for our book.
Dev: Her hand is on the dusty cover.

# page
stacks mira,dev
Dev: Wait, that book is on hold for us.
Mira: She does not see a hold card.

# page
library page,mira
Page: Let me see the slip in the back.
Mira: We put our names on it last week.

# page
library page,dev
Page: A hold means the book waits for you.
Dev: So no one else should take it home.

# page
library page,mira
Page: She can read it after your turn.
Mira: We will not grab it from her hands.

# page
stacks mira,dev
Dev: I feel mad that she touched it.
Mira: Page said to wait, so we wait.

# page
stacks mira,dev
Mira: Waiting is hard when we want it now.
Dev: A patient kid does not yank.

# page
night mira,dev
Dev: She put it back on the hold shelf.
Mira: Good, our dusty book is still there.

# page
night mira,dev
Mira: Do we read it now or wait more?
Dev: Our hold starts today, Page said so.

# page
library page,dev
Page: You may take it for this week.
Dev: Thank you for trusting our hold.

# page
library mira,dev
Mira: I feel trusted with this book.
Dev: We will treat it with care.

# page
stacks mira,dev
Dev: Let me wipe the dust with a cloth.
Mira: The cover looks less dusty now.

# page
stacks mira,dev
Mira: The card still says to read it out.
Dev: Read me to a new friend, it says.

# page
library mira,dev
Mira: Who can we invite to hear it?
Dev: The book wants a new kid to hear.

# page
library mira,dev
Dev: Should we invite Page to sit?
Mira: Yes, she is new to this tale.

# page
library page,mira
Mira: Page, may we invite you to hear?
Page: I would like that, let me sit.

# page
library page,dev
Page: Did you need me to fix the roof?
Dev: No, and we do not want a race.

# page
night page,mira
Mira: We invite you so a new kid can hear.
Page: Start at the first line, even if slow.

# page
night page,dev
Dev: Once, a bridge waited for a walker.
Page: I like this patient kind of start.

# page
library mira,dev
Mira: The walker was afraid of the gap.
Dev: The bridge did not rush that walker.

# page
library page,mira
Page: The bridge was patient, just like this book.
Mira: It waited for the right feet.

# page
stacks mira,dev
Dev: The walker took one board at a time.
Mira: That is why this book could wait.

# page
stacks page,dev
Page: A patient story is still alive.
Dev: We did not need to burn it.

# page
library mira,dev
Mira: And we would not sell a book like this.
Dev: We read it, just as the card asked.

# page
library page,mira
Page: I am glad you let me hear it.
Mira: The card asked for a new friend.

# page
night mira,dev
Dev: We can put a fresh card in the box.
Mira: The fresh card can say, Ask a new friend.

# page
night mira,dev
Mira: Next week this book will not be dusty.
Dev: A new kid can hear it then.

# page
library mira,dev
Dev: Waiting was not the same as being left.
Mira: The hold kept it safe for us.

# page
library mira,dev
Mira: I felt trusted when we got our turn.
Dev: We did not grab it from the other kid.

# page
stacks page,dev
Page: I think of the bridge when I get stuck.
Dev: Then the story did its work.

# page
stacks mira,dev
Mira: The dusty smell is almost gone.
Dev: We can invite one more kid next time.

# page
library mira,dev
Mira: Our names stay on the hold slip.
Dev: When the week ends, we bring it back.

# page
library page,mira
Page: You were patient with the other kid.
Mira: She can have a turn after us.

# page
night mira,dev
Dev: I was sad when her hand touched it.
Mira: Then Page told us what a hold means.

# page
night mira,dev
Mira: That talk was the help we needed.
Dev: We waited, and we felt trusted.

# page
library mira,dev
Mira: The walker is on the last board.
Dev: The gap is not so wide now.

# page
library page,dev
Page: The bridge held for the slow walker.
Dev: His patient steps got him across.

# page
stacks mira,dev
Mira: That is the end of the tale.
Dev: We read it all to a new friend.

# page
stacks mira,dev
Dev: The card can stay in the front.
Mira: It still asks for a new friend.

# page
night mira,dev
Mira: Look, the other kid is back.
Dev: She may want the book again.

# page
night page,mira
Page: I can tell her how a hold works.
Mira: Please do, so she does not feel shut out.

# page
library page,dev
Page: This book is on hold until next week.
Dev: You can hear the tale with us now.

# page
library mira,dev
Mira: We invite you to hear the end.
Dev: Then the book gets one more new friend.

# page
stacks mira,dev
Mira: She sat down and did not grab it.
Dev: She looks glad to wait her turn.

# page
stacks mira,dev
Dev: I will read the bridge part again.
Mira: Slow, so our new friend can hear.

# page
library page,mira
Page: You did not sell it or hide it.
Mira: We did not burn it, we shared it.

# page
library mira,dev
Mira: I feel calm about the hold now.
Dev: Trusted feels much better than mad.

# page
night mira,dev
Dev: The dusty book has a new life.
Mira: All it needed was a patient pair.

# page
night mira,dev
Mira: Next time we see dust, we will look.
Dev: A hold slip may be in the back.

# page
library mira,dev
Mira: We can invite a friend each week.
Dev: The card asked us to do just that.

# page
library page,dev
Page: I am glad you waited your turn.
Dev: The book was patient, so we were too.

# page
stacks mira,dev
Mira: Put it back when our week ends.
Dev: The next kid on the hold can go.

# page
stacks mira,dev
Dev: I will not take a book too soon.
Mira: We wait, and that keeps trust.

# page
library mira,dev
Mira: This tale can live a long time.
Dev: If we stay patient and kind.

# page
night mira,dev
Mira: I am glad we got our turn.
Dev: And glad we could invite Page.
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
Mira: The glow sits on the club table tonight.
Dev: We could take the book home and hide it.

# page
night mira,dev
Mira: A secret club sounds special at first.
Dev: It also sounds small if no one else can come.

# page
library mira,dev
Mira: If we hide it, no kid can borrow it.
Dev: And we should not sell a book like this.

# page
library page,mira
Page: Books in this room are here to borrow.
Mira: Not to hide, and not to sell.

# page
library page,dev
Page: If you lock the door, new kids cannot join.
Dev: A closed club would keep the stories for two.

# page
stacks mira,dev
Mira: Only two people could use the stories then.
Dev: That is why a closed club is unfair.

# page
stacks mira,dev
Dev: The room is not too dark for a club.
Mira: And the books are not too long to share.

# page
library mira,dev
Mira: Those tales helped us because we could reach them.
Dev: If we keep the glow, we close that path.

# page
library mira,dev
Mira: I will set the glowing book back in its gap.
Dev: It can shine a little and stay for others.

# page
night mira,dev
Dev: Others can borrow it on club days.
Mira: Then they bring it back for the next kid.

# page
library page,dev
Page: You can make a card that says how to join.
Dev: Any new member must read with care.

# page
library page,mira
Page: A member also puts each book back.
Mira: I can write those rules on the card.

# page
stacks mira,dev
Dev: Come after school, and bring a friend.
Mira: Listen first, and do not race the pages.

# page
stacks mira,dev
Mira: I will miss the ribbon in my pocket.
Dev: You can borrow it on club days.

# page
night mira,dev
Mira: Then I return it so the shelf stays full.
Dev: A secret in my pocket would not be fair.

# page
garden mira,dev
Mira: We can tape one card by the tiny door.
Dev: And one card by the bell for new kids.

# page
garden mira,dev
Dev: The club stays open even when we go home.
Mira: A shared room can feel safe for more kids.

# page
library page,mira
Page: A secret can feel safe for a short time.
Mira: A shared room feels safe for a longer time.

# page
library page,dev
Page: This club is safer because more kids can help.
Dev: I like that better than a closed door.

# page
night mira,dev
Mira: The bell gave one soft ring, as if it agreed.
Dev: Next kid, the shelf is yours to borrow.

# page
library mira,dev
Mira: Look, a new kid is at the club card.
Dev: He is reading the rules with a frown.

# page
library mira,dev
Dev: He says he wants to race the first book.
Mira: We should show him how the club works.

# page
stacks mira,dev
Mira: First we pick a book we can both reach.
Dev: Then we sit, and we do not rush.

# page
stacks mira,dev
Dev: He grabbed the book and flipped to the end.
Mira: That race will make him miss the good parts.

# page
night mira,dev
Mira: Let us teach him the club pace.
Dev: One page, then we talk, then the next.

# page
night mira,dev
Dev: He still wants to skip to the last page.
Mira: If he skips, the tale will not make sense.

# page
library page,mira
Page: A member listens before he races ahead.
Mira: We can show him that on this page.

# page
library mira,dev
Mira: See this small star in the corner.
Dev: A fast race would skip right past it.

# page
stacks mira,dev
Dev: He went back and found the star.
Mira: Now he sees why we do not race.

# page
stacks mira,dev
Mira: Do you still want to race the club?
Dev: He shook his head and smiled at us.

# page
library mira,dev
Dev: He wants to join and be a member.
Mira: That is his choice, and it is a good one.

# page
library page,dev
Page: A new member must put books back.
Dev: He nodded, and he set the book down.

# page
night mira,dev
Mira: We did not hide the glowing book at home.
Dev: We put it back so others can borrow it.

# page
night mira,dev
Mira: He can borrow it on the next club day.
Dev: Then he returns it for the kid after him.

# page
garden mira,dev
Mira: We showed him the tiny door and the bell.
Dev: He does not have to keep them a secret.

# page
garden mira,dev
Dev: The club is a place, not a locked box.
Mira: Any new member can come after school.

# page
library mira,dev
Mira: I feel glad we did not stay a pair only.
Dev: Two people were not enough for these tales.

# page
library page,mira
Page: You kept the club open, and that was fair.
Mira: A secret would have left kids out.

# page
stacks mira,dev
Dev: He is reading the first page the slow way.
Mira: He smiled when he found the next clue.

# page
stacks mira,dev
Mira: We can add his name to the member card.
Dev: He chose to join, so the card should say so.

# page
library mira,dev
Mira: He flipped ahead again when we looked away.
Dev: The race habit is still in his hands.

# page
library mira,dev
Dev: The glow on the book got thin just now.
Mira: Fast pages make the good light fade.

# page
night mira,dev
Mira: Come back to the page with the star.
Dev: We will read it with him, line by line.

# page
night mira,dev
Dev: He put his finger on each small part.
Mira: The glow is coming back as we go slow.

# page
stacks page,mira
Page: This is how a member learns the pace.
Mira: Not by a race, and not by a secret.

# page
stacks mira,dev
Dev: He read the line and did not skip.
Mira: He looks proud, and he looks calm too.

# page
library mira,dev
Mira: The books were not too long for him.
Dev: The room was not too dark to share.

# page
library mira,dev
Dev: Only two people would have been unfair.
Mira: Now a new member can use the stories.

# page
night mira,dev
Mira: He will borrow one book and bring it back.
Dev: That rule keeps the club open for all.

# page
night page,dev
Page: I can point new kids to your card.
Dev: Tell them to listen first and join if they like.

# page
garden mira,dev
Mira: The tiny door stays shut until club time.
Dev: We do not stay past the bell, and he knows.

# page
garden mira,dev
Dev: He waved when we said he was a member.
Mira: I think he will come back after school.

# page
library mira,dev
Mira: The glowing book is in its gap on the shelf.
Dev: Others can borrow it, and that was our choice.

# page
library mira,dev
Dev: I do not feel sad about letting it stay.
Mira: I feel glad that more kids can hold it.

# page
stacks mira,dev
Mira: A closed club would have fit in a pocket.
Dev: An open club fits a whole room of kids.

# page
stacks page,mira
Page: You made a place that can grow.
Mira: Each new member makes the club stronger.

# page
night mira,dev
Mira: We showed him the pace, and he chose it.
Dev: He did not have to race to belong.

# page
night mira,dev
Dev: Next time we can save him a chair.
Mira: The chair will mean he is one of us.

# page
library page,dev
Page: The bell is quiet, and the shelf is full.
Dev: The club stays open when we go home.

# page
library mira,dev
Mira: I am glad we did not keep a secret.
Dev: A member can borrow, read, and return.
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
Mira: I am done with this chapter now.
Dev: I am still on page two of it.

# page
library mira,dev
Dev: I am looking at the picture in the corner.
Mira: I did not look at the picture at all.

# page
stacks mira,dev
Mira: I was ready for the next book fast.
Dev: There is a tiny key drawn in the window.

# page
stacks mira,dev
Mira: I did not see a key in that picture.
Dev: It is a small clue in the corner.

# page
library mira,dev
Mira: I missed it because I read too fast.
Dev: It is not the front door or the bus.

# page
library page,mira
Page: A fast pace can catch the shape of a tale.
Mira: I know the boat left, but not the clue.

# page
library page,dev
Page: A slow pace can catch a detail.
Dev: I saw the key, but not why they sailed.

# page
night mira,dev
Mira: My fast pace missed a small clue.
Dev: My slow pace missed the reason they left.

# page
night mira,dev
Dev: A reading race is hurting the fun.
Mira: I tap my foot and you look sad.

# page
night mira,dev
Mira: I want to win, and that feels bad now.
Dev: The chapter is not a race track.

# page
stacks mira,dev
Mira: Let us try a slower way for this part.
Dev: You look at each picture, and I read the words.

# page
stacks mira,dev
Dev: I will read the words straight through once.
Mira: I will put my finger on each picture.

# page
library mira,dev
Mira: Tell me the shape, and I will tell the clue.
Dev: The boat left at dawn to beat a storm.

# page
library mira,dev
Dev: Now you tell me the detail you found.
Mira: The key in the window opens a dock box.

# page
night mira,dev
Mira: I would have missed that clue at my old pace.
Dev: And I would have missed why they sailed.

# page
night mira,dev
Dev: Each pace can find something the other missed.
Mira: Only the fast way does not have to win.

# page
library page,mira
Page: Pace does matter, and both ways can help.
Mira: I will not say pace does not matter.

# page
library mira,dev
Dev: I still feel a rush in my hands.
Mira: Then we set a pace and we stick to it.

# page
stacks mira,dev
Mira: We stop at the end of this chapter.
Dev: Even if the next part looks like fun.

# page
stacks mira,dev
Dev: I want to race one more page.
Mira: If you rush, we may lose the fun again.

# page
night mira,dev
Mira: You skipped the picture on this page.
Dev: I saw words, and I did not look.

# page
night mira,dev
Dev: The small clue was a star by the key.
Mira: You rushed, so you missed that detail.

# page
library mira,dev
Mira: This is the setback we hoped to skip.
Dev: I said I would go slow, and I did not.

# page
library mira,dev
Dev: I am sorry I rushed the good part.
Mira: We can go back and use your real pace.

# page
stacks mira,dev
Mira: Your pace is slow, and that is a skill.
Dev: Your pace is quick, and that is a skill too.

# page
stacks mira,dev
Dev: I will ask what happens next, not skip.
Mira: I will pause when a detail shows up.

# page
library mira,dev
Mira: Let us set our own pace for the rest.
Dev: No race, and no one has to feel slow.

# page
library mira,dev
Dev: I read two lines, then I check the picture.
Mira: I read the page, then I hunt for a detail.

# page
night mira,dev
Mira: The key clue is in my notes now.
Dev: The dawn line is in my notes too.

# page
night mira,dev
Dev: The map shows the path and a small star.
Mira: We skipped that star when we raced.

# page
garden mira,dev
Mira: Sit by the window and do not argue.
Dev: The fun is back when we are not racing.

# page
garden page,mira
Page: Stop while the story is still good.
Mira: We do not have to drain the fun.

# page
library mira,dev
Dev: If we race to the end, the joy thins.
Mira: So we close the book on a good page.

# page
library mira,dev
Mira: The chapter can wait until the next club day.
Dev: My pace will be slow, and I will still ask.

# page
stacks mira,dev
Dev: Your pace can stay quick if you pause.
Mira: I can pause for a detail and still be me.

# page
stacks mira,dev
Mira: I found the clue I missed the first time.
Dev: I found the reason the boat left at dawn.

# page
night mira,dev
Mira: The key opens the dock box in the tale.
Dev: Inside is a note about the storm.

# page
night mira,dev
Dev: Each pace found a piece the other needed.
Mira: Pace does matter, and both ways work.

# page
library page,dev
Page: A fast reader and a slow reader can share.
Dev: The club can welcome both kinds of pace.

# page
library mira,dev
Mira: The story is big enough for both of us.
Dev: We will not turn reading into a race.

# page
stacks mira,dev
Mira: When you rushed, I felt the fun drop.
Dev: I saw your face and I felt bad too.

# page
stacks mira,dev
Dev: I rushed because I did not want to be last.
Mira: Last is not bad if the detail is good.

# page
night mira,dev
Mira: We can mark the page and stop here.
Dev: The next chapter will be here for us.

# page
night mira,dev
Dev: I want one more page, but I can wait.
Mira: Stopping on this page keeps the tale sweet.

# page
library mira,dev
Mira: My old pace would have blown past the clue.
Dev: My old pace would have missed the dawn line.

# page
library mira,dev
Dev: We each keep a pace that fits.
Mira: And we borrow the other pace when stuck.

# page
garden mira,dev
Mira: The picture clue was small, but it matters.
Dev: The plot clue was big, and it matters too.

# page
garden mira,dev
Dev: I will not rush just to match you.
Mira: I will not tap my foot at your pace.

# page
library page,mira
Page: You set your own pace and kept the fun.
Mira: We stopped while the story was still good.

# page
library page,dev
Page: What did the fast read miss in the picture?
Dev: A small clue, the key in the window.

# page
stacks mira,dev
Mira: I will tell the club about our two ways.
Dev: A fast way and a slow way can both help.

# page
stacks mira,dev
Dev: If a kid wants a race, we can say no.
Mira: We can show them how a calm pace feels.

# page
night mira,dev
Mira: The chapter we saved will taste better later.
Dev: I like a tale that is still waiting.

# page
night mira,dev
Dev: My pace is still slow, and I am glad.
Mira: My pace is still quick, and I can pause.

# page
library mira,dev
Mira: We do not need the same pace to be friends.
Dev: Friends can read side by side in two ways.

# page
library mira,dev
Dev: The bus was never the clue in this tale.
Mira: And the front door was not the missed part.

# page
stacks mira,dev
Mira: Only the fast way is not the one true way.
Dev: Each pace can find something worth keeping.

# page
stacks mira,dev
Dev: I will bring my slow eyes next time.
Mira: I will bring my quick eyes and a pause.

# page
night page,dev
Page: Leave the book on a good page for next time.
Dev: Our pace will be there when we come back.

# page
library mira,dev
Mira: I am glad the race did not win.
Dev: Our own pace kept the story fun.
`,
  }),
];
