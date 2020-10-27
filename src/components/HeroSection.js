import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { FaTruckMoving } from 'react-icons/fa';
import { FaBusAlt } from 'react-icons/fa';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video.mp4' autoPlay loop muted />
      <h1>Why do people decide to undertake businesses?</h1>
      {/* <div className='hero-btns'>        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Productos
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Contacto 
        </Button>
      </div> */}
    </div>
  );
}

export default HeroSection;
