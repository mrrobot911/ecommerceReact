import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import AuthProvider from '@/provider/auth-provider';
import Routes from '@/routes';

import '@/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
