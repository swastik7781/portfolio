
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { projects } from '@/data/portfolio';

export default function ProjectLab() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
    const [filter, setFilter] = useState<string>('all');

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    const categories = ['all', 'Full Stack', 'Machine Learning'];

    return (
        <section className="min-h-screen bg-black py-20 px-6 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black" />

            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-6xl font-black gradient-text neon-glow mb-4">
                        PROJECT LAB
                    </h2>
                    <p className="text-xl text-cyan-400 mb-8">
                        Experimental digital creations
                    </p>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`px-6 py-2 rounded-full font-semibold transition-all ${filter === category
                                    ? 'bg-cyan-400 text-black'
                                    : 'glass text-cyan-400 border border-cyan-400 hover:bg-cyan-400/20'
                                    }`}
                            >
                                {category.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, rotateY: 5 }}
                                className="glass rounded-xl overflow-hidden cursor-pointer group relative"
                                onClick={() => setSelectedProject(project)}
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                {/* Project Image Placeholder */}
                                <div className={`h-48 relative overflow-hidden ${project.category === 'Machine Learning'
                                        ? 'bg-gradient-to-br from-purple-600/30 to-pink-600/30'
                                        : 'bg-gradient-to-br from-cyan-500/30 to-magenta-500/30'
                                    }`}>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-7xl opacity-30">
                                            {project.title.includes('Portfolio') ? '🎨' :
                                                project.title.includes('Campus') ? '🏫' :
                                                    project.title.includes('Election') ? '🗳️' :
                                                        project.title.includes('Library') ? '📚' :
                                                            project.title.includes('Employee') ? '👥' :
                                                                project.title.includes('Forecasting') ? '📊' :
                                                                    '🚀'}
                                        </div>
                                    </div>
                                    {/* Animated overlay */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                                        animate={{ x: ['-100%', '100%'] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                                    />
                                    {project.featured && (
                                        <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                                            FEATURED
                                        </div>
                                    )}
                                </div>

                                {/* Project Info */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-cyan-400 mb-2 group-hover:text-magenta-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4 line-clamp-2">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.slice(0, 3).map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-1 bg-violet-500/20 text-violet-300 rounded text-xs"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                        {project.tags.length > 3 && (
                                            <span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded text-xs">
                                                +{project.tags.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    {/* Category Badge */}
                                    <div className="text-sm text-cyan-400 font-semibold">
                                        {project.category}
                                    </div>
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-magenta-500/10" />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, rotateY: -90 }}
                            animate={{ scale: 1, rotateY: 0 }}
                            exit={{ scale: 0.8, rotateY: 90 }}
                            transition={{ type: 'spring', damping: 20 }}
                            className="glass-strong rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <h2 className="text-4xl font-black gradient-text">
                                    {selectedProject.title}
                                </h2>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="text-gray-400 hover:text-white text-2xl"
                                >
                                    ✕
                                </button>
                            </div>

                            <p className="text-gray-300 mb-6 text-lg">
                                {selectedProject.description}
                            </p>

                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-cyan-400 mb-3">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 text-white rounded-lg border border-cyan-400/30"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <a
                                    href={selectedProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 glass px-6 py-3 rounded-lg text-center text-cyan-400 border border-cyan-400 hover:bg-cyan-400/20 transition-all font-semibold"
                                >
                                    View Code
                                </a>
                                <a
                                    href={selectedProject.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 bg-gradient-to-r from-cyan-500 to-magenta-500 px-6 py-3 rounded-lg text-center text-white hover:opacity-80 transition-all font-semibold"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
