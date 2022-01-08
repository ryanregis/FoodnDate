import { Fragment, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, Typography } from "@mui/material";
import theme from "./Theme";
import './App.css';

import { Header, Footer } from "./components";
import { Login, Home, Admin, Appointment, Order, AboutUs, ContactUs } from "./pages";
import { ProtectedRoute, OrderFood, SetSchedule, Shipping, Payment } from "./routes";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route exact path="/" element={[<Header />, <Home />, <Footer />]} />
          <Route exact path="/admin" element={[<Header />, <Admin />, <Footer />]} />
          <Route exact path="/appointment" element={[<Header />, <Appointment />, <Footer />]} />
          <Route path="/about" element={[<Header />, <AboutUs />, <Footer />]} />
          <Route path="/contact" element={[<Header />, <ContactUs />, <Footer />]} />
          <Route exact path="/order" element={[<Header />, <Order />, <Footer />]} />
          <Route exact path="/order/menu" element={[<Header />, <OrderFood />, <Footer />]} />
          <Route exact path="/order/schedule" element={[<Header />, <SetSchedule />, <Footer />]} />
          <Route exact path="/order/shipping" element={[<Header />, <Shipping />, <Footer />]} />
          <Route exact path="/order/payment" element={[<Header />, <Payment />, <Footer />]} />
          {/* </Route> */}
          <Route path="/login" element={<Login />} />
        </Routes>

        {/* <Typography variant="h2">FoodnDate</Typography> */}
      </ThemeProvider>
    </Router>
  );
}

export default App;
