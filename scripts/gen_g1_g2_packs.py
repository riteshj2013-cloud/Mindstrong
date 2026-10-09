#!/usr/bin/env python3
"""Generate Grade 1 & 2 olympiad-lite packs: sof-source md, content ts, hint overlays."""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from ingest_lib import emit_module, lesson_ts, q_to_ts  # noqa: E402

REPO = Path(__file__).resolve().parent.parent
OUT = REPO / "lib/prep/content"
HINTS = REPO / "lib/prep/hints"
DOCS1 = REPO / "docs/sof-source/grade-1"
DOCS2 = REPO / "docs/sof-source/grade-2"


def q(prompt, opts, ans, expl, h1, h2, figure=None):
    letters = ["a", "b", "c", "d"]
    options = [{"id": letters[i], "text": opts[i]} for i in range(4)]
    obj = {
        "prompt": prompt,
        "options": options,
        "answerId": ans.lower(),
        "explanation": expl,
        "hints": [h1, h2],
    }
    if figure:
        obj["figure"] = figure
    return obj


def stamp(qs, prefix, set_id):
    out = []
    for i, item in enumerate(qs, 1):
        item = dict(item)
        item["id"] = "%s-%s-q%02d" % (prefix, set_id, i)
        out.append(item)
    return out


def md_quiz_science(qs):
    lines = []
    for i, item in enumerate(qs, 1):
        lines.append("**Q%d.**" % i)
        lines.append("")
        lines.append("**Stem:** %s" % item["prompt"])
        lines.append("")
        lines.append("**Options:**")
        for o in item["options"]:
            lines.append("- %s) %s" % (o["id"].upper(), o["text"]))
        lines.append("")
        lines.append("**Answer:** %s" % item["answerId"].upper())
        lines.append("")
        lines.append("**Explanation:** %s" % item["explanation"])
        lines.append("")
    return "\n".join(lines)


def md_quiz_maths(qs):
    lines = []
    for i, item in enumerate(qs, 1):
        lines.append("### Q%d" % i)
        lines.append("- **stem**: %s" % item["prompt"])
        for o in item["options"]:
            lines.append("- %s) %s" % (o["id"].upper(), o["text"]))
        lines.append("- **answer**: %s" % item["answerId"].upper())
        lines.append("- **explanation**: %s" % item["explanation"])
        lines.append("")
    return "\n".join(lines)


def md_quiz_english(qs):
    lines = []
    for i, item in enumerate(qs, 1):
        lines.append("### Q%d" % i)
        lines.append("- stem: %s" % item["prompt"].replace("\n", " "))
        for o in item["options"]:
            lines.append("- %s: %s" % (o["id"].upper(), o["text"]))
        lines.append("- answer: %s" % item["answerId"].upper())
        lines.append("- explanation: %s" % item["explanation"])
        lines.append("")
    return "\n".join(lines)


def write_md(path: Path, title: str, grade: int, subject: str, theme: str, set_a, set_b, kind: str):
    path.parent.mkdir(parents=True, exist_ok=True)
    if kind == "science":
        body_a = md_quiz_science(set_a)
        body_b = md_quiz_science(set_b)
        quiz_a, quiz_b = "## Quiz Set A — 16 MCQs", "## Quiz Set B — 16 MCQs"
    elif kind == "maths":
        body_a = md_quiz_maths(set_a)
        body_b = md_quiz_maths(set_b)
        quiz_a, quiz_b = "## Practice Set A — 16 MCQs", "## Practice Set B — 16 MCQs"
    else:
        body_a = md_quiz_english(set_a)
        body_b = md_quiz_english(set_b)
        quiz_a, quiz_b = "## Set A — 16 MCQs", "## Set B — 16 MCQs"
    text = """# %s

## Meta
- Grade: %d
- Subject: %s
- Theme tags: %s
- Source basis: NCERT Class %d themes (original items only)
- Language: Grade %d (very short sentences)

## Learning objectives
- Age-appropriate olympiad-lite practice for Grade %d.
- Set A and Set B have 16 MCQs each (32 total).

%s

%s

%s

%s
""" % (title, grade, subject, theme, grade, grade, grade, quiz_a, body_a, quiz_b, body_b)
    path.write_text(text, encoding="utf-8")
    print("Wrote", path.relative_to(REPO))


def write_hints(path: Path, export: str, qs_a, qs_b, label: str):
    lines = [
        'import type { HintOverlay } from "./types";',
        "",
        "/** %s item-specific hints (overlay) */" % label,
        "export const %s: Record<string, HintOverlay> = {" % export,
    ]
    for item in qs_a + qs_b:
        h = item["hints"]
        lines.append('  %s: %s,' % (json.dumps(item["id"]), json.dumps(h)))
    lines.append("};")
    lines.append("")
    path.write_text("\n".join(lines), encoding="utf-8")
    print("Wrote", path.relative_to(REPO), "entries=", len(qs_a) + len(qs_b))


def with_boilerplate(qs):
    """Content files use boilerplate; overlays carry real hints."""
    out = []
    for item in qs:
        c = dict(item)
        c["hints"] = ["Think about the lesson key ideas.", "Eliminate options that do not fit."]
        out.append(c)
    return out


# ---------------------------------------------------------------------------
# Question banks — Grade 1
# ---------------------------------------------------------------------------

def g1_maths_numbers():
    a = [
        q("Which number comes just after 5?", ["4", "6", "7", "3"], "b", "One more than 5 is 6.", "Count one step forward from 5.", "5, then 6."),
        q("How many fingers do you have on one hand?", ["4", "5", "6", "10"], "b", "One hand has 5 fingers.", "Look at one hand.", "Count the fingers."),
        q("Which number is bigger: 8 or 3?", ["3", "8", "1", "0"], "b", "8 is more than 3.", "Think which pile is larger.", "8 comes later when you count."),
        q("Count the stars: ★ ★ ★. How many?", ["2", "3", "4", "5"], "b", "There are 3 stars.", "Point and count each star.", "One, two, three."),
        q("Which number comes just before 10?", ["9", "11", "8", "12"], "a", "Just before 10 is 9.", "Count back one from 10.", "10, then back to 9."),
        q("What is the number name for 7?", ["six", "seven", "eight", "five"], "b", "7 is written as seven.", "Say the number out loud.", "Seven sounds like 7."),
        q("Which set shows 4 apples?", ["🍎🍎🍎", "🍎🍎🍎🍎", "🍎🍎", "🍎"], "b", "Four apples means 🍎🍎🍎🍎.", "Count the fruit in each choice.", "Stop at four."),
        q("Fill in: 2, 4, 6, __.", ["5", "7", "8", "10"], "c", "The pattern adds 2 each time. Next is 8.", "See how the numbers grow.", "Add 2 to 6."),
        q("Which number is the smallest?", ["9", "2", "7", "5"], "b", "2 is the smallest of these.", "Find the least.", "2 comes first when you count."),
        q("Riya has 1 ball. Amaira has 1 ball. How many balls in all?", ["1", "2", "3", "0"], "b", "1 + 1 = 2.", "Put the balls together.", "One and one make two."),
        q("Which digit is in 14?", ["1 and 4", "2 and 4", "1 and 5", "4 and 0"], "a", "14 has digits 1 and 4.", "Look at each place.", "Tens digit 1, ones digit 4."),
        q("What comes next: 1, 2, 3, __?", ["5", "4", "0", "6"], "b", "After 3 comes 4.", "Count forward.", "1, 2, 3, 4."),
        q("Kabir counts to 10. Which number did he say last?", ["9", "10", "8", "11"], "b", "Counting to 10 ends on 10.", "Last means the end.", "He stops at ten."),
        q("Which shows more: 5 or 9?", ["5", "9", "same", "0"], "b", "9 is more than 5.", "Compare the two numbers.", "9 is farther on the number line."),
        q("Zero means…", ["nothing", "ten", "one", "many"], "a", "Zero means no things — nothing.", "Empty plate has zero.", "Not one, not many — none."),
        q("Meera sees 6 birds. 1 flies away. How many are left?", ["5", "6", "7", "4"], "a", "6 − 1 = 5.", "Take one away from six.", "Five birds stay."),
    ]
    b = [
        q("Which number comes just after 9?", ["8", "10", "7", "11"], "b", "One more than 9 is 10.", "Count forward from 9.", "9, then 10."),
        q("How many wheels does a bicycle have?", ["1", "2", "3", "4"], "b", "A bicycle has 2 wheels.", "Picture a cycle.", "Two wheels."),
        q("Which number is smaller: 6 or 1?", ["6", "1", "both same", "7"], "b", "1 is smaller than 6.", "Find the lesser number.", "1 comes first."),
        q("Count: ● ● ● ● ●. How many dots?", ["4", "5", "6", "3"], "b", "There are 5 dots.", "Count each dot.", "Five dots."),
        q("What is the number name for 10?", ["nine", "eleven", "ten", "twelve"], "c", "10 is ten.", "Say it aloud.", "Ten."),
        q("Fill in: 5, 6, 7, __.", ["4", "8", "9", "10"], "b", "After 7 comes 8.", "Count one more.", "7 + 1 = 8."),
        q("Which is an even number?", ["3", "5", "4", "7"], "c", "4 is even (2, 4, 6, 8…).", "Even numbers pair up.", "4 makes two pairs."),
        q("Aarav has 3 pencils. He gets 2 more. How many now?", ["4", "5", "3", "6"], "b", "3 + 2 = 5.", "Add the new pencils.", "Three and two make five."),
        q("Which number is between 4 and 6?", ["3", "5", "7", "2"], "b", "5 sits between 4 and 6.", "Count 4, 5, 6.", "The middle one is 5."),
        q("What comes just before 2?", ["1", "3", "0", "4"], "a", "Just before 2 is 1.", "Count back.", "1, then 2."),
        q("Which shows 2 cats?", ["🐱", "🐱🐱", "🐱🐱🐱", "🐱🐱🐱🐱"], "b", "Two cats: 🐱🐱.", "Count the cats.", "Stop at two."),
        q("15 has how many tens?", ["1", "5", "15", "0"], "a", "15 = 1 ten and 5 ones.", "Look at the tens place.", "The left digit is 1."),
        q("Biggest number here?", ["3", "8", "5", "2"], "b", "8 is the biggest.", "Compare all four.", "8 wins."),
        q("Sara counts eggs: 1, 2, 3, 4. How many eggs?", ["3", "4", "5", "2"], "b", "She counted four eggs.", "Last number said is the count.", "Four."),
        q("Which is the same as 5 + 0?", ["0", "5", "50", "1"], "b", "Adding zero keeps the number: 5.", "Zero adds nothing.", "Still five."),
        q("Order from small to big: 2, 9, 4. What is middle?", ["2", "4", "9", "1"], "b", "Small to big: 2, 4, 9. Middle is 4.", "Sort them first.", "2 then 4 then 9."),
    ]
    return a, b


def g1_maths_add():
    a = [
        q("2 + 3 = ?", ["4", "5", "6", "3"], "b", "2 + 3 = 5.", "Count on from 2: 3, 4, 5.", "Two and three make five."),
        q("1 + 1 = ?", ["1", "2", "3", "0"], "b", "1 + 1 = 2.", "One more finger.", "Two."),
        q("4 + 2 = ?", ["5", "6", "7", "8"], "b", "4 + 2 = 6.", "Count on two from 4.", "Six."),
        q("5 + 0 = ?", ["0", "5", "50", "1"], "b", "Adding 0 keeps 5.", "Zero means add nothing.", "Still five."),
        q("3 + 3 = ?", ["5", "6", "7", "9"], "b", "3 + 3 = 6.", "Double three.", "Six."),
        q("6 + 1 = ?", ["5", "6", "7", "8"], "c", "6 + 1 = 7.", "One more than six.", "Seven."),
        q("Riya has 2 sweets. She gets 4 more. Total?", ["5", "6", "7", "8"], "b", "2 + 4 = 6.", "Add the sweets.", "Six sweets."),
        q("0 + 8 = ?", ["0", "8", "80", "9"], "b", "0 + 8 = 8.", "Starting from nothing, add eight.", "Eight."),
        q("7 + 2 = ?", ["8", "9", "10", "7"], "b", "7 + 2 = 9.", "Count on two from 7.", "Nine."),
        q("4 + 4 = ?", ["6", "7", "8", "9"], "c", "4 + 4 = 8.", "Double four.", "Eight."),
        q("Aman has ₹5. Amma gives ₹2 more. How much now?", ["₹6", "₹7", "₹8", "₹3"], "b", "5 + 2 = 7 rupees.", "Add the rupees.", "₹7."),
        q("1 + 6 = ?", ["6", "7", "8", "5"], "b", "1 + 6 = 7.", "One and six.", "Seven."),
        q("5 + 3 = ?", ["7", "8", "9", "6"], "b", "5 + 3 = 8.", "Count on three from 5.", "Eight."),
        q("2 + 2 + 2 = ?", ["4", "5", "6", "8"], "c", "2 + 2 + 2 = 6.", "Add step by step.", "Six."),
        q("9 + 1 = ?", ["9", "10", "11", "8"], "b", "9 + 1 = 10.", "One more than nine.", "Ten."),
        q("Which sum equals 5?", ["1 + 3", "2 + 3", "4 + 2", "1 + 1"], "b", "2 + 3 = 5.", "Try each sum.", "Two and three."),
    ]
    b = [
        q("3 + 4 = ?", ["6", "7", "8", "5"], "b", "3 + 4 = 7.", "Count on from 3.", "Seven."),
        q("5 + 5 = ?", ["9", "10", "11", "8"], "b", "5 + 5 = 10.", "Double five.", "Ten."),
        q("2 + 5 = ?", ["6", "7", "8", "5"], "b", "2 + 5 = 7.", "Count on five from 2.", "Seven."),
        q("8 + 0 = ?", ["0", "8", "80", "9"], "b", "8 + 0 = 8.", "Zero changes nothing.", "Eight."),
        q("1 + 8 = ?", ["8", "9", "10", "7"], "b", "1 + 8 = 9.", "One and eight.", "Nine."),
        q("6 + 3 = ?", ["8", "9", "10", "7"], "b", "6 + 3 = 9.", "Count on three from 6.", "Nine."),
        q("Neha has 4 crayons. She finds 3 more. Total?", ["6", "7", "8", "5"], "b", "4 + 3 = 7.", "Add the crayons.", "Seven."),
        q("7 + 3 = ?", ["9", "10", "11", "8"], "b", "7 + 3 = 10.", "Count on three from 7.", "Ten."),
        q("2 + 7 = ?", ["8", "9", "10", "7"], "b", "2 + 7 = 9.", "Two and seven.", "Nine."),
        q("4 + 1 = ?", ["4", "5", "6", "3"], "b", "4 + 1 = 5.", "One more than four.", "Five."),
        q("Papa gives ₹3. Dadi gives ₹3. Total money?", ["₹5", "₹6", "₹7", "₹3"], "b", "3 + 3 = 6 rupees.", "Double three rupees.", "₹6."),
        q("8 + 1 = ?", ["8", "9", "10", "7"], "b", "8 + 1 = 9.", "One more than eight.", "Nine."),
        q("3 + 5 = ?", ["7", "8", "9", "6"], "b", "3 + 5 = 8.", "Count on from 3.", "Eight."),
        q("1 + 2 + 3 = ?", ["5", "6", "7", "4"], "b", "1 + 2 + 3 = 6.", "Add in order.", "Six."),
        q("6 + 4 = ?", ["9", "10", "11", "8"], "b", "6 + 4 = 10.", "Count on four from 6.", "Ten."),
        q("Which sum equals 8?", ["3 + 3", "4 + 4", "2 + 4", "5 + 2"], "b", "4 + 4 = 8.", "Check each pair.", "Double four."),
    ]
    return a, b


def g1_maths_shapes():
    a = [
        q("A round ball looks most like a…", ["square", "circle", "triangle", "rectangle"], "b", "A ball is round like a circle.", "Think of a round shape.", "No corners — circle."),
        q("How many sides does a triangle have?", ["2", "3", "4", "5"], "b", "A triangle has 3 sides.", "Tri means three.", "Three sides."),
        q("A square has how many equal sides?", ["2", "3", "4", "5"], "c", "A square has 4 equal sides.", "Count the sides.", "All four match."),
        q("Which shape has no corners?", ["square", "triangle", "circle", "rectangle"], "c", "A circle is smooth — no corners.", "Corners are pointy.", "Circle has none."),
        q("A book cover looks most like a…", ["circle", "triangle", "rectangle", "ball"], "c", "A book is longer one way — a rectangle.", "Look at the book shape.", "Four sides, not all equal."),
        q("How many corners does a square have?", ["2", "3", "4", "0"], "c", "A square has 4 corners.", "Each corner where sides meet.", "Four corners."),
        q("Which shape looks like a slice of pizza?", ["circle", "triangle", "square", "oval"], "b", "A pizza slice is triangle-shaped.", "Pointy tip, three sides.", "Triangle."),
        q("A door is often shaped like a…", ["circle", "triangle", "rectangle", "star"], "c", "Most doors are rectangles.", "Tall and flat.", "Rectangle."),
        q("Which has 3 corners?", ["circle", "square", "triangle", "rectangle"], "c", "A triangle has 3 corners.", "Match corners to sides.", "Three."),
        q("A clock face is most like a…", ["square", "circle", "triangle", "box"], "b", "A clock face is round — a circle.", "Look at a wall clock.", "Circle."),
        q("How many sides does a rectangle have?", ["2", "3", "4", "6"], "c", "A rectangle has 4 sides.", "Count carefully.", "Four sides."),
        q("Which shape can roll easily?", ["square", "triangle", "circle", "rectangle"], "c", "A circle rolls.", "Round things roll.", "Circle."),
        q("A sandwich cut corner to corner makes…", ["circles", "triangles", "squares only", "ovals"], "b", "Corner-to-corner cuts make triangles.", "Picture the cut.", "Two triangles."),
        q("All sides equal and 4 corners — what shape?", ["triangle", "circle", "square", "oval"], "c", "Equal sides + 4 corners = square.", "Not a circle.", "Square."),
        q("Which is NOT a shape name?", ["circle", "apple", "square", "triangle"], "b", "Apple is a fruit, not a shape name.", "Pick the odd one.", "Apple."),
        q("A window pane is often a…", ["circle", "triangle", "rectangle", "star"], "c", "Many window panes are rectangles.", "Think of a window.", "Rectangle."),
    ]
    b = [
        q("How many sides does a circle have?", ["0", "1", "2", "4"], "a", "A circle has no straight sides — 0.", "Sides are straight edges.", "None."),
        q("A traffic warning board is often a…", ["circle", "triangle", "square only", "line"], "b", "Many warning boards are triangles.", "Pointy road signs.", "Triangle."),
        q("Which shape has 4 corners that are all the same?", ["triangle", "circle", "square", "oval"], "c", "A square’s four corners match.", "Equal sides help.", "Square."),
        q("A chapati is most like a…", ["square", "triangle", "circle", "rectangle"], "c", "A chapati is round like a circle.", "Round bread.", "Circle."),
        q("Rectangle sides: opposite sides are…", ["round", "equal", "broken", "three"], "b", "Opposite sides of a rectangle are equal.", "Think of a book.", "Equal pairs."),
        q("How many corners does a triangle have?", ["1", "2", "3", "4"], "c", "Three corners on a triangle.", "One at each tip.", "Three."),
        q("Which shape looks like a box face?", ["circle", "triangle", "square", "moon"], "c", "A box face can be a square.", "Four equal sides.", "Square."),
        q("A coin is shaped like a…", ["triangle", "square", "circle", "rectangle"], "c", "Coins are round circles.", "Look at ₹1 coin.", "Circle."),
        q("Which has more sides: square or triangle?", ["triangle", "square", "same", "circle"], "b", "Square has 4; triangle has 3. Square has more.", "Compare 4 and 3.", "Square."),
        q("An ice-cream cone tip looks like a…", ["circle", "triangle", "square", "rectangle"], "b", "The cone tip is triangle-shaped.", "Pointy end.", "Triangle."),
        q("Can a circle have a corner?", ["yes", "no", "only two", "only at night"], "b", "A circle has no corners.", "Smooth all around.", "No."),
        q("A phone screen is often a…", ["circle", "triangle", "rectangle", "star"], "c", "Phone screens are rectangles.", "Longer one way.", "Rectangle."),
        q("Three sticks joined end to end can make a…", ["circle", "triangle", "line only", "ball"], "b", "Three sticks can make a triangle.", "Three sides.", "Triangle."),
        q("Which shape name starts with S?", ["circle", "triangle", "square", "oval"], "c", "Square starts with S.", "Say the names.", "Square."),
        q("A bangle is most like a…", ["square", "triangle", "circle", "box"], "c", "A bangle is round — a circle.", "Wear on the wrist.", "Circle."),
        q("How many equal sides must a square have?", ["1", "2", "3", "4"], "d", "All 4 sides of a square are equal.", "Every side matches.", "Four."),
    ]
    return a, b


def g1_eng_letters():
    a = [
        q('Which letter comes after "B"?', ["A", "C", "D", "E"], "b", "A, B, C — C comes after B.", "Say the alphabet.", "B then C."),
        q("Which word starts with M?", ["sun", "moon", "cat", "dog"], "b", "Moon starts with M.", "Listen to the first sound.", "M-oon."),
        q('Find the word: "c" + "at" =', ["bat", "cat", "hat", "mat"], "b", "c + at makes cat.", "Blend the sounds.", "Cat."),
        q("Which is a letter?", ["3", "A", "!", "10"], "b", "A is a letter of the alphabet.", "Letters are A–Z.", "A."),
        q("How many letters are in the word SUN?", ["2", "3", "4", "1"], "b", "S-U-N has 3 letters.", "Count each letter.", "Three."),
        q('Which word ends with "g"?', ["bag", "bat", "bus", "bee"], "a", "Bag ends with g.", "Look at the last letter.", "…g."),
        q("Capital letter for a is…", ["A", "B", "a", "E"], "a", "The capital of a is A.", "Big letter form.", "A."),
        q("Which word means a pet that meows?", ["dog", "cat", "cow", "hen"], "b", "A cat meows.", "Think of pets.", "Cat."),
        q('Rhymes with "hat"?', ["hot", "sit", "cat", "cup"], "c", "Cat rhymes with hat.", "Same ending sound.", "-at."),
        q("First letter of INDIA is…", ["N", "I", "D", "A"], "b", "INDIA starts with I.", "Look at the start.", "I."),
        q("Which is a word?", ["xyzq", "book", "1234", "##"], "b", "Book is a real word.", "Pick a word you know.", "Book."),
        q("Ball starts with which sound?", ["b", "c", "d", "s"], "a", "Ball starts with /b/.", "Say ball slowly.", "B."),
        q("How many vowels in AEIOU list?", ["3", "4", "5", "6"], "c", "A E I O U — five vowels.", "Count them.", "Five."),
        q('Small letter for "T" is…', ["t", "T", "s", "l"], "a", "Small form of T is t.", "Lower case.", "t."),
        q("Which word names a colour?", ["run", "red", "cup", "sit"], "b", "Red is a colour.", "Colours you know.", "Red."),
        q("Join: bl + ue =", ["blue", "blow", "glue", "clue"], "a", "bl + ue = blue.", "Blend the parts.", "Blue."),
    ]
    b = [
        q('Which letter comes before "D"?', ["B", "C", "E", "F"], "b", "C comes before D.", "Alphabet order.", "C."),
        q("Which word starts with S?", ["moon", "sun", "apple", "egg"], "b", "Sun starts with S.", "First sound /s/.", "Sun."),
        q('Find the word: "p" + "en" =', ["pan", "pen", "pin", "pun"], "b", "p + en = pen.", "Blend.", "Pen."),
        q("How many letters in DOG?", ["2", "3", "4", "5"], "b", "D-O-G has 3 letters.", "Count.", "Three."),
        q('Which word ends with "t"?', ["cup", "cat", "bus", "sun"], "b", "Cat ends with t.", "Last letter.", "t."),
        q("Capital of b is…", ["B", "b", "D", "P"], "a", "Capital of b is B.", "Big letter.", "B."),
        q("Which animal says moo?", ["cat", "dog", "cow", "bird"], "c", "A cow says moo.", "Farm animal.", "Cow."),
        q('Rhymes with "sun"?', ["sit", "fun", "sip", "map"], "b", "Fun rhymes with sun.", "Same -un sound.", "Fun."),
        q("First letter of APPLE is…", ["P", "A", "L", "E"], "b", "APPLE starts with A.", "Start of the word.", "A."),
        q("Which is NOT a letter?", ["M", "7", "Z", "K"], "b", "7 is a number, not a letter.", "Odd one out.", "7."),
        q("Tree starts with…", ["t", "r", "e", "s"], "a", "Tree starts with t.", "First sound.", "T."),
        q("How many letters in YES?", ["2", "3", "4", "1"], "b", "Y-E-S has 3 letters.", "Count.", "Three."),
        q("Which word names a fruit?", ["chair", "mango", "shoe", "rain"], "b", "Mango is a fruit.", "Food from trees.", "Mango."),
        q('Small letter for "G" is…', ["g", "G", "q", "y"], "a", "Small form of G is g.", "Lower case.", "g."),
        q("Join: sh + ip =", ["shop", "ship", "sip", "hip"], "b", "sh + ip = ship.", "Blend.", "Ship."),
        q("Which word has 2 letters?", ["cat", "on", "sun", "ball"], "b", "On has two letters: o, n.", "Count letters.", "On."),
    ]
    return a, b


def g1_eng_reading():
    a = [
        q('Picture: a smiling sun. What is it?', ["moon", "sun", "star only", "cloud"], "b", "A smiling sun picture shows the sun.", "Day sky light.", "Sun."),
        q('Read: "The cat is on the mat." Where is the cat?', ["in a box", "on the mat", "under a car", "in water"], "b", "The sentence says on the mat.", "Find the place words.", "On the mat."),
        q("Who can fly?", ["fish", "bird", "dog", "cow"], "b", "Birds can fly.", "Think who has wings.", "Bird."),
        q('Read: "I like mango." What does the child like?', ["apple", "mango", "milk", "rice"], "b", "The word mango is in the sentence.", "Find the food word.", "Mango."),
        q("At night we often see the…", ["sun", "moon", "school bus", "rainbow"], "b", "At night we see the moon.", "Night sky.", "Moon."),
        q('Read: "Rani has a red bag." What colour is the bag?', ["blue", "red", "green", "black"], "b", "The sentence says red bag.", "Colour word.", "Red."),
        q("Which animal lives in water?", ["cat", "fish", "hen", "goat"], "b", "Fish live in water.", "Think of a pond.", "Fish."),
        q('Picture clue: umbrella. When do we use it?', ["in the rain", "to eat", "to sleep", "to swim"], "a", "We use an umbrella in the rain.", "Keeps us dry.", "Rain."),
        q('Read: "Tom runs fast." What does Tom do?', ["sleeps", "runs", "eats", "sits"], "b", "Tom runs — that is the action.", "Find the verb.", "Runs."),
        q("We drink…", ["stones", "water", "sand", "smoke"], "b", "We drink water.", "What goes in a glass.", "Water."),
        q('Read: "The hen lays an egg." Who lays the egg?', ["cow", "hen", "dog", "cat"], "b", "The hen lays the egg.", "Subject of the sentence.", "Hen."),
        q("Which is a place to sleep?", ["bed", "spoon", "ball", "pen"], "a", "We sleep on a bed.", "Bedroom thing.", "Bed."),
        q('Picture: school bag. Where do you take it?', ["to school", "to the moon", "into the sea", "under soil"], "a", "A school bag goes to school.", "Think of morning.", "School."),
        q('Read: "Birds live in nests." Where do birds live?', ["nests", "cars", "cups", "shoes"], "a", "The sentence says nests.", "Home for birds.", "Nests."),
        q("We write with a…", ["shoe", "pencil", "plate", "chair"], "b", "We write with a pencil.", "School tool.", "Pencil."),
        q('Read: "It is hot in summer." How is summer?', ["cold", "hot", "dark always", "wet only"], "b", "The sentence says hot.", "Weather word.", "Hot."),
    ]
    b = [
        q('Picture: a green tree. What is it?', ["car", "tree", "book", "fish"], "b", "A green tree picture shows a tree.", "Plant with trunk.", "Tree."),
        q('Read: "The dog sits by the door." Where is the dog?', ["by the door", "in the sky", "on the roof only", "in a cup"], "a", "By the door — that is the place.", "Find place words.", "Door."),
        q("Who says bow-wow?", ["cat", "dog", "cow", "duck"], "b", "A dog says bow-wow.", "Pet sound.", "Dog."),
        q('Read: "I see a bus." What does the child see?', ["train", "bus", "plane", "boat"], "b", "The word is bus.", "Look in the sentence.", "Bus."),
        q("In the morning we see the…", ["moon only", "sun", "stars only", "owl"], "b", "In the morning we see the sun.", "Day begins.", "Sun."),
        q('Read: "Leela has a blue frock." What colour?', ["red", "blue", "yellow", "pink"], "b", "Blue frock — colour is blue.", "Colour word.", "Blue."),
        q("Which animal gives us milk?", ["tiger", "cow", "eagle", "frog"], "b", "A cow gives milk.", "Farm animal.", "Cow."),
        q("Picture clue: toothbrush. When do we use it?", ["to brush teeth", "to cut paper", "to kick a ball", "to cook rice"], "a", "A toothbrush cleans teeth.", "Morning and night.", "Teeth."),
        q('Read: "Mira hops." What does Mira do?', ["hops", "flies a plane", "drives", "swims in space"], "a", "Mira hops — hopping is the action.", "Verb in the sentence.", "Hops."),
        q("We eat with a…", ["spoon", "shoe", "broom", "bell"], "a", "We eat with a spoon.", "Table tool.", "Spoon."),
        q('Read: "The frog jumps." Who jumps?', ["frog", "rock", "cup", "mat"], "a", "The frog jumps.", "Who does the action?", "Frog."),
        q("Which is a place to sit?", ["chair", "cloud", "flame", "needle"], "a", "We sit on a chair.", "Furniture.", "Chair."),
        q("Picture: rain drops. What is falling?", ["rain", "sand", "stones", "leaves only"], "a", "Rain drops mean rain is falling.", "Wet weather.", "Rain."),
        q('Read: "Fish swim in water." Where do fish swim?', ["in water", "in fire", "in air only", "on roads"], "a", "In water — from the sentence.", "Home for fish.", "Water."),
        q("We read a…", ["book", "brick", "broom", "boat only"], "a", "We read a book.", "Pages and words.", "Book."),
        q('Read: "Winter feels cold." How does winter feel?', ["hot", "cold", "sweet", "loud"], "b", "The sentence says cold.", "Feeling word.", "Cold."),
    ]
    return a, b


def g1_eng_grammar():
    a = [
        q("Pick the correct sentence.", ["i like tea.", "I like tea.", "i Like tea.", "I like Tea always wrong."], "b", "Sentences start with a capital letter.", "Look at the first letter.", "Capital I."),
        q("We say ___ apple.", ["a", "an", "the the", "two"], "b", "Apple starts with a vowel sound — use an.", "A vs an.", "An apple."),
        q("The boys ___ playing.", ["is", "are", "am", "be"], "b", "Boys is more than one — use are.", "Plural subject.", "Are."),
        q("She ___ my sister.", ["am", "is", "are", "be"], "b", "She takes is.", "One girl.", "Is."),
        q("I ___ a student.", ["is", "are", "am", "be"], "c", "With I we use am.", "I am…", "Am."),
        q("Pick the naming word (noun).", ["run", "happy", "school", "quickly"], "c", "School names a place — a noun.", "Person/place/thing.", "School."),
        q("Pick the doing word (verb).", ["red", "jump", "soft", "tall"], "b", "Jump is an action — a verb.", "What can you do?", "Jump."),
        q("Which needs a capital letter?", ["monday", "tree", "cup", "sand"], "a", "Day names start with a capital: Monday.", "Special names.", "Monday."),
        q("A cat ___ soft.", ["am", "is", "are", "be"], "b", "One cat — use is.", "Singular.", "Is."),
        q("We say ___ umbrella.", ["a", "an", "two two", "an an"], "b", "Umbrella starts with a vowel sound — an.", "A vs an.", "An."),
        q("They ___ happy.", ["is", "am", "are", "be"], "c", "They is plural — use are.", "More than one.", "Are."),
        q("Pick the full stop sentence.", ["Where is Bo", "Bo is brave.", "Wow", "Oh"], "b", "A telling sentence ends with a full stop.", "Not a question.", "Full stop."),
        q("Which is a question?", ["I sit.", "Are you ready?", "The sun is hot.", "Red bag."], "b", "Questions often start with Are/Is/What and end with ?", "Look for ?", "Are you ready?"),
        q("My name ___ Kabir.", ["am", "is", "are", "be"], "b", "Name is singular — is.", "My name is…", "Is."),
        q("We use ___ before ball.", ["a", "an", "an an", "the the the"], "a", "Ball starts with a consonant sound — a.", "A ball.", "A."),
        q("Pick the opposite of big.", ["large", "huge", "small", "tall"], "c", "Small is the opposite of big.", "Not a twin — an opposite.", "Small."),
    ]
    b = [
        q("Pick the correct sentence.", ["we go home.", "We go home.", "we Go home.", "WE go Home always."], "b", "Start with a capital W.", "Sentence start.", "We…"),
        q("We say ___ egg.", ["a", "an", "the the", "two"], "b", "Egg starts with a vowel sound — an.", "An egg.", "An."),
        q("The girl ___ kind.", ["am", "is", "are", "be"], "b", "One girl — is.", "Singular.", "Is."),
        q("You ___ my friend.", ["am", "is", "are", "be"], "c", "With you we use are.", "You are…", "Are."),
        q("I ___ hungry.", ["is", "are", "am", "be"], "c", "I am hungry.", "I + am.", "Am."),
        q("Pick the naming word.", ["blue", "softly", "teacher", "run"], "c", "Teacher names a person.", "Noun.", "Teacher."),
        q("Pick the doing word.", ["cold", "sing", "green", "tiny"], "b", "Sing is an action.", "Verb.", "Sing."),
        q("Which needs a capital?", ["delhi", "river", "stone", "leaf"], "a", "Place names: Delhi.", "Special name.", "Delhi."),
        q("Dogs ___ loyal.", ["is", "am", "are", "be"], "c", "Dogs is plural — are.", "More than one dog.", "Are."),
        q("We say ___ orange.", ["a", "an", "two two", "an an"], "b", "Orange starts with a vowel sound — an.", "An orange.", "An."),
        q("He ___ tall.", ["am", "is", "are", "be"], "b", "He takes is.", "One boy.", "Is."),
        q("Pick the sentence with a full stop.", ["What time is it", "It is time to eat.", "Help", "Wow"], "b", "Telling sentence + full stop.", "Ends with .", "It is time…"),
        q("Which is a question?", ["Bo smiles.", "Can you help?", "Red is a colour.", "A soft pillow."], "b", "Can you help? asks something.", "Ends with ?", "Question."),
        q("Her bag ___ new.", ["am", "is", "are", "be"], "b", "Bag is singular — is.", "Her bag is…", "Is."),
        q("We use ___ before dog.", ["a", "an", "an an", "the the the"], "a", "Dog starts with a consonant — a.", "A dog.", "A."),
        q("Pick the opposite of happy.", ["glad", "joyful", "sad", "merry"], "c", "Sad is the opposite of happy.", "Not a twin.", "Sad."),
    ]
    return a, b


def g1_sci_plants():
    a = [
        q("Which part of a plant grows under the soil?", ["leaf", "root", "flower", "fruit"], "b", "Roots grow under the soil.", "Hidden in the ground.", "Root."),
        q("Leaves are mostly which colour?", ["blue", "green", "pink", "black"], "b", "Most leaves are green.", "Look at a tree.", "Green."),
        q("A seed can grow into a…", ["stone", "new plant", "cloud", "car"], "b", "A seed grows into a new plant.", "Baby plant inside.", "New plant."),
        q("Which part makes food for the plant?", ["root", "leaf", "stone", "pot"], "b", "Leaves make food with sunlight.", "Green kitchen.", "Leaf."),
        q("We water plants because they need…", ["music", "water", "toys", "shoes"], "b", "Plants need water to live.", "Like we drink.", "Water."),
        q("A flower is often…", ["under soil only", "bright and pretty", "made of metal", "a rock"], "b", "Flowers are often bright and pretty.", "Attract bees.", "Pretty."),
        q("Which do plants need to grow?", ["sunlight", "TV", "phones", "cars"], "a", "Plants need sunlight.", "Light helps make food.", "Sunlight."),
        q("A mango grows on a…", ["fish", "tree", "cloud", "bike"], "b", "Mangoes grow on trees.", "Fruit tree.", "Tree."),
        q("Roots help the plant to…", ["fly", "hold in the soil", "sing", "read"], "b", "Roots hold the plant in the soil.", "Like anchors.", "Hold."),
        q("Which is a plant?", ["dog", "rose", "cup", "ball"], "b", "A rose is a plant.", "Living green thing.", "Rose."),
        q("Fruits often have ___ inside.", ["seeds", "wheels", "books", "socks"], "a", "Fruits keep seeds inside.", "Cut an apple.", "Seeds."),
        q("The stem…", ["holds the plant up", "is always under soil", "is an animal", "makes thunder"], "a", "The stem holds the plant up.", "Like a stick.", "Stem."),
        q("A cactus lives where it is…", ["very wet always", "dry", "under the sea", "in snow only"], "b", "Cactus plants like dry places.", "Desert plant.", "Dry."),
        q("We get wood from…", ["trees", "fish", "clouds", "stones only"], "a", "Wood comes from trees.", "Tree trunks.", "Trees."),
        q("Which is NOT a plant part?", ["root", "leaf", "wheel", "stem"], "c", "A wheel is not a plant part.", "Odd one out.", "Wheel."),
        q("Plants are…", ["living", "not living", "made of plastic only", "always toys"], "a", "Plants are living things.", "They grow.", "Living."),
    ]
    b = [
        q("Which part drinks water from the soil?", ["flower", "root", "fruit skin", "thorn only"], "b", "Roots drink water from the soil.", "Under ground.", "Root."),
        q("Sunlight helps leaves to…", ["make food", "dance", "sleep only", "make noise"], "a", "Leaves use sunlight to make food.", "Plant kitchen.", "Food."),
        q("A baby plant is called a…", ["seedling", "rocket", "pillow", "truck"], "a", "A baby plant is a seedling.", "Young plant.", "Seedling."),
        q("Which grows from a seed?", ["chair", "plant", "glass", "phone"], "b", "A plant grows from a seed.", "Life cycle.", "Plant."),
        q("We should ___ plants.", ["care for", "kick", "burn always", "ignore forever"], "a", "We should care for plants.", "Water and light.", "Care."),
        q("A leaf is usually…", ["flat and green", "round like a ball only", "made of iron", "blue metal"], "a", "Leaves are often flat and green.", "Look and touch.", "Flat green."),
        q("Bees visit flowers for…", ["nectar", "stones", "books", "shoes"], "a", "Bees take nectar from flowers.", "Sweet flower juice.", "Nectar."),
        q("A coconut tree is…", ["tall", "a fish", "a bird", "a cup"], "a", "Coconut trees are tall.", "Palm tree.", "Tall."),
        q("Soil helps plants by giving…", ["TV shows", "a place to grow", "music", "cars"], "b", "Soil is where plants grow.", "Home for roots.", "Grow."),
        q("Which is a flower?", ["lotus", "spoon", "eraser", "sock"], "a", "A lotus is a flower.", "Pretty plant part.", "Lotus."),
        q("Dry leaves fall in…", ["autumn / dry season", "only at night always", "from the moon", "from cars"], "a", "Leaves fall in dry or autumn times.", "Season change.", "Fall."),
        q("The green colour in leaves helps them…", ["make food", "bark like dogs", "fly planes", "cook rice"], "a", "Green helps leaves make food.", "Sunlight work.", "Food."),
        q("A pot plant still needs…", ["water", "no care", "only darkness forever", "salt only"], "a", "Potted plants need water too.", "Living plant.", "Water."),
        q("Which comes first?", ["seed", "big tree", "fruit only", "wood chair"], "a", "Life often starts with a seed.", "Beginning.", "Seed."),
        q("Thorns on a rose…", ["can prick", "are sweets", "are roots", "are fruits"], "a", "Thorns can prick — be careful.", "Sharp parts.", "Prick."),
        q("Plants give us…", ["oxygen / fresh air", "only plastic", "only noise", "only smoke"], "a", "Plants help give fresh air.", "Good for us.", "Air."),
    ]
    return a, b


def g1_sci_animals():
    a = [
        q("Which animal says meow?", ["dog", "cat", "cow", "frog"], "b", "A cat says meow.", "Pet sound.", "Cat."),
        q("Fish live in…", ["water", "trees only", "deserts only", "clouds"], "a", "Fish live in water.", "Pond or sea.", "Water."),
        q("A cow gives us…", ["milk", "wool only", "honey", "silk"], "a", "Cows give milk.", "Farm animal.", "Milk."),
        q("Which animal can fly?", ["elephant", "sparrow", "crocodile", "goat"], "b", "A sparrow can fly.", "Has wings.", "Sparrow."),
        q("Dogs are often kept as…", ["pets", "cars", "plants", "shoes"], "a", "Dogs are common pets.", "At home.", "Pets."),
        q("A lion is a…", ["wild animal", "insect only", "fish", "bird"], "a", "A lion is a wild animal.", "Jungle king.", "Wild."),
        q("Which animal hops?", ["fish", "rabbit", "snail", "turtle"], "b", "Rabbits hop.", "Long back legs.", "Rabbit."),
        q("Birds have…", ["wings", "fins only", "wheels", "roots"], "a", "Birds have wings.", "To fly.", "Wings."),
        q("A hen lays…", ["eggs", "milk", "wool", "honey"], "a", "Hens lay eggs.", "Farm.", "Eggs."),
        q("Which lives on land?", ["whale", "dog", "shark", "dolphin"], "b", "A dog lives on land.", "Not a sea animal.", "Dog."),
        q("Bees make…", ["honey", "milk", "wool", "bread"], "a", "Bees make honey.", "From flowers.", "Honey."),
        q("An elephant has a long…", ["trunk", "fin", "beak only", "shell"], "a", "Elephants have trunks.", "Nose and hand.", "Trunk."),
        q("Which animal is tiny?", ["ant", "whale", "elephant", "giraffe"], "a", "An ant is tiny.", "Small insect.", "Ant."),
        q("Sheep give us…", ["wool", "honey", "eggs only", "silk"], "a", "Sheep give wool.", "Warm clothes.", "Wool."),
        q("A frog can live…", ["near water and land", "only in fire", "only in space", "only in ice cream"], "a", "Frogs like water and land.", "Pond animal.", "Both."),
        q("Which is NOT an animal?", ["tiger", "table", "deer", "monkey"], "b", "A table is not an animal.", "Odd one out.", "Table."),
    ]
    b = [
        q("Which animal says quack?", ["cat", "duck", "cow", "horse"], "b", "A duck says quack.", "Pond bird.", "Duck."),
        q("Where do monkeys like to live?", ["in trees", "under the sea only", "in fire", "in cups"], "a", "Many monkeys live in trees.", "Climbing.", "Trees."),
        q("A horse can…", ["run fast", "swim like a fish always", "fly with wings", "lay eggs like a hen"], "a", "Horses can run fast.", "Strong legs.", "Run."),
        q("Which animal has a hard shell?", ["cat", "tortoise", "dog", "cow"], "b", "A tortoise has a hard shell.", "Protects its body.", "Tortoise."),
        q("Cows eat…", ["grass", "stones", "plastic", "metal"], "a", "Cows eat grass.", "Plant eaters.", "Grass."),
        q("A tiger has…", ["stripes", "wheels", "feathers only", "fins only"], "a", "Tigers have stripes.", "Orange and black.", "Stripes."),
        q("Which animal swims?", ["fish", "hen", "camel", "sparrow"], "a", "Fish swim.", "In water.", "Fish."),
        q("Pets need…", ["care and food", "no care", "only stones", "only screens"], "a", "Pets need care and food.", "Be kind.", "Care."),
        q("A goat gives…", ["milk", "honey", "silk", "wool only always"], "a", "Goats can give milk.", "Farm animal.", "Milk."),
        q("Which animal has a pouch?", ["kangaroo", "fish", "eagle", "ant"], "a", "A kangaroo has a pouch.", "Baby rides inside.", "Kangaroo."),
        q("Snakes…", ["have no legs", "have six legs", "have wings", "have fins like sharks always"], "a", "Snakes have no legs.", "They slither.", "No legs."),
        q("A peacock is a…", ["bird", "fish", "insect only", "mammal only"], "a", "A peacock is a bird.", "Colourful feathers.", "Bird."),
        q("Which animal is used to pull a cart?", ["bullock / ox", "butterfly", "goldfish", "sparrow"], "a", "Bullocks can pull carts.", "Farm work.", "Ox."),
        q("Cats like to…", ["drink milk", "bark", "moo", "quack"], "a", "Cats often drink milk.", "Pet habit.", "Milk."),
        q("Wild animals live…", ["in forests / wild places", "only in school bags", "only in fridges", "only in books"], "a", "Wild animals live in wild places.", "Not as house pets.", "Wild."),
        q("Which is an insect?", ["butterfly", "cow", "elephant", "whale"], "a", "A butterfly is an insect.", "Small with wings.", "Butterfly."),
    ]
    return a, b


def g1_sci_body():
    a = [
        q("We see with our…", ["ears", "eyes", "nose", "tongue"], "b", "We see with our eyes.", "Sense of sight.", "Eyes."),
        q("We hear with our…", ["eyes", "ears", "hands", "feet"], "b", "We hear with our ears.", "Sense of hearing.", "Ears."),
        q("We smell with our…", ["nose", "eyes", "ears", "hair"], "a", "We smell with our nose.", "Sense of smell.", "Nose."),
        q("We taste with our…", ["tongue", "elbow", "knee", "ear"], "a", "We taste with our tongue.", "Sense of taste.", "Tongue."),
        q("We have how many hands?", ["1", "2", "3", "4"], "b", "We have 2 hands.", "Count.", "Two."),
        q("We walk with our…", ["ears", "feet", "nose", "hair"], "b", "We walk with our feet.", "Legs and feet.", "Feet."),
        q("Brush your ___ every day.", ["teeth", "shoes only", "books", "walls"], "a", "Brush your teeth every day.", "Keep clean.", "Teeth."),
        q("We breathe air in through our…", ["nose / mouth", "toes", "elbows", "hair"], "a", "We breathe through nose or mouth.", "Air in and out.", "Nose."),
        q("Wash your hands ___ eating.", ["before", "never", "only once a year", "with paint"], "a", "Wash hands before eating.", "Stay healthy.", "Before."),
        q("Our heart is inside our…", ["chest", "shoe", "hat", "bag"], "a", "The heart is in the chest.", "Beats all day.", "Chest."),
        q("We have how many eyes?", ["1", "2", "3", "4"], "b", "Most people have 2 eyes.", "Count.", "Two."),
        q("Skin helps us to…", ["feel touch", "fly", "bark", "lay eggs"], "a", "Skin helps us feel touch.", "Sense of touch.", "Feel."),
        q("Exercise makes our body…", ["stronger", "weaker always", "made of stone", "invisible"], "a", "Exercise helps us stay strong.", "Play and move.", "Strong."),
        q("We should sleep at…", ["night / rest time", "never", "only in class always", "in the rain without care"], "a", "Sleep helps the body rest.", "Night time.", "Sleep."),
        q("Fingers are on our…", ["hands", "ears", "nose tip only", "knees only"], "a", "Fingers are on our hands.", "Count them.", "Hands."),
        q("Which helps us chew food?", ["teeth", "hair", "nails only", "eyelashes"], "a", "Teeth help us chew food.", "Mouth.", "Teeth."),
    ]
    b = [
        q("We clap with our…", ["hands", "ears", "nose", "hair"], "a", "We clap with our hands.", "Put palms together.", "Hands."),
        q("Sunglasses protect our…", ["eyes", "toes", "elbows", "knees"], "a", "Sunglasses protect eyes from bright sun.", "Sight safety.", "Eyes."),
        q("A loud sound is heard by our…", ["ears", "eyes", "tongue", "hair"], "a", "Ears hear loud sounds.", "Hearing.", "Ears."),
        q("Sweet and salty are kinds of…", ["taste", "colour only", "shape only", "number"], "a", "Sweet and salty are tastes.", "Tongue feels them.", "Taste."),
        q("We have how many legs?", ["1", "2", "3", "4"], "b", "We have 2 legs.", "Walk on two.", "Two."),
        q("Cover your mouth when you…", ["sneeze or cough", "sleep only", "read", "draw"], "a", "Cover mouth when you sneeze or cough.", "Be kind to others.", "Sneeze."),
        q("Bones help our body to…", ["stand and move", "make honey", "fly alone", "turn into water"], "a", "Bones help us stand and move.", "Skeleton.", "Stand."),
        q("Drink plenty of…", ["water", "mud", "paint", "sand"], "a", "Drink plenty of water.", "Healthy habit.", "Water."),
        q("Nails grow on our…", ["fingers and toes", "ears", "eyes", "tongue"], "a", "Nails grow on fingers and toes.", "Keep them clean.", "Fingers."),
        q("We smile with our…", ["mouth", "elbow", "knee", "heel"], "a", "We smile with our mouth.", "Happy face.", "Mouth."),
        q("Ears help us enjoy…", ["music", "only colours", "only smells", "only tastes"], "a", "Ears help us hear music.", "Sound.", "Music."),
        q("A doctor checks if we are…", ["healthy", "a plant", "a car", "a cloud"], "a", "Doctors help keep us healthy.", "Health check.", "Healthy."),
        q("Jumping uses our…", ["legs", "ears only", "hair only", "eyelashes"], "a", "Jumping uses our legs.", "Strong legs.", "Legs."),
        q("Keep your body…", ["clean", "dirty always", "painted blue", "wet with mud always"], "a", "Keep your body clean.", "Bath and wash.", "Clean."),
        q("We think with our…", ["brain", "shoes", "belt", "socks"], "a", "We think with our brain.", "Inside the head.", "Brain."),
        q("Which is a sense organ?", ["eye", "shoe", "chair", "bag"], "a", "The eye is a sense organ.", "Helps us see.", "Eye."),
    ]
    return a, b


# ---------------------------------------------------------------------------
# Question banks — Grade 2
# ---------------------------------------------------------------------------

def g2_maths_place():
    a = [
        q("In 47, the digit 4 stands for…", ["4 ones", "4 tens", "40 tens", "7 tens"], "b", "4 is in the tens place → 4 tens.", "Tens on the left in two-digit numbers.", "4 tens."),
        q("In 47, the digit 7 stands for…", ["7 tens", "7 ones", "70", "4 ones"], "b", "7 is in the ones place → 7 ones.", "Ones on the right.", "7 ones."),
        q("How many tens in 30?", ["3", "0", "30", "10"], "a", "30 = 3 tens and 0 ones.", "3 bundles of ten.", "3 tens."),
        q("10 ones make…", ["1 ten", "10 tens", "1 one", "0"], "a", "10 ones bundle into 1 ten.", "Trade ten ones.", "1 ten."),
        q("Which number is 2 tens and 5 ones?", ["25", "52", "205", "7"], "a", "2 tens + 5 ones = 25.", "Write tens then ones.", "25."),
        q("Expand 38.", ["30 + 8", "3 + 8", "38 + 0 only wrong", "80 + 3"], "a", "38 = 30 + 8.", "Tens value + ones value.", "30 + 8."),
        q("Which is greater: 29 or 92?", ["29", "92", "same", "0"], "b", "92 has more tens, so it is greater.", "Compare tens first.", "92."),
        q("What is the place of 6 in 61?", ["ones", "tens", "hundreds", "none"], "b", "In 61, 6 is in the tens place.", "Left digit.", "Tens."),
        q("45 = ___ tens + ___ ones", ["4 and 5", "5 and 4", "40 and 5 wrong words", "9 and 0"], "a", "45 = 4 tens and 5 ones.", "Split the digits.", "4 tens, 5 ones."),
        q("Smallest two-digit number?", ["10", "11", "9", "01"], "a", "10 is the smallest two-digit number.", "After 9 comes 10.", "10."),
        q("Biggest two-digit number?", ["99", "90", "100", "89"], "a", "99 is the biggest two-digit number.", "9 tens and 9 ones.", "99."),
        q("20 + 7 = ?", ["27", "207", "72", "9"], "a", "20 + 7 = 27.", "Tens then ones.", "27."),
        q("Riya has 3 packs of 10 stickers and 4 loose. How many?", ["34", "43", "7", "304"], "a", "3 tens + 4 ones = 34.", "Packs are tens.", "34."),
        q("Which shows 5 tens?", ["50", "5", "15", "500"], "a", "5 tens = 50.", "5 × 10.", "50."),
        q("In 80, how many ones?", ["0", "8", "80", "10"], "a", "80 has 0 ones.", "Right digit is 0.", "Zero ones."),
        q("Order small to big: 15, 51, 25. Middle number?", ["15", "25", "51", "10"], "b", "Order: 15, 25, 51. Middle is 25.", "Sort first.", "25."),
    ]
    b = [
        q("In 63, the digit 6 stands for…", ["6 ones", "6 tens", "60 ones as tens value", "3 tens"], "b", "6 is in tens → 6 tens (60).", "Left digit.", "6 tens."),
        q("In 63, the digit 3 stands for…", ["3 tens", "3 ones", "30", "6 ones"], "b", "3 is in ones → 3 ones.", "Right digit.", "3 ones."),
        q("How many tens in 70?", ["7", "0", "70", "10"], "a", "70 = 7 tens.", "7 bundles of ten.", "7."),
        q("Which number is 4 tens and 0 ones?", ["40", "4", "400", "14"], "a", "4 tens + 0 ones = 40.", "Write 4 then 0.", "40."),
        q("Expand 56.", ["50 + 6", "5 + 6", "56 + 1", "60 + 5"], "a", "56 = 50 + 6.", "Place values.", "50 + 6."),
        q("Which is smaller: 48 or 84?", ["48", "84", "same", "100"], "a", "48 has fewer tens than 84.", "Compare tens.", "48."),
        q("Place of 9 in 19?", ["tens", "ones", "hundreds", "none"], "b", "In 19, 9 is ones.", "Right digit.", "Ones."),
        q("9 tens + 2 ones = ?", ["92", "29", "11", "902"], "a", "9 tens + 2 ones = 92.", "Write tens then ones.", "92."),
        q("100 is how many tens?", ["10", "100", "1", "0"], "a", "100 = 10 tens.", "10 × 10 = 100.", "10 tens."),
        q("Aman has ₹10 notes: 2 notes, and ₹1 coins: 3. Total?", ["₹23", "₹32", "₹5", "₹13"], "a", "2 tens + 3 ones = ₹23.", "Notes are tens.", "₹23."),
        q("Which equals 1 ten?", ["10 ones", "1 one", "100 ones", "2 ones"], "a", "1 ten = 10 ones.", "Bundle rule.", "10 ones."),
        q("35 = 30 + ?", ["5", "3", "35", "0"], "a", "35 = 30 + 5.", "Ones left.", "5."),
        q("Greatest using digits 2 and 8?", ["82", "28", "20", "8"], "a", "Put larger digit in tens: 82.", "Tens place matters most.", "82."),
        q("Least using digits 2 and 8?", ["28", "82", "20", "8"], "a", "Smaller tens digit: 28.", "Compare tens.", "28."),
        q("How many ones in 44?", ["4", "40", "44", "8"], "a", "Ones digit is 4.", "Right digit.", "4 ones."),
        q("2 tens more than 15 is…", ["35", "17", "25", "13"], "a", "15 + 20 = 35.", "Add two tens.", "35."),
    ]
    return a, b


def g2_maths_addsub():
    a = [
        q("12 + 5 = ?", ["16", "17", "15", "18"], "b", "12 + 5 = 17.", "Count on five from 12.", "17."),
        q("20 − 4 = ?", ["14", "16", "24", "15"], "b", "20 − 4 = 16.", "Take away four.", "16."),
        q("15 + 10 = ?", ["25", "5", "150", "20"], "a", "15 + 10 = 25.", "Add one ten.", "25."),
        q("18 − 8 = ?", ["8", "10", "26", "9"], "b", "18 − 8 = 10.", "Take away eight.", "10."),
        q("9 + 6 = ?", ["14", "15", "16", "13"], "b", "9 + 6 = 15.", "Count on from 9.", "15."),
        q("14 − 5 = ?", ["8", "9", "10", "19"], "b", "14 − 5 = 9.", "Take away five.", "9."),
        q("Riya has 20 pencils. She gives 3. Left?", ["16", "17", "23", "15"], "b", "20 − 3 = 17.", "Subtract gifts.", "17."),
        q("7 + 8 = ?", ["14", "15", "16", "13"], "b", "7 + 8 = 15.", "Make 10 then add.", "15."),
        q("30 − 10 = ?", ["10", "20", "40", "25"], "b", "30 − 10 = 20.", "Take one ten.", "20."),
        q("11 + 11 = ?", ["21", "22", "23", "12"], "b", "11 + 11 = 22.", "Double eleven.", "22."),
        q("A pencil costs ₹8. An eraser costs ₹5. Total?", ["₹12", "₹13", "₹14", "₹3"], "b", "8 + 5 = ₹13.", "Add the prices.", "₹13."),
        q("25 − 5 = ?", ["15", "20", "30", "10"], "b", "25 − 5 = 20.", "Take away five.", "20."),
        q("16 + 4 = ?", ["19", "20", "21", "12"], "b", "16 + 4 = 20.", "Count on four.", "20."),
        q("19 − 9 = ?", ["8", "10", "28", "11"], "b", "19 − 9 = 10.", "Take away nine.", "10."),
        q("13 + 6 = ?", ["18", "19", "20", "17"], "b", "13 + 6 = 19.", "Count on from 13.", "19."),
        q("Which is correct?", ["10 − 3 = 8", "10 − 3 = 7", "10 − 3 = 6", "10 − 3 = 13"], "b", "10 − 3 = 7.", "Count back three.", "7."),
    ]
    b = [
        q("14 + 5 = ?", ["18", "19", "20", "15"], "b", "14 + 5 = 19.", "Count on five.", "19."),
        q("22 − 2 = ?", ["18", "20", "24", "12"], "b", "22 − 2 = 20.", "Take away two.", "20."),
        q("8 + 9 = ?", ["16", "17", "18", "15"], "b", "8 + 9 = 17.", "Make 10 from 8 + 2, then +7.", "17."),
        q("17 − 7 = ?", ["9", "10", "24", "11"], "b", "17 − 7 = 10.", "Take away seven.", "10."),
        q("21 + 4 = ?", ["24", "25", "26", "20"], "b", "21 + 4 = 25.", "Count on four.", "25."),
        q("15 − 6 = ?", ["8", "9", "10", "21"], "b", "15 − 6 = 9.", "Take away six.", "9."),
        q("Kabir has ₹30. He spends ₹10. Left?", ["₹10", "₹20", "₹40", "₹15"], "b", "30 − 10 = ₹20.", "Subtract spend.", "₹20."),
        q("6 + 7 = ?", ["12", "13", "14", "11"], "b", "6 + 7 = 13.", "Count on from 6.", "13."),
        q("40 − 20 = ?", ["10", "20", "60", "30"], "b", "40 − 20 = 20.", "Take two tens.", "20."),
        q("12 + 12 = ?", ["22", "24", "26", "12"], "b", "12 + 12 = 24.", "Double twelve.", "24."),
        q("A toy costs ₹15. A ball costs ₹10. Total?", ["₹20", "₹25", "₹5", "₹30"], "b", "15 + 10 = ₹25.", "Add prices.", "₹25."),
        q("28 − 8 = ?", ["18", "20", "36", "10"], "b", "28 − 8 = 20.", "Take away eight.", "20."),
        q("9 + 9 = ?", ["16", "18", "19", "17"], "b", "9 + 9 = 18.", "Double nine.", "18."),
        q("16 − 6 = ?", ["8", "10", "22", "12"], "b", "16 − 6 = 10.", "Take away six.", "10."),
        q("23 + 5 = ?", ["27", "28", "29", "18"], "b", "23 + 5 = 28.", "Count on five.", "28."),
        q("Which is correct?", ["12 + 3 = 14", "12 + 3 = 15", "12 + 3 = 16", "12 + 3 = 9"], "b", "12 + 3 = 15.", "Add three.", "15."),
    ]
    return a, b


def g2_maths_timemoney():
    a = [
        q("How many minutes are in 1 hour?", ["30", "60", "100", "24"], "b", "1 hour = 60 minutes.", "Clock face.", "60."),
        q("A clock shows 3:00. The hour hand points to…", ["12", "3", "6", "9"], "b", "At 3:00 the hour hand is on 3.", "Hour hand shorter.", "3."),
        q("₹10 + ₹5 = ?", ["₹10", "₹15", "₹20", "₹5"], "b", "10 + 5 = ₹15.", "Add the rupees.", "₹15."),
        q("There are ___ days in a week.", ["5", "6", "7", "8"], "c", "A week has 7 days.", "Sun to Sat.", "7."),
        q("Morning comes ___ night.", ["after", "before? wait — after night is morning", "never", "only in winter"], "a", "Morning comes after night.", "Day cycle.", "After night."),
        q("A ₹1 coin and a ₹2 coin make…", ["₹2", "₹3", "₹4", "₹1"], "b", "1 + 2 = ₹3.", "Add coins.", "₹3."),
        q("Half past 2 is written as…", ["2:00", "2:30", "2:15", "3:00"], "b", "Half past 2 = 2:30.", "Half hour = 30 minutes.", "2:30."),
        q("Which is more money: ₹20 or ₹12?", ["₹12", "₹20", "same", "₹0"], "b", "₹20 is more than ₹12.", "Compare amounts.", "₹20."),
        q("How many hours in a day?", ["12", "24", "60", "7"], "b", "A day has 24 hours.", "Day and night.", "24."),
        q("A notebook costs ₹10. You give ₹20. Change?", ["₹5", "₹10", "₹20", "₹0"], "b", "20 − 10 = ₹10 change.", "Subtract price.", "₹10."),
        q("The short hand on a clock is the…", ["minute hand", "hour hand", "second only always", "date"], "b", "The short hand shows the hour.", "Shorter = hour.", "Hour hand."),
        q("₹5 × 2 = ?", ["₹5", "₹10", "₹15", "₹7"], "b", "Two ₹5 make ₹10.", "5 + 5.", "₹10."),
        q("School often starts in the…", ["morning", "midnight only", "only at 3 a.m.", "never"], "a", "School often starts in the morning.", "Daytime.", "Morning."),
        q("Which coin is worth more: ₹1 or ₹5?", ["₹1", "₹5", "same", "neither"], "b", "₹5 is worth more than ₹1.", "Bigger value.", "₹5."),
        q("Quarter past 4 is…", ["4:15", "4:30", "4:45", "4:00"], "a", "Quarter past = 15 minutes past → 4:15.", "Quarter of 60 is 15.", "4:15."),
        q("You buy a pencil for ₹7 with a ₹10 note. Change?", ["₹2", "₹3", "₹7", "₹10"], "b", "10 − 7 = ₹3.", "Subtract.", "₹3."),
    ]
    b = [
        q("How many seconds in 1 minute?", ["30", "60", "100", "24"], "b", "1 minute = 60 seconds.", "Same as minutes in an hour.", "60."),
        q("A clock shows 6:00. Hour hand on…", ["12", "3", "6", "9"], "c", "At 6:00 hour hand on 6.", "Bottom of clock.", "6."),
        q("₹20 − ₹5 = ?", ["₹10", "₹15", "₹25", "₹5"], "b", "20 − 5 = ₹15.", "Take away five rupees.", "₹15."),
        q("Sunday is a day of the…", ["week", "hour", "minute", "coin"], "a", "Sunday is a day of the week.", "Seven days.", "Week."),
        q("Evening comes ___ afternoon.", ["before", "after", "never", "only underwater"], "b", "Evening comes after afternoon.", "Day order.", "After."),
        q("Three ₹2 coins make…", ["₹2", "₹4", "₹6", "₹8"], "c", "2 + 2 + 2 = ₹6.", "Three twos.", "₹6."),
        q("Half past 5 is…", ["5:00", "5:30", "5:15", "6:00"], "b", "Half past 5 = 5:30.", "30 minutes past.", "5:30."),
        q("Which is less: ₹9 or ₹19?", ["₹9", "₹19", "same", "₹90"], "a", "₹9 is less than ₹19.", "Compare.", "₹9."),
        q("Lunch time is often around…", ["noon / midday", "midnight only", "3 a.m. only", "never"], "a", "Lunch is often around midday.", "Middle of day.", "Noon."),
        q("A toy costs ₹25. You have ₹30. Can you buy it?", ["yes", "no", "only with ₹10", "never"], "a", "30 is more than 25 — yes.", "Compare money to price.", "Yes."),
        q("The long hand on a clock is the…", ["hour hand", "minute hand", "date", "year"], "b", "The long hand shows minutes.", "Longer = minutes.", "Minute hand."),
        q("₹10 + ₹10 = ?", ["₹10", "₹20", "₹30", "₹100"], "b", "10 + 10 = ₹20.", "Two tens.", "₹20."),
        q("Night comes after…", ["evening", "morning only forever", "noon forever", "never"], "a", "Night comes after evening.", "Day cycle.", "Evening."),
        q("A ₹5 note is worth ___ ₹1 coins.", ["1", "5", "10", "2"], "b", "₹5 = five ₹1 coins.", "Same value.", "5."),
        q("Quarter to 3 is…", ["2:45", "3:15", "3:45", "2:15"], "a", "Quarter to 3 = 15 minutes before 3 → 2:45.", "To means before.", "2:45."),
        q("You pay ₹50 for books costing ₹40. Change?", ["₹5", "₹10", "₹20", "₹40"], "b", "50 − 40 = ₹10.", "Subtract.", "₹10."),
    ]
    # Fix awkward explanation on a[4]
    a[4] = q(
        "Morning comes ___ night.",
        ["after", "before the sun sets", "never", "only in winter"],
        "a",
        "Morning comes after night.",
        "Think of the day cycle.",
        "Night, then morning.",
    )
    return a, b

def g2_eng_reading():
    a = [
        q('Read: "Tina waters the plants every morning." When does Tina water them?', ["at night", "every morning", "only on Sunday", "never"], "b", "The sentence says every morning.", "Find the time words.", "Every morning."),
        q('Read: "The little puppy hid under the table." Where did the puppy hide?', ["on the roof", "under the table", "in the sky", "in a cup"], "b", "Under the table — from the sentence.", "Find the place.", "Under the table."),
        q('Read: "Rohan shared his lunch with Meena." What did Rohan do?', ["hid his lunch", "shared his lunch", "threw his lunch", "sold his lunch"], "b", "He shared his lunch with Meena.", "Kind action word.", "Shared."),
        q("Why do we wear a raincoat?", ["to stay dry in rain", "to fly", "to sleep underwater", "to cook"], "a", "A raincoat keeps us dry in the rain.", "Think of wet weather.", "Stay dry."),
        q('Read: "Grandma tells stories at bedtime." When does Grandma tell stories?', ["at bedtime", "at noon only", "in maths class only", "never"], "a", "At bedtime — from the sentence.", "Time clue.", "Bedtime."),
        q('Read: "The bus was late, so Kabir ran." Why did Kabir run?', ["the bus was late", "he was sleepy", "it was a holiday", "he lost a shoe for fun"], "a", "Because the bus was late.", "So shows the reason.", "Bus was late."),
        q("Which sentence shows kindness?", ["She helped her friend.", "She broke the toy.", "She shouted angrily.", "She hid the book forever."], "a", "Helping a friend is kind.", "Pick the kind act.", "Helped."),
        q('Read: "Ants work together to carry food." What do ants do?', ["sleep all day only", "work together", "drive cars", "read novels"], "b", "They work together to carry food.", "Teamwork.", "Work together."),
        q("What is the main idea: 'Bo planted seeds. He watered them. Green shoots came up.'?", ["Bo grew plants", "Bo flew a plane", "Bo baked a cake", "Bo swam"], "a", "The lines are about growing plants.", "Seed → water → shoots.", "Grew plants."),
        q('Read: "Do not touch the hot pan." What should you do?', ["touch the pan", "not touch the hot pan", "lick the pan", "throw the pan"], "b", "Do not touch — stay safe.", "Warning words.", "Do not touch."),
        q('Read: "Leela felt proud after her race." How did Leela feel?', ["sad", "proud", "sleepy only", "angry"], "b", "Proud — from the sentence.", "Feeling word.", "Proud."),
        q("A library is a place to…", ["borrow books", "swim with sharks", "park aeroplanes", "bake only"], "a", "Libraries are for books.", "Quiet reading place.", "Books."),
        q('Read: "First wash hands. Next eat. Then play." What comes first?', ["play", "eat", "wash hands", "sleep"], "c", "First means wash hands comes first.", "Order words.", "Wash hands."),
        q('Read: "The moon looks bright tonight." What looks bright?', ["the sun", "the moon", "a shoe", "a spoon"], "b", "The moon looks bright.", "Subject of the sentence.", "Moon."),
        q("Which title fits a story about a lost kitten found at home?", ["The Kitten Comes Home", "Space Rockets", "Deep Sea Sharks", "Maths Only"], "a", "The title matches the kitten story.", "Match main idea.", "Kitten home."),
        q('Read: "Aarav closed the tap to save water." Why did Aarav close the tap?', ["to save water", "to waste water", "to make noise", "to cook rice"], "a", "To save water — from the sentence.", "Reason given.", "Save water."),
    ]
    b = [
        q('Read: "Sara feeds the sparrows on the balcony." Whom does Sara feed?', ["cats only", "sparrows", "fish in the sea", "cows"], "b", "She feeds the sparrows.", "Find the animal.", "Sparrows."),
        q('Read: "The ball rolled behind the sofa." Where is the ball?', ["behind the sofa", "on the moon", "in the fridge", "under the sea"], "a", "Behind the sofa — place words.", "Find where.", "Behind sofa."),
        q('Read: "Neha thanked the shopkeeper." What did Neha do?', ["thanked him", "ignored him", "ran without paying", "hid"], "a", "She thanked the shopkeeper.", "Polite action.", "Thanked."),
        q("Why do we use an umbrella?", ["to keep rain off", "to dig soil", "to write sums", "to sleep"], "a", "Umbrellas keep rain off us.", "Wet weather tool.", "Rain."),
        q('Read: "Papa reads the newspaper after breakfast." When does Papa read?', ["after breakfast", "before dawn only", "at midnight only", "never"], "a", "After breakfast — time clue.", "When word.", "After breakfast."),
        q('Read: "It started to rain, so we went inside." Why did they go inside?', ["it started to rain", "they were hungry only", "the TV called", "shoes were new"], "a", "Because it started to rain.", "So links reason.", "Rain."),
        q("Which sentence shows sharing?", ["He gave half his snack to his sister.", "He hid all the snacks.", "He threw snacks away.", "He sat alone angrily."], "a", "Giving half is sharing.", "Kind act.", "Shared."),
        q('Read: "Bees fly from flower to flower." What do bees do?', ["fly to flowers", "drive buses", "read books", "swim in ice"], "a", "They fly from flower to flower.", "Action in sentence.", "Fly."),
        q("Main idea: 'Mina sorted waste. She put plastic in one bin. She put paper in another.'?", ["Mina sorted waste", "Mina cooked dinner", "Mina flew kites", "Mina slept"], "a", "All lines are about sorting waste.", "Common topic.", "Sorted waste."),
        q('Read: "Look both ways before you cross." What should you do?', ["look both ways", "run with eyes closed", "sit on the road", "ignore cars"], "a", "Look both ways — safety rule.", "Before you cross.", "Look."),
        q('Read: "Kabir felt brave on stage." How did Kabir feel?', ["brave", "sleepy only", "lost forever", "angry at shoes"], "a", "Brave — feeling word.", "On stage.", "Brave."),
        q("A post office is a place to…", ["send letters", "swim", "grow rice only", "park planes"], "a", "Post offices help send letters.", "Mail place.", "Letters."),
        q('Read: "First pack the bag. Next wear shoes. Then leave." What comes last?', ["pack the bag", "wear shoes", "leave", "sleep"], "c", "Then leave — last step.", "Order words.", "Leave."),
        q('Read: "Stars twinkle in the night sky." When do stars twinkle here?', ["at night", "only at noon", "only underwater", "never"], "a", "In the night sky.", "Time/place clue.", "Night."),
        q("Best title for a story about saving a street puppy?", ["A Puppy Needs Help", "Rocket Science", "Deep Ocean", "Silent Stones"], "a", "Title matches the puppy story.", "Main idea.", "Puppy help."),
        q('Read: "Meera switched off lights to save power." Why switch off?', ["to save power", "to waste power", "to break bulbs", "to hide"], "a", "To save power — reason given.", "Why clause.", "Save power."),
    ]
    return a, b


def g2_eng_grammar():
    a = [
        q("Pick the correct sentence.", ["she go to school.", "She goes to school.", "She going to school.", "She gone to school."], "b", "She goes — singular + -s on the verb.", "One person.", "Goes."),
        q("They ___ playing in the park.", ["is", "are", "am", "be"], "b", "They takes are.", "Plural.", "Are."),
        q("Choose the past tense of walk.", ["walk", "walks", "walked", "walking"], "c", "Walked is past tense.", "Yesterday word.", "Walked."),
        q("A ___ names a person, place or thing.", ["verb", "noun", "adjective", "question"], "b", "A noun names a person, place or thing.", "Naming word.", "Noun."),
        q("Pick the describing word.", ["run", "happy", "school", "under"], "b", "Happy describes a feeling.", "Adjective.", "Happy."),
        q("I ___ finished my homework.", ["has", "have", "is", "are"], "b", "I have finished…", "I + have.", "Have."),
        q("Which needs a capital letter?", ["mumbai", "river", "pencil", "cloud"], "a", "City names: Mumbai.", "Proper noun.", "Mumbai."),
        q("We ___ to the market yesterday.", ["go", "goes", "went", "going"], "c", "Yesterday → past → went.", "Time clue.", "Went."),
        q("An adjective describes a…", ["noun", "full stop", "number only", "silence"], "a", "Adjectives describe nouns.", "Which or what kind.", "Noun."),
        q("She ___ a song now.", ["sing", "sings", "is singing", "sang"], "c", "Now → is singing.", "Present continuous.", "Is singing."),
        q("Pick the pronoun for Rani.", ["he", "she", "it", "they"], "b", "Rani is a girl → she.", "Replace the name.", "She."),
        q("This is ___ apple.", ["a", "an", "the the", "two"], "b", "An before vowel sound.", "An apple.", "An."),
        q("Which is a question word?", ["quietly", "where", "green", "slowly"], "b", "Where asks about place.", "Question word.", "Where."),
        q("The opposite of always is…", ["never", "often", "sometimes", "daily"], "a", "Never is the opposite of always.", "All the time vs not ever.", "Never."),
        q("Join: soft + ly =", ["softly", "softing", "softs", "softness"], "a", "soft + ly = softly (how).", "Adverb ending.", "Softly."),
        q("Pick the correct punctuation.", ["What is your name.", "What is your name?", "What is your name!", "what is your name"], "b", "Questions end with ?", "Asking.", "?"),
    ]
    b = [
        q("Pick the correct sentence.", ["He eat rice.", "He eats rice.", "He eating rice.", "He eated rice."], "b", "He eats — singular + -s.", "One boy.", "Eats."),
        q("We ___ ready for the test.", ["is", "am", "are", "be"], "c", "We takes are.", "Plural we.", "Are."),
        q("Past tense of jump?", ["jump", "jumps", "jumped", "jumping"], "c", "Jumped is past.", "Already happened.", "Jumped."),
        q("A verb shows an…", ["action", "colour only", "place name only", "silence"], "a", "Verbs show actions.", "Doing word.", "Action."),
        q("Pick the describing word.", ["run", "bright", "under", "and"], "b", "Bright describes something.", "Adjective.", "Bright."),
        q("She ___ done her work.", ["have", "has", "are", "am"], "b", "She has done…", "She + has.", "Has."),
        q("Which needs a capital?", ["monday", "tree", "cup", "sand"], "a", "Day names: Monday.", "Proper noun.", "Monday."),
        q("They ___ football last evening.", ["play", "plays", "played", "playing"], "c", "Last evening → past → played.", "Time clue.", "Played."),
        q("Replace 'The children' with a pronoun.", ["he", "she", "they", "it"], "c", "Children = they.", "Plural people.", "They."),
        q("He ___ reading a book now.", ["am", "is", "are", "be"], "b", "He is reading…", "Singular + continuous.", "Is."),
        q("This is ___ umbrella.", ["a", "an", "two", "an an"], "b", "An umbrella — vowel sound.", "A vs an.", "An."),
        q("Which is a question word?", ["how", "blue", "desk", "softly"], "a", "How asks about manner.", "Question word.", "How."),
        q("Opposite of early?", ["late", "soon", "quick", "near"], "a", "Late is the opposite of early.", "Time opposite.", "Late."),
        q("Join: care + ful =", ["careful", "caring", "cares", "careless"], "a", "care + ful = careful.", "Full of care.", "Careful."),
        q("Pick correct end mark: Wow, that is great__", [".", "?", "!", ","], "c", "Strong feeling → !", "Excitement.", "!"),
        q("Articles a/an/the are used before…", ["nouns", "verbs only", "full stops", "numbers only"], "a", "Articles come before nouns.", "A cat, the sun.", "Nouns."),
    ]
    return a, b


def g2_eng_words():
    a = [
        q('Word closest in meaning to "happy"?', ["sad", "glad", "angry", "tired"], "b", "Glad means nearly the same as happy.", "Feeling twin.", "Glad."),
        q('Opposite of "hot"?', ["warm", "cold", "boiling", "spicy"], "b", "Cold is the opposite of hot.", "Temperature opposite.", "Cold."),
        q("A baby dog is called a…", ["kitten", "puppy", "cub", "calf"], "b", "A baby dog is a puppy.", "Young dog.", "Puppy."),
        q("Complete: as busy as a…", ["bee", "stone", "pillow", "cloud"], "a", "As busy as a bee.", "Common phrase.", "Bee."),
        q('Which word means "very big"?', ["tiny", "huge", "thin", "soft"], "b", "Huge means very big.", "Size word.", "Huge."),
        q("Rhymes with light?", ["night", "long", "lamp", "leaf"], "a", "Night rhymes with light.", "Same ending sound.", "Night."),
        q("Compound word: sun + flower =", ["sunshine", "sunflower", "sunset", "sunlight"], "b", "sun + flower = sunflower.", "Join the parts.", "Sunflower."),
        q('Prefix un- in "unhappy" means…', ["very", "not", "again", "before"], "b", "un- means not.", "Not happy.", "Not."),
        q("Synonym of begin?", ["end", "start", "stop", "finish"], "b", "Start means nearly the same as begin.", "Meaning twin.", "Start."),
        q("Antonym of full?", ["packed", "empty", "filled", "loaded"], "b", "Empty is the opposite of full.", "Nothing inside.", "Empty."),
        q("A place where books are kept?", ["library", "kitchen only", "garage only", "garden only"], "a", "A library keeps books.", "Word meaning.", "Library."),
        q("Which word is a naming word for a person?", ["doctor", "run", "blue", "quickly"], "a", "Doctor names a person.", "Noun.", "Doctor."),
        q("Choose the polite word.", ["please", "shut up", "move it", "hey you"], "a", "Please is polite.", "Kind word.", "Please."),
        q("Plural of child?", ["childs", "children", "childes", "child"], "b", "Children is the plural of child.", "Special plural.", "Children."),
        q("Word for a person who teaches?", ["teacher", "driver only", "singer only", "painter only"], "a", "A teacher teaches.", "Job word.", "Teacher."),
        q("Homophones: pair / …", ["pear", "peer", "poor", "pour"], "a", "Pair and pear sound alike.", "Same sound, different meaning.", "Pear."),
    ]
    b = [
        q('Word closest to "fast"?', ["slow", "quick", "late", "heavy"], "b", "Quick means nearly the same as fast.", "Speed twin.", "Quick."),
        q('Opposite of "open"?', ["wide", "closed", "clear", "free"], "b", "Closed is the opposite of open.", "Shut.", "Closed."),
        q("A baby cat is called a…", ["puppy", "kitten", "cub", "chick"], "b", "A baby cat is a kitten.", "Young cat.", "Kitten."),
        q("Complete: as light as a…", ["feather", "rock", "truck", "elephant"], "a", "As light as a feather.", "Common phrase.", "Feather."),
        q('Which means "very small"?', ["huge", "tiny", "wide", "tall"], "b", "Tiny means very small.", "Size word.", "Tiny."),
        q("Rhymes with cake?", ["lake", "cook", "coat", "kick"], "a", "Lake rhymes with cake.", "-ake sound.", "Lake."),
        q("Compound: rain + bow =", ["rainbow", "raincoat", "raindrop", "rainfall"], "a", "rain + bow = rainbow.", "Join parts.", "Rainbow."),
        q('Prefix re- in "redo" means…', ["not", "again", "before", "against"], "b", "re- means again.", "Do again.", "Again."),
        q("Synonym of end?", ["begin", "finish", "start", "open"], "b", "Finish means nearly the same as end.", "Meaning twin.", "Finish."),
        q("Antonym of near?", ["close", "far", "next", "beside"], "b", "Far is the opposite of near.", "Distance.", "Far."),
        q("A place to buy food and things?", ["market", "pillow", "cloud", "dream"], "a", "A market is for buying things.", "Word meaning.", "Market."),
        q("Naming word for a place?", ["school", "run", "soft", "quickly"], "a", "School names a place.", "Noun.", "School."),
        q("Polite reply when someone helps?", ["thank you", "go away", "whatever", "no"], "a", "Thank you is polite.", "Good manners.", "Thank you."),
        q("Plural of mouse?", ["mouses", "mice", "mouse", "meese"], "b", "Mice is the plural of mouse.", "Special plural.", "Mice."),
        q("Person who drives a bus?", ["driver", "cook only", "teacher only", "doctor only"], "a", "A driver drives.", "Job word.", "Driver."),
        q("Homophones: sea / …", ["see", "say", "sit", "set"], "a", "Sea and see sound alike.", "Same sound.", "See."),
    ]
    return a, b


def g2_sci_plants():
    a = [
        q("Seeds need ___ to sprout.", ["water and warmth", "only darkness forever", "plastic", "metal"], "a", "Seeds need water and warmth to sprout.", "Baby plant wakes up.", "Water and warmth."),
        q("Leaves make food using…", ["sunlight", "moonlight only", "noise", "plastic"], "a", "Leaves use sunlight to make food.", "Green kitchen.", "Sunlight."),
        q("Roots grow mostly…", ["above the soil", "under the soil", "in the sky", "in shoes"], "b", "Roots grow under the soil.", "Hidden part.", "Under."),
        q("Which plant part becomes a fruit?", ["flower", "root hair only", "thorn only", "dead leaf"], "a", "A flower can become a fruit.", "Life cycle.", "Flower."),
        q("We eat the root of a…", ["carrot", "mango", "rose petal only", "banana skin only"], "a", "Carrot is a root we eat.", "Under soil food.", "Carrot."),
        q("The stem carries ___ up to the leaves.", ["water", "stones", "toys", "books"], "a", "The stem carries water up.", "Like a pipe.", "Water."),
        q("Plants take in carbon dioxide and give out…", ["oxygen", "plastic", "sand", "smoke only"], "a", "Plants give out oxygen.", "Fresh air.", "Oxygen."),
        q("A climber plant needs…", ["support", "wheels", "batteries", "screens"], "a", "Climbers need support to grow up.", "Weak stem.", "Support."),
        q("Which is a cereal plant?", ["wheat", "rose", "neem only", "cactus fruit only"], "a", "Wheat is a cereal plant.", "Grain food.", "Wheat."),
        q("Dry seeds stored in a jar…", ["may stay dormant", "always sprout at once", "turn into fish", "become metal"], "a", "Dry seeds can stay dormant until watered.", "Sleeping seed.", "Dormant."),
        q("Chlorophyll makes leaves look…", ["green", "blue metal", "pink always", "glass"], "a", "Chlorophyll is green.", "Leaf colour.", "Green."),
        q("Which helps scatter seeds?", ["wind and animals", "only silence", "only plastic bags", "only darkness"], "a", "Wind and animals can scatter seeds.", "Travel.", "Wind and animals."),
        q("A potato grows underground but is a…", ["stem", "flower", "leaf only", "fruit only"], "a", "Potato is an underground stem.", "Eyes grow shoots.", "Stem."),
        q("Plants in water (like lotus) are…", ["aquatic plants", "desert only", "space plants", "metal plants"], "a", "Lotus is an aquatic plant.", "Lives in water.", "Aquatic."),
        q("We should not ___ plants without care.", ["pluck or harm", "water", "give sunlight", "protect"], "a", "Do not harm plants carelessly.", "Be kind.", "Care."),
        q("Photosynthesis mainly happens in the…", ["leaf", "rock", "plastic pot only", "wire"], "a", "Photosynthesis happens in the leaf.", "Food making.", "Leaf."),
    ]
    b = [
        q("A seedling is a…", ["young plant", "old tree only", "dead leaf", "stone"], "a", "A seedling is a young plant.", "Just sprouted.", "Young."),
        q("Flowers attract insects with…", ["colour and smell", "noise machines", "plastic toys", "metal"], "a", "Colour and smell attract insects.", "Bees visit.", "Colour and smell."),
        q("Which part holds the plant upright?", ["stem", "petal only", "seed coat only", "nectar"], "a", "The stem holds the plant up.", "Support.", "Stem."),
        q("Mango seed is found…", ["inside the fruit", "in the leaf tip only", "in the air only", "in a stone always"], "a", "The seed is inside the mango fruit.", "Cut and see.", "Inside."),
        q("We eat the leaf of…", ["spinach", "carrot root only", "potato only", "coconut shell only"], "a", "Spinach leaves are eaten.", "Green leafy.", "Spinach."),
        q("Plants need air, water and…", ["sunlight", "TV", "phones", "petrol"], "a", "Sunlight is needed with air and water.", "Grow needs.", "Sunlight."),
        q("A cactus stores water in its…", ["stem", "flower only", "roots only always", "seeds only"], "a", "Cactus stems store water.", "Dry place plant.", "Stem."),
        q("Which is NOT a plant need?", ["video games", "water", "light", "air"], "a", "Video games are not a plant need.", "Odd one out.", "Games."),
        q("Trees help us by giving…", ["shade and air", "only noise", "only smoke", "only plastic"], "a", "Trees give shade and help the air.", "Useful trees.", "Shade and air."),
        q("Germination means a seed…", ["starts to grow", "turns to metal", "flies to space", "becomes a fish"], "a", "Germination is when a seed starts to grow.", "Sprouting.", "Grow."),
        q("The green food made by leaves travels through the…", ["stem", "only the soil forever", "only the sky", "only wires"], "a", "Food moves through the stem.", "Plant pipes.", "Stem."),
        q("Which plant grows in water?", ["lotus", "cactus", "desert thorn only", "pine on dry rock only"], "a", "Lotus grows in water.", "Aquatic.", "Lotus."),
        q("Farmers grow plants for…", ["food", "only noise", "only dust", "only plastic"], "a", "Farmers grow plants for food.", "Crops.", "Food."),
        q("Fallen leaves can become…", ["compost over time", "glass", "metal", "plastic"], "a", "Leaves can break down into compost.", "Soil food.", "Compost."),
        q("A tendril helps a plant to…", ["climb", "swim", "bark", "fly planes"], "a", "Tendrils help plants climb.", "Hold support.", "Climb."),
        q("Without sunlight for long, a green plant may…", ["become weak", "turn into a car", "start singing", "become a fish"], "a", "No light → plant becomes weak.", "Needs light.", "Weak."),
    ]
    return a, b


def g2_sci_animals():
    a = [
        q("Animals that eat only plants are…", ["herbivores", "carnivores", "machines", "rocks"], "a", "Herbivores eat plants.", "Cow, goat, deer.", "Herbivore."),
        q("Animals that eat other animals are…", ["herbivores", "carnivores", "plants", "stones"], "b", "Carnivores eat other animals.", "Lion, tiger.", "Carnivore."),
        q("Birds have ___ to fly.", ["wings", "fins only", "roots", "wheels"], "a", "Birds use wings to fly.", "Flight.", "Wings."),
        q("Fish breathe with…", ["lungs like us always", "gills", "leaves", "noses only"], "b", "Fish breathe with gills.", "In water.", "Gills."),
        q("A cow is a…", ["herbivore", "carnivore", "bird", "insect"], "a", "Cows eat grass — herbivores.", "Plant eater.", "Herbivore."),
        q("Which animal may hibernate in cold?", ["bear", "fish in fire", "eagle always", "ant always"], "a", "Some bears hibernate in cold weather.", "Long sleep.", "Bear."),
        q("Insects usually have ___ legs.", ["4", "6", "8", "2"], "b", "Insects have 6 legs.", "Count insect legs.", "Six."),
        q("A frog’s young one is a…", ["tadpole", "puppy", "kitten", "cub"], "a", "A young frog is a tadpole.", "Pond life.", "Tadpole."),
        q("Animals need food, water and…", ["air and shelter", "only screens", "only plastic", "only noise"], "a", "Animals need air and shelter too.", "Living needs.", "Air and shelter."),
        q("Which is an omnivore?", ["human", "cow only", "tiger only", "deer only"], "a", "Humans can eat plants and animals.", "Mixed diet.", "Omnivore."),
        q("Camels store fat in their…", ["humps", "fins", "wings", "beaks"], "a", "Camels have humps with fat.", "Desert animal.", "Hump."),
        q("Which animal gives wool?", ["sheep", "fish", "frog", "eagle"], "a", "Sheep give wool.", "Warm fibre.", "Sheep."),
        q("Nocturnal animals are active at…", ["night", "only noon", "only in class", "never"], "a", "Nocturnal means active at night.", "Owl, bat.", "Night."),
        q("A nest is a home for…", ["birds", "fish only always", "worms in space", "cars"], "a", "Birds live in nests.", "Home.", "Birds."),
        q("Endangered animals need…", ["protection", "more hunting", "less forests forever", "noise only"], "a", "Endangered animals need protection.", "Keep safe.", "Protect."),
        q("Which has a backbone?", ["dog", "jellyfish", "worm", "ant"], "a", "A dog has a backbone.", "Skeleton inside.", "Dog."),
    ]
    b = [
        q("Deer eat plants, so they are…", ["herbivores", "carnivores", "cars", "rocks"], "a", "Deer are herbivores.", "Plant diet.", "Herbivore."),
        q("A tiger is a…", ["herbivore", "carnivore", "plant", "insect only"], "b", "Tigers eat meat — carnivores.", "Hunter.", "Carnivore."),
        q("Ducks have ___ feet for swimming.", ["webbed", "wheels", "roots", "claws only"], "a", "Webbed feet help ducks swim.", "Water bird.", "Webbed."),
        q("Whales are…", ["mammals that live in water", "fish with scales only", "insects", "birds"], "a", "Whales are water mammals.", "Not true fish.", "Mammal."),
        q("Honey is made by…", ["bees", "cows", "sheep", "hens"], "a", "Bees make honey.", "From nectar.", "Bees."),
        q("Migration means animals…", ["travel with seasons", "never move", "turn to stone", "become plants"], "a", "Migration is seasonal travel.", "Birds fly far.", "Travel."),
        q("Spiders have ___ legs.", ["6", "8", "4", "2"], "b", "Spiders have 8 legs.", "Count carefully.", "Eight."),
        q("A caterpillar can become a…", ["butterfly", "frog", "fish", "bird nest"], "a", "Caterpillar becomes a butterfly.", "Life cycle.", "Butterfly."),
        q("Pets need regular…", ["food and care", "neglect", "only screens", "only noise"], "a", "Pets need food and care.", "Be kind.", "Care."),
        q("Which animal lives in a burrow?", ["rabbit", "eagle only", "whale", "shark"], "a", "Rabbits may live in burrows.", "Hole home.", "Rabbit."),
        q("Elephants use their trunks to…", ["pick food and drink", "fly", "lay eggs", "make honey"], "a", "Trunks help pick food and drink.", "Useful nose.", "Trunk."),
        q("Silk comes from…", ["silkworm", "cow", "goat", "hen"], "a", "Silkworms give silk.", "Thread.", "Silkworm."),
        q("Animals that are active by day are…", ["diurnal", "nocturnal only", "made of metal", "plants"], "a", "Diurnal means active by day.", "Opposite of nocturnal.", "Day."),
        q("A hive is a home for…", ["bees", "lions", "whales", "cows"], "a", "Bees live in a hive.", "Bee home.", "Bees."),
        q("We should not ___ wild animals.", ["hurt or tease", "respect", "learn about carefully", "protect"], "a", "Do not hurt wild animals.", "Be safe and kind.", "Do not hurt."),
        q("Which animal lays eggs?", ["hen", "dog", "cat", "cow"], "a", "Hens lay eggs.", "Bird.", "Hen."),
    ]
    return a, b


def g2_sci_airwater():
    a = [
        q("We need ___ to breathe.", ["air", "stones", "plastic", "noise"], "a", "We breathe air.", "Life need.", "Air."),
        q("Moving air is called…", ["wind", "soil", "fire", "metal"], "a", "Moving air is wind.", "Feel it on your face.", "Wind."),
        q("Water can be liquid, solid (ice) or…", ["gas or vapour", "metal", "plastic", "wood"], "a", "Water can become vapour (gas).", "Three forms.", "Vapour."),
        q("Ice is water in the ___ form.", ["solid", "liquid only", "gas only", "plastic"], "a", "Ice is solid water.", "Frozen.", "Solid."),
        q("We should drink ___ water.", ["clean", "dirty", "salty sea only", "muddy"], "a", "Drink clean water.", "Health.", "Clean."),
        q("Rain comes from…", ["clouds", "stones", "plastic bags", "shoes"], "a", "Rain falls from clouds.", "Water cycle.", "Clouds."),
        q("Boiling water can turn into…", ["steam or vapour", "sand", "glass", "iron"], "a", "Boiling makes steam.", "Heat change.", "Steam."),
        q("Air is all around us but we usually…", ["cannot see it", "can eat it like bread", "paint it only", "hold it easily always"], "a", "Air is invisible.", "We feel it as wind.", "Cannot see."),
        q("Saving water means…", ["not wasting it", "leaving taps open", "polluting rivers", "throwing bottles in drains"], "a", "Saving water means not wasting it.", "Close the tap.", "Do not waste."),
        q("A breeze is…", ["gentle wind", "a rock", "a fire", "a fruit"], "a", "A breeze is a gentle wind.", "Soft moving air.", "Gentle."),
        q("Fish need ___ in water to live.", ["oxygen in the water", "plastic", "sand only", "fire"], "a", "Fish need oxygen in water.", "Gills help.", "Oxygen."),
        q("Puddles dry up because water…", ["evaporates", "turns to stone", "freezes always", "becomes metal"], "a", "Water evaporates into air.", "Sun helps.", "Evaporates."),
        q("Which is a use of water?", ["drinking and cleaning", "only flying planes", "only making noise", "only making plastic"], "a", "We drink and clean with water.", "Daily use.", "Drink and clean."),
        q("Smoke and dust can make air…", ["dirty or polluted", "sweeter always", "made of gold", "silent forever"], "a", "Smoke and dust pollute air.", "Hard to breathe.", "Polluted."),
        q("Clouds are made of tiny…", ["water droplets", "stones", "plastic bits only", "metal sheets"], "a", "Clouds hold tiny water droplets.", "Sky water.", "Droplets."),
        q("Cover food and water to keep them…", ["clean and safe", "dirty", "hot always", "salty always"], "a", "Covering keeps food and water safe.", "Hygiene.", "Clean."),
    ]
    b = [
        q("Wind can help…", ["dry clothes and fly kites", "grow rocks overnight", "turn air into gold", "stop the sun"], "a", "Wind dries clothes and flies kites.", "Useful air.", "Dry and kites."),
        q("Steam is water as a…", ["gas", "solid only", "plastic", "metal"], "a", "Steam is water vapour (gas).", "From boiling.", "Gas."),
        q("We get much of our drinking water from…", ["rivers and taps after cleaning", "only from fire", "only from plastic smoke", "only from sand"], "a", "Water often comes from rivers, cleaned for taps.", "Safe water.", "Rivers and taps."),
        q("Ice melts into…", ["liquid water", "smoke plastic", "sand", "wood"], "a", "Ice melts to liquid water.", "Heat softens ice.", "Water."),
        q("A strong wind storm can be…", ["dangerous", "always safe under trees", "made of candy", "silent always"], "a", "Storms can be dangerous — stay safe.", "Strong wind.", "Dangerous."),
        q("Plants also need ___ from air.", ["gases from air", "plastic bags", "metal sheets", "screens"], "a", "Plants use air gases too.", "Living need.", "Air."),
        q("Closing the tap while brushing…", ["saves water", "wastes water", "makes more rain instantly", "stops air"], "a", "Closing the tap saves water.", "Good habit.", "Saves."),
        q("Fog is tiny water drops in the…", ["air near the ground", "only underground always", "only in books", "only in shoes"], "a", "Fog is tiny drops in air near the ground.", "Misty air.", "Air."),
        q("Dirty water can make us…", ["ill", "fly", "grow taller instantly", "turn invisible"], "a", "Dirty water can make us ill.", "Drink clean water.", "Ill."),
        q("Air takes up…", ["space", "no space ever", "only colour", "only taste"], "a", "Air takes up space — fill a balloon.", "Even if unseen.", "Space."),
        q("The water cycle includes rain, clouds and…", ["evaporation", "plastic making", "metal melting only", "noise"], "a", "Evaporation is part of the water cycle.", "Sun lifts water.", "Evaporation."),
        q("We should not throw rubbish into…", ["rivers and lakes", "dustbins", "recycling bins", "compost carefully"], "a", "Do not throw rubbish into rivers.", "Keep water clean.", "Rivers."),
        q("A fan moves…", ["air", "stones", "water from wells always", "soil only"], "a", "A fan moves air.", "Feel the breeze.", "Air."),
        q("Snow is water in a ___ form.", ["solid", "liquid only", "gas only", "plastic"], "a", "Snow is solid water.", "Cold weather.", "Solid."),
        q("Clean air is important for…", ["healthy breathing", "making more dust", "stopping rain forever", "hiding the sun"], "a", "Clean air helps healthy breathing.", "Lungs.", "Breathing."),
        q("Boil water to help make it…", ["safer to drink when advised", "dirtier", "into plastic", "into sand"], "a", "Boiling can make water safer.", "Kills germs.", "Safer."),
    ]
    return a, b


def L(title, emoji, visual, speak, cards, try_prompt, try_opts, try_ans, try_why, bullets):
    return dict(
        title=title, emoji=emoji, visual=visual, speak=speak, cards=cards,
        try_q={"prompt": try_prompt, "options": try_opts, "answerId": try_ans, "why": try_why},
        bullets=bullets,
    )


def build_chapters():
    return [
        dict(grade=1, subject="Maths", kind="maths", md="maths-ch01-numbers.md", ts="g1-maths-numbers.ts",
             export="g1MathsNumbers", prefix="g1-maths-numbers",
             meta={"id": "numbers", "title": "Numbers", "emoji": "🔢", "blurb": "Count, compare & order", "topic": "numbers", "paperTopics": ["numbers", "add-sub"]},
             lesson=L("Numbers", "🔢", "number-line", "Numbers help us count and compare.",
                      [("Count", "Say numbers in order", "1️⃣"), ("Compare", "Which is more?", "⚖️"), ("Order", "Small to big", "📶")],
                      "Which is bigger: 4 or 9?", [("a", "4"), ("b", "9"), ("c", "same"), ("d", "0")], "b", "9 is more than 4.",
                      ["Count in order", "Compare sizes", "Sets ready — 16 each"]),
             bank=g1_maths_numbers),
        dict(grade=1, subject="Maths", kind="maths", md="maths-ch02-add.md", ts="g1-maths-add.ts",
             export="g1MathsAdd", prefix="g1-maths-add",
             meta={"id": "add", "title": "Add", "emoji": "➕", "blurb": "Put groups together", "topic": "add-sub", "paperTopics": ["add-sub", "numbers"]},
             lesson=L("Add", "➕", "number-line", "Adding puts groups together.",
                      [("Add", "Put together", "➕"), ("Zero", "Adding 0 changes nothing", "0️⃣"), ("Count on", "Start and count forward", "👉")],
                      "2 + 3 = ?", [("a", "4"), ("b", "5"), ("c", "6"), ("d", "3")], "b", "2 + 3 = 5.",
                      ["Put groups together", "Count on", "Sets ready — 16 each"]),
             bank=g1_maths_add),
        dict(grade=1, subject="Maths", kind="maths", md="maths-ch03-shapes.md", ts="g1-maths-shapes.ts",
             export="g1MathsShapes", prefix="g1-maths-shapes",
             meta={"id": "shapes", "title": "Shapes", "emoji": "🔷", "blurb": "Circle, square & more", "topic": "shapes", "paperTopics": ["shapes", "numbers"]},
             lesson=L("Shapes", "🔷", "none", "Shapes are all around us.",
                      [("Circle", "Round, no corners", "⚪"), ("Triangle", "3 sides", "🔺"), ("Square", "4 equal sides", "⬛")],
                      "How many sides does a triangle have?", [("a", "2"), ("b", "3"), ("c", "4"), ("d", "5")], "b", "A triangle has 3 sides.",
                      ["Name the shape", "Count sides", "Sets ready — 16 each"]),
             bank=g1_maths_shapes),
        dict(grade=1, subject="English", kind="english", md="english-ch01-letters-words.md", ts="g1-english-letters.ts",
             export="g1EnglishLetters", prefix="g1-eng-letters",
             meta={"id": "letters-words", "title": "Letters & Words", "emoji": "🔤", "blurb": "Sounds, letters & words", "topic": "vocabulary", "paperTopics": ["vocabulary", "grammar"]},
             lesson=L("Letters & Words", "🔤", "word-cards", "Letters make words.",
                      [("Letter", "A B C…", "🔠"), ("Sound", "First sound of a word", "🔊"), ("Word", "Letters joined", "📖")],
                      'Which letter starts "sun"?', [("a", "s"), ("b", "t"), ("c", "m"), ("d", "b")], "a", "Sun starts with s.",
                      ["Hear the sound", "Build the word", "Sets ready — 16 each"]),
             bank=g1_eng_letters),
        dict(grade=1, subject="English", kind="english", md="english-ch02-reading-pics.md", ts="g1-english-reading.ts",
             export="g1EnglishReading", prefix="g1-eng-reading",
             meta={"id": "reading-pics", "title": "Reading Pictures", "emoji": "🖼️", "blurb": "Picture clues & short lines", "topic": "comprehension", "paperTopics": ["comprehension", "vocabulary"]},
             lesson=L("Reading Pictures", "🖼️", "sentence", "Pictures and words tell stories.",
                      [("Look", "See the picture", "👀"), ("Read", "Find key words", "🔎"), ("Answer", "Use what you saw", "✅")],
                      'Read: "The cat sits." What sits?', [("a", "dog"), ("b", "cat"), ("c", "bus"), ("d", "cup")], "b", "The cat sits.",
                      ["Use picture clues", "Find key words", "Sets ready — 16 each"]),
             bank=g1_eng_reading),
        dict(grade=1, subject="English", kind="english", md="english-ch03-simple-grammar.md", ts="g1-english-grammar.ts",
             export="g1EnglishGrammar", prefix="g1-eng-grammar",
             meta={"id": "simple-grammar", "title": "Simple Grammar", "emoji": "✏️", "blurb": "a/an, is/are & capitals", "topic": "grammar", "paperTopics": ["grammar", "vocabulary"]},
             lesson=L("Simple Grammar", "✏️", "sentence", "Little rules make clear sentences.",
                      [("Capital", "Start with a big letter", "🔠"), ("a / an", "an before vowel sounds", "🅰️"), ("is / are", "Match one or many", "🔗")],
                      "We say ___ egg.", [("a", "a"), ("b", "an"), ("c", "two"), ("d", "the the")], "b", "An egg — vowel sound.",
                      ["Start with a capital", "Match is/are", "Sets ready — 16 each"]),
             bank=g1_eng_grammar),
        dict(grade=1, subject="Science", kind="science", md="science-ch01-plants.md", ts="g1-science-plants.ts",
             export="g1SciencePlants", prefix="g1-sci-plants",
             meta={"id": "plants", "title": "Plants", "emoji": "🌱", "blurb": "Roots, leaves & seeds", "topic": "living-things", "paperTopics": ["living-things", "human-body"]},
             lesson=L("Plants", "🌱", "plant", "Plants have parts with jobs.",
                      [("Root", "Drinks water under soil", "🪴"), ("Leaf", "Makes food", "🍃"), ("Seed", "Grows a new plant", "🌱")],
                      "Which part grows under the soil?", [("a", "leaf"), ("b", "root"), ("c", "flower"), ("d", "fruit")], "b", "Roots grow under the soil.",
                      ["Name plant parts", "Leaves make food", "Sets ready — 16 each"]),
             bank=g1_sci_plants),
        dict(grade=1, subject="Science", kind="science", md="science-ch02-animals.md", ts="g1-science-animals.ts",
             export="g1ScienceAnimals", prefix="g1-sci-animals",
             meta={"id": "animals", "title": "Animals", "emoji": "🐾", "blurb": "Pets, farms & wild friends", "topic": "living-things", "paperTopics": ["living-things", "human-body"]},
             lesson=L("Animals", "🐾", "none", "Animals live in many places.",
                      [("Pet", "Lives with us", "🐶"), ("Farm", "Gives milk or eggs", "🐄"), ("Wild", "Lives in forests", "🐯")],
                      "Which animal says meow?", [("a", "dog"), ("b", "cat"), ("c", "cow"), ("d", "hen")], "b", "A cat says meow.",
                      ["Know animal homes", "Be kind to animals", "Sets ready — 16 each"]),
             bank=g1_sci_animals),
        dict(grade=1, subject="Science", kind="science", md="science-ch03-my-body.md", ts="g1-science-body.ts",
             export="g1ScienceBody", prefix="g1-sci-body",
             meta={"id": "my-body", "title": "My Body", "emoji": "🧍", "blurb": "Senses & staying healthy", "topic": "human-body", "paperTopics": ["human-body", "living-things"]},
             lesson=L("My Body", "🧍", "none", "Our body helps us sense the world.",
                      [("Eyes", "See", "👁️"), ("Ears", "Hear", "👂"), ("Hands", "Touch and hold", "✋")],
                      "We see with our…", [("a", "ears"), ("b", "eyes"), ("c", "nose"), ("d", "toes")], "b", "We see with our eyes.",
                      ["Know sense organs", "Stay clean and strong", "Sets ready — 16 each"]),
             bank=g1_sci_body),
        dict(grade=2, subject="Maths", kind="maths", md="maths-ch01-place-value.md", ts="g2-maths-place-value.ts",
             export="g2MathsPlaceValue", prefix="g2-maths-place",
             meta={"id": "place-value", "title": "Place Value", "emoji": "🧱", "blurb": "Tens and ones", "topic": "numbers", "paperTopics": ["numbers", "add-sub"]},
             lesson=L("Place Value", "🧱", "place-value", "Tens and ones build numbers.",
                      [("Tens", "Bundles of 10", "🔟"), ("Ones", "Loose ones", "1️⃣"), ("Value", "Digit times place", "✨")],
                      "In 47, digit 4 means…", [("a", "4 ones"), ("b", "4 tens"), ("c", "47 tens"), ("d", "7 tens")], "b", "4 is in the tens place.",
                      ["Tens and ones", "Expand the number", "Sets ready — 16 each"]),
             bank=g2_maths_place),
        dict(grade=2, subject="Maths", kind="maths", md="maths-ch02-add-subtract.md", ts="g2-maths-add-subtract.ts",
             export="g2MathsAddSubtract", prefix="g2-maths-addsub",
             meta={"id": "add-subtract", "title": "Add & Subtract", "emoji": "🧮", "blurb": "Within 40 — put together & take away", "topic": "add-sub", "paperTopics": ["add-sub", "numbers"]},
             lesson=L("Add & Subtract", "🧮", "number-line", "Add puts together. Subtract takes away.",
                      [("Add", "More altogether", "➕"), ("Subtract", "Take away", "➖"), ("Check", "Count carefully", "✅")],
                      "12 + 5 = ?", [("a", "16"), ("b", "17"), ("c", "15"), ("d", "18")], "b", "12 + 5 = 17.",
                      ["Add or take away", "Use rupee stories too", "Sets ready — 16 each"]),
             bank=g2_maths_addsub),
        dict(grade=2, subject="Maths", kind="maths", md="maths-ch03-time-money.md", ts="g2-maths-time-money.ts",
             export="g2MathsTimeMoney", prefix="g2-maths-timemoney",
             meta={"id": "time-money", "title": "Time & Money", "emoji": "🕒", "blurb": "Clocks and rupees", "topic": "measurement", "paperTopics": ["measurement", "add-sub"]},
             lesson=L("Time & Money", "🕒", "none", "Clocks tell time. Coins and notes are money.",
                      [("Hour", "Short hand", "🕐"), ("Minutes", "Long hand", "⏱️"), ("Rupees", "Money in rupees", "💰")],
                      "10 rupees + 5 rupees = ?", [("a", "10 rupees"), ("b", "15 rupees"), ("c", "20 rupees"), ("d", "5 rupees")], "b", "10 + 5 = 15 rupees.",
                      ["Read the clock", "Add and give change in rupees", "Sets ready — 16 each"]),
             bank=g2_maths_timemoney),
        dict(grade=2, subject="English", kind="english", md="english-ch01-reading.md", ts="g2-english-reading.ts",
             export="g2EnglishReading", prefix="g2-eng-reading",
             meta={"id": "reading", "title": "Reading", "emoji": "📖", "blurb": "Short passages & clues", "topic": "comprehension", "paperTopics": ["comprehension", "vocabulary"]},
             lesson=L("Reading", "📖", "sentence", "Answers hide in the lines.",
                      [("Read", "Look at every word", "👀"), ("Find", "Hunt the clue", "🔎"), ("Decide", "Pick what the text says", "✅")],
                      'Read: "Bo ran home." What did Bo do?', [("a", "slept"), ("b", "ran home"), ("c", "flew"), ("d", "hid")], "b", "Bo ran home.",
                      ["Clue in the text", "No wild guesses", "Sets ready — 16 each"]),
             bank=g2_eng_reading),
        dict(grade=2, subject="English", kind="english", md="english-ch02-grammar.md", ts="g2-english-grammar.ts",
             export="g2EnglishGrammar", prefix="g2-eng-grammar",
             meta={"id": "grammar", "title": "Grammar", "emoji": "✏️", "blurb": "Nouns, verbs & tenses", "topic": "grammar", "paperTopics": ["grammar", "vocabulary"]},
             lesson=L("Grammar", "✏️", "sentence", "Grammar helps sentences fit.",
                      [("Noun", "Names a thing", "📦"), ("Verb", "Shows action", "🏃"), ("Tense", "When it happened", "🕒")],
                      "They ___ playing.", [("a", "is"), ("b", "are"), ("c", "am"), ("d", "be")], "b", "They are playing.",
                      ["Match subject and verb", "Watch time words", "Sets ready — 16 each"]),
             bank=g2_eng_grammar),
        dict(grade=2, subject="English", kind="english", md="english-ch03-words.md", ts="g2-english-words.ts",
             export="g2EnglishWords", prefix="g2-eng-words",
             meta={"id": "words", "title": "Words", "emoji": "💬", "blurb": "Meanings, opposites & word parts", "topic": "vocabulary", "paperTopics": ["vocabulary", "grammar"]},
             lesson=L("Words", "💬", "word-cards", "Words can be twins or opposites.",
                      [("Synonym", "Nearly same meaning", "😊"), ("Antonym", "Opposite", "🔀"), ("Parts", "Prefixes help", "🧩")],
                      'Closest to "happy"?', [("a", "sad"), ("b", "glad"), ("c", "angry"), ("d", "tired")], "b", "Glad means nearly the same as happy.",
                      ["Same or opposite?", "Use word parts", "Sets ready — 16 each"]),
             bank=g2_eng_words),
        dict(grade=2, subject="Science", kind="science", md="science-ch01-plants.md", ts="g2-science-plants.ts",
             export="g2SciencePlants", prefix="g2-sci-plants",
             meta={"id": "plants", "title": "Plants", "emoji": "🌿", "blurb": "Seeds, food & plant jobs", "topic": "living-things", "paperTopics": ["living-things", "water-cycle"]},
             lesson=L("Plants", "🌿", "plant", "Seeds sprout. Leaves make food.",
                      [("Seed", "Starts a plant", "🌱"), ("Leaf", "Makes food with light", "🍃"), ("Stem", "Carries water", "🎋")],
                      "Seeds need ___ to sprout.", [("a", "water and warmth"), ("b", "plastic"), ("c", "noise"), ("d", "metal")], "a", "Water and warmth help seeds sprout.",
                      ["Know plant jobs", "Care for plants", "Sets ready — 16 each"]),
             bank=g2_sci_plants),
        dict(grade=2, subject="Science", kind="science", md="science-ch02-animals.md", ts="g2-science-animals.ts",
             export="g2ScienceAnimals", prefix="g2-sci-animals",
             meta={"id": "animals", "title": "Animals", "emoji": "🦁", "blurb": "Food habits & homes", "topic": "living-things", "paperTopics": ["living-things", "human-body"]},
             lesson=L("Animals", "🦁", "none", "Animals eat different foods.",
                      [("Herbivore", "Eats plants", "🐄"), ("Carnivore", "Eats animals", "🐯"), ("Home", "Nest, hive, burrow", "🏠")],
                      "Animals that eat only plants are…", [("a", "herbivores"), ("b", "carnivores"), ("c", "machines"), ("d", "rocks")], "a", "Herbivores eat plants.",
                      ["Food habits", "Homes matter", "Sets ready — 16 each"]),
             bank=g2_sci_animals),
        dict(grade=2, subject="Science", kind="science", md="science-ch03-air-water.md", ts="g2-science-air-water.ts",
             export="g2ScienceAirWater", prefix="g2-sci-airwater",
             meta={"id": "air-water", "title": "Air & Water", "emoji": "💧", "blurb": "Wind, rain & clean habits", "topic": "water-cycle", "paperTopics": ["water-cycle", "living-things"]},
             lesson=L("Air & Water", "💧", "water-cycle", "Air and water keep us alive.",
                      [("Air", "We breathe it", "🌬️"), ("Water", "Drink clean water", "💧"), ("Save", "Do not waste", "🛟")],
                      "Moving air is called…", [("a", "wind"), ("b", "soil"), ("c", "fire"), ("d", "metal")], "a", "Moving air is wind.",
                      ["Breathe clean air", "Save water", "Sets ready — 16 each"]),
             bank=g2_sci_airwater),
    ]


def emit_hint_pack(grade: int, subject: str, chunks: list):
    subj_key = subject.lower()
    export = "G%d_%s_HINTS" % (grade, subj_key.upper())
    path = HINTS / ("g%d-%s.ts" % (grade, subj_key))
    lines = [
        'import type { HintOverlay } from "./types";',
        "",
        "/** Grade %d %s item-specific hints (overlay) */" % (grade, subject),
        "export const %s: Record<string, HintOverlay> = {" % export,
    ]
    total = 0
    for qs in chunks:
        for item in qs:
            lines.append("  %s: %s," % (json.dumps(item["id"]), json.dumps(item["hints"])))
            total += 1
    lines.append("};")
    lines.append("")
    path.write_text("\n".join(lines), encoding="utf-8")
    print("Wrote", path.relative_to(REPO), "entries=", total)
    return export, total


def main():
    DOCS1.mkdir(parents=True, exist_ok=True)
    DOCS2.mkdir(parents=True, exist_ok=True)
    chapters = build_chapters()
    hint_buckets = {}
    counts = {"chapters": 0, "questions": 0}

    for ch in chapters:
        a_raw, b_raw = ch["bank"]()
        assert len(a_raw) == 16 and len(b_raw) == 16, (ch["prefix"], len(a_raw), len(b_raw))
        set_a = stamp(a_raw, ch["prefix"], "a")
        set_b = stamp(b_raw, ch["prefix"], "b")
        docs = DOCS1 if ch["grade"] == 1 else DOCS2
        write_md(docs / ch["md"], ch["meta"]["title"], ch["grade"], ch["subject"], ch["meta"]["id"], set_a, set_b, ch["kind"])

        lesson = lesson_ts(
            ch["lesson"]["title"],
            ch["lesson"]["emoji"],
            ch["lesson"]["visual"],
            ch["lesson"]["speak"],
            ch["lesson"]["cards"],
            ch["lesson"]["try_q"],
            ch["lesson"]["bullets"],
        )
        emit_module(
            OUT / ch["ts"],
            ch["export"],
            ch["meta"],
            lesson,
            with_boilerplate(set_a),
            with_boilerplate(set_b),
        )
        key = (ch["grade"], ch["subject"])
        hint_buckets.setdefault(key, []).append(set_a + set_b)
        counts["chapters"] += 1
        counts["questions"] += 32

    for (grade, subject), chunks in sorted(hint_buckets.items()):
        emit_hint_pack(grade, subject, chunks)

    print("DONE chapters=%d questions=%d" % (counts["chapters"], counts["questions"]))


if __name__ == "__main__":
    main()
