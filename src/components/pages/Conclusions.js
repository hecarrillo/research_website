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
        <h1>Abstract</h1>
        <p>Why do people decide to undertake? 
          Today this topic is highly requested by all people, 
          although most of them are young. Questions like: 
          what do I need to undertake? Do I need a lot of knowledge to undertake? 
          Can everyone undertake? Among many others, they are the ones 
          that stop many people to take that first step and finally start. 
          But the problem is that most people don't even understand the 
          concept of entrepreneurship. This is the main differentiator 
          of people who take the step to entrepreneurship and those who 
          only have a lot of ideas at the head and do not carry them out. 
          Entrepreneurship ranges from selling candy at your school, 
          to creating a processor capable of beating all the competition 
          and offering it to multi-million dollar companies. According 
          to the RAE the term undertake is defined as: to undertake and 
          start a work, a business, an endeavor, especially if they 
          contain difficulty or danger. The work mentions the factors 
          by which people undertake, as well as references in books, 
          series, social networks, etc. Surveys on the subject are 
          mentioned and demonstrated as well as an analysis of results on the subject.</p>
      </div>
      <Footer />
    </>
  );
}
export default Conclusions;