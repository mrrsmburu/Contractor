/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust path based on your project structure
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F2937", // Adjust based on your design (e.g., text color)
        secondary: "#6B7280", // Lighter gray for subtext
        accent: "#D9B56B", // Gold-like accent color
        muted: "#F3F4F6", // Light gray background
        background: "#FFFFFF", // Default white background
      },
      animation: {
        "slide-up": "slide-up 0.5s ease-in-out",
        "fade-in": "fade-in 0.3s ease-in-out",
      },
      keyframes: {
        "slide-up": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//     },
//   },
//   plugins: [],
// }

