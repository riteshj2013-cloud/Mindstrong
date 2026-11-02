#!/usr/bin/env python3
"""
Ingest Grade 4 Maths Chapter 9 Logical Reasoning 1: Patterns, Analogy and Classification
(sof-maths/grade-4/chapter-09-lr1-patterns-analogy.md).
Same pipeline as scripts/ingest_g4_maths_ch06_ch07.py (parse_maths_quiz → inline **Diagram (SVG):**
figures, sanitize_svg, emit_module; writer option order kept, Set A/B answers asserted against the
Answer Key, 6/6/6/6 asserted). Writer verification attributes (data-label, data-rule, data-key, ...) are stripped from the SVG markup so the key is not shipped in the page.
Usage: python3 scripts/ingest_g4_maths_ch09.py
"""
from __future__ import annotations
import re, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))
from ingest_lib import ROOT, OUT, DOCS, emit_module, strip_editorial_sections
from ingest_g4_maths_ch06_ch07 import raw_items, answer_key, lesson_ts, writer_sets, strip_data_attrs

CH = {
    "src": "chapter-09-lr1-patterns-analogy.md",
    "doc": "maths-ch09-lr1-patterns-analogy.md",
    "out": "g4-maths-lr-patterns.ts",
    "export": "g4MathsLrPatterns",
    "prefix": "g4-maths-lrpat",
    "steps": 6,
    "meta": {
        "id": "g4-lr-patterns",
        "title": "Logical Reasoning: Patterns & Analogies",
        "emoji": "🧩",
        "blurb": "Series, figure patterns, analogies, odd one out & number puzzles",
        "topic": "patterns",
        "paperTopics": ["patterns", "multiply-basics"],
    },
    "hook": ("Think like a detective", "Every pattern hides a rule. Find the rule, test it on every part, and the answer follows."),
    "try": {
        "prompt": "What comes next? 3, 7, 11, 15, ?",
        "options": [{"id": "a", "text": "18"}, {"id": "b", "text": "20"}, {"id": "c", "text": "19"}, {"id": "d", "text": "21"}],
        "answerId": "c",
        "why": "Each number is 4 more than the one before: 3, 7, 11, 15, so next is 15 + 4 = 19. 20 is tempting if you guess the gap grows, but every gap here is 4.",
        "speak": "What comes next? Three, seven, eleven, fifteen, and then?",
    },
    "bullets": ["Find the repeating block", "Write the gaps between numbers", "Check one feature of a figure at a time",
                "Copy the first pair's rule exactly", "Odd one out: check no other rule fits", "Test your rule on every part"],
    # Reviewer overrides (option ids, positions and keys unchanged).
    # a-q07: 20 and 32 also fit "even numbers" and 27 fits "multiples of 3"; turned-away numbers
    #        now rule out both competing rules so only multiples of 6 (42) remain.
    # a-q13: "contains a 3" picked 19 as a second odd one out; option a 83 -> 41 (digit sum 5, no 3,
    #        digits fall like 73, so "has a 3" and "digits go up/down" both split 2-2).
    "prompts": {
        "a-q07": "Only numbers that follow a secret rule may join the Maths club. 12, 18 and 30 are members, but 14, 15 and 16 were turned away. Which number can also join the club?",
    },
    "options": {
        "a-q13": {"a": "41"},
    },
    "hints": {
        "a-q07": "Look at what the members share that none of the turned-away numbers has. Test each choice against it.",
        "a-q08": "Look for something you can count in each shape and compare it with the dots. Do this for every figure.",
        "a-q13": "All four are odd, and all four are prime, so size and primes will not decide it. Look inside each number at its two digits.",
        "a-q24": "Since all four share the 11 test, look inside each number at how its three digits are linked.",
        "b-q07": "Find how 8 can be made from 2 using only multiplication. Then make 27 the same way.",
        "b-q08": "Rohit's figures all have different outlines, so outline alone will not decide it. Think about how each figure was built.",
        "b-q12": "Follow how the triangle turns from box to box in row 1, and carry that turn along row 3. Then check the shading.",
        "b-q13": "Adding the digits will not help here. Find another way to combine the two digits, then see which number does not belong.",
        "b-q16": "Name every change from the big shaded triangle to the second picture: direction, size and shading. Which one stays the same?",
        "b-q18": "Look at how each given pair is close to its third number. Test one idea on both pairs before you use it.",
        "b-q22": "Count the sides and the dots in the first two figures. What do you notice? Then check the shading.",
    },
    "explanations": {
        "a-q07": "The members 12, 18 and 30 are all multiples of 6, and none of 14, 15 and 16 is. 42 = 6 \u00d7 7, so 42 can join. 20 and 32 are tempting because they are even like every member, but 14 and 16 are even too and were turned away. 27 is tempting because it is a multiple of 3, but so is 15, which was turned away.",
        "a-q13": "Add the digits: 1 + 9 = 10, 3 + 7 = 10 and 7 + 3 = 10, but 4 + 1 = 5. So 41 is the odd one out. 19 is tempting because it is the smallest number, but size is not the secret: 1 + 9 = 10, the same total as 37 and 73.",
        "b-q08": "Count the small squares: three figures use 6 squares each, but Figure D uses 7. Figure A is tempting because it is the only L-shape, but it still uses 6 squares.",
    },
}


def main() -> None:
    DOCS.joinpath("grade-4").mkdir(parents=True, exist_ok=True)
    src = ROOT / "sof-maths/grade-4" / CH["src"]
    md = strip_editorial_sections(src.read_text(encoding="utf-8"))
    set_a, set_b = writer_sets(md, CH["prefix"])
    for name, qs in (("a", set_a), ("b", set_b)):
        raws, key = raw_items(md, name), answer_key(md, name)
        assert len(qs) == len(raws) == len(key) == 24, (name, len(qs), len(raws), len(key))
        for q, r, k in zip(qs, raws, key):
            assert r["answer"] == k, (q["id"], r["answer"], k)
            assert q["answerId"] == k.lower(), ("option order moved a key", q["id"])
            assert r["hint"], q["id"]
            short = q["id"].split(CH["prefix"] + "-")[1]
            q["hints"] = [CH["hints"].get(short, r["hint"])]
            if short in CH["prompts"]:
                q["prompt"] = CH["prompts"][short]
            for oid, text in CH["options"].get(short, {}).items():
                opt = next(o for o in q["options"] if o["id"] == oid)
                opt["text"] = text
            if short in CH["explanations"]:
                q["explanation"] = CH["explanations"][short]
            fig = q.get("figure")
            if fig:
                fig["markup"] = strip_data_attrs(fig["markup"])
                assert "data-" not in fig["markup"], q["id"]
                assert fig.get("alt"), q["id"]
                assert re.search(r'aria-label="[^"]+"', fig["markup"]), q["id"]
        counts = {L: sum(1 for q in qs if q["answerId"] == L) for L in "abcd"}
        assert sorted(counts.values()) == [6, 6, 6, 6], counts
        assert sum(1 for q in qs if q.get("figure")) == 12, name
        print("%s Set %s: %d items, %d pictorial, keys %s" % (CH["meta"]["id"], name.upper(), len(qs),
              sum(1 for q in qs if q.get("figure")), counts))
    emit_module(OUT / CH["out"], CH["export"], CH["meta"], lesson_ts(md, CH), set_a, set_b)
    DOCS.joinpath("grade-4", CH["doc"]).write_text(src.read_text(encoding="utf-8"), encoding="utf-8")


if __name__ == "__main__":
    main()
