import React from 'react';

function Logo({ scrolled }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 className={scrolled ? 'logoBlack' : 'logo'}>PLANET</h1>
      <h1 className={scrolled ? 'logoBlack' : 'logo'}>BURGER</h1>
    </div>
  );
}

export default Logo;