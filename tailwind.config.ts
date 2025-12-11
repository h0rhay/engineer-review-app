import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(0 0% 0%)',
        foreground: 'hsl(0 0% 100%)',
        card: {
          DEFAULT: 'hsl(0 0% 5%)',
          foreground: 'hsl(0 0% 100%)',
        },
        popover: {
          DEFAULT: 'hsl(0 0% 5%)',
          foreground: 'hsl(0 0% 100%)',
        },
        primary: {
          DEFAULT: 'hsl(45 100% 60%)',
          foreground: 'hsl(0 0% 0%)',
        },
        secondary: {
          DEFAULT: 'hsl(0 0% 10%)',
          foreground: 'hsl(0 0% 100%)',
        },
        muted: {
          DEFAULT: 'hsl(0 0% 10%)',
          foreground: 'hsl(0 0% 100%)',
        },
        accent: {
          DEFAULT: 'hsl(45 100% 50%)',
          foreground: 'hsl(0 0% 0%)',
        },
        destructive: {
          DEFAULT: 'hsl(0 84% 60%)',
          foreground: 'hsl(0 0% 100%)',
        },
        border: 'hsl(0 0% 15%)',
        input: 'hsl(0 0% 15%)',
        ring: 'hsl(45 100% 60%)',
      },
      borderRadius: {
        lg: '1rem',
        md: '0.75rem',
        sm: '0.5rem',
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
}

export default config

