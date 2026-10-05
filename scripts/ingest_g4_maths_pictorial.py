#!/usr/bin/env python3
"""
Ingest Grade 4 Maths pictorial addenda (Ch1 Large Numbers, Ch2 Mul/Div).
Parses **Diagram (SVG):** fenced blocks → sanitized figure.type=svg,
merges 9 pictorial MCQs into each Set A/B (replacing text Qs via replaces_hint).
Usage: python3 scripts/ingest_g4_maths_pictorial.py
"""
from __future__ import annotations
import re, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))
from ingest_lib import (
    ROOT, OUT, DOCS, maths_sets, emit_module, letter_id,
    extract_diagram_svg, sanitize_svg,
)
from ingest_g4_maths import LESSON_LARGE, LESSON_MULDIV, CHAPTERS

JOBS = [
    dict(
        pict="sof-maths/grade-4/chapter-01-large-numbers-pictorial.md",
        base="sof-maths/grade-4/chapter-01-large-numbers.md",
        chapter_key="chapter-01-large-numbers.md",
        prefix="g4-maths-large",
        lesson=LESSON_LARGE,
        doc_pict="maths-ch01-large-numbers-pictorial.md",
    ),
    dict(
        pict="sof-maths/grade-4/chapter-02-multiplication-and-division-pictorial.md",
        base="sof-maths/grade-4/chapter-02-multiplication-and-division.md",
        chapter_key="chapter-02-multiplication-and-division.md",
        prefix="g4-maths-muldiv",
        lesson=LESSON_MULDIV,
        doc_pict="maths-ch02-multiply-divide-pictorial.md",
    ),
]


def parse_pictorial_set(md: str, set_letter: str, id_prefix: str) -> list:
    heading = "## Pictorial Set %s" % set_letter
    if heading not in md:
        raise ValueError("missing %s" % heading)
    block = md.split(heading, 1)[1]
    block = re.split(r"\n## (?!#)", block)[0]
    parts = re.split(r"^### PQ[AB]\d+", block, flags=re.M)[1:]
    ids = re.findall(r"^### (PQ[AB]\d+)", block, flags=re.M)
    qs = []
    for i, (part, pqid) in enumerate(zip(parts, ids), 1):
        stem_m = re.search(r"-\s*\*\*stem\*\*:\s*(.+)", part)
        ans_m = re.search(r"-\s*\*\*answer\*\*:\s*([A-D])", part, re.I)
        expl_m = re.search(r"-\s*\*\*explanation\*\*:\s*(.+)", part)
        alt_m = re.search(r"-\s*\*\*alt\*\*:\s*(.+)", part)
        rep_m = re.search(r"-\s*\*\*replaces_hint\*\*:\s*(.+)", part)
        options = []
        for m in re.finditer(r"-\s*([A-D])\)\s*(.+)", part):
            options.append({"id": letter_id(m.group(1)), "text": m.group(2).strip()})
        seen = set(); uniq = []
        for o in options:
            if o["id"] in seen: continue
            seen.add(o["id"]); uniq.append(o)
        options = uniq[:4]
        fig = extract_diagram_svg(part)
        if not stem_m or not ans_m or len(options) < 4 or not fig:
            print("  WARN %s incomplete stem=%s ans=%s opts=%d fig=%s" % (
                pqid, bool(stem_m), bool(ans_m), len(options), bool(fig)))
            continue
        if alt_m and "alt" not in fig:
            fig["alt"] = alt_m.group(1).strip()
        fig["markup"] = sanitize_svg(fig["markup"])
        replaces = None
        if rep_m:
            rm = re.search(r"\bQ(\d+)\b", rep_m.group(1))
            if rm:
                replaces = int(rm.group(1))
        qs.append({
            "id": "%s-%s-pq%02d" % (id_prefix, set_letter.lower(), i),
            "prompt": stem_m.group(1).strip(),
            "options": options,
            "answerId": letter_id(ans_m.group(1)),
            "explanation": expl_m.group(1).strip() if expl_m else "",
            "hints": [
                "Look carefully at the diagram.",
                "Match what you see to the question asked.",
            ],
            "figure": fig,
            "_replaces": replaces,
            "_pqid": pqid,
        })
    return qs


def merge_pictorial(text_qs: list, pict_qs: list) -> list:
    out = [dict(q) for q in text_qs]
    used = set()
    for pq in pict_qs:
        target = pq.get("_replaces")
        idx = None
        if target is not None and 1 <= target <= len(out) and (target - 1) not in used:
            idx = target - 1
        else:
            for cand in list(range(0, len(out), 2)) + list(range(len(out))):
                if cand not in used:
                    idx = cand
                    break
        if idx is None:
            print("  WARN no slot for", pq["_pqid"])
            continue
        used.add(idx)
        clean = {k: v for k, v in pq.items() if not k.startswith("_")}
        clean["id"] = out[idx]["id"]
        out[idx] = clean
        print("  %s → slot Q%02d (%s)" % (pq["_pqid"], idx + 1, clean["id"]))
    return out


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
    emit_module(OUT / spec["file"], spec["export"], spec["meta"], job["lesson"], a, b)
    d = DOCS / "grade-4"
    d.mkdir(parents=True, exist_ok=True)
    (d / spec["doc"]).write_text(base_md)
    (d / job["doc_pict"]).write_text(pict_md)


def main():
    for job in JOBS:
        print("---", job["prefix"], "---")
        run_job(job)


if __name__ == "__main__":
    main()
