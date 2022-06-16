import React, {useState} from 'react'
import "./Footer.css"
import { Button, Toast, ToastContainer, Alert } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';


export default function Footer(){
  const [toastOpen, setToastOpen] = useState(false);

  return (
    <div className='footer'>
      <Button size="lg" className='mail' href="mailto:jongeniesse00@gmail.com" target='_blank'>
          <Icon.EnvelopeFill/>
      </Button>
      <Button size="lg" className="phone" href="tel:+1-920-217-2644" onClick={() => {navigator.clipboard.writeText("+1(920)-217-2644"); setToastOpen(true)}}>
        <Icon.TelephoneFill />
      </Button>
      <Button size="lg" className='facebook' href="https://www.facebook.com/jon.geniesse" target='_blank'>
          <Icon.Facebook/>
      </Button>
      <Button size="lg" className='linkedin' href="https://www.linkedin.com/in/jon-geniesse-8a259a204/" target='_blank'>
          <Icon.Linkedin/>
      </Button>
      <Button size="lg" className='git' href="https://github.com/jgeniesse" target='_blank'>
          <Icon.Github/>
      </Button>

     <ToastContainer className="p-3" containerPosition='fixed' position="top-center">
        <Toast show={toastOpen} onClose={()=>setToastOpen(false)} bg="success" delay={4000} autohide>
          <Toast.Header>
            <Icon.Check size="20px"/>
            <strong className="me-auto">Success!</strong>
         </Toast.Header>
         <Toast.Body style={{backgroundColor: "#befac1"}}>
           <p>Copied +1(920)-217-2644 to your clipboard!</p>
         </Toast.Body>
        </Toast>
  </ToastContainer>
    </div>
  )
}

