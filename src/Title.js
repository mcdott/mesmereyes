import React from "react";
import "./Title.css";

function Title() {
  return (
    <header className='Title'>
      <img
        src='logo.png'
        className='Title-logo'
        alt='logo'
        style={{ width: "100px", height: "100px" }}
      />
      <h1>Mesmereyes</h1>
      <h3>Accessible Gallery of Interactive Creations</h3>
    </header>
  );
}

export default Title;
