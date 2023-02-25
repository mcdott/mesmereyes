import React, { useEffect, useRef } from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";

function sketch(p) {
  let canvas;
  p.setup = () => {
    canvas = p.createCanvas(p.width, p.height);
  };
  p.draw = () => {
    p.background(220);
    p.ellipse(p.width / 2, p.height / 2, 200, 200);
  };

  // Resize the canvas when the window is resized
  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
}

function Circle() {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const { clientWidth, clientHeight } = wrapperRef.current;
    const canvas = document.querySelector(".p5Canvas");
    canvas.style.width = `${clientWidth}px`;
    canvas.style.height = `${clientHeight}px`;
  }, []);

  return (
    <div ref={wrapperRef}>
      <h1>Circle</h1>
      <ReactP5Wrapper
        sketch={sketch}
        width={800}
        height={800}
        style={{ display: "block", padding: "10px", margin: "10px" }}
        className='my-p5-wrapper'
      />
      <style>{`
        .my-p5-wrapper canvas {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
}

export default Circle;
