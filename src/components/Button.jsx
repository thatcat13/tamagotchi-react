import React from 'react';

function Button() {
  const buttonStyle = {
    width: '100px',
    height: '40px',
    borderRadius: '10px',
    backgroundColor: 'lightgrey'
  };
  return(
    <div>
      <button style={buttonStyle}>Feed</button>
      <button style={buttonStyle}>Play</button>
      <button style={buttonStyle}>NapsTime</button>
    </div>
  );
}

export default Button;
