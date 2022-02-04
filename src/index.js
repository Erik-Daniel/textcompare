import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {firebaseConfig} from './fireBaseConfig';

const app = initializeApp(firebaseConfig)
getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

