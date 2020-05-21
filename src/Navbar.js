import React from 'react';
import './styles.css'
import logo from './logo.png'

function Navbar({ isEnglish }) {
  const lol = true
  console.log(isEnglish)
  return (
    <div className='nav'>
      <div style={{ padding: '0px 40px' }}>
        <h4 className='navText' >{isEnglish ? 'HOME' : 'ACCEUIL'}</h4>
      </div>
      <div style={{ padding: '0px 40px' }}>
        <h4 className='navText' >{isEnglish ? 'ABOUT US' : 'A PROPOS'}</h4>
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
        <h4 className='navText' >{isEnglish ? 'CONTACT' : 'CONTACTER'}</h4>
      </div>
    </div>
  );
}

export default Navbar;
