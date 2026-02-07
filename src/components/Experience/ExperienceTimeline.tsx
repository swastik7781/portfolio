
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
    {
        id: 1,
        company: 'Personal Projects',
        role: 'Major Project Development',
        period: '2025',
        description: 'Built 3 production-ready full-stack applications using MERN stack and Spring Boot Angular framework.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Spring Boot', 'Angular'],
        achievements: [
            'Library Management System with complete CRUD operations',
            'CR Election Platform with real-time voting and results',
            'Employee Management System with authentication and authorization',
        ],
    },
    {
        id: 2,
        company: 'Industrial Training Program',
        role: 'Spring Boot (Java) Angular Full Stack Training',
        period: 'June 2025 - July 2025',
        description: 'Completed comprehensive industrial training in Spring Boot and Angular full-stack development.',
        technologies: ['Spring Boot', 'Java', 'Angular', 'REST APIs', 'MySQL'],
        achievements: [
            'Mastered Spring Boot backend development',
            'Built enterprise-level Angular applications',
            'Implemented secure REST APIs with JWT authentication',
        ],
    },
    {
        id: 3,
        company: 'CodeBest',
        role: 'MERN Stack Developer Intern',
        period: 'June 2024 - July 2024',
        description: 'Developed e-commerce clone and React projects with MongoDB integration. Earned MERN Stack Certification.',
        technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
        achievements: [
            'Built fully functional e-commerce platform clone',
            'Implemented user authentication and authorization',
            'Earned MERN Stack Certification',
        ],
    },
];

function TimelineItem({ experience, index }: { experience: typeof experiences[0]; index: number }) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const isLeft = index % 2 === 0;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} items-center gap-8 mb-16 relative`}
        >
            {/* Content */}
            <div className={`w-full md:w-5/12 ${isLeft ? 'text-right' : 'text-left'}`}>
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-strong p-6 rounded-xl"
                >
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2">{experience.role}</h3>
                    <h4 className="text-xl text-magenta-400 mb-2">{experience.company}</h4>
                    <p className="text-sm text-gray-400 mb-4">{experience.period}</p>
                    <p className="text-gray-300 mb-4">{experience.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4 justify-end">
                        {experience.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 bg-violet-500/20 text-violet-300 rounded-full text-xs"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-2">
                        {experience.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                                <span className="text-cyan-400 mt-1">▹</span>
                                <span>{achievement}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>

            {/* Timeline Node */}
            <div className="hidden md:flex w-2/12 justify-center relative">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                    className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-magenta-500 box-glow relative z-10"
                >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-magenta-500 animate-pulse-glow" />
                </motion.div>
            </div>

            {/* Empty space for alternating layout */}
            <div className="hidden md:block w-5/12" />
        </motion.div>
    );
}

export default function ExperienceTimeline() {
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
                        EXPERIENCE TIMELINE
                    </h2>
                    <p className="text-xl text-cyan-400">
                        My professional journey through the tech world
                    </p>
                </motion.div>

                {/* Vertical Line */}
                <div className="hidden md:block absolute left-1/2 top-48 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-magenta-500 to-violet-500 opacity-30" />

                {/* Timeline Items */}
                <div className="relative">
                    {experiences.map((experience, index) => (
                        <TimelineItem key={experience.id} experience={experience} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
