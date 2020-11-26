import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';

let textInput = 'Conclusions';

function Conclusions() {
  return (
    <>
      <HeroSection textInput={textInput}/>
      <Cards />
      <Footer />
    </>
  );
}
export default Conclusions;