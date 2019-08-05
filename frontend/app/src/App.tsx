import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Map } from './components/Map';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" component={Map} />
    </Router>
  );
};

export default App;
