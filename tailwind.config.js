/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          `InterVariable,${defaultTheme.fontFamily.sans}`,
          {
            fontFeatureSettings: '"cpsp","salt","tnum","zero"',
          },
        ],
      },
    },
  },
  plugins: [typography, forms],
};
