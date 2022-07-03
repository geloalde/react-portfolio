
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppHeader from './header/AppHeader';
import "./header/AppHeaderCSS.css";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import AppCards from './cards/AppCards';
import "./cards/AppCards.css";







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppHeader />
    <AppCards />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
