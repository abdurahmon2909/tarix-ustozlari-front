import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",

    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#111827",

        secondary: "#1F2937",

        accent: "#2563EB",
      },
    },
  },

  plugins: [],
};

export default config;