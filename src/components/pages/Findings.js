import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

let textInput = 'Findings';
let fileName = 'FindingsHero.jpg';

function Findings() {
  return (
    <>
    <main>
      <HeroSection textInput={textInput} fileName={fileName}/>
      <div className='body'>
        <h2>Methodology</h2>
        <p>To reach a full understanding of the subject,
          we will tackle the research question through 
          two types of sources: primary sources, or first-hand 
          information, and secondary sources, documental/processed 
          information. As for the primary sources, this research 
          will gather up the updated statistical information regarding 
          the financial state of Mexico City and its municipalities 
          that organizations provide, and it serves for the research 
          as we meet the context in which entrepreneurs arise and analyse 
          if a certain environment is a motivator or not for entrepreneurship. 
          The second primary source is a self-made survey targeting adults 
          inside Mexico City and neighbouring states, like the State 
          of Mexico or Morelos. The designed questions for the population 
          aimed to meet the reality of entrepreneurship and the beliefs on it. 
          On the other hand, the information collected in the documental 
          sources gives different responses to the research question, as 
          well as suggested profiles for the ideal entrepreneur.</p>
      </div>
      </main>
      <Footer />
    </>
  );
}
export default Findings;