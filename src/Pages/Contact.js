import React, {useEffect} from 'react'

export default function Contact(props){

  useEffect(() => {
    props.setHighlight("contact");
  }, [])

  return (
    <div>Contact</div>
  )
}