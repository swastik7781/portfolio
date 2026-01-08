'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactPortal() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSending, setIsSending] = useState(false);
    const [sent, setSent] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);

        // Simulate sending
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSending(false);
        setSent(true);
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => setSent(false), 3000);
    };

    const socialLinks = [
        { name: 'GitHub', icon: '⚡', url: 'https://github.com', color: '#00f0ff' },
        { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com', color: '#ff00ff' },
        { name: 'Twitter', icon: '🐦', url: 'https://twitter.com', color: '#8b00ff' },
        { name: 'Email', icon: '📧', url: 'mailto:swastik@example.com', color: '#00ff88' },
    ];

    return (
        <section className="min-h-screen bg-black py-20 px-6 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-magenta-950/10 to-black" />

            <div className="relative z-10 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-6xl font-black gradient-text neon-glow mb-4">
                        CONTACT PORTAL
                    </h2>
                    <p className="text-xl text-cyan-400">
                        Transmit your message through the digital gateway
                    </p>
                </motion.div>

                {/* Contact Form */}
                <motion.form
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    onSubmit={handleSubmit}
                    className="glass-strong rounded-2xl p-8 mb-12 relative overflow-hidden"
                >


                    <div className="space-y-6 relative z-10">
                        <div>
                            <label className="block text-cyan-400 mb-2 font-semibold">Name</label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-black/50 border-2 border-cyan-400/30 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-all"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div>
                            <label className="block text-cyan-400 mb-2 font-semibold">Email</label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full bg-black/50 border-2 border-cyan-400/30 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-all"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div>
                            <label className="block text-cyan-400 mb-2 font-semibold">Message</label>
                            <textarea
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                rows={5}
                                className="w-full bg-black/50 border-2 border-cyan-400/30 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-all resize-none"
                                placeholder="Your message..."
                            />
                        </div>

                        <motion.button
                            type="submit"
                            disabled={isSending || sent}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full bg-gradient-to-r from-cyan-500 to-magenta-500 text-white font-bold py-4 rounded-lg relative overflow-hidden disabled:opacity-50"
                        >
                            {isSending && (
                                <motion.div
                                    className="absolute inset-0 bg-white/20"
                                    animate={{ x: ['-100%', '100%'] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                />
                            )}
                            <span className="relative z-10">
                                {isSending ? 'Transmitting...' : sent ? 'Message Sent! ✓' : 'Send Message'}
                            </span>
                        </motion.button>
                    </div>

                    {/* Particle effect on send */}
                    {isSending && (
                        <div className="absolute inset-0 pointer-events-none">
                            {Array.from({ length: 20 }).map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                                    initial={{
                                        x: '50%',
                                        y: '50%',
                                        opacity: 1,
                                    }}
                                    animate={{
                                        x: `${Math.random() * 100}%`,
                                        y: `${Math.random() * 100}%`,
                                        opacity: 0,
                                    }}
                                    transition={{
                                        duration: 1,
                                        ease: 'easeOut',
                                    }}
                                />
                            ))}
                        </div>
                    )}
                </motion.form>

                {/* Social Links Orbit */}
                <div className="relative h-64 flex items-center justify-center">
                    <div className="text-center">
                        <p className="text-xl text-gray-400 mb-8">Connect with me</p>
                    </div>

                    {socialLinks.map((social, index) => {
                        const angle = (index / socialLinks.length) * Math.PI * 2 - Math.PI / 2;
                        const radius = 120;
                        const x = Math.cos(angle) * radius;
                        const y = Math.sin(angle) * radius;

                        return (
                            <motion.a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute glass rounded-full w-16 h-16 flex items-center justify-center text-3xl cursor-pointer"
                                style={{
                                    left: '50%',
                                    top: '50%',
                                    marginLeft: x,
                                    marginTop: y,
                                }}
                                whileHover={{
                                    scale: 1.2,
                                    boxShadow: `0 0 30px ${social.color}`,
                                }}
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    y: {
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: index * 0.2,
                                    },
                                }}
                            >
                                {social.icon}
                            </motion.a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
