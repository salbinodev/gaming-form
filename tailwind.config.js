// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'marine-blue': 'hsl(213, 96%, 18%)', //azul escuro
        'purplish-blue': 'hsl(243, 100%, 62%)',//azul claro
        'pastel-blue': 'hsl(228, 100%, 84%)',//azul muito claro
        'light-blue': 'hsl(206, 94%, 87%)',//azul quase branco
        'strawberry-red': 'hsl(354, 84%, 57%)',
      },
    },
  },
  plugins: [],
}
