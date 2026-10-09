#!/usr/bin/env python3
"""Emit Grade 9 TS chapters, hint overlays, and SOF-source markdown from question banks."""
from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Any

REPO = Path(__file__).resolve().parents[2]
OUT = REPO / "lib/prep/content"
HINTS = REPO / "lib/prep/hints"
DOCS = REPO / "docs/sof-source/grade-9"

BP_HINTS = ["Read carefully.", "Eliminate impossible options first."]
ENG_BP = ["Look for clues in the text.", "Eliminate unsupported answers."]
SCI_BP = ["Think about the lesson key ideas.", "Eliminate options that do not fit."]


def J(x: Any) -> str:
    return json.dumps(x, ensure_ascii=False)


def q_to_ts(q: dict) -> str:
    opts = ",\n".join(
        "      { id: %s, text: %s }" % (J(o["id"]), J(o["text"])) for o in q["options"]
    )
    return (
        "  {\n"
        "    id: %s,\n"
        "    prompt: %s,\n"
        "    options: [\n%s\n    ],\n"
        "    answerId: %s,\n"
        "    explanation: %s,\n"
        "    hints: %s\n"
        "  }"
    ) % (
        J(q["id"]),
        J(q["prompt"]),
        opts,
        J(q["answerId"]),
        J(q["explanation"]),
        J(q.get("hints") or BP_HINTS),
    )


def lesson_ts(
    *,
    emoji: str,
    title: str,
    body: list[str],
    speak: str,
    visual: str,
    cards: list[tuple[str, str, str]],
    demo: dict | None,
    try_q: dict,
    wrap_title: str,
    bullets: list[str],
) -> str:
    cards_ts = ",\n".join(
        "      { label: %s, reveal: %s, emoji: %s }" % (J(a), J(b), J(c))
        for a, b, c in cards
    )
    opts = ",\n".join(
        "        { id: %s, text: %s }" % (J(i), J(t)) for i, t in try_q["options"]
    )
    demo_block = ""
    if demo:
        demo_block = """
  {
    id: "d1",
    type: "demo",
    title: %s,
    visual: %s,
    speak: %s,
    steps: %s,
    punchline: %s,
  },""" % (
            J(demo["title"]),
            J(visual),
            J(demo["speak"]),
            J(demo["steps"]),
            J(demo["punchline"]),
        )
    return """const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: %s,
    title: %s,
    body: %s,
    cta: "Let's go!",
    visual: %s,
    speak: %s,
  },
  {
    id: "r1",
    type: "reveal",
    title: "Key ideas",
    lead: "Tap each card to reveal.",
    visual: %s,
    speak: "Tap each card to reveal a key idea.",
    cards: [
%s
    ],
  },%s
  {
    id: "t1",
    type: "try",
    title: "Your turn",
    prompt: %s,
    options: [
%s
    ],
    answerId: %s,
    why: %s,
    visual: %s,
    speak: %s,
  },
  {
    id: "w",
    type: "wrap",
    emoji: "⭐",
    title: %s,
    bullets: %s,
    cta: "Back to chapter",
    speak: %s,
  },
];""" % (
        J(emoji),
        J(title),
        J(body + ["Lesson is optional; jump to a set anytime."]),
        J(visual),
        J(speak),
        J(visual),
        cards_ts,
        demo_block,
        J(try_q["prompt"]),
        opts,
        J(try_q["answerId"]),
        J(try_q["why"]),
        J(visual),
        J(try_q["prompt"]),
        J(wrap_title),
        J(bullets + ["Set A and Set B ready — 24 MCQs each"]),
        J(wrap_title + " You are ready for the practice sets."),
    )


def emit_module(
    path: Path,
    export_name: str,
    meta: dict,
    lesson: str,
    set_a: list,
    set_b: list,
) -> None:
    note = "%s - authored olympiad-style content (original)." % meta["title"]
    body = """import type { ChapterDef, PrepQuestion } from "../types";

/** %s */

const SET_A: PrepQuestion[] = [
%s
];

const SET_B: PrepQuestion[] = [
%s
];

%s

export const %s: ChapterDef = {
  id: %s,
  title: %s,
  emoji: %s,
  blurb: %s,
  lesson,
  sets: [
    {
      id: "set-a",
      title: "Set A",
      questionCount: SET_A.length,
      topic: %s,
      questions: SET_A,
    },
    {
      id: "set-b",
      title: "Set B",
      questionCount: SET_B.length,
      topic: %s,
      questions: SET_B,
    },
  ],
  paperTopics: %s,
};

export const %sQuestions: PrepQuestion[] = [...SET_A, ...SET_B];
""" % (
        note,
        ",\n".join(q_to_ts(q) for q in set_a),
        ",\n".join(q_to_ts(q) for q in set_b),
        lesson,
        export_name,
        J(meta["id"]),
        J(meta["title"]),
        J(meta["emoji"]),
        J(meta["blurb"]),
        J(meta["topic"]),
        J(meta["topic"]),
        J(meta["paperTopics"]),
        export_name,
    )
    path.write_text(body)
    print("wrote", path.relative_to(REPO), "A=%d B=%d" % (len(set_a), len(set_b)))


def md_escape(s: str) -> str:
    return s


def emit_md(path: Path, *, grade: int, subject: str, chapter_id: str, title: str, lesson_notes: list[str], set_a: list, set_b: list) -> None:
    lines = [
        f"# Grade {grade} {subject} — {title}",
        "",
        "## Meta",
        f"- grade: {grade}",
        f"- subject: {subject}",
        f"- chapter_id: {chapter_id}",
        f"- chapter_title: {title}",
        "- curriculum_source: NCERT Class 9 themes (public topic list only)",
        "- content_type: original_olympiad_style",
        "",
        "## Interactive Lesson Outline",
        "",
    ]
    for i, note in enumerate(lesson_notes, 1):
        lines.append(f"### step_{i}")
        lines.append(f"- {note}")
        lines.append("")
    for label, qs in (("A", set_a), ("B", set_b)):
        lines.append(f"## Practice Set {label}")
        lines.append("")
        for i, q in enumerate(qs, 1):
            lines.append(f"### Q{i:02d}")
            lines.append(f"- **stem**: {md_escape(q['prompt'])}")
            lines.append("- **options**:")
            for o in q["options"]:
                letter = o["id"].upper()
                lines.append(f"  - {letter}) {md_escape(o['text'])}")
            lines.append(f"- **answer**: {q['answerId'].upper()}")
            lines.append(f"- **explanation**: {md_escape(q['explanation'])}")
            lines.append(f"- **skill**: {q.get('skill', 'general')}")
            lines.append(f"- **difficulty**: {q.get('difficulty', 'medium')}")
            lines.append("")
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text("\n".join(lines))
    print("wrote", path.relative_to(REPO))


def normalize_qs(raw: list[dict], prefix: str, set_id: str, default_hints: list[str]) -> list[dict]:
    out = []
    assert len(raw) == 24, "%s-%s expected 24 got %d" % (prefix, set_id, len(raw))
    for i, q in enumerate(raw, 1):
        opts = q["options"]
        assert len(opts) == 4, q
        # options may be list of strings or dicts
        if isinstance(opts[0], str):
            letters = "abcd"
            ans_letter = q["answer"].lower()
            options = [{"id": letters[j], "text": opts[j]} for j in range(4)]
            answer_id = ans_letter
        else:
            options = opts
            answer_id = q["answerId"]
        texts = [o["text"] for o in options]
        assert len(set(texts)) == 4, "duplicate options in %s-%s-q%02d: %s" % (prefix, set_id, i, texts)
        assert answer_id in "abcd"
        item = {
            "id": "%s-%s-q%02d" % (prefix, set_id, i),
            "prompt": q["prompt"].strip(),
            "options": options,
            "answerId": answer_id,
            "explanation": q["explanation"].strip(),
            "hints": list(default_hints),
            "skill": q.get("skill", "general"),
            "difficulty": q.get("difficulty", "medium"),
            "hint_overlay": q.get("hint") or "Use the lesson idea that fits this stem.",
        }
        # forbid banned terms in kid-facing strings
        blob = " ".join([item["prompt"], item["explanation"]] + [o["text"] for o in options])
        for bad in (r"\bSOF\b", r"\bIMO\b", r"\bIEO\b", r"\bNSO\b", r"\bTODO\b", r"\$\d"):
            if re.search(bad, blob):
                raise ValueError("leak %s in %s" % (bad, item["id"]))
        out.append(item)
    return out


def emit_hints(path: Path, export: str, items: list[dict]) -> None:
    lines = [
        'import type { HintOverlay } from "./types";',
        "",
        f"/** Grade 9 item-specific hints (overlay) */",
        f"export const {export}: Record<string, HintOverlay> = {{",
    ]
    for q in items:
        lines.append("  %s: [%s]," % (J(q["id"]), J(q["hint_overlay"])))
    lines.append("};")
    lines.append("")
    path.write_text("\n".join(lines))
    print("wrote", path.relative_to(REPO), "hints=%d" % len(items))
