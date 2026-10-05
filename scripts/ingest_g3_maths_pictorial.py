#!/usr/bin/env python3
"""
Ingest Grade 3 Maths pictorial addendum (Ch1 Numbers).
Parses **Diagram (SVG):** fenced blocks → sanitized figure.type=svg,
merges 9 pictorial MCQs into each Set A/B (replacing text Qs via replaces_hint).
Usage: python3 scripts/ingest_g3_maths_pictorial.py
"""
from __future__ import annotations
import re, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))
from ingest_lib import (
    ROOT, OUT, DOCS, maths_sets, emit_module, letter_id,
    extract_diagram_svg, sanitize_svg,
)
from ingest_g3_maths import LESSON_NUMBERS, CHAPTERS
from ingest_g4_maths_pictorial import parse_pictorial_set, merge_pictorial

JOBS = [
    dict(
        pict="sof-maths/grade-3/chapter-01-numbers-pictorial.md",
        base="sof-maths/grade-3/chapter-01-numbers.md",
        chapter_key="chapter-01-numbers.md",
        prefix="g3-maths-numbers",
        doc_pict="maths-ch01-numbers-pictorial.md",
    ),
]


def run_job(job: dict):
    pict_path = ROOT / job["pict"]
    base_path = ROOT / job["base"]
    if not pict_path.exists():
        print("SKIP missing", pict_path); return
    if not base_path.exists():
        raise SystemExit("missing base %s" % base_path)
    base_md = base_path.read_text()
    pict_md = pict_path.read_text()
    prefix = job["prefix"]
    a_text, b_text = maths_sets(base_md, prefix)
    a_pict = parse_pictorial_set(pict_md, "A", prefix)
    b_pict = parse_pictorial_set(pict_md, "B", prefix)
    assert len(a_pict) == 9, "%s Set A pictorial: %d" % (prefix, len(a_pict))
    assert len(b_pict) == 9, "%s Set B pictorial: %d" % (prefix, len(b_pict))
    print("Parsed %s pictorial A=%d B=%d" % (prefix, len(a_pict), len(b_pict)))
    for q in a_pict + b_pict:
        m = q["figure"]["markup"]
        assert "<svg" in m.lower()
        assert "<script" not in m.lower()
        assert not re.search(r"\son\w+\s*=", m, re.I), q["id"]
    a = merge_pictorial(a_text, a_pict)
    b = merge_pictorial(b_text, b_pict)
    assert len(a) == 24 and len(b) == 24
    pict_count = sum(1 for q in a + b if q.get("figure"))
    print("Merged %s: %d/%d have figures" % (prefix, pict_count, len(a) + len(b)))
    spec = CHAPTERS[job["chapter_key"]]
    emit_module(OUT / spec["file"], spec["export"], spec["meta"], LESSON_NUMBERS, a, b)
    d = DOCS / "grade-3"
    d.mkdir(parents=True, exist_ok=True)
    (d / spec["doc"]).write_text(base_md)
    (d / job["doc_pict"]).write_text(pict_md)


def main():
    for job in JOBS:
        print("---", job["prefix"], "---")
        run_job(job)


if __name__ == "__main__":
    main()
