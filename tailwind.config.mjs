/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
        "./node_modules/preline/preline.js",
    ],
    theme: {
        extend: {
            colors: {
                "musa-green": {
                    50: "#f4fee7",
                    100: "#e8fccb",
                    200: "#d3f99d",
                    300: "#b7f264",
                    400: "#9de635",
                    500: "#81cc16",
                    600: "#65a30d",
                    700: "#4f7c0f",
                    800: "#416212",
                    900: "#395314",
                    950: "#1d2e05",
                },
                "musa-blue": {
                    50: "#f0faff",
                    100: "#e0f4fe",
                    200: "#bae6fd",
                    300: "#7dd1fc",
                    400: "#38b7f8",
                    500: "#0e9fe9",
                    600: "#0284c7",
                    700: "#036ba1",
                    800: "#075a85",
                    900: "#0c4d6e",
                    950: "#083349",
                },
            },
        },
    },
    plugins: [require("preline/plugin")],
};
