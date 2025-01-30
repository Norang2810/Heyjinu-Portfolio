import Image from "next/image";
import { skillsData } from "@/data/skills";

export function DatabaseSkills() {
  const skills = skillsData.database;
  
  return (
    <div className="h-full p-4 flex flex-col">
      <h3 className="text-xl font-bold mb-4">Database</h3>
      <div className="grid grid-cols-2 gap-2">
        {skills.map((skill) => (
          <div key={skill.name} className="flex items-center gap-2 p-2 bg-white/80 rounded-lg">
            <Image src={skill.icon} alt={skill.name} width={32} height={32} />
            <div>
              <span className="text-sm font-medium block">{skill.name}</span>
              <span className="text-xs text-gray-500">{skill.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 