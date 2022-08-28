/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        translateX: "translateX 1.5s ease",
        translateXReverse: "translateXReverse 1.5s ease",
        translateY: "translateY 1.5s ease",
        translateYReverse: "translateYReverse 1.5s ease",
        swiming: "swiming 8s linear infinite",
        flash: "flash 1s ease-in",
        progess: "progess 1s ease-out",
      },
      keyframes: {
        translateX: {
          "0%": { transform: "translateX(-300px)", opacity: 0.1 },
          "50%": { transform: "translateX(30px)", opacity: 0.4 },
          "100%": { transform: "translateX(0px)", opacity: 1 },
        },
        translateXReverse: {
          "0%": { transform: "translateX(300px) ", opacity: 0.1 },
          "50%": { transform: "translateX(-40px) ", opacity: 0.4 },
          "100%": { transform: "translateX(0px)", opacity: 1 },
        },
        swiming: {
          "0%": { transform: "translateX(10px)" },
          "25%": { transform: "translateX(15px) translateY(-5px)" },
          "50%": {
            transform: "translateY(15px) translateX(20px)",
          },
          "75%": {
            transform: "translateY(25px) translateX(-5px)",
          },
          "100%": { transform: "translateX(10px)" },
        },
        flash: {
          "0%": { opacity: 0.1 },
          "50%": { opacity: 0.3 },
          "100%": { opacity: 1 },
        },
        progess: {
          "0%": { transform: "translateX(-300px)" },
          "100%": { transform: "translateX(0px)" },
        },
        translateY: {
          "0%": { transform: "translateY(-300px)", opacity: 0.1 },
          "50%": { transform: "translateY(20px)", opacity: 0.4 },
          "100%": { transform: "translateY(0px)", opacity: 1 },
        },
        translateYReverse: {
          "0%": { transform: "translateY(300px) ", opacity: 0.1 },
          "50%": { transform: "translateY(-20px) ", opacity: 0.4 },
          "100%": { transform: "translateY(0px)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
