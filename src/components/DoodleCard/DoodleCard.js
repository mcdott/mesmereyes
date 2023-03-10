import React from "react";
import "./DoodleCard.css";

function DoodleCard({
  doodle,
  // onTitleClick,
  onAddToPlaylistClick,
  onDeleteFromPlaylistClick,
  selectedDoodles,
}) {
  return (
    <div className='doodle-card'>
      <div className='doodle-iframe'>
        <iframe src={doodle.url_embed} title={doodle.title}></iframe>
      </div>

      <div className='doodle-info'>
        {/* <h3 className='doodle-title' onClick={() => onTitleClick(doodle)}>
          {doodle.title}
        </h3> */}
        <div className='doodle-actions'>
          {selectedDoodles.includes(doodle) ? (
            <button
              className='remove-from-playlist'
              onClick={() => onDeleteFromPlaylistClick(doodle)}
            >
              Remove from playlist
            </button>
          ) : (
            <button
              className='add-to-playlist'
              onClick={() => onAddToPlaylistClick(doodle)}
            >
              Add to playlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default DoodleCard;
