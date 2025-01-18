/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "bounce-in": {
          "0%": {
            opacity: 0,
            transform: "scale(0.5)",
          },
          "50%": {
            opacity: 0.7,
            transform: "scale(1.1)",
          },
          "100%": {
            opacity: 1,
            transform: "scale(1)",
          },
        },
      },
      animation: {
        "bounce-in": "bounce-in 0.8s ease-out",
      },
    },
  },
  plugins: [require("daisyui")],
};
