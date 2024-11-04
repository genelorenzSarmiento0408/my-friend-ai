/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-1": "#FFD6FF",
        "main-2": "#E7C6FF",
        "main-3": "#C8B6FF",
        "main-4": "#B8C0FF",
        "main-5": "#BBD0FF",
        "accent-blue": "#38508A",
        "accent-red": "#DD9194",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        hero: "url('./assets/backgrounds/Hero.png')",
        vision: "url('./assets/backgrounds/Vision.png')",
        About: "url('./assets/backgrounds/About.png')",
        goals: "url('./assets/backgrounds/Goals.png')",
      },
    },
  },
  plugins: [],
};
