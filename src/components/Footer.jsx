import React from 'react';


function Footer() {
  const footerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const deathStyles = {
    marginTop: '20px'
  };

  return(
    <div style={footerStyles}>
      <h1>Lil Dude Needs You! Take care of him now, dernit!</h1>
      <h2>Feed'm fuud and he gits <strong>10</strong> health points</h2>
      <h2>Play wif him and he gits <strong>5</strong> health points</h2>
      <h2>Put him nite nite and he gits <strong>30</strong> health points</h2>
      <h2 style={deathStyles}>If you fail, den lil Death will take away lil Dude oh noes!</h2>
    </div>
  );
}

export default Footer;
