import React from 'react';

function Contact(props) {
  return (
    <div className='container-fluid p-0 contactBg'>
      <div className='row m-0 align-items-center'>
        <div className='col-12 p-0 m-0'>
          <h1 className='title'>Contact us</h1>
        </div>
        <div className='col-6 d-block'>
          <form style={{ display: 'block' }}>
            <label for='emailHeader'>Email adress</label>
            <input type='text' id='emailHeader' placeholder='Enter your e-mail' />
            <label htmlFor="message">Your message</label>
            <textarea id="message" className='textarea' />
          </form>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;