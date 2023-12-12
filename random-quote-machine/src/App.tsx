import { useState } from "react";
import "./App.css";
import quotes from "./assets/quotes.json";
import {FaTwitter, FaQuoteLeft, FaQuoteRight} from "react-icons/fa";

interface Quote{
  quote: string;
  author: string;
}

const getRandomQuote = () => {
  return quotes[Math.floor(Math.random()*quotes.length)];
};
/*
const getRandomColor = () => {
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);
  return 'rgb(${red}, ${green}, ${blue})'
};

const transition = "all 1s";
*/
function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
//  const [randomColor]=useState<string>(getRandomColor());
  const changeQuote=()=> {
    setQuote(getRandomQuote());
   // setRandomColor(getRandomColor());
  }
  return (
    <div className="background">
      <div id="quote-box">
        <div className="quote-content">
            <h2 id="text">
            <FaQuoteLeft size="30" style={{marginRight: "10px"}}/>
            {quote.quote}</h2>
          <FaQuoteRight size="30" style={{marginRight: "10px"}}/>
          <h4 id="author">-{quote.author}</h4>
        </div>
        <div className="buttons">
          <a
          href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=$(quote.quote)"}
          id="tweet-quote"
          style={{
            backgroundColor: "blue",
            marginRight: "10px",
            
          }}
          >
            <FaTwitter color="white"/>
          </a>
          <button id="new-quote" onClick={changeQuote} >New Quote </button>
        </div>
      </div>
    </div>
  );

}

export default App;

