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
            <div style={{ minHeight: '100vh' }} className='row align-items-xl-center'>
              <div className='col-1' />
              <div className='col-lg-7 col-xl-5'>
                <p className='descriptionText'>
                  {isEnglish ? 'Taste the greatness with our 100% natural ingredients and a fresh 200g beef seasoned and grilled.'
                    : 'Goûtez à la grandeur avec nos ingrédients 100% naturels et un bœuf frais 200G assaisonné et grillé.'}
                </p>
                <p className='slogan'>{isEnglish ? 'THINK BIG. EAT BIG.' : 'PENSER GRAND. MANGER GRAND.'}</p>
                <button className='orderButton'>{isEnglish ? 'ORDER NOW' : 'COMMANDER'}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='secondPageBg' >
        <div className='container-fluid p-0'>
          <div className='col-12 p-0'>
            <div className='container-fluid p-0'>
              <div className='row mx-0 justify-content-center'>
                <div className='col-11 col-sm-10 col-xl-6'>
                  <video controlsList="nodownload" controls src={video} className='videoStyle m-0' poster={thumbnail} />
                </div>
              </div>
              <div className='row mx-0 justify-content-center' style={{ paddingTop: 100 }}>
                <div className='col-10 col-sm-8 col-xl-3 py-3'>
                  <img src={isEnglish ? tasty : tastyfr} alt='tasty' style={{ width: '100%' }} />
                </div>
                <div className='col-10 col-sm-8 col-xl-3 py-3'>
                  <img src={original} alt='original' style={{ width: '100%' }} />
                </div>
                <div className='col-10 col-sm-8 col-xl-3 py-3'>
                  <img src={isEnglish ? big : bigfr} alt='big' style={{ width: '100%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;