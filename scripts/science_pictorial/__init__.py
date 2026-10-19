"""Science pictorial pass (2026-10-19): diagram versions of 118 G5/G8/G9 Science items.

Single source of truth for the converted items. The generators apply these specs so a
rebuild keeps the diagrams:
  - scripts/author_g5_science_ch04_06.py   (G5 Ch4-6)   apply_q_list() before write_md
  - scripts/author_g8_science_ch04_06.py   (G8 Ch4-6)   apply_letter_items() before write_chapter
  - scripts/g9_pack/generate.py            (G9)         apply_items() after the answer balancer
  - G8 Ch1-3 come from the writer markdown in /workspace/mindstrong/sof-science/grade-8/
    (read by scripts/ingest_run.py); render_md_block() wrote those Q blocks.

Each spec keeps the item's id and answer letter. Options are listed in their final A-D order.
"""
from __future__ import annotations

from .g5 import ITEMS as _G5
from .g8 import ITEMS as _G8
from .g9 import ITEMS as _G9

LETTERS = "abcd"
ITEMS: dict[str, dict] = {**_G5, **_G8, **_G9}


def _check(spec_id: str, spec: dict) -> None:
    assert spec["answer"] in LETTERS, spec_id
    assert len(spec["options"]) == 4 and len(set(spec["options"])) == 4, spec_id
    assert len(spec["hint"].split()) <= 25, (spec_id, spec["hint"])
    assert spec["figure"]["type"] == "svg", spec_id
    m = spec["figure"]["markup"]
    assert "<style" not in m and "class=" not in m and ' id="' not in m, spec_id
    assert 'viewBox="0 0 320 220"' in m and 'role="img"' in m, spec_id
    try:
        from ingest_lib import sanitize_svg
    except ImportError:  # imported from outside scripts/
        sanitize_svg = None
    if sanitize_svg is not None:
        assert sanitize_svg(m) == m, f"{spec_id}: markup changes under sanitize_svg"


for _k, _v in ITEMS.items():
    _check(_k, _v)


def spec(qid: str) -> dict | None:
    return ITEMS.get(qid)


def apply_items(items: list[dict]) -> list[dict]:
    """Items with "id", options [{id,text}], answerId (normalised / balanced form)."""
    out = []
    for it in items:
        s = ITEMS.get(it["id"])
        if not s:
            out.append(it)
            continue
        if it["answerId"].lower() != s["answer"]:
            raise SystemExit(f"{it['id']}: answer letter would change {it['answerId']} -> {s['answer']}")
        new = dict(it)
        new["prompt"] = s["prompt"]
        new["options"] = [{"id": L, "text": t} for L, t in zip(LETTERS, s["options"])]
        new["answerId"] = s["answer"]
        new["explanation"] = s["explanation"]
        new["figure"] = dict(s["figure"])
        if "hint_overlay" in new:
            new["hint_overlay"] = s["hint"]
        if "hint" in new:
            new["hint"] = s["hint"]
        out.append(new)
    return out


def apply_q_list(prefix: str, set_id: str, qs: list[dict]) -> list[dict]:
    """G5 author Q() dicts (no ids yet; position gives the id)."""
    with_ids = [{**q, "id": f"{prefix}-{set_id}-q{i:02d}"} for i, q in enumerate(qs, 1)]
    out = []
    for q in apply_items(with_ids):
        q = dict(q)
        q.pop("id")
        out.append(q)
    return out


def apply_letter_items(prefix: str, set_id: str, qs: list[dict]) -> list[dict]:
    """G8 author q() dicts: {stem, options [str], answer 'A'..'D', explanation}.

    The written order is final; the answer balancer leaves it unchanged as long as the
    item's pinned status matches the original (checked here)."""
    import sys
    from pathlib import Path
    sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
    from answer_balance import is_pinned  # noqa: E402

    out = []
    for i, q in enumerate(qs, 1):
        s = ITEMS.get(f"{prefix}-{set_id}-q{i:02d}")
        if not s:
            out.append(q)
            continue
        new = {"stem": s["prompt"], "options": list(s["options"]), "answer": s["answer"].upper(),
               "explanation": s["explanation"], "figure": dict(s["figure"]), "hint": s["hint"]}
        as_item = lambda d: {"options": [{"id": L, "text": t} for L, t in zip(LETTERS, d["options"])],
                             "answerId": d["answer"].lower(), "explanation": d["explanation"]}
        if is_pinned(as_item(q)) != is_pinned(as_item(new)):
            raise SystemExit(f"{prefix}-{set_id}-q{i:02d}: pinned status changed")
        out.append(new)
    return out


def render_md_block(n: int, s: dict) -> str:
    """Science writer-markdown block (### Qn · Pictorial) for a spec."""
    lines = [f"### Q{n} · Pictorial", "**Diagram (SVG):**", s["figure"]["markup"], f"**Stem:** {s['prompt']}", "**Options:**"]
    lines += [f"{L.upper()}) {t}" for L, t in zip(LETTERS, s["options"])]
    lines += [f"**Answer:** {s['answer'].upper()}", f"**Explanation:** {s['explanation']}", ""]
    return "\n".join(lines)
