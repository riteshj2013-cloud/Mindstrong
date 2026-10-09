#!/usr/bin/env python3
"""Generate Grade 10 full pack: 9 chapters × (lesson + 24 + 24) MCQs, docs, hints."""
from __future__ import annotations
import json
from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parent
sys.path.insert(0, str(ROOT))

from g10.maths import build_all as build_maths  # noqa: E402
from g10.english import build_all as build_english  # noqa: E402
from g10.science import build_all as build_science  # noqa: E402
from g10.emit import HINTS  # noqa: E402


def write_hint_file(subject: str, const: str, hints: dict):
    lines = [
        'import type { HintOverlay } from "./types";',
        "",
        f"/** Grade 10 {subject.title()} item-specific hints (overlay) */",
        f"export const {const}: Record<string, HintOverlay> = {{",
    ]
    for qid in sorted(hints):
        lines.append(f'  "{qid}": [{json.dumps(hints[qid])}],')
    lines.append("};")
    lines.append("")
    (HINTS / f"g10-{subject}.ts").write_text("\n".join(lines) + "\n")
    print(f"hints g10-{subject}: {len(hints)}")


def main():
    mh = build_maths()
    eh = build_english()
    sh = build_science()
    write_hint_file("maths", "G10_MATHS_HINTS", mh)
    write_hint_file("english", "G10_ENGLISH_HINTS", eh)
    write_hint_file("science", "G10_SCIENCE_HINTS", sh)
    total = len(mh) + len(eh) + len(sh)
    print(f"TOTAL hint overlays / MCQs: {total}")
    assert total == 432, total


if __name__ == "__main__":
    main()
