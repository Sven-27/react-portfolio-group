import React from "react";
import "./Projects.css";
import ecom from "./images/ecom.jpg";
import amazon from "./images/project-1.PNG";

function Projects() {
  return (
    <section className="projects__section">
      <div className="projects__main-container">
        <h1>Check Out Some of My Works.</h1>

        <div className="projects__wrapper">
          {/* starts */}
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
                  Amazon Clone built with Firebase (Authentication, Cloud
                  Firestore, & Functions(express)) with Stripe Integration
                </p>
                <a href="https://aclone.web.app" target="_blank">
                  Read More
                </a>
              </div>
            </div>
          </div>
          {/* ends */}

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
              <img
                className="thumbnail"
                src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                alt="logo"
              />
              <div className="projects__preview">
                <h6 className="projects__post-title">Project Title</h6>
                <p className="projects__intro">
                  Here goes the any sentence that say about the projects
                </p>
                <a href="#" target="_blank">
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
