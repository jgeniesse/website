import React from 'react'
import "./Footer.css"
import { Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';


export default function Footer(){
  return (
    <div className='footer'>
      <Button size="lg" className='mail' href="" target='_blank'>
          <Icon.EnvelopeFill/>
      </Button>
      <Button size="lg" className="phone">
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
    </div>
  )
}

