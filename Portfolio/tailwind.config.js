/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
	  extend: {
		colors: {
		  primary: "#aa6d6b",
		  brandDark: "#151616",
		},
		transitionProperty: {
			'height': 'height',
			'spacing': 'margin, padding',
		  },
		  animation: {
			'bounce-slow': 'bounce 3s linear infinite',
		  },
  
		fontFamily: {
		  poppins: ["Poppins", "sans-serif"],
		  varela: ["Varela Round", "sans-serif"],
		  orbitron:["Orbitron"]
		},
		container: {
		  center: true,
		  padding: {
			DEFAULT: "1rem",
			sm: "2rem",
			lg: "4rem",
			xl: "5rem",
			"2xl": "6rem",
			
		  },
		},
	  },
	},
	plugins: [],
  };