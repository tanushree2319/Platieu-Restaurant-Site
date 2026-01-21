import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/main.scss';

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/Platieu-Restaurant-Site/">
      <App />
    </BrowserRouter>
  </StrictMode>,
);

// Debug: log computed body background color (helps diagnose which rule wins)
setTimeout(() => {
  try {
    // eslint-disable-next-line no-console
    console.log('DEBUG: body backgroundColor =', getComputedStyle(document.body).backgroundColor);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('DEBUG: could not read computed style', e);
  }
}, 800);
