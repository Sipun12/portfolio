// tailwind.config.js
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          lobster: ["Lobster, cursive"],
        },
        animation: {
          typewriter: "typing 3s steps(20) infinite, blink 0.8s infinite",
        },
        keyframes: {
          typing: {
            "0%": { width: "0" },
            "100%": { width: "100%" },
          },
          blink: {
            "50%": { borderColor: "transparent" },
          },
        },
      },
    },
    plugins: [],
  };
  