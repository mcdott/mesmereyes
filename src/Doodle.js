import React from "react";
import PropTypes from "prop-types";
import "./Doodle.css";

const Doodle = ({
  doodle,
  onTitleClick,
  onAddToPlaylistClick,
  onDeleteFromPlaylistClick,
  selectedDoodles,
}) => {
  const isDoodleSelected = selectedDoodles.includes(doodle);

  return (
    <div className='doodle'>
      <h2 onClick={() => onTitleClick(doodle)} className='doodle-title'>
        {doodle.title}
      </h2>
      <img src={doodle.thumbnail} alt={doodle.title} />
      {!isDoodleSelected && (
        <button onClick={() => onAddToPlaylistClick(doodle)}>
          Add to Playlist
        </button>
      )}
      {isDoodleSelected && (
        <button onClick={() => onDeleteFromPlaylistClick(doodle)}>
          Delete from Playlist
        </button>
      )}
    </div>
  );
};

Doodle.propTypes = {
  doodle: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
  onTitleClick: PropTypes.func.isRequired,
  onAddToPlaylistClick: PropTypes.func.isRequired,
};

export default Doodle;
