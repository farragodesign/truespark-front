/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      spacing: {
        '128': '28rem',
        '52': '13.2rem',
        '100' : '22rem',
      },
      zIndex: {
        '100': '9999',
      },
    },
    fontFamily:{
      'true' :['Manjari','Roboto', 'sans-serif'],
      'anak' :['Anek Malayalam', 'sans-serif']
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

