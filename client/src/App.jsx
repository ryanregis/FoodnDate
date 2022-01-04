import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, Typography } from "@mui/material";
import theme from "./Theme";
<<<<<<< HEAD
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
=======
import './App.css';

>>>>>>> 4fe4616f15e90acf2edc723d544b3b73ce931c4b
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";

function App() {
  return (
    // <Router>
    <ThemeProvider theme={theme}>
<<<<<<< HEAD
      <Header />
      <AboutUs/>
      <ContactUs/>
=======
      {/* <Header /> */}
      <Login />
      {/* <Footer /> */}
>>>>>>> 4fe4616f15e90acf2edc723d544b3b73ce931c4b
      {/* <Typography variant="h2">FoodnDate</Typography> */}
    </ThemeProvider>
    // </Router>
  );
}

export default App;
