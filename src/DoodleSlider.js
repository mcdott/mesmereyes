// SketchSlider.js
import React from "react";
import { useState } from "react";
import "./DoodleSlider.css";

const DoodleSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  return (
    <div className='sliderStyles'>
      <div>
        <div onClick={goToPrevious} className='leftArrowStyles'>
          ❰
        </div>
        <div onClick={goToNext} className='rightArrowStyles'>
          ❱
        </div>
      </div>
      <div className='overlayStyles'></div>
      <iframe
        title={slides[currentIndex].title}
        src={slides[currentIndex].url}
        width='100%'
        height='100%'
      />
      <div className='dotsContainerStyles'>
        {slides.map((slide, slideIndex) => (
          <div
            className='dotStyle'
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoodleSlider;
