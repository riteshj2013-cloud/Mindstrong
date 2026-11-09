#!/usr/bin/env python3
"""
Ingest Grade 7 Maths Achievers extras (5 hard items × 3 existing chapters).
Writes separate content modules and patches parent ChapterDef.sets with a
set-achievers entry. Does NOT overwrite parent Set A/B questions.

Usage: python3 scripts/ingest_g7_maths_achievers_extras.py
"""
from __future__ import annotations
import json, re, sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from ingest_lib import ROOT, OUT, DOCS, extract_diagram_svg, q_to_ts
from ingest_g4_maths_ch06_ch07 import strip_data_attrs

CHAPTERS = [
  dict(
    src="chapter-01-integers-achievers-extras.md",
    doc="maths-ch01-integers-achievers-extras.md",
    out="g7-maths-integers-achievers.ts",
    export="g7MathsIntegersAchievers",
    parent="g7-maths-integers.ts",
    parent_export="g7MathsIntegers",
    topic="integers",
    letters="ACBDB",
    pictorial=2,
  ),
  dict(
    src="chapter-02-simple-equations-achievers-extras.md",
    doc="maths-ch02-simple-equations-achievers-extras.md",
    out="g7-maths-equations-achievers.ts",
    export="g7MathsEquationsAchievers",
    parent="g7-maths-equations.ts",
    parent_export="g7MathsEquations",
    topic="equations",
    letters="DABCA",
    pictorial=2,
  ),
  dict(
    src="chapter-03-lines-and-angles-achievers-extras.md",
    doc="maths-ch03-lines-and-angles-achievers-extras.md",
    out="g7-maths-angles-achievers.ts",
    export="g7MathsAnglesAchievers",
    parent="g7-maths-angles.ts",
    parent_export="g7MathsAngles",
    topic="angles",
    letters="CBDAC",
    pictorial=2,
  ),
]

ITEM_SPLIT = re.compile(r"^### Q(\d+)\s*$", re.M)
OPT_RE = re.compile(r"^\s*-\s*([A-D])\)\s*(.+?)\s*$", re.M)
FIELD_RE = re.compile(r"^-\s*\*\*([a-zA-Z0-9_]+)\*\*:\s*(.*)$", re.M)


def scrub(text: str) -> str:
    return re.sub(r"\bSOF\b", "olympiad-style", text)


def parse_extra_set(md: str) -> list[dict]:
    block = md.split("## Extra Set")[1].split("## Answer Key")[0]
    parts = ITEM_SPLIT.split(block)
    qs = []
    for i in range(1, len(parts), 2):
        num, body = int(parts[i]), parts[i + 1]
        assert num == len(qs) + 1, (num, len(qs) + 1)
        fields = {m.group(1): m.group(2).strip() for m in FIELD_RE.finditer(body)}
        stem = fields.get("stem") or ""
        sm = re.search(
            r"-\s*\*\*stem\*\*:\s*(.+?)(?=\n\n\*\*Diagram|\n- \*\*options\*\*|\n- \*\*answer\*\*)",
            body,
            re.S,
        )
        if sm:
            stem = sm.group(1).strip()
        hint = fields.get("hint") or ""
        expl = fields.get("explanation") or ""
        ans = (fields.get("answer") or "").strip().upper()
        qid = fields.get("id") or ""
        options = [{"id": m.group(1).lower(), "text": m.group(2).strip()} for m in OPT_RE.finditer(body)]
        assert len(options) == 4 and ans in "ABCD" and qid, (qid, ans, len(options))
        qobj = {
            "id": qid,
            "prompt": stem,
            "options": options,
            "answerId": ans.lower(),
            "explanation": expl,
            "hints": [hint] if hint else ["Use every clue. Cross out anything that fails one of them."],
        }
        fig = extract_diagram_svg(body)
        if fig:
            fig["markup"] = strip_data_attrs(fig["markup"])
            assert "data-" not in fig["markup"], qid
            qobj["figure"] = fig
        qs.append(qobj)
    return qs


def emit_extras(path: Path, export: str, title: str, qs: list[dict]) -> None:
    note = "%s - Achievers extras (original olympiad-style; not affiliated with SOF)." % title
    body = """import type { PrepQuestion } from "../types";

/** %s */

export const %s: PrepQuestion[] = [
%s
];
""" % (note, export, ",\n".join(q_to_ts(q) for q in qs))
    path.write_text(body)
    print("Wrote", path.name, len(qs))


def patch_parent(parent_path: Path, parent_export: str, extras_file: str, extras_export: str, topic: str) -> None:
    s = parent_path.read_text()
    imp = 'import { %s } from "./%s";\n' % (extras_export, extras_file.replace(".ts", ""))
    if extras_export not in s:
        s = s.replace(
            'import type { ChapterDef, PrepQuestion } from "../types";\n',
            'import type { ChapterDef, PrepQuestion } from "../types";\n' + imp,
            1,
        )
    if 'id: "set-achievers"' not in s:
        m = re.search(
            r"(export const %s: ChapterDef = \{[\s\S]*?sets: \[[\s\S]*?)(\n  \],\n  paperTopics:)"
            % re.escape(parent_export),
            s,
        )
        if not m:
            raise SystemExit("cannot find sets in " + parent_path.name)
        insert = """
    {
      id: "set-achievers",
      title: "Achievers",
      questionCount: %s.length,
      topic: %s,
      questions: %s,
    },""" % (extras_export, json.dumps(topic), extras_export)
        s = s[: m.end(1)] + insert + s[m.start(2) :]
    parent_path.write_text(s)
    print("patched", parent_path.name)


def main() -> None:
    DOCS.joinpath("grade-7").mkdir(parents=True, exist_ok=True)
    for ch in CHAPTERS:
        src = ROOT / "sof-maths/grade-7" / ch["src"]
        raw = src.read_text(encoding="utf-8")
        assert not re.search(r"\bSOF\b", raw.split("## Extra Set")[1].split("## Answer Key")[0]), ch["src"]
        qs = parse_extra_set(raw)
        assert len(qs) == 5, (ch["src"], len(qs))
        got = "".join(q["answerId"].upper() for q in qs)
        assert got == ch["letters"], (ch["src"], got, ch["letters"])
        pic = sum(1 for q in qs if q.get("figure"))
        if ch["pictorial"]:
            assert pic == ch["pictorial"], (ch["src"], pic)
        for q in qs:
            assert q["explanation"] and q["hints"]
            blob = q["prompt"] + q["explanation"] + " ".join(q["hints"])
            assert not re.search(r"\bSOF\b", blob), q["id"]
        title = re.search(r"chapter_title:\s*(.+)", raw).group(1).strip()
        emit_extras(OUT / ch["out"], ch["export"], title, qs)
        patch_parent(OUT / ch["parent"], ch["parent_export"], ch["out"], ch["export"], ch["topic"])
        doc = scrub(raw)
        if "Writer/editor source only" not in doc:
            doc = doc.replace(
                "## Meta\n",
                "## Meta\n- note: Writer/editor source only. Meta and notes are stripped before anything ships to kids.\n",
                1,
            )
        DOCS.joinpath("grade-7", ch["doc"]).write_text(doc, encoding="utf-8")
        print("  keys", got, "pictorial", pic)


if __name__ == "__main__":
    main()
