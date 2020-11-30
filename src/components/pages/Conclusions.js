import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

let textInput = 'Conclusions';
let fileName = 'ConclusionsHero.mp4';

function Conclusions() {
  return (
    <>
      <HeroSection textInput={textInput} fileName={fileName}/>
      <div className='body'>
        <p><br/>In conclusion, there are lots of factors 
        and reasons why people are starting to undertake. According 
        to our findings and discussion; perseverance and discipline 
        are the main values of an entrepreneur, independence is the 
        main reason, and a stable economic state is a fundamental factor. 
        We can also conclude with this information that people in Mexico 
        City are only undertaking when they have a stable economic status.  
        Another conclusion we have reached is related to the amount of people 
        that undertake in Mexico, where Mexico City won first place and Baja 
        California Sur was left in last place. These people who undertake, are 
        averaging a young age between 22-34 years old. Finally, people who 
        undertake acquire the knowledge to start on school.</p>
      </div>
      <Footer />
    </>
  );
}
export default Conclusions;