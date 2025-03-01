module.exports = {
  content: ["./src/**/*.{html,js}"],
  plugins: [require('@tailwindcss/forms')],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: "#1E293B",
      },
      animation: {
        modalShow: "modalShow 0.3s ease-out forwards",
      },
      keyframes: {
        modalShow: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      keyframes: {
        modalHide: {
          "0%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(0.9)" },
        },
      },
      animation: {
        modalShow: "modalShow 0.3s ease-out forwards",
        modalHide: "modalHide 0.3s ease-in forwards",
      },
    },
  },
  plugins: [],
}