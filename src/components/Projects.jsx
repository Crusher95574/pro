import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import  {ProjectCard}  from "./ProjectCard";
import pro1 from "../assets/img/hellokaun.png";
import pro2 from "../assets/img/Bihar_News.png";
import pro3 from "../assets/img/marathi_news.png";
import pro4 from "../assets/img/Hindi_Local_News.png";
import pro5 from "../assets/img/atsign-logo.svg";
import pro6 from "../assets/img/emper.png";
import pro7 from "../assets/img/studio22.png";
import pro8 from "../assets/img/knowaround.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

const Projects = () => {
  const products = [
    {
      title: "Marathi News",
      description: "Marathi News is one of the most widely read Marathi language newspapers for all top news.",
      imgUrl: pro1,
    },
    {
      title: "Hindi News (Local News)",
      description: "Hindi News (Local News) is an Android application that allows users to read Hindi Samachar, Hindi Newspaper, Breaking news, etc.",
      imgUrl: pro2,
    },
    {
      title: "Bihar News",
      description: "Bihar Hindi News is an Android application to get the latest and breaking news of Bihar in Hindi from your favorite newspapers & TV Channels websites.",
      imgUrl: pro3,
    },
    {
      title: "Hello Kaun",
      description: "Hello Kaun is a made-in-India stress buster app built on atProtocol for fun that will make you smile by sending messages in different accents, pitches.",
      imgUrl: pro4,
    },
  ];

  const clients = [
    {
      title: "Atsign",
      description: "Atsign is flipping the Internet by giving consumers control of their private information through the open-source @platform. This framework enables developers to create applications for People, Entities, and Things, featuring secure exchange of information between known parties.",
      imgUrl: pro5,
    },
    {
      title: "Emper",
      description: "Emper is a cloud-based self-service interior book formatting and design program, primarily for indie publishers. Specializes in converting a raw manuscript into a professionally formatted and designed book for publication.",
      imgUrl: pro6,
    },
    {
      title: "Studio 22 Design",
      description: "Creating digital experiences that ignite growth. Web | Branding | UX/UI.",
      imgUrl: pro7,
    },
    {
      title: "Knowaround",
      description: "KnowAround.com allows you to come to one place for access to comprehensive information focused on the assessment of a location to help you make informed decisions.",
      imgUrl: pro8,
    },
  ];

  const services = [
    {
      title: "Functional Testing",
      description: "Our Functional Testing service ensures that each function of your software application operates in conformance with its required specification.",
      imgUrl: pro2,
    },
    {
      title: "Automation Testing",
      description: "Automation Testing involves the use of automated tools to execute test cases in a software application, comparing the actual results with the expected outcomes.",
      imgUrl: pro2,
    },
    {
      title: "Performance Testing",
      description: "Performance Testing evaluates the responsiveness, throughput, reliability, and scalability of a software application under a given workload.",
      imgUrl: pro2,
    },
    {
      title: "Web Development",
      description: "Our Web Development services encompass the development of custom websites, web applications, and e-commerce solutions tailored to your specific requirements.",
      imgUrl: pro2,
    },
    {
      title: "Mobile Development",
      description: "Our Mobile Development services cover the development of native and cross-platform mobile applications for iOS and Android platforms.",
      imgUrl: pro2,
    },
    {
      title: "Accessibility Remediation",
      description: "Accessibility Remediation focuses on ensuring that digital content, applications, and services are accessible to people with disabilities, meeting compliance standards.",
      imgUrl: pro2,
    },
    {
      title: "DevOps",
      description: "DevOps practices combine software development (Dev) and IT operations (Ops) to reduce the development lifecycle and deliver high-quality software products rapidly.",
      imgUrl: pro2,
    },
    {
      title: "Digital Marketing",
      description: "Our Digital Marketing services aim to enhance your online presence, drive targeted traffic to your website, and increase conversion rates to achieve your business goals.",
      imgUrl: pro2,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link id="products" eventKey="first">OUR PRODUCTS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">OUR CLIENTS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">SERVICES</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content id="slideInUp" className="animate__animated animate__slideInUp">
                <Tab.Pane eventKey="first">
                  <Row>
                    {products.map((project1, index1) => (
                      <Col key={index1} sm={6} md={4} lg={3}>
                        <ProjectCard {...project1} />
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {clients.map((project2, index2) => (
                      <Col key={index2} sm={6} md={4} lg={3}>
                        <ProjectCard {...project2} />
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>We offer a wide range of services covering every aspect of the software development life cycle.</p>
                  <Row>
                    {services.map((project3, index3) => (
                      <Col key={index3} sm={6} md={4} lg={3}>
                        <ProjectCard {...project3} />
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  );
}

export default Projects;
