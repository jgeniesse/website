import React, { useEffect } from 'react'

export default function About(props){
  
  useEffect(() => {
    props.setHighlight("about");
  }, [])

  return (
    <div>About</div>
    )
}