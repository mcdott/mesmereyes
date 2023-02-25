import React, { useEffect } from "react";

const FullScreenIframe = ({ url }) => {
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
    <iframe
      id='fullscreen-iframe'
      title='full screen'
      src={url}
      style={{ border: "none" }}
    />
  );
};

export default FullScreenIframe;
