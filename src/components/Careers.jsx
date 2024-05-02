import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/color-sharp.png";

const Careers = () => {
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
    <section className="about" id="careers">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="about-bx wow zoomIn">
              <h2>CAREERS</h2>
              <p>We are hiring for Software Engineer for mentioned profiles.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme about-slider">
                <div className="item">
                  <h5>Full Stack Developer</h5>
                  <p>1-3 years of experience, Node, Angular 12+, HTML, CSS, Mongo, Can write unit tests</p>
                </div>
                <div className="item">
                  <h5>Angular Lead Developer</h5>
                  <p>5-6 years of experience, Angular 11+, HTML, CSS. Implement best practices and manage team</p>
                </div>
                <div className="item">
                  <h5>Flutter Developer</h5>
                  <p>1-2 years of experience in flutter mobile app development, should be good in UI/UX.</p>
                </div>
                <div className="item">
                  <h5>MERN Lead Developer</h5>
                  <p>6+ years of experience, ReactJS, NodeJS, HTML, CSS. Implement best practices and manage team</p>
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

export default Careers;

