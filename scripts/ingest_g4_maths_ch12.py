#!/usr/bin/env python3
"""
Ingest Grade 4 Maths Chapter 12 Logical Reasoning 4: Clock, Calendar and Combinations
(sof-maths/grade-4/chapter-12-lr4-clock-calendar-combinations.md).
Same pipeline as scripts/ingest_g4_maths_ch06_ch07.py. Writer verification attributes are stripped.
Usage: python3 scripts/ingest_g4_maths_ch12.py
"""
from __future__ import annotations
import re, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))
from ingest_lib import ROOT, OUT, DOCS, emit_module, strip_editorial_sections
from ingest_g4_maths_ch06_ch07 import raw_items, answer_key, lesson_ts, writer_sets, strip_data_attrs

CH = {
    "src": "chapter-12-lr4-clock-calendar-combinations.md",
    "doc": "maths-ch12-lr4-clock-calendar-combinations.md",
    "out": "g4-maths-lr-clock-calendar.ts",
    "export": "g4MathsLrClockCalendar",
    "prefix": "g4-maths-lrclk",
    "steps": 7,
    "meta": {
        "id": "g4-lr-clock-calendar",
        "title": "Logical Reasoning: Clock, Calendar & Combinations",
        "emoji": "\U0001F552",
        "blurb": "Clock angles, calendar days, outfits, menus, routes & counting",
        "topic": "patterns",
        "paperTopics": ["patterns", "measurement"],
    },
    "hook": ("Hands, dates and choices", "How big is the angle between the clock hands? What day is the 15th? How many outfits can Meera make? Let's reason carefully with clocks, calendars and counting."),
    "try": {
        "prompt": "At 3 o'clock, what angle do the clock hands make?",
        "options": [{"id": "a", "text": "60°"}, {"id": "b", "text": "90°"}, {"id": "c", "text": "120°"}, {"id": "d", "text": "180°"}],
        "answerId": "b",
        "why": "From 12 to 3 is three gaps of 30°, so 90° — a right angle. 180° is tempting, but that is the angle at 6 o'clock when the hands make a straight line.",
        "speak": "At 3 o'clock, what angle do the clock hands make?",
    },
    "bullets": ["Each hour gap = 30°", "Minute hand: 6° per minute",
                "Hour hand: ½° per minute", "Same weekday dates are 7 days apart",
                "One from each group → multiply", "Shortest grid routes: only right and up"],
    "prompts": {},
    "options": {},
    "hints": {},
    "explanations": {},
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
        assert sum(1 for q in qs if q.get("figure")) == 11, name
        print("%s Set %s: %d items, %d pictorial, keys %s" % (CH["meta"]["id"], name.upper(), len(qs),
              sum(1 for q in qs if q.get("figure")), counts))
    emit_module(OUT / CH["out"], CH["export"], CH["meta"], lesson_ts(md, CH), set_a, set_b)
    DOCS.joinpath("grade-4", CH["doc"]).write_text(src.read_text(encoding="utf-8"), encoding="utf-8")


if __name__ == "__main__":
    main()
