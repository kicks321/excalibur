import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

type Props = {
  children?: React.ReactNode;
};

const BASE_URL = `http://localhost`;
const PORT = import.meta.env.VITE_PORT;

const ApolloClientProvider: React.FC<Props> = ({ children }) => {
  console.log('Meta: ', import.meta);
  console.log('Env: ', import.meta.env);

  const client = new ApolloClient({
    uri:
      import.meta.env.MODE === 'production'
        ? BASE_URL + ':' + PORT + '/graphql'
        : 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
