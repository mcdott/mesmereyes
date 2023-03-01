import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SamplerSlider from "./SamplerSlider";
import About from "./About";
import DoodlesList from "./DoodlesList";
import doodles from "./doodles-data.json";
import PlaylistSlider from "./PlaylistSlider";
import "normalize.css";

const App = () => {
  const sampler = doodles.slice(0, 3);
  const location = useLocation();
  const isPlaylistSlider = location.pathname === "/full_screen_playlist";
  const [selectedDoodles, setSelectedDoodles] = useState([]);

  return (
    <div style={{ backgroundColor: "#1A202C" }}>
      {/* Conditionally render Header component */}
      {!isPlaylistSlider && <Header />}
      <div style={{ display: "flex", justifyContent: "center" }}>
        {location.pathname === "/" && (
          <div
            style={{ display: "flex", alignItems: "stretch", margin: "0 20px" }}
          >
            <div style={{ width: "200px", height: "100%" }}>
              <Sidebar />
            </div>
            <div style={{ height: "800px", width: "800px" }}>
              <SamplerSlider slides={sampler} />
            </div>
          </div>
        )}
        <div style={{ overflow: "auto", height: "100%" }}>
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
      </div>
    </div>
  );
};

export default App;
