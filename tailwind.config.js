/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-gray-codeleap': '#CCCCCC',
        'gray-codeleap': '#DDDDDD',
        'blue-codeleap': '#7695EC',
      },
      fontFamily: {
        roboto: 'var(--font-roboto)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
