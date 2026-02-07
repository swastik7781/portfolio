
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function LoadingScreen() {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setLoading(false), 500);
                    return 100;
                }
                return prev + 2;
            });
        }, 40);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                    }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut"
                    }}
                    className="fixed inset-0 z-[10000] bg-black"
                    style={{
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100vw',
                        height: '100vh',
                        margin: 0,
                        padding: 0,
                    }}
                >
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-radial from-violet-950/20 to-black" />

                    {/* Particle field background */}
                    <div className="absolute inset-0">
                        {[...Array(30)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                }}
                                animate={{
                                    opacity: [0, 1, 0],
                                    scale: [0, 1.5, 0],
                                }}
                                transition={{
                                    duration: 2 + Math.random() * 2,
                                    repeat: Infinity,
                                    delay: Math.random() * 2,
                                }}
                            />
                        ))}
                    </div>

                    <div className="relative flex flex-col items-center justify-center">
                        {/* Mind-Blowing Code Matrix Animation */}
                        <div className="relative w-[600px] h-[600px] mb-8 flex items-center justify-center">

                            {/* Rotating Rings */}
                            {[0, 1, 2].map((ring) => (
                                <motion.div
                                    key={ring}
                                    className="absolute rounded-full border-2"
                                    style={{
                                        width: `${300 + ring * 80}px`,
                                        height: `${300 + ring * 80}px`,
                                        borderColor: ring === 0 ? '#00f0ff' : ring === 1 ? '#ff00ff' : '#8b00ff',
                                        borderStyle: 'dashed',
                                        opacity: 0.3,
                                    }}
                                    animate={{
                                        rotate: ring % 2 === 0 ? 360 : -360,
                                    }}
                                    transition={{
                                        duration: 20 - ring * 5,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                />
                            ))}

                            {/* Central Glowing Orb */}
                            <motion.div
                                className="absolute w-40 h-40 rounded-full"
                                style={{
                                    background: 'radial-gradient(circle, #00f0ff, #ff00ff, #8b00ff)',
                                    boxShadow: '0 0 60px rgba(0, 240, 255, 0.8), 0 0 120px rgba(255, 0, 255, 0.6)',
                                }}
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: 360,
                                }}
                                transition={{
                                    scale: {
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    },
                                    rotate: {
                                        duration: 10,
                                        repeat: Infinity,
                                        ease: "linear",
                                    },
                                }}
                            >
                                {/* SB Logo in center */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.div
                                        className="text-6xl font-black text-white"
                                        style={{
                                            textShadow: '0 0 20px rgba(255, 255, 255, 0.8)',
                                        }}
                                        animate={{
                                            opacity: [0.7, 1, 0.7],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                        }}
                                    >
                                        SB
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Orbiting Code Symbols */}
                            {['<>', '{}', '()', '[]', '=>', '//'].map((symbol, i) => {
                                const angle = (i * 60) * (Math.PI / 180);
                                const radius = 200;
                                return (
                                    <motion.div
                                        key={i}
                                        className="absolute text-4xl font-mono font-bold"
                                        style={{
                                            color: i % 3 === 0 ? '#00f0ff' : i % 3 === 1 ? '#ff00ff' : '#00ff88',
                                            textShadow: '0 0 20px currentColor',
                                        }}
                                        animate={{
                                            x: [
                                                Math.cos(angle) * radius,
                                                Math.cos(angle + Math.PI * 2) * radius,
                                            ],
                                            y: [
                                                Math.sin(angle) * radius,
                                                Math.sin(angle + Math.PI * 2) * radius,
                                            ],
                                            rotate: 360,
                                            scale: [1, 1.3, 1],
                                        }}
                                        transition={{
                                            duration: 8,
                                            repeat: Infinity,
                                            ease: "linear",
                                        }}
                                    >
                                        {symbol}
                                    </motion.div>
                                );
                            })}

                            {/* Pulsing Energy Waves */}
                            {[0, 1, 2, 3].map((wave) => (
                                <motion.div
                                    key={wave}
                                    className="absolute rounded-full border-2"
                                    style={{
                                        width: '100px',
                                        height: '100px',
                                        borderColor: '#00f0ff',
                                    }}
                                    animate={{
                                        width: ['100px', '500px'],
                                        height: ['100px', '500px'],
                                        opacity: [0.8, 0],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: wave * 0.75,
                                        ease: "easeOut",
                                    }}
                                />
                            ))}

                            {/* Binary Rain Effect */}
                            {[...Array(12)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute font-mono text-sm"
                                    style={{
                                        left: `${(i * 8)}%`,
                                        color: '#00ff88',
                                        opacity: 0.4,
                                    }}
                                    animate={{
                                        y: [-100, 700],
                                    }}
                                    transition={{
                                        duration: 3 + Math.random() * 2,
                                        repeat: Infinity,
                                        delay: Math.random() * 2,
                                        ease: "linear",
                                    }}
                                >
                                    {Math.random() > 0.5 ? '1' : '0'}
                                    <br />
                                    {Math.random() > 0.5 ? '1' : '0'}
                                    <br />
                                    {Math.random() > 0.5 ? '1' : '0'}
                                </motion.div>
                            ))}
                        </div>

                        {/* Progress Bar */}
                        <div className="w-96 h-3 bg-gray-800 rounded-full overflow-hidden mb-4 relative">
                            <motion.div
                                className="h-full rounded-full relative"
                                style={{
                                    background: 'linear-gradient(90deg, #00f0ff, #ff00ff, #8b00ff)',
                                    width: `${progress}%`,
                                    boxShadow: '0 0 20px rgba(0, 240, 255, 0.8)',
                                }}
                                initial={{ width: 0 }}
                            >
                                {/* Animated shimmer */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                    animate={{
                                        x: ['-100%', '200%'],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                />
                            </motion.div>
                        </div>

                        {/* Progress text */}
                        <motion.div
                            className="text-center"
                            animate={{ opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <p className="text-4xl font-black gradient-text mb-2" style={{
                                textShadow: '0 0 20px rgba(0, 240, 255, 0.8)',
                            }}>
                                {progress}%
                            </p>
                            <p className="text-cyan-400 font-mono tracking-widest text-sm">
                                {progress < 30 && 'INITIALIZING SYSTEMS...'}
                                {progress >= 30 && progress < 60 && 'LOADING COMPONENTS...'}
                                {progress >= 60 && progress < 90 && 'COMPILING CODE...'}
                                {progress >= 90 && 'READY TO LAUNCH! 🚀'}
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
