import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ApplicationStatePolicy } from './Cache/ReactiveVarsCache';

type Props = {
  children?: React.ReactNode;
};

const ApolloClientProvider: React.FC<Props> = ({ children }) => {
  const client = new ApolloClient({
    uri:
      import.meta.env.MODE === 'production'
        ? 'https://rangyia-excalibur.herokuapp.com/graphql'
        : 'http://localhost:4000/graphql',
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            ...ApplicationStatePolicy,
          },
        },
      },
    }),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
