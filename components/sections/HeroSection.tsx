"use client";

import { Glasses } from 'lucide-react';

export function HeroSection() {
  return (
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
  );
} 