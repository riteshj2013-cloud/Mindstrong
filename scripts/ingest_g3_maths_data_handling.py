#!/usr/bin/env python3
"""
Ingest Grade 3 Maths Chapter 9 Data Handling (sof-maths/grade-3/chapter-09-data-handling.md).
Same pipeline as scripts/ingest_g3_maths_geometry.py.
Usage: python3 scripts/ingest_g3_maths_data_handling.py
"""
from __future__ import annotations
import re, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))
from ingest_lib import ROOT, OUT, DOCS, emit_module, strip_editorial_sections
from ingest_g4_maths_ch06_ch07 import raw_items, answer_key, lesson_ts, writer_sets, strip_data_attrs

CH = {
    "src": "chapter-09-data-handling.md",
    "doc": "maths-ch09-data-handling.md",
    "out": "g3-maths-data-handling.ts",
    "export": "g3MathsDataHandling",
    "prefix": "g3-maths-data-handling",
    "steps": 7,
    "meta": {
        "id": "g3-data-handling",
        "title": "Data Handling",
        "emoji": "📊",
        "blurb": "Tally marks, tables, pictographs & bar graphs — read, compare, total",
        "topic": "data-handling",
        "paperTopics": ["data-handling", "numbers"],
    },
    "hook": ("Charts all around", "From rakhi stalls to Diwali lanterns, we collect counts every day. Let's read tallies, pictographs and bar graphs — and spot which day or row shows the most."),
    "try": {
        "prompt": "A tally has 2 bundles and 3 single sticks. What number does it show?",
        "options": [{"id": "a", "text": "5"}, {"id": "b", "text": "13"}, {"id": "c", "text": "23"}, {"id": "d", "text": "8"}],
        "answerId": "b",
        "why": "Each bundle is 5, so 2 bundles show 10, and 3 more sticks make 13. 5 is tempting if you count only one bundle, and 23 if you read the 2 as twenty.",
        "speak": "A tally has 2 bundles and 3 single sticks. What number does it show?",
    },
    "bullets": ["A fifth tally mark crosses four upright sticks (a bundle of 5)",
                "A table's rows and columns make amounts easy to compare",
                "A pictograph key tells how many each symbol stands for",
                "A half symbol stands for half the key number",
                "Read a bar by matching its top to the scale",
                "Most / least / how many more: compare the amounts you read"],
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
