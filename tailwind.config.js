/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-fira-sans)', 'system-ui', 'sans-serif'],
        code: ['var(--font-fira-code)', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        primary: {
          DEFAULT: '#544B84',
          80: '#6A6296',
          60: '#8179A8',
          40: '#9790BA',
          20: '#AEA8CC',
        },
        secondary: {
          DEFAULT: '#916C7C',
          80: '#A28693',
          60: '#B3A0A9',
          40: '#C4BAC0',
          20: '#D5D4D6',
        },
        gradient: {
          1: '#8B687F',
          2: '#785E80',
          3: '#6C5782',
        },
      },
      backgroundImage: {
        'gradient-primary':
          'linear-gradient(315deg, var(--primary), var(--gradient-stop))',
        'gradient-background':
          'linear-gradient(315deg, var(--primary), var(--secondary))',
        'gradient-brand':
          'linear-gradient(315deg, var(--primary), var(--secondary))',
        'gradient-text': 'linear-gradient(to bottom right, #916C7C, #916C7C)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
