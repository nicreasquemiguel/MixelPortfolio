/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      backgroundImage: {
        'grainy-black': "url('public/black.svg')",
        'grainy-white': "url('public/white.svg')"
       },
      fontFamily: {
        madami: ['Madimi One', "sans"],
        pacifico: ['Pacifico', 'cursive'],
        nectarine: ['Nectarine', 'sans-serif'],
      },
      screens: {
        'xs': '280px',
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}

