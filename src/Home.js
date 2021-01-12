import React, { useState, useRef, useEffect } from "react";
import "./Home.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
// eslint-disable-next-line
// import Typing from './Typing';

//live share test
// Here is another comment.

function Home({ scrollToPane, scrollToBottom, scrollActive }) {
  const [buttonState, setbuttonState] = useState(true);
  const [activeState, setActiveState] = useState("home");
  // const [homelink, setHomelink] = useState();
  // const [aboutlink, setAboutlink] = useState();
  // const [projectlink, setProjectlink] = useState();
  // const [skillslink, setSkillslink] = useState();
  // const [contactlink, setContactlink] = useState();
  const homePage = useRef(null);

  const hideMobileMenu = () => {
    if (window.innerWidth < 672) {
      setbuttonState(true);
    }
  };

  function test(link, ref) {
    scrollToPane(ref);
    setActiveState(link);
  }

  useEffect(() => {
    window.scrollTo({
      top: homePage.current.offsetTop,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    setActiveState(scrollActive);
  }, [scrollActive]);

  return (
    <div ref={homePage} className='home'>
      <header className='home__container'>
        <div className='home__home' id='div'>
          <div className={buttonState ? "home__buttons hide" : "home__buttons"}>
            <ul onClick={hideMobileMenu}>
              <li
                className={
                  activeState === "home" ? "home__home active" : "home__home"
                }
                onClick={() => test("home", 0)}
              >
                Home
              </li>
              <li
                className={
                  activeState === "about" ? "home__home active" : "home__home"
                }
                onClick={() => test("about", 1)}
              >
                About
              </li>
              <li
                className={
                  activeState === "projects"
                    ? "home__home active"
                    : "home__home"
                }
                onClick={() => test("projects", 2)}
              >
                Projects
              </li>
              <li
                className={
                  activeState === "skills" ? "home__home active" : "home__home"
                }
                onClick={() => test("skills", 3)}
              >
                Skills
              </li>
              <li
                className={
                  activeState === "contact" ? "home__home active" : "home__home"
                }
                onClick={() => test("contact", 4)}
              >
                Contact
              </li>
              <li
                className={
                  activeState === "footer" ? "home__home active" : "home__home"
                }
                onClick={scrollToBottom}
              >
                Info
              </li>
            </ul>
          </div>

          <div
            className='mobile__button'
            onClick={() => setbuttonState(!buttonState)}
          >
            {buttonState ? (
              <i class='fa fa-bars' aria-hidden='true'></i>
            ) : (
              <i class='fa fa-times' aria-hidden='true'></i>
            )}
          </div>
        </div>
      </header>
      <div className='home__content'>
        <div className='home__imageProfile'></div>
        <h1>
          I am <span>Sven Notermans</span>
        </h1>
        <p>Fullstack Developer</p>
        <div className='home__icons'>
          <a
            href='https://github.com/Sven-27/react-portfolio-group'
            target='_blank'
            rel='noreferrer'
          >
            <GitHubIcon />
          </a>
          <a
            href='https://www.linkedin.com/in/sven-notermans'
            target='_blank'
            rel='noreferrer'
          >
            <LinkedInIcon />
          </a>
          <a
            href='https://www.facebook.com/Svengebon'
            target='_blank'
            rel='noreferrer'
          >
            <FacebookIcon />
          </a>
          <a
            href='https://www.instagram.com/svennie_27/'
            target='_blank'
            rel='noreferrer'
          >
            <InstagramIcon />
          </a>
          <a
            href='https://twitter.com/Sven__27'
            target='_blank'
            rel='noreferrer'
          >
            <TwitterIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
