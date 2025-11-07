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
        "brand-red": "#FF0000",
        "brand-gray-light": "#949494",
        "brand-gray-dark": "#808080",
        "brand-white": "#FFFFFF",
        "brand-black": "#000000",
      },
      fontFamily: {
        sans: ['"Alibaba PuHuiTi 2.0"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;