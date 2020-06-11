import React from 'react';

function SingleBurger({ burgerObject, trioClicked }) {

  
  return (
    <div className="card menuItem">
        <div className="card-body">
          <h5 className="card-title burgerTitle">{burgerObject.name}</h5>
          <p className="card-text ingredients">{burgerObject.ingredients.join(", ")}</p>
          <p className='price'>${trioClicked ? burgerObject.priceTrio : burgerObject.priceSingle}</p>
        </div>
    </div>
  );
}

export default SingleBurger;