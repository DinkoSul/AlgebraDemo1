import React, { useCallback, useState } from 'react';

import './App.css';
import Quote from './Quote';
import SearchBar from './SearchBar';
import { requestQuotes } from './apis/animeChan';

const App = () => {
  const [quotes, setQuotes] = useState([]);

  const onSearchSubmit = useCallback(async term => {
    const quotesArray = await requestQuotes(term.toLowerCase());
    setQuotes(quotesArray);

  });

  const clearResults = useCallback(() => setQuotes([]));

  const renderedQuotes = quotes.map((quote, i) => {
    return <Quote quote={quote} key={i} />
  })

  return (
    <div className='app'>
      <h1 className='title'>Pretraži serije</h1>

      <SearchBar onSearchSubmit={onSearchSubmit} clearResults={clearResults}/>

      <div className='main-content'>
        {renderedQuotes}
      </div>

    </div>
  );
};

export default App;