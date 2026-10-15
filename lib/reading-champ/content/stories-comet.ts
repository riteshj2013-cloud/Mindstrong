import { g, makeStory, q } from "./script";

export const COMET_STORIES = [
  makeStory({
    id: "comet-quiet",
    title: "The Quiet Planet",
    seriesId: "captain-comet",
    episode: 1,
    genre: "fiction",
    subgenre: "mystery",
    themes: ["space", "teamwork"],
    ladderLevel: 6,
    expectedMinutes: 12,
    stretchEligible: true,
    glossary: [g("planet", "A world that travels around a star."), g("beacon", "A light that calls for help.")],
    talkAbout: "Pip felt scared and still chose to help. What helps you be brave?",
    comprehension: [
      q(
        "What did Comet and Pip find?",
        [["beacon", "A blinking beacon", "💡"], ["cake", "A cake", "🎂"], ["map", "A paper map", "🗺️"]],
        "beacon",
        "recall",
      ),
      q(
        "Why do they stay together?",
        [["help", "Someone may need help", "🤝"], ["race", "They want to race", "🏁"], ["sleep", "They want to nap", "😴"]],
        "help",
        "inference",
      ),
    ],
    script: `
# page
space comet,pip
Comet: Pip, this planet is very quiet.
Pip: Did the crew leave this place?

# page
space comet,pip
Pip: I see no lights at all.
Comet: The homes look shut and still.

# page
space comet,pip
caption: Their ship sat on gray sand.
Comet: The wind makes no sound here.

# page
space pip,comet
Pip: This quiet makes my heart beat.
Comet: Stay close while we look around.

# page
space comet,pip
Comet: We will walk past these huts.
Pip: Every door is shut tight.

# page
space comet,pip
caption: A sign hung and did not move.
Pip: No one calls out to us.

# page
space pip,comet
Pip: Is this path safe for us?
Comet: We look first, then we step.

# page
space comet,pip
Comet: I see a faint glow ahead.
Pip: It sits low by the rocks.

# page
space comet,pip
caption: A blinking beacon sat by the rocks.
Comet: That light is calling for help.

# page
space pip,comet
Pip: The beacon blinks on and off.
Comet: A blinking light means a call.

# page
space comet,pip
Comet: This planet has a beacon.
Pip: So the crew left us a sign.

# page
space pip,comet
Pip: I feel scared in this quiet.
Comet: My hands feel a bit cold.

# page
space comet,pip
Comet: I feel scared too, Pip.
Pip: We can still choose to help.

# page
space comet,pip
Comet: A person may need our help.
Pip: Then we should not turn back.

# page
space pip,comet
Pip: Can we go slow from here?
Comet: Yes, and we stay together.

# page
space comet,pip
caption: Thick dust lay all along the path.
Pip: The blink is hard to see.

# page
space comet,pip
Comet: Dust blows over the beacon.
Pip: The light is fading fast now.

# page
space pip,comet
caption: A metal gate blocked the path.
Comet: It will not open for us.

# page
space pip,comet
Pip: I pull, but the gate sticks.
Comet: It is stuck in the dust.

# page
space comet,pip
Comet: Dust gets in my visor.
Pip: We stop and wipe it clear.

# page
space comet,pip
caption: The beacon light faded to a dim glow.
Comet: Do not rush this part.

# page
space pip,comet
Pip: I want to go back now.
Comet: A person may need us here.

# page
space comet,pip
Comet: We stay together and help.
Pip: I choose help, even if scared.

# page
space comet,pip
Comet: I will clear dust from it.
Pip: I can hold the lamp steady.

# page
space pip,comet
Pip: The gate still will not move.
Comet: We try one slow push now.

# page
space comet,pip
caption: A rock pinned the gate shut.
Pip: We can roll it a bit.

# page
space comet,pip
Comet: The gate opens a small crack.
Pip: Dust falls off the beacon.

# page
space pip,comet
Pip: The blink grows bright again.
Comet: Good, the call is still on.

# page
space comet,pip
caption: A small camp sat by the light.
Comet: A pack rests near the beacon.

# page
space pip,comet
Pip: No person is here right now.
Comet: But the call was still real.

# page
space pip,comet
Pip: I felt scared and still helped.
Comet: That was a brave choice, Pip.

# page
space comet,pip
Comet: Our air is fine for now.
Pip: We should not stay all night.

# page
space comet,pip
Comet: We stop for the day here.
Pip: We can come back later.

# page
space pip,comet
Pip: I mark this spot on our map.
Comet: The beacon is our main mark.

# page
space comet,pip
Comet: Next time we bring a rope.
Pip: And a bright lamp for dust.

# page
space comet,pip
caption: They left a note by the beacon.
Comet: The note says we will return.

# page
space pip,comet
Pip: We walk back slow, side by side.
Comet: The ship waits on the plain.

# page
space pip,comet
Pip: I look back at the blink.
Comet: It still calls across the dust.

# page
space comet,pip
Comet: Next day we find who called.
Pip: I will come back with you.

# page
space comet,pip
caption: They rested inside the quiet ship.
Pip: This day was long and good.

# page
space pip,comet
Pip: I feel better than before.
Comet: We made a clear plan too.

# page
space comet,pip
caption: The beacon kept blinking in the dust.
Comet: It can wait for one night.

# page
space pip,comet
Pip: Staying together was the right call.
Comet: Yes, we will go slow again.

# page
space comet,pip
Comet: We return when the light is up.
Pip: Until then, the plan can wait.
`,
  }),
  makeStory({
    id: "comet-signal",
    title: "Signal in the Dark",
    seriesId: "captain-comet",
    episode: 2,
    genre: "fiction",
    subgenre: "mystery",
    themes: ["space", "teamwork"],
    ladderLevel: 8,
    expectedMinutes: 12,
    stretchEligible: true,
    glossary: [
      g("hatch", "A small door on a ship or a rock."),
      g("pinch", "In a pinch means you are stuck and need a plan."),
      g("budge", "To move, even a little."),
    ],
    talkAbout: "The crew was in a pinch. What is a fair way to share when something is running low?",
    comprehension: [
      q(
        "What did the idiom in a pinch mean here?",
        [["stuck", "They might get stuck", "🛟"], ["snack", "They wanted a snack", "🍪"], ["song", "They sang a song", "🎵"]],
        "stuck",
        "inference",
      ),
      q(
        "What answered Pip?",
        [["tap", "A tap from inside", "🚪"], ["bird", "A bird", "🐦"], ["rain", "Rain", "🌧️"]],
        "tap",
        "recall",
      ),
      q(
        "What did Comet share?",
        [["air", "The air tank", "🫧"], ["cake", "A cake", "🎂"], ["map", "A treasure map", "🗺️"]],
        "air",
        "recall",
      ),
    ],
    script: `
# page
space comet,pip
Comet: The beacon still blinks on the rocks.
Pip: We came back to follow it.

# page
space comet,pip
Pip: I am glad we made a plan.
Comet: Stay close while we track the blink.

# page
space comet,pip
caption: They walked past the stuck gate.
Comet: The dust is thick on this path.

# page
space pip,comet
Pip: The rocks are dark up ahead.
Comet: Lamps on, and we go slow.

# page
space comet,pip
Comet: The blink leads us down a slope.
Pip: I will keep my steps with yours.

# page
space comet,pip
caption: Boot prints faded in the gray dust.
Pip: The wind hides them very fast.

# page
space pip,comet
Pip: I see a cave mouth ahead.
Comet: The blink comes from in there.

# page
space comet,pip
Comet: We step in with our lamps up.
Pip: The walls feel cold and still.

# page
space comet,pip
caption: The cave turns and the blink hides.
Pip: For a moment we lose the light.

# page
space comet,pip
Comet: Dust falls from the cave roof.
Pip: I stay right by your side.

# page
space comet,pip
Comet: We keep going, side by side.
Pip: I can see a faint blink now.

# page
space pip,comet
caption: The blink grew brighter near the back.
Pip: We are close to the call now.

# page
space pip,comet
Pip: My tank feels light on my back.
Comet: Let me check how much air is left.

# page
space comet,pip
caption: The air tank was getting low.
Comet: We do not have air to waste.

# page
space pip,comet
Pip: We are in a pinch right now.
Comet: In a pinch we might get stuck.

# page
space comet,pip
Comet: If the air runs out, we stop.
Pip: Then we could not reach the blink.

# page
space comet,pip
Comet: I will share my air tank.
Pip: We can take turns with it.

# page
space comet,pip
caption: Comet shared the air tank with Pip.
Pip: Your turn first, then it is mine.

# page
space pip,comet
Pip: I take a short turn now.
Comet: Then pass the tank back to me.

# page
space comet,pip
Comet: Sharing keeps both of us safe.
Pip: That is a fair plan, Comet.

# page
space comet,pip
Comet: Let me check the tank once more.
Pip: There is enough if we go slow.

# page
space comet,pip
caption: They moved slow to save the air.
Pip: The blink is just ahead of us.

# page
space pip,comet
Pip: I see a round shape in the rock.
Comet: Dust sits thick on that hatch.

# page
space comet,pip
caption: A hatch sat shut under the dust.
Pip: It looks like a small door.

# page
space pip,comet
Pip: I will wipe the dust off.
Comet: Good, now we can see the rim.

# page
space pip,comet
Pip: I pull the hatch with both hands.
Comet: Does the hatch budge at all?

# page
space comet,pip
caption: Pip pulled, but the hatch did not budge.
Comet: Let me try a strong pull.

# page
space comet,pip
Comet: It still will not budge for me.
Pip: A bar is stuck in the rim.

# page
space pip,comet
Pip: I brush more dust from the hatch.
Comet: The rim is clear, but it stays shut.

# page
space comet,pip
Comet: Let us look for a weak spot.
Pip: The hinge is packed with dust.

# page
space pip,comet
Pip: I chip the dust off the hinge.
Comet: The hatch still stays shut tight.

# page
space comet,pip
Comet: A person may be inside there.
Pip: How can we let them know we came?

# page
space comet,pip
Comet: Three taps, then we wait and listen.
Pip: I can tap on the hatch.

# page
space pip,comet
caption: Pip gave three slow taps on the hatch.
Comet: Now we stay still and wait.

# page
space comet,pip
Pip: I hear no tap back yet.
Comet: Count to ten, then we try again.

# page
space pip,comet
Pip: I will give three taps once more.
Comet: Same spot, and then we listen.

# page
space pip
caption: A tap from inside answers Pip.
Pip: I hear a tap from inside!

# page
space comet,pip
Comet: I hear that tap too, Pip.
Pip: One tap came back to us.

# page
space comet,pip
Comet: A person is in there now.
Pip: The tap means they heard us.

# page
space pip,comet
Pip: I feel hope and a bit of fear.
Comet: We can help if we use a plan.

# page
space comet,pip
Comet: We share the tank once more.
Pip: Then we lift the hatch on three.

# page
space pip,comet
Pip: I found a bar by the wall.
Comet: We can fit it under the rim.

# page
space comet,pip
caption: They fit the bar under the hatch.
Comet: On three, we pull up hard.

# page
space comet,pip
Pip: On three we pull up now!
Comet: Pull with me, nice and slow.

# page
space comet,pip
caption: The hatch began to budge at last.
Pip: It moved a tiny bit for us!

# page
space comet,pip
Comet: Keep pulling, the hatch is moving.
Pip: I can see a dark crack now.

# page
space pip,comet
Pip: The hatch opens more on this side.
Comet: One more pull and it should lift.

# page
space comet,pip
caption: The hatch opened with a slow groan.
Pip: I see a face down in there!

# page
space comet,pip
Comet: A scout climbs out of the hatch.
Pip: They look tired and low on air.

# page
space comet,pip
Comet: I will share the air tank again.
Pip: The scout can take a turn too.

# page
space comet,pip
caption: The scout took a long turn with the tank.
Pip: Sit here by the open hatch.

# page
space comet,pip
Comet: The scout was stuck a long time.
Pip: We heard that tap from inside.

# page
space pip,comet
caption: Pip helped the scout sit on a rock.
Comet: Our air can last if we rest.

# page
space comet,pip
Pip: The scout nods to say thanks.
Comet: We will wait here until the air is safe.

# page
space comet,pip
caption: The beacon blink went dark and still.
Pip: The call can rest now too.

# page
space comet,pip
Comet: The scout can walk if we help.
Pip: We go slow and share the air.

# page
space comet,pip
caption: Comet pointed the way back to the ship.
Pip: The path is dark, but we know it.

# page
space comet,pip
Comet: We rest when we reach the ship.
Pip: The day was hard, and we helped.

# page
space comet,pip
caption: They sat by the ship and passed the tank.
Pip: In a pinch, we shared and made a plan.

# page
space comet,pip
Comet: Next time the air will be full.
Pip: Today we rest, and that is good.
`,
  }),
];
