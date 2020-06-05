import React, { useState } from 'react';
import Navbar from './Navbar';
import './styles.css'
import LandingPage from './LandingPage';
import Footer from './Footer';
import './footer.css'
import { Route } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router'

function App() {
  const [isEnglish, setIsEnglish] = useState(true);
  const switchLanguage = () => {
    setIsEnglish(!isEnglish)
  }
  return (
    <div>
      <Navbar isEnglish={isEnglish} />
      <Route exact render={(props) => <LandingPage {...props} isEnglish={isEnglish} />} />
      <div className='divider' />
      <Footer switchLanguage={switchLanguage} isEnglish={isEnglish} />
    </div>
  );
}

export default App;
