import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux"
import store from './Redux/store';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { HelmetProvider } from 'react-helmet-async';

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '10px',
  // you can also just use 'scale'
  transition: transitions.FADE,
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options}>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </AlertProvider>
    </Provider>
  </React.StrictMode>,

  document.getElementById('root')
);