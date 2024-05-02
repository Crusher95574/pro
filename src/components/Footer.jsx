import React from "react";
import { Container, Row } from "react-bootstrap";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <p>
            For inquiries, contact us at:{" "}
            <a href="mailto:info@d2itechnology.com">info@d2itechnology.com</a>{" "}
            or call:{" "}
            <a href="tel:+1234567890">+1 (234) 567-890</a>
            <br />
            ©2024{" "}
            <strong>D2i Technology</strong>. All Rights Reserved.
          </p>
          <div className="social-icon">
            <a href=""><img src={navIcon1} alt="Icon" /></a>
            <a href=""><img src={navIcon2} alt="Icon" /></a>
            <a href=""><img src={navIcon3} alt="Icon" /></a>
            <a href=""><img src={navIcon1} alt="Icon" /></a>
            <a href=""><img src={navIcon2} alt="Icon" /></a>
            <a href=""><img src={navIcon3} alt="Icon" /></a>
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
