import React from "react";
import  Headings  from "../Heading/Heading";
import data  from "../../constants/data";
import Carousel from "react-bootstrap/Carousel";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="sectionPadding" id="testimonials">
      <Headings
        title="Testimonials"
        text="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
      />

      <div className="carousel-bg">
        <Carousel>
          {data.Testimonials.map((item, index) => (
            <Carousel.Item className="carousel-box" interval={6000}>
              <Carousel.Caption>
                <p className="speechBubble"> {item.testimonial}</p>
                <div class="carouselName">{item.name}</div>
                <div class="carouselPosition">{item.position}</div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
