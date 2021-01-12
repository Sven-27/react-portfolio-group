import React from "react";
import "./About.css";

function About() {
  return (
    <div className='about' style={{ backgroundColor: "#77dde7" }}>
      <div className='about__container'>
        <div className='about__content'>
          <div className='about__me'>{/* <h1>About me </h1> */}</div>
          <div className='about__details'>
            <div className='about__text'>
              <h4>Fullstack developer</h4>
              <p>
                I am a driven Fullstack developer who always aims for the best
                results.
              </p>
              <div className='about__resume'>
                <a
                  href='https://drive.google.com/file/d/1BRtiFexIMVM8-IjfaSO69DfI2LIk424y/view?usp=sharing'
                  target='_blank'
                  rel='noreferrer'
                  className='about__botton'
                  class='btn btn-color'
                >
                  <i className='fa fa-download'></i> Download Resume
                </a>
              </div>
            </div>
            <div className='about__info'>
              <div className='about__address'>
                <h4>Contact details</h4>
                <span>
                  Sven Notermans
                  <br />
                  Sportstraat 8
                  <br />
                  6361 XC Nuth Netherlands
                  <br />
                  +31-6-10 31 64 36
                  <br />
                  coding.with.sven@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
