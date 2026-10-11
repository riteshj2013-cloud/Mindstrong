import type { SceneId } from "@/lib/reading-champ/types";

const KITS: Record<string, { fill: string; ear?: "round" | "tall" | "none"; label: string }> = {
  mira: { fill: "#ff7a66", ear: "round", label: "Mira" },
  dev: { fill: "#4fa8f0", ear: "round", label: "Dev" },
  comet: { fill: "#9b7ede", ear: "none", label: "Comet" },
  pip: { fill: "#ffd54a", ear: "round", label: "Pip" },
  wombat: { fill: "#c4a574", ear: "round", label: "Wombat" },
  asha: { fill: "#5fd3b0", ear: "round", label: "Asha" },
  rafi: { fill: "#ff7a66", ear: "tall", label: "Rafi" },
  lion: { fill: "#e0a106", ear: "round", label: "Lion" },
  mouse: { fill: "#8d8aa8", ear: "tall", label: "Mouse" },
  guard: { fill: "#4fa8f0", ear: "none", label: "Guard" },
  porter: { fill: "#2fb586", ear: "none", label: "Porter" },
};

const BACKDROP: Record<SceneId, { sky: string; ground: string }> = {
  library: { sky: "#f3e6ff", ground: "#d7c4f5" },
  space: { sky: "#241b4a", ground: "#3a2d6b" },
  burrow: { sky: "#d8f3ea", ground: "#b7e2c8" },
  meadow: { sky: "#e7f7ff", ground: "#b7e6a1" },
  time: { sky: "#ffe7c2", ground: "#f3c98a" },
  savanna: { sky: "#fff1c9", ground: "#e7c27a" },
  train: { sky: "#e7f0ff", ground: "#c5d4ee" },
  timeline: { sky: "#fff6ea", ground: "#f0d7b8" },
};

function Character({ id, x }: { id: string; x: number }) {
  const kit = KITS[id] ?? { fill: "#9b7ede", ear: "round" as const, label: id };
  return (
    <g transform={`translate(${x} 118)`} aria-label={kit.label}>
      {kit.ear === "tall" && (
        <>
          <ellipse cx="18" cy="8" rx="6" ry="12" fill={kit.fill} />
          <ellipse cx="42" cy="8" rx="6" ry="12" fill={kit.fill} />
        </>
      )}
      {kit.ear === "round" && (
        <>
          <circle cx="16" cy="18" r="8" fill={kit.fill} />
          <circle cx="44" cy="18" r="8" fill={kit.fill} />
        </>
      )}
      <circle cx="30" cy="36" r="22" fill={kit.fill} />
      <rect x="16" y="54" width="28" height="26" rx="12" fill={kit.fill} />
      <circle cx="22" cy="34" r="2.4" fill="#2b2a4c" />
      <circle cx="38" cy="34" r="2.4" fill="#2b2a4c" />
      <path d="M22 44 Q30 50 38 44" fill="none" stroke="#2b2a4c" strokeWidth="2" strokeLinecap="round" />
    </g>
  );
}

/** Generic placeholder art. Text is never drawn here. */
export function PanelArt({
  scene,
  characters,
}: {
  scene: SceneId;
  characters: string[];
}) {
  const bg = BACKDROP[scene];
  const label = characters.length
    ? `${characters.join(" and ")} in a ${scene} scene`
    : `${scene} scene`;
  return (
    <svg viewBox="0 0 360 220" role="img" aria-label={label} className="h-auto w-full">
      <rect width="360" height="220" rx="28" fill={bg.sky} />
      <rect y="150" width="360" height="70" fill={bg.ground} />
      {scene === "space" && (
        <>
          <circle cx="300" cy="42" r="16" fill="#ffd54a" />
          <circle cx="40" cy="36" r="2" fill="#fffaf0" />
          <circle cx="80" cy="60" r="2" fill="#fffaf0" />
          <circle cx="140" cy="28" r="2" fill="#fffaf0" />
        </>
      )}
      {scene === "library" && <rect x="20" y="70" width="70" height="80" rx="6" fill="#9b7ede" />}
      {scene === "timeline" && <path d="M30 168 H330" stroke="#2b2a4c" strokeWidth="4" strokeLinecap="round" />}
      {scene === "train" && <rect x="200" y="118" width="120" height="36" rx="8" fill="#4fa8f0" />}
      {scene === "savanna" && <circle cx="300" cy="48" r="18" fill="#ffd54a" />}
      {(scene === "meadow" || scene === "burrow") && <circle cx="300" cy="46" r="14" fill="#ffd54a" />}
      {characters.slice(0, 3).map((id, index) => (
        <Character key={`${id}-${index}`} id={id} x={70 + index * 80} />
      ))}
    </svg>
  );
}
