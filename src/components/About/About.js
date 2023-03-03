import React from "react";
import "./About.css";

function About() {
  return (
    <div className='about'>
      <h1 className='about-title'>About</h1>
      <p className='about-description'>
        Mesmereyes is a gallery of interactive creations sourced from the{" "}
        <a
          href='https://openprocessing.org/'
          target='_blank'
          rel='noopener noreferrer'
          className='about-link'
        >
          OpenProcessing
        </a>{" "}
        community. These errorless, cause and effect activities have been chosen
        as particularly suitable for playful exploration by users who access a
        computer via eye gaze and/or switch.
      </p>
    </div>
  );
}

export default About;
