import React, { useEffect } from "react";
import { Carousel, Row, Col, Container } from "react-bootstrap";
import "./About.css";

export default function About(props) {
  useEffect(() => {
    props.setHighlight("about");
  }, []);

  return (
    <Container style={{ paddingTop: "70px", paddingBottom: "40px" }}>
      <Row>
        <Col xl={7} style={{padding: "0", marginRight: "20px", marginBottom: "30px", boxShadow: "4px 4px 10px rgba(0,0,0,50)"}}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/Carousel/img6.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/Carousel/img7.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/Carousel/img3.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/Carousel/img9.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/Carousel/img5.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/Carousel/img1.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/Carousel/img2.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/Carousel/img4.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col>
          <div className="div3">
            <h1 style={{ color: "#30217a" }}>
              <i>
                <b><u>About Me</u></b>
              </i>
            </h1>
            <p>
              I live in Madison, Wisconsin as a recent high honors graduate of UW-Madison. I love coding and making things like this website you are currently looking at!
            </p>
            <p>I have done plenty of programming through my course work as well as building a website in react at my previous job as a Student Developer at the DoIT Help Desk!</p>
            <p>I am a person with MANY hobbies. I love everything from singing and dancing with the Wisconsin Singers, all the way to space and dinosaurs! I am inquisitive and always looking to learn something new.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
