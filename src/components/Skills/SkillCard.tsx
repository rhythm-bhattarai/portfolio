type SkillCardProps = {
  title: string;
  skills: string[];
};

export function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className="rounded-2xl border p-6 hover:border-primary transition">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {skills.map((skill) => (
          <li key={skill}>• {skill}</li>
        ))}
      </ul>
    </div>
  );
}
