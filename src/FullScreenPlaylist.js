import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FullScreenIframe from "./FullScreenIframe";

const FullScreenPlaylist = ({ slides }) => {
  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    // Initialize your p5.js slider here using the current location pathname to determine which slide to display.
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
    setIsFullScreen(true);
  };

  const handleExitFullScreen = () => {
    document.exitFullscreen();
    setIsFullScreen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      handleExitFullScreen();
    }
  };

  return (
    <div className='full-screen-slider'>
      {!isFullScreen && (
        <button onClick={handleFullScreen}>Enter Full Screen</button>
      )}
      <div className='slider-container'>
        <div className='sliderStyles'>
          <div>
            <div onClick={goToPrevious} className='leftArrowStyles'>
              ❰
            </div>
            <div onClick={goToNext} className='rightArrowStyles'>
              ❱
            </div>
            {isFullScreen && (
              <button onClick={handleExitFullScreen}>Exit Full Screen</button>
            )}
            <FullScreenIframe url={slides[currentIndex].url_full_screen} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenPlaylist;

{
  /* <iframe
id='fullscreen-iframe'
title={slides[currentIndex].title}
src={slides[currentIndex].url_full_screen}
className='fullscreen-iframe'
width={isFullScreen ? window.innerWidth : "100%"}
height={isFullScreen ? window.innerHeight : "100%"}
allowFullScreen
/> */
}
