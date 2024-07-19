import React, { useState } from "react";

function Cards ({id,image,info,name,price,removeTour})
{

    const [readMore,setreadMore] = useState(false);
    const description = readMore ? info : `${info.substring(0,200)}...`


    function readMoreHandler()
    {
        setreadMore(!readMore);
        
    }

    return(
        <div className="cards">
            <div className="card-items">

            <img src={image} className="img"/>

            <div className="details">
                
                <h2 className="tour-price">₹{price}</h2>

                <h2 className="tour-name">{name}</h2>

                <p className="tour-info">{description} <span className="tour-readmore" onClick={readMoreHandler}>{readMore ? "Show Less" : "Read More"}</span></p>

             </div>
            
            <div className="btn-red-class">
                <button className="btn-red" onClick={() => removeTour(id)}>Not interested</button>
            </div>
            

            </div>
          
        </div>
    )
}




export default Cards;