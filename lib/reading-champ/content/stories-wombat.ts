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
Dot: Why is the sky blue?
Wombat: Let us look up and see.

# page
sky wombat,dot
Wombat: I guess the air is painted.
Dot: Blue paint would make a blue sky.

# page
meadow wombat,dot
Dot: Is that guess really the truth?
Wombat: Let us test it with clouds.

# page
sky wombat,dot
Wombat: Clouds sit in the air too.
Dot: But clouds can look white or gray.

# page
meadow wombat,dot
Dot: If air were paint, clouds would match.
Wombat: They do not match the sky.

# page
sky wombat,dot
Wombat: So the air is not blue paint.
Dot: My first guess was wrong today.

# page
meadow wombat,dot
Dot: Maybe the sea paints the sky.
Wombat: Blue water could bounce light up.

# page
sky wombat,dot
Dot: High hills sit far from the sea.
Wombat: The sky there is still blue.

# page
meadow wombat,dot
Wombat: So the sea is not the cause.
Dot: We need a better idea now.

# page
sky wombat,dot
Wombat: Sunlight looks white on a clear day.
Dot: White is not just one color.

# page
meadow wombat,dot
Dot: A rainbow splits that white light.
Wombat: Red and blue both hide in it.

# page
sky wombat,dot
Wombat: Sunlight holds many colors at once.
Dot: Each color acts in its own way.

# page
meadow wombat,dot
Wombat: Tiny bits of air hit the light.
Dot: Blue light bounces off more often.

# page
sky wombat,dot
Wombat: We say blue light scatters more.
Dot: Scatters means it bounces many ways.

# page
meadow wombat,dot
Dot: Red light scatters much less than blue.
Wombat: Red keeps going more straight ahead.

# page
sky wombat,dot
Wombat: Blue light comes from all sides.
Dot: Your eyes see that as blue sky.

# page
meadow wombat,dot
Dot: Red light does not fill the sky.
Wombat: It travels more straight to your eyes.

# page
sky wombat,dot
Wombat: That is why day sky looks blue.
Dot: Sunlight held that blue all along.

# page
meadow wombat,dot
Dot: At noon the air path is short.
Wombat: Blue light still fills the sky then.

# page
sky wombat,dot
Wombat: Near sunset the air path grows long.
Dot: The light must cross much more air.

# page
meadow wombat,dot
Dot: Blue light scatters off that long path.
Wombat: Less blue light can reach your eyes.

# page
sky wombat,dot
Wombat: Red light reaches you more then.
Dot: So the sky glows red and gold.

# page
meadow wombat,dot
Dot: Did the sun turn into red?
Wombat: No, the long path let red through.

# page
sky wombat,dot
Wombat: The same sunlight left home as white.
Dot: The air sorted colors on the way.

# page
forest wombat,dot
Dot: Look at those far hills now.
Wombat: They look pale blue in the day.

# page
meadow wombat,dot
Wombat: Air between us scatters blue light.
Dot: The hills did not turn blue today.

# page
forest wombat,dot
Dot: Close grass stays green at our feet.
Wombat: Less air sits between us and it.

# page
meadow wombat,dot
Wombat: A short air path adds little blue.
Dot: A long air path adds much more.

# page
sky wombat,dot
Dot: The sky above you can stay blue.
Wombat: The path above you is still short.

# page
meadow wombat,dot
Dot: Low down the air path is long.
Wombat: That is where red light wins out.

# page
sky wombat,dot
Wombat: You can check this with your eyes.
Dot: Look up at the sky near noon.

# page
meadow wombat,dot
Dot: Name the blue you see up high.
Wombat: Then look again when sunset is near.

# page
sky wombat,dot
Wombat: The noon sky should look more blue.
Dot: The sunset sky should show more red.

# page
burrow wombat,dot
Dot: You can try a glass test too.
Wombat: Fill a clear glass with water.

# page
burrow wombat,dot
Dot: Add one small drop of milk.
Wombat: Milk bits will scatter light for you.

# page
burrow wombat,dot
Wombat: Take the glass into a dark room.
Dot: Shine a lamp through the milky glass.

# page
burrow wombat,dot
Dot: From the side the glow looks blue.
Wombat: Blue light scatters out toward you.

# page
burrow wombat,dot
Wombat: Look through the glass at the lamp.
Dot: That light looks more gold than blue.

# page
burrow wombat,dot
Dot: The lamp did not change its color.
Wombat: The long path let red through more.

# page
meadow wombat,dot
Wombat: Sky and glass follow the same rule.
Dot: Blue light scatters, and red goes on.
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
Dot: Why do the leaves fall down?
Wombat: Let us watch this tall tree.

# page
forest wombat,dot
Wombat: I guess the wind rips them off.
Dot: A hard gust could tug a stem.

# page
meadow wombat,dot
Dot: Leaves also fall on a calm day.
Wombat: Wind is not the whole cause.

# page
forest wombat,dot
Wombat: Maybe the tree is sick or dying.
Dot: Sick trees can drop leaves early.

# page
forest wombat,dot
Dot: Look at the buds on each twig.
Wombat: They are plump and still alive.

# page
meadow wombat,dot
Wombat: This tree set plump new buds.
Dot: So it is not dying at all.

# page
forest wombat,dot
Dot: What starts the drop each year?
Wombat: Autumn days grow short and cool.

# page
forest wombat,dot
Wombat: The tree can sense that shift.
Dot: Short days tell it to get ready.

# page
meadow wombat,dot
Dot: All summer the leaf made food.
Wombat: Green color helped with that job.

# page
forest wombat,dot
Wombat: The green catches sunlight for the leaf.
Dot: The tree uses that food to grow.

# page
forest wombat,dot
Dot: In autumn the green starts to fade.
Wombat: Fade means the green breaks down.

# page
meadow wombat,dot
Wombat: The leaf will not keep making food.
Dot: Cold short days make that job hard.

# page
forest wombat,dot
Dot: Where do yellow and orange come from?
Wombat: They were in the leaf all along.

# page
forest wombat,dot
Wombat: Green was hiding the warm colors.
Dot: Yellow sat under the green coat.

# page
meadow wombat,dot
Dot: Orange sat under that coat too.
Wombat: When green fades, those colors show.

# page
forest wombat,dot
Wombat: A leaf can turn gold in days.
Dot: The gold was there the whole time.

# page
meadow wombat,dot
Dot: So autumn did not paint the leaf.
Wombat: It took the green cover away.

# page
forest wombat,dot
Wombat: Next the tree must seal the stem.
Dot: What does that seal do for it?

# page
forest wombat,dot
Dot: Tiny tubes run through the stem.
Wombat: They carry water in and food out.

# page
meadow wombat,dot
Wombat: The seal closes those tiny tubes.
Dot: Seal means it shuts them tight.

# page
forest wombat,dot
Dot: Water stops going into the leaf.
Wombat: Food stops coming back to the tree.

# page
forest wombat,dot
Wombat: The leaf dries out and turns crisp.
Dot: The seal cut the leaf off.

# page
meadow wombat,dot
Dot: A small tug can drop it now.
Wombat: Even calm air can let it fall.

# page
forest wombat,dot
Wombat: The tree planned this drop.
Dot: It is a plan, not a mistake.

# page
meadow wombat,dot
Dot: Does the whole tree die next?
Wombat: No, the tree rests and stays alive.

# page
forest wombat,dot
Wombat: It saves food in roots and trunk.
Dot: That food will feed new leaves later.

# page
forest wombat,dot
Dot: Buds on the twigs wait for spring.
Wombat: Spring days will open them again.

# page
meadow wombat,dot
Wombat: Not every tree drops its leaves.
Dot: Look at the pine across the path.

# page
forest wombat,dot
Dot: Its needles stay green all year.
Wombat: They use a plan that keeps green.

# page
forest wombat,dot
Wombat: Needle leaves are tough and thin.
Dot: They can keep making food in winter.

# page
meadow wombat,dot
Dot: Our big tree chose a rest plan.
Wombat: The pine chose a stay green plan.

# page
forest wombat,dot
Dot: What happens to leaves on the ground?
Wombat: They are not waste to toss out.

# page
meadow wombat,dot
Wombat: Small bugs and rain break them down.
Dot: The bits turn into soil food.

# page
forest wombat,dot
Dot: The tree can use that food later.
Wombat: Falling leaves help the next year.

# page
garden wombat,dot
Wombat: You can try this with real leaves.
Dot: Or draw leaves on some paper.

# page
garden wombat,dot
Dot: Sort them into piles by color.
Wombat: Put green leaves in the first pile.

# page
garden wombat,dot
Wombat: Put yellow leaves in the next pile.
Dot: Put orange leaves in the last pile.

# page
meadow wombat,dot
Dot: Brown leaves can make one more pile.
Wombat: Brown often comes after the gold fades.

# page
forest wombat,dot
Wombat: Look at a stem end with care.
Dot: A dry seal mark may show there.

# page
forest wombat,dot
Dot: Green hid the gold until autumn.
Wombat: The seal let each leaf fall.
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
Wombat: It floats, so let us find out why.

# page
pond wombat,dot
Dot: I guess air bubbles hold it up.
Wombat: Some ice does have tiny bubbles.

# page
pond wombat,dot
Dot: But this clear ice has no bubbles.
Wombat: It still floats on the pond.

# page
meadow wombat,dot
Dot: Maybe cold things always float.
Wombat: Let us test that with a rock.

# page
pond wombat,dot
Dot: This rock is cold from the pond.
Wombat: It sinks straight to the bottom.

# page
pond wombat,dot
Dot: So cold is not why ice floats.
Wombat: The rock is not made of water.

# page
pond wombat,dot
Dot: This ice is still just water.
Wombat: It is water that froze hard.

# page
burrow wombat,dot
Dot: Water can be a liquid you pour.
Wombat: When it freezes, it turns into ice.

# page
burrow wombat,dot
Dot: Does the freeze change its size?
Wombat: Yes, frozen water takes more room.

# page
burrow wombat,dot
Dot: The same water spreads out as ice.
Wombat: It needs more room than the liquid did.

# page
pond wombat,dot
Dot: More room makes it light for its size.
Wombat: Light for its size is why it floats.

# page
pond wombat,dot
Dot: A thing heavy for its size sinks.
Wombat: The rock is heavy for its size.

# page
burrow wombat,dot
Wombat: We can see the extra room at home.
Dot: Fill a cup and mark the water line.

# page
burrow wombat,dot
Dot: Now the cup can freeze all night.
Wombat: In the morning we will check the line.

# page
burrow wombat,dot
Dot: The ice sits above the old line.
Wombat: It grew up because it needed more room.

# page
burrow wombat,dot
Dot: Did new water sneak into the cup?
Wombat: No, it is the same water spread out.

# page
burrow wombat,dot
Dot: Let the ice melt back to liquid.
Wombat: The water fits the first line again.

# page
pond wombat,dot
Dot: So ice is still water, just bigger.
Wombat: Frozen water takes more room than liquid.

# page
pond wombat,dot
Dot: A winter pond freezes from the top.
Wombat: Cold air cools the top of the water.

# page
pond wombat,dot
Dot: The first ice stays up on the pond.
Wombat: It does not sink down to the mud.

# page
pond wombat,dot
Dot: Liquid water stays under that ice.
Wombat: Fish can live in the liquid water.

# page
pond wombat,dot
Dot: How does the ice help the fish?
Wombat: The ice lid slows the cold air.

# page
pond wombat,dot
Dot: The water below can stay liquid.
Wombat: It does not all turn into ice.

# page
pond wombat,dot
Dot: What if ice sank to the bottom?
Wombat: New ice would keep piling down there.

# page
pond wombat,dot
Dot: The pond could freeze from the mud up.
Wombat: Fish would lose the liquid they need.

# page
pond wombat,dot
Dot: Because ice floats, they keep a home.
Wombat: Only the top turns to ice.

# page
burrow wombat,dot
Dot: A full bottle shows the same rule.
Wombat: Fill it with water and leave a gap.

# page
burrow wombat,dot
Dot: Set the bottle in a cold freezer.
Wombat: The ice will need more room than before.

# page
burrow wombat,dot
Dot: No gap means the bottle may crack.
Wombat: The ice pushes out as it grows.

# page
burrow wombat,dot
Dot: Leave a gap so the ice can grow.
Wombat: That gap is the extra room it needs.

# page
pond wombat,dot
Dot: Rocks by the pond sink every time.
Wombat: Ice from that same pond floats.

# page
pond wombat,dot
Dot: One is rock, and one is frozen water.
Wombat: Only the frozen water takes more room.

# page
burrow wombat,dot
Dot: You can try this with one ice cube.
Wombat: Drop it into a glass of water.

# page
burrow wombat,dot
Dot: Watch the cube float at the top.
Wombat: Part of it sits above the water.

# page
burrow wombat,dot
Dot: That top part shows the extra room.
Wombat: The ice is light for its size.

# page
burrow wombat,dot
Dot: Push the cube down under the water.
Wombat: Let go, and it pops back up.

# page
burrow wombat,dot
Dot: Nothing holds it up but the water.
Wombat: It floats because it takes more room.

# page
burrow wombat,dot
Dot: Wait while the cube melts in the glass.
Wombat: It turns back into liquid water.

# page
burrow wombat,dot
Dot: The melt is the same water you froze.
Wombat: It did not become a new thing.

# page
burrow wombat,dot
Dot: You can also mark a cup at home.
Wombat: Freeze it and look at the line.

# page
burrow wombat,dot
Dot: The ice should stand above your mark.
Wombat: After it melts, it should meet the mark.

# page
meadow wombat,dot
Dot: A pond, a bottle, and a glass agree.
Wombat: Frozen water takes more room, so it floats.

# page
pond wombat,dot
Dot: That is why the ice stays on top.
Wombat: And why fish still have liquid below.

# page
pond wombat,dot
Dot: Cold did not make it float.
Wombat: The extra room did the real work.
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
Dot: That star keeps flashing in the night.
Wombat: We say it does twinkle up there.

# page
moon wombat,dot
Dot: I guess the star is winking at us.
Wombat: Maybe it turns off and on.

# page
sky wombat,dot
Dot: A real wink would mean the star blinks.
Wombat: Let us test that idea tonight.

# page
sky wombat,dot
Dot: The light never fully goes out.
Wombat: It only seems to flash and fade.

# page
moon wombat,dot
Dot: So the star is not shutting off.
Wombat: The star itself stays steady.

# page
meadow wombat,dot
Dot: Maybe my eyes are just tired.
Wombat: A friend beside you sees it too.

# page
meadow wombat,dot
Dot: We both see it, so our eyes work.
Wombat: The twinkle is not just in your eyes.

# page
sky wombat,dot
Dot: Then what makes the star seem to flash?
Wombat: Its light must cross our moving air.

# page
sky wombat,dot
Dot: Air is not one still blanket.
Wombat: Warm bits and cool bits mix.

# page
sky wombat,dot
Dot: Those bits bend the star light a little.
Wombat: Each bend shifts the beam a hair.

# page
moon wombat,dot
Dot: One moment the beam hits your eye.
Wombat: The next moment it skips a bit.

# page
moon wombat,dot
Dot: That skip looks like a wink.
Wombat: The star did not turn off at all.

# page
sky wombat,dot
Dot: So moving air bends the light.
Wombat: The twinkle is a clue about air.

# page
sky wombat,dot
Dot: On a very still night, stars twinkle less.
Wombat: Less moving air means less bend.

# page
moon wombat,dot
Dot: The steady light was there the whole time.
Wombat: Our air was wiggling the view.

# page
sky wombat,dot
Dot: That bright one does not twinkle as much.
Wombat: That one is a planet, not a star.

# page
sky wombat,dot
Dot: Why does a planet twinkle less?
Wombat: It looks bigger in the sky.

# page
moon wombat,dot
Dot: A bigger spot is not one tiny point.
Wombat: The wiggles blend across its face.

# page
moon wombat,dot
Dot: A star looks like a tiny point.
Wombat: A point cannot blend those bends.

# page
sky wombat,dot
Dot: So the star flashes more than the planet.
Wombat: The planet looks bigger, so it looks steady.

# page
sky wombat,dot
Dot: Are the planets we see closer than stars?
Wombat: Yes, the night planets are much closer.

# page
moon wombat,dot
Dot: That is why they look bigger to us.
Wombat: Closer worlds show a real face.

# page
sky wombat,dot
Dot: Far stars stay points in our sky.
Wombat: Huge and far can still look tiny.

# page
meadow wombat,dot
Dot: City lights far away can twinkle too.
Wombat: They are points, just like stars.

# page
meadow wombat,dot
Dot: Their light also crosses moving air.
Wombat: So a far lamp can flash and fade.

# page
burrow wombat,dot
Dot: A close lamp looks steady in your hand.
Wombat: It looks bigger, so the bends blend.

# page
moon wombat,dot
Dot: Clouds can hide both stars and planets.
Wombat: A clear night is the best test.

# page
sky wombat,dot
Dot: Do not blame a cloud for every wink.
Wombat: On a clear night the air still moves.

# page
burrow wombat,dot
Dot: You can see air bend light at home.
Wombat: Heat a kettle and look past the heat.

# page
burrow wombat,dot
Dot: The air above the kettle is moving.
Wombat: Look at a far edge through that air.

# page
burrow wombat,dot
Dot: The edge seems to wiggle and shift.
Wombat: Hot air and cool air bend the light.

# page
meadow wombat,dot
Dot: A hot road can show the same wiggle.
Wombat: Look low across the road at noon.

# page
meadow wombat,dot
Dot: The far side seems to ripple and bend.
Wombat: Moving hot air is bending that view.

# page
meadow wombat,dot
Dot: Nothing on the far side really moved.
Wombat: The air between you did the bending.

# page
sky wombat,dot
Dot: Star light gets the same kind of bend.
Wombat: Night air moves, so stars seem to twinkle.

# page
moon wombat,dot
Dot: The star stays steady the whole time.
Wombat: Your view is what jumps around.

# page
moon wombat,dot
Dot: Pick one star and watch it with care.
Wombat: Then find a planet that looks calm.

# page
sky wombat,dot
Dot: The star should twinkle more than the planet.
Wombat: The planet should look bigger and steady.

# page
sky wombat,dot
Dot: Still air makes both of them calmer.
Wombat: A wild mix of air makes more twinkle.

# page
burrow wombat,dot
Dot: The kettle, the road, and the sky agree.
Wombat: Moving air bends light and makes a wiggle.

# page
moon wombat,dot
Dot: A tiny point shows that wiggle most.
Wombat: A bigger face hides it and looks steady.

# page
sky wombat,dot
Dot: Stars twinkle, and they are not winking.
Wombat: Planets twinkle less because they look bigger.

# page
meadow wombat,dot
Dot: You can check both on a clear night.
Wombat: You can check hot air in the day.

# page
moon wombat,dot
Dot: Twinkle is a story about air.
Wombat: The steady light was there all along.
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
Dot: A bright flash just lit the clouds.
Wombat: The boom will come a bit later.

# page
meadow wombat,dot
Dot: Why do we see the flash first?
Wombat: Let us name the flash and the boom.

# page
sky wombat,dot
Dot: I guess the clouds bump and then boom.
Wombat: People say that, but it is wrong.

# page
sky wombat,dot
Dot: A bump would make sound with no flash.
Wombat: This boom comes with a giant spark.

# page
burrow wombat,dot
Dot: That spark in the sky is lightning.
Wombat: Thunder is the sound that spark makes.

# page
sky wombat,dot
Dot: The spark heats the air very fast.
Wombat: The hot air jumps out and makes thunder.

# page
meadow wombat,dot
Dot: So why does the flash win the race?
Wombat: Light and sound do not travel the same.

# page
meadow wombat,dot
Dot: I guess our ears are just too slow.
Wombat: Your ears are fine, and they work fast.

# page
sky wombat,dot
Dot: Light from the spark is much faster.
Wombat: Sound is quick, but light is quicker.

# page
sky wombat,dot
Dot: The flash hits your eyes almost at once.
Wombat: The thunder needs more time to arrive.

# page
meadow wombat,dot
Dot: They left the spark at the same time.
Wombat: Light just got here long before sound.

# page
meadow wombat,dot
Dot: A short wait means the storm is close.
Wombat: A longer wait means the storm is farther.

# page
burrow wombat,dot
Dot: You can count the seconds in the gap.
Wombat: Count from the flash to the boom.

# page
burrow wombat,dot
Dot: About five counts means about one mile.
Wombat: More counts mean the storm is farther.

# page
meadow wombat,dot
Dot: Ten counts would mean about two miles.
Wombat: One quick count means it is very near.

# page
burrow wombat,dot
Dot: If the wait is short, go inside now.
Wombat: Do not stand in a wide open field.

# page
meadow wombat,dot
Dot: A lone tree is not a safe spot.
Wombat: Lightning can strike the tall lone tree.

# page
burrow wombat,dot
Dot: A house is a much safer place.
Wombat: Stay there until the thunder has stopped.

# page
burrow wombat,dot
Dot: Wait through a long quiet with no thunder.
Wombat: One more boom means you still wait.

# page
sky wombat,dot
Dot: We can watch from a window inside.
Wombat: We do not need to stand on the hill.

# page
meadow wombat,dot
Dot: This same race shows up without a storm.
Wombat: Watch a friend clap across the field.

# page
meadow wombat,dot
Dot: You see the hands meet first.
Wombat: The clap sound needs time to cross.

# page
meadow wombat,dot
Dot: Light from the hands got here faster.
Wombat: Sound walked, while light raced ahead.

# page
meadow wombat,dot
Dot: A far hit in a game works too.
Wombat: You see the hit, then you hear it.

# page
meadow wombat,dot
Dot: The wait grows if you stand farther off.
Wombat: A longer wait means the hit was farther.

# page
sky wombat,dot
Dot: Lightning and the clap follow one rule.
Wombat: Light is much faster than sound.

# page
sky wombat,dot
Dot: The storm did not hide the thunder.
Wombat: The thunder was just still on the way.

# page
burrow wombat,dot
Dot: Let us count the next gap with care.
Wombat: I see the lightning, so I start now.

# page
burrow wombat,dot
Dot: One, two, three, and then the thunder.
Wombat: Three counts means the storm is not far.

# page
burrow wombat,dot
Dot: This short wait means we stay inside.
Wombat: A lone tree would be a bad roof.

# page
sky wombat,dot
Dot: The next flash has a longer gap.
Wombat: I count to eight before the thunder.

# page
sky wombat,dot
Dot: Eight counts means the storm is farther.
Wombat: It is moving off, but we still wait.

# page
burrow wombat,dot
Dot: Farther does not mean the storm is over.
Wombat: We wait until the thunder stops.

# page
sky wombat,dot
Dot: Blue sky can return while we are inside.
Wombat: We still listen for one more boom.

# page
burrow wombat,dot
Dot: A long quiet means we can step out.
Wombat: If thunder returns, we go back in.

# page
meadow wombat,dot
Dot: You can try the count in a storm.
Wombat: Stay inside by a window to do it.

# page
burrow wombat,dot
Dot: When lightning flashes, start your count.
Wombat: When thunder booms, stop and note the number.

# page
burrow wombat,dot
Dot: A bigger number means the storm is farther.
Wombat: A small number means it is close.

# page
burrow wombat,dot
Dot: Trust the count more than a wild guess.
Wombat: Five counts is about one mile away.

# page
meadow wombat,dot
Dot: Ten counts is about two miles away.
Wombat: That storm is farther than a one count storm.

# page
burrow wombat,dot
Dot: Do not stay out just to count.
Wombat: Go inside first, then you can count.

# page
meadow wombat,dot
Dot: Skip a lone tree even in light rain.
Wombat: Open fields are a poor place too.

# page
sky wombat,dot
Dot: Light wins the race every time.
Wombat: Sound comes later, and the gap tells distance.

# page
meadow wombat,dot
Dot: A long gap means farther, not all done.
Wombat: A short gap means close, so get inside.

# page
meadow wombat,dot
Dot: The far clap taught us the same race.
Wombat: We saw it first, then we heard it.

# page
sky wombat,dot
Dot: Lightning is the flash we see first.
Wombat: Thunder is the sound that follows it.

# page
burrow wombat,dot
Dot: I will count and I will go inside.
Wombat: That plan keeps you safe in a storm.

# page
sky wombat,dot
Dot: I can tell a far storm from a near one.
Wombat: And I will wait inside until it goes.
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
pond wombat,dot
Dot: This pond tastes fresh on my tongue.
Wombat: The sea tastes salty, and this does not.

# page
pond wombat,dot
Dot: I guess someone dumps salt in the sea.
Wombat: That guess skips the slow daily work.

# page
meadow wombat,dot
Dot: Maybe rain falls salty on the sea.
Wombat: Let us catch rain and taste a drop.

# page
sky wombat,dot
Dot: This rain tastes fresh, not salty at all.
Wombat: So the sky is not salting the sea.

# page
meadow wombat,dot
Dot: Where does the salt start its trip?
Wombat: Look at rocks and soil after rain.

# page
meadow wombat,dot
Dot: Rain wears tiny bits off the rocks.
Wombat: Those bits are minerals from the rock.

# page
pond wombat,dot
Dot: I cannot see them in the water.
Wombat: They dissolve, so the bits are too small.

# page
pond wombat,dot
Dot: The water looks clear and still holds salt.
Wombat: A pinch of salt can hide in water.

# page
pond wombat,dot
Dot: Rivers pick up that water and move.
Wombat: Rivers carry those minerals down to the sea.

# page
meadow wombat,dot
Dot: Each hour they bring only a little.
Wombat: Day after day the little bits add up.

# page
sky wombat,dot
Dot: At the sea, a new step begins.
Wombat: The sun helps sea water evaporate.

# page
sky wombat,dot
Dot: Evaporate means the water rises into air.
Wombat: The water leaves, but the salt stays.

# page
sky wombat,dot
Dot: Salt does not ride up with the water.
Wombat: Minerals stay behind in the sea.

# page
meadow wombat,dot
Dot: That rising water can form clouds.
Wombat: Then rain falls fresh on the land again.

# page
meadow wombat,dot
Dot: The rain left its salt in the sea.
Wombat: Fresh rain can pick up new minerals.

# page
pond wombat,dot
Dot: Rivers carry them back, and the cycle runs.
Wombat: The sea keeps the salt each time.

# page
pond wombat,dot
Dot: Over a long time the sea grew salty.
Wombat: This river path is one big reason.

# page
pond wombat,dot
Dot: Is it the only reason for sea salt?
Wombat: No, some salt also comes from deep cracks.

# page
pond wombat,dot
Dot: Hot water down there carries minerals too.
Wombat: We can still test the river part here.

# page
meadow wombat,dot
Dot: A lake with no exit can get salty.
Wombat: Water leaves by sun, and salt stays in.

# page
meadow wombat,dot
Dot: Rain and rivers still feed that lake.
Wombat: If water can evaporate, the salt builds up.

# page
pond wombat,dot
Dot: The sea has no salt exit either.
Wombat: Water leaves, and minerals remain for ages.

# page
burrow wombat,dot
Dot: Try this with a pinch of salt.
Wombat: Stir it into a small cup of water.

# page
burrow wombat,dot
Dot: The salt seems to vanish in the cup.
Wombat: It did not leave, since salt can dissolve.

# page
burrow wombat,dot
Dot: Taste a tiny drop so you know.
Wombat: It should taste salty, not like plain water.

# page
burrow wombat,dot
Dot: Now let one drop sit and dry.
Wombat: Set it on a plate in the sun.

# page
sky wombat,dot
Dot: The water in the drop will evaporate.
Wombat: The salt cannot rise with that water.

# page
burrow wombat,dot
Dot: When the drop is dry, look close.
Wombat: White bits of salt should sit there.

# page
burrow wombat,dot
Dot: The water left, and the salt stayed.
Wombat: That is the sea story on a plate.

# page
burrow wombat,dot
Dot: You can do a bigger pan test too.
Wombat: Leave salty water in the sun all day.

# page
burrow wombat,dot
Dot: The water line will fall as it dries.
Wombat: The salt will stay in the pan.

# page
meadow wombat,dot
Dot: Rain on the pan would taste fresh.
Wombat: Water that rose would not taste salty.

# page
pond wombat,dot
Dot: Our fresh pond still holds a puzzle.
Wombat: Rivers may carry its minerals away.

# page
pond wombat,dot
Dot: If water flows out, minerals can leave.
Wombat: The sea has no such exit for salt.

# page
pond wombat,dot
Dot: That is why the pond stays fresh.
Wombat: And why the sea can stay salty.

# page
sky wombat,dot
Dot: Clouds hold water that left the sea.
Wombat: That water did evaporate and left the salt.

# page
meadow wombat,dot
Dot: New rain will wash more rock bits free.
Wombat: Rivers will carry those minerals again.

# page
meadow wombat,dot
Dot: I will not call rain salty now.
Wombat: You tasted it, and it was fresh.

# page
burrow wombat,dot
Dot: The white bits on the plate are proof.
Wombat: Salt stayed when the water did evaporate.

# page
pond wombat,dot
Dot: Rivers do the carrying day after day.
Wombat: The sea does the keeping year after year.

# page
pond wombat,dot
Dot: A little salt each day adds up.
Wombat: Time is why the sea tastes so salty.

# page
pond wombat,dot
Dot: Deep cracks add some salt as well.
Wombat: The river path is still a big part.

# page
burrow wombat,dot
Dot: Your cup test used no special tools.
Wombat: Salt, water, sun, and a plate were enough.

# page
burrow wombat,dot
Dot: You saw the salt after the drop dried.
Wombat: You can show a friend the white bits.

# page
sky wombat,dot
Dot: Fresh rain, salty sea, same water story.
Wombat: Water can evaporate, and salt does not.

# page
pond wombat,dot
Dot: Minerals ride in rivers to the sea.
Wombat: They stay when the water rises out.

# page
meadow wombat,dot
Dot: I will taste rain before I guess.
Wombat: A fresh taste means the salt stayed behind.

# page
pond wombat,dot
Dot: The sea is salty for a clear reason.
Wombat: Rivers bring minerals, and water can evaporate.
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
Dot: Why is it hot for part of the year?
Wombat: And why does that same place turn cold later?

# page
meadow wombat,dot
Dot: I guess Earth gets much closer to the sun.
Wombat: A closer Earth would get more heat.

# page
sky wombat,dot
Dot: Is summer just a closer part of the trip?
Wombat: No, that guess misses the real cause.

# page
sky wombat,dot
Dot: The path around the sun is called an orbit.
Wombat: Earth rides that orbit all year long.

# page
sky wombat,dot
Dot: The orbit is not a perfect round ring.
Wombat: Earth is a bit nearer on one side.

# page
meadow wombat,dot
Dot: That near side is not what makes summer.
Wombat: One half of Earth can have winter then.

# page
meadow wombat,dot
Dot: If closer was the cause, both halves would heat.
Wombat: They do not share the same hot months.

# page
sky wombat,dot
Dot: So what does make the seasons change?
Wombat: Earth is tilted as it rides its orbit.

# page
sky wombat,dot
Dot: Tilted means Earth leans and is not straight up.
Wombat: The lean stays put as Earth travels on.

# page
meadow wombat,dot
Dot: Picture a line through the top and bottom.
Wombat: Earth turns around that line, and the line leans.

# page
meadow wombat,dot
Dot: One half of Earth is a hemisphere.
Wombat: The other half is a hemisphere too.

# page
meadow wombat,dot
Dot: When our hemisphere leans toward the sun, we warm.
Wombat: The light hits us in a more direct way.

# page
sky wombat,dot
Dot: Direct light packs more heat on the ground.
Wombat: The days also last longer in that season.

# page
sky wombat,dot
Dot: A long day gives the land more time.
Wombat: That is summer for our hemisphere.

# page
forest wombat,dot
Dot: Half a year later, the lean points away.
Wombat: Our hemisphere leans away from the sun.

# page
forest wombat,dot
Dot: The light comes in low and spreads out.
Wombat: Spread out light brings less heat to us.

# page
meadow wombat,dot
Dot: The days grow shorter at that time too.
Wombat: Short days and low light make winter here.

# page
meadow wombat,dot
Dot: The other hemisphere leans toward the sun then.
Wombat: That half can have summer while we do not.

# page
sky wombat,dot
Dot: The two halves do not share one season.
Wombat: They trade as Earth keeps moving on its orbit.

# page
sky wombat,dot
Dot: Does the tilt flip over each week?
Wombat: No, the tilt stays put the whole trip.

# page
meadow wombat,dot
Dot: What changes is which half leans in.
Wombat: The orbit carries each hemisphere into its turn.

# page
burrow wombat,dot
Dot: A ball and a lamp can show the lean.
Wombat: Tip the ball so its top leans in.

# page
burrow wombat,dot
Dot: Shine the lamp straight at the tipped ball.
Wombat: The near half gets a bright direct patch.

# page
burrow wombat,dot
Dot: The far half gets a weaker spread of light.
Wombat: That half is the cold hemisphere in this test.

# page
burrow wombat,dot
Dot: Now walk the ball in a slow circle.
Wombat: Keep the lean pointed the same way.

# page
burrow wombat,dot
Dot: Halfway around, the other half faces the lamp.
Wombat: The first half now gets the weak light.

# page
burrow wombat,dot
Dot: The ball never jumped closer to the lamp.
Wombat: The lean by itself changed the light.

# page
meadow wombat,dot
Dot: Summer is not just a closer orbit spot.
Wombat: The tilted hemisphere gets the stronger light.

# page
meadow wombat,dot
Dot: I can see this lean in my own shadow.
Wombat: In summer the noon sun sits high.

# page
meadow wombat,dot
Dot: A high sun makes a short shadow at noon.
Wombat: The light is more direct, so the shadow shrinks.

# page
meadow wombat,dot
Dot: In winter the noon sun stays low.
Wombat: A low sun makes your noon shadow long.

# page
sky wombat,dot
Dot: A long shadow means the light is spread out.
Wombat: Spread light is a winter sign for this hemisphere.

# page
sky wombat,dot
Dot: Your friends far south can see the trade.
Wombat: Their summer comes when your shadow grows long.

# page
meadow wombat,dot
Dot: They live in the other hemisphere.
Wombat: Their direct light comes in your cold months.

# page
burrow wombat,dot
Dot: Let me tip the ball a bit more.
Wombat: Keep one lean and only move the ball.

# page
burrow wombat,dot
Dot: The lamp stays still, like the sun.
Wombat: The ball does the moving on its orbit.

# page
meadow wombat,dot
Dot: Places near the middle get a milder change.
Wombat: The lean still changes their day length a little.

# page
meadow wombat,dot
Dot: Places near the top get a strong change.
Wombat: Summer days there can last a very long time.

# page
sky wombat,dot
Dot: In their winter the sun can stay away.
Wombat: That long dark time is the lean at work.

# page
sky wombat,dot
Dot: Earth is tilted the whole way around the sun.
Wombat: The orbit takes about one year to finish.

# page
meadow wombat,dot
Dot: Each hemisphere gets one warm turn a year.
Wombat: The cold turn comes on the far side.

# page
forest wombat,dot
Dot: Trees and coats change because the light changes.
Wombat: The sun itself is not getting hotter then.

# page
meadow wombat,dot
Dot: A hotter sun is another wrong guess.
Wombat: The sun stays steady while the lean works.

# page
burrow wombat,dot
Dot: You can try the ball test at home.
Wombat: Use any round ball and a small lamp.

# page
burrow wombat,dot
Dot: Darken the room so the lamp is the sun.
Wombat: Tip the ball and keep that tip the same.

# page
burrow wombat,dot
Dot: Shine the lamp and see which half glows strong.
Wombat: Walk a circle and watch the bright half.

# page
burrow wombat,dot
Dot: Mark the bright half with a bit of tape.
Wombat: After half a circle that mark should be dim.

# page
meadow wombat,dot
Dot: You never needed to push the ball closer.
Wombat: The tilted path was enough to change the light.

# page
sky wombat,dot
Dot: Look out at noon in summer and in winter.
Wombat: Compare how high the sun sits each time.

# page
meadow wombat,dot
Dot: A high sun and short shadow mean summer.
Wombat: A low sun and long shadow mean winter.

# page
meadow wombat,dot
Dot: That check works where you live.
Wombat: The other hemisphere would show the swap.

# page
meadow wombat,dot
Dot: If you could call a friend there, ask them.
Wombat: Their season should be the flip of yours.

# page
burrow wombat,dot
Dot: I will set the ball under the lamp again.
Wombat: Point the top lean at the lamp for summer.

# page
burrow wombat,dot
Dot: This hemisphere on the ball gets direct light.
Wombat: The bottom hemisphere gets the weak light now.

# page
burrow wombat,dot
Dot: I slide the ball to the other side.
Wombat: I do not change the way the ball leans.

# page
burrow wombat,dot
Dot: Now the bottom gets the direct light.
Wombat: The top hemisphere has winter in this spot.

# page
meadow wombat,dot
Dot: Earth does this on its real orbit.
Wombat: It is tilted the whole time it travels.

# page
sky wombat,dot
Dot: Summer is not just because we got closer.
Wombat: Being nearer is a much smaller change.

# page
meadow wombat,dot
Dot: The tilt sets which hemisphere heats up.
Wombat: Direct light and long days make the warm turn.

# page
meadow wombat,dot
Dot: The ball test and the shadow test agree.
Wombat: Earth is tilted as it moves on its orbit.
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
Wombat: Let us watch one work this bright bed.

# page
garden wombat,dot
Dot: I guess she checks every bloom with no plan.
Wombat: A garden is huge for a bee that small.

# page
meadow wombat,dot
Dot: Random checks would waste most of the day.
Wombat: She has better tools than a wild guess.

# page
garden wombat,dot
Dot: Flowers call out with color, shape, and smell.
Wombat: A bee can use all three on one trip.

# page
garden wombat,dot
Dot: Many flowers also wear marks we cannot see.
Wombat: Those marks are ultraviolet light on the petals.

# page
meadow wombat,dot
Dot: People cannot see ultraviolet light at all.
Wombat: Bees can see it, and it guides them in.

# page
garden wombat,dot
Dot: The marks point toward the middle of the bloom.
Wombat: That is where the nectar and the pollen are.

# page
garden wombat,dot
Dot: Nectar is the sweet sip the flower makes.
Wombat: Pollen is the powder that can make seeds.

# page
meadow wombat,dot
Dot: The bee drinks nectar to fuel her flight.
Wombat: She also packs pollen on her back legs.

# page
garden wombat,dot
Dot: Some pollen sticks to her body as she crawls.
Wombat: At the next flower that powder can rub off.

# page
meadow wombat,dot
Dot: The flower uses that pollen to make seeds.
Wombat: The bee gets food, and the plant gets help.

# page
garden wombat,dot
Dot: When she finds a rich patch, she flies home.
Wombat: Home is the hive, full of other bees.

# page
meadow wombat,dot
Dot: I guess she leads them back one by one.
Wombat: She does not walk them there like a guide.

# page
garden wombat,dot
Dot: In the dark hive she does a waggle dance.
Wombat: The dance is a map made of moves.

# page
garden wombat,dot
Dot: What does the waggle dance tell the others?
Wombat: It tells the way and about how far.

# page
meadow wombat,dot
Dot: The angle of her waggle shows the way.
Wombat: Straight up in the hive stands for the sun.

# page
meadow wombat,dot
Dot: A waggle to the right of up means turn.
Wombat: They keep that same angle from the sun.

# page
garden wombat,dot
Dot: A longer waggle means the patch is farther away.
Wombat: A short waggle means the flowers are closer.

# page
meadow wombat,dot
Dot: So the dance is not the flower name.
Wombat: Bees do not need a name to find it.

# page
meadow wombat,dot
Dot: It does not tell what year it is.
Wombat: The dance points the way to food.

# page
garden wombat,dot
Dot: The other bees watch the dance in the hive.
Wombat: Then they fly off along that path.

# page
garden wombat,dot
Dot: Smell on her body can add a clue too.
Wombat: The scent of the flower rides home with her.

# page
meadow wombat,dot
Dot: Suppose one patch is near and one is far.
Wombat: A short waggle can point to the near patch.

# page
meadow wombat,dot
Dot: A long waggle can point to the far patch.
Wombat: The flowers may match, but the distance does not.

# page
garden wombat,dot
Dot: The hive mates read both dances and choose.
Wombat: They can send more bees to the richer patch.

# page
garden wombat,dot
Dot: Bees can also learn which colors paid off.
Wombat: A color that held nectar today gets a return.

# page
meadow wombat,dot
Dot: They skip empty blooms and return to good ones.
Wombat: The dance plus what they learned speeds the search.

# page
sky wombat,dot
Dot: Wind and rain can change the search.
Wombat: A noon bloom may shut before dusk.

# page
meadow wombat,dot
Dot: So they must check, not trust one old map.
Wombat: A new dance can update the hive.

# page
garden wombat,dot
Dot: You can try this by watching a real bee.
Wombat: Stand a safe distance from the flower.

# page
garden wombat,dot
Dot: Stay still and do not swat or grab.
Wombat: A bee on a bloom is busy with food.

# page
garden wombat,dot
Dot: Watch her head go toward the middle.
Wombat: That is where the nectar and pollen sit.

# page
garden wombat,dot
Dot: See if she crawls in and then backs out.
Wombat: Pollen may show as bright dust on her legs.

# page
meadow wombat,dot
Dot: When she leaves, do not chase her home.
Wombat: Her dance will happen where we cannot see.

# page
meadow wombat,dot
Dot: You can still act out the waggle dance.
Wombat: Pick a tree to stand in for the sun.

# page
meadow wombat,dot
Dot: Face a bit left or right of that tree.
Wombat: That angle is the way the bee would tell.

# page
meadow wombat,dot
Dot: Now waggle and count your steps out loud.
Wombat: More steps mean the flower is farther away.

# page
meadow wombat,dot
Dot: Ask a friend to follow your angle and steps.
Wombat: If they find the spot, the dance worked.

# page
garden wombat,dot
Dot: A real bee does this with no spoken words.
Wombat: The other bees read the moves and go.

# page
garden wombat,dot
Dot: Flowers offer nectar and pollen, not tricks.
Wombat: The sweet sip and the powder are the pay.

# page
meadow wombat,dot
Dot: Ultraviolet marks help her hit the middle fast.
Wombat: We miss those marks, so the bloom looks plain.

# page
garden wombat,dot
Dot: To a bee that plain bloom shows a path.
Wombat: The path leads in toward nectar and pollen.

# page
garden wombat,dot
Dot: She may visit many blooms on one flight.
Wombat: Each visit can move pollen to a new flower.

# page
meadow wombat,dot
Dot: That is how many plants get to make seeds.
Wombat: She was after food, and the plant got help.

# page
meadow wombat,dot
Dot: Both sides gain, so both keep at the work.
Wombat: Flowers still offer nectar and pollen each day.

# page
garden wombat,dot
Dot: A poor patch does not earn a long dance.
Wombat: Fewer bees will waste a trip on empty blooms.

# page
meadow wombat,dot
Dot: A rich patch earns a strong waggle.
Wombat: The way and the distance get clear news.

# page
garden wombat,dot
Dot: The hive gets the news with no drawn map.
Wombat: Moves, angle, and step counts carry it.

# page
garden wombat,dot
Dot: Let us watch one more bee on a bloom.
Wombat: She aims for the middle, then she drinks.

# page
garden wombat,dot
Dot: I see dust on her legs as she leaves.
Wombat: That dust is pollen she will carry on.

# page
sky wombat,dot
Dot: She flies off in a straight line now.
Wombat: She may be heading home to dance the way.

# page
meadow wombat,dot
Dot: Later other bees may find this same bed.
Wombat: One dance today can guide the next trips.

# page
garden wombat,dot
Dot: If you watch, keep your hands down and still.
Wombat: Bees sting to defend, so give them room.

# page
garden wombat,dot
Dot: A safe distance still lets you see the visit.
Wombat: You can count how long she stays there.

# page
meadow wombat,dot
Dot: Then point and count steps like her dance.
Wombat: A friend should be able to find your spot.

# page
meadow wombat,dot
Dot: If they miss, change the angle and try again.
Wombat: Bees repeat the dance so others can read it.

# page
garden wombat,dot
Dot: Color, smell, and ultraviolet marks start the find.
Wombat: The waggle dance shares the find with the hive.

# page
meadow wombat,dot
Dot: Nectar feeds the flight, and pollen feeds the young.
Wombat: Seeds are the plant pay for that trade.

# page
meadow wombat,dot
Dot: She has a plan, not a random wander.
Wombat: Senses find the bloom, and the dance shares it.

# page
garden wombat,dot
Dot: Watch a bee, or point and count the steps.
Wombat: Either try shows how the news can travel.
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
Dot: Last week the moon was a thin bright curve.
Wombat: Tonight more of it glows, and that change has a name.

# page
moon wombat,dot
Dot: I guess something takes a bite out of the moon.
Wombat: A bite would leave crumbs, and we never see those.

# page
sky wombat,dot
Dot: Maybe it melts a little and then grows back.
Wombat: Rock does not melt and reform every few weeks.

# page
sky wombat,dot
Dot: Another guess says Earth shadow paints the shape.
Wombat: Earth shadow does happen, but that is a rare eclipse.

# page
moon wombat,dot
Dot: An eclipse is not the monthly change we see.
Wombat: Most nights the shape is a phase, not a shadow show.

# page
meadow wombat,dot
Dot: Does the moon make its own light like a lamp?
Wombat: No, the moon reflects sunlight from the sun.

# page
sky wombat,dot
Dot: One half of the moon is lit by that sunlight.
Wombat: The other half is dark because it faces away.

# page
moon wombat,dot
Dot: The moon itself stays round the whole time.
Wombat: A round ball does not turn into a thin slice.

# page
sky wombat,dot
Dot: Then why does the bright part seem to change?
Wombat: We see more or less of the lit half.

# page
moon wombat,dot
Dot: The moon travels around Earth as the month goes on.
Wombat: Our view of the lit half shifts as it moves.

# page
moon wombat,dot
Dot: In a crescent phase we see only a slim edge.
Wombat: A crescent is a thin curved slice of the lit half.

# page
sky wombat,dot
Dot: A full moon means we face the whole lit half.
Wombat: The dark half is on the far side, out of view.

# page
burrow wombat,dot
Dot: A ball, a lamp, and a dark room can show this.
Wombat: The lamp is the sun, and the ball is the moon.

# page
burrow wombat,dot
Dot: Your head is Earth, and your eyes are the view.
Wombat: Hold the ball out and turn in a slow circle.

# page
burrow wombat,dot
Dot: Put the ball so you are between it and the lamp.
Wombat: Your head may block the light if it lines up.

# page
burrow wombat,dot
Dot: Raise the ball a little so your head shadow misses it.
Wombat: Now you should see the full moon phase.

# page
burrow wombat,dot
Dot: Now hold the ball between your face and the lamp.
Wombat: You mostly see the dark half, which is the new moon.

# page
burrow wombat,dot
Dot: Shift the ball a little to one side of the lamp.
Wombat: A thin bright edge appears, and that is a crescent.

# page
moon wombat,dot
Dot: The ball stayed round in every spot you tried.
Wombat: Only the lit amount in your view changed.

# page
sky wombat,dot
Dot: Nothing took a bite, and nothing melted the ball.
Wombat: You just saw a new amount of the lit half.

# page
meadow wombat,dot
Dot: Hold the ball straight out to your left.
Wombat: About half of the face you see is lit.

# page
meadow wombat,dot
Dot: People call that look a half moon phase.
Wombat: You see half of the lit side from this angle.

# page
burrow wombat,dot
Dot: Move the ball onward and the bright part grows fat.
Wombat: That fatter phase still comes from the same round ball.

# page
burrow wombat,dot
Dot: Keep going until the bright face is full again.
Wombat: You have walked the phase cycle once around.

# page
sky wombat,dot
Dot: A thin slice is a crescent phase.
Wombat: A full face is the full phase of the moon.

# page
moon wombat,dot
Dot: The shape name tracks how much lit half we see.
Wombat: The moon never swaps its round body for a new one.

# page
sky wombat,dot
Dot: Earth shadow would creep across the full face in an eclipse.
Wombat: A phase grows over many nights, not in one dark hour.

# page
moon wombat,dot
Dot: You can watch for a real eclipse on rare news nights.
Wombat: Do not use that rare event to explain every phase.

# page
meadow wombat,dot
Dot: A shiny ball in real sunlight shows the same split.
Wombat: One half stays bright and the other half stays dark.

# page
meadow wombat,dot
Dot: Walk around it and the bright shape seems to change.
Wombat: The ball did not change, and your view did.

# page
sky wombat,dot
Dot: From the moon, Earth would show phases too.
Wombat: They would see more or less of Earth's lit half.

# page
sky wombat,dot
Dot: Earth would still be round while its phase changed.
Wombat: The same rule works for any ball in sunlight.

# page
moon wombat,dot
Dot: The moon phase changes a little each night.
Wombat: About one month brings the same phase back again.

# page
moon wombat,dot
Dot: If you look every clear night, you can see the shift.
Wombat: Clouds can hide a phase, but they do not reshape it.

# page
meadow wombat,dot
Dot: Draw the moon tonight and leave room for the next sketch.
Wombat: Three nights later the bright slice should have changed.

# page
moon wombat,dot
Dot: If the bright part is growing, you head toward full.
Wombat: If it is shrinking, you head toward a thin crescent.

# page
burrow wombat,dot
Dot: In the dark room the lamp light reflects off the ball.
Wombat: The ball makes no light, just as the moon makes none.

# page
burrow wombat,dot
Dot: The phase you see depends on where you stand.
Wombat: Move your feet and you get a new phase.

# page
burrow wombat,dot
Dot: Stay still and move the ball, and the phase changes too.
Wombat: That matches the moon moving around Earth.

# page
meadow wombat,dot
Dot: At new moon the lit half faces away from us.
Wombat: The moon is still there, even when the sky looks empty.

# page
sky wombat,dot
Dot: A crescent shows near sunrise or sunset in the sky.
Wombat: You see just a slim edge of the lit half then.

# page
sky wombat,dot
Dot: The full moon sits far from the sun in the sky.
Wombat: You are looking at the whole lit half on that night.

# page
meadow wombat,dot
Dot: That is why the full moon can light up the ground.
Wombat: It reflects a lot of sunlight straight back toward us.

# page
burrow wombat,dot
Dot: At full face, lift the ball so your head misses it.
Wombat: If your head blocks the lamp, that is a tiny eclipse.

# page
burrow wombat,dot
Dot: A tiny head shadow is not the monthly phase.
Wombat: Shift up and the full lit face comes back.

# page
moon wombat,dot
Dot: I will check the real moon with the same idea.
Wombat: I will ask how much of the lit half shows.

# page
moon wombat,dot
Dot: A crescent means a thin slice, not a broken moon.
Wombat: The rest of the round moon is still up there.

# page
moon wombat,dot
Dot: On a clear crescent night, the dark part may glow faintly.
Wombat: Earth reflects some sunlight onto that dark part.

# page
sky wombat,dot
Dot: That faint glow is not the moon making light.
Wombat: Sunlight bounced off Earth and then off the moon.

# page
sky wombat,dot
Dot: Two bounces, and still the moon makes none of its own.
Wombat: Both the phase and that faint glow are bounced light.

# page
burrow wombat,dot
Dot: Darken the room, set a lamp, and hold a ball.
Wombat: Turn in place and name each phase you see.

# page
burrow wombat,dot
Dot: Call the thin edge a crescent when it first shows.
Wombat: Call the full bright face a full phase.

# page
burrow wombat,dot
Dot: Call the half lit face a half moon phase.
Wombat: Each name is a view, not a new moon shape.

# page
meadow wombat,dot
Dot: The real moon will match your ball if you are patient.
Wombat: Check it for a few clear nights in a row.

# page
meadow wombat,dot
Dot: Sketch the bright part and note if it grows or shrinks.
Wombat: Growing heads toward full, and shrinking heads toward crescent.

# page
sky wombat,dot
Dot: The moon stays round while the phase keeps changing.
Wombat: We see more or less of the lit half each time.

# page
moon wombat,dot
Dot: Sunlight does the lighting, and the moon reflects it.
Wombat: No bite, no melt, and no nightly eclipse is needed.

# page
moon wombat,dot
Dot: A crescent, a half, and a full face are one ball.
Wombat: The phase is how much of that lit ball we face.

# page
burrow wombat,dot
Dot: The lamp and ball showed that the moon stays round.
Wombat: They also showed why the bright shape seems to change.

# page
moon wombat,dot
Dot: I will look up and name the phase I see.
Wombat: I will know the moon reflects sunlight and stays round.
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
Dot: The sun seems to rise, cross the sky, and set.
Wombat: It slips under the horizon at the end of the day.

# page
meadow wombat,dot
Dot: I guess the sun races around a still Earth.
Wombat: That guess matches the view, so it feels strong.

# page
sky wombat,dot
Dot: If Earth sat still, the sun would have to circle us.
Wombat: A daily race like that is not what happens.

# page
meadow wombat,dot
Dot: Earth spins, and we are the ones turning.
Wombat: The sun stays put while our ground turns under us.

# page
sky wombat,dot
Dot: Earth turns around a line called its axis.
Wombat: That axis runs through the north pole and the south pole.

# page
burrow wombat,dot
Dot: A fruit, a pin, and a lamp can show the spin.
Wombat: The pin stands for the axis through the fruit.

# page
burrow wombat,dot
Dot: Spin the fruit and the lamp stays still.
Wombat: One side goes bright, then dark, then bright again.

# page
burrow wombat,dot
Dot: The pin side did not make the lamp run around.
Wombat: The fruit did the turning, just as Earth spins.

# page
sky wombat,dot
Dot: The side of Earth facing the sun has day.
Wombat: The side facing away from the sun has night.

# page
meadow wombat,dot
Dot: Your town rides on one side as Earth spins.
Wombat: When your town faces the sun, you have day.

# page
meadow wombat,dot
Dot: Sunrise is your place turning into the light.
Wombat: You come over the edge from night into day.

# page
sky wombat,dot
Dot: Sunset is your place turning out of the light.
Wombat: You head past the horizon into the dark side.

# page
sky wombat,dot
Dot: The sun seems to move because we turn.
Wombat: The view changes, and that makes the sun seem to travel.

# page
meadow wombat,dot
Dot: A ride in a car shows the same kind of trick.
Wombat: Trees seem to slide past, but you are the one moving.

# page
meadow wombat,dot
Dot: The trees are not racing beside the road.
Wombat: Your motion makes still things seem to drift by.

# page
sky wombat,dot
Dot: The sun is like those trees in this one way.
Wombat: It is not racing, and our spin makes it seem to.

# page
burrow wombat,dot
Dot: Shadows change from morning to late day because we spin.
Wombat: A stick in the ground can make that easy to see.

# page
meadow wombat,dot
Dot: In the morning the sun is low near the horizon.
Wombat: Low light skims the ground and the shadow grows long.

# page
meadow wombat,dot
Dot: Near noon the sun is high for many places.
Wombat: High light makes the stick shadow short and tight.

# page
meadow wombat,dot
Dot: By late day the sun is low again.
Wombat: The shadow grows long on the other side of the stick.

# page
meadow wombat,dot
Dot: The sun did not jump, and the stick did not move.
Wombat: Earth spins, so the light angle on the stick changed.

# page
sky wombat,dot
Dot: Earth spins from the west toward the east.
Wombat: That is why the sun seems to rise in the east.

# page
sky wombat,dot
Dot: Your spot turns east into the morning light.
Wombat: You keep turning until the sun sets in the west.

# page
meadow wombat,dot
Dot: The horizon in the east is the morning gate.
Wombat: The west horizon is where the sun seems to leave.

# page
burrow wombat,dot
Dot: Long ago, people trusted the racing sun idea.
Wombat: The view from the ground really does look like a race.

# page
meadow wombat,dot
Dot: A wrong first idea can match what your eyes see.
Wombat: Tests later showed that Earth spins on its axis.

# page
burrow wombat,dot
Dot: The fruit test does not prove the whole sky by itself.
Wombat: It shows how a spin can fool the view from the ground.

# page
meadow wombat,dot
Dot: Night is not a blanket someone pulls over the town.
Wombat: It is your half of Earth facing away from the sun.

# page
sky wombat,dot
Dot: Day is not a lamp someone switches on in the sky.
Wombat: It is your half turning to face the sunlight.

# page
sky wombat,dot
Dot: One full spin takes about one day and night.
Wombat: That is why day and night keep trading places.

# page
meadow wombat,dot
Dot: The axis stays the line we spin around.
Wombat: We do not spin around a random new line each morning.

# page
meadow wombat,dot
Dot: You can try this with a stick in the ground.
Wombat: Pick a sunny spot that stays clear all day.

# page
meadow wombat,dot
Dot: Push the stick in so it stands straight up.
Wombat: Mark the tip of its shadow in the morning.

# page
meadow wombat,dot
Dot: Come back near noon and mark the shadow again.
Wombat: The noon mark should sit closer to the stick.

# page
meadow wombat,dot
Dot: Come back late in the day and mark it once more.
Wombat: That mark should be long and on a new side.

# page
meadow wombat,dot
Dot: Those marks show that the shadow moved.
Wombat: A third mark shows the move did not stop at noon.

# page
burrow wombat,dot
Dot: You can do a small version on a table too.
Wombat: Spin a fruit by a lamp and watch its tiny shadow.

# page
burrow wombat,dot
Dot: The shadow swings as the fruit spins.
Wombat: The lamp stayed still while the shadow moved.

# page
meadow wombat,dot
Dot: Your stick shadow swings for the same reason.
Wombat: Earth spins, so the sunlight hits from a new angle.

# page
sky wombat,dot
Dot: The horizon is where the sky seems to meet the land.
Wombat: Hills, trees, or a flat field can make that line.

# page
sky wombat,dot
Dot: At sunset the sun seems to sink under the horizon.
Wombat: Your eyes see a sunset, but you are turning away.

# page
meadow wombat,dot
Dot: At sunrise it seems to climb over the horizon.
Wombat: Your place on Earth is turning into the light.

# page
sky wombat,dot
Dot: If Earth did not spin, this daily trip would stop.
Wombat: One side would stay in day and one side in night.

# page
meadow wombat,dot
Dot: The orbit still moves Earth around the sun.
Wombat: That long trip makes the year, not the day.

# page
sky wombat,dot
Dot: Day and night come from the spin on our axis.
Wombat: Seasons come from the lean of that same axis.

# page
burrow wombat,dot
Dot: Watch the fruit and say when your pin side has day.
Wombat: Day is when that side faces the lamp.

# page
burrow wombat,dot
Dot: Say night when that side faces away.
Wombat: Keep the lamp still so the test stays fair.

# page
meadow wombat,dot
Dot: The sun is not racing around us each day.
Wombat: We spin, and the view from the ground changes.

# page
sky wombat,dot
Dot: Clouds do not pull the sun across the sky.
Wombat: That is another wrong guess the view can spark.

# page
moon wombat,dot
Dot: The moon does not hide the sun to make night.
Wombat: Night comes even when the moon is up in the sky.

# page
meadow wombat,dot
Dot: A moon in the day sky still leaves the land bright.
Wombat: Day stays until your place spins away from the sun.

# page
meadow wombat,dot
Dot: I will mark a stick shadow two times today.
Wombat: Morning and late day should give two long marks.

# page
meadow wombat,dot
Dot: If I add noon, that mark should be the short one.
Wombat: A short shadow means the sun is high over us.

# page
sky wombat,dot
Dot: Look at the horizon at sunrise and at sunset.
Wombat: Name east for the rise and west for the set.

# page
sky wombat,dot
Dot: Those names match the way Earth spins.
Wombat: We turn toward the east, into the morning light.

# page
burrow wombat,dot
Dot: The pin in the fruit is my model of the axis.
Wombat: When I spin the fruit, I copy what Earth does.

# page
burrow wombat,dot
Dot: The lamp does not chase the fruit.
Wombat: The sun does not chase Earth around the sky each day.

# page
meadow wombat,dot
Dot: Shadows, sunrise, and sunset all fit one spin.
Wombat: A racing sun is the guess that does not hold.

# page
sky wombat,dot
Dot: The horizon is only the edge of our view.
Wombat: Past it, the sun still shines on places that have day.

# page
meadow wombat,dot
Dot: Earth spins on its axis and makes day and night.
Wombat: The sun seems to move because we turn past the horizon.
`,
  }),
];
