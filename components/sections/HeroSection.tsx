"use client";

import { useState, useEffect } from "react";
import { Glasses } from "lucide-react";

export function HeroSection() {
  // 현재 스크롤 위치 상태
  const [scrollPosition, setScrollPosition] = useState(0);

  // 스크롤 이벤트 핸들러
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // 페이지 전체의 스크롤 위치
      setScrollPosition(scrollTop);
    };

    // 스크롤 이벤트 등록
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트 언마운트 시 이벤트 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 스크롤 위치에 따른 텍스트
  const getText = () => {
    if (scrollPosition < window.innerHeight * 0.5) {
      return { title: "안녕하세요!", description: "풀스택 개발자입니다." };
    } else if (scrollPosition < window.innerHeight * 1.5) {
      return { title: "환영합니다!", description: "사용자 경험을 디자인합니다." };
    } else {
      return { title: "함께 일해요!", description: "최고의 결과를 만들어냅니다." };
    }
  };

  const { title, description } = getText();

  return (
    <>
      {/* Hero 섹션 */}
      <section
        id="hero"
        className="h-screen sticky top-0 flex flex-col items-center justify-center  to-gray-50 bg-black text-white"
      >
        <div className="text-center relative">
          {/* 안경 아이콘을 더 크게 표시하고 애니메이션 추가 */}
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 opacity-10"
            style={{
              transform: `translate(-50%, -50%) scale(${1 + scrollPosition * 0.001})`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            <Glasses className="w-[40rem] h-[40rem]" />
          </div>
          
          {/* 메인 안경 아이콘 */}
          <Glasses 
            className="w-40 h-40 mx-auto mb-8 text-primary animate-pulse" 
            style={{
              filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.3))'
            }}
          />
          <h1 className="text-7xl font-bold mb-6">{title}</h1>
          <p className="text-2xl text-white/80 mb-8">{description}</p>
        </div>
      </section>

      {/* Hero 이후 콘텐츠 */}
      <section className="h-[200vh] flex flex-col items-center justify-center bg-gray-100">
        <h2 className="text-3xl font-bold">다음 섹션</h2>
        <p className="text-lg text-gray-600 mt-4">Hero 섹션 이후의 콘텐츠입니다.</p>
      </section>
    </>
  );
}
