/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-custom': '#5618D6',
        'blue-custom': '#BGBEC1',
      },
      fontFamily: {
        // Add your custom font families here
        font1: ['font1', 'sans-serif'],
        font2: ['font2', 'sans-serif'],
        font3: ['font3', 'sans-serif'],
        font4: ['font4', 'sans-serif'],
        font5: ['font5', 'sans-serif'],
        font6: ['font6', 'sans-serif'],
        font7: ['font7', 'sans-serif'],
        font8: ['font8', 'sans-serif'],
        font9: ['font9', 'sans-serif'],
        font10: ['font10', 'sans-serif'],
        font11: ['font11', 'sans-serif'],
        font12: ['font12', 'sans-serif'],
        font13: ['font13', 'sans-serif'],
        font14: ['font14', 'sans-serif'],
        font15: ['font15', 'sans-serif'],
        font16: ['font16', 'sans-serif'],
        
        custom17: ['Palatino', 'Georgia', 'Times New Roman', 'Times', 'serif'],
        
     
      },

    },
  },
  plugins: [],
}

