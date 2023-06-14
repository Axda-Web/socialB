/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				accent: '#F27623',
				secondary: '#262626',
				paragraph: '#868686'
			},
			fontSize: {
				base: '0.75rem',
				heading: '1.5rem',
				info: '0.5rem',
				link: '1.125rem'
			}
		}
	},
	plugins: []
};

// TODO: Find a free alternative to Proxima Nova font + Rename variables properly
