import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import ApolloClientProvider from './provider/ApolloClientProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloClientProvider>
      <App />
    </ApolloClientProvider>
  </React.StrictMode>,
);
