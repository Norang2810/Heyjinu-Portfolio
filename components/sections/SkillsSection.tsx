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
          <Canvas camera={{ position: [15, 15, 15], fov: 50 }}>
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
  const groupRef = useRef<THREE.Group>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  const spring = useSpring({
    rotation: [0, activeIndex * (Math.PI / 3), 0],
    config: { mass: 5, tension: 400, friction: 50 },
  });

  const boxSize = 6;
  const pixelsPerUnit = 80;
  const cardSize = boxSize * pixelsPerUnit;

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
      ref={groupRef}
      rotation={to(spring.rotation, (x, y, z) => [x, y, z])}
    >
      {Object.entries(skillsData).map(([category, skills], index) => (
        <group
          key={category}
          position={faces[index].position}
          rotation={faces[index].rotation}
        >
          <Html
            transform
            distanceFactor={1}
            occlude
            style={{
              width: `${cardSize}px`,
              height: `${cardSize}px`,
              padding: '12px',
              background: 'rgba(255, 255, 255, 0.98)',
              borderRadius: '0px',
              transform: 'translate(-50%, -50%)',
              transition: 'all 0.3s ease',
              opacity: activeIndex === index ? 1 : 0.9,
              boxShadow: 'none',
              pointerEvents: 'auto',
              border: '1px solid rgba(0, 0, 0, 0.1)',
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