import React from "react";
import "./App.css";
import Home from "./Home";
import Projects from './Projects'
import Skills from "./Skills";
import ContactForm from "./ContactForm";
import About from "./About";
// import Footer from './Footer'

function App() {
 
  return (
    <div className='app'>
         <Home/>
       <About />   
      <Projects /> 
      <Skills /> 
       <ContactForm />
       {/* <Footer /> */}
    </div>
  );
}

export default App;