import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';

let textInput = 'Findings';

function Findings() {
  return (
    <>
      <HeroSection textInput={textInput}/>
      <Cards />
      <Footer />
    </>
  );
}
export default Findings;