import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
      colors: {
        lightGray: 'rgba(200, 200, 200, 0.8)',
        primaryText: 'black',
        secondaryText: '#555',
        primaryTextDark: '#FFF',
        secondaryTextDark: '#FFF',
      }
    },
  },
  plugins: [],
};
export default config;
