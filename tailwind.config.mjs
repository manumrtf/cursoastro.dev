/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',],
	theme: {
		extend: {
			colors: {
				'dark-blue': '#18181B'
			},
			maxWidth: {
				'content-size': '778px'
			},
			keyframes: {
				'slide-left': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-100%)' },
				},
				'slide-right': {
					from: { transform: 'translateX(100%)' },
					to: { transform: 'translateX(0)' },
				},
			},
			animation: {
				'slide-left': 'slide-left 20s linear infinite',
				'slide-right': 'slide-right 20s linear infinite',
			}
		},
	},
	plugins: [],
}
