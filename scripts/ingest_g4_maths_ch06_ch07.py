#!/usr/bin/env python3
"""
Ingest Grade 4 Maths Chapter 6 Geometry, Perimeter and Symmetry and Chapter 7 Data Handling
(sof-maths/grade-4/chapter-06-geometry-perimeter-symmetry.md, chapter-07-data-handling.md).
Same pipeline as scripts/ingest_g4_maths_time_money.py (ingest_lib: parse_maths_quiz → inline
**Diagram (SVG):** figures, sanitize_svg, emit_module; writer option order kept). Writer hints and lesson
outlines are carried over; Set A/B answers are asserted against each Answer Key table; every
figure must keep aria-label + alt. Writer verification attributes (data-*, e.g. data-symmetric,
data-perimeter) are stripped from the SVG markup so the key is not shipped in the page.
Usage: python3 scripts/ingest_g4_maths_ch06_ch07.py
"""
from __future__ import annotations
import json, re, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))
from ingest_lib import ROOT, OUT, DOCS, parse_maths_quiz, emit_module, strip_editorial_sections

CHAPTERS = [
    {
        "src": "chapter-06-geometry-perimeter-symmetry.md",
        "doc": "maths-ch06-geometry-perimeter-symmetry.md",
        "out": "g4-maths-geometry-perimeter.ts",
        "export": "g4MathsGeometryPerimeter",
        "prefix": "g4-maths-geoperim",
        "steps": 7,
        "meta": {
            "id": "g4-geometry-perimeter",
            "title": "Perimeter, Area & Symmetry",
            "emoji": "🔷",
            "blurb": "Perimeter, area on grids, symmetry, nets & tangrams",
            "topic": "geometry",
            "paperTopics": ["geometry", "measurement"],
        },
        "hook": ("Shapes all around us", "Fences, rangoli, photo frames and gift boxes all use the maths in this chapter."),
        "try": {
            "prompt": "A rectangular garden is 9 m long and 5 m wide. How long is the fence that goes all the way around it?",
            "options": [{"id": "a", "text": "14 m"}, {"id": "b", "text": "45 m"}, {"id": "c", "text": "28 m"}, {"id": "d", "text": "23 m"}],
            "answerId": "c",
            "why": "Add all four sides: 9 + 5 + 9 + 5 = 28 m. 45 is 9 × 5, which is the area, not the distance around.",
            "speak": "A rectangular garden is nine metres long and five metres wide. How long is the fence that goes all the way around it?",
        },
        "bullets": ["Perimeter = add every side", "Area = count the unit squares", "A line of symmetry folds into matching halves",
                    "Cube: 6 faces, 12 edges, 8 corners", "Count small shapes first, then bigger ones"],
        "hints": {},
    },
    {
        "src": "chapter-07-data-handling.md",
        "doc": "maths-ch07-data-handling.md",
        "out": "g4-maths-graphs-tables.ts",
        "export": "g4MathsGraphsTables",
        "prefix": "g4-maths-graphs",
        "steps": 6,
        "meta": {
            "id": "g4-graphs-tables",
            "title": "Graphs & Tables",
            "emoji": "📈",
            "blurb": "Tallies, pictograph keys, scaled bar graphs & tables",
            "topic": "data-handling",
            "paperTopics": ["data-handling", "add-sub"],
        },
        "hook": ("Reading data like a detective", "Class surveys, cricket scores and shop sales are easier to read as tallies, pictographs and bar graphs."),
        "try": {
            "prompt": "In a pictograph, 1 picture stands for 4 mangoes. A row shows 5 pictures. How many mangoes is that?",
            "options": [{"id": "a", "text": "9"}, {"id": "b", "text": "20"}, {"id": "c", "text": "5"}, {"id": "d", "text": "16"}],
            "answerId": "b",
            "why": "Each picture is worth 4, so 5 pictures stand for 5 × 4 = 20 mangoes. 5 is tempting, but it counts pictures, not mangoes.",
            "speak": "In a pictograph, one picture stands for four mangoes. A row shows five pictures. How many mangoes is that?",
        },
        "bullets": ["Tally: a gate of five", "Always read the key first", "Check the scale on a bar graph",
                    "More, fewer, total: find each number first", "Compare pictographs only after using both keys"],
        "hints": {},
    },
]


def raw_items(md: str, set_name: str) -> list[dict]:
    rest = md.split("## Practice Set A")[1]
    a, b = rest.split("## Practice Set B")
    b = b.split("## Answer Key")[0]
    block = a if set_name == "a" else b
    out = []
    for part in re.split(r"^### Q\d+", block, flags=re.M)[1:]:
        h = re.search(r"-\s*\*\*hint\*\*:\s*(.+)", part)
        ans = re.search(r"-\s*\*\*answer\*\*:\s*([A-D])", part)
        out.append({"hint": h.group(1).strip() if h else None, "answer": ans.group(1) if ans else None})
    return out


def answer_key(md: str, set_name: str) -> list[str]:
    key = md.split("## Answer Key")[1]
    sec = key.split("### Set A")[1].split("### Set B")[0] if set_name == "a" else key.split("### Set B")[1]
    return re.findall(r"^\|\s*Q\d+\s*\|[^|]*\|\s*([A-D])\s*\|", sec, re.M)


def lesson_ts(md: str, ch: dict) -> str:
    outline = md.split("## Interactive Lesson Outline")[1].split("## Practice Set A")[0]
    steps = re.findall(r"^### step_(\d+):\s*(.+?)\n([\s\S]*?)(?=^### step_|\Z)", outline, re.M)
    assert len(steps) == ch["steps"], len(steps)
    title, line = ch["hook"]
    parts = [{
        "id": "h", "type": "hook", "emoji": ch["meta"]["emoji"], "title": title,
        "body": [line, "Lesson is optional; jump to a set anytime."],
        "cta": "Let's go!", "visual": "none", "speak": line + " Let's go!",
    }]
    for n, stitle, body in steps:
        tts = re.findall(r"^\s+-\s+(.+)$", body.split("- **on_screen**")[0], re.M)
        chk = re.search(r"-\s*\*\*check\*\*:\s*(.+?)\s+—\s+Answer:\s*(.+)", body)
        assert tts and chk, (n, stitle)
        parts.append({
            "id": "s%d" % int(n), "type": "demo", "title": stitle.strip(),
            "steps": tts + ["Check: " + chk.group(1).strip()],
            "punchline": "Answer: " + chk.group(2).strip(),
            "visual": "none", "speak": " ".join(tts),
        })
    t = ch["try"]
    parts.append({"id": "t1", "type": "try", "title": "Your turn", "prompt": t["prompt"], "options": t["options"],
                  "answerId": t["answerId"], "why": t["why"], "visual": "none", "speak": t["speak"]})
    parts.append({"id": "w", "type": "wrap", "emoji": "⭐", "title": "Nice work!", "bullets": ch["bullets"],
                  "cta": "Back to chapter", "speak": "You are ready for the practice sets."})
    body = ",\n".join("  " + json.dumps(p, ensure_ascii=False) for p in parts)
    return 'const lesson: ChapterDef["lesson"] = [\n%s,\n];' % body


def writer_sets(md: str, prefix: str):
    """Like ingest_lib.maths_sets but keeps the writer's option order: both sets are already
    6/6/6/6, and balance_set would reshuffle options that the explanations describe."""
    rest = md.split("## Practice Set A")[1]
    a_block, b_rest = rest.split("## Practice Set B")
    return parse_maths_quiz(a_block, prefix, "a"), parse_maths_quiz(b_rest.split("## Answer Key")[0], prefix, "b")


def strip_data_attrs(markup: str) -> str:
    return re.sub(r'\sdata-[a-zA-Z0-9_-]+\s*=\s*"[^"]*"', "", markup)


def main() -> None:
    DOCS.joinpath("grade-4").mkdir(parents=True, exist_ok=True)
    for ch in CHAPTERS:
        src = ROOT / "sof-maths/grade-4" / ch["src"]
        md = strip_editorial_sections(src.read_text(encoding="utf-8"))
        set_a, set_b = writer_sets(md, ch["prefix"])
        for name, qs in (("a", set_a), ("b", set_b)):
            raws, key = raw_items(md, name), answer_key(md, name)
            assert len(qs) == len(raws) == len(key) == 24, (name, len(qs), len(raws), len(key))
            for q, r, k in zip(qs, raws, key):
                assert r["answer"] == k, (q["id"], r["answer"], k)
                assert q["answerId"] == k.lower(), ("balance_set moved a key", q["id"])
                assert r["hint"], q["id"]
                q["hints"] = [ch["hints"].get(q["id"].split(ch["prefix"] + "-")[1], r["hint"])]
                fig = q.get("figure")
                if fig:
                    fig["markup"] = strip_data_attrs(fig["markup"])
                    assert fig.get("alt"), q["id"]
                    assert re.search(r'aria-label="[^"]+"', fig["markup"]), q["id"]
            counts = {L: sum(1 for q in qs if q["answerId"] == L) for L in "abcd"}
            assert sorted(counts.values()) == [6, 6, 6, 6], counts
            print("%s Set %s: %d items, %d pictorial, keys %s" % (ch["meta"]["id"], name.upper(), len(qs),
                  sum(1 for q in qs if q.get("figure")), counts))
        emit_module(OUT / ch["out"], ch["export"], ch["meta"], lesson_ts(md, ch), set_a, set_b)
        DOCS.joinpath("grade-4", ch["doc"]).write_text(src.read_text(encoding="utf-8"), encoding="utf-8")


if __name__ == "__main__":
    main()
