import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from './Screens/HomeScreen';
import SigninScreen from './Screens/SigninScreen';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/signin" component={SigninScreen} />
      </Switch>
    </Router>
  );
};

export default App;
