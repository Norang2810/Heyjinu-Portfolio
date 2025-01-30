import Image from "next/image";
import { skillsData } from "@/data/skills";

export function FrontendSkills() {
  const skills = skillsData.frontend;
  
  return (
    <div className="h-full p-4 flex flex-col">
      <h3 className="text-xl font-bold mb-4">Frontend</h3>
      <div className="grid grid-cols-2 gap-2">
        {skills.map((skill) => (
          <div key={skill.name} className="flex items-center gap-2 p-2 bg-white/80 rounded-lg">
            <Image src={skill.icon} alt={skill.name} width={32} height={32} />
            <span className="text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 