import React, { useState, useEffect } from "react";
import Doodle from "./Doodle";

function DoodlesList({ selectedDoodles, setSelectedDoodles }) {
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
        <div className='fixed top-0 left-0 w-full h-full bg-gray-800 flex flex-col items-center justify-center'>
          <button
            className='bg-white text-gray-800 py-2 px-4 rounded-md mb-4'
            onClick={handleCloseFullScreen}
          >
            Close
          </button>
          <iframe
            src={fullScreenDoodle.url_full_screen}
            title={fullScreenDoodle.title}
            className='w-full h-full'
          />
        </div>
      )}
      <div className='flex flex-wrap'>
        <div className='w-full'>
          <label
            htmlFor='visual-complexity-filter'
            className='block font-medium mb-2'
          >
            Visual Complexity:
          </label>
          <select
            id='visual-complexity-filter'
            className='py-2 px-4 rounded-md'
            value={visualComplexityFilter}
            onChange={(event) => setVisualComplexityFilter(event.target.value)}
          >
            <option value='ALL'>All</option>
            <option value='LOW'>Low</option>
            <option value='MEDIUM'>Medium</option>
            <option value='HIGH'>High</option>
          </select>
        </div>
        <div className='w-full'>
          <label
            htmlFor='visual-contrast-filter'
            className='block font-medium mb-2'
          >
            Visual Contrast:
          </label>
          <select
            id='visual-contrast-filter'
            className='py-2 px-4 rounded-md'
            value={visualContrastFilter}
            onChange={(event) => setVisualContrastFilter(event.target.value)}
          >
            <option value='ALL'>All</option>
            <option value='LOW'>Low</option>
            <option value='MEDIUM'>Medium</option>
            <option value='HIGH'>High</option>
          </select>
        </div>
      </div>
      <div className='grid grid-cols-3 grid-flow-row gap-4 mt-4'>
        {filteredDoodles.map((doodle, index) => (
          <Doodle
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
