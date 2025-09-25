// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'glass': {
          DEFAULT: 'rgba(255, 255, 255, 0.05)',
          light: 'rgba(255, 255, 255, 0.8)',
        }
      },
      backdropBlur: {
        'xl': '12px',
      }
    },
  },
  plugins: [],
}