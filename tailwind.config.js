/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./app/**/*.{js,jsx}", "./src/**/*.{js,jsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-dm_sans)"],
        header: ["var(--font-montserrat)"],
      },
      screens: {
        xs: "1px",
        sm: "640px",
        md: "1024px",
        lg: "1360px",
        xl: "1900px",
        "2xl": "2560px",
        "3xl": "3840px",
      },
      colors: {
        primary: {
          '50': '#eff6ff',
          '100': '#daebff',
          '200': '#bddcff',
          '300': '#90c7ff',
          '400': '#5ca8fe',
          '500': '#3685fb',
          '600': '#2166f0',
          '700': '#1850dd',
          '800': '#1a41b3',
          '900': '#1b3b8d',
          '950': '#152556',
        },
        secondary: {
          50: "#f2f5ff",
          100: "#e7eaff",
          200: "#d3dbff",
          300: "#afb9ff",
          400: "#828dff",
          500: "#5058ff",
          600: "#2f2cfb",
          700: "#221ae7",
          800: "#1b15c2",
          900: "#19139f",
          950: "#08085e",
          980: "#020252",
        },
        ternary: {
          50: "#f2f3f5",
          100: "#f7f9fb",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#565656",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#000000",
        },
      },
      animation: {
        fade: "fadeOut .4s ease-in-out",
      },
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      }),
    },
  },
  plugins: [require("tailwindcss-animate")],
};
