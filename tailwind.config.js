/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#272727",
        secondary: "#323443",
        
        grey: "#D1D1D1"
        
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        ibm: ["IBM-Plex-Sans", "sans-serif"],
        sora: ["Sora","Rubik"]
      },
      
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    
    },
  },
  plugins: [],
};
