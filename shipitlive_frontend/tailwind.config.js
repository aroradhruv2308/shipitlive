/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#449FAF', 
          DEFAULT: '#449FAF', 
          dark: '#176B87',
        },
        secondary: {
          light: '#FDE68A', 
          DEFAULT: '#F59E0B', 
          dark: '#B45309', 
        },
        darkMode: {
          background: '#222222', 
          text: '#FFFFFF', 
        },
        
        background: '#FFFFFF',
        fontFamily: {
          'open-sans': ['"Open Sans"', 'sans-serif'],
        },
        fontWeight: {
          light: 300,
          regular: 400,
          medium: 500,
          semiBold: 600,
          bold: 700,
          extraBold: 800,
        },

        
      },


    },
  },
  plugins: [require('@tailwindcss/typography'),],
}