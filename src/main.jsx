import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './components/styles/theme';
import '@fontsource/satisfy/400.css';
import '@fontsource-variable/mulish';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
