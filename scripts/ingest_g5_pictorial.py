#!/usr/bin/env python3
"""
Ingest Grade 5 pictorial packs that currently have figures:
- Maths Ch1 Large Numbers pictorial addendum (9+9)
- Science Ch1–3 inline **Diagram (SVG):** in Quiz Sets

Skips G5 Maths Ch2/Ch3 (no pictorial files yet) and G5/G8 English (no visual: / visuals/).
Usage: python3 scripts/ingest_g5_pictorial.py
"""
from __future__ import annotations
import json, re, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))
from ingest_lib import (
    ROOT, OUT, DOCS, science_sets, maths_sets, emit_module, sanitize_svg,
)
from ingest_g4_maths_pictorial import parse_pictorial_set, merge_pictorial


def extract_existing(path: Path):
    """Return (export_name, meta_dict, lesson_ts) from an already-emitted module."""
    t = path.read_text()
    m_lesson = re.search(
        r'(const lesson: ChapterDef\["lesson"\] = \[[\s\S]*?\];)', t
    )
    m_export = re.search(
        r'export const (\w+): ChapterDef = \{([\s\S]*?)\n\};', t
    )
    if not m_lesson or not m_export:
        raise SystemExit("cannot extract lesson/meta from %s" % path)
    body = m_export.group(2)
    paper_m = re.search(r"paperTopics:\s*(\[[^\]]*\])", body)
    paper = json.loads(paper_m.group(1)) if paper_m else []
    meta = {
        "id": re.search(r'id:\s*"([^"]+)"', body).group(1),
        "title": re.search(r'title:\s*"([^"]+)"', body).group(1),
        "emoji": re.search(r'emoji:\s*"([^"]+)"', body).group(1),
        "blurb": re.search(r'blurb:\s*"([^"]+)"', body).group(1),
        "topic": re.search(r'topic:\s*"([^"]+)"', body).group(1),
        "paperTopics": paper,
    }
    return m_export.group(1), meta, m_lesson.group(1)


def assert_svg_ok(qs, label):
    for q in qs:
        fig = q.get("figure")
        if not fig:
            continue
        m = fig["markup"]
        assert fig.get("type") == "svg" and "<svg" in m.lower(), q["id"]
        assert "<script" not in m.lower(), q["id"]
        assert not re.search(r"\son\w+\s*=", m, re.I), q["id"]


SCIENCE_JOBS = [
    dict(
        fname="chapter-01-plants-seeds-germination-dispersal.md",
        prefix="g5-sci-plants",
        out="g5-science-plants.ts",
        doc="science-ch01-plants.md",
        min_figs=17,  # writer has 9+8 pictorial items
    ),
    dict(
        fname="chapter-02-human-body-skeleton-muscles-nervous.md",
        prefix="g5-sci-body",
        out="g5-science-body.ts",
        doc="science-ch02-body.md",
        min_figs=18,
    ),
    dict(
        fname="chapter-03-sun-moon-solar-system.md",
        prefix="g5-sci-space",
        out="g5-science-space.ts",
        doc="science-ch03-space.md",
        min_figs=18,
    ),
]


def ingest_science():
    src = ROOT / "sof-science/grade-5"
    d = DOCS / "grade-5"
    d.mkdir(parents=True, exist_ok=True)
    for job in SCIENCE_JOBS:
        p = src / job["fname"]
        if not p.exists():
            print("SKIP missing", p)
            continue
        md = p.read_text()
        if "**Diagram (SVG):**" not in md:
            print("SKIP no Diagram SVG", p.name)
            continue
        out_path = OUT / job["out"]
        export, meta, lesson = extract_existing(out_path)
        a, b = science_sets(md, job["prefix"])
        for q in a + b:
            q["explanation"] = re.sub(r"\s*(-{3,}\s*)+$", "", q["explanation"]).strip()
            q["prompt"] = re.sub(r"\s*(-{3,}\s*)+$", "", q["prompt"]).strip()
        for label, qs in (("A", a), ("B", b)):
            assert len(qs) == 24, "%s %s: %d" % (job["fname"], label, len(qs))
            for q in qs:
                assert len(q["options"]) == 4 and len({o["text"] for o in q["options"]}) == 4, q["id"]
                assert q["explanation"], q["id"]
        figs = sum(1 for q in a + b if q.get("figure"))
        print("  %s figures=%d (A=%d B=%d)" % (
            job["prefix"], figs,
            sum(1 for q in a if q.get("figure")),
            sum(1 for q in b if q.get("figure")),
        ))
        assert figs >= job["min_figs"], "%s expected >=%d figs, got %d" % (
            job["fname"], job["min_figs"], figs)
        assert_svg_ok(a + b, job["prefix"])
        emit_module(out_path, export, meta, lesson, a, b)
        (d / job["doc"]).write_text(md)
        print("OK science", job["prefix"])


def ingest_maths_pictorial():
    pict_name = "chapter-01-large-numbers-pictorial.md"
    base_name = "chapter-01-large-numbers.md"
    pict_path = ROOT / "sof-maths/grade-5" / pict_name
    base_path = ROOT / "sof-maths/grade-5" / base_name
    # Also pick up Ch2/Ch3 pictorial if they appear later
    extras = sorted((ROOT / "sof-maths/grade-5").glob("chapter-0[23]*pictorial*.md"))
    jobs = []
    if pict_path.exists() and base_path.exists():
        jobs.append(dict(
            pict=pict_path, base=base_path, prefix="g5-maths-large",
            out="g5-maths-large-numbers.ts",
            doc="maths-ch01-large-numbers.md",
            doc_pict="maths-ch01-large-numbers-pictorial.md",
        ))
    for ep in extras:
        print("NOTE found extra pictorial (needs lesson wiring):", ep.name)
        # Skip auto unless we already have a matching content module mapping
    if not jobs:
        print("SKIP no G5 maths pictorial jobs")
        return
    d = DOCS / "grade-5"
    d.mkdir(parents=True, exist_ok=True)
    for job in jobs:
        export, meta, lesson = extract_existing(OUT / job["out"])
        base_md = job["base"].read_text()
        pict_md = job["pict"].read_text()
        prefix = job["prefix"]
        a_text, b_text = maths_sets(base_md, prefix)
        a_pict = parse_pictorial_set(pict_md, "A", prefix)
        b_pict = parse_pictorial_set(pict_md, "B", prefix)
        assert len(a_pict) == 9 and len(b_pict) == 9, (len(a_pict), len(b_pict))
        print("Parsed %s pictorial A=%d B=%d" % (prefix, len(a_pict), len(b_pict)))
        assert_svg_ok(a_pict + b_pict, prefix)
        a = merge_pictorial(a_text, a_pict)
        b = merge_pictorial(b_text, b_pict)
        assert len(a) == 24 and len(b) == 24
        figs = sum(1 for q in a + b if q.get("figure"))
        print("Merged %s: %d/48 have figures" % (prefix, figs))
        assert figs == 18
        emit_module(OUT / job["out"], export, meta, lesson, a, b)
        (d / job["doc"]).write_text(base_md)
        (d / job["doc_pict"]).write_text(pict_md)
        print("OK maths", prefix)


def main():
    print("--- G5 Science ---")
    ingest_science()
    print("--- G5 Maths pictorial ---")
    ingest_maths_pictorial()
    # Explicitly skip English without visuals
    for grade, folder in ((5, "grade-5-english"), (8, "grade-8-english")):
        root = ROOT / folder
        if not root.exists():
            print("SKIP missing", folder); continue
        has_vis = (root / "visuals").is_dir() and any((root / "visuals").glob("*.svg"))
        has_field = any("visual:" in p.read_text() for p in root.glob("chapter-*.md"))
        if not has_vis or not has_field:
            print("SKIP %s English — no visual: / visuals/ yet" % ("G%d" % grade))
        else:
            print("TODO %s English has visuals — wire ingest" % ("G%d" % grade))


if __name__ == "__main__":
    main()
