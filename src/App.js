import React, { Fragment } from "react";
import Home from "./pages/Home/container/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
function App() {
  const options = {
    // you can also just use 'bottom center'
    position: positions.TOP_CENTER,
    timeout: 5000,
    offset: "30px",
    // you can also just use 'scale'
    transition: transitions.SCALE,
  };
  return (
    <BrowserRouter>
      <AlertProvider template={AlertTemplate} {...options}>
        <Home />
        <Footer />
      </AlertProvider>
    </BrowserRouter>
  );
}

export default App;
