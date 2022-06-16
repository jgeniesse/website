import React, {useEffect} from 'react'

export default function ErrorPage(props) {

    useEffect(() => {
        props.setHighlight(undefined);
    }, [])

    return (
        <div>ErrorPage</div>
    )
}