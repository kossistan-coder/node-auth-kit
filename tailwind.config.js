/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{js,css}",
    "./views/**/*.edge",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

