import React from "react";
import "./App.css";
import Home from "./Home";
import Footer from './Footer'
import Skills from "./Skills";
import ContactForm from "./ContactForm";
import About from "./About";
import Projects from './Projects'


function App() {
  return (
      <div className="app">
        <div id="home"><Home /></div>
        <div id="about"><About  /></div>
        <div id="projects"><Projects  /></div>
        <div id="skills"><Skills  /></div>
        <div id="contact"><ContactForm  /></div>
        <div id="footer"><Footer /></div>
      </div>
  );
}

export default App;
 