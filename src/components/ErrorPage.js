import React, {useEffect} from 'react'
import { Container } from 'react-bootstrap';
import "./ErrorPage.css";

export default function ErrorPage(props) {

    useEffect(() => {
        props.setHighlight(undefined);
    }, [])

    return (
        <Container>
        <div className='error'>
            <h1 style={{display: "inline"}}>
                Sorry, this page does not exist!
            </h1>
        </div>
        </Container>
    )
}