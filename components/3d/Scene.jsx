"use client";

import { Canvas } from "@react-three/fiber";
import CameraRig from "@/components/3d/CameraRig";
import FloatingCluster from "@/components/3d/FloatingCluster";
import Lights from "@/components/3d/Lights";
import Particles from "@/components/3d/Particles";

export default function Scene({ progress, introComplete }) {
  return (
    <Canvas camera={{ position: [0, 0.8, 15], fov: 42 }} dpr={[1, 1.5]}>
      <color attach="background" args={["#02050d"]} />
      <fog attach="fog" args={["#02050d", 8, 20]} />
      <Lights />
      <CameraRig progress={progress} introComplete={introComplete} />
      <Particles />
      <FloatingCluster progress={progress} />
    </Canvas>
  );
}
