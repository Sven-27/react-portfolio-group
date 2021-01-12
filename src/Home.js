import React, { useState } from "react";
import "./Home.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Link  } from 'react-scroll'
import TwitterIcon from "@material-ui/icons/Twitter";

function Home() {
  const [buttonState, setbuttonState] = useState(true);

  const hideMobileMenu = () => {
    if (window.innerWidth < 672) {
      setbuttonState(true);
    }
  };

  return (
    <div  className='home'>
      <header className='home__container'>
        <div className='home__home' id='div'>
          <div className={buttonState ? "home__buttons hidden" : "home__buttons"}>
            <ul onClick={hideMobileMenu}>
              <li>
              <Link activeClass="active" className="home__btn" to="home" 
              spy={true} smooth={true} duration={1000}>
                 Home
               </Link>
           </li>
            <li>
              <Link activeClass="active" className="home__btn"  to="about" spy={true} smooth={true} offset={2} duration={800}>
                 About
              </Link>
           </li>
            <li>
              <Link activeClass="active" className="home__btn" to="projects" spy={true} smooth={true} offset={2} duration={800}>
                Projects
              </Link>
           </li>
            <li>
              <Link activeClass="active" className="home__btn" to="skills" spy={true} smooth={true} offset={2} duration={800}>
                Skills
              </Link>
            </li>
            <li>
              <Link activeClass="active" className="home__btn" to="contactForm" spy={true} smooth={true} offset={20} duration={800}>
                Contact
               </Link>
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
            href='https://www.linkedin.com/in/sven-notermans'
            target='_blank' rel='noreferrer'>
            <LinkedInIcon />
          </a>
          <a
            href='https://www.facebook.com/Svengebon'
            target='_blank' rel='noreferrer'>
            <FacebookIcon />
          </a>
          <a
            href='https://www.instagram.com/svennie_27/'
            target='_blank' rel='noreferrer'>
            <InstagramIcon />
          </a>
          <a
            href='https://twitter.com/Sven__27'
            target='_blank' rel='noreferrer'>
            <TwitterIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;