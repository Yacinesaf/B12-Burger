import React, { useState } from 'react';
import Navbar from './Navbar';
import './styles.css'
import LandingPage from './LandingPage';
import Footer from './Footer';
import './footer.css'

function App() {
  const [isEnglish, setIsEnglish] = useState(true);
  const switchLanguage = () => {
    setIsEnglish(!isEnglish)
  }
  return (
    <div>
      <Navbar isEnglish={isEnglish} />
      <LandingPage isEnglish={isEnglish} />
      { /* <div className='divider' /> */ }
      {   /*   <div className='footer'>
        <Footer switchLanguage={switchLanguage} isEnglish={isEnglish} />
  */}
    </div>
  );
}

export default App;
