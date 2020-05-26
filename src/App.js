import React, { useState } from 'react';
import Navbar from './Navbar';
import './styles.css'
import en from './assets/en.png'
import fr from './assets/fr.png'
import LandingPageText from './LandingPageText';
import burgerZoom from './assets/2ndPageImage.jpg'
import video from './assets/video.mp4'
import big from './assets/big.png'
import tasty from './assets/tasty.png'
import original from './assets/original.png'
import Footer from './Footer';

function App() {
  const [isEnglish, setIsEnglish] = useState(true);

  return (
    <div>
      <div className='backGradient'>
        {isEnglish ? <img onClick={() => setIsEnglish(!isEnglish)} src={fr} alt='iconA' style={{ position: 'absolute', height: 15, width: 15, right: 50, top: 30, cursor: 'pointer' }} />
          : <img onClick={() => setIsEnglish(!isEnglish)} src={en} alt='iconA' style={{ position: 'absolute', height: 15, width: 15, right: 50, top: 30, cursor: 'pointer' }} />}
        <div className='landingPageBackground'>
          <Navbar isEnglish={isEnglish} />
          <LandingPageText isEnglish={isEnglish} />
        </div>
      </div>
      <div>
        <div className='secondPageBg' style={{ position: 'relative' }} >
          <video src={video} controls width={'50%'} style={{ position: "absolute", margin: 'auto', right: 0, left: 0, paddingTop: '10vh' }} />
          <img src={big} alt='big' width={500} />
          <img src={tasty} alt='big' width={500} />
          <img src={original} alt='big' width={500} />
        </div>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
