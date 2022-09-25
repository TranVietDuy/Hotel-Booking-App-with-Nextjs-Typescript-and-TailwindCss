/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            dmsans: "'DM Sans', sans-serif",
            opensans: "'Open Sans', sans-serif",
            poppins: "'Poppins', sans-serif",
            roboto: "'Roboto', sans-serif",
        },
        extend: {
            colors: {
                "darkGray-6": "#18191B",
                "darkGray-5": "#141416",
                "darkGray-4": "#222529",
                "darkGray-3": "#23262F",
                "darkGray-2": "#282832",
                "darkGray-1": "#3B3E44",
                gray: "#4A4E54",
                "lightGray-1": "#84878B",
                "lightGray-2": "#92929A",
                "lightGray-2": "#B1B5C3",
                "lightGray-3": "#E7ECF3",
                "lightGray-4": "#F4F5F6",
                "lightGray-5": "#FCFCFD",
                "lightGray-6": "#FAFAFA",
                "lightGray-7": "#f5f5f5",
                transparentDark: "#14141633",
                redPrimary: "#FF543D",
                whitish: "#FCFCFD",
                "whitish-2": "#FFFFFF",
                blueMain: "#316BFF",
                blueDarker: "#0047FD",
                blueTransparent: "#316BFF33",
                starGold: "#FFD166",
                modalBg: "#36363696",
            },
        },
    },
    plugins: [],
};
