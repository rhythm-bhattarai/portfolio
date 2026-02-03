export function SkillsHeader() {
  return (
    <div className="mb-20 relative">
      {/* Decorative background element */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-black/5 rounded-full blur-3xl -z-10" />

      <div className="relative">
        {/* Main heading */}
        <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight">
          Skills & <span className="text-white/30">Capabilities</span>
        </h2>

        {/* Description */}
        <p className="text-xl md:text-2xl text-white60 max-w-3xl leading-relaxed">
          Building reliable systems, clean interfaces, and codebases that are{" "}
          <span className="text-white/50 font-medium">easy to maintain</span>{" "}
          and <span className="text-white/50 font-medium">scale</span>.
        </p>
      </div>
    </div>
  );
}
