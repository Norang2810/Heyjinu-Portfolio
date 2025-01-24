"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Glasses } from 'lucide-react';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="section flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-50">
        <div className="text-center" data-aos="fade-up">
          <Glasses className="w-24 h-24 mx-auto mb-8 text-primary" />
          <h1 className="text-5xl font-bold mb-4">안녕하세요!</h1>
          <p className="text-xl text-gray-600 mb-8">풀스택 개발자입니다.</p>
          <div className="flex gap-4 justify-center">
            <a 
              href="#about"
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              자세히 보기
            </a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="section bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">기본 정보</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="font-medium min-w-24">이름:</span>
                    <span>홍길동</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-medium min-w-24">생년월일:</span>
                    <span>1990.01.01</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-medium min-w-24">이메일:</span>
                    <span>example@email.com</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">학력</h3>
                <ul className="space-y-3">
                  <li>
                    <p className="font-medium">OO대학교</p>
                    <p className="text-gray-600">컴퓨터공학과 (2015-2019)</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">자기소개</h3>
              <p className="text-gray-600 leading-relaxed">
                안녕하세요. 저는 3년차 풀스택 개발자입니다. 
                웹 개발에 대한 깊은 관심과 열정을 가지고 있으며, 
                새로운 기술을 배우고 적용하는 것을 좋아합니다. 
                사용자 경험을 개선하고 효율적인 코드를 작성하는 것에 
                큰 가치를 두고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section py-20">
        <div className="max-w-4xl mx-auto px-4" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-6 text-center">Frontend</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Image src="/icons/react.svg" alt="React" width={24} height={24} />
                  <span>React.js</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/icons/typescript.svg" alt="TypeScript" width={24} height={24} />
                  <span>TypeScript</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/icons/nextjs.svg" alt="Next.js" width={24} height={24} />
                  <span>Next.js</span>
                </div>
                {/* 추가 프론트엔드 스킬 */}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-6 text-center">Backend</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Image src="/icons/nodejs.svg" alt="Node.js" width={24} height={24} />
                  <span>Node.js</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/icons/python.svg" alt="Python" width={24} height={24} />
                  <span>Python</span>
                </div>
                {/* 추가 백엔드 스킬 */}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-6 text-center">Database & Tools</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Image src="/icons/mongodb.svg" alt="MongoDB" width={24} height={24} />
                  <span>MongoDB</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/icons/git.svg" alt="Git" width={24} height={24} />
                  <span>Git</span>
                </div>
                {/* 추가 도구 및 데이터베이스 */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Archiving Section */}
      <section id="archiving" className="section bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-12 text-center">Archiving</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* GitHub */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <Image src="/icons/github.svg" alt="GitHub" width={32} height={32} />
                <h3 className="text-xl font-semibold">GitHub</h3>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600">소스 코드 저장소</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>프로젝트 소스 코드</li>
                  <li>코딩 연습 저장소</li>
                  <li>40개 이상의 레포지토리</li>
                </ul>
                <a 
                  href="https://github.com/Norang2810" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block text-primary hover:underline"
                >
                  GitHub 방문하기 →
                </a>
              </div>
            </div>

            {/* Blog */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <Image src="/icons/blog.svg" alt="Blog" width={32} height={32} />
                <h3 className="text-xl font-semibold">Technical Blog</h3>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600">개발 지식 공유 및 기록</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>프로젝트 회고록</li>
                  <li>기술 학습 내용 정리</li>
                  <li>월 1000+ 방문자</li>
                </ul>
                <a 
                  href="https://your-blog-url.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block text-primary hover:underline"
                >
                  블로그 방문하기 →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section py-20">
        <div className="max-w-4xl mx-auto px-4" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <div className="space-y-12">
            {/* Project 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-64 bg-gray-100 rounded-lg overflow-hidden">
                  <Image 
                    src="/projects/project1.png" 
                    alt="Project 1" 
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">프로젝트 제목 1</h3>
                  <p className="text-gray-600">
                    프로젝트에 대한 간단한 설명이 들어갑니다.
                    주요 기능과 사용된 기술 스택을 설명합니다.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">TypeScript</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Node.js</span>
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href="#" 
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub →
                    </a>
                    <a 
                      href="#" 
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

            {/* Project 2 */}
            {/* 위와 같은 형식으로 추가 프로젝트 카드 구현 */}
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section id="career" className="section bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-12 text-center">Career</h2>
          <div className="space-y-8">
            {/* Career Item 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 relative flex-shrink-0">
                  <Image 
                    src="/companies/company1.png" 
                    alt="Company 1" 
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">회사명 1</h3>
                  <p className="text-gray-600 mb-2">직책 | 2020.01 - 현재</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>주요 업무 내용 1</li>
                    <li>주요 업무 내용 2</li>
                    <li>주요 업무 내용 3</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Career Item 2 */}
            {/* 위와 같은 형식으로 추가 경력 카드 구현 */}
          </div>
        </div>
      </section>
    </main>
  );
}
