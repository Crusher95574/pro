import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };
  
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [result, setResult] = useState("");

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setButtonText("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "8ea2657b-de2e-49c9-93f0-df70d36fdafb");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      setButtonText("Send");
      const data = await response.json();

      setFormDetails(formInitialDetails);
      if (data.success) {
        setResult("Form Submitted Successfully");
        console.log("Success");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("An error occurred while submitting the form.");
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <img className="animate__animated animate__zoomIn" src={contactImg} alt="Contact Us" />
          </Col>
          <Col size={12} md={6}>
            <div className="animate__animated animate__fadeIn">
              <h2>Get In Touch</h2>
              <form onSubmit={onSubmit}>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                  </Col>
                  <Col size={12} className="px-1">
                    <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                    <button type="submit"><span>{buttonText}</span></button>
                  </Col>
                  <Col>
                    <span>{result}</span>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
