import React from 'react';
import phoneIcon from './assets/phone.png'
import locationIcon from './assets/location.png'
import instagram from './assets/instagram.png'
import facebook from './assets/facebook.png'
import ubereats from './assets/UE_Logo_Stacked_RGB_White@2x.png'

function Contact({ isEnglish }) {
  return (
    <div className='container-fluid contactBg'>
      <h3 className='contactTitle d-none d-md-block d-lg-none'>{isEnglish ? 'GET IN TOUCH' : 'CONTACTEZ NOUS'}</h3>
      <div className='row m-0 align-items-start justify-content-xl-between justify-content-center contactRow'>
        <div className=' col-11 col-xl-5 d-block p-0'>
          <form style={{ display: 'block' }}>
            <input className='email' type='text' id='emailHeader' placeholder='Enter your e-mail' />
            <textarea placeholder='Type your message here...' id="message" className='textarea' />
          </form>
          <button className='contactbtn'>Submit</button>
        </div>
        <div className="map-container col-11 col-xl-5">
          <div className='d-none d-sm-block'>
            <div style={{ display: 'flex', alignItems: 'flex-end', paddingBottom: 15 }}>
              <img src={locationIcon} alt='locationIcon' height={20} width={20} />
              <p style={{ margin: 0, paddingLeft: 15 }}>3253  James Street, Burnaby, British Columbia, V5G 4W7</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', paddingBottom: 15 }}>
              <img src={phoneIcon} alt='phoneIcon' height={20} width={20} />
              <p style={{ margin: 0, paddingLeft: 15 }}>(778)-222-2679</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', paddingBottom: 15 }}>
              <img src={instagram} height={24} width={24} alt='insta' />
              <img src={facebook} height={24} width={24} alt='fb' style={{ margin: '0px 20px' }} />
              <a target="_blank" rel="noopener noreferrer" href='https://www.ubereats.com/ca/montreal/food-delivery'>
                <img src={ubereats} alt='ue' style={{ border: 'white 1px solid', borderRadius: 5, height: 23, width: 23 }} />
              </a>
            </div>
          </div>
          <iframe
            title='map'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.1343454182393!2d-123.02173778413606!3d49.25489948065951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb3311ab1d2946d99!2sJames%20Street%20Caf%C3%A9%20%26%20Grill!5e0!3m2!1sen!2sca!4v1597864300781!5m2!1sen!2sca"
            width='100%' height="80%" frameBorder="0" style={{ border: 0 }} allowFullScreen="" ariaHidden="false" tabIndex="0"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;