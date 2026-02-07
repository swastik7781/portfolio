import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedCodeBackground() {
    const [codeLines, setCodeLines] = useState<Array<{ id: number; code: string; x: number; delay: number }>>([]);

    useEffect(() => {
        // Generate random code snippets
        const codeSnippets = [
            'const portfolio = () => {}',
            'function buildWebsite() {',
            'import React from "react"',
            'export default App',
            '<div className="hero">',
            'npm install vite',
            'git commit -m "update"',
            'async function fetch() {',
            'return <Component />',
            'useState(false)',
            'useEffect(() => {})',
            'interface Props {',
            'type User = {',
            'let x = 10;',
            'const API_URL = ""',
            '// TODO: optimize',
            'map((item) => item)',
            'filter(x => x > 0)',
            'console.log("Hello")',
            'background: linear-gradient',
        ];

        const lines = Array.from({ length: 15 }, (_, i) => ({
            id: i,
            code: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
            x: Math.random() * 100,
            delay: Math.random() * 5,
        }));

        setCodeLines(lines);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-1" style={{ zIndex: 1 }}>
            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path
                                d="M 40 0 L 0 0 0 40"
                                fill="none"
                                stroke="rgba(0, 240, 255, 0.3)"
                                strokeWidth="0.5"
                            />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            {/* Floating Code Lines */}
            {codeLines.map((line) => (
                <motion.div
                    key={line.id}
                    className="absolute text-cyan-400/20 font-mono text-sm whitespace-nowrap"
                    style={{
                        left: `${line.x}%`,
                    }}
                    initial={{ y: '100vh', opacity: 0 }}
                    animate={{
                        y: '-100vh',
                        opacity: [0, 0.3, 0.3, 0],
                    }}
                    transition={{
                        duration: 20 + Math.random() * 10,
                        delay: line.delay,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                >
                    {line.code}
                </motion.div>
            ))}

            {/* Binary Rain Effect */}
            {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                    key={`binary-${i}`}
                    className="absolute text-magenta-500/10 font-mono text-xs"
                    style={{
                        left: `${10 + i * 12}%`,
                    }}
                    initial={{ y: -100 }}
                    animate={{
                        y: '100vh',
                    }}
                    transition={{
                        duration: 15 + i * 2,
                        repeat: Infinity,
                        ease: 'linear',
                        delay: i * 0.5,
                    }}
                >
                    {Array.from({ length: 20 }).map((_, j) => (
                        <div key={j} className="mb-2">
                            {Math.random() > 0.5 ? '1' : '0'}
                        </div>
                    ))}
                </motion.div>
            ))}

            {/* Floating Brackets and Symbols */}
            {['<', '>', '{', '}', '(', ')', '[', ']', ';', '='].map((symbol, i) => (
                <motion.div
                    key={`symbol-${i}`}
                    className="absolute text-violet-400/15 font-bold text-4xl"
                    style={{
                        left: `${5 + i * 9}%`,
                        top: `${20 + (i % 3) * 25}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        rotate: [0, 360],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 8 + i,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 0.3,
                    }}
                >
                    {symbol}
                </motion.div>
            ))}

            {/* Glowing Particles */}
            {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                    key={`particle-${i}`}
                    className="absolute w-1 h-1 rounded-full"
                    style={{
                        background: i % 2 === 0 ? '#00f0ff' : '#ff00ff',
                        boxShadow: `0 0 10px ${i % 2 === 0 ? '#00f0ff' : '#ff00ff'}`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        scale: [1, 2, 1],
                        opacity: [0.3, 0.8, 0.3],
                        x: [0, Math.random() * 100 - 50],
                        y: [0, Math.random() * 100 - 50],
                    }}
                    transition={{
                        duration: 5 + Math.random() * 5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: Math.random() * 2,
                    }}
                />
            ))}

            {/* Scan Line Effect */}
            <motion.div
                className="absolute left-0 right-0 h-px"
                style={{
                    background: 'linear-gradient(90deg, transparent, #00f0ff, transparent)',
                    boxShadow: '0 0 10px #00f0ff',
                }}
                animate={{
                    top: ['0%', '100%'],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            />
        </div>
    );
}
