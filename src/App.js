import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import ContactForm from './ContactForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="app">
    <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={ContactForm}/> 
      </Switch>

   
    </div>
    </Router>
  );
}

export default App;
