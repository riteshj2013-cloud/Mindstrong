#!/usr/bin/env python3
"""Rebalance answer letters in hand-authored TS content sets (G3/G4/G5/G8 style files).

    python3 scripts/rebalance_ts_sets.py g3-maths g4-maths      # id prefixes
    python3 scripts/rebalance_ts_sets.py --check g3-maths       # report only
    python3 scripts/rebalance_ts_sets.py --all g3-maths         # rebalance every set, not just skewed ones

Uses the same position-safe balancer as the generators (scripts/answer_balance.py):
only option ORDER and answerId change, the correct option text is preserved, and items
whose options/explanation/hints refer to positions ("Both A and B", "Card C", "Only D")
are left exactly as written. Items whose pictorial overlay (lib/prep/pictorial) replaces
option figures by option id are pinned too, so overlay pictures stay on the right option.
Hints are read from the item and from the lib/prep/hints overlay, as served.
"""
from __future__ import annotations

import glob
import json
import re
import sys
from collections import Counter
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from answer_balance import LETTERS, balance_items  # noqa: E402

REPO = Path(__file__).resolve().parent.parent
CONTENT = REPO / "lib/prep/content"
JS = r'"(?:[^"\\]|\\.)*"'
OPT = re.compile(r'\{ id: "([abcd])", text: (' + JS + r') \}')


def overlay_hints() -> dict[str, list[str]]:
    out = {}
    for p in glob.glob(str(REPO / "lib/prep/hints/*.ts")):
        for m in re.finditer(r'^\s*"([\w-]+)": (\[.*\]),?$', Path(p).read_text(encoding="utf-8"), re.M):
            out[m.group(1)] = json.loads(m.group(2))
    return out


def pictorial_option_ids() -> set[str]:
    ids = set()
    for p in glob.glob(str(REPO / "lib/prep/pictorial/*-overlays.ts")):
        t = Path(p).read_text(encoding="utf-8")
        for m in re.finditer(r"PICTORIAL_OVERLAYS[^=]*= (\{.*?\n\});", t, re.S):
            for k, v in json.loads(m.group(1)).items():
                if v.get("options"):
                    ids.add(k)
    return ids


def blocks(t: str):
    for m in re.finditer(r'\n  \{\n    id: "([\w-]+)",', t):
        s = m.start() + 1
        e = t.index("\n  }", s)
        yield m.group(1), s, e


def main(argv: list[str]) -> int:
    check = "--check" in argv
    every = "--all" in argv
    prefixes = [a for a in argv if not a.startswith("--")]
    hints, pinned_ids = overlay_hints(), pictorial_option_ids()
    for path in sorted(CONTENT.glob("*.ts")):
        t = path.read_text(encoding="utf-8")
        sets: dict[str, list] = {}
        for qid, s, e in blocks(t):
            if not any(qid.startswith(p + "-") for p in prefixes):
                continue
            b = t[s:e]
            opts = OPT.findall(b)
            if len(opts) != 4:
                raise SystemExit(f"{qid}: expected 4 plain options, found {len(opts)}")
            ex = re.search(r"explanation: (" + JS + ")", b)
            hs = re.search(r"hints: (\[.*?\])(?=,?\n|,?$)", b)
            item = {
                "id": qid,
                "options": [{"id": i, "text": json.loads(x)} for i, x in opts],
                "answerId": re.search(r'answerId: "([abcd])"', b).group(1),
                "explanation": json.loads(ex.group(1)) if ex else "",
                "hints": (json.loads(hs.group(1)) if hs else []) + hints.get(qid, []),
            }
            if qid in pinned_ids:
                item["hints"].append("Only A")  # force-pin: overlay figures are keyed by option id
            sets.setdefault(qid.rsplit("-q", 1)[0], []).append(item)
        if not sets:
            continue
        for key, items in sets.items():
            before = Counter(i["answerId"] for i in items)
            n = len(items)
            # Leave sets alone that already sit within ~20-30% per letter (keeps diffs small).
            skewed = any(before[L] < 0.2 * n or before[L] > 0.3 * n for L in LETTERS)
            bal = balance_items(items) if (skewed or every) else items
            after = Counter(i["answerId"] for i in bal)
            print(f"{key:32s} {dict(sorted(before.items()))} -> {dict(sorted(after.items()))}" + ("" if bal is not items else "  (kept)"))
            if check or bal is items:
                continue
            for it in bal:
                s, e = next((s, e) for q, s, e in blocks(t) if q == it["id"])
                b = t[s:e]
                ms = list(OPT.finditer(b))
                for m, o in reversed(list(zip(ms, it["options"]))):
                    b = b[: m.start()] + '{ id: "%s", text: %s }' % (o["id"], json.dumps(o["text"], ensure_ascii=False)) + b[m.end():]
                b = re.sub(r'answerId: "[abcd]"', f'answerId: "{it["answerId"]}"', b, count=1)
                t = t[:s] + b + t[e:]
        if not check:
            path.write_text(t, encoding="utf-8")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
