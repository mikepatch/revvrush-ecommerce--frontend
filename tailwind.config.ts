import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"font-dark": "#1a1a1a",
				"font-light": "#f5f5f5",
				"brand-background": "#ebebeb",
				"brand-background-lighter": "#fff",
				"brand-background-dark": "#1a1a1a",
				"brand-primary": "#EB635B",
				"star-rating": "#ffc107"
			},
			spacing: {
				"header-height": "100px",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
// eslint-disable-next-line import/no-default-export
export default config;
