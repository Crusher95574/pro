import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import i1 from "../assets/img/ang.png";
import i2 from "../assets/img/react.png";
import i3 from "../assets/img/vue.png";
import i4 from "../assets/img/node.png";
import i5 from "../assets/img/php.png";
import i6 from "../assets/img/java.png";
import i7 from "../assets/img/apple.png";
import i8 from "../assets/img/android.png";
import i9 from "../assets/img/native.png";
import i10 from "../assets/img/flutter.svg";
import i11 from "../assets/img/aws.png";
import i12 from "../assets/img/cloud.png";
import i13 from "../assets/img/azure.png";
import i14 from "../assets/img/jaws.png";
import i15 from "../assets/img/talkback.jpeg";
import i16 from "../assets/img/selenium.svg";
import i17 from "../assets/img/playwrith.png";
import i18 from "../assets/img/js.png";
import i19 from "../assets/img/java.png";
import i20 from "../assets/img/voiceover.svg";
import i21 from "../assets/img/nvda.png";
import colorSharp2 from "../assets/img/color-sharp2.png";


const Technology = () => {
  const [activeKey, setActiveKey] = useState("first");

  const handleTabSelect = (key) => {
    setActiveKey(key);
  };

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  const products = {
    first: [
      { title: "Angular", imgUrl: i1, resourceUrl: "https://angular.io/" },
      { title: "React", imgUrl: i2, resourceUrl: "https://reactjs.org/" },
      { title: "Vue", imgUrl: i3, resourceUrl: "https://vuejs.org/" },
      { title: "Node", imgUrl: i4, resourceUrl: "https://nodejs.org/" },
      { title: "PhP", imgUrl: i5, resourceUrl: "https://www.php.net/" },
      { title: "Java", imgUrl: i6, resourceUrl: "https://www.java.com/" }
    ],
    second: [
      { title: "IOS", imgUrl: i7, resourceUrl: "https://developer.apple.com/ios/" },
      { title: "Android", imgUrl: i8, resourceUrl: "https://developer.android.com/" },
      { title: "React Native", imgUrl: i9, resourceUrl: "https://reactnative.dev/" },
      { title: "Flutter", imgUrl: i10, resourceUrl: "https://flutter.dev/" }
    ],
    third: [
      { title: "AWS", imgUrl: i11, resourceUrl: "https://aws.amazon.com/" },
      { title: "Google Cloud", imgUrl: i12, resourceUrl: "https://cloud.google.com/" },
      { title: "Azure", imgUrl: i13, resourceUrl: "https://azure.microsoft.com/" }
    ],
    fourth: [
      { title: "Jaws", imgUrl: i14, resourceUrl: "https://www.freedomscientific.com/products/software/jaws/" },
      { title: "NVDA", imgUrl: i21, resourceUrl: "https://www.nvaccess.org/" },
      { title: "Voiceover", imgUrl: i20, resourceUrl: "https://www.apple.com/accessibility/mac/vision/" },
      { title: "Talkback", imgUrl: i15, resourceUrl: "https://support.google.com/accessibility/android/answer/6006983?hl=en" }
    ],
    fifth: [
      { title: "Selenium", imgUrl: i16, resourceUrl: "https://www.selenium.dev/" },
      { title: "Playwright", imgUrl: i17, resourceUrl: "https://playwright.dev/" },
      { title: "JavaScript", imgUrl: i18, resourceUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { title: "Java", imgUrl: i19, resourceUrl: "https://www.java.com/" },
    ]
  };

  const renderCarouselItems = (items) => {
    return (
      <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme about-slider">
        {items.map((item, index) => (
          <div key={index} className="item">
            {/* Wrap title inside anchor tag */}
            <a href={item.resourceUrl} target="_blank" rel="noopener noreferrer">
              <img src={item.imgUrl} alt="" />
              <h5>{item.title}</h5>
            </a>
          </div>
        ))}
      </Carousel>
    );
  };

  return (
    <section className="project" id="technology">
      <Container>
        <Row>
          <Col>
            <Tab.Container id="projects-tabs" activeKey={activeKey} onSelect={handleTabSelect}>
              <Row>
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Web Development</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Mobile</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">DevOps</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">Accessibility</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fifth">Automation</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Row>
              <Row>
                <Tab.Content className="animate__animated animate__slideInUp">
                  <Tab.Pane eventKey="first">{renderCarouselItems(products.first)}</Tab.Pane>
                  <Tab.Pane eventKey="second">{renderCarouselItems(products.second)}</Tab.Pane>
                  <Tab.Pane eventKey="third">{renderCarouselItems(products.third)}</Tab.Pane>
                  <Tab.Pane eventKey="fourth">{renderCarouselItems(products.fourth)}</Tab.Pane>
                  <Tab.Pane eventKey="fifth">{renderCarouselItems(products.fifth)}</Tab.Pane>
                </Tab.Content>
              </Row>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};

export default Technology;
