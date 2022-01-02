import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, Typography } from "@mui/material";
import theme from "./Theme";
import AboutUs from "./pages/AboutUs";
import Header from "./components/Header";

function App() {
  return (
    // <Router>
    <ThemeProvider theme={theme}>
      <Header />
<<<<<<< HEAD
      <AboutUs/>
      <ThemeProvider theme={theme}>
        <Typography variant="h1">FoodnDate</Typography>
      </ThemeProvider>
      
    </Router>
=======
      {/* <Typography variant="h2">FoodnDate</Typography> */}
    </ThemeProvider>
    // </Router>
>>>>>>> 420382ae0fa0743b26b5bf833f6ae9f463e870f5
  );
}

export default App;
