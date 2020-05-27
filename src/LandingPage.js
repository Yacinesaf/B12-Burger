import React from 'react';

function LandingPage({ isEnglish }) {
  return (
    <div className='backGradient'>
      <div className='landingPageBackground'>
        <div className='container-fluid' >
          <div style={{ minHeight: '100vh' }} className='row align-items-center'>
          <div className='col-1'></div>
            {isEnglish ?
              <div className='col-4'>
                <p className='deliveryText'>Taste the greatness with our 100% natural ingredients and a fresh 200G beef seasoned and grilled.</p>
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
    </div >
  );
}

export default LandingPage;