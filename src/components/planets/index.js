import React, { useState, useEffect } from "react";
import Planet from "./planet";



async function getPlanet() {
    let response = await fetch(' http://localhost:3000/api/planets.json')
    let data = await response.json()
    return data;
}



const Planets = () => {
    const [planets, setPlanets] = useState([])

    useEffect(() => {
        getPlanet().then(data => {
            setPlanets(data['planets'])
        })
    }, [] /*vai rodar apenas quando for iniciado [] se quiser que seja atualizado toda vez que algum estado for alterado [planets]*/ )

    const removeLast = () => {
        let new_planets = [...planets];
        new_planets.pop();
        setPlanets(new_planets);
    }

    const duplicateLastPlanet = () => {
        let last_planet = planets[planets.length - 1]
        setPlanets([...planets, last_planet])

    }
    return (
        <div>
            <h3>Planet List</h3>
            <button onClick={removeLast}>Remove Last</button>
            <button onClick={duplicateLastPlanet}>Duplicate planet</button>


            {planets.map((planets, index) =>
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

export default Planets; 