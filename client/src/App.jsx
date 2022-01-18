import { useState, useEffect, useContext } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

import { UserContext } from "./context/UserContext";
import { OrderProvider } from "./context/OrderContext";

import { ThemeProvider, Typography, Backdrop, CircularProgress } from "@mui/material";
import theme from "./Theme";
import './App.css';

import { Header, Footer, PageNotFound } from "./components";
import { Login, Home, Admin, Appointment, Order, AboutUs, ContactUs, Profile } from "./pages";
import { ProtectedRoute, OrderFood, SetSchedule, Shipping, Payment, ReviewOrder } from "./routes";

import axios from "axios";
import { SnackbarProvider } from "notistack";

// axios.defaults.baseURL = "http://localhost:5000";
// axios.defaults.withCredentials = true;

function App() {
  
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { userInfo, setUserInfo, isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  useEffect(() => {
    axios.get("/api/login").then((response) => {
      if (response.data.isLoggedIn) {
        setUserInfo(response.data.userInfo);
        setIsLoggedIn(true);
      }
      else {
        setUserInfo([]);
        setIsLoggedIn(false);
        navigate("/login");
      }
      setLoading(false);
    })
  }, []);

  if (loading) {
    return (
      <div>
        <Backdrop sx={{ color: '#494953', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    )
  };

  return (

    <OrderProvider>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          <Routes>
            <Route exact path="/" element={[<Header />, <Home />, <Footer />]} />
            <Route exact path="/admin" element={[<Header />, <Admin />, <Footer />]} />
            <Route exact path="/appointment" element={[<Header />, <Appointment />, <Footer />]} />
            <Route exact path="/about" element={[<Header />, <AboutUs />, <Footer />]} />
            <Route exact path="/contact" element={[<Header />, <ContactUs />, <Footer />]} />
            <Route exact path="/order" element={[<Header />, <Order />, <Footer />]} />
            <Route exact path="/order/menu" element={[<Header />, <OrderFood />, <Footer />]} />
            <Route exact path="/order/schedule" element={[<Header />, <SetSchedule />, <Footer />]} />
            <Route exact path="/order/shipping" element={[<Header />, <Shipping />, <Footer />]} />
            <Route exact path="/order/payment" element={[<Header />, <Payment />, <Footer />]} />
            <Route exact path="/order/review" element={[<Header />, <ReviewOrder />, <Footer />]} />
            <Route exact path="/profile" element={[<Header />, <Profile />, <Footer />]} />
            {/* </Route> */}
            <Route exact path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login setLoading={setLoading} />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </SnackbarProvider>
      </ThemeProvider>
    </OrderProvider>

  );
}

export default App;
