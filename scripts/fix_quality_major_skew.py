#!/usr/bin/env python3
"""Fix Quality Reviewer major findings: G4 SR-leaked stems + answer-letter rebalance."""

from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
LETTERS = ["a", "b", "c", "d"]

PROMPT_LEAK_RE = re.compile(
    r'prompt:\s*"(?:[^"\\]|\\.)*?Look at Picture PD1\.\s*((?:[^"\\]|\\.)*?)"',
    re.DOTALL,
)

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

SET_SPLIT_RE = re.compile(r"(const SET_A: PrepQuestion\[\] = \[)(.*?)(\n\];\n\nconst SET_B: PrepQuestion\[\] = \[)(.*?)(\n\];)", re.DOTALL)


def even_targets(n: int) -> list[str]:
    """Return n answer letters as evenly as possible (prefer a,b,c,d cycle)."""
    base, rem = divmod(n, 4)
    counts = {L: base + (1 if i < rem else 0) for i, L in enumerate(LETTERS)}
    # Interleave so kids don't get long runs of the same letter.
    out: list[str] = []
    bag = {L: counts[L] for L in LETTERS}
    while len(out) < n:
        for L in LETTERS:
            if bag[L] > 0:
                out.append(L)
                bag[L] -= 1
    return out


def rotate_options(texts: list[str], answer_idx: int, target_letter: str) -> tuple[list[str], str]:
    """Rotate so the correct option lands on target_letter; preserve relative order of distractors."""
    target_idx = LETTERS.index(target_letter)
    shift = (target_idx - answer_idx) % 4
    rotated = [texts[(i - shift) % 4] for i in range(4)]
    return rotated, target_letter


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
        old_ans = m.group(5)
        old_idx = LETTERS.index(old_ans)
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
            f'    ],\n'
            f'    answerId: "{new_ans}"'
        )
        last = m.end()
    pieces.append(body[last:])
    return "".join(pieces), hist


def correct_texts(body: str) -> list[str]:
    out = []
    for m in OPTION_BLOCK_RE.finditer(body):
        texts = [m.group(1), m.group(2), m.group(3), m.group(4)]
        out.append(texts[LETTERS.index(m.group(5))])
    return out


def rebalance_file(path: Path) -> dict:
    text = path.read_text(encoding="utf-8")
    m = SET_SPLIT_RE.search(text)
    if not m:
        raise SystemExit(f"Could not find SET_A/SET_B in {path}")
    before_a, before_b = correct_texts(m.group(2)), correct_texts(m.group(4))
    body_a, hist_a = rebalance_set_body(m.group(2))
    body_b, hist_b = rebalance_set_body(m.group(4))
    after_a, after_b = correct_texts(body_a), correct_texts(body_b)
    if before_a != after_a or before_b != after_b:
        raise SystemExit(f"Correct option text changed in {path}")
    id_re = re.compile(r'^\s*id: "(g[^"]+)"', re.M)
    for label, body, hist in (("A", body_a, hist_a), ("B", body_b, hist_b)):
        n_ids = len(id_re.findall(body))
        n_ans = sum(hist.values())
        if n_ids != n_ans:
            raise SystemExit(f"{path} set-{label}: ids={n_ids} answers={n_ans}")
    new_text = text[: m.start()] + m.group(1) + body_a + m.group(3) + body_b + m.group(5) + text[m.end() :]
    path.write_text(new_text, encoding="utf-8")
    return {"file": str(path.relative_to(ROOT)), "set-a": hist_a, "set-b": hist_b}


def fix_g4_story_prompts(path: Path) -> int:
    text = path.read_text(encoding="utf-8")
    count = 0

    def repl(m: re.Match) -> str:
        nonlocal count
        stem = m.group(1).strip()
        # Normalize escaped quotes stay as-is inside stem
        count += 1
        return f'prompt: "Look at the picture. {stem}"'

    new_text, n = PROMPT_LEAK_RE.subn(repl, text)
    # Also catch any residual "Text-only version for screen readers" still inside prompts
    residual = len(re.findall(r'prompt:\s*"[^"]*Text-only version for screen readers', new_text))
    if residual:
        raise SystemExit(f"Still {residual} leaked SR prompts in {path}")
    path.write_text(new_text, encoding="utf-8")
    return count if n else count


def main() -> None:
    g4 = ROOT / "lib/prep/content/g4-english-reading.ts"
    n = fix_g4_story_prompts(g4)
    print(f"G4 story-spotters: cleaned {n} prompts")

    files = [
        "lib/prep/content/g6-science-separation.ts",
        "lib/prep/content/g6-english-comprehension.ts",
        "lib/prep/content/g6-english-vocabulary.ts",
        # Extreme G1/G2 skew (≥80% one letter) — science + add sets called out in report
        "lib/prep/content/g1-maths-add.ts",
        "lib/prep/content/g2-maths-add-subtract.ts",
        "lib/prep/content/g2-science-air-water.ts",
        "lib/prep/content/g2-science-plants.ts",
        "lib/prep/content/g2-science-animals.ts",
        "lib/prep/content/g1-science-animals.ts",
        "lib/prep/content/g1-science-body.ts",
    ]
    for rel in files:
        info = rebalance_file(ROOT / rel)
        print(f"{info['file']}: set-a={info['set-a']} set-b={info['set-b']}")


if __name__ == "__main__":
    main()
    sys.exit(0)
