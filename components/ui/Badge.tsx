export function Badge({
  emoji,
  label,
  tone = "sun",
}: {
  emoji: string;
  label: string;
  tone?: "sun" | "mint" | "plum" | "coral" | "sky";
}) {
  const bg = {
    sun: "bg-sun/90 text-ink",
    mint: "bg-mint text-ink",
    plum: "bg-plum text-white",
    coral: "bg-coral text-white",
    sky: "bg-sky text-white",
  }[tone];
  return (
    <span
      className={`inline-flex animate-bounce-in items-center gap-1.5 rounded-full px-4 py-2 font-display text-base font-semibold shadow-chunky ${bg}`}
    >
      <span aria-hidden className="text-xl">
        {emoji}
      </span>
      {label}
    </span>
  );
}
