import _ from 'lodash';

export const requestQuotes = _.memoize(async title => {
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${title}`)
    if(res.status !== 200) return [];

    const quotesArray = await res.json();
    return quotesArray;
});