"""Tiny inline-attribute SVG helpers for the 2026-10-19 Science pictorial pass.

Every figure is an original 320x220 drawing with role="img" and an aria-label that
describes what is drawn without naming the answer. No <style> blocks: inline SVGs share
one HTML document, so class rules would leak between figures.
"""
from __future__ import annotations

import math
from html import escape

FONT = "system-ui, sans-serif"
INK = "#1f2937"


def _attrs(kw: dict) -> str:
    out = []
    for k, v in kw.items():
        if v is None:
            continue
        name = k.rstrip("_").replace("_", "-")
        out.append(f'{name}="{escape(str(v), quote=True)}"')
    return " ".join(out)


def el(tag: str, **kw) -> str:
    return f"<{tag} {_attrs(kw)}/>"


def text(x, y, s, size=13, anchor="middle", weight="600", fill=INK, **kw) -> str:
    a = _attrs(dict(x=x, y=y, font_size=size, text_anchor=anchor, font_weight=weight, fill=fill, **kw))
    return f"<text {a}>{escape(str(s), quote=False)}</text>"


def rect(x, y, w, h, fill="#ffffff", stroke=INK, sw=1.5, rx=0, **kw) -> str:
    return el("rect", x=x, y=y, width=w, height=h, rx=rx or None, fill=fill, stroke=stroke, stroke_width=sw, **kw)


def circle(cx, cy, r, fill="#ffffff", stroke=INK, sw=1.5, **kw) -> str:
    return el("circle", cx=cx, cy=cy, r=r, fill=fill, stroke=stroke, stroke_width=sw, **kw)


def ellipse(cx, cy, rx, ry, fill="#ffffff", stroke=INK, sw=1.5, **kw) -> str:
    return el("ellipse", cx=cx, cy=cy, rx=rx, ry=ry, fill=fill, stroke=stroke, stroke_width=sw, **kw)


def line(x1, y1, x2, y2, stroke=INK, sw=1.5, dash=None, **kw) -> str:
    return el("line", x1=x1, y1=y1, x2=x2, y2=y2, stroke=stroke, stroke_width=sw, stroke_dasharray=dash,
              stroke_linecap="round", **kw)


def path(d, fill="none", stroke=INK, sw=1.5, **kw) -> str:
    return el("path", d=d, fill=fill, stroke=stroke, stroke_width=sw, stroke_linejoin="round", **kw)


def poly(points, fill="#ffffff", stroke=INK, sw=1.5, **kw) -> str:
    pts = " ".join(f"{x:g},{y:g}" for x, y in points)
    return el("polygon", points=pts, fill=fill, stroke=stroke, stroke_width=sw, stroke_linejoin="round", **kw)


def polyline(points, stroke=INK, sw=2, fill="none", **kw) -> str:
    pts = " ".join(f"{x:g},{y:g}" for x, y in points)
    return el("polyline", points=pts, fill=fill, stroke=stroke, stroke_width=sw, stroke_linejoin="round",
              stroke_linecap="round", **kw)


def arrow(x1, y1, x2, y2, stroke=INK, sw=2, head=8, dash=None) -> str:
    """Line with a filled triangular head at (x2, y2)."""
    ang = math.atan2(y2 - y1, x2 - x1)
    bx, by = x2 - head * math.cos(ang), y2 - head * math.sin(ang)
    px, py = -math.sin(ang) * head * 0.55, math.cos(ang) * head * 0.55
    return line(x1, y1, bx, by, stroke=stroke, sw=sw, dash=dash) + poly(
        [(round(x2, 1), round(y2, 1)), (round(bx + px, 1), round(by + py, 1)), (round(bx - px, 1), round(by - py, 1))],
        fill=stroke, stroke=stroke, sw=1)


def dbl_arrow(x1, y1, x2, y2, stroke=INK, sw=1.6, head=7) -> str:
    mx, my = (x1 + x2) / 2, (y1 + y2) / 2
    return arrow(mx, my, x1, y1, stroke, sw, head) + arrow(mx, my, x2, y2, stroke, sw, head)


def leader(x1, y1, x2, y2, label, size=14, anchor=None, dx=0, dy=5) -> str:
    """Thin line from a part (x1,y1) to a label placed at (x2,y2)."""
    if anchor is None:
        anchor = "start" if x2 >= x1 else "end"
    off = 4 if anchor == "start" else (-4 if anchor == "end" else 0)
    return line(x1, y1, x2, y2, stroke="#475569", sw=1.2) + circle(x1, y1, 2, fill="#475569", stroke="none") + text(
        x2 + off + dx, y2 + dy, label, size=size, anchor=anchor, weight="700")


def badge(x, y, s, r=10, size=13) -> str:
    return circle(x, y, r, fill="#ffffff", stroke=INK, sw=1.5) + text(x, y + size * 0.36, s, size=size, weight="700")


def wave(x0, y0, width, amp, cycles, stroke="#2563eb", sw=2.2, steps=120) -> str:
    pts = []
    for i in range(steps + 1):
        t = i / steps
        pts.append((round(x0 + t * width, 1), round(y0 - amp * math.sin(2 * math.pi * cycles * t), 1)))
    return polyline(pts, stroke=stroke, sw=sw)


def beaker(x, y, w, h, level=None, liquid="#93c5fd", opacity=0.8) -> str:
    """Open beaker with top-left corner (x, y); level = liquid height from the bottom."""
    out = ""
    if level:
        out += rect(x + 2, y + h - level, w - 4, level - 2, fill=liquid, stroke="none", opacity=opacity)
    out += path(f"M{x},{y} L{x},{y + h - 6} Q{x},{y + h} {x + 6},{y + h} L{x + w - 6},{y + h} Q{x + w},{y + h} {x + w},{y + h - 6} L{x + w},{y}",
                stroke=INK, sw=2)
    return out


def tube(x, y, w, h, level=None, liquid="#93c5fd", cork=False) -> str:
    """Test tube, top-left (x, y), rounded bottom."""
    r = w / 2
    out = ""
    if level:
        top = y + h - level
        out += path(f"M{x + 2},{top} L{x + 2},{y + h - r} A{r - 2},{r - 2} 0 0 0 {x + w - 2},{y + h - r} L{x + w - 2},{top} Z",
                    fill=liquid, stroke="none", opacity=0.85)
    out += path(f"M{x},{y} L{x},{y + h - r} A{r},{r} 0 0 0 {x + w},{y + h - r} L{x + w},{y}", stroke=INK, sw=2)
    if cork:
        out += rect(x - 2, y - 10, w + 4, 12, fill="#b45309", stroke="#78350f", sw=1.2, rx=2)
    return out


def axes(x0, y0, w, h, xlabel, ylabel, xticks=(), yticks=()) -> str:
    """Graph axes with origin at (x0, y0) (bottom-left). ticks: [(value_pos_px, label)]."""
    out = arrow(x0, y0, x0 + w, y0, sw=1.6, head=7) + arrow(x0, y0, x0, y0 - h, sw=1.6, head=7)
    for px, lab in xticks:
        out += line(x0 + px, y0, x0 + px, y0 + 4, sw=1.2) + text(x0 + px, y0 + 16, lab, size=11, weight="500")
    for py, lab in yticks:
        out += line(x0 - 4, y0 - py, x0, y0 - py, sw=1.2) + text(x0 - 7, y0 - py + 4, lab, size=11, weight="500", anchor="end")
    out += text(x0 + w, y0 + 30, xlabel, size=12, anchor="end", weight="600")
    out += text(x0 - 6, y0 - h - 6, ylabel, size=12, anchor="start", weight="600")
    return out


def svg(aria: str, *parts: str) -> str:
    assert not any(ch in aria for ch in "\"'&<>") and len(aria) < 400, aria
    body = "".join(parts)
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" role="img" '
        f'aria-label="{escape(aria, quote=True)}" font-family="{escape(FONT, quote=True)}">'
        f'<rect x="0" y="0" width="320" height="220" fill="#ffffff"/>{body}</svg>'
    )


def figure(aria: str, *parts: str) -> dict:
    return {"type": "svg", "markup": svg(aria, *parts), "alt": aria}
