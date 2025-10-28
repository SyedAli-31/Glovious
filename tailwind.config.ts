import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
    	extend: {
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))',
    				border: 'hsl(var(--card-border) / <alpha-value>)'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))',
    				border: 'hsl(var(--popover-border) / <alpha-value>)'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))',
    				border: 'hsl(var(--primary-border) / <alpha-value>)'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))',
    				border: 'hsl(var(--secondary-border) / <alpha-value>)'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))',
    				border: 'hsl(var(--muted-border) / <alpha-value>)'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))',
    				border: 'hsl(var(--accent-border) / <alpha-value>)'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))',
    				border: 'hsl(var(--destructive-border) / <alpha-value>)'
    			},
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			},
    			sidebar: {
    				DEFAULT: 'hsl(var(--sidebar) / <alpha-value>)',
    				foreground: 'hsl(var(--sidebar-foreground) / <alpha-value>)',
    				border: 'hsl(var(--sidebar-border) / <alpha-value>)',
    				ring: 'hsl(var(--sidebar-ring) / <alpha-value>)'
    			},
    			'sidebar-primary': {
    				DEFAULT: 'hsl(var(--sidebar-primary) / <alpha-value>)',
    				foreground: 'hsl(var(--sidebar-primary-foreground) / <alpha-value>)',
    				border: 'hsl(var(--sidebar-primary-border) / <alpha-value>)'
    			},
    			'sidebar-accent': {
    				DEFAULT: 'hsl(var(--sidebar-accent) / <alpha-value>)',
    				foreground: 'hsl(var(--sidebar-accent-foreground) / <alpha-value>)',
    				border: 'hsl(var(--sidebar-accent-border) / <alpha-value>)'
    			},
    			status: {
    				online: 'rgb(34 197 94)',
    				away: 'rgb(245 158 11)',
    				busy: 'rgb(239 68 68)',
    				offline: 'rgb(156 163 175)'
    			}
    		},
    		fontFamily: {
    			sans: [
    				'var(--font-sans)',
    				'Inter',
    				'Roboto',
    				'sans-serif'
    			],
    			serif: [
    				'var(--font-serif)',
    				'Georgia',
    				'serif'
    			],
    			mono: [
    				'var(--font-mono)',
    				'Menlo',
    				'monospace'
    			]
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		}
    	}
    },
    plugins: [tailwindcssAnimate, typography, require("tailwindcss-animate")],
};

export default config;
