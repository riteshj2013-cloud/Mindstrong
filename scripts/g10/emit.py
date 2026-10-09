#!/usr/bin/env python3
"""Shared emitters for Grade 10 pack (docs + TS modules + hint overlays)."""
from __future__ import annotations
import hashlib
import json
import random
import re
import sys
from collections import Counter
from pathlib import Path

REPO = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(REPO / "scripts"))
from ingest_lib import emit_module, lesson_ts, assert_no_leak, clean_question  # noqa: E402

OUT = REPO / "lib/prep/content"
HINTS = REPO / "lib/prep/hints"
DOCS = REPO / "docs/sof-source" / "grade-10"
OUT.mkdir(parents=True, exist_ok=True)
HINTS.mkdir(parents=True, exist_ok=True)
DOCS.mkdir(parents=True, exist_ok=True)

BP_HINTS = ["Read carefully.", "Eliminate impossible options first."]
LETTERS = "abcd"


def q(prompt, options, answer, explanation, hint):
    """Build one MCQ. options: 4 strings; answer: 'a'|'b'|'c'|'d'."""
    assert answer in LETTERS and len(options) == 4
    assert len(set(options)) == 4, options
    return {
        "prompt": prompt,
        "options": [{"id": LETTERS[i], "text": options[i]} for i in range(4)],
        "answerId": answer,
        "explanation": explanation,
        "hint": hint,
    }


def rebalance_set(items: list, seed_key: str) -> list:
    """Shuffle option order so a 24-item set lands at 6A/6B/6C/6D.

    Preserves the correct option *text* (and distractors); only position/answerId change.
    """
    assert len(items) == 24, f"{seed_key}: expected 24, got {len(items)}"
    targets = list(LETTERS) * 6  # exactly six of each
    rng = random.Random(int(hashlib.sha256(seed_key.encode()).hexdigest()[:16], 16))
    rng.shuffle(targets)

    out = []
    for item, target in zip(items, targets):
        opts = item["options"]
        ans = item["answerId"]
        assert ans in LETTERS, (seed_key, ans)
        correct = next(o for o in opts if o["id"] == ans)
        others = [o for o in opts if o["id"] != ans]
        rng.shuffle(others)
        placed = [None] * 4
        idx = LETTERS.index(target)
        placed[idx] = correct["text"]
        oi = 0
        for i in range(4):
            if placed[i] is None:
                placed[i] = others[oi]["text"]
                oi += 1
        assert all(t is not None for t in placed) and len(set(placed)) == 4
        out.append({
            **item,
            "options": [{"id": LETTERS[i], "text": placed[i]} for i in range(4)],
            "answerId": target,
        })

    counts = Counter(x["answerId"] for x in out)
    assert all(counts[L] == 6 for L in LETTERS), f"{seed_key} balance {dict(counts)}"
    return out


def finalize(prefix: str, set_letter: str, raw: list) -> list:
    assert len(raw) == 24, f"{prefix}-{set_letter}: {len(raw)}"
    raw = rebalance_set(raw, f"{prefix}-{set_letter}")
    out = []
    for i, item in enumerate(raw, 1):
        qq = {
            "id": f"{prefix}-{set_letter}-q{i:02d}",
            "prompt": item["prompt"],
            "options": item["options"],
            "answerId": item["answerId"],
            "explanation": item["explanation"],
            "hints": BP_HINTS[:],
        }
        clean_question(qq)
        assert_no_leak(qq)
        out.append(qq)
    return out


def write_md(doc_name: str, title: str, meta: dict, lesson_outline: str, set_a, set_b, passages: str = ""):
    lines = [
        f"# Grade 10 {meta['subject']} — {title}",
        "",
        "## Meta",
        f"- grade: 10",
        f"- subject: {meta['subject']}",
        f"- chapter_id: {meta['chapter_id']}",
        f"- chapter_title: {meta['title']}",
        f"- curriculum_source: NCERT Class 10 themes (public topic list only)",
        f"- content_type: original_sof_style",
        "",
        "## Interactive Lesson Outline",
        "",
        lesson_outline.strip(),
        "",
    ]
    if passages:
        lines += [passages.strip(), ""]
    for label, qs in (("A", set_a), ("B", set_b)):
        lines.append(f"## Set {label}")
        lines.append("")
        for i, item in enumerate(qs, 1):
            lines.append(f"### Q{i:02d}")
            lines.append(f"- **stem**: {item['prompt'].replace(chr(10), ' ')}")
            lines.append("- **options**:")
            for o in item["options"]:
                lines.append(f"  - {o['id'].upper()}) {o['text']}")
            lines.append(f"- **answer**: {item['answerId'].upper()}")
            lines.append(f"- **explanation**: {item['explanation']}")
            lines.append("- **difficulty**: mixed")
            lines.append("")
    (DOCS / doc_name).write_text("\n".join(lines))


def write_hints(pack_name: str, const_name: str, prefix_map: dict[str, list]):
    """prefix_map: question_id -> hint string"""
    lines = [
        'import type { HintOverlay } from "./types";',
        "",
        f"/** Grade 10 {pack_name} item-specific hints (overlay) */",
        f"export const {const_name}: Record<string, HintOverlay> = {{",
    ]
    for qid, hint in sorted(prefix_map.items()):
        lines.append(f'  "{qid}": [{json.dumps(hint)}],')
    lines.append("};")
    lines.append("")
    path = HINTS / f"g10-{pack_name.lower()}.ts"
    # pack_name like Maths/English/Science → file g10-maths.ts
    path = HINTS / f"g10-{pack_name.lower()}.ts"
    path.write_text("\n".join(lines))


def emit_chapter(
    *,
    file: str,
    export: str,
    doc: str,
    meta: dict,
    lesson: str,
    set_a_raw: list,
    set_b_raw: list,
    prefix: str,
    lesson_outline: str,
    passages: str = "",
):
    set_a = finalize(prefix, "a", set_a_raw)
    set_b = finalize(prefix, "b", set_b_raw)
    emit_module(OUT / file, export, meta, lesson, set_a, set_b)
    # Prefer olympiad-style wording in the module banner (avoid exam-brand tokens in source).
    out_path = OUT / file
    out_path.write_text(
        out_path.read_text().replace(
            "authored SOF content (original).",
            "authored olympiad-style content (original).",
        )
    )
    write_md(doc, meta["title"], {**meta, "subject": meta.get("subjectLabel", "Subject"), "chapter_id": f"g10-{meta['id']}"}, lesson_outline, set_a, set_b, passages)
    hints = {}
    for qs, raw in ((set_a, set_a_raw), (set_b, set_b_raw)):
        for qq, r in zip(qs, raw):
            hints[qq["id"]] = r["hint"]
    return hints
