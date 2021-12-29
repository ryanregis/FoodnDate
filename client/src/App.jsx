import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, Typography } from "@mui/material";
import theme from "./Theme";
<<<<<<< HEAD
import AboutUs from "./pages/AboutUs";
function App() {
  return (
    <div className="App">
      <h1>FoodnDate</h1>
      <form action="../../api" method="post">
        <button type="submit">Connected?</button>
      </form>
      <AboutUs/>
    </div>
=======

import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <ThemeProvider theme={theme}>
        <Typography variant="h1">FoodnDate</Typography>
      </ThemeProvider>
    </Router>
>>>>>>> d673ce706e02751bf21600ea66dd98b7c8b00138
  );
}

export default App;
