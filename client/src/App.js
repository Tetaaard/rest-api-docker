import React from 'react'
import {Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Vote from "./components/Vote"
import Ranking from "./components/Ranking"

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Vote} />
        <Route path="/ranking" component={Ranking} />
      </Switch>
    </Router>
  );
}

export default App;

