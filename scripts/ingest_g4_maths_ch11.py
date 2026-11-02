#!/usr/bin/env python3
"""
Ingest Grade 4 Maths Chapter 11 Logical Reasoning 3: Direction, Images and Figures
(sof-maths/grade-4/chapter-11-lr3-direction-images-figures.md).
Same pipeline as scripts/ingest_g4_maths_ch06_ch07.py (parse_maths_quiz → inline **Diagram (SVG):**
figures, sanitize_svg, emit_module; writer option order kept, Set A/B answers asserted against the
Answer Key, 6/6/6/6 asserted). Writer verification attributes (data-label, data-rule, data-key, ...) are stripped from the SVG markup so the key is not shipped in the page.
Usage: python3 scripts/ingest_g4_maths_ch11.py
"""
from __future__ import annotations
import re, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))
from ingest_lib import ROOT, OUT, DOCS, emit_module, strip_editorial_sections
from ingest_g4_maths_ch06_ch07 import raw_items, answer_key, lesson_ts, writer_sets, strip_data_attrs

CH = {
    "src": "chapter-11-lr3-direction-images-figures.md",
    "doc": "maths-ch11-lr3-direction-images-figures.md",
    "out": "g4-maths-lr-direction-figures.ts",
    "export": "g4MathsLrDirectionFigures",
    "prefix": "g4-maths-lrdir",
    "steps": 7,
    "meta": {
        "id": "g4-lr-direction-figures",
        "title": "Logical Reasoning: Direction, Images & Figures",
        "emoji": "\U0001F9ED",
        "blurb": "Directions and turns, mirror and water images, hidden shapes & counting figures",
        "topic": "patterns",
        "paperTopics": ["patterns", "geometry"],
    },
    "hook": ("Find your way", "Which way is the school from the temple? What does a word look like in a mirror? How many triangles hide in a drawing? Let's learn to think carefully about directions, images and figures."),
    "try": {
        "prompt": "Anil faces North and turns right. Then he turns right again. Which way does he face now?",
        "options": [{"id": "a", "text": "East"}, {"id": "b", "text": "West"}, {"id": "c", "text": "South"}, {"id": "d", "text": "North"}],
        "answerId": "c",
        "why": "One right turn takes Anil from North to East, and a second right turn takes him from East to South. East is tempting, but that is where he faces after only the first turn.",
        "speak": "Anil faces North and turns right. Then he turns right again. Which way does he face now?",
    },
    "bullets": ["Clockwise: N, E, S, W", "Right turn = quarter turn clockwise",
                "Opposite of South-East is North-West", "Mirror swaps left and right",
                "Water image swaps top and bottom", "Count small shapes first, then bigger ones"],
    "prompts": {},
    "options": {},
    "hints": {
        # writer hints stated the mirror / water / opposite-direction rule outright
        "a-q04": "Notice which side the F's upright line is on and which way its arms point. What would a standing mirror do?",
        "a-q07": "Picture each of Ritika's cards in a mirror. Check the order of the letters and how each single letter looks.",
        "a-q10": "Picture Vedant's card in the mirror. Reading the image from its left end, which letter comes first, and which way does it face?",
        "a-q18": "Picture Sahana's display in the mirror one digit at a time: where does each digit end up, and how does it look?",
        "a-q20": "Think of a tree standing beside a pond and its picture in the water. Which parts of Girish's word would change, and which would stay?",
        "b-q07": "Sailing straight back is a half turn. Think what that does to each part of the name South-East.",
        "b-q09": "Picture each of Faizal's tiles in a mirror. Check how each digit looks there and where it ends up.",
        "b-q11": "Picture Bhuvan's blocks in the mirror. In every figure, check which letter comes first and which way each letter faces.",
        "b-q19": "Where is the sun in the evening? Then think about which side of Advait his shadow falls on.",
    },
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
