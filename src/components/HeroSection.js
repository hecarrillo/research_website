import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection(textInput) {
  return (
    <div className='hero-container'>
      <video src='/videos/video.mp4' autoPlay loop muted />
      <h1>{textInput.textInput}</h1>
    </div>
  );
}

export default HeroSection;
