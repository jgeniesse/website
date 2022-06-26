import React, {useState} from 'react'
import { Container, Image, Button, Row, Col } from 'react-bootstrap';
import "./Home.css";

export default function Home(){
  const [photo, setPhoto] = useState("./images/home-photo.jpg") 
  return (
    <Container>
      <div className='div1'>
      <Row className="align-items-center">
        <Col>
      <Image 
        className="HomePhoto"
        fluid={true} 
        roundedCircle={true} 
        src={photo}
        onMouseEnter={()=> {setPhoto("./images/home-hover.jpg")}}
        onMouseLeave={()=> {setPhoto("./images/home-photo.jpg")}}
        ></Image>
        </Col>
        <Col md={6}>
      <div className='div2'>
        <h1 className="h1"><i><b>Jon Geniesse</b></i></h1>
        <p style={{color: "black"}}>Hello! I am a recent graduate of the University of Wisconsin Madison with a Bachelor's degree in Computer Science, 
        and a Certificate in Game Design. I graduated with High Honors and a 3.9 GPA. While in college, I held a Student Developer position 
        at the DoIT Help Desk and was heavily involved in the non-profit student org, Wisconsin Singers. I am currently looking for a job in 
        computer programming and would love to discuss any opportunities you may have!</p>
        <a className="resume" href='./images/Resume.pdf' target='_blank'><button className="resButton" size="lg">My Resume</button></a>
      </div>
      </Col>
      </Row>
      </div>
    </Container>
  )
}