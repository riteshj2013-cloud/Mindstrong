#!/usr/bin/env python3
"""
Ingest Grade 3 Maths Chapter 5 Measurement (sof-maths/grade-3/chapter-05-measurement.md).
Same pipeline as scripts/ingest_g4_maths_ch06_ch07.py (parse_maths_quiz → inline **Diagram (SVG):**
figures, sanitize_svg, emit_module; writer option order kept, Set A/B answers asserted against the
Answer Key, 6/6/6/6 asserted). Writer verification attributes (data-cm, data-key, data-x0,
data-start, ...) are stripped from the SVG markup so the key is not shipped in the page.
Usage: python3 scripts/ingest_g3_maths_measurement.py
"""
from __future__ import annotations
import re, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))
from ingest_lib import ROOT, OUT, DOCS, emit_module, strip_editorial_sections
from ingest_g4_maths_ch06_ch07 import raw_items, answer_key, lesson_ts, writer_sets, strip_data_attrs

CH = {
    "src": "chapter-05-measurement.md",
    "doc": "maths-ch05-measurement.md",
    "out": "g3-maths-measurement.ts",
    "export": "g3MathsMeasurement",
    "prefix": "g3-maths-measurement",
    "steps": 7,
    "meta": {
        "id": "g3-measurement",
        "title": "Measurement",
        "emoji": "📏",
        "blurb": "Length, weight & capacity: rulers, balances and jugs",
        "topic": "measurement",
        "paperTopics": ["measurement", "add-sub"],
    },
    "hook": ("How long, how heavy, how much?", "Cloth is sold by the metre, rice by the kilogram and milk by the litre. Measuring tells us how much."),
    "try": {
        "prompt": "A ribbon is 1 m long. Riya cuts off 35 cm for a rakhi. How much ribbon is left?",
        "options": [{"id": "a", "text": "75 cm"}, {"id": "b", "text": "65 cm"}, {"id": "c", "text": "35 cm"}, {"id": "d", "text": "135 cm"}],
        "answerId": "b",
        "why": "1 m is 100 cm, and 100 cm − 35 cm = 65 cm. 75 cm is tempting if you forget to regroup, but 100 − 35 is 65.",
        "speak": "A ribbon is one metre long. Riya cuts off thirty-five centimetres for a rakhi. How much ribbon is left?",
    },
    "bullets": ["Start at 0, or subtract the start mark", "100 cm = 1 m, 1000 m = 1 km",
                "1000 g = 1 kg, 1000 mL = 1 L", "Same unit before you add or subtract",
                "A level balance: both pans weigh the same"],
    "hints": {
        # review: the writer hint ruled out the bus and the coconut tree by name, leaving only the bat
        "a-q02": "Bhavesh needs about a thousand metres. Picture walking along each one from end to end: which walk would take you many minutes?",
        # review: 'not tiny, and not as long as a building' ruled out all three wrong options
        "b-q03": "Danish needs something about a hundred centimetres long. Picture each object lying next to a metre scale.",
    },
    "explanations": {
        # review: 'a small papaya slice pack' was an unclear comparison
        "a-q03": "A big watermelon needs both hands to lift, so it weighs a few kilograms: 4 kg makes sense. 400 g is tempting because 400 looks like a big number, but 400 g is less than half a kilogram, about as heavy as two big apples.",
    },
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
        print("%s Set %s: %d items, %d pictorial, keys %s" % (CH["meta"]["id"], name.upper(), len(qs),
              sum(1 for q in qs if q.get("figure")), counts))
    emit_module(OUT / CH["out"], CH["export"], CH["meta"], lesson_ts(md, CH), set_a, set_b)
    DOCS.joinpath("grade-3", CH["doc"]).write_text(src.read_text(encoding="utf-8"), encoding="utf-8")


if __name__ == "__main__":
    main()
