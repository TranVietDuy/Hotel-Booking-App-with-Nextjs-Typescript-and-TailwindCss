/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        //Light mode colors
        "darkGray-5": '#141416',
        "darkGray-4": '#222529',
        "darkGray-3": '#23262F',
        "darkGray-2": '#282832',
        "darkGray-1": '#3B3E44',
        "gray":'#4A4E54',
        "lightGray-1": '#84878B',
        "lightGray-2": '#92929A',
        "lightGray-2": '#B1B5C3',
        "lightGray-3": '#E7ECF3',
        "lightGray-4": '#FCFCFD',
        "lightGray-5": '#FAFAFA',
        "transparentDark": '#14141633',
        "redPrimary": '#FF543D',
        "whitish": '#FCFCFD',
        "blueMain": '#316BFF',
        "gold": '#FFD166',

        //Dark mode colors
      }
    },
  },
  plugins: [],
}