import React from 'react';
import './styles.css'


function Navbar(props) {
  return (
    <div className='nav'>
      <h3>HOME</h3>
      <h3>ABOUT US</h3>
      <div>
        <h1 className='titleFont' >B12</h1>
        <h1 className='titleFont' >BURGER</h1>
      </div>
      <h3>BURGERS</h3>
      <h3>CONTACT</h3>
    </div>
  );
}

export default Navbar;