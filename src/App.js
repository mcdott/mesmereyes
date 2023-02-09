import React from "react";
import Header from "./Header";
import SketchSlider from "./SketchSlider";
const App = () => {
  const slides = [
    {
      url: "https://openprocessing.org/sketch/1554172/embed/",
      title: "Sine Wobbler",
    },
    {
      url: "https://openprocessing.org/sketch/1744394/embed/",
      title: "1744394",
    },
    {
      url: "https://openprocessing.org/sketch/1619381/embed/",
      title: "forest",
    },
    {
      url: "https://openprocessing.org/sketch/1620516/embed/",
      title: "Blob Soup",
    },
    {
      url: "https://openprocessing.org/sketch/1555443/embed/",
      title: "Interactive Blob",
    },
  ];
  const containerStyles = {
    width: "800px",
    height: "800px",
    // width: "1000px",
    // height: "560px",
    margin: "0 auto",
  };
  return (
    <div className='App'>
      <Header />
      <div style={containerStyles}>
        <SketchSlider slides={slides} />
      </div>
    </div>
  );
};

export default App;
