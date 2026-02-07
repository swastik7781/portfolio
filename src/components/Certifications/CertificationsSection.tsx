
import { motion } from 'framer-motion';
import { useState } from 'react';

const certifications = [
    {
        id: 1,
        title: 'MERN Stack Certification',
        issuer: 'CodeBest',
        date: 'June 2024 - July 2024',
        badge: '💻',
        verifyUrl: '#',
        skills: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    },
    {
        id: 2,
        title: 'Spring Boot (Java) Angular Full Stack Industrial Development Training',
        issuer: 'Industrial Training Program',
        date: 'June 2025 - July 2025',
        badge: '☕',
        verifyUrl: '#',
        skills: ['Spring Boot', 'Java', 'Angular', 'Full Stack'],
    },
];

const achievements = [
    { id: 1, title: 'CGPA 9.38', icon: '🎓', description: 'Academic Excellence in BTech CSE' },
    { id: 2, title: '4 Full-Stack Projects', icon: '🚀', description: 'Built production-ready applications' },
    { id: 3, title: 'CodeBest Internship', icon: '💼', description: 'MERN Stack Development Experience' },
    { id: 4, title: '40,000+ Lines of Code', icon: '⌨️', description: 'Hands-on coding experience' },
];

export default function CertificationsSection() {
    const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);

    return (
        <section className="min-h-screen bg-black py-20 px-6 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-yellow-950/10 to-black" />

            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-6xl font-black gradient-text neon-glow mb-4">
                        CERTIFICATIONS & ACHIEVEMENTS
                    </h2>
                    <p className="text-xl text-cyan-400">
                        Professional credentials and milestones
                    </p>
                </motion.div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, rotateY: 5 }}
                            className="glass-strong rounded-xl p-6 cursor-pointer group relative overflow-hidden"
                            onClick={() => setSelectedCert(cert)}
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            {/* Badge */}
                            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                                {cert.badge}
                            </div>

                            <h3 className="text-xl font-bold text-cyan-400 mb-2 group-hover:text-magenta-400 transition-colors">
                                {cert.title}
                            </h3>
                            <p className="text-gray-400 mb-2">{cert.issuer}</p>
                            <p className="text-sm text-gray-500 mb-4">{cert.date}</p>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-2">
                                {cert.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-xs"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-magenta-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </motion.div>
                    ))}
                </div>

                {/* Achievements */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-4xl font-black text-center gradient-text mb-12">
                        Notable Achievements
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={achievement.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="glass p-6 rounded-xl text-center"
                            >
                                <div className="text-5xl mb-4">{achievement.icon}</div>
                                <h4 className="text-lg font-bold text-white mb-2">{achievement.title}</h4>
                                <p className="text-sm text-gray-400">{achievement.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Certification Detail Modal */}
            {selectedCert && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
                    onClick={() => setSelectedCert(null)}
                >
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                        className="glass-strong rounded-2xl p-8 max-w-md w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="text-center">
                            <div className="text-8xl mb-4">{selectedCert.badge}</div>
                            <h3 className="text-2xl font-bold gradient-text mb-2">{selectedCert.title}</h3>
                            <p className="text-xl text-magenta-400 mb-2">{selectedCert.issuer}</p>
                            <p className="text-gray-400 mb-6">{selectedCert.date}</p>

                            <a
                                href={selectedCert.verifyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-magenta-500 text-white font-bold rounded-lg hover:opacity-80 transition-all"
                            >
                                Verify Credential
                            </a>

                            <button
                                onClick={() => setSelectedCert(null)}
                                className="block w-full mt-4 px-6 py-3 glass border border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/20 transition-all"
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
}
