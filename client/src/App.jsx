import { Fragment, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, Typography } from "@mui/material";
import theme from "./Theme";
import './App.css';

import { Header, Footer } from "./components";
import { Login, Home, Admin, Appointment, Order } from "./pages";
import ProtectedRoute from "./routes/ProtectedRoute";
<<<<<<< HEAD
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
=======
import OrderFood from "./routes/OrderFood";

>>>>>>> ac66818dc5d62d5f5ce6b797f1a1d7aa83eb4383
function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
          {/* <Route exact path="/" element={<ProtectedRoute login={isLoggedIn} />}> */}
<<<<<<< HEAD
          <Route path="/" element={[<Header />, <Home />, <Footer />]} />
          <Route path="/admin" element={[<Header />, <Admin />, <Footer />]} />
          <Route path="/appointment" element={[<Header />, <Appointment />, <Footer />]} />
          <Route path="/order" element={[<Header />, <Order />, <Footer />]} />
          <Route path="/about" element={[<Header />, <AboutUs />, <Footer />]} />
          <Route path="/contact" element={[<Header />, <ContactUs />, <Footer />]} />
=======
          <Route exact path="/" element={[<Header />, <Home />, <Footer />]} />
          <Route exact path="/admin" element={[<Header />, <Admin />, <Footer />]} />
          <Route exact path="/appointment" element={[<Header />, <Appointment />, <Footer />]} />
          <Route exact path="/order" element={[<Header />, <Order />, <Footer />]} />
          <Route exact path="/order/menu" element={[<Header />, <OrderFood />, <Footer />]} />
>>>>>>> ac66818dc5d62d5f5ce6b797f1a1d7aa83eb4383
          {/* </Route> */}
          <Route path="/login" element={<Login />} />
        </Routes>

        {/* <Typography variant="h2">FoodnDate</Typography> */}
      </ThemeProvider>
    </Router>
  );
}

export default App;
