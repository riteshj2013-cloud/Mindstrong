#!/usr/bin/env python3
"""
Ingest Grade 4 Maths Chapter 6 Geometry, Perimeter and Symmetry and Chapter 7 Data Handling
(sof-maths/grade-4/chapter-06-geometry-perimeter-symmetry.md, chapter-07-data-handling.md).
Same pipeline as scripts/ingest_g4_maths_time_money.py (ingest_lib: parse_maths_quiz → inline
**Diagram (SVG):** figures, sanitize_svg, emit_module; writer option order kept). Writer hints and lesson
outlines are carried over; Set A/B answers are asserted against each Answer Key table; every
figure must keep aria-label + alt. Writer verification attributes (data-*, e.g. data-symmetric,
data-perimeter) are stripped from the SVG markup so the key is not shipped in the page.
Usage: python3 scripts/ingest_g4_maths_ch06_ch07.py
"""
from __future__ import annotations
import json, math, re, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))
from ingest_lib import ROOT, OUT, DOCS, parse_maths_quiz, emit_module, strip_editorial_sections

CHAPTERS = [
    {
        "src": "chapter-06-geometry-perimeter-symmetry.md",
        "doc": "maths-ch06-geometry-perimeter-symmetry.md",
        "out": "g4-maths-geometry-perimeter.ts",
        "export": "g4MathsGeometryPerimeter",
        "prefix": "g4-maths-geoperim",
        "steps": 7,
        "meta": {
            "id": "g4-geometry-perimeter",
            "title": "Perimeter, Area & Symmetry",
            "emoji": "🔷",
            "blurb": "Perimeter, area on grids, symmetry, nets & tangrams",
            "topic": "geometry",
            "paperTopics": ["geometry", "measurement"],
        },
        "hook": ("Shapes all around us", "Fences, rangoli, photo frames and gift boxes all use the maths in this chapter."),
        "try": {
            "prompt": "A rectangular garden is 9 m long and 5 m wide. How long is the fence that goes all the way around it?",
            "options": [{"id": "a", "text": "14 m"}, {"id": "b", "text": "45 m"}, {"id": "c", "text": "28 m"}, {"id": "d", "text": "23 m"}],
            "answerId": "c",
            "why": "Add all four sides: 9 + 5 + 9 + 5 = 28 m. 45 is 9 × 5, which is the area, not the distance around.",
            "speak": "A rectangular garden is nine metres long and five metres wide. How long is the fence that goes all the way around it?",
        },
        "bullets": ["Perimeter = add every side", "Area = count the unit squares", "A line of symmetry folds into matching halves",
                    "Cube: 6 faces, 12 edges, 8 corners", "Count small shapes first, then bigger ones"],
        "hints": {},
    },
    {
        "src": "chapter-07-data-handling.md",
        "doc": "maths-ch07-data-handling.md",
        "out": "g4-maths-graphs-tables.ts",
        "export": "g4MathsGraphsTables",
        "prefix": "g4-maths-graphs",
        "steps": 6,
        "meta": {
            "id": "g4-graphs-tables",
            "title": "Graphs & Tables",
            "emoji": "📈",
            "blurb": "Tallies, pictograph keys, scaled bar graphs & tables",
            "topic": "data-handling",
            "paperTopics": ["data-handling", "add-sub"],
        },
        "hook": ("Reading data like a detective", "Class surveys, cricket scores and shop sales are easier to read as tallies, pictographs and bar graphs."),
        "try": {
            "prompt": "In a pictograph, 1 picture stands for 4 mangoes. A row shows 5 pictures. How many mangoes is that?",
            "options": [{"id": "a", "text": "9"}, {"id": "b", "text": "20"}, {"id": "c", "text": "5"}, {"id": "d", "text": "16"}],
            "answerId": "b",
            "why": "Each picture is worth 4, so 5 pictures stand for 5 × 4 = 20 mangoes. 5 is tempting, but it counts pictures, not mangoes.",
            "speak": "In a pictograph, one picture stands for four mangoes. A row shows five pictures. How many mangoes is that?",
        },
        "bullets": ["Tally: a gate of five", "Always read the key first", "Check the scale on a bar graph",
                    "More, fewer, total: find each number first", "Compare pictographs only after using both keys"],
        "hints": {},
    },
]


def raw_items(md: str, set_name: str) -> list[dict]:
    rest = md.split("## Practice Set A")[1]
    a, b = rest.split("## Practice Set B")
    b = b.split("## Answer Key")[0]
    block = a if set_name == "a" else b
    out = []
    for part in re.split(r"^### Q\d+", block, flags=re.M)[1:]:
        h = re.search(r"-\s*\*\*hint\*\*:\s*(.+)", part)
        ans = re.search(r"-\s*\*\*answer\*\*:\s*([A-D])", part)
        out.append({"hint": h.group(1).strip() if h else None, "answer": ans.group(1) if ans else None})
    return out


def answer_key(md: str, set_name: str) -> list[str]:
    key = md.split("## Answer Key")[1]
    sec = key.split("### Set A")[1].split("### Set B")[0] if set_name == "a" else key.split("### Set B")[1]
    return re.findall(r"^\|\s*Q\d+\s*\|[^|]*\|\s*([A-D])\s*\|", sec, re.M)


def lesson_ts(md: str, ch: dict) -> str:
    outline = md.split("## Interactive Lesson Outline")[1].split("## Practice Set A")[0]
    steps = re.findall(r"^### step_(\d+):\s*(.+?)\n([\s\S]*?)(?=^### step_|\Z)", outline, re.M)
    assert len(steps) == ch["steps"], len(steps)
    title, line = ch["hook"]
    parts = [{
        "id": "h", "type": "hook", "emoji": ch["meta"]["emoji"], "title": title,
        "body": [line, "Lesson is optional; jump to a set anytime."],
        "cta": "Let's go!", "visual": "none", "speak": line + " Let's go!",
    }]
    for n, stitle, body in steps:
        tts = re.findall(r"^\s+-\s+(.+)$", body.split("- **on_screen**")[0], re.M)
        chk = re.search(r"-\s*\*\*check\*\*:\s*(.+?)\s+—\s+Answer:\s*(.+)", body)
        assert tts and chk, (n, stitle)
        parts.append({
            "id": "s%d" % int(n), "type": "demo", "title": stitle.strip(),
            "steps": tts + ["Check: " + chk.group(1).strip()],
            "punchline": "Answer: " + chk.group(2).strip(),
            "visual": "none", "speak": " ".join(tts),
        })
    t = ch["try"]
    parts.append({"id": "t1", "type": "try", "title": "Your turn", "prompt": t["prompt"], "options": t["options"],
                  "answerId": t["answerId"], "why": t["why"], "visual": "none", "speak": t["speak"]})
    parts.append({"id": "w", "type": "wrap", "emoji": "⭐", "title": "Nice work!", "bullets": ch["bullets"],
                  "cta": "Back to chapter", "speak": "You are ready for the practice sets."})
    body = ",\n".join("  " + json.dumps(p, ensure_ascii=False) for p in parts)
    return 'const lesson: ChapterDef["lesson"] = [\n%s,\n];' % body


def writer_sets(md: str, prefix: str):
    """Like ingest_lib.maths_sets but keeps the writer's option order: both sets are already
    6/6/6/6, and balance_set would reshuffle options that the explanations describe."""
    rest = md.split("## Practice Set A")[1]
    a_block, b_rest = rest.split("## Practice Set B")
    return parse_maths_quiz(a_block, prefix, "a"), parse_maths_quiz(b_rest.split("## Answer Key")[0], prefix, "b")


def strip_data_attrs(markup: str) -> str:
    return re.sub(r'\sdata-[a-zA-Z0-9_-]+\s*=\s*"[^"]*"', "", markup)


# ---------- M7 graph figures (Business Lead polish): items that described a pictograph / bar graph
# in words now show it. Original SVG, 320x220, role=img + aria-label, no style/class/id/data-*.
from html import escape as _esc

FONT = 'font-family="Arial, Helvetica, sans-serif"'


def _svg(label: str, body: list[str]) -> str:
    return ('<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" %s role="img" aria-label="%s">\n'
            '  <rect x="0" y="0" width="320" height="220" fill="#fff"/>\n%s\n</svg>') % (FONT, _esc(label), "\n".join("  " + b for b in body))


def _text(x, y, s, size=13, anchor="start", bold=False, fill="#333"):
    return '<text x="%s" y="%s" font-size="%s" text-anchor="%s"%s fill="%s">%s</text>' % (
        x, y, size, anchor, ' font-weight="bold"' if bold else "", fill, _esc(s))


def _sym(kind: str, cx: float, cy: float, half: bool = False) -> str:
    """One pictograph symbol centred on (cx, cy), about 18 px across. half=True draws the left half."""
    if kind == "apple":
        return ('<g><circle cx="%s" cy="%s" r="8" fill="#e53935" stroke="#7f1d1d" stroke-width="1"/>'
                '<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="#5d4037" stroke-width="1.6"/>'
                '<ellipse cx="%s" cy="%s" rx="3.2" ry="1.8" fill="#43a047"/></g>') % (
                cx, cy + 1, cx, cy - 7, cx + 1, cy - 11, cx + 4, cy - 9)
    if kind == "star":
        pts = []
        for i in range(10):
            r = 9.5 if i % 2 == 0 else 4
            a = -math.pi / 2 + i * math.pi / 5
            pts.append("%.1f,%.1f" % (cx + r * math.cos(a), cy + r * math.sin(a)))
        return '<polygon points="%s" fill="#fbc02d" stroke="#8d6e00" stroke-width="1"/>' % " ".join(pts)
    if kind == "mango":
        return ('<g><ellipse cx="%s" cy="%s" rx="8.5" ry="7" fill="#ffb300" stroke="#9a6b00" stroke-width="1"/>'
                '<ellipse cx="%s" cy="%s" rx="3.5" ry="1.8" fill="#43a047"/></g>') % (cx, cy + 1, cx + 3, cy - 7)
    if kind == "balloon":
        return ('<g><ellipse cx="%s" cy="%s" rx="6.5" ry="8" fill="#ec407a" stroke="#880e4f" stroke-width="1"/>'
                '<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="#555" stroke-width="1"/></g>') % (cx, cy - 2, cx, cy + 6, cx, cy + 11)
    if kind == "book":
        return ('<g><rect x="%s" y="%s" width="14" height="17" rx="1.5" fill="#5c6bc0" stroke="#283593" stroke-width="1"/>'
                '<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="#e8eaf6" stroke-width="1.4"/></g>') % (
                cx - 7, cy - 8.5, cx - 4, cy - 8.5, cx - 4, cy + 8.5)
    if kind == "kite":
        return ('<g><polygon points="%s,%s %s,%s %s,%s %s,%s" fill="#29b6f6" stroke="#01579b" stroke-width="1"/>'
                '<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="#01579b" stroke-width="1"/></g>') % (
                cx, cy - 10, cx + 7, cy - 2, cx, cy + 8, cx - 7, cy - 2, cx, cy + 8, cx + 3, cy + 11)
    if kind == "marble":
        if half:
            return ('<path d="M %s %s A 8 8 0 0 0 %s %s Z" fill="#26a69a" stroke="#004d40" stroke-width="1"/>'
                    % (cx, cy - 8, cx, cy + 8))
        return '<circle cx="%s" cy="%s" r="8" fill="#26a69a" stroke="#004d40" stroke-width="1"/>' % (cx, cy)
    if kind == "car":
        return ('<g><rect x="%s" y="%s" width="18" height="7" rx="2" fill="#ef5350" stroke="#b71c1c" stroke-width="1"/>'
                '<rect x="%s" y="%s" width="10" height="5" rx="1.5" fill="#ef9a9a" stroke="#b71c1c" stroke-width="1"/>'
                '<circle cx="%s" cy="%s" r="2.4" fill="#333"/><circle cx="%s" cy="%s" r="2.4" fill="#333"/></g>') % (
                cx - 9, cy - 1, cx - 5, cy - 6, cx - 5, cy + 6, cx + 5, cy + 6)
    if kind == "child":
        return ('<g><circle cx="%s" cy="%s" r="4" fill="#ffcc80" stroke="#6d4c41" stroke-width="1"/>'
                '<rect x="%s" y="%s" width="10" height="10" rx="3" fill="#7e57c2" stroke="#4527a0" stroke-width="1"/></g>') % (
                cx, cy - 5, cx - 5, cy, )
    raise ValueError(kind)


def pictograph(title: str, label: str, rows: list[tuple[str, float]], kind: str, key: str | None,
               empty_mark: str = "") -> str:
    """rows: (name, symbols); 0 symbols draws an empty row (with empty_mark, e.g. '?').
    key: text after the key symbol, e.g. '10 apples'; None hides the key box."""
    body = [_text(160, 20, title, 14, "middle", True)]
    top, h = 32, 34
    for i, (name, n) in enumerate(rows):
        y = top + i * h
        body.append('<rect x="8" y="%s" width="304" height="%s" fill="%s" stroke="#cfd8dc" stroke-width="1"/>'
                    % (y, h, "#fafafa" if i % 2 == 0 else "#ffffff"))
        body.append(_text(16, y + 22, name, 13))
        whole = int(n)
        for k in range(whole):
            body.append(_sym(kind, 106 + k * 22, y + h / 2))
        if n - whole:
            body.append(_sym(kind, 106 + whole * 22, y + h / 2, half=True))
        if n == 0 and empty_mark:
            body.append(_text(106, y + 22, empty_mark, 14, "start", True, "#9e9e9e"))
    body.append('<line x1="92" y1="%s" x2="92" y2="%s" stroke="#cfd8dc" stroke-width="1"/>' % (top, top + h * len(rows)))
    if key is not None:
        ky = top + h * len(rows) + 10
        body.append('<rect x="70" y="%s" width="180" height="30" rx="5" fill="#fffde7" stroke="#f9a825" stroke-width="1"/>' % ky)
        body.append(_text(80, ky + 20, "Key:", 13, "start", True))
        body.append(_sym(kind, 124, ky + 15))
        body.append(_text(138, ky + 20, "= " + key, 13, "start", True))
    return _svg(label, body)


def bar_graph(title: str, label: str, bars: list[tuple[str, float | None]], vmax: int, minor: int, major: int,
              unit: str, value_labels: bool = False) -> str:
    """Bar graph with gridlines every `minor`, labelled every `major`. A None bar is drawn as '?'."""
    x0, x1, y0, y1 = 52, 308, 186, 34
    sc = (y0 - y1) / vmax
    body = [_text(160, 20, title, 14, "middle", True)]
    for v in range(0, vmax + 1, minor):
        y = round(y0 - v * sc, 2)
        body.append('<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="%s" stroke-width="1"/>' % (x0, y, x1, y, "#b0bec5" if v % major == 0 else "#e6e6e6"))
        if v % major == 0:
            body.append(_text(x0 - 6, y + 4, str(v), 11, "end", False, "#455a64"))
    body.append('<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="#263238" stroke-width="2"/>' % (x0, y0, x1, y0))
    body.append('<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="#263238" stroke-width="2"/>' % (x0, y0, x0, y1))
    body.append('<text x="14" y="%s" font-size="11" text-anchor="middle" fill="#455a64" transform="rotate(-90 14 %s)">%s</text>'
                % ((y0 + y1) / 2, (y0 + y1) / 2, _esc(unit)))
    slot = (x1 - x0) / len(bars)
    colours = ["#42a5f5", "#66bb6a", "#ffa726", "#ab47bc", "#ef5350"]
    for i, (name, v) in enumerate(bars):
        cx = x0 + slot * (i + 0.5)
        if v is None:
            body.append(_text(cx, y0 - 8, "?", 16, "middle", True, "#9e9e9e"))
        else:
            h = round(v * sc, 2)
            body.append('<rect x="%s" y="%s" width="30" height="%s" fill="%s" stroke="#263238" stroke-width="1"/>'
                        % (round(cx - 15, 2), round(y0 - h, 2), h, colours[i % len(colours)]))
            if value_labels:
                body.append(_text(cx, round(y0 - h - 4, 2), str(int(v)), 11, "middle", True))
        body.append(_text(cx, 204, name, 12, "middle"))
    return _svg(label, body)


def square_bar_graph(title: str, label: str, bars: list[tuple[str, float | None]], rows: int, key: str) -> str:
    """Bars on a square grid (the scale is given by the key, not by numbers on the axis)."""
    sq = 15 if rows > 8 else 18
    y0 = 190
    top = y0 - rows * sq
    cols = 1 + 3 * len(bars)
    x0 = round(160 - cols * sq / 2)
    body = [_text(160, 18, title, 14, "middle", True)]
    for r in range(rows + 1):
        y = y0 - r * sq
        body.append('<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="#cfd8dc" stroke-width="1"/>' % (x0, y, x0 + cols * sq, y))
    for c in range(cols + 1):
        x = x0 + c * sq
        body.append('<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="#cfd8dc" stroke-width="1"/>' % (x, top, x, y0))
    body.append('<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="#263238" stroke-width="2"/>' % (x0, y0, x0 + cols * sq, y0))
    colours = ["#26a69a", "#8d6e63", "#5c6bc0"]
    for i, (name, v) in enumerate(bars):
        bx = x0 + (1 + 3 * i) * sq
        cx = bx + sq
        if v is None:
            body.append(_text(cx, y0 - 6, "?", 16, "middle", True, "#9e9e9e"))
        else:
            h = v * sq
            body.append('<rect x="%s" y="%s" width="%s" height="%s" fill="%s" fill-opacity="0.85" stroke="#263238" stroke-width="1"/>'
                        % (bx, y0 - h, 2 * sq, h, colours[i % len(colours)]))
        body.append(_text(cx, 206, name, 12, "middle"))
    body.append(_text(312, 36, key, 12, "end", True, "#4e342e"))
    return _svg(label, body)


def table_figure(title: str, label: str, head: tuple[str, str], rows: list[tuple[str, str]]) -> str:
    body = [_text(160, 20, title, 14, "middle", True)]
    x0, w1, w2, top, h = 70, 100, 80, 32, 30
    for i, (a, b) in enumerate([head] + rows):
        y = top + i * h
        fill = "#eceff1" if i == 0 else ("#fafafa" if i % 2 else "#ffffff")
        body.append('<rect x="%s" y="%s" width="%s" height="%s" fill="%s" stroke="#90a4ae" stroke-width="1"/>' % (x0, y, w1 + w2, h, fill))
        body.append('<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="#90a4ae" stroke-width="1"/>' % (x0 + w1, y, x0 + w1, y + h))
        body.append(_text(x0 + w1 / 2, y + 20, a, 13, "middle", i == 0))
        body.append(_text(x0 + w1 + w2 / 2, y + 20, b, 13, "middle", i == 0))
    return _svg(label, body)


def graph_overrides() -> dict:
    """suffix -> {prompt, figure{type, markup, alt}, [explanation]}. Data drawn = data the key was solved from."""
    F = lambda markup, alt: {"type": "svg", "markup": markup, "alt": alt}
    return {
        "a-q06": {
            "prompt": "Farmer Lal is drawing his apple row in the pictograph. The row must show 60 apples. How many more pictures must he draw?",
            "figure": F(pictograph("Farmer Lal's apples", "A pictograph row of apples that is not finished, with a key",
                                   [("Apples", 4)], "apple", "10 apples"),
                        "A pictograph. Key: 1 apple picture = 10 apples. The Apples row has 4 pictures so far."),
        },
        "a-q07": {
            "prompt": "Neha has 9 stickers, but her row in the pictograph is still empty. What should her row show?",
            "figure": F(pictograph("Stickers collected", "A pictograph of stickers with a key; one row is empty",
                                   [("Ravi", 3), ("Mona", 5), ("Neha", 0)], "star", "2 stickers", "?"),
                        "A pictograph. Key: 1 star = 2 stickers. Ravi 3 stars, Mona 5 stars, Neha's row is empty."),
        },
        "a-q15": {
            "prompt": "The pictograph shows the mangoes three children picked. How many mangoes did the three pick in all?",
            "figure": F(pictograph("Mangoes picked", "A pictograph of mangoes picked by Hari, Jaya and Kamal, with a key",
                                   [("Hari", 6), ("Jaya", 9), ("Kamal", 3)], "mango", "5 mangoes"),
                        "A pictograph. Key: 1 mango symbol = 5 mangoes. Hari 6 symbols, Jaya 9 symbols, Kamal 3 symbols."),
        },
        "a-q17": {
            "prompt": "In Asha's pictograph, every symbol means the same number, and the mango row stands for 32 mangoes. How many symbols should the banana row have to show 24 bananas?",
            "figure": F(pictograph("Asha's fruit", "A pictograph of fruit with no key; the banana row is empty",
                                   [("Mangoes", 4), ("Bananas", 0)], "mango", None, "?"),
                        "A pictograph with no key. The Mangoes row has 4 symbols. The Bananas row is empty."),
        },
        "a-q19": {
            "prompt": "A stall sold 60 balloons in all. Its pictograph is shown, but the Green row is still empty. How many pictures should go in the Green row?",
            "figure": F(pictograph("Balloons sold", "A pictograph of balloons sold by colour, with a key; one row is empty",
                                   [("Red", 4), ("Blue", 3), ("Yellow", 2), ("Green", 0)], "balloon", "5 balloons", "?"),
                        "A pictograph. Key: 1 balloon picture = 5 balloons. Red 4 pictures, Blue 3, Yellow 2, Green row empty."),
        },
        "a-q20": {
            "prompt": "Pooja cycled 150 km from Monday to Friday. Her bar graph is missing Friday's bar. How long should Friday's bar be?",
            "figure": F(bar_graph("Pooja's cycling", "A bar graph of kilometres cycled from Monday to Friday; Friday's bar is missing",
                                  [("Mon", 30), ("Tue", 25), ("Wed", 40), ("Thu", 20), ("Fri", None)], 50, 5, 10, "Distance (km)"),
                        "A bar graph of distance in km. Monday 30, Tuesday 25, Wednesday 40, Thursday 20, Friday missing. "
                        "Gridlines every 5 km, labelled every 10."),
        },
        "a-q23": {
            "prompt": "Lina's bar graph uses 1 square = 4 votes. She redraws it with 1 square = 2 votes. On the new graph, how many squares taller is the Tea bar than the Coffee bar?",
            "figure": F(square_bar_graph("Favourite drink", "A bar graph on squared paper of votes for tea and coffee",
                                         [("Tea", 7), ("Coffee", 4.5)], 8, "1 square = 4 votes"),
                        "A bar graph on squared paper, 1 square = 4 votes. Tea bar 7 squares tall, Coffee bar 4 and a half squares tall."),
        },
        "b-q03": {
            "prompt": "The library pictograph shows books borrowed on three days. How many more books were borrowed on Monday than on Friday?",
            "figure": F(pictograph("Library books borrowed", "A pictograph of library books borrowed on Monday, Wednesday and Friday, with a key",
                                   [("Monday", 5), ("Wednesday", 4), ("Friday", 3)], "book", "4 books"),
                        "A pictograph. Key: 1 book picture = 4 books. Monday 5 pictures, Wednesday 4, Friday 3."),
        },
        "b-q06": {
            "prompt": "Kavya's pictograph row shows 35 kites using only whole symbols. Which key should she use?",
            "figure": F(pictograph("Kites at the festival", "A pictograph row of kite symbols; the key is missing",
                                   [("Kites", 7)], "kite", None),
                        "A pictograph row labelled Kites with 7 whole kite symbols. The key is not shown."),
        },
        "b-q07": {
            "prompt": "This marble pictograph uses whole and half symbols, as in the rows shown. Using only whole and half symbols, which number of marbles can NOT be shown exactly?",
            "figure": F(pictograph("Marbles", "A pictograph of marbles using whole and half symbols, with a key",
                                   [("Asha", 3.5), ("Bilal", 2)], "marble", "4 marbles"),
                        "A pictograph. Key: 1 marble symbol = 4 marbles. Asha 3 and a half symbols, Bilal 2 symbols."),
        },
        "b-q08": {
            "prompt": "Look at the farm table. Which animal is there exactly 5 more of than goats?",
            "figure": F(table_figure("Animals on the farm", "A table of farm animals and how many there are",
                                     ("Animal", "Number"), [("Cows", "14"), ("Goats", "9"), ("Hens", "23"), ("Ducks", "5")]),
                        "A table. Cows 14, Goats 9, Hens 23, Ducks 5."),
        },
        "b-q16": {
            "prompt": "The bar graph shows tickets sold for three shows of a school play. The hall has 150 seats for each show. How many seats were empty in the three shows altogether?",
            "figure": F(bar_graph("Play tickets sold", "A bar graph of tickets sold for three shows of a school play",
                                  [("Show 1", 120), ("Show 2", 95), ("Show 3", 85)], 150, 10, 30, "Tickets sold", value_labels=True),
                        "A bar graph of tickets sold. Show 1: 120, Show 2: 95, Show 3: 85. The scale goes up to 150."),
        },
        "b-q17": {
            "prompt": "In the car-park pictograph, Monday's row stands for 30 cars. Every symbol means the same number. How many cars were parked on Tuesday?",
            "figure": F(pictograph("Cars in the car park", "A pictograph of cars parked on Monday and Tuesday; the key is missing",
                                   [("Monday", 6), ("Tuesday", 9)], "car", None),
                        "A pictograph with no key. Monday 6 car symbols, Tuesday 9 car symbols."),
        },
        "b-q20": {
            "prompt": "Mira's pictograph is shown. She redraws it using 1 symbol = 6 children. How many symbols will the new Swimming row have?",
            "figure": F(pictograph("Favourite sport", "A pictograph of children's favourite sports, with a key",
                                   [("Swimming", 9), ("Cricket", 5), ("Dance", 3)], "child", "4 children"),
                        "A pictograph. Key: 1 child symbol = 4 children. Swimming 9 symbols, Cricket 5, Dance 3."),
        },
        "b-q23": {
            "prompt": "On the bar graph, Charu's bar is not drawn yet. Charu scored 15 more runs than Bhavya. How many squares tall should Charu's bar be?",
            "figure": F(square_bar_graph("Runs scored", "A bar graph on squared paper of runs scored; one bar is not drawn",
                                         [("Bhavya", 6), ("Charu", None)], 10, "1 square = 5 runs"),
                        "A bar graph on squared paper, 1 square = 5 runs. Bhavya's bar is 6 squares tall. Charu's bar is not drawn."),
        },
    }


def main() -> None:
    DOCS.joinpath("grade-4").mkdir(parents=True, exist_ok=True)
    for ch in CHAPTERS:
        src = ROOT / "sof-maths/grade-4" / ch["src"]
        md = strip_editorial_sections(src.read_text(encoding="utf-8"))
        set_a, set_b = writer_sets(md, ch["prefix"])
        overrides = graph_overrides() if ch["prefix"] == "g4-maths-graphs" else {}
        for q in set_a + set_b:
            o = overrides.pop(q["id"].split(ch["prefix"] + "-")[1], None)
            if o:
                assert not q.get("figure"), ("already has a figure", q["id"])
                q.update(o)
        assert not overrides, ("unused graph overrides", sorted(overrides))
        for name, qs in (("a", set_a), ("b", set_b)):
            raws, key = raw_items(md, name), answer_key(md, name)
            assert len(qs) == len(raws) == len(key) == 24, (name, len(qs), len(raws), len(key))
            for q, r, k in zip(qs, raws, key):
                assert r["answer"] == k, (q["id"], r["answer"], k)
                assert q["answerId"] == k.lower(), ("balance_set moved a key", q["id"])
                assert r["hint"], q["id"]
                q["hints"] = [ch["hints"].get(q["id"].split(ch["prefix"] + "-")[1], r["hint"])]
                fig = q.get("figure")
                if fig:
                    fig["markup"] = strip_data_attrs(fig["markup"])
                    assert fig.get("alt"), q["id"]
                    assert re.search(r'aria-label="[^"]+"', fig["markup"]), q["id"]
            counts = {L: sum(1 for q in qs if q["answerId"] == L) for L in "abcd"}
            assert sorted(counts.values()) == [6, 6, 6, 6], counts
            print("%s Set %s: %d items, %d pictorial, keys %s" % (ch["meta"]["id"], name.upper(), len(qs),
                  sum(1 for q in qs if q.get("figure")), counts))
        emit_module(OUT / ch["out"], ch["export"], ch["meta"], lesson_ts(md, ch), set_a, set_b)
        DOCS.joinpath("grade-4", ch["doc"]).write_text(src.read_text(encoding="utf-8"), encoding="utf-8")


if __name__ == "__main__":
    main()
