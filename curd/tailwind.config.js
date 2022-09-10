/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.{png,jpg,jpeg}"],
  theme: {
    screens: {
      xs: { min: "0px", max: "480px" },
      sm: { min: "481px", max: "640px" },
      md: { min: "641px", max: "768px" },
      lg: { min: "769px", max: "900px" },
      xl: { min: "900px", max: "1024px" },
      "2xl": { min: "1025px", max: "1240px" },
      "3xl": { min: "1241px", max: "1330px" },
      "4xl": { min: "1331px", max: "3600px" },
    },
    colors: {
      white: {
        30: "#FFFFFF",
        20: "#F8FBFF",
      },
      gray: {
        20: "#484848",
        30: "#8E8E8E",
        40: "#EAEAEA",
        50: "#4E4E4E",
        60: "#CEBCFF",
        70: "#AB7BFF",
        80: "#D1D1D1",
      },
      blue: "#3828BE",
      black: "#000000",
      purple: {
        20: "#512C99",
        30: "#6A4FC3",
        40: "#72C4F4",
        50:"#502D9A",
        60:"#236ECB0",
      },
      green: {
        20: "#CAF5EF",
        30: "#23BA95",
      },
      skyblue: "#CFEDFF",
      red:"#FF6347",
    },

    fontSize: {
      fs1: [
        "12px",
        {
          letterSpacing: "0px",
          lineHeight: "18px",
        },
      ],
      fs15: [
        "13px",
        {
          letterSpacing: "0px",
          lineHeight: "20px",
        },
      ],
      fs2: [
        "14px",
        {
          letterSpacing: "0px",
          lineHeight: "21px",
        },
      ],
      fs3: [
        "15px",
        {
          letterSpacing: "0px",
          lineHeight: "23px",
        },
      ],
      fs4: [
        "16px",
        {
          letterSpacing: "0px",
          lineHeight: "25px",
        },
      ],
      fs5: [
        "18px",
        {
          letterSpacing: "0px",
          lineHeight: "27px",
        },
      ],
      fs6: [
        "19px",
        {
          letterSpacing: "0px",
          lineHeight: "29px",
        },
      ],
      fs7: [
        "20px",
        {
          letterSpacing: "0px",
          lineHeight: "30px",
        },
      ],
      fs8: [
        "22px",
        {
          letterSpacing: "0px",
          lineHeight: "30px",
        },
      ],
      fs9: [
        "24px",
        {
          letterSpacing: "0px",
          lineHeight: "35px",
        },
      ],
      fs14: [
        "28px",
        {
          letterSpacing: "0px",
          lineHeight: "50px",
        },
      ],
      fs11: [
        "32px",
        {
          letterSpacing: "0px",
          lineHeight: "48px",
        },
      ],
      fs12: [
        "36px",
        {
          letterSpacing: "0px",
          lineHeight: "50px",
        },
      ],
      fs13: [
        "46px",
        {
          letterSpacing: "0px",
          lineHeight: "69px",
        },
      ],
      fs10: [
        "50px",
        {
          letterSpacing: "0px",
          lineHeight: "76px",
        },
      ],
    },
    fontFamily: {
      "poppins-regular": ["Poppins", "sans-serif"],
      "poppins-medium": ["Poppins", "sans-serif"],
      "poppins-semibold": ["Poppins", "sans-serif"],
      "poppins-bold": ["Poppins", "sans-serif"],
    },
    backgroundImage: {
      "header-background": "url('/public/images/header-background.png')",
      "token-detail-background":
        "url('/public/images/token-detail-background.svg')",
    },
    extend: {
      spacing: {
        0.1: "1px",
        0.5: "2px",
        1.25: "5px",
        2.5: "10px",
        3.5: "14px",
        3.75: "15px",
        4.5: "18px",
        5.5: "22px",
        6.5: "26px",
        7.5: "30px",
        7.75: "31px",
        10.75: "43px",
        11.25: "45px",
        12.5: "50px",
        13.25: "53px",
        15: "60px",
        21.75: "87px",
        25: "100px",
        28.5:"114px",
        28.75: "115px",
        31:"124px",
        32: "128px",
        34:"136px",
        36.25: "145px",
        36.5: "146px",
        39.25: "157px",
        40.5: "162px",
        43: "172px",
        44: "176px",
        57.5: "230px",
        62.5: "250px",
        64.75: "259px",
        75:"300px",
        90: "360px",
        92.5: "370px",
        94.75: "379px",
        116.5: "466px",
        111.75: "447px",
        124: "496px",
        125: "500px",
        133.5: "534px",
        160: "640px",
        300.5: "1202px",
      },
      boxShadow: {
        homeShadow: "0px 3px 10px #00000005",
        tabShadow: "0px 0px 8px 1px rgba(0, 0, 0, 0.15)",
      },
      borderRadius: {
        2.5: "10px",
      },
    },
  },
  plugins: [],
};
