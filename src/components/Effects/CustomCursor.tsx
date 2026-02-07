
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

    useEffect(() => {
        let trailId = 0;

        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });

            // Add trail point
            setTrail((prev) => [
                ...prev.slice(-10),
                { x: e.clientX, y: e.clientY, id: trailId++ },
            ]);

            // Check if hovering over interactive element
            const target = e.target as HTMLElement;
            setIsHovering(
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.classList.contains('cursor-pointer')
            );
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[10000]">
            {/* Main Cursor */}
            <motion.div
                className="absolute w-6 h-6 border-2 border-cyan-400 rounded-full"
                animate={{
                    x: mousePosition.x - 12,
                    y: mousePosition.y - 12,
                    scale: isHovering ? 1.5 : 1,
                }}
                transition={{ type: 'spring', damping: 30, stiffness: 200 }}
            />

            {/* Inner Dot */}
            <motion.div
                className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                }}
                transition={{ type: 'spring', damping: 50, stiffness: 500 }}
            />

            {/* Trail */}
            <AnimatePresence>
                {trail.map((point, index) => (
                    <motion.div
                        key={point.id}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                        initial={{ x: point.x, y: point.y, opacity: 0.8, scale: 1 }}
                        animate={{ opacity: 0, scale: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
}
