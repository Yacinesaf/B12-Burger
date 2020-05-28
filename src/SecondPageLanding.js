import React from 'react';
import video from './assets/video.mp4'
import big from './assets/big.png'
import bigfr from './assets/bigFr.png'
import tastyfr from './assets/tastyFr.png'
import tasty from './assets/tasty.png'
import thumbnail from './assets/thumbnail.png'
import original from './assets/original.png'

function SecondPageLanding({ isEnglish }) {
  return (
    <div className='secondPageBg' >
      <div className='container-fluid'>
        <div className='col-12'>
          <div className='container-fluid'>
            <div className='row justify-content-center'>
              <video controlsList="nodownload"  controls src={video} width={'50%'} style={{ margin: 'auto', paddingTop: '10vh', cursor: 'pointer' }} poster={thumbnail} />
            </div>
            <div className='row justify-content-center' style={{ paddingTop: 100 }}>
              {isEnglish ? <img src={big} alt='big' width={350} /> : <img src={bigfr} alt='big' width={350} />}
              {isEnglish ? <img className='mx-5' src={tasty} alt='big' width={350} /> : <img className='mx-5' src={tastyfr} alt='big' width={350} />}
              <img src={original} alt='big' width={350} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondPageLanding;