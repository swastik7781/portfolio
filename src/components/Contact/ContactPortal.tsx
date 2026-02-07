
import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactPortal() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [isSending, setIsSending] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);
        setError('');

        try {
            // EmailJS configuration
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            // Send email using EmailJS
            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                    to_email: 'swastikbhardwaj457@gmail.com',
                },
                publicKey
            );

            setIsSending(false);
            setSent(true);
            setFormData({ name: '', email: '', phone: '', message: '' });

            setTimeout(() => setSent(false), 3000);
        } catch (err) {
            console.error('EmailJS Error:', err);
            setIsSending(false);
            setError('Failed to send message. Please try again or email directly.');
            setTimeout(() => setError(''), 5000);
        }
    };



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
                    className="glass-strong rounded-3xl p-10 mb-12 relative overflow-hidden border-2 border-cyan-400/20"
                >
                    {/* Animated background gradient */}
                    <motion.div
                        className="absolute inset-0 opacity-30"
                        animate={{
                            background: [
                                'radial-gradient(circle at 0% 0%, #00f0ff 0%, transparent 50%)',
                                'radial-gradient(circle at 100% 100%, #ff00ff 0%, transparent 50%)',
                                'radial-gradient(circle at 0% 100%, #8b00ff 0%, transparent 50%)',
                                'radial-gradient(circle at 100% 0%, #00f0ff 0%, transparent 50%)',
                            ],
                        }}
                        transition={{ duration: 10, repeat: Infinity }}
                    />

                    <div className="space-y-8 relative z-10">
                        {/* Name Field with Floating Label */}
                        <div className="relative">
                            <motion.input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-black/70 border-2 border-cyan-400/30 rounded-xl px-6 py-4 text-white focus:border-cyan-400 focus:outline-none transition-all peer placeholder-transparent"
                                placeholder="Name"
                                whileFocus={{ scale: 1.02, borderColor: '#00f0ff' }}
                            />
                            <label className="absolute left-6 -top-3 bg-black px-2 text-cyan-400 text-sm font-semibold peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-cyan-400 transition-all">
                                Your Name
                            </label>
                            {/* Glow effect on focus */}
                            <motion.div
                                className="absolute inset-0 rounded-xl pointer-events-none"
                                initial={{ opacity: 0, boxShadow: '0 0 0px #00f0ff' }}
                                whileFocus={{ opacity: 1, boxShadow: '0 0 20px #00f0ff' }}
                            />
                        </div>

                        {/* Email Field with Floating Label */}
                        <div className="relative">
                            <motion.input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full bg-black/70 border-2 border-magenta-400/30 rounded-xl px-6 py-4 text-white focus:border-magenta-400 focus:outline-none transition-all peer placeholder-transparent"
                                placeholder="Email"
                                whileFocus={{ scale: 1.02, borderColor: '#ff00ff' }}
                            />
                            <label className="absolute left-6 -top-3 bg-black px-2 text-magenta-400 text-sm font-semibold peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-magenta-400 transition-all">
                                Email Address
                            </label>
                            <motion.div
                                className="absolute inset-0 rounded-xl pointer-events-none"
                                initial={{ opacity: 0, boxShadow: '0 0 0px #ff00ff' }}
                                whileFocus={{ opacity: 1, boxShadow: '0 0 20px #ff00ff' }}
                            />
                        </div>

                        {/* Phone Field with Floating Label */}
                        <div className="relative">
                            <motion.input
                                type="tel"
                                required
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full bg-black/70 border-2 border-violet-400/30 rounded-xl px-6 py-4 text-white focus:border-violet-400 focus:outline-none transition-all peer placeholder-transparent"
                                placeholder="Phone"
                                whileFocus={{ scale: 1.02, borderColor: '#8b00ff' }}
                            />
                            <label className="absolute left-6 -top-3 bg-black px-2 text-violet-400 text-sm font-semibold peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-violet-400 transition-all">
                                Phone Number
                            </label>
                            <motion.div
                                className="absolute inset-0 rounded-xl pointer-events-none"
                                initial={{ opacity: 0, boxShadow: '0 0 0px #8b00ff' }}
                                whileFocus={{ opacity: 1, boxShadow: '0 0 20px #8b00ff' }}
                            />
                        </div>

                        {/* Message Field with Floating Label */}
                        <div className="relative">
                            <motion.textarea
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                rows={6}
                                className="w-full bg-black/70 border-2 border-cyan-400/30 rounded-xl px-6 py-4 text-white focus:border-cyan-400 focus:outline-none transition-all resize-none peer placeholder-transparent"
                                placeholder="Message"
                                whileFocus={{ scale: 1.02, borderColor: '#00f0ff' }}
                            />
                            <label className="absolute left-6 -top-3 bg-black px-2 text-cyan-400 text-sm font-semibold peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-cyan-400 transition-all">
                                Your Message
                            </label>
                            <motion.div
                                className="absolute inset-0 rounded-xl pointer-events-none"
                                initial={{ opacity: 0, boxShadow: '0 0 0px #00f0ff' }}
                                whileFocus={{ opacity: 1, boxShadow: '0 0 20px #00f0ff' }}
                            />
                        </div>

                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-red-400 text-center p-4 bg-red-500/10 border-2 border-red-500/30 rounded-xl"
                            >
                                {error}
                            </motion.div>
                        )}

                        {/* Animated Submit Button */}
                        <motion.button
                            type="submit"
                            disabled={isSending || sent}
                            whileHover={{ scale: 1.05, boxShadow: '0 0 30px #00f0ff' }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full bg-gradient-to-r from-cyan-500 via-magenta-500 to-violet-500 text-white font-bold py-5 rounded-xl relative overflow-hidden disabled:opacity-50 border-2 border-cyan-400/50"
                        >
                            {/* Animated shine effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                animate={{ x: ['-100%', '200%'] }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                            />

                            {isSending && (
                                <motion.div
                                    className="absolute inset-0 bg-white/20"
                                    animate={{ x: ['-100%', '100%'] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                />
                            )}

                            <span className="relative z-10 flex items-center justify-center gap-2 text-lg">
                                {isSending ? (
                                    <>
                                        <motion.span
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                        >
                                            ⚡
                                        </motion.span>
                                        Transmitting...
                                    </>
                                ) : sent ? (
                                    <>
                                        ✓ Message Sent Successfully!
                                    </>
                                ) : (
                                    <>
                                        Send Message 🚀
                                    </>
                                )}
                            </span>
                        </motion.button>
                    </div>

                    {/* Particle effect on send */}
                    {isSending && (
                        <div className="absolute inset-0 pointer-events-none">
                            {Array.from({ length: 30 }).map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-2 h-2 rounded-full"
                                    style={{
                                        background: i % 3 === 0 ? '#00f0ff' : i % 3 === 1 ? '#ff00ff' : '#8b00ff',
                                    }}
                                    initial={{
                                        x: '50%',
                                        y: '50%',
                                        opacity: 1,
                                        scale: 1,
                                    }}
                                    animate={{
                                        x: `${Math.random() * 100}%`,
                                        y: `${Math.random() * 100}%`,
                                        opacity: 0,
                                        scale: 0,
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

                {/* Social Links - Themed Buttons */}
                <div className="text-center">
                    <p className="text-xl text-gray-400 mb-8">Connect with me</p>

                    <div className="flex flex-wrap justify-center gap-6">
                        {/* LinkedIn */}
                        <motion.a
                            href="https://www.linkedin.com/in/swastik-bhardwaj-02963937a/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="glass-strong rounded-xl px-8 py-4 flex items-center gap-3 border-2 border-cyan-400/30 hover:border-cyan-400 transition-all group"
                        >
                            <svg className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            <span className="text-white font-bold">LinkedIn</span>
                        </motion.a>

                        {/* GitHub */}
                        <motion.a
                            href="https://github.com/swastik7781"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="glass-strong rounded-xl px-8 py-4 flex items-center gap-3 border-2 border-magenta-400/30 hover:border-magenta-400 transition-all group"
                        >
                            <svg className="w-6 h-6 text-magenta-400 group-hover:text-magenta-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            <span className="text-white font-bold">GitHub</span>
                        </motion.a>

                        {/* Email */}
                        <motion.a
                            href="mailto:swastikbhardwaj457@gmail.com"
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="glass-strong rounded-xl px-8 py-4 flex items-center gap-3 border-2 border-violet-400/30 hover:border-violet-400 transition-all group"
                        >
                            <svg className="w-6 h-6 text-violet-400 group-hover:text-violet-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="text-white font-bold">Email</span>
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    );
}
