import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: { main: "#FF5656", light: "#DD7878" },
    secondary: { main: "#6A7EFC" },
    neutral: { main: "#9B9DA4" },
    black: { main: "#494953" },
    white: { main: "#EDF2F6" },
    divider: "#9B9DA4",
  },

  typography: {
    button: {
      textTransform: "none",
    },
    login_title: {
      fontFamily: "'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif",
      fontWeight: 700,
      fontSize: "5rem",
      lineHeight: 1.167,
      letterSpacing: "0em"
    },
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
      letterSpacing: "0.0075em"
    },
    footer_title: {
      fontWeight: 700,
      fontSize: "1.35rem",
      lineHeight: 1.334,
      letterSpacing: "0.0165em"
    },
    footer_subtitle: {
      fontWeight: 400,
      fontSize: "0.85rem",
      lineHeight: 1.334,
      letterSpacing: "0.0075em"
    },
    subscribe: {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: 1.334,
      letterSpacing: "0.05em"
    },
    footer_info: {
      fontWeight: 400,
      fontSize: "0.95rem",
      lineHeight: 1.5,
      letterSpacing: "0.0075em"
    },
    table_header: {
      color: "#EDF2F6",
      fontWeight: 700,
      fontSize: "1.35rem",
      lineHeight: 1.334,
      letterSpacing: "0.0165em"
    }
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },

});

theme = createTheme(theme, {
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: theme.palette.black.main,
        },
        focused: {
          color: theme.palette.secondary.main,
        },
        notchedOutline: {
          borderWidth: "3px !important",
        }
      }
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: theme.palette.black.main,
          "&:focused": {
            fontWeight: "bold"
          }
        },
        asterisk: {
          color: theme.palette.primary.main
        }
      }
    },
    
  }
})

theme = responsiveFontSizes(theme);

export default theme;
