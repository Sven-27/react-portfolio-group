import React from "react";
import "./App.css";
import Home from "./Home";
import Footer from './Footer'
import Footer2 from './Footer2'
import Footer3 from './Footer3'
import Skills from "./Skills";
import ContactForm from "./ContactForm";
import About from "./About";
import Projects from './Projects'
import Testimonial from './Testimonial'

function App() {
  return (
      <div className="app">
        <div id="home"><Home /></div>
        <div id="about"><About  /></div>
        <div id="projects"><Projects  /></div>
        <div id="skills"><Skills  /></div>
        <div id="testimonial"><Testimonial /></div>
        <div id="contact"><ContactForm  /></div>
        <div id="footer"><Footer2 /></div>
      </div>
  );
}

export default App;
    // <Router>

        {/* <Navbar /> */}
        {/* <Switch>
        
         <Route exact path="/" component={Home} />         
          <Route exact path="/contact" component={ContactForm} />       
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/testimonial" component={Testimonial} />
          <Route exact path="/about" component={About}/>
          <Route exact path="/projects" component={Projects} />
        </Switch> */}
       
       
        {/* <Footer /> */}
        
        
      {/* <Footer3 />   */}
        // </Router> 