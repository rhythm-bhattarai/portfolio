import { motion } from "framer-motion";
import { SkillGroup } from "../../components/Skills/SkillGroup";
import { ToolsAndEcosystem } from "../../components/Skills/ToolsAndEcosystem";

const SKILL_GROUPS = [
  {
    id: "backend",
    label: "BACKEND",
    skills: [
      { name: "REST APIs", tier: 5, label: "CORE" },
      { name: "JWT Auth", tier: 5, label: "CORE" },
      { name: "ASP.NET Core", tier: 4, label: "PROFICIENT" },
      { name: "Django", tier: 4, label: "PROFICIENT" },
      { name: "EF Core", tier: 4, label: "PROFICIENT" },
      { name: "Celery / Redis", tier: 3, label: "FAMILIAR" },
      { name: "Go", tier: 2, label: "LEARNING" },
    ],
  },
  {
    id: "frontend",
    label: "FRONTEND",
    skills: [
      { name: "React", tier: 4, label: "PROFICIENT" },
      { name: "Next.js", tier: 3, label: "FAMILIAR" },
      { name: "MUI / Tailwind", tier: 4, label: "PROFICIENT" },
      { name: "Framer Motion", tier: 3, label: "FAMILIAR" },
    ],
  },
  {
    id: "databases",
    label: "DATABASES",
    skills: [
      { name: "PostgreSQL", tier: 4, label: "PROFICIENT" },
      { name: "SQL Server", tier: 4, label: "PROFICIENT" },
    ],
  },
  {
    id: "ml",
    label: "ML / DATA",
    skills: [
      { name: "PyTorch", tier: 3, label: "FAMILIAR" },
      { name: "scikit-learn", tier: 3, label: "FAMILIAR" },
      { name: "LSTM / RF", tier: 3, label: "FAMILIAR" },
    ],
  },
  {
    id: "devops",
    label: "DEVOPS / TOOLS",
    skills: [
      { name: "Git", tier: 5, label: "CORE" },
      { name: "Linux", tier: 4, label: "PROFICIENT" },
      { name: "CI/CD", tier: 3, label: "FAMILIAR" },
      { name: "Containers / Docker", tier: 3, label: "FAMILIAR" },
    ],
  },
] as const;

export function Skills() {
  return (
    <section className="skills-dot-grid relative w-full min-h-screen overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <p
            className="mb-1 text-[0.65rem] uppercase tracking-[0.3em] font-heading"
            style={{ color: "var(--cp-yellow)" }}
          >
            // SKILL_SCAN INITIATED
          </p>
          <div className="inline-block">
            <h2
              className="glitch-text text-4xl font-display md:text-6xl lg:text-7xl"
              data-text="NEURAL LOAD"
            >
              NEURAL LOAD
            </h2>
            <motion.div
              className="mt-1 h-px w-full bg-gradient-to-r from-cyan-400 via-yellow-300 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
            />
          </div>
          <p className="font-mono mt-4 max-w-2xl text-xs text-amber-100/80 md:text-sm">
            Capabilities indexed. Stack compiled.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group) => (
            <SkillGroup key={group.id} group={group} />
          ))}
        </div>

        <motion.div
          className="mt-12 max-w-2xl rounded-md border border-cyan-400/50 bg-black/40 px-4 py-4 text-xs text-cyan-100 shadow-[0_0_18px_rgba(0,255,255,0.3)] md:text-sm font-mono"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <p
            className="mb-1 text-[0.7rem] uppercase tracking-[0.3em] font-heading"
            style={{ color: "var(--cp-yellow)" }}
          >
            LANGUAGE_ADAPTABILITY
          </p>
          <p>
            Once I know the concepts, the syntax is just syntax. REST APIs, DB
            design, auth flows — I&apos;ve built them. The language is a
            detail.
          </p>
        </motion.div>

        <ToolsAndEcosystem />
      </div>
    </section>
  );
}
