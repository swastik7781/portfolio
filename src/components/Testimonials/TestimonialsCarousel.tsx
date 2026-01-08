'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const testimonials = [
    {
        id: 1,
        name: 'Sarah Johnson',
        role: 'CTO at TechCorp',
        company: 'TechCorp',
        image: '👩‍💼',
        rating: 5,
        text: 'Swastik is an exceptional developer who consistently delivers high-quality work. His expertise in full-stack development and problem-solving skills are outstanding.',
    },
    {
        id: 2,
        name: 'Michael Chen',
        role: 'Lead Developer',
        company: 'Innovation Labs',
        image: '👨‍💻',
        rating: 5,
        text: 'Working with Swastik was a pleasure. He brought innovative solutions to complex problems and his code quality is top-notch.',
    },
    {
        id: 3,
        name: 'Emily Rodriguez',
        role: 'Product Manager',
        company: 'StartupXYZ',
        image: '👩‍🚀',
        rating: 5,
        text: 'Swastik\'s ability to understand requirements and translate them into elegant solutions is remarkable. A true professional!',
    },
];

export default function TestimonialsCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prev) => {
            const next = prev + newDirection;
            if (next < 0) return testimonials.length - 1;
            if (next >= testimonials.length) return 0;
            return next;
        });
    };

    return (
        <section className="min-h-screen bg-black py-20 px-6 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-pink-950/10 to-black" />

            <div className="relative z-10 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-6xl font-black gradient-text neon-glow mb-4">
                        TESTIMONIALS
                    </h2>
                    <p className="text-xl text-cyan-400">
                        What people say about working with me
                    </p>
                </motion.div>

                {/* Carousel */}
                <div className="relative h-[400px] flex items-center justify-center">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: 'spring', stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 },
                            }}
                            className="absolute w-full"
                        >
                            <div className="glass-strong rounded-2xl p-8 md:p-12">
                                {/* Stars */}
                                <div className="flex justify-center gap-2 mb-6">
                                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                        <motion.span
                                            key={i}
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="text-3xl text-yellow-400"
                                        >
                                            ⭐
                                        </motion.span>
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-xl text-gray-300 text-center mb-8 leading-relaxed italic">
                                    "{testimonials[currentIndex].text}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center justify-center gap-4">
                                    <div className="text-5xl">{testimonials[currentIndex].image}</div>
                                    <div className="text-left">
                                        <h4 className="text-xl font-bold text-cyan-400">
                                            {testimonials[currentIndex].name}
                                        </h4>
                                        <p className="text-gray-400">{testimonials[currentIndex].role}</p>
                                        <p className="text-sm text-magenta-400">{testimonials[currentIndex].company}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <button
                        onClick={() => paginate(-1)}
                        className="absolute left-0 top-1/2 -translate-y-1/2 glass-strong p-4 rounded-full hover:bg-cyan-400/20 transition-all z-10"
                        aria-label="Previous testimonial"
                    >
                        <span className="text-2xl text-cyan-400">←</span>
                    </button>
                    <button
                        onClick={() => paginate(1)}
                        className="absolute right-0 top-1/2 -translate-y-1/2 glass-strong p-4 rounded-full hover:bg-cyan-400/20 transition-all z-10"
                        aria-label="Next testimonial"
                    >
                        <span className="text-2xl text-cyan-400">→</span>
                    </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-3 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
                                    ? 'bg-cyan-400 w-8'
                                    : 'bg-gray-600 hover:bg-gray-500'
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
