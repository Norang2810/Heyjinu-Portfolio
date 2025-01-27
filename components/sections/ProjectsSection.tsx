import Image from "next/image";

export function ProjectsSection() {
  return (
    <section id="projects" className="section py-20">
      <div className="max-w-4xl mx-auto px-4" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="space-y-12">
          <ProjectCard 
            title="해외축구 통합 커뮤니티 프로젝트"
            description="교내활동 마이크로디그리 자바 풀스택 과정에서 만들었던 프로젝트"
            image="/public/pl.jpg"
            technologies={["HTML", "CSS", "JavaScript","Java","MySQL","Spring-boot","Git","GitHub","AWS"]}
            githubUrl="https://github.com/Norang2810/Football-Project"
            demoUrl="http://3.107.177.97:8080"
          />
          {/* 추가 프로젝트 카드 */}
          <ProjectCard 
            title="추모게시판"
            description="타입스크립트 언어공부를 위해 만든 프로젝트"
            image="/public/pl.jpg"
            technologies={["TypeScript","Next.js","Tailwind","vercel"]}
            githubUrl="https://github.com/Norang2810/Memorial-Project"
            demoUrl="https://jpmemorial-project.vercel.app/"
          />
          <ProjectCard 
            title="Heyjinu포트폴리오"
            description="취준생의 포트폴리오 프로젝트"
            image="/public/pl.jpg"
            technologies={["TypeScript","Next.js","Tailwind","vercel"]}
            githubUrl="https://github.com/Norang2810/Heyjinu-Portfolio"
            demoUrl="http://3.107.177.97:8080"
          />
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