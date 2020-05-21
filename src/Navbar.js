import React from 'react';
import './styles.css'
import logo from './logo.png'

function Navbar(props) {
  const lol = true
  return (
    <div className='nav'>
      <div style={{ padding: '0px 40px' }}>
        <h4 className='navText' >HOME</h4>
      </div>
      <div style={{ padding: '0px 40px' }}>
        <h4 className='navText' >ABOUT US</h4>
      </div>
      <div>
        {lol ? <div style={{ paddingTop: 15 }}>
          <h1 className='titleFont' >B12</h1>
          <h1 className='titleFont' style={{ transform: ' translateY(-15px)' }} >BURGER</h1>
        </div>
          : <img src={logo} alt='logo' height={150} width={150} />
        }
      </div>
      <div style={{ padding: '0px 40px' }}>
        <h4 className='navText' >BURGERS</h4>
      </div>
      <div style={{ padding: '0px 40px' }}>
        <h4 className='navText' >CONTACT</h4>
      </div>
    </div>
  );
}

export default Navbar;
