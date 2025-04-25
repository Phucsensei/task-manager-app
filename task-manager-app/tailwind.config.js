// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // Cho phép chuyển đổi dark mode bằng cách thêm lớp 'dark'
    theme: {
        extend: {
            colors: {
                'custom-gray': '#ebe6e0',
            },
        },
    },
    plugins: [],
};
