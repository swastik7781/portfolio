
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EasterEggs() {
    const [konamiActivated, setKonamiActivated] = useState(false);
    const [matrixMode, setMatrixMode] = useState(false);
    const [secretMessage, setSecretMessage] = useState('');

    useEffect(() => {
        // Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
        const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
        let konamiIndex = 0;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === konamiCode[konamiIndex]) {
                konamiIndex++;
                if (konamiIndex === konamiCode.length) {
                    setKonamiActivated(true);
                    setSecretMessage('🎮 KONAMI CODE ACTIVATED! You found the secret!');
                    setTimeout(() => setSecretMessage(''), 5000);
                    konamiIndex = 0;
                }
            } else {
                konamiIndex = 0;
            }

            // Matrix mode toggle with 'm'
            if (e.key === 'm' && e.ctrlKey) {
                e.preventDefault();
                setMatrixMode(!matrixMode);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [matrixMode]);

    // Console message
    useEffect(() => {
        console.log('%c🚀 Welcome to Swastik\'s Portfolio!', 'font-size: 20px; color: #00f0ff; font-weight: bold;');
        console.log('%c💻 Looking for easter eggs? Try the Konami code!', 'font-size: 14px; color: #ff00ff;');
        console.log('%c🎨 Press Ctrl+M for Matrix mode', 'font-size: 14px; color: #8b00ff;');
        console.log('%c⚡ Built with React, Next.js, Three.js, and lots of ☕', 'font-size: 12px; color: #00ff88;');
    }, []);

    return (
        <>
            {/* Secret Message */}
            <AnimatePresence>
                {secretMessage && (
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        className="fixed top-20 left-1/2 transform -translate-x-1/2 z-[100] glass-strong px-8 py-4 rounded-lg"
                    >
                        <p className="text-2xl font-bold gradient-text">{secretMessage}</p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Matrix Rain Effect */}
            {matrixMode && (
                <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
                    {Array.from({ length: 50 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute text-green-400 text-xs font-mono opacity-30"
                            style={{ left: `${i * 2}%` }}
                            animate={{
                                y: ['0%', '100%'],
                            }}
                            transition={{
                                duration: Math.random() * 3 + 2,
                                repeat: Infinity,
                                ease: 'linear',
                                delay: Math.random() * 2,
                            }}
                        >
                            {Array.from({ length: 20 }).map((_, j) => (
                                <div key={j}>{Math.random() > 0.5 ? '1' : '0'}</div>
                            ))}
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Konami Mode Effects */}
            {konamiActivated && (
                <div className="fixed inset-0 pointer-events-none z-[5]">
                    {Array.from({ length: 30 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute text-4xl"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                scale: [0, 1, 0],
                                rotate: [0, 360],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        >
                            {['🎮', '⭐', '🚀', '💎', '🔥'][Math.floor(Math.random() * 5)]}
                        </motion.div>
                    ))}
                </div>
            )}
        </>
    );
}
