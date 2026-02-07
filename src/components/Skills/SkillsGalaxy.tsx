
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Skill data with proper icons (using Unicode/Emoji for now, can be replaced with SVG)
const skillsData = [
    // Frontend
    { name: 'React', category: 'Frontend', proficiency: 90, icon: '⚛️', color: '#61DAFB' },
    { name: 'Angular', category: 'Frontend', proficiency: 85, icon: '🅰️', color: '#DD0031' },
    { name: 'HTML/CSS', category: 'Frontend', proficiency: 95, icon: '🎨', color: '#E34F26' },
    { name: 'JavaScript', category: 'Frontend', proficiency: 90, icon: '📜', color: '#F7DF1E' },
    { name: 'TypeScript', category: 'Frontend', proficiency: 80, icon: '📘', color: '#3178C6' },

    // Backend
    { name: 'Node.js', category: 'Backend', proficiency: 88, icon: '🟢', color: '#339933' },
    { name: 'Express.js', category: 'Backend', proficiency: 85, icon: '🚂', color: '#000000' },
    { name: 'Spring Boot', category: 'Backend', proficiency: 80, icon: '🍃', color: '#6DB33F' },
    { name: 'REST APIs', category: 'Backend', proficiency: 90, icon: '🔌', color: '#FF6C37' },

    // Database
    { name: 'MongoDB', category: 'Database', proficiency: 85, icon: '🍃', color: '#47A248' },
    { name: 'PostgreSQL', category: 'Database', proficiency: 80, icon: '🐘', color: '#336791' },
    { name: 'MySQL', category: 'Database', proficiency: 82, icon: '🐬', color: '#4479A1' },

    // Languages
    { name: 'Java', category: 'Languages', proficiency: 85, icon: '☕', color: '#007396' },
    { name: 'Python', category: 'Languages', proficiency: 75, icon: '🐍', color: '#3776AB' },
    { name: 'C', category: 'Languages', proficiency: 80, icon: '©️', color: '#A8B9CC' },
    { name: 'C++', category: 'Languages', proficiency: 78, icon: '➕', color: '#00599C' },

    // Tools
    { name: 'Git', category: 'Tools', proficiency: 88, icon: '🔀', color: '#F05032' },
    { name: 'GitHub', category: 'Tools', proficiency: 90, icon: '🐙', color: '#181717' },
    { name: 'VS Code', category: 'Tools', proficiency: 95, icon: '💻', color: '#007ACC' },
    { name: 'Postman', category: 'Tools', proficiency: 85, icon: '📮', color: '#FF6C37' },
];

const categories = ['All', 'Frontend', 'Backend', 'Database', 'Languages', 'Tools'];

export default function SkillsGalaxy() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

    const filteredSkills = selectedCategory === 'All'
        ? skillsData
        : skillsData.filter(skill => skill.category === selectedCategory);

    const toggleFlip = (skillName: string) => {
        const newFlipped = new Set(flippedCards);
        if (newFlipped.has(skillName)) {
            newFlipped.delete(skillName);
        } else {
            newFlipped.add(skillName);
        }
        setFlippedCards(newFlipped);
    };

    return (
        <section id="skills" className="min-h-screen bg-black py-20 px-6 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/20 to-black" />

            {/* Animated particles */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-6xl font-black gradient-text neon-glow mb-4">
                        SKILLS GALAXY
                    </h2>
                    <p className="text-xl text-cyan-400">
                        My technical arsenal of modern technologies
                    </p>
                </motion.div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-6 py-3 rounded-xl font-bold transition-all ${selectedCategory === category
                                ? 'glass-strong border-2 border-cyan-400 text-cyan-400'
                                : 'glass border-2 border-gray-600 text-gray-400 hover:border-cyan-400/50'
                                }`}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>

                {/* Skills Grid with 3D Flip Cards */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredSkills.map((skill, index) => {
                            const isFlipped = flippedCards.has(skill.name);

                            return (
                                <motion.div
                                    key={skill.name}
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className="relative h-48 cursor-pointer perspective-1000"
                                    onClick={() => toggleFlip(skill.name)}
                                >
                                    <motion.div
                                        className="relative w-full h-full"
                                        animate={{ rotateY: isFlipped ? 180 : 0 }}
                                        transition={{ duration: 0.6 }}
                                        style={{ transformStyle: 'preserve-3d' }}
                                    >
                                        {/* Front of card */}
                                        <motion.div
                                            className="absolute inset-0 glass-strong rounded-2xl p-6 flex flex-col items-center justify-center border-2 border-cyan-400/30 hover:border-cyan-400 transition-all"
                                            style={{
                                                backfaceVisibility: 'hidden',
                                                boxShadow: `0 0 20px ${skill.color}40`,
                                            }}
                                            whileHover={{
                                                boxShadow: `0 0 30px ${skill.color}80`,
                                                scale: 1.05,
                                            }}
                                        >
                                            <motion.div
                                                className="text-6xl mb-4"
                                                animate={{
                                                    scale: [1, 1.1, 1],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                }}
                                            >
                                                {skill.icon}
                                            </motion.div>
                                            <h3 className="text-xl font-bold text-white mb-2 text-center">
                                                {skill.name}
                                            </h3>
                                            <p className="text-sm text-gray-400">{skill.category}</p>
                                            <p className="text-xs text-cyan-400 mt-2">Click to flip</p>
                                        </motion.div>

                                        {/* Back of card */}
                                        <motion.div
                                            className="absolute inset-0 glass-strong rounded-2xl p-6 flex flex-col items-center justify-center border-2 border-magenta-400/30"
                                            style={{
                                                backfaceVisibility: 'hidden',
                                                transform: 'rotateY(180deg)',
                                                boxShadow: `0 0 20px ${skill.color}40`,
                                            }}
                                        >
                                            <h3 className="text-xl font-bold gradient-text mb-4 text-center">
                                                {skill.name}
                                            </h3>

                                            <div className="w-full mb-4">
                                                <div className="flex justify-between mb-2">
                                                    <span className="text-sm text-gray-400">Proficiency</span>
                                                    <span className="text-sm font-bold text-cyan-400">{skill.proficiency}%</span>
                                                </div>
                                                <div className="w-full bg-gray-800 rounded-full h-3">
                                                    <motion.div
                                                        className="h-3 rounded-full"
                                                        style={{
                                                            background: `linear-gradient(90deg, ${skill.color}, #ff00ff)`,
                                                        }}
                                                        initial={{ width: 0 }}
                                                        animate={{ width: isFlipped ? `${skill.proficiency}%` : 0 }}
                                                        transition={{ duration: 1, delay: 0.3 }}
                                                    />
                                                </div>
                                            </div>

                                            <div className="text-center">
                                                <p className="text-xs text-gray-400 mb-2">Category</p>
                                                <p className="text-sm font-semibold text-magenta-400">{skill.category}</p>
                                            </div>

                                            <p className="text-xs text-cyan-400 mt-4">Click to flip back</p>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                {/* Stats Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-16 glass-strong rounded-2xl p-8 text-center"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div>
                            <p className="text-4xl font-black gradient-text mb-2">
                                {skillsData.length}
                            </p>
                            <p className="text-gray-400">Total Skills</p>
                        </div>
                        <div>
                            <p className="text-4xl font-black gradient-text mb-2">
                                {skillsData.filter(s => s.category === 'Frontend').length}
                            </p>
                            <p className="text-gray-400">Frontend</p>
                        </div>
                        <div>
                            <p className="text-4xl font-black gradient-text mb-2">
                                {skillsData.filter(s => s.category === 'Backend').length}
                            </p>
                            <p className="text-gray-400">Backend</p>
                        </div>
                        <div>
                            <p className="text-4xl font-black gradient-text mb-2">
                                {Math.round(skillsData.reduce((acc, s) => acc + s.proficiency, 0) / skillsData.length)}%
                            </p>
                            <p className="text-gray-400">Avg Proficiency</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
