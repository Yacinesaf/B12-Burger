import React from 'react';
import video from './assets/video.mp4'
import big from './assets/big.png'
import bigfr from './assets/bigFr.png'
import tastyfr from './assets/tastyFr.png'
import tasty from './assets/tasty.png'
import thumbnail from './assets/thumbnail.png'
import original from './assets/original.png'


function LandingPage({ isEnglish }) {

  return (
    <div>
      <div className='backGradient'>
        <div className='landingPageBackground'>
          <div className='container-fluid' >
            <div className='d-xl-none descriptionTextPadTop' />
            <div style={{ minHeight: '100vh' }} className='row align-items-xl-center'>
              <div className='col-1' />
              {isEnglish ?
                <div className='col-lg-7 col-xl-5'>
                  <p className='descriptionText'>Taste the greatness with our 100% natural ingredients and a fresh 200g beef seasoned and grilled.</p>
                  <p style={{ color: 'white', fontSize: 35, fontWeight: 600 }} >THINK BIG. EAT BIG.</p>
                  <button className='orderButton'>ORDER NOW</button>
                </div>
                :
                <div className='col-4'>
                  <p className='deliveryText'>Goûtez à la grandeur avec nos ingrédients 100% naturels et un bœuf frais 200G assaisonné et grillé.</p>
                  <p style={{ color: 'white', fontSize: 32, fontWeight: 600 }} >PENSER GRAND. MANGER GRAND</p>
                  <button className='orderButton'>COMMANDER</button>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
      <div className='secondPageBg' >
        <div className='container-fluid p-0'>
          <div className='col-12 p-0'>
            <div className='container-fluid p-0'>
              <div className='row justify-content-center'>
                <video controlsList="nodownload" controls src={video} className='videoStyle m-0' poster={thumbnail} />
              </div>
              <div className='row justify-content-center' style={{ paddingTop: 100 }}>
                {isEnglish ? <img src={big} alt='big' className='videoAdjectives' /> : <img src={bigfr} alt='big' className='videoAdjectives' />}
                {isEnglish ? <img className='mx-5 videoAdjectives' src={tasty} alt='big' /> : <img className='mx-5 videoAdjectives' src={tastyfr} alt='big' />}
                <img src={original} alt='big' className='videoAdjectives' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;