import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection(textInput) {
  let vid = `/research_website/videos/${textInput.fileName}`;
  let fileType = vid.toString().endsWith("mp4");
  return(
    <div className='hero-container'>
      {fileType
      ? <video src={vid} autoplay loop muted/>
        :<img src={vid}/>
      }
      <h1>{textInput.textInput}</h1>
    </div>
  );
}

export default HeroSection;
