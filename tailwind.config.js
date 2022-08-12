/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      animation: {
        slide: "slide 500ms ease-in-out",
        slideUp: "slideUp 250ms ease-in-out forwards",
      },
      keyframes: {
        slide: {
          from: {
            transform: "translateY(-1%)",
            opacity: "0",
          },
          to: {
            opacity: "1",
            maxHeight: "fit-content",
          },
        },
        slideUp: {
          from: {
            transform: "translateY(0%)",
            opacity: "1",
            maxHeight: "300px",
          },
          to: {
            opacity: "0",
            maxHeight: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
