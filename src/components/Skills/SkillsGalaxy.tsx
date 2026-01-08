'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text3D } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { skills } from '@/data/portfolio';

function SkillHexagon({ position, skill, index }: any) {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);

    useFrame((state) => {
        if (!meshRef.current) return;

        const time = state.clock.getElapsedTime();

        // Orbit animation
        const radius = 5 + (index % 3) * 2;
        const speed = 0.2 + (index % 5) * 0.1;
        const angle = time * speed + index * 0.5;

        meshRef.current.position.x = Math.cos(angle) * radius;
        meshRef.current.position.z = Math.sin(angle) * radius;
        meshRef.current.position.y = Math.sin(time + index) * 0.5;

        // Rotation
        meshRef.current.rotation.y = time * 0.5;

        // Scale on hover
        const targetScale = hovered ? 1.3 : 1;
        meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    });

    const hexShape = new THREE.Shape();
    const size = 0.5;
    for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const x = Math.cos(angle) * size;
        const y = Math.sin(angle) * size;
        if (i === 0) hexShape.moveTo(x, y);
        else hexShape.lineTo(x, y);
    }
    hexShape.closePath();

    const color = new THREE.Color(
        skill.category === 'Frontend' ? '#00f0ff' :
            skill.category === 'Backend' ? '#ff00ff' :
                skill.category === 'AI/ML' ? '#8b00ff' :
                    skill.category === 'Database' ? '#00ff88' :
                        '#ff0080'
    );

    return (
        <mesh
            ref={meshRef}
            position={position}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <extrudeGeometry args={[hexShape, { depth: 0.2, bevelEnabled: true, bevelThickness: 0.05 }]} />
            <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={hovered ? 2 : 0.5}
                transparent
                opacity={0.8}
            />
        </mesh>
    );
}

function SkillsGalaxy3D() {
    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00f0ff" />

            {skills.map((skill, index) => (
                <SkillHexagon
                    key={skill.name}
                    skill={skill}
                    index={index}
                    position={[0, 0, 0]}
                />
            ))}

            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </>
    );
}

export default function SkillsGalaxy() {
    const [selectedSkill, setSelectedSkill] = useState<typeof skills[0] | null>(null);

    return (
        <section className="min-h-screen bg-black py-20 px-6 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/20 to-black" />

            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-6xl font-black gradient-text neon-glow mb-4">
                        SKILLS GALAXY
                    </h2>
                    <p className="text-xl text-cyan-400">
                        Explore my technical universe
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className="glass p-4 rounded-lg cursor-pointer group"
                            onClick={() => setSelectedSkill(skill)}
                        >
                            <h3 className="text-lg font-bold text-cyan-400 mb-2 group-hover:text-magenta-400 transition-colors">
                                {skill.name}
                            </h3>
                            <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
                                <motion.div
                                    className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-magenta-500"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.proficiency}%` }}
                                    transition={{ duration: 1, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                />
                            </div>
                            <p className="text-sm text-gray-400">{skill.category}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Add missing import
import { useState } from 'react';
