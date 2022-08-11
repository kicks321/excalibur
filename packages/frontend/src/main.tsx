// Dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ExcaliburProvider } from './provider';
import { ApolloClientProvider } from './apollo';
import AppRoutes from './routes';

// Style
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloClientProvider>
      <ExcaliburProvider>
        <AppRoutes />
      </ExcaliburProvider>
    </ApolloClientProvider>
  </React.StrictMode>,
);
