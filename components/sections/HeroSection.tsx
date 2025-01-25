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
      return {
        title: "안녕하세요!",
        description: "풀스택 개발자입니다.",
        active: 0,
      };
    } else if (scrollPosition < window.innerHeight * 1.5) {
      return {
        title: "환영합니다!",
        description: "사용자 경험을 디자인합니다.",
        active: 1,
      };
    } else {
      return {
        title: "함께 일해요!",
        description: "최고의 결과를 만들어냅니다.",
        active: 2,
      };
    }
  };

  const { active } = getText();

  const textSets = [
    { title: "안녕하세요!", description: "풀스택 개발자 박진우입니다!" },
    { title: "환영합니다!", description: "사용자 경험을 디자인합니다." },
    { title: "함께 일해요!", description: "최고의 결과를 만들어냅니다." },
  ];

  return (
    <>
      {/* Hero 섹션 */}
      <section
        id="hero"
        className="h-screen sticky top-0 flex flex-col items-center justify-center to-gray-50 bg-black text-white overflow-hidden"
      >
        <div className="text-center relative">
          {/* 더 큰 배경 안경 아이콘 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-5">
            <Glasses className="w-[80rem] h-[80rem]" />
          </div>

          {/* 텍스트 애니메이션 */}
          <div
            className="relative"
            style={{
              perspective: "1000px",
              transformStyle: "preserve-3d",
            }}
          >
            {textSets.map((text, index) => (
              <div
                key={index}
                className="absolute top-0 left-0 w-full transition-all duration-700"
                style={{
                  opacity: active === index ? 1 : 0,
                  transform: `
                    translateY(${(index - active) * 20}px)
                    translateZ(${active === index ? "50px" : "-50px"})
                    scale(${active === index ? 1 : 0.9})
                  `,
                  pointerEvents: active === index ? "auto" : "none",
                  textShadow:
                    active === index
                      ? "0 0 20px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.1)"
                      : "none",
                }}
              >
                <div className="flex flex-col items-center">
                  <h1 className="text-9xl font-bold mb-4 whitespace-nowrap">
                    {text.title}
                  </h1>
                  <p className="text-3xl text-white/80 whitespace-nowrap">
                    {text.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero 이후 콘텐츠 */}
      <section className="h-[200vh] flex flex-col items-center justify-center bg-gray-100">
        <h2 className="text-3xl font-bold">다음 섹션</h2>
        <p className="text-lg text-gray-600 mt-4">
          Hero 섹션 이후의 콘텐츠입니다.
        </p>
      </section>
    </>
  );
}
