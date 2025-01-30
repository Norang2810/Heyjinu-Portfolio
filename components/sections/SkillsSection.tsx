"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { useSpring, animated, to } from "@react-spring/three";
import { skillsData } from "@/data/skills";
import * as THREE from "three";

export function SkillsSection() {
  return (
    <section id="skills" className="section py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4" data-aos="fade-up">
        <h2 className="text-7xl font-bold mb-16 text-center text-white">Skills</h2>
        <div className="h-[800px] relative">
          <Canvas camera={{ position: [25, 15, 25], fov: 40 }}>
            <ambientLight intensity={0.7} />
            <pointLight position={[10, 10, 10]} intensity={2} />
            <spotLight position={[0, 10, 0]} intensity={1} />
            <group position={[0, 0, 0]}>
              <SkillsCube />
            </group>
            <OrbitControls 
              enableZoom={false}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI * 3 / 4}
              rotateSpeed={0.5}
            />
          </Canvas>
        </div>
      </div>
    </section>
  );
}

function SkillsCube() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  const spring = useSpring({
    rotation: [0, activeIndex * (Math.PI / 3), 0],
    config: { mass: 5, tension: 400, friction: 50 },
  });

  const boxSize = 12;
  const cardWidth = boxSize * 0.9;
  const cardHeight = cardWidth;

  const faces = [
    { position: [0, 0, boxSize/2], rotation: [0, 0, 0] },
    { position: [boxSize/2, 0, 0], rotation: [0, Math.PI/2, 0] },
    { position: [0, 0, -boxSize/2], rotation: [0, Math.PI, 0] },
    { position: [-boxSize/2, 0, 0], rotation: [0, -Math.PI/2, 0] },
    { position: [0, boxSize/2, 0], rotation: [-Math.PI/2, 0, 0] },
    { position: [0, -boxSize/2, 0], rotation: [Math.PI/2, 0, 0] },
  ];

  const rotateFace = (index: number) => {
    if (!isRotating) {
      setIsRotating(true);
      setActiveIndex(index);
      setTimeout(() => setIsRotating(false), 500);
    }
  };

  return (
    <animated.group
      ref={meshRef}
      rotation={to(spring.rotation, (x, y, z) => [x, y, z])}
    >
      <mesh>
        <boxGeometry args={[boxSize, boxSize, boxSize]} />
        <meshPhysicalMaterial
          color="#ffffff"
          roughness={0.2}
          metalness={0.1}
          transparent
          opacity={0.05}
        />
      </mesh>
      {Object.entries(skillsData).map(([category, skills], index) => (
        <group
          key={category}
          position={faces[index].position}
          rotation={faces[index].rotation}
        >
          <Html
            transform
            distanceFactor={1.2}
            style={{
              width: `${cardWidth * 100}px`,
              height: `${cardHeight * 100}px`,
              padding: '16px',
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '16px',
              transform: 'translate(-50%, -50%)',
              transition: 'all 0.3s ease',
              opacity: activeIndex === index ? 1 : 0.85,
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            }}
            className="skill-card"
            onClick={() => rotateFace((index + 1) % 6)}
          >
            <div className="h-full flex flex-col">
              <h3 className="text-lg font-bold mb-3 text-center text-gray-800">
                {category}
              </h3>
              <div className="flex-1 overflow-y-auto custom-scrollbar pr-1">
                <div className="grid grid-cols-2 gap-2">
                  {skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center p-2 rounded-lg bg-white/80 hover:bg-white/90 transition-all"
                    >
                      <div className="relative w-8 h-8 mb-1">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={32}
                          height={32}
                          className="object-contain"
                          priority
                          sizes="32px"
                        />
                      </div>
                      <span className="text-xs font-medium text-gray-700 text-center">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Html>
        </group>
      ))}
    </animated.group>
  );
} 