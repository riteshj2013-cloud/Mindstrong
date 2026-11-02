#!/usr/bin/env python3
"""
Ingest Grade 3 Maths Chapter 4 Fractions (sof-maths/grade-3/chapter-04-fractions.md).
Same pipeline as scripts/ingest_g4_maths_ch06_ch07.py (parse_maths_quiz → inline **Diagram (SVG):**
figures, sanitize_svg, emit_module; writer option order kept, Set A/B answers asserted against the
Answer Key, 6/6/6/6 asserted). Writer verification attributes (data-frac, data-shaded, data-target,
data-rule, ...) are stripped from the SVG markup so the key is not shipped in the page.
Usage: python3 scripts/ingest_g3_maths_fractions.py
"""
from __future__ import annotations
import re, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))
from ingest_lib import ROOT, OUT, DOCS, emit_module, strip_editorial_sections
from ingest_g4_maths_ch06_ch07 import raw_items, answer_key, lesson_ts, writer_sets, strip_data_attrs

CH = {
    "src": "chapter-04-fractions.md",
    "doc": "maths-ch04-fractions.md",
    "out": "g3-maths-fractions.ts",
    "export": "g3MathsFractions",
    "prefix": "g3-maths-fractions",
    "steps": 7,
    "meta": {
        "id": "g3-fractions",
        "title": "Fractions",
        "emoji": "🍕",
        "blurb": "Equal parts, number lines, compare & add like fractions",
        "topic": "fractions",
        "paperTopics": ["fractions", "multiply-basics"],
    },
    "hook": ("Sharing fairly", "Rotis, laddoos and chocolate bars are shared in equal parts. Fractions name those parts."),
    "try": {
        "prompt": "Meena has 12 bangles. She gives 1/4 of them to her sister. How many bangles does her sister get?",
        "options": [{"id": "a", "text": "4"}, {"id": "b", "text": "8"}, {"id": "c", "text": "3"}, {"id": "d", "text": "9"}],
        "answerId": "c",
        "why": "Share 12 into 4 equal groups: each group has 3, so 1/4 of 12 is 3. 4 is tempting, but that is the number of groups, not the bangles in one group.",
        "speak": "Meena has twelve bangles. She gives one quarter of them to her sister. How many bangles does her sister get?",
    },
    "bullets": ["Parts must be equal", "Bottom number: how many equal parts", "Top number: how many parts taken",
                "Same bottom: more on top is bigger", "Same top: smaller bottom is bigger"],
    "hints": {
        # review: the writer hint shared no word with the stem (check-maths-hints no-token)
        "b-q15": "Compare 5/□ with 5/8. With matching top numbers, a smaller bottom number means bigger pieces. Which box numbers work? Pick the greatest.",
        # review: the writer hint pointed at one wrong option (1/7) by value
        "b-q10": "Look closely at the top number of every fraction. What do three of them share that the fourth does not?",
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
    DOCS.joinpath("grade-3", CH["doc"]).write_text(src.read_text(encoding="utf-8"), encoding="utf-8")


if __name__ == "__main__":
    main()
