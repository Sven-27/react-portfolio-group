<<<<<<< HEAD
import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import Blog from './Blog'
import Skills from "./Skills"
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
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/blog" component={Blog} />
          </Switch>

          <Footer />
   
      </div>
    </Router>
  );
=======
import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Blog from "./Blog";
import Skills from "./Skills";
import ContactForm from "./ContactForm";
import About from "./About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
	return (
		<Router>
			<div className="app">
				<Navbar />

				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/contact" component={ContactForm} />
					<Route exact path="/skills" component={Skills} />
					<Route exact path="/blog" component={Blog} />
					<Route exact path="/About" component={About} />
				</Switch>
			</div>
		</Router>
	);
>>>>>>> 8f097a89b21db38f237a161115bac1a960c98f3f
}

export default App;
