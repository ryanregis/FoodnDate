import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { //Red
      main: "#FF5656",
    },
    secondary: { //Blue
       main: "#6A7EFC"
    },
    neutral: { // Gray
        main: "#9B9DA4"
    },
    black: {
        main: "#494953"
    },
    white: {
        main:"#EDF2F6"
    },
  },
  typography: {
      brand: {
          fontFamily: "'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif",
          fontWeight: 700,
          fontSize: "3rem",
          lineHeight: 1.167,
          letterSpacing: "0em"
      }
  }
});

export default theme;
