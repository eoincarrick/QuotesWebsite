import React, { useState, useContext, createContext } from 'react';

const ResultContext = createContext();

export const ResultContextProvider = ({ children }) => {
  const [result, setResult] = useState([]);
  const baseURL = 'https://life-purpose-quotes-db.p.rapidapi.com/quotes';

  const getLifeQuotes = async () => {
    try {
      const response = await fetch(baseURL, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'life-purpose-quotes-db.p.rapidapi.com',
          'X-RapidAPI-Key':
            '3f52cd0afbmsh9e6df75380f0942p1214c8jsn9361cc771834',
        },
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ResultContext.Provider value={{ result, getLifeQuotes }}>
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
