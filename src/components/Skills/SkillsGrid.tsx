import { SkillCard } from "./SkillCard";

export function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <SkillCard
        title="Backend Development"
        skills={[
          ".NET / C#",
          "ASP.NET Core",
          "REST APIs",
          "Authentication & Authorization",
          "Database Design",
        ]}
      />

      <SkillCard
        title="Frontend Development"
        skills={[
          "React",
          "TypeScript",
          "Next.js",
          "Tailwind CSS",
          "UI State Management",
        ]}
      />

      <SkillCard
        title="Databases"
        skills={[
          "PostgreSQL",
          "SQL Server",
          "Entity Framework",
          "Query Optimization",
        ]}
      />
    </div>
  );
}
