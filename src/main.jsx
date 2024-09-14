import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Ensure the correct path to App.jsx
import './index.css'; // Optional, if you have global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);