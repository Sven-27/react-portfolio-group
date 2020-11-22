import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import ContactForm from './ContactForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="app">

        <Switch>

          {/* The Contact page route. HAS to be on TOP of Home page DEFAULT!!*/}
          <Route path="/contact" >
            <Navbar />
            <ContactForm />
            <Footer />
          </Route>

          {/* The Home page route, the default */}
          <Route path="/" >
            <Navbar />
            <Home />
            <Footer />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
