import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

let textInput = "Why do people decide to undertake businesses?";
const fileName = 'video.mp4';

function Home() {
  return (
    <>
    <main>
      <HeroSection textInput={textInput} fileName={fileName}/>
      <div className='body'>
        <h1>Abstract</h1>
        <p>Why do people decide to undertake businesses? 
          This topic is important nowadays, and a question young people 
          should start asking themselves. Instead, questions like: Why do I need to start a 
          business? Do I need a lot of knowledge? Am I capable enough? among many others, are the ones 
          stopping many people from taking their first step towards starting a new business.<br/>
          The core problem is that most people do not even understand the concept of
          entrepreneurship and, in consequence, fail to carry out their ideas.<br/>
          Entrepreneurship ranges from selling candies at your school to creating a product 
          capable of beating all competition and selling it to multi-billion dollar companies. According 
          to the RAE (Royal Spanish Academy), the term entrepreneuring means: "to undertake and start a work, a business, 
          an endeavour, especially if it contains certain difficulty or danger".<br/>
          Here, you will meet the factors by which people decide to be entrepreneurs, as well as 
          references from books, series, and social networks on the matter. Surveys on the subject 
          were carried out and an analysis of them.</p>
      </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
