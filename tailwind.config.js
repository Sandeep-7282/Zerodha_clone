/** @type {import('tailwindcss').Config} */
module.exports= {
    content: [
      "./public/index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      screens: {
        sm: '800px',
        lg: '960px'
      },
      fontSize: {
        xxs: ['10px', '14px'],
        xs: ['12px', '20px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },
      extend: {},
    },
    plugins: [],
  }
  