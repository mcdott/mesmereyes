import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FullScreenIframe from "./FullScreenIframe";

const PlaylistSlider = ({ slides, selectedDoodles, setSelectedDoodles }) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (isFullScreen) {
        const iframe = document.getElementById("fullscreen-iframe");
        iframe.width = window.innerWidth;
        iframe.height = window.innerHeight;
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isFullScreen]);

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(document.fullscreenElement != null);
    };
    document.addEventListener("fullscreenchange", handleFullScreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const handleFullScreen = () => {
    const elem = document.documentElement;
    elem.requestFullscreen();
  };

  const handleBackToDoodles = () => {
    navigate("/doodles");
  };

  const handleDeleteFromPlaylist = (doodle) => {
    const newSelectedDoodles = selectedDoodles.filter(
      (selectedDoodle) => selectedDoodle !== doodle
    );
    setSelectedDoodles(newSelectedDoodles);
  };

  return (
    <>
      {!isFullScreen && (
        <div>
          <button className='back-to-doodles' onClick={handleBackToDoodles}>
            Back to Doodles
          </button>
          <button className='enter-full-screen' onClick={handleFullScreen}>
            Enter Full Screen
          </button>
        </div>
      )}
      <div className='full-screen-slider'>
        <div className='slider-container'>
          <div className='sliderStyles'>
            <div style={{ position: "relative", zIndex: "2" }}>
              <FullScreenIframe
                url={slides[currentIndex].url_full_screen}
                goToPrevious={goToPrevious}
                goToNext={goToNext}
              />
            </div>
          </div>
        </div>
        <div className='playlist'>
          {selectedDoodles.map((doodle, index) => (
            <div key={index} className='playlist-item'>
              <button
                onClick={() => {
                  handleDeleteFromPlaylist(doodle);
                }}
              >
                Delete from Playlist
              </button>
              <img src={doodle.thumbnail_url} alt={doodle.title} />
              <div className='playlist-item-title'>{doodle.title}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PlaylistSlider;
