import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: '#6a32d1',
        purpleFooter: "#5B21B6"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        mobile: "0px",
        ipad: "480px",
        ipadMax: "1090px",
        specificScreen: "1280px"
      },
      animation: {
        'pulse-dot': 'pulse 1.5s infinite ease-in-out',
      },
      keyframes: {
        pulse: {
          '0%': {
            transform: 'scale(0.8)',
            backgroundColor: '#b3d4fc',
            boxShadow: '0 0 0 0 rgba(178, 212, 252, 0.7)',
          },
          '50%': {
            transform: 'scale(1.2)',
            backgroundColor: '#6793fb',
            boxShadow: '0 0 0 10px rgba(178, 212, 252, 0)',
          },
          '100%': {
            transform: 'scale(0.8)',
            backgroundColor: '#b3d4fc',
            boxShadow: '0 0 0 0 rgba(178, 212, 252, 0.7)',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
