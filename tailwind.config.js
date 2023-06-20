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
        'light-black-codeleap': '#777777',
        'black-codeleap': '#999999',
        'red-codeleap': '#FF5151',
        'green-codeleap': '#47B960',
      },
      fontFamily: {
        roboto: 'var(--font-roboto)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
