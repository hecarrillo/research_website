import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

let textInput = 'Why do people decide to undertake businesses?'

function Home() {
  return (
    <>
      <HeroSection inputText={textInput}/>
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
