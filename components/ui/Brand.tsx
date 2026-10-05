import { Mascot } from "./Mascot";

export function Brand({ small = false }: { small?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <Mascot size={small ? 36 : 44} float={false} />
      <div className="leading-none">
        <p className={`font-display font-semibold tracking-tight ${small ? "text-xl" : "text-2xl"}`}>
          Mind<span className="text-coral">strong</span>
        </p>
        {!small && (
          <p className="text-xs font-bold text-ink/50">Think hard. Stay brave.</p>
        )}
      </div>
    </div>
  );
}
