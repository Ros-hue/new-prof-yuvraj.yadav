"use client";

import { useRef } from "react";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function Orb({ position, scale, color, speed, distortion }) {
  const ref = useRef(null);

  useFrame((state) => {
    if (!ref.current) {
      return;
    }
    ref.current.rotation.x = state.clock.elapsedTime * speed;
    ref.current.rotation.y = state.clock.elapsedTime * speed * 1.2;
  });

  return (
    <Float speed={2} rotationIntensity={1.1} floatIntensity={1.6}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 6]} />
        <MeshDistortMaterial
          color={color}
          roughness={0.12}
          metalness={0.45}
          distort={distortion}
          speed={2.1}
          emissive={color}
          emissiveIntensity={0.4}
        />
      </mesh>
    </Float>
  );
}

export default function FloatingCluster({ progress }) {
  return (
    <group position={[progress * 1.4, -0.3, -0.4]}>
      <Orb position={[-2.8, 1.3, -1.4]} scale={1.15} color="#57d1ff" speed={0.25} distortion={0.35} />
      <Orb position={[1.8, -0.2, -2.1]} scale={0.78} color="#7c5cff" speed={0.3} distortion={0.45} />
      <Float speed={2.4} rotationIntensity={1.4} floatIntensity={2}>
        <mesh position={[0.25, 1.65, -0.8]} rotation={[0.8, 0.4, 0.2]}>
          <torusKnotGeometry args={[0.7, 0.18, 180, 24]} />
          <meshStandardMaterial
            color="#26f0c1"
            emissive="#26f0c1"
            emissiveIntensity={0.38}
            metalness={0.6}
            roughness={0.15}
          />
        </mesh>
      </Float>
      <Float speed={1.6} rotationIntensity={1.1} floatIntensity={1.6}>
        <mesh position={[3.4, 1.7, -3.4]} rotation={[0.7, 0.2, 1]}>
          <octahedronGeometry args={[0.8]} />
          <meshStandardMaterial
            color="#f7fbff"
            emissive="#59d0ff"
            emissiveIntensity={0.2}
            metalness={0.55}
            roughness={0.08}
          />
        </mesh>
      </Float>
    </group>
  );
}
