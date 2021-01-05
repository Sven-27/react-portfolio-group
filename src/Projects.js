import React from "react";
import "./Projects.css";


function Projects() {
  return (
    <section className="projects__section">
      <div className="projects__main-container">
        <div className="projects__wrapper">
          <div className="projects__overlay img-1">
            <div className="projects__post">
              
                <h6 className="projects__post-title">FireStack Amazon Clone</h6>
                <p className="projects__intro">
                  Amazon Clone built with Firebase and Stripe
                </p>
                <a
                  href="https://aclone.web.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read More
                </a>          
            </div>
          </div>
           <div className="projects__overlay img-2">
            <div className="projects__post">
                <h6 className="projects__post-title">
                  Facebook Clone with React
                </h6>
                <p className="projects__intro">
                  Facebook Clone built with ReactJS and Redux
                </p>
                <a
                  href="https://www.youtube.com/watch?v=B-kxUMHBxNo"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read More
                </a>          
            </div>
          </div>

          <div className="projects__overlay img-3">
            <div className="projects__post">
                <h6 className="projects__post-title">netflix-Clone</h6>
                <p className="projects__intro">
                  Netflix clone build with React js and Firebase
                </p>
                <a
                  href="https://netflix-clone-acb05.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read More
                </a>
              </div>
            </div>
        </div>  
        </div>
    </section>
  );
}

export default Projects;



