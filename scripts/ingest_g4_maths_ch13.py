#!/usr/bin/env python3
"""
Ingest Grade 4 Maths Chapter 13 Achievers: Maths HOTS
(sof-maths/grade-4/chapter-13-achievers-hots.md).
Same pipeline as scripts/ingest_g4_maths_ch12.py. Writer verification attributes are stripped.
Usage: python3 scripts/ingest_g4_maths_ch13.py
"""
from __future__ import annotations
import re, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))
from ingest_lib import ROOT, OUT, DOCS, emit_module, strip_editorial_sections
from ingest_g4_maths_ch06_ch07 import raw_items, answer_key, lesson_ts, writer_sets, strip_data_attrs

CH = {
    "src": "chapter-13-achievers-hots.md",
    "doc": "maths-ch13-achievers-hots.md",
    "out": "g4-maths-achievers-hots.ts",
    "export": "g4MathsAchieversHots",
    "prefix": "g4-maths-achhots",
    "steps": 7,
    "meta": {
        "id": "g4-achievers-hots",
        "title": "Achievers: Maths HOTS",
        "emoji": "\U0001F3C6",
        "blurb": "Multi-step HOTS joining numbers, measures, fractions, time, money & graphs",
        "topic": "word-problems",
        "paperTopics": ["numbers", "measurement", "fractions", "data-handling"],
    },
    "hook": ("Join the clues", "Achiever questions hide more than one idea. Read every clue, match the units, cross out what fails — then join the steps and watch the leftover."),
    "try": {
        "prompt": "A number is between 10 and 50, is a multiple of 5, and its digits add up to 8. Which number is it?",
        "options": [{"id": "a", "text": "15"}, {"id": "b", "text": "35"}, {"id": "c", "text": "40"}, {"id": "d", "text": "45"}],
        "answerId": "b",
        "why": "Multiples of 5 between 10 and 50 include 15, 20, 25, 30, 35, 40, 45, 50. Digits that add to 8 leave only 35. 40 is tempting because it is a multiple of 5, but 4 + 0 = 4, not 8.",
        "speak": "A number is between 10 and 50, is a multiple of 5, and its digits add up to 8. Which number is it?",
    },
    "bullets": ["Read every clue before choosing", "Make units match before comparing",
                "Cross out anything that fails one clue", "Test each true/false statement with numbers",
                "Finish step 1 before starting step 2", "Ask what each leftover number is for"],
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
    # Kid-facing lesson must not use editorial "trap" wording (audit-content editorial-word).
    out = OUT / CH["out"]
    text = out.read_text(encoding="utf-8")
    text = text.replace("so a quick choice is often a trap.", "so a quick choice is often wrong.")
    text = text.replace("it is the trap the question set, not the answer.", "it is a wrong option the question set, not the answer.")
    out.write_text(text, encoding="utf-8")
    DOCS.joinpath("grade-4", CH["doc"]).write_text(src.read_text(encoding="utf-8"), encoding="utf-8")


if __name__ == "__main__":
    main()
