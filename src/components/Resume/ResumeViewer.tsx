'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ResumeViewer() {
    const [downloading, setDownloading] = useState(false);

    const handleDownload = () => {
        setDownloading(true);
        // Simulate download
        setTimeout(() => {
            setDownloading(false);
            // In real implementation, trigger actual PDF download
            alert('Resume download started! (This is a demo)');
        }, 1500);
    };

    const resumeData = {
        summary: 'Passionate Full Stack Developer with 3+ years of experience building scalable web applications and AI-powered solutions.',
        skills: {
            frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js'],
            backend: ['Node.js', 'Express', 'Python', 'Django', 'FastAPI'],
            database: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'],
            tools: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest'],
        },
        education: [
            {
                degree: 'Bachelor of Technology in Computer Science',
                institution: 'Tech University',
                year: '2020',
                gpa: '3.8/4.0',
            },
        ],
    };

    return (
        <section className="min-h-screen bg-black py-20 px-6 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/10 to-black" />

            <div className="relative z-10 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-6xl font-black gradient-text neon-glow mb-4">
                        RESUME
                    </h2>
                    <p className="text-xl text-cyan-400 mb-8">
                        Download my complete professional profile
                    </p>

                    {/* Download Buttons */}
                    <div className="flex flex-wrap justify-center gap-4">
                        <motion.button
                            onClick={handleDownload}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-magenta-500 text-white font-bold rounded-lg relative overflow-hidden"
                        >
                            {downloading && (
                                <motion.div
                                    className="absolute inset-0 bg-white/20"
                                    animate={{ x: ['-100%', '100%'] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                                📄 {downloading ? 'Downloading...' : 'Download PDF'}
                            </span>
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 glass border border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/20 transition-all"
                        >
                            📋 View Online
                        </motion.button>
                    </div>
                </motion.div>

                {/* Resume Preview */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="glass-strong rounded-2xl p-8 md:p-12"
                >
                    {/* Summary */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-cyan-400 mb-4">Professional Summary</h3>
                        <p className="text-gray-300 leading-relaxed">{resumeData.summary}</p>
                    </div>

                    {/* Skills */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-cyan-400 mb-4">Technical Skills</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {Object.entries(resumeData.skills).map(([category, skills]) => (
                                <div key={category}>
                                    <h4 className="text-lg font-semibold text-magenta-400 mb-3 capitalize">
                                        {category}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 bg-violet-500/20 text-violet-300 rounded-full text-sm"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div>
                        <h3 className="text-2xl font-bold text-cyan-400 mb-4">Education</h3>
                        {resumeData.education.map((edu, index) => (
                            <div key={index} className="glass p-6 rounded-lg">
                                <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                                <p className="text-magenta-400 mb-2">{edu.institution}</p>
                                <div className="flex justify-between text-sm text-gray-400">
                                    <span>{edu.year}</span>
                                    <span>GPA: {edu.gpa}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Note */}
                    <div className="mt-8 p-4 bg-cyan-400/10 border border-cyan-400/30 rounded-lg">
                        <p className="text-sm text-cyan-400">
                            💡 <strong>Note:</strong> This is a preview. Download the full PDF for complete details including projects, certifications, and references.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
