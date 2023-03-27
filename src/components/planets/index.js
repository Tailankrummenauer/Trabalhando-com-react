import React from "react";
import Planet from "./planet";



async function getPlanet() {
    let response = await fetch(' http://localhost:3000/api/planets.json')
    let data = await response.json()
   
    return data;
}



class Planets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: []
        }
    }


    componentDidMount() {
        getPlanet().then(data => {
            this.setState(state => ({
                planets: data['planets']
            }))
        })
    }

    duplicateLastPlanet = () => {
        let last_planet = this.state.planets[this.state.planets.length - 1]
        this.setState(state => ({
            planets: [...this.state.planets, last_planet]
        }))
    }

    removeLast = () => {
        let new_planets = [...this.state.planets];
        new_planets.pop();
        this.setState(state => ({
            planets: new_planets
        }))
    }


    render() {
        return (
            <div>
                <h3>Planet List</h3>
                <button onClick={this.removeLast}>Remove Last</button>
                <button onClick={this.duplicateLastPlanet}>Duplicate planet</button>


                {this.state.planets.map((planets, index) =>
                    <Planet 
                        id={planets.id}
                        title={planets.title}
                        link={planets.link}
                        description={planets.description}
                        img_url={planets.img_url}
                        key={index}

                    />



                )}
            </div>
        )
    }
}


export default Planets; 