import React, { useState } from 'react';
import Navbar from './Navbar';
import './styles.css'
import en from './en.png'
import fr from './fr.png'

function App() {
  const [isEnglish, setIsEnglish] = useState(true);

  return (
    <div className='backGradient'>
      {isEnglish ? <img onClick={() => setIsEnglish(!isEnglish)} src={fr} alt='iconA' style={{ position: 'absolute', height: 15, width: 25, right: 50, top: 33, cursor: 'pointer' }} />
        : <img onClick={() => setIsEnglish(!isEnglish)} src={en} alt='iconA' style={{ position: 'absolute', height: 25, width: 25, right: 50, top: 29, cursor: 'pointer' }} />}
      <div className='landingPageBackground'>
        <Navbar isEnglish={isEnglish} />
      </div>
    </div>
  );
}

export default App;
