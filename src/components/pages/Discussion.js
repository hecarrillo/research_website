import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

let textInput = 'Discussion';
let fileName = 'DiscussionHero.jpg';

function Discussion() {
  return (
    <>
    <main>
      <HeroSection textInput={textInput} fileName={fileName}/>
      <div className='body'>
        <h1>Results</h1>
        <p>According to our data from the surveys, we found 5 
          key data that were already mentioned in the results, 
          but that will help us to discuss certain hypotheses 
          and to analyze them with external information. <br/>
          The data is as follows
        </p>
        <ul>
          <li>The skill that is considered most important to undertake 
            in Mexico is perseverance and discipline.</li>
          <li>The biggest reason people wanted to start undertaking 
              was for independence.</li>
          <li>The people who undertook were because they were in a 
            stable economic state.</li>
          <li>Most of the people think that it is important to know 
            about economics to start a business and its main justification 
            was for the administration you need.</li>
        </ul>
        <p>As we can see, the definition of the RAE that was given at the 
          beginning of the work is very different from the reasons why we 
          find that people undertake.  The definition  says that people undertake 
          when they see a certain risk and difficulty that attract their attention 
          to undertake, while we find that people start an enterprise independently. 
          This is one of the main reasons why we did the survey, not only to be guided 
          by internet data, but also to have real data on society.<br/>
          Accompanied with the investigation of why people undertake, we undertook the 
          task of looking for external sources as in the document "Entrepreneurship 
          of the young population in Mexico. A critical perspective". 
          This document tells us some important aspects of entrepreneurship, 
          but it gives us something key that supports our hypothesis, which is 
          shown in the following paragraph: <br/><br/>
          <strong>In relation to the age and sex of the young people who decide 
          to undertake, there is a greater participation of men for all age 
          groups compared to women. Likewise, a positive relationship is perceived 
          between age and orientation towards entrepreneurship, a circumstance seen 
          mainly in men, because as age increases, interest increases for developing 
          some economic work independently.</strong><br/><br/>
          From the previous paragraph of the UNAM document, we can see two things: 
          young men have a greater participation in entrepreneurship than women. 
          The second thing is that it is mentioned that these young people undertake 
          independently, which is intrinsically related to our hypothesis.<br/>
          Among the other curious things that we found, it is probable that in some 
          entities the creation of businesses will be promoted to a greater extent 
          through financing programs, loans to small entrepreneurs and the formation 
          of human capital; Meanwhile, in other areas, entrepreneurship incentive 
          mechanisms are affected by problems related to corruption, lack of political 
          will or, where appropriate, young people choose to enter the labor market as 
          employees and not as entrepreneurs. Such deductions open up new possibilities 
          for future research aimed at explaining the differences in entrepreneurship 
          by entity from the institutional level. This can be seen in the next graph:</p>
        <img src='%PUBLIC_URL%/images/AB.jpg' className='graph'/>
        <p className='imgfooter'>(Distribution of the young entrepreneurial population 
        in Mexico according to state, 2016. Source: INEGI).</p>
        <p>Knowing that states affect entrepreneurship and that there is a higher percentage 
          of men who undertake, we can see that in 2020 the following is considered:<br/>
          The majority of entrepreneurs in Mexico are 40% young people between 22 and 34 years 
          old, which gives us an idea that the university level is the one that produces the 
          most entrepreneurs, in addition to the fact that the vast majority start without 
          a fiscal activity properly, which makes its measurement complicated.<br/>
          Knowing these things, in a certain part we are correct in our hypothesis, 
          although we lack to contemplate certain factors such as those previously 
          mentioned: education and the affection that states have on entrepreneurship. 
          So, while many of our results showed skills such as discipline, in reality it 
          is a bit linked to school, because after all, your discipline and your knowledge 
          of economics forms it in school.</p>
        <h1>External References</h1>
        <ul>
          <li><a href="https://www.redalyc.org/jatsRepo/4576/457650040001/html/index.html">Entrepreneurship 
          of the young population in Mexico. A critical perspective</a></li>
          <li><a href="https://www.kreativoz.com.mx/blog/estadisticas-emprendimiento-mexico">9 Amazing 
          Things You Didn't Know About Entrepreneurship In Mexico [2020 Statistics]</a></li>
          <li><a href="https://blog.seccionamarilla.com.mx/emprendimiento-en-la-ciudad-mexico-sabes-que-programas-hay/">
          Entrepreneurship in Mexico City, do you know what programs there are?
          </a>
          </li>
        </ul>
      </div>
      </main>
      <Footer />
    </>
  );
}
export default Discussion;