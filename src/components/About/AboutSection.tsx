'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
    const stats = [
        { label: 'Projects Completed', value: '50+', color: '#00f0ff' },
        { label: 'Technologies Mastered', value: '25+', color: '#ff00ff' },
        { label: 'Years of Experience', value: '3+', color: '#8b00ff' },
        { label: 'Happy Clients', value: '30+', color: '#00ff88' },
    ];

    const timeline = [
        {
            year: '2024',
            title: 'Full Stack Developer',
            description: 'Building next-generation web applications with cutting-edge technologies.',
        },
        {
            year: '2023',
            title: 'AI/ML Engineer',
            description: 'Developed machine learning models for real-world applications.',
        },
        {
            year: '2022',
            title: 'Started Journey',
            description: 'Began exploring the world of software development and creative technology.',
        },
    ];

    return (
        <section className="min-h-screen bg-black py-20 px-6 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />

            <div className="relative z-10 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-6xl font-black gradient-text neon-glow mb-4">
                        ABOUT ME
                    </h2>
                    <p className="text-xl text-cyan-400">
                        Full Stack Developer | Creative Technologist
                    </p>
                </motion.div>

                {/* Stats Counter */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass rounded-xl p-6 text-center"
                        >
                            <motion.div
                                className="text-5xl font-black mb-2"
                                style={{ color: stat.color }}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                                viewport={{ once: true }}
                            >
                                {stat.value}
                            </motion.div>
                            <div className="text-gray-400 text-sm">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Bio */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="glass-strong rounded-2xl p-8 mb-20"
                >
                    <p className="text-lg text-gray-300 leading-relaxed mb-4">
                        I'm a passionate Full Stack Developer and Creative Technologist specializing in building
                        immersive digital experiences. With expertise spanning from AI/ML to modern web technologies,
                        I transform complex ideas into elegant, user-centric solutions.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        My journey in tech is driven by curiosity and a relentless pursuit of innovation. I believe
                        in the power of technology to create meaningful impact, and I'm constantly exploring new
                        frontiers in web development, artificial intelligence, and interactive design.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 via-magenta-500 to-violet-500" />

                    {timeline.map((item, index) => (
                        <motion.div
                            key={item.year}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                                }`}
                        >
                            <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                                <div className="glass-strong rounded-xl p-6">
                                    <div className="text-3xl font-black text-cyan-400 mb-2">
                                        {item.year}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400">
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-magenta-500 rounded-full border-4 border-black z-10" />

                            <div className="w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
