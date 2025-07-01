/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        'sm': '481px',
        'md': '769px',
        'lg': '1025px',
        'xl': '1280px',
        '2xl': '1440px',
      },
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0eefe',
          200: '#bae0fd',
          300: '#7dccfd',
          400: '#36b3f9',
          500: '#0c99eb',
          600: '#0078cc',
          700: '#0262a7',
          800: '#065186',
          900: '#0a4471',
          950: '#062a49',
        },
        secondary: {
          50: '#f5f3ff',
          100: '#ede8ff',
          200: '#dcd5ff',
          300: '#c3b2ff',
          400: '#a785ff',
          500: '#8a4eff',
          600: '#7a2df7',
          700: '#6b21e8',
          800: '#581cc0',
          900: '#481a9e',
          950: '#2d1065',
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
    },
  },
  plugins: [],
};