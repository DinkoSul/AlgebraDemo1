import React from 'react';

import './Quote.css';

const Quote = ({quote}) => {
    return (
        <div className='quote-container'>
          <p className="quote">
            {quote.quote}
          </p>
          <p className="quote-author">
          Naziv serije:
            <span className='highlight'> {quote.show.name} </span> <br></br>
            Opis:
            <span className='highlight'> {quote.show.summary} </span><br></br>
            Žanrove:
            <span className='highlight'> {quote.show.genres[0]} </span><br></br>
            Ocjena:
            <span className='highlight'> {quote.show.rating.average} </span><br></br>
            <img src={quote.show.image.medium} />
           <hr></hr>
            

           
          </p>
        </div>
      );
};

export default Quote;