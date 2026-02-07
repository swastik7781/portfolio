import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ParticleField from './ParticleField';
import KatanaBlade from './KatanaBlade';
import FloatingShapes from './FloatingShapes';
import CyberGrid from './CyberGrid';

export default function HeroUniverse() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        // Detect if it's a touch device
        const checkTouchDevice = () => {
            setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
        };

        checkTouchDevice();

        // Only add mouse tracking on non-touch devices
        if (!('ontouchstart' in window) && navigator.maxTouchPoints === 0) {
            const handleMouseMove = (e: MouseEvent) => {
                const x = (e.clientX / window.innerWidth - 0.5) * 15; // Reduced from 20 to 15 for subtler effect
                const y = (e.clientY / window.innerHeight - 0.5) * 15;
                setMousePosition({ x, y });
            };

            window.addEventListener('mousemove', handleMouseMove);
            return () => window.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    // Animation variants
    const taglineVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5,
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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
            {/* Background Effects */}
            <CyberGrid />
            <ParticleField />
            <FloatingShapes />
            <KatanaBlade />

            {/* Main Content with Cursor Following */}
            <motion.div
                className="relative z-20 px-6 max-w-7xl w-full"
                style={!isTouchDevice ? {
                    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                    transition: 'transform 0.3s ease-out',
                } : {}}
            >
                {/* Profile Photo + Name Container */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-12">
                    {/* Profile Photo - Left Side on Desktop */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                        className="flex-shrink-0"
                    >
                        <motion.div
                            className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64"
                            animate={{
                                boxShadow: [
                                    '0 0 20px rgba(0, 240, 255, 0.5)',
                                    '0 0 40px rgba(255, 0, 255, 0.7)',
                                    '0 0 20px rgba(0, 240, 255, 0.5)',
                                ],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            style={{
                                borderRadius: '50%',
                                overflow: 'hidden',
                                border: '4px solid transparent',
                                backgroundImage: 'linear-gradient(135deg, #00f0ff, #ff00ff, #8b00ff)',
                                backgroundOrigin: 'border-box',
                                backgroundClip: 'padding-box, border-box',
                            }}
                        >
                            <img
                                src="/profile.jpeg"
                                alt="Swastik Bhardwaj"
                                className="w-full h-full object-cover"
                                style={{
                                    borderRadius: '50%',
                                }}
                            />
                            {/* Animated ring overlay */}
                            <motion.div
                                className="absolute inset-0 rounded-full"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.3), rgba(255, 0, 255, 0.3))',
                                }}
                                animate={{
                                    opacity: [0.3, 0.6, 0.3],
                                    scale: [1, 1.05, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        </motion.div>
                    </motion.div>

                    {/* Name Section - Right Side on Desktop */}
                    <motion.div
                        className="text-center lg:text-left"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            delay: 0.2,
                        }}
                    >
                        <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black gradient-text neon-glow-strong leading-tight">
                            SWASTIK
                            <br />
                            BHARDWAJ
                        </h1>
                    </motion.div>
                </div>

                {/* Tagline */}
                <motion.p
                    className="text-2xl md:text-3xl lg:text-4xl font-light mb-8 text-cyan-400 text-center"
                    style={{ fontFamily: 'var(--font-accent)' }}
                    variants={taglineVariants}
                    initial="hidden"
                    animate="visible"
                >
                    Aspiring Full-Stack Developer with a passion for web development.
                </motion.p>

                {/* Role */}
                <motion.p
                    className="text-xl md:text-2xl mb-12 text-white/80 text-center"
                    variants={taglineVariants}
                    initial="hidden"
                    animate="visible"
                >
                    BTech CSE Student | MERN Stack Developer | CodeBest Intern
                </motion.p>

                {/* CTA Buttons */}
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <motion.button
                        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
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
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
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
                        onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
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
        </section>
    );
}
