import Image from "next/image";

export function CareerSection() {
  return (
    <section id="career" className="section bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-12 text-center">Career</h2>
        <div className="space-y-8">
          <CareerCard 
            company="무직"
            position="무직"
            period="해당없음"
            logo="/companies/company1.png"
            responsibilities={[
              "주요 업무 내용 1",
              "주요 업무 내용 2",
              "주요 업무 내용 3"
            ]}
          />
          {/* 추가 경력 카드 */}
        </div>
      </div>
    </section>
  );
}

interface CareerCardProps {
  company: string;
  position: string;
  period: string;
  logo: string;
  responsibilities: string[];
}

function CareerCard({ company, position, period, logo, responsibilities }: CareerCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 relative flex-shrink-0">
          <Image 
            src={logo}
            alt={company}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold">{company}</h3>
          <p className="text-gray-600 mb-2">{position} | {period}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 