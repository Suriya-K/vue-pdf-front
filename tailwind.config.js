/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        "page-sum": "url('/src/assets/img/page_bg/summ.jpg')",
        "page-rec-nutrient":
          "url('/src/assets/img/page_bg/recom_nutrient.jpg')",
        "page-rec-disease": "url('/src/assets/img/page_bg/recom_disease.jpg')",
      },
    },
  },
  plugins: [require('daisyui')],
};
