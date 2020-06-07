import React from 'react';
import contact from './assets/contact.svg'

function Contact(props) {
  return (
    <div className='container-fluid p-0 contactBg'>
      <div className='row m-0 pl-5 align-items-center' style={{ paddingTop: 200 }}>
        <div className='col-5 d-block'>
          <form style={{ display: 'block' }}>
            <label for='emailHeader'>Email adress</label>
            <br />
            <input className='email' type='text' id='emailHeader' placeholder='Enter your e-mail' />
            <br />
            <label htmlFor="message">Message</label>
            <textarea placeholder='Type your message here...' id="message" className='textarea' />
          </form>
          <button className='contactbtn'>Submit</button>
        </div>
        <div className='col-6 p-5'>
          <img src={contact} alt='illustration' style={{width : '100%'}} />
        </div>
      </div>
    </div>
  );
}

export default Contact;