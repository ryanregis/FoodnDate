import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, Typography } from "@mui/material";
import theme from "./Theme";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    // <Router>
    <ThemeProvider theme={theme}>
      <Header />
      <Footer />
      {/* <Typography variant="h2">FoodnDate</Typography> */}
    </ThemeProvider>
    // </Router>
  );
}

export default App;
