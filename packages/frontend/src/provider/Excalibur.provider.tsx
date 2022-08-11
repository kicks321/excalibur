import React, { useMemo, useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';

type ExcaliburProviderProps = {
  children?: React.ReactNode;
};

type ExcaliburContextProps = {
  authenticated: boolean;
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

const ExcaliburContext = React.createContext<ExcaliburContextProps>({
  authenticated: false,
  setAuthenticated: () => null,
});

const ExcaliburProvider = ({ children }: ExcaliburProviderProps) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  const value = useMemo(
    () => ({
      authenticated,
      setAuthenticated,
    }),
    [],
  );

  return (
    <ExcaliburContext.Provider value={value}>
      <Router>{children}</Router>
    </ExcaliburContext.Provider>
  );
};

export default ExcaliburProvider;
