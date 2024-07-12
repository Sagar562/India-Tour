import React, { useState } from "react";
import data from "./data";
import Tours from "./componenta/Tours";

const App = () => {

  const [tours,setTours] = useState(data);

  function removeTour(id)
  {
    const newTour = tours.filter(tour => tour.id !== id)
    setTours(newTour);
  }

  function refreshHandler()
  {
    setTours(data);
  }

  if (tours.length === 0)
  {
    return(
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button onClick={refreshHandler} className="btn-white">Refresh</button>
      </div>

    )
  }

  return (
    <div className="app">

      <div className="container">
     
          <h1 className="main-heading">Plans Tour</h1>

      

        <Tours tours={tours} remove={removeTour}></Tours>

      </div>

       
    </div>

  )
};

export default App;
