/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Include the 'app' directory
    './components/**/*.{js,ts,jsx,tsx,mdx}', // Include components directory
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'system-ui, sans-serif',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        primary: '#3B3E4E',
        secondary: '#778780',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ... other plugins
  ],
}
