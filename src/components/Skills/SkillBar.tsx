import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Tier = 1 | 2 | 3 | 4 | 5;
type TierLabel = "CORE" | "PROFICIENT" | "FAMILIAR" | "LEARNING" | "AWARE";

interface SkillBarProps {
  name: string;
  tier: Tier;
  label: TierLabel;
}

const TIER_COLOR: Record<TierLabel, string> = {
  CORE: "var(--cp-cyan)",
  PROFICIENT: "var(--cp-green)",
  FAMILIAR: "var(--cp-yellow)",
  LEARNING: "var(--cp-orange)",
  AWARE: "rgba(232,232,232,0.85)",
};

export function SkillBar({ name, tier, label }: SkillBarProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <div
      ref={ref}
      className="flex items-center justify-between gap-3 font-mono text-[0.7rem] text-amber-50/95 md:text-xs"
    >
      <span className="w-28 shrink-0 truncate">{name}</span>

      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i < tier;
          return (
            <motion.span
              key={i}
              className="inline-block text-sm leading-none"
              initial={{ opacity: 0, y: 4 }}
              animate={
                inView
                  ? { opacity: filled ? 1 : 0.25, y: 0 }
                  : { opacity: 0, y: 4 }
              }
              transition={{ duration: 0.2, delay: inView ? i * 0.08 : 0 }}
              style={{ color: filled ? TIER_COLOR[label] : "rgba(200,200,200,0.25)" }}
            >
              {filled ? "█" : "░"}
            </motion.span>
          );
        })}
      </div>

      <motion.span
        className="ml-2 shrink-0 rounded px-2 py-0.5 text-[0.6rem] uppercase tracking-[0.18em]"
        style={{
          border: `1px solid ${TIER_COLOR[label]}`,
          color: TIER_COLOR[label],
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={
          inView ? { opacity: 1, scale: [0.9, 1.05, 1] } : { opacity: 0, scale: 0.9 }
        }
        transition={{ duration: 0.35, delay: 5 * 0.08 }}
      >
        {label}
      </motion.span>
    </div>
  );
}

