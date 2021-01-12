import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import Home from "./Home";
import Footer from "./Footer";
import Skills from "./Skills";
import ContactForm from "./ContactForm";
import About from "./About";
import Projects from "./Projects";

function App() {
  //setting refs to each componemts
  let pageRef = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  //state for scroll active

  const [scrollActive, setScrollActive] = useState();
  //set state for main container
  const foot = useRef();

  // ignore -> const pageHomeRef = [React.createRef(), React.createRef()];

  //scroll to element on click
  const scrollToRef = (ref) => {
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
  };

  const scrollToPane = (num) => scrollToRef(pageRef[num]);

  //Scroll to bottom
  const scrollToBottom = () => {
    const scroll = foot.current.scrollHeight;

    console.log(foot.current.getBoundingClientRect().top);

    window.scrollTo(0, scroll);
  };

  //change active state on scroll

  useEffect(() => {
    document.addEventListener("scroll", isInViewport);
    return () => {
      document.removeEventListener("scroll", isInViewport);
    };
  }, []);

  const isInViewport = () => {
    //get how much pixels left to scrolling our ReactElement
    const home = pageRef[0].current.getBoundingClientRect().top;
    const homeHeight = pageRef[0].current.getBoundingClientRect().height;
    const about = pageRef[1].current.getBoundingClientRect().top;
    const aboutHeight = pageRef[1].current.getBoundingClientRect().height;
    const projects = pageRef[2].current.getBoundingClientRect().top;
    const projectsHeight = pageRef[2].current.getBoundingClientRect().height;
    const skills = pageRef[3].current.getBoundingClientRect().top;
    const skillsHeight = pageRef[3].current.getBoundingClientRect().height;
    const contact = pageRef[4].current.getBoundingClientRect().top;
    const contactHeight = pageRef[4].current.getBoundingClientRect().height;

    //here we check if element top reference is on the top of viewport
    /*
     * If the value is positive then top of element is below the top of viewport
     * If the value is zero then top of element is on the top of viewport
     * If the value is negative then top of element is above the top of viewport
     * */
    if (home <= 0 && home >= -homeHeight) {
      setScrollActive("home");
    }
    if (about <= 0 && about >= -aboutHeight) {
      setScrollActive("about");
    }
    if (projects <= 0 && projects >= -projectsHeight) {
      setScrollActive("projects");
    }
    if (skills <= 0 && skills >= -skillsHeight) {
      setScrollActive("skills");
    }
    if (contact <= 0 && contact >= -contactHeight) {
      setScrollActive("contact");
    }
  };
  return (
    <div ref={foot} className='app'>
      <div ref={pageRef[0]}>
        <Home
          className='container'
          scrollToPane={scrollToPane}
          scrollToBottom={scrollToBottom}
          scrollActive={scrollActive}
        />
      </div>
      <div ref={pageRef[1]}>
        <About />
      </div>
      <div ref={pageRef[2]}>
        <Projects />
      </div>

      <div ref={pageRef[3]}>
        <Skills />
      </div>
      <div ref={pageRef[4]}>
        <ContactForm />
      </div>
      <div ref={pageRef[5]}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
