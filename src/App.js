import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import DoodleSlider from "./DoodleSlider";
import About from "./About";
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
        <Routes>
          <Route path='/' element={<DoodleSlider slides={slides} />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

{
  /* <div style={containerStyles}>
{slides.length > 0 && <DoodleSlider slides={slides} />}
</div> */
}
