#!/usr/bin/env python3
"""
Ingest Grade 4 Maths Chapter 8 Everyday Word Problems (sof-maths/grade-4/chapter-08-everyday-word-problems.md).
Same pipeline as scripts/ingest_g4_maths_ch06_ch07.py (parse_maths_quiz → inline **Diagram (SVG):**
figures, sanitize_svg, emit_module; writer option order kept, Set A/B answers asserted against the
Answer Key, 6/6/6/6 asserted). Writer verification attributes (data-qty, data-rate, data-amount, data-m,
data-unit-px, ...) are stripped from the SVG markup so the key is not shipped in the page.
Usage: python3 scripts/ingest_g4_maths_ch08.py
"""
from __future__ import annotations
import re, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))
from ingest_lib import ROOT, OUT, DOCS, emit_module, strip_editorial_sections
from ingest_g4_maths_ch06_ch07 import raw_items, answer_key, lesson_ts, writer_sets, strip_data_attrs

CH = {
    "src": "chapter-08-everyday-word-problems.md",
    "doc": "maths-ch08-everyday-word-problems.md",
    "out": "g4-maths-word-problems.ts",
    "export": "g4MathsWordProblems",
    "prefix": "g4-maths-wordprob",
    "steps": 6,
    "meta": {
        "id": "g4-word-problems",
        "title": "Everyday Word Problems",
        "emoji": "🛒",
        "blurb": "Bills, offers, maps, bar models & working backwards",
        "topic": "add-sub",
        "paperTopics": ["add-sub", "multiply-basics", "measurement"],
    },
    "hook": ("Maths in real life", "Shopping bills, bus fares, recipes and road trips are all stories we can solve step by step."),
    "try": {
        "prompt": "A packet of 6 pencils costs ₹30. Asha buys 3 packets and a ₹25 eraser set. How much does she spend?",
        "options": [{"id": "a", "text": "₹55"}, {"id": "b", "text": "₹90"}, {"id": "c", "text": "₹180"}, {"id": "d", "text": "₹115"}],
        "answerId": "d",
        "why": "First the packets: 3 × ₹30 = ₹90. Then add the eraser set: ₹90 + ₹25 = ₹115. ₹90 is tempting, but it stops after the first step and leaves out the eraser set.",
        "speak": "A packet of six pencils costs thirty rupees. Asha buys three packets and a twenty-five rupee eraser set. How much does she spend?",
    },
    "bullets": ["Find the question first", "Pick the operation from the story", "Solve in steps, one line each",
                "Make the units match", "Work backwards by undoing", "Cross out facts you do not need"],
    "hints": {},
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
            q["hints"] = [CH["hints"].get(q["id"].split(CH["prefix"] + "-")[1], r["hint"])]
            fig = q.get("figure")
            if fig:
                fig["markup"] = strip_data_attrs(fig["markup"])
                assert "data-" not in fig["markup"], q["id"]
                assert fig.get("alt"), q["id"]
                assert re.search(r'aria-label="[^"]+"', fig["markup"]), q["id"]
        counts = {L: sum(1 for q in qs if q["answerId"] == L) for L in "abcd"}
        assert sorted(counts.values()) == [6, 6, 6, 6], counts
        print("%s Set %s: %d items, %d pictorial, keys %s" % (CH["meta"]["id"], name.upper(), len(qs),
              sum(1 for q in qs if q.get("figure")), counts))
    emit_module(OUT / CH["out"], CH["export"], CH["meta"], lesson_ts(md, CH), set_a, set_b)
    DOCS.joinpath("grade-4", CH["doc"]).write_text(src.read_text(encoding="utf-8"), encoding="utf-8")


if __name__ == "__main__":
    main()
