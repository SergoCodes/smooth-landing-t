import React from 'react';
import Navbar from './components/Navbar'
import './App.css'
import {BrowserRouter as Router} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Navbar/>
    </Router>
  );
};

export default App;
