// Library imports
import React from 'react';
import ReactDOM from 'react-dom/client';

// Project imports
import AppRoutes from './routes';
import { ExcaliburProvider } from './provider';
import { ApolloClientProvider } from './apollo';
import { ThemeProvider } from './theme';

// Style
import './index.css';

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <ApolloClientProvider>
      <ThemeProvider>
        <ExcaliburProvider>
          <AppRoutes />
        </ExcaliburProvider>
      </ThemeProvider>
    </ApolloClientProvider>
  </React.StrictMode>,
);
