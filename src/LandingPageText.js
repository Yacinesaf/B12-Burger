import React from 'react';

function LandingPageText({ isEnglish }) {
  return (
    <div>
      {isEnglish ?
        <div style={{ padding: 100, width: '30%' }}>
          <p className='deliveryText'>Taste the greatness with our 100% natural ingredients and a fresh 200G beef seasoned and grilled.</p>
          <p style={{ color: 'white', fontSize: 35, fontWeight: 600 }} >THINK BIG. EAT BIG.</p>
          <button className='orderButton'>ORDER NOW</button>
        </div>
        :
        <div style={{ padding: 100, width: '30%' }}>
          <p className='deliveryText'>Goûtez à la grandeur avec nos ingrédients 100% naturels et un bœuf frais 200G assaisonné et grillé.</p>
          <p style={{ color: 'white', fontSize: 32, fontWeight: 600 }} >PENSER GRAND. MANGER GRAND</p>
          <button className='orderButton'>COMMANDER</button>
        </div>
      }
    </div>
  );
}

export default LandingPageText;