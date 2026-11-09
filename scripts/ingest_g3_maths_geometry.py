#!/usr/bin/env python3
"""
Ingest Grade 3 Maths Chapter 8 Geometry (sof-maths/grade-3/chapter-08-geometry.md).
Same pipeline as scripts/ingest_g4_maths_ch06_ch07.py (parse_maths_quiz → inline **Diagram (SVG):**
figures, sanitize_svg, emit_module; writer option order kept, Set A/B answers asserted against the
Answer Key, 6/6/6/6 asserted). Writer verification attributes are stripped from the SVG markup.
Usage: python3 scripts/ingest_g3_maths_geometry.py
"""
from __future__ import annotations
import re, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))
from ingest_lib import ROOT, OUT, DOCS, emit_module, strip_editorial_sections
from ingest_g4_maths_ch06_ch07 import raw_items, answer_key, lesson_ts, writer_sets, strip_data_attrs

CH = {
    "src": "chapter-08-geometry.md",
    "doc": "maths-ch08-geometry.md",
    "out": "g3-maths-geometry.ts",
    "export": "g3MathsGeometry",
    "prefix": "g3-maths-geometry",
    "steps": 7,
    "meta": {
        "id": "g3-geometry",
        "title": "Geometry",
        "emoji": "⬡",
        "blurb": "Flat & solid shapes, perimeter, area, symmetry, turns & nets",
        "topic": "geometry",
        "paperTopics": ["geometry", "measurement"],
    },
    "hook": ("Shapes all around", "Look at a dice, a kite, a window and a chapati — each has its own sides, corners or curves. Let's name shapes, measure round them and spot the ones that fold in half."),
    "try": {
        "prompt": "A rectangle on squared paper is 3 rows of 4 squares. How many unit squares cover it?",
        "options": [{"id": "a", "text": "7"}, {"id": "b", "text": "12"}, {"id": "c", "text": "14"}, {"id": "d", "text": "3"}],
        "answerId": "b",
        "why": "3 rows of 4 squares cover 3 × 4 = 12 unit squares. 7 is tempting if you add 3 and 4, and 14 if you find the perimeter instead of the area.",
        "speak": "A rectangle on squared paper is 3 rows of 4 squares. How many unit squares cover it?",
    },
    "bullets": ["Sides and corners name a flat shape", "Perimeter = distance round the edge",
                "Area = count of unit squares", "A fold line that matches both halves is a line of symmetry",
                "4 quarter turns make one full turn", "A cube net has 6 squares"],
    "hints": {},
    "explanations": {},
}


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
    DOCS.joinpath("grade-3", CH["doc"]).write_text(src.read_text(encoding="utf-8"), encoding="utf-8")


if __name__ == "__main__":
    main()
