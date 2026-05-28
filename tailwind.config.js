import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
    	extend: {
    		fontFamily: {
    			sans: [
                    'Inter',
    				'IBM Plex Sans Arabic',
    				'Rubik',
                    ...defaultTheme.fontFamily.sans
                ],
                mono: [
                    'JetBrains Mono',
                    'Fira Code',
                    ...defaultTheme.fontFamily.mono
                ]
    		},
    		colors: {
                border: "var(--border)",
                input: "var(--input)",
                ring: "var(--ring)",
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                  DEFAULT: "var(--primary)",
                  foreground: "var(--primary-foreground)",
                },
                secondary: {
                  DEFAULT: "var(--secondary)",
                  foreground: "var(--secondary-foreground)",
                },
                destructive: {
                  DEFAULT: "var(--destructive)",
                  foreground: "var(--destructive-foreground)",
                },
                muted: {
                  DEFAULT: "var(--muted)",
                  foreground: "var(--muted-foreground)",
                },
                accent: {
                  DEFAULT: "var(--accent)",
                  foreground: "var(--accent-foreground)",
                },
                popover: {
                  DEFAULT: "var(--popover)",
                  foreground: "var(--popover-foreground)",
                },
                card: {
                  DEFAULT: "var(--card)",
                  foreground: "var(--card-foreground)",
                },
    			sidebar: {
    				DEFAULT: 'var(--sidebar-background)',
    				foreground: 'var(--sidebar-foreground)',
    				primary: 'var(--sidebar-primary)',
    				'primary-foreground': 'var(--sidebar-primary-foreground)',
    				accent: 'var(--sidebar-accent)',
    				'accent-foreground': 'var(--sidebar-accent-foreground)',
    				border: 'var(--sidebar-border)',
    				ring: 'var(--sidebar-ring)'
    			},
                brand: {
                    orange: "#f54e00",
                    "orange-active": "#d04200",
                    ink: "#26251e",
                    body: "#5a5852",
                    "body-strong": "#26251e",
                    muted: "#807d72",
                    "muted-soft": "#a09c92",
                    hairline: "#e6e5e0",
                    "hairline-soft": "#efeee8",
                    "hairline-strong": "#cfcdc4",
                    canvas: "#f7f7f4",
                    "canvas-soft": "#fafaf7",
                    "surface-card": "#ffffff",
                    "surface-strong": "#e6e5e0"
                },
                timeline: {
                    thinking: "#dfa88f",
                    grep: "#9fc9a2",
                    read: "#9fbbe0",
                    edit: "#c0a8dd",
                    done: "#c08532"
                }
    		}
    	}
    },

    plugins: [forms],
};

