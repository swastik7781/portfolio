/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'neon-cyan': '#00f0ff',
                'neon-magenta': '#ff00ff',
                'neon-violet': '#8b00ff',
            },
            fontFamily: {
                display: ['Orbitron', 'sans-serif'],
                body: ['Rajdhani', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
