import React from "react";
import Planet from "./planet";


const Planets = () =>{
    return (
        <div>
            <h3>Planet List</h3>
            <Planet title="Mercurio"
                    description = "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images"
                    img_url = "https://super.abril.com.br/wp-content/uploads/2023/01/SI_jameswebb_site.jpg?quality=90&strip=info&w=200&h=200&crop=1"></Planet>
                     <Planet title="Mercurio"
                    description = "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images"
                    img_url = "https://super.abril.com.br/wp-content/uploads/2023/01/SI_jameswebb_site.jpg?quality=90&strip=info&w=200&h=200&crop=1"></Planet>

        </div>
    )
}

export  default Planets; 