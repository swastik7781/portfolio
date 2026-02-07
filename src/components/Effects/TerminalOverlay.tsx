
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TerminalOverlay() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<Array<{ command: string; output: string }>>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    const commands: Record<string, string> = {
        help: `Available commands:
  - about: Learn about Swastik
  - skills: View technical skills
  - projects: List all projects
  - contact: Get contact information
  - clear: Clear terminal
  - matrix: Toggle matrix effect
  - theme: Change theme
  - exit: Close terminal`,
        about: 'Full Stack Developer & Creative Technologist passionate about building immersive digital experiences.',
        skills: 'React, Next.js, Node.js, Python, Machine Learning, Three.js, GSAP, and more...',
        projects: '12+ projects including AI Resume Analyzer, Netflix Clone, IoT Smart Home, and more.',
        contact: 'Email: swastik@example.com | GitHub: github.com/swastik | LinkedIn: linkedin.com/in/swastik',
        clear: '__CLEAR__',
        matrix: '__MATRIX__',
        theme: '__THEME__',
        exit: '__EXIT__',
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.ctrlKey && e.key === '`') {
                e.preventDefault();
                setIsOpen(!isOpen);
            }
            if (e.key === 'Escape' && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const cmd = input.trim().toLowerCase();

        if (cmd === '') return;

        const output = commands[cmd] || `Command not found: ${cmd}. Type 'help' for available commands.`;

        if (output === '__CLEAR__') {
            setHistory([]);
        } else if (output === '__EXIT__') {
            setIsOpen(false);
        } else {
            setHistory([...history, { command: cmd, output }]);
        }

        setInput('');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm p-8 overflow-hidden"
                >
                    <div className="max-w-4xl mx-auto h-full flex flex-col">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-4 pb-4 border-b border-cyan-400/30">
                            <div className="flex items-center gap-4">
                                <div className="text-2xl font-black gradient-text">SYSTEM TERMINAL</div>
                                <div className="text-sm text-gray-500">Press Ctrl+` to toggle</div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-cyan-400 hover:text-white transition-colors"
                            >
                                ✕ Close
                            </button>
                        </div>

                        {/* ASCII Art */}
                        <pre className="text-cyan-400 text-xs mb-4 opacity-50">
                            {`
 ███████╗██╗    ██╗ █████╗ ███████╗████████╗██╗██╗  ██╗
 ██╔════╝██║    ██║██╔══██╗██╔════╝╚══██╔══╝██║██║ ██╔╝
 ███████╗██║ █╗ ██║███████║███████╗   ██║   ██║█████╔╝ 
 ╚════██║██║███╗██║██╔══██║╚════██║   ██║   ██║██╔═██╗ 
 ███████║╚███╔███╔╝██║  ██║███████║   ██║   ██║██║  ██╗
 ╚══════╝ ╚══╝╚══╝ ╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝╚═╝  ╚═╝
`}
                        </pre>

                        {/* Terminal Output */}
                        <div className="flex-1 overflow-y-auto mb-4 font-mono text-sm">
                            <div className="text-green-400 mb-4">
                                Welcome to Swastik's Portfolio Terminal v1.0.0
                                <br />
                                Type 'help' to see available commands.
                            </div>

                            {history.map((item, index) => (
                                <div key={index} className="mb-4">
                                    <div className="text-cyan-400">
                                        <span className="text-magenta-400">visitor@portfolio</span>
                                        <span className="text-white">:</span>
                                        <span className="text-blue-400">~</span>
                                        <span className="text-white">$ {item.command}</span>
                                    </div>
                                    <div className="text-green-400 whitespace-pre-wrap mt-1">
                                        {item.output}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSubmit} className="flex items-center gap-2 font-mono">
                            <span className="text-magenta-400">visitor@portfolio</span>
                            <span className="text-white">:</span>
                            <span className="text-blue-400">~</span>
                            <span className="text-white">$</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="flex-1 bg-transparent border-none outline-none text-white caret-cyan-400"
                                autoComplete="off"
                            />
                        </form>
                    </div>

                    {/* Matrix Rain Effect (subtle) */}
                    <div className="absolute inset-0 pointer-events-none opacity-5">
                        {Array.from({ length: 20 }).map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute text-cyan-400 text-xs font-mono"
                                style={{ left: `${i * 5}%` }}
                                animate={{
                                    y: ['0%', '100%'],
                                }}
                                transition={{
                                    duration: Math.random() * 3 + 2,
                                    repeat: Infinity,
                                    ease: 'linear',
                                    delay: Math.random() * 2,
                                }}
                            >
                                {Math.random().toString(36).substring(7)}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
