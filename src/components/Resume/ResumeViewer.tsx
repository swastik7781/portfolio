
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
        summary: 'Aspiring Full-Stack Developer currently in 3rd year of BTech CSE at Silicon University (CGPA 9.38). Completed MERN Stack internship at CodeBest (June-July 2024). Built 3 production-ready projects in 2025: Library Management System, CR Election Platform, and Employee Management System. Completed Spring Boot Angular Industrial Training (2025).',
        experience: [
            {
                title: 'Major Project Development',
                company: 'Personal Projects',
                period: '2025',
                description: 'Built 3 production-ready full-stack applications: Library Management System, CR Election Platform, and Employee Management System using MERN stack and Spring Boot Angular.',
            },
            {
                title: 'MERN Stack Developer Intern',
                company: 'CodeBest',
                period: 'June 2024 - July 2024',
                description: 'Developed e-commerce clone and React projects with MongoDB integration. Earned MERN Stack Certification.',
            },
        ],
        skills: {
            frontend: ['React', 'Angular', 'HTML/CSS', 'JavaScript'],
            backend: ['Node.js', 'Express.js', 'Database Management'],
            languages: ['C', 'C++', 'Python', 'Java'],
            tools: ['Git', 'GitHub', 'Agile Methodologies'],
            database: ['MongoDB', 'PostgreSQL', 'MySQL'],
        },
        education: [
            {
                degree: 'Bachelor of Technology in Computer Science Engineering',
                institution: 'Silicon University',
                year: '2023 - 2027',
                gpa: '9.38/10',
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

                    {/* Experience */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-cyan-400 mb-4">Experience</h3>
                        <div className="space-y-4">
                            {resumeData.experience.map((exp, index) => (
                                <div key={index} className="glass p-6 rounded-lg">
                                    <h4 className="text-xl font-bold text-white mb-2">{exp.title}</h4>
                                    <p className="text-magenta-400 mb-2">{exp.company}</p>
                                    <p className="text-sm text-gray-400 mb-3">{exp.period}</p>
                                    <p className="text-gray-300">{exp.description}</p>
                                </div>
                            ))}
                        </div>
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
