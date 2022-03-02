import React from 'react';

const Button = ({changeQuote, color}) => {
    return (
        <div className='button-container'>
            <button className='button' onClick={changeQuote} style={{color: color}}><i></i>Search</button>
        </div>
    );
};

export default Button;