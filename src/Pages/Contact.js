import React, { useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import "./Contact.css";

export default function Contact(props) {
  useEffect(() => {
    props.setHighlight("contact");
  }, []);

  return (
    <Row className="g-0">
      <Col md={6} lg={6} xl={7}>
      <h1 className="contactMe">Contact Me!</h1>
        <div className="div4">
          <Form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="John Smith" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Your Message" required/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
          </div>
      </Col>
      <Col md={6} lg={6} xl={5} style={{ textAlign: "right"}}>
        <img src="./images/map.png" className="map"></img>
      </Col>
    </Row>
  );
}
