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
        primary: "#f14235",
        secondary: "#f8f8f8",
        neutral: "#ebe7e5",
        tprimary: "#424242",
        tsecondary: "#8f9093",
      },
    },
    screens: {
      mobile: "0px",
      tablet: "481px",
      tabletXL: "821px",
      laptop: "1025px",
      desktop: "1281px",
      desktopXL: "1441px",
    },
  },
  plugins: [],
};
export default config;
