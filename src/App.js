import React, { useState } from 'react';
import Navbar from './Navbar';
import './styles.css'
import en from './assets/en.png'
import fr from './assets/fr.png'

function App() {
  const [isEnglish, setIsEnglish] = useState(true);

  return (
    <div className='backGradient'>
      {isEnglish ? <img onClick={() => setIsEnglish(!isEnglish)} src={fr} alt='iconA' style={{ position: 'absolute', height: 15, width: 15, right: 50, top: 30, cursor: 'pointer' }} />
        : <img onClick={() => setIsEnglish(!isEnglish)} src={en} alt='iconA' style={{ position: 'absolute', height: 15, width: 15, right: 50, top: 30, cursor: 'pointer' }} />}
      <div className='landingPageBackground'>
        <Navbar isEnglish={isEnglish} />
      </div>
    </div>
  );
}

export default App;
