'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ParticleField from './ParticleField';
import KatanaBlade from './KatanaBlade';
import FloatingShapes from './FloatingShapes';
import CyberGrid from './CyberGrid';

export default function HeroUniverse() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const nameVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: 'easeOut',
            },
        },
    };

    const taglineVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5,
                ease: 'easeOut',
            },
        },
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: (i: number) => ({
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: 1 + i * 0.2,
                ease: 'easeOut',
            },
        }),
        hover: {
            scale: 1.05,
            boxShadow: '0 0 30px currentColor',
            transition: {
                duration: 0.3,
            },
        },
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Background Effects */}
            <CyberGrid />
            <ParticleField />
            <FloatingShapes count={25} />
            <KatanaBlade />

            {/* Main Content */}
            <motion.div
                className="relative z-20 text-center px-6 max-w-6xl"
                style={{
                    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                    transition: 'transform 0.3s ease-out',
                }}
            >
                {/* Name with Holographic Effect */}
                <motion.h1
                    className="text-7xl md:text-9xl font-black mb-6 gradient-text neon-glow-strong"
                    variants={nameVariants}
                    initial="hidden"
                    animate="visible"
                >
                    SWASTIK
                    <br />
                    BHARDWAJ
                </motion.h1>

                {/* Tagline */}
                <motion.p
                    className="text-2xl md:text-4xl font-light mb-12 text-cyan-400"
                    style={{ fontFamily: 'var(--font-accent)' }}
                    variants={taglineVariants}
                    initial="hidden"
                    animate="visible"
                >
                    Engineering interactive digital experiences.
                </motion.p>

                {/* Role */}
                <motion.p
                    className="text-xl md:text-2xl mb-16 text-white/80"
                    variants={taglineVariants}
                    initial="hidden"
                    animate="visible"
                >
                    Full Stack Developer | Creative Technologist
                </motion.p>

                {/* CTA Buttons */}
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <motion.button
                        className="glass px-8 py-4 rounded-full text-lg font-semibold text-cyan-400 border-2 border-cyan-400 hover:bg-cyan-400/20 transition-all relative overflow-hidden group"
                        variants={buttonVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        custom={0}
                    >
                        <span className="relative z-10">Enter The System</span>
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/30 to-cyan-400/0"
                            animate={{
                                x: ['-100%', '100%'],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                        />
                    </motion.button>

                    <motion.button
                        className="glass px-8 py-4 rounded-full text-lg font-semibold text-magenta-400 border-2 border-pink-500 hover:bg-pink-500/20 transition-all"
                        variants={buttonVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        custom={1}
                        style={{ color: '#ff00ff' }}
                    >
                        Explore Projects
                    </motion.button>

                    <motion.button
                        className="glass px-8 py-4 rounded-full text-lg font-semibold text-violet-400 border-2 border-violet-500 hover:bg-violet-500/20 transition-all"
                        variants={buttonVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        custom={2}
                        style={{ color: '#8b00ff' }}
                    >
                        View My Stack
                    </motion.button>
                </div>
            </motion.div>

            {/* Scroll Indicator - FIXED CENTERING */}
            <motion.div
                className="absolute bottom-10"
                style={{
                    left: '50%',
                    transform: 'translateX(-50%)',
                }}
                animate={{
                    y: [0, 10, 0],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            >
                <div
                    className="w-6 h-10 border-2 border-cyan-400 rounded-full p-2"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                    }}
                >
                    <motion.div
                        className="w-1 h-2 bg-cyan-400 rounded-full"
                        animate={{
                            y: [0, 12, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
