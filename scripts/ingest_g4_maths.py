#!/usr/bin/env python3
"""Ingest Grade 4 Maths writer files (sof-maths/grade-4). Usage: python3 scripts/ingest_g4_maths.py
Set A/B parsed from markdown and validated against the Answer Key table."""
from pathlib import Path
import re, sys
sys.path.insert(0, str(Path(__file__).parent))
from ingest_lib import ROOT, OUT, DOCS, maths_sets, emit_module

LESSON_LARGE = r'''const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "🏟️",
    title: "Big numbers all around us",
    body: [
      "A big cricket stadium can hold 40,000 people!",
      "Today we read, write and play with big numbers.",
      "Lesson is optional; jump to a set anytime.",
    ],
    cta: "Let's go!",
    visual: "place-value",
    speak: "A big cricket stadium can hold forty thousand people! That is a large number. Today, let's read, write and play with big numbers.",
  },
  {
    id: "r1",
    type: "reveal",
    title: "The place value chart",
    lead: "Each place is worth ten times the place on its right. Tap each place for 46,215.",
    visual: "place-value",
    speak: "Each place is worth ten times the place on its right. Nine thousand nine hundred ninety-nine plus one is ten thousand!",
    cards: [
      { label: "Ten thousands", reveal: "4 → 40,000", emoji: "🏆" },
      { label: "Thousands", reveal: "6 → 6,000", emoji: "💯" },
      { label: "Hundreds", reveal: "2 → 200", emoji: "🔟" },
      { label: "Tens", reveal: "1 → 10", emoji: "➕" },
      { label: "Ones", reveal: "5 → 5", emoji: "1️⃣" },
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: "Face value, place value, expanded form",
    visual: "place-value",
    speak: "Face value is just the digit. Place value depends on where it sits. In thirty-seven thousand five hundred eighty-two, the seven is worth seven thousand. Expanded form breaks a number into the worth of each digit. Zero holds an empty place, but we don't say it aloud.",
    steps: [
      "Face value of 7 in 37,582 is 7",
      "Place value of 7 in 37,582 is 7,000",
      "46,083 = 40,000 + 6,000 + 80 + 3",
      "Name: forty-six thousand eighty-three (zero not spoken)",
    ],
    punchline: "Same digit, different place → different value.",
  },
  {
    id: "t1",
    type: "try",
    title: "Your turn",
    prompt: "What is the place value of 5 in 25,309?",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "500" },
      { id: "c", text: "5,000" },
      { id: "d", text: "50,000" },
    ],
    answerId: "c",
    why: "The 5 sits in the thousands place → 5,000.",
    visual: "place-value",
    speak: "What is the place value of five in twenty-five thousand three hundred nine?",
  },
  {
    id: "d2",
    type: "demo",
    title: "Compare, make, round",
    visual: "number-line",
    speak: "More digits means a bigger number. Same number of digits? Compare from the left. For the greatest number put the biggest digit first; for the smallest, start with the smallest digit, but never zero. Rounding: look at the digit just to the right. Five or more, round up. Less than five, round down.",
    steps: [
      "More digits → bigger; same digits → compare from the left",
      "48,390 > 48,309 (tens: 9 beats 0)",
      "Smallest 4-digit from 3, 0, 8, 5 → 3,058 (zero never first)",
      "6,472 to the nearest hundred → 6,500 (7 is 5 or more)",
    ],
    punchline: "Look left to compare; look right to round.",
  },
  {
    id: "r2",
    type: "reveal",
    title: "Before, after & one lakh",
    lead: "Tap each card.",
    visual: "number-line",
    speak: "The successor is one more. The predecessor is one less. Ninety-nine thousand nine hundred ninety-nine plus one is one lakh!",
    cards: [
      { label: "Successor", reveal: "One more: after 19,999 comes 20,000", emoji: "➡️" },
      { label: "Predecessor", reveal: "One less: before 20,000 is 19,999", emoji: "⬅️" },
      { label: "Patterns", reveal: "25,000 → 26,000 → 27,000 → 28,000", emoji: "🚂" },
      { label: "One lakh", reveal: "99,999 + 1 = 1,00,000", emoji: "🎉" },
    ],
  },
  {
    id: "c1",
    type: "check",
    title: "Quick check",
    visual: "number-line",
    speak: "Which is bigger, forty-eight thousand three hundred nine, or forty-eight thousand three hundred ninety?",
    question: {
      id: "g4-large-check",
      prompt: "Which is bigger?",
      options: [
        { id: "a", text: "48,309" },
        { id: "b", text: "48,390" },
        { id: "c", text: "They are equal" },
        { id: "d", text: "Cannot tell" },
      ],
      answerId: "b",
      explanation: "Same up to hundreds; tens: 9 vs 0 → 48,390 is bigger.",
      hints: ["Compare from the left.", "Find the first place that differs."],
    },
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Big-number champ!",
    bullets: [
      "Each place is 10× the one on its right",
      "Place value = digit × its place",
      "Compare from the left; round by looking right",
      "Set A and Set B ready — 24 MCQs each",
    ],
    cta: "Back to chapter",
    speak: "You can read, compare, make and round big numbers. Set A and Set B are ready.",
  },
];'''

LESSON_MULDIV = r'''const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "🥟",
    title: "Equal groups",
    body: [
      "Three plates with four samosas on each: 4 + 4 + 4 = 12.",
      "So 3 × 4 = 12! Multiplying is fast adding of equal groups.",
      "Lesson is optional; jump to a set anytime.",
    ],
    cta: "Let's go!",
    visual: "place-value",
    speak: "Three plates with four samosas on each. Four plus four plus four is twelve. So three times four is twelve!",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Multiplication tricks",
    lead: "Tap each card.",
    visual: "place-value",
    speak: "Rows and columns make an array; turn it around and the total stays the same. Tables are skip counting. Any number times zero is zero, and times one stays the same.",
    cards: [
      { label: "Turn it around", reveal: "3 × 5 = 5 × 3 = 15", emoji: "🔄" },
      { label: "Tables = skip counting", reveal: "9 table digits add to 9: 9 × 7 = 63", emoji: "🐸" },
      { label: "Times zero", reveal: "0 × 75 = 0", emoji: "0️⃣" },
      { label: "Times one", reveal: "1 × 48 = 48", emoji: "1️⃣" },
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: "Multiply 46 × 3",
    visual: "place-value",
    speak: "Multiply the ones first, then the tens. Carry over when you need to! Forty-six times three is one hundred thirty-eight.",
    steps: [
      "Ones: 6 × 3 = 18 → write 8, carry 1 ten",
      "Tens: 4 × 3 = 12 tens, + 1 carried = 13 tens",
      "13 tens = 130, plus 8 → 138",
    ],
    punchline: "Ones first, then tens — don't forget the carry.",
  },
  {
    id: "t1",
    type: "try",
    title: "Your turn",
    prompt: "What is 23 × 4?",
    options: [
      { id: "a", text: "82" },
      { id: "b", text: "92" },
      { id: "c", text: "812" },
      { id: "d", text: "27" },
    ],
    answerId: "b",
    why: "3 × 4 = 12 → write 2, carry 1; 2 × 4 = 8, + 1 = 9 → 92.",
    visual: "place-value",
    speak: "What is twenty-three times four?",
  },
  {
    id: "d2",
    type: "demo",
    title: "Sharing, fact families, leftovers",
    visual: "number-line",
    speak: "Division means sharing equally, or making equal groups. Multiplication and division are partners. Sometimes things don't share equally; what is left over is the remainder, and it is always smaller than the number you divide by.",
    steps: [
      "24 laddoos ÷ 4 friends = 6 each",
      "Fact family: 7 × 8 = 56 → 56 ÷ 8 = 7 and 56 ÷ 7 = 8",
      "Missing number: 8 × ? = 72 → 72 ÷ 8 = 9",
      "26 ÷ 4 = 6 remainder 2 (2 is less than 4)",
    ],
    punchline: "Division undoes multiplication.",
  },
  {
    id: "c1",
    type: "check",
    title: "Quick check",
    visual: "number-line",
    speak: "What is thirty-five divided by five?",
    question: {
      id: "g4-muldiv-check",
      prompt: "What is 35 ÷ 5?",
      options: [
        { id: "a", text: "5" },
        { id: "b", text: "6" },
        { id: "c", text: "7" },
        { id: "d", text: "8" },
      ],
      answerId: "c",
      explanation: "5 × 7 = 35, so 35 ÷ 5 = 7.",
      hints: ["Think of the 5 table.", "Which number times 5 makes 35?"],
    },
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Times-and-share star!",
    bullets: [
      "Multiply = equal groups; order doesn't matter",
      "Ones first, then tens, carry over",
      "Division shares equally; remainder < divisor",
      "Set A and Set B ready — 24 MCQs each",
    ],
    cta: "Back to chapter",
    speak: "You can multiply, divide and find remainders. Set A and Set B are ready.",
  },
];'''

CHAPTERS = {
    "chapter-01-large-numbers.md": dict(
        prefix="g4-maths-large", file="g4-maths-large-numbers.ts", export="g4MathsLargeNumbers",
        doc="maths-ch01-large-numbers.md",
        meta={"id": "g4-large-numbers", "title": "Large Numbers", "emoji": "🔢",
              "blurb": "Place value to 1 lakh, compare & round",
              "topic": "place-value", "paperTopics": ["place-value", "add-sub"]},
        lesson=LESSON_LARGE),
    "chapter-02-multiplication-and-division.md": dict(
        prefix="g4-maths-muldiv", file="g4-maths-multiply-divide.ts", export="g4MathsMultiplyDivide",
        doc="maths-ch02-multiply-divide.md",
        meta={"id": "g4-multiply-divide", "title": "Multiplication & Division", "emoji": "✖️",
              "blurb": "Tables, carrying, sharing & remainders",
              "topic": "multiply-basics", "paperTopics": ["multiply-basics", "add-sub"]},
        lesson=LESSON_MULDIV),
}

def answer_key(md, set_label):
    sec = md.split("## Answer Key")[1].split("### Set %s" % set_label)[1].split("### Set")[0]
    return [r.group(1).lower() for r in re.finditer(r"^\|\s*Q\d+\s*\|\s*([A-D])\s*\|", sec, re.M)]

src_dir = ROOT / "sof-maths/grade-4"
for p in sorted(src_dir.glob("*.md")):
    spec = CHAPTERS.get(p.name)
    if not spec:
        print("SKIPPED (no lesson spec yet):", p.name); continue
    md = p.read_text()
    a, b = maths_sets(md, spec["prefix"])
    for label, qs in (("A", a), ("B", b)):
        assert len(qs) == 24, "%s set %s has %d" % (p.name, label, len(qs))
        assert answer_key(md, label) == [q["answerId"] for q in qs], "%s set %s key mismatch" % (p.name, label)
        for q in qs:
            assert len(q["options"]) == 4 and len({o["text"] for o in q["options"]}) == 4, q["id"]
    emit_module(OUT / spec["file"], spec["export"], spec["meta"], spec["lesson"], a, b)
    d = DOCS / "grade-4"; d.mkdir(parents=True, exist_ok=True)
    (d / spec["doc"]).write_text(md)
