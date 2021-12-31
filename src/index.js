import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import Reducer from './reducer/index'
import middleware from './middleware';
import { BrowserRouter } from 'react-router-dom';

const store=createStore(Reducer,middleware)

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
  <App />
  </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
