import React from "react";
import Cards from "./Cards";

function Tours({tours , remove})
{
    return(
        <div className="tour">
           {
            tours.map( (tour) => {
              return  <Cards {...tour} removeTour={remove}></Cards>
            })
           }
        </div>
    )
}

export default Tours;