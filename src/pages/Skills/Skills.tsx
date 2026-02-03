import { SkillsGrid } from "../../components/Skills/SkillsGrid";
import { ToolsAndEcosystem } from "../../components/Skills/ToolsAndEcosystem";
import { SkillsHeader } from "../../components/Skills/SkillsHeader";

export function Skills() {
  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)] -z-10" />

      <SkillsHeader />
      <SkillsGrid />
      <ToolsAndEcosystem />
    </section>
  );
}
