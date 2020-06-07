import React, { useState } from 'react';
import Navbar from './Navbar';
import './styles.css'
import LandingPage from './LandingPage';
import Footer from './Footer';
import './footer.css'
import { Route } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router'
import Contact from './Contact';

function App() {
  const [isEnglish, setIsEnglish] = useState(true);
  const switchLanguage = () => {
    setIsEnglish(!isEnglish)
  }
  return (
    <div>
      <Navbar isEnglish={isEnglish} />
      <Route exact path='/' render={(props) => <LandingPage {...props} isEnglish={isEnglish} />} />
      <Route exact path='/contact' render={(props) => <Contact {...props} isEnglish={isEnglish} />} />
      <div className='divider' />
      <Footer switchLanguage={switchLanguage} isEnglish={isEnglish} />
    </div>
  );
}

export default App;
