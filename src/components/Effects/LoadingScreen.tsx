'use client';

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
                    setTimeout(() => setLoading(false), 300);
                    return 100;
                }
                return prev + 2;
            });
        }, 30);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        scale: 30,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: "easeInOut"
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

                    <div className="relative flex flex-col items-center justify-center">
                        {/* Circular clock - MUCH LARGER to hide edges */}
                        <div className="relative w-80 h-80 mb-12">
                            {/* Large outer glow to hide any edges */}
                            <div className="absolute inset-[-40px] rounded-full bg-gradient-to-r from-cyan-400/10 via-magenta-500/10 to-violet-500/10 blur-3xl" />

                            {/* Main clock SVG */}
                            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                                {/* Background circle */}
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="none"
                                    stroke="rgba(255, 255, 255, 0.05)"
                                    strokeWidth="1"
                                />

                                {/* Progress circle */}
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="none"
                                    stroke="url(#grad)"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeDasharray="251.2"
                                    strokeDashoffset={251.2 - (251.2 * progress) / 100}
                                    style={{
                                        filter: 'drop-shadow(0 0 6px #00f0ff)',
                                    }}
                                />

                                <defs>
                                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#00f0ff" />
                                        <stop offset="50%" stopColor="#ff00ff" />
                                        <stop offset="100%" stopColor="#8b00ff" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* Center logo */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    className="text-8xl font-black gradient-text neon-glow-strong"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                >
                                    SB
                                </motion.div>
                            </div>

                            {/* 4 orbiting dots */}
                            {[0, 90, 180, 270].map((angle, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-magenta-500"
                                    style={{
                                        top: '50%',
                                        left: '50%',
                                        marginTop: -6,
                                        marginLeft: -6,
                                        boxShadow: '0 0 10px #00f0ff',
                                    }}
                                    animate={{
                                        x: Math.cos((angle * Math.PI) / 180) * 90,
                                        y: Math.sin((angle * Math.PI) / 180) * 90,
                                        rotate: 360,
                                    }}
                                    transition={{
                                        rotate: { duration: 3, repeat: Infinity, ease: 'linear' },
                                    }}
                                />
                            ))}
                        </div>

                        {/* Progress text */}
                        <motion.div
                            className="text-center"
                            animate={{ opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <p className="text-4xl font-black gradient-text mb-3">
                                {progress}%
                            </p>
                            <p className="text-cyan-400 font-mono tracking-widest">
                                LOADING
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
