import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: "#f0f7fa",
          100: "#d0e8f2",
          200: "#a1d1e5",
          300: "#72bad8",
          400: "#43a3cb",
          500: "#1a8cbe",
          600: "#1470a0",
          700: "#0e5278",
          800: "#093a56",
          900: "#052234",
        },
        sand: {
          50: "#fdf8f0",
          100: "#faefd8",
          200: "#f5deb3",
          300: "#e8c98a",
          400: "#d4a843",
          500: "#c49a2e",
          600: "#a07e22",
          700: "#7c6118",
          800: "#5a460f",
          900: "#3a2d09",
        },
        jungle: {
          50: "#f0faf4",
          100: "#d0f0de",
          200: "#a0e1bd",
          300: "#60c98a",
          400: "#30b060",
          500: "#18904a",
          600: "#12703a",
          700: "#0d522b",
          800: "#08361c",
          900: "#041f10",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Georgia", "Cambria", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
