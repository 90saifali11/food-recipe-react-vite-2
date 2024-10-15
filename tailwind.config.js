/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Add the paths where Tailwind should look for classes
    './public/index.html', // If you are using an HTML template, add this path
  ],
  theme: {
    extend: {
      // Customize your theme here if needed
      colors: {
        customRed: '#cc333f',
        customGray: '#242424',
      },
    },
  },
  plugins: [],
};
