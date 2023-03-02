import React, { useEffect } from "react";

const FullScreenIframe = ({ url, goToPrevious, goToNext }) => {
  useEffect(() => {
    const handleResize = () => {
      const iframe = document.getElementById("fullscreen-iframe");
      if (iframe) {
        iframe.width = window.innerWidth;
        iframe.height = window.innerHeight;
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <iframe
        id='fullscreen-iframe'
        title='full screen'
        src={url}
        style={{ border: "none" }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <div onClick={goToPrevious} className='leftArrowStyles'>
          ❰
        </div>
        <div onClick={goToNext} className='rightArrowStyles'>
          ❱
        </div>
      </div>
    </div>
  );
};
export default FullScreenIframe;
