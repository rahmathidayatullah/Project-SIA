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
        // placeholder login
        gray1: "#DADADA",
        orange: "#FF6745",
        blue: "#49A8FF",
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
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
