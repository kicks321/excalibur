// Dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ExcaliburProvider } from './provider';
import { ApolloClientProvider } from './apollo';
import AppRoutes from './routes';

// Style
import './index.css';
import { CssBaseline } from '@mui/material';

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <CssBaseline />
    <ApolloClientProvider>
      <ExcaliburProvider>
        <AppRoutes />
      </ExcaliburProvider>
    </ApolloClientProvider>
  </React.StrictMode>,
);
