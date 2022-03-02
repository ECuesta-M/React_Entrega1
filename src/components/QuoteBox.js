import React from 'react';
import quotes from '../quotes.json'
import { useState } from 'react';
import Button from './Button';

const QuoteBox = () => {
    const colors = [
        "#8c510a",
        "#bf812d",
        "#dfc27d",
        "#f6e8c3",
        "#c7eae5",
        "#80cdc1",
        "#35978f",
        "#01665e"
      ]

    const random = max => Math.floor(Math.random() * max);

    const [ quote, setQuote ] = useState(quotes[random(quotes.length)]);
    
    const color = colors[random(colors.length)];

    const changeQuote = () => {
        setQuote(quotes[random(quotes.length)]);
    }

    document.body.style.background = color;

    return (
        <div className='card' style={{color}}>
            <p>{quote.quote}</p>
            <h3 className='author'>{quote.author}</h3>
            <Button changeQuote={changeQuote} color={color}/>
        </div>
    );
};

export default QuoteBox;