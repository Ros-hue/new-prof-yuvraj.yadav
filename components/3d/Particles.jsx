"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Particles() {
  const pointsRef = useRef(null);
  const particles = useMemo(() => {
    const values = new Float32Array(1800);

    for (let index = 0; index < values.length; index += 3) {
      values[index] = (Math.random() - 0.5) * 22;
      values[index + 1] = (Math.random() - 0.5) * 14;
      values[index + 2] = (Math.random() - 0.5) * 18;
    }

    return values;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) {
      return;
    }

    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.035;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.08;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[particles, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#71d9ff" size={0.045} sizeAttenuation transparent opacity={0.85} />
    </points>
  );
}
