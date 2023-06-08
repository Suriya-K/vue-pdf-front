/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors:{
        'dcv-low' : '#82C18F',
        'dcv-med':'#DDB557',
        'dcv-high':'#B75A4D'
      },
      backgroundImage: {
        "sum": "url('/src/assets/img/page_bg/summ.jpg')",
        "rec-nutrient": "url('/src/assets/img/page_bg/recom_nutrient.jpg')",
        "rec-disease": "url('/src/assets/img/page_bg/recom_disease.jpg')",

        // MUST REPLACE WITH REAL BACKGROUND
        "dcv-hr-report": "url('/src/assets/img/dcv-template/health-risk.png')",
        "dcv-hr-rec": "url('/src/assets/img/dcv-template/health-risk-recommand.png')",
        "dcv-hr-group": "url('/src/assets/img/dcv-template/health-risk-group.png')",
      },
    },
    fontFamily: {
      montserrat_regular: ["Montserrat-Regular", "sans-serif"],
      montserrat_light: ["Montserrat-Light", "sans-serif"],
      montserrat_bold: ["Montserrat-Bold", "sans-serif"],
      cloud_bold: ["Cloud-Bold", "sans-serif"],
      cloud_light: ["Cloud-Light", "sans-serif"],
      notoSansThai: ["NotoSansThai-VariableFont","sans-serif"]
    },
    fontSize:{
      head: ['32px','40px'],
      small: ['24px','40px'],
      small_long:['12px','16px'],
      very_small:['10px','12px']
    }
  },
  plugins: [require("daisyui")],
};
