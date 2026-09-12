import Navbar from "./components/Navbar";
import React, { useContext } from "react";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";
import Products from "./components/Products";
import Promo from "./components/Promo";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <Products />
      <Promo />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
