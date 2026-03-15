import { motion } from "framer-motion";
import {
  SiGit,
  SiGithub,
  SiDocker,
  SiLinux,
  SiPostman,
  SiGithubactions,
} from "react-icons/si";
import { FiCode } from "react-icons/fi";

const tools = [
  { icon: SiGit, name: "Git", color: "#F05032" },
  { icon: SiGithub, name: "GitHub", color: "#181717" },
  { icon: SiDocker, name: "Docker", color: "#2496ED" },
  { icon: SiLinux, name: "Linux", color: "#FCC624" },
  { icon: FiCode, name: "VS Code", color: "#007ACC" },
  { icon: SiPostman, name: "Postman", color: "#FF6C37" },
  { icon: SiGithubactions, name: "CI/CD", color: "#2088FF" },
];

export function ToolsAndEcosystem() {
  // Double the tools array for seamless infinite scroll
  const duplicatedTools = [...tools, ...tools];

  return (
    <section className="mt-24 -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 mb-10">
        <h3
          className="glitch-text text-2xl font-semibold md:text-4xl"
          data-text="RUNTIME TOOLCHAIN"
          style={{ fontFamily: "var(--font-title)" }}
        >
          RUNTIME TOOLCHAIN
        </h3>
      </div>

      <div className="relative py-8">
        {/* Infinite scroll container */}
        <motion.div
          className="flex gap-16"
          animate={{
            x: [0, "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {duplicatedTools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, y: -8 }}
                className="flex flex-col items-center justify-center gap-3 min-w-[100px]"
              >
                <div className="relative">
                  <Icon
                    className="text-6xl transition-all duration-300"
                    style={{ color: tool.color }}
                  />
                </div>
                <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                  {tool.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Gradient fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      </div>
    </section>
  );
}
