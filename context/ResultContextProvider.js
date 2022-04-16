import React, { useState, useContext, createContext } from 'react';

const ResultContext = createContext();

export const ResultContextProvider = ({ children }) => {
  const [result, setResult] = useState([]);
  const baseURL = 'https://quotes15.p.rapidapi.com/quotes/random/';

  const getQuotes = async () => {
    try {
      const response = await fetch(baseURL, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
          'X-RapidAPI-Key':
            'f01687c65emsheaaef840bfca25dp1de079jsn9678bec10359',
        },
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ResultContext.Provider value={{ result }}>
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
