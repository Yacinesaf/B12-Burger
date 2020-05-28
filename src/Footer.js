import React from 'react';
import './footer.css'
import instagram from './assets/instagram.png'
import facebook from './assets/facebook.png'
import ubereats from './assets/UE_Logo_Stacked_RGB_White@2x.png'
import logo from './assets/logo.png'
import en from './assets/en.png'
import fr from './assets/fr.png'

function Footer({ isEnglish, switchLanguage }) {
  return (
    <div className='container-fluid px-5 pt-5'>
      <div className='row align-items-center px-5'>
        <img className='col-2' src={logo} alt='logo' style={{ maxWidth: 150, padding: 0 }} />
        <div className='col-1' />
        <div className='col-9' style={{ display: 'flex' }}>
          <div>
            <h3>Our Links</h3>
            <p>About us</p>
            <p>Contact</p>
            <p>Burgers</p>
          </div>
          <div style={{ paddingLeft: 250 }}>
            <h3>Our info</h3>
            <p>1738 Boulevard Curé-Labelle, Laval, QC H7T 1L2</p>
            <p>(450)-688-0404</p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={instagram} height={32} width={32} alt='insta' />
              <img src={facebook} height={32} width={32} alt='fb' style={{ margin: '0px 20px' }} />
              <img src={ubereats} alt='ue' style={{ border: 'white 2px solid', borderRadius: 5, height: 30, width: 30 }} />
            </div>
          </div>
        </div>
      </div>
      <div className='col-12 pt-2'>
        <div className='container-fluid p-3'>
          <div className='divider' />
          <div className='row p-3 align-items-center'>
            <p style={{margin : 0, flexGrow : 1}}>Copyright © 2020 B12 Burger All rights reserved.</p>
            {isEnglish ? <img onClick={switchLanguage} src={fr} alt='iconA' style={{ height: 15, width: 15, cursor: 'pointer' }} />
              : <img onClick={switchLanguage} src={en} alt='iconA' style={{ height: 15, width: 15, cursor: 'pointer' }} />}
          </div>
        </div>
      </div>
    </div>

  );
}

export default Footer;