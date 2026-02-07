
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navigation() {
    const [activeSection, setActiveSection] = useState('hero');
    const [scrolled, setScrolled] = useState(false);

    const sections = [
        { id: 'hero', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'experience', label: 'Experience' },
        { id: 'resume', label: 'Resume' },
        { id: 'certifications', label: 'Certifications' },
        { id: 'testimonials', label: 'Testimonials' },
        { id: 'contact', label: 'Contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const scrollPosition = window.scrollY + window.innerHeight / 3;

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 ${scrolled ? 'glass-strong shadow-lg' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <motion.div
                    className="text-3xl font-black gradient-text neon-glow cursor-pointer"
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.3 }}
                    onClick={() => scrollToSection('hero')}
                >
                    SB
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    {sections.map((section, index) => (
                        <motion.button
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05, duration: 0.3 }}
                            whileHover={{
                                scale: 1.1,
                                y: -3,
                                textShadow: '0 0 8px #00f0ff'
                            }}
                            className={`relative font-bold text-base transition-all ${activeSection === section.id
                                    ? 'text-cyan-400'
                                    : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            {section.label}

                            {/* Active indicator */}
                            {activeSection === section.id && (
                                <motion.div
                                    layoutId="navIndicator"
                                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-magenta-500 to-violet-500 rounded-full"
                                    style={{
                                        boxShadow: '0 0 8px #00f0ff, 0 0 12px #ff00ff'
                                    }}
                                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                />
                            )}
                        </motion.button>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
}
