import React, { useState, useEffect } from "react";
import "./DoodlesList.css";
import DoodleCard from "../DoodleCard/DoodleCard";

function DoodlesList({ selectedDoodles, setSelectedDoodles }) {
  const [visualComplexityFilter, setVisualComplexityFilter] = useState("ALL");
  const [visualContrastFilter, setVisualContrastFilter] = useState("ALL");
  const [doodles, setDoodles] = useState([]);
  const [fullScreenDoodle, setFullScreenDoodle] = useState(null);

  useEffect(() => {
    // Get the doodles data and set it to the component state
    const doodlesData = require("../../doodles-data.json");
    setDoodles(doodlesData);
  }, []);

  // Filter the doodles based on the selected filters
  let filteredDoodles = doodles;
  if (visualComplexityFilter !== "ALL") {
    filteredDoodles = filteredDoodles.filter(
      (doodle) => doodle.visual_complexity === visualComplexityFilter
    );
  }
  if (visualContrastFilter !== "ALL") {
    filteredDoodles = filteredDoodles.filter(
      (doodle) => doodle.visual_contrast === visualContrastFilter
    );
  }

  const handleTitleClick = (doodle) => {
    setFullScreenDoodle(doodle);
  };

  const handleCloseFullScreen = () => {
    setFullScreenDoodle(null);
  };

  const handleAddToPlaylist = (doodle) => {
    setSelectedDoodles([...selectedDoodles, doodle]);
  };

  const handleDeleteFromPlaylist = (doodle) => {
    const newSelectedDoodles = selectedDoodles.filter(
      (selectedDoodle) => selectedDoodle !== doodle
    );
    setSelectedDoodles(newSelectedDoodles);
  };

  return (
    <div>
      {fullScreenDoodle && (
        <div className='full-screen'>
          <button onClick={handleCloseFullScreen}>Close</button>
          <iframe
            src={fullScreenDoodle.url_full_screen}
            title={fullScreenDoodle.title}
          />
        </div>
      )}
      <div className='filter-container'>
        <div className='filter-menu'>
          <label>
            Visual Complexity:
            <select
              value={visualComplexityFilter}
              onChange={(event) =>
                setVisualComplexityFilter(event.target.value)
              }
            >
              <option value='ALL'>All</option>
              <option value='LOW'>Low</option>
              <option value='MEDIUM'>Medium</option>
              <option value='HIGH'>High</option>
            </select>
          </label>
        </div>
        <div className='filter-menu'>
          <label>
            Visual Contrast:
            <select
              value={visualContrastFilter}
              onChange={(event) => setVisualContrastFilter(event.target.value)}
            >
              <option value='ALL'>All</option>
              <option value='LOW'>Low</option>
              <option value='MEDIUM'>Medium</option>
              <option value='HIGH'>High</option>
            </select>
          </label>
        </div>
      </div>
      <div className='doodles'>
        {filteredDoodles.map((doodle, index) => (
          <DoodleCard
            key={index}
            doodle={doodle}
            onTitleClick={handleTitleClick}
            onAddToPlaylistClick={handleAddToPlaylist}
            onDeleteFromPlaylistClick={handleDeleteFromPlaylist}
            selectedDoodles={selectedDoodles}
          />
        ))}
      </div>
    </div>
  );
}

export default DoodlesList;
