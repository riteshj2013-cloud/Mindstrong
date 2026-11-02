#!/usr/bin/env python3
"""
Ingest Grade 3 Maths Chapter 6 Money (sof-maths/grade-3/chapter-06-money.md).
Same pipeline as scripts/ingest_g4_maths_ch06_ch07.py (parse_maths_quiz → inline **Diagram (SVG):**
figures, sanitize_svg, emit_module; writer option order kept, Set A/B answers asserted against the
Answer Key, 6/6/6/6 asserted). Writer verification attributes (data-value, data-key, data-name,
...) are stripped from the SVG markup so the key is not shipped in the page.
Usage: python3 scripts/ingest_g3_maths_money.py
"""
from __future__ import annotations
import re, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))
from ingest_lib import ROOT, OUT, DOCS, emit_module, strip_editorial_sections
from ingest_g4_maths_ch06_ch07 import raw_items, answer_key, lesson_ts, writer_sets, strip_data_attrs

CH = {
    "src": "chapter-06-money.md",
    "doc": "maths-ch06-money.md",
    "out": "g3-maths-money.ts",
    "export": "g3MathsMoney",
    "prefix": "g3-maths-money",
    "steps": 7,
    "meta": {
        "id": "g3-money",
        "title": "Money",
        "emoji": "💰",
        "blurb": "Coins, notes, bills, change & best buys",
        "topic": "add-sub",
        "paperTopics": ["add-sub", "multiply-basics"],
    },
    "hook": ("Rupees in our pocket", "We use money at the vegetable stall, the stationery shop and the school canteen. Let's learn to count it, pay and get the right change."),
    "try": {
        "prompt": "Meena buys a ₹26 notebook and pays with a ₹50 note. How much change does she get?",
        "options": [{"id": "a", "text": "₹34"}, {"id": "b", "text": "₹76"}, {"id": "c", "text": "₹24"}, {"id": "d", "text": "₹26"}],
        "answerId": "c",
        "why": "Change = money given − price: ₹50 − ₹26 = ₹24. ₹34 is tempting if you forget to regroup, but 50 − 26 is 24.",
        "speak": "Meena buys a twenty-six rupee notebook and pays with a fifty rupee note. How much change does she get?",
    },
    "bullets": ["100 paise = ₹1", "Fewest coins: start with the biggest that fits",
                "Change = money given − bill", "Amount = quantity × rate",
                "Share equally by dividing", "Compare the whole cost of an offer"],
    "hints": {},
    "explanations": {
        # review: 'the eraser price added the wrong way' was unclear
        "b-q03": "The eraser costs ₹4 − 50 paise = ₹3 and 50 paise. Pencil and eraser together cost ₹4 + ₹3 and 50 paise = ₹7 and 50 paise. ₹8 is tempting if you think the eraser also costs ₹4, but it is 50 paise cheaper. ₹4 and 50 paise comes from adding 50 paise to the pencil's price instead of finding the eraser's price and adding the two.",
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
        assert sum(1 for q in qs if q.get("figure")) == 9, name
        print("%s Set %s: %d items, %d pictorial, keys %s" % (CH["meta"]["id"], name.upper(), len(qs),
              sum(1 for q in qs if q.get("figure")), counts))
    emit_module(OUT / CH["out"], CH["export"], CH["meta"], lesson_ts(md, CH), set_a, set_b)
    DOCS.joinpath("grade-3", CH["doc"]).write_text(src.read_text(encoding="utf-8"), encoding="utf-8")


if __name__ == "__main__":
    main()
