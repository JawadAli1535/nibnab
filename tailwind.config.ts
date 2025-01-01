const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["var(--font-rubik)", ...fontFamily.sans],
      },
      colors: {
        blue: "#48A1A9",
        blackMain: "#161919",
        blackSecondary: "#2D3434",
        amber: "#F1993F",
        gray: "#5C6A6B",
        graySecondary: "#C5CDCD",
        grayTertiary: "#8F9D9E",
        redMain: "#DC463B",
        grayFade: "#F4F5F6",
        coolGray: "#E9ECEC",
        blueFade: "#EDF6F7",
        peach: "#fdf2e7",
        peachSecondary: "#fffaf5",
        success: "#01BE09",
      },
      maxWidth: {
        10: "10%",
        20: "20%",
        30: "30%",
        40: "40%",
        50: "50%",
        60: "60%",
        70: "70%",
        80: "80%",
        90: "90%",
      },
      minHeight: {
        10: "10%",
        20: "20%",
        30: "30%",
        40: "40%",
        50: "50%",
        60: "60%",
        70: "70%",
        80: "80%",
        90: "90%",
      },
    },
  },
  plugins: [],
};
