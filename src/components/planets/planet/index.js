import React from "react";
import TamanhoImg from "../../shared/imgHeight/";
import './style.css'
import ComponentsWithLink from "../../shared/descriptionWithLink/index";

// função para pegar a api

async function getSatellite(id){
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = await response.json()
    return data;
}

class Planet extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            satellites: []
        }
    }

    componentDidMount(){
        getSatellite(this.props.id).then(data =>{
            this.setState(state =>({
                satellites: data['satellites']
                
            }))           
        })
    }
    
    
    render() {
        let title
        if (this.props.title_with_underline)
            title = <h4><u>{this.props.title}</u></h4>
        else
            title = <h4>{this.props.title}</h4>
        return (
            <div>
               <hr />
                {title}
                <ComponentsWithLink link={this.props.link} description={this.props.description} />
                <TamanhoImg img_url={this.props.img_url} imgHeight={this.props.imgHeight} />
                <h4>Satelites</h4>

               <ul>{this.state.satellites.map((satellite, index) => 
               <li key={index}>{satellite.name}</li>
               
               )}

                </ul>             
            </div>
        )
    }
}

export default Planet