import Image from "next/image";
import { skillsData } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="section py-20 bg-yellow-500" >
      <div className="max-w-4xl mx-auto px-4" data-aos="fade-up">
        <h2 className="text-7xl font-bold mb-12 text-center text-white">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 " >
          <SkillCategory title="Frontend" skills={skillsData.frontend} />
          <SkillCategory title="Backend" skills={skillsData.backend} />
          <SkillCategory title="Deployment" skills={skillsData.deployment} />
          <SkillCategory title="Community" skills={skillsData.community} />
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
      <div className="space-y-6">
        {skills.map((skill) => (
          <div key={skill.name} className="flex items-center gap-4">
            <div className="relative w-8 h-8">
              <Image 
                src={skill.icon} 
                alt={skill.name} 
                fill
                className="object-contain"
                sizes="(max-width: 768px) 24px, 32px"
                priority
              />
            </div>
            <span className="text-lg">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 