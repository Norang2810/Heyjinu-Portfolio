import Image from "next/image";

export function ArchivingSection() {
  return (
    <section id="archiving" className="section bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-12 text-center">Archiving</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ArchiveCard 
            title="GitHub"
            icon="/icons/github.svg"
            description="소스 코드 저장소"
            items={[
              "프로젝트 소스 코드",
              "코딩 연습 저장소",
              "40개 이상의 레포지토리"
            ]}
            link="https://github.com/Norang2810"
            linkText="GitHub 방문하기 →"
          />
          <ArchiveCard 
            title="Technical Blog"
            icon="/icons/blog.svg"
            description="개발 지식 공유 및 기록"
            items={[
              "프로젝트 회고록",
              "기술 학습 내용 정리",
              "월 1000+ 방문자"
            ]}
            link="https://your-blog-url.com"
            linkText="블로그 방문하기 →"
          />
        </div>
      </div>
    </section>
  );
}

interface ArchiveCardProps {
  title: string;
  icon: string;
  description: string;
  items: string[];
  link: string;
  linkText: string;
}

function ArchiveCard({ title, icon, description, items, link, linkText }: ArchiveCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center gap-4 mb-6">
        <Image src={icon} alt={title} width={32} height={32} />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="space-y-4">
        <p className="text-gray-600">{description}</p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-primary hover:underline"
        >
          {linkText}
        </a>
      </div>
    </div>
  );
} 