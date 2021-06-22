import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



//CREATE STORE 
import {createStore} from 'redux';
import myReducer from './reducers';
import { Provider } from 'react-redux';

const store = createStore(myReducer);






ReactDOM.render(
  //import store
  <Provider store={store}>
   <App />
  </Provider>,
  document.getElementById('root')
);

