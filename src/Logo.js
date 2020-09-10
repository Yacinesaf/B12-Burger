import React from 'react';

function Logo({ scrolled, menuIsClicked }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 className={scrolled || menuIsClicked ? 'logoWhite' : 'logo'}>PLANET</h1>
      <h1 className={scrolled || menuIsClicked ? 'logoWhite' : 'logo'}>BURGER</h1>
    </div>
  );
}

export default Logo;