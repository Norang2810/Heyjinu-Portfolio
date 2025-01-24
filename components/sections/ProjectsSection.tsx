import Image from "next/image";

export function ProjectsSection() {
  return (
    <section id="projects" className="section py-20">
      <div className="max-w-4xl mx-auto px-4" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="space-y-12">
          <ProjectCard 
            title="프로젝트 제목 1"
            description="프로젝트에 대한 간단한 설명이 들어갑니다. 주요 기능과 사용된 기술 스택을 설명합니다."
            image="/projects/project1.png"
            technologies={["React", "TypeScript", "Node.js"]}
            githubUrl="#"
            demoUrl="#"
          />
          {/* 추가 프로젝트 카드 */}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
}

function ProjectCard({ title, description, image, technologies, githubUrl, demoUrl }: ProjectCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative h-64 bg-gray-100 rounded-lg overflow-hidden">
          <Image 
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-gray-600">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a 
              href={githubUrl}
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub →
            </a>
            <a 
              href={demoUrl}
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 