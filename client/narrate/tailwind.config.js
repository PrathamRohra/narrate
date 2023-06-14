/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "regalBlue": "#243c5a",
        'nordicGray': '#222326',
        'mercuryWhite': '#F4F5F8',
        'magicBlue': '#5E6AD2'
      },
    }
  },
  plugins: [],
}

