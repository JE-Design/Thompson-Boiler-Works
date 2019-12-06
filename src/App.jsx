import React from "react";
import { CustomToolbar, CustomFooter } from "Components/";
import { LandingPage } from "Pages/";
import "./Styles/App.scss";

function App() {
  return (
    <div className="App">
      <CustomToolbar />
      <LandingPage />
      <CustomFooter />
    </div>
  );
}

export default App;
