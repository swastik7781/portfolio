
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface MobileMenuProps {
    sections: Array<{ id: string; label: string }>;
}

export default function MobileMenu({ sections }: MobileMenuProps) {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <>
            {/* Hamburger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden fixed top-6 right-6 z-[100] glass-strong p-3 rounded-lg"
                aria-label="Toggle menu"
            >
                <div className="w-6 h-5 flex flex-col justify-between">
                    <motion.span
                        animate={{
                            rotate: isOpen ? 45 : 0,
                            y: isOpen ? 8 : 0,
                        }}
                        className="w-full h-0.5 bg-cyan-400 block"
                    />
                    <motion.span
                        animate={{
                            opacity: isOpen ? 0 : 1,
                        }}
                        className="w-full h-0.5 bg-cyan-400 block"
                    />
                    <motion.span
                        animate={{
                            rotate: isOpen ? -45 : 0,
                            y: isOpen ? -8 : 0,
                        }}
                        className="w-full h-0.5 bg-cyan-400 block"
                    />
                </div>
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[90] lg:hidden"
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25 }}
                            className="fixed right-0 top-0 bottom-0 w-[80%] max-w-sm glass-strong z-[95] lg:hidden overflow-y-auto"
                        >
                            <div className="p-8 pt-24">
                                <h2 className="text-3xl font-black gradient-text mb-8">
                                    NAVIGATION
                                </h2>

                                <nav className="space-y-4">
                                    {sections.map((section, index) => (
                                        <motion.button
                                            key={section.id}
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            onClick={() => scrollToSection(section.id)}
                                            className="w-full text-left px-6 py-4 rounded-lg glass hover:bg-cyan-400/20 transition-all group"
                                        >
                                            <span className="text-xl font-bold text-cyan-400 group-hover:text-white transition-colors">
                                                {section.label}
                                            </span>
                                        </motion.button>
                                    ))}
                                </nav>

                                {/* Social Links */}
                                <div className="mt-12 pt-8 border-t border-cyan-400/20">
                                    <p className="text-sm text-gray-400 mb-4">Connect with me</p>
                                    <div className="flex gap-4">
                                        {[
                                            { icon: '⚡', url: 'https://github.com' },
                                            { icon: '💼', url: 'https://linkedin.com' },
                                            { icon: '🐦', url: 'https://twitter.com' },
                                            { icon: '📧', url: 'mailto:swastik@example.com' },
                                        ].map((social, i) => (
                                            <a
                                                key={i}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-12 h-12 glass rounded-full flex items-center justify-center text-2xl hover:bg-cyan-400/20 transition-all"
                                            >
                                                {social.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
