import React from "react";
import "./Testimonial.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Testimonial() {
  return (
    <div className="testimonial">
      <h1 className="testimonial__title">What do our customers say...</h1>
      <div className="testimonial-carousal-wrapper">
        <Carousel
          autoPlay={true}
          infiniteLoop
          useKeyboardArrows
          showThumbs={false}
          showStatus={false}
        >
          <div className="testimonial__container">
            <div className="testimonial__content">
              <img
                src="https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80"
                alt="Customer Image"
              />
              <p>
                <span>“</span> Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Tempore neque officiis, praesentium natus qui
                facilis vitae quasi doloribus, delectus quia corporis animi
                atque? Iste veniam debitis sequi voluptas fugit porro?
              </p>
              <hr />
              <h3>Anna Jones</h3>
              <h5>Sydney, Australia</h5>
            </div>
          </div>

          <div className="testimonial__container">
            <div className="testimonial__content">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                alt="Customer Image"
              />
              <p>
                <span>“</span> Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Tempore neque officiis, praesentium natus qui
                facilis vitae quasi doloribus, delectus quia corporis animi
                atque? Iste veniam debitis sequi voluptas fugit porro?
              </p>
              <hr />
              <h3>Alex Damian</h3>
              <h5>Los Angeles, USA</h5>
            </div>
          </div>

          <div className="testimonial__container">
            <div className="testimonial__content">
              <img
                src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80"
                alt="Customer Image"
              />
              <p>
                <span>“</span> Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Tempore neque officiis, praesentium natus qui
                facilis vitae quasi doloribus, delectus quia corporis animi
                atque? Iste veniam debitis sequi voluptas fugit porro?
              </p>
              <hr />
              <h3>John Cameron</h3>
              <h5>Finsbury , London</h5>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Testimonial;
