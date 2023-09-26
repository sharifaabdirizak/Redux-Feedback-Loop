import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';
import { applyMiddleware, combineReducers, createStore } from "redux";
import { Provider } from 'react-redux'; 

const feedbackAnswers = (state = {}, action) => {
 
  switch (action.type) {
      case 'ADD_FEELINGS':
          return { ...state, feeling: action.payload };
      case 'ADD_UNDERSTANDING':
          return { ...state, understanding: action.payload };
      case 'ADD_SUPPORT':
          return { ...state, support: action.payload };
      case 'ADD_COMMENT':
          return { ...state, comments: action.payload };
      case 'RESET_FEEDBACK':
          
      default:
          return state;
  }
}
const reduxStore = createStore(
  combineReducers({
     
      feedbackAnswers,
  }),

  applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={reduxStore}> 
            <App />
        </Provider> 
        <App />
    </React.StrictMode>
);
