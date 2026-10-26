import type { ChapterDef, PrepQuestion } from "../types";

/** Motion - original olympiad-style content (not affiliated with SOF). */

const SET_A: PrepQuestion[] = [
  {
    id: "g9-sci-motion-a-q01",
    prompt: "Distance is…",
    options: [
      { id: "a", text: "a scalar (path length)" },
      { id: "b", text: "always equal to displacement" },
      { id: "c", text: "the shortest straight-line gap between start and finish" },
      { id: "d", text: "a vector" }
    ],
    answerId: "a",
    explanation: "Distance is the total length of the path travelled, so it is a scalar. The shortest straight-line gap between start and finish is the size of the displacement, not the distance; the two are equal only when the body moves in a straight line without turning back. Displacement, not distance, is the vector.",
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
      { id: "a", text: "displacement / time only as a name for speed" },
      { id: "b", text: "force / mass" },
      { id: "c", text: "distance / time" },
      { id: "d", text: "mass × acceleration" }
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
      { id: "b", text: "m/s" },
      { id: "c", text: "m²/s" },
      { id: "d", text: "N" }
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
    prompt: "A car drives from P to Q and back to P along the straight road shown. What is its displacement for the whole trip?",
    options: [
      { id: "a", text: "200 m east" },
      { id: "b", text: "100 m west" },
      { id: "c", text: "0 m" },
      { id: "d", text: "100 m east" }
    ],
    answerId: "c",
    explanation: "The car finishes where it started, at P, so its change in position is zero: the displacement is 0 m. 200 m is the total distance travelled, not the displacement.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A straight road running east from point P to point Q, 100 m apart. One arrow goes from P to Q along the top of the road, and a second arrow comes back from Q to P below it.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><rect x=\"20\" y=\"95\" width=\"280\" height=\"40\" fill=\"#e5e7eb\" stroke=\"#6b7280\" stroke-width=\"1.5\"/><line x1=\"20\" y1=\"115\" x2=\"300\" y2=\"115\" stroke=\"#ffffff\" stroke-width=\"2\" stroke-dasharray=\"10 8\" stroke-linecap=\"round\"/><circle cx=\"50\" cy=\"115\" r=\"6\" fill=\"#1f2937\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"270\" cy=\"115\" r=\"6\" fill=\"#1f2937\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"50\" y=\"160\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">P</text><text x=\"270\" y=\"160\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">Q</text><line x1=\"55\" y1=\"80\" x2=\"257.0\" y2=\"80.0\" stroke=\"#2563eb\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><polygon points=\"265,80 257,84.4 257,75.6\" fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"262\" y1=\"178\" x2=\"66.0\" y2=\"178.0\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><polygon points=\"58,178 66,173.6 66,182.4\" fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1\" stroke-linejoin=\"round\"/><text x=\"160\" y=\"72\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">there</text><text x=\"160\" y=\"200\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">back</text><line x1=\"160.0\" y1=\"40.0\" x2=\"57.0\" y2=\"40.0\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"50,40 57,36.1 57,43.9\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"160.0\" y1=\"40.0\" x2=\"263.0\" y2=\"40.0\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"270,40 263,43.9 263,36.1\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><text x=\"160\" y=\"33\" font-size=\"13\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">100 m</text><text x=\"300\" y=\"33\" font-size=\"12\" text-anchor=\"end\" font-weight=\"500\" fill=\"#1f2937\">east →</text></svg>", "alt": "A straight road running east from point P to point Q, 100 m apart. One arrow goes from P to Q along the top of the road, and a second arrow comes back from Q to P below it."}
  },
  {
    id: "g9-sci-motion-a-q08",
    prompt: "Average velocity equals…",
    options: [
      { id: "a", text: "total distance / time" },
      { id: "b", text: "speed × time" },
      { id: "c", text: "acceleration × time" },
      { id: "d", text: "displacement / total time" }
    ],
    answerId: "d",
    explanation: "Average velocity uses displacement over time.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-a-q09",
    prompt: "What does the slope of the distance–time graph shown give, and what is its value?",
    options: [
      { id: "a", text: "Speed, 5 m/s" },
      { id: "b", text: "Acceleration, 5 m/s²" },
      { id: "c", text: "Force, 40 N" },
      { id: "d", text: "Mass, 8 kg" }
    ],
    answerId: "a",
    explanation: "The slope is the rise divided by the run: 40 m ÷ 8 s = 5 m/s, which is the speed. It is not an acceleration: the line is straight, so the speed is constant and does not change.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A distance–time graph with a straight sloping line from the origin. A right-angled triangle under part of the line shows a rise of 40 m over a time of 8 s.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><line x1=\"50\" y1=\"185\" x2=\"293.0\" y2=\"185.0\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"300,185 293,188.8 293,181.2\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"50\" y1=\"185\" x2=\"50.0\" y2=\"32.0\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"50,25 53.9,32 46.1,32\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"100\" y1=\"185\" x2=\"100\" y2=\"189\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"100\" y=\"201\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">4</text><line x1=\"150\" y1=\"185\" x2=\"150\" y2=\"189\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"150\" y=\"201\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">8</text><line x1=\"200\" y1=\"185\" x2=\"200\" y2=\"189\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"200\" y=\"201\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">12</text><line x1=\"250\" y1=\"185\" x2=\"250\" y2=\"189\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"250\" y=\"201\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">16</text><line x1=\"46\" y1=\"155\" x2=\"50\" y2=\"155\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"43\" y=\"159\" font-size=\"11\" text-anchor=\"end\" font-weight=\"500\" fill=\"#1f2937\">20</text><line x1=\"46\" y1=\"125\" x2=\"50\" y2=\"125\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"43\" y=\"129\" font-size=\"11\" text-anchor=\"end\" font-weight=\"500\" fill=\"#1f2937\">40</text><line x1=\"46\" y1=\"95\" x2=\"50\" y2=\"95\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"43\" y=\"99\" font-size=\"11\" text-anchor=\"end\" font-weight=\"500\" fill=\"#1f2937\">60</text><line x1=\"46\" y1=\"65\" x2=\"50\" y2=\"65\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"43\" y=\"69\" font-size=\"11\" text-anchor=\"end\" font-weight=\"500\" fill=\"#1f2937\">80</text><text x=\"300\" y=\"215\" font-size=\"12\" text-anchor=\"end\" font-weight=\"600\" fill=\"#1f2937\">time (s)</text><text x=\"44\" y=\"19\" font-size=\"12\" text-anchor=\"start\" font-weight=\"600\" fill=\"#1f2937\">distance (m)</text><line x1=\"50\" y1=\"185\" x2=\"270\" y2=\"53\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><polygon points=\"100,155 200,155 200,95\" fill=\"#fef9c3\" stroke=\"#ca8a04\" stroke-width=\"1.5\" stroke-linejoin=\"round\" opacity=\"0.8\"/><line x1=\"50\" y1=\"185\" x2=\"270\" y2=\"53\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><text x=\"150\" y=\"170\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">8 s</text><text x=\"206\" y=\"130\" font-size=\"12\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">40 m</text></svg>", "alt": "A distance–time graph with a straight sloping line from the origin. A right-angled triangle under part of the line shows a rise of 40 m over a time of 8 s."}
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
    prompt: "The shaded area under the velocity–time graph gives a quantity for the first 4 s. What is it, and what is its value?",
    options: [
      { id: "a", text: "Acceleration, 2 m/s²" },
      { id: "b", text: "Force, 32 N" },
      { id: "c", text: "Displacement, 16 m" },
      { id: "d", text: "Power, 32 W" }
    ],
    answerId: "c",
    explanation: "The area under a velocity–time graph is the displacement. The shaded triangle has area ½ × 4 s × 8 m/s = 16 m. 2 m/s² is the slope of the line, the acceleration, not the area under it.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A velocity–time graph. The velocity rises in a straight line from 0 at time 0 to 8 m/s at 4 s. The triangle under the line from 0 to 4 s is shaded.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><polygon points=\"50,185 250,185 250,65\" fill=\"#bfdbfe\" stroke=\"none\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><line x1=\"50\" y1=\"185\" x2=\"293.0\" y2=\"185.0\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"300,185 293,188.8 293,181.2\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"50\" y1=\"185\" x2=\"50.0\" y2=\"32.0\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"50,25 53.9,32 46.1,32\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"100\" y1=\"185\" x2=\"100\" y2=\"189\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"100\" y=\"201\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">1</text><line x1=\"150\" y1=\"185\" x2=\"150\" y2=\"189\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"150\" y=\"201\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">2</text><line x1=\"200\" y1=\"185\" x2=\"200\" y2=\"189\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"200\" y=\"201\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">3</text><line x1=\"250\" y1=\"185\" x2=\"250\" y2=\"189\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"250\" y=\"201\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">4</text><line x1=\"46\" y1=\"155\" x2=\"50\" y2=\"155\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"43\" y=\"159\" font-size=\"11\" text-anchor=\"end\" font-weight=\"500\" fill=\"#1f2937\">2</text><line x1=\"46\" y1=\"125\" x2=\"50\" y2=\"125\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"43\" y=\"129\" font-size=\"11\" text-anchor=\"end\" font-weight=\"500\" fill=\"#1f2937\">4</text><line x1=\"46\" y1=\"95\" x2=\"50\" y2=\"95\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"43\" y=\"99\" font-size=\"11\" text-anchor=\"end\" font-weight=\"500\" fill=\"#1f2937\">6</text><line x1=\"46\" y1=\"65\" x2=\"50\" y2=\"65\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"43\" y=\"69\" font-size=\"11\" text-anchor=\"end\" font-weight=\"500\" fill=\"#1f2937\">8</text><text x=\"300\" y=\"215\" font-size=\"12\" text-anchor=\"end\" font-weight=\"600\" fill=\"#1f2937\">time (s)</text><text x=\"44\" y=\"19\" font-size=\"12\" text-anchor=\"start\" font-weight=\"600\" fill=\"#1f2937\">velocity (m/s)</text><line x1=\"50\" y1=\"185\" x2=\"250\" y2=\"65\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><line x1=\"250\" y1=\"65\" x2=\"250\" y2=\"185\" stroke=\"#94a3b8\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\" stroke-linecap=\"round\"/></svg>", "alt": "A velocity–time graph. The velocity rises in a straight line from 0 at time 0 to 8 m/s at 4 s. The triangle under the line from 0 to 4 s is shaded."}
  },
  {
    id: "g9-sci-motion-a-q12",
    prompt: "Which is a vector quantity?",
    options: [
      { id: "a", text: "speed" },
      { id: "b", text: "distance" },
      { id: "c", text: "time" },
      { id: "d", text: "displacement" }
    ],
    answerId: "d",
    explanation: "Displacement has magnitude and direction.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-a-q13",
    prompt: "The arrows show the velocity of a toy car at four points as it goes round a circular track. Which statement is correct?",
    options: [
      { id: "a", text: "Its speed is constant but its velocity changes" },
      { id: "b", text: "Its velocity is constant" },
      { id: "c", text: "Its speed is zero" },
      { id: "d", text: "It has no acceleration" }
    ],
    answerId: "a",
    explanation: "Every arrow is the same length, 4 m/s, so the speed stays the same, but the arrows point in different directions, so the velocity keeps changing; the car is therefore accelerating. A constant velocity would need the arrows to point the same way as well.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A circular track seen from above. At the top, right, bottom and left of the circle, arrows of equal length labelled 4 m/s point along the track, each in a different direction.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><circle cx=\"160\" cy=\"110\" r=\"70\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"6\"/><line x1=\"160\" y1=\"40\" x2=\"113.0\" y2=\"40.0\" stroke=\"#2563eb\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><polygon points=\"105,40 113,35.6 113,44.4\" fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"230\" y1=\"110\" x2=\"230.0\" y2=\"63.0\" stroke=\"#2563eb\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><polygon points=\"230,55 234.4,63 225.6,63\" fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"160\" y1=\"180\" x2=\"207.0\" y2=\"180.0\" stroke=\"#2563eb\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><polygon points=\"215,180 207,184.4 207,175.6\" fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"90\" y1=\"110\" x2=\"90.0\" y2=\"157.0\" stroke=\"#2563eb\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><polygon points=\"90,165 85.6,157 94.4,157\" fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1\" stroke-linejoin=\"round\"/><circle cx=\"160\" cy=\"40\" r=\"5\" fill=\"#1f2937\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"230\" cy=\"110\" r=\"5\" fill=\"#1f2937\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"160\" cy=\"180\" r=\"5\" fill=\"#1f2937\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"90\" cy=\"110\" r=\"5\" fill=\"#1f2937\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"132\" y=\"30\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">4 m/s</text><text x=\"238\" y=\"84\" font-size=\"12\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">4 m/s</text><text x=\"188\" y=\"202\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">4 m/s</text><text x=\"82\" y=\"140\" font-size=\"12\" text-anchor=\"end\" font-weight=\"700\" fill=\"#1f2937\">4 m/s</text></svg>", "alt": "A circular track seen from above. At the top, right, bottom and left of the circle, arrows of equal length labelled 4 m/s point along the track, each in a different direction."}
  },
  {
    id: "g9-sci-motion-a-q14",
    prompt: "Equation for velocity under constant acceleration: v = …",
    options: [
      { id: "a", text: "u − a/t" },
      { id: "b", text: "u + at" },
      { id: "c", text: "ut + a" },
      { id: "d", text: "a/u + t" }
    ],
    answerId: "b",
    explanation: "First equation of motion: v = u + at.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-a-q15",
    prompt: "s = ut + ½at² assumes…",
    options: [
      { id: "a", text: "variable acceleration randomly" },
      { id: "b", text: "zero mass" },
      { id: "c", text: "constant acceleration (and straight-line motion as used in class)" },
      { id: "d", text: "circular path only" }
    ],
    answerId: "c",
    explanation: "Standard equations assume constant acceleration.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-a-q16",
    prompt: "A body starts from rest. Its initial velocity u is…",
    options: [
      { id: "a", text: "maximum" },
      { id: "b", text: "equal to g always" },
      { id: "c", text: "infinite" },
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
      { id: "b", text: "increases" },
      { id: "c", text: "stays meaningless" },
      { id: "d", text: "becomes mass" }
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
      { id: "a", text: "velocity–time always curved" },
      { id: "b", text: "acceleration–time always rising" },
      { id: "c", text: "distance–time" },
      { id: "d", text: "force–time only" }
    ],
    answerId: "c",
    explanation: "Constant speed ⇒ linear distance–time through proportional rise.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-a-q20",
    prompt: "Displacement’s SI unit is…",
    options: [
      { id: "a", text: "second" },
      { id: "b", text: "m/s" },
      { id: "c", text: "kg" },
      { id: "d", text: "metre" }
    ],
    answerId: "d",
    explanation: "Displacement is a length → metre.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-a-q21",
    prompt: "A particle moves along the two arrows shown, from start to finish. What is the size of its displacement?",
    options: [
      { id: "a", text: "5 m" },
      { id: "b", text: "7 m" },
      { id: "c", text: "1 m" },
      { id: "d", text: "12 m" }
    ],
    answerId: "a",
    explanation: "Displacement is the straight dashed line from start to finish. The two moves are at right angles, so its size is √(3² + 4²) = √25 = 5 m. 7 m is the total distance moved along the two arrows, not the displacement.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A particle moves 3 m east along a first arrow, then 4 m north along a second arrow. A dashed line joins the start directly to the finish. A small compass shows north and east.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><line x1=\"60\" y1=\"180\" x2=\"172.0\" y2=\"180.0\" stroke=\"#2563eb\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"180,180 172,184.4 172,175.6\" fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"180\" y1=\"180\" x2=\"180.0\" y2=\"28.0\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-linecap=\"round\"/><polygon points=\"180,20 184.4,28 175.6,28\" fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"60\" y1=\"180\" x2=\"180\" y2=\"20\" stroke=\"#1f2937\" stroke-width=\"1.8\" stroke-dasharray=\"6 4\" stroke-linecap=\"round\"/><rect x=\"168\" y=\"168\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"#1f2937\" stroke-width=\"1\"/><circle cx=\"60\" cy=\"180\" r=\"5\" fill=\"#1f2937\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"60\" y=\"205\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">start</text><text x=\"205\" y=\"24\" font-size=\"12\" text-anchor=\"start\" font-weight=\"600\" fill=\"#1f2937\">finish</text><text x=\"120\" y=\"200\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#2563eb\">3 m</text><text x=\"190\" y=\"105\" font-size=\"14\" text-anchor=\"start\" font-weight=\"700\" fill=\"#dc2626\">4 m</text><line x1=\"275\" y1=\"80\" x2=\"275.0\" y2=\"51.0\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"275,45 278.3,51 271.7,51\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"275\" y1=\"80\" x2=\"299.0\" y2=\"80.0\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"305,80 299,83.3 299,76.7\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><text x=\"275\" y=\"38\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">N</text><text x=\"312\" y=\"84\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">E</text></svg>", "alt": "A particle moves 3 m east along a first arrow, then 4 m north along a second arrow. A dashed line joins the start directly to the finish. A small compass shows north and east."}
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
    prompt: "What is the acceleration of the body whose velocity–time graph is shown?",
    options: [
      { id: "a", text: "A constant positive value" },
      { id: "b", text: "Increasing" },
      { id: "c", text: "Zero" },
      { id: "d", text: "12 m/s²" }
    ],
    answerId: "c",
    explanation: "The line stays flat at 12 m/s, so the velocity does not change as time passes and the acceleration is zero. 12 m/s² mixes up the velocity with the acceleration: 12 m/s is how fast the body moves, not how fast its velocity changes.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A velocity–time graph with a horizontal straight line at 12 m/s from time 0 to 10 s.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><line x1=\"50\" y1=\"185\" x2=\"293.0\" y2=\"185.0\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"300,185 293,188.8 293,181.2\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"50\" y1=\"185\" x2=\"50.0\" y2=\"32.0\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"50,25 53.9,32 46.1,32\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"100\" y1=\"185\" x2=\"100\" y2=\"189\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"100\" y=\"201\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">2</text><line x1=\"150\" y1=\"185\" x2=\"150\" y2=\"189\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"150\" y=\"201\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">4</text><line x1=\"200\" y1=\"185\" x2=\"200\" y2=\"189\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"200\" y=\"201\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">6</text><line x1=\"250\" y1=\"185\" x2=\"250\" y2=\"189\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"250\" y=\"201\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">8</text><line x1=\"300\" y1=\"185\" x2=\"300\" y2=\"189\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"300\" y=\"201\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">10</text><line x1=\"46\" y1=\"145\" x2=\"50\" y2=\"145\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"43\" y=\"149\" font-size=\"11\" text-anchor=\"end\" font-weight=\"500\" fill=\"#1f2937\">4</text><line x1=\"46\" y1=\"105\" x2=\"50\" y2=\"105\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"43\" y=\"109\" font-size=\"11\" text-anchor=\"end\" font-weight=\"500\" fill=\"#1f2937\">8</text><line x1=\"46\" y1=\"65\" x2=\"50\" y2=\"65\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"43\" y=\"69\" font-size=\"11\" text-anchor=\"end\" font-weight=\"500\" fill=\"#1f2937\">12</text><text x=\"300\" y=\"215\" font-size=\"12\" text-anchor=\"end\" font-weight=\"600\" fill=\"#1f2937\">time (s)</text><text x=\"44\" y=\"19\" font-size=\"12\" text-anchor=\"start\" font-weight=\"600\" fill=\"#1f2937\">velocity (m/s)</text><line x1=\"50\" y1=\"65\" x2=\"300\" y2=\"65\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-linecap=\"round\"/></svg>", "alt": "A velocity–time graph with a horizontal straight line at 12 m/s from time 0 to 10 s."}
  },
  {
    id: "g9-sci-motion-a-q24",
    prompt: "Free fall near Earth (ignoring air) has acceleration approximately…",
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "9.8 m/s upward always" },
      { id: "c", text: "98 m/s²" },
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
      { id: "a", text: "displacement" },
      { id: "b", text: "distance" },
      { id: "c", text: "speed" },
      { id: "d", text: "time interval" }
    ],
    answerId: "a",
    explanation: "Displacement can be negative depending on chosen positive direction.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-b-q02",
    prompt: "A bus travels 60 km in 2 hours. Average speed is…",
    options: [
      { id: "a", text: "120 km/h" },
      { id: "b", text: "30 km/h" },
      { id: "c", text: "60 km/h" },
      { id: "d", text: "15 km/h" }
    ],
    answerId: "b",
    explanation: "60/2 = 30 km/h.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-b-q03",
    prompt: "If displacement is 40 m and time is 8 s, average velocity magnitude is…",
    options: [
      { id: "a", text: "32 m/s" },
      { id: "b", text: "48 m/s" },
      { id: "c", text: "5 m/s" },
      { id: "d", text: "0.2 m/s" }
    ],
    answerId: "c",
    explanation: "40/8 = 5 m/s.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-b-q04",
    prompt: "Acceleration is zero when…",
    options: [
      { id: "a", text: "velocity changes" },
      { id: "b", text: "force is infinite" },
      { id: "c", text: "distance is maximum" },
      { id: "d", text: "velocity is constant" }
    ],
    answerId: "d",
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
    prompt: "What is the body doing during part PQ of the distance–time graph shown?",
    options: [
      { id: "a", text: "Speeding up" },
      { id: "b", text: "At rest" },
      { id: "c", text: "Moving at a steady speed" },
      { id: "d", text: "Slowing down" }
    ],
    answerId: "b",
    explanation: "Between P and Q the line is flat: time passes but the distance does not change, so the body is at rest. A steady speed would show as a straight sloping line, like parts OP and QR.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A distance–time graph. A straight line rises from O to P, stays flat from P to Q, then rises again in a straight line from Q to R.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><line x1=\"50\" y1=\"185\" x2=\"293.0\" y2=\"185.0\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"300,185 293,188.8 293,181.2\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"50\" y1=\"185\" x2=\"50.0\" y2=\"32.0\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"50,25 53.9,32 46.1,32\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><text x=\"300\" y=\"215\" font-size=\"12\" text-anchor=\"end\" font-weight=\"600\" fill=\"#1f2937\">time</text><text x=\"44\" y=\"19\" font-size=\"12\" text-anchor=\"start\" font-weight=\"600\" fill=\"#1f2937\">distance</text><polyline points=\"50,185 120,120 200,120 280,45\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"50\" cy=\"185\" r=\"3.5\" fill=\"#dc2626\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"40\" y=\"201\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">O</text><circle cx=\"120\" cy=\"120\" r=\"3.5\" fill=\"#dc2626\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"116\" y=\"110\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">P</text><circle cx=\"200\" cy=\"120\" r=\"3.5\" fill=\"#dc2626\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"204\" y=\"110\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">Q</text><circle cx=\"280\" cy=\"45\" r=\"3.5\" fill=\"#dc2626\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"290\" y=\"45\" font-size=\"14\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">R</text></svg>", "alt": "A distance–time graph. A straight line rises from O to P, stays flat from P to Q, then rises again in a straight line from Q to R."}
  },
  {
    id: "g9-sci-motion-b-q07",
    prompt: "If a v–t graph is a straight line sloping upward, acceleration is…",
    options: [
      { id: "a", text: "zero" },
      { id: "b", text: "infinite" },
      { id: "c", text: "constant and positive" },
      { id: "d", text: "negative always" }
    ],
    answerId: "c",
    explanation: "Constant positive slope → constant positive a.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-b-q08",
    prompt: "Scalar quantities have…",
    options: [
      { id: "a", text: "magnitude and direction" },
      { id: "b", text: "only direction" },
      { id: "c", text: "neither" },
      { id: "d", text: "magnitude only" }
    ],
    answerId: "d",
    explanation: "Scalars: magnitude only.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-b-q09",
    prompt: "Use the velocity–time graph of the car to find its acceleration.",
    options: [
      { id: "a", text: "2 m/s²" },
      { id: "b", text: "6 m/s²" },
      { id: "c", text: "50 m/s²" },
      { id: "d", text: "0.5 m/s²" }
    ],
    answerId: "a",
    explanation: "Acceleration = change in velocity ÷ time = (20 − 10) m/s ÷ 5 s = 2 m/s². 0.5 m/s² comes from dividing the wrong way round: time divided by the change in velocity.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A velocity–time graph for a car. The velocity rises in a straight line from 10 m/s at time 0 to 20 m/s at 5 s.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><line x1=\"50\" y1=\"185\" x2=\"293.0\" y2=\"185.0\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"300,185 293,188.8 293,181.2\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"50\" y1=\"185\" x2=\"50.0\" y2=\"32.0\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"50,25 53.9,32 46.1,32\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"90\" y1=\"185\" x2=\"90\" y2=\"189\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"90\" y=\"201\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">1</text><line x1=\"130\" y1=\"185\" x2=\"130\" y2=\"189\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"130\" y=\"201\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">2</text><line x1=\"170\" y1=\"185\" x2=\"170\" y2=\"189\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"170\" y=\"201\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">3</text><line x1=\"210\" y1=\"185\" x2=\"210\" y2=\"189\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"210\" y=\"201\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">4</text><line x1=\"250\" y1=\"185\" x2=\"250\" y2=\"189\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"250\" y=\"201\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">5</text><line x1=\"46\" y1=\"125\" x2=\"50\" y2=\"125\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"43\" y=\"129\" font-size=\"11\" text-anchor=\"end\" font-weight=\"500\" fill=\"#1f2937\">10</text><line x1=\"46\" y1=\"65\" x2=\"50\" y2=\"65\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"43\" y=\"69\" font-size=\"11\" text-anchor=\"end\" font-weight=\"500\" fill=\"#1f2937\">20</text><text x=\"300\" y=\"215\" font-size=\"12\" text-anchor=\"end\" font-weight=\"600\" fill=\"#1f2937\">time (s)</text><text x=\"44\" y=\"19\" font-size=\"12\" text-anchor=\"start\" font-weight=\"600\" fill=\"#1f2937\">velocity (m/s)</text><line x1=\"50\" y1=\"125\" x2=\"250\" y2=\"65\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"50\" cy=\"125\" r=\"4\" fill=\"#dc2626\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"250\" cy=\"65\" r=\"4\" fill=\"#dc2626\" stroke=\"none\" stroke-width=\"1.5\"/><line x1=\"250\" y1=\"65\" x2=\"250\" y2=\"185\" stroke=\"#94a3b8\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\" stroke-linecap=\"round\"/><line x1=\"50\" y1=\"65\" x2=\"250\" y2=\"65\" stroke=\"#94a3b8\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\" stroke-linecap=\"round\"/></svg>", "alt": "A velocity–time graph for a car. The velocity rises in a straight line from 10 m/s at time 0 to 20 m/s at 5 s."}
  },
  {
    id: "g9-sci-motion-b-q10",
    prompt: "Distance is never…",
    options: [
      { id: "a", text: "positive" },
      { id: "b", text: "negative" },
      { id: "c", text: "zero" },
      { id: "d", text: "greater than displacement magnitude in a detour" }
    ],
    answerId: "b",
    explanation: "Distance cannot be negative.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-b-q11",
    prompt: "For a freely falling object from rest, after time t, speed is about…",
    options: [
      { id: "a", text: "g/t" },
      { id: "b", text: "g + t" },
      { id: "c", text: "gt" },
      { id: "d", text: "t/g" }
    ],
    answerId: "c",
    explanation: "v = u + gt with u = 0 → v = gt.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-b-q12",
    prompt: "The dots show a cyclist's position every second along a straight road. What kind of motion is this?",
    options: [
      { id: "a", text: "Ever-changing speed" },
      { id: "b", text: "At rest" },
      { id: "c", text: "Circular motion with changing speed" },
      { id: "d", text: "Uniform motion: equal distances in equal times" }
    ],
    answerId: "d",
    explanation: "Each 1 s gap between neighbouring dots covers the same 10 m, so the cyclist covers equal distances in equal intervals of time along a straight line: uniform motion. Ever-changing speed would show the gaps between the dots growing or shrinking.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A straight road with six dots marking where the cyclist is at 0, 1, 2, 3, 4 and 5 seconds. Every gap between neighbouring dots is 10 m.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><line x1=\"20\" y1=\"120\" x2=\"300\" y2=\"120\" stroke=\"#94a3b8\" stroke-width=\"10\" stroke-linecap=\"round\"/><circle cx=\"40\" cy=\"120\" r=\"7\" fill=\"#dc2626\" stroke=\"#7f1d1d\" stroke-width=\"1.5\"/><text x=\"40\" y=\"150\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">0 s</text><circle cx=\"88\" cy=\"120\" r=\"7\" fill=\"#dc2626\" stroke=\"#7f1d1d\" stroke-width=\"1.5\"/><text x=\"88\" y=\"150\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">1 s</text><circle cx=\"136\" cy=\"120\" r=\"7\" fill=\"#dc2626\" stroke=\"#7f1d1d\" stroke-width=\"1.5\"/><text x=\"136\" y=\"150\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">2 s</text><circle cx=\"184\" cy=\"120\" r=\"7\" fill=\"#dc2626\" stroke=\"#7f1d1d\" stroke-width=\"1.5\"/><text x=\"184\" y=\"150\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">3 s</text><circle cx=\"232\" cy=\"120\" r=\"7\" fill=\"#dc2626\" stroke=\"#7f1d1d\" stroke-width=\"1.5\"/><text x=\"232\" y=\"150\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">4 s</text><circle cx=\"280\" cy=\"120\" r=\"7\" fill=\"#dc2626\" stroke=\"#7f1d1d\" stroke-width=\"1.5\"/><text x=\"280\" y=\"150\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">5 s</text><line x1=\"64.0\" y1=\"95.0\" x2=\"49.0\" y2=\"95.0\" stroke=\"#1f2937\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><polygon points=\"44,95 49,92.2 49,97.8\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"64.0\" y1=\"95.0\" x2=\"79.0\" y2=\"95.0\" stroke=\"#1f2937\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><polygon points=\"84,95 79,97.8 79,92.2\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><text x=\"64\" y=\"88\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">10 m</text><line x1=\"112.0\" y1=\"95.0\" x2=\"97.0\" y2=\"95.0\" stroke=\"#1f2937\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><polygon points=\"92,95 97,92.2 97,97.8\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"112.0\" y1=\"95.0\" x2=\"127.0\" y2=\"95.0\" stroke=\"#1f2937\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><polygon points=\"132,95 127,97.8 127,92.2\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><text x=\"112\" y=\"88\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">10 m</text><line x1=\"160.0\" y1=\"95.0\" x2=\"145.0\" y2=\"95.0\" stroke=\"#1f2937\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><polygon points=\"140,95 145,92.2 145,97.8\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"160.0\" y1=\"95.0\" x2=\"175.0\" y2=\"95.0\" stroke=\"#1f2937\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><polygon points=\"180,95 175,97.8 175,92.2\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><text x=\"160\" y=\"88\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">10 m</text><line x1=\"208.0\" y1=\"95.0\" x2=\"193.0\" y2=\"95.0\" stroke=\"#1f2937\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><polygon points=\"188,95 193,92.2 193,97.8\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"208.0\" y1=\"95.0\" x2=\"223.0\" y2=\"95.0\" stroke=\"#1f2937\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><polygon points=\"228,95 223,97.8 223,92.2\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><text x=\"208\" y=\"88\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">10 m</text><line x1=\"256.0\" y1=\"95.0\" x2=\"241.0\" y2=\"95.0\" stroke=\"#1f2937\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><polygon points=\"236,95 241,92.2 241,97.8\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"256.0\" y1=\"95.0\" x2=\"271.0\" y2=\"95.0\" stroke=\"#1f2937\" stroke-width=\"1.3\" stroke-linecap=\"round\"/><polygon points=\"276,95 271,97.8 271,92.2\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><text x=\"256\" y=\"88\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#1f2937\">10 m</text><text x=\"160\" y=\"190\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">position every 1 s</text></svg>", "alt": "A straight road with six dots marking where the cyclist is at 0, 1, 2, 3, 4 and 5 seconds. Every gap between neighbouring dots is 10 m."}
  },
  {
    id: "g9-sci-motion-b-q13",
    prompt: "Non-uniform motion means…",
    options: [
      { id: "a", text: "changing speed (unequal distances in equal times)" },
      { id: "b", text: "constant speed always" },
      { id: "c", text: "zero displacement always" },
      { id: "d", text: "motion without path" }
    ],
    answerId: "a",
    explanation: "Speed changes in non-uniform motion.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-b-q14",
    prompt: "A trolley starts from rest and speeds up steadily, as the velocity–time graph shows. How far does it travel in the first 3 s?",
    options: [
      { id: "a", text: "6 m" },
      { id: "b", text: "9 m" },
      { id: "c", text: "18 m" },
      { id: "d", text: "3 m" }
    ],
    answerId: "b",
    explanation: "The distance is the area under the graph: a triangle of ½ × 3 s × 6 m/s = 9 m. 18 m forgets the half: it is the area of the whole rectangle, as if the trolley had moved at 6 m/s the whole time.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A velocity–time graph. The velocity rises in a straight line from 0 at time 0 to 6 m/s at 3 s.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><line x1=\"50\" y1=\"185\" x2=\"293.0\" y2=\"185.0\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"300,185 293,188.8 293,181.2\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"50\" y1=\"185\" x2=\"50.0\" y2=\"32.0\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"50,25 53.9,32 46.1,32\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"110\" y1=\"185\" x2=\"110\" y2=\"189\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"110\" y=\"201\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">1</text><line x1=\"170\" y1=\"185\" x2=\"170\" y2=\"189\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"170\" y=\"201\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">2</text><line x1=\"230\" y1=\"185\" x2=\"230\" y2=\"189\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"230\" y=\"201\" font-size=\"11\" text-anchor=\"middle\" font-weight=\"500\" fill=\"#1f2937\">3</text><line x1=\"46\" y1=\"145\" x2=\"50\" y2=\"145\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"43\" y=\"149\" font-size=\"11\" text-anchor=\"end\" font-weight=\"500\" fill=\"#1f2937\">2</text><line x1=\"46\" y1=\"105\" x2=\"50\" y2=\"105\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"43\" y=\"109\" font-size=\"11\" text-anchor=\"end\" font-weight=\"500\" fill=\"#1f2937\">4</text><line x1=\"46\" y1=\"65\" x2=\"50\" y2=\"65\" stroke=\"#1f2937\" stroke-width=\"1.2\" stroke-linecap=\"round\"/><text x=\"43\" y=\"69\" font-size=\"11\" text-anchor=\"end\" font-weight=\"500\" fill=\"#1f2937\">6</text><text x=\"300\" y=\"215\" font-size=\"12\" text-anchor=\"end\" font-weight=\"600\" fill=\"#1f2937\">time (s)</text><text x=\"44\" y=\"19\" font-size=\"12\" text-anchor=\"start\" font-weight=\"600\" fill=\"#1f2937\">velocity (m/s)</text><line x1=\"50\" y1=\"185\" x2=\"230\" y2=\"65\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"230\" cy=\"65\" r=\"4\" fill=\"#dc2626\" stroke=\"none\" stroke-width=\"1.5\"/><line x1=\"230\" y1=\"65\" x2=\"230\" y2=\"185\" stroke=\"#94a3b8\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\" stroke-linecap=\"round\"/></svg>", "alt": "A velocity–time graph. The velocity rises in a straight line from 0 at time 0 to 6 m/s at 3 s."}
  },
  {
    id: "g9-sci-motion-b-q15",
    prompt: "A body moving east with speed 5 m/s has velocity…",
    options: [
      { id: "a", text: "5 m/s" },
      { id: "b", text: "5 m east" },
      { id: "c", text: "5 m/s east" },
      { id: "d", text: "25 m/s²" }
    ],
    answerId: "c",
    explanation: "Velocity needs the direction stated.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-b-q16",
    prompt: "Retardation means…",
    options: [
      { id: "a", text: "positive acceleration in direction of velocity" },
      { id: "b", text: "zero velocity only" },
      { id: "c", text: "constant speed forever" },
      { id: "d", text: "acceleration opposite to velocity (deceleration)" }
    ],
    answerId: "d",
    explanation: "Retardation/deceleration opposes velocity.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-b-q17",
    prompt: "The odometer of a car measures…",
    options: [
      { id: "a", text: "distance travelled" },
      { id: "b", text: "instantaneous velocity vector" },
      { id: "c", text: "acceleration" },
      { id: "d", text: "displacement only" }
    ],
    answerId: "a",
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
      { id: "b", text: "zero" },
      { id: "c", text: "increasing" },
      { id: "d", text: "negative" }
    ],
    answerId: "c",
    explanation: "Increasing slope means increasing speed.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-b-q20",
    prompt: "A walker goes from P to Q along the curved path shown. How does the size of the displacement compare with the distance walked?",
    options: [
      { id: "a", text: "Greater than the distance" },
      { id: "b", text: "Unrelated to the distance" },
      { id: "c", text: "Exactly twice the distance" },
      { id: "d", text: "Less than or equal to the distance" }
    ],
    answerId: "d",
    explanation: "Displacement is the straight dashed line from P to Q, the shortest possible route, so it can never be longer than the path actually walked; it is equal only for a straight path in one direction. Greater than the distance is impossible, because no route between two points is shorter than the straight line.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A winding curved path from point P on the left to point Q on the right, with a dashed straight line joining P directly to Q.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><path d=\"M40,150 C70,30 130,30 150,110 C170,190 240,200 280,80\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-linejoin=\"round\"/><line x1=\"40\" y1=\"150\" x2=\"280\" y2=\"80\" stroke=\"#1f2937\" stroke-width=\"1.8\" stroke-dasharray=\"6 4\" stroke-linecap=\"round\"/><circle cx=\"40\" cy=\"150\" r=\"6\" fill=\"#1f2937\" stroke=\"none\" stroke-width=\"1.5\"/><circle cx=\"280\" cy=\"80\" r=\"6\" fill=\"#1f2937\" stroke=\"none\" stroke-width=\"1.5\"/><text x=\"30\" y=\"175\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">P</text><text x=\"292\" y=\"72\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"700\" fill=\"#1f2937\">Q</text><text x=\"85\" y=\"40\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"600\" fill=\"#dc2626\">path walked</text></svg>", "alt": "A winding curved path from point P on the left to point Q on the right, with a dashed straight line joining P directly to Q."}
  },
  {
    id: "g9-sci-motion-b-q21",
    prompt: "For constant speed on a straight line, acceleration is…",
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "g" },
      { id: "c", text: "v/t always non-zero" },
      { id: "d", text: "infinite" }
    ],
    answerId: "a",
    explanation: "No velocity change → a = 0.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-b-q22",
    prompt: "Which equation does not require time explicitly?",
    options: [
      { id: "a", text: "v = u + at" },
      { id: "b", text: "v² = u² + 2as" },
      { id: "c", text: "s = ut + ½at²" },
      { id: "d", text: "all require t" }
    ],
    answerId: "b",
    explanation: "v² = u² + 2as has no t.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
  },
  {
    id: "g9-sci-motion-b-q23",
    prompt: "A ball is thrown straight up and caught again at the same point, as shown. What is its displacement for the whole flight?",
    options: [
      { id: "a", text: "5 m upward" },
      { id: "b", text: "10 m" },
      { id: "c", text: "Zero" },
      { id: "d", text: "Equal to the distance travelled" }
    ],
    answerId: "c",
    explanation: "The ball finishes where it started, in the hand, so its change in position, the displacement, is zero. 10 m is the distance travelled, 5 m up plus 5 m down, not the displacement.",
    hints: ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
    figure: {"type": "svg", "markup": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 220\" role=\"img\" aria-label=\"A hand throws a ball straight up. An arrow shows it rising 5 m to its highest point, and a second arrow beside it shows it falling 5 m back down to the same hand.\" font-family=\"system-ui, sans-serif\"><rect x=\"0\" y=\"0\" width=\"320\" height=\"220\" fill=\"#ffffff\"/><ellipse cx=\"160\" cy=\"190\" rx=\"26\" ry=\"10\" fill=\"#fde68a\" stroke=\"#92400e\" stroke-width=\"1.5\"/><circle cx=\"160\" cy=\"172\" r=\"9\" fill=\"#f97316\" stroke=\"#9a3412\" stroke-width=\"1.5\"/><circle cx=\"160\" cy=\"30\" r=\"9\" fill=\"#f97316\" stroke=\"#9a3412\" stroke-width=\"1.5\" opacity=\"0.5\"/><line x1=\"145\" y1=\"165\" x2=\"145.0\" y2=\"53.0\" stroke=\"#2563eb\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><polygon points=\"145,45 149.4,53 140.6,53\" fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"175\" y1=\"45\" x2=\"175.0\" y2=\"157.0\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><polygon points=\"175,165 170.6,157 179.4,157\" fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1\" stroke-linejoin=\"round\"/><text x=\"138\" y=\"105\" font-size=\"12\" text-anchor=\"end\" font-weight=\"600\" fill=\"#1f2937\">up</text><text x=\"182\" y=\"105\" font-size=\"12\" text-anchor=\"start\" font-weight=\"600\" fill=\"#1f2937\">down</text><line x1=\"250.0\" y1=\"101.0\" x2=\"250.0\" y2=\"37.0\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"250,30 253.8,37 246.2,37\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><line x1=\"250.0\" y1=\"101.0\" x2=\"250.0\" y2=\"165.0\" stroke=\"#1f2937\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><polygon points=\"250,172 246.2,165 253.8,165\" fill=\"#1f2937\" stroke=\"#1f2937\" stroke-width=\"1\" stroke-linejoin=\"round\"/><text x=\"258\" y=\"105\" font-size=\"14\" text-anchor=\"start\" font-weight=\"700\" fill=\"#1f2937\">5 m</text><line x1=\"170\" y1=\"30\" x2=\"250\" y2=\"30\" stroke=\"#94a3b8\" stroke-width=\"1\" stroke-dasharray=\"3 3\" stroke-linecap=\"round\"/><line x1=\"170\" y1=\"172\" x2=\"250\" y2=\"172\" stroke=\"#94a3b8\" stroke-width=\"1\" stroke-dasharray=\"3 3\" stroke-linecap=\"round\"/></svg>", "alt": "A hand throws a ball straight up. An arrow shows it rising 5 m to its highest point, and a second arrow beside it shows it falling 5 m back down to the same hand."}
  },
  {
    id: "g9-sci-motion-b-q24",
    prompt: "SI unit of speed is…",
    options: [
      { id: "a", text: "m/s²" },
      { id: "b", text: "N" },
      { id: "c", text: "kg/m" },
      { id: "d", text: "m/s" }
    ],
    answerId: "d",
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
