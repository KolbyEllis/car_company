import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');

createRoot(root).render(
  <React.StrictMode>
  <Router basename={process.env.PUBLIC_URL || ''}>
    <App />
  </Router>
  </React.StrictMode>
);

reportWebVitals();
