import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <div className="app">
      <Router>
      <Navbar />
      <Home /> 
      </Router>
   
    </div>
  );
}

export default App;
