import Image from "next/image";

export function SkillsSection() {
  return (
    <section id="skills" className="section py-20">
      <div className="max-w-4xl mx-auto px-4" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <SkillCategory 
            title="Frontend" 
            skills={[
              { name: "React.js", icon: "/icons/react.svg" },
              { name: "TypeScript", icon: "/icons/typescript.svg" },
              { name: "Next.js", icon: "/icons/nextjs.svg" },
            ]} 
          />
          <SkillCategory 
            title="Backend" 
            skills={[
              { name: "Node.js", icon: "/icons/nodejs.svg" },
              { name: "Python", icon: "/icons/python.svg" },
            ]} 
          />
          <SkillCategory 
            title="Database & Tools" 
            skills={[
              { name: "MongoDB", icon: "/icons/mongodb.svg" },
              { name: "Git", icon: "/icons/git.svg" },
            ]} 
          />
        </div>
      </div>
    </section>
  );
}

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
}

function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-6 text-center">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="flex items-center gap-2">
            <Image src={skill.icon} alt={skill.name} width={24} height={24} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 