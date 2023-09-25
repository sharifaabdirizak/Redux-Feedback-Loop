import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Feelings from '../Feelings/Feelings.jsx'; // Corrected import

import Understanding from '../Understanding/Understanding.jsx';
import Support from '../Support/Support.jsx';
import Comments from '../Comments/Comments.jsx';
import Review from '../Review/Review.jsx';
import Success from '../Success/Success.jsx';

function App() {
  return (
    <>
    <Router>
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
     
        <Route exact path="/">
          <Feelings /> {/* Corrected component name */}
        </Route>
        <Route exact path="/understanding">
          <Understanding />
        </Route>
        <Route exact path="/support">
          <Support />
        </Route>
        <Route exact path="/comments">
          <Comments />
        </Route>
        <Route exact path="/review">
          <Review />
        </Route>
        <Route exact path="/success">
          <Success />
        </Route>
    
    </div>
    </Router>
    </>
  );
}

export default App;
