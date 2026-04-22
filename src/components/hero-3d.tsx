"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points } from "@react-three/drei/core/Points";
import { PointMaterial } from "@react-three/drei/core/PointMaterial";
import { useMemo, useRef, Suspense } from "react";
import * as THREE from "three";

function Particles({ count = 2500 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Distribute in a sphere, biased outward
      const r = 2.5 + Math.random() * 3.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.04;
    ref.current.rotation.x += delta * 0.015;
    // Gentle mouse parallax
    const { mouse } = state;
    ref.current.rotation.z = THREE.MathUtils.lerp(
      ref.current.rotation.z,
      mouse.x * 0.15,
      0.03
    );
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#22d3ee"
        size={0.018}
        sizeAttenuation
        depthWrite={false}
        opacity={0.85}
      />
    </Points>
  );
}

function Rings() {
  const g1 = useRef<THREE.Group>(null);
  const g2 = useRef<THREE.Group>(null);
  const g3 = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (g1.current) g1.current.rotation.z += delta * 0.12;
    if (g2.current) g2.current.rotation.z -= delta * 0.08;
    if (g3.current) g3.current.rotation.z += delta * 0.05;
  });

  return (
    <>
      <group ref={g1} rotation={[Math.PI / 3, 0, 0]}>
        <mesh>
          <torusGeometry args={[2.2, 0.005, 2, 128]} />
          <meshBasicMaterial color="#22d3ee" transparent opacity={0.35} />
        </mesh>
      </group>
      <group ref={g2} rotation={[Math.PI / 4, Math.PI / 3, 0]}>
        <mesh>
          <torusGeometry args={[2.8, 0.004, 2, 128]} />
          <meshBasicMaterial color="#0ea5e9" transparent opacity={0.25} />
        </mesh>
      </group>
      <group ref={g3} rotation={[Math.PI / 6, Math.PI / 4, Math.PI / 8]}>
        <mesh>
          <torusGeometry args={[3.4, 0.003, 2, 128]} />
          <meshBasicMaterial color="#22d3ee" transparent opacity={0.18} />
        </mesh>
      </group>
    </>
  );
}

export function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.5} />
      <Suspense fallback={null}>
        <Particles />
        <Rings />
      </Suspense>
    </Canvas>
  );
}
