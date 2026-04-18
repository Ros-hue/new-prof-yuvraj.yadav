"use client";

import { useFrame, useThree } from "@react-three/fiber";

function lerp(start, end, alpha) {
  return start + (end - start) * alpha;
}

export default function CameraRig({ progress, introComplete }) {
  const { camera, pointer } = useThree();

  useFrame(() => {
    const baseZ = introComplete ? 8.4 - progress * 2.4 : 15;
    const baseY = 0.8 - progress * 1.5;
    const baseX = progress * 1.4;
    camera.position.x = lerp(camera.position.x, baseX + pointer.x * 0.9, 0.05);
    camera.position.y = lerp(camera.position.y, baseY + pointer.y * 0.45, 0.05);
    camera.position.z = lerp(camera.position.z, baseZ, 0.04);
    camera.lookAt(progress * 2.2, -0.1, 0);
  });

  return null;
}
