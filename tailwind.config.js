/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        eb: ['"EB Garamond", serif'],
        cinzel: ['"Cinzel", serif'],
        ibm: ['"IBM Plex Sans", sans-serif'],
      },
      colors: {
        primary: "#FAF6E3",
        accent: "#F6F5F2",
        lightgray: "#DCE4C9",
        footer: "#f0ffff",
        bg: "#F9F5F6",
        cream: "#FFFFEC",
        customgrey: "#888",
        hamburger: "#f0ffff",
        greenB: "#008080",
      },
      gridTemplateColumns: {
        "auto-1fr-30px": "auto 1fr 30px",
      },
    },
  },
  plugins: [],
};
