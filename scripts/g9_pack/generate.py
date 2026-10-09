#!/usr/bin/env python3
"""Generate Grade 9 content packs, docs, and hint overlays."""
from __future__ import annotations

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from emit import (  # noqa: E402
    BP_HINTS,
    DOCS,
    ENG_BP,
    HINTS,
    OUT,
    SCI_BP,
    emit_hints,
    emit_md,
    emit_module,
    lesson_ts,
    normalize_qs,
)
import maths_data  # noqa: E402
import english_data  # noqa: E402
import science_data  # noqa: E402


def bp_for(ch: dict) -> list[str]:
    kind = ch.get("bp", "maths")
    if kind == "eng":
        return ENG_BP
    if kind == "sci":
        return SCI_BP
    return BP_HINTS


def process(chapters: list[dict], subject: str) -> list[dict]:
    all_items: list[dict] = []
    for ch in chapters:
        hints_bp = bp_for(ch)
        set_a = normalize_qs(ch["A"], ch["prefix"], "a", hints_bp)
        set_b = normalize_qs(ch["B"], ch["prefix"], "b", hints_bp)
        L = ch["lesson"]
        lesson = lesson_ts(
            emoji=L["emoji"],
            title=L["title"],
            body=L["body"],
            speak=L["speak"],
            visual=L["visual"],
            cards=L["cards"],
            demo=L.get("demo"),
            try_q=L["try"],
            wrap_title=L["wrap_title"],
            bullets=L["bullets"],
        )
        emit_module(OUT / ch["file"], ch["export"], ch["meta"], lesson, set_a, set_b)
        emit_md(
            DOCS / ch["doc"],
            grade=9,
            subject=subject,
            chapter_id=ch["meta"]["id"],
            title=ch["meta"]["title"],
            lesson_notes=ch["lesson_notes"],
            set_a=set_a,
            set_b=set_b,
        )
        all_items.extend(set_a)
        all_items.extend(set_b)
    return all_items


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    HINTS.mkdir(parents=True, exist_ok=True)
    DOCS.mkdir(parents=True, exist_ok=True)

    maths_items = process(maths_data.CHAPTERS, "Maths")
    eng_items = process(english_data.CHAPTERS, "English")
    sci_items = process(science_data.CHAPTERS, "Science")

    emit_hints(HINTS / "g9-maths.ts", "G9_MATHS_HINTS", maths_items)
    emit_hints(HINTS / "g9-english.ts", "G9_ENGLISH_HINTS", eng_items)
    emit_hints(HINTS / "g9-science.ts", "G9_SCIENCE_HINTS", sci_items)

    total = len(maths_items) + len(eng_items) + len(sci_items)
    print("TOTAL_MCQS", total)
    assert total == 432, total


if __name__ == "__main__":
    main()
