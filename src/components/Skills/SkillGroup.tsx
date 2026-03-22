import { motion } from "framer-motion";
import { SkillBar } from "./SkillBar";

interface SkillGroupData {
  id: string;
  label: string;
  skills: readonly {
    name: string;
    tier: 1 | 2 | 3 | 4 | 5;
    label: "CORE" | "PROFICIENT" | "FAMILIAR" | "LEARNING" | "AWARE";
  }[];
}

interface SkillGroupProps {
  group: SkillGroupData;
}

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <motion.div
      className="corner-brackets terminal-border relative flex flex-col gap-4 bg-black/40 p-4 text-xs text-amber-50/90 md:p-5 md:text-sm"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="mb-1 flex items-center justify-between">
        <span className="font-heading text-[0.65rem] tracking-[0.3em] text-cyan-300">
          {group.label}
        </span>
        <span className="text-[0.6rem] text-cyan-200/60">
          {group.skills.length.toString().padStart(2, "0")} SKILLS
        </span>
      </div>
      <div className="space-y-3">
        {group.skills.map((skill) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            tier={skill.tier}
            label={skill.label}
          />
        ))}
      </div>
    </motion.div>
  );
}

