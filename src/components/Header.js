import React, { useEffect, useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import "./Header.css";

export default function Header(props) {
  const [isHome, setIsHome] = useState(true);
  const [isAbout, setIsAbout] = useState(false);
  const [isContact, setIsContact] = useState(false);

  function handleNav(loc) { 
    props.setHighlight(loc);
  }

  useEffect(()=> {
    if(props.highlight === "home") {
      setIsHome(true);
      setIsAbout(false);
      setIsContact(false);
    } else if(props.highlight === "about") {
      setIsHome(false);
      setIsAbout(true);
      setIsContact(false);
    } else if(props.highlight === "contact"){
      setIsHome(false);
      setIsAbout(false);
      setIsContact(true);
    } else {
      setIsHome(false);
      setIsAbout(false);
      setIsContact(false);
    }
  }, [props.highlight])

  return (  
    <Navbar variant="dark" className="Bar" expand="sm">
      <Navbar.Brand href="/">
        <img src='./images/logo.png' className='img'></img>
        Jon Geniesse
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="Collapse">
          <Nav className="justift-content-end">
            <Nav.Link 
              active={isHome} 
              onClick={() => {handleNav("home")}} 
              href="/"
              >{isHome ? <u>Home</u>: "Home"}
            </Nav.Link>
            <Nav.Link  
              active={isAbout} 
              onClick={() => {handleNav("about")}} 
              href="about-me"
              >{isAbout ? <u>About Me</u>: "About Me"}
            </Nav.Link>
            <Nav.Link 
              active={isContact} 
              onClick={() => {handleNav("contact")}} 
              href="contact"
              >{isContact ? <u>Contact</u>: "Contact"}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
  )
}