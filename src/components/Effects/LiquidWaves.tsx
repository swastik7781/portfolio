
import { motion } from 'framer-motion';

export default function LiquidWaves() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
            {/* Animated gradient waves */}
            <motion.div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.1) 0%, transparent 50%)',
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            <motion.div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(circle at 80% 20%, rgba(255, 0, 255, 0.1) 0%, transparent 50%)',
                }}
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.5, 0.3, 0.5],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            <motion.div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(circle at 20% 80%, rgba(139, 0, 255, 0.1) 0%, transparent 50%)',
                }}
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
        </div>
    );
}
