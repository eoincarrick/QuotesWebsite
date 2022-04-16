import React from 'react';
import { Navbar } from './index';
import { ResultContextProvider } from '../context/ResultContextProvider';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <ResultContextProvider>
        <Navbar />
        {children}
      </ResultContextProvider>
    </React.Fragment>
  );
};

export default Layout;
