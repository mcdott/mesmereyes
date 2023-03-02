import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import SamplerSlider from "./SamplerSlider";
import About from "./About";
import DoodlesList from "./DoodlesList";
import "./App.css";
import doodles from "./doodles-data.json";
import PlaylistSlider from "./PlaylistSlider";

const App = () => {
  const sampler = doodles.slice(0, 3);
  const location = useLocation();
  const isPlaylistSlider = location.pathname === "/full_screen_playlist";
  const [selectedDoodles, setSelectedDoodles] = useState([]);

  return (
    <div className='App'>
      {!isPlaylistSlider && <Header />}
      <div>
        <Routes>
          <Route
            path='/'
            element={
              <div
                style={{ width: "800px", height: "800px", margin: "0 auto" }}
              >
                <SamplerSlider slides={sampler} />
              </div>
            }
          />
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
  );
};

export default App;
