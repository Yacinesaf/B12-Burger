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
    <div className='footer'>
      <div className='container-fluid px-4 px-md-5 pt-5'>
        <div className='row align-items-center p-0 px-2 px-md-5'>
          <div className='col-auto pb-5 px-0 d-none d-sm-block'>
            <img src={logo} alt='logo' className='logoFooter' />
          </div>
          <div className='col-1 d-none d-md-block' />
          <div className='col-12 col-md-9' style={{ display: 'flex' }}>
            <div className='ourLinks'>
              <p className='footerTitles'>{isEnglish ? 'Our Links' : 'Nos Liens'}</p>
              <p className='footerText'>{isEnglish ? 'About us' : 'A propos'}</p>
              <p className='footerText'>{isEnglish ? 'Contact' : 'Contacter'}</p>
              <p className='footerText'>Burgers</p>
            </div>
            <div className='ourInfo'>
              <p className='footerTitles'>{isEnglish ? 'Our info' : 'Information'}</p>
              <p className='footerText'>1738 Boulevard Curé-Labelle, Laval, QC H7T 1L2</p>
              <p className='footerText'>(450)-688-0404</p>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={instagram} height={32} width={32} alt='insta' />
                <img src={facebook} height={32} width={32} alt='fb' style={{ margin: '0px 20px' }} />
                <img src={ubereats} alt='ue' style={{ border: 'white 2px solid', borderRadius: 5, height: 30, width: 30 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid p-3 px-5'>
        <div className='divider' />
        <div className='row p-3 align-items-center'>
          <p style={{ margin: 0, flexGrow: 1 }}>{isEnglish ? 'Copyright © 2020 B12 Burger All rights reserved.' : "Droit d'auteur © 2020 B12 Burger tous droits réservés."}</p>
          <div style={{display : 'flex', alignItems : 'center'}}>
            {isEnglish ? <img onClick={switchLanguage} src={fr} alt='iconA' style={{ height: 25, width: 25, cursor: 'pointer' }} />
              : <img onClick={switchLanguage} src={en} alt='iconA' style={{ height: 25, width: 25, cursor: 'pointer' }} />}
            {isEnglish ? <p style={{margin : 0, paddingLeft : 5}}>Français</p> : <p style={{margin : 0, paddingLeft : 5}}>English</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;