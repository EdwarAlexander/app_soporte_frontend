import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import MainRouter from './router';
import configureStore from './redux/store';
import { Provider } from 'react-redux';

const initialState = {};
const store = configureStore(initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
