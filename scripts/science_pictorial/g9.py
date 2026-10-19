"""G9 Science pictorial items (Matter, Cell and tissues, Motion)."""
from __future__ import annotations

import math

from .svg import (INK, arrow, axes, badge, beaker, circle, dbl_arrow, ellipse, figure, leader, line, path, poly, polyline,
                  rect, text)

ITEMS: dict[str, dict] = {}
BLUE, LBLUE = "#2563eb", "#bfdbfe"


def item(qid, prompt, options, answer, explanation, hint, fig):
    ITEMS[qid] = dict(prompt=prompt, options=options, answer=answer, explanation=explanation, hint=hint, figure=fig)


def particles(x, y, w, h, kind):
    out = rect(x, y, w, h, fill="#ffffff", stroke=INK, sw=2)
    if kind == "solid":
        for r in range(5):
            for c in range(5):
                out += circle(x + 12 + c * 16, y + 14 + r * 16, 6.5, fill="#60a5fa", stroke="#1e3a8a", sw=1)
    elif kind == "liquid":
        pts = [(14, 60), (28, 66), (42, 58), (58, 64), (72, 60), (20, 76), (36, 80), (52, 76), (68, 80), (82, 74),
               (14, 92), (30, 94), (46, 90), (62, 94), (78, 90), (24, 46), (54, 46), (84, 52)]
        out += "".join(circle(x + px * w / 96, y + py * h / 100, 6.5, fill="#60a5fa", stroke="#1e3a8a", sw=1) for px, py in pts)
    else:
        pts = [(18, 20, 30), (70, 26, 160), (44, 56, 250), (80, 78, 100), (20, 84, 320)]
        for px, py, ang in pts:
            cx, cy = x + px * w / 96, y + py * h / 100
            a = math.radians(ang)
            out += circle(cx, cy, 6.5, fill="#60a5fa", stroke="#1e3a8a", sw=1) + arrow(cx + 8 * math.cos(a), cy + 8 * math.sin(a), cx + 24 * math.cos(a), cy + 24 * math.sin(a), sw=1.4, head=5)
    return out


# ============================== Matter ==============================
item(
    "g9-sci-matter-a-q02",
    "Boxes P, Q and R show the particles of three substances. In which box are the particles most loosely packed and free to move far apart?",
    ["Box P", "Box Q", "Box R", "All three are the same"], "b",
    "In box Q the particles are few and far apart, and the arrows show them moving freely in all directions: this is a gas. "
    "Box R shows a liquid, whose particles also move about but stay close together.",
    "Compare the gaps between the particles in each box. Where are the gaps biggest, with particles moving freely?",
    figure(
        "Three boxes of particles. Box P: particles packed in neat touching rows. Box Q: a few particles far apart, each with an arrow showing it moving. Box R: particles close together but in an untidy jumble at the bottom.",
        particles(12, 40, 92, 92, "solid"), particles(114, 40, 92, 92, "gas"), particles(216, 40, 92, 92, "liquid"),
        text(58, 160, "P", size=16, weight="700"), text(160, 160, "Q", size=16, weight="700"), text(262, 160, "R", size=16, weight="700"),
    ),
)

item(
    "g9-sci-matter-a-q22",
    "The graph shows the temperature of ice heated steadily from −10 °C. What happens to the temperature during part QR?",
    ["It rises steadily", "It stays constant until melting finishes", "It falls steadily", "It jumps to 100 °C at once"], "b",
    "Part QR is flat at 0 °C: the heat supplied is used as latent heat of fusion to break up the ice's particle arrangement, not to raise the temperature, so it stays constant until all the ice has melted. "
    "It does not rise steadily: that happens only in the sloping parts PQ and RS.",
    "Look at the line between Q and R. While the ice melts, where is the supplied heat going?",
    figure(
        "A graph of temperature against time for ice heated steadily. The line rises from P at minus 10 degrees Celsius to Q at 0 degrees, stays flat from Q to R at 0 degrees, rises from R to S at 100 degrees, then stays flat from S to T.",
        axes(50, 175, 255, 155, "time", "temperature (°C)", yticks=[(15, "−10"), (30, "0"), (130, "100")]),
        polyline([(50, 160), (85, 145), (150, 145), (220, 45), (290, 45)], stroke="#dc2626", sw=2.5),
        "".join(circle(px, py, 3.5, fill="#dc2626", stroke="none") + text(px + dx, py + dy, lab, size=14, weight="700")
                for px, py, lab, dx, dy in [(50, 160, "P", 14, 16), (85, 145, "Q", 0, -9), (150, 145, "R", 2, -9), (220, 45, "S", 0, -9), (290, 45, "T", 0, -9)]),
    ),
)

item(
    "g9-sci-matter-a-q19",
    "The picture shows a clay pot (matka) of drinking water on a hot day. Which process keeps the water inside cool?",
    ["Water freezing", "Condensation inside the pot", "Evaporation of water that seeps through the porous walls", "Sublimation of the clay"], "c",
    "Water seeps through tiny pores in the clay and evaporates from the outer surface. Evaporation takes latent heat from the pot and the water in it, so the water cools. "
    "Condensation inside would give out heat and warm the water, not cool it.",
    "Look at the droplets on the outside of the pot and the wavy arrows leaving them. Which change takes heat away?",
    figure(
        "A round clay pot full of water, standing in hot sunshine. Small droplets of water have seeped through the clay onto its outer surface, and wavy arrows show vapour leaving the droplets into the air.",
        circle(270, 35, 16, fill="#facc15", stroke="#b45309", sw=2),
        path("M130,60 L190,60 L195,72 C260,90 260,190 160,200 C60,190 60,90 125,72 Z", fill="#c2410c", stroke="#7c2d12", sw=2),
        ellipse(160, 60, 30, 6, fill="#7c2d12", stroke="#7c2d12", sw=1),
        "".join(circle(x, y, 3, fill="#93c5fd", stroke="#1d4ed8", sw=0.8) for x, y in [(98, 120), (104, 160), (122, 186), (218, 118), (220, 158), (196, 186), (110, 96), (212, 96)]),
        "".join(path(f"M{x},{y} q-6,-6 0,-12 q6,-6 0,-12", stroke="#64748b", sw=1.5) + arrow(x, y - 24, x, y - 32, stroke="#64748b", sw=1.5, head=5)
                for x, y in [(80, 120), (240, 120), (86, 165), (238, 165)]),
        text(160, 135, "water", size=13, weight="600", fill="#ffffff"),
    ),
)


def weather_card(x, title, hum):
    return rect(x, 30, 135, 120, fill="#f8fafc", stroke="#475569", sw=1.5, rx=8) + text(x + 67, 52, title, size=14, weight="700") + \
        text(x + 67, 80, "temperature 30 °C", size=12, weight="600") + text(x + 67, 102, "light breeze", size=12, weight="600") + \
        text(x + 67, 124, f"humidity {hum}", size=12, weight="700")


item(
    "g9-sci-matter-a-q09",
    "Washing is hung out at the same time on two different days, as the weather cards show. Which change explains why it dries more slowly on day 1?",
    ["Higher humidity", "Higher temperature", "Larger surface area", "Stronger wind"], "a",
    "Temperature and wind are the same on both days; only the humidity differs. On day 1 the air already holds a lot of water vapour (85%), so it takes up more vapour slowly and evaporation is slower. "
    "A higher temperature would speed drying up, and anyway the temperature is the same on both days.",
    "Compare the two weather cards. Which reading is different, and how does damp air affect evaporation?",
    figure(
        "Two weather cards. Day 1: temperature 30 degrees Celsius, light breeze, humidity 85 percent. Day 2: temperature 30 degrees Celsius, light breeze, humidity 40 percent. "
        "Below each card a shirt hangs on a line; after two hours the shirt on day 1 is still dripping.",
        weather_card(15, "day 1", "85%"), weather_card(170, "day 2", "40%"),
        line(15, 168, 150, 168, sw=1.5), line(170, 168, 305, 168, sw=1.5),
        poly([(66, 168), (96, 168), (104, 178), (98, 182), (98, 205), (64, 205), (64, 182), (58, 178)], fill="#93c5fd", stroke="#1e3a8a", sw=1.2),
        "".join(circle(70 + i * 8, 211, 2, fill="#2563eb", stroke="none") for i in range(4)),
        poly([(222, 168), (252, 168), (260, 178), (254, 182), (254, 205), (220, 205), (220, 182), (214, 178)], fill="#e0f2fe", stroke="#1e3a8a", sw=1.2),
        text(122, 196, "after 2 h", size=10.5, weight="500"), text(282, 196, "after 2 h", size=10.5, weight="500"),
    ),
)

item(
    "g9-sci-matter-a-q18",
    "In the set-up shown, a gas turns into a liquid. What is being done to the gas?",
    ["It is being heated only", "Pressure is being applied and it is being cooled", "Its mass is being removed", "It is being left open to the air"], "b",
    "The piston pushes down, raising the pressure and forcing the particles closer together, while the ice bath lowers the temperature so they move more slowly. Together these turn the gas into a liquid. "
    "Heating would do the opposite, making the particles move faster and spread further apart.",
    "Look at what the piston and the ice are each doing. How does each one change the particles?",
    figure(
        "A sealed cylinder of gas standing in a tub of ice. A piston is being pushed down into the cylinder by a large arrow. Drops of liquid are collecting at the bottom of the cylinder.",
        rect(40, 120, 240, 80, fill="#e0f2fe", stroke="#475569", sw=2, rx=4),
        "".join(rect(52 + i * 32, 140 + (i % 2) * 22, 20, 18, fill="#ffffff", stroke="#7dd3fc", sw=1.2, rx=3) for i in range(7)),
        rect(120, 40, 80, 150, fill="#ffffff", stroke=INK, sw=2.2), rect(122, 80, 76, 10, fill="#64748b", stroke=INK, sw=1.2),
        rect(155, 30, 10, 50, fill="#94a3b8", stroke=INK, sw=1.2), arrow(160, 4, 160, 28, sw=3),
        "".join(circle(130 + (i * 19) % 60, 100 + (i * 13) % 60, 4, fill="#60a5fa", stroke="#1e3a8a", sw=0.8) for i in range(9)),
        rect(122, 176, 76, 12, fill="#60a5fa", stroke="none"),
        text(220, 20, "push", size=13, weight="600"), text(60, 112, "ice", size=13, weight="700"),
    ),
)


def shape_cont(x, y, kind, contents):
    out = ""
    if kind == "box":
        out += rect(x, y, 70, 60, fill="none", stroke=INK, sw=2)
        bounds = (x, y, 70, 60)
    else:
        out += path(f"M{x},{y} L{x + 10},{y + 60} L{x + 60},{y + 60} L{x + 70},{y}", stroke=INK, sw=2)
        bounds = (x, y, 70, 60)
    bx, by, bw, bh = bounds
    if contents == "solid":
        out = rect(bx + 22, by + 32, 26, 28, fill="#f59e0b", stroke="#92400e", sw=1.5) + out
    elif contents == "liquid":
        if kind == "box":
            out = rect(bx + 2, by + 40, bw - 4, 18, fill=LBLUE, stroke="none") + out
        else:
            out = poly([(bx + 5, by + 32), (bx + 10, by + 58), (bx + 60, by + 58), (bx + 65, by + 32)], fill=LBLUE, stroke="none") + out
    else:
        out = (rect(bx + 2, by + 2, bw - 4, bh - 4, fill="#fce7f3", stroke="none") if kind == "box" else
               poly([(bx + 1, by + 2), (bx + 10, by + 58), (bx + 60, by + 58), (bx + 69, by + 2)], fill="#fce7f3", stroke="none")) + out
        out += "".join(circle(bx + px, by + py, 2.8, fill="#db2777", stroke="none") for px, py in [(14, 12), (40, 10), (58, 20), (24, 30), (48, 38), (16, 48), (36, 52), (56, 50)])
    return out


item(
    "g9-sci-matter-a-q05",
    "Substances P, Q and R are each moved from container 1 into a differently shaped container 2, as shown. Which substance has a definite shape and a definite volume?",
    ["Substance P", "Substance Q", "Substance R", "No substance shown"], "a",
    "P keeps the same shape and the same volume in both containers, so it is a solid. "
    "Q keeps its volume but takes the shape of each container, so it is a liquid, which has no definite shape of its own.",
    "Compare each substance in its two containers. Which one looks exactly the same in both?",
    figure(
        "Three rows. Row P: an orange block sits in a box and then in a tapered tub, keeping the same shape and size. "
        "Row Q: a blue liquid lies flat in the bottom of the box, then takes the shape of the tapered tub with the same amount. Row R: a pink gas fills the whole box and then fills the whole tub.",
        text(25, 22, "container 1", size=12, weight="600", anchor="start"), text(205, 22, "container 2", size=12, weight="600", anchor="start"),
        *[shape_cont(x, y, k, c) for y, c in [(30, "solid"), (95, "liquid"), (160, "gas")] for x, k in [(40, "box"), (210, "tub")]],
        text(20, 64, "P", size=16, weight="700"), text(20, 129, "Q", size=16, weight="700"), text(20, 194, "R", size=16, weight="700"),
        arrow(125, 60, 195, 60, sw=1.6), arrow(125, 125, 195, 125, sw=1.6), arrow(125, 190, 195, 190, sw=1.6),
    ),
)


def syringe(y, label, contents):
    out = rect(60, y, 170, 34, fill="#ffffff", stroke=INK, sw=2) + rect(40, y + 12, 20, 10, fill="#e5e7eb", stroke=INK, sw=1.5)
    out += rect(36, y + 8, 6, 18, fill="#475569", stroke=INK, sw=1)  # sealed tip
    if contents == "chalk":
        out += rect(62, y + 2, 120, 30, fill="#f5f5f4", stroke="#a8a29e", sw=1)
    elif contents == "water":
        out += rect(62, y + 2, 120, 30, fill=LBLUE, stroke="none")
    else:
        out += "".join(circle(70 + i * 16, y + 10 + (i % 2) * 14, 2.5, fill="#94a3b8", stroke="none") for i in range(7))
    out += rect(182, y + 2, 8, 30, fill="#64748b", stroke=INK, sw=1.2) + rect(190, y + 13, 70, 8, fill="#94a3b8", stroke=INK, sw=1) + \
        rect(260, y + 3, 8, 28, fill="#64748b", stroke=INK, sw=1.2)
    out += arrow(300, y + 17, 274, y + 17, sw=2) + text(20, y + 22, label, size=15, weight="700")
    return out


item(
    "g9-sci-matter-b-q03",
    "Three syringes, sealed at the tip, contain chalk, water and air, as shown. The plungers are pushed with the same force. Which syringe's contents can be compressed most easily?",
    ["Syringe 1", "Syringe 2", "Syringe 3", "All three equally"], "c",
    "Syringe 3 holds air, a gas, with large spaces between its particles, so pushing squeezes them closer and the plunger moves in a long way. "
    "Water in syringe 2 is a liquid: its particles are already close together, so it hardly compresses at all.",
    "Think about the gaps between the particles in each syringe. Where is there the most empty space to squeeze?",
    figure(
        "Three syringes with sealed tips, each with an arrow pushing the plunger. Syringe 1 is packed with a stick of chalk, syringe 2 is full of water, and syringe 3 holds only air.",
        syringe(25, "1", "chalk"), syringe(92, "2", "water"), syringe(159, "3", "air"),
        text(122, 21, "chalk", size=11, weight="600"), text(122, 88, "water", size=11, weight="600"), text(122, 155, "air", size=11, weight="600"),
    ),
)

item(
    "g9-sci-matter-b-q06",
    "100 mL of water is poured into a wide plate (P) and 100 mL into a narrow tumbler (Q), side by side in the same room. How does the rate of evaporation from P compare with that from Q?",
    ["It is lower", "It is higher", "Evaporation stops in P", "They are exactly equal"], "b",
    "The plate spreads the water out, giving it a much larger surface open to the air, so more particles can escape each second: evaporation from P is faster. "
    "It is not lower: a larger surface area speeds up evaporation, it does not slow it.",
    "Compare how much of the water's surface is open to the air in P and in Q.",
    figure(
        "A wide shallow plate P and a narrow tall tumbler Q stand side by side, each holding 100 millilitres of water. The water in P is spread out thinly; the water in Q stands in a deep narrow column.",
        path("M20,150 L40,170 L160,170 L180,150", stroke=INK, sw=2.2), poly([(26, 156), (40, 168), (160, 168), (174, 156)], fill=LBLUE, stroke="none"),
        line(26, 156, 174, 156, stroke=BLUE, sw=2),
        rect(232, 70, 40, 100, fill="none", stroke=INK, sw=2.2), rect(234, 112, 36, 56, fill=LBLUE, stroke="none"), line(234, 112, 270, 112, stroke=BLUE, sw=2),
        line(0, 172, 320, 172, stroke="#94a3b8", sw=1.5),
        text(100, 196, "P: wide plate", size=13, weight="700"), text(252, 196, "Q: tumbler", size=13, weight="700"),
        text(100, 212, "100 mL", size=12, weight="500"), text(252, 212, "100 mL", size=12, weight="500"),
    ),
)


def dish(cx, tablets):
    out = path(f"M{cx - 60},150 Q{cx},185 {cx + 60},150 Z", fill="#e5e7eb", stroke="#475569", sw=2)
    for dx, r in tablets:
        out += circle(cx + dx, 154, r, fill="#ffffff", stroke="#94a3b8", sw=1.2)
    return out


item(
    "g9-sci-matter-b-q22",
    "Camphor tablets are left in an open dish. The picture shows the dish on day 1 and on day 6. Which process explains the change?",
    ["Filtration", "Sublimation", "Sedimentation", "Condensation"], "b",
    "The tablets have shrunk and no liquid has appeared in the dish: the camphor has changed straight from a solid into a vapour, which is sublimation. "
    "Condensation is a change from vapour to liquid, and it would have left drops in the dish.",
    "On day 6 the tablets are smaller but the dish is still dry. Which change skips the liquid state?",
    figure(
        "Day 1: an open dish holding four large white camphor tablets. Day 6: the same dish holds only two very small tablets, and the dish is completely dry.",
        dish(80, [(-24, 9), (-6, 9), (12, 9), (28, 8)]), dish(240, [(-8, 3.5), (10, 3)]),
        text(80, 205, "day 1", size=14, weight="700"), text(240, 205, "day 6", size=14, weight="700"),
        text(240, 120, "dish dry", size=12, weight="500"), arrow(150, 150, 170, 150, sw=2),
    ),
)

item(
    "g9-sci-matter-b-q04",
    "The graph shows water heated steadily until it boils. Steam at 100 °C causes worse burns than water at 100 °C. How does the flat part of the graph help explain this?",
    ["Steam has a lower temperature", "Steam is denser than water", "Steam has no energy", "Steam carries extra latent heat that it gives out when it condenses"], "d",
    "During the flat part at 100 °C heat is still being supplied, but the temperature does not rise: that energy is stored in the steam as latent heat of vaporisation. "
    "When steam condenses on skin it gives out this extra heat too, so it burns worse. Steam is not at a lower temperature: both are at 100 °C.",
    "Heat keeps flowing in during the flat part, yet the temperature stays the same. Where does that energy go?",
    figure(
        "A graph of temperature against time while water is heated steadily. The line rises from 20 degrees Celsius to 100 degrees and then stays flat at 100 degrees, with a note: heat still being supplied, water turning to steam.",
        axes(50, 180, 255, 150, "time (heat supplied steadily)", "temperature (°C)", yticks=[(24, "20"), (120, "100")]),
        polyline([(50, 156), (140, 60), (290, 60)], stroke="#dc2626", sw=2.5),
        text(215, 50, "flat part", size=12, weight="700"), text(215, 92, "water turning", size=11, weight="500"), text(215, 106, "into steam", size=11, weight="500"),
    ),
)


def thermo_scale(x, unit, marks):
    out = rect(x - 7, 25, 14, 160, fill="#ffffff", stroke=INK, sw=1.5, rx=7) + circle(x, 190, 11, fill="#dc2626", stroke=INK, sw=1.5)
    out += rect(x - 3, 95, 6, 92, fill="#dc2626", stroke="none") + text(x, 18, unit, size=14, weight="700")
    for y, lab in marks:
        out += line(x - 12, y, x + 12, y, sw=1.5) + text(x + (18 if unit == "K" else -18), y + 4, lab, size=13, weight="700",
                                                        anchor="start" if unit == "K" else "end")
    return out


item(
    "g9-sci-matter-b-q20",
    "The two thermometer scales show the same temperatures in °C and in kelvin. How do you get the kelvin reading marked ? for 25 °C?",
    ["Subtract 273", "Multiply by 273", "Divide by 273", "Add 273"], "d",
    "The scales show 0 °C = 273 K and 100 °C = 373 K, so the kelvin reading is always 273 more: 25 + 273 = 298 K. "
    "Subtracting 273 would give −248, but the scale shows kelvin readings are larger than the Celsius ones.",
    "Compare matching marks on the two scales. Is the kelvin number bigger or smaller, and by how much?",
    figure(
        "Two thermometer scales side by side, joined by dashed lines at matching marks. Celsius 0 matches 273 kelvin, Celsius 100 matches 373 kelvin, and Celsius 25 matches a kelvin reading shown as a question mark.",
        thermo_scale(110, "°C", [(160, "0"), (135, "25"), (60, "100")]), thermo_scale(210, "K", [(160, "273"), (135, "?"), (60, "373")]),
        line(122, 160, 198, 160, stroke="#64748b", sw=1.2, dash="4 3"), line(122, 135, 198, 135, stroke="#64748b", sw=1.2, dash="4 3"),
        line(122, 60, 198, 60, stroke="#64748b", sw=1.2, dash="4 3"),
    ),
)

item(
    "g9-sci-matter-b-q09",
    "A sponge is a solid, yet it can be squeezed easily. The close-up shows how it is built. Why can it be squeezed?",
    ["It has tiny holes filled with air", "It has no particles", "It is really a liquid", "Its particles are far apart like a gas"], "a",
    "The close-up shows solid walls around many small spaces filled with air. Squeezing pushes the air out of these holes; the solid material itself hardly compresses. "
    "Its particles are not far apart like a gas: the walls are ordinary, closely packed solid material.",
    "Look at what fills the spaces between the solid walls in the close-up. What gets pushed out when you squeeze?",
    figure(
        "A sponge on the left and a magnified close-up on the right. The close-up shows a network of solid walls surrounding many small open spaces filled with air.",
        rect(25, 85, 85, 55, fill="#fde047", stroke="#ca8a04", sw=2, rx=6),
        circle(215, 110, 82, fill="#fde047", stroke="#374151", sw=4),
        "".join(ellipse(215 + dx, 110 + dy, rx, ry, fill="#ffffff", stroke="#ca8a04", sw=1.5) for dx, dy, rx, ry in
                [(-40, -40, 14, 11), (-5, -52, 12, 9), (32, -38, 15, 12), (55, -5, 12, 14), (-55, 0, 12, 14), (-20, -8, 16, 12),
                 (18, 2, 13, 11), (40, 34, 14, 11), (-38, 38, 14, 11), (0, 34, 12, 12), (20, 60, 10, 8), (-18, 62, 10, 8)]),
        line(110, 100, 140, 80, stroke="#94a3b8", sw=1.2, dash="4 3"), line(110, 125, 140, 145, stroke="#94a3b8", sw=1.2, dash="4 3"),
        leader(195, 102, 120, 200, "air spaces", size=12),
        text(68, 160, "sponge", size=13),
    ),
)

# ============================== Cell and tissues ==============================
def mito(cx, cy, rx=15, ry=8):
    return ellipse(cx, cy, rx, ry, fill="#fecaca", stroke="#b91c1c", sw=1.4) + \
        path(f"M{cx - rx + 4},{cy} q4,-5 7,0 q3,5 7,0 q3,-5 7,0 q3,5 6,0", stroke="#b91c1c", sw=1.1)


def chloro(cx, cy):
    return ellipse(cx, cy, 9, 5, fill="#4ade80", stroke="#166534", sw=1) + line(cx - 5, cy, cx + 5, cy, stroke="#166534", sw=0.8)


item(
    "g9-sci-cell-a-q03",
    "In the cell shown, which labelled part is the control centre that contains the genetic material?",
    ["Part P", "Part Q", "Part R", "Part S"], "c",
    "R is the nucleus, the large round body with its own boundary that holds the chromosomes (DNA) and controls the cell's activities. "
    "S is a mitochondrion, which releases energy but does not hold the cell's main genetic material.",
    "The control centre holds the chromosomes. Which labelled part is a large body with a boundary of its own?",
    figure(
        "An animal cell. P points to the thin outer boundary, Q to the jelly-like filling, R to a large round body near the centre containing thread-like strands, and S to a small oval body with folded inner walls.",
        ellipse(160, 110, 115, 78, fill="#fef3c7", stroke="#92400e", sw=2.5),
        circle(150, 108, 30, fill="#ddd6fe", stroke="#5b21b6", sw=2),
        path("M132,100 q8,-10 16,0 t16,0", stroke="#7c3aed", sw=1.4), path("M134,116 q10,8 20,0 t14,4", stroke="#7c3aed", sw=1.4),
        mito(225, 130), circle(95, 80, 3, fill="#92400e", stroke="none"), circle(210, 70, 3, fill="#92400e", stroke="none"),
        leader(60, 148, 25, 185, "P", size=16), leader(100, 125, 30, 110, "Q", size=16), leader(165, 90, 210, 25, "R", size=16), leader(236, 130, 295, 165, "S", size=16),
    ),
)


def tissue(x, y, kind):
    out = ""
    for r in range(3):
        for c in range(3):
            cx, cy = x + 16 + c * 30, y + 16 + r * 30
            if kind == "paren":
                out += circle(cx, cy, 13, fill="#ecfccb", stroke="#3f6212", sw=1.2) + circle(cx + 4, cy - 3, 3, fill="#7c3aed", stroke="none")
            elif kind == "scler":
                out += rect(cx - 14, cy - 14, 28, 28, fill="#a16207", stroke="#713f12", sw=1) + circle(cx, cy, 3.5, fill="#ffffff", stroke="none")
            else:
                out += rect(cx - 14, cy - 14, 28, 28, fill="#ecfccb", stroke="#3f6212", sw=1.2) + circle(cx + 3, cy - 2, 3, fill="#7c3aed", stroke="none")
                for sx, sy in [(-1, -1), (1, -1), (-1, 1), (1, 1)]:
                    out += poly([(cx + 14 * sx, cy + 14 * sy), (cx + 6 * sx, cy + 14 * sy), (cx + 14 * sx, cy + 6 * sy)], fill="#3f6212", stroke="none")
    return out


item(
    "g9-sci-cell-a-q10",
    "Which tissue shown gives rigid support and is made of dead cells when mature?",
    ["Tissue P", "Tissue Q", "Tissue R", "No tissue shown"], "b",
    "Q has very thick walls all round, a tiny space in the middle and no nuclei: it is sclerenchyma, whose dead, lignified cells give rigid support. "
    "R is collenchyma: its walls are thick only at the corners and its cells are living, so it gives flexible support instead.",
    "Dead cells have no nucleus. Which drawing has very thick walls and no nuclei at all?",
    figure(
        "Three plant tissues. P: rounded thin-walled cells with nuclei and small spaces between them. Q: cells with very thick walls all round, only a tiny space inside and no nuclei. R: living cells with nuclei whose walls are thickened only at the corners.",
        tissue(12, 40, "paren"), tissue(114, 40, "scler"), tissue(216, 40, "colle"),
        text(58, 160, "P", size=16, weight="700"), text(160, 160, "Q", size=16, weight="700"), text(262, 160, "R", size=16, weight="700"),
    ),
)

item(
    "g9-sci-cell-a-q15",
    "In the plant shown, arrow X marks transport through the xylem. What is being carried along X?",
    ["Food from the leaves", "Oxygen in blood", "Water and minerals from the roots", "Hormones in animals"], "c",
    "Arrow X runs upward from the roots to the leaves, the direction in which xylem carries water and dissolved minerals taken in from the soil. "
    "Food from the leaves travels in the phloem, shown by arrow Y, mostly away from the leaves.",
    "Follow arrow X from where it starts to where it ends. What do the roots take in from the soil?",
    figure(
        "A plant with leaves at the top, a stem and roots in the soil. Arrow X runs up the stem from the roots to the leaves. Arrow Y runs down the stem from the leaves.",
        rect(0, 150, 320, 70, fill="#d6a76a", stroke="none", opacity=0.6), line(0, 150, 320, 150, stroke="#78350f", sw=2),
        line(160, 40, 160, 150, stroke="#15803d", sw=8),
        path("M160,60 C130,40 100,45 88,60 C110,72 140,72 160,60 Z", fill="#4ade80", stroke="#166534", sw=1.5),
        path("M160,80 C190,60 222,65 232,80 C210,92 180,92 160,80 Z", fill="#4ade80", stroke="#166534", sw=1.5),
        path("M160,45 C150,25 160,15 168,12 C172,28 166,40 160,45 Z", fill="#4ade80", stroke="#166534", sw=1.5),
        "".join(path(d, stroke="#78350f", sw=2.5) for d in ["M160,150 Q150,180 130,200", "M160,150 Q170,185 195,205", "M160,150 L160,210", "M150,170 Q130,175 115,172"]),
        arrow(140, 190, 140, 70, stroke=BLUE, sw=3), text(128, 125, "X", size=16, weight="700", fill=BLUE, anchor="end"),
        arrow(180, 70, 180, 140, stroke="#ea580c", sw=3), text(192, 115, "Y", size=16, weight="700", fill="#ea580c", anchor="start"),
    ),
)


def neuron(x0, y0, scale=1.0):
    s = scale
    out = ""
    for ang in (-150, -120, -80, 150, 110, 200):
        a = math.radians(ang)
        x1, y1 = x0 + 18 * s * math.cos(a), y0 + 18 * s * math.sin(a)
        x2, y2 = x0 + 44 * s * math.cos(a), y0 + 44 * s * math.sin(a)
        out += line(x1, y1, x2, y2, stroke="#7c3aed", sw=2.2)
        out += line(x2, y2, x2 + 10 * s * math.cos(a - 0.6), y2 + 10 * s * math.sin(a - 0.6), stroke="#7c3aed", sw=1.6)
        out += line(x2, y2, x2 + 10 * s * math.cos(a + 0.6), y2 + 10 * s * math.sin(a + 0.6), stroke="#7c3aed", sw=1.6)
    out += path(f"M{x0 + 18 * s},{y0} C{x0 + 90 * s},{y0 - 6} {x0 + 150 * s},{y0 + 10} {x0 + 210 * s},{y0}", stroke="#7c3aed", sw=3.2)
    ex = x0 + 210 * s
    for dy in (-16, -6, 6, 16):
        out += line(ex, y0, ex + 18 * s, y0 + dy * s, stroke="#7c3aed", sw=1.8)
    out += circle(x0, y0, 20 * s, fill="#ede9fe", stroke="#7c3aed", sw=2) + circle(x0, y0, 7 * s, fill="#7c3aed", stroke="none")
    return out


item(
    "g9-sci-cell-a-q21",
    "The drawing shows the main kind of cell in one animal tissue. What is this tissue specialised to do?",
    ["Transmit impulses", "Store fat", "Transport water in stems", "Contract to move bones"], "a",
    "This is a neuron, the cell of nervous tissue: its branched dendrites pick up signals and its long axon carries electrical impulses quickly to other cells. "
    "Contracting to move bones is the job of skeletal muscle tissue, whose long fibres have no branches like these.",
    "Notice the many short branches at one end and the very long fibre. What must travel quickly along such a cell?",
    figure(
        "One animal cell: a cell body with a nucleus and many short branches on one side, a single very long fibre, and a group of branched endings at the far end.",
        neuron(60, 105),
    ),
)

item(
    "g9-sci-cell-a-q09",
    "The drawing shows a bacterial cell. Its genetic material lies in region X. What does this cell lack?",
    ["A true nucleus enclosed by a membrane", "A cell membrane", "DNA of any kind", "Ribosomes"], "a",
    "Region X holds a coiled loop of DNA, but no membrane surrounds it, so the bacterium has no true nucleus: it is a prokaryote. "
    "It does have DNA, the coiled thread in region X, so lacking DNA of any kind is wrong.",
    "Look closely at the edge of region X. Is the DNA wrapped inside a membrane of its own?",
    figure(
        "A rod-shaped bacterial cell with an outer wall, a thin membrane just inside it, many tiny dots scattered in the cytoplasm, and region X in the middle, where a tangled loop of thread lies loose with no boundary around it.",
        rect(30, 60, 260, 100, fill="#dcfce7", stroke="#166534", sw=4, rx=50), rect(38, 68, 244, 84, fill="none", stroke="#22c55e", sw=1.5, rx=42),
        path("M120,110 C130,85 170,85 180,105 C190,130 150,140 140,120 C132,104 160,96 170,112 C178,126 200,120 205,100", stroke="#7c3aed", sw=2),
        "".join(circle(x, y, 2, fill="#166534", stroke="none") for x, y in [(70, 90), (85, 130), (230, 85), (245, 130), (100, 80), (215, 140), (260, 110), (60, 112)]),
        path("M290,110 q15,-10 25,5", stroke="#166534", sw=2),
        leader(165, 98, 200, 30, "X", size=16),
    ),
)

item(
    "g9-sci-cell-a-q11",
    "The drawing shows the tip of a growing root. Region X is made of small, tightly packed cells with large nuclei. What is the main job of this tissue?",
    ["Photosynthesis", "Carrying water", "Growth by cell division", "Storing starch"], "c",
    "Region X, just behind the root cap, is meristematic tissue: its small, dense cells with large nuclei keep dividing, making new cells so the root grows longer. "
    "Photosynthesis is wrong: root tips are underground, have no chloroplasts and get no light.",
    "Region X sits right at the tip, where new cells are needed. What are its small cells busy doing?",
    figure(
        "A long root tip. Near the top the cells are long and stretched. Region X, just behind a cap at the very tip, is made of small square cells with large nuclei, some of them splitting into two.",
        path("M120,20 L120,160 Q160,215 200,160 L200,20", fill="#fef9c3", stroke="#a16207", sw=2),
        "".join(rect(122 + c * 26, 22 + r * 40, 26, 40, fill="none", stroke="#ca8a04", sw=1) for r in range(2) for c in range(3)),
        "".join(rect(122 + c * 13, 102 + r * 13, 13, 13, fill="#fde68a", stroke="#a16207", sw=0.8) + circle(128.5 + c * 13, 108.5 + r * 13, 3.5, fill="#7c3aed", stroke="none")
                for r in range(4) for c in range(6)),
        path("M122,160 Q160,212 198,160 Q160,180 122,160 Z", fill="#d6a76a", stroke="#92400e", sw=1.2),
        leader(198, 128, 250, 128, "X", size=16), text(250, 190, "root cap", size=12, weight="500"), line(198, 175, 240, 186, stroke="#475569", sw=1),
    ),
)


def animal_cell_x():
    return ellipse(160, 110, 115, 78, fill="#fef3c7", stroke="#92400e", sw=2.5) + circle(150, 108, 28, fill="#ddd6fe", stroke="#5b21b6", sw=2) + \
        circle(155, 104, 6, fill="#5b21b6", stroke="none") + mito(220, 75) + mito(100, 145)


item(
    "g9-sci-cell-b-q02",
    "What is the part labelled X in the cell shown?",
    ["Cell wall", "Cytoplasm", "Nucleoplasm", "Vacuole"], "b",
    "X is the jelly-like region between the cell membrane and the nucleus, in which most organelles float: the cytoplasm. "
    "Nucleoplasm is the similar jelly inside the nucleus, but X lies outside the nucleus.",
    "X lies between the outer membrane and the nucleus. What fills that part of the cell?",
    figure(
        "An animal cell with a thin outer membrane, a round nucleus near the centre and a few small organelles. X points to the jelly-like region between the outer membrane and the nucleus.",
        animal_cell_x(), leader(225, 140, 290, 190, "X", size=16),
    ),
)

item(
    "g9-sci-cell-b-q16",
    "Which labelled part of the plant cell shown is the cell wall?",
    ["Part P", "Part Q", "Part R", "Part S"], "d",
    "S is the thick outermost layer that gives the plant cell its firm box shape: the cell wall. "
    "R, just inside it, is the thin plasma membrane, which lies within the wall rather than outside it.",
    "Plant cells have both a thin membrane and a thick wall. Which of these two layers is on the very outside?",
    figure(
        "A box-shaped plant cell. P points to a small green oval body, Q to a large clear sac in the middle, R to a thin line just inside the outer edge, and S to the thick outermost layer.",
        rect(70, 40, 180, 140, fill="#ecfccb", stroke="#3f6212", sw=7, rx=4), rect(80, 50, 160, 120, fill="none", stroke="#65a30d", sw=1.5, rx=3),
        rect(115, 70, 105, 85, fill="#e0f2fe", stroke="#0284c7", sw=1.4, rx=14), circle(96, 110, 11, fill="#a78bfa", stroke="#5b21b6", sw=1.2),
        chloro(150, 60) + chloro(205, 165) + chloro(232, 90),
        leader(232, 90, 290, 60, "P", size=16), leader(170, 120, 290, 125, "Q", size=16),
        leader(80, 160, 30, 150, "R", size=16), leader(70, 60, 30, 40, "S", size=16),
    ),
)

item(
    "g9-sci-cell-b-q06",
    "The drawing shows a tissue from the stalk of a young leaf. What does this tissue provide?",
    ["Impulse conduction", "Flexibility and support to growing parts", "Oxygen transport in blood", "Rigid support as dead, thick-walled fibres"], "b",
    "These living cells, with nuclei, have walls thickened only at the corners: this is collenchyma, which supports young stems and leaf stalks while letting them bend. "
    "Rigid support from dead fibres describes sclerenchyma, whose cells are thickened all the way round and have no nuclei.",
    "Look where the walls are thickened and notice the nuclei. Are these stiff dead fibres, or living cells that can bend?",
    figure(
        "A plant tissue seen under a microscope: box-shaped living cells, each with a nucleus, whose walls are thin along the sides but thickened at every corner.",
        "".join(
            rect(40 + c * 48 - 2, 20 + r * 46, 48, 46, fill="#ecfccb", stroke="#3f6212", sw=1.4) + circle(64 + c * 48, 41 + r * 46, 4.5, fill="#7c3aed", stroke="none") +
            "".join(poly([(38 + c * 48 + (48 if sx else 0), 20 + r * 46 + (46 if sy else 0)),
                          (38 + c * 48 + (48 if sx else 0) + (-12 if sx else 12), 20 + r * 46 + (46 if sy else 0)),
                          (38 + c * 48 + (48 if sx else 0), 20 + r * 46 + (46 if sy else 0) + (-12 if sy else 12))], fill="#3f6212", stroke="none")
                    for sx in (0, 1) for sy in (0, 1))
            for r in range(4) for c in range(5)),
    ),
)


def striated(x, y, w, h):
    return rect(x, y, w, h, fill="#fecaca", stroke="#b91c1c", sw=1.2) + "".join(line(x + i, y, x + i, y + h, stroke="#b91c1c", sw=0.9) for i in range(6, int(w), 6))


item(
    "g9-sci-cell-b-q12",
    "Which muscle tissue shown is found in the wall of the heart?",
    ["Tissue P", "Tissue Q", "Both P and Q", "Tissue R"], "d",
    "R has striped, branching cells joined end to end, each with one central nucleus: this is cardiac muscle, found only in the heart, where it contracts rhythmically without tiring. "
    "P is also striped, but its long unbranched fibres with many nuclei are skeletal muscle, which moves bones.",
    "Heart muscle cells are striped and branch to join their neighbours. Which drawing shows branching cells?",
    figure(
        "Three muscle tissues. P: long, unbranched striped fibres, each with many nuclei along its edge. Q: spindle-shaped cells without stripes, each with one nucleus. "
        "R: striped cells that branch and join their neighbours, each with one central nucleus.",
        striated(20, 30, 280, 16) + striated(20, 50, 280, 16) + "".join(ellipse(40 + i * 50, 30, 5, 2.5, fill="#7f1d1d", stroke="none") for i in range(6)),
        text(10, 46, "P", size=15, weight="700", anchor="start"),
        "".join(path(f"M{30 + i * 70},{100} Q{65 + i * 70},{86} {100 + i * 70},{100} Q{65 + i * 70},{114} {30 + i * 70},{100} Z", fill="#fee2e2", stroke="#b91c1c", sw=1.2) +
                ellipse(65 + i * 70, 100, 5, 2.5, fill="#7f1d1d", stroke="none") for i in range(4)),
        text(10, 106, "Q", size=15, weight="700", anchor="start"),
        striated(30, 150, 120, 16), striated(160, 150, 130, 16), striated(30, 180, 120, 16), striated(160, 180, 130, 16),
        poly([(140, 166), (150, 166), (170, 180), (160, 180)], fill="#fecaca", stroke="#b91c1c", sw=1.2),
        line(150, 150, 150, 166, stroke="#7f1d1d", sw=3), line(160, 180, 160, 196, stroke="#7f1d1d", sw=3),
        ellipse(90, 158, 5, 3, fill="#7f1d1d", stroke="none"), ellipse(225, 158, 5, 3, fill="#7f1d1d", stroke="none"),
        ellipse(90, 188, 5, 3, fill="#7f1d1d", stroke="none"), ellipse(225, 188, 5, 3, fill="#7f1d1d", stroke="none"),
        text(10, 178, "R", size=15, weight="700", anchor="start"),
    ),
)

item(
    "g9-sci-cell-b-q21",
    "Compare the vacuoles in the two cells shown. Which statement is correct?",
    ["Vacuoles in the animal cell are smaller than the central vacuole of the plant cell", "Vacuoles in the animal cell are larger than in the plant cell",
     "The animal cell's vacuoles are made of cellulose", "Neither cell has a vacuole"], "a",
    "The plant cell has one large central vacuole filling most of the cell, while the animal cell has only a few small vacuoles. "
    "Vacuoles are not made of cellulose: cellulose builds the plant cell wall, not the vacuole.",
    "Find the vacuoles in each cell. Which cell has one vacuole that fills most of its space?",
    figure(
        "Two cells side by side. The plant cell is box-shaped with a thick wall and one large clear vacuole filling most of it. The animal cell is rounded with a nucleus and only a few tiny clear vacuoles.",
        rect(15, 40, 135, 130, fill="#ecfccb", stroke="#3f6212", sw=5, rx=4), rect(40, 55, 98, 100, fill="#e0f2fe", stroke="#0284c7", sw=1.4, rx=14),
        circle(28, 105, 8, fill="#a78bfa", stroke="#5b21b6", sw=1), text(82, 195, "plant cell", size=13, weight="700"),
        ellipse(240, 105, 70, 62, fill="#fef3c7", stroke="#92400e", sw=2), circle(240, 105, 18, fill="#ddd6fe", stroke="#5b21b6", sw=1.5),
        "".join(circle(x, y, r, fill="#e0f2fe", stroke="#0284c7", sw=1) for x, y, r in [(200, 75, 6), (282, 128, 5), (210, 140, 4)]),
        text(240, 195, "animal cell", size=13, weight="700"),
    ),
)

item(
    "g9-sci-cell-b-q24",
    "The drawing shows a close-up of an organelle from a green leaf cell, with stacks of discs inside it. Which pigment do the discs contain?",
    ["Haemoglobin", "Melanin", "Keratin", "Chlorophyll"], "d",
    "This is a chloroplast: its stacks of discs (grana) contain chlorophyll, the green pigment that traps light energy for photosynthesis. "
    "Haemoglobin is the red pigment in blood that carries oxygen; it is not found in plant cells.",
    "This organelle comes from a green leaf. Which pigment traps the light energy a plant uses to make food?",
    figure(
        "A close-up of an oval organelle from a leaf cell, with a double outer boundary and several stacks of flat green discs joined by thin connecting strands.",
        ellipse(160, 110, 135, 72, fill="#dcfce7", stroke="#166534", sw=2.5), ellipse(160, 110, 127, 65, fill="#f0fdf4", stroke="#166534", sw=1.5),
        "".join("".join(rect(x - 14, y - 22 + k * 9, 28, 7, fill="#16a34a", stroke="#14532d", sw=0.8, rx=3) for k in range(5))
                for x, y in [(80, 110), (130, 90), (180, 125), (230, 100)]),
        line(94, 106, 116, 92, stroke="#16a34a", sw=2), line(144, 98, 166, 122, stroke="#16a34a", sw=2), line(194, 120, 216, 104, stroke="#16a34a", sw=2),
    ),
)

# ============================== Motion ==============================
item(
    "g9-sci-motion-a-q07",
    "A car drives from P to Q and back to P along the straight road shown. What is its displacement for the whole trip?",
    ["200 m east", "100 m west", "0 m", "100 m east"], "c",
    "The car finishes where it started, at P, so its change in position is zero: the displacement is 0 m. "
    "200 m is the total distance travelled, not the displacement.",
    "Compare where the car starts and where it finishes. How far apart are those two points?",
    figure(
        "A straight road running east from point P to point Q, 100 m apart. One arrow goes from P to Q along the top of the road, and a second arrow comes back from Q to P below it.",
        rect(20, 95, 280, 40, fill="#e5e7eb", stroke="#6b7280", sw=1.5), line(20, 115, 300, 115, stroke="#ffffff", sw=2, dash="10 8"),
        circle(50, 115, 6, fill=INK, stroke="none"), circle(270, 115, 6, fill=INK, stroke="none"),
        text(50, 160, "P", size=16, weight="700"), text(270, 160, "Q", size=16, weight="700"),
        arrow(55, 80, 265, 80, stroke=BLUE, sw=2.5), arrow(262, 178, 58, 178, stroke="#dc2626", sw=2.5),
        text(160, 72, "there", size=12, weight="600"), text(160, 200, "back", size=12, weight="600"),
        dbl_arrow(50, 40, 270, 40), text(160, 33, "100 m", size=13), text(300, 33, "east →", size=12, weight="500", anchor="end"),
    ),
)

item(
    "g9-sci-motion-a-q09",
    "What does the slope of the distance–time graph shown give, and what is its value?",
    ["Speed, 5 m/s", "Acceleration, 5 m/s²", "Force, 40 N", "Mass, 8 kg"], "a",
    "The slope is the rise divided by the run: 40 m ÷ 8 s = 5 m/s, which is the speed. "
    "It is not an acceleration: the line is straight, so the speed is constant and does not change.",
    "Use the triangle: divide the distance it rises by the time it covers. Which quantity has units of m/s?",
    figure(
        "A distance–time graph with a straight sloping line from the origin. A right-angled triangle under part of the line shows a rise of 40 m over a time of 8 s.",
        axes(50, 185, 250, 160, "time (s)", "distance (m)", xticks=[(50, "4"), (100, "8"), (150, "12"), (200, "16")], yticks=[(30, "20"), (60, "40"), (90, "60"), (120, "80")]),
        line(50, 185, 270, 53, stroke="#dc2626", sw=2.5),
        poly([(100, 155), (200, 155), (200, 95)], fill="#fef9c3", stroke="#ca8a04", sw=1.5, opacity=0.8), line(50, 185, 270, 53, stroke="#dc2626", sw=2.5),
        text(150, 170, "8 s", size=12, weight="700"), text(206, 130, "40 m", size=12, weight="700", anchor="start"),
    ),
)

item(
    "g9-sci-motion-a-q11",
    "The shaded area under the velocity–time graph gives a quantity for the first 4 s. What is it, and what is its value?",
    ["Acceleration, 2 m/s²", "Force, 32 N", "Displacement, 16 m", "Power, 32 W"], "c",
    "The area under a velocity–time graph is the displacement. The shaded triangle has area ½ × 4 s × 8 m/s = 16 m. "
    "2 m/s² is the slope of the line, the acceleration, not the area under it.",
    "Area under this graph is velocity × time. Which quantity do you get by multiplying m/s by s?",
    figure(
        "A velocity–time graph. The velocity rises in a straight line from 0 at time 0 to 8 m/s at 4 s. The triangle under the line from 0 to 4 s is shaded.",
        poly([(50, 185), (250, 185), (250, 65)], fill="#bfdbfe", stroke="none"),
        axes(50, 185, 250, 160, "time (s)", "velocity (m/s)", xticks=[(50, "1"), (100, "2"), (150, "3"), (200, "4")], yticks=[(30, "2"), (60, "4"), (90, "6"), (120, "8")]),
        line(50, 185, 250, 65, stroke="#dc2626", sw=2.5), line(250, 65, 250, 185, stroke="#94a3b8", sw=1.2, dash="4 3"),
    ),
)

item(
    "g9-sci-motion-a-q21",
    "A particle moves along the two arrows shown, from start to finish. What is the size of its displacement?",
    ["5 m", "7 m", "1 m", "12 m"], "a",
    "Displacement is the straight dashed line from start to finish. The two moves are at right angles, so its size is √(3² + 4²) = √25 = 5 m. "
    "7 m is the total distance moved along the two arrows, not the displacement.",
    "The two moves form a right angle. Use the dashed line and Pythagoras' rule to find its length.",
    figure(
        "A particle moves 3 m east along a first arrow, then 4 m north along a second arrow. A dashed line joins the start directly to the finish. A small compass shows north and east.",
        arrow(60, 180, 180, 180, stroke=BLUE, sw=3), arrow(180, 180, 180, 20, stroke="#dc2626", sw=3),
        line(60, 180, 180, 20, stroke=INK, sw=1.8, dash="6 4"), rect(168, 168, 12, 12, fill="none", stroke=INK, sw=1),
        circle(60, 180, 5, fill=INK, stroke="none"), text(60, 205, "start", size=12, weight="600"), text(205, 24, "finish", size=12, weight="600", anchor="start"),
        text(120, 200, "3 m", size=14, weight="700", fill=BLUE), text(190, 105, "4 m", size=14, weight="700", fill="#dc2626", anchor="start"),
        arrow(275, 80, 275, 45, sw=1.6, head=6), arrow(275, 80, 305, 80, sw=1.6, head=6), text(275, 38, "N", size=12, weight="700"), text(312, 84, "E", size=12, weight="700"),
    ),
)

item(
    "g9-sci-motion-a-q23",
    "What is the acceleration of the body whose velocity–time graph is shown?",
    ["A constant positive value", "Increasing", "Zero", "12 m/s²"], "c",
    "The line stays flat at 12 m/s, so the velocity does not change as time passes and the acceleration is zero. "
    "12 m/s² mixes up the velocity with the acceleration: 12 m/s is how fast the body moves, not how fast its velocity changes.",
    "Does the velocity change as time passes? Acceleration is the change in velocity each second.",
    figure(
        "A velocity–time graph with a horizontal straight line at 12 m/s from time 0 to 10 s.",
        axes(50, 185, 250, 160, "time (s)", "velocity (m/s)", xticks=[(50, "2"), (100, "4"), (150, "6"), (200, "8"), (250, "10")], yticks=[(40, "4"), (80, "8"), (120, "12")]),
        line(50, 65, 300, 65, stroke="#dc2626", sw=2.5),
    ),
)

item(
    "g9-sci-motion-a-q13",
    "The arrows show the velocity of a toy car at four points as it goes round a circular track. Which statement is correct?",
    ["Its speed is constant but its velocity changes", "Its velocity is constant", "Its speed is zero", "It has no acceleration"], "a",
    "Every arrow is the same length, 4 m/s, so the speed stays the same, but the arrows point in different directions, so the velocity keeps changing; the car is therefore accelerating. "
    "A constant velocity would need the arrows to point the same way as well.",
    "Compare the arrows' lengths and their directions. Velocity includes direction: is it the same all the way round?",
    figure(
        "A circular track seen from above. At the top, right, bottom and left of the circle, arrows of equal length labelled 4 m/s point along the track, each in a different direction.",
        circle(160, 110, 70, fill="none", stroke="#94a3b8", sw=6),
        arrow(160, 40, 105, 40, stroke=BLUE, sw=2.5), arrow(230, 110, 230, 55, stroke=BLUE, sw=2.5),
        arrow(160, 180, 215, 180, stroke=BLUE, sw=2.5), arrow(90, 110, 90, 165, stroke=BLUE, sw=2.5),
        "".join(circle(x, y, 5, fill=INK, stroke="none") for x, y in [(160, 40), (230, 110), (160, 180), (90, 110)]),
        text(132, 30, "4 m/s", size=12, weight="700"), text(238, 84, "4 m/s", size=12, weight="700", anchor="start"),
        text(188, 202, "4 m/s", size=12, weight="700"), text(82, 140, "4 m/s", size=12, weight="700", anchor="end"),
    ),
)

item(
    "g9-sci-motion-b-q06",
    "What is the body doing during part PQ of the distance–time graph shown?",
    ["Speeding up", "At rest", "Moving at a steady speed", "Slowing down"], "b",
    "Between P and Q the line is flat: time passes but the distance does not change, so the body is at rest. "
    "A steady speed would show as a straight sloping line, like parts OP and QR.",
    "Between P and Q, does the distance change as time goes on?",
    figure(
        "A distance–time graph. A straight line rises from O to P, stays flat from P to Q, then rises again in a straight line from Q to R.",
        axes(50, 185, 250, 160, "time", "distance"),
        polyline([(50, 185), (120, 120), (200, 120), (280, 45)], stroke="#dc2626", sw=2.5),
        "".join(circle(px, py, 3.5, fill="#dc2626", stroke="none") + text(px + dx, py + dy, lab, size=14, weight="700") for px, py, lab, dx, dy in
                [(50, 185, "O", -10, 16), (120, 120, "P", -4, -10), (200, 120, "Q", 4, -10), (280, 45, "R", 10, 0)]),
    ),
)

item(
    "g9-sci-motion-b-q09",
    "Use the velocity–time graph of the car to find its acceleration.",
    ["2 m/s²", "6 m/s²", "50 m/s²", "0.5 m/s²"], "a",
    "Acceleration = change in velocity ÷ time = (20 − 10) m/s ÷ 5 s = 2 m/s². "
    "0.5 m/s² comes from dividing the wrong way round: time divided by the change in velocity.",
    "Read the starting and final velocities and the time taken. Acceleration is the change in velocity per second.",
    figure(
        "A velocity–time graph for a car. The velocity rises in a straight line from 10 m/s at time 0 to 20 m/s at 5 s.",
        axes(50, 185, 250, 160, "time (s)", "velocity (m/s)", xticks=[(40, "1"), (80, "2"), (120, "3"), (160, "4"), (200, "5")], yticks=[(60, "10"), (120, "20")]),
        line(50, 125, 250, 65, stroke="#dc2626", sw=2.5), circle(50, 125, 4, fill="#dc2626", stroke="none"), circle(250, 65, 4, fill="#dc2626", stroke="none"),
        line(250, 65, 250, 185, stroke="#94a3b8", sw=1.2, dash="4 3"), line(50, 65, 250, 65, stroke="#94a3b8", sw=1.2, dash="4 3"),
    ),
)

item(
    "g9-sci-motion-b-q14",
    "A trolley starts from rest and speeds up steadily, as the velocity–time graph shows. How far does it travel in the first 3 s?",
    ["6 m", "9 m", "18 m", "3 m"], "b",
    "The distance is the area under the graph: a triangle of ½ × 3 s × 6 m/s = 9 m. "
    "18 m forgets the half: it is the area of the whole rectangle, as if the trolley had moved at 6 m/s the whole time.",
    "The distance is the area under the line. What shape is that area, and how do you work it out?",
    figure(
        "A velocity–time graph. The velocity rises in a straight line from 0 at time 0 to 6 m/s at 3 s.",
        axes(50, 185, 250, 160, "time (s)", "velocity (m/s)", xticks=[(60, "1"), (120, "2"), (180, "3")], yticks=[(40, "2"), (80, "4"), (120, "6")]),
        line(50, 185, 230, 65, stroke="#dc2626", sw=2.5), circle(230, 65, 4, fill="#dc2626", stroke="none"),
        line(230, 65, 230, 185, stroke="#94a3b8", sw=1.2, dash="4 3"),
    ),
)

item(
    "g9-sci-motion-b-q23",
    "A ball is thrown straight up and caught again at the same point, as shown. What is its displacement for the whole flight?",
    ["5 m upward", "10 m", "Zero", "Equal to the distance travelled"], "c",
    "The ball finishes where it started, in the hand, so its change in position, the displacement, is zero. "
    "10 m is the distance travelled, 5 m up plus 5 m down, not the displacement.",
    "Compare the point where the ball leaves the hand and the point where it is caught. How far apart are they?",
    figure(
        "A hand throws a ball straight up. An arrow shows it rising 5 m to its highest point, and a second arrow beside it shows it falling 5 m back down to the same hand.",
        ellipse(160, 190, 26, 10, fill="#fde68a", stroke="#92400e", sw=1.5), circle(160, 172, 9, fill="#f97316", stroke="#9a3412", sw=1.5),
        circle(160, 30, 9, fill="#f97316", stroke="#9a3412", sw=1.5, opacity=0.5),
        arrow(145, 165, 145, 45, stroke=BLUE, sw=2.5), arrow(175, 45, 175, 165, stroke="#dc2626", sw=2.5),
        text(138, 105, "up", size=12, weight="600", anchor="end"), text(182, 105, "down", size=12, weight="600", anchor="start"),
        dbl_arrow(250, 30, 250, 172), text(258, 105, "5 m", size=14, weight="700", anchor="start"),
        line(170, 30, 250, 30, stroke="#94a3b8", sw=1, dash="3 3"), line(170, 172, 250, 172, stroke="#94a3b8", sw=1, dash="3 3"),
    ),
)

item(
    "g9-sci-motion-b-q12",
    "The dots show a cyclist's position every second along a straight road. What kind of motion is this?",
    ["Ever-changing speed", "At rest", "Circular motion with changing speed", "Uniform motion: equal distances in equal times"], "d",
    "Each 1 s gap between neighbouring dots covers the same 10 m, so the cyclist covers equal distances in equal intervals of time along a straight line: uniform motion. "
    "Ever-changing speed would show the gaps between the dots growing or shrinking.",
    "Measure the gaps between neighbouring dots. Is the distance covered in each second the same?",
    figure(
        "A straight road with six dots marking where the cyclist is at 0, 1, 2, 3, 4 and 5 seconds. Every gap between neighbouring dots is 10 m.",
        line(20, 120, 300, 120, stroke="#94a3b8", sw=10),
        "".join(circle(40 + i * 48, 120, 7, fill="#dc2626", stroke="#7f1d1d", sw=1.5) + text(40 + i * 48, 150, f"{i} s", size=12, weight="600") for i in range(6)),
        "".join(dbl_arrow(44 + i * 48, 95, 84 + i * 48, 95, sw=1.3, head=5) + text(64 + i * 48, 88, "10 m", size=11, weight="600") for i in range(5)),
        text(160, 190, "position every 1 s", size=12, weight="500"),
    ),
)

item(
    "g9-sci-motion-b-q20",
    "A walker goes from P to Q along the curved path shown. How does the size of the displacement compare with the distance walked?",
    ["Greater than the distance", "Unrelated to the distance", "Exactly twice the distance", "Less than or equal to the distance"], "d",
    "Displacement is the straight dashed line from P to Q, the shortest possible route, so it can never be longer than the path actually walked; it is equal only for a straight path in one direction. "
    "Greater than the distance is impossible, because no route between two points is shorter than the straight line.",
    "Compare the dashed straight line from P to Q with the curved path. Which is the shortest route between two points?",
    figure(
        "A winding curved path from point P on the left to point Q on the right, with a dashed straight line joining P directly to Q.",
        path("M40,150 C70,30 130,30 150,110 C170,190 240,200 280,80", stroke="#dc2626", sw=3),
        line(40, 150, 280, 80, stroke=INK, sw=1.8, dash="6 4"),
        circle(40, 150, 6, fill=INK, stroke="none"), circle(280, 80, 6, fill=INK, stroke="none"),
        text(30, 175, "P", size=16, weight="700"), text(292, 72, "Q", size=16, weight="700"),
        text(85, 40, "path walked", size=12, weight="600", fill="#dc2626"),
    ),
)
