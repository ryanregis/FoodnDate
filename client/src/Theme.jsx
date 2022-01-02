import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#FF5656" },
    secondary: { main: "#6A7EFC" },
    neutral: { main: "#9B9DA4" },
    black: { main: "#494953" },
    white: { main: "#EDF2F6" },
  },

  typography: {
    brand: {
      fontFamily: "'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif",
      fontWeight: 700,
      fontSize: "2.5rem",
      lineHeight: 1.167,
      letterSpacing: "0em"
    },
    navlink: {
      fontWeight: 600,
      fontSize: "1.25rem",
      lineHeight: 1.6,
      letterSPacing: "0.0075em"
    }
  }
});

export default theme;
