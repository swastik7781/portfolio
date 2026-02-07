
import { motion } from 'framer-motion';
import { useTheme } from '@/lib/ThemeContext';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const themes = [
        { id: 'dark' as const, label: 'Dark', icon: '🌑', color: '#00f0ff' },
        { id: 'neon' as const, label: 'Neon', icon: '⚡', color: '#ff00ff' },
        { id: 'void' as const, label: 'Void', icon: '🌌', color: '#ffffff' },
    ];

    return (
        <div className="fixed bottom-8 left-8 z-50">
            <div className="glass-strong rounded-full p-2 flex gap-2">
                {themes.map((t) => (
                    <motion.button
                        key={t.id}
                        onClick={() => setTheme(t.id)}
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all ${theme === t.id
                                ? 'bg-gradient-to-br from-cyan-500 to-magenta-500'
                                : 'hover:bg-white/10'
                            }`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        title={t.label}
                    >
                        {t.icon}
                    </motion.button>
                ))}
            </div>
        </div>
    );
}
