import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, Typography } from "@mui/material";
import theme from "./Theme";
import './App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <Login />
        <AboutUs/>
        <ContactUs/>
        {/* <Footer /> */}
        {/* <Typography variant="h2">FoodnDate</Typography> */}
      </ThemeProvider>
    </Router>
  );
}

export default App;
