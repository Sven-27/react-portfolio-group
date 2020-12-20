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
        >
          <div className="testimonial__container">
            <img
              src="https://clementjames.org/wp-content/uploads/2019/09/avatar-1577909_960_720-1.png"
              alt="Customer Image"
            />
            <p>
              <span>“</span> Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Tempore neque officiis, praesentium natus qui facilis vitae
              quasi doloribus, delectus quia corporis animi atque? Iste veniam
              debitis sequi voluptas fugit porro?
            </p>
            <hr />
            <h3>Anna Jones</h3>
            <h5>Sydney, Australia</h5>
          </div>
          <div className="testimonial__container">
            <img
              src="https://clementjames.org/wp-content/uploads/2019/09/avatar-1577909_960_720-1.png"
              alt="Customer Image"
            />
            <p>
              <span>“</span> Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Tempore neque officiis, praesentium natus qui facilis vitae
              quasi doloribus, delectus quia corporis animi atque? Iste veniam
              debitis sequi voluptas fugit porro?
            </p>
            <hr />
            <h3>Alex Damian</h3>
            <h5>Los Angeles, USA</h5>
          </div>
          <div className="testimonial__container">
            <img
              src="https://clementjames.org/wp-content/uploads/2019/09/avatar-1577909_960_720-1.png"
              alt="Customer Image"
            />
            <p>
              <span>“</span> Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Tempore neque officiis, praesentium natus qui facilis vitae
              quasi doloribus, delectus quia corporis animi atque? Iste veniam
              debitis sequi voluptas fugit porro?
            </p>
            <hr />
            <h3>John Cameron</h3>
            <h5>Finsbury , London</h5>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Testimonial;
