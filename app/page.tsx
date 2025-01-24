"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ArchivingSection } from "@/components/sections/ArchivingSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CareerSection } from "@/components/sections/CareerSection";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ArchivingSection />
      <ProjectsSection />
      <CareerSection />
    </main>
  );
}
