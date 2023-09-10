/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'white': '#ffffff',
            'black': '#000000',
            'primary': '#585e40',
        },
        fontFamily: {
            sans: ['IBM Plex Sans', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
            mono: ['IBM Plex Mono', 'monospace'],
        },
        extend: {},
    },
    plugins: [],
}

