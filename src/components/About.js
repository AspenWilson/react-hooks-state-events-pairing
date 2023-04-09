import React from "react"

function About(props) {
    
    return (
        <>
        <h1>{props.title}</h1>
        <h4>{props.views} Views | Uploaded {props.date}</h4>
        </>
    )
    }


export default About