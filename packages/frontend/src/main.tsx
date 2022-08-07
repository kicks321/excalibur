// Dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import ApolloClientProvider from './provider/ApolloClientProvider';

// Style
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloClientProvider></ApolloClientProvider>
  </React.StrictMode>,
);
