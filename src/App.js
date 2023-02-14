import React, { useState, useEffect } from "react";
import Header from "./Header";
import DoodleSlider from "./DoodleSlider";
import "./App.css";
import slides from "./slides-data.json";

const App = () => {
  const containerStyles = {
    width: "800px",
    height: "800px",
    margin: "0 auto",
  };

  return (
    <div className='App'>
      <Header />
      <div style={containerStyles}>
        {slides.length > 0 && <DoodleSlider slides={slides} />}
      </div>
    </div>
  );
};

export default App;
