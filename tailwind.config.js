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
        secondary: '#404A63',
        primaryLight: '#5E6E92',
        primary: '#815F72',
        primaryLight: '#875E6F',
        tertiaryBlue: '#656A8A',
        tertiaryPurple: '#73667F',
      },
      backgroundImage: {
        'gradient-primary':
          'linear-gradient(to right, #875E6F, #73667F, #404A63)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ... other plugins
  ],
}
