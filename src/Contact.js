import React from 'react';

function Contact(props) {
  return (
    <div className='container-fluid p-0 contactBg'>
      <div className='row'>
        <div className='col-12'>
          <h1>Contact us</h1>
        </div>
        <div className='col-6'>
          <form>
            <label for='emailHeader'>Email adress</label>
            <input type='text' id='emailHeader' placeholder='Enter your e-mail' />
            <label for="message">Your message</label>
            <textarea class="form-control" id="message" rows="3" />
          </form>
          <button></button>
        </div>
      </div>
    </div>
  );
}

export default Contact;