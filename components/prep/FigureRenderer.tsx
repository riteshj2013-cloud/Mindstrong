"use client";

import type { FigureSpec } from "@/lib/prep/types";
import { sanitizeSvg } from "@/lib/prep/sanitizeSvg";

const CORAL = "#FF6B5B";
const SKY = "#5BB8E8";
const MINT = "#7BCFA6";
const INK = "#2C2A32";
const SUN = "#F5C842";
const PLUM = "#9B7EBD";
const LEAF = "#4CAF7A";

/** Original in-app SVG figures — never external copyrighted SOF scans. */
export function FigureRenderer({
  spec,
  compact = false,
  className = "",
}: {
  spec?: FigureSpec;
  compact?: boolean;
  className?: string;
}) {
  if (!spec) return null;
  const wrap = compact
    ? `mx-auto w-full max-w-[140px] ${className}`
    : `mx-auto w-full max-w-sm ${className}`;

  switch (spec.type) {
    case "fraction-bar":
      return (
        <div className={wrap} aria-hidden>
          <Bar parts={spec.parts} shaded={spec.shaded} label={spec.label} />
          {spec.compare && (
            <div className="mt-2">
              <Bar
                parts={spec.compare.parts}
                shaded={spec.compare.shaded}
                label={spec.compare.label}
              />
            </div>
          )}
        </div>
      );
    case "fraction-circle":
      return (
        <svg
          viewBox="0 0 120 120"
          className={`${wrap} ${compact ? "h-24" : "h-36"}`}
          aria-hidden
        >
          <FractionCircle
            parts={spec.parts}
            shaded={spec.shaded}
            equal={spec.equal !== false}
          />
          {spec.label && (
            <text x="60" y="114" textAnchor="middle" fill={INK} fontSize="12" fontWeight="700">
              {spec.label}
            </text>
          )}
        </svg>
      );
    case "shape-grid":
      return (
        <svg
          viewBox={`0 0 ${spec.cols * 28 + 16} ${spec.rows * 28 + (spec.label ? 28 : 12)}`}
          className={`${wrap} ${compact ? "h-20" : "h-28"}`}
          aria-hidden
        >
          {Array.from({ length: spec.rows * spec.cols }, (_, i) => {
            const r = Math.floor(i / spec.cols);
            const c = i % spec.cols;
            const on = spec.shaded.includes(i);
            const x = 8 + c * 28;
            const y = 8 + r * 28;
            if (spec.cell === "circle") {
              return (
                <circle
                  key={i}
                  cx={x + 12}
                  cy={y + 12}
                  r={11}
                  fill={on ? CORAL : "#fff"}
                  stroke={INK}
                  strokeOpacity={0.25}
                  strokeWidth={1.5}
                />
              );
            }
            return (
              <rect
                key={i}
                x={x}
                y={y}
                width={24}
                height={24}
                rx={5}
                fill={on ? CORAL : "#fff"}
                stroke={INK}
                strokeOpacity={0.25}
                strokeWidth={1.5}
              />
            );
          })}
          {spec.label && (
            <text
              x={(spec.cols * 28 + 16) / 2}
              y={spec.rows * 28 + 22}
              textAnchor="middle"
              fill={INK}
              fontSize="12"
              fontWeight="700"
              opacity={0.7}
            >
              {spec.label}
            </text>
          )}
        </svg>
      );
    case "number-line":
      return <NumberLine spec={spec} className={wrap} compact={compact} />;
    case "place-value-blocks":
      return <PlaceValueBlocks spec={spec} className={wrap} compact={compact} />;
    case "place-value-chart":
      return <PlaceValueChart spec={spec} className={wrap} compact={compact} />;
    case "angle":
      return <AngleFig spec={spec} className={wrap} compact={compact} />;
    case "shapes":
      return <ShapesFig spec={spec} className={wrap} compact={compact} />;
    case "labeled-diagram":
      return <LabeledDiagram spec={spec} className={wrap} compact={compact} />;
    case "table":
      return <TableFig spec={spec} className={wrap} />;
    case "array-grid":
      return (
        <svg
          viewBox={`0 0 ${spec.cols * 22 + 16} ${spec.rows * 22 + (spec.label ? 28 : 12)}`}
          className={`${wrap} ${compact ? "h-20" : "h-28"}`}
          aria-hidden
        >
          {Array.from({ length: spec.rows * spec.cols }, (_, i) => {
            const r = Math.floor(i / spec.cols);
            const c = i % spec.cols;
            return (
              <circle
                key={i}
                cx={8 + c * 22 + 9}
                cy={8 + r * 22 + 9}
                r={8}
                fill={spec.filled === false ? "#fff" : SKY}
                stroke={INK}
                strokeOpacity={0.3}
                strokeWidth={1.5}
              />
            );
          })}
          {spec.label && (
            <text
              x={(spec.cols * 22 + 16) / 2}
              y={spec.rows * 22 + 22}
              textAnchor="middle"
              fill={INK}
              fontSize="12"
              fontWeight="700"
            >
              {spec.label}
            </text>
          )}
        </svg>
      );
    case "svg": {
      const clean = sanitizeSvg(spec.markup);
      if (!clean) return null;
      return (
        <figure
          className={`quiz-figure ${wrap} rounded-2xl border border-ink/5 bg-white p-2 ${
            compact ? "quiz-figure--compact" : ""
          }`}
        >
          <div
            className="quiz-figure__frame"
            role="img"
            aria-label={spec.alt || "Diagram"}
            dangerouslySetInnerHTML={{ __html: clean }}
          />
          {spec.longdesc ? (
            <figcaption className="sr-only">{spec.longdesc}</figcaption>
          ) : null}
        </figure>
      );
    }
    case "image":
      return (
        <figure className={`quiz-figure ${wrap} ${compact ? "quiz-figure--compact" : ""}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={spec.src}
            alt={spec.alt}
            className="quiz-figure__img w-full rounded-2xl border border-ink/10 bg-white"
          />
          {spec.longdesc ? (
            <figcaption className="sr-only">{spec.longdesc}</figcaption>
          ) : null}
        </figure>
      );
    default:
      return null;
  }
}

function Bar({
  parts,
  shaded,
  label,
}: {
  parts: number;
  shaded: number;
  label?: string;
}) {
  const w = Math.min(260, parts * 40);
  const cell = w / parts;
  return (
    <svg viewBox={`0 0 ${w + 20} ${label ? 70 : 50}`} className="h-14 w-full" aria-hidden>
      {Array.from({ length: parts }, (_, i) => (
        <rect
          key={i}
          x={10 + i * cell}
          y={8}
          width={cell - 3}
          height={32}
          rx={6}
          fill={i < shaded ? CORAL : "#fff"}
          stroke={INK}
          strokeOpacity={0.25}
          strokeWidth={1.5}
        />
      ))}
      {label && (
        <text x={(w + 20) / 2} y={58} textAnchor="middle" fill={INK} fontSize="12" fontWeight="700" opacity={0.65}>
          {label}
        </text>
      )}
    </svg>
  );
}

function FractionCircle({
  parts,
  shaded,
  equal,
}: {
  parts: number;
  shaded: number;
  equal: boolean;
}) {
  const cx = 60;
  const cy = 52;
  const r = 40;
  if (parts <= 0) return <circle cx={cx} cy={cy} r={r} fill="#fff" stroke={INK} strokeWidth={2} />;
  const slices: { a0: number; a1: number }[] = [];
  if (equal) {
    const step = (2 * Math.PI) / parts;
    for (let i = 0; i < parts; i++) {
      slices.push({ a0: -Math.PI / 2 + i * step, a1: -Math.PI / 2 + (i + 1) * step });
    }
  } else {
    // Unequal trap: first slice small, rest larger
    const small = (2 * Math.PI) * 0.18;
    const rest = (2 * Math.PI - small) / Math.max(1, parts - 1);
    let a = -Math.PI / 2;
    for (let i = 0; i < parts; i++) {
      const span = i === 0 ? small : rest;
      slices.push({ a0: a, a1: a + span });
      a += span;
    }
  }
  return (
    <g>
      {slices.map((s, i) => {
        const large = s.a1 - s.a0 > Math.PI ? 1 : 0;
        const x0 = cx + r * Math.cos(s.a0);
        const y0 = cy + r * Math.sin(s.a0);
        const x1 = cx + r * Math.cos(s.a1);
        const y1 = cy + r * Math.sin(s.a1);
        const d = `M ${cx} ${cy} L ${x0} ${y0} A ${r} ${r} 0 ${large} 1 ${x1} ${y1} Z`;
        return (
          <path
            key={i}
            d={d}
            fill={i < shaded ? CORAL : "#fff"}
            stroke={INK}
            strokeOpacity={0.35}
            strokeWidth={1.5}
          />
        );
      })}
    </g>
  );
}

function NumberLine({
  spec,
  className,
  compact,
}: {
  spec: Extract<FigureSpec, { type: "number-line" }>;
  className: string;
  compact: boolean;
}) {
  const step = spec.step ?? ((spec.max - spec.min) / 5 || 1);
  const ticks: number[] = [];
  for (let v = spec.min; v <= spec.max + 1e-9; v += step) ticks.push(Math.round(v * 1000) / 1000);
  const pts = [
    ...(spec.point != null ? [spec.point] : []),
    ...(spec.points ?? []),
  ];
  const xOf = (v: number) => 20 + ((v - spec.min) / (spec.max - spec.min || 1)) * 240;
  return (
    <svg viewBox={`0 0 280 ${spec.label ? 80 : 60}`} className={`${className} ${compact ? "h-14" : "h-16"}`} aria-hidden>
      <line x1="20" y1="28" x2="260" y2="28" stroke={INK} strokeOpacity={0.4} strokeWidth={3} />
      {ticks.map((t) => (
        <g key={t}>
          <line x1={xOf(t)} y1="22" x2={xOf(t)} y2="34" stroke={INK} strokeOpacity={0.45} strokeWidth={2} />
          <text x={xOf(t)} y="50" textAnchor="middle" fill={INK} fontSize="12" opacity={0.7}>
            {t}
          </text>
        </g>
      ))}
      {pts.map((p, i) => (
        <circle key={i} cx={xOf(p)} cy="28" r="8" fill={CORAL} />
      ))}
      {spec.label && (
        <text x="140" y="72" textAnchor="middle" fill={INK} fontSize="12" fontWeight="700" opacity={0.65}>
          {spec.label}
        </text>
      )}
    </svg>
  );
}

function PlaceValueBlocks({
  spec,
  className,
  compact,
}: {
  spec: Extract<FigureSpec, { type: "place-value-blocks" }>;
  className: string;
  compact: boolean;
}) {
  const th = spec.thousands ?? 0;
  const h = spec.hundreds ?? 0;
  const t = spec.tens ?? 0;
  const o = spec.ones ?? 0;
  const cols: { label: string; n: number; color: string; w: number; ht: number }[] = [];
  if (th) cols.push({ label: "Th", n: th, color: PLUM, w: 28, ht: 36 });
  cols.push({ label: "H", n: h, color: CORAL, w: 24, ht: 32 });
  cols.push({ label: "T", n: t, color: SKY, w: 14, ht: 32 });
  cols.push({ label: "O", n: o, color: MINT, w: 10, ht: 10 });
  let x = 8;
  const blocks: { x: number; y: number; w: number; h: number; color: string }[] = [];
  const labels: { x: number; text: string }[] = [];
  for (const c of cols) {
    labels.push({ x: x + (c.n * (c.w + 4)) / 2, text: `${c.n}${c.label}` });
    for (let i = 0; i < c.n; i++) {
      blocks.push({ x, y: c.label === "O" ? 40 : 12, w: c.w, h: c.ht, color: c.color });
      x += c.w + 4;
    }
    x += 10;
  }
  return (
    <svg viewBox={`0 0 ${Math.max(x, 200)} 70`} className={`${className} ${compact ? "h-16" : "h-20"}`} aria-hidden>
      {blocks.map((b, i) => (
        <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h} rx={3} fill={b.color} opacity={0.9} />
      ))}
      {spec.label && (
        <text x={x / 2} y="66" textAnchor="middle" fill={INK} fontSize="12" fontWeight="700">
          {spec.label}
        </text>
      )}
    </svg>
  );
}

function PlaceValueChart({
  spec,
  className,
  compact,
}: {
  spec: Extract<FigureSpec, { type: "place-value-chart" }>;
  className: string;
  compact: boolean;
}) {
  const n = Math.min(spec.places.length, spec.digits.length);
  const cell = 52;
  const w = n * cell + 16;
  return (
    <svg viewBox={`0 0 ${w} 90`} className={`${className} ${compact ? "h-16" : "h-24"}`} aria-hidden>
      {Array.from({ length: n }, (_, i) => {
        const hi = spec.highlightIndex === i;
        return (
          <g key={i} transform={`translate(${8 + i * cell},8)`}>
            <rect
              width={cell - 6}
              height={70}
              rx={10}
              fill={hi ? "#FFE8E4" : "#fff"}
              stroke={hi ? CORAL : INK}
              strokeOpacity={hi ? 1 : 0.2}
              strokeWidth={hi ? 2.5 : 1.5}
            />
            <text x={(cell - 6) / 2} y="22" textAnchor="middle" fill={INK} fontSize="12" fontWeight="700" opacity={0.55}>
              {spec.places[i]}
            </text>
            <text x={(cell - 6) / 2} y="52" textAnchor="middle" fill={hi ? CORAL : INK} fontSize="22" fontWeight="800">
              {spec.digits[i]}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function AngleFig({
  spec,
  className,
  compact,
}: {
  spec: Extract<FigureSpec, { type: "angle" }>;
  className: string;
  compact: boolean;
}) {
  const deg = ((spec.degrees % 360) + 360) % 360;
  const rad = (deg * Math.PI) / 180;
  const cx = 70;
  const cy = 80;
  const len = 55;
  const x1 = cx + len;
  const y1 = cy;
  const x2 = cx + len * Math.cos(-rad);
  const y2 = cy + len * Math.sin(-rad);
  const arcR = 22;
  const large = deg > 180 ? 1 : 0;
  const ax = cx + arcR;
  const ay = cy;
  const bx = cx + arcR * Math.cos(-rad);
  const by = cy + arcR * Math.sin(-rad);
  return (
    <svg viewBox="0 0 140 110" className={`${className} ${compact ? "h-20" : "h-28"}`} aria-hidden>
      <line x1={cx} y1={cy} x2={x1} y2={y1} stroke={INK} strokeWidth={3} strokeLinecap="round" />
      <line x1={cx} y1={cy} x2={x2} y2={y2} stroke={CORAL} strokeWidth={3} strokeLinecap="round" />
      <path
        d={`M ${ax} ${ay} A ${arcR} ${arcR} 0 ${large} 0 ${bx} ${by}`}
        fill="none"
        stroke={SKY}
        strokeWidth={2.5}
      />
      <circle cx={cx} cy={cy} r={3.5} fill={INK} />
      {(spec.showMeasure || spec.label) && (
        <text x="70" y="18" textAnchor="middle" fill={INK} fontSize="12" fontWeight="700">
          {spec.label ?? `${spec.degrees}°`}
        </text>
      )}
    </svg>
  );
}

function ShapesFig({
  spec,
  className,
  compact,
}: {
  spec: Extract<FigureSpec, { type: "shapes" }>;
  className: string;
  compact: boolean;
}) {
  const gap = 70;
  const w = Math.max(120, spec.items.length * gap);
  return (
    <svg viewBox={`0 0 ${w} 90`} className={`${className} ${compact ? "h-16" : "h-24"}`} aria-hidden>
      {spec.items.map((it, i) => {
        const cx = 35 + i * gap;
        const cy = 40;
        const stroke = it.highlight ? CORAL : INK;
        const fill = it.highlight ? "#FFE8E4" : "#fff";
        let shape = null;
        if (it.kind === "circle") {
          shape = <circle cx={cx} cy={cy} r={22} fill={fill} stroke={stroke} strokeWidth={2.5} />;
        } else if (it.kind === "square") {
          shape = <rect x={cx - 20} y={cy - 20} width={40} height={40} rx={4} fill={fill} stroke={stroke} strokeWidth={2.5} />;
        } else if (it.kind === "rectangle") {
          shape = <rect x={cx - 26} y={cy - 16} width={52} height={32} rx={4} fill={fill} stroke={stroke} strokeWidth={2.5} />;
        } else if (it.kind === "triangle") {
          shape = (
            <polygon
              points={`${cx},${cy - 22} ${cx + 24},${cy + 18} ${cx - 24},${cy + 18}`}
              fill={fill}
              stroke={stroke}
              strokeWidth={2.5}
            />
          );
        } else if (it.kind === "pentagon" || it.kind === "hexagon") {
          const sides = it.kind === "pentagon" ? 5 : 6;
          const pts = Array.from({ length: sides }, (_, k) => {
            const a = -Math.PI / 2 + (k * 2 * Math.PI) / sides;
            return `${cx + 22 * Math.cos(a)},${cy + 22 * Math.sin(a)}`;
          }).join(" ");
          shape = <polygon points={pts} fill={fill} stroke={stroke} strokeWidth={2.5} />;
        }
        return (
          <g key={i}>
            {shape}
            {it.label && (
              <text x={cx} y={82} textAnchor="middle" fill={INK} fontSize="12" fontWeight="700">
                {it.label}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

function LabeledDiagram({
  spec,
  className,
  compact,
}: {
  spec: Extract<FigureSpec, { type: "labeled-diagram" }>;
  className: string;
  compact: boolean;
}) {
  const blank = new Set(spec.blankIds ?? []);
  const hi = spec.highlightId;
  const label = (id: string, x: number, y: number, text: string) => {
    const isBlank = blank.has(id);
    const isHi = hi === id;
    return (
      <g key={id}>
        <rect
          x={x - 28}
          y={y - 10}
          width={56}
          height={18}
          rx={6}
          fill={isBlank ? "#FFF3CD" : isHi ? "#FFE8E4" : "#fff"}
          stroke={isBlank ? SUN : isHi ? CORAL : INK}
          strokeOpacity={0.35}
          strokeWidth={1.5}
        />
        <text x={x} y={y + 3} textAnchor="middle" fill={INK} fontSize="12" fontWeight="700">
          {isBlank ? "?" : text}
        </text>
      </g>
    );
  };

  if (spec.kind === "plant") {
    return (
      <svg viewBox="0 0 260 150" className={`${className} ${compact ? "h-28" : "h-40"}`} aria-hidden>
        <ellipse cx="130" cy="130" rx="60" ry="12" fill={LEAF} opacity={0.25} />
        <rect x="124" y="70" width="12" height="55" rx={4} fill={LEAF} />
        <ellipse cx="100" cy="65" rx={26} ry={16} fill={MINT} />
        <ellipse cx="160" cy="60" rx={28} ry={17} fill={MINT} />
        <circle cx="130" cy="48" r={12} fill={SUN} />
        <path d="M110 135 Q130 120 150 135" fill="none" stroke="#8B6914" strokeWidth={3} />
        {label("flower", 130, 28, "Flower")}
        {label("leaf", 55, 65, "Leaf")}
        {label("stem", 200, 95, "Stem")}
        {label("root", 130, 145, "Root")}
      </svg>
    );
  }
  if (spec.kind === "water-cycle") {
    return (
      <svg viewBox="0 0 280 150" className={`${className} ${compact ? "h-28" : "h-40"}`} aria-hidden>
        <ellipse cx="70" cy="120" rx={50} ry={14} fill={SKY} opacity={0.45} />
        <path d="M55 110 Q70 50 95 40" fill="none" stroke={SKY} strokeWidth={2.5} strokeDasharray="5 4" />
        <ellipse cx="160" cy="40" rx={40} ry={18} fill="#fff" stroke={INK} strokeOpacity={0.2} strokeWidth={2} />
        <path d="M170 58 L185 105" stroke={SKY} strokeWidth={2.5} />
        <path d="M150 60 L155 108" stroke={SKY} strokeWidth={2.5} />
        <path d="M145 62 L140 100" stroke={SKY} strokeWidth={2} />
        <circle cx="230" cy="55" r={14} fill={SUN} />
        {label("evaporation", 45, 70, "Evaporate")}
        {label("condensation", 160, 18, "Cloud")}
        {label("precipitation", 210, 120, "Rain")}
        {label("sun", 230, 35, "Sun")}
      </svg>
    );
  }
  if (spec.kind === "cell") {
    return (
      <svg viewBox="0 0 220 150" className={`${className} ${compact ? "h-28" : "h-40"}`} aria-hidden>
        <ellipse cx="110" cy="75" rx={80} ry={55} fill={MINT} opacity={0.35} stroke={LEAF} strokeWidth={3} />
        <ellipse cx="110" cy="75" rx={70} ry={45} fill="none" stroke={SKY} strokeWidth={2} />
        <circle cx="110" cy="75" r={18} fill={CORAL} opacity={0.85} />
        <circle cx="70" cy="55" r={8} fill={PLUM} opacity={0.7} />
        <circle cx="150" cy="95" r={7} fill={PLUM} opacity={0.7} />
        {label("wall", 40, 30, "Wall")}
        {label("membrane", 180, 40, "Membrane")}
        {label("nucleus", 110, 75, "Nucleus")}
        {label("cytoplasm", 60, 110, "Cytoplasm")}
      </svg>
    );
  }
  if (spec.kind === "matter-states") {
    return (
      <svg viewBox="0 0 280 120" className={`${className} ${compact ? "h-24" : "h-32"}`} aria-hidden>
        {/* solid */}
        <rect x="20" y="40" width="50" height="40" rx={6} fill={CORAL} opacity={0.8} />
        {/* liquid */}
        <path d="M110 40 H160 V80 Q135 95 110 80 Z" fill={SKY} opacity={0.8} />
        {/* gas */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <circle key={i} cx={210 + (i % 3) * 18} cy={50 + Math.floor(i / 3) * 22} r={6} fill={PLUM} opacity={0.75} />
        ))}
        {label("solid", 45, 30, "Solid")}
        {label("liquid", 135, 30, "Liquid")}
        {label("gas", 228, 30, "Gas")}
        <path d="M75 60 H105" stroke={INK} strokeWidth={2} markerEnd="url(#arrow)" />
        <path d="M165 60 H195" stroke={INK} strokeWidth={2} />
        <defs>
          <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill={INK} />
          </marker>
        </defs>
      </svg>
    );
  }
  // food-plate
  return (
    <svg viewBox="0 0 220 150" className={`${className} ${compact ? "h-28" : "h-40"}`} aria-hidden>
      <circle cx="110" cy="75" r={60} fill="#fff" stroke={INK} strokeOpacity={0.25} strokeWidth={3} />
      <path d="M110 75 L110 15 A60 60 0 0 1 162 105 Z" fill={CORAL} opacity={0.7} />
      <path d="M110 75 L162 105 A60 60 0 0 1 58 105 Z" fill={MINT} opacity={0.75} />
      <path d="M110 75 L58 105 A60 60 0 0 1 110 15 Z" fill={SKY} opacity={0.75} />
      {label("go", 145, 45, "Go")}
      {label("grow", 145, 115, "Grow")}
      {label("protect", 60, 80, "Protect")}
    </svg>
  );
}

function TableFig({
  spec,
  className,
}: {
  spec: Extract<FigureSpec, { type: "table" }>;
  className: string;
}) {
  return (
    <div className={`${className} overflow-x-auto rounded-2xl border border-ink/10 bg-white p-2 shadow-soft`}>
      <table className="w-full text-center text-sm font-semibold">
        <thead>
          <tr className="bg-sky/20">
            {spec.headers.map((h) => (
              <th key={h} className="px-2 py-1.5">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {spec.rows.map((row, ri) => (
            <tr key={ri} className="border-t border-ink/5">
              {row.map((cell, ci) => {
                const hi =
                  spec.highlightCell &&
                  spec.highlightCell[0] === ri &&
                  spec.highlightCell[1] === ci;
                return (
                  <td key={ci} className={`px-2 py-1.5 ${hi ? "bg-coral/20 text-coral" : ""}`}>
                    {cell}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {spec.label && <p className="mt-1 text-center text-xs font-bold text-ink/50">{spec.label}</p>}
    </div>
  );
}
