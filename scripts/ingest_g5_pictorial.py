#!/usr/bin/env python3
"""
Ingest Grade 5 pictorial packs that currently have figures:
- Maths Ch1 Large Numbers, Ch2 Shapes & Angles, Ch3 Fractions pictorial addenda (9+9 each)
- Science Ch1–3 inline **Diagram (SVG):** in Quiz Sets

Skips G5/G8 English until grade-5-english/ / grade-8-english/ ship visual: + visuals/.
Usage: python3 scripts/ingest_g5_pictorial.py

Sources: prefers /workspace/mindstrong/sof-maths|sof-science/grade-5 when present;
falls back to docs/sof-source/grade-5 (cloud / docs-first workflow).
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
    topic_m = re.search(r'topic:\s*"([^"]+)"', body)
    meta = {
        "id": re.search(r'id:\s*"([^"]+)"', body).group(1),
        "title": re.search(r'title:\s*"([^"]+)"', body).group(1),
        "emoji": re.search(r'emoji:\s*"([^"]+)"', body).group(1),
        "blurb": re.search(r'blurb:\s*"([^"]+)"', body).group(1),
        "topic": topic_m.group(1) if topic_m else "add-sub",
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
        doc="science-ch01-plants.md",
        prefix="g5-sci-plants",
        out="g5-science-plants.ts",
        min_figs=17,  # writer has 9+8 pictorial items
    ),
    dict(
        fname="chapter-02-human-body-skeleton-muscles-nervous.md",
        doc="science-ch02-body.md",
        prefix="g5-sci-body",
        out="g5-science-body.ts",
        min_figs=18,
    ),
    dict(
        fname="chapter-03-sun-moon-solar-system.md",
        doc="science-ch03-space.md",
        prefix="g5-sci-space",
        out="g5-science-space.ts",
        min_figs=18,
    ),
]

MATHS_PICT_JOBS = [
    dict(
        mind_pict="chapter-01-large-numbers-pictorial.md",
        mind_base="chapter-01-large-numbers.md",
        doc_pict="maths-ch01-large-numbers-pictorial.md",
        doc_base="maths-ch01-large-numbers.md",
        prefix="g5-maths-large",
        out="g5-maths-large-numbers.ts",
    ),
    dict(
        mind_pict="chapter-02-shapes-and-angles-pictorial.md",
        mind_base="chapter-02-shapes-and-angles.md",
        doc_pict="maths-ch02-shapes-angles-pictorial.md",
        doc_base="maths-ch02-shapes-angles.md",
        prefix="g5-maths-angles",
        out="g5-maths-angles.ts",
    ),
    dict(
        mind_pict="chapter-03-fractions-pictorial.md",
        mind_base="chapter-03-fractions.md",
        doc_pict="maths-ch03-fractions-pictorial.md",
        doc_base="maths-ch03-fractions.md",
        prefix="g5-maths-frac",
        out="g5-maths-fractions.ts",
    ),
]


def resolve_maths_paths(job: dict):
    """Prefer mindstrong writer packs; fall back to docs/sof-source."""
    mind_dir = ROOT / "sof-maths/grade-5"
    docs_dir = DOCS / "grade-5"
    pict = mind_dir / job["mind_pict"]
    base = mind_dir / job["mind_base"]
    if pict.exists() and base.exists():
        return pict, base, True  # sync copies into docs
    pict = docs_dir / job["doc_pict"]
    base = docs_dir / job["doc_base"]
    if pict.exists() and base.exists():
        return pict, base, False
    return None, None, False


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
        if not out_path.exists():
            print("SKIP no content module", out_path.name)
            continue
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
    d = DOCS / "grade-5"
    d.mkdir(parents=True, exist_ok=True)
    jobs_run = 0
    for job in MATHS_PICT_JOBS:
        pict_path, base_path, sync_docs = resolve_maths_paths(job)
        if pict_path is None:
            print("SKIP missing pictorial/base for", job["prefix"])
            continue
        out_path = OUT / job["out"]
        if not out_path.exists():
            print("SKIP no content module", out_path.name)
            continue
        # Docs-fallback: do not churn Ch1 when figures already shipped
        if (
            not sync_docs
            and job["prefix"] == "g5-maths-large"
            and out_path.read_text().count('figure: {"type": "svg"') >= 18
        ):
            print("SKIP", job["prefix"], "(already has figures)")
            continue
        export, meta, lesson = extract_existing(out_path)
        base_md = base_path.read_text()
        pict_md = pict_path.read_text()
        prefix = job["prefix"]
        a_text, b_text = maths_sets(base_md, prefix)
        a_pict = parse_pictorial_set(pict_md, "A", prefix)
        b_pict = parse_pictorial_set(pict_md, "B", prefix)
        assert len(a_pict) == 9 and len(b_pict) == 9, (
            job["prefix"], len(a_pict), len(b_pict))
        print("Parsed %s pictorial A=%d B=%d (from %s)" % (
            prefix, len(a_pict), len(b_pict), pict_path))
        assert_svg_ok(a_pict + b_pict, prefix)
        a = merge_pictorial(a_text, a_pict)
        b = merge_pictorial(b_text, b_pict)
        assert len(a) == 24 and len(b) == 24
        figs = sum(1 for q in a + b if q.get("figure"))
        print("Merged %s: %d/48 have figures" % (prefix, figs))
        assert figs == 18
        emit_module(out_path, export, meta, lesson, a, b)
        if sync_docs:
            (d / job["doc_base"]).write_text(base_md)
            (d / job["doc_pict"]).write_text(pict_md)
        print("OK maths", prefix)
        jobs_run += 1
    if not jobs_run:
        print("SKIP no G5 maths pictorial jobs")


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
