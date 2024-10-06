import React, { Fragment } from "react";
import Routes from "Routes";
import Footer from "components/Footer";
import { BrowserRouter } from "react-router-dom";
import WithAlert from "components/WithAlert";

function App() {
  return (
    <BrowserRouter>
      <WithAlert>
        <Routes />
        <Footer />
      </WithAlert>
    </BrowserRouter>
  );
}

export default App;
