import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: "#FF5656",
    secondary:"#6A7EFC",
    neutral: "#9B9DA4",
    black: "#494953",
    white: "#EDF2F6",
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
