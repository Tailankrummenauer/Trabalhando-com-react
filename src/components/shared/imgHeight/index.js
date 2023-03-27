import React, {Fragment} from "react";
import './style.css'


const TamanhoImg = (props) =>{
    return (        
    <img className={props.imgHeight ? "imagem_grande" : "imagem"} src={props.img_url}></img>

   
    
    )
}


export default TamanhoImg;