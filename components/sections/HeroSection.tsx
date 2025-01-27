"use client";

import { useState, useEffect } from "react";
import { Glasses } from "lucide-react";

export function HeroSection() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    // 초기 window.innerHeight 설정
    setWindowHeight(window.innerHeight);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrollPosition(scrollTop);
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    // 스크롤과 리사이즈 이벤트 등록
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // 컴포넌트 언마운트 시 이벤트 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getText = () => {
    if (scrollPosition < windowHeight * 0.5) {
      return {
        title: "안녕하세요!",
        description: "풀스택 개발자입니다.",
        active: 0,
      };
    } else if (scrollPosition < windowHeight * 1.5) {
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
        {/* 스크롤 안내 텍스트 - 섹션 상단에 배치 */}
        <div 
          className="absolute top-32 left-1/2 -translate-x-1/2"
          style={{
            animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
          }}
        >
          <p className="text-sm font-light text-white/70 flex items-center gap-2">
            스크롤해서 진행해주세요! <span className="inline-block animate-bounce">↓</span>
          </p>
        </div>

        <div className="text-center relative">
          {/* 배경 안경 아이콘 */}
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
      <section className="h-[200vh] flex flex-col items-center justify-center bg-gray-100">
        <h2 className="text-3xl font-bold"></h2>
        
      </section>
    </>
  );
}
