/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',],
	theme: {
		extend: {
			colors: {
				'dark-blue': '#18181B',
				'dark-red': "#2B2326",
				"dark-green": "#26322D"
			},
			maxWidth: {
				'content-size': '788px'
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
				'slide-left': 'slide-left 30s linear infinite',
				'slide-right': 'slide-right 30s linear infinite',
			}
		},
	},
	plugins: [],
}
