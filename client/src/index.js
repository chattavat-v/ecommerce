import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/popper.js/dist/umd/popper.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/jarallax/dist/jarallax.min.js';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from './Reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store} >
    <App />
    </Provider>
    , document.getElementById('root'));