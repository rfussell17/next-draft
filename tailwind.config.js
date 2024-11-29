/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [
    require('@tailwindcss/typography'),
    // ... other plugins
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'system-ui, sans-serif',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
