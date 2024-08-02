import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "background-color": '#E5E5E5',
      },
      colors: {
        "primary-text": '#1A1A1A',
        "secondary-color": '#6941C6',
        "secondary-text": '#667085',
      }
    },
  },
  plugins: [],
};
export default config;
