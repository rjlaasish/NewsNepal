import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './assets/styles/index.css'
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
=======

ReactDOM.render(
  <React.StrictMode>
    <App />
>>>>>>> 3c9846a0c2dc748a749e753aec0c401e9d60e498
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
