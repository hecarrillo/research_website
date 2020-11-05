import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';


function Home() {
  return (
    <>
      <HeroSection inputText={"Why do people decide to undertake businesses?"}/>
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
