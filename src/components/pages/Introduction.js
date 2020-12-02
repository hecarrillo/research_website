import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

let textInput = 'Introduction';
let fileName = 'IntroductionHero.mp4';

function Introduction() {
  return (
    <>
    <main>
      <HeroSection textInput={textInput} fileName={fileName}/>
      <div className='body'>
        <p>To begin this work, it is important 
          to be clear about who an entrepreneur is, 
          and according to the RAE, an entrepreneur is one 
          who undertakes and begins a work, a business, 
          an endeavor, especially if there is difficulty or danger. <br/>
          The main reason why people start entrepreneurship in Mexico today, 
          according to what has been researched in books, 
          blogs along with the survey done, is because 
          people seek economic independence, seek to improve 
          themselves and become autonomous. It is important to 
          mention that people, according to our sources, invest 
          whenever they are in a stable financial state. <br/>
          Throughout the work, we will formulate some hypotheses 
          which will be the base for answering the research question: 
          why do people undertake businesses? In order to carry 
          out this research with not only our data, we will look for 
          external sources that touch on the subject of 
          entrepreneurship in Mexico, the reasons for doing 
          such a thing nowadays. There are also certain factors 
          that drive entrepreneurship such as skills, decisions, etc. 
          This is why, along with the collected information, we will 
          also try to see certain things that define someone who is an entrepreneur.</p>
        <h2>Hypothesis</h2>
        <p>To carry out this work, we will base ourselves on 2 hypotheses:</p>
        <ol>
          <li>People undertake whenever they are in a stable financial 
            state and do so to achieve financial independence.</li>
          <li>Knowing about economics allows you to undertake, 
            while the most important skill you need is 
            perseverance and discipline.</li>
        </ol>
      </div>
    </main>
    <Footer />
    </>
  );
}
export default Introduction;