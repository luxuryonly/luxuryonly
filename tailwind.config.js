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
			colors: {
				beige: {
					100: '#FAF6EF'
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
