/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"dark-1": "#1E201E",
				"dark-2": "#242524",
				"dark-3": "#3d3d3d"
			}
		},
	},
	plugins: [],
};
