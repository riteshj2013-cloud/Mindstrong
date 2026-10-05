#!/usr/bin/env python3
"""Ingest Grade 3 Maths writer files (sof-maths/grade-3) into lib/prep/content.

Usage: python3 scripts/ingest_g3_maths.py
Each known chapter gets a hand-tuned lesson built from the writer's outline;
Set A / Set B MCQs are parsed straight from the markdown and validated against
the Answer Key table.
"""
from pathlib import Path
import re, sys
sys.path.insert(0, str(Path(__file__).parent))
from ingest_lib import ROOT, OUT, DOCS, maths_sets, emit_module

LESSON_NUMBERS = r'''const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: "🧺",
    title: "Bundles of sticks",
    body: [
      "Ten loose sticks make one bundle — a ten.",
      "Ten bundles of ten make a big bundle — one hundred!",
      "Lesson is optional; jump to a set anytime.",
    ],
    cta: "Let's count!",
    visual: "place-value",
    speak: "Let's count sticks! Ten loose sticks make one bundle. We call it a ten. Ten bundles of ten make a big bundle. That is one hundred!",
  },
  {
    id: "r1",
    type: "reveal",
    title: "Hundreds, tens and ones",
    lead: "Every digit lives in a house. Tap each house for 347.",
    visual: "place-value",
    speak: "Every digit lives in a house. The houses are hundreds, tens and ones. In three hundred forty-seven, three is in the hundreds house, four in tens, seven in ones.",
    cards: [
      { label: "Hundreds (H)", reveal: "3 → worth 300", emoji: "💯" },
      { label: "Tens (T)", reveal: "4 → worth 40", emoji: "🔟" },
      { label: "Ones (O)", reveal: "7 → worth 7", emoji: "1️⃣" },
    ],
  },
  {
    id: "d1",
    type: "demo",
    title: "What is a digit worth?",
    visual: "place-value",
    speak: "A digit's worth depends on its house. Four hundred seventy-two is four hundred, plus seventy, plus two. Four zero nine is four hundred nine. The zero means there are no tens, so we don't say it!",
    steps: [
      "472 = 400 + 70 + 2",
      "8 in the hundreds house of 832 is worth 800",
      "409 in words: four hundred nine",
      "Zero holds the tens place — we don't say it",
    ],
    punchline: "Same digit, different house → different worth.",
  },
  {
    id: "t1",
    type: "try",
    title: "Your turn",
    prompt: "What is 8 worth in 832?",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "80" },
      { id: "c", text: "800" },
      { id: "d", text: "832" },
    ],
    answerId: "c",
    why: "The 8 lives in the hundreds house, so it is worth 800.",
    visual: "place-value",
    speak: "What is eight worth in eight hundred thirty-two?",
  },
  {
    id: "d2",
    type: "demo",
    title: "Bigger, biggest, smallest",
    visual: "number-line",
    speak: "To compare, look at the hundreds first. If the hundreds are the same, check the tens, then the ones. For the biggest number put the biggest digit first. For the smallest, put the smallest digit first, but zero can never go first!",
    steps: [
      "Compare hundreds first, then tens, then ones",
      "618 vs 681 → same hundreds, 8 tens beats 1 ten → 681",
      "Biggest from 5, 2, 9 → 952",
      "Smallest from 7, 0, 4 → 407 (zero never first)",
    ],
    punchline: "Look left first — the hundreds decide.",
  },
  {
    id: "r2",
    type: "reveal",
    title: "Even, odd and patterns",
    lead: "Tap each card.",
    visual: "number-line",
    speak: "Even numbers end in 0, 2, 4, 6 or 8. Odd numbers end in 1, 3, 5, 7 or 9. The number just after is one more; the number just before is one less.",
    cards: [
      { label: "Even", reveal: "Ends in 0, 2, 4, 6, 8 — makes pairs", emoji: "👫" },
      { label: "Odd", reveal: "Ends in 1, 3, 5, 7, 9 — one left alone", emoji: "🧍" },
      { label: "Skip count", reveal: "By 5s: 15, 20, 25, 30 · By 10s: 340, 350, 360", emoji: "🐸" },
      { label: "Before / after", reveal: "Just after 299 is 300 · just before 500 is 499", emoji: "🚂" },
    ],
  },
  {
    id: "c1",
    type: "check",
    title: "Quick check",
    visual: "number-line",
    speak: "Make the smallest number with seven, zero and four.",
    question: {
      id: "g3-numbers-check",
      prompt: "Make the smallest 3-digit number with 7, 0 and 4.",
      options: [
        { id: "a", text: "047" },
        { id: "b", text: "407" },
        { id: "c", text: "470" },
        { id: "d", text: "704" },
      ],
      answerId: "b",
      explanation: "Zero can't go first, so start with 4, then 0, then 7 → 407.",
      hints: ["Smallest digit first — but not zero.", "Then put the smallest digit left."],
    },
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: "Number ninja!",
    bullets: [
      "Hundreds | tens | ones",
      "Digit worth = digit × its house",
      "Compare from the left; zero never first",
      "Set A and Set B ready — 24 MCQs each",
    ],
    cta: "Back to chapter",
    speak: "You can read, write, compare and make 3-digit numbers. Set A and Set B are ready.",
  },
];'''

CHAPTERS = {
    "chapter-01-numbers.md": dict(
        prefix="g3-maths-numbers", file="g3-maths-numbers.ts", export="g3MathsNumbers",
        doc="maths-ch01-numbers.md",
        meta={"id": "numbers", "title": "Numbers", "emoji": "🧱",
              "blurb": "Place value, compare & patterns to 999",
              "topic": "place-value", "paperTopics": ["place-value", "add-sub"]},
        lesson=LESSON_NUMBERS),
}

def answer_key(md, set_label):
    sec = md.split("## Answer Key")[1].split("### Set %s" % set_label)[1].split("### Set")[0]
    return [r.group(1).lower() for r in re.finditer(r"^\|\s*Q\d+\s*\|\s*([A-D])\s*\|", sec, re.M)]

if __name__ == "__main__":
    src_dir = ROOT / "sof-maths/grade-3"
    done, skipped = [], []
    for p in sorted(src_dir.glob("*.md")):
        spec = CHAPTERS.get(p.name)
        if not spec:
            skipped.append(p.name); continue
        md = p.read_text()
        a, b = maths_sets(md, spec["prefix"])
        for label, qs in (("A", a), ("B", b)):
            assert len(qs) == 24, "%s set %s has %d questions" % (p.name, label, len(qs))
            key = answer_key(md, label)
            got = [q["answerId"] for q in qs]
            assert key == got, "%s set %s answer key mismatch:\n key=%s\n got=%s" % (p.name, label, key, got)
            for q in qs:
                assert len(q["options"]) == 4 and len({o["text"] for o in q["options"]}) == 4, q["id"]
        emit_module(OUT / spec["file"], spec["export"], spec["meta"], spec["lesson"], a, b)
        d = DOCS / "grade-3"; d.mkdir(parents=True, exist_ok=True)
        (d / spec["doc"]).write_text(md)
        done.append(p.name)

    print("ingested:", done)
    if skipped:
        print("SKIPPED (no lesson spec yet):", skipped)
