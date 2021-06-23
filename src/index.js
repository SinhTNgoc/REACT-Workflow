import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



//CREATE STORE 
import {createStore} from 'redux';
import myReducer from './reducers';
import { Provider } from 'react-redux';

const store = createStore(myReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());






ReactDOM.render(
  //import store
  <Provider store={store}>
   <App />
  </Provider>,
  document.getElementById('root')
);

