import HeroUniverse from '@/components/Hero/HeroUniverse';
import AboutSection from '@/components/About/AboutSection';
import SkillsGalaxy from '@/components/Skills/SkillsGalaxy';
import ProjectLab from '@/components/Projects/ProjectLab';
import ExperienceTimeline from '@/components/Experience/ExperienceTimeline';
import ResumeViewer from '@/components/Resume/ResumeViewer';
import CertificationsSection from '@/components/Certifications/CertificationsSection';
import TestimonialsCarousel from '@/components/Testimonials/TestimonialsCarousel';
import ContactPortal from '@/components/Contact/ContactPortal';
import Navigation from '@/components/Layout/Navigation';
import CustomCursor from '@/components/Effects/CustomCursor';
import TerminalOverlay from '@/components/Effects/TerminalOverlay';
import ThemeToggle from '@/components/Layout/ThemeToggle';
import LoadingScreen from '@/components/Effects/LoadingScreen';
import AnimatedCodeBackground from '@/components/Effects/AnimatedCodeBackground';
import MobileMenu from '@/components/Layout/MobileMenu';
import SmoothScroll from '@/components/Effects/SmoothScroll';
import ScrollProgress from '@/components/Effects/ScrollProgress';
import EasterEggs from '@/components/Effects/EasterEggs';
import LiquidWaves from '@/components/Effects/LiquidWaves';
import { ThemeProvider } from '@/lib/ThemeContext';
import './custom.css';

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

export default function App() {
    return (
        <ThemeProvider>
            <main className="bg-black min-h-screen cursor-none">
                <AnimatedCodeBackground />
                <SmoothScroll />
                <ScrollProgress />
                <EasterEggs />
                <LiquidWaves />
                <LoadingScreen />
                <CustomCursor />
                <Navigation />
                <MobileMenu sections={sections} />
                <TerminalOverlay />

                <div id="hero">
                    <HeroUniverse />
                </div>

                <div id="about">
                    <AboutSection />
                </div>

                <div id="skills">
                    <SkillsGalaxy />
                </div>

                <div id="projects">
                    <ProjectLab />
                </div>

                <div id="experience">
                    <ExperienceTimeline />
                </div>

                <div id="resume">
                    <ResumeViewer />
                </div>

                <div id="certifications">
                    <CertificationsSection />
                </div>

                <div id="testimonials">
                    <TestimonialsCarousel />
                </div>

                <div id="contact">
                    <ContactPortal />
                </div>

                {/* Footer */}
                <footer className="bg-black border-t border-cyan-400/20 py-8 text-center">
                    <p className="text-gray-400">
                        © 2026 Swastik Bhardwaj. Engineered with{' '}
                        <span className="text-cyan-400">passion</span> and{' '}
                        <span className="text-magenta-400">code</span>.
                    </p>
                    <p className="text-xs text-gray-600 mt-2">
                        Press <kbd className="px-2 py-1 bg-gray-800 rounded">Ctrl</kbd> + <kbd className="px-2 py-1 bg-gray-800 rounded">`</kbd> to open terminal
                    </p>
                </footer>
            </main>
        </ThemeProvider>
    );
}
