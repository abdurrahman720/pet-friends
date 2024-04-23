import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        fill: "fill 0.5s ease-in-out alternate",
        spread_70: "spread_70 0.5s ease-in-out alternate",
        spread_full: "spread_full 0.5s ease-in-out alternate",
      },
      keyframes: {
        fill: {
          "0%": {
            transform: "scale(.8)",
          },

          "100%": {
            transform: "scale(1)",
          },
        },
        spread_full: {
          "0%": {
            width: "0%",
          },

          "100%": {
            width: "100%",
          },
        },
        spread_70: {
          "0%": {
            width: "0%",
          },

          "100%": {
            width: "70%",
          },
        },
      },

      spacing: {
        "100": "28rem",
        "104": "32rem",
      },
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
      tablet: "680px",
      tabletXL: "768px",
      laptop: "1024px",
      desktop: "1200px",
      desktopXL: "1400px",
    },
  },
  plugins: [],
};
export default config;
