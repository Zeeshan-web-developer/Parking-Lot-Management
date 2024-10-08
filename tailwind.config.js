/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  theme: {
    extend: {
      colors: {},
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#FF6F61",
        secondary: "#6C5B7B",
        button: "#88B04B",
        body: "#F1FAEE",
        background: "#264653",
        links: "#2A9D8F",
        inputText: "#E9C46A",
      }),
    },
  },
  plugins: [],
};
