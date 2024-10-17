/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        primaryBlue: "#3772FF",
        secondaryBlue: "#3772FF3B",
        primaryWhite: "#FEFDFF",
        primaryViolet: "#DE59FF",
        primaryGray: "#E4E4E4",
        secondaryGray: "#F4F3F4",
        instaRed: "#FF4242",
        fontGray: "#787878",
        primaryBlack: "#272727",
        mainBoxGray: "#f6f5f7",
        starYel: "#E5EA19",
        primaryGreen: "#2CDA5D",
        LightBlueCustom: "#3772FF3B",
      },
      fontFamily: {
        IRANYekan: ["IRANYekan"],
      },
      borderRadius: {
        blueButton: "64px",
        main: "32px",
        secondary: "24px",
      },
      boxShadow: {
        darkButtonShadow: "0 0px 10px 1px rgba(222, 89, 255 , 1)",
        buttonShadow: "0px 3px 10px 1px #272727",
        darkMainBoxShadow: "0 10px 10px 1px rgba(222, 89, 255 , 1)",
      },
      screens: {
        monitor: "1920px",
      },
    },
  },
  plugins: [],
};
