import Link from "next/link";

type LogoProps = {
  href: string;
  label: string;
  compact?: boolean;
  light?: boolean;
};

export function Logo({ href, label, compact = false, light = true }: LogoProps) {
  return (
    <Link href={href} className="inline-flex items-center gap-3" aria-label={label}>
      <span
        className={`relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border ${
          light ? "border-white/20 bg-white/10" : "border-black/10 bg-graphite/[0.03]"
        }`}
      >
        <span
          className={`absolute inset-0 ${
            light
              ? "bg-[radial-gradient(circle_at_top,rgba(209,244,227,0.35),transparent_60%)]"
              : "bg-[radial-gradient(circle_at_top,rgba(31,84,69,0.16),transparent_60%)]"
          }`}
        />
        <span
          className={`absolute inset-[6px] rounded-[16px] border ${
            light ? "border-white/30" : "border-graphite/20"
          }`}
        />
        <span
          className={`relative h-5 w-5 rounded-full border ${light ? "border-white/80" : "border-graphite/70"}`}
        />
        <span className={`absolute h-px w-7 ${light ? "bg-white/70" : "bg-graphite/70"}`} />
        <span className={`absolute h-7 w-px ${light ? "bg-white/40" : "bg-graphite/35"}`} />
      </span>
      {!compact ? (
        <span className="flex flex-col">
          <span
            className={`font-display text-sm font-semibold uppercase tracking-[0.38em] ${
              light ? "text-white" : "text-graphite"
            }`}
          >
            AUREN
          </span>
          <span
            className={`text-xs uppercase tracking-[0.22em] ${
              light ? "text-white/60" : "text-graphite/50"
            }`}
          >
            greenhouse systems
          </span>
        </span>
      ) : null}
    </Link>
  );
}
