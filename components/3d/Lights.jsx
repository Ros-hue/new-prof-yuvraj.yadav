"use client";

export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.9} color="#9cc6ff" />
      <directionalLight position={[5, 6, 4]} intensity={1.8} color="#80cfff" />
      <pointLight position={[-4, -2, 3]} intensity={22} distance={18} color="#7c5cff" />
      <pointLight position={[3, 2, 6]} intensity={18} distance={16} color="#26f0c1" />
    </>
  );
}
