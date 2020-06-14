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
      <div className='container-fluid landingPageBackground' >
        <div style={{ minHeight: 'inherit' }} className='row mx-0 align-items-xl-center justify-content-center'>
          <div className='col-11 pl-lg-4'>
            <p className='headline'>
              {isEnglish ? 'Taste the greatness with our 100% natural ingredients and a fresh 200g beef seasoned and grilled.'
                : 'Goûtez à la grandeur avec nos ingrédients 100% naturels et un bœuf frais 200G assaisonné et grillé.'}
            </p>
            {isEnglish ? <p className='slogan'>THINK BIG. EAT BIG.</p> : <p className='slogan'>PENSER GRAND.<br /> MANGER GRAND.</p>}


            <a target="_blank" rel="noopener noreferrer" href='https://www.ubereats.com/ca/montreal/food-delivery/b12-burger-halal/0AwhUHFcTiiUozsVCXjFXQ'>
              <button className='orderButton'>{isEnglish ? 'ORDER NOW' : 'COMMANDER'}</button>
            </a>
          </div>
        </div>
      </div>
      <div className='container-fluid p-0 secondPageBg'>
        <div className='col-12 p-0'>
          <div className='container-fluid p-0'>
            <div className='row mx-0 justify-content-center'>
              <div className='col-11 col-sm-10 col-xl-6'>
                <video controlsList="nodownload" controls src={video} className='videoStyle m-0' poster={thumbnail} />
              </div>
            </div>
            <div className='row mx-0 justify-content-center videoAdjectivesContainer'>
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
  );
}

export default LandingPage;