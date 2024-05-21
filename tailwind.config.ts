import type { Config } from "tailwindcss"

const config = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: "",
    theme: {
        colors: {
            backGround: '#000',
            backGroundContrast: '#111',
            textBlack: '#1d1d1f',
            white: '#fff',
            textHover: '#c3bfbe',
            textDescription: '#a1a1a6',
            textLink: '#086bce',
        },
        fontFamily: {
            sans: [
                'SF Pro Display',
                'Helvetica Neue',
                'Helvetica',
                'Arial',
                'sans-serif'
            ]
        },
        fontSize: {
            xs: '0.75rem',        // 12px
            sm: '0.875rem',       // 14px
            base: '1.0625rem',    // 17px
            lg: ['1.1875rem', '1.21'], // 19px
            xl: '1.5rem',         // 24px
            '2xl': '1.875rem',    // 30px
            '3xl': '2.75rem',     // 36px
            '4xl': ['2.5rem', '1.1'],  // 48px
            '5xl': ['4.5rem', '1.05'], // 48px
            '28xp': '1.75rem',     // 28px
        },
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config