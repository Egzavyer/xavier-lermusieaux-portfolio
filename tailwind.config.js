/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			primaryBgColor: "#f5f5f5",
			primaryTextColor: "#333333",
			accentColor: "#007acc",
			headerFooterBgColor: "#2c3e50",
			headerFooterTextColor: "#ecf0f1",
			highlightColor: "#3498db",
			codeBlockBgColor: "#f9f9f9",
			codeBlockTextColor: "#333333",
			alertColor: "#e74c3c",
			successColor: "#2ecc71",
		},
		extend: {},
	},
	plugins: [],
};
