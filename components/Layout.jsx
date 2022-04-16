import React from 'react';
import { ResultContextProvider } from '../context/ResultContextProvider';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <ResultContextProvider>{children}</ResultContextProvider>
    </React.Fragment>
  );
};

export default Layout;
