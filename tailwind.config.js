module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '375px',  // Small screens
      lg: '1440px', // Large screens
    },
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        bold: 700,
      },
      colors: {
        'marine-blue': 'hsl(213, 96%, 18%)', // Dark blue
        'purplish-blue': 'hsl(243, 100%, 62%)', // Light blue
        'pastel-blue': 'hsl(228, 100%, 84%)', // Very light blue
        'light-blue': 'hsl(206, 94%, 87%)', // Almost white blue
        'strawberry-red': 'hsl(354, 84%, 57%)',
        'cool-gray': 'hsl(231, 11%, 63%)', // Gray
        'light-gray': 'hsl(229, 24%, 87%)', // Light gray
        'magnolia': 'hsl(217, 100%, 97%)',
        'alabaster': 'hsl(231, 100%, 99%)',
        'white': 'hsl(0, 0%, 100%)', // White
      },
    },
  },
  plugins: [],
}
