/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        "sum": "url('/src/assets/img/page_bg/summ.jpg')",
        "rec-nutrient": "url('/src/assets/img/page_bg/recom_nutrient.jpg')",
        "rec-disease": "url('/src/assets/img/page_bg/recom_disease.jpg')",

        // MUST REPLACE WITH REAL BACKGROUND
        "dcv-hr-report": "url('/src/assets/img/dcv-template/health-risk-template.png')",
        "dcv-hr-rec": "url('/src/assets/img/dcv-template/health-risk-recommand-template.png')",
        "dcv-hr-group": "url('/src/assets/img/dcv-template/health-risk-group-template.png')",
      },
    },
    fontFamily: {
      montserrat_regular: ["Montserrat-Regular", "sans-serif"],
      montserrat_light: ["Montserrat-Light", "sans-serif"],
      montserrat_bold: ["Montserrat-Bold", "sans-serif"],
      cloud_bold: ["Cloud-Bold", "sans-serif"],
      cloud_light: ["Cloud-Light", "sans-serif"],
    },
    fontSize:{
      head: ['32px','40px'],
      small: ['24px','40px']
    }
  },
  plugins: [require("daisyui")],
};
