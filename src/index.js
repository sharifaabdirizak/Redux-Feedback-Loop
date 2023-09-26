import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';
import { applyMiddleware, combineReducers, createStore } from "redux";
import { Provider } from 'react-redux'; 

const feedbackAnswers = (state = {}, action) => {
  //going to use a switch here because i think i'm going to end up only using one reducer? we'll see
  //but if end up using only one reducer, i'll have 4 if statements and that's going to be hard to read/bulky
  //a switch is in this case for better readability
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
          //return an empty array when starting over the loop
          return {};
      default:
          return state;
  }
}
const reduxStore = createStore(
  combineReducers({
      //sending over feebackAnswers to use in react app
      feedbackAnswers,
  }),
  //this will show us previous state, the action, and next state in the console on the DOM
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
