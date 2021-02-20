import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection(textInput) {
  let vid = `./videos/${textInput.fileName}`;
  let fileType = vid.toString().endsWith("mp4");
  return(
    <div className='hero-container'>
      {fileType
      ? <video src={vid} autoPlay loop muted/>
        :<img src={vid}/>
      }
      <h1>{textInput.textInput}</h1>
    </div>
  );
}

export default HeroSection;
