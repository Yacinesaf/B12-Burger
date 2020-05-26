import React from 'react';
import './footer.css'
import instagram from './assets/instagram.png'
import facebook from './assets/facebook.png'
import ubereats from './assets/UE_Logo_Stacked_RGB_White@2x.png'
import logo from './assets/logo.png'
function Footer(props) {
  return (
    <div className='footer_container'>
      <div>
        <h1>Our Links</h1>
        <p>About us</p>
        <p>Contact</p>
        <p>Burgers</p>
      </div>
      <div style={{ paddingLeft: 300 }}>
        <h1>Our info</h1>
        <p>1738 Boulevard Curé-Labelle, Laval, QC H7T 1L2</p>
        <p>(450)-688-0404</p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={instagram} height={32} width={32} alt='insta' />
          <img src={facebook} height={32} width={32} alt='fb' style={{ padding: '0px 20px' }} />
          <img src={ubereats} alt='ue' style={{ border: 'white 1px solid', borderRadius: 5, height: 31, width: 31 }} />
        </div>
      </div>
    </div>
  );
}

export default Footer;