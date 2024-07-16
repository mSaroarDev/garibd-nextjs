/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        brandColor: "#002F34",
        body: "#F0F0F1",
        darkBg: "#1D2327",
        lightBg: "#F6F7F7",
        primaryColor: "#005C91",
        borderColor: "#ddd",
        redColor: "#FF7070",
      },
      fontSize: {
        md: "16px",
      },
    },
  },
  plugins: [require("daisyui")],
};
