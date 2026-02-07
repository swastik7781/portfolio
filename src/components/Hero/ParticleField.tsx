
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function ParticleSystem() {
  const particlesRef = useRef<THREE.Points>(null);

  // Create particle positions
  const particleCount = 10000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return pos;
  }, []);

  // Create particle colors
  const colors = useMemo(() => {
    const col = new Float32Array(particleCount * 3);
    const neonColors = [
      [0, 0.94, 1],      // cyan
      [1, 0, 1],         // magenta
      [0.54, 0, 1],      // violet
      [0, 1, 0.53],      // green
    ];

    for (let i = 0; i < particleCount; i++) {
      const colorIndex = Math.floor(Math.random() * neonColors.length);
      const color = neonColors[colorIndex];
      col[i * 3] = color[0];
      col[i * 3 + 1] = color[1];
      col[i * 3 + 2] = color[2];
    }
    return col;
  }, []);

  // Mouse move handler
  useFrame((state) => {
    if (!particlesRef.current) return;

    const time = state.clock.getElapsedTime();

    // Rotate particle system
    particlesRef.current.rotation.y = time * 0.05;
    particlesRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;

    // Update particle positions based on mouse
    const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      // Wave motion
      positions[i3 + 1] += Math.sin(time + positions[i3]) * 0.001;

      // Spiral motion
      const angle = time * 0.5 + i * 0.01;
      positions[i3] += Math.cos(angle) * 0.001;
      positions[i3 + 2] += Math.sin(angle) * 0.001;
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function ParticleField() {
  return (
    <div className="fixed inset-0 z-[-1]">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ParticleSystem />
      </Canvas>
    </div>
  );
}
