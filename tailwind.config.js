/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                blue: "#D3E7F0",
                "dark-blue": "#034F75",
                white: "#F0F2F5",
                green: "#4CAF50",
            },
        },
    },
    plugins: [],
}
