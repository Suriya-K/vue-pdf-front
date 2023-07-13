/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "dcv-low": "#82C18F",
        "dcv-med": "#DDB557",
        "dcv-high": "#B75A4D",
        "sport-yellow-1": "#FFFFCF",
        "sport-yellow-2": "#FDD874",
        "sport-header": "#5C4032",
        "sport-topic": "#FF8439",
        "sport-sub-topic": "#FF914D",
      },
      backgroundImage: {
        sum: "url('/assets/img/page_bg/summ.jpg')",
        "rec-nutrient": "url('/assets/img/page_bg/recom_nutrient.jpg')",
        "rec-disease": "url('/assets/img/page_bg/recom_disease.jpg')",

        // MUST REPLACE WITH REAL BACKGROUND
        "dcv-hr-report": "url('/assets/img/dcv-template/health-risk.png')",
        "dcv-hr-rec":
          "url('/assets/img/dcv-template/health-risk-recommand.png')",
        "dcv-hr-group": "url('/assets/img/dcv-template/health-risk-group.png')",

        "dcv-sport-1":
          "url('/assets/img/dcv-sport/template/sport-dna-test.png')",
        "dcv-sport-2":
          "url('/assets/img/dcv-sport/template/sport-dna-test-2.png')",
      },
    },
    fontFamily: {
      montserrat_regular: ["Montserrat-Regular", "sans-serif"],
      montserrat_light: ["Montserrat-Light", "sans-serif"],
      montserrat_bold: ["Montserrat-Bold", "sans-serif"],
      cloud_bold: ["Cloud-Bold", "sans-serif"],
      cloud_light: ["Cloud-Light", "sans-serif"],
      notoSansThai: ["NotoSansThai-VariableFont", "sans-serif"],
    },
    fontSize: {
      head: ["32px", "40px"],
      small: ["24px", "40px"],
      small_long: ["12px", "16px"],
      very_small: ["10px", "12px"],
    },
  },
  plugins: [require("daisyui")],
};
