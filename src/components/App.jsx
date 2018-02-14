import React from 'react';
import House from './House';

function App() {
  return(
    <div>
      <style global jsx>
        {`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: 'Roboto Mono', monospace;
        }

        `}
      </style>

      <House />


    </div>
  );
}

export default App;
