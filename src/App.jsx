import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./index.css";
import Footer from "./components/Footer/Footer";
import Signin from "./pages/Login/Signin/Signin";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
