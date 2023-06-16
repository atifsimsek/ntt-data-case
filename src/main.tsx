import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/reset.scss';
import './styles/index.scss';
import { ThemeProvider } from '@emotion/react';
import theme from './styles/theme.ts';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
