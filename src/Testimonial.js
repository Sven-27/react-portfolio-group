import React from "react";
import "./Testimonial.css";

function Testimonial() {
  return (
    <div className="testimonial">
      <h1 className="testimonial__title">What do our customers say...</h1>
      <div className="testimonial__container">
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
    </div>
  );
}

export default Testimonial;
