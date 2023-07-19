/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      boxShadow: {
        'MainInput': '0 0 10px 1000px  rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

