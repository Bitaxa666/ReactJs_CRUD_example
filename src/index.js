/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);*/
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import './index.css';
import rootReducer from './rootReducer'



let store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Provider store={store}>
                <App />
            </Provider>
        </div>
    </BrowserRouter>,
    document.getElementById('root'),
);