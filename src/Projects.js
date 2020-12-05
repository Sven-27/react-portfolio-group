import React from "react";
import "./Projects.css";
import ecom from "./images/ecom.jpg";
import amazon from "./images/project-1.PNG";
import netflix from "./images/netflix-clone.jpeg";

function Projects() {
  return (
    <section className="projects__section">
      <div className="projects__main-container">
        <h1>Check out some of my Works.</h1>

        <div className="projects__wrapper">
          <div className="projects__overlay">
            <div className="projects__post">
              <img
                className="thumbnail"
                src="https://raw.githubusercontent.com/HiDraqula/Amazon-Clone/master/screenshot2.jpg"
                alt="FireStack Amazon Clone"
              />
              <div className="projects__preview">
                <h6 className="projects__post-title">FireStack Amazon Clone</h6>
                <p className="projects__intro">
                  Amazon Clone built with Firebase and Stripe Integration
                </p>
                <a href="https://aclone.web.app" target="_blank">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="projects__overlay">
            <div className="projects__post">
              <img className="thumbnail" src={ecom} alt="logo" />
              <div className="projects__preview">
                <h6 className="projects__post-title">
                  MERN Stack WhatsApp Clone
                </h6>
                <p className="projects__intro">
                  WhatsApp Clone built with MERN (MongoDB, ExpressJS, ReactJS,
                  NodeJS)
                </p>
                <a
                  href="https://www.youtube.com/watch?v=gzdQDxzW2Tw"
                  target="_blank"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="projects__overlay">
            <div className="projects__post">
              <img className="thumbnail" src={netflix} alt="logo" />
              <div className="projects__preview">
                <h6 className="projects__post-title">netflix-Clone</h6>
                <p className="projects__intro">
                  Netflix clone build with React js and Firebase
                </p>
                <a href="https://netflix-clone-acb05.web.app/" target="_blank">
                  Read More
                </a>
              </div>
            </div>
          </div>
          {/* 
          <div>
            <div className="projects__post">
              <img className="thumbnail" src={ecom} alt="logo" />
              <div className="projects__preview">
                <h6 className="projects__post-title"> Post Title</h6>
                <p className="projects__intro">
                  Here goes the any sentence that say about the projects
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div> */}

          {/* <div>
            <div className="projects__post">
              <img className="thumbnail" src={ecom} alt="logo" />
              <div className="projects__preview">
                <h6 className="projects__post-title"> Post Title</h6>
                <p className="projects__intro">
                  Here goes the any sentence that say about the projects
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Projects;

// https://images.unsplash.com/photo-1606564114042-e242d255745c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max
