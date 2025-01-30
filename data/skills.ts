interface Skill {
  name: string;
  icon: string;
  category?: string;
}

export const skillsData: Record<string, Skill[]> = {
  frontend: [
    // Languages
    { name: "HTML", icon: "/icons/html.png", category: "Language" },
    { name: "CSS", icon: "/icons/css.png", category: "Language" },
    { name: "JavaScript", icon: "/icons/javascript.svg", category: "Language" },
    { name: "TypeScript", icon: "/icons/typescript.svg", category: "Language" },
    // Frameworks & Libraries
    { name: "React", icon: "/icons/react.svg", category: "Framework" },
    { name: "Next.js", icon: "/icons/nextjs.svg", category: "Framework" },
    { name: "TailwindCSS", icon: "/icons/tailwindCSS.png", category: "Framework" },
    { name: "@react-three/fiber", icon: "/icons/threejs.png", category: "Library" },
    { name: "Lucide React", icon: "/icons/lucide.png", category: "Library" },
  ],
  backend: [
    // Languages
    { name: "Java", icon: "/icons/java.svg", category: "Language" },
    { name: "PHP", icon: "/icons/php.svg", category: "Language" },
    // Framework & ORM
    { name: "Spring Boot", icon: "/icons/springboot.png", category: "Framework" },
    { name: "Prisma", icon: "/icons/prisma.png", category: "ORM" },
  ],
  database: [
    { name: "MySQL", icon: "/icons/mysql.svg", category: "SQL" },
    { name: "PostgreSQL", icon: "/icons/postgresql.png", category: "SQL" },
  ],
  deployment: [
    { name: "AWS EC2", icon: "/icons/ec2.png", category: "Cloud" },
    { name: "Vercel", icon: "/icons/vercel.svg", category: "Platform" },
  ],
  versionControl: [
    { name: "Git", icon: "/icons/git.svg", category: "Version Control" },
    { name: "GitHub", icon: "/icons/github.svg", category: "Platform" },
  ],
  tools: [
    { name: "VS Code", icon: "/icons/vscode.png", category: "Editor" },
    { name: "Cursor AI", icon: "/icons/cursor ai.png", category: "Editor" },
    { name: "Figma", icon: "/icons/figma.png", category: "Design" },
  ],
}; 