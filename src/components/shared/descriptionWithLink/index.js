import React from "react";
import './style.css'



const ComponentsWithLink = (props) => {
    return (
      
        <div className="description">
        <p>{props.description}</p>
        
        <p><a href={props.link}>{props.link}</a></p>
        
        </div>
      
    )
}

export default ComponentsWithLink;