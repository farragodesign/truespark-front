/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

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
		'200' : '44rem',
      },
      zIndex: {
        '100': '9999',
      },
    },
    colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			rose: colors.rose,
			pink: colors.pink,
			fuchsia: colors.fuchsia,
			purple: colors.purple,
			violet: colors.violet,
			indigo: colors.indigo,
			blue: colors.blue, 
			cyan: colors.cyan,
			teal: colors.teal,
			emerald: colors.emerald,
			green: colors.green,
			lime: colors.lime,
			yellow: colors.yellow,
			amber: colors.amber,
			orange: colors.orange,
			red: colors.red,
			slate: colors.slate,
			zinc: colors.zinc,
			gray: colors.gray,
			stone: colors.stone,
		},
    fontFamily:{
      'true' :['Manjari','Roboto', 'sans-serif'],
      'anak' :['Anek Malayalam', 'sans-serif'],
	  'sans-Arabic' :['Noto Sans Arabic', 'sans-serif'],
	  'ml-Read' :['JetBrains Mono', 'monospace'],
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

