import React from 'react';

function SingleBurger({burgerObject, ingredients}) {
  return (
    <div className='container'>
      <div className='row'>
        <p>{burgerObject.name}</p>
        <ul>
        {ingredients.map(x=> (
          <li>{x}</li>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default SingleBurger;