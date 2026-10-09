#!/usr/bin/env python3
from __future__ import annotations
import json, re
from pathlib import Path

ROOT = Path("/workspace/mindstrong")  # writer markdown packs (sibling of repo)
REPO = Path(__file__).resolve().parent.parent  # this git worktree / checkout
OUT = REPO / "lib/prep/content"
DOCS = REPO / "docs/sof-source"
OUT.mkdir(parents=True, exist_ok=True)

# ---------------------------------------------------------------------------
# Editorial-section stripping (writer/editor notes must NEVER reach kids)
# ---------------------------------------------------------------------------
# Writer markdown carries sections for editors only: ## Meta, ## Pictorial notes,
# ## Visual spec, ## Figure Library, ## Engineering notes, QA/reviewer notes …
# They are removed from the markdown BEFORE parsing, and every emitted item
# string is cut at the first markdown heading and checked for leaks.
EDITORIAL_HEADING_RE = re.compile(
    r"^(#{1,6})[ \t]*\**[ \t]*(?:"
    r"meta(?:data)?|pictorial notes?|visual (?:spec|notes?)|figure (?:spec|library|notes?)|"
    r"engineering notes?|writer(?:'s)? notes?|editor(?:ial|'s)? notes?|notes? (?:for|to) "
    r"(?:writers?|editors?|reviewers?|engineers?)|review(?:er)? notes?|qa(?: notes?| checklist)?|"
    r"internal(?: notes?)?|todo|changelog|sources?(?: notes?)?|coverage(?: notes?)?|accessibility notes?"
    r")\b.*$",
    re.I,
)
_HEADING_RE = re.compile(r"^(#{1,6})\s")

# Strings that must never appear in kid-facing item text.
LEAK_PATTERNS = [
    (re.compile(r"(^|\n)[ \t]*#{1,6}[ \t]"), "markdown heading"),
    (re.compile(r"pictorial notes", re.I), "Pictorial notes"),
    (re.compile(r"visual spec", re.I), "Visual spec"),
    (re.compile(r"not copied|copied or traced|past papers?", re.I), "sourcing note"),
    (re.compile(r"\bSOF\b"), "SOF branding"),
    (re.compile(r"\b(?:IMO|IEO|NSO)\b"), "exam branding"),
    (re.compile(r"\b(?:TODO|FIXME|TBD)\b"), "TODO"),
    (re.compile(r"\bmarkers? (?:ids?|named)\b|uniquely named marker|\(`ah[AB]?\d", re.I), "SVG marker id"),
]


def strip_editorial_sections(md: str) -> str:
    """Drop writer/editor-only sections (heading → next heading of same/higher level)."""
    out, skip_level, in_fence = [], None, False
    for line in md.split("\n"):
        if line.lstrip().startswith("```"):
            in_fence = not in_fence
        h = None if in_fence else _HEADING_RE.match(line)
        if skip_level is not None:
            if h and len(h.group(1)) <= skip_level:
                skip_level = None
            else:
                continue
        m = None if in_fence else EDITORIAL_HEADING_RE.match(line)
        if m:
            skip_level = len(m.group(1))
            continue
        out.append(line)
    return "\n".join(out)


def clean_item_text(s: str) -> str:
    """Item text never contains headings: cut at the first one; trim trailing rules."""
    if not s:
        return s or ""
    s = re.split(r"\n[ \t]*#{1,6}[ \t]", "\n" + s, maxsplit=1)[0][1:]
    s = re.sub(r"\s*(-{3,}\s*)+$", "", s)
    return s.strip()


def clean_question(q: dict) -> dict:
    q["prompt"] = clean_item_text(q.get("prompt", ""))
    q["explanation"] = clean_item_text(q.get("explanation") or "")
    q["hints"] = [clean_item_text(h) for h in (q.get("hints") or [])]
    for o in q.get("options", []):
        o["text"] = clean_item_text(o.get("text", ""))
    return q


def assert_no_leak(q: dict) -> None:
    fields = [("prompt", q.get("prompt", "")), ("explanation", q.get("explanation", ""))]
    fields += [("hint", h) for h in q.get("hints") or []]
    fields += [("option " + o["id"], o.get("text", "")) for o in q.get("options", [])]
    fig = q.get("figure") or {}
    fields += [("figure alt", fig.get("alt", "")), ("figure longdesc", fig.get("longdesc", ""))]
    for name, text in fields:
        for rx, label in LEAK_PATTERNS:
            if text and rx.search(text):
                raise ValueError("Editorial leak (%s) in %s %s: %r" % (label, q.get("id"), name, text[:120]))


def letter_id(L: str) -> str:
    return L.lower()


def balance_set(qs: list) -> list:
    """Rotate option order so a set is as even as possible across A/B/C/D.

    Preserves which option *text* is correct (and any option figures); only
    changes slot + answerId. For 24-item sets this yields exactly 6/6/6/6.
    """
    if not qs:
        return qs
    letters = "abcd"
    n = len(qs)
    base, rem = divmod(n, 4)
    targets = []
    for i, L in enumerate(letters):
        targets.extend([L] * (base + (1 if i < rem else 0)))
    # Interleave a,b,c,d so kids don't get long runs of the same letter.
    interleaved: list[str] = []
    bag = {L: targets.count(L) for L in letters}
    while len(interleaved) < n:
        for L in letters:
            if bag[L] > 0:
                interleaved.append(L)
                bag[L] -= 1
    out = []
    for q, target in zip(qs, interleaved):
        opts = list(q["options"])
        by_id = {o["id"]: o for o in opts}
        ans = q["answerId"]
        correct = by_id[ans]
        rest = [o for o in opts if o["id"] != ans]
        new_opts = [None] * 4
        ti = letters.index(target)
        new_opts[ti] = {**correct, "id": target}
        r = 0
        for j, L in enumerate(letters):
            if new_opts[j] is None:
                new_opts[j] = {**rest[r], "id": L}
                r += 1
        out.append({**q, "options": new_opts, "answerId": target})
    counts = {L: sum(1 for q in out if q["answerId"] == L) for L in letters}
    expected = {L: base + (1 if i < rem else 0) for i, L in enumerate(letters)}
    if counts != expected:
        raise SystemExit("balance_set failed: got %s expected %s" % (counts, expected))
    return out


def q_to_ts(q: dict) -> str:
    clean_question(q)
    assert_no_leak(q)
    def opt_ts(o):
        parts = ['id: %s' % json.dumps(o["id"]), 'text: %s' % json.dumps(o["text"])]
        if o.get("figure"):
            parts.append('figure: %s' % json.dumps(o["figure"]))
        return '      { %s }' % ', '.join(parts)
    opts = ",\n".join(opt_ts(o) for o in q["options"])
    fig = ""
    if q.get("figure"):
        fig = ",\n    figure: %s" % json.dumps(q["figure"])
    return (
        "  {\n"
        "    id: %s,\n"
        "    prompt: %s,\n"
        "    options: [\n%s\n    ],\n"
        "    answerId: %s,\n"
        "    explanation: %s,\n"
        "    hints: %s%s\n"
        "  }"
    ) % (
        json.dumps(q["id"]),
        json.dumps(q["prompt"]),
        opts,
        json.dumps(q["answerId"]),
        json.dumps(q.get("explanation") or ""),
        json.dumps(q.get("hints") or []),
        fig,
    )


def parse_figure_json(raw: str):
    """Parse a JSON figure / option-figure blob; return None on failure."""
    raw = (raw or "").strip()
    if not raw:
        return None
    try:
        obj = json.loads(raw)
        if isinstance(obj, dict) and obj.get("type"):
            return obj
    except Exception:
        return None
    return None




def sanitize_css(css: str) -> str:
    """Allow class rules; strip dangerous CSS constructs."""
    if not css:
        return ""
    c = css
    c = re.sub(r"@import[^;]*;?", "", c, flags=re.I)
    c = re.sub(r"expression\s*\([^)]*\)", "", c, flags=re.I)
    c = re.sub(r"(?i)javascript\s*:", "", c)
    c = re.sub(r"(?i)vbscript\s*:", "", c)
    c = re.sub(r"(?i)behavior\s*:", "", c)
    c = re.sub(r"(?i)-moz-binding\s*:", "", c)
    c = re.sub(r"</?style\b[^>]*>", "", c, flags=re.I)
    c = re.sub(r"</?script\b[^>]*>", "", c, flags=re.I)
    return c


def sanitize_svg(raw: str) -> str:
    """Strip scripts/handlers; keep scrubbed <style> for writer class conventions."""
    if not raw:
        return ""
    s = raw.strip()
    s = re.sub(r"<!--.*?-->", "", s, flags=re.S)
    s = re.sub(r"<!\[CDATA\[([\s\S]*?)\]\]>", r"\1", s)
    def scrub_style(m):
        return "<style>%s</style>" % sanitize_css(m.group(1))
    s = re.sub(r"<style\b[^>]*>([\s\S]*?)</style>", scrub_style, s, flags=re.I)
    s = re.sub(
        r"<script\b[^>]*>[\s\S]*?</script>",
        "",
        s,
        flags=re.I,
    )
    s = re.sub(
        r"</?(?:script|foreignObject|foreignobject|iframe|object|embed|link|meta|image|animate(?:Transform|Motion)?|set|audio|video|handler)\b[^>]*>",
        "",
        s,
        flags=re.I,
    )
    def scrub_attr(m):
        name = m.group(1)
        full = m.group(0)
        n = name.lower()
        if n.startswith("on"):
            return ""
        if n in ("href", "xlink:href", "src"):
            val = full.split("=", 1)[1].strip().strip("\"'")
            if re.match(r"(?i)^\s*(javascript|data|vbscript):", val):
                return ""
            if val.startswith("#"):
                return full
            return ""
        if n == "style" and re.search(r"expression\s*\(", full, re.I):
            return ""
        return full
    s = re.sub(r'\s([a-zA-Z_:][-a-zA-Z0-9_:]*)\s*=\s*(?:"[^"]*"|\'[^\']*\'|[^\s>]+)', scrub_attr, s)
    m = re.search(r"<svg\b[^>]*>[\s\S]*?</svg>", s, re.I)
    return m.group(0).strip() if m else ""


def extract_diagram_svg(part: str):
    """Parse **Diagram (SVG):** — fenced ```svg``` OR raw <svg>…</svg>."""
    raw = None
    m = re.search(
        r"\*\*Diagram\s*\(SVG\):\*\*\s*```svg\s*([\s\S]*?)```",
        part,
        re.I,
    )
    if m:
        raw = m.group(1)
    else:
        m = re.search(
            r"\*\*Diagram\s*\(SVG\):\*\*\s*(<svg\b[\s\S]*?</svg>)",
            part,
            re.I,
        )
        if m:
            raw = m.group(1)
    if not raw:
        return None
    markup = sanitize_svg(raw)
    if not markup:
        return None
    alt_m = re.search(r"-\s*\*\*alt\*\*:\s*(.+)", part)
    aria = re.search(r'aria-label="([^"]*)"', markup)
    alt = (alt_m.group(1).strip() if alt_m else "") or (aria.group(1) if aria else "")
    fig = {"type": "svg", "markup": markup}
    if alt:
        fig["alt"] = alt
    return fig


def extract_stem_figure(part: str):
    """Look for - **figure**: {...} or - figure: {...} on one line."""
    m = re.search(r"(?:-\s*)?\*\*?figure\*\*?\s*:\s*(\{.*\})", part, re.I)
    if not m:
        m = re.search(r"-\s*figure:\s*(\{.*\})", part, re.I)
    if not m:
        return extract_diagram_svg(part)
    return parse_figure_json(m.group(1)) or extract_diagram_svg(part)


def extract_option_figure(text: str):
    """Option text may embed [[fig:{...}]] before/instead of caption."""
    m = re.search(r"\[\[fig:(\{.*?\})\]\]\s*(.*)$", text)
    if not m:
        return text, None
    return (m.group(2).strip() or text), parse_figure_json(m.group(1))


def parse_science_quiz(block: str, id_prefix: str, set_id: str) -> list:
    qs = []
    # Split on ### Qn / ### An / ### Bn / **Qn.**
    parts = re.split(r"^(?:###\s*[QAB]?\d+[^\n]*|\*\*Q\d+\.\*\*)", block, flags=re.M)[1:]
    for i, part in enumerate(parts, 1):
        stem_m = re.search(r"\*\*Stem:\*\*\s*(.+?)(?=\n\*\*Options:|\n\*\*Answer:|\n- [A-D][\)\.]|\n-\s*\*\*Answer:)", part, re.S)
        if not stem_m:
            stem_m = re.search(r"^(?:\s*\*\([^)]*\)\*\s*)?(.+?)(?=\n- [A-D][\)\.])", part, re.S)
        ans_m = re.search(r"(?:-\s*)?\*\*Answer:\*\*\s*([A-D])", part, re.I)
        expl_m = re.search(r"(?:-\s*)?\*\*Explanation:\*\*\s*(.+?)(?=\n\*\*Q|\n###|\n*$)", part, re.S)
        options = []
        opt_block = re.search(r"\*\*Options:\*\*\s*([\s\S]*?)(?=\*\*Answer:|-\s*\*\*Answer:)", part)
        opt_src = opt_block.group(1) if opt_block else part
        for m in re.finditer(r"(?:^|\n)(?:-\s*)?([A-D])[\)\.]\s*(.+)", opt_src):
            options.append({"id": letter_id(m.group(1)), "text": m.group(2).strip()})
        seen=set(); uniq=[]
        for o in options:
            if o["id"] in seen: continue
            seen.add(o["id"]); uniq.append(o)
        options = uniq[:4]
        if not stem_m or not ans_m or len(options) < 4:
            print("  WARN %s %s Q%d incomplete stem=%s ans=%s opts=%d" % (
                id_prefix, set_id, i, bool(stem_m), bool(ans_m), len(options)))
            continue
        for o in options:
            text2, fig = extract_option_figure(o["text"])
            o["text"] = text2
            if fig:
                o["figure"] = fig
        qobj = {
            "id": "%s-%s-q%02d" % (id_prefix, set_id, i),
            "prompt": stem_m.group(1).strip(),
            "options": options,
            "answerId": letter_id(ans_m.group(1)),
            "explanation": expl_m.group(1).strip() if expl_m else "",
            "hints": ["Think about the lesson key ideas.", "Eliminate options that do not fit."],
        }
        fig = extract_stem_figure(part)
        if fig:
            qobj["figure"] = fig
        qs.append(qobj)
    return qs


def parse_maths_quiz(block: str, id_prefix: str, set_id: str) -> list:
    qs = []
    parts = re.split(r"^### Q\d+", block, flags=re.M)[1:]
    for i, part in enumerate(parts, 1):
        stem_m = re.search(r"-\s*\*\*stem\*\*:\s*(.+)", part)
        ans_m = re.search(r"-\s*\*\*answer\*\*:\s*([A-D])", part, re.I)
        expl_m = re.search(r"-\s*\*\*explanation\*\*:\s*(.+)", part)
        options = []
        for m in re.finditer(r"-\s*([A-D])\)\s*(.+)", part):
            options.append({"id": letter_id(m.group(1)), "text": m.group(2).strip()})
        if not stem_m or not ans_m or len(options) < 4:
            print("  WARN %s %s Q%d incomplete" % (id_prefix, set_id, i))
            continue
        # Option figures via [[fig:{...}]]
        for o in options:
            text2, fig = extract_option_figure(o["text"])
            o["text"] = text2
            if fig:
                o["figure"] = fig
        qobj = {
            "id": "%s-%s-q%02d" % (id_prefix, set_id, i),
            "prompt": stem_m.group(1).strip(),
            "options": options,
            "answerId": letter_id(ans_m.group(1)),
            "explanation": expl_m.group(1).strip() if expl_m else "",
            "hints": ["Read carefully.", "Eliminate impossible options first."],
        }
        fig = extract_stem_figure(part)
        if fig:
            qobj["figure"] = fig
        qs.append(qobj)
    return qs


def _yaml_block_or_line(part: str, key: str):
    """Parse `- key: |` multiline or `- key: value` single line from a quiz/passage part."""
    m = re.search(
        r"-\s*%s:\s*\|\s*\n((?:[ \t]+.+\n?)*)" % re.escape(key),
        part,
        re.I,
    )
    if m:
        lines = []
        for l in m.group(1).split("\n"):
            if not l.strip():
                continue
            lines.append(re.sub(r"^[ \t]{2}", "", l).rstrip())
        return "\n".join(lines).strip()
    m = re.search(r"-\s*%s:\s*(.+)" % re.escape(key), part, re.I)
    return m.group(1).strip() if m else ""


def load_external_svg_figure(base_dir: Path, rel: str, alt: str = "", longdesc: str = ""):
    """Load visuals/<id>.svg next to a chapter file → sanitized figure.type=svg."""
    if not rel:
        return None
    rel = rel.strip()
    p = (base_dir / rel).resolve()
    try:
        p.relative_to(base_dir.resolve())
    except ValueError:
        print("  WARN visual path escapes chapter dir:", rel)
        return None
    if not p.exists() or p.suffix.lower() != ".svg":
        print("  WARN missing visual", p)
        return None
    raw = p.read_text(encoding="utf-8", errors="replace")
    markup = sanitize_svg(raw)
    if not markup or "<svg" not in markup.lower():
        print("  WARN sanitize emptied", p)
        return None
    fig = {"type": "svg", "markup": markup}
    if alt:
        fig["alt"] = alt
    if longdesc:
        fig["longdesc"] = longdesc
    return fig


def extract_visual_fields(part: str, base_dir: Path | None):
    """Item- or passage-level `visual:` / `visual_alt:` / `visual_longdesc`."""
    rel = _yaml_block_or_line(part, "visual")
    if not rel or not base_dir:
        return None
    # Ignore non-path values
    if not rel.startswith("visuals/") and not rel.endswith(".svg"):
        return None
    alt = _yaml_block_or_line(part, "visual_alt")
    longdesc = _yaml_block_or_line(part, "visual_longdesc")
    return load_external_svg_figure(base_dir, rel, alt, longdesc)


def extract_passage(bank: str, label: str) -> str:
    m = re.search(r"### %s[\s\S]*?\n([\s\S]*?)(?=\n### |\Z)" % re.escape(label), bank)
    if not m:
        return ""
    body = m.group(1)
    # Drop visual metadata lines / block scalars before the passage prose
    body = re.sub(r"^-\s*visual(?:_alt|_longdesc)?:\|?\s*\n(?:[ \t].+\n?)*", "", body, flags=re.M)
    body = re.sub(r"^-\s*visual(?:_alt|_longdesc)?:.+\n?", "", body, flags=re.M)
    return re.sub(r"^>\s?", "", body, flags=re.M).strip()


def extract_passage_block(bank: str, label: str) -> str:
    m = re.search(r"(### %s[\s\S]*?)(?=\n### |\Z)" % re.escape(label), bank)
    return m.group(1) if m else ""


PASSAGE_LABELS = ("P1", "P2", "P3", "N1", "PD1", "D1", "E1", "O1")


def parse_english_quiz(block: str, passages: dict, id_prefix: str, set_id: str, base_dir: Path | None = None, passage_figs: dict | None = None) -> list:
    qs = []
    parts = re.split(r"^### Q\d+", block, flags=re.M)[1:]
    passage_figs = passage_figs or {}
    for i, part in enumerate(parts, 1):
        stem_block = re.search(r"-\s*stem:\s*\|\s*\n((?:[ \t]+.+\n?)+)", part)
        if stem_block:
            lines = stem_block.group(1).split("\n")
            stem = "\n".join(re.sub(r"^[ \t]{2}", "", l).rstrip() for l in lines).strip()
        else:
            sm = re.search(r"-\s*stem:\s*(.+)", part)
            stem = sm.group(1).strip() if sm else ""
        # Prefer longer labels first (PD1 before P1/D1)
        mkey = re.search(r"\b(PD1|P[123]|N1|D1|E1|O1)\b", stem[:120])
        pkey = mkey.group(1) if mkey else None
        if pkey and pkey in passages and passages[pkey]:
            stem = "%s\n\n%s" % (passages[pkey], stem)
        ans_m = re.search(r"-\s*answer:\s*([A-D])", part, re.I)
        expl_block = re.search(r"-\s*explanation:\s*\|\s*\n((?:[ \t]+.+\n?)+)", part)
        if expl_block:
            expl = " ".join(re.sub(r"^[ \t]{2}", "", l).strip() for l in expl_block.group(1).split("\n") if l.strip())
        else:
            em = re.search(r"-\s*explanation:\s*(.+)", part)
            expl = em.group(1).strip() if em else ""
        options = []
        for m in re.finditer(r"-\s*([A-D]):\s*(.+)", part):
            options.append({"id": letter_id(m.group(1)), "text": m.group(2).strip()})
        if not stem or not ans_m or len(options) < 4:
            print("  WARN eng %s %s Q%d incomplete" % (id_prefix, set_id, i))
            continue
        for o in options:
            text2, fig = extract_option_figure(o["text"])
            o["text"] = text2
            if fig:
                o["figure"] = fig
        qobj = {
            "id": "%s-%s-q%02d" % (id_prefix, set_id, i),
            "prompt": stem,
            "options": options,
            "answerId": letter_id(ans_m.group(1)),
            "explanation": expl,
            "hints": ["Look for clues in the text.", "Eliminate unsupported answers."],
        }
        fig = extract_stem_figure(part) or extract_visual_fields(part, base_dir)
        if not fig and pkey and pkey in passage_figs:
            fig = passage_figs[pkey]
        if fig:
            qobj["figure"] = fig
        qs.append(qobj)
    return qs

def science_sets(md: str, prefix: str):
    # Writer ## Meta / ## Pictorial notes / ## Visual spec etc. are stripped first.
    md = strip_editorial_sections(md)
    a = parse_science_quiz(md.split("## Quiz Set A")[1].split("## Quiz Set B")[0], prefix, "a")
    b_rest = md.split("## Quiz Set B")[1]
    b_rest = re.split(r"\n## (?!#)", b_rest)[0]  # stop before Answer Key / notes
    b = parse_science_quiz(b_rest, prefix, "b")
    return balance_set(a), balance_set(b)

def maths_sets(md: str, prefix: str):
    md = strip_editorial_sections(md)
    rest = md.split("## Practice Set A")[1]
    a_block, b_rest = rest.split("## Practice Set B")
    b_block = b_rest.split("## Answer Key")[0] if "## Answer Key" in b_rest else b_rest
    return balance_set(parse_maths_quiz(a_block, prefix, "a")), balance_set(parse_maths_quiz(b_block, prefix, "b"))

def eng_sets(md: str, prefix: str, base_dir: Path | None = None):
    md = strip_editorial_sections(md)
    bank = md.split("## Passage bank")[1].split("## Set A")[0] if "## Passage bank" in md else ""
    passages = {lab: extract_passage(bank, lab) if bank else "" for lab in PASSAGE_LABELS}
    passage_figs = {}
    if bank and base_dir is not None:
        for lab in PASSAGE_LABELS:
            block = extract_passage_block(bank, lab)
            fig = extract_visual_fields(block, base_dir) if block else None
            if fig:
                passage_figs[lab] = fig
    set_a = md.split("## Set A")[1].split("## Set B")[0]
    set_b = md.split("## Set B")[1]
    set_b = re.split(r"\n## Visual spec\b", set_b)[0]
    a = parse_english_quiz(set_a, passages, prefix, "a", base_dir, passage_figs)
    b = parse_english_quiz(set_b, passages, prefix, "b", base_dir, passage_figs)
    return balance_set(a), balance_set(b)

def lesson_ts(title, emoji, visual, speak, cards, try_q, bullets):
    cards_ts = ",\n".join(
        '      { label: %s, reveal: %s, emoji: %s }' % (json.dumps(c[0]), json.dumps(c[1]), json.dumps(c[2]))
        for c in cards
    )
    opts = ",\n".join(
        '        { id: %s, text: %s }' % (json.dumps(o[0]), json.dumps(o[1])) for o in try_q["options"]
    )
    return """const lesson: ChapterDef["lesson"] = [
  {
    id: "h",
    type: "hook",
    emoji: %s,
    title: %s,
    body: [
      "An interactive lesson with tap-to-reveal and a quick try.",
      "Optional -- practice sets stay unlocked either way.",
    ],
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
  },
  {
    id: "t1",
    type: "try",
    title: "Quick try",
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
    title: "Nice work!",
    bullets: %s,
    cta: "Back to chapter",
    speak: "You are ready for the practice sets.",
  },
];""" % (
        json.dumps(emoji), json.dumps(title), json.dumps(visual), json.dumps(speak),
        json.dumps(visual), cards_ts,
        json.dumps(try_q["prompt"]), opts, json.dumps(try_q["answerId"]), json.dumps(try_q["why"]),
        json.dumps(visual), json.dumps(try_q["prompt"]), json.dumps(bullets),
    )

def emit_module(path: Path, export_name: str, meta: dict, lesson: str, set_a: list, set_b: list):
    note = "%s - authored SOF content (original)." % meta["title"]
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
        json.dumps(meta["id"]),
        json.dumps(meta["title"]),
        json.dumps(meta["emoji"]),
        json.dumps(meta["blurb"]),
        json.dumps(meta["topic"]),
        json.dumps(meta["topic"]),
        json.dumps(meta["paperTopics"]),
        export_name,
    )
    path.write_text(body)
    print("Wrote %s A=%d B=%d" % (path.name, len(set_a), len(set_b)))
