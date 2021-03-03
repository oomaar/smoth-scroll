import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from './Screens/HomeScreen';

function App() {
  return (
    <Router>
      <Route exact path="/" component={HomeScreen} />
    </Router>
  );
};

export default App;
