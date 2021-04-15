import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './comonents/Home/Home/Home';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Switch>
        <Route exact path="/home">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
