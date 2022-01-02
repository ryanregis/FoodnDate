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
      <AboutUs/>
      {/* <Typography variant="h2">FoodnDate</Typography> */}
    </ThemeProvider>
    // </Router>
  );
}

export default App;
