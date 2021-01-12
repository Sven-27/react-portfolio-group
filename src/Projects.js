import React from "react";
import "./Projects.css";
import facebook from "./images/facebook-clone.png";
import amazon from "./images/project-1.PNG";
import netflix from "./images/netflix-clone.jpeg";

function Projects() {
  return (
    <section
      className='projects__section'
      style={{ backgroundColor: "#F0EADA" }}
    >
      <div className='projects__main-container'>
        {/* <h1>PROJECTS I DEVELOPED</h1> */}

        <div className='projects__wrapper'>
          <div className='projects__overlay'>
            <div className='projects__post'>
              <img
                className='thumbnail'
                src='https://raw.githubusercontent.com/HiDraqula/Amazon-Clone/master/screenshot2.jpg'
                alt='FireStack Amazon Clone'
              />
              <div className='projects__preview'>
                <h6 className='projects__post-title'>FireStack Amazon Clone</h6>
                <p className='projects__intro'>
                  Amazon Clone built with Firebase and Stripe
                </p>
                <a
                  href='https://aclone.web.app'
                  target='_blank'
                  rel='noreferrer'
                >
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className='projects__overlay'>
            <div className='projects__post'>
              <img className='thumbnail' src={facebook} alt='facebook' />
              <div className='projects__preview'>
                <h6 className='projects__post-title'>
                  Facebook Clone with React
                </h6>
                <p className='projects__intro'>
                  Facebook Clone built with ReactJS and Redux
                </p>
                <a
                  href='https://www.youtube.com/watch?v=B-kxUMHBxNo'
                  target='_blank'
                  rel='noreferrer'
                >
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className='projects__overlay'>
            <div className='projects__post'>
              <img className='thumbnail' src={netflix} alt='logo' />
              <div className='projects__preview'>
                <h6 className='projects__post-title'>netflix-Clone</h6>
                <p className='projects__intro'>
                  Netflix clone build with React js and Firebase
                </p>
                <a
                  href='https://netflix-clone-acb05.web.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
