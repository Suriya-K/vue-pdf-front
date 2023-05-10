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
    fontFamily: {
      montserrat_regular: ["Montserrat-Regular", "sans-serif"],
      montserrat_light: ["Montserrat-Light", "sans-serif"],
      montserrat_bold: ["Montserrat-Bold", "sans-serif"],
      cloud_bold: ["Cloud-Bold", "sans-serif"],
      cloud_light: ["Cloud-Light", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
