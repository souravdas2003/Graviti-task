/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f4f8fa",
        white: "#fff",
        bluegray50: "#e9eef2",
        darkslategray: "#1e2a32",
        brandcolorsecondary: "#0079ff",
        lavender: "#dcddec",
        black: "#000",
        text: "#2e2e2e",
        brandcolorprimary: "#1b31a8",
        limegreen: "#32cd32",
      },
      spacing: {},
      fontFamily: {
        "txt-small-bold": "Montserrat",
        "ibm-plex-sans": "'IBM Plex Sans'",
        rubik: "Rubik",
        "work-sans": "'Work Sans'",
      },
      borderRadius: {
        "12xs-9": "0.9px",
      },
    },
    fontSize: {
      smi: "13px",
      lg: "18px",
      xl: "20px",
      base: "16px",
      sm: "14px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
