import type { ChapterDef, PrepQuestion } from "../types";

/** Motion - authored olympiad-style content (original). */

const SET_A: PrepQuestion[] = [
  {
    id: "g9-sci-motion-a-q01",
    prompt: "Distance is…",
    options: [
      { id: "a", text: "a scalar (path length)" },
      { id: "b", text: "always equal to displacement" },
      { id: "c", text: "measured only in kg" },
      { id: "d", text: "a vector" }
    ],
    answerId: "a",
    explanation: "Distance is scalar path length; displacement is vector.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-a-q02",
    prompt: "Displacement can be zero when distance is not zero if the body…",
    options: [
      { id: "a", text: "never moves" },
      { id: "b", text: "returns to its starting point" },
      { id: "c", text: "moves in a straight line one way only" },
      { id: "d", text: "has infinite speed" }
    ],
    answerId: "b",
    explanation: "A round trip can have zero net displacement.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-a-q03",
    prompt: "Speed equals…",
    options: [
      { id: "a", text: "force / mass" },
      { id: "b", text: "mass × acceleration" },
      { id: "c", text: "distance / time" },
      { id: "d", text: "displacement / time only as a name for speed" }
    ],
    answerId: "c",
    explanation: "Average speed = total distance / total time.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-a-q04",
    prompt: "Velocity is…",
    options: [
      { id: "a", text: "only a scalar like distance" },
      { id: "b", text: "the same as acceleration" },
      { id: "c", text: "measured in kilograms" },
      { id: "d", text: "speed with direction (a vector)" }
    ],
    answerId: "d",
    explanation: "Velocity is a vector: speed with direction.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-a-q05",
    prompt: "SI unit of acceleration is…",
    options: [
      { id: "a", text: "m/s²" },
      { id: "b", text: "m²/s" },
      { id: "c", text: "N" },
      { id: "d", text: "m/s" }
    ],
    answerId: "a",
    explanation: "Acceleration is rate of change of velocity → m/s².",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-a-q06",
    prompt: "A body moving with constant velocity has acceleration…",
    options: [
      { id: "a", text: "maximum" },
      { id: "b", text: "zero" },
      { id: "c", text: "infinite" },
      { id: "d", text: "equal to velocity" }
    ],
    answerId: "b",
    explanation: "Constant velocity ⇒ zero acceleration.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-a-q07",
    prompt: "If a car goes 100 m east then 100 m west, displacement is…",
    options: [
      { id: "a", text: "100 m east" },
      { id: "b", text: "200 m east" },
      { id: "c", text: "0" },
      { id: "d", text: "100 m west" }
    ],
    answerId: "c",
    explanation: "Net change in position is zero.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-a-q08",
    prompt: "Average velocity equals…",
    options: [
      { id: "a", text: "speed × time" },
      { id: "b", text: "acceleration × time only always" },
      { id: "c", text: "total distance / time" },
      { id: "d", text: "displacement / total time" }
    ],
    answerId: "d",
    explanation: "Average velocity uses displacement over time.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-a-q09",
    prompt: "The slope of a distance–time graph gives…",
    options: [
      { id: "a", text: "speed" },
      { id: "b", text: "force" },
      { id: "c", text: "mass" },
      { id: "d", text: "acceleration" }
    ],
    answerId: "a",
    explanation: "Slope of s–t (distance–time) indicates speed.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-a-q10",
    prompt: "The slope of a velocity–time graph gives…",
    options: [
      { id: "a", text: "distance" },
      { id: "b", text: "acceleration" },
      { id: "c", text: "mass" },
      { id: "d", text: "force" }
    ],
    answerId: "b",
    explanation: "a = Δv/Δt = slope on v–t graph.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-a-q11",
    prompt: "Area under a velocity–time graph gives…",
    options: [
      { id: "a", text: "power" },
      { id: "b", text: "acceleration" },
      { id: "c", text: "displacement (for the interval)" },
      { id: "d", text: "force" }
    ],
    answerId: "c",
    explanation: "∫v dt corresponds to displacement.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-a-q12",
    prompt: "Which is a vector quantity?",
    options: [
      { id: "a", text: "time" },
      { id: "b", text: "speed" },
      { id: "c", text: "distance" },
      { id: "d", text: "displacement" }
    ],
    answerId: "d",
    explanation: "Displacement has magnitude and direction.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-a-q13",
    prompt: "Uniform circular motion has…",
    options: [
      { id: "a", text: "constant speed but changing velocity (direction)" },
      { id: "b", text: "zero speed" },
      { id: "c", text: "no acceleration" },
      { id: "d", text: "constant velocity" }
    ],
    answerId: "a",
    explanation: "Direction changes continuously ⇒ velocity changes ⇒ centripetal acceleration.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-a-q14",
    prompt: "Equation for velocity under constant acceleration: v = …",
    options: [
      { id: "a", text: "a/u + t" },
      { id: "b", text: "u + at" },
      { id: "c", text: "u − a/t" },
      { id: "d", text: "ut + a" }
    ],
    answerId: "b",
    explanation: "First equation of motion: v = u + at.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-a-q15",
    prompt: "s = ut + ½at² assumes…",
    options: [
      { id: "a", text: "circular path only" },
      { id: "b", text: "variable acceleration randomly" },
      { id: "c", text: "constant acceleration (and straight-line motion as used in class)" },
      { id: "d", text: "zero mass" }
    ],
    answerId: "c",
    explanation: "Standard equations assume constant acceleration.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-a-q16",
    prompt: "A body starts from rest. Its initial velocity u is…",
    options: [
      { id: "a", text: "equal to g always" },
      { id: "b", text: "infinite" },
      { id: "c", text: "maximum" },
      { id: "d", text: "0" }
    ],
    answerId: "d",
    explanation: "From rest means u = 0.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-a-q17",
    prompt: "If acceleration is negative (deceleration), speed generally…",
    options: [
      { id: "a", text: "decreases (when velocity and accel oppose)" },
      { id: "b", text: "stays meaningless" },
      { id: "c", text: "becomes mass" },
      { id: "d", text: "increases" }
    ],
    answerId: "a",
    explanation: "Deceleration reduces speed when opposing velocity.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-a-q18",
    prompt: "Distance travelled in nth second under constant a relates to…",
    options: [
      { id: "a", text: "only mass" },
      { id: "b", text: "u + a(n − ½)" },
      { id: "c", text: "u/a only" },
      { id: "d", text: "t² only without u" }
    ],
    answerId: "b",
    explanation: "s_n = u + a(n − 1/2) for constant a (standard formula).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-a-q19",
    prompt: "Which graph is a straight line through origin for uniform speed?",
    options: [
      { id: "a", text: "acceleration–time always rising" },
      { id: "b", text: "force–time only" },
      { id: "c", text: "distance–time" },
      { id: "d", text: "velocity–time always curved" }
    ],
    answerId: "c",
    explanation: "Constant speed ⇒ linear distance–time through proportional rise.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-a-q20",
    prompt: "Displacement’s SI unit is…",
    options: [
      { id: "a", text: "m/s" },
      { id: "b", text: "kg" },
      { id: "c", text: "second" },
      { id: "d", text: "metre" }
    ],
    answerId: "d",
    explanation: "Displacement is a length → metre.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-a-q21",
    prompt: "A particle moves 3 m east and 4 m north. Net displacement magnitude is…",
    options: [
      { id: "a", text: "5 m" },
      { id: "b", text: "1 m" },
      { id: "c", text: "12 m" },
      { id: "d", text: "7 m" }
    ],
    answerId: "a",
    explanation: "Perpendicular paths: √(3²+4²)=5 m.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-a-q22",
    prompt: "Instantaneous speed is…",
    options: [
      { id: "a", text: "average over a day only" },
      { id: "b", text: "speed at a particular instant" },
      { id: "c", text: "always zero" },
      { id: "d", text: "acceleration" }
    ],
    answerId: "b",
    explanation: "Instantaneous = at an instant (limit of average).",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-a-q23",
    prompt: "If v–t graph is a horizontal line, acceleration is…",
    options: [
      { id: "a", text: "undefined always" },
      { id: "b", text: "positive constant" },
      { id: "c", text: "zero" },
      { id: "d", text: "increasing" }
    ],
    answerId: "c",
    explanation: "Horizontal v means constant velocity → a = 0.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-a-q24",
    prompt: "Free fall near Earth (ignoring air) has acceleration approximately…",
    options: [
      { id: "a", text: "9.8 m/s upward always" },
      { id: "b", text: "98 m/s²" },
      { id: "c", text: "0" },
      { id: "d", text: "9.8 m/s² downward" }
    ],
    answerId: "d",
    explanation: "g ≈ 9.8 m/s² downward.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const SET_B: PrepQuestion[] = [
  {
    id: "g9-sci-motion-b-q01",
    prompt: "Which quantity can be negative in one-dimensional motion?",
    options: [
      { id: "a", text: "distance" },
      { id: "b", text: "speed" },
      { id: "c", text: "displacement" },
      { id: "d", text: "time interval" }
    ],
    answerId: "c",
    explanation: "Displacement can be negative depending on chosen positive direction.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-b-q02",
    prompt: "A bus travels 60 km in 2 hours. Average speed is…",
    options: [
      { id: "a", text: "30 km/h" },
      { id: "b", text: "120 km/h" },
      { id: "c", text: "60 km/h" },
      { id: "d", text: "15 km/h" }
    ],
    answerId: "a",
    explanation: "60/2 = 30 km/h.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-b-q03",
    prompt: "If displacement is 40 m and time is 8 s, average velocity magnitude is…",
    options: [
      { id: "a", text: "5 m/s" },
      { id: "b", text: "32 m/s" },
      { id: "c", text: "48 m/s" },
      { id: "d", text: "0.2 m/s" }
    ],
    answerId: "a",
    explanation: "40/8 = 5 m/s.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-b-q04",
    prompt: "Acceleration is zero when…",
    options: [
      { id: "a", text: "velocity changes" },
      { id: "b", text: "velocity is constant" },
      { id: "c", text: "force is infinite" },
      { id: "d", text: "distance is maximum" }
    ],
    answerId: "b",
    explanation: "Constant velocity (including rest) means zero acceleration.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-b-q05",
    prompt: "v² = u² + 2as is used when…",
    options: [
      { id: "a", text: "time is unknown but a is constant" },
      { id: "b", text: "acceleration varies wildly" },
      { id: "c", text: "mass is required" },
      { id: "d", text: "only circular motion" }
    ],
    answerId: "a",
    explanation: "Third equation eliminates t for constant a.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-b-q06",
    prompt: "On a distance–time graph, a horizontal line means the body is…",
    options: [
      { id: "a", text: "speeding up" },
      { id: "b", text: "at rest" },
      { id: "c", text: "moving with increasing speed" },
      { id: "d", text: "accelerating uniformly" }
    ],
    answerId: "b",
    explanation: "Distance not changing → at rest.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-b-q07",
    prompt: "If a v–t graph is a straight line sloping upward, acceleration is…",
    options: [
      { id: "a", text: "zero" },
      { id: "b", text: "constant and positive" },
      { id: "c", text: "infinite" },
      { id: "d", text: "negative always" }
    ],
    answerId: "b",
    explanation: "Constant positive slope → constant positive a.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-b-q08",
    prompt: "Scalar quantities have…",
    options: [
      { id: "a", text: "magnitude only" },
      { id: "b", text: "magnitude and direction" },
      { id: "c", text: "only direction" },
      { id: "d", text: "neither" }
    ],
    answerId: "a",
    explanation: "Scalars: magnitude only.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-b-q09",
    prompt: "A car accelerates from 10 m/s to 20 m/s in 5 s. Acceleration is…",
    options: [
      { id: "a", text: "2 m/s²" },
      { id: "b", text: "6 m/s²" },
      { id: "c", text: "50 m/s²" },
      { id: "d", text: "0.5 m/s²" }
    ],
    answerId: "a",
    explanation: "a = (20−10)/5 = 2 m/s².",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-b-q10",
    prompt: "Distance is never…",
    options: [
      { id: "a", text: "positive" },
      { id: "b", text: "zero" },
      { id: "c", text: "negative" },
      { id: "d", text: "greater than displacement magnitude in a detour" }
    ],
    answerId: "c",
    explanation: "Distance cannot be negative.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-b-q11",
    prompt: "For a freely falling object from rest, after time t, speed is about…",
    options: [
      { id: "a", text: "gt" },
      { id: "b", text: "g/t" },
      { id: "c", text: "g + t" },
      { id: "d", text: "t/g" }
    ],
    answerId: "a",
    explanation: "v = u + gt with u = 0 → v = gt.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-b-q12",
    prompt: "Uniform motion means…",
    options: [
      { id: "a", text: "equal distances in equal intervals of time (constant speed on a straight path as taught)" },
      { id: "b", text: "ever-changing speed" },
      { id: "c", text: "rest only" },
      { id: "d", text: "circular with changing speed" }
    ],
    answerId: "a",
    explanation: "Equal distances in equal times characterises uniform motion.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-b-q13",
    prompt: "Non-uniform motion means…",
    options: [
      { id: "a", text: "constant speed always" },
      { id: "b", text: "changing speed (unequal distances in equal times)" },
      { id: "c", text: "zero displacement always" },
      { id: "d", text: "motion without path" }
    ],
    answerId: "b",
    explanation: "Speed changes in non-uniform motion.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-b-q14",
    prompt: "If u = 0, a = 2 m/s², t = 3 s, then s =…",
    options: [
      { id: "a", text: "9 m" },
      { id: "b", text: "6 m" },
      { id: "c", text: "18 m" },
      { id: "d", text: "3 m" }
    ],
    answerId: "a",
    explanation: "s = 0·t + ½·2·9 = 9 m.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-b-q15",
    prompt: "A body moving east with speed 5 m/s has velocity…",
    options: [
      { id: "a", text: "5 m/s" },
      { id: "b", text: "5 m/s east" },
      { id: "c", text: "5 m east" },
      { id: "d", text: "25 m/s²" }
    ],
    answerId: "b",
    explanation: "Velocity needs the direction stated.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-b-q16",
    prompt: "Retardation means…",
    options: [
      { id: "a", text: "positive acceleration in direction of velocity" },
      { id: "b", text: "acceleration opposite to velocity (deceleration)" },
      { id: "c", text: "zero velocity only" },
      { id: "d", text: "constant speed forever" }
    ],
    answerId: "b",
    explanation: "Retardation/deceleration opposes velocity.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-b-q17",
    prompt: "The odometer of a car measures…",
    options: [
      { id: "a", text: "instantaneous velocity vector" },
      { id: "b", text: "distance travelled" },
      { id: "c", text: "acceleration" },
      { id: "d", text: "displacement only" }
    ],
    answerId: "b",
    explanation: "Odometer records path distance.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-b-q18",
    prompt: "A speedometer shows…",
    options: [
      { id: "a", text: "average speed for the whole trip only" },
      { id: "b", text: "instantaneous speed" },
      { id: "c", text: "displacement" },
      { id: "d", text: "force" }
    ],
    answerId: "b",
    explanation: "Speedometer indicates current speed.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-b-q19",
    prompt: "If distance–time graph is a curve bending upward, speed is…",
    options: [
      { id: "a", text: "constant" },
      { id: "b", text: "increasing" },
      { id: "c", text: "zero" },
      { id: "d", text: "negative" }
    ],
    answerId: "b",
    explanation: "Increasing slope means increasing speed.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-b-q20",
    prompt: "Displacement magnitude is always ____ distance.",
    options: [
      { id: "a", text: "greater than" },
      { id: "b", text: "less than or equal to" },
      { id: "c", text: "unrelated to" },
      { id: "d", text: "exactly twice" }
    ],
    answerId: "b",
    explanation: "Shortest path ≤ actual path length.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-b-q21",
    prompt: "For constant speed on a straight line, acceleration is…",
    options: [
      { id: "a", text: "g" },
      { id: "b", text: "0" },
      { id: "c", text: "v/t always non-zero" },
      { id: "d", text: "infinite" }
    ],
    answerId: "b",
    explanation: "No velocity change → a = 0.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-b-q22",
    prompt: "Which equation does not require time explicitly?",
    options: [
      { id: "a", text: "v = u + at" },
      { id: "b", text: "s = ut + ½at²" },
      { id: "c", text: "v² = u² + 2as" },
      { id: "d", text: "all require t" }
    ],
    answerId: "c",
    explanation: "v² = u² + 2as has no t.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-b-q23",
    prompt: "A ball thrown upward returns to the hand. Net displacement is…",
    options: [
      { id: "a", text: "maximum height" },
      { id: "b", text: "zero" },
      { id: "c", text: "twice the height" },
      { id: "d", text: "equal to distance" }
    ],
    answerId: "b",
    explanation: "Back to start → displacement zero; distance is twice height.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-b-q24",
    prompt: "SI unit of speed is…",
    options: [
      { id: "a", text: "m/s" },
      { id: "b", text: "m/s²" },
      { id: "c", text: "N" },
      { id: "d", text: "kg/m" }
    ],
    answerId: "a",
    explanation: "Speed = distance/time → m/s.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  }
];

const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "🏃",
    title: "Describing motion",
    body: ["Distance and displacement are not the same.", "Graphs and equations organise constant-acceleration stories.", "Lesson is optional; jump to a set anytime."],
    cta: "Let's go!",
    visual: "number-line",
    speak: "Distance, displacement, speed, velocity, acceleration and graphs.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: "number-line",
    speak: "Tap each card to reveal a key idea.",
    cards: [
      { label: "Distance vs displacement", reveal: "Path length vs net change (vector)", emoji: "↔️" },
      { label: "Speed vs velocity", reveal: "Scalar vs vector rates", emoji: "🚦" },
      { label: "Acceleration", reveal: "Rate of change of velocity", emoji: "📈" },
      { label: "Graphs", reveal: "Slope and area tell the story", emoji: "📉" }
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: "Round trip",
    visual: "number-line",
    speak: "Walk 50 metres and back: distance 100 metres, displacement zero.",
    steps: ["Go 50 m east", "Return 50 m west", "Distance adds to 100 m", "Displacement cancels to 0"],
    punchline: "Scalars and vectors disagree on round trips.",
  },
  {
    id: "t1",
    type: "try",
    title: "Your turn",
    prompt: "SI unit of acceleration?",
    options: [
        { id: "a", text: "m/s" },
        { id: "b", text: "m/s²" },
        { id: "c", text: "m" },
        { id: "d", text: "s" }
    ],
    answerId: "b",
    why: "Acceleration is change in velocity per time → m/s².",
    visual: "number-line",
    speak: "SI unit of acceleration?",
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Motion ready!",
    bullets: ["Vectors need direction", "Slope of v–t is acceleration", "s = ut + ½at² for constant a", "Set A and Set B ready — 24 MCQs each"],
    cta: "Back to chapter",
    speak: "Motion ready! You are ready for the practice sets.",
  },
];

export const g9ScienceMotion: ChapterDef = {
  id: "motion",
  title: "Motion",
  emoji: "🏃",
  blurb: "Distance, speed, velocity & graphs",
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: "forces-energy",
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: "forces-energy",
      questions: SET_B,
    },
  ],
  paperTopics: ["forces-energy", "materials"],
};

export const g9ScienceMotionQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
