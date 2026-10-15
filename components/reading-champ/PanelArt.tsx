import { CHARACTER_KITS, type CharacterId } from "@/lib/reading-champ/art";
import type { SceneId } from "@/lib/reading-champ/types";

const INK = "#1b1730";
const SW = 2.6;

type Shape =
  | "kid"
  | "wombat"
  | "beetle"
  | "helmet"
  | "lion"
  | "mouse"
  | "tortoise"
  | "hare"
  | "ant"
  | "hopper"
  | "monkey"
  | "croc"
  | "jackal"
  | "duck";

type Kit = {
  label: string;
  shape: Shape;
  fill: string;
  accent: string;
  skin: string;
  hair: string;
  hairStyle: "bun" | "cap" | "short" | "pony" | "none" | "grey";
  extra?: "glasses" | "scarf" | "vest" | "bow";
};

const KITS: Record<CharacterId, Kit> = {
  mira: { label: CHARACTER_KITS.mira, shape: "kid", fill: "#ff5d6c", accent: "#ffd1d6", skin: "#c68642", hair: "#3b2418", hairStyle: "bun", extra: "bow" },
  dev: { label: CHARACTER_KITS.dev, shape: "kid", fill: "#3d7dff", accent: "#d6e4ff", skin: "#8d5524", hair: "#1c120c", hairStyle: "cap" },
  page: { label: CHARACTER_KITS.page, shape: "kid", fill: "#7d6bff", accent: "#e4defe", skin: "#f1c7a1", hair: "#6d625c", hairStyle: "grey", extra: "glasses" },
  wombat: { label: CHARACTER_KITS.wombat, shape: "wombat", fill: "#c4843c", accent: "#f3d7a1", skin: "#c4843c", hair: "#8a5a28", hairStyle: "none" },
  dot: { label: CHARACTER_KITS.dot, shape: "beetle", fill: "#2f9e6b", accent: "#173528", skin: "#2f9e6b", hair: "#173528", hairStyle: "none" },
  comet: { label: CHARACTER_KITS.comet, shape: "helmet", fill: "#6c5ce7", accent: "#ffe56b", skin: "#f6c7a1", hair: "#3b2418", hairStyle: "none" },
  pip: { label: CHARACTER_KITS.pip, shape: "kid", fill: "#ffd54a", accent: "#fff3bf", skin: "#d2996b", hair: "#3b2418", hairStyle: "short" },
  asha: { label: CHARACTER_KITS.asha, shape: "kid", fill: "#14b8a6", accent: "#ccfbf1", skin: "#6b3e26", hair: "#1c120c", hairStyle: "pony" },
  rafi: { label: CHARACTER_KITS.rafi, shape: "kid", fill: "#fb7185", accent: "#ffe4e6", skin: "#e0ac69", hair: "#3b2418", hairStyle: "short", extra: "scarf" },
  guard: { label: CHARACTER_KITS.guard, shape: "kid", fill: "#2563eb", accent: "#dbeafe", skin: "#a56b3c", hair: "#1c120c", hairStyle: "cap" },
  porter: { label: CHARACTER_KITS.porter, shape: "kid", fill: "#16a34a", accent: "#dcfce7", skin: "#8d5524", hair: "#1c120c", hairStyle: "short", extra: "vest" },
  lion: { label: CHARACTER_KITS.lion, shape: "lion", fill: "#e8a317", accent: "#f6d98a", skin: "#e8a317", hair: "#c47d0e", hairStyle: "none" },
  mouse: { label: CHARACTER_KITS.mouse, shape: "mouse", fill: "#8d8aa8", accent: "#f4d2cf", skin: "#8d8aa8", hair: "#5c5970", hairStyle: "none" },
  tortoise: { label: CHARACTER_KITS.tortoise, shape: "tortoise", fill: "#3f8f4e", accent: "#d9a441", skin: "#6aaa4a", hair: "#2f6b38", hairStyle: "none" },
  hare: { label: CHARACTER_KITS.hare, shape: "hare", fill: "#d8d2c8", accent: "#f7f1e8", skin: "#d8d2c8", hair: "#b9b0a4", hairStyle: "none" },
  ant: { label: CHARACTER_KITS.ant, shape: "ant", fill: "#3a2a24", accent: "#c47d0e", skin: "#3a2a24", hair: "#1c120c", hairStyle: "none" },
  hopper: { label: CHARACTER_KITS.hopper, shape: "hopper", fill: "#67c15b", accent: "#14532d", skin: "#67c15b", hair: "#14532d", hairStyle: "none" },
  monkey: { label: CHARACTER_KITS.monkey, shape: "monkey", fill: "#c4843c", accent: "#f3d2b3", skin: "#c4843c", hair: "#8a5a28", hairStyle: "none" },
  croc: { label: CHARACTER_KITS.croc, shape: "croc", fill: "#3d9b62", accent: "#d7f5c8", skin: "#2f7d4e", hair: "#1f5c38", hairStyle: "none" },
  jackal: { label: CHARACTER_KITS.jackal, shape: "jackal", fill: "#c4a574", accent: "#f6e7c1", skin: "#c4a574", hair: "#8a7048", hairStyle: "none" },
  bluejackal: { label: CHARACTER_KITS.bluejackal, shape: "jackal", fill: "#3b82f6", accent: "#dbeafe", skin: "#3b82f6", hair: "#1d4ed8", hairStyle: "none" },
  duck: { label: CHARACTER_KITS.duck, shape: "duck", fill: "#f4f7fb", accent: "#f59e0b", skin: "#f4f7fb", hair: "#e7edf5", hairStyle: "none" },
};

function face(y: number) {
  return (
    <g>
      <circle cx="-7" cy={y} r="2.5" fill={INK} />
      <circle cx="7" cy={y} r="2.5" fill={INK} />
      <circle cx="-6.2" cy={y - 0.8} r="0.8" fill="#fff" />
      <circle cx="7.8" cy={y - 0.8} r="0.8" fill="#fff" />
      <path d={`M-6 ${y + 8} Q0 ${y + 13} 6 ${y + 8}`} fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" />
    </g>
  );
}

function hair(kit: Kit) {
  if (kit.hairStyle === "bun") {
    return (
      <g>
        <path d="M-18 -104 Q0 -128 18 -104 Q14 -92 0 -90 Q-14 -92 -18 -104" fill={kit.hair} stroke={INK} strokeWidth={SW} />
        <circle cx="0" cy="-118" r="8" fill={kit.hair} stroke={INK} strokeWidth={SW} />
        {kit.extra === "bow" && <path d="M-8 -116 H8 L4 -110 H-4 Z" fill="#ff5d6c" stroke={INK} strokeWidth="1.6" />}
      </g>
    );
  }
  if (kit.hairStyle === "cap") {
    return (
      <g>
        <path d="M-18 -100 Q0 -122 18 -100 L16 -90 Q0 -96 -16 -90 Z" fill={kit.fill} stroke={INK} strokeWidth={SW} />
        <path d="M-6 -96 H16 L14 -90 H-4 Z" fill={kit.accent} stroke={INK} strokeWidth="1.8" />
      </g>
    );
  }
  if (kit.hairStyle === "pony") {
    return (
      <g>
        <path d="M-16 -108 Q0 -124 16 -104 Q8 -94 -12 -96 Z" fill={kit.hair} stroke={INK} strokeWidth={SW} />
        <path d="M10 -104 Q28 -96 18 -78" fill="none" stroke={kit.hair} strokeWidth="6" strokeLinecap="round" />
      </g>
    );
  }
  if (kit.hairStyle === "grey") {
    return <path d="M-18 -104 Q0 -126 18 -104 Q12 -92 0 -90 Q-12 -92 -18 -104" fill={kit.hair} stroke={INK} strokeWidth={SW} />;
  }
  if (kit.hairStyle === "short") {
    return <path d="M-16 -104 Q0 -120 16 -104 Q10 -96 0 -96 Q-10 -96 -16 -104" fill={kit.hair} stroke={INK} strokeWidth={SW} />;
  }
  return null;
}

function Kid({ kit }: { kit: Kit }) {
  return (
    <g>
      <ellipse cx="0" cy="2" rx="22" ry="5" fill="#000" opacity="0.12" />
      <rect x="-12" y="-32" width="9" height="30" rx="4" fill={kit.skin} stroke={INK} strokeWidth={SW} />
      <rect x="3" y="-32" width="9" height="30" rx="4" fill={kit.skin} stroke={INK} strokeWidth={SW} />
      <rect x="-18" y="-68" width="36" height="42" rx="14" fill={kit.fill} stroke={INK} strokeWidth={SW} />
      {kit.extra === "vest" && <path d="M-8 -66 L0 -48 L8 -66" fill={kit.accent} stroke={INK} strokeWidth="1.6" />}
      {kit.extra === "scarf" && <path d="M-8 -66 H10 L6 -48 H-4 Z" fill="#fde68a" stroke={INK} strokeWidth="1.6" />}
      <path d="M-18 -52 Q-32 -40 -24 -28" fill="none" stroke={kit.skin} strokeWidth="6" strokeLinecap="round" />
      <path d="M18 -52 Q32 -40 24 -28" fill="none" stroke={kit.skin} strokeWidth="6" strokeLinecap="round" />
      <circle cx="0" cy="-90" r="22" fill={kit.skin} stroke={INK} strokeWidth={SW} />
      {hair(kit)}
      {face(-92)}
      {kit.extra === "glasses" && (
        <g fill="none" stroke={INK} strokeWidth="1.8">
          <circle cx="-7" cy="-92" r="6" />
          <circle cx="7" cy="-92" r="6" />
          <path d="M-1 -92 H1" />
        </g>
      )}
    </g>
  );
}

function Wombat() {
  const kit = KITS.wombat;
  return (
    <g>
      <ellipse cx="0" cy="4" rx="28" ry="6" fill="#000" opacity="0.12" />
      <ellipse cx="0" cy="-36" rx="32" ry="28" fill={kit.fill} stroke={INK} strokeWidth={SW} />
      <ellipse cx="0" cy="-30" rx="16" ry="14" fill={kit.accent} />
      <circle cx="-16" cy="-62" r="8" fill={kit.fill} stroke={INK} strokeWidth={SW} />
      <circle cx="16" cy="-62" r="8" fill={kit.fill} stroke={INK} strokeWidth={SW} />
      <circle cx="0" cy="-58" r="20" fill={kit.fill} stroke={INK} strokeWidth={SW} />
      <ellipse cx="8" cy="-52" rx="10" ry="7" fill={kit.accent} stroke={INK} strokeWidth="1.8" />
      <circle cx="14" cy="-52" r="1.6" fill={INK} />
      {face(-64)}
      <rect x="-16" y="-16" width="10" height="16" rx="4" fill={kit.fill} stroke={INK} strokeWidth={SW} />
      <rect x="6" y="-16" width="10" height="16" rx="4" fill={kit.fill} stroke={INK} strokeWidth={SW} />
    </g>
  );
}

function Beetle() {
  return (
    <g>
      <ellipse cx="0" cy="6" rx="16" ry="4" fill="#000" opacity="0.12" />
      <ellipse cx="0" cy="-28" rx="22" ry="16" fill="#2f9e6b" stroke={INK} strokeWidth={SW} />
      <path d="M0 -44 V-12" stroke={INK} strokeWidth="1.6" />
      <circle cx="-8" cy="-30" r="4" fill="#173528" />
      <circle cx="8" cy="-30" r="4" fill="#173528" />
      <circle cx="0" cy="-48" r="10" fill="#2f9e6b" stroke={INK} strokeWidth={SW} />
      <circle cx="-4" cy="-50" r="1.6" fill={INK} />
      <circle cx="4" cy="-50" r="1.6" fill={INK} />
      <path d="M-6 -56 Q-12 -66 -8 -70" fill="none" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M6 -56 Q12 -66 8 -70" fill="none" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />
    </g>
  );
}

function Helmet() {
  const kit = KITS.comet;
  return (
    <g>
      <Kid kit={{ ...kit, hairStyle: "none", extra: undefined }} />
      <path d="M-24 -112 Q0 -138 24 -112 L20 -78 Q0 -70 -20 -78 Z" fill="#e0f2fe" fillOpacity="0.55" stroke={INK} strokeWidth={SW} />
      <circle cx="22" cy="-96" r="5" fill={kit.accent} stroke={INK} strokeWidth="1.8" />
    </g>
  );
}

function Lion() {
  return (
    <g>
      <ellipse cx="0" cy="4" rx="26" ry="5" fill="#000" opacity="0.12" />
      <circle cx="0" cy="-78" r="28" fill="#e0a106" stroke={INK} strokeWidth={SW} />
      <circle cx="0" cy="-78" r="16" fill="#f6d36b" stroke={INK} strokeWidth={SW} />
      {face(-80)}
      <ellipse cx="0" cy="-36" rx="22" ry="26" fill="#f0c14a" stroke={INK} strokeWidth={SW} />
      <path d="M18 -20 Q36 -8 22 2" fill="none" stroke="#e0a106" strokeWidth="5" strokeLinecap="round" />
      <circle cx="24" cy="4" r="4" fill="#c47d0e" stroke={INK} strokeWidth="1.5" />
    </g>
  );
}

function Mouse() {
  return (
    <g>
      <ellipse cx="0" cy="4" rx="14" ry="4" fill="#000" opacity="0.12" />
      <ellipse cx="-10" cy="-92" rx="7" ry="14" fill="#d7d4e4" stroke={INK} strokeWidth={SW} />
      <ellipse cx="10" cy="-92" rx="7" ry="14" fill="#d7d4e4" stroke={INK} strokeWidth={SW} />
      <circle cx="0" cy="-70" r="14" fill="#b7b4c8" stroke={INK} strokeWidth={SW} />
      <circle cx="-5" cy="-72" r="1.7" fill={INK} />
      <circle cx="5" cy="-72" r="1.7" fill={INK} />
      <ellipse cx="0" cy="-40" rx="12" ry="16" fill="#c5c2d4" stroke={INK} strokeWidth={SW} />
      <path d="M8 -28 Q28 -10 18 6" fill="none" stroke="#8d8aa8" strokeWidth="3" strokeLinecap="round" />
    </g>
  );
}

function Tortoise() {
  return (
    <g>
      <ellipse cx="0" cy="4" rx="24" ry="5" fill="#000" opacity="0.12" />
      <ellipse cx="0" cy="-28" rx="28" ry="18" fill="#3f8f4e" stroke={INK} strokeWidth={SW} />
      <path d="M-16 -28 H16 M-8 -42 V-14 M8 -42 V-14" stroke="#d9a441" strokeWidth="2" />
      <circle cx="24" cy="-36" r="10" fill="#6aaa4a" stroke={INK} strokeWidth={SW} />
      <circle cx="22" cy="-38" r="1.4" fill={INK} />
      <circle cx="28" cy="-38" r="1.4" fill={INK} />
      <rect x="-18" y="-12" width="8" height="10" rx="3" fill="#6aaa4a" stroke={INK} strokeWidth="1.6" />
      <rect x="8" y="-12" width="8" height="10" rx="3" fill="#6aaa4a" stroke={INK} strokeWidth="1.6" />
    </g>
  );
}

function Hare() {
  return (
    <g>
      <ellipse cx="0" cy="4" rx="16" ry="4" fill="#000" opacity="0.12" />
      <ellipse cx="-8" cy="-108" rx="5" ry="18" fill="#f7f1e8" stroke={INK} strokeWidth={SW} />
      <ellipse cx="8" cy="-108" rx="5" ry="18" fill="#f7f1e8" stroke={INK} strokeWidth={SW} />
      <circle cx="0" cy="-78" r="14" fill="#f7f1e8" stroke={INK} strokeWidth={SW} />
      {face(-80)}
      <ellipse cx="0" cy="-46" rx="12" ry="18" fill="#d8d2c8" stroke={INK} strokeWidth={SW} />
      <path d="M8 -30 Q20 -8 10 2" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      <path d="M-8 -20 Q-18 0 -8 2" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
}

function Ant() {
  return (
    <g>
      <ellipse cx="0" cy="4" rx="18" ry="4" fill="#000" opacity="0.12" />
      <circle cx="-12" cy="-24" r="8" fill="#3a2a24" stroke={INK} strokeWidth={SW} />
      <circle cx="2" cy="-28" r="10" fill="#3a2a24" stroke={INK} strokeWidth={SW} />
      <circle cx="16" cy="-40" r="8" fill="#3a2a24" stroke={INK} strokeWidth={SW} />
      <circle cx="14" cy="-42" r="1.3" fill="#fff" />
      <circle cx="19" cy="-42" r="1.3" fill="#fff" />
      <path d="M12 -48 Q6 -60 10 -66" fill="none" stroke={INK} strokeWidth="1.6" />
      <path d="M18 -48 Q24 -60 20 -66" fill="none" stroke={INK} strokeWidth="1.6" />
      <path d="M-4 -20 L-16 -6 M4 -18 L14 -4" stroke={INK} strokeWidth="2" strokeLinecap="round" />
    </g>
  );
}

function Hopper() {
  return (
    <g>
      <ellipse cx="0" cy="4" rx="18" ry="4" fill="#000" opacity="0.12" />
      <ellipse cx="0" cy="-36" rx="22" ry="12" fill="#67c15b" stroke={INK} strokeWidth={SW} />
      <circle cx="16" cy="-48" r="8" fill="#67c15b" stroke={INK} strokeWidth={SW} />
      <circle cx="14" cy="-50" r="1.4" fill={INK} />
      <circle cx="19" cy="-50" r="1.4" fill={INK} />
      <path d="M-8 -28 Q-24 0 -6 2" fill="none" stroke="#14532d" strokeWidth="3" strokeLinecap="round" />
      <path d="M6 -24 Q22 0 8 2" fill="none" stroke="#14532d" strokeWidth="3" strokeLinecap="round" />
    </g>
  );
}

function Monkey() {
  return (
    <g>
      <ellipse cx="0" cy="4" rx="18" ry="4" fill="#000" opacity="0.12" />
      <circle cx="-14" cy="-78" r="6" fill="#c4843c" stroke={INK} strokeWidth="1.8" />
      <circle cx="14" cy="-78" r="6" fill="#c4843c" stroke={INK} strokeWidth="1.8" />
      <circle cx="0" cy="-78" r="16" fill="#f3d2b3" stroke={INK} strokeWidth={SW} />
      {face(-80)}
      <ellipse cx="0" cy="-44" rx="14" ry="20" fill="#c4843c" stroke={INK} strokeWidth={SW} />
      <path d="M12 -30 Q32 -8 16 8 Q4 2 8 -10" fill="none" stroke="#c4843c" strokeWidth="4" strokeLinecap="round" />
    </g>
  );
}

function Croc() {
  return (
    <g>
      <ellipse cx="0" cy="6" rx="36" ry="5" fill="#000" opacity="0.12" />
      <ellipse cx="-4" cy="-24" rx="36" ry="14" fill="#3d9b62" stroke={INK} strokeWidth={SW} />
      <path d="M20 -24 H48 L40 -16 H22 Z" fill="#d7f5c8" stroke={INK} strokeWidth={SW} />
      <path d="M26 -20 H44" stroke={INK} strokeWidth="1.4" />
      <circle cx="8" cy="-30" r="1.8" fill={INK} />
      <path d="M-30 -18 Q-46 -8 -28 2" fill="#3d9b62" stroke={INK} strokeWidth={SW} />
    </g>
  );
}

function Jackal({ fill, belly }: { fill: string; belly: string }) {
  return (
    <g>
      <ellipse cx="0" cy="4" rx="20" ry="4" fill="#000" opacity="0.12" />
      <path d="M-10 -100 L-4 -78 L-16 -78 Z" fill={fill} stroke={INK} strokeWidth={SW} />
      <path d="M10 -100 L4 -78 L16 -78 Z" fill={fill} stroke={INK} strokeWidth={SW} />
      <circle cx="0" cy="-72" r="14" fill={fill} stroke={INK} strokeWidth={SW} />
      <circle cx="-5" cy="-74" r="1.6" fill={INK} />
      <circle cx="5" cy="-74" r="1.6" fill={INK} />
      <ellipse cx="0" cy="-40" rx="12" ry="20" fill={fill} stroke={INK} strokeWidth={SW} />
      <ellipse cx="0" cy="-36" rx="6" ry="10" fill={belly} />
      <path d="M8 -24 Q26 -16 16 2" fill={fill} stroke={INK} strokeWidth="2" />
    </g>
  );
}

function Duck() {
  return (
    <g>
      <ellipse cx="0" cy="4" rx="18" ry="4" fill="#000" opacity="0.12" />
      <ellipse cx="0" cy="-28" rx="22" ry="14" fill="#f4f7fb" stroke={INK} strokeWidth={SW} />
      <circle cx="14" cy="-40" r="10" fill="#f4f7fb" stroke={INK} strokeWidth={SW} />
      <path d="M22 -42 H34 L30 -36 H22 Z" fill="#f59e0b" stroke={INK} strokeWidth="1.6" />
      <circle cx="16" cy="-42" r="1.5" fill={INK} />
      <path d="M-8 -18 Q-4 -8 2 -16" fill="#e7edf5" stroke={INK} strokeWidth="1.6" />
    </g>
  );
}

function Actor({ id, x }: { id: string; x: number }) {
  const kit = KITS[id as CharacterId];
  if (!kit) return null;
  const body =
    kit.shape === "kid" ? (
      <Kid kit={kit} />
    ) : kit.shape === "wombat" ? (
      <Wombat />
    ) : kit.shape === "beetle" ? (
      <Beetle />
    ) : kit.shape === "helmet" ? (
      <Helmet />
    ) : kit.shape === "lion" ? (
      <Lion />
    ) : kit.shape === "mouse" ? (
      <Mouse />
    ) : kit.shape === "tortoise" ? (
      <Tortoise />
    ) : kit.shape === "hare" ? (
      <Hare />
    ) : kit.shape === "ant" ? (
      <Ant />
    ) : kit.shape === "hopper" ? (
      <Hopper />
    ) : kit.shape === "monkey" ? (
      <Monkey />
    ) : kit.shape === "croc" ? (
      <Croc />
    ) : kit.shape === "jackal" ? (
      <Jackal fill={kit.fill} belly={kit.accent} />
    ) : (
      <Duck />
    );
  return (
    <g transform={`translate(${x} 176)`} aria-label={kit.label}>
      {body}
    </g>
  );
}

function books(x: number, y: number) {
  const colors = ["#ff5d6c", "#3d7dff", "#ffd54a", "#14b8a6", "#7d6bff"];
  return (
    <g>
      {colors.map((color, i) => (
        <rect key={color} x={x + i * 8} y={y} width="7" height="28" rx="1.5" fill={color} stroke={INK} strokeWidth="1" />
      ))}
    </g>
  );
}

function Backdrop({ scene }: { scene: SceneId }) {
  if (scene === "space") {
    return (
      <g>
        <rect width="360" height="220" fill="#1e1b4b" />
        <circle cx="300" cy="42" r="16" fill="#ffe56b" stroke={INK} strokeWidth="1.5" />
        {[40, 80, 130, 200, 250].map((x, i) => (
          <circle key={x} cx={x} cy={30 + (i % 3) * 16} r="2" fill="#fff" />
        ))}
        <ellipse cx="180" cy="190" rx="160" ry="28" fill="#312e81" />
      </g>
    );
  }
  if (scene === "night" || scene === "moon") {
    return (
      <g>
        <rect width="360" height="220" fill="#312e81" />
        <circle cx="286" cy="48" r="22" fill="#f8fafc" stroke={INK} strokeWidth="1.5" />
        <circle cx="276" cy="42" r="16" fill="#312e81" />
        <rect y="160" width="360" height="60" fill="#1e1b4b" />
        {scene === "night" && (
          <g>
            <rect x="40" y="78" width="70" height="82" rx="6" fill="#f8e7c3" stroke={INK} strokeWidth={SW} />
            {books(48, 88)}
            {books(48, 122)}
          </g>
        )}
      </g>
    );
  }
  const sky =
    scene === "library" || scene === "stacks"
      ? "#f8e7c3"
      : scene === "burrow"
        ? "#f3d7b0"
        : scene === "meadow" || scene === "garden" || scene === "forest"
          ? "#bfe8ff"
          : scene === "sky"
            ? "#7dd3fc"
            : scene === "pond" || scene === "river"
              ? "#c4ecff"
              : scene === "savanna"
                ? "#ffe7a3"
                : scene === "time" || scene === "timeline"
                  ? "#ffe1bf"
                  : scene === "train"
                    ? "#dbeafe"
                    : scene === "village" || scene === "market"
                      ? "#ffedd5"
                      : "#e0f2fe";
  const ground =
    scene === "library" || scene === "stacks"
      ? "#e7c89a"
      : scene === "burrow"
        ? "#c4843c"
        : scene === "pond" || scene === "river"
          ? "#86efac"
          : scene === "savanna"
            ? "#e7b15a"
            : scene === "train" || scene === "time" || scene === "timeline"
              ? "#d6d3d1"
              : "#86efac";
  return (
    <g>
      <rect width="360" height="220" fill={sky} />
      <rect y="158" width="360" height="62" fill={ground} />
      {(scene === "meadow" || scene === "garden" || scene === "sky" || scene === "savanna" || scene === "village") && (
        <circle cx="310" cy="46" r="18" fill="#facc15" stroke={INK} strokeWidth="1.6" />
      )}
      {(scene === "library" || scene === "stacks") && (
        <g>
          <rect x="16" y="48" width="92" height="110" rx="6" fill="#7c5c3b" stroke={INK} strokeWidth={SW} />
          <rect x="24" y="58" width="76" height="34" fill="#f8f1e3" />
          {books(28, 60)}
          <rect x="24" y="100" width="76" height="34" fill="#f8f1e3" />
          {books(28, 102)}
          {scene === "stacks" && (
            <g>
              <rect x="250" y="48" width="92" height="110" rx="6" fill="#7c5c3b" stroke={INK} strokeWidth={SW} />
              {books(262, 60)}
              {books(262, 102)}
            </g>
          )}
          {scene === "library" && <rect x="250" y="70" width="70" height="88" rx="8" fill="#93c5fd" stroke={INK} strokeWidth={SW} />}
        </g>
      )}
      {scene === "burrow" && (
        <g>
          <ellipse cx="300" cy="120" rx="40" ry="48" fill="#8a5a28" stroke={INK} strokeWidth={SW} />
          <ellipse cx="300" cy="128" rx="22" ry="28" fill="#3f2a1a" />
        </g>
      )}
      {(scene === "meadow" || scene === "garden") && (
        <g>
          <circle cx="40" cy="150" r="8" fill="#ff5d6c" stroke={INK} strokeWidth="1.4" />
          <circle cx="58" cy="146" r="8" fill="#ffd54a" stroke={INK} strokeWidth="1.4" />
          <rect x="46" y="150" width="3" height="16" fill="#15803d" />
        </g>
      )}
      {scene === "forest" && (
        <g>
          <rect x="36" y="90" width="14" height="70" fill="#7c5c3b" stroke={INK} strokeWidth="1.5" />
          <circle cx="43" cy="78" r="28" fill="#15803d" stroke={INK} strokeWidth={SW} />
          <rect x="280" y="100" width="12" height="60" fill="#7c5c3b" stroke={INK} strokeWidth="1.5" />
          <circle cx="286" cy="90" r="22" fill="#16a34a" stroke={INK} strokeWidth={SW} />
        </g>
      )}
      {(scene === "pond" || scene === "river") && (
        <ellipse cx="180" cy="186" rx={scene === "river" ? 170 : 90} ry="18" fill="#38bdf8" stroke={INK} strokeWidth={SW} />
      )}
      {scene === "savanna" && (
        <g>
          <rect x="40" y="110" width="8" height="48" fill="#7c5c3b" />
          <ellipse cx="44" cy="104" rx="28" ry="8" fill="#65a30d" stroke={INK} strokeWidth="1.5" />
        </g>
      )}
      {(scene === "train" || scene === "time") && (
        <g>
          <rect x="200" y="118" width="130" height="40" rx="8" fill="#2563eb" stroke={INK} strokeWidth={SW} />
          <rect x="214" y="128" width="18" height="14" fill="#bfdbfe" stroke={INK} strokeWidth="1.2" />
          <rect x="240" y="128" width="18" height="14" fill="#bfdbfe" stroke={INK} strokeWidth="1.2" />
          <circle cx="230" cy="162" r="8" fill="#1b1730" />
          <circle cx="290" cy="162" r="8" fill="#1b1730" />
        </g>
      )}
      {scene === "timeline" && <path d="M30 168 H330" stroke={INK} strokeWidth="4" strokeLinecap="round" />}
      {(scene === "village" || scene === "market") && (
        <g>
          <rect x="36" y="96" width="54" height="62" fill="#fff7ed" stroke={INK} strokeWidth={SW} />
          <path d="M30 96 L63 70 L96 96 Z" fill="#fb7185" stroke={INK} strokeWidth={SW} />
          {scene === "market" && <rect x="250" y="120" width="70" height="28" rx="6" fill="#3b82f6" stroke={INK} strokeWidth={SW} />}
        </g>
      )}
      {scene === "sky" && (
        <g fill="#fff">
          <ellipse cx="70" cy="50" rx="28" ry="12" />
          <ellipse cx="90" cy="46" rx="18" ry="10" />
        </g>
      )}
    </g>
  );
}

/** Consistent cartoon house style. Text is never drawn here. */
export function PanelArt({ scene, characters }: { scene: SceneId; characters: string[] }) {
  const names = characters.map((id) => KITS[id as CharacterId]?.label ?? id);
  const label = names.length ? `${names.join(" and ")} in the ${scene}` : `${scene} scene`;
  const spots = characters.length === 1 ? [180] : characters.length === 2 ? [120, 230] : [90, 180, 270];
  return (
    <svg viewBox="0 0 360 220" role="img" aria-label={label} className="h-auto w-full">
      <Backdrop scene={scene} />
      {characters.slice(0, 3).map((id, index) => (
        <Actor key={`${id}-${index}`} id={id} x={spots[index] ?? 180} />
      ))}
    </svg>
  );
}
