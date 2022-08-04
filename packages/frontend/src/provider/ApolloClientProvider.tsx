import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

type Props = {
  children?: React.ReactNode;
};

const ApolloClientProvider: React.FC<Props> = ({ children }) => {
  const client = new ApolloClient({
    uri:
      import.meta.env.MODE === 'production'
        ? `http://localhost:4000/graphql`
        : 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
