import React from 'react';
import { burgerListEn, burgerListFr } from './burgerList'
import SingleBurger from './SingleBurger'
import { useState } from 'react';

function Burgers({ isEnglish }) {
  const [trioClicked, setTrioClicked] = useState(false)
  const [singleClicked, setSingleClicked] = useState(true)

  return (
    <div className='container-fluid burgersPageBg justify-content-center pb-5 burgersContainer'>
      <div className='row align-items-center justify-content-center'>
        <div className='col-8'>
          <div style={{ textAlign: 'center' }}>
            <button onClick={() => { setSingleClicked(!singleClicked); setTrioClicked(false) }} className={singleClicked ? 'burgerButtonsClicked' : 'burgerButtons'}>{isEnglish ? 'Single' : 'Seul'}</button>
            <button onClick={() => { setTrioClicked(!trioClicked); setSingleClicked(false) }} className={trioClicked ? 'burgerButtonsClicked' : 'burgerButtons'}>{isEnglish ? 'Combo' : 'Trio'}</button>
          </div>
          <div className='row align-items-center'>
            {isEnglish ? burgerListEn.map((x, i) => (
              <div key={i} className='col-4 p-4'>
                <SingleBurger trioClicked={trioClicked} burgerObject={x} />
              </div>
            ))
              : burgerListFr.map((x, i) => (
                <div key={i} className='col-4 p-3'>
                  <SingleBurger trioClicked={trioClicked} burgerObject={x} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Burgers;