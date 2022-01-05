import { Fragment, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, Typography } from "@mui/material";
import theme from "./Theme";
import './App.css';

<<<<<<< HEAD
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
=======
import { Header, Footer } from "./components";
import { Login, Home, Admin } from "./pages";
import ProtectedRoute from "./routes/ProtectedRoute";
>>>>>>> 43b83c134ce4fddd7aefdea7bbc73a51637c01e6

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <ThemeProvider theme={theme}>
<<<<<<< HEAD
        <Header />
        <Login />
        <AboutUs/>
        <ContactUs/>
        {/* <Footer /> */}
=======
        <Routes>
          {/* <Route exact path="/" element={<ProtectedRoute login={isLoggedIn} />}> */}
          <Route path="/" element={[<Header />, <Home />, <Footer />]} />
          <Route path="/admin" element={[<Header />, <Admin />, <Footer />]} />
          {/* </Route> */}
          <Route path="/login" element={<Login />} />
        </Routes>

>>>>>>> 43b83c134ce4fddd7aefdea7bbc73a51637c01e6
        {/* <Typography variant="h2">FoodnDate</Typography> */}
      </ThemeProvider>
    </Router>
  );
}

export default App;
