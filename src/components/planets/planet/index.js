import React from "react";
import TamanhoImg from "../../shared/imgHeight/";
import './style.css'


const Planet = (props) =>{
    return (
        <div>
            <hr/>
           <h4>{props.title}</h4>
           <p>{props.description}</p>
           <TamanhoImg img_url = {props.img_url}/>
           
          
        </div>
    )
}

export default Planet