#!/usr/bin/env python3
"""Shared answer-letter balancer for the content generators.

balance_items(items) reorders each item's options so the answer letters in a set
come out as close to 25% A/B/C/D as possible. Only option ORDER and answerId
change; the correct option text (and any option figure) is preserved.

Items whose options or explanation refer to option positions ("Both A and B",
"All of the above", "Only D is correct", "(a) and (b)", ...) are pinned: their
order is left exactly as written and the other items absorb the balance.

Used by gen_g1_g2_packs.py, generate_g6_pack.py and g9_pack/emit.py so that
regenerating from source keeps sets balanced (the audit fails any set with
more than 50% of one letter).
"""
from __future__ import annotations

import re

LETTERS = "abcd"

_POSITIONAL_OPTION = re.compile(
    r"\b(?:all|none|both|neither|any) of (?:the )?(?:above|these|those|them|the options)\b"
    r"|\bthe above\b"
    r"|\b[A-D]\s*(?:,|and|or|nor|&)\s*[A-D]\b"
    r"|\(\s*[a-dA-D]\s*\)"
    r"|\b(?:option|choice)s?\s+[A-Da-d]\b",
    re.I,
)
# Option text that names a lettered figure part ("Card A", "Shape B", "Label C", or just "D").
_LABEL_OPTION = re.compile(r"\b[A-Z][a-z]+ [A-D](?![\w'’])|^\s*[A-D]\s*$")
# Letter references inside explanations/hints, e.g. "Only D matches", "In C and D", "option B".
_POSITIONAL_TEXT = re.compile(
    r"\b(?:[Oo]ption|[Cc]hoice)s?\s+\(?[A-Da-d]\)?(?![\w'’])"
    r"|\b(?:Only|only|In|in)\s+[A-D](?![\w'’])"
    r"|\b[A-D]\s*(?:,|and|or|nor)\s*[A-D](?![\w'’])"
    r"|\b[A-D] (?:is|are) (?:wrong|correct|right|incorrect|true|false)\b"
)


def _text(o) -> str:
    return o if isinstance(o, str) else o.get("text", "")


def is_pinned(item: dict) -> bool:
    if any(_POSITIONAL_OPTION.search(_text(o)) or _LABEL_OPTION.search(_text(o)) for o in item["options"]):
        return True
    blob = " ".join([item.get("explanation") or ""] + list(item.get("hints") or []) + [item.get("hint") or "", item.get("hint_overlay") or ""])
    return bool(_POSITIONAL_TEXT.search(blob))


def _targets(n: int, fixed: list[str | None]) -> list[str | None]:
    """Spread letters as evenly as possible over the free slots, interleaving a,b,c,d."""
    base, rem = divmod(n, 4)
    quota = {L: base + (1 if i < rem else 0) for i, L in enumerate(LETTERS)}
    for f in fixed:
        if f:
            quota[f] -= 1
    out: list[str | None] = []
    prev = None
    for f in fixed:
        if f:
            out.append(None)
            prev = f
            continue
        # most remaining quota first; avoid repeating the previous letter when possible
        order = sorted(LETTERS, key=lambda L: (-quota[L], L == prev, LETTERS.index(L)))
        L = order[0]
        quota[L] -= 1
        out.append(L)
        prev = L
    return out


def balance_items(items: list[dict], *, answer_key: str = "answerId") -> list[dict]:
    """items: dicts with "options" (list of {"id","text",...}) and answer_key ('a'..'d').

    Returns new item dicts; pinned items are returned unchanged.
    """
    fixed = [it[answer_key].lower() if is_pinned(it) else None for it in items]
    targets = _targets(len(items), fixed)
    out = []
    for it, tgt in zip(items, targets):
        if tgt is None:
            out.append(it)
            continue
        opts = list(it["options"])
        ans = it[answer_key].lower()
        idx = LETTERS.index(ans)
        correct = opts[idx]
        rest = [o for i, o in enumerate(opts) if i != idx]
        ti = LETTERS.index(tgt)
        new = rest[:ti] + [correct] + rest[ti:]
        new = [{**o, "id": LETTERS[i]} for i, o in enumerate(new)]
        upd = dict(it)
        upd["options"] = new
        upd[answer_key] = tgt if it[answer_key].islower() else tgt.upper()
        out.append(upd)
    before = sorted(_text(o) for it in items for o in [it["options"][LETTERS.index(it[answer_key].lower())]])
    after = sorted(_text(o) for it in out for o in [it["options"][LETTERS.index(it[answer_key].lower())]])
    assert before == after, "balance_items changed a correct option"
    return out


def balance_letter_lists(items: list[dict], *, options_key="options", answer_key="answer") -> list[dict]:
    """Same as balance_items for items whose options are plain strings and answer is a letter."""
    wrapped = [
        {**it, "options": [{"id": LETTERS[i], "text": t} for i, t in enumerate(it[options_key])],
         "answerId": it[answer_key]}
        for it in items
    ]
    bal = balance_items(wrapped)
    out = []
    for orig, b in zip(items, bal):
        o = dict(orig)
        o[options_key] = [x["text"] for x in b["options"]]
        o[answer_key] = b["answerId"] if orig[answer_key].islower() else b["answerId"].upper()
        out.append(o)
    return out
