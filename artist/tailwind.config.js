/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": "#F74843",
        "primary-300":"#30333C",
        "primary-500":"#ADADAD",
        "secondary-100":"#FF4550",
        "secondary-300":"#1C1C28"
        
      },
      content: {
    
        person1: "url('./assets/person1.png')",
        person2: "url('./assets/person2.png')",
        
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      },
    },
   
  },
  plugins: [],
}