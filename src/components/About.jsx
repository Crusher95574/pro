import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

const About = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="about" id="abouts">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="about-bx wow zoomIn">
              <h2>ABOUT US</h2>
              <p>At D2i Technology, we turn the digital dreams of our clients into reality.<br></br> We work closely with our users throughout the development process to ensure that we are aligned with the end goal. We are committed to producing exceptional software for each of our clients.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme about-slider">
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>Happy Clients</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="" />
                  <h5>Projects</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="" />
                  <h5>Years of experience</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};

export default About;
