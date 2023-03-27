import React, { useState, useEffect } from "react";
import TamanhoImg from "../../shared/imgHeight/";
import './style.css'
import ComponentsWithLink from "../../shared/descriptionWithLink/index";

// função para pegar a api

async function getSatellite(id){
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = await response.json()
    return data;
}


const Planet = (props) =>{
    const [satellites, setSatellites] = useState([])

    useEffect(() => {
        getSatellite().then(data => {
            setSatellites(data['satellites'])
        })
    },[])

        let title
        if (props.title_with_underline)
            title = <h4><u>{props.title}</u></h4>
        else
            title = <h4>{props.title}</h4>
        return (
            <div>
               <hr />
                {title}
                <ComponentsWithLink link={props.link} description={props.description} />
                <TamanhoImg img_url={props.img_url} imgHeight={props.imgHeight} />
                <h4>Satelites</h4>

               <ul>{satellites.map((satellite, index) => 
               <li key={index}>{satellite.name}</li>
               
               )}

                </ul>             
            </div>
        )
    }


export default Planet