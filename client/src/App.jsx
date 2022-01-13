import { useState, useEffect, useContext } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

import { UserContext } from "./context/UserContext";
import { OrderProvider } from "./context/OrderContext";

<<<<<<< HEAD
//for daily.co
import Meeting from "./pages/Meeting";

import { ThemeProvider, Typography } from "@mui/material";
=======
import { ThemeProvider, Typography, Backdrop, CircularProgress } from "@mui/material";
>>>>>>> c6d58dc2219abe9436b8918699e340e585512609
import theme from "./Theme";
import './App.css';

import { Header, Footer, PageNotFound } from "./components";
import { Login, Home, Admin, Appointment, Order, AboutUs, ContactUs } from "./pages";
import { ProtectedRoute, OrderFood, SetSchedule, Shipping, Payment, ReviewOrder } from "./routes";

import axios from "axios";


// axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

function App() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { userInfo, setUserInfo, isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  useEffect(() => {
    axios.get("http://localhost:5000/api/login").then((response) => {
      console.log(response.data);
      if (response.data.isLoggedIn) {
        setUserInfo(response.data.userInfo);
        setIsLoggedIn(true);
      }
      else {
        setIsLoggedIn(false);
        navigate("/login");
      }
      setLoading(false);
    }).catch(err => { console.log(err); setLoading(false) });
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
        
        <Routes>
          {/* <Route path="/" element={<ProtectedRoute auth={isLoggedIn} />}> */}
          <Route exact path="/" element={[<Header />, <Home />, <Footer />]} />
          <Route exact path="/admin" element={[<Header />, <Admin />, <Footer />]} />
          <Route exact path="/appointment" element={[<Header />, <Appointment />, <Footer />]} />

          
          <Route exact path="/video/:id" element={<Meeting/>} />

          <Route exact path="/about" element={[<Header />, <AboutUs />, <Footer />]} />
          <Route exact path="/contact" element={[<Header />, <ContactUs />, <Footer />]} />
          <Route exact path="/order" element={[<Header />, <Order />, <Footer />]} />
          <Route exact path="/order/menu" element={[<Header />, <OrderFood />, <Footer />]} />
          <Route exact path="/order/schedule" element={[<Header />, <SetSchedule />, <Footer />]} />
          <Route exact path="/order/shipping" element={[<Header />, <Shipping />, <Footer />]} />
          <Route exact path="/order/payment" element={[<Header />, <Payment />, <Footer />]} />
          <Route exact path="/order/review" element={[<Header />, <ReviewOrder />, <Footer />]} />
          {/* </Route> */}
          <Route exact path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

<<<<<<< HEAD
          {/* <Typography variant="h2">FoodnDate</Typography> */}
        </ThemeProvider>

      </OrderProvider>
=======
        {/* <Typography variant="h2">FoodnDate</Typography> */}
      </ThemeProvider>
    </OrderProvider>

>>>>>>> c6d58dc2219abe9436b8918699e340e585512609
  );
}

export default App;
