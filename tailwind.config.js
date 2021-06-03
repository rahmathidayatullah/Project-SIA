module.exports = {
  purge: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        // silahkan login, icon seting
        green: "#096C61",
        // icon login,border,btn
        green1: "#0CA593",
        green2: "#128C7E",
        // placeholder login
        gray1: "#DADADA",
        orange: "#FF6745",
        blue: "#49A8FF",
        gray3: "#636363",
        gray2: "#727272",
        gray4: "#C2C2C2",
      },
      borderColor: {
        // icon login,border,btn
        green1: "#0CA593",
      },
      backgroundColor: {
        // icon login,border,btn
        green1: "#0CA593",
        // blue btn
        blue: "#49A8FF",

        // orange btn
        orange: "#FF6745",
        // bg quiz
        gray2: "#FBFBFB",
      },
      fontFamily: {
        poppins: "Poppins",
      },
      fontSize: {
        litle: "10px",
        fulllitle: "8px",
      },
      spacing: {
        "497px": "497px",
        "86vh": "86vh",
      },
      screens: {
        xshome: "438px",
        xsquis: "484px",
      },
      inset: {
        "130%": "-130%",
        "250%": "-250%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
