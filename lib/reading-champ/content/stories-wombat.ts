import { g, makeStory, q } from "./script";

const science = ["science", "why"];

export const WOMBAT_STORIES = [
  makeStory({
    id: "wombat-sky",
    title: "Why Is the Sky Blue?",
    seriesId: "wonder-wombat",
    episode: 1,
    genre: "nonfiction",
    subgenre: "science",
    themes: ["science", "sky"],
    ladderLevel: 5,
    expectedMinutes: 6,
    stretchEligible: false,
    glossary: [g("sunlight", "Light that comes from the sun."), g("scatters", "Spreads out in many directions.")],
    talkAbout: "Look outside together. What color is the sky right now, and what else can you notice?",
    comprehension: [
      q("Which light scatters to make the sky look blue?", [["blue", "Blue light", "🔵"], ["mud", "Mud", "🟤"], ["ink", "Ink", "🖤"]], "blue", "recall"),
      q("When can red light reach you more?", [["sunset", "At sunset", "🌅"], ["lunch", "At lunch", "🥪"], ["class", "In class", "✏️"]], "sunset", "recall"),
    ],
    script: `
# page
meadow wombat,dot
Wombat: Why is the sky blue?
Dot: It is not painted on.

# page
sky wombat
caption: Sunlight holds many colors.
Wombat: Air scatters the blue light most.

# page
sky wombat,dot
Dot: Scatters means it bounces around.
Wombat: That blue light reaches your eyes.

# page
meadow wombat
caption: The other colors scatter less.
Wombat: So the day sky looks blue.

# page
sky wombat,dot
Dot: Is space blue too?
Wombat: No, there is no air to scatter light.

# page
meadow wombat
caption: Wombat pointed at the clear air.
Dot: The blue is in the air, not in space.

# page
sky wombat,dot
Wombat: At sunset the path through air is long.
Dot: More blue light scatters away.

# page
meadow wombat
caption: Red and orange can reach you then.
Wombat: That is why sunset glows warm.

# page
sky wombat,dot
Dot: Clouds can hide the blue.
Wombat: They bounce all the colors back.

# page
meadow wombat,dot
caption: They looked up and named the colors they saw.
Wombat: The sky is a science question you can check.
`,
  }),
  makeStory({
    id: "wombat-leaves",
    title: "Why Do Leaves Fall?",
    seriesId: "wonder-wombat",
    episode: 2,
    genre: "nonfiction",
    subgenre: "science",
    themes: science,
    ladderLevel: 5,
    expectedMinutes: 6,
    stretchEligible: true,
    glossary: [g("autumn", "The season when many days grow cooler."), g("seal", "To close something so it stays shut.")],
    talkAbout: "Find a leaf and look for green, yellow, or brown. What do you think the tree is doing?",
    comprehension: [
      q("What fades in autumn?", [["green", "The green in the leaf", "🍃"], ["roots", "The roots", "🌱"], ["rain", "All the rain", "🌧️"]], "green", "recall"),
      q("Why does the leaf fall?", [["seal", "The tree seals the stem", "🍂"], ["pull", "A person pulls each one", "✋"], ["night", "Night deletes them", "🌙"]], "seal", "inference"),
    ],
    script: `
# page
forest wombat,dot
Dot: Why do leaves fall?
Wombat: Not every tree drops them.

# page
forest wombat
caption: In autumn, days get shorter and cooler.
Wombat: That is a signal for many trees.

# page
meadow wombat,dot
Wombat: They stop making the green color.
Dot: Then yellow and orange can show.

# page
forest wombat
caption: Those warm colors were in the leaf already.
Dot: The green was hiding them.

# page
forest wombat,dot
Wombat: The tree seals the leaf stem.
Dot: Seal means it closes the tiny tubes.

# page
meadow wombat
caption: Water stops going into that leaf.
Wombat: The leaf dries and lets go.

# page
forest wombat,dot
Dot: Does the tree die?
Wombat: No, it rests and saves its food.

# page
forest wombat
caption: Some trees stay green all year.
Wombat: They are built for a different plan.

# page
meadow wombat,dot
Dot: Fallen leaves turn into soil food.
Wombat: The tree can use that later.

# page
forest wombat,dot
caption: They pressed a yellow leaf in a notebook.
Wombat: Falling leaves are a plan, not a mistake.
`,
  }),
  makeStory({
    id: "wombat-ice",
    title: "Why Does Ice Float?",
    seriesId: "wonder-wombat",
    episode: 3,
    genre: "nonfiction",
    subgenre: "science",
    themes: science,
    ladderLevel: 6,
    expectedMinutes: 7,
    stretchEligible: false,
    glossary: [g("freezes", "Turns from liquid into ice."), g("liquid", "A wet form you can pour, like water.")],
    talkAbout: "If you have ice in a glass, watch it float. What else floats or sinks at home?",
    comprehension: [
      q("Why does ice float?", [["room", "Frozen water takes more room", "🧊"], ["glue", "Ice is full of glue", "🧴"], ["air", "Someone ties it up", "🎈"]], "room", "recall"),
      q("What can live under the ice?", [["fish", "Fish in the liquid water", "🐟"], ["fire", "A fire", "🔥"], ["sand", "Only dry sand", "🏜️"]], "fish", "inference"),
    ],
    script: `
# page
pond wombat,dot
Dot: This ice stays on top of the pond.
Wombat: It floats. Let us see why.

# page
burrow wombat
caption: Wombat filled a cup and marked the water line.
Dot: Now we freeze it and look again.

# page
burrow wombat,dot
Wombat: When water freezes, it spreads out.
Dot: The ice sits above the old line.

# page
pond wombat
caption: The same water takes more room as ice.
Wombat: So ice is light for its size.

# page
pond wombat,dot
Dot: Light for its size means it floats.
Wombat: The ice stays up. The liquid stays under it.

# page
pond wombat
caption: A winter pond freezes from the top.
Dot: The water below can stay liquid.

# page
pond wombat,dot
Wombat: Fish can live under the ice.
Dot: The top ice even helps keep them from the cold air.

# page
burrow wombat
caption: They checked the cup again the next day.
Wombat: Melted ice fits the first line.

# page
pond wombat,dot
Dot: So ice is still water.
Wombat: Yes. It is water that takes more room.

# page
meadow wombat,dot
caption: They slid a bit of ice into a bowl and watched it float.
Wombat: You can test this in a kitchen.
`,
  }),
  makeStory({
    id: "wombat-stars",
    title: "Why Do Stars Twinkle?",
    seriesId: "wonder-wombat",
    episode: 4,
    genre: "nonfiction",
    subgenre: "science",
    themes: ["science", "sky"],
    ladderLevel: 6,
    expectedMinutes: 7,
    stretchEligible: true,
    glossary: [g("twinkle", "To seem to flash or wink."), g("steady", "Staying the same, not flickering.")],
    talkAbout: "On a clear night, compare a star with a brighter planet if you can see one. Which one winks more?",
    comprehension: [
      q("What makes a star seem to twinkle?", [["air", "Moving air bends its light", "🌬️"], ["switch", "The star turns off", "💡"], ["birds", "Birds fly past", "🐦"]], "air", "recall"),
      q("Why do planets twinkle less?", [["bigger", "They look bigger in the sky", "🪐"], ["close", "They sit on the roof", "🏠"], ["paint", "They are painted on", "🎨"]], "bigger", "inference"),
    ],
    script: `
# page
moon wombat,dot
Dot: That star keeps winking.
Wombat: We say it twinkles. The star itself is steady.

# page
sky wombat
caption: Starlight travels a very long way.
Wombat: Then it must pass through our moving air.

# page
sky wombat,dot
Dot: Air is not still.
Wombat: Warm and cool bits bend the light a little.

# page
moon wombat
caption: Each bend sends the light a hair left or right.
Dot: So the star seems to flash.

# page
sky wombat,dot
Wombat: The star is not turning off.
Dot: Our air is wiggling the view.

# page
moon wombat
caption: A planet looks bigger than a star in the sky.
Wombat: The wiggles average out, so it twinkles less.

# page
sky wombat,dot
Dot: Is a planet closer than a far star?
Wombat: The ones we see at night are much closer than those stars.

# page
moon wombat
caption: Clouds can hide both stars and planets.
Dot: A clear night is the best test.

# page
sky wombat,dot
Wombat: If the air is very still, stars twinkle less.
Dot: The steady light was there the whole time.

# page
moon wombat,dot
caption: They watched one star and did not blink for a moment.
Wombat: Twinkle is a clue about air, not a star shutting its eye.
`,
  }),
  makeStory({
    id: "wombat-storm",
    title: "Why Do We See Lightning First?",
    seriesId: "wonder-wombat",
    episode: 5,
    genre: "nonfiction",
    subgenre: "science",
    themes: ["science", "weather"],
    ladderLevel: 7,
    expectedMinutes: 8,
    stretchEligible: true,
    glossary: [
      g("lightning", "A giant spark in a storm cloud."),
      g("thunder", "The sound that spark makes."),
      g("farther", "More distant."),
    ],
    talkAbout: "If a storm is near, where is a safe place to wait, and how can you tell if it is moving away?",
    comprehension: [
      q("Why do we see lightning before we hear thunder?", [["fast", "Light is much faster than sound", "⚡"], ["eyes", "Ears are broken", "👂"], ["wind", "Wind hides sound", "🍃"]], "fast", "recall"),
      q("What does a longer wait mean?", [["far", "The storm is farther away", "📏"], ["near", "The storm is in the room", "🏠"], ["done", "The storm is over forever", "✅"]], "far", "inference"),
    ],
    script: `
# page
meadow wombat,dot
caption: A flash lit the clouds. The boom came later.
Dot: Why do we see lightning first?

# page
burrow wombat
Wombat: Lightning is a giant spark.
Dot: Thunder is the sound of that same spark.

# page
sky wombat,dot
Wombat: Light travels very fast.
Dot: Sound is quick too, but much slower than light.

# page
meadow wombat
caption: The flash reaches your eyes almost at once.
Wombat: The thunder needs more time to arrive.

# page
burrow wombat,dot
Dot: If I count in the gap, what do I learn?
Wombat: A longer wait means the storm is farther away.

# page
meadow wombat
caption: A short wait means the storm is close.
Dot: Then we should already be inside.

# page
burrow wombat,dot
Wombat: Go indoors when you hear thunder.
Dot: Stay away from open fields and tall lone trees.

# page
sky wombat
caption: They watched from a window, not from the hill.
Wombat: The next flash had a longer gap.

# page
burrow wombat,dot
Dot: So this storm is moving farther off.
Wombat: We still wait until the thunder stops.

# page
meadow wombat,dot
caption: Blue sky returned, and they stepped out.
Wombat: Light first, sound second. That is the rule you can trust.
`,
  }),
  makeStory({
    id: "wombat-salt",
    title: "Why Is the Sea Salty?",
    seriesId: "wonder-wombat",
    episode: 6,
    genre: "nonfiction",
    subgenre: "science",
    themes: science,
    ladderLevel: 7,
    expectedMinutes: 8,
    stretchEligible: false,
    glossary: [g("minerals", "Tiny bits of rock and salt in water."), g("evaporate", "To turn from liquid into air."), g("rivers", "Streams of water that flow toward a bigger body.")],
    talkAbout: "Rain is not salty, but the sea is. What do you think happens to the salt when seawater dries?",
    comprehension: [
      q("What carries minerals to the sea?", [["rivers", "Rivers", "🏞️"], ["birds", "Only birds", "🐦"], ["moons", "The moon", "🌙"]], "rivers", "recall"),
      q("Why does the salt stay?", [["air", "Water can evaporate, and salt does not", "☀️"], ["fish", "Fish drink it all", "🐟"], ["boats", "Boats scoop it out", "⛵"]], "air", "inference"),
    ],
    script: `
# page
river wombat,dot
Dot: This river tastes fresh. The sea tastes salty.
Wombat: One big reason starts here.

# page
river wombat
caption: Rain wears tiny minerals off rocks and soil.
Wombat: Rivers carry those bits downhill.

# page
pond wombat,dot
Dot: I cannot see the salt.
Wombat: It is dissolved. The bits are too small to notice.

# page
river wombat
caption: Day after day, rivers pour into the sea.
Dot: Do they bring a lot each hour? Only a little.

# page
sky wombat,dot
Wombat: The sun helps sea water evaporate.
Dot: Evaporate means the water rises into the air.

# page
sky wombat
caption: The rising water leaves the minerals behind.
Wombat: Salt does not ride up with it.

# page
meadow wombat,dot
Dot: Then rain falls fresh again.
Wombat: Yes. The salt stayed in the sea.

# page
pond wombat
caption: Over a very long time, the sea grew salty.
Wombat: This is one big reason, not the only one.

# page
river wombat,dot
Dot: Some salt also comes from deep vents.
Wombat: We can still test the river part with a pan of salty water.

# page
burrow wombat,dot
caption: They left salty water in the sun until it dried.
Wombat: The water left. The salt sat in the pan.
`,
  }),
  makeStory({
    id: "wombat-seasons",
    title: "Why Do Seasons Change?",
    seriesId: "wonder-wombat",
    episode: 7,
    genre: "nonfiction",
    subgenre: "science",
    themes: science,
    ladderLevel: 8,
    expectedMinutes: 9,
    stretchEligible: false,
    glossary: [g("tilted", "Leaning, not straight up."), g("hemisphere", "One half of Earth."), g("orbit", "The path Earth takes around the sun.")],
    talkAbout: "Earth is tilted. How does the light in your window change from summer to winter?",
    comprehension: [
      q("What makes seasons change?", [["tilt", "Earth is tilted as it orbits", "🌍"], ["hat", "The sun puts on a hat", "🎩"], ["wind", "Wind pushes the sun away", "💨"]], "tilt", "recall"),
      q("Is summer just because Earth is much closer to the sun?", [["no", "No. The tilt matters more", "📐"], ["yes", "Yes. Closer is the whole reason", "🔥"], ["moon", "The moon blocks winter", "🌑"]], "no", "inference"),
    ],
    script: `
# page
meadow wombat,dot
Dot: Why is it hot in one part of the year and cold in another?
Wombat: Earth is tilted. That tilt rides along our orbit.

# page
sky wombat
caption: An orbit is the path Earth takes around the sun.
Wombat: The path is not a perfect circle, but the tilt matters more.

# page
meadow wombat,dot
Dot: So summer is not just we got much closer?
Wombat: Right. A tilted Earth points one hemisphere toward the sun.

# page
sky wombat
caption: When our hemisphere leans toward the sun, days last longer.
Dot: The light hits us more directly, so the land warms.

# page
forest wombat,dot
Wombat: Half a year later, our hemisphere leans away.
Dot: The days grow shorter then.

# page
meadow wombat,dot
caption: Shorter days and a lower sun mean less heat.
Wombat: That is winter here, while the other hemisphere can have summer.

# page
sky wombat,dot
Dot: So the two halves do not share the same season.
Wombat: They trade. The tilt does not flip each week. It stays put.

# page
meadow wombat
caption: Wombat tipped a round fruit and moved a lamp around it.
Dot: The top got more light, then the bottom did.

# page
burrow wombat,dot
Wombat: The fruit did not need to jump closer to the lamp.
Dot: The lean was enough to change the light.

# page
sky wombat
caption: Earth keeps its tilt as it travels.
Wombat: Seasons are a light-and-lean story.

# page
meadow wombat,dot
Dot: I can watch my shadow grow long in winter.
Wombat: A long shadow means the sun is lower.

# page
forest wombat,dot
caption: They marked the noon shadow with a stone.
Wombat: Come back in another season and measure again.
`,
  }),
  makeStory({
    id: "wombat-bees",
    title: "How Do Bees Find Flowers?",
    seriesId: "wonder-wombat",
    episode: 8,
    genre: "nonfiction",
    subgenre: "science",
    themes: science,
    ladderLevel: 8,
    expectedMinutes: 9,
    stretchEligible: true,
    glossary: [
      g("nectar", "A sweet liquid flowers make."),
      g("pollen", "A powder flowers use to make seeds."),
      g("ultraviolet", "A kind of light people cannot see."),
    ],
    talkAbout: "Bees tell other bees where to go. How do people share a useful find without pushing?",
    comprehension: [
      q("What do flowers offer bees?", [["food", "Nectar and pollen", "🌸"], ["rocks", "Rocks", "🪨"], ["snow", "Snow", "❄️"]], "food", "recall"),
      q("What does the waggle dance tell?", [["way", "The way and about how far", "💃"], ["name", "The flower's name", "🏷️"], ["time", "What year it is", "📅"]], "way", "inference"),
    ],
    script: `
# page
garden wombat,dot
Dot: How does a bee find a flower so fast?
Wombat: Flowers advertise. They use color, shape, and smell.

# page
garden wombat
caption: Many flowers also have ultraviolet marks.
Wombat: People cannot see that light, but bees can.

# page
meadow wombat,dot
Dot: The marks point toward the middle.
Wombat: That is where the nectar and the pollen are.

# page
garden wombat
caption: A bee drinks nectar and carries pollen on her legs.
Dot: The next flower may use that pollen to make seeds.

# page
meadow wombat,dot
Wombat: When she finds a rich patch, she flies home.
Dot: Home is the hive, full of other bees.

# page
burrow wombat
caption: In the hive she does a waggle dance.
Wombat: The waggle shows the direction of the flowers.

# page
garden wombat,dot
Dot: How do the others read distance?
Wombat: A longer waggle means the patch is farther away.

# page
meadow wombat
caption: The dance is a map made of movement.
Dot: No words, but the news still spreads.

# page
garden wombat,dot
Wombat: Bees can also learn which colors paid off today.
Dot: They skip empty blooms and return to the good ones.

# page
sky wombat
caption: Wind, rain, and time of day change the search.
Wombat: A flower that fed them at noon may close by dusk.

# page
garden wombat,dot
Dot: So finding flowers is senses plus a shared dance.
Wombat: And the plants get help making seeds.

# page
meadow wombat,dot
caption: They watched a bee vanish into a yellow bloom, then head off.
Wombat: If you plant flowers, you give that search a place to land.
`,
  }),
  makeStory({
    id: "wombat-moon",
    title: "Why Does the Moon Change Shape?",
    seriesId: "wonder-wombat",
    episode: 9,
    genre: "nonfiction",
    subgenre: "science",
    themes: ["science", "sky"],
    ladderLevel: 9,
    expectedMinutes: 10,
    stretchEligible: false,
    glossary: [g("crescent", "A thin curved slice of light."), g("phase", "The shape of the lit moon we can see."), g("reflects", "Bounces light instead of making it.")],
    talkAbout: "The moon stays round. Sketch it once this week and again a few nights later. What changed?",
    comprehension: [
      q("Does the moon make its own light?", [["no", "No. It reflects sunlight", "🌙"], ["yes", "Yes. It is a lamp", "💡"], ["fire", "Yes. It is on fire", "🔥"]], "no", "recall"),
      q("Why does the shape seem to change?", [["half", "We see a different amount of the lit half", "🌓"], ["bite", "Something bites it", "🍪"], ["melt", "It melts each night", "💧"]], "half", "inference"),
    ],
    script: `
# page
moon wombat,dot
Dot: Last week the moon was a thin crescent. Tonight it is fatter.
Wombat: The moon did not change into a new object. We call each look a phase.

# page
sky wombat
caption: The moon does not make its own light.
Wombat: It reflects sunlight. One half is lit, and one half is dark.

# page
moon wombat,dot
Dot: So the moon is round the whole time?
Wombat: Yes. A ball does not become a banana. Our view changes.

# page
sky wombat
caption: The moon travels around Earth.
Dot: As it moves, we see more or less of the lit half.

# page
meadow wombat,dot
Wombat: In a crescent phase, we see only a slim edge of the day side.
Dot: A full moon means we face the whole lit half.

# page
moon wombat
caption: Wombat held a ball and a lamp in a dark room.
Dot: When I stood to the side, the lit part looked like a crescent.

# page
burrow wombat,dot
Wombat: When the ball was opposite the lamp from me, I saw a full face.
Dot: Nothing ate the ball. I just moved my eyes.

# page
sky wombat
caption: Clouds can hide a phase, but they do not reshape the moon.
Wombat: You may need a few clear nights to notice the change.

# page
moon wombat,dot
Dot: Does Earth make moon phases on purpose?
Wombat: No one plans it. It is light, a ball, and a moving view.

# page
meadow wombat
caption: They drew tonight's phase and left room for the next one.
Dot: I will check again in three nights.

# page
sky wombat,dot
Wombat: If the bright part is growing, we are heading toward full.
Dot: If it is shrinking, we are heading toward a thin crescent.

# page
moon wombat,dot
caption: The same round moon sat in the sky, half in sunlight they could not fully see.
Wombat: A new shape on the calendar is an old ball in a new view.
`,
  }),
  makeStory({
    id: "wombat-day",
    title: "Why Do We Have Day and Night?",
    seriesId: "wonder-wombat",
    episode: 10,
    genre: "nonfiction",
    subgenre: "science",
    themes: science,
    ladderLevel: 9,
    expectedMinutes: 10,
    stretchEligible: true,
    glossary: [g("spins", "Turns around a center."), g("axis", "The line a planet spins around."), g("horizon", "The line where the sky seems to meet the land.")],
    talkAbout: "The sun is not racing around Earth each day. What do you notice about shadows from morning to evening?",
    comprehension: [
      q("What causes day and night?", [["spin", "Earth spins", "🌍"], ["run", "The sun runs around us each day", "🏃"], ["lamp", "Someone switches a sky lamp", "💡"]], "spin", "recall"),
      q("Why does the sun seem to move?", [["turn", "We turn and the view changes", "🔄"], ["pull", "Clouds pull the sun", "☁️"], ["hide", "The moon hides it on purpose", "🌙"]], "turn", "inference"),
    ],
    script: `
# page
meadow wombat,dot
Dot: The sun seems to rise, cross the sky, and slip under the horizon.
Wombat: It looks that way because Earth spins.

# page
sky wombat
caption: Earth turns around an axis, an imaginary line through the poles.
Wombat: One full turn takes about one day.

# page
meadow wombat,dot
Dot: So the sun is not sprinting around us?
Wombat: No. We are the ones turning. The sun stays the center of that story.

# page
burrow wombat
caption: Wombat stuck a pin in a fruit and spun it by a lamp.
Dot: The pin side went bright, then dark, then bright again.

# page
sky wombat,dot
Wombat: The side facing the sun has day.
Dot: The side facing away has night.

# page
meadow wombat
caption: Sunrise is your place turning into the light.
Wombat: Sunset is your place turning out of it.

# page
sky wombat,dot
Dot: Why do shadows grow long in the evening?
Wombat: The sun is low near the horizon, so light skims the ground.

# page
meadow wombat
caption: At noon the light comes from higher up, and shadows shrink.
Dot: I can mark a stick's shadow to watch the spin.

# page
burrow wombat,dot
Wombat: People long ago learned this by careful watching.
Dot: A wrong first idea was that the sun raced around a still Earth.

# page
sky wombat
caption: That idea matched the view, but the view can fool you.
Wombat: Careful tests showed that Earth turns.

# page
meadow wombat,dot
Dot: Night is not a blanket someone pulls.
Wombat: It is your half of Earth facing away from the sun for a while.

# page
sky wombat,dot
caption: They watched the light leave the hill and knew it would return.
Wombat: Day and night are a spin you can trust.
`,
  }),
];
