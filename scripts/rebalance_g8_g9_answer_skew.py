#!/usr/bin/env python3
"""Rebalance G8/G9 MCQ sets that are ≥60% one answer letter to ~6A/6B/6C/6D.

Shuffles option order only; preserves correct option *text*. Does not touch
already-balanced sets (or G7/G10).
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
LETTERS = ["a", "b", "c", "d"]
THRESHOLD = 0.60

OPTION_BLOCK_RE = re.compile(
    r'options:\s*\[\s*'
    r'\{ id: "a", text: "((?:[^"\\]|\\.)*)" \},\s*'
    r'\{ id: "b", text: "((?:[^"\\]|\\.)*)" \},\s*'
    r'\{ id: "c", text: "((?:[^"\\]|\\.)*)" \},\s*'
    r'\{ id: "d", text: "((?:[^"\\]|\\.)*)" \}\s*'
    r'\],\s*'
    r'answerId:\s*"([abcd])"',
    re.DOTALL,
)

SET_SPLIT_RE = re.compile(
    r"(const SET_A: PrepQuestion\[\] = \[)(.*?)(\n\];\n\nconst SET_B: PrepQuestion\[\] = \[)(.*?)(\n\];)",
    re.DOTALL,
)


def even_targets(n: int) -> list[str]:
    """Return n answer letters interleaved ~evenly (6/6/6/6 for n=24)."""
    base, rem = divmod(n, 4)
    counts = {L: base + (1 if i < rem else 0) for i, L in enumerate(LETTERS)}
    out: list[str] = []
    bag = {L: counts[L] for L in LETTERS}
    while len(out) < n:
        for L in LETTERS:
            if bag[L] > 0:
                out.append(L)
                bag[L] -= 1
    return out


def rotate_options(texts: list[str], answer_idx: int, target_letter: str) -> tuple[list[str], str]:
    target_idx = LETTERS.index(target_letter)
    shift = (target_idx - answer_idx) % 4
    rotated = [texts[(i - shift) % 4] for i in range(4)]
    return rotated, target_letter


def hist_of(body: str) -> dict[str, int]:
    h = {L: 0 for L in LETTERS}
    for m in OPTION_BLOCK_RE.finditer(body):
        h[m.group(5)] += 1
    return h


def max_share(h: dict[str, int]) -> float:
    n = sum(h.values())
    if not n:
        return 0.0
    return max(h.values()) / n


def correct_texts(body: str) -> list[str]:
    out = []
    for m in OPTION_BLOCK_RE.finditer(body):
        texts = [m.group(1), m.group(2), m.group(3), m.group(4)]
        out.append(texts[LETTERS.index(m.group(5))])
    return out


def rebalance_set_body(body: str) -> tuple[str, dict[str, int]]:
    matches = list(OPTION_BLOCK_RE.finditer(body))
    if not matches:
        return body, {}
    targets = even_targets(len(matches))
    hist = {L: 0 for L in LETTERS}
    pieces: list[str] = []
    last = 0
    for i, m in enumerate(matches):
        texts = [m.group(1), m.group(2), m.group(3), m.group(4)]
        old_idx = LETTERS.index(m.group(5))
        target = targets[i]
        new_texts, new_ans = rotate_options(texts, old_idx, target)
        hist[new_ans] += 1
        pieces.append(body[last : m.start()])
        pieces.append(
            "options: [\n"
            f'      {{ id: "a", text: "{new_texts[0]}" }},\n'
            f'      {{ id: "b", text: "{new_texts[1]}" }},\n'
            f'      {{ id: "c", text: "{new_texts[2]}" }},\n'
            f'      {{ id: "d", text: "{new_texts[3]}" }}\n'
            f"    ],\n"
            f'    answerId: "{new_ans}"'
        )
        last = m.end()
    pieces.append(body[last:])
    return "".join(pieces), hist


def rebalance_file(path: Path) -> list[dict]:
    text = path.read_text(encoding="utf-8")
    m = SET_SPLIT_RE.search(text)
    if not m:
        raise SystemExit(f"Could not find SET_A/SET_B in {path}")

    results = []
    bodies = {"a": m.group(2), "b": m.group(4)}
    new_bodies = dict(bodies)

    for label in ("a", "b"):
        before = hist_of(bodies[label])
        share = max_share(before)
        if share < THRESHOLD:
            results.append(
                {
                    "file": str(path.relative_to(ROOT)),
                    "set": label,
                    "action": "skip",
                    "before": before,
                    "after": before,
                    "share": share,
                }
            )
            continue
        before_texts = correct_texts(bodies[label])
        body, after = rebalance_set_body(bodies[label])
        after_texts = correct_texts(body)
        if before_texts != after_texts:
            raise SystemExit(f"Correct option text changed in {path} set-{label}")
        new_bodies[label] = body
        results.append(
            {
                "file": str(path.relative_to(ROOT)),
                "set": label,
                "action": "rebalance",
                "before": before,
                "after": after,
                "share": share,
            }
        )

    if any(r["action"] == "rebalance" for r in results):
        new_text = (
            text[: m.start()]
            + m.group(1)
            + new_bodies["a"]
            + m.group(3)
            + new_bodies["b"]
            + m.group(5)
            + text[m.end() :]
        )
        path.write_text(new_text, encoding="utf-8")
    return results


def main() -> None:
    files = sorted((ROOT / "lib/prep/content").glob("g8-*.ts")) + sorted(
        (ROOT / "lib/prep/content").glob("g9-*.ts")
    )
    changed = 0
    skipped = 0
    for path in files:
        for r in rebalance_file(path):
            b, a = r["before"], r["after"]
            fmt = lambda h: f"A={h['a']} B={h['b']} C={h['c']} D={h['d']}"
            if r["action"] == "rebalance":
                changed += 1
                print(
                    f"REBALANCE {r['file']} set-{r['set']}: "
                    f"{fmt(b)} ({r['share']*100:.0f}% max) → {fmt(a)}"
                )
            else:
                skipped += 1
    print(f"\nDone: rebalanced {changed} sets; left {skipped} sets untouched (<{THRESHOLD*100:.0f}%).")
    if changed == 0:
        print("No skewed sets found.", file=sys.stderr)


if __name__ == "__main__":
    main()
