#!/usr/bin/env python3
"""
Ingest Grade 4 Maths Chapter 10 Logical Reasoning 2: Coding, Ranking and Alphabet
(sof-maths/grade-4/chapter-10-lr2-coding-ranking-alphabet.md).
Same pipeline as scripts/ingest_g4_maths_ch06_ch07.py (parse_maths_quiz → inline **Diagram (SVG):**
figures, sanitize_svg, emit_module; writer option order kept, Set A/B answers asserted against the
Answer Key, 6/6/6/6 asserted). Writer verification attributes (data-label, data-rule, data-key, ...) are stripped from the SVG markup so the key is not shipped in the page.
Usage: python3 scripts/ingest_g4_maths_ch10.py
"""
from __future__ import annotations
import re, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))
from ingest_lib import ROOT, OUT, DOCS, emit_module, strip_editorial_sections
from ingest_g4_maths_ch06_ch07 import raw_items, answer_key, lesson_ts, writer_sets, strip_data_attrs

CH = {
    "src": "chapter-10-lr2-coding-ranking-alphabet.md",
    "doc": "maths-ch10-lr2-coding-ranking-alphabet.md",
    "out": "g4-maths-lr-coding-ranking.ts",
    "export": "g4MathsLrCodingRanking",
    "prefix": "g4-maths-lrcode",
    "steps": 7,
    "meta": {
        "id": "g4-lr-coding-ranking",
        "title": "Logical Reasoning: Coding, Ranking & Alphabet",
        "emoji": "🔐",
        "blurb": "Letter codes, ranks in a row, ordering from clues & alphabet positions",
        "topic": "patterns",
        "paperTopics": ["patterns", "add-sub"],
    },
    "hook": ("Crack the code", "Secret codes, queues and alphabet puzzles all follow a rule. Find it, test it, and the answer follows."),
    "try": {
        "prompt": "If BAT is coded CBU, how is HEN coded?",
        "options": [{"id": "a", "text": "GDM"}, {"id": "b", "text": "IFO"}, {"id": "c", "text": "IEN"}, {"id": "d", "text": "JGP"}],
        "answerId": "b",
        "why": "Each letter of BAT moves 1 place forward (B to C, A to B, T to U), so HEN becomes IFO. GDM is tempting, but it moves each letter back instead of forward.",
        "speak": "If bat is coded C B U, how is hen coded?",
    },
    "bullets": ["A is 1st, Z is 26th; from the right use 27 minus the place", "'Between' leaves out both end letters",
                "Find the move from one letter, then test it on all", "Undo a code in reverse order",
                "Row total = left place + right place - 1", "Join clues where they share a name"],
    # Reviewer overrides (option ids, positions and keys unchanged). All keys re-solved; the four
    # clue-ordering puzzles (a-q15, a-q18, a-q21, b-q18, b-q21) were brute-forced: each has exactly one order.
    "prompts": {},
    "options": {},
    "hints": {
        # writer hints named the direction of the shift / that the steps grow (states the rule)
        "a-q02": "Count how far S moved to reach its code letter. Check O, A and P move the same way, then use it on MILK.",
        "a-q17": "Split Rahul's cards into two lists that take turns. In the list with the gap, write down how many steps there are between neighbouring letters.",
    },
    "explanations": {
        "a-q13": "In CUP \u2192 DVQ, PEN \u2192 QFO and MAT \u2192 NBU every letter moves 1 place forward. In SUN \u2192 TVP, S \u2192 T and U \u2192 V are right, but N should become O, not P. So SUN \u2192 TVP is the odd one out. PEN \u2192 QFO is tempting because its code looks the least like the word, but P \u2192 Q, E \u2192 F and N \u2192 O each move exactly 1 place.",
        "b-q13": "CAB = 3, 1, 2 \u2192 312; BED = 2, 5, 4 \u2192 254; FAD = 6, 1, 4 \u2192 614. DIG should be 4, 9, 7 \u2192 497, because G is the 7th letter, not the 6th. So DIG \u2192 496 is wrong. BED \u2192 254 is tempting because its digits are not in counting order, but B = 2, E = 5 and D = 4 are all right; the code keeps the word's own letter order.",
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
        assert sum(1 for q in qs if q.get("figure")) == 9, name
        print("%s Set %s: %d items, %d pictorial, keys %s" % (CH["meta"]["id"], name.upper(), len(qs),
              sum(1 for q in qs if q.get("figure")), counts))
    emit_module(OUT / CH["out"], CH["export"], CH["meta"], lesson_ts(md, CH), set_a, set_b)
    DOCS.joinpath("grade-4", CH["doc"]).write_text(src.read_text(encoding="utf-8"), encoding="utf-8")


if __name__ == "__main__":
    main()
