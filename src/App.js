import React from 'react';
import './App.css';
import NavbarHome from './NavbarHome';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import Blog from './Blog'
import Skills from "./Skills"
import ContactForm from './ContactForm';
import About from './About';
import Projects from './Projects';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="app">

        <Switch>

          <Route exact path="/" >

            <NavbarHome />
            <Home />

          </Route>

          <Route exact path="/contact" >

            <Navbar />
            <ContactForm />
            <Footer />

          </Route>

          <Route exact path="/skills" >

            <Navbar />
            <Skills />
            <Footer />

          </Route>

          <Route exact path="/about" >

            <Navbar />
            <About />
            <Footer />

          </Route>

          <Route exact path="/blog" >

            <Navbar />
            <Blog />
            <Footer />

          </Route>

          <Route exact path="/projects" >

            <Navbar />
            <Projects />
            <Footer />

          </Route>

        </Switch>

      </div>

    </Router>
  );
}

export default App;