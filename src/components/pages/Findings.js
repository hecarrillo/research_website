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
        <h1>Methodology</h1>
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
        <h1>Research results</h1>
        <h2>Primary Sources</h2>
        <h3>Survey</h3>
        <p>The first question of the survey let us know that only a fourth 
          of the population that answered was non-entrepreneurial, meaning 
          that the information obtained from the self-made survey would be 
          an introspective exercise in which the entrepreneur sees his reality 
          and reflects on it.<br/>
          It was found that the majority of the entrepreneurs had started 
          this activity when in financial stability, but also that the main 
          motivation for starting an own business was for independence, 
          as we can clearly see en the graph below:</p>
        <img src='../../images/A.jpg' className='graph'/>
        <p className='imgfooter'>(Motivations for entrepreneuring 
        according to financial state).</p>
        <p>It is not surprising that people that undertook business when in 
          crisis would have for motivation “necessity”; nonetheless, four of 
          them mentioned that they sought for financial security, and from those 
          same four, three thought that knowledge of economy is not necessary. 
          This information suggests that an entrepreneur does not really need to 
          have economic knowledge, but this is instead a tool for doing a better 
          job. This last claim is backed by the following graph:</p>
        <img src='../../images/B.jpg' className='graph'/>
        <p className='imgfooter'>(Thoughts on the necessity of economy 
        for entrepreneuring according to the motivations for entrepreneuring).</p>
        <p>At first glance, it can be seen that most groups are divided in 
          half between those who think that economic knowledge is necessary 
          (group A) and those who do not believe this claim is true (group B). 
          The group of people which started a business for financial security, 
          however, is the group which contributed the most for the total amount 
          of group A due to the clear difference between 6 and 14 people. 
          This group is followed by that one which started business for pleasure, 
          there being a 4:1 ratio between those who belonged to group A and B, respectively. 
          Nonetheless, it needs to be considered that A is countered by the people 
          which started business for necessity and, in general, the other groups, 
          which, as said in the beginning of the paragraph, are evenly divided between both groups. 
          The overall answer for this question is “yes” in both entrepreneurs and non-entrepreneurs. <br/>
          Should we turn to the non-entrepreneur sample, apart from the belief 
          that economic knowledge is necessary for entrepreneurship, we can see 
          another concordance between what entrepreneurs live or have lived, 
          and what the non-entrepreneurs think of the entrepreneurs. Having said 
          this, we can observe this tendency in the following graphs: </p>
        <img src='../../images/C.jpg' className='graph'/>        
        <p className='imgfooter'>(Entrepreneurs’ reasons for starting a business)</p>
        <img src='../../images/D.jpg' className='graph'/>
        <p className='imgfooter'>(Non-entrepreneurs’ guesses on the reasons for starting a business)</p>
        <p>Not only is there a concordance on this information, but also the ideals of 
          entrepreneurship between entrepreneurs and non-entrepreneurs; therefore, 
          the following graph gives an idea of the general skills and conception of 
          what entrepreneurship is:</p>
        <img src='../../images/E.jpg' className='graph'/>
        <p className='imgfooter'>(Skills of the ideal entrepreneur)</p>
        <p>It should be clarified that this was an open question, but the answers were 
        categorized as above. There is a difference between initiative and motivation, 
        being the latter more related to perseverance than an initial impulse towards 
        creation. The “Others” section contain skills like flexibility, talent, efficiency, 
        strategy, analysis and organisational skills. Finally, social abilities stand 
        for eloquence, leadership, assertivity, resilience and contacts.</p>
        <h2 id='secondarysources'>Secondary sources</h2>
        <div className='grid'>
          <div className="box sourcetitle">
            <h4>Webpage</h4>
            </div>
          <div className='box sourcecontent'>
            <p>There is not actually 
            a single answer to the question on why people decide to 
            take on businesses. Efforts have been made to discover a 
            psychological profile that is shared amongst the best entrepreneurs, 
            failing however. Nonetheless, some circumstances pave the way for 
            motivation to start a business, these being sentiment, innovation, 
            necessity and independence. <br/>
            The first motivator is essentially innate, because the entrepreneur 
            has a clear idea on what he/she wants. On the other hand, 
            the desire for innovation makes the individual forget the 
            past or the future in favour of the present and the belief of 
            having a valuable idea that has to be materialized. 
            Urgency for undertaking makes up for the third motivator, as 
            the person needs to be in a more comfortable financial position. 
            Finally, aspiration for independence arises from contemplation, that 
            moment when he/she  realizes they have no control over their existence.</p>
          </div>
          <div className="box sourcetitle" id='book'><h4>Book</h4></div>
          <div className='box sourcecontent'>
            <p>According to a Gallup’s survey, 71% of United States’ citizens prefered 
              to be their own boss, but in reality, this figure would be much higher 
              if the people realized that they need to have more control over their 
              financial situation. On this line of thought, every entrepreneur is just 
              expressing their human nature, and those who are not, 
              have not discovered their nature. <br/>
              But this nature has not been forever innate, because it has been developing 
              since the agrarian era, just when kings extended their lands to farmers, 
              who earned a life out of being entrepreneurs with small businesses, those 
              being the lands. The business fever came afterwards, with a massive amount 
              of employees that came out of a prusian education system. Then, the global 
              financial crisis came, and the psychology of the employee mutated, realizing 
              the lack of financial security that from the start had been existing, therefore, 
              their entrepreneurial nature came out again, with the desire of having 
              financial independence.</p>
          </div>
          <div className="box sourcetitle"><h4>Paper</h4></div>
          <div className='box sourcecontent'>
            <p>The “paper” called “the entrepreneurial person and the business idea” 
              tells us in Chapter 3 about the motivation of people to be an entrepreneur. 
              This chapter in particular tells us that today's reality teaches us that a 
              person creates a company out of vocation or necessity. In either of the two 
              previous situations, success and failure do not depend so much on the reason 
              for starting the business, but rather on how to create and manage it. 
              In addition, it teaches us that among the most important reasons why a 
              person wants to start a business is because they are not satisfied with 
              their work, because of the idea of ​​getting rich, because they want to 
              prove something to someone or because they want to patent something and 
              in this way make a new product or service profitable. But the most common 
              reason is because of the autonomy it generates.</p>
          </div>
          <div className="box sourcetitle"><h4>Blog/Influencer</h4></div>
          <div className='box sourcecontent'>
            <p>The video called "10 reasons to be an entrepreneur and not an employee", 
              is a video made by a group of influencers who have a company called: 
              "Business and entrepreneurship." The video shows us that dedicating yourself 
              to what you are passionate about is one of the first reasons why people invest, 
              because by starting a business that they like, they will no longer have 
              to suffer as employees. Being an entrepreneur, you are free, since you are 
              your own boss and in this way you will have your own financial independence, 
              without having to depend on anyone else. Among other reasons, we are told 
              that you will be able to generate employment and this becomes very satisfactory 
              if you are someone who tends to help people. Also, we are shown that by being 
              an entrepreneur, you will grow personally and professionally, because you will 
              find many challenges along your path that will help you improve. Finally, 
              the most important reason is because of the importance of someone, because 
              with being an entrepreneur you will not be like the rest of the crowd, but 
              you will stand out in something that you like and you will also generate money.</p>
          </div>
          <div className="box sourcetitle"><h4>Series</h4></div>
          <div className='box sourcecontent'>
            <p>Despite not being a series that inspires to do things within the law. 
              Breaking Bad is undoubtedly a series that in addition to standing out 
              on a cinematic level, stands out in the way it shows how hard the road 
              can be from starting your business to the top. The teachings that the 
              series gives are many, with which we want to emphasize is the teaching 
              of how hard work and not giving up pays off. When you undertake you will 
              have to face many adversities and no matter how much they hit you, if you 
              really trust your skills you must continue fighting for your future. 
              In addition to the hard work that the series demonstrates, another great 
              principle in the world of entrepreneurship is trust. There are many cases 
              in which entrepreneurs have lost their idea or product at the hands of more 
              powerful entrepreneurs. That is why trust becomes a principle, plus the 
              ability to detect someone with bad intentions must improve over the years.</p>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </>
  );
}
export default Findings;