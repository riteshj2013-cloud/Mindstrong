/**
 * Grade 4 Maths — item-specific hint fixes (fix layer).
 * Source: app repo commit 4291140 (served hints: lib/prep/content + lib/prep/hints overlays). Written 2026-10-19.
 * Items changed: 34 | hints: 66
 * By category (primary): answer-revealing fixed 34
 * Each hint nudges the method using the item's own numbers/objects; none contains the answer,
 * an option letter or "eliminate options". A later hint is a stronger nudge (a first step worked).
 * Merge: these WIN over G4_MATHS_HINTS and over authored question.hints (see applyHints in ../index.ts).
 */
import type { HintOverlay } from "../types";

export const G4_MATHS_HINT_FIXES: Record<string, HintOverlay> = {
  // g4-maths g4-multiply-divide — Multiplication & Division
  "g4-maths-muldiv-a-q04": ["Picture having no bags at all, each meant to hold 345 marbles. How many marbles do you have?"],
  "g4-maths-muldiv-b-q04": ["Picture 999 empty boxes with nothing inside. How many things are there in all?"],
  // g4-maths g4-measurement — Measurement
  "g4-maths-measurement-a-q11": ["To find the longest length, change every length to centimetres first.", "A metre is 100 cm and 10 mm make a centimetre. Write each length in cm, then compare."],
  "g4-maths-measurement-a-q16": ["Every 1,000 g make a kilogram. How many thousands fit in 4,500 g?", "Take the whole thousands out of 4,500 g as kg; whatever is left stays as grams."],
  "g4-maths-measurement-b-q04": ["A litre is 1,000 ml. Write 750 ml as a fraction of 1,000 ml.", "Divide both 750 and 1,000 by 250 to simplify the fraction."],
  "g4-maths-measurement-b-q05": ["To see which is heavier, write every mass in grams first.", "A kilogram is 1,000 g. Which is heavier: that, or 800 g, 900 g and 950 g?"],
  "g4-maths-measurement-b-q07": ["In Indian jewellery shops, gold is weighed in an old unit, not in metres or litres.", "Gold jewellery is often sold by a traditional mass unit of about 11.66 grams."],
  "g4-maths-measurement-b-q08": ["Every 1,000 ml make a litre. How many thousands fit in 3,200 ml?", "Take the whole thousands out of 3,200 ml as litres; the millilitres left over stay as ml."],
  "g4-maths-measurement-b-q11": ["Change the can to millilitres: a litre is 1,000 ml.", "Work out 8 × 200 ml for the cups, then compare it with the can in ml."],
  "g4-maths-measurement-b-q12": ["Every 100 cm make a metre. How many hundreds fit in 120 cm?", "Take a whole 100 cm out of 120 cm as metres; the centimetres left over stay as cm."],
  "g4-maths-measurement-b-q16": ["Take away the 1 kg first, then take away the 250 g.", "After 5 kg − 1 kg, break one kilogram into 1,000 g and subtract 250 g from it."],
  "g4-maths-measurement-b-q19": ["How many centimetres make a metre? Check each pair against that rule.", "Look at a metre ruler: how many centimetre marks run along its length?"],
  "g4-maths-measurement-b-q21": ["Each 1 cm on the map stands for 1 km on the ground.", "Multiply the road's map length in cm by the scale, and keep the unit as km, not m."],
  "g4-maths-measurement-b-q23": ["Add the metres together and the centimetres together.", "60 cm + 55 cm is more than 100 cm. Turn 100 cm into a metre and add it to the metres."],
  // g4-maths g4-geometry — Geometry
  "g4-maths-geometry-a-q01": ["Draw a closed shape with 3 straight sides and 3 corners.", "Shape names often count sides or angles. Which name counts 3 angles?"],
  "g4-maths-geometry-a-q03": ["Picture a chapati cutter: every point on its edge is the same distance from the centre.", "Is a square's corner the same distance from the centre as the middle of its side?"],
  "g4-maths-geometry-a-q04": ["Think of a rectangle, like a door. Count its sides.", "On a rectangle, compare the top edge with the bottom, and the left side with the right."],
  "g4-maths-geometry-a-q06": ["Going on forever in both directions means there are no end points at all.", "A segment stops at two end points; a ray stops at one. Which figure goes on forever in both directions?"],
  "g4-maths-geometry-a-q09": ["A right angle is a square corner, like the corner of a notebook.", "A full turn is 360°. A right angle is one quarter of a full turn."],
  "g4-maths-geometry-a-q17": ["A pentagon has 5 vertices. A diagonal cannot go to the vertex itself or to its neighbours.", "Draw a pentagon, pick one vertex and join it to each vertex not next to it. Count the lines."],
  "g4-maths-geometry-a-q18": ["A triangle with all sides equal also has all its angles equal, each 60°.", "Scalene means no equal sides; isosceles means at least two. Which name means all sides equal?"],
  "g4-maths-geometry-a-q23": ["A hexagon is the shape of a honeycomb cell. Count its sides.", "A pentagon has 5 sides. A hexagon has one more side than a pentagon."],
  "g4-maths-geometry-b-q03": ["Measure the top and bottom of a rectangle, like a book cover.", "Lay the top edge of a rectangle on its bottom edge. Do they match in length?"],
  "g4-maths-geometry-b-q04": ["A straight angle looks like a straight line. A full turn is 360°.", "A straight angle is half of a full turn, so halve 360°."],
  "g4-maths-geometry-b-q10": ["Each corner of a square is a right angle.", "Count the corners of a square; each one is a right angle."],
  "g4-maths-geometry-b-q13": ["A triangle has 3 sides, 3 angles and a closed boundary.", "Check each choice against a triangle's 3 sides and 3 angles. Which one does not fit a triangle?"],
  "g4-maths-geometry-b-q14": ["The joined side is inside the shape, so it is not part of the perimeter.", "The new shape is a rectangle 8 cm by 4 cm. Perimeter = 2 × (length + breadth)."],
  "g4-maths-geometry-b-q15": ["A 90° angle is the square corner of a notebook.", "Acute is less than 90° and obtuse is more than 90°. What is the name for exactly 90°?"],
  "g4-maths-geometry-b-q16": ["Think of a dice. Count its faces, edges and vertices.", "A dice has 6 square faces, all the same size. Which solid is shaped like a dice?"],
  "g4-maths-geometry-b-q20": ["At a right angle, the clock hands make a square corner. Keep the minute hand on 12.", "With the minute hand on 12, where must the hour hand point to be a quarter turn away?"],
  // g4-maths g4-data-handling — Data Handling
  "g4-maths-data-a-q01": ["Count the strokes in one tally gate: the upright lines plus the slash across them.", "A tally gate has 4 upright strokes and 1 slash. Add the strokes."],
  "g4-maths-data-a-q22": ["Think of a marksheet: names go down in rows, subjects go across in columns.", "What do we call data set out in rows and columns, like a train chart or marksheet?"],
  "g4-maths-data-b-q05": ["A display where pictures stand for numbers has a key, like one picture = 5 books.", "Look for the display whose key tells what each picture stands for."],
  "g4-maths-data-b-q08": ["Each step on the bar graph scale is the gap between neighbouring marks.", "Subtract one mark on the scale from the next, for example 6 from 8."],
};
