"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { useSpring, animated, to } from "@react-spring/three";
import * as THREE from "three";
import { Dialog } from "@headlessui/react";
import type { ThreeEvent } from "@react-three/fiber";

// 각 면에 표시될 컴포넌트들
import { FrontendSkills } from "./cube-faces/FrontendSkills";
import { BackendSkills } from "./cube-faces/BackendSkills";
import { DatabaseSkills } from "./cube-faces/DatabaseSkills";
import { DeploymentSkills } from "./cube-faces/DeploymentSkills";
import { VersionControlSkills } from "./cube-faces/VersionControlSkills";
import { ToolsSkills } from "./cube-faces/ToolsSkills";

// 각 면의 정보 매핑
const faceComponents = [
  { Component: FrontendSkills, label: "Frontend", color: "#4A90E2" },
  { Component: BackendSkills, label: "Backend", color: "#50C878" },
  { Component: DatabaseSkills, label: "Database", color: "#F39C12" },
  { Component: DeploymentSkills, label: "Deployment", color: "#E74C3C" },
  { Component: VersionControlSkills, label: "Version Control", color: "#9B59B6" },
  { Component: ToolsSkills, label: "Tools", color: "#34495E" }
];

export function SkillsSection() {
  const [visitedFaces, setVisitedFaces] = useState<number[]>([]);
  const [selectedFace, setSelectedFace] = useState<number | null>(null);
  const SelectedComponent = selectedFace !== null ? faceComponents[selectedFace].Component : null;

  const handleFaceClick = (index: number) => {
    setSelectedFace(index);
    if (!visitedFaces.includes(index)) {
      setVisitedFaces(prev => [...prev, index]);
    }
  };

  const remainingFaces = 6 - visitedFaces.length;

  return (
    <section id="skills" className="section py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4" data-aos="fade-up">
        <h2 className="text-7xl font-bold mb-16 text-center text-white">Skills</h2>
        <div className="text-center mb-8">
          <div className="text-white/80 animate-pulse mb-2">
            클릭하여 각 스킬 영역을 확인해보세요
          </div>
          {remainingFaces > 0 && (
            <div className="text-white/60 text-sm">
              아직 {remainingFaces}개의 영역이 남아있습니다!
            </div>
          )}
          {/* 진행 상황 표시 */}
          <div className="flex justify-center gap-2 mt-4">
            {faceComponents.map((face, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  visitedFaces.includes(index) 
                    ? 'bg-white' 
                    : 'bg-white/30'
                }`}
                title={face.label}
              />
            ))}
          </div>
        </div>
        <div className="h-[800px] relative">
          <Canvas camera={{ position: [12, 12, 12], fov: 45 }}>
            <ambientLight intensity={0.7} />
            <pointLight position={[10, 10, 10]} intensity={2} />
            <SkillsCube onFaceClick={handleFaceClick} visitedFaces={visitedFaces} />
            <OrbitControls 
              enableZoom={false}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI * 3 / 4}
            />
          </Canvas>
        </div>

        <Dialog 
          open={selectedFace !== null} 
          onClose={() => setSelectedFace(null)}
          className="relative z-50"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="mx-auto max-w-3xl w-full bg-white rounded-xl shadow-xl">
              <div className="relative p-6">
                <button
                  onClick={() => setSelectedFace(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                  <span className="sr-only">Close</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                {selectedFace !== null && (
                  <h3 className="text-2xl font-bold mb-4 text-center">
                    {faceComponents[selectedFace].label}
                  </h3>
                )}
                <div className="mt-2">
                  {SelectedComponent && <SelectedComponent />}
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
    </section>
  );
}

function SkillsCube({ 
  onFaceClick, 
  visitedFaces 
}: { 
  onFaceClick: (index: number) => void;
  visitedFaces: number[];
}) {
  const groupRef = useRef<THREE.Group>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  // 흔들림 애니메이션을 위한 spring 추가
  const wobbleSpring = useSpring({
    from: { wobble: 0 },
    to: async (next) => {
      while (true) {
        await next({ wobble: 0.1 });
        await next({ wobble: -0.1 });
      }
    },
    config: {
      mass: 1,
      tension: 120,
      friction: 14,
    },
    // 회전 중에는 흔들림 효과 비활성화
    pause: isRotating,
  });

  const spring = useSpring({
    rotation: [0, activeIndex * (Math.PI / 3), 0],
    config: { 
      mass: 5, 
      tension: 400, 
      friction: isRotating ? 50 : 100,
    },
    onChange: () => {
      if (isRotating) {
        const timer = setTimeout(() => {
          setIsRotating(false);
        }, 1000);
        return () => clearTimeout(timer);
      }
    },
  });

  const cubeSize = 8;

  const faces: Array<{
    position: THREE.Vector3Tuple;
    rotation: THREE.EulerTuple;
  }> = [
    { position: [0, 0, cubeSize/2], rotation: [0, 0, 0] },         // Frontend (정면)
    { position: [cubeSize/2, 0, 0], rotation: [0, Math.PI/2, 0] }, // Backend (오른쪽)
    { position: [0, 0, -cubeSize/2], rotation: [0, Math.PI, 0] },  // Database (뒷면)
    { position: [-cubeSize/2, 0, 0], rotation: [0, -Math.PI/2, 0] },// Deployment (왼쪽)
    { position: [0, cubeSize/2, 0], rotation: [-Math.PI/2, 0, 0] }, // Version Control (위)
    { position: [0, -cubeSize/2, 0], rotation: [Math.PI/2, 0, 0] }  // Tools (아래)
  ];

  return (
    <animated.group
      ref={groupRef}
      rotation={to(
        [spring.rotation, wobbleSpring.wobble],
        ([x, y, z], wobble) => [x + wobble, y, z]
      )}
    >
      {faces.map((face, index) => {
        const { color } = faceComponents[index];
        const isVisited = visitedFaces.includes(index);
        
        return (
          <group
            key={index}
            position={face.position}
            rotation={face.rotation}
            onClick={(e: ThreeEvent<MouseEvent>) => {
              e.stopPropagation();
              if (!isVisited) {
                setIsRotating(true); // 클릭 시 회전 상태 활성화
                setActiveIndex(index);
                onFaceClick(index);
              }
            }}
            style={{ cursor: isVisited ? 'default' : 'pointer' }}
          >
            <mesh>
              <planeGeometry args={[cubeSize, cubeSize]} />
              <meshStandardMaterial 
                color={color}
                side={THREE.DoubleSide}
                transparent
                opacity={isVisited ? 0.5 : 0.8}
                emissive={isVisited ? "#000000" : "#ffffff"}
                emissiveIntensity={isVisited ? 0 : 0.2}
              />
            </mesh>
            {!isVisited && (
              <Html
                center
                style={{
                  pointerEvents: 'none',
                  userSelect: 'none',
                }}
              >
                <div 
                  className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm text-white text-xl font-bold animate-pulse"
                  style={{
                    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                  }}
                >
                  {faceComponents[index].label}
                </div>
              </Html>
            )}
          </group>
        );
      })}
    </animated.group>
  );
} 