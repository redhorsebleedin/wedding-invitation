export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oceanwide: "oceanwide",
      },
      colors: {
        black: "#17190f",
        kuning: "#ff9d00",
        kuningtrans: "rgba(255,157,0,0.7)",
        merah: "#E06262",
      },
    },
  },
  plugins: [],
};
