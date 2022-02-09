module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./src/**/*.{js,ts,jsx,tsx}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			fontSize: {
				xxs: '0.55rem'
			},
			fontFamily: {
				logo: ['Allura', 'cursive'],
				heading: ['Playfair Display', 'serif'],
				p: ['Alice', 'serif']
			},
			colors: {
				beige: {
					100: '#F4ECE6',
					200: '#e7dacf',
					300: '#bfafa0',
					400: '#d2c1b1',
					500: '#D1B9A5'
				},
				gray: { 1000: '#373333' }
			},
			borderRadius: {
				'4xl': '2em',
				'5xl': '3em',
				'6xl': '4em'
			},
			padding: {
				11.5: '2.97em'
			}
		}
	},
	plugins: [require('daisyui'), require('flowbite/plugin')],
	daisyui: {
		base: false
	}
};
