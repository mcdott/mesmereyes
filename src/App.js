import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Title from "./Title";
import SamplerSlider from "./SamplerSlider";
import About from "./About";
import DoodlesList from "./DoodlesList";
import "./App.css";
import doodles from "./doodles-data.json";
import PlaylistSlider from "./PlaylistSlider";
import Sidebar from "./Sidebar";

const App = () => {
  const sampler = doodles.slice(0, 3);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [selectedDoodles, setSelectedDoodles] = useState([]);

  return (
    <div className='App'>
      <NavBar />
      {isHome && (
        <>
          <Title />
          <Sidebar />
          <div className='SamplerSlider'>
            <SamplerSlider slides={sampler} />
          </div>
        </>
      )}
      {!isHome && (
        <div style={{ width: "1000px", height: "1000px", margin: "0 auto" }}>
          <Routes>
            <Route path='/about' element={<About />} />
            <Route
              path='/doodles'
              element={
                <DoodlesList
                  selectedDoodles={selectedDoodles}
                  setSelectedDoodles={setSelectedDoodles}
                />
              }
            />

            <Route
              path='/full_screen_playlist'
              element={
                <PlaylistSlider
                  slides={selectedDoodles}
                  selectedDoodles={selectedDoodles}
                  setSelectedDoodles={setSelectedDoodles}
                />
              }
            />
          </Routes>
        </div>
      )}
    </div>
  );
};

export default App;
