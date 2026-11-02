#!/usr/bin/env python3
"""
Ingest Grade 3 Maths Chapter 7 Time (sof-maths/grade-3/chapter-07-time.md).
Same pipeline as scripts/ingest_g4_maths_ch06_ch07.py (parse_maths_quiz → inline **Diagram (SVG):**
figures, sanitize_svg, emit_module; writer option order kept, Set A/B answers asserted against the
Answer Key, 6/6/6/6 asserted). Writer verification attributes (data-value, data-key, data-name,
...) are stripped from the SVG markup so the key is not shipped in the page.
Usage: python3 scripts/ingest_g3_maths_time.py
"""
from __future__ import annotations
import math, re, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))
from ingest_lib import ROOT, OUT, DOCS, emit_module, strip_editorial_sections
from ingest_g4_maths_ch06_ch07 import raw_items, answer_key, lesson_ts, writer_sets, strip_data_attrs

CH = {
    "src": "chapter-07-time.md",
    "doc": "maths-ch07-time.md",
    "out": "g3-maths-time.ts",
    "export": "g3MathsTime",
    "prefix": "g3-maths-time",
    "steps": 7,
    "meta": {
        "id": "g3-time",
        "title": "Time",
        "emoji": "⏰",
        "blurb": "Clocks, a.m. & p.m., how long, calendars & timetables",
        "topic": "add-sub",
        "paperTopics": ["add-sub", "patterns"],
    },
    "hook": ("Tick tock, what's the time?", "School starts, the bus comes, the train leaves and our favourite show begins at set times. Let's learn to read clocks and calendars and work out how long things take."),
    "try": {
        "prompt": "Riya's music class starts at 4:20 p.m. and ends at 5:05 p.m. How long is the class?",
        "options": [{"id": "a", "text": "1 hour 15 minutes"}, {"id": "b", "text": "45 minutes"}, {"id": "c", "text": "35 minutes"}, {"id": "d", "text": "85 minutes"}],
        "answerId": "b",
        "why": "From 4:20 to 5:00 is 40 minutes, and 5:00 to 5:05 is 5 more, so the class lasts 45 minutes. 85 minutes is tempting if you subtract 420 from 505 like ordinary numbers, but an hour has 60 minutes, not 100.",
        "speak": "Riya's music class starts at 4:20 p.m. and ends at 5:05 p.m. How long is the class?",
    },
    "bullets": ["Short hand = hour, long hand = minutes", "Each number on the clock = 5 minutes",
                "Quarter to 5 = 4:45", "a.m. before noon, p.m. after noon",
                "Count on to the next hour, then add", "Same column on a calendar = 7 days apart"],
    "hints": {
        # writer hint said the gaps 'grow in a pattern' (states the rule)
        "b-q17": "Find the number of minutes between each pair of Tarun's alarms, then compare those gaps with one another.",
    },
    "explanations": {},
}


def fix_clock(markup: str, short: str) -> str:
    """Review fixes to the writer's clock faces (hand angles are never changed).

    - Numerals get a face-coloured halo so a minute hand passing under the number it points
      to cannot blot it out (the numerals are drawn after the hands).
    - b-q24 (one-hand clock): the hour hand is lengthened along the same 132 degree angle so its
      tip reaches the small marks; at the writer's length it stopped far inside the numerals
      and '2 small marks past 4' could not be read reliably.
    """
    if 'class="part clock-face"' not in markup:
        return markup
    n0 = markup.count('class="label numeral"')
    markup = markup.replace('class="label numeral"', 'class="label numeral" stroke="#fffdf5" stroke-width="4" stroke-linejoin="round" paint-order="stroke"')
    assert n0 and n0 % 12 == 0, short
    if short == "b-q24":
        old = '<line class="part hand hour-hand" x1="135" y1="136" x2="171.41" y2="168.79"'
        assert old in markup
        x2 = 135 + 84 * math.sin(math.radians(132)); y2 = 136 - 84 * math.cos(math.radians(132))
        markup = markup.replace(old, '<line class="part hand hour-hand" x1="135" y1="136" x2="%.2f" y2="%.2f"' % (x2, y2))
    return markup


def main() -> None:
    DOCS.joinpath("grade-3").mkdir(parents=True, exist_ok=True)
    src = ROOT / "sof-maths/grade-3" / CH["src"]
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
                fig["markup"] = fix_clock(strip_data_attrs(fig["markup"]), short)
                assert "data-" not in fig["markup"], q["id"]
                assert fig.get("alt"), q["id"]
                assert re.search(r'aria-label="[^"]+"', fig["markup"]), q["id"]
        counts = {L: sum(1 for q in qs if q["answerId"] == L) for L in "abcd"}
        assert sorted(counts.values()) == [6, 6, 6, 6], counts
        assert sum(1 for q in qs if q.get("figure")) == 9, name
        print("%s Set %s: %d items, %d pictorial, keys %s" % (CH["meta"]["id"], name.upper(), len(qs),
              sum(1 for q in qs if q.get("figure")), counts))
    emit_module(OUT / CH["out"], CH["export"], CH["meta"], lesson_ts(md, CH), set_a, set_b)
    DOCS.joinpath("grade-3", CH["doc"]).write_text(src.read_text(encoding="utf-8"), encoding="utf-8")


if __name__ == "__main__":
    main()
