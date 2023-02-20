import React, { useState, useEffect } from "react";
import "./DoodlesList.css";

function DoodlesList() {
  const [visualComplexityFilter, setVisualComplexityFilter] = useState("ALL");
  const [visualContrastFilter, setVisualContrastFilter] = useState("ALL");
  const [doodles, setDoodles] = useState([]);
  const [fullScreenDoodle, setFullScreenDoodle] = useState(null);

  useEffect(() => {
    // Get the doodles data and set it to the component state
    const doodlesData = require("./doodles-data.json");
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

  return (
    <div>
      {fullScreenDoodle && (
        <div className='full-screen'>
          <button onClick={handleCloseFullScreen}>Close</button>
          <iframe src={fullScreenDoodle.url} title={fullScreenDoodle.title} />
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
      {fullScreenDoodle && (
        <div className='full-screen'>
          <button onClick={handleCloseFullScreen}>Close</button>
          <iframe src={fullScreenDoodle.url} title={fullScreenDoodle.title} />
        </div>
      )}
      <div className='doodles'>
        {filteredDoodles.map((doodle, index) => (
          <div key={index}>
            <h2
              onClick={() => handleTitleClick(doodle)}
              className='doodle-title'
            >
              {doodle.title} (Click to view in full screen)
            </h2>
            <iframe
              src={doodle.url}
              title={doodle.title}
              width='100%'
              height='100%'
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoodlesList;
