#!/usr/bin/env python3
"""Generate Mindstrong launcher icons + splash assets for Capacitor Android/iOS."""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]

CREAM = (255, 250, 240, 255)
INK = (43, 42, 76, 255)
CORAL = (255, 122, 102, 255)
SUN = (255, 213, 74, 255)
PINK = (255, 158, 187, 255)
WHITE = (255, 255, 255, 255)


def rounded_rect(draw: ImageDraw.ImageDraw, box, radius: int, fill) -> None:
    draw.rounded_rectangle(box, radius=radius, fill=fill)


def draw_mark(img: Image.Image, *, pad_ratio: float = 0.1) -> None:
    """Draw a simple Mindstrong mark: cream tile + pink badge + bold M + sun dot."""
    w, h = img.size
    assert w == h
    draw = ImageDraw.Draw(img)
    pad = int(w * pad_ratio)
    rounded_rect(draw, (pad, pad, w - pad, h - pad), int(w * 0.22), CREAM)
    # pink inner badge
    inner = int(w * 0.2)
    rounded_rect(draw, (inner, inner, w - inner, h - inner), int(w * 0.16), PINK)
    # letter M
    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", int(w * 0.42))
    except OSError:
        font = ImageFont.load_default()
    text = "M"
    bbox = draw.textbbox((0, 0), text, font=font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    tx = (w - tw) / 2 - bbox[0]
    ty = (h - th) / 2 - bbox[1] - w * 0.02
    draw.text((tx, ty), text, font=font, fill=INK)
    # sun accent (solid colors only — no translucent rings on transparent canvas)
    r = int(w * 0.06)
    cx, cy = int(w * 0.7), int(h * 0.3)
    draw.ellipse((cx - r, cy - r, cx + r, cy + r), fill=SUN)
    r2 = max(2, int(r * 0.45))
    draw.ellipse((cx + r // 2 - r2, cy - r - r2 // 2, cx + r // 2 + r2, cy - r + r2 // 2), fill=CORAL)


def make_icon(size: int) -> Image.Image:
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw_mark(img, pad_ratio=0.08)
    return img


def make_splash(size: int) -> Image.Image:
    img = Image.new("RGBA", (size, size), CREAM)
    mark = make_icon(int(size * 0.36))
    x = (size - mark.width) // 2
    y = (size - mark.height) // 2 - int(size * 0.04)
    img.alpha_composite(mark, (x, y))
    draw = ImageDraw.Draw(img)
    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", int(size * 0.045))
        sub = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", int(size * 0.022))
    except OSError:
        font = ImageFont.load_default()
        sub = font
    title = "Mindstrong"
    bb = draw.textbbox((0, 0), title, font=font)
    tw = bb[2] - bb[0]
    draw.text(((size - tw) / 2, y + mark.height + int(size * 0.03)), title, font=font, fill=INK)
    tag = "Think hard. Stay brave."
    bb2 = draw.textbbox((0, 0), tag, font=sub)
    tw2 = bb2[2] - bb2[0]
    draw.text(((size - tw2) / 2, y + mark.height + int(size * 0.09)), tag, font=sub, fill=(*INK[:3], 180))
    return img


def write_android(icon_1024: Image.Image, splash: Image.Image) -> None:
    res = ROOT / "android/app/src/main/res"
    dens = {
        "mdpi": 48,
        "hdpi": 72,
        "xhdpi": 96,
        "xxhdpi": 144,
        "xxxhdpi": 192,
    }
    for name, size in dens.items():
        d = res / f"mipmap-{name}"
        d.mkdir(parents=True, exist_ok=True)
        ic = icon_1024.resize((size, size), Image.Resampling.LANCZOS)
        ic.save(d / "ic_launcher.png")
        ic.save(d / "ic_launcher_round.png")
        # adaptive foreground: full-bleed mark on transparent
        fg = make_icon(size)
        fg.save(d / "ic_launcher_foreground.png")

    # legacy splash pngs used by Capacitor theme
    splash_sizes = {
        "drawable": 480,
        "drawable-port-mdpi": 320,
        "drawable-port-hdpi": 480,
        "drawable-port-xhdpi": 720,
        "drawable-port-xxhdpi": 960,
        "drawable-port-xxxhdpi": 1280,
        "drawable-land-mdpi": 320,
        "drawable-land-hdpi": 480,
        "drawable-land-xhdpi": 720,
        "drawable-land-xxhdpi": 960,
        "drawable-land-xxxhdpi": 1280,
    }
    for folder, size in splash_sizes.items():
        d = res / folder
        d.mkdir(parents=True, exist_ok=True)
        splash.resize((size, size), Image.Resampling.LANCZOS).convert("RGB").save(d / "splash.png")


def write_ios(icon_1024: Image.Image, splash: Image.Image) -> None:
    icon_dir = ROOT / "ios/App/App/Assets.xcassets/AppIcon.appiconset"
    # App Store requires opaque 1024
    opaque = Image.new("RGB", (1024, 1024), CREAM[:3])
    opaque.paste(icon_1024, (0, 0), icon_1024)
    opaque.save(icon_dir / "AppIcon-512@2x.png")

    splash_dir = ROOT / "ios/App/App/Assets.xcassets/Splash.imageset"
    s = splash.resize((2732, 2732), Image.Resampling.LANCZOS).convert("RGB")
    for name in ("splash-2732x2732.png", "splash-2732x2732-1.png", "splash-2732x2732-2.png"):
        s.save(splash_dir / name)


def write_master(icon_1024: Image.Image, splash: Image.Image) -> None:
    out = ROOT / "docs/branding"
    out.mkdir(parents=True, exist_ok=True)
    icon_1024.save(out / "app-icon-1024.png")
    splash.resize((1280, 1280), Image.Resampling.LANCZOS).save(out / "splash-1280.png")


def main() -> None:
    icon = make_icon(1024)
    splash = make_splash(2732)
    write_android(icon, splash)
    write_ios(icon, splash)
    write_master(icon, splash)
    print("Generated Android mipmaps + splash, iOS AppIcon/Splash, docs/branding/")


if __name__ == "__main__":
    main()
