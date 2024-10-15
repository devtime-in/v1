/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			current: 'currentColor',
			transparent: 'transparent',
			white: '#ffffff',
			primary: colors.stone,
			"brightBlue": '#3b82f6',
			'lightGray': '#e5e7eb'
		},
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
		},
		keyframes: {
			slideUp: {
			  '0%': { transform: 'translateY(20px)', opacity: '0' },
			  '100%': { transform: 'translateY(0)', opacity: '1' },
			},
		},
		animation: {
			slideUp: 'slideUp 0.5s ease-out',
		},
	}
}
