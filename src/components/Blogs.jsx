import React from 'react';
import { Container, Row, Col, Tab } from "react-bootstrap";
import pro1 from "../assets/img/hellokaun.png";
import pro2 from "../assets/img/Bihar_News.png";
import pro3 from "../assets/img/marathi_news.png";
import pro4 from "../assets/img/Hindi_Local_News.png";
import {ProjectCard} from './ProjectCard';

const Blogs = () => {
  const products = [
    {
      title: "Marathi News",
      description: "Marathi News is one of the most widely read Marathi language newspaper all top News",
      imgUrl: pro1,
    },
    {
      title: "Hindi News (Local News)",
      description: "Hindi News (Local News) is an Android application that allows users to read Hindi Samachar, Hindi Newspaper, Breaking news, etc.",
      imgUrl: pro2,
    },
    {
      title: "Bihar News",
      description: "Bihar Hindi News is an Android application to get the latest and breaking news of Bihar in Hindi from your favourite newspapers & TV Channels websites.",
      imgUrl: pro3,
    },
    {
      title: "Hello Kaun",
      description: "Hello Kaun is a made in India stress buster app built on atProtocol for fun that will make you smile by sending messages in different accent, pitch.",
      imgUrl: pro4,
    },
  ];

  return (
    <section className="blogs" id="blogs">
      <Container style={{ padding: '25px' }}>
        <Row>
          <Col xs={12}>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Tab.Content id="slideInUp" className="animate__animated animate__slideInUp">
                <Tab.Pane eventKey="first">
                  <Row>
                    {products.map((project, index) => (
                      <Col key={index} sm={6} md={4} lg={3}>
                        <ProjectCard {...project} />
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Blogs;
