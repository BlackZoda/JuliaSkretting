/** @type {import('tailwindcss').Config} */
    module.exports = {
        content: [
            './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
            './src/components/**/*.{js,ts,jsx,tsx,mdx}',
            './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        ],
        darkMode: 'class',
        theme: {
            extend: {
                colors: {
                    dark: "#1A2A2E",
                    light: "#F8F5F2",
                    accent: "#4A908D", 
                    accentDark: "#D98582",
                    gray: "#333333",
                    goldenLight: "#E0C9A6",
                    goldenDark: "#C2A679",
                },
                fontFamily: {
                    mr: ["var(--font-mr)"],
                    in: ["var(--font-in)"],
                    sx: ["var(--font-sx)"],
                },
                screens: {
                    sxl: "1180px",
                    xs: "480px",
                }
            },
        },
        plugins: [
            require('@tailwindcss/forms'),
            require('@tailwindcss/typography'),
        ],
    }



