interface Skill {
  name: string;
  icon: string;
}

export const skillsData: Record<string, Skill[]> = {
  frontend: [
    { name: "HTML", icon: "/icons/html5.svg" },
    { name: "CSS", icon: "/icons/css3.svg" },
    { name: "JavaScript", icon: "/icons/javascript.svg" },
    { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
    { name: "TypeScript", icon: "/icons/typescript.svg" },
    { name: "Next.js", icon: "/icons/nextjs.svg" },
  ],
  backend: [
    { name: "Java", icon: "/icons/java.svg" },
    { name: "PHP", icon: "/icons/php.svg" },
    { name: "MySQL", icon: "/icons/mysql.svg" },
  ],
  deployment: [
    { name: "Vercel", icon: "/icons/vercel.svg" },
    { name: "AWS EC2", icon: "/icons/aws.svg" },
  ],
  community: [
    { name: "Git", icon: "/icons/git.svg" },
    { name: "Figma", icon: "/icons/figma.svg" },
  ],
  tools: [
    { name: "Vercel", icon: "/icons/vercel.svg" },
    { name: "AWS EC2", icon: "/icons/aws.svg" },
  ],
  libraries: [
    { name: "Git", icon: "/icons/git.svg" },
    { name: "Figma", icon: "/icons/figma.svg" },
  ]
}; 