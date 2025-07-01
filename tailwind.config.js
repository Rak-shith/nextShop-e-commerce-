/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',       // blue-800
        secondary: '#F59E0B',     // amber-500
        accent: '#10B981',        // green-500
        danger: '#EF4444',        // red-500
        grayDark: '#1F2937',      // gray-800
        light: '#F3F4F6'          // gray-100
      },
    },
  },
  plugins: [],
}
